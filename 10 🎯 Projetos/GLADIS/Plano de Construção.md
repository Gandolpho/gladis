---
tipo: documento
contexto: pessoal
atualizado: 2026-10-09
tags: [tema/arquitetura-de-sistemas]
---

# Plano de Construção

O roadmap do GLADIS. Os requisitos estão no [[PRD - GLADIS]], as ideias ainda não decididas em [[Ideias - GLADIS]] e o histórico do que mudou no [[Log]]. O Claude atualiza este plano ao fim de cada sessão em que algo andar.

A ideia é construir em camadas pequenas: só puxamos algo do "Próximo" quando o que está em "Agora" estiver sendo usado de verdade. Isso evita montar um sistema bonito que ninguém usa. Os números de fase continuam como identificadores, porque outras notas falam em "fase 6", "fase 9".

## Agora

| Fase | O que é | Situação |
|---|---|---|
| 2 · Primeira semana | Dailies em uso e primeira revisão semanal | 🟡 revisão de 09/10 pulada · primeira em 16/10, às 9h |
| 6 · Migração do Notion | Uma página por vez ([[Fila da migração]]) | 🟡 PRD aprovado, triagem 01 (Metas de 2026) em andamento |
| 7 · Skills | Auditoria por categoria ([[2026-10-08 Auditoria de Skills]]) | 🟡 categorias 1 a 5 feitas, faltam 6 e 7 |
| 12 · Daily matinal | Seção Hoje do Agora preparada às 7h com compromissos e sugestão de tarefas ([[PRD - Daily matinal]]) | 🟡 construída desligada, aguardando teste e aprovação |
| 13 · Subagentes | Revisor de integridade, crítico independente, inventário da migração ([[PRD - Subagentes]]) | 🟡 aprovados e criados em 09/10 · crítico testado em 11/10; faltam 2 testes |
| 14 · Revisão de Regras | 19 propostas em 5 lotes ([[Revisão de Regras 2026-10-11]]) | 🟡 lote 1 feito em 11/10 · lote 2 aguardando aprovação |

**Fase 2.** O único objetivo é **abrir o 🏠 Agora** todo dia (desde 11/10 o dia mora lá, sem daily), mesmo que vazio. Diga "monta meu dia" e o Claude prepara tudo. Depois da revisão, o Claude ajusta a rotina em [[Rotina e Casa]] com o que funcionou.

**Fase 6.** Método em [[PRD - Migração do Notion]]: lotes pequenos, triagem sugerida (migrar, destilar, deixar no Notion, descartar), a Julia ajusta, o Claude cria notas novas com link de origem, e o Notion fica intacto. São duas áreas grandes:
1. **Biblioteca de registros** (rascunho de segundo cérebro da vida pessoal). O **Livro de receitas** (Biblioteca de registros › Cadernos › Livro de receitas) já é um banco de dados e vai para a fase 9, não para a migração comum.
2. **Meu Guia de UX** (Leis de UX, UX Writing, UX Analytics, Estudo de Caso...). Destino: `30 📚 Conhecimento/`.

**Fase 7.** Em 08/10 a auditoria criou ou revisou `critica-design`, `handoff-documentacao`, `figma-julia`, `prompt-prototipagem-ia`, `pesquisa-ux`, `competitor-pipeline-research`, `escrita-ux` (no app, com original em `Skills da Conta/`) e `planejamento` (no cofre). Plugins: de 17 para 8. **Falta:** categoria 6 (estilo de UI, sem desativar nada visual sem teste) e categoria 7 (ferramentas). Retomar com "continua a auditoria de skills pela categoria 6". Depois disso, as skills novas nascem pela Regra das 3 Vezes (candidatas no [[Catálogo de Skills]]).

## Próximo

