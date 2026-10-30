# Referência WCAG para o handoff

## Índice
1. Contraste
2. Áreas de toque
3. HTML5 semântico
4. Outros pontos a conferir

## 1. Contraste (critérios 1.4.3 e 1.4.11, nível AA)

| O quê | Razão mínima |
|---|---|
| Texto normal | 4.5:1 |
| Texto grande (≥ 24px regular, ou ≥ 18.66px negrito) | 3:1 |
| Componentes de interface e gráficos (ícones com função, borda de campo, indicador de foco, estados) | 3:1 contra as cores adjacentes |
| Texto em elemento desabilitado, logos, decoração pura | isento (registre como isento, não como "passa") |

### Como calcular

1. Converta cada canal sRGB (0 a 255) para 0 a 1: `c = valor / 255`.
2. Linearize: `c ≤ 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ^ 2.4`.
3. Luminância relativa: `L = 0.2126 R + 0.7152 G + 0.0722 B`.
4. Razão: `(L_clara + 0.05) / (L_escura + 0.05)`.

Para não errar na conta, rode no Node:

```js
const lum = h => { const [r,g,b] = h.match(/\w\w/g).map(x => { const c = parseInt(x,16)/255; return c <= 0.04045 ? c/12.92 : ((c+0.055)/1.055)**2.4; }); return 0.2126*r + 0.7152*g + 0.0722*b; };
const ratio = (a,b) => { const [l1,l2] = [lum(a),lum(b)].sort((x,y)=>y-x); return ((l1+0.05)/(l2+0.05)).toFixed(2); };
console.log(ratio('#1F6C9F', '#FFFFFF'));
```

Com transparência (ex.: `rgba` sobre fundo), calcule a cor resultante da sobreposição antes. Texto sobre imagem ou gradiente: teste o ponto de pior contraste e anote como "verificar na implementação".

## 2. Áreas de toque (critérios 2.5.8 AA e 2.5.5 AAA)

- Padrão do projeto: **44×44px**.
- O mínimo AA do critério 2.5.8 é 24×24px. Os 44×44 vêm do 2.5.5 (AAA) e das diretrizes iOS. Se algo ficar entre 24 e 44, registre como "abaixo do padrão do projeto", não como falha AA.
- A área conta o espaço clicável, não o desenho. Um ícone de 20px com padding que leva a área a 44×44 passa. Especifique como: `padding: 12px` ou área expandida com `::before`.
- Alvos adjacentes não devem se sobrepor.

## 3. HTML5 semântico

| Situação | Elemento |
|---|---|
| Executa uma ação na página | `<button type="button">` |
| Leva para outra página/URL | `<a href>` |
| Envia formulário | `<button type="submit">` dentro de `<form>` |
| Navegação principal | `<nav aria-label="…">` |
| Conteúdo principal | `<main>` (um por página) |
| Títulos | `<h1>`…`<h6>` sem pular nível |
| Campo de formulário | `<label for>` ligado ao `<input id>`; erro com `aria-describedby` |
| Grupo de opções | `<fieldset>` + `<legend>` |
| Lista de itens | `<ul>`/`<ol>` + `<li>` |
| Tabela de dados | `<table>` com `<th scope>` |
| Modal | `<dialog>` ou `role="dialog"` + `aria-modal="true"` + `aria-labelledby` |
| Mensagem dinâmica (toast, erro após envio) | região `aria-live="polite"` (ou `assertive` só para erro crítico) |
| Ícone decorativo | `aria-hidden="true"` |
| Botão só com ícone | `aria-label` descrevendo a ação |

## 4. Outros pontos a conferir

- Foco visível em todo elemento interativo (2.4.7) e não escondido por header fixo (2.4.11).
- Informação não depende só de cor (1.4.1). Ex.: um status também tem texto ou ícone.
- Ordem de foco coerente com a leitura (2.4.3), registrada na seção 3.
- Texto redimensionável até 200% sem perda (1.4.4), especialmente em cards com altura fixa.
