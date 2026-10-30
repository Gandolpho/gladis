---
id: SYS-JOB-ANALYSIS-PROTOCOL
type: system
privacy: CONFIDENTIAL
created: 2026-08-20
last_updated: 2026-08-20
---

# Protocolo de Análise de Vagas

> Documento canônico que define como analisar e avaliar vagas de emprego no Career OS.
> Toda análise de vaga em `06_Jobs/` deve seguir este protocolo.

---

## 1. Princípio fundamental

A análise parte da vaga em direção às evidências de Julia — nunca o contrário.

**CORRETO:** Vaga → requisitos → o que Julia tem para cada um → Job Fit
**INCORRETO:** Posicionamento de Julia → comparação com a vaga → avaliação de "fit estratégico"

O posicionamento desejado de Julia não define se ela pode executar o trabalho. Define o quanto a vaga reforça sua trajetória preferida — e isso é avaliado em uma dimensão separada (Career Positioning Alignment), nunca dentro de Job Fit.

---

## 2. As três dimensões

### Dimensão 1 — Job Fit
**Pergunta:** Julia consegue executar este trabalho?

- Fonte: requisitos e responsabilidades da vaga → evidências no Career OS
- Mede: qualificação para executar as responsabilidades descritas
- Nunca penalizado por: posicionamento, salário, porte da empresa, ausência de diferenciais não solicitados
- Output: score 0–100 + nível de confiança + faixa indicativa (quando confiança baixa)

### Dimensão 2 — Career Positioning Alignment (CPA)
**Pergunta:** Esta vaga aproveita ou reforça o posicionamento profissional que Julia quer construir?

- Fonte: requisitos da vaga → posicionamento desejado em MARKET_POSITION.md
- Mede: alinhamento estratégico com a trajetória preferencial
- Nunca elimina uma candidatura; nunca reduz Job Fit ou OA
- Output: texto narrativo — Alta / Média / Baixa aderência, com justificativa
- Uso: contexto para decisão e priorização entre vagas semelhantes

### Dimensão 3 — Opportunity Attractiveness (OA)
**Pergunta:** Quão interessante é esta oportunidade dado os critérios pessoais de Julia?

- Fonte: dados da vaga → critérios em JOB_CRITERIA.md
- Mede: qualidade da oportunidade segundo preferências declaradas
- Output: score 0–100 + nível de confiança

---

## 3. Classificação de requisitos

Aplicada a cada item identificado na vaga durante o mapeamento:

| Classificação | Definição | Efeito no Job Fit |
|---|---|---|
| **CONFIRMED** | Competência documentada em 03_Skills/ com evidência em 04_Evidence/ | Coeficiente 1,0 |
| **HIDDEN_IN_CV** | Competência existe com evidência sólida, mas não aparece no CV/portfólio atual | Coeficiente 1,0 + alerta obrigatório de comunicação |
| **PARTIAL** | Evidência real existe, mas insuficiente para cobertura plena no nível esperado pela vaga | Coeficiente 0,6 |
| **GAP** | Evidência confirma ausência ou insuficiência da competência no nível exigido. Nota: ausência de documentação no Career OS não é suficiente para GAP — ver Seção 3.5 (Pre-Score Validation). | Coeficiente 0,0 |
| **UNKNOWN** | Vaga não fornece informação suficiente para classificar | Excluído do cálculo; reduz confiança |
| **TRANSFERABLE** | Experiência análoga em contexto diferente — usar com cautela e enquadramento explícito | Não é uma classificação de Job Fit; é nota qualitativa |

### Sobre PARTIAL (coeficiente 0,6)

0,6 é uma convenção metodológica calibrável. Significa que evidência parcial é ponderada mais próxima de "ter" do que de "não ter" a competência — o custo de um falso negativo (desqualificar Julia quando ela consegue executar) é maior do que o custo de um falso positivo nesta etapa de triagem.

PARTIAL não significa "Julia possui 60% da habilidade." Casos típicos:
- Skill com status `developing` quando a vaga espera `confirmed`
- Ferramenta ou método com uso pontual (1–2 instâncias) versus uso recorrente
- Domínio relevante mas em contexto diferente do descrito
- Experiência em escala menor que o esperado
- Evidência concentrada em projeto único sem padrão repetível

O coeficiente pode ser revisado se análises futuras evidenciarem distorção sistemática.

