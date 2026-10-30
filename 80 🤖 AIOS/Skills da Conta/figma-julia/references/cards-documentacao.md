# Cards de documentação

## Índice
1. Por que
2. Categorizar antes de criar
3. Como decidir uma regra ambígua
4. Anatomia do card
5. Pareamento e sub-blocos

## 1. Por que
Para parar de criar estilos de texto improvisados (parágrafo corrido, barra de título escura genérica) toda vez que uma regra precisa ser documentada ao lado de um fluxo ou componente. Um sistema só, com uma cor por categoria.

## 2. Categorizar antes de criar
Nunca crie um card sem classificar a informação. A pergunta: isso é sobre **comportamento de interface**, **conteúdo condicional**, **posição no fluxo** ou **contexto geral**?

| Categoria | Cor (RGB 0 a 1) | Quando usar |
|---|---|---|
| Fluxo | `{r:0.15, g:0.42, b:0.92}` azul | Onde e como um elemento se insere numa tela ou fluxo |
| Regra de Interação | `{r:0.9686, g:0.6510, b:0.0314}` laranja | Como a interface reage a um evento: clique, hover, scroll, fechamento, ordenação, erro, carregamento |
| Exceção / Estado | `{r:0.55, g:0.25, b:0.85}` roxo | O que aparece ou não dependendo de status ou dado |
| Contexto | `{r:0.45, g:0.45, b:0.45}` cinza | Objetivo, escopo, visão geral do projeto |

Se o arquivo tiver paleta de marca, adapte as cores, mas mantenha uma cor por categoria.

**Sinal de alerta:** um card chamado genericamente "Regra de Negócio" que mistura comportamento de interface e conteúdo condicional são duas categorias disfarçadas. Divida antes de seguir. Foi esse erro que originou o padrão: 9 cards "Regra de Negócio" eram, na verdade, 6 de Interação e 3 de Exceção/Estado.

## 3. Como decidir uma regra ambígua
1. Descreve uma reação a um evento ("quando clica, passa o mouse, rola, sai da tela...")? → **Regra de Interação**. Ex.: "o popover fecha ao clicar fora".
2. Descreve o que aparece dependendo de dado ou status ("se o status for X, exibe Y")? → **Exceção / Estado**. Ex.: "assinaturas Cancelada ou Encerrada não geram card".
3. Descreve posição, ponto de inserção ou qual tela recebe o elemento? → **Fluxo**. Ex.: "o ícone do Clube entra na mesma fileira do ícone de Pacote, na tela de Lançamento em Comanda".
4. É escopo ou objetivo, sem ser regra específica? → **Contexto**, geralmente uma vez por projeto, na abertura.

## 4. Anatomia do card
- **Frame externo:** fundo branco, borda 1 px cinza claro `{r:0.88,g:0.88,b:0.88}`, raio 12, padding de 16 a 20.
- **Pílula de categoria:** no topo, raio 500, fundo na cor da categoria, texto branco Semi Bold 10 a 11, em maiúsculas.
- **Título:** 8 a 10 px abaixo da pílula, Inter Semi Bold 15 a 17.
- **Corpo em bullets:** uma regra por linha, prefixo `"•  "`, Inter Regular 12 a 13, altura de linha de 145 a 180%. Nunca parágrafo corrido.

Código pronto em `card-builder.md`.

## 5. Pareamento e sub-blocos
- Regra de uma interação específica fica **ao lado** da tela ou do fluxo que ela descreve.
- Quando uma mesma área tem várias categorias (ex.: "Regras e interações do fluxo" com regras de interação e regras de exibição por status), separe em sub-blocos com um rótulo de texto simples acima de cada grupo, mesmo que as cores já diferenciem.
- Antes de criar um card novo num arquivo que já usa o padrão, reaproveite o sistema existente em vez de inventar um estilo.
