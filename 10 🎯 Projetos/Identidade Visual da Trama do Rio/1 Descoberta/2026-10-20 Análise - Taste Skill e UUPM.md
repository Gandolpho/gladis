---
tipo: documento
contexto: pessoal
status: aguardando
atualizado: 2026-10-20
tags: [tema/ia, tema/product-design]
---

# Análise · Taste Skill e UI UX Pro Max (UUPM)

Pesquisa autorizada pela Julia para 2026-10-20. Só leitura: nada foi instalado, copiado ou alterado no Catálogo, nas Regras ou nas configurações. Projeto: [[Identidade Visual da Trama do Rio]]. Fontes: os dois sites e os dois repositórios do GitHub, lidos por resumo (WebFetch). O que o site afirma e eu não consegui conferir está marcado _(declarado pelo site)_.

## Recomendação (resumo)

1. **Taste Skill: não instalar de novo.** Boa parte dela você já tem. `design-taste-frontend`, `minimalist-ui`, `industrial-brutalist-ui`, `redesign-existing-projects`, `stitch-design-taste` e `brandkit` são, pelos nomes e descrições, as mesmas skills do pacote (_inferência_: não comparei o texto). O que falta nela é pouco: `image-to-code-skill`, `soft-skill` e os `imagegen-frontend-*`.
2. **UUPM: é a única que acrescenta algo novo de verdade**, uma base de consulta com estilos, paletas e pares de fontes. Mas ela decide por você, e a Trama já tem paleta e fontes decididas. Vale como **teste opcional**, não como instalação definitiva.
3. **Causa provável do visual genérico (_inferência_):** falta de um brief de marca em formato que o gerador de código obedeça (tokens, regras de uso, proibições), mais skills de estilo que disputam entre si. Isso se resolve com um arquivo no projeto, sem instalar nada.
4. **Decisão dela:** testar antes e depois com o brief de marca (custo baixo, plano na seção 6) e só então decidir sobre o UUPM.

## 1. Taste Skill (tasteskill.dev)

**O que é.** Um conjunto de 13 skills abertas (SKILL.md) "anti-slop" para frontend, para Claude Code, Codex, Cursor, Gemini CLI, Lovable, v0 e outros.

**Quem mantém e confiabilidade.** Leon Lin e blueemi (@lexnlin, @blueemi99), repositório `Leonxlnx/taste-skill`. Licença MIT. Cerca de 99,8 mil estrelas, 245 commits, changelog na versão v2.1. Projeto popular e aberto, com patrocinadores listados e um app desktop gratuito em beta (TasteCode). Não vi data do último commit. Os mantenedores são pessoas físicas, sem empresa por trás.

**O que ensina na prática.**
- A v2 (padrão, instala como `design-taste-frontend`) lê o briefing, infere a direção (setor, público, clima, intensidade de movimento, família de layout), decide entre Material, shadcn, Tailwind ou CSS puro, tem protocolo de modo escuro, auditoria antes de redesenhar e checagem final obrigatória.
- As outras 12: `taste-skill-v1`, `gpt-tasteskill`, `redesign-skill`, `image-to-code-skill` (gera referência visual primeiro e depois implementa), `output-skill` (sem placeholders), estilos `soft`, `minimalist`, `brutalist`, `stitch-skill` (exporta DESIGN.md), `imagegen-frontend-web`, `imagegen-frontend-mobile` e `brandkit`.

**Instalação e acionamento.** `npx skills add Leonxlnx/taste-skill --skill design-taste-frontend`, ou `/plugin marketplace add Leonxlnx/taste-skill` seguido de `/plugin install taste-skill@taste-skill`, ou `install.sh` (cria links simbólicos). Não tem comando próprio: o agente carrega a skill ao mexer em UI, pela descrição.

**Pontos fortes.** Foca exatamente no problema dela. A parte de inferir direção e a checagem final são o que mais combate o "cara de template". Tem fluxo de redesenho com auditoria.

**Limites e riscos.**
- Ela infere a direção a partir do briefing. Se o briefing for fraco, ela inventa uma direção "boa em geral", que é o genérico de novo. Em marca com identidade já aprovada, isso atrapalha: o aprendizado de 2026-10-14 (moodboard aprovado é restrição, não inspiração) vale aqui também.
- Há scripts (`inspect.mjs`, que exige Node 22+ e um Chrome/Edge, e `install.sh`). Não li o código. Antes de instalar a versão de plugin, o certo é abrir o repositório e ler esses arquivos.
- Custo de tokens: o corpo só é lido quando a skill dispara, mas a v2 é longa _(tamanho não informado)_. Se várias skills de estilo dispararem juntas, o custo multiplica e as instruções se contradizem.

