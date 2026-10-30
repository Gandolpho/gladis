# Modelo do ux-synthesis-report.md

## Índice
1. Como usar
2. Modelo

## 1. Como usar

Substitua os textos entre `<>`. Mantenha as seções na ordem. Onde não houver dado, escreva `PENDENTE` ou `não informado`: nunca preencha com suposição.

## 2. Modelo

````markdown
# Síntese de Pesquisa UX: <produto / tema>

> Data: <AAAA-MM-DD> · Fontes analisadas: <N> (<x entrevistas, y testes, z surveys…>) · Participantes: <n>
> Legenda de evidência: **Forte** (3+ fontes) · **Moderada** (2) · **Fraca** (1 ou inferência)

## 1. Resumo da Pesquisa

### Fontes
| ID | Arquivo | Tipo | Participante(s) |
|---|---|---|---|
| F1 | entrevistas/p1.md | Entrevista | P1 |

### Principais insights
| # | Insight | Evidência | Fontes |
|---|---|---|---|
| I1 | <frase curta> | Forte | P1, P3, P4 |

> "<citação curta>" (P3)

### Limitações da pesquisa
<tamanho da amostra, segmentos ausentes, viés de recrutamento, dados desatualizados>

## 2. Personas

### <Nome fictício>: <rótulo do segmento>
*Baseada em: P1, P4, P6*

| | |
|---|---|
| **Perfil** | <só atributos presentes nos dados> |
| **Objetivos centrais** | <…> |
| **Pain points** | <… (I2, I5)> |
| **Comportamentos** | <…> |
| **Conhecimento técnico** | <baixo / médio / alto, com o indício que sustenta> |
| **O que muda no produto** | <decisões que esta persona influencia> |

> "<citação representativa>" (P4)

<repetir para 2 a 4 personas; se só houver 1, explicar por quê>

## 3. Mapa de Jornada: <fluxo principal>

| Etapa | Ações do usuário | Pensamentos / Sentimentos | Pontos de fricção | Oportunidades de design |
|---|---|---|---|---|
| <1. Descoberta> | <verbo…> | <pergunta? / adjetivo> | <gerúndio… (P2, P5)> | <verbo de mudança…> |

**Momentos de verdade:** <etapa · por quê (P3, P6)>

<Divergências entre personas, se houver. Outros fluxos candidatos.>

## 4. PRD: <nome da iniciativa>

### 4.1 Declaração do Problema
<2–4 frases: quem, que problema, impacto, evidência (I1, I3).>

### 4.2 Objetivos e Métricas de Sucesso
| Objetivo | Categoria HEART | Métrica | Baseline | Meta | Origem |
|---|---|---|---|---|---|
| <reduzir abandono no cadastro> | Sucesso na tarefa | <taxa de conclusão do cadastro> | [baseline: a levantar] | [meta: a definir com o time] | I2 |

### 4.3 Personas-alvo
| Persona | Prioridade | Por quê | Requisitos ligados |
|---|---|---|---|
| <Nome> | Primária | <…> | RF-01, RF-03 |

### 4.4 Requisitos Funcionais
#### <Funcionalidade A>
| ID | Requisito | Prioridade | Persona | Insight |
|---|---|---|---|---|
| RF-01 | <O sistema deve…> | Must | <Nome> | I2 |

Critérios de aceite:
- RF-01: <dado/quando/então>

### 4.5 Requisitos Não-Funcionais
| ID | Categoria | Requisito | Fonte |
|---|---|---|---|
| RNF-01 | Acessibilidade | Conformidade WCAG 2.2 nível AA (contraste, navegação por teclado, foco visível, rótulos em formulários, alvos de toque) | padrão |
| RNF-02 | Privacidade | Tratamento de dados pessoais conforme LGPD: base legal, minimização, consentimento quando aplicável, exclusão a pedido | padrão / <insight> |
| RNF-03 | Desempenho | <ex.: LCP ≤ 2,5 s em 4G> | referência de mercado, validar com engenharia |

### 4.6 Escopo
| In-scope | Out-of-scope |
|---|---|
| <…> | <…: motivo> |

### 4.7 Casos de Borda
| Caso | Comportamento esperado | Origem |
|---|---|---|
| <estado vazio / erro / sem conexão / permissão negada / dado incompleto> | <…> | <P3 relatou / derivado da jornada> |

## 5. Perguntas em aberto
1. <PENDENTE: pergunta crítica que não foi respondida> · método sugerido: <entrevista, teste, dado de uso…>

## 6. Ideias sem evidência
<Propostas que surgiram na síntese mas não têm insight de origem: validar antes de priorizar.>
````
