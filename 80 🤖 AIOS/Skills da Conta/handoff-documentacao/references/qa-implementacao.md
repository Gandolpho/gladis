# QA de implementação

## Índice
1. Quando
2. O que comparar
3. Severidade
4. Como relatar

## 1. Quando
Quando a Julia pedir para conferir se o que foi construído bate com o handoff: link de homologação, prints, gravação de tela ou código. O handoff (`handoff-spec.md`) é a referência; sem ele, use o Figma e diga que a referência é o design, não uma especificação.

## 2. O que comparar
| Área | O que olhar |
|---|---|
| Visual | Cores, tipografia, espaçamento, raios e sombras batem com os tokens; ícones certos; alinhamento |
| Estados | Todos os do handoff aparecem: hover, foco, desabilitado, carregando, erro, sucesso, vazio |
| Regras | Cada linha da seção 2 do handoff se comporta como descrito, inclusive os status bloqueantes |
| Conteúdo | Texto final, truncamento com texto longo real, plural, números e moeda |
| Responsivo | Larguras do handoff; nada transborda; sem rolagem horizontal |
| Movimento | Duração e curva próximas do especificado; movimento reduzido respeitado |
| Acessibilidade | Ordem de foco igual à tabela; foco visível; foco preso no modal e devolvido ao fechar; rótulos lidos pelo leitor de tela quando der para testar |

Com prints, diga o que não dá para verificar (hover, foco, leitor de tela).

## 3. Severidade
| Nível | Quando |
|---|---|
| Crítico | Função quebrada, ou regra de negócio violada (ex.: permite consumo num status que bloqueia) |
| Grave | Comportamento errado que confunde: estado errado, mensagem errada, foco pulando |
| Menor | Diferença visual sem impacto funcional: token de espaçamento errado, peso de fonte |
| Cosmético | Diferença de pixel que só design percebe |

## 4. Como relatar
Agrupe por tela, não item a item solto:

```markdown
## QA · [fluxo] · [data]
**Referência:** handoff-spec.md de [data] · **Ambiente:** [navegador, largura]

### [Tela] · [n] itens
1. [Grave] [elemento]: esperado [o que o handoff diz, com a seção]; encontrado [o que aparece]. Sugestão: [token, comportamento].

### Transversal
1. [Grave] Ordem de foco pula o link "Editar" (handoff, seção 6).

### Não verificado
- [o que precisa de teste no produto]
```

Se um problema aparece por falta de especificação no handoff, diga isso e atualize o handoff, sem culpar quem implementou.