### Alerta obrigatório para HIDDEN_IN_CV

Toda vez que um requisito for classificado como HIDDEN_IN_CV, a análise deve incluir:
> ⚠ Competência não visível no CV/portfólio atual. Antes de candidatar, definir estratégia de comunicação: ajuste de CV, narrativa em carta de apresentação, ou preparação de resposta para entrevista.

---

## 3.5 Pre-Score Validation

### Princípio

**Ausência de evidência no Career OS ≠ ausência de competência.**

O Career OS é a fonte factual principal, mas é uma base em evolução. Um requisito pode não estar documentado porque a competência ainda não foi migrada para o vault — não porque Julia não a possui.

Antes de calcular o Job Fit final, aplicar a seguinte distinção:

| Tipo | Definição |
|---|---|
| **EVIDENCE GAP** | Não há informação suficiente no Career OS para determinar se Julia possui a competência. Causa provável: documentação incompleta, não ausência real da competência. |
| **CONFIRMED GAP** | Existe informação no Career OS que sustenta a conclusão de que Julia não possui ou não atinge o nível esperado. Exemplos: skill com status `developing` quando a vaga exige `confirmed`; domínio sem nenhuma experiência no histórico; limitação explicitamente documentada. |

**EVIDENCE GAP nunca é convertido automaticamente em GAP.**

### Fluxo de validação

Para cada requisito obrigatório que seria classificado como GAP ou PARTIAL principalmente por ausência de documentação:

1. Verificar se existe evidência positiva de ausência no Career OS — se sim, é CONFIRMED GAP → classificar como GAP e prosseguir.
2. Se não houver evidência positiva de ausência: avaliar se uma resposta de Julia poderia mudar materialmente a classificação.
3. Se sim → adicionar à lista de perguntas do Pre-Score (não calcular o score ainda).
4. Agrupar todas as perguntas em uma única rodada, antes de apresentar qualquer score.
5. Incorporar as respostas e reclassificar os itens correspondentes.
6. Só então calcular e apresentar o Job Fit final.

### Quando não perguntar

- O Career OS já tem evidência suficiente para classificar com segurança (CONFIRMED, HIDDEN_IN_CV ou CONFIRMED GAP).
- A resposta não mudaria materialmente o score nem a recomendação.
- O item é apenas desejável e periférico.
- A competência já foi esclarecida em sessão anterior e está registrada em fonte canônica.
- Existe evidência positiva de ausência da competência (nesse caso, classificar diretamente como GAP).

### Novas informações fornecidas durante a análise

Quando Julia fornecer informação que revele competência não documentada no Career OS:

- Usar naquela análise com a classificação resultante.
- Sinalizar: `[informação fornecida durante análise — ainda não reconciliada com o Career OS]`.
- Ao final da análise, indicar qual arquivo deveria ser atualizado e com o quê.
- Não alterar o Career OS naquele momento sem seguir o WRITE_PROTOCOL.

---

## 4. Fórmula de Job Fit

### O que entra no cálculo

Apenas requisitos **obrigatórios** e **responsabilidades centrais** declaradas na vaga.
Desejáveis **não entram** na fórmula de Job Fit — são avaliados separadamente em Desired Coverage.

### Fórmula

```
Job Fit = Σ(coeficiente_i, para obrigatórios não-UNKNOWN)
        ÷ count(obrigatórios não-UNKNOWN)
        × 100
```

Todos os requisitos obrigatórios têm peso igual. UNKNOWN é excluído de numerador e denominador (não penaliza; reduz confiança).

### Coeficientes

| Classificação | Coeficiente |
|---|---|
| CONFIRMED | 1,0 |
| HIDDEN_IN_CV | 1,0 |
| PARTIAL | 0,6 |
| GAP | 0,0 |
| UNKNOWN | excluído |

### Exemplos numéricos

**Exemplo 1 — Candidata forte, todos os obrigatórios cobertos:**

| Requisito | Classif. | Coef. |
|---|---|---|
| R1 | CONFIRMED | 1,0 |
| R2 | CONFIRMED | 1,0 |
| R3 | HIDDEN_IN_CV | 1,0 |
| R4 | PARTIAL | 0,6 |

Job Fit = (1,0 + 1,0 + 1,0 + 0,6) / 4 × 100 = 3,6/4 × 100 = **90,0**
Confiança: Alta (0 UNKNOWNs)

