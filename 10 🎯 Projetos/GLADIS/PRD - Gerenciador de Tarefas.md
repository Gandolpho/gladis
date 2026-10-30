---
tipo: documento
contexto: pessoal
status: aprovado
data: 2026-10-08
tags: [tema/arquitetura-de-sistemas]
---

# PRD · Gerenciador de Tarefas

_Regra PRD First: nada é construído antes de este documento ser aprovado._

## Problema
As tarefas da Julia estão espalhadas: dailies, `TASKS.md` dos projetos, notas de entrada, Career OS e a cabeça dela. Com TDAH, ela esquece o que não está à vista, e organizar listas é justamente o que ela abandona. Ela também **não trabalha com horários fixos**: blocos de tempo na agenda não funcionam para ela.

## Objetivo
Um lugar único para ver **todas** as tarefas, organizado pelo Claude, que alimenta a daily automaticamente. A Julia só diz as tarefas e marca o que fez.

**Deu certo quando:**
- A Julia nunca precisa organizar a lista: ela fala ("anota que preciso..."), e o Claude cria e classifica.
- Marcar uma tarefa como feita na daily atualiza a lista, sem trabalho duplo.
- A daily mostra os compromissos, as 3 principais e outras tarefas possíveis, sem nenhum horário além dos compromissos.
- Tarefas não feitas reaparecem sozinhas no dia seguinte.

## Decisões já tomadas (conversa de 08/10)
| Tema | Decisão |
|---|---|
| Formato | **Opção A:** uma nota por tarefa + **Bases** (planilha). Sem plugins novos |
| Obrigatório | Só **nome** e **categoria**. O resto é opcional e preenchido pelo Claude |
| Prioridade | Sem níveis. Só uma caixinha **urgente**, e as urgentes vão para o topo |
| Complexidade | Trocada por **energia** (baixa, média, alta) |
| Status | a fazer · fazendo · feita · **atrasada** (calculada sozinha: prazo vencido e não feita) |
| Subtarefas | Caixinhas dentro da nota da tarefa |
| Link do projeto | Sempre que a tarefa for de um projeto, com link para a **nota de entrada** |
| Trabalho e pessoal | **Mesma lista.** A separação só existe na agenda do Google |
| Quem cria | O Claude, a partir do que a Julia fala |
| Quem planeja o "Hoje" | **O Claude decide**, porque a Julia delegou o planejamento do dia |
| Rápidas (até 5 min) | Caixinha **rápida** + aba própria. **Nunca** entram na daily, a não ser que sejam obrigatórias naquele dia |
| "Responder alguém do trabalho" | Tarefa normal, não rápida |
| Esta semana | Só as tarefas **com prazo** na semana |
| Feitas | Saem das abas "a fazer", mas **continuam visíveis** na daily e num histórico, porque ver o que foi concluído motiva |
| Não feitas | Passam sozinhas para o dia seguinte |
| Compromissos | Moram na agenda, mas **sempre** aparecem na daily e na revisão semanal |
| Fonte de verdade | **O projeto.** `TASKS.md` e Career OS continuam com o detalhe. A lista central recebe **tarefas-ponte** |
| Time blocking | **Não.** Só compromissos têm horário. Nada de blocos na agenda |
| Recarga | Lembrete sem horário |

## Escopo
**Dentro:** base de tarefas, template de tarefa, abas da planilha, nova estrutura da daily, regra das tarefas-ponte, e a migração das tarefas que já existem hoje (daily de 08/10, Agora, próximas ações dos projetos).
**Fora, por enquanto:** tarefas recorrentes, captura pelo celular e o **planejamento semanal de segunda-feira** (ideia guardada para depois que a daily estiver funcionando).

## Como funciona

### Onde mora
Uma pasta nova de primeiro nível, **`02 ✅ Tarefas/`**, logo depois do Diário, com:
- uma nota por tarefa (o nome da nota é o nome da tarefa);
- `00 📋 Tarefas.base`, a planilha com as abas (o "00" a mantém no topo da pasta);
- o template `70 🧩 Templates/Tarefa.md`.

_Criar pasta de primeiro nível precisa de permissão: aprovar este PRD vale como permissão._

### Propriedades de cada tarefa
| Propriedade | Tipo | Quem preenche | Para quê |
|---|---|---|---|
| `categoria` | lista | Claude (**obrigatória**) | trabalho, carreira, casa, saúde, pessoal, clube do livro, estudos. Nova categoria só quando surgir a necessidade, registrada em Decisões |
| `projeto` | link | Claude | Link clicável para a nota de entrada do projeto |
| `origem` | texto | Claude | De onde veio a tarefa-ponte, por exemplo "B2C · TASKS 4.5" |
| `fazer_em` | data | Claude | O dia em que o Claude planejou a tarefa. Se não for feita, continua aparecendo nos dias seguintes |
| `principal` | caixinha | Claude | Marca as 3 principais do dia |
| `urgente` | caixinha | Claude ou Julia | Passa na frente de tudo |
| `energia` | lista | Claude | baixa · média · alta |
| `prazo` | data | Claude | Deadline, se houver |
| `rapida` | caixinha | Claude | Até 5 minutos |
| `fazendo` | caixinha | Julia | "Comecei e não terminei" |
| `feita` | caixinha | **Julia** | Um clique. É a única coisa que ela precisa fazer |
| `concluida_em` | data | Claude | Preenchida quando o Claude vê uma tarefa feita, para o histórico |

