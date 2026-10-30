# As 10 seções do handoff

## Índice
1. Status de confiabilidade
2. Regras de negócio
3. Fluxo
4. Conteúdo
5. Responsivo
6. Ordem de leitura (tab order)
7. Acessibilidade WCAG
8. Tokens e componentes
9. Estados e animação
10. Justificativa seletiva

## 1. Status de confiabilidade
| Etiqueta | Significado |
|---|---|
| **CONFIRMADO** | Validado por quem tem autoridade (gestão, cliente, time técnico) ou lido direto da fonte (token no arquivo, valor no componente) |
| **HIPÓTESE** | Direção provável, sem validação formal |
| **PENDENTE** | Depende de informação ou decisão de terceiros |
| **PROPOSTA** | Sugestão de quem documenta, reversível, ainda não aceita |
| **DESCONTINUADO** | Já foi a direção e foi substituída; fica só como registro |

Sem etiqueta, quem lê trata "já está fechado" e "é minha melhor aposta" com a mesma confiança. É o erro mais caro que o handoff existe para evitar. Na dúvida entre duas, use a mais fraca.

## 2. Regras de negócio
Uma regra por linha: `Condição → Comportamento → Consequência` + etiqueta.

Exemplo: `Assinatura com pagamento atrasado → card exibe badge "Pagamento pendente" e bloqueia o botão Usar → cliente não consome serviços até regularizar [CONFIRMADO, regra 4.2]`

Linhas curtas deixam contradições visíveis: duas linhas com a mesma condição e comportamentos diferentes saltam aos olhos. Cite a origem sempre que existir. Se duas fontes divergirem, registre as duas como PENDENTE e diga quem decide. Não escolha um lado.

## 3. Fluxo
Para entregas com mais de uma etapa:
- **Entrada:** de onde a pessoa vem.
- **Saídas:** para onde pode ir, inclusive cancelar e fechar.
- **Passos:** `Tela → ação → próxima tela`, com os desvios de erro: `↳ erro: tela → ação de recuperação → ponto de retorno`.
- **Estado entre passos:** o que é guardado, o que persiste se voltar, o que acontece se abandonar no meio.

## 4. Conteúdo
- Texto final, nada de lorem ipsum.
- Para cada texto dinâmico: de onde vem (fixo no produto ou dado do sistema), limite de caracteres e regra de truncamento (reticências, quebra, número de linhas).
- Plural ("1 serviço", "2 serviços"), formato de número, moeda e data.
- Casos extremos já levantados no teste de estresse da `critica-design`.

## 5. Responsivo
Para cada largura relevante do público (no mínimo a mais estreita e a principal): o que reflui, empilha, esconde ou muda. Sem rolagem horizontal. Se houver só uma plataforma, diga isso em uma linha.

## 6. Ordem de leitura (tab order)
Uma tabela por tela ou componente complexo, na ordem em que o foco do teclado e o leitor de tela devem percorrer:

| Sequência | Elemento | Rótulo acessível / descrição semântica | Ação esperada |
|---|---|---|---|

- Segue a leitura visual e a lógica da tarefa. Se as duas divergirem, explique.
- Decorativos não entram no foco; anote à parte como `aria-hidden`.
- Inclua o que aparece depois: modais (o foco entra, fica preso e volta ao gatilho ao fechar), mensagens de erro e toasts (`aria-live`).
- Rótulos descrevem a ação ou o conteúdo ("Fechar detalhes da assinatura"), não o visual ("Ícone X").

## 7. Acessibilidade WCAG
Registre passa, falha ou não verificável. Detalhe em `wcag.md`.
- **Contraste (AA):** 4,5:1 texto normal, 3:1 texto grande e 3:1 ícones, bordas de campo e foco. Calcule com as cores reais dos tokens.
- **Área de toque:** padrão do projeto 44×44 px (o mínimo AA é 24×24). Se o desenho for menor, especifique a área expandida.
- **HTML semântico:** o elemento certo para cada parte. `div` clicável é falha.
- O que depende de implementação vira PENDENTE com um teste sugerido.

## 8. Tokens e componentes
| Elemento | Propriedade | Token | Valor resolvido | Componente do DS |
|---|---|---|---|---|

- **Nunca invente nome de token.** Sem token correspondente: valor bruto, "sem token" e PENDENTE.
- Sem arquivo de tokens no projeto: diga isso no topo e documente os valores brutos.
- Indique se o elemento é componente existente (com a variante) ou novo.

**Componente novo ou alterado:** acrescente
- Propósito em uma frase (se não dá para dizer, talvez o componente não precise existir).
- Anatomia: partes nomeadas, com os mesmos nomes das camadas no Figma.
- Variantes com quando usar cada uma (mais de 5 é sinal de que são componentes diferentes).
- Propriedades: nome, valores, padrão.
- Quando usar e quando não usar, e componentes parecidos com que pode ser confundido.

## 9. Estados e animação
**Estados do elemento:** default, hover, focus, active, disabled, loading, e quando couber selected, error e success. Diga o que muda (token de cor, borda, ícone, cursor, texto), não só que "muda".

**Estados da tela:** primeira visita, carregando, vazio, erro, sem resultado de filtro, sem permissão. Inclua só os que se aplicam.

**Animação:** propriedade, duração e curva (ex.: `opacity 150ms ease-out`), seguindo `movimento.md`. Loading: o que aparece, se o elemento fica bloqueado e o que acontece em caso de erro. Foco visível com 3:1.

## 10. Justificativa seletiva
Registre o porquê **só** quando a decisão:
- reverte algo que parecia óbvio ou padrão;
- envolve um trade-off real;
- provavelmente vai gerar "por que não fizeram do jeito mais simples?".

Decisões que decorrem direto de regra documentada, ou que são obviamente a melhor opção, não precisam. Justificar tudo dilui o que importa.
