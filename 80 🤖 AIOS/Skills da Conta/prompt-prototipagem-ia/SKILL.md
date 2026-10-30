---
name: prompt-prototipagem-ia
description: "Estrutura prompts para ferramentas de prototipagem por IA (Figma Make, Lovable e similares), separando regras inegociáveis de variáveis a testar e organizando testes de várias variações em matriz. Use sempre que a Julia pedir para escrever ou revisar um prompt para gerar protótipos, principalmente quando ela quiser comparar mais de uma opção de design de uma vez. Ative também quando ela descrever informalmente o que quer testar (ex.: vários estilos cruzados com vários tratamentos); o trabalho é converter isso na estrutura certa de prompt, não escrever texto corrido."
---

# Prompts para prototipagem com IA

## Índice
1. Por que existe
2. Antes de escrever
3. Estrutura do prompt
4. O que não incluir

## 1. Por que existe

Prompts que misturam "o que não pode mudar" com "o que estamos testando" geram resultados inconsistentes: a ferramenta varia algo que deveria ser fixo, ou fixa algo que deveria variar. Separar as duas camadas evita isso e facilita comparar os resultados, porque cada variação testa exatamente uma coisa (ou uma combinação clara de variáveis).

## 2. Antes de escrever

- **Novo do zero ou ajuste?** São dois tipos de prompt diferentes (ver seção 4). Se não estiver claro pela conversa, pergunte.
- **Conteúdo completo:** passe a lista de conteúdo pelo checklist de completude da skill `critica-design` (`references/completude.md`). É comum descobrir aqui um item que faltava.
- **Regras já aprendidas:** se a tela já passou pelo teste de estresse da `critica-design`, as quebras encontradas viram regras de layout inegociáveis.

## 3. Estrutura do prompt

Todo prompt segue esta ordem:

**1. Contexto.** Uma ou duas frases: o que é o componente ou tela, em que produto, para que tipo de usuário, em que página.

**2. Conteúdo obrigatório.** Os elementos de informação que precisam estar presentes em qualquer variação.

**3. Regras de layout inegociáveis.** Valem para todas as variações. Diferencie de estilo: uma regra inegociável normalmente resolve um problema já encontrado (ex.: "empilhar sempre na vertical" depois de uma quebra confirmada no mobile), não é preferência estética.

**4. Linguagem e tom.** Regras de texto que não variam: formalidade, vocabulário permitido ou proibido, idioma.

**5. Variáveis a testar, em matriz.** Com mais de uma dimensão (ex.: 3 estilos × 2 tratamentos de um estado), escreva como matriz, não como lista corrida. Nomeie cada eixo, liste os valores e declare o total de combinações, para a ferramenta gerar exatamente esse número:
```
Eixo A (estilo): [opção 1, opção 2, opção 3]
Eixo B (tratamento X): [opção 1, opção 2]
= 3 × 2 = 6 combinações, rotuladas A1, A2, B1, B2, C1, C2
```
Se um eixo for estilo visual, as bases de estilo instaladas (minimalista, brutalista e outras) podem descrever cada opção.

**6. Paleta e fidelidade.** Cores com hex quando já definidas, e o nível esperado: rascunho exploratório ou já usando tokens do design system real. Deixar implícito gera retrabalho de estilo que não era o objetivo do teste.

**7. Dados de exemplo.** Peça dados realistas do domínio, incluindo um caso extremo em pelo menos uma variação (nome longo, muitos itens, estado vazio ou de erro). Proíba nomes genéricos (John Doe, Acme) e números inventados apresentados como reais.

**8. O que evitar.** Inclua uma linha contra os vícios comuns de interface gerada por IA: emoji como ícone, três cards idênticos lado a lado, brilhos e gradiente em título, roxo por padrão, selos decorativos sem função.

**9. Formato de saída.** Como organizar as variações na tela (lado a lado, em grade, rotuladas) e se cada uma deve mostrar mais de um estado (ex.: normal e alerta lado a lado).

## 4. O que não incluir

- **Correção incremental num pedido de recomeço.** "Ajuste isso que já existe" faz a ferramenta herdar decisões antigas que deveriam ser descartadas. São dois tipos de prompt; confirme qual é o pedido.
- **Variáveis que não foram pedidas.** Se o pedido cruza duas dimensões, não acrescente uma terceira por conta própria. Dimensão extra aumenta o trabalho de avaliar sem ajudar a decisão.
