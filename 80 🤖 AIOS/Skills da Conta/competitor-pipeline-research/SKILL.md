---
name: competitor-pipeline-research
description: Analisa concorrentes de um setor informado, mapeando o funil (aquisição, onboarding, ativação, funcionalidades-chave e preços), captura screenshots e gera um relatório comparativo em Markdown com implicações para o produto. Use sempre que a Julia pedir pesquisa de concorrentes, benchmark, análise competitiva, comparação de preços e planos, "quem são os players de X", teardown de onboarding ou de funil, mesmo que ela só cite um setor ("apps de agendamento", "sistemas para salão") ou cole uma lista de URLs sem dizer "concorrente". Also triggers for "competitor analysis", "competitive teardown", "compare pricing of X, Y, Z".
---

# Pesquisa de concorrentes pelo funil

## Índice
1. Por que existe
2. Entradas
3. Estrutura de saída
4. Fluxo de trabalho
5. Segurança e limites
6. Arquivos de apoio

## 1. Por que existe

Uma análise competitiva comparável: cada produto visto pela mesma lente, o funil que um usuário novo atravessa da home até pagar. O valor está na **comparabilidade** (as mesmas perguntas para todos) e na **evidência** (screenshot ou trecho de página para cada afirmação). Opinião sem evidência vale pouco para decisão de produto.

## 2. Entradas

- **Setor ou categoria** (ex.: "sistemas para salão de beleza") → comece pelo passo 1.
- **Lista de 3 a 5 URLs** → vá para o passo 2. Mais de 5: pergunte quais priorizar. Menos de 3: siga e avise que a comparação fica mais rasa.

Se a Julia mencionar o próprio produto (Trinks ou outro), registre: as oportunidades ficam muito mais úteis quando comparadas contra ele. Sem menção, escreva para um entrante genérico no setor.

## 3. Estrutura de saída

```
competitor-research/<setor-slug>-<AAAA-MM-DD>/
├── report.md          # entregável final
├── assets/            # screenshots (<slug>-home.png, <slug>-pricing.png, <slug>-signup.png …)
└── data/              # JSON bruto por concorrente (saída do script de captura)
```

No GLADIS, crie dentro da pasta do projeto ou da área a que a pesquisa pertence. Os screenshots ficam em `assets/`, ao lado do relatório, para os links relativos funcionarem em qualquer visualizador.

## 4. Fluxo de trabalho

### Passo 1: mapeamento (quando vier só o setor)

Identifique os 5 principais players com busca na web. Boas fontes: G2, Capterra, Product Hunt, artigos "melhores X de <ano>" e, no Brasil, Reclame Aqui, lojas de aplicativo e comparativos locais. Prefira quem aparece em várias fontes a um único ranking patrocinado.

Monte um mix útil, olhando além dos concorrentes diretos:
- **Diretos:** resolvem o mesmo problema, para o mesmo público, do mesmo jeito (o líder e 2 ou 3 desafiantes).
- **Indiretos:** resolvem o mesmo problema de outro jeito.
- **Substitutos:** o que as pessoas usam quando não usam nenhum produto (planilha, caderno, WhatsApp, fazer à mão). Muitas vezes é o concorrente real.
- **Nicho ou emergente:** um player com proposta diferente; é onde costumam aparecer as ideias de diferenciação.

Mostre a lista (nome, URL, tipo, uma linha de justificativa). Se a conversa for interativa, dê chance de trocar algum antes de navegar; se ela pediu para seguir direto, siga.

### Passo 2: navegação e captura

O script empacotado faz a parte repetitiva (home, preços, cadastro, detecção de bloqueio) com Playwright:

```bash
# uma vez por máquina/projeto, se o Playwright ainda não estiver disponível
npm i -D playwright && npx playwright install chromium

# por concorrente
node <caminho-da-skill>/scripts/capture.mjs --url https://exemplo.com --slug exemplo --out competitor-research/<pasta>
```

Ele salva screenshots em `assets/` e um `data/<slug>.json` com título, meta description, H1/H2, CTAs, URL e texto da página de preços, campos do cadastro, botões de SSO, campo de cartão e um campo `blocked` com o motivo quando o site barra o acesso. **Nunca submete formulários.**

`npx playwright install chromium` baixa uns 150 MB; avise antes de rodar. Se não der para instalar, use o navegador da sessão para as mesmas páginas, `npx playwright screenshot --full-page <url> <arquivo>` só para as capturas, e WebFetch para o texto.

O script é ponto de partida. Depois dele, leia o JSON e navegue o que faltar: features, templates, docs de "primeiros passos", demo, vídeo de onboarding, changelog. Capture extras quando sustentarem uma afirmação.

### Passo 3: análise do funil

Responda às cinco etapas para cada concorrente com a rubrica de `references/funnel-rubric.md` (leia antes; ela define as perguntas e a escala de barreira de 0 a 3):

1. **Aquisição:** proposta de valor, público-alvo implícito, CTA primário.
2. **Onboarding:** uso sem conta, cadastro, cartão exigido, paywall, "fale com vendas".
3. **Ativação:** tempo até o primeiro valor e complexidade da interface.
4. **Funcionalidades-chave:** core UX e diferenciais reais (não a lista inteira).
5. **Precificação:** planos, preço de entrada, limites do gratuito, eixo de cobrança.

Marque cada afirmação como **observado** (viu na página ou no print) ou **inferido** (docs, vídeos, reviews). Ativação quase sempre é inferida quando o produto exige conta; tudo bem, desde que rotulado.

**Reviews contam como evidência de pontos fracos.** O que clientes reclamam (G2, Reclame Aqui, lojas de app) vale mais que o que o marketing promete. Seja honesta sobre os pontos fortes dos concorrentes: análise que sempre mostra o próprio produto ganhando não convence ninguém.

### Passo 4: captura de mídia

No mínimo, por concorrente: home (acima da dobra), preços e a primeira tela do fluxo de entrada. Nomeie `<slug>-<página>.png`. Se uma captura falhar, siga e registre a ausência.

### Passo 5: relatório

Escreva `report.md` seguindo `references/report-template.md`. Seções obrigatórias: resumo executivo, matriz comparativa do funil (tabela e mapa de barreiras), análise por concorrente com imagens, lacunas e oportunidades, e **implicações para o produto** (o que fazer, onde diferenciar e onde só igualar). Caminhos relativos para imagens (`assets/x.png`).

Ao final, diga onde está o relatório e resuma em 3 a 5 linhas os achados mais acionáveis.

## 5. Segurança e limites

- **Não crie contas** em serviços de terceiros sem permissão explícita da Julia naquela conversa. Mesmo com permissão, quem digita senha e dados pessoais é ela. Sem conta, analise o que é público: páginas de cadastro podem ser abertas e fotografadas sem envio.
- **Não contorne bloqueios.** CAPTCHA, "verify you are human", 403/429 ou desafio Cloudflare: não tente burlar (nada de trocar user-agent, proxy ou resolver o desafio). Registre o limite de forma neutra e use fontes públicas alternativas (busca, reviews, docs, Wayback Machine).
- **Preços mudam.** Registre a data da coleta, a moeda e a região vista.
- Algumas páginas por concorrente, sem varredura em massa.

## 6. Arquivos de apoio

| Arquivo | Conteúdo |
|---|---|
| [funnel-rubric.md](references/funnel-rubric.md) | Perguntas de cada etapa e escala de barreira |
| [report-template.md](references/report-template.md) | Modelo do relatório |
| `scripts/capture.mjs` | Captura de home, preços e cadastro com Playwright. É código: o Obsidian não abre, mas o Claude usa |
