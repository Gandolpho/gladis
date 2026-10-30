# Modo: dar nota

Depois de cozinhar, ela diz em uma frase como foi. Você registra na nota da receita. Nada de formulário.

## Entradas aceitas
"Fiz o curry, sabor 5, dificuldade 2" · "o caldo verde ficou ótimo, repito" · "não curti o macarrão de cogumelo" · "fiz ontem, ficou salgado".

## O que registrar (frontmatter da nota em `Receitas/`)
| Campo | Regra |
|---|---|
| `nota_sabor` | 1 a 5, o que ela disse. Se disse "ótimo/adorei" sem número, pergunte o número em uma linha. |
| `nota_dificuldade` | 1 a 5. Se não disse, deixe vazio; não pergunte de novo na hora. |
| `faria_de_novo` | `sim`, `talvez` ou `não`. Se ela disse "repito" = sim; "não curti" = não. Se não disse, infira só quando óbvio e marque _(inferência)_ no corpo; senão, deixe vazio. |
| `avaliacao` | `aprovada` se sabor ≥ 4 ou `faria_de_novo: sim`; `não curti` se sabor ≤ 2 ou `faria_de_novo: não`; senão `quero testar` continua até ela decidir (3 = talvez). |
| `ultima_vez` | Data de hoje, ou a data que ela disse ("ontem"). |

Comentário livre dela ("ficou salgado", "usei menos pimenta") vai em uma linha na seção **Notas** da receita, com a data. Se virou ajuste útil, também em "Variações".

## Estoque
Se ela contou o que usou ou o que sobrou, rode o modo atualizar estoque (`atualizar-estoque.md`). Sobrou comida pronta: diga que parte vira base congelada, nunca refeição pronta congelada.

## Aprendizado
Uma linha em `80 🤖 AIOS/Insights.md` quando aparecer padrão (ex.: dá nota 5 a tudo que tem batata e molho branco; nota 2 a recheios com legume cozido). Só quando houver 2 ou mais casos.

## Resposta
Uma linha: "Registrado: Caldo verde, sabor 5, dificuldade 2, faria de novo (sim). Passou para 'aprovada'."