**Combate o visual genérico?** Sim, é a melhor das duas para isso, mas você já tem a versão principal instalada.

## 2. UI UX Pro Max (uupm.cc)

**O que é.** Uma "base de inteligência de design" pesquisável: estilos de UI, paletas, pares de fontes, tipos de gráfico, padrões de landing e diretrizes de UX. Dado um pedido, ela busca na base, recomenda e gera código.

**Quem mantém e confiabilidade.** NextLevelBuilder (empresa/equipe, "A nano project from NextLevelBuilder Core Team"), repositório `nextlevelbuilder/ui-ux-pro-max-skill`. MIT segundo o repositório (o site não diz). Cerca de 138 mil estrelas, 277 commits, 40 issues e 51 PRs abertos. A popularidade é alta, mas o site é de divulgação, com números inconsistentes entre seções (57 estilos no bloco principal e "45+ more"; 56 e "50+" pares de fontes; 29 e "14" padrões de landing). Trate os números como marketing.

**O que faz.** Fluxo declarado: interpreta o pedido, consulta a base em domínios (produto, estilo, tipografia, cor, landing, UX), gera código e aplica checklist (ícones SVG, hover, contraste no escuro, responsivo).
- **Números declarados:** 57 estilos de UI (Glassmorphism, Neumorphism, Minimalism, Brutalism, Aurora...), 95 paletas por tipo de produto, 56 pares de fontes (Space Grotesk, Inter, Playfair...), 24 tipos de gráfico, 8 stacks (React, Next, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind).

**Instalação e acionamento.** `/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill` e `/plugin install ui-ux-pro-max@ui-ux-pro-max-skill`; ou `npm install -g ui-ux-pro-max-cli` e `uipro init --ai claude`. Dispara sozinha em pedidos de UI/UX. Um script Python local (`search.py`) faz a busca; o README diz que usa só a biblioteca padrão e não faz chamadas de rede _(declarado, não verificado)_.

**Pontos fortes.** Dá vocabulário concreto (estilo, paleta e fonte por tipo de produto) em vez de adjetivos, e a busca em arquivo evita carregar tudo no contexto, o que ajuda nos tokens.

**Limites e riscos.**
- **Segurança:** a via npm instala um CLI global e escreve em `~/.claude/skills/`; a via plugin é mais contida. Preferir o plugin e ler `scripts/` antes. Há 40 issues abertas e eu não vi o conteúdo delas.
- **Genérico por outra porta:** uma base com paletas e estilos "por tipo de produto" tende a devolver as combinações mais comuns do tipo (SaaS azul, wellness verde-sálvia). Para quem quer algo próprio, isso reforça o problema, a menos que a escolha venha da marca dela.
- Foco em produto digital (landing, dashboard, app). Para a Trama (marca editorial, impressa em casa, com rosa forte, cremes e fontes definidas), o ganho é pequeno. Para os protótipos da Trinks, é um terreno mais natural.

**Combate o visual genérico?** Parcialmente. Dá repertório, não gosto.

## 3. O que ela já tem

| Skill ou plugin | Origem provável | Cobre | Observação |
|---|---|---|---|
| `design-taste-frontend` | Taste Skill v2 | Direção, anti-slop, checagem final | Reenviada à conta em 2026-10-07 (Auditoria). Cópia local foi para o backup |
| `minimalist-ui`, `industrial-brutalist-ui` | Taste Skill (minimalist, brutalist) | Estilos editorial e bruto | Duas pontas opostas, nenhuma é "Trama" |
| `redesign-existing-projects` | Taste Skill (redesign) | Auditoria antes de redesenhar | Útil para mexer em protótipos prontos |
| `stitch-design-taste` | Taste Skill (stitch) | DESIGN.md para Stitch | Não usada no fluxo atual |
| `brandkit` | Taste Skill (brandkit) | Pranchas de marca em imagem | Relevante para a Trama |
| `high-end-visual-design` | Outra fonte | Fontes, espaçamento, sombras, animação "caro" | Pode disputar com a taste |
| `frontend-design` | Anthropic | Direção estética, evita padrões de template | Oficial e enxuta |
| `canvas-design` | Anthropic | Arte estática em PNG/PDF | Bom para peças da Trama |
| `uxkin:no-ui-slop`, `design-skills:design-elevation` | Plugins | Anti-slop e elevação de design | Mais uma camada de regras de estilo |
| `critica-design` | Dela | Crítica depois do fato | Avalia, não gera |

_Origem provável = pelos nomes e descrições na lista de skills da conta. Não comparei o texto linha a linha (inferência)._

