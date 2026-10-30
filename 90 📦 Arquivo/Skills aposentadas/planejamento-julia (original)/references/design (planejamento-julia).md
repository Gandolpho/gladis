# Trabalho de design: quebrar feature e planejar sprint

As etapas abaixo são para **você** organizar a ordem do trabalho. Na resposta para a Julia, use os títulos simples da coluna "Título na lista" e escreva cada tarefa seguindo a regra de escrita do SKILL.md.

## Por que tarefas de design parecem grandes

Elas misturam etapas diferentes e dependem de outras pessoas. A saída é separar o que depende só dela do que depende de alguém, e começar pelo menor pedaço que só depende dela.

## Etapas (uso interno)

| Etapa | O que é | Título na lista | Melhor horário |
|---|---|---|---|
| Entender | Ler o pedido, ver o fluxo atual, listar dúvidas | Entender o pedido | 9h a 10h45 ou tarde |
| Propor | Rascunhar direções, decidir o que testar | Desenhar opções | 9h a 10h45 |
| Executar | Construir no Figma, componentes, protótipo | Montar no Figma | 13h30 a 16h |
| Comunicar | Mostrar, receber feedback, ajustar | Mostrar pra [pessoa] | conforme a agenda |
| Documentar | Regras no Figma, handoff, status | Deixar pronto pro dev | 16h a 18h |

## Exemplo de quebra

Pedido: "fazer a tela do Clube para o cliente".

```markdown
**Entender o pedido**
- [ ] Abrir o card do Clube no board (2 min)
- [ ] Ler os critérios de aceite (10 min)
- [ ] Escrever os estados da assinatura numa lista (15 min)
- [ ] Anotar as dúvidas pro PO (10 min)

**Desenhar opções**
- [ ] Duplicar a página "Clube" no Figma (2 min)
- [ ] Desenhar a opção A do card de saldo (25 min)
- [ ] Desenhar a opção B do card de saldo (25 min)

**Mostrar pra Gorette**
- [ ] Mandar prints das 2 opções pra Gorette no Slack (5 min)

**Montar no Figma** (depois da resposta da Gorette)
- [ ] Montar o card escolhido com saldo e consumo (25 min)
- [ ] Criar o estado "bloqueada" (25 min)
- [ ] Criar o estado "atrasada" (25 min)

**Deixar pronto pro dev**
- [ ] Escrever as regras de cada estado no Figma (20 min)
- [ ] Atualizar o status no board (5 min)
```

Mostre só o primeiro grupo em detalhe se a lista estiver longa. Os outros podem aparecer como uma linha cada ("Depois: desenhar opções, mostrar pra Gorette, montar no Figma, deixar pronto pro dev").

## Quando algo está bloqueado

Descubra o tipo de bloqueio antes de sugerir o que fazer. Para ela, escreva só a ação:

| Tipo (uso interno) | O que fazer | Como aparece pra ela |
|---|---|---|
| Falta definição (PO) | Parar e perguntar. Não inventar regra. | "Mandar a dúvida X pro PO no Slack (5 min)" |
| Falta aprovação (Gorette) | Avançar em outra coisa enquanto espera | "Enquanto a Gorette não responde: [outra tarefa]" |
| Dúvida técnica (dev) | Fazer uma versão simples enquanto valida | "Perguntar pro dev se X é possível (5 min)" + "Desenhar a versão simples (25 min)" |
| Sem bloqueio | Fazer | a próxima tarefa |

## Sprint (2 semanas)

Use quando ela pedir para planejar o sprint. Mantenha a tabela com poucas colunas e tarefas no formato simples.

```markdown
# Sprint [N]: [data início] a [data fim]

**O que precisa estar pronto:** [uma frase]

| Tarefa | Depende de alguém? | Feito |
|---|---|---|
| [tarefa simples] | [não / PO / Gorette / dev] | [ ] |

**Semana 1:** entender, desenhar opções, mostrar pra Gorette.
**Semana 2:** montar no Figma, deixar pronto pro dev. Sexta fica livre para imprevistos.

**Hangar do sprint** (fica para o próximo):
- [item]
```

No dia a dia do sprint, o plano do dia segue o Modo Dia do SKILL.md. A primeira linha pode dizer em que dia do sprint ela está ("Dia 3 de 10").

## Tamanho das tarefas

Toda tarefa visível tem no máximo 25 min. Trabalho maior vira vários blocos de 25 min com pausa entre eles. Uma tela inteira, por exemplo, são 3 a 4 blocos, cada um com uma ação concreta.
