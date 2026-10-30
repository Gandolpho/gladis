# Modelo do handoff-spec.md

## Índice
1. Como usar
2. Modelo

## 1. Como usar
Substitua os textos entre `<>`. Mantenha a ordem das seções. Seção sem conteúdo aplicável fica com uma linha explicando por quê, em vez de ser apagada.

## 2. Modelo

````markdown
# Handoff: <feature / tela>

> Data: <AAAA-MM-DD> · Autora: <nome> · Para: <dev / designer / PO>
> Fontes: <link do Figma, pasta do código, documento de regras, tokens.css>
> Etiquetas: CONFIRMADO · HIPÓTESE · PENDENTE · PROPOSTA · DESCONTINUADO

## Resumo
<3 a 5 linhas: o que é, para quem, o que muda. Contagem de PENDENTES.>

## 1. Status de confiabilidade
| # | Decisão | Etiqueta | Quem valida / validou |
|---|---|---|---|
| D1 | <decisão> | CONFIRMADO | <nome, AAAA-MM-DD> |

## 2. Regras de negócio
- R1: <Condição> → <Comportamento> → <Consequência> [CONFIRMADO, <origem>]
- R2: <…> [PENDENTE, decide: <PO>]

## 3. Fluxo
Entrada: <de onde vem> · Saídas: <para onde pode ir>
1. <Tela A> → <ação> → <Tela B>
   ↳ erro: <Tela de erro> → <recuperação> → <volta para>
2. <…>

Ao voltar: <o que persiste> · Ao abandonar: <o que acontece>

## 4. Conteúdo
| Campo | Texto ou origem | Limite | Truncamento |
|---|---|---|---|
| <Nome do plano> | dado do sistema | <40 caracteres> | <reticências em 1 linha> |

Plural, números e moeda: <…>

## 5. Responsivo
| Largura | O que muda |
|---|---|
| <até 375 px> | <cards empilham, ação vai para o rodapé> |

## 6. Ordem de leitura (tab order)
### <Tela A>
| Sequência | Elemento | Rótulo acessível / descrição semântica | Ação esperada |
|---|---|---|---|
| 1 | <Link "Voltar"> | `<a>` "Voltar para assinaturas" | Enter → volta para a lista |
| 2 | <Botão "Usar"> | `<button>` "Usar saldo do Clube" | Enter/Espaço → abre modal; foco vai para o título do modal |

Fora do foco (decorativos, `aria-hidden`): <…>
Regiões dinâmicas (`aria-live`): <…>

## 7. Acessibilidade WCAG
### Contraste
| Par (texto / fundo) | Tokens | Razão | Exigido | Resultado |
|---|---|---|---|---|
| <Texto do badge / fundo do badge> | <--color-…> / <--color-…> | <4.87:1> | 4.5:1 | Passa |

### Áreas de toque
| Elemento | Tamanho visual | Área clicável | Resultado |
|---|---|---|---|
| <Ícone fechar> | 20×20 | 44×44 (padding 12px) | Passa |

### HTML semântico
| Parte da interface | Elemento | Observação |
|---|---|---|
| <Lista de planos> | `<ul>` + `<li>` | <…> |

PENDENTES de implementação: <ex.: testar leitura com NVDA/VoiceOver>

## 8. Tokens e componentes do design system
Arquivo de tokens: <tokens.css | não encontrado>
| Elemento | Propriedade | Token | Valor resolvido | Componente do DS | Etiqueta |
|---|---|---|---|---|---|
| <Card de saldo> | fundo | `--color-surface-default` | #FFFFFF | Card / variante Elevated | CONFIRMADO |
| <Badge atraso> | fundo | sem token | #FDEBEC | novo | PENDENTE |

### Componente novo: <nome>
Propósito: <uma frase> · Anatomia: <partes> · Variantes: <quando usar cada> · Propriedades: <nome, valores, padrão> · Não usar quando: <…>

## 9. Estados e animação
### <Botão "Usar">
| Estado | O que muda | Transição |
|---|---|---|
| default | <fundo --color-primary, texto branco> | n/a |
| hover | <fundo --color-primary-hover> | background-color 120ms ease-out |
| focus | <anel 2px --color-focus, offset 2px> | instantâneo |
| active | <scale(0.98)> | transform 100ms ease-out |
| disabled | <fundo --color-disabled, cursor not-allowed, sem hover> | n/a |
| loading | <spinner no lugar do texto, largura mantida, botão bloqueado> | opacity 150ms |

Estados da tela: <carregando, vazio, erro…>
Transições de tela: <modal abre com fade + translateY(8px), 250ms ease-out; fecha 200ms ease-in>
Movimento reduzido: <sem translate; só fade de 100ms>

## 10. Justificativa seletiva
- **<Decisão>**: <por que, qual trade-off, o que foi descartado> [etiqueta]

## Perguntas em aberto
1. <PENDENTE: o quê, quem decide, até quando>

## Mudanças depois da entrega
| Data | O que mudou | Por quê | Impacto | Prioridade |
|---|---|---|---|---|
````
