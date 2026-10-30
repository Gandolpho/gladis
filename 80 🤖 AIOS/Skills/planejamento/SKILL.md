---
name: planejamento
description: Planejamento da Julia no GLADIS, para trabalho e vida pessoal, com tarefas escritas de um jeito que dá para começar sem pensar. Use quando ela pedir para planejar o dia, a semana ou a sprint; para planejar uma entrega com qualquer prazo ("tenho que entregar isso hoje", "em 3 dias", "até sexta", "nas próximas semanas"); para encaixar algo urgente; quando estiver sobrecarregada ou sem saber por onde começar; para quebrar uma tarefa ou feature em passos; para destravar algo bloqueado por PO, design lead ou dev; para montar o debriefing de um briefing novo; para preparar o update da sprint review; ou para mexer na agenda (incluir, conferir, cores, conflitos).
---

# Planejamento

## Índice
1. Por que existe
2. A regra principal: como escrever cada tarefa
3. Escolha o modo
4. O que não fazer
5. Como esta skill evolui
6. Arquivos de apoio
7. Registro de mudanças

## 1. Por que existe

A Julia é designer de produto na Trinks e tem TDAH e autismo. O que não está escrito de forma clara, num lugar visível, não começa, e tarefa grande trava. Esta skill existe para **reduzir o atrito de começar** e para tirar dela o trabalho de montar o plano, não para maximizar produtividade. O planejamento dela muda com frequência: esta skill acompanha essas mudanças (seção 5).

## 2. A regra principal: como escrever cada tarefa

Vale para qualquer lista, em qualquer modo. **Toda linha precisa poder ser começada sem pensar.**

1. **Verbo que dá para ver acontecendo:** abrir, escrever, mandar, copiar, ler, separar, desenhar, marcar. Evite verbos-nuvem: ver, trabalhar em, organizar, resolver, finalizar, ajustar, alinhar, revisar (sem dizer o quê).
2. **Uma ação por linha.** Se tem "e", vira duas.
3. **Qual coisa e onde:** o arquivo, a tela, a pessoa, o canal. "Mandar 2 prints pra design lead no Slack", não "alinhar com a liderança".
4. **Curta:** cabe numa linha de celular, até umas 10 palavras.
5. **Primeiro passo de 2 minutos, sem decisão.** Só precisa fazer ela começar ("Abrir o arquivo do Clube no Figma").
6. **Sem decisão escondida.** Se exige escolher, a escolha vira a tarefa, com as opções. Se a decisão não é dela, a tarefa é perguntar.
7. **Tamanho entre parênteses** quando ajudar: (2 min), (10 min), (30 min), (meio dia).
8. **Palavras do dia a dia dela.** Figma, daily, handoff, card estão ok; termos de método (fase, stakeholder, entregável) não entram na tarefa.
9. **Mostre pouco.** Detalhe só o próximo pedaço; o resto aparece como uma linha.
10. **Sem culpa.** Nada de "atrasado" ou "deveria". O que não saiu vai para depois sem comentário.

| Em vez de | Escreva |
|---|---|
| Trabalhar na tela do Clube | Abrir o arquivo do Clube no Figma (2 min) |
| Alinhar direção com stakeholders | Mandar 2 prints pra design lead no Slack (5 min) |
| Revisar e documentar regras do card | Escrever a regra do estado "bloqueado" no Figma (10 min) |
| Fazer o QA da homologação | Abrir o card de QA no Jira e ler o que mudou (5 min) |

Antes de enviar qualquer lista, releia linha por linha: "dá pra começar isso sem pensar?". Se faltar informação para uma tarefa concreta, faça **uma pergunta só** e espere.

## 3. Escolha o modo

