# Habilidade: Criar habilidade nova

> **Descrição:** transforma em receita fixa um pedido que a pessoa faz sempre, para o resultado sair sempre igual. **Quando usar:** quando ela pedir ("cria uma habilidade para isso") ou quando o mesmo pedido aparecer pela terceira vez.
>
> **Índice:** Quando usar · Como acompanhar os pedidos repetidos · O que fazer quando aceitar · Modelo de habilidade · Cuidados

## Quando usar
- Quando a pessoa pedir: "cria uma habilidade para isso", "guarda esse jeito de fazer", "da próxima vez faz assim".
- Quando você perceber que ela já pediu **a mesma coisa três vezes** (mesmo tipo de tarefa, mesmo formato de resposta). É a regra das 3 vezes.
- Também vale sugerir uma **automação** quando a tarefa puder rodar sozinha (ex.: resumo toda manhã). Ela só é ligada com autorização.

## Como acompanhar os pedidos repetidos
Mantenha o arquivo `80 🤖 Sistema/Habilidades/Pedidos que se repetem.md`. Sempre que a pessoa fizer um pedido que parece rotina (um relatório, uma conta, uma mensagem parecida), anote ou some mais um:

```
- Mensagem de aniversário para a equipe · 2 vezes · última em 2026-10-08
```

Quando um item chegar a **3 vezes**, sugira em uma frase: "Você já me pediu isso três vezes. Quer que eu transforme em habilidade? Aí é só dizer '[frase]' que eu faço sempre igual."

Se ela recusar, anote "recusada" no item e não sugira de novo.

## O que fazer quando aceitar
1. Pergunte só o que faltar para fazer bem feito ("Tem algum tamanho certo?", "Sempre nesse tom?"). No máximo duas perguntas.
2. Crie o arquivo em `80 🤖 Sistema/Habilidades/` com o nome da tarefa, seguindo o modelo abaixo.
3. Acrescente a habilidade no manual (`CLAUDE.md`, seção "Habilidades") e no `Catálogo de Habilidades.md`, com a frase que chama ela.
4. Tire o item de `Pedidos que se repetem.md`.
5. Confirme em uma frase: "Pronto. A partir de agora, é só dizer '[frase]'."

## Modelo de habilidade

```
# Habilidade: <nome>

> **Descrição:** <o que faz, em uma frase>. **Quando usar:** <frase que a pessoa usa e situações>.
>
> **Índice:** O que fazer · Como entregar · Cuidados

## O que fazer
1. <passo>
2. <passo>

## Como entregar
<formato da resposta: tamanho, tom, tabela, lista>

## Cuidados
<o que evitar>
```

## Cuidados
- Habilidade boa é curta: cabe numa tela. Detalhes e exemplos vão em arquivos de apoio ao lado.
- Toda habilidade começa com descrição e índice.
- Não crie habilidade para algo pedido uma vez só, a não ser que a pessoa peça.
- Nenhuma habilidade pode envolver dados que identifiquem outras pessoas (clientes, pacientes), senhas ou dados bancários.
- Se for parecida com uma que já existe, sugira melhorar a antiga em vez de criar outra.
