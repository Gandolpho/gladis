---
id: TEMP-ROADMAP
type: temp
privacy: CONFIDENTIAL
created: 2026-08-20
last_updated: 2026-10-11
---

# Roadmap do Career OS

> Arquivo temporário de controle do projeto. Registra etapas concluídas, estado atual, etapas futuras e pendências.
> Não tratar previsões como fatos já executados.
> Ao final da construção inicial, decidir com Julia: arquivar, mover para documentação permanente ou excluir após consolidação do histórico.

---

## Regras de manutenção

Sempre que uma etapa ou subetapa for concluída:
1. atualizar o status;
2. registrar os principais entregáveis efetivamente produzidos;
3. registrar mudanças relevantes de escopo;
4. atualizar a indicação de "próxima etapa";
5. não apagar o histórico das etapas concluídas.

Se o roadmap mudar, registrar a alteração no próprio arquivo.

---

## Visão geral

| # | Etapa | Status |
|---|---|---|
| 1 | Especificação | ✅ CONCLUÍDA |
| 2 | Arquitetura | ✅ CONCLUÍDA |
| 3 | Modelo de dados | ✅ CONCLUÍDA |
| 4 | Career OS v1 | ✅ CONCLUÍDA |
| 5 | Conexão Claude ↔ Career OS | ✅ CONCLUÍDA |
| 6 | Migração profissional | ✅ CONCLUÍDA |
| 7 | Materiais de carreira | 🟡 EM ANDAMENTO (7.1 ✅ · 7.2 e 7.3 em revisão completa · 7.4 em andamento) |
| 8 | Inteligência do Career OS | ⏳ PENDENTE |
| 9 | Testes reais | ⏳ PENDENTE |
| 10 | Automação | ⏳ PENDENTE |
| 11 | Operação e manutenção | ⏳ FUTURA / CONTÍNUA |

---

## ETAPA 1 — Especificação

**Status:** ✅ CONCLUÍDA

**Objetivo:** Definir o que o Career OS deveria resolver, seus princípios, escopo, restrições e funcionamento esperado.

**Entregáveis:** Escopo e princípios fundamentais do sistema definidos.

---

## ETAPA 2 — Arquitetura

**Status:** ✅ CONCLUÍDA

**Objetivo:** Definir a estrutura do vault, responsabilidades das pastas e relação entre os diferentes tipos de informação.

**Entregáveis:** Arquitetura do Career OS definida.

---

## ETAPA 3 — Modelo de dados

**Status:** ✅ CONCLUÍDA

**Objetivo:** Definir como experiências, projetos, skills, evidências, critérios, insights e demais informações profissionais seriam representados.

**Entregáveis:** Modelo de dados e convenções estruturais estabelecidos.

---

## ETAPA 4 — Career OS v1

**Status:** ✅ CONCLUÍDA

**Objetivo:** Construir a primeira versão funcional do vault e dos arquivos de sistema.

**Entregáveis:** Base operacional criada.

---

## ETAPA 5 — Conexão Claude ↔ Career OS

**Status:** ✅ CONCLUÍDA

**Objetivo:** Permitir que Claude utilize o vault como fonte profissional persistente e opere seguindo protocolos de leitura, escrita e reconciliação.

**Entregáveis:** Claude conectado ao Career OS; protocolos básicos de operação definidos.

---

## ETAPA 6 — Migração profissional

**Status:** ✅ CONCLUÍDA

**Objetivo:** Migrar e estruturar o histórico profissional disponível, transformando informações dispersas em experiências, projetos, skills, evidências e insights reutilizáveis.

**Entregáveis:** 7 de 7 lotes de migração concluídos. Base profissional pesada do Career OS consolidada.

---

## ETAPA 7 — Materiais de carreira

**Status:** 🟡 EM ANDAMENTO

**Objetivo:** Transformar a base profissional estruturada em materiais externos consistentes e adaptáveis para busca de emprego.

---

### 7.1 — Estratégia de comunicação externa

**Status:** ✅ CONCLUÍDA

**Objetivo:** Definir como Julia deve comunicar sua experiência e diferenciais em cada canal.

**Entregáveis:**
- `08_Insights/COMMUNICATION_STRATEGY.md`
- Narrativa profissional definida
- Diferenciais mapeados e priorizados
- Estratégia de senioridade
- Regras de comunicação de evidências por nível de privacidade
- Regras por canal (CV, LinkedIn, portfólio, entrevistas)
- Princípios para textos narrativos de candidatura

---

### 7.2 — Currículo PT