**Exemplo 2 — Gaps reais em obrigatórios:**

| Requisito | Classif. | Coef. |
|---|---|---|
| R1 | CONFIRMED | 1,0 |
| R2 | PARTIAL | 0,6 |
| R3 | GAP | 0,0 |
| R4 | CONFIRMED | 1,0 |

Job Fit = (1,0 + 0,6 + 0,0 + 1,0) / 4 × 100 = 2,6/4 × 100 = **65,0**
Confiança: Alta (0 UNKNOWNs)

**Exemplo 3 — Muitos UNKNOWNs (score preliminar):**

| Requisito | Classif. | Coef. |
|---|---|---|
| R1 | CONFIRMED | 1,0 |
| R2 | UNKNOWN | excluído |
| R3 | PARTIAL | 0,6 |
| R4 | UNKNOWN | excluído |

Job Fit preliminar = (1,0 + 0,6) / 2 × 100 = **80,0**
Confiança: Baixa (2 de 4 obrigatórios são UNKNOWN)
Faixa indicativa: 40–100 (se ambos UNKNOWNs forem GAP → 40; se CONFIRMED → 100)

---

## 5. Tratamento de UNKNOWN e score preliminar

### Quando o score é declarado "preliminar"

O score recebe o rótulo **"preliminar"** quando qualquer uma das condições seguintes for verdadeira:
- ≥ 2 requisitos obrigatórios são UNKNOWN
- 1 UNKNOWN que representa responsabilidade central provável da vaga
- UNKNOWNs representam ≥ 30% dos requisitos obrigatórios totais

### Níveis de confiança

| Situação | Confiança | Formato |
|---|---|---|
| 0 UNKNOWN obrigatórios | Alta | `Job Fit: XX/100` |
| 1 UNKNOWN menor | Moderada | `Job Fit: XX/100 \| Confiança: Moderada` |
| Condição de preliminar ativa | Baixa | `Job Fit preliminar: XX/100 \| Confiança: Baixa \| Faixa indicativa: XX–XX` |

Quando confiança for **Baixa**: a faixa indicativa e a explicação têm precedência sobre o score pontual na leitura da análise. Score preliminar é referência, não avaliação definitiva.

**Regra crítica:** Job Fit baixo com confiança baixa **não gera automaticamente "não candidatar."** Uma descrição insuficiente não é evidência de falta de qualificação.

---

## 6. Desired Coverage

### Definição

Indicador complementar dentro da análise de qualificação. Responde: "Quanto dos requisitos desejáveis Julia também cobre?"

**Não é uma quarta dimensão estratégica.** É uma nota informacional.

### Cálculo

```
Desired Coverage: X de Y desejáveis cobertos
Onde X = desejáveis com coeficiente > 0 (CONFIRMED, HIDDEN_IN_CV ou PARTIAL)
     Y = total de desejáveis não-UNKNOWN listados na vaga
```

### Formato obrigatório de apresentação

```
Desired Coverage: X de Y desejáveis cobertos
N CONFIRMED/HIDDEN_IN_CV · N PARTIAL · N GAP
```

Exemplo:
```
Desired Coverage: 3 de 5 desejáveis cobertos
2 CONFIRMED · 1 PARTIAL · 2 GAP
```

HIDDEN_IN_CV é contabilizado junto aos confirmados na fração, mas gera separadamente o alerta de comunicação obrigatório (ver Seção 3).

### Uso

- Não reduz Job Fit
- Não é critério eliminatório
- Informa CV tailoring e preparação de discurso para cada vaga
- Pode ser usado como desempate entre candidaturas com Job Fit e OA semelhantes

---

## 7. Fórmula de Opportunity Attractiveness

### Fatores e pesos-base

| Fator | Peso-base |
|---|---|
| Remuneração | 25% |
| Empresa e estrutura | 20% |
| Modelo de trabalho | 20% |
| Localização e deslocamento | 15% |
| Tipo de contrato e estabilidade | 10% |
| Crescimento e interesse no produto | 10% |

Scores de cada fator: 0–100

### Tratamento de UNKNOWN em OA

Quando um fator for UNKNOWN (informação não disponível):

