# Agenda da Julia (Google Calendar)

Leia antes de criar, mover, colorir ou conferir qualquer evento.

## As duas agendas

A regra é simples e não deve ser quebrada:

- **Pessoal:** `juliagandolpho@gmail.com`. Rotina de vida, saúde, casa, transições, compromissos avulsos.
- **Trabalho:** `julia.gandolpho@trinks.com`. Reuniões e tarefas do Trinks.

Nunca misture conteúdo pessoal na agenda de trabalho, ou o contrário, mesmo que pareça mais conveniente.

## Rotina fixa (dias de semana, agenda pessoal)

| Horário | Bloco | Categoria |
|---|---|---|
| 07h30 | Acordar | Saúde |
| 07h40 a 08h00 | Café da manhã reforçado + remédio de TDAH | Saúde |
| 09h00 a 09h10 | Ritual de abertura do trabalho (escolher 1 tarefa + timer 25 min) | Foco |
| 18h00 a 18h15 | Transição pós-trabalho (sem tela) | Transição |
| 19h00 a 19h30 | Jantar | Alimentação |
| 19h30 a 19h40 | Lavar a louça | Casa |
| 19h40 a 20h30 | Banho | Saúde |
| 22h00 | Alarme: começar rotina de dormir | Transição |
| Quarta 13h30 a 13h45 | Manutenção da casa (varrer) | Casa |

Por que está assim (não mexa sem entender):

- O remédio precisa de barriga cheia, demora de 30 a 60 min para fazer efeito e dura cerca de 8h. Acordar às 7h30 faz o efeito coincidir com o bloco livre de trabalho (9h a 10h45), a única janela sem reunião antes das dailies das 11h. Não adiante o café sem considerar isso.
- O sono está sendo ajustado aos poucos (30 min a cada poucos dias). Se ela ainda não acorda às 7h30, isso é esperado, não é fracasso.
- Sem exercício por enquanto. Fica para uma "fase 2", depois que o sono estabilizar. Não sugira sem ela pedir.
- Sem rotina fixa no fim de semana, de propósito (viagens mensais e clube do livro). Não insista em criar.
- O almoço (12h30 a 13h30) já está bloqueado na agenda de **trabalho**, recorrente, mas ela costuma ignorar o aviso silencioso. Ainda não resolvido. Se ela pedir ajuda, pense em alarme sonoro, não em bloco duplicado.

## Cores: tema "Pôr do sol"

O Google Calendar aceita cor em hexadecimal no site, mas **a ferramenta de automação usada aqui só aceita os `colorId` de 1 a 11**. Hex e IDs acima de 11 já foram testados várias vezes e sempre falham com "invalid argument". Não tente de novo; use só os IDs abaixo.

### Agenda pessoal (tons frios)

| Categoria | colorId | Cor |
|---|---|---|
| Saúde e corpo | 7 | Peacock |
| Alimentação | 9 | Blueberry |
| Casa | 2 | Sage |
| Foco e trabalho pessoal | 3 | Grape |
| Transição e descompressão | 1 | Lavender |
| Compromissos avulsos (casamento, consulta) | 9 | Blueberry (compartilhada de propósito, são raros) |

Grafite (8) e Basil (10) foram rejeitados por ela (fortes e escuros demais). Nunca use na agenda pessoal.

### Agenda de trabalho (tons quentes)

| Categoria | colorId | Cor |
|---|---|---|
| Reuniões fixas (dailies operacionais) | 6 | Tangerine |
| Reuniões de design | 11 | Tomato |
| Entrevistas com cliente | 5 | Banana |

Como categorizar (já causou confusão uma vez):

- A líder de design é a **Gorette** (`gorette.tavares@trinks.com`). Toda 1:1 Julia + Gorette e toda reunião organizada por ela sobre processo de design (UX Weekly, Checkpoint UX-TPV, Sprint planning, Workshop de design etc.) é **Reunião de design** (Tomato).
- Exceção: "Entrevista com cliente [nome]" também é organizada pela Gorette, mas fica em **Entrevistas com cliente** (Banana). A Julia pediu para manter separado.
- "Reuniões fixas" são as dailies recorrentes (Daily IA, Daily Clube e meio de pagamento, Daily Clube Pagamentos), organizadas pela Laura (`laura.albuquerque@trinks.com`).

Entrevistas com cliente são eventos avulsos, não série (o nome muda toda vez). Colorir as existentes não resolve as futuras. Quando ela pedir "organiza minha agenda" ou "confere minha semana", procure entrevistas novas sem cor (colorId ausente ou diferente de 5) e aplique Banana direto, sem perguntar.

## Ao adicionar algo

1. É pessoal ou trabalho? Se não estiver claro, pergunte antes de criar.
2. Aplique a cor da categoria mais próxima. Se nada encaixar, pergunte antes de inventar uma categoria.
3. Confira conflito nas **duas** agendas (dailies, almoço, rotina fixa) antes de criar.
4. Não crie blocos de trabalho profundo na agenda pessoal. Ela pediu para tirar, porque já se organiza pela agenda do trabalho.
5. O título do evento segue a regra de escrita da skill: verbo concreto, curto ("Mandar proposta do Clube pra Gorette", não "Alinhamento").

## Em espera (não faça sem ela pedir de novo)

- Organizar as tarefas do board/sprint do Trinks. Ela quer no futuro, mas por enquanto está fora.
- Cor hex de verdade, só quando a ferramenta for atualizada. Não prometa prazo.
- Existe um checklist em HTML (`rotina-diaria.html`) com a mesma paleta, que ela usa para marcar as tarefas do dia. Já está criado; só mencione se for relevante.
