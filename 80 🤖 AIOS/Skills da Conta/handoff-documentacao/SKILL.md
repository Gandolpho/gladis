---
name: handoff-documentacao
description: Monta o handoff técnico e de produto da Julia (handoff-spec.md) a partir do Figma, de prints ou do código, com etiquetas de confiabilidade, regras no formato condição, comportamento e consequência, fluxo, conteúdo, responsivo, tab order, acessibilidade WCAG, tokens e componentes do design system, estados e animação. Também faz QA de implementação (comparar o que foi construído com o handoff) e registra mudanças depois da entrega. Use quando a Julia disser "monta o handoff", "documenta pra dev", "especifica essa tela", "spec do componente", "o que falta pro handoff", "confere se o dev fez igual", "QA da implementação", ou quando um design estiver aprovado e indo para desenvolvimento.
---

# Handoff técnico e de produto

## Índice
1. O que é
2. Passo 0: reunir as fontes
3. Escolher o nível
4. As seções
5. Como o processo sustenta o documento
6. Revisão final
7. Depois do handoff
8. Arquivos de apoio

## 1. O que é

O handoff é o artefato enxuto que sai do processo de design e vai para outra pessoa: dev, outra designer, PO ou revisor. Ele não substitui a documentação de trabalho (Figma, FigJam). É **extraído** dela. Quem recebe precisa conseguir agir com confiança sem ter acompanhado nenhuma reunião, e sem confundir hipótese com fato.

Escreva em português do Brasil. Salve em `handoff-spec.md` na raiz do projeto, seguindo `templates/handoff-spec.md`.

## 2. Passo 0: reunir as fontes

Analise o que existir e diga à Julia o que encontrou antes de escrever:

- **Interface:** link do Figma (carregue a skill `figma:figma-use` antes de qualquer `use_figma`), código das telas, prints.
- **Design system:** `tokens.css`, `tokens.md`, `tokens.json`, variáveis do Figma, biblioteca de componentes.
- **Regras e decisões:** documento de regras de negócio, glossário de status, notas de reunião, PRD, relatório de síntese. No GLADIS, comece pela nota de entrada e pelo `CLAUDE.md` do projeto.

Se não houver interface, pergunte qual é a fonte antes de seguir. Não monte tab order nem estados a partir de suposição.

**Portão de entrada:** se o design ainda não passou pela `critica-design` no modo Aprovação, sugira passar antes. Handoff de tela com P0 aberto vira retrabalho. Use também o checklist pré-handoff em `references/checklist-pre-handoff.md`.

Se `handoff-spec.md` já existir, pergunte se é para atualizar o existente ou criar um novo com data. Ao atualizar, mantenha a mesma estrutura e o mesmo padrão visual.

## 3. Escolher o nível

| O que está sendo entregue | Seções principais |
|---|---|
| Uma tela ou ajuste pontual | 1, 2, 4, 6, 7, 9 |
| Um fluxo de várias etapas | Todas, com a seção 3 detalhada |
| Um componente novo ou alterado | 1, 7, 8 (com a especificação de componente), 9 |

Seção sem conteúdo aplicável fica com uma linha dizendo por quê, em vez de sumir.

## 4. As seções

Resumo abaixo; o detalhe de cada uma está em `references/secoes.md`.

| # | Seção | Em uma linha |
|---|---|---|
| 1 | Status de confiabilidade | Toda afirmação leva etiqueta: CONFIRMADO, HIPÓTESE, PENDENTE, PROPOSTA ou DESCONTINUADO. Na dúvida, a mais fraca |
| 2 | Regras de negócio | `Condição → Comportamento → Consequência` + etiqueta + origem. Fontes divergentes viram PENDENTE com quem decide |
| 3 | Fluxo | Entrada, saídas, passos, caminhos de erro, o que persiste ao voltar, o que acontece se abandonar |
| 4 | Conteúdo | Texto final, limite de caracteres, truncamento, o que é fixo e o que vem de dado, plural, números e moeda |
| 5 | Responsivo | O que muda em cada largura: empilha, esconde, reflui |
| 6 | Ordem de leitura (tab order) | Tabela por tela, com rótulo acessível e ação esperada; modais, erros e toasts incluídos |
| 7 | Acessibilidade WCAG | Contraste calculado, área de toque, HTML semântico. O que não dá para validar no design vira PENDENTE com teste sugerido |
| 8 | Tokens e componentes | Cada elemento ligado ao token oficial; nunca inventar token. Componente novo segue a especificação de componente |
| 9 | Estados e animação | Estados de cada elemento e da tela; propriedade, duração e curva de cada animação; movimento reduzido |
| 10 | Justificativa seletiva | O porquê só quando reverte o óbvio, tem trade-off real ou vai gerar "por que não fizeram o simples?" |

## 5. Como o processo sustenta o documento

- **Pergunte antes de assumir em decisões estruturais.** Se houver mais de um caminho razoável (ordem de foco, se um estado existe, qual componente usar), pare e pergunte.
- **O handoff é a última etapa.** Corte rodadas descartadas e racional extenso. Fica a decisão, a etiqueta e a justificativa mínima.
- **Especifique o que é ambíguo, não o óbvio.** O que o design system já resolve não precisa ser reescrito. O que a dev teria que adivinhar precisa.
- **Erro repetido é sinal sobre a ideia.** Se a mesma direção falhou em duas rodadas de teste, registre como possível sinal de que a ideia é difícil de executar.

## 6. Revisão final

Antes de salvar, releia perguntando:
1. Alguém que não esteve em nenhuma reunião consegue implementar sem confundir hipótese com fato?
2. Toda afirmação tem etiqueta?
3. Algum token foi inventado? Algum contraste foi estimado em vez de calculado?
4. Toda tela com interação tem tab order e estados, inclusive vazio, carregando e erro?
5. O fluxo mostra os caminhos de erro e de volta, não só o caminho feliz?
6. Todo texto dinâmico tem limite e regra de truncamento?

Ao terminar, diga em poucas linhas onde está o arquivo, quantos itens ficaram PENDENTE e quais falhas de acessibilidade foram encontradas.

## 7. Depois do handoff

- **Mudança depois da entrega:** registre no próprio `handoff-spec.md`, na seção "Mudanças", com o que mudou, por quê, o impacto e a prioridade. Mudanças frequentes são sinal de problema antes do handoff (crítica, revisão ou descoberta).
- **QA de implementação:** quando a Julia pedir para conferir o que foi construído, compare com o handoff seguindo `references/qa-implementacao.md`.

## 8. Arquivos de apoio

| Arquivo | Conteúdo |
|---|---|
| `references/secoes.md` | Detalhe das 10 seções |
| `references/checklist-pre-handoff.md` | O que precisa estar pronto antes de escrever |
| `references/wcag.md` | Contraste (com cálculo), área de toque, HTML semântico |
| `references/movimento.md` | Propósito, durações, curvas e movimento reduzido |
| `references/qa-implementacao.md` | Como comparar a implementação com o handoff e relatar diferenças |
| `templates/handoff-spec.md` | Modelo do arquivo final |
