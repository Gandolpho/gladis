---
tipo: sistema
contexto: pessoal
status: aguardando
atualizado: 2026-10-08
---

# Auditoria de Skills · 2026-10-08

Inventário de todas as skills instaladas e análise de sobreposição das skills que **executam tarefas**. As skills de estilo de UI ficam fora da análise de sobreposição, a pedido da Julia: são bases de estilo diferentes e devem coexistir. Catálogo oficial: [[Catálogo de Skills]].

> **Onde paramos (2026-10-09):** categorias 1 a 5 concluídas e conferidas no app; 8 resolvida (small-business desativado, falta só registrar). **Categoria 6: análise feita (seção 13), nada alterado.** Faltam suas decisões da seção 13 e o teste visual no [[Laboratório de IA para Design]] (experimento 4). Depois, a categoria 7 (ferramentas). Retomar com "continua a auditoria de skills, decisões da categoria 6" ou "categoria 7". Tarefa: [[Continuar a auditoria de skills (categoria 6)]]. Plugins ativos: factory, uxkin, design-skills, canva, pdf-viewer, figma, slack-by-salesforce, cowork-plugin-management.
## 1. Números

| Origem | Qtd | Quem mantém |
|---|---|---|
| Sua conta (enviadas por você) | 24 | Você |
| Sua conta (padrão da Anthropic) | ~20 | Anthropic (docx, pdf, pptx, xlsx, skill-creator, navegadores...) |
| Cofre (`80 🤖 AIOS/Skills/`) | 1 | Você (`revisao-integridade`) |
| Pasta pessoal `~/.claude/skills/` | 10 | Vercel (React, deploy, guias) |
| Plugins (17 ativos) | ~135 | Terceiros |
| **Total** | **~190** | |

Das suas 24 enviadas: **11 são de autoria sua**, 8 são bases de estilo de UI e 5 são utilitárias de terceiros.

## 2. Suas skills, por grupo

**Autoria sua (tarefas):** `auditoria-consistencia-regras`, `competitor-pipeline-research`, `design-critique-completude`, `figma-component-from-frames`, `figma-doc-cards`, `flow-screens-from-screenshots`, `handoff-documentacao`, `planejamento-julia`, `prompt-prototipagem-ia`, `stress-test-conteudo-layout`, `ux-synthesis` e, no cofre, `revisao-integridade`.

**Estilos de UI (fora da análise de sobreposição):** `design-taste-frontend`, `frontend-design`, `high-end-visual-design`, `industrial-brutalist-ui`, `minimalist-ui`, `redesign-existing-projects`, `stitch-design-taste`, `brandkit` e, de plugin, `uxkin:no-ui-slop`. _Confirmar se `brandkit` e `redesign-existing-projects` entram neste grupo._

**Utilitárias de terceiros:** `find-skills`, `full-output-enforcement`, `vercel-composition-patterns`, `web-design-guidelines`, `writing-guidelines`.

## 3. Sobreposições nas skills de tarefa

### A. Crítica de design · 5 skills competem pelo mesmo pedido
"Revisa essa tela" pode acionar qualquer uma destas:
- `design-critique-completude` (sua, Norman + Krug + Nielsen + completude)
- `design:design-critique`
- `design-skills:design-critique` (a mais longa, 533 linhas)
- `design-superpowers:design-review`
- `web-design-guidelines` (gatilhos "review UX", "audit design")

**Recomendação:** a sua fica como principal. As outras saem quando os plugins forem decididos (seção 4). `stress-test-conteudo-layout` e `auditoria-consistencia-regras` complementam a crítica, sem sobreposição.

### B. Escrita para interface
- `writing-guidelines` e `web-design-guidelines` **não são de UX writing.** São da Vercel, conferem documentação e código contra o manual da Vercel, em inglês. Os nomes enganam.
- Microcopy (botão, erro, estado vazio) tem duas opções que se sobrepõem: `design:ux-copy` (108 linhas) e `design-skills:ux-writing` (477 linhas, mais completa).
- `marketing:draft-content` e `content-creation` são de marketing e não servem para interface.

**Recomendação:** para microcopy, ficar com `design-skills:ux-writing`. `writing-guidelines`: aposentar, a menos que você escreva documentação em inglês. `web-design-guidelines`: manter só se você revisa código de protótipo, e numa cópia só.

### C. Acessibilidade · 4 opções
`design:accessibility-review` (WCAG 2.1), `design-skills:accessibility-audit` (WCAG 2.2, mais completa), `design-superpowers:design-review` e a seção WCAG da sua `handoff-documentacao`. Resolve-se junto com a decisão dos plugins.

### D. Síntese de pesquisa · 5 opções
Sua `ux-synthesis` (personas + jornada + PRD) contra `design:research-synthesis`, `design:user-research`, `product-management:synthesize-research` e `design-skills:ux-research`. A descrição da sua já diz para ser preferida. Fica a sua.

