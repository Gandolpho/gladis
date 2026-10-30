---
tipo: sistema
atualizado: 2026-10-11
proxima_revisao: 2026-10-23
---

# Catálogo de Skills

Inventário de todas as skills que a Julia usa, para revisar, aprimorar ou aposentar. Regras em [[Regras]], seção 6. Revisão no rodízio do sistema, item "Skills e tokens" (sexta entre os dias 22 e 28).

**Status:** `ativa` · `em aprovação` · `em revisão` · `aposentada`
**Onde vive:** `cofre` (em `80 🤖 AIOS/Skills/`), `app · original no cofre` (instalada na conta, original em `80 🤖 AIOS/Skills da Conta/`) ou `claude.ai` (só na conta, sem original no cofre)

**Onde cada skill mora** (cada skill tem uma única cópia instalada):
- **Só faz sentido no cofre** (planejamento, revisão de integridade): instalada em `80 🤖 AIOS/Skills/`, que o Claude Code lê pelo atalho `.claude/skills`.
- **Precisa funcionar fora do GLADIS** (outros computadores, chat, projetos que não são da Trinks): instalada no app (conta do claude.ai). O original fica em `80 🤖 AIOS/Skills da Conta/<nome>/`, fora do atalho para não duplicar. O Claude edita o original, gera o `.zip` ao lado e a Julia reenvia no app.

**Fluxo de uma skill nova:** candidata contada na revisão semanal → na 3ª vez, rascunho em `80 🤖 AIOS/Skills em Aprovação/<nome>/SKILL.md` (sem PRD) → o Claude mostra o que faz e quando é acionada → a Julia aprova (vai para o lugar certo e ganha linha aqui) ou recusa (vai para "Aposentadas" com o motivo).

## Skills ativas

_Revisadas na [[2026-10-08 Auditoria de Skills]] (categorias 1 a 5). As skills de estilo de UI e as ferramentas ainda serão auditadas (ver "Ainda não auditadas")._

| Skill | Para que serve | Onde vive | Status | Último uso | Última revisão |
|---|---|---|---|---|---|
| revisao-integridade | Conferir links, nomes repetidos, caminhos antigos, YAML, notas de entrada e informação perdida depois de mudanças grandes | cofre | ativa (aprovada em 2026-10-07) | 2026-10-07 | 2026-10-07 |
| cozinha | Estoque pelo chat, "o que dá pra fazer hoje?", receita na hora, dar nota e importar receita (YouTube, Instagram, texto, print). Área [[Minha Cozinha]]. Comando `/cozinha` | cofre | ativa (aprovada em 2026-10-20; falta o teste com os links) | | 2026-10-20 |
| montar-assistente-pessoal | Montar o assistente de outra pessoa: kit, instalação, travamentos, sugestões da 1ª semana e registro de aprendizados. Base do produto [[Assistente Pessoal como Serviço]] | cofre | ativa (aprovada em 2026-10-08) | | 2026-10-08 |
| critica-design | Crítica de design em qualquer projeto: Norman, Krug e Nielsen, regras documentadas, teste de estresse, acessibilidade e completude. Comando `/critica-design` | app · original no cofre | ativa (aprovada em 2026-10-08) | | 2026-10-08 |
| planejamento | Dia, destravar, quebrar tarefas, planejar entregas de qualquer prazo, sprint de design da Trinks (com QA de UX card a card), debriefing, update de status e agenda. Evolui com frequência. Comando `/planejamento` | cofre | ativa (aprovada em 2026-10-08) | | 2026-10-08 |
| pesquisa-ux | Planejar pesquisa (plano, método, participantes, roteiro, teste de usabilidade) e sintetizar (personas, jornada e PRD rastreáveis). Comando `/pesquisa-ux` | app · original no cofre | ativa (aprovada em 2026-10-08) | | 2026-10-08 |
| competitor-pipeline-research | Concorrentes pelo funil (aquisição, onboarding, ativação, funções, preços), com prints e implicações para o produto. Comando `/competitor-pipeline-research` | app · original no cofre | ativa (revisão aprovada em 2026-10-08) | | 2026-10-08 |
| handoff-documentacao | Handoff com etiquetas, regras, fluxo, conteúdo, responsivo, tab order, WCAG, tokens, estados e movimento; também QA de implementação. Comando `/handoff-documentacao` | app · original no cofre | ativa (revisão aprovada em 2026-10-08) | | 2026-10-08 |
| prompt-prototipagem-ia | Prompts para Figma Make, Lovable e similares, com matriz de variações. Comando `/prompt-prototipagem-ia` | app · original no cofre | ativa (revisão aprovada em 2026-10-08) | | 2026-10-08 |
| figma-julia | No Figma: cards de documentação, componentizar frames e telas por clonagem de prints. Comando `/figma-julia` | app · original no cofre | ativa (aprovada em 2026-10-08) | | 2026-10-08 |
| design-visual | Direção visual de qualquer projeto contra o visual genérico de IA: brief, direção, referência antes do código, uma skill de estilo por vez e checagem final. Sem foco em marca específica. Nasceu da [[2026-10-20 Análise - Taste Skill e UUPM]]. Comando `/design-visual` | app · original no cofre | ativa (aprovada em 2026-10-20; falta reenviar o .zip no app e o teste antes/depois) | | 2026-10-20 |
| escrita-ux | Textos de interface de qualquer produto, sempre em 4 a 6 variações justificadas; guia da Trinks aplicado só em projetos da Trinks. Comando `/escrita-ux` | app · original no cofre | ativa (aprovada em 2026-10-08) | | 2026-10-08 |

## Ainda não auditadas
_Categorias 6 (desenvolvimento e estilo de UI) e 7 (ferramentas e documentos) da auditoria. Ficam como estão até lá._