O **status** é uma coluna calculada a partir das caixinhas: feita > atrasada (prazo vencido) > fazendo > a fazer. Assim ninguém precisa digitar status.

### Abas da planilha (`Tarefas.base`)
1. **Hoje · principais:** `principal` e `fazer_em` até hoje, não feitas, com as urgentes no topo, mais as feitas hoje (riscadas).
2. **Hoje · outras:** `fazer_em` até hoje, não principais, não rápidas, mais as feitas hoje.
3. **A fazer:** tudo o que não está feito. Urgentes no topo, depois por prazo.
4. **Esta semana:** prazo dentro da semana atual.
5. **Por projeto:** agrupada por projeto.
6. **Rápidas:** só as rápidas não feitas.
7. **Feitas:** histórico, da mais recente para a mais antiga.

### A daily nova
> **Atualização de 2026-10-11:** a Julia não usa mais a daily. A mesma estrutura abaixo (sem o Fechamento) passou para a seção Hoje do `🏠 Agora.md`, e o "Como estou" opcional vira diário em [[Diário]]. Rotina no `CLAUDE.md`, "Dia".

1. **🔵 Compromissos**, da agenda, com horário. São a única coisa com hora.
2. **🩷 3 principais**, a aba "Hoje · principais" embutida.
3. **Outras tarefas boas de fazer hoje**, a aba "Hoje · outras" embutida. Pode ter trabalho, hobbies, projetos pessoais e casa.
4. **🌸 Lembrete de recarga**, sem horário.
5. Capturas e Fechamento, como hoje.

Marcar `feita` em qualquer lugar (na daily ou na planilha) é marcar na nota da tarefa.

### Tarefas-ponte (projetos e Career OS)
- O detalhe fica no `TASKS.md` do projeto ou no Career OS.
- Quando um item precisa entrar no radar (próxima ação, prazo, urgência), o Claude cria a tarefa-ponte com `projeto` e `origem`.
- Quando a Julia marca como feita, o Claude marca também na origem. No Career OS, isso segue o protocolo dele (proposta + aprovação).
- Se houver diferença entre a ponte e a origem, o Claude mostra e pergunta, sem escolher sozinho.

### Rotina do Claude
- **Ao montar o dia:** lê as agendas e a planilha, escolhe as 3 principais e as outras, preenche `fazer_em` e `principal`, e tira o `principal` das tarefas de dias anteriores que não são mais prioridade.
- **Ao receber uma tarefa:** cria a nota, classifica e, se faltar categoria adequada, propõe uma nova.
- **No dia seguinte:** registra em "Fechamento" da daily anterior a lista do que foi feito, para o histórico não depender da planilha.
- **No início de cada mês:** mover as tarefas feitas do mês anterior para `02 ✅ Tarefas/Feitas/AAAA-MM/`, para a pasta principal ficar só com o que está ativo. A planilha continua mostrando tudo. _(Decidido em 08/10, em teste.)_
- **Na revisão semanal:** compromissos da semana, feitas da semana e tarefas sem prazo paradas há mais de 2 semanas (fazer, agendar ou largar?).

## Riscos
| Risco | Mitigação |
|---|---|
| Muitos arquivos pequenos | Ficam todos numa pasta só, e quem organiza é o Claude. A Julia vê pela planilha |
| Tarefa-ponte e origem ficarem diferentes | O Claude atualiza as duas e, na revisão semanal, confere as pontes |
| Daily antiga mostrar as tarefas de hoje, porque a aba embutida é dinâmica | O Claude grava uma lista fixa do que foi feito no Fechamento de cada daily |
| Editar caixinha dentro da planilha embutida não funcionar na versão do Obsidian dela | **Piloto:** testar com 3 tarefas antes de migrar tudo |
| Lista de "outras" ficar enorme e virar culpa | No máximo umas 5 a 7 "outras" por dia. O resto fica em "A fazer" |

## Plano de implementação (depois da aprovação)
1. Criar a pasta, o template e a `Tarefas.base`.
2. **Piloto** com as 3 principais de hoje: a Julia testa marcar como feita na daily e na planilha.
3. Se funcionar, migrar as tarefas existentes e trocar o template da daily.
4. Atualizar o CLAUDE.md (roteamento e rotina da daily) e as Regras, se precisar.
5. Rodar a revisão de integridade.
6. O Day Planner pode ser desativado. É opcional, porque não atrapalha.

## Aprovação
- [x] PRD aprovado pela Julia em 2026-10-08 (inclui a permissão para criar `02 ✅ Tarefas/`)