### E. Handoff
Sua `handoff-documentacao` contra `design:design-handoff`. **Problema:** a descrição da sua diz o que ela faz, mas não diz *quando* usar, então ela tende a perder para a do plugin. Reescrever a descrição com frases de gatilho.

### F. Planejamento e tarefas · conflito real com o GLADIS
- `planejamento-julia` (sua) trabalha com blocos de 25 min na agenda, "Agora / Depois / Hangar", no máximo 3 tarefas e `rotina-diaria.html`.
- O GLADIS (`CLAUDE.md`, rotina Daily) diz: **sem time blocking e sem blocos na agenda**, 3 principais + 5 a 7 outras, planilha `02 ✅ Tarefas/`.
- `productivity:task-management` e `productivity:update` usam um `TASKS.md` próprio. Um "anota que preciso..." pode cair aqui em vez de ir para `02 ✅ Tarefas/`.
- `morning` (Anthropic) e `small-business:monday-brief` / `business-pulse` também respondem a "como está meu dia/semana".

**Recomendação:** decidir qual é a regra do planejamento (a skill ou o GLADIS) e alinhar a outra. Desativar o plugin `productivity`.

### G. Memória e organização do cofre · conflito com o GLADIS
`productivity:memory-management` (cria `CLAUDE.md` + `memory/` próprios), `productivity:start`, `desktop-commander:knowledge-base` ("second brain") e `desktop-commander:obsidian-vault` organizam notas do jeito delas, diferente das Regras do GLADIS. **Recomendação:** desativar `productivity` e `desktop-commander` (este já falhou ao conectar nesta sessão, e o Claude Code já tem terminal e arquivos nativos).

### H. Concorrência · 3 opções
Sua `competitor-pipeline-research` contra `marketing:competitive-brief` e `product-management:competitive-brief`. Fica a sua.

### I. Design system · 7+ opções
`design:design-system`, `design-skills:design-systems`, `design-superpowers:ds-make / ds-manage / ds-producer / ds-consumer` e `figma:figma-generate-library`. Resolve-se com os plugins.

### Sem sobreposição
`figma-doc-cards`, `figma-component-from-frames` e `flow-screens-from-screenshots` são procedimentos seus e complementam o plugin `figma`. `prompt-prototipagem-ia` é única. `auditoria-consistencia-regras` (decisões de design contra regras do projeto) e `revisao-integridade` (saúde do cofre) têm objetivos diferentes.

## 4. Plugins: o que mais pesa no ruído

| Plugin | Skills | Recomendação |
|---|---|---|
| small-business | ~45 | **Desativar.** Folha, impostos, Shopify, leads. |
| design (Anthropic) | 7 | **Desativar.** Tudo coberto por `design-skills` ou por skills suas. |
| design-skills | 10 | Manter. É o mais completo (UX writing, a11y, interação, jornada). |
| design-superpowers | 9 | Você usa os comandos dele? Se não, desativar. |
| productivity | 4 | **Desativar.** Conflita com Tarefas e Memória do GLADIS. |
| desktop-commander | 6 | **Desativar.** Conflita com o cofre e está falhando ao conectar. |
| marketing | 8 | Desativar, a menos que use. |
| brand-voice | 3 | Desativar, a menos que use. |
| product-management | 9 | Manter só se usa `write-spec`, `brainstorm` ou `stakeholder-update`. |
| product-tracking-skills | 7 | Usa na Trinks? Se não, desativar. |
| factory | 5 | Usa? (fábrica de PO/DEV/QA/CR) |
| slack-by-salesforce | 6 | Precisa de login e não está conectado. Desativar se não usa Slack. |
| cowork-plugin-management | 2 | Desativar se não cria plugins. |
| canva, figma, pdf-viewer, uxkin | | Manter se usa. |

Se desativar só os marcados em negrito, saem cerca de 60 skills, um terço do total.

## 5. Outros achados

1. **A limpeza de 2026-10-07 ficou pela metade.** A parte da conta foi feita (`planejamento-julia`, `ux-synthesis`, `handoff-documentacao` e `design-taste-frontend` foram reenviadas). A parte local não: o script `aplicar-limpeza.ps1` nunca rodou. Por isso `~/.claude/skills/` ainda tem as cópias duplicadas de `design-taste-frontend`, `web-design-guidelines`, `writing-guidelines` e `composition-patterns`, as duas skills antigas de deploy na Vercel e os nomes errados (`vercel-react-*`).
2. **Descrições cortadas.** Com ~190 skills, a lista que o Claude recebe corta descrições. Várias suas aparecem só pelo nome, o que diminui o acionamento automático. Reduzir os plugins resolve boa parte.
3. **`find-skills`** foi enviada hoje. Ela procura skills para instalar, o que vai na direção contrária desta limpeza. Manter só se for usar.
4. **Catálogo.** As 11 linhas "ativa · confirmar" agora estão confirmadas como suas. Falta `competitor-pipeline-research`, que não está no Catálogo.