**Status:** 🟡 REVISÃO COMPLETA PENDENTE (reaberta em 2026-10-11; a versão atual de `CV_PT.md` segue utilizável enquanto isso). Primeira versão concluída em 2026-08 (Lote 7.2).

**Nota de 2026-10-11:** Julia informou que vai revisar o currículo inteiro, em português e em inglês. Não tratar o CV PT como versão final.

**Objetivo:** Criar a versão em português do currículo.

**Entregáveis:**
- `05_Career_Materials/CV_PT.md`
- Narrativa-base definida
- Seleção e hierarquia das experiências
- Bullets revisados
- Métricas publicáveis definidas
- Métodos, ferramentas, formação, cursos e reconhecimentos
- Reconciliação dos novos fatos encontrados durante a construção

**Observação:** A diagramação visual definitiva não faz parte desta etapa. Julia utiliza atualmente uma versão diagramada manualmente. Automação de geração/diagramação deverá ser retomada na Etapa 10.

---

### Auditoria de Consolidação Pré-7.3

**Status:** ✅ CONCLUÍDA (não é lote separado — realizada entre 7.2 e 7.3)

**Objetivo:** Consolidar regras de análise de vagas e corrigir inconsistências antes da criação dos próximos materiais.

**Entregáveis:**
- `00_System/JOB_ANALYSIS_PROTOCOL.md` — criado
- `05_Career_Materials/ATS_KEYWORDS.md` — criado
- `00_System/JOB_CRITERIA.md` — revisado
- `00_System/PROFILE.md` — corrigido
- `06_Jobs/ACTIVE.md` — atualizado
- `08_Insights/SKILL_GAPS.md` — revisado
- `08_Insights/MARKET_POSITION.md` — revisado
- `08_Insights/COMMUNICATION_STRATEGY.md` — revisado
- `00_System/CHANGELOG.md` — atualizado

**Decisões consolidadas:**

**Job Fit** — mede qualificação para executar a vaga. Usa requisitos obrigatórios classificáveis. Coeficientes: CONFIRMED = 1,0 / HIDDEN_IN_CV = 1,0 + alerta de comunicação / PARTIAL = 0,6 / GAP = 0 / UNKNOWN = excluído. Desejáveis não entram na fórmula.

**Desired Coverage** — indicador complementar para desejáveis. Mostra cobertura e decomposição obrigatória: `N CONFIRMED/HIDDEN_IN_CV · N PARTIAL · N GAP`. Não reduz Job Fit. Não é eliminatório.

**Opportunity Attractiveness** — mede quanto a oportunidade é interessante para Julia. Fatores: remuneração, empresa e estrutura, modelo de trabalho, localização, contrato, crescimento e interesse no produto.

**Career Positioning Alignment** — dimensão estratégica informacional. Nunca reduz Job Fit, OA ou funciona como critério eliminatório. Não aparece na linha de recomendação (apenas em narrativa qualitativa quando relevante). Formato canônico de recomendação: `Job Fit: XX/100 (Confiança: X) | OA: XX/100 (Confiança: X)`.

**Salário** — faixas de atratividade: <R$5.000=baixa / R$5.000–5.999=aceitável / R$6.000–6.999=compatível / ≥R$7.000=atrativa. Salário abaixo de R$7.000 NÃO é rejeição automática. Compõe OA via fator Remuneração. Quando Julia perguntar qual pretensão salarial informar para uma vaga, usar o protocolo específico de pretensão salarial com pesquisa externa de mercado — nunca recomendar pretensão apenas a partir dos thresholds pessoais do Career OS.

**Pendência registrada:** "Única designer da empresa" ainda não foi classificada como Hard Constraint, Strong Negative ou Preference. Não tomar decisão automática até Julia definir a regra.

---

### 7.3 — Currículo EN

**Status:** 🟡 REVISÃO COMPLETA PENDENTE (reaberta em 2026-10-11). Primeira versão aprovada em 2026-08-21 (Lote 7.3, Rodada 3).

**Nota de 2026-10-11:** Julia informou que não considera o CV EN finalizado e que a revisão completa será feita com o Claude. `CV_EN.md` guarda a versão da Rodada 3 como ponto de partida, não como versão final. O histórico abaixo permanece como registro do que foi decidido em agosto.

**Objetivo:** Criar a versão em inglês do currículo.

**Decisões de execução:**
- Não fazer tradução literal do CV PT.
- Adaptar: terminologia, linguagem, estrutura quando necessário, keywords, convenções de recrutamento internacional, linguagem de Product Design, formulação de resultados e responsabilidades.
- Preservar rigorosamente: fatos, métricas, autoria, privacidade, nível de evidência.
- Usar `05_Career_Materials/ATS_KEYWORDS.md` como uma das fontes obrigatórias.

