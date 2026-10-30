# Card builder (Plugin API)

## Índice
1. Função makeInfoCard
2. Grade de vários cards
3. Notas

Use dentro de um `use_figma`, com a skill `figma:figma-use` já carregada.

## 1. Função makeInfoCard

```javascript
await figma.loadFontAsync({ family: 'Inter', style: 'Semi Bold' });
await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });

const DARK = { r: 0.1176, g: 0.1176, b: 0.1176 };
const WHITE = { r: 1, g: 1, b: 1 };
const BORDER = { r: 0.88, g: 0.88, b: 0.88 };

// Uma cor por categoria, igual à tabela de cards-documentacao.md
const CATEGORY_COLORS = {
  Fluxo:     { r: 0.15,   g: 0.42,   b: 0.92 },   // azul
  Interacao: { r: 0.9686, g: 0.6510, b: 0.0314 }, // laranja (Regra de Interação)
  Excecao:   { r: 0.55,   g: 0.25,   b: 0.85 },   // roxo (Exceção / Estado)
  Contexto:  { r: 0.45,   g: 0.45,   b: 0.45 },   // cinza
};

/**
 * Cria um card de documentação padronizado.
 * @param {string} categoryKey - Fluxo, Interacao, Excecao ou Contexto
 * @param {string} categoryLabel - texto da pílula (ex.: "Regra de Interação")
 * @param {string} title - título do card
 * @param {string[]} bullets - uma regra por bullet
 * @param {number} width - largura em px (padrão 300)
 * @returns {FrameNode}
 */
function makeInfoCard(categoryKey, categoryLabel, title, bullets, width) {
  width = width || 300;
  const card = figma.createFrame();
  card.name = `[${categoryLabel}] ${title}`;
  card.fills = [{ type: 'SOLID', color: WHITE }];
  card.strokes = [{ type: 'SOLID', color: BORDER }];
  card.strokeWeight = 1;
  card.cornerRadius = 12;
  card.resize(width, 100);

  const pad = 16;
  const contentWidth = width - pad * 2;

  const pill = figma.createFrame();
  pill.layoutMode = 'HORIZONTAL';
  pill.primaryAxisSizingMode = 'AUTO';
  pill.counterAxisSizingMode = 'AUTO';
  pill.paddingLeft = 8; pill.paddingRight = 8; pill.paddingTop = 3; pill.paddingBottom = 3;
  pill.cornerRadius = 500;
  pill.fills = [{ type: 'SOLID', color: CATEGORY_COLORS[categoryKey] }];
  const pillText = figma.createText();
  pillText.fontName = { family: 'Inter', style: 'Semi Bold' };
  pillText.fontSize = 10;
  pillText.characters = categoryLabel.toUpperCase();
  pillText.fills = [{ type: 'SOLID', color: WHITE }];
  pill.appendChild(pillText);
  pill.x = pad; pill.y = pad;
  card.appendChild(pill);

  const titleText = figma.createText();
  titleText.fontName = { family: 'Inter', style: 'Semi Bold' };
  titleText.fontSize = 15;
  titleText.characters = title;
  titleText.fills = [{ type: 'SOLID', color: DARK }];
  titleText.x = pad; titleText.y = pad + pill.height + 8;
  titleText.textAutoResize = 'HEIGHT';
  titleText.resize(contentWidth, titleText.height);
  card.appendChild(titleText);

  let cursorY = titleText.y + titleText.height + 12;
  for (const bullet of bullets) {
    const row = figma.createText();
    row.fontName = { family: 'Inter', style: 'Regular' };
    row.fontSize = 12;
    row.lineHeight = { unit: 'PERCENT', value: 145 };
    row.characters = '•  ' + bullet;
    row.fills = [{ type: 'SOLID', color: DARK }];
    row.x = pad; row.y = cursorY;
    row.textAutoResize = 'HEIGHT';
    row.resize(contentWidth, row.height);
    card.appendChild(row);
    cursorY += row.height + 6;
  }
  card.resize(width, cursorY + pad - 6);
  return card;
}
```

## 2. Grade de vários cards
Também serve para reposicionar variantes depois de `combineAsVariants` (modo Componentizar).

```javascript
const cols = 3, gapX = 24, gapY = 24;
let colWidths = [], rowHeights = [];
items.forEach((c, i) => {
  const col = i % cols, row = Math.floor(i / cols);
  colWidths[col] = Math.max(colWidths[col] || 0, c.width);
  rowHeights[row] = Math.max(rowHeights[row] || 0, c.height);
});
let yCursor = 0;
for (let row = 0; row * cols < items.length; row++) {
  let xCursor = 0;
  for (let col = 0; col < cols; col++) {
    const idx = row * cols + col;
    if (idx >= items.length) break;
    items[idx].x = xCursor;
    items[idx].y = yCursor;
    xCursor += colWidths[col] + gapX;
  }
  yCursor += rowHeights[row] + gapY;
}
```

## 3. Notas
- Carregue as fontes antes de criar qualquer texto.
- Fonte do arquivo indisponível: não edite o texto existente; crie o novo com a fonte disponível e avise a Julia.
- Depois de posicionar vários cards, confira com `get_metadata` ou `screenshot()` antes do próximo passo.