## 6. Decisões pendentes da Julia

- [ ] Confirmar o grupo de estilos de UI (`brandkit`, `redesign-existing-projects`).
- [ ] Planejamento: vale a regra da `planejamento-julia` (blocos) ou a do GLADIS (sem blocos)?
- [ ] Plugins a desativar (tabela da seção 4). Você desativa em Configurações; o Claude não consegue.
- [ ] Aposentar `writing-guidelines`?
- [ ] Rodar a limpeza local de `~/.claude/skills/` (script pronto, move para backup, não apaga).
- [ ] Autorizar o Claude a reescrever a descrição de `handoff-documentacao`.

Depois das decisões: atualizar o [[Catálogo de Skills]] e registrar em [[Decisões]].

**Atualização 2026-10-08:** cópias locais duplicadas (`design-taste-frontend`, `web-design-guidelines`, `writing-guidelines`, `composition-patterns`) movidas para `~/.claude/skills-backup-2026-10-08/`. `find-skills` removida da conta pela Julia. Pendente para a categoria 5: `planejamento-julia` está no app sem `references/agenda.md` e `references/design.md`, que o texto dela cita.

## 7. Plano: auditoria por categoria

_Decidido em 2026-10-08: auditar uma categoria por vez e garimpar o que dá para reaproveitar antes de desativar qualquer plugin._

**Método, em cada categoria:**
1. Ler cada skill inteira, inclusive os arquivos de apoio.
2. Montar a tabela "o que vale aproveitar" (trecho, de qual skill, para onde vai).
3. Decidir para cada skill: manter, fundir numa skill sua ou aposentar.
4. As fusões viram rascunho em `80 🤖 AIOS/Skills em Aprovação/`.
5. Um plugin só é desativado depois que **todas** as categorias que ele toca foram auditadas.

| # | Categoria | Suas | De plugins e terceiros | Status |
|---|---|---|---|---|
| 1 | Crítica e avaliação de design | design-critique-completude, stress-test-conteudo-layout, auditoria-consistencia-regras | design:design-critique, design-skills:design-critique, design-superpowers:design-review, design:accessibility-review, design-skills:accessibility-audit, web-design-guidelines, canva:get-design-feedback | concluída (2026-10-08) · no app, conferida arquivo a arquivo |
| 2 | Handoff, design system, interação e Figma | handoff-documentacao, figma-doc-cards, figma-component-from-frames, flow-screens-from-screenshots, prompt-prototipagem-ia | design:design-handoff, design:design-system, design-skills (design-systems, interaction-design, design-ops), design-superpowers (ds-*, design, creative, map-design, figma-setup), plugin figma | concluída (2026-10-08) · 3 skills no app, conferidas arquivo a arquivo · design-superpowers desativado |
| 3 | Pesquisa e estratégia de produto | ux-synthesis, competitor-pipeline-research | design:research-synthesis, design:user-research, design-skills (ux-research, journey-mapping, ux-strategy), product-management (todas), product-tracking-skills | concluída (2026-10-08) · pesquisa-ux e competitor-pipeline-research no app, conferidas arquivo a arquivo · ux-synthesis removida (cópia no Arquivo) · product-tracking-skills desativado |
| 4 | Escrita e conteúdo | — | writing-guidelines, design:ux-copy, design-skills:ux-writing, brand-voice, marketing, small-business (conteúdo e redes) | concluída (2026-10-08) · escrita-ux no app, conferida arquivo a arquivo · writing-guidelines removida · plugins design, marketing e brand-voice desativados |
| 5 | Planejamento, tarefas e memória | planejamento-julia, revisao-integridade | productivity, morning, consolidate-memory, import-memory, schedule, desktop-commander (knowledge-base, obsidian-vault), small-business (monday-brief, business-pulse) | concluída (2026-10-08) · planejamento no cofre · planejamento-julia e morning removidas · product-management e desktop-commander desativados |
| 6 | Desenvolvimento e estilo de UI | bases de estilo (sem análise de sobreposição) | skills da Vercel em `~/.claude/skills/`, vercel-composition-patterns, full-output-enforcement, uxkin, design-skills (plugin inteiro, por causa da design-elevation), factory | análise feita em 2026-10-09 (seção 13) · aguardando suas decisões e o teste visual |
| 7 | Ferramentas e documentos | — | docx, pdf, pptx, xlsx, docs, google-workspace, navegadores, computer-use, canvas-design, algorithmic-art, deep-research, skill-creator, pdf-viewer, canva, slack, cowork-plugin-management | a fazer |
| 8 | Negócios | — | small-business (o restante: finanças, folha, impostos, vendas, Shopify) | resolvida: plugin desativado pela Julia em 2026-10-08 |

## 8. Categoria 1 · Crítica e avaliação de design

**Resultado:** skill `critica-design` aprovada em 2026-10-08, com original em `80 🤖 AIOS/Skills da Conta/critica-design/`, com `SKILL.md` curto, 6 referências e 1 modelo de relatório, todos com índice.