| Fase | O que é | Depende de |
|---|---|---|
| 3 · Captura móvel | Substituto para o "mandar para mim mesma no WhatsApp" | A Julia escolher uma opção |
| 6 · Resto da migração | Outro cofre do Obsidian, pastas do Claude e do ChatGPT | A Julia passar o caminho do outro cofre (C11) |
| Revisão do sistema | Rodízio semanal: começa em 16/10 (Regras); skills, automações e uso real × PRD em 23/10 (C08 e C14) | 16/10 |

**Fase 3.** Testar uma opção por uma semana:
- **Continuar no WhatsApp** e colar tudo no Inbox uma vez por dia (sugerida para começar, porque não muda o hábito).
- **Obsidian Mobile + Obsidian Sync** (pago, o mais simples).
- **Obsidian Mobile + sincronização gratuita** (dá mais trabalho para configurar).

**Fase 6, resto.** Um lugar por vez: inventário → a Julia escolhe → entra como fonte bruta + nota processada. Nada é apagado na origem.

## Depois

| Fase | O que é | Quando |
|---|---|---|
| 11 · Planejamento semanal | Toda segunda de manhã, um panorama dos próximos 7 dias | Depois que o dia no Agora estiver funcionando |
| 9 · Receitas | Base de receitas, perfil de paladar, sugestões a partir da geladeira | **Virou projeto próprio em 2026-10-11:** [[Sistema de Alimentação]] (receitas, despensa, pré-preparo, compras e economia). Andamento no [[Acompanhamento - Sistema de Alimentação]] |

**Fase 9** _(ideia registrada em 07/10)_. **PRD First:** o Claude escreve o PRD antes de criar qualquer coisa. O que a Julia já disse que quer:
- **Base de receitas que ela gosta,** trazida do Livro de receitas do Notion. Uma nota por receita, com propriedades (categoria, ingredientes, tempo, se já fez, nota), e uma visão em Bases.
- **Perfil de paladar:** comidas que ama, comidas que não gosta, **alergias** e hábitos culinários.
- **"O que tem na geladeira?"** A Julia diz os ingredientes, e o Claude sugere receitas da base e também receitas parecidas de fora.

Ideias para o PRD _(sugestões do Claude, não decididas)_: um lugar provável é `20 🧭 Áreas/Cozinha/`, ligado a [[Rotina e Casa]] (alimentação). Alergia vira regra dura: nunca sugerir receita com o alérgeno, nem como "parecida". A sugestão por geladeira pode virar uma skill (`sugerir-receita`), que lê o perfil de paladar e a base.

## Fora por enquanto

- **8 · Hábitos.** Acompanhamento leve, só se a rotina estiver estável. Ela não quer dashboard de hábitos agora ([[Identidade]]).

## Concluído

| Fase | O que entregou | Quando |
|---|---|---|
| 0 · Fundação | Pastas, mapa, AIOS (regras, identidade, memória, histórico), templates, painel | 07/10 |
| 0b · Regras | Fonte única com permissões, PRD First, tokens, integridade, automações, subsistemas. Revisão da Julia está na planilha de tarefas | 07/10 |
| 0c · Projetos do trabalho | B2C, Motivo de Recusa e Email no cofre, com nota de entrada. Teste do Claude Code nas pastas está na planilha | 07/10 |
| 1 · Configuração do Obsidian | Daily, templates, Bases, pasta de novas notas, Agora fixado | 07/10 |
| 4 · Agenda | Revisão semanal recorrente; leitura da agenda da Trinks antes de planejar. Rituais de recarga e transição **cancelados** em 08/10: ela não usa time blocking | 08/10 |
| 5 · Carreira | Career OS integrado ao GLADIS (Cowork ajustado pela Julia) | 07/10 |
| 10 · Gerenciador de tarefas | Lista única em planilha (Bases), daily alimentada por ela, tarefas-ponte ([[PRD - Gerenciador de Tarefas]]) | 08/10 |

---

