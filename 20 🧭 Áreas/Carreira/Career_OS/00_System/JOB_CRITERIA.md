---
id: SYS-JOB-CRITERIA
type: system
privacy: CONFIDENTIAL
created: 2026-08-11
last_updated: 2026-08-20
---

# Critérios para vagas

> Este arquivo define os critérios que alimentam as dimensões de Job Fit e Opportunity Attractiveness
> na análise de vagas. Para o protocolo completo de análise, ver `JOB_ANALYSIS_PROTOCOL.md`.

---

## Cargos prioritários

Critério de **Job Fit** — define os títulos com maior aderência ao perfil.

- Product Designer Pleno
- Product Designer
- Designer de Produto
- UX Designer
- UX/UI Designer

## Cargos a evitar

Critério informacional — sinaliza baixa aderência mas não rejeita automaticamente.

- Web Designer (quando o trabalho for predominantemente estético/visual)
- Design Gráfico
- Funções predominantemente de marketing ou identidade visual

---

## Hard Constraints — Rejeição automática

Quando qualquer um destes critérios for identificado, a análise encerra imediatamente.
**Não candidatar** independente de Job Fit ou Opportunity Attractiveness.

- **Web Designer com forte componente de desenvolvimento** — incompatível com o papel de Product Designer
- **Função híbrida designer + developer** — idem; contradiz a definição do cargo buscado
- **Responsabilidade central por frontend** — idem
- **Presencial integral em São Paulo** — implica relocalização ou deslocamento inviável (RJ → SP)

---

## Strong Negatives — Reduzem significativamente a Opportunity Attractiveness

Estes critérios **não eliminam** candidaturas. Afetam a nota do fator correspondente
dentro da fórmula de Opportunity Attractiveness. Não geram penalidade adicional fora da fórmula.

| Fator afetado em OA | Strong Negative | Efeito indicativo |
|---|---|---|
| Empresa e estrutura | Consultoria/agência com múltiplos clientes | Score baixo neste fator (teto informal ≤ 35/100); Julia pode executar, mas prefere não retornar a ambiente de agência |
| Crescimento e interesse no produto | Blockchain | Score baixo neste fator (teto informal ≤ 30/100); aversão de domínio declarada |

### Pendência — "Única designer da empresa"

**Status: aguardando decisão de Julia antes de classificar.**

Este critério estava na seção "Rejeitar" anterior mas não foi aprovado como Hard Constraint nem como Strong Negative na Auditoria de Consolidação Pré-7.3 (2026-08-20). Análises de vagas podem registrar informalmente "designer solitária" como observação qualitativa em OA, mas sem critério formalizado até decisão explícita.

---

## Remuneração

Critério de **Opportunity Attractiveness** — fator Remuneração (peso-base 25%).
**Salário não é critério de rejeição automática** — influencia a atratividade da oportunidade, não a qualificação de Julia para executá-la.

### Thresholds de atratividade salarial (CLT)

| Faixa salarial | Classificação                                           | Score indicativo do fator |
| -------------- | ------------------------------------------------------- | ------------------------- |
| < R$ 5.000     | Baixa atratividade                                      | 0–20                      |
| R$ 5.000–5.999 | Aceitável                                               | 30–50                     |
| R$ 6.000–6.999 | Compatível                                              | 55–75                     |
| ≥ R$ 7.000     | Atrativa                                                | 80–100                    |
| Não informado  | UNKNOWN — fator excluído da fórmula, peso redistribuído | —                         |

> **Nota histórica:** versões anteriores deste arquivo (até Lote 7.1) definiam rejeição automática para salário < R$7.000. Essa regra foi **supersedida** na Auditoria de Consolidação Pré-7.3 (2026-08-20). Salário passa a compor a Opportunity Attractiveness sem poder de rejeição automática.

### PJ Brasil

Avaliar principalmente a partir de aproximadamente R$ 11.000. Não é critério eliminatório.

Para definição de pretensão salarial em negociações, usar o protocolo de 4 dimensões em `SYSTEM_RULES.md`.

---

## Modelo de trabalho

Critério de **Opportunity Attractiveness** — fator Modelo de trabalho (peso-base 20%).

Preferência (ordem decrescente):
1. Remoto
2. Híbrido (preferencialmente até 3 dias presenciais/semana)
3. Presencial

---

## Localização

Critério de **Opportunity Attractiveness** — fator Localização (peso-base 15%).

Presencial integral compatível:
- Barra / Barra Olímpica / Jacarepaguá / Recreio

Híbrido compatível:
- Regiões acima
- Zona Sul
- Centro

Deslocamento máximo desejável: aproximadamente 1h30.

---

## Empresas

Critério de **Opportunity Attractiveness** — fator Empresa e estrutura (peso-base 20%).

Preferir:
- Empresas de tecnologia com mais de 100 funcionários
- Times de Design maduros
- Grandes empresas de tecnologia
- SaaS B2B
- Marketplaces
- IA
- Produtividade

Watchlist:
- Globo
- IBM
- L'Oréal
- iFood