### O que foi aproveitado de cada skill

| Skill | O que entrou na nova | Para onde foi |
|---|---|---|
| design-critique-completude (sua) | Base inteira: Norman, Krug, Nielsen, as duas fases, checklist de 6 itens, "a Julia decide a correção", nada de elogio vazio | SKILL.md, lentes, completude |
| stress-test-conteudo-layout (sua) | Inteira, virou a etapa 4 | teste-estresse |
| auditoria-consistencia-regras (sua) | Inteira, virou a etapa 3, agora apontando para a nota de entrada e o CLAUDE.md dos projetos | consistencia-regras |
| design-skills:design-critique | Contexto antes de julgar, calibrar pela fidelidade, fórmula do achado, as 5 checagens de Krug, leis de UX, diagnóstico de arquitetura de informação, esforço desnecessário, estados, checklist de escrita de interface | lentes, visual-e-estados, completude |
| design-superpowers:design-review | Testes de desfocar, 3 segundos e escala de cinza; severidade P0 a P3; problema sistêmico contado uma vez; modo antes/depois; sinais de protótipo gerado por IA | SKILL.md, visual-e-estados, relatorio |
| design:design-critique | Primeira impressão e "o que funciona" com fundamento. O resto já estava coberto | SKILL.md |
| design-skills:accessibility-audit | Novidades do WCAG 2.2 (alvo 24 px, foco escondido, arrastar, entrada repetida, ajuda consistente), contraste, texto a 200% e 320 px | acessibilidade |
| design:accessibility-review | Tabela de contraste e prioridades. O resto estava coberto pela de cima | acessibilidade |

### O que ficou de fora, e por quê

| Conteúdo | Motivo | Vai para |
|---|---|---|
| Catálogo de padrões de interação, postura do produto, princípios de interação (design-skills) | É de criação e interação, não de crítica | Categoria 2 |
| Revisão de movimento: tempos e curvas (design-superpowers) | Idem | Categoria 2 |
| Conformidade com design system: tokens, componentes desanexados (design-superpowers) | Idem | Categoria 2 |
| Acessibilidade em código: HTML semântico, ARIA, ferramentas de teste | É de implementação | Categoria 2 (handoff) |
| Avaliação de voz e tom em profundidade | É de escrita | Categoria 4 |
| web-design-guidelines | Revisa código contra o manual da Vercel | Categoria 6 |
| canva:get-design-feedback | Só funciona com o Canva | Categoria 7 |

### Decisões propostas

| Skill | Proposta |
|---|---|
| design-critique-completude, stress-test-conteudo-layout, auditoria-consistencia-regras | Aposentar da conta quando a `critica-design` for aprovada |
| design:design-critique, design:accessibility-review | Nada mais a aproveitar. O plugin `design` sai depois das categorias 2 a 4 |
| design-skills:design-critique, design-skills:accessibility-audit | Nada mais a aproveitar para crítica. O plugin fica até a categoria 2 |
| design-superpowers:design-review | Idem, até a categoria 2 |

## 9. Categoria 2 · Handoff, design system, interação e Figma

**Resultado:** três rascunhos em `80 🤖 AIOS/Skills em Aprovação/`, todos com índice:
- `handoff-documentacao` (revisada, mesmo nome): de 3 para 7 arquivos.
- `figma-julia` (nova): junta as três skills de Figma.
- `prompt-prototipagem-ia` (revisada, mesmo nome).

### Problemas encontrados nas skills da Julia
| Skill | Problema | Correção no rascunho |
|---|---|---|
| handoff-documentacao | Descrição sem frases de gatilho; perdia para o plugin `design` | Descrição nova com gatilhos |
| handoff-documentacao | Sem seção de fluxo, conteúdo (limites, truncamento) e responsivo | Seções 3, 4 e 5 novas |
| figma-doc-cards | O código usava 5 categorias e "Interação" em verde-azulado; o texto dizia 4 categorias e Interação em laranja | Código alinhado ao texto (4 categorias). **Confirmar com a Julia** |
| flow-screens-from-screenshots | Não mandava carregar `figma-use` antes de rodar código no Figma | Regra comum da `figma-julia` |
| figma-component-from-frames | Dependia de um arquivo de outra skill (a grade do card-builder) e usava um caminho antigo para o figma-use | Tudo dentro da mesma skill; aponta para `figma:figma-use` |
| prompt-prototipagem-ia | Citava "a skill de completude" e o "teste de estresse", que agora são etapas da `critica-design` | Aponta para a `critica-design` |

