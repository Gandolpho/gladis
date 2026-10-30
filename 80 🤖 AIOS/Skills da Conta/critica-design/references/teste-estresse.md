# Teste de estresse de conteúdo e layout

## Índice
1. Por que
2. O que testar
3. Como conduzir
4. Como relatar

## 1. Por que
Um layout que funciona com dados bem-comportados (nomes curtos, poucos itens, tela larga) não prova nada sobre produção. Já aconteceu: no mobile, três de quatro variações de um card quebraram porque organizavam itens em colunas lado a lado em vez de empilhar. No desktop, com poucos itens, ninguém teria visto.

## 2. O que testar
Não há lista fixa: depende do que o componente exibe. Pergunte:
1. **Texto mais longo:** qual campo pode ser maior que o exemplo? Nome de estabelecimento, de serviço, de plano, mensagem de erro. Use o texto mais longo real do domínio, não um texto arbitrário.
2. **Quantidade máxima:** quantos itens repetíveis podem existir? Teste com 8 ou 15, não só com 3.
3. **Tela mais estreita** do público. Não presuma que o responsivo funciona, principalmente em layouts lado a lado.
4. **Estado vazio:** o que aparece sem dado nenhum?
5. **Estado de erro ou pendência:** costuma ser desenhado por último; revela falta de ação além de falha de layout.
6. **Texto ampliado (200%)** e largura de 320 px, que também são critério de acessibilidade.

## 3. Como conduzir
Prefira gerar ou pedir um mockup real com os valores extremos a só imaginar o que poderia dar errado: a falha real costuma ser diferente da intuição. Ao revisar prints, pergunte: "isso foi testado com o pior caso ou só com o exemplo de demonstração?"

Ao achar uma quebra, separe:
- **O que quebrou:** descrição concreta e visual.
- **Por que quebrou:** a causa estrutural, geralmente uma decisão de arranjo específica ("itens em colunas"), não a variação inteira.
- **Se invalida a variação ou é corrigível:** não descarte uma direção de design por uma falha de arranjo que dá para ajustar sem abandonar a ideia visual.

## 4. Como relatar
Achados numerados, cada um com: o que quebrou; se é desta tela ou herdado de um componente compartilhado (que merece ser reportado à parte, fora do escopo do projeto); e uma recomendação prática, que geralmente vira regra explícita para o próximo prompt ou especificação.