**Dependências:** CV PT concluído (✅), Auditoria Pré-7.3 concluída (✅), ATS_KEYWORDS.md disponível (✅).

**Entregáveis:**
- `05_Career_Materials/CV_EN.md` — versão aprovada: Lote 7.3, Rodada 3 (2026-08-21)
- Adaptação profissional completa para o mercado internacional
- Terminologia localizada (PIX, inadimplência, empresa júnior, TCC, comissionamento)
- Keywords ATS incorporadas naturalmente
- Seniority strategy preservada: "Product Designer" sem qualificadores
- Todas as métricas e claims verificados contra Career OS

**Decisões editoriais relevantes:**
- "Non-payment handling" para inadimplência (scope: policy design, não processamento técnico)
- "Social Communication (Film) — PUC-Rio | 2014–2018" sem prefix de grau (curso completo sem diploma)
- "PIX (Brazil's instant payment system)" com explicação na primeira menção
- Bullet independente de Design Systems (5 bullets Trinks aprovados)
- Design Systems scope: uso de DS estabelecido + contribuição de componentes e documentação; não inclui construção end-to-end profissional

---

### 7.4 — LinkedIn

**Status:** 🟡 EM ANDAMENTO (decisões tomadas, **perfil ainda não atualizado**; a execução ficou para depois, a pedido de Julia em 2026-10-11)

**Objetivo:** Revisar e otimizar a presença profissional no LinkedIn.

**Escopo previsto:**
- Headline
- About
- Experiências
- Descrição de projetos quando aplicável
- Featured / Destaques
- Skills e keywords
- Encontrabilidade por recrutadores

**Decisão de execução:** O LinkedIn não deve simplesmente copiar o currículo.

**Dependências:** CV PT e CV EN em revisão completa (ver 7.2 e 7.3). Não definido se a revisão do LinkedIn precisa esperar por elas.

**Estado em 2026-10-11** (relato da conversa com o ChatGPT, trazido por Julia; a plataforma não foi conferida)

Decidido:
- Headline escolhida: `Product Designer | SaaS B2B | Recorrência, IA e pesquisa aplicada`.
- Critérios do About registrados em `COMMUNICATION_STRATEGY.md` (seção LinkedIn).
- LinkedIn preserva o histórico completo (Know-How, StudioD, Piloti, CEDS) e não copia o currículo.

Rascunho, **não publicado**: About temporário, guardado em `05_Career_Materials/LINKEDIN.md`.

Pendente (Julia avalia que o perfil ainda precisa de bastante trabalho):
- About: versão final, escrita e publicada.
- Experience: Trinks (Clube, Comissionamento, Trinks IA, PIX, Design Systems), Piloti (30+ projetos, COPPE), StudioD e Know-How.
- CEDS ESPM: avaliar a seção Voluntariado, sem apagar o histórico.
- Skills: lista completa; priorizar Product Design, User Research e Usability Testing; remover A/B Testing se estiver presente.
- Featured (portfólio), Open to Work e preferências de vaga, idioma e URL personalizada.
- PUCPR trancada: corrigir se ainda aparecer como ativa.
- Cursos e prêmios; remover claims imprecisos sobre IA conversacional.
- Confirmar o que está de fato publicado hoje.

O checklist completo e a tabela "a confirmar" estão em `05_Career_Materials/LINKEDIN.md`.

---

### 7.5 — Gupy / ATS

**Status:** ⏳ PENDENTE

**Objetivo:** Estruturar materiais e estratégias reutilizáveis para plataformas de candidatura e ATS.

**Escopo previsto:**
- Campos recorrentes da Gupy
- Textos narrativos reutilizáveis
- Respostas para perguntas frequentes
- Adaptação de keywords por tipo de vaga
- Regras de preenchimento
- Estratégia de CV tailoring
- Consistência com `ATS_KEYWORDS.md` e `COMMUNICATION_STRATEGY.md`

**Decisão de execução:** Textos narrativos devem complementar o currículo, não reescrevê-lo em parágrafos.

**Nota de 2026-10-11 (dito por Julia):** não existe um currículo fechado. O perfil da Gupy foi adiantado para **uma vaga específica** e não funciona para qualquer vaga. Portanto o perfil atual da Gupy não é uma base genérica reutilizável. Como a Gupy deve funcionar (perfil-base mais adaptação por vaga, ou outra forma) fica **a definir** quando a etapa for retomada, depois do LinkedIn e da revisão dos currículos.

**Dependências:** CV PT e CV EN (em revisão completa, ver 7.2 e 7.3), ATS_KEYWORDS.md (✅). Início previsto depois do LinkedIn, por decisão de Julia (2026-10-11).

