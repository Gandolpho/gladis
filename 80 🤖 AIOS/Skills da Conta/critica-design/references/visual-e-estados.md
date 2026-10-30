# Visual e estados

## Índice
1. Testes de hierarquia
2. Tipografia, cor e espaçamento
3. Consistência
4. Estados
5. Sinais de protótipo gerado por IA

## 1. Testes de hierarquia
| Teste | Como | O que revela |
|---|---|---|
| 5 segundos | Olhar por 5 s e desviar | O que a pessoa percebe primeiro é a hierarquia real; compare com a pretendida |
| Desfocar | Apertar os olhos ou desfocar | Só os 1 ou 2 níveis principais devem sobrar |
| Escala de cinza | Tirar a cor | A hierarquia precisa sobreviver por tamanho, peso e posição |

Falhas comuns: nenhum ponto focal; pontos focais demais; botão principal com o mesmo peso dos secundários; elemento decorativo mais forte que a tarefa.

## 2. Tipografia, cor e espaçamento
**Tipografia:** escala com degraus claros (nada de 14 e 15 lado a lado); corpo de texto legível; altura de linha entre 1,4 e 1,6 no corpo; no máximo duas famílias; alinhamento à esquerda para texto corrido.

**Cor:** uma cor de destaque por superfície; cor semântica com um significado só (vermelho é erro, verde é sucesso); cor nunca é a única informação, sempre com ícone ou texto; ação principal com mais contraste que a secundária; destrutiva em vermelho, mas sem ofuscar a principal quando não for ela.

**Espaçamento:** valores da escala do design system (base 4 ou 8); mesmo componente, mesmo espaçamento interno; o espaço entre grupos é maior que o espaço dentro do grupo; agrupar por proximidade antes de usar caixa ou cor de fundo.

**Alinhamento:** bordas que compartilham relação compartilham a borda. "Quase alinhado" aparece no print e parece descuido.

## 3. Consistência
Três níveis:
- **Visual:** mesmas cores, fontes, raios, sombras e espaçamentos.
- **Comportamental:** mesma interação, mesma resposta.
- **Verbal:** mesma ação, mesmo nome.

Em variações e em telas do mesmo fluxo, compare: botões (hierarquia, rótulo, tamanho), formulários (posição do rótulo, estilo de erro, obrigatório), cards (ordem do conteúdo, padding), ícones (estilo, tamanho, significado).

## 4. Estados
Todo elemento interativo e todo bloco de conteúdo tem estados. Confira se estão desenhados:

| Estado | O que precisa ter |
|---|---|
| Padrão | Aparência base |
| Hover / foco | Foco visível para teclado, não só hover |
| Pressionado / selecionado | Selecionado diferente de hover |
| Desabilitado | Claramente indisponível; idealmente explica por quê |
| Carregando | Esqueleto no formato final ou indicador; nada de tela congelada |
| Vazio | Explica o que é e como preencher, com ação |
| Erro | O que houve, como resolver, ação de recuperação |
| Sucesso | Confirmação clara |
| Alerta / pendência | Sempre com ação associada, não só aviso |

Tempo de resposta: até 100 ms não precisa de nada; até 1 s, indicador discreto; até 10 s, progresso ou esqueleto; acima disso, processo em segundo plano com aviso.

## 5. Sinais de protótipo gerado por IA
Útil ao revisar saídas de Figma Make, Lovable e similares:
- Três cards iguais lado a lado; a mesma seção repetida página abaixo.
- Nomes e números inventados (John Doe, Acme, "92%") sem marcação de exemplo.
- Ruído decorativo: numeração de seção, selos "BETA", pontinhos de status antes de todo item.
- Emoji como ícone; famílias de ícone misturadas.
- Brilhos, gradiente em título, roxo por padrão.
- Dados de exemplo curtos demais, que escondem problemas de layout (passe pela etapa 4).
