#!/usr/bin/env node
// Captura pública de um concorrente: home, preços e cadastro.
// Nunca submete formulários e não tenta contornar bloqueios anti-bot.
//
// Uso:
//   node capture.mjs --url https://exemplo.com --slug exemplo --out competitor-research/pasta
//   [--pricing https://exemplo.com/precos] [--signup https://exemplo.com/signup]
//
// Saída: <out>/assets/<slug>-{home,pricing,signup}.png e <out>/data/<slug>.json

import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, arr) => {
    if (a.startsWith('--')) acc.push([a.slice(2), arr[i + 1]]);
    return acc;
  }, [])
);
if (!args.url || !args.slug || !args.out) {
  console.error('Uso: node capture.mjs --url <url> --slug <slug> --out <pasta> [--pricing <url>] [--signup <url>]');
  process.exit(1);
}

// Resolve o playwright a partir do diretório de trabalho (onde foi instalado),
// não da pasta da skill.
let chromium;
try {
  ({ chromium } = createRequire(path.join(process.cwd(), 'noop.js'))('playwright'));
} catch {
  console.error('Playwright não encontrado. Rode: npm i -D playwright && npx playwright install chromium');
  process.exit(2);
}

const assetsDir = path.join(args.out, 'assets');
const dataDir = path.join(args.out, 'data');
fs.mkdirSync(assetsDir, { recursive: true });
fs.mkdirSync(dataDir, { recursive: true });

const PRICING_RE = /pric|plans?\b|planos|pre[çc]os|tarifs|precios/i;
const SIGNUP_RE = /sign ?up|get started|start (for )?free|try (it )?(for )?free|create (an )?account|register|cadastr|criar conta|come[çc]ar|teste gr[áa]tis|experimente/i;
const BLOCK_RE = /captcha|verify you are (a )?human|are you a robot|access denied|just a moment|attention required|unusual traffic|cf-chl|bot detection/i;

const result = {
  slug: args.slug,
  url: args.url,
  collected_at: new Date().toISOString(),
  pages: {},
  blocked: [],
};

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'pt-BR' });
const page = await context.newPage();

async function visit(kind, url) {
  const entry = { url, status: null, screenshot: null, error: null };
  try {
    const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
    entry.status = resp ? resp.status() : null;
    entry.final_url = page.url();
    entry.title = await page.title();
    const bodyText = (await page.evaluate(() => document.body?.innerText || '')).trim();
    if ((entry.status && [401, 403, 429, 503].includes(entry.status)) || BLOCK_RE.test(bodyText.slice(0, 3000)) || BLOCK_RE.test(entry.title)) {
      const reason = entry.status && entry.status >= 400 ? `HTTP ${entry.status}` : 'verificação anti-bot detectada';
      result.blocked.push({ page: kind, url, reason });
      entry.blocked = reason;
    }
    const file = path.join(assetsDir, `${args.slug}-${kind}.png`);
    // Página inteira, mas limitada para não gerar imagens gigantes.
    const height = Math.min(await page.evaluate(() => document.body?.scrollHeight || 900), 6000);
    await page.screenshot({ path: file, clip: { x: 0, y: 0, width: 1440, height }, fullPage: true });
    entry.screenshot = path.relative(args.out, file).replaceAll('\\', '/');
    entry.text = bodyText.slice(0, 15000);
  } catch (e) {
    entry.error = String(e.message || e).split('\n')[0];
  }
  result.pages[kind] = entry;
  return entry;
}

async function links() {
  return page.evaluate(() =>
    [...document.querySelectorAll('a[href], button')].map((el) => ({
      text: (el.innerText || el.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 80),
      href: el.href || null,
      tag: el.tagName.toLowerCase(),
    })).filter((l) => l.text)
  );
}

// 1. Home
const home = await visit('home', args.url);
if (!home.error) {
  Object.assign(home, await page.evaluate(() => ({
    meta_description: document.querySelector('meta[name="description"]')?.content || null,
    h1: [...document.querySelectorAll('h1')].map((h) => h.innerText.trim()).filter(Boolean).slice(0, 3),
    h2: [...document.querySelectorAll('h2')].map((h) => h.innerText.trim()).filter(Boolean).slice(0, 10),
  })));
  const all = await links();
  home.cta_candidates = all.filter((l) => SIGNUP_RE.test(l.text) || /demo|sales|vendas|contato/i.test(l.text)).slice(0, 12);
  const origin = new URL(page.url()).origin;
  const sameSite = (l) => l.href && l.href.startsWith(origin);
  args.pricing ||= all.find((l) => sameSite(l) && (PRICING_RE.test(l.text) || PRICING_RE.test(new URL(l.href).pathname)))?.href || `${origin}/pricing`;
  args.signup ||= all.find((l) => l.href && SIGNUP_RE.test(l.text))?.href || null;
}

// 2. Preços
if (args.pricing) await visit('pricing', args.pricing);

// 3. Cadastro / entrada (apenas observação — nada é preenchido ou submetido)
if (args.signup) {
  const signup = await visit('signup', args.signup);
  if (!signup.error) {
    Object.assign(signup, await page.evaluate(() => {
      const fields = [...document.querySelectorAll('input, select, textarea')]
        .filter((i) => !['hidden', 'submit', 'button'].includes(i.type))
        .map((i) => ({
          type: i.type || i.tagName.toLowerCase(),
          name: i.name || i.id || null,
          label: (i.labels?.[0]?.innerText || i.placeholder || i.getAttribute('aria-label') || '').trim().slice(0, 60),
          required: i.required,
        }));
      const text = document.body?.innerText || '';
      return {
        form_fields: fields,
        sso: ['Google', 'Microsoft', 'Apple', 'GitHub', 'Facebook', 'LinkedIn', 'Slack'].filter((p) => new RegExp(`(continue|sign (up|in)|entrar|continuar|log ?in) with ${p}|${p}`, 'i').test(
          [...document.querySelectorAll('a, button')].map((b) => b.innerText).join(' ')
        )),
        asks_credit_card: /card number|n[úu]mero do cart[ãa]o|credit card|cart[ãa]o de cr[ée]dito/i.test(text) || fields.some((f) => /cc-|card/i.test(f.name || '')),
        no_card_claim: /no credit card|sem cart[ãa]o|não precisa de cart[ãa]o/i.test(text),
      };
    }));
  }
} else {
  result.pages.signup = { error: 'Nenhum link de cadastro identificado na home — verificar manualmente.' };
}

await browser.close();
fs.writeFileSync(path.join(dataDir, `${args.slug}.json`), JSON.stringify(result, null, 2));

const summary = Object.entries(result.pages).map(([k, v]) => `${k}: ${v.error ? 'ERRO ' + v.error : (v.blocked ? 'BLOQUEADO ' + v.blocked : 'ok ' + (v.screenshot || ''))}`);
console.log(`[${args.slug}]\n  ` + summary.join('\n  '));
