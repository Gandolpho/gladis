# Modelo de relatório (modo Aprovação)

## Índice
1. Modelo
2. Variações do modelo

## 1. Modelo

```markdown
## Crítica · [tela, card ou fluxo]
**Contexto:** [quem usa · tarefa · ponto da jornada · fidelidade]
**Achados:** [n] (P0: x · P1: x · P2: x · P3: x) · **Pendentes:** [n]

### O que funciona
- [decisão] · [princípio, em uma linha]

### P0 · Bloqueia
| # | Onde | Problema | Princípio ou regra | Direção |
|---|---|---|---|---|
_Se não houver: "Nenhum"._

### P1 · Grave
| # | Onde | Problema | Princípio ou regra | Direção |
|---|---|---|---|---|

### P2 e P3
- [onde] · [problema] · [direção]

### Consistência com regras
| Afirmação da tela | Regra | Resultado |
|---|---|---|
| [o que a tela afirma] | [documento, seção] | Consistente / Conflito / Pendente |

### Teste de estresse
1. [o que quebrou] · [por que] · [corrigível ou invalida] · [desta tela ou herdado]

### Acessibilidade
[itens que falharam; o que não deu para verificar]

### Completude
[itens marcados "não", com a lacuna]

### Pendentes
- [pergunta] · [quem responde]

### Próximo passo
[uma ou duas linhas]
```

## 2. Variações do modelo
- **Comparação de variações:** uma tabela com as variações nas colunas e os critérios nas linhas, mais "o que uma resolve e a outra não". Aponte quando a falha é estrutural (ex.: uma variação reserva espaço para o badge de alerta e a outra não).
- **Antes e depois:** três blocos: Melhorias, Regressões e Veredito.
- **Problema sistêmico:** liste uma vez, com "aparece em N lugares", em vez de repetir.
