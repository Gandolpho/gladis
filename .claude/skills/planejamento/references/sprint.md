# Modo Sprint de design (Trinks)

## Índice
1. Quando usar
2. Antes: leia o processo
3. Passo 1: juntar o que existe
4. Passo 2: capacidade
5. Passo 3: posicionar cada iniciativa
6. Passo 4: distribuir nas duas semanas
7. Passo 5: entregar o plano
8. Durante a sprint
9. Debriefing de um briefing novo
10. Review da sprint

## 1. Quando usar
Na sprint planning (sextas, 15h), quando ela disser "planeja minha sprint", ou quando uma entrega de design da Trinks durar de 1 a 2 semanas. Tarefas curtas que surgem no meio da sprint seguem o modo Planejar entrega (seção "Encaixar uma urgência").

## 2. Antes: leia o processo
Leia `20 🧭 Áreas/Trinks/Processo de design da Trinks.md`: a cadência das duas semanas, a matriz conhecimento × risco, os tipos de tarefa do Notion e o template de debriefing. Se algo lá estiver desatualizado, avise a Julia antes de planejar.

## 3. Passo 1: juntar o que existe
| Fonte | Como obter | O que tirar |
|---|---|---|
| Iniciativas no Notion de design | Conector do Notion (só leitura); se não tiver acesso, peça prints | Iniciativas dela, status macro, prazo limite, esforço previsto, prioridade, tarefas abertas |
| QA de UX no Jira | A Julia cola a lista ou manda print (não há acesso ao Jira) | Itens em homologação esperando teste |
| GLADIS | Notas de entrada e `TASKS.md` dos projetos ativos, `02 ✅ Tarefas/` | O que está em andamento, prazos, tarefas-ponte |
| Sprint anterior | Plano da sprint anterior | O que não saiu e por quê |
| Agendas | As duas agendas, nas duas semanas | Feriados, ausências, reuniões longas, entrevistas |

Liste para ela, em poucas linhas, o que encontrou, e pergunte só o que faltar.

## 4. Passo 2: capacidade
Siga a seção 8 de [planejar-entrega.md](planejar-entrega.md):
- 10 dias úteis, menos feriados e ausências.
- Menos reuniões fixas: dailies, Design Critique (quinta), sprint planning e review (sexta).
- **QA de UX:** não tem tempo fixo. A Julia testa **card a card**, conforme os cards chegam na coluna "Pronto para UX" do Jira. Some uma estimativa por card que já está lá (card pequeno, umas 2 horas; card grande, meio dia a 1 dia; os pontos do Jira ajudam a comparar) e deixe uma folga para os que ainda vão chegar. Cada card é uma tarefa própria em `02 ✅ Tarefas/` ("QA de UX - <código> <assunto>").
- Planejar para 70 a 80% do que sobrar.

Mostre a conta em uma linha: "10 dias − 1 feriado − 1,5 de reuniões − 2 de QA (4 cards + folga) = 5,5 dias; planejando 4,5."

## 5. Passo 3: posicionar cada iniciativa
Para cada iniciativa da sprint:
1. **Matriz conhecimento × risco:** em qual quadrante está e, portanto, qual caminho segue (Criar > Desenvolver; Pesquisa rápida > Criar > Desenvolver; Criar > Testar > Desenvolver; Pesquisar > Criar > Testar > Desenvolver). Se não der para saber, pergunte à Julia; não chute.
2. **Em que etapa está agora** e qual é a próxima.
3. **Tarefas desta sprint**, com o tipo de tarefa do Notion e o esforço em dias.
4. **Prioridade:** essencial ou se der. Prazo limite e prioridade da iniciativa no Notion mandam.

Se a soma passar da capacidade, mostre o que fica de fora e sugira o que negociar com a liderança ou o PO.

## 6. Passo 4: distribuir nas duas semanas
Use a cadência da Trinks como esqueleto:

| | Semana 1 | Semana 2 |
|---|---|---|
| Segunda | Debriefing com o PO | Ajustes e documentação |
| Terça a quinta | Protótipo: fluxograma, estrutura, protótipo | Ajustes e documentação (até quarta); entrega para squad e PO (quinta) |
| Sexta | Apresentar protótipo e alinhar escopo | Ler o próximo briefing; sprint planning e review |

- Iniciativas em etapas diferentes podem conviver: uma em protótipo, outra em documentação.
- QA de UX: os cards que já estão prontos para UX entram cedo na sprint (o time de dev está esperando); os que chegarem depois entram no dia em que chegarem, pelo modo Planejar entrega. Quando ela mandar o detalhamento de um card, monte o checklist e o plano do teste dentro da tarefa do card, usando a skill `handoff-documentacao` (modo QA de implementação).
- Validação com usuários ou técnica entra quando o caminho da matriz pedir.
- Sem horários: o plano diz o que fica pronto em cada dia ou semana.

## 7. Passo 5: entregar o plano
1. **Plano da sprint** em `20 🧭 Áreas/Trinks/Sprints/AAAA-MM-DD Sprint de design.md` (data da segunda), seguindo [plano-sprint.md](../templates/plano-sprint.md).
2. **Tarefas** em `02 ✅ Tarefas/`, uma por entrega da sprint, com `prazo`, `primeiro_passo` e, se for de projeto, `projeto` e `origem`.
3. **Para o Notion:** uma tabela com o que criar ou atualizar (iniciativa, tipo de tarefa, prazo, esforço, quem revisa), para ela copiar. Editar o Notion só com o sim dela.
4. **Resumo no chat:** objetivo da sprint em uma frase, a conta de capacidade, o que é essencial e o primeiro passo de segunda-feira.

## 8. Durante a sprint
- O modo Dia puxa do plano da sprint as tarefas de cada dia.
- No meio da sprint (quarta da semana 1 ou segunda da semana 2), se ela pedir: compare o planejado com o feito e ajuste. Sem culpa: o objetivo é replanejar, não cobrar.
- Urgência nova: modo Planejar entrega, seção "Encaixar uma urgência".

## 9. Debriefing de um briefing novo
Quando chegar um briefing (sexta da semana 2):
1. Leia o briefing e os arquivos recebidos.
2. Preencha o template de debriefing da Trinks (na nota do processo): resumo, contexto de negócio e OKRs, usuários e dores, indícios, escopo, trabalho de UX, restrições.
3. O que o briefing não diz vira **pergunta para o PO**, não suposição. Monte a lista de perguntas para a reunião de segunda.
4. Posicione a iniciativa na matriz conhecimento × risco e sugira o caminho. Se precisar de pesquisa, ofereça a skill `pesquisa-ux` (modo Planejar).
5. Salve o debriefing na pasta do projeto no GLADIS (crie a pasta pelo padrão de projeto, se for novo).

## 10. Review da sprint
Na sexta da semana 2, monte o update com [update-status.md](../templates/update-status.md): o que ficou pronto, o que está em andamento, riscos e decisões que ela precisa de alguém. Registre na nota da sprint o que não saiu e por quê, para a próxima planning.