---

### 7.6 — Estratégia de portfólio

**Status:** ⏳ PENDENTE

**Objetivo:** Auditar o portfólio atual antes de redesenhar ou criar novos cases.

**Escopo previsto:**
- Quais cases permanecem
- Quais devem ser removidos
- Quais precisam de atualização
- Quais precisam ser criados
- Ordem dos cases e destaque na home
- Papel estratégico de cada case
- Quais competências e evidências cada case deve demonstrar

**Decisão de execução:** Não iniciar redesenho antes desta auditoria.

**Dependências:** CV PT e CV EN (em revisão completa, ver 7.2 e 7.3), definição de posicionamento (✅ via COMMUNICATION_STRATEGY.md).

---

### 7.7 — Cases prioritários

**Status:** ⏳ PENDENTE

**Objetivo:** Criar ou atualizar os cases definidos como prioritários na etapa anterior.

**Prioridades atualmente identificadas:**
1. Trinks IA
2. Evolução do Clube de Assinaturas
3. Comissionamento por Pote (a confirmar na Etapa 7.6)

**Decisão de execução:** Múltiplos Assistentes não é prioridade para portfólio externo — pode continuar servindo como evidência interna. A lista definitiva depende da Etapa 7.6.

**Dependências:** Auditoria de portfólio (Etapa 7.6, ⏳).

---

### 7.8 — Auditoria final dos materiais

**Status:** ⏳ PENDENTE

**Objetivo:** Garantir consistência entre todos os materiais externos e o Career OS antes de encerrar a construção dos materiais.

**Escopo previsto:** Comparar Career OS, CV PT, CV EN, LinkedIn, materiais Gupy/ATS e Portfólio quanto a: datas, cargos, senioridade, nomenclaturas, métricas, autoria, privacidade, claims, keywords, contradições e posicionamento.

**Dependências:** Todas as subetapas de 7.1 a 7.7 concluídas.

---

## ETAPA 8 — Inteligência do Career OS

**Status:** ⏳ PENDENTE

**Objetivo:** Definir como Claude deve raciocinar utilizando a base profissional. A base responde "o que sabemos sobre Julia"; esta etapa consolida "como usar esse conhecimento para tomar decisões de carreira".

**Observação importante:** Antes de executar esta etapa, revisar os protocolos já criados durante a Auditoria Pré-7.3 para evitar duplicação. Parte da inteligência de Job Matching já foi antecipada em `JOB_ANALYSIS_PROTOCOL.md`.

**Módulos previstos:**

**8.1 — Job Matching**
Aplicar `JOB_ANALYSIS_PROTOCOL.md` a vagas reais de forma sistemática.

**8.2 — CV Tailoring**
Adaptar o currículo-base para uma vaga sem inventar experiência, inflar autoria ou destruir consistência.

**8.3 — Application Strategy**
Decidir: se vale candidatura, prioridade, esforço de candidatura, pontos a enfatizar, gaps a administrar.

**8.4 — Salary Strategy**
Usar pesquisa externa + aderência + senioridade real da vaga + critérios pessoais para recomendar pretensão salarial. O protocolo já começou a ser formalizado em `SYSTEM_RULES.md`, mas deverá ser testado operacionalmente.

**8.5 — Interview Preparation**
Selecionar evidências e projetos adequados para perguntas técnicas e comportamentais.

**8.6 — Career Gap Analysis**
Analisar padrões entre vagas relevantes e identificar competências, ferramentas ou experiências recorrentes que estejam faltando ou pouco comunicadas.

**Dependências:** Materiais de carreira completos (Etapa 7, ⏳).

---

## ETAPA 9 — Testes reais

**Status:** ⏳ PENDENTE

**Objetivo:** Validar o comportamento do Career OS com vagas reais antes de automatizá-lo.

**Testes previstos:**

**Teste 1 — Vaga de alta aderência**
Oportunidade que Julia considere muito promissora. Fluxo completo: vaga → Job Fit → OA → recomendação → tailoring → candidatura.

**Teste 2 — Vaga ambígua**
Vaga em que senioridade, escopo ou requisitos não estejam completamente claros. Objetivo: verificar tratamento de UNKNOWN, confiança e ausência de falsas penalizações.

**Teste 3 — Vaga ruim**
Oportunidade que superficialmente pareça relevante mas viole critérios importantes. Objetivo: verificar se o sistema recomenda corretamente baixa prioridade ou não candidatura.

**Calibração**
Comparar decisões do Career OS com julgamento de Julia. Ajustar: scores, PARTIAL, thresholds, Hard Constraints, Strong Negatives, OA, interpretação de gaps, estratégia de comunicação.

