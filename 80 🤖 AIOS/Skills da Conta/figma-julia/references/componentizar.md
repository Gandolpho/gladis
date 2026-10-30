# Componentizar frames duplicados

## Índice
1. Quando
2. Inspecionar antes de criar
3. Cada variante é ComponentNode
4. Armadilhas de sizing
5. Combinar em variantes
6. Validar
7. Documentar o componente (opcional)

## 1. Quando
O mesmo layout (estrutura, cores, tipografia) aparece em 3 ou mais lugares, e cada cópia é um `FRAME` independente, não uma `INSTANCE`. Qualquer ajuste exige editar cópia por cópia. O objetivo é um único Component Set com variantes, para que mudanças se propaguem.

## 2. Inspecionar antes de criar
1. `get_metadata` na página para listar os frames candidatos e sua estrutura interna.
2. Veja se algum elemento interno (seta, ícone, badge de saldo) já é `INSTANCE` de um componente do arquivo. Reaproveite: `await instance.getMainComponentAsync()`.
3. Agrupe os frames por variante lógica (ex.: "com saldo", "sem saldo", "ação pendente"). Isso vira a propriedade de variante.
4. Mais de 5 valores numa mesma propriedade costuma indicar componentes diferentes; pergunte antes de juntar.

## 3. Cada variante é ComponentNode
**Erro mais comum:** usar `figma.createAutoLayout()` ou `figma.createFrame()` no container de cada variante. Eles retornam `FrameNode`, e `combineAsVariants()` exige `ComponentNode`.

```javascript
const card = figma.createComponent(); // não createFrame() nem createAutoLayout()
card.name = 'Estado=Ativo';           // sempre Propriedade=Valor
card.layoutMode = 'VERTICAL';
card.primaryAxisSizingMode = 'AUTO';
card.counterAxisSizingMode = 'FIXED';
```

Filhos internos (cabeçalho, listas) podem continuar com `createAutoLayout()`; só o container de cada variante precisa ser componente.

## 4. Armadilhas de sizing
- `layoutSizingHorizontal` / `layoutSizingVertical = 'FILL'` só funciona depois do `appendChild` no pai com auto layout.
- `resize()` depois de `FILL` pode voltar para `FIXED`. Para ajustar um valor, mexa no pai ou no padding em vez de dar `resize()` no filho.
- Sempre leia o valor de volta (`node.layoutSizingHorizontal`, `node.primaryAxisSizingMode`) para confirmar. Já houve bug silencioso em que a intenção era "hug" e o resultado era "fixed".

Tabela completa em `sizing-cheatsheet.md`.

## 5. Combinar em variantes
```javascript
const componentSet = figma.combineAsVariants([comp1, comp2, comp3], figma.currentPage);
componentSet.name = 'NomeDoComponente';
componentSet.description = 'Uso e regra de exclusão de variantes (ex.: quais status não geram variante e por quê)';
```

Depois de combinar, **todos os filhos empilham em (0,0)**. Reposicione em grade (função em `card-builder.md`, seção 2) e chame `resizeWithoutConstraints()` no Component Set.

## 6. Validar
1. `await componentSet.screenshot({ scale: 0.7 })` para ver todas as variantes lado a lado.
2. Nomes de variante no padrão `Propriedade=Valor`, consistentes (o seletor de variantes depende disso).
3. Se uma variante precisa de comportamento de tamanho diferente (altura fixa versus abraçar o conteúdo), ajuste só ela e revalide.
4. Pergunte à Julia se é para trocar as cópias antigas por instâncias do novo componente; não troque sem confirmar.

## 7. Documentar o componente (opcional)
Se a Julia quiser documentar ao lado, monte uma área com, nesta ordem:
1. Visão geral: uma linha e o uso principal.
2. Uso: o componente num contexto real, não isolado.
3. Variantes lado a lado, com rótulo.
4. Estados aplicáveis (padrão, desabilitado, foco, carregando, erro).
5. Quando usar e quando não usar (2 ou 3 frases).

Use cards de documentação (categoria Exceção / Estado ou Regra de Interação) para as regras de cada variante.
