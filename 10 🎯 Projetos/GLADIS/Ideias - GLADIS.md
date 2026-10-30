---
tipo: documento
contexto: pessoal
atualizado: 2026-10-23
tags: [tema/arquitetura-de-sistemas]
---

# Ideias - GLADIS

Caixa de entrada das ideias para o sistema. A Julia fala do jeito que vier, o Claude anota aqui em uma linha, com a data. Nada é construído na hora: as ideias são decididas na **revisão semanal**, e as aprovadas vão para o [[Plano de Construção]].

**Decisão:** `nova` · `fazer agora` (pequena, entra na semana) · `roadmap` (vai para o Plano) · `guardada` (boa, mas não agora) · `descartada` (com o motivo)

Ideias grandes ou estruturais passam por PRD antes de construir ([[Regras]], seção 2).

## Novas

| Data | Ideia | Decisão |
|---|---|---|
| 2026-10-08 | Agrupar tarefas parecidas em blocos, sem horário marcado, para facilitar começar. | nova |
| 2026-10-09 | Clube do Livro: agente pesquisador de tendências, skill de posts para redes sociais, agente "leitor como cliente". Começar por aqui se ela for postar com frequência. | guardada |
| 2026-10-09 | Segundo negócio: agentes pesquisador de mercado (ou skill `deep-research`), analista de concorrentes (skill `competitor-pipeline-research`) e advogado do diabo para testar ideias antes de investir. | guardada |
| 2026-10-09 | Design: agentes revisor de acessibilidade e usuário simulado (apoio para preparar teste, não substitui pesquisa real). | guardada |
| 2026-10-09 | Template `Pessoa` próprio para amigos e família (o atual é de trabalho). | fazer agora (criado em 09/10) |

| 2026-10-09 | Organizar o Gmail (ela não abre há meses): triar, apagar e rotular, aos poucos e de forma mais automática. Prioridade relativa: importante, mas abaixo das tarefas dela. Apagar exige o sim dela ([[Regras]]), então começar por rotular e propor limpeza. | fazer agora (16/10: começar só rotulando) |
| 2026-10-09 | Falar com o Claude pelo celular (o computador fica sempre ligado). Comparar opções de conexão e escolher a que combina com a rotina dela. Já existe a Fase 3 do [[Plano de Construção]] com 3 opções de captura. Não é para agora. | nova |

| 2026-10-11 | Dashboard do GLADIS: uma tela com hoje, projetos, fila de aprovação, quarentena, e-mail e pendências, para não depender de navegar pastas. Começar como nota-painel com Bases embutidos e depois virar página. Esperar a rotina matinal e o zelador rodarem ([[Revisão de Regras 2026-10-11]], G1). | nova |
| 2026-10-23 | Repensar como o dia e as tarefas são organizados. (1) Perguntar ao Claude o que fazer não dá visão da agenda: ela precisa de uma visualização automática (site ou painel que se atualiza sozinho). (2) Mostrar só o primeiro passo na agenda tira o senso de urgência de tudo que há para fazer no dia: mostrar a tarefa ampla e, dentro dela, os passos detalhados, sempre começando por um passo pequeno. Pensar o sistema de listas de tarefas como um todo. Relaciona-se com o Dashboard (11/10) e com a regra do `primeiro_passo` do "monta meu dia". Precisa de PRD. Não construir agora. | nova |
| 2026-10-26 | **Ecossistema só do trabalho da Trinks, na conta Claude da empresa.** A líder liberou o Claude para os funcionários e quem não usar a conta corporativa pode perder o acesso. Projetos da Trinks passariam a ser feitos lá, não neste computador. Julia ainda não tem a conta, então não se sabe o que a conta oferece (Projects, memória, Code, conectores) nem o que a empresa permite guardar lá. Precisa de PRD, depois de conhecer a conta. Relaciona-se com a Proposta Claude para o Time de Design e com o que é confidencial da Trinks ([[Regras]], seção 11). **2026-10-29:** em andamento: projetos da Trinks tirados do cofre, ficou só o registro de carreira. | em andamento |
| 2026-10-11 | Zelador: avisar quando um material do Career OS (CV, LinkedIn) for mais velho que a fonte que ele cita (Experience, Project, Evidence). Só aponta, não corrige. Depois que o zelador (A2) existir. Veio do guia do ChatGPT. | nova |

## Decididas

| Data | Ideia | Decisão | Onde foi parar |
|---|---|---|---|
| 2026-10-07 | Sistema de receitas (base, perfil de paladar, "o que tem na geladeira?"). | roadmap | [[Plano de Construção]], Depois |
| 2026-10-08 | Panorama dos próximos 7 dias toda segunda de manhã. | roadmap | [[Plano de Construção]], Depois |
| 2026-10-09 | Pensar sempre em formas de gastar menos tokens. | fazer agora | [[Regras]], seção 7 |
| 2026-10-09 | Perguntar antes de construir qualquer coisa. | fazer agora | [[Regras]], seção 13 |
| 2026-10-09 | "O que eu faço agora?" mais rápido. | fazer agora | `CLAUDE.md`, rotina em modo rápido |
| 2026-10-09 | Daily pronta de manhã. | roadmap | [[PRD - Daily matinal]] |
| 2026-10-09 | Usar agentes para melhorar os resultados. | roadmap | [[PRD - Subagentes]] |
| 2026-10-09 | Conversa fixa "Meu dia" num modelo leve. | guardada | Ela não escolheu agora |
| 2026-10-08 | Rituais de recarga e transição na agenda pessoal. | descartada | Ela não usa time blocking ([[Memória]]) |

## Ver também
- Candidatas a skill: [[Catálogo de Skills]], seção "Candidatas".
- Padrões em observação: [[Insights]].
