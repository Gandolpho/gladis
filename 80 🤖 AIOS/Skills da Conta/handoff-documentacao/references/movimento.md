# Movimento no handoff

## Índice
1. Propósito
2. Durações
3. Curvas
4. Movimento reduzido
5. Desempenho

## 1. Propósito
Toda animação precisa completar a frase "esta animação comunica ___" com uma destas respostas, em ordem de prioridade:
1. **Retorno:** confirma uma ação (botão pressionado, envio concluído).
2. **Continuidade:** mantém o contexto entre estados (modal que nasce do botão que o abriu).
3. **Orientação:** mostra direção e relação espacial (entrar mais fundo, voltar).
4. **Encanto:** só depois dos três primeiros, e com parcimônia.

Se a resposta for "ficou bonito", corte. Interfaces de tarefa e de dados, como as da Trinks, ficam no movimento funcional e curto.

## 2. Durações
| Uso | Duração |
|---|---|
| Hover, foco, troca de ícone ou cor, clique | 100 a 150 ms |
| Tooltip, dropdown, toggle | 150 a 200 ms |
| Modal, painel, gaveta, expansão | 200 a 300 ms |
| Troca de tela, revelação grande | 300 a 500 ms |

- **Sair é mais rápido que entrar:** a saída usa de 70 a 80% da duração da entrada (modal abre em 250 ms e fecha em 200 ms).
- **Vários elementos entrando:** escalone em 30 a 50 ms, no máximo 5 elementos.
- Nunca passe de 500 ms em animação funcional, e nunca bloqueie a interação esperando a animação terminar.
- Se o design system tiver tokens de duração, use o token, não o número.

## 3. Curvas
| Situação | Curva | CSS |
|---|---|---|
| Elemento entrando | ease-out | `cubic-bezier(0, 0, 0.2, 1)` |
| Elemento saindo | ease-in | `cubic-bezier(0.4, 0, 1, 1)` |
| Elemento mudando de lugar | ease-in-out | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Opacidade, barra de progresso | linear | `linear` |
| Gesto ou arrasto | mola (spring) | da biblioteca usada |

## 4. Movimento reduzido
Com `prefers-reduced-motion: reduce`:
- Sem deslocamento, escala, rotação ou parallax.
- Fade curto é aceitável.
- O que comunicava algo (retorno, carregamento) ganha um sinal equivalente sem movimento: texto, ícone ou cor.
- Nada pisca mais de 3 vezes por segundo; nada em loop infinito fora de carregamento.

## 5. Desempenho
Prefira animar `transform` e `opacity`. Animar largura, altura, margem ou padding força recálculo de layout e trava. Se o efeito pedir mudança de tamanho, especifique como escala ou como transição de layout.
