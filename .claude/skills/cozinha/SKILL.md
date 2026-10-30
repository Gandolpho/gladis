---
name: cozinha
description: 'Cozinha da Julia no GLADIS: estoque pelo chat, "o que dá pra fazer hoje?", receita na hora, nota depois de cozinhar e importação de receita (link do YouTube ou do Instagram, texto, print ou ditado). Use quando ela falar de comida, geladeira, freezer, receita, "acabou o...", "comprei...", "fiz o...", "o que eu como?", "vou pedir delivery", "tô sem cabeça pra cozinhar" ou mandar um link de receita.'
---

# Cozinha

Opera a área `20 🧭 Áreas/Minha Cozinha/` ([[Minha Cozinha]]), parte do [[Sistema de Alimentação]]. Tudo pelo chat: nenhuma planilha para a Julia preencher. O Claude faz o trabalho de organizar.

## Antes de qualquer modo

1. Leia `20 🧭 Áreas/Minha Cozinha/Perfil Alimentar.md` (curto). Ele vale mais do que qualquer receita.
2. Leia **só** o arquivo de apoio do modo em uso (tabela abaixo). Não carregue os outros.
3. Busque receitas só em `20 🧭 Áreas/Minha Cozinha/Receitas/`, lendo primeiro o frontmatter.

## Regras duras (nunca quebrar)

1. **Mel nunca entra**, nem "parecido". Em produto que possa ter (barbecue, mostarda e mel, granola, alguns pães e molhos prontos), avisar "conferir o rótulo". Receita importada que leve mel: marcar `alerta` e propor troca, nunca sugerir como está.
2. Nada babento nem borrachudo; nada de frutos do mar. Peixe pode.
3. Nunca sugerir congelar refeição pronta. Só bases.
4. Nunca montar plano fixo sem ela pedir.
5. Receita não testada por ela fica `avaliacao: quero testar` até ela dar nota.
6. O que não estava na fonte vira _(a conferir)_. Nunca chute.
7. Porção dela: **prato de sobremesa**, metade a 3/4 de um adulto. Porção extra vira base congelada.
8. Nunca fazer pedido (iFood, mercado). Só montar lista.

## Modos

| Ela diz | Modo | Arquivo de apoio |
|---|---|---|
| "acabou o requeijão", "comprei frango", "fiz o nhoque", "tem X em casa" | Atualizar estoque | `references/atualizar-estoque.md` |
| "o que dá pra fazer hoje?", "tô sem ideia", "vou pedir delivery", "tô sem cabeça" | O que dá pra fazer hoje | `references/o-que-fazer-hoje.md` |
| "me dá a receita do...", "como faz o...", escolheu uma das opções | Me dá a receita | `references/me-da-a-receita.md` |
| "fiz o curry, sabor 5, dificuldade 2", "adorei", "não curti" | Dar nota | `references/dar-nota.md` |
| link do YouTube ou do Instagram, texto, print, receita ditada | Importar receita | `references/importar-receita.md` |

## Depois de qualquer modo

- Diga em **uma ou duas linhas** o que mudou e onde. Nada de relatório.
- Se o estoque ficou incerto para algo que importa, pergunte "ainda tem X?" (uma pergunta, não várias).
- Padrão percebido (ela sempre pede X, nunca faz Y): uma linha em `80 🤖 AIOS/Insights.md`, sem interromper.

## Fora do escopo desta skill (fases seguintes do PRD)

Lista de compras, mapa de mercados, preços e gastos (fase 2); catálogo de bases e roteiro do dia grande (fase 3); cardápio de emergência estruturado e nutrição estimada (fase 4); linha de comida no "monta meu dia" (fase 5, automação, só com o sim dela). Se ela pedir algo disso antes da fase chegar, anote como pedido e diga que a fase ainda não foi construída.
