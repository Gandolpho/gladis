---
tipo: documento
contexto: pessoal
status: rascunho
data: 2026-10-09
tags: [tema/arquitetura-de-sistemas]
---

# PRD · Daily matinal

_Automação: construída desligada. Só é ativada com o sim da Julia ([[Regras]], seção 9)._

> **Atualização de 2026-10-11:** não existe mais daily. Onde este PRD diz "daily", leia **seção Hoje do `🏠 Agora.md`**. O Fechamento saiu (o histórico fica na aba Feitas da planilha), e o "Como estou" dela é copiado, idêntico, para o [[Diário]]. O prompt (`SKILL.md`) já está atualizado. A automação deve evoluir para a rotina matinal (A1 da [[Revisão de Regras 2026-10-11]]).

## Problema
Toda manhã a Julia precisa pedir "monta meu dia" e esperar. Começar o dia já é a parte difícil, e ter que pedir é mais um passo.

## Objetivo
Às 7h, antes de ela acordar (7h30), a daily já está criada com os compromissos e uma **sugestão** de tarefas. Ela só confirma ou ajusta no chat. Deu certo se, numa semana, ela abrir a daily pronta na maioria dos dias.

## Escopo
**Dentro:**
- Criar a daily de hoje pelo template, com os compromissos das duas agendas e os feriados.
- Escrever na daily um bloco "Sugestão do Claude": 3 principais (cada uma com primeiro passo mínimo), 5 a 7 outras e quais principais de dias anteriores perderiam a marca.
- Registrar no Fechamento da daily de ontem o que foi feito.

**Fora:**
- Marcar `principal` ou `fazer_em` na planilha. Isso só acontece depois de ela confirmar no chat ("confirma" ou com ajustes).
- Criar eventos ou blocos na agenda.
- Escrever em "Como estou".

## Restrições
- Roda no computador dela, como tarefa agendada do app. Precisa do computador ligado e do app aberto às 7h. Se estiver desligado, não roda, e ela pede "monta meu dia" como hoje.
- Agenda da Trinks só leitura.
- Se a daily de hoje já existir, não sobrescreve.

## Requisitos
- Prompt em `daily-matinal/SKILL.md`, com caminhos absolutos.
- Mesmo critério de escolha da rotina "Daily" do `CLAUDE.md`: urgentes e prazos próximos primeiro, mistura de trabalho, pessoal e casa, rápidas só se forem obrigatórias.
- Se uma agenda falhar, a daily é criada mesmo assim, com um aviso no bloco de compromissos.

## Riscos
- Sugerir mal por falta de contexto da conversa do dia anterior. Mitigação: é rascunho, ela confirma.
- Rodar com o computador dormindo e não acontecer. Mitigação: o pedido manual continua funcionando.

## Como testar (sem ativar)
Rodar a tarefa uma vez manualmente, num dia em que a daily ainda não exista, e conferir a daily criada.

## Como desligar
Pedir "desliga a daily matinal". O Claude desativa a tarefa agendada (ou a Julia desativa em Tarefas agendadas, na barra lateral do app).

## Critério de pronto
- [ ] Teste manual criou uma daily correta, sem mexer na planilha
- [ ] A Julia confirmou uma sugestão no chat e as tarefas foram marcadas
- [ ] Ativada com o sim da Julia, movida para `80 🤖 AIOS/Automações/` e registrada no [[Catálogo de Skills]]

## Aprovação
- [x] Aprovado pela Julia em 2026-10-15, com o horário trocado de 7h para 8h. Ativada na tarefa agendada `daily-matinal` (roda às 8h; o app aplica um atraso de alguns minutos). Ao fim, manda notificação curta. Teste manual fica para a primeira execução.