### O que foi aproveitado dos plugins
| De | O que entrou | Para onde |
|---|---|---|
| design-skills:design-ops (handoff-process, checklist, design-qa) | Checklist pré-handoff, formato de fluxo (entrada, saídas, erro, volta, abandono), anotações de conteúdo, registro de mudanças, QA de implementação com severidade e relatório por tela | handoff: checklist-pre-handoff, secoes, qa-implementacao |
| design-skills:interaction-design + design-superpowers motion | Teste "esta animação comunica ___", durações por uso, saída mais rápida que entrada, curvas por situação, movimento reduzido com sinal equivalente, desempenho | handoff: movimento |
| design-skills:interaction-design (state inventory) | Estados da tela (primeira visita, sem resultado, sem permissão) | handoff: secoes, 9 |
| design-skills:design-systems + design:design-system | Especificação de componente novo: propósito, anatomia, no máximo 5 variantes, quando não usar | handoff: secoes, 8 |
| design-superpowers documentation | Área de documentação do componente no Figma | figma-julia: componentizar, 7 |
| design-skills:design-ops (documentação) | Organização em Sections e nomes de frame | figma-julia: SKILL, 3 |
| design-superpowers visual-quality | Vícios de interface gerada por IA, dados realistas | prompt-prototipagem-ia, 3 |

### O que não foi aproveitado
| Conteúdo | Motivo |
|---|---|
| design-superpowers ds-producer, ds-consumer, ds-make, ds-manage | Fluxo de time de design system de outra empresa (Shortcut, PluginOS, Prostar, changelog no Notion) |
| design-superpowers design, creative, map-design, figma-setup | Comandos próprios do plugin; só fazem sentido se a Julia usar |
| design-skills:design-ops (sprints, rituais, métricas) e design-systems (governança, maturidade) | Conhecimento de gestão de time e de design system; útil para consulta, não para uma skill da Julia |
| design-skills:interaction-design (microinterações, storymapping, máquinas de estado) | Conhecimento de criação; fica no plugin enquanto ele existir |
| Plugin figma | Infraestrutura obrigatória das ferramentas do Figma. Fica |

### Decisões propostas
| Skill | Proposta |
|---|---|
| figma-doc-cards, figma-component-from-frames, flow-screens-from-screenshots | Aposentar quando a `figma-julia` for aprovada |
| handoff-documentacao, prompt-prototipagem-ia | Substituir pela versão revisada |
| design:design-handoff, design:design-system | Nada mais a aproveitar. O plugin `design` só tem skills das categorias 3 e 4 agora |
| design-superpowers (plugin inteiro) | Desativar. A Julia quer aprender a usar: o que cada comando faz ficou em [[design-superpowers]], na área de estudo [[IA para Design]], para reativar quando for estudar |
| design-skills (plugin) | Manter por enquanto: tem a melhor skill de UX writing (categoria 4) e de pesquisa (categoria 3) |
| figma (plugin) | Manter |

## 10. Categoria 3 · Pesquisa e estratégia de produto

**Resultado:** dois rascunhos revisados em `80 🤖 AIOS/Skills em Aprovação/`, com o mesmo nome, ambos com índice.

### Problemas encontrados nas skills da Julia
| Skill | Problema | Correção no rascunho |
|---|---|---|
| competitor-pipeline-research | No app só existe o `SKILL.md`. Faltam `funnel-rubric.md`, `report-template.md` e `capture.mjs`, que o texto manda usar. A versão completa estava no pacote de 2026-10-07 | Pacote completo de novo, no formato que funcionou |
| competitor-pipeline-research | Só olhava concorrentes diretos e terminava nas oportunidades, sem o "e daí" | Tipos de concorrente (incluindo substitutos como planilha e WhatsApp), reviews como evidência, frase de posicionamento, seção "Implicações para o produto" |
| ux-synthesis | Sem índice; não separava o que a pessoa faz do que ela diz; jornada sem regras de escrita nem momentos de verdade; métricas sem critério de escolha | Referências `analise.md` e `jornada.md`; persona com "o que muda no produto"; métricas por HEART; pendências com método sugerido |

### O que foi aproveitado dos plugins
| De | O que entrou | Para onde |
|---|---|---|
| product-management:synthesize-research | Comportamento contra opinião, contornos, sinais de intensidade, contradições como segmentos, cuidados com survey, matriz frequência × impacto, persona por comportamento e com implicação | ux-synthesis: analise, SKILL |
| design-skills:journey-mapping | Uma persona por mapa, 3 a 7 etapas, regras de escrita, momentos de verdade, estado atual antes do futuro, checklist | ux-synthesis: jornada |
| design-skills:ux-strategy | HEART para escolher métricas | ux-synthesis: analise |
| design:research-synthesis | Sugerir o método de pesquisa para cada pergunta aberta | ux-synthesis: SKILL, template |
| product-management:competitive-brief + marketing:competitive-brief | Tipos de concorrente, frase de posicionamento, reviews como evidência, honestidade sobre os pontos fortes, implicações (construir, diferenciar ou igualar, acompanhar) | competitor-pipeline-research |

