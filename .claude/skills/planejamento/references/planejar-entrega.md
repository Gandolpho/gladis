# Modo Planejar entrega

## Índice
1. Primeiro: o tamanho do horizonte
2. Perguntas mínimas
3. Para hoje
4. De 2 a 5 dias
5. De 1 a 2 semanas
6. Mais de 2 semanas
7. Encaixar uma urgência
8. Capacidade: quanto tempo ela tem de verdade
9. Onde o plano fica

## 1. Primeiro: o tamanho do horizonte
Nem tudo é sprint. O formato do plano depende do prazo:

| Prazo | Formato |
|---|---|
| Hoje | Lista de passos que cabe no dia (seção 3) |
| 2 a 5 dias | Um marco por dia (seção 4) |
| 1 a 2 semanas | Plano por semana; se for de design da Trinks, use o modo Sprint |
| Mais de 2 semanas | Fases, com só a primeira detalhada (seção 6) |

Se ela não disser o prazo, pergunte só isso. Se o prazo parecer pouco para o trabalho, diga com números e proponha opções (cortar escopo, pedir mais prazo, entregar em partes). Ela pode sugerir mais tempo; você também.

## 2. Perguntas mínimas
Antes de planejar, saiba (pergunte uma por vez, só o que faltar):
1. **O que precisa estar pronto** no fim? Uma frase.
2. **Até quando**, e para quem.
3. **Depende de alguém?** PO, design lead, dev, cliente.

O resto (agenda, outras tarefas, prazos em andamento) você lê no GLADIS e nas agendas.

## 3. Para hoje
1. Leia a agenda de hoje e veja quanto tempo livre sobra entre os compromissos.
2. Quebre a entrega em passos (regra de escrita do SKILL.md), estimando cada um.
3. Se não couber, diga o que sai do dia para caber, ou o que da entrega fica para amanhã. Ela decide.
4. A entrega vira uma das principais do dia, com o primeiro passo.

## 4. De 2 a 5 dias
1. Defina **um marco por dia**: o que precisa estar pronto no fim de cada dia ("Dia 1: dúvidas mandadas pro PO e fluxo rascunhado").
2. Coloque cedo o que depende dos outros (perguntas ao PO, revisão da design lead), porque a resposta demora.
3. Deixe o último dia mais leve: é a folga para imprevisto e ajuste.
4. Confira a agenda dos dias: reunião longa ou entrevista diminuem o dia.
5. Só o primeiro dia aparece detalhado em ações; os outros, como o marco.

Modelo: [plano-entrega.md](../templates/plano-entrega.md).

## 5. De 1 a 2 semanas
- **Trabalho de design da Trinks:** use o modo Sprint ([sprint.md](sprint.md)), mesmo que comece no meio de uma sprint.
- **Outros:** um objetivo por semana, marcos de 2 em 2 dias, folga no fim.

## 6. Mais de 2 semanas
1. Para design da Trinks, posicione na matriz conhecimento × risco (nota "Processo de design da Trinks") para escolher o caminho e estimar a duração.
2. Divida em fases de no máximo 2 semanas, cada uma com o que estará pronto no fim.
3. Detalhe só a primeira fase. As outras ficam como uma linha e são detalhadas quando chegar a vez.

## 7. Encaixar uma urgência
Quando chega algo novo no meio de um plano:
1. Estime o tamanho da urgência.
2. Veja o que está planejado para o mesmo período.
3. Mostre a troca, sem decidir por ela: "Para caber X até quinta, Y passa para a semana que vem, ou Z fica só com a primeira parte."
4. Se a troca mexe em prazo combinado com outra pessoa, a primeira tarefa é avisar essa pessoa. Ofereça o texto da mensagem.
5. Atualize o plano e as tarefas afetadas.

## 8. Capacidade: quanto tempo ela tem de verdade
1. Conte os dias úteis do período, menos feriados e ausências.
2. Desconte as reuniões fixas e as que estiverem na agenda (dailies, Design Critique, sprint planning, entrevistas).
3. Desconte o QA de UX, quando o período for de trabalho na Trinks: uma estimativa por card que está na coluna "Pronto para UX" do Jira, mais uma folga para os que vão chegar.
4. Planeje para **70 a 80%** do que sobrar. O resto é para interrupções; elas sempre vêm.
5. Separe o que é **essencial** do que é **se der**. O "se der" é o primeiro a sair quando algo atrasa.

## 9. Onde o plano fica
- Plano de até 5 dias: na nota de entrada do projeto (seção "onde parei" ou "plano") e nas tarefas.
- Cada passo com data vira tarefa em `02 ✅ Tarefas/`, com `prazo` e `primeiro_passo`; se for de projeto, como tarefa-ponte.
- Nada vai para o Notion sem o sim dela; entregue a lista do que atualizar lá.
