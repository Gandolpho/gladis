---
name: escrita-ux
description: Escrita de interface (UX writing) da Julia para qualquer produto, em português do Brasil, com guias por produto (a Trinks já tem o seu), sempre entregando de 4 a 6 variações justificadas. Use quando ela pedir texto ou revisão de botão, título, mensagem de erro, feedback de sucesso, estado vazio, confirmação, campo de formulário, notificação, onboarding, tooltip, e-mail ou mensagem enviada pelo produto, ou disser "como fica esse texto", "o que escrevo nesse botão", "revisa a copy dessa tela", "melhora essa mensagem", "isso está no tom da Trinks?". Também para criar o guia de escrita de um produto novo. Não use para texto de marketing ou de vendas.
---

# Escrita de interface

## Índice
1. Por que existe
2. Guia do produto primeiro
3. Escolha o modo
4. Como escrever
5. Formato da resposta
6. Arquivos de apoio

## 1. Por que existe

A Julia escreve os textos das telas dos produtos em que trabalha. Esta skill dá um método único de escrita para qualquer produto e aplica, por cima dele, as regras do produto quando existem. Texto de interface serve para a pessoa completar a tarefa: claro primeiro, personalidade depois.

## 2. Guia do produto primeiro

Antes de escrever, descubra de qual produto é o texto:
- **Trinks:** o projeto está numa pasta da Trinks, a Julia citou a Trinks, ou o texto fala de salão, agenda, comanda, clube, assinatura, profissional. Leia [produtos/guia-trinks.md](references/produtos/guia-trinks.md). **Em projetos que não são da Trinks, ignore esse guia por completo**, inclusive a voz, os termos e as regras de formatação dele. Na dúvida sobre qual é o produto, pergunte.
- **Outro produto com guia:** procure um guia de escrita na pasta do projeto ou pergunte se existe. Se a Julia tiver um, use-o como guia do produto.
- **Sem guia:** use só as regras gerais. Se o produto for continuar, ofereça criar um guia no modo Guia de produto.

**Ordem de precedência:** guia do produto > regras gerais desta skill > bom senso. Quando o guia do produto e a boa prática discordarem, siga o guia, diga a discordância em uma linha e deixe a Julia decidir se quer levar ao time.

## 3. Escolha o modo

| Pedido | Modo |
|---|---|
| "Escreve o texto de...", "o que coloco nesse botão" | **Escrever** |
| "Revisa a copy", "isso está bom?", print ou lista de textos | **Revisar** |
| "Monta o guia de escrita do produto X" | **Guia de produto**: preencha [produtos/modelo.md](references/produtos/modelo.md) a partir dos materiais do produto |

## 4. Como escrever

1. **Contexto:** onde aparece (tela, modal, toast, e-mail), quem lê, o que a pessoa está tentando fazer, como ela provavelmente está se sentindo, o que está em jogo e o limite de espaço. Pense no celular primeiro.
2. **Rascunho como conversa:** o que você diria a essa pessoa, em voz alta, nesse momento?
3. **Aplique o padrão do elemento:** [padroes.md](references/padroes.md).
4. **Ajuste o tom ao momento:** [tom.md](references/tom.md). A voz do produto é constante; o tom muda com a situação.
5. **Revise em quatro passadas:** útil, conciso, conversa, claro ([revisao.md](references/revisao.md)).
6. **Confira as regras do guia do produto**, item por item.
7. **Monte as variações** e justifique cada uma (seção 5).

No modo Revisar, aplique os passos 5 e 6 ao texto existente e aponte cada problema com a regra que ele quebra.

## 5. Formato da resposta

**Regra fixa da Julia: nunca entregue uma frase só.** Ela não quer copiar e colar um texto pronto; quer comparar e decidir. Pensar e justificar cada opção melhora o resultado.

**Escrever:** sempre de **4 a 6 variações** de cada texto pedido (título, corpo, botão, ou o conjunto, quando forem pensados juntos). As variações precisam ser realmente diferentes entre si (de tamanho, de estrutura, de foco ou de tom), não a mesma frase com sinônimos. Para cada uma:

| # | Texto | Regras de UX writing aplicadas | Vantagens | Desvantagens | Quando usar |
|---|---|---|---|---|---|

- **Regras aplicadas:** cite as regras pelo nome (ex.: "verbo no infinitivo", "particípio no feedback", "o que fazer para corrigir", "mesmo verbo do título") e, na Trinks, a regra do guia.
- **Vantagens e desvantagens:** pensando na pessoa que lê, no espaço da tela (celular primeiro) e no produto.

Depois da tabela:
- **Minha recomendação:** qual variação e por quê, em 2 ou 3 linhas. A decisão é da Julia.
- **Para confirmar:** termos do produto ou regras de negócio que precisam de validação (ex.: o nome exato de uma funcionalidade).

Se o pedido for um fluxo com muitos textos, faça as variações para os textos mais importantes (títulos, botões principais, erros) e pergunte se ela quer variações também para os demais.

**Revisar:** tabela com texto atual, problema, regra e sugestão. Para cada texto com problema, ofereça de 2 a 4 sugestões com a mesma justificativa curta. Se estiver tudo certo, diga isso em uma linha.

## 6. Arquivos de apoio

| Arquivo | Conteúdo |
|---|---|
| [padroes.md](references/padroes.md) | Padrão de cada elemento: títulos, botões, links, campos, erros, sucesso, vazios, confirmações, notificações, carregamento, onboarding |
| [tom.md](references/tom.md) | Voz e tom, tom por estado emocional e por tipo de mensagem |
| [revisao.md](references/revisao.md) | As quatro passadas, tamanhos de referência, acessibilidade, linguagem inclusiva, como testar texto |
| [produtos/guia-trinks.md](references/produtos/guia-trinks.md) | Regras de escrita da Trinks |
| [produtos/modelo.md](references/produtos/modelo.md) | Modelo para o guia de um produto novo |

_Origem: método de design-skills:ux-writing e design:ux-copy, adaptado ao português; guia da Trinks a partir do Checklist de UX Writing e do Guia de Redação e Linguagem (originais no GLADIS, em `50 🗃️ Fontes Brutas/`). Auditoria de 2026-10-08._