**Sobreposição.** As bases de estilo disputam: ao pedir "uma landing", podem disparar `design-taste-frontend`, `frontend-design`, `high-end-visual-design` e `no-ui-slop` juntas, com recomendações diferentes.
**Lacunas.** (a) Nada converte a marca dela em regras que o gerador obedece (tokens, usos, proibições). (b) Nada força gerar uma referência visual antes do código (`image-to-code-skill` faria isso). (c) Nada traz repertório de pares de fontes e paletas fora o que o modelo já conhece (UUPM faria isso).

## 4. Diagnóstico: por que ficou genérico depois do enxugamento

Não consigo ver o que foi desativado no app, e o Catálogo diz que as bases de estilo ainda estão "não auditadas". Então o que segue é inferência:

1. **O que fazia falta não era uma skill de estilo, e sim o brief da marca.** A Trama tem decisões aprovadas (paleta de rosa forte, Fraunces, Pinyon Script, Quicksand, logo recolorido, regras de contraste), mas elas vivem em notas e páginas HTML. Numa sessão nova de código, o modelo não as lê por padrão e cai no meio da estrada.
2. **O enxugamento pode ter tirado a camada que quebrava o padrão**: auditoria antes de gerar, referência visual antes do código e a checagem final. Isso é do tipo de `design-taste-frontend` + `redesign` + `output`. Vale conferir no app se continuam ativas.
3. **Várias skills de estilo juntas anulam umas às outras** e viram a média, que é o genérico. Mais skills não resolvem.
4. **Descrições cortadas.** A Auditoria já registrou que, com muitas skills, a lista corta descrições e piora o acionamento automático. Skill ativa não quer dizer skill disparada.

**Reativar:** se estiverem desligadas, `design-taste-frontend` (já é a v2), `redesign-existing-projects` (para protótipos existentes) e `brandkit` (Trama). Deixar `minimalist-ui` e `industrial-brutalist-ui` desligadas, ou acionar só por nome, porque pedem estilos que a Trama não é.

## 5. Plano de inclusão (só depois do sim dela)

| Item | Onde fica o original | Passos |
|---|---|---|
| **Brief de marca da Trama** (recomendado, é o que mais pesa) | `10 🎯 Projetos/Identidade Visual da Trama do Rio/3 Núcleo da marca/`, arquivo `DESIGN.md` curto | Reunir paleta, fontes, regras de contraste, o que é proibido (gradiente roxo, cards iguais, sombras pesadas...) e amostras aprovadas. Citar nos prompts de qualquer sessão visual. É o formato que o Stitch e a Taste Skill já leem |
| `design-taste-frontend` e companhia | Já instaladas no app. Se quiser original no cofre, `80 🤖 AIOS/Skills da Conta/<nome>/` (Regras, seção 6) | Só reativar. Registrar no Catálogo, em "Ainda não auditadas", a decisão de quais ficam por padrão |
| UUPM (se passar no teste) | Plugin, sem original no cofre; `claude.ai`/plugin no Catálogo | `/plugin marketplace add ...` num projeto de teste, não global. Linha no Catálogo com status `em aprovação` |
| `image-to-code-skill` | Idem | Só se o teste mostrar que referência antes do código ajuda |

**Como acionar com a Trama:** abrir a sessão pedindo "leia o DESIGN.md da Trama e use `design-taste-frontend`; liste as skills de estilo que vão valer antes de começar". Uma skill de estilo por vez.

## 6. Teste curto, antes e depois (baixo custo)

1. Escolher **uma peça pequena** da Trama (a página de uma amostra, como o marcador de página).
2. **Antes:** gerar com as skills como estão, sem brief. Guardar o resultado.
3. **Depois A:** mesmo pedido, apontando o `DESIGN.md` + `design-taste-frontend`, nada mais.
4. **Depois B (opcional):** o mesmo com UUPM instalado só nesse teste.
5. Comparar com 4 perguntas: parece com a Trama? Passa nos contrastes que ela aprovou? Tem algo "de template" (cards iguais, gradiente, sombra pesada)? Dá para usar sem retrabalho? Rodar uma vez cada, sem iterar, para não gastar cota.

## 7. Depende da decisão dela

- Aprovar o `DESIGN.md` da Trama (proposta: eu monto a partir das notas já aprovadas, sem inventar).
- Confirmar no app quais skills de estilo estão ligadas hoje, porque eu não vejo esse estado.
- Testar ou não o UUPM (sim, só em projeto de teste, e só pela via plugin).
- Se a Taste Skill precisa de uma segunda passagem: só se o repositório trouxer algo além do que ela já tem, o que eu confirmaria lendo o `CHANGELOG.md` v2.1.