| Pedido | Modo | Leia |
|---|---|---|
| "Monta meu dia", "o que faço agora", pouca energia | **Dia** | [dia.md](references/dia.md) |
| "Tô sobrecarregada", "não sei por onde começar", despejo mental | **Destravar** | [destravar-e-quebrar.md](references/destravar-e-quebrar.md) |
| "Quebra essa tarefa", "o que eu faço primeiro nisso", algo bloqueado | **Quebrar** | [destravar-e-quebrar.md](references/destravar-e-quebrar.md) |
| "Tenho que entregar X hoje / em N dias / até tal data", "chegou uma urgência" | **Planejar entrega** | [planejar-entrega.md](references/planejar-entrega.md) |
| "Planeja minha sprint", sprint planning da sexta, briefing novo, review | **Sprint de design** | [sprint.md](references/sprint.md) |
| Incluir, conferir ou mudar algo na agenda | **Agenda** | [agenda.md](references/agenda.md) |

Um pedido pode passar por mais de um modo: planejar uma entrega de 3 dias e depois montar o dia de hoje com ela.

## 4. O que não fazer

- Não marcar horário em tarefa nem criar bloco de foco, transição ou recarga na agenda. Só compromissos têm hora.
- Não inventar regra de negócio para destravar trabalho. Se depende do PO, a tarefa é perguntar.
- Não editar o Notion nem o Jira por conta própria. Entregue a lista do que atualizar; editar o Notion só com o sim dela, a cada vez.
- Não sugerir rotina de exercício ou de fim de semana sem ela pedir.
- Não usar gamificação, pontuação ou sequência de dias sem ela pedir.

## 5. Como esta skill evolui

O jeito de planejar da Julia ainda está sendo descoberto e vai mudar.
- **Quando notar atrito** (ela não usa uma parte, pede sempre a mesma correção, um formato não funciona), proponha a mudança em uma ou duas linhas, citando o que observou.
- **Com o sim dela**, edite o arquivo certo desta skill e registre na seção 7 (data, o que mudou, por quê).
- Mudança de rotina do GLADIS (onde o dia é mostrado, como as tarefas são guardadas) também atualiza o `CLAUDE.md` e, se for decisão, [[Decisões]].

## 6. Arquivos de apoio

| Arquivo | Conteúdo |
|---|---|
| [dia.md](references/dia.md) | Montar o dia: onde fica, como escolher, ordem por energia |
| [destravar-e-quebrar.md](references/destravar-e-quebrar.md) | Despejo mental, quebrar tarefas, etapas de design, bloqueios |
| [planejar-entrega.md](references/planejar-entrega.md) | Entregas de qualquer prazo, encaixar urgências, capacidade |
| [sprint.md](references/sprint.md) | Sprint de design da Trinks, debriefing, review |
| [agenda.md](references/agenda.md) | As duas agendas, cores, como criar eventos |
| [plano-entrega.md](templates/plano-entrega.md) | Modelo de plano de entrega curta |
| [plano-sprint.md](templates/plano-sprint.md) | Modelo do plano da sprint |
| [update-status.md](templates/update-status.md) | Modelo de update para a review ou para a liderança |

O processo de design da Trinks (cadência, matriz conhecimento × risco, Notion, debriefing) está na nota `20 🧭 Áreas/Trinks/Processo de design da Trinks.md`. Leia de lá; não copie para cá.

## 7. Registro de mudanças
- **2026-10-20** · `dia.md`: o dia no chat passa a ser texto com emoji, sem card colorido (card só sob pedido). Motivo: economia de tokens. Decisão da Julia.
- **2026-10-11** · O dia passa a morar no `🏠 Agora.md` (seção Hoje), sem daily. `dia.md`, seção 1, atualizada. Decisão da Julia.
- **2026-10-11** · `agenda.md` ganhou a seção 6, "Padrões da agenda", trazida da Memória para economizar tokens (lote 1 da [[Revisão de Regras 2026-10-11]]).
- **2026-10-08** · Criada a partir da `planejamento-julia` (claude.ai), alinhada ao GLADIS (sem horários, tarefas em `02 ✅ Tarefas/`), com os modos Planejar entrega e Sprint de design. Capacidade e update de status adaptados de product-management.