### O que não foi aproveitado
| Conteúdo | Motivo |
|---|---|
| design-skills:ux-research (planejar estudo, roteiro, teste de usabilidade, recrutamento) | Planejar pesquisa é outro trabalho. **Depende da Julia:** se ela planeja pesquisa, vira um modo novo |
| design-skills:ux-strategy (OST, JTBD, valor) e journey-mapping (blueprint, mapa de empatia) | Conhecimento de estratégia; fica no plugin enquanto ele existir |
| product-management (spec, roadmap, sprint, update para stakeholders, métricas, brainstorm) | Tarefas de PM. O GLADIS já tem o modelo de PRD próprio |
| product-tracking-skills (7 skills e um agente automático) | Instrumentação de analytics em código. O agente roda sozinho depois de mudanças em código |

### Decisões propostas
| Item | Proposta |
|---|---|
| competitor-pipeline-research | Substituir pela versão revisada |
| ux-synthesis | **Atualização:** a Julia planeja todas as pesquisas e tem dificuldade nisso. A skill virou `pesquisa-ux`, com os modos Planejar (plano, método, participantes, roteiro de entrevista, plano de teste, a partir de design-skills:ux-research) e Sintetizar (a antiga ux-synthesis revisada). Substitui a ux-synthesis |
| product-management | **Decidido:** desativar. A Julia não faz spec nem roadmap; organizar a sprint e a gestão do trabalho fica para a categoria 5 (planejamento) |
| product-tracking-skills | **Decidido:** desativar |
| design:research-synthesis, design:user-research | Nada mais a aproveitar. O plugin `design` fica só com `ux-copy` (categoria 4) |
| product-management (plugin) | Desativar, se a Julia não faz tarefas de PM |
| product-tracking-skills (plugin) | Desativar |
| design-skills (plugin) | Manter até a categoria 4 |

## 11. Categoria 4 · Escrita e conteúdo

**Atualização:** a Julia pediu que toda sugestão de texto venha em 4 a 6 variações justificadas (regras aplicadas, vantagens, desvantagens, quando usar). O guia da Trinks fica no app, marcado como válido só para projetos da Trinks.

**Resultado:** rascunho da skill nova `escrita-ux` em `80 🤖 AIOS/Skills em Aprovação/`, com índice e links clicáveis. Vale para qualquer produto e aplica o guia do produto por cima das regras gerais; a Trinks já tem o seu (`references/produtos/guia-trinks.md`). Originais da Trinks guardados em `50 🗃️ Fontes Brutas/`: Checklist de UX Writing e Guia de Redação e Linguagem.

### O que foi aproveitado
| De | O que entrou | Para onde |
|---|---|---|
| design-skills:ux-writing | As quatro qualidades e as quatro passadas, padrões de erro (no campo, recuperável, bloqueante, permissão), estados vazios em 4 tipos, tom por estado emocional e por tipo de mensagem, tamanhos de referência, acessibilidade no texto, como testar | padroes, tom, revisao |
| design:ux-copy | Confirmação com ação e objeto ("Excluir 3 agendamentos?"), alternativas com quando usar cada uma | padroes, SKILL |
| brand-voice:brand-voice-enforcement | Voz constante e tom que muda; quando o pedido conflita com o guia, explicar e recomendar | tom, SKILL |
| Checklist de UX Writing da Trinks | Inteiro, por elemento | produtos/trinks, seção 2 |
| Guia de Redação e Linguagem da Trinks | Voz, regras verbais, a Trinks no feminino, tratamento, gramática e formatação, termos, emojis | produtos/trinks, seções 3 a 6 |

### Adaptações ao português
O ux-writing do plugin é escrito para inglês: maiúscula em cada palavra nos títulos, contrações, "inclua artigos". Na skill nova vale o português: maiúscula só na primeira palavra, e artigos evitados quando marcam gênero.

### Divergências entre os dois documentos da Trinks
Registradas na seção 7 do guia da Trinks, com a escolha padrão: primeiro dia do mês (1º), artigos, linguagem neutra contra exemplos com gênero no guia, começar com "Não", tamanho de botão.

### Decisões propostas
| Item | Proposta |
|---|---|
| writing-guidelines | Aposentar (confere documentação em inglês contra o manual da Vercel) |
| design (plugin) | Desativar: com a ux-copy coberta, nada mais a aproveitar |
| marketing, brand-voice (plugins) | Desativar: são de marketing e vendas, fora do escopo |
| design-skills (plugin) | **Mantido.** A design-elevation, que faz parte dele, melhora o acabamento visual de qualquer saída (Tailwind, Inter, cinzas, uma cor de destaque) e a Julia sentiu diferença no visual. Passa para a categoria 6 e será avaliada como base de estilo, sem análise de sobreposição, com teste no Laboratório antes de qualquer decisão |

## 12. Categoria 5 · Planejamento, tarefas e memória

