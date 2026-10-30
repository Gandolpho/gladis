---
id: EVD-INDEX
type: system
privacy: CONFIDENTIAL
created: 2026-08-11
last_updated: 2026-08-12
---

# Índice de evidências

## Tipos

- Métricas → [[METRICS]]
- Impactos → [[IMPACT]]
- Feedbacks → [[FEEDBACK]]

## Níveis de confiança

- `confirmed`
- `derived`
- `estimated`
- `unverified`

Nunca usar `estimated` ou `unverified` como fato em currículo.

## Estrutura para métricas com valor interno e expressão externa derivada

Quando uma métrica ou evidência tiver valor interno exato e uma possível forma de comunicação externa indireta, preservar, quando aplicável:

- `raw_value`: valor interno exato.
- `privacy`: classificação do valor original (pode ser mais restritiva que a do arquivo onde a métrica é referenciada).
- `external_expression`: forma indireta ou agregada, candidata a uso externo.
- `external_approved`: `false` até aprovação específica.

`external_expression` não representa autorização automática para publicação. A expressão só é considerada liberada quando `external_approved: true`.
