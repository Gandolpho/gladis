# Telas por clonagem

## Índice
1. Quando se aplica
2. Escolher a tela de referência
3. Clonar, nunca redesenhar
4. Localizar o elemento no clone
5. Aplicar só a mudança necessária
6. Conectar ao fluxo e posicionar

## 1. Quando se aplica
As telas do fluxo são prints reais do produto (capturados do navegador), não componentes desenhados no Figma. Sinal: o frame tem um `rectangle` ou `rounded-rectangle` com preenchimento `IMAGE`, e ícones, badges e textos por cima como camadas soltas. Redesenhar seria desnecessário e perderia fidelidade; o certo é clonar a tela mais próxima e mudar só o necessário.

## 2. Escolher a tela de referência
Qual tela existente é a mais parecida com o novo estado? Normalmente, a mesma tela onde o elemento (ícone, botão, card) já aparece no estado padrão.

## 3. Clonar, nunca redesenhar
```javascript
const original = await figma.getNodeByIdAsync('ID_DA_TELA_DE_REFERENCIA');
const novaTela = original.clone(); // preserva o print e as camadas por cima
novaTela.name = 'Fluxo / Passo / Novo estado';
novaTela.x = /* posição calculada */;
novaTela.y = /* posição calculada */;
```
`clone()` não exige carregar fonte, porque não edita texto.

## 4. Localizar o elemento no clone
Procure por nome, não por ID (o clone gera IDs novos):
```javascript
const elementos = novaTela.findAll(n => n.name === 'Nome Do Elemento');
// Vários com o mesmo nome: desambigue pela posição (ex.: o de maior x é o mais à direita)
const alvo = elementos.reduce((a, b) => (a.x > b.x ? a : b));
```

## 5. Aplicar só a mudança necessária
| Estado a representar | Alteração no clone |
|---|---|
| Hover / tooltip | Clonar o tooltip que já existe no arquivo e posicionar perto do alvo |
| Erro / desabilitado | `alvo.opacity = 0.4` (ou o valor da regra de negócio) |
| Foco / seleção | Contorno em volta do alvo, sem mudar mais nada |

Nunca altere o print de fundo; só as camadas por cima mudam. Se precisar editar texto de uma camada, carregue a fonte antes.

## 6. Conectar ao fluxo e posicionar
- Se o fluxo usa setas entre telas, leia o estilo de uma seta existente (cor, espessura) e replique:
```javascript
const setaExistente = await figma.getNodeByIdAsync('ID_DE_UMA_SETA');
// reaproveitar setaExistente.strokes e setaExistente.strokeWeight
```
- Telas que estendem um fluxo entram **na mesma Section** dele, como nova linha ou coluna.
- Se o novo estado tem uma regra, documente com um card ao lado (modo Cards de documentação).