**Resultado:** rascunho da skill `planejamento` em `80 🤖 AIOS/Skills em Aprovação/`. **Mora no GLADIS** (não no app), porque depende das tarefas, dailies, agendas e projetos do cofre e vai ser ajustada com frequência. Substitui a `planejamento-julia` (cópia do original em `90 📦 Arquivo/Skills aposentadas/`). Processo de design da Trinks registrado em `20 🧭 Áreas/Trinks/Processo de design da Trinks.md`, a partir dos prints do Notion.

### O que mudou em relação à planejamento-julia
| Antes | Agora |
|---|---|
| Blocos de 25 min, horários, "A UMA COISA", máximo de 3 tarefas | Sem horários; o dia segue a rotina Daily do GLADIS (3 principais e de 5 a 7 outras); a ordem por energia é só sugestão |
| Rotina fixa na agenda | Marcada para conferir com a Julia; nenhum bloco novo |
| Sprint genérica | Modo Sprint de design com o processo real da Trinks: cadência de 2 semanas, matriz conhecimento × risco, tipos de tarefa do Notion, QA de UX reservado, debriefing, review |
| Só sprint para trabalho | Modo **Planejar entrega** com horizonte flexível: hoje, 2 a 5 dias, 1 a 2 semanas, mais de 2 semanas, e encaixar urgência |
| Arquivos de apoio que não chegaram ao app | Tudo no cofre, com índice e links clicáveis |
| Sem jeito de evoluir | Seção "Como esta skill evolui" e registro de mudanças |

Mantidos: a regra de escrita de tarefas, os modos Destravar e Quebrar, a tabela de bloqueios, as cores da agenda.

### Aproveitado dos plugins
| De | O que entrou |
|---|---|
| product-management:sprint-planning | Capacidade descontando ausências e reuniões, planejar para 70 a 80%, essencial contra "se der", o que ficou de fora e por quê |
| product-management:stakeholder-update | Update com status (no prazo, em risco, fora do prazo), riscos com pedido específico, decisões necessárias |

### Decisões propostas
| Item | Proposta |
|---|---|
| planejamento-julia (app) | Remover da conta quando a `planejamento` for aprovada |
| product-management (plugin) | Desativar |
| desktop-commander (plugin) | Desativar: as skills de cofre dele brigam com o GLADIS e o servidor falha ao conectar |
| morning (Anthropic) | Desativar: concorre com a daily |
| consolidate-memory (Anthropic) | Manter, para a revisão mensal da memória automática |

## 13. Categoria 6 · Desenvolvimento e estilo de UI

**Status (2026-10-09): análise feita, nada alterado.** Falta o teste visual no [[Laboratório de IA para Design]] e as suas decisões. Regra da [[Memória]]: nada que mexa no visual é desativado sem teste.

**O que foi lido:** por inteiro, `frontend-design`, `high-end-visual-design`, `industrial-brutalist-ui`, `minimalist-ui`, `stitch-design-taste`, `redesign-existing-projects`, `brandkit`, `full-output-enforcement`, `web-design-guidelines`, `vercel-composition-patterns`, `uxkin:no-ui-slop` e o `SKILL.md` da `design-elevation`. **Lido só em parte:** `design-taste-frontend` (87 KB; seções 0 a 5 e o índice do resto), as 14 referências da `design-elevation` (só os nomes), as 6 skills da Vercel em `~/.claude/skills/` (nome e descrição) e o `factory` (README e lista de arquivos).

### Achado 1 · As bases de estilo são para site de marketing, não para tela de produto
A `design-taste-frontend` diz no topo: _"Landing pages, portfolios, redesigns. Não dashboards, não tabelas, não UI de produto"_. `high-end`, `minimalist` e `brutalist` são do mesmo tipo (landing, portfólio, editorial). Para as telas da Trinks, que já têm design system, quem serve é a `no-ui-slop` ("siga o design system que existe, desenhe todos os estados, confira o resultado renderizado"). Risco: uma base de estilo disparar num protótipo da Trinks e sobrepor o design system deles.

### Achado 2 · As bases discordam entre si (por isso a mistura depende de qual dispara)
| Tema | Posições |
|---|---|
| Fonte | `high-end` e `minimalist` banem Inter · `brutalist` lista Inter Black como opção · `design-elevation` usa Inter como padrão · `design-taste` bane serifa como padrão, `minimalist` e `high-end` usam serifa |
| Cantos | `high-end`: `rounded-[2rem]` em tudo · `minimalist`: sem pílula em cards · `brutalist`: raio zero |
| Sombra, vidro e brilho | `high-end` exige vidro e profundidade · `minimalist` e `no-ui-slop` baniem |
| Cor | `brutalist`: só vermelho de alerta · `minimalist`: pastéis · `design-taste`: um acento só |

Nenhuma delas conhece a **paleta da Julia** (burgundy, rosa, azul, sem verde). O que a agrada hoje vem de uma mistura que ninguém escolheu.