| Skill ou plugin | Onde vive | Categoria |
|---|---|---|
| design-taste-frontend, frontend-design, high-end-visual-design, industrial-brutalist-ui, minimalist-ui, redesign-existing-projects, stitch-design-taste, brandkit (bases de estilo de UI) | claude.ai | 6 |
| web-design-guidelines, vercel-composition-patterns, full-output-enforcement | claude.ai | 6 |
| Skills da Vercel em `~/.claude/skills/` (deploy, React, Next.js) | computador | 6 |
| Plugins design-skills (design-elevation), uxkin, factory | plugin | 6 |
| Skills da Anthropic (docx, pdf, pptx, xlsx, docs, navegadores, deep-research, skill-creator...) e plugins canva, pdf-viewer, slack, cowork-plugin-management | claude.ai · plugin | 7 |

## Em aprovação
_Rascunhos em `80 🤖 AIOS/Skills em Aprovação/`, esperando o sim da Julia._

| Skill | Para que serve | Rascunho desde | Observação |
|---|---|---|---|
| _(nenhuma)_ | | | |

## Candidatas (Regra das 3 Vezes)
_Tarefas manuais repetidas. Na 3ª vez, o Claude propõe a skill._

| Tarefa | Vezes | Datas | Observação |
|---|---|---|---|
| Consolidar projeto de chat em documento único com etiquetas (Confirmado/Hipótese/Pendente) | 1 | 2026-10-07 | Prompt salvo em [[Consolidar projeto de chat]] |
| Montar pasta de projeto da Trinks (nota de entrada + CLAUDE.md) a partir de documentos | 1 | 2026-10-07 | Email na Venda de Crédito |
| Processar transcrição de reunião (Gemini) → pontos categorizados e cruzados com o doc do projeto | 1 | 2026-10-07 | Design Critique 24/09 do crédito |

## Automações
_Regras em [[Regras]], seção 9. Construídas pelo Claude e ativadas só com o sim da Julia._

**Passo a passo:**
1. **Propor:** quando notar algo repetitivo que uma automação resolveria, o Claude sugere em uma ou duas linhas.
2. **Construir:** com o ok para seguir, escreve um PRD curto e constrói a automação **desativada** em `80 🤖 AIOS/Automações em Aprovação/<nome>/`, com o PRD, os arquivos e instruções de como testar.
3. **Mostrar:** o que a automação faz, quando roda, o que pode alterar e como desligar.
4. **Ativar:** só com o sim da Julia (registrar o hook ou a tarefa agendada, ou mudar configurações). Depois disso, a automação vai para `80 🤖 AIOS/Automações/` e ganha linha nesta tabela.

| Automação | O que faz | Quando roda | Status | Como desligar |
|---|---|---|---|---|
| `daily-matinal` | Prepara a seção Hoje do Agora com compromissos e sugestão de tarefas para ela confirmar ([[PRD - Daily matinal]]) | Todo dia, 8h | ativa desde 2026-10-15 (aprovada pela Julia; sem teste manual prévio) | Pedir "desliga a daily matinal" ou desativar em Tarefas agendadas |

## Agentes
_Subagentes só leitura, que trabalham fora da conversa principal e devolvem a conclusão ([[PRD - Subagentes]]). Originais em `80 🤖 AIOS/Agentes/`, lidos pelo atalho `.claude/agents`. Entram na revisão mensal._

| Agente | Modelo | O que faz | Status | Último uso | Revisado |
|---|---|---|---|---|---|
| `revisor-integridade` | Haiku | Checagem pesada da revisão de integridade, devolve só os problemas | ativo, falta teste | — | 2026-10-09 |
| `critico-independente` | o da conversa | Segunda opinião sem o contexto da conversa | ativo (testado em 2026-10-11 na Revisão de Regras: achou 6 problemas graves que o Claude principal não viu) | 2026-10-11 | 2026-10-09 |
| `inventario-migracao` | Haiku | Inventário de uma página do Notion com triagem sugerida | ativo, falta teste | — | 2026-10-09 |

## Aposentadas

| Skill | Quando | Por quê |
|---|---|---|
| design-critique-completude | 2026-10-08 | Fundida na `critica-design` |
| stress-test-conteudo-layout | 2026-10-08 | Fundida na `critica-design` (etapa 4) |
| auditoria-consistencia-regras | 2026-10-08 | Fundida na `critica-design` (etapa 3) |
| find-skills | 2026-10-08 | Procura skills para instalar, o contrário da limpeza. Decisão da auditoria |
| figma-doc-cards | 2026-10-08 | Fundida na `figma-julia` (modo cards) |
| figma-component-from-frames | 2026-10-08 | Fundida na `figma-julia` (modo componentizar) |
| flow-screens-from-screenshots | 2026-10-08 | Fundida na `figma-julia` (modo telas por clonagem) |
| ux-synthesis | 2026-10-08 | Virou o modo Sintetizar da `pesquisa-ux`. Cópia do original em `90 📦 Arquivo/Skills aposentadas/` |
| writing-guidelines | 2026-10-08 | Conferia documentação em inglês contra o manual da Vercel; não é UX writing. Substituída pela `escrita-ux` |
| planejamento-julia | 2026-10-08 | Virou a `planejamento`, no cofre, alinhada ao GLADIS. Original em `90 📦 Arquivo/Skills aposentadas/` |

## Histórico de revisões
- _Primeira revisão prevista para 2026-10-23 (rodízio, item "Skills e tokens")._
- 2026-10-08 · Auditoria por categoria: 1 a 5 concluídas e conferidas no app; 6 e 7 pendentes; 8 resolvida (small-business desativado). Ver [[2026-10-08 Auditoria de Skills]]