## Tarefas da Julia
- _Desde 08/10, as tarefas da Julia estão na [[00 📋 Tarefas.base|planilha de tarefas]] (teste do Claude Code, Regras, skills, triagem das Metas). Ficam aqui só as que ainda dependem de uma fase futura._
- [ ] Escolher a forma de captura móvel (fase 3)
- [ ] Passar o caminho do outro cofre do Obsidian (fase 6)
- [x] ~~Fixar a nota Agora~~ (07/10)
- [x] ~~Ajustar o Cowork~~ (07/10, sem vínculo com o Career OS por enquanto)
- [x] ~~Autorizar o conector do Notion~~ (já funciona, verificado em 07/10)
- [x] ~~Nome da área de estudos de UX~~ ("Meu Guia de UX", 07/10)
- [x] ~~Aprovar o PRD da migração e a regra "Notion só leitura"~~ (07/10)
- [x] ~~Horário da daily da Trinks e dia da revisão semanal~~ (feito em 07/10)

## Tarefas que o Claude faz sozinho

Ao abrir o cofre numa sessão nova, o Claude confere esta lista e avisa o que está pendente. Cada uma registra o resultado no [[Log]] ou na [[Memória]].

### Contínuas
- **C01 · Processar o Inbox.** Organiza e diz em poucas linhas o que foi para onde. Avisa se passar de 15 itens.
- **C02 · Manter o Agora atualizado:** lembretes, foco da semana, links das dailies.
- **C03 · Atualizar a "próxima ação" dos projetos** sempre que uma conversa mudar o estado de algum deles.
- **C04 · Registrar aprendizados** na Memória, com a marca _(inferência)_ quando for dedução.
- **C05 · Linkar conceitos** ao criar notas de estudo.
- **C16 · Manter este Plano atualizado** ao fim de cada sessão em que algo andar. _(Criada em 07/10, depois que o plano ficou desatualizado durante o dia.)_
- **C19 · Anotar ideias para o sistema** em [[Ideias - GLADIS]] assim que a Julia falar, e levar as novas para a revisão semanal. _(Criada em 09/10.)_

### Periódicas
- **C06 · Auditoria de consistência (quinzenal)**, usando a skill `revisao-integridade`, mais tags fora da lista oficial e notas paradas no Inbox há mais de 7 dias.
- **C07 · Insights da revisão semanal:** conexões, padrões de rotina e energia, avanço da carreira.
- **C08 · Revisão do sistema (em rodízio):** deixou de ser uma sessão mensal. Cada revisão semanal revisa um item (Memória, CLAUDE.md, Regras, Skills e tokens, Pequenos), conforme a tabela no [[Manual do Sistema]], seção 2. O checkpoint uso real × [[PRD - GLADIS]] entra no item da semana 4. Primeira: 16/10 (Regras).
- **C14 · Revisão de skills e automações**, no item "Skills e tokens" (sexta dos dias 22 a 28). Primeira em 23/10.

### Backlog (uma vez só)
- [ ] **C11 · Inventário de migração** do outro cofre do Obsidian, quando a Julia passar o caminho.
- [ ] **C13 · Rascunhar a rotina de casa** (limpeza e alimentação) em [[Rotina e Casa]], para aprovação. Sem datas fixas: tarefas da casa acontecem quando ela sente necessidade.
- [ ] **C15 · Notas de pessoas do trabalho.** Feitas em 09/10; em 2026-10-29 viraram versão enxuta em `20 🧭 Áreas/Carreira/Trinks (registro)/Pessoas/` ([[Pessoas da Trinks]]) e o detalhe saiu do cofre.
- [x] ~~**C17 · Propor os rituais da agenda pessoal**~~ (cancelada em 09/10: sem time blocking, decisão de 08/10)
- [x] **C18 · Terminar a troca de nome para GLADIS** (08/10): atalho das skills recriado, configs do Obsidian atualizadas com autorização, integridade ok.
- [x] C09 · Identificar as agendas e registrar os IDs (07/10)
- [x] C10 · Criar o catálogo de skills (07/10)
- [x] C12 · Evento recorrente da revisão semanal (07/10)

### O que o Claude nunca faz sozinho
Ver [[Regras]], seções "Com permissão" e "Proibido".