### Achado 3 · A `design-elevation` dispara em todo pedido visual, em silêncio
Está no plugin `design-skills` e diz "triggers on ALL requests for visual content", "silent execution". Impõe Tailwind, Inter e cinzas por cima do que for. Das 10 skills do plugin, 9 já foram aproveitadas nas categorias 1 a 4. Só ela segura o plugin vivo. Das 14 referências, 4 são de design systems de outras empresas (Carbon, Polaris, Spectrum, Lightning, 130 KB) que a Julia não usa.

### Achado 4 · Duplicação entre as bases
`stitch-design-taste` é a `design-taste` reescrita para o Google Stitch (as mesmas proibições). `redesign-existing-projects` repete cerca de 11 itens da seção 11 da `design-taste`. As quatro (`design-taste`, `stitch`, `redesign`, `high-end`) dividem as mesmas listas: sem Inter, sem 3 cards iguais, sem `h-screen`, sem emoji, sem clichê de texto. Você decidiu que as bases coexistem, então isto é só informação.

### Achado 5 · Custo em tokens
Quando a `design-taste-frontend` dispara, entram cerca de 22 mil tokens. Numa mesma conversa visual podem disparar de 4 a 6 bases juntas (`design-elevation`, `design-taste`, `frontend-design`, `high-end`...). É o ponto mais caro desta categoria, e você pediu aviso sobre gasto.

### Achado 6 · Utilitárias
| Skill | Problema | Proposta |
|---|---|---|
| `web-design-guidelines` | Busca as regras no GitHub a cada uso, revisa código no manual da Vercel, e a descrição ("review my UI", "audit design") compete com a `critica-design`, o mesmo conflito da categoria 1 | **Aposentar** |
| `vercel-composition-patterns` | Na conta só existe o `SKILL.md`; as `rules/` e o `AGENTS.md` que ele manda ler não existem. É só de React | **Aposentar** |
| `full-output-enforcement` | Proíbe resumir e "otimizar brevidade", o oposto do seu pedido de avisos de gasto e de notas curtas | **Aposentar**, a menos que você tenha sentido respostas cortadas |
| `brandkit` | Gera imagem de quadro de identidade visual, depende de uma ferramenta de imagem (o plugin Figma tem `generate_image`) | Manter no grupo de estilos; testar no Laboratório |
| `redesign-existing-projects` | Audita código de site existente; no cofre não há projeto de código | Manter no grupo de estilos (decisão sua pendente) |

### Achado 7 · Skills da Vercel em `~/.claude/skills/`
6 skills, 288 arquivos, 1,4 MB: `deploy-to-vercel`, `vercel-cli-with-tokens`, `vercel-optimize`, `react-best-practices`, `react-native-skills` (descrição vazia, nunca dispara certo), `react-view-transitions`. Os nomes das pastas ainda não batem com o `name:` de dentro (`vercel-react-*`). No cofre não há uma menção a Vercel, React ou Next.js fora desta auditoria. **Proposta:** mover as 6 para `~/.claude/skills-backup-2026-10-08/` (não apaga), a menos que você publique algo na Vercel.

### Achado 8 · `factory` (plugin)
Só comandos manuais (`/factory:po`, `dev`, `qa`, `cr`, `init`), sem gatilho automático. Exige um repositório com `docs/factory.config.md`, tracker (Jira, ClickUp ou GitLab) e git. É fluxo de time de desenvolvimento. **Proposta:** desativar, a menos que você o use na Trinks.

### Achado 9 · `uxkin` (plugin)
Só tem a `no-ui-slop`, que funciona sem conta. O servidor MCP opcional está sem login. **Proposta:** manter; é a única base pensada para tela de produto.

### Decisões que dependem de você
- [ ] Regra proposta: **na Trinks vale o design system do projeto; as bases de estilo ficam para landing, portfólio, cards visuais e material pessoal.** Se aceitar, entra em [[Regras]].
- [ ] Aposentar `web-design-guidelines`, `vercel-composition-patterns` e `full-output-enforcement`?
- [ ] Publica algo na Vercel? Se não, mover as 6 skills da Vercel para o backup.
- [ ] Usa o `factory` na Trinks? Se não, desativar (em Configurações).
- [ ] Confirmar `brandkit` e `redesign-existing-projects` no grupo de estilos.
- [ ] Autorizar o teste visual (abaixo). Depois dele: fundir a `design-elevation` numa skill sua com a sua paleta e, só então, decidir o plugin `design-skills`.

### Teste visual proposto (Laboratório, experimento 4)
Mesmo pedido, três vezes cada, mudando só a skill chamada pelo nome: **(a)** card visual do dia na paleta da Julia; **(b)** uma landing curta de portfólio; **(c)** uma tela de produto da Trinks com dados fictícios. Variantes: nenhuma skill · só `design-elevation` · `design-taste` · `high-end` · `minimalist` · `no-ui-slop`. Você escolhe o que agrada em cada tipo de pedido e o resultado vira a regra de quando usar cada base. Custo estimado: alto em tokens (a `design-taste` sozinha tem 22 mil); sugiro rodar em uma sessão só para isso.