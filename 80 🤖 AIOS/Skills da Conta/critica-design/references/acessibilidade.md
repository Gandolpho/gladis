# Acessibilidade no nível de design

## Índice
1. Alvo
2. Checklist de design
3. Contraste
4. O que a crítica não consegue verificar
5. Severidade

## 1. Alvo
WCAG 2.2 nível AA. Nível A é o piso; AAA é desejável em contraste, texto e tamanho de alvo. Esta referência cobre o que dá para avaliar numa tela ou protótipo. Detalhes de código (HTML semântico, ARIA) ficam para o handoff.

## 2. Checklist de design
**Perceber**
- [ ] Contraste de texto e de componentes dentro do mínimo (tabela abaixo).
- [ ] Cor nunca é a única forma de passar informação: erro, status e obrigatório também têm ícone ou texto.
- [ ] Imagens e ícones com significado têm descrição prevista; os decorativos estão marcados como decorativos.
- [ ] Texto ampliado a 200% não perde conteúdo; o layout funciona com 320 px de largura sem rolagem lateral.
- [ ] Instrução não depende só de forma, cor ou posição ("clique no botão verde").

**Operar**
- [ ] Ordem de foco prevista e lógica, seguindo a leitura.
- [ ] Foco visível desenhado (não só hover), com contraste de 3:1.
- [ ] Elemento focado não fica escondido atrás de cabeçalho fixo ou modal (novo no 2.2).
- [ ] Alvo de toque de no mínimo 24×24 px (AA, novo no 2.2); recomendado 44×44 px.
- [ ] Arrastar tem alternativa sem arrastar (novo no 2.2).
- [ ] Modal tem saída clara; Esc fecha.
- [ ] Movimento pode ser pausado; nada pisca mais de 3 vezes por segundo; há versão para movimento reduzido.

**Entender**
- [ ] Todo campo tem rótulo visível (placeholder não é rótulo).
- [ ] Erro identifica o campo, explica e sugere correção.
- [ ] Obrigatório indicado antes do envio, não só pela cor.
- [ ] Não pede a mesma informação duas vezes no mesmo fluxo (novo no 2.2).
- [ ] Ajuda aparece sempre no mesmo lugar (novo no 2.2).
- [ ] Focar um campo não muda o contexto sozinho.

## 3. Contraste
| Contexto | AA | AAA |
|---|---|---|
| Texto normal | 4,5:1 | 7:1 |
| Texto grande (≥ 18 pt, ou ≥ 14 pt em negrito) | 3:1 | 4,5:1 |
| Componentes, ícones, bordas de campo, foco | 3:1 | |

Placeholder cinza-claro e texto secundário sobre fundo colorido são as falhas mais comuns.

## 4. O que a crítica não consegue verificar
Diga isso na resposta quando fizer sentido: comportamento real de teclado, o que o leitor de tela anuncia, se a descrição de imagem faz sentido no contexto e o contraste exato sem os valores de cor. Isso exige teste no produto ou valores do Figma.

## 5. Severidade
Contraste insuficiente em texto principal, foco que prende o teclado e campo sem rótulo: P0. Foco invisível ou cor como única informação: P1. Melhorias de nível AAA: P2 ou P3.