**Decisão de execução:** Não automatizar antes dessa calibração.

**Dependências:** Inteligência do Career OS (Etapa 8, ⏳).

---

## ETAPA 10 — Automação

**Status:** ⏳ PENDENTE

**Objetivo:** Automatizar workflows repetitivos apenas depois que a qualidade das decisões tiver sido validada.

**Fluxo-alvo aproximado:**
vaga encontrada → captura → análise → score → recomendação → tailoring → materiais da candidatura → registro → acompanhamento.

**Possíveis automações:**
- Busca e triagem de vagas
- Análise automática com Job Fit e OA
- Geração de versões adaptadas do currículo
- Geração/diagramação do currículo sem trabalho manual
- Preparação de respostas para candidatura
- Registro de candidaturas e atualização de `ACTIVE.md`
- Acompanhamento de processos seletivos
- Análise de padrões de vagas
- Manutenção de evidências
- Extração de novos projetos

**Observação:** A automação de diagramação do currículo deve ser retomada aqui. Julia decidiu não investir mais tempo nisso durante o Lote 7.2.

**Dependências:** Testes reais e calibração concluídos (Etapa 9, ⏳).

---

## ETAPA 11 — Operação e manutenção

**Status:** ⏳ FUTURA / CONTÍNUA

**Objetivo:** Manter o Career OS atualizado após a construção inicial.

**Rotinas previstas:**

| Gatilho | Ação |
|---|---|
| Novo projeto | Extração → reconciliação → Evidence/Skills |
| Nova experiência | Atualização dos arquivos canônicos e derivados |
| Novo resultado profissional | Evidence |
| Mudança salarial ou de preferências | JOB_CRITERIA + derivados |
| Nova candidatura | Registro no pipeline (ACTIVE.md) |
| Resultado de processo seletivo | Histórico + APPLICATION_PATTERNS |
| Padrões de vagas | SKILL_GAPS / MARKET_POSITION |
| Revisão periódica | PROFILE + MARKET_POSITION + SKILL_GAPS + materiais externos |

**Observação:** Frequência e grau de automação dessas rotinas a definir posteriormente.

---

## Pendências conhecidas

Itens que devem ser retomados posteriormente, sem decisão automática:

| Pendência | Contexto | Próxima ação |
|---|---|---|
| "Única designer da empresa" | Não classificada como Hard Constraint, Strong Negative ou Preference | Julia define a regra antes de usar como critério |
| EVD-CLUBE-005 a 010 | Evidências na base; claims externos não aprovados individualmente | Aprovação claim a claim antes de uso público |
| Pesquisa sobre Adoção do PA — claims externos | 133 respondentes, recomendações implementadas | Aprovação individual antes de CV/LinkedIn/portfólio |
| Relatório SVR — claims externos | Ownership de comunicação de resultados | Aprovação individual antes de CV/LinkedIn/portfólio |
| LinkedIn e Portfólio | Materiais ainda não reescritos | Etapas 7.4 e 7.6 |
| Métricas específicas do piloto Trinks IA | Uso geral de métricas indiretas autorizado; afirmações específicas pendentes | Aprovação pontual antes de qualquer uso externo |
| Diagramação automatizada do CV | Adiada na Etapa 7.2 | Retomar na Etapa 10 |
| Frequência de manutenção (Etapa 11) | Não definida | Definir ao encerrar Etapa 7 ou início da Etapa 11 |
| Destino final deste ROADMAP.md | Temporário por ora | Decidir com Julia: arquivar, mover ou excluir ao final da Etapa 7 |
| CV PT e CV EN | Revisão completa pendente (Julia, 2026-10-11). O EN será feito com o Claude; o PT segue utilizável | Julia chama a revisão quando quiser começar |
| LinkedIn (7.4) | Perfil não atualizado; decisões e pendências na etapa 7.4 | Julia decide quando retomar |
| Gupy (7.5) | Perfil adiantado para uma vaga específica, não serve como base genérica; sem currículo fechado. Retomar depois do LinkedIn e da revisão dos CVs | Definir o modelo (base mais adaptação por vaga) ao retomar a 7.5 |
| Estilo de trabalho | `08_Insights/WORKING_STYLE.md` criado em 2026-10-11, só com o que Julia disse | Usar em LinkedIn e entrevistas, sem virar regra de comunicação sem aprovação |
| Itens do LinkedIn relatados pelo ChatGPT e não conferidos | Texto publicado do About, CEDS em Voluntariado, lista de Skills, Featured, Open to Work, idiomas | Conferir no perfil real ao retomar a 7.4 |