1. Remover o fator e seu peso do conjunto avaliável
2. Redistribuir proporcionalmente: `peso_novo_i = peso_i / (1 − Σpesos_UNKNOWN)`
3. `OA = Σ(peso_novo_i × score_i)` para fatores conhecidos

### Confiança de OA

| Situação | Confiança |
|---|---|
| 0 UNKNOWN | Alta |
| 1 UNKNOWN com peso ≤ 15% | Alta |
| Remuneração UNKNOWN ou 1 UNKNOWN relevante | Moderada |
| 2+ UNKNOWN ou peso total UNKNOWN > 35% | Baixa |

### Hard Constraints

Quando uma Hard Constraint for ativada: análise encerra imediatamente. OA não é calculada. Recomendação = **Não candidatar**.

Hard Constraints atuais (ver JOB_CRITERIA.md para lista completa):
- Web Designer com forte componente de desenvolvimento
- Função híbrida designer + developer
- Responsabilidade central por frontend
- Presencial integral em São Paulo

### Strong Negatives e sua integração em OA

Strong Negatives **não geram penalidades externas.** Eles afetam a avaliação do fator correspondente dentro da fórmula de OA. O avaliador aplica score reduzido ao fator afetado e registra a razão na coluna "Nota" da tabela.

| Strong Negative | Fator afetado | Efeito indicativo |
|---|---|---|
| Consultoria/agência com múltiplos clientes | Empresa e estrutura | Score baixo por desalinhamento estrutural; teto informal ≤ 35/100 neste fator |
| Blockchain | Crescimento e interesse no produto | Score baixo por aversão de domínio; teto informal ≤ 30/100 neste fator |

Pendência: "Única designer da empresa" — classificação ainda não aprovada. Não usar como critério até decisão explícita.

### Thresholds de remuneração para o fator Remuneração

| Faixa salarial | Score do fator Remuneração |
|---|---|
| < R$5.000 | 0–20 (baixa) |
| R$5.000–5.999 | 30–50 (aceitável) |
| R$6.000–6.999 | 55–75 (compatível) |
| ≥ R$7.000 | 80–100 (atrativa) |

Salário não é critério de rejeição automática. Influencia OA via fator Remuneração. Para definição de pretensão salarial em negociações, consultar o protocolo em SYSTEM_RULES.md.

---

## 8. Matriz de recomendação

### Regra primária — Hard Constraints

Hard Constraint ativa → **Não candidatar**, independente de Job Fit ou OA.

### Regra secundária — Confiança de Job Fit

Quando confiança for **Baixa**:

| Situação | Recomendação |
|---|---|
| Job Fit preliminar ≥ 70 + confiança baixa | "Análise preliminar favorável, mas descrição insuficiente para avaliação definitiva. Investigar a vaga antes de aplicar." |
| Job Fit preliminar < 70 + confiança baixa | "Análise inconclusiva: descrição insuficiente. Ausência de informação não é evidência de falta de qualificação. Investigar antes de decidir." |

Nunca "não candidatar" com base apenas em Job Fit baixo + confiança baixa.

### Matriz principal — quando confiança é Alta ou Moderada

| Job Fit | Opportunity Attractiveness | Recomendação |
|---|---|---|
| ≥ 75 | ≥ 70 | **Candidatar-se** — prioridade alta |
| ≥ 75 | 40–69 | **Candidatar-se** — avaliar trade-offs de atratividade |
| ≥ 75 | < 40 | **Considerar** — Julia qualificada; oportunidade pouco atrativa. Decisão pessoal. |
| ≥ 75 | UNKNOWN (conf. mod./baixa) | **Candidatar-se / Considerar** — investigar fatores desconhecidos |
| 55–74 | ≥ 70 | **Candidatar-se** — gaps gerenciáveis; prioridade normal |
| 55–74 | 40–69 | **Considerar** — avaliar severidade dos gaps |
| 55–74 | < 40 | **Baixa prioridade** — gaps + baixa atratividade |
| < 55 | ≥ 70 | **Avaliar gaps centrais** — se GAPs em responsabilidades core: Não candidatar; se periféricos: Considerar com ressalva |
| < 55 | < 70 | **Não candidatar** — qualificação insuficiente nos requisitos centrais e oportunidade pouco atrativa |
| Qualquer | Hard Constraint ativa | **Não candidatar** |

### Papel do Career Positioning Alignment na recomendação

