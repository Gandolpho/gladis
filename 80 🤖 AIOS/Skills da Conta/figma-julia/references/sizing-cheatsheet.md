# Cheatsheet de sizing modes (Plugin API)

## Índice
1. Dois pares de propriedades
2. Eixo primário e secundário
3. Receitas
4. Erros comuns

## 1. Dois pares de propriedades (não confundir)

| Propriedade | Onde se aplica | Valores válidos |
|---|---|---|
| `primaryAxisSizingMode` / `counterAxisSizingMode` | No próprio frame auto-layout | `'FIXED'` \| `'AUTO'` |
| `layoutSizingHorizontal` / `layoutSizingVertical` | Em um filho de um frame auto-layout | `'FIXED'` \| `'HUG'` \| `'FILL'` |

## 2. Eixo primário e secundário

- `layoutMode = 'VERTICAL'` → primaryAxis = altura, counterAxis = largura
- `layoutMode = 'HORIZONTAL'` → primaryAxis = largura, counterAxis = altura

## 3. Receitas

### Largura fixa, altura abraça o conteúdo (card vertical de lista)

```javascript
card.layoutMode = 'VERTICAL';
card.primaryAxisSizingMode = 'AUTO';   // altura hug
card.counterAxisSizingMode = 'FIXED';  // largura fixa
card.resize(312, card.height);         // define o valor da largura fixa
```

### Largura fixa, altura abraça o conteúdo (card horizontal, linha com botão à direita)

```javascript
card.layoutMode = 'HORIZONTAL';
card.resize(312, card.height); // resize PRIMEIRO
card.primaryAxisSizingMode = 'FIXED';   // largura fixa: set DEPOIS do resize
card.counterAxisSizingMode = 'AUTO';    // altura hug: set DEPOIS do resize
```

**Por quê a ordem inverte entre os dois casos acima:** setar o sizing mode e DEPOIS chamar `resize()` pode resetar o modo para `FIXED` em alguns casos observados na prática. A forma mais segura é: `resize()` primeiro (para estabelecer as dimensões base), depois setar os modes: e sempre reler o valor depois (`card.primaryAxisSizingMode`) para confirmar que pegou.

### Filho que preenche a largura do pai

```javascript
parent.appendChild(child); // appendChild ANTES de setar FILL: obrigatório
child.layoutSizingHorizontal = 'FILL';
// NÃO chame child.resize() depois disso, ou o FILL pode ser perdido
```

## 4. Erros comuns

| Erro | Causa provável |
|---|---|
| `FILL can only be set on children of auto-layout frames` | `appendChild` não foi chamado antes de setar `FILL` |
| `HUG can only be set on auto-layout frames or text children` | Tentando `HUG` em um nó que não é frame auto-layout nem texto |
| Variantes empilhadas em (0,0) após `combineAsVariants` | Esquecimento do passo de reposicionamento manual: é sempre necessário |