CPA nunca altera a linha de recomendação acima. Aparece como contexto adicional na justificativa:
- CPA alto → vaga estrategicamente alinhada ao posicionamento desejado
- CPA médio → alinhamento moderado com posicionamento preferencial
- CPA baixo + JF e OA altos → vaga distante do posicionamento preferencial, mas Julia qualificada e oportunidade atrativa. Decisão consciente de trade-off.
- Uso em desempate: entre vagas com JF e OA semelhantes, a com CPA maior pode ser priorizada.

---

## 9. Formato padrão da análise de vaga

```markdown
---
id: JOB-[EMPRESA]-[CÓDIGO]
type: job
company: [nome]
title: [título]
seniority: [nível]
[demais campos de metadados]
---

# Vaga: [Empresa] — [Título] | [Nível]

## Resumo
[2–3 linhas: o que é a vaga, contexto, por que é relevante]

## Mapeamento de requisitos

| Requisito | Classificação | Evidência |
|---|---|---|
| [req obrigatório] | CONFIRMED | [fonte no Career OS] |
| [req obrigatório] | PARTIAL | [evidência existente + limitação] |
| [req obrigatório] | UNKNOWN | — |
| [req obrigatório] | GAP | — |

## Desired Coverage

Desired Coverage: X de Y desejáveis cobertos
N CONFIRMED · N PARTIAL · N GAP

| Desejável | Classificação | Nota |
|---|---|---|
| [des 1] | CONFIRMED | [fonte] |
| [des 2] | PARTIAL | [limitação] |
| [des 3] | GAP | — |

[⚠ Alerta de HIDDEN_IN_CV se aplicável]

## Job Fit

Job Fit: XX/100  [ou "preliminar: XX/100"]
Confiança: Alta / Moderada / Baixa
[Se Baixa:] Faixa indicativa: XX–XX
Avaliados: N de M requisitos obrigatórios (M-N UNKNOWN excluídos)

## Career Positioning Alignment

[Texto narrativo: quais dimensões do posicionamento de Julia a vaga ativa ou ignora.
Nenhum score. Nunca altera Job Fit ou Recomendação.]

## Opportunity Attractiveness

OA: XX/100 | Confiança: Alta / Moderada / Baixa

| Fator | Peso efetivo | Score | Nota |
|---|---|---|---|
| Remuneração | X% | XX | [avaliação; threshold salarial se relevante] |
| Empresa e estrutura | X% | XX | [nota; Strong Negative se ativo] |
| Modelo de trabalho | X% | XX | |
| Localização | X% | XX | |
| Tipo de contrato | X% | XX | |
| Crescimento e interesse | X% | XX | [nota; Strong Negative se ativo] |
| [fator UNKNOWN] | excluído | — | peso redistribuído |

## Pontos fortes
[Bullets com evidências positivas concretas e fontes rastreáveis]

## Gaps
[Bullets com gaps reais, severidade e como enquadrar em entrevista]

## Recomendação

Job Fit: XX/100 (Confiança: X) | OA: XX/100 (Confiança: X)
→ [Recomendação segundo a matriz]
[Justificativa de 2–4 linhas. CPA pode ser mencionado aqui como contexto, nunca como critério.]
[Ações sugeridas: ajuste de CV, ângulo de discurso, preparação específica]
```

---

## 10. Princípios que nunca mudam

1. **Direção de análise:** vaga → evidências de Julia (nunca o contrário)
2. **UNKNOWN não é GAP:** ausência de informação na descrição não é evidência de falta de qualificação
3. **CPA nunca penaliza:** vaga que não ativa o posicionamento preferido não perde Job Fit nem OA por isso
4. **HIDDEN_IN_CV tem cobertura plena + alerta:** Julia sabe fazer; precisa comunicar melhor
5. **Salário não rejeita:** influencia OA; nunca elimina candidatura automaticamente
6. **Confiança baixa não elimina:** priorizar investigação da vaga antes de decidir
7. **Hard Constraints param a análise:** não calcular OA quando há Hard Constraint ativa
8. **Desired Coverage não penaliza Job Fit:** desejáveis não cobertos não reduzem a avaliação de qualificação
9. **EVIDENCE GAP ≠ GAP:** ausência de documentação no Career OS não é evidência de ausência da competência em Julia. Verificar antes de classificar como GAP — ver Seção 3.5.
