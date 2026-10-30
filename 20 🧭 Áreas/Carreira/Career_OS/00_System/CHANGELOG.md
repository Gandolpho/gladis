---
id: SYS-CHANGELOG
type: system
privacy: CONFIDENTIAL
created: 2026-08-11
last_updated: 2026-10-11
---

# Changelog

## 2026-10-11 (Registro da conversa com o ChatGPT)

Fonte: três documentos gerados pelo ChatGPT a partir de uma conversa longa sobre o Career OS, guardados em `50 🗃️ Fontes Brutas/` (prefixo `2026-10-11 Career OS`). O snapshot de 34 arquivos que o ChatGPT usava é de agosto e está desatualizado em relação a este cofre; nenhum arquivo dele foi importado. Alterações aprovadas por Julia seguindo o WRITE_PROTOCOL.

- `08_Insights/WORKING_STYLE.md` (novo, CONFIDENTIAL): estilo de trabalho e de decisão de Julia, só com o que ela disse (início de projeto, questionamento, pesquisa, exemplo dos contratos do Clube, regras e recorrência, IA, trajetória, colaboração). Sem inferências do assistente.
- `09_Temp/ROADMAP.md`: 7.4 LinkedIn passa de PENDENTE para EM ANDAMENTO, com decisões e pendências. **7.2 (CV PT) e 7.3 (CV EN) passam a "revisão completa pendente"**: Julia informou que vai revisar os dois currículos, o EN com o Claude. Histórico das etapas preservado. Dependências de 7.4, 7.5 e 7.6 atualizadas. Novas linhas em "Pendências conhecidas".
- `05_Career_Materials/LINKEDIN.md`: de stub para registro do estado: headline escolhida, critérios do About, rascunho provisório **não publicado**, regras de histórico, checklist e tabela "a confirmar". `privacy` mudou de PUBLIC para CONFIDENTIAL (mais restritivo, por conter regras internas).
- `08_Insights/COMMUNICATION_STRATEGY.md`: seção LinkedIn. About passa de "narrativa central completa, com exemplos de projetos" para texto curto sem lista de projetos, por preferência atual de Julia. Adicionadas headline, regra de histórico e regra de privacidade sobre projetos pessoais de IA.

**Adendo do mesmo dia (aprovado por Julia em mensagem seguinte):**

- `00_System/WRITE_PROTOCOL.md`: nova seção "Ajuste direto em texto de material". Pontuação e fluidez em texto de material (CV, LinkedIn, Gupy, portfólio, respostas e rascunhos de candidatura) passam a ser ajustadas sem proposta, com aviso em uma linha depois, sem mudar o sentido. Nunca vale para fatos, números, datas, cargos, nomes, autoria, claims, privacidade, arquivos de sistema ou regras. Na dúvida, fluxo normal.
- `00_System/SYSTEM_RULES.md`: uma linha na lista "Escrita e alterações" apontando para essa exceção.
- `09_Temp/ROADMAP.md`: nota na 7.5 e na tabela de pendências. Julia não tem currículo fechado, e o perfil da Gupy foi adiantado para uma vaga específica, não servindo para qualquer vaga.

**Não alterado:** `CV_PT.md` e `CV_EN.md` (o status de revisão fica no ROADMAP). `GUPY.md` (o stub segue como está; o registro ficou no ROADMAP).

**Pendências desta rodada:** perfil do LinkedIn ainda não atualizado; texto publicado do About, CEDS, Skills, Featured e demais itens a confirmar na plataforma; Gupy depois do LinkedIn.

---

## 2026-10-07 (Integração ao Segundo Cérebro)

- Pasta `Career_OS` movida, sem nenhuma alteração interna, de `Cofre Claude/Career_OS/` para `Cofre Claude/Segundo Cérebro/20 🧭 Áreas/Carreira/Career_OS/`. Aprovado por Julia. O Career OS mantém as regras próprias (`SYSTEM_RULES`, `WRITE_PROTOCOL`), que prevalecem sobre as do Segundo Cérebro dentro desta pasta. As permissões de pasta do Claude Desktop/Cowork precisam ser atualizadas para o novo caminho (pendente com Julia).
- Corrigidos 4 links quebrados (aprovado por Julia): `[[StudioD ESPM]]` → `[[StudioD_ESPM|StudioD ESPM]]` em `CHANGELOG.md` e `03_Skills/Product_Design.md`; `[[Pesquisa sobre Adoção do PA]]` → `[[Pesquisa sobre Adoção do Pagamento Automático|…]]` em `CHANGELOG.md`; `[[EVD-CLUBE-002]]` → `[[METRICS#EVD-CLUBE-002|EVD-CLUBE-002]]` em `02_Projects/Pesquisa sobre Adoção do Pagamento Automático.md`. Nenhum conteúdo factual alterado.

---

## 2026-08-20 (Criação do ROADMAP.md temporário)

- `09_Temp/ROADMAP.md` criado: roadmap consolidado de todo o projeto Career OS — etapas 1 a 11, subetapas de 7.1 a 7.8, status de cada etapa, entregáveis, decisões de execução, dependências e pendências conhecidas. Arquivo temporário criado na nova pasta `09_Temp/` (não confundir com `09_Templates/`). Próxima etapa: 7.3 (CV EN).

---

## 2026-08-20 (Auditoria de Consolidação Pré-7.3)

Rodada de manutenção e consolidação do Career OS antes do início do Lote 7.3 (CV EN). Nenhum conteúdo factual novo sobre competências ou experiências — apenas correções de inconsistências identificadas na auditoria, formalização do protocolo de análise de vagas e ajustes editoriais. **Nenhum arquivo de Skills ou Evidence foi alterado nesta rodada.**

### Arquivos criados

- `00_System/JOB_ANALYSIS_PROTOCOL.md` (novo): protocolo canônico de análise de vagas — três dimensões (Job Fit, Career Positioning Alignment, Opportunity Attractiveness), fórmulas completas, classificação de requisitos (CONFIRMED / HIDDEN_IN_CV / PARTIAL / GAP / UNKNOWN), Desired Coverage, matriz de recomendação e formato padrão de arquivo de vaga.
- `05_Career_Materials/ATS_KEYWORDS.md` (novo): lista operacional de palavras-chave ATS extraída e expandida a partir da Seção 13 de COMMUNICATION_STRATEGY.md. Inclui Core, Contextual, Domain, Methods, Tools, English equivalents e lista de keywords a NÃO forçar.

### Arquivos alterados

- `00_System/JOB_CRITERIA.md`: reestruturado com dimension labels (Job Fit criteria / OA criteria). Seção "Rejeitar" substituída por "Hard Constraints" (rejeição automática: Web Designer com desenvolvimento, função híbrida designer+developer, responsabilidade central por frontend, presencial integral em SP) e "Strong Negatives" (consultoria/agência com múltiplos clientes → fator Empresa e estrutura em OA; Blockchain → fator Crescimento e interesse em OA). Pendência explícita registrada para "Única designer da empresa" (sem classificação até decisão de Julia). Nova tabela de thresholds salariais (4 faixas: <R$5k=baixa / R$5–5,999=aceitável / R$6–6,999=compatível / ≥R$7k=atrativa). **Nota histórica:** regra de rejeição automática por salário < R$7.000 presente nas versões anteriores (incluindo entradas de Lote 7.1 neste CHANGELOG) foi supersedida: salário deixa de ser critério eliminatório e passa a compor a Opportunity Attractiveness via fator Remuneração.

- `00_System/PROFILE.md`: idioma Espanhol corrigido de "iniciante" para "básico" (decisão aprovada por Julia).

- `08_Insights/SKILL_GAPS.md`: data `last_updated` corrigida de 2026-08-21 (typo) para 2026-08-20.

- `08_Insights/MARKET_POSITION.md`: (1) data `last_updated` atualizada de 2026-08-13 para 2026-08-20; (2) Seção 3 — evidência [[Pesquisa sobre Adoção do Pagamento Automático]] adicionada ao diferencial "Pesquisa aplicada mista"; (3) Seção 5 — nota de escopo adicionada: "descreve posicionamento, não critério de Job Fit"; (4) Seção 6 — referência stale corrigida: "CV/LinkedIn/Portfólio ainda não foram reescritos" substituída por "CV PT reescrito (Lote 7.2); LinkedIn e Portfólio ainda pendentes".

- `08_Insights/COMMUNICATION_STRATEGY.md`: (1) Seção 2 — nota de escopo adicionada explicitando que Tier 1/2/3 é framework de comunicação, não checklist de Job Fit; (2) Seção 8 — EVD-CLUBE-003 canal atualizado de "CV (bullet), entrevistas" para "entrevistas" — o CV PT (Lote 7.2) usa EVD-CLUBE-001 para o bullet do Clube, não a história de advocacy; (3) Seção 12 — adicionada seção "Novas evidências a formalizar" com Pesquisa sobre Adoção do PA, Relatório SVR e EVD-CLUBE-005 a 010, todos pendentes de aprovação claim a claim; (4) Seção 14 CV EN — nota adicionada sobre expansão no Lote 7.3; (5) Seção 16 Trinks — projetos de dados e pesquisa atualizados com [[Pesquisa sobre Adoção do Pagamento Automático|Pesquisa sobre Adoção do PA]] e [[Relatório Separação Venda e Renovação]] como casos de prática real e recorrente (com nota de claims pendentes).

- `06_Jobs/ACTIVE.md`: header de tabela atualizado — coluna "Fit" substituída por colunas "Job Fit" e "Atratividade" (Opportunity Attractiveness); colunas "Recomendação" e "Próxima ação" adicionadas. Referência ao JOB_ANALYSIS_PROTOCOL.md adicionada.

- `00_System/CHANGELOG.md` (este arquivo): data `last_updated` corrigida de 2026-08-21 (typo) para 2026-08-20; esta entrada adicionada.

### Regras canônicas consolidadas nesta rodada

1. **Job Fit mede qualificação** — a análise parte dos requisitos da vaga em direção às evidências de Julia, nunca do posicionamento de Julia em direção à vaga.
2. **UNKNOWN ≠ GAP** — ausência de informação na descrição não é evidência de falta de qualificação; UNKNOWN exclui o item do cálculo e reduz a confiança.
3. **Career Positioning Alignment é informacional** — nunca reduz Job Fit, OA ou recomendação.
4. **HIDDEN_IN_CV = cobertura plena + alerta** — coeficiente 1,0 para Job Fit; alerta obrigatório de comunicação.
5. **Salário não rejeita** — influencia OA via fator Remuneração com novos thresholds; regra antiga de rejeição automática por salário supersedida.
6. **Desired Coverage separado de Job Fit** — desejáveis não afetam o score de qualificação; Desired Coverage é indicador complementar com formato obrigatório: "X de Y · N CONFIRMED · N PARTIAL · N GAP".
7. **Strong Negatives integrados em OA** — afetam a nota do fator correspondente dentro da fórmula; sem penalidade externa adicional.
8. **Hard Constraints encerram a análise** — OA não é calculada quando Hard Constraint ativa.

### Pendências que permanecem abertas após esta rodada

- **"Única designer da empresa"**: não classificada como Hard Constraint nem Strong Negative. Decisão de Julia pendente antes de atualizar JOB_CRITERIA.md.
- **EVD-CLUBE-005 a 010**: evidências existentes na base mas formulações externas (claims) ainda não aprovadas individualmente. Não usar em materiais externos sem aprovação pontual.
- **Pesquisa sobre Adoção do PA e Relatório SVR**: projetos documentados; claims externos (volume de pesquisa 133, implementação de recomendações, ownership de comunicação de resultados) pendentes de aprovação antes de uso em CV/LinkedIn/portfólio.
- **LinkedIn e Portfólio**: materiais ainda não reescritos (previstos para etapas posteriores ao Lote 7.3).
- **CV EN**: previsto para Lote 7.3 — próximo passo imediato.

---

## 2026-08-20 (textos narrativos de candidatura)

- **Nova regra obrigatória: Textos Narrativos de Candidatura.** Aprovada por Julia após proposta e diagnóstico seguindo WRITE_PROTOCOL. Dois arquivos alterados.

  - `00_System/SYSTEM_RULES.md`: nova seção `## Textos Narrativos de Candidatura — Protocolo` adicionada após `## Pretensão Salarial`. Define processo obrigatório de 10 etapas antes da escrita (entender o campo, verificar limite, analisar vaga, identificar aderência, consultar Career OS, selecionar informação nova, definir narrativa, escrever, auditar) e checklist de auditoria pós-escrita em cinco dimensões: Redundância, Personalização, Naturalidade, Evidência e privacidade, Voz. Referencia `COMMUNICATION_STRATEGY.md` Seção 19 para os princípios editoriais.
  - `08_Insights/COMMUNICATION_STRATEGY.md`: nova Seção 19 adicionada com princípios editoriais completos — princípio central (CV = evidência / texto narrativo = interpretação), valor incremental, conteúdo prioritário, personalização real, pesquisa externa sobre a empresa, tom e voz, Anti-AI Writing Patterns, proibição de copiar linguagem da vaga, profundidade em vez de inventário, tamanho por tipo de campo, relação com senioridade, uso do Career OS e distinção entre tipos de conteúdo. Inclui exemplo ilustrativo com marcação explícita de que não é fato do Career OS. Rodapé e `last_updated` atualizados.

  **Motivação:** ausência total de regras para geração e auditoria de textos narrativos de candidatura. Sem essa camada, o risco padrão é produzir prosa que repete o CV, usa linguagem corporativa genérica e não diferencia a candidatura.

## 2026-08-20 (regras do sistema)

- **Nova regra obrigatória: Pretensão Salarial.** Aprovada por Julia após proposta seguindo WRITE_PROTOCOL. Dois arquivos alterados.

  - `00_System/SYSTEM_RULES.md`: nova seção `## Pretensão Salarial` adicionada ao final. Define pesquisa externa obrigatória (hierarquia de fontes, recência de 12 meses, diferenciação salário-base vs. remuneração total), análise de aderência obrigatória antes de qualquer recomendação, cálculo combinando mercado + aderência + senioridade real + critérios pessoais, tratamento de incerteza com labels tipadas (`FACT` / `MARKET ESTIMATE` / `CAREER OS FACT` / `INFERENCE` / `RECOMMENDATION`), formato padrão de resposta e regra específica para formulários com campo único. Única exceção: Julia pode dispensar a pesquisa explicitamente, com aviso de limitação.
  - `00_System/JOB_CRITERIA.md`: nota de escopo adicionada à seção `## Salário CLT` deixando explícito que as faixas são critérios pessoais de aceitabilidade, não âncora de recomendação salarial.

  **Motivação:** comportamento anterior permitia recomendar pretensão salarial com base apenas nas faixas internas do Career OS, sem pesquisa de mercado. A regra elimina esse risco e define processo estruturado para todas as análises futuras.

## 2026-08-21 (auditoria corretiva — Pre-Score Validation, Design Systems, Adobe tools, Behance)

Correções com impacto imediato no Job Matching e registro de competências subdocumentadas. Nenhum arquivo de CV foi alterado. Todas as mudanças aprovadas por Julia.

### Arquivos alterados

- `00_System/JOB_ANALYSIS_PROTOCOL.md`: (1) Tabela de Seção 3 — definição de GAP atualizada para tornar explícito que ausência de documentação não é suficiente para classificar como GAP; (2) Nova Seção 3.5 "Pre-Score Validation" adicionada entre as Seções 3 e 4 — define distinção obrigatória entre EVIDENCE GAP (ausência de documentação) e CONFIRMED GAP (evidência positiva de ausência), fluxo de validação antes do cálculo do Job Fit, quando perguntar e quando não perguntar, e tratamento de novas informações fornecidas durante análise; (3) Seção 10 — Princípio 9 adicionado: "EVIDENCE GAP ≠ GAP".

- `03_Skills/Product_Design.md`: seção "Design Systems" completamente reescrita. Substituída por três entradas distintas: (1) "Design Systems — Working with established Design Systems" (status: confirmed, profissional, recorrente na Trinks — uso cotidiano, interfaces novas e legadas, adaptação a restrições de legado); (2) "Design Systems — Contribution" (status: confirmed, profissional — criação de componentes, documentação de interações e comportamentos, apoio à evolução do DS; inclui limite factual explícito: nunca construiu profissionalmente um DS completo do zero); (3) "Design Systems — End-to-End (acadêmico)" (status: confirmed, contexto acadêmico — Collabo TCC; nota para Job Matching distinguindo vagas que pedem "working with established DS" de vagas que pedem "building from scratch").

- `01_Experience/Trinks.md`: Design System adicionado à seção de Responsabilidades — "trabalho com Design System estabelecido (uso em contextos novos e legados, criação de componentes, documentação de interações e comportamentos)".

- `03_Skills/Tools.md`: seção Historical atualizada — (1) After Effects adicionado (ausente anteriormente): experiência menor, contexto acadêmico, motion graphics/edição/composição, um projeto com interface, sem experiência profissional em Motion UX; (2) notas de contexto adicionadas a Photoshop, Illustrator, InDesign e Lightroom descrevendo uso histórico e não-cotidiano.

- `05_Career_Materials/ATS_KEYWORDS.md`: entrada "Motion Design" na seção DO NOT FORCE atualizada de "sem evidência" para "conhecimento básico acadêmico (After Effects); sem experiência profissional em Motion UX; ativar apenas em tailoring quando vaga valorizar princípios básicos de motion como diferencial complementar — nunca como competência central".

- `00_System/PROFILE.md`: seção "Presença online" — Behance adicionado (`behance.net/juliagandolpho`) como portfólio complementar (design gráfico, branding, interface); site próprio mantido como portfólio principal de Product Design.

- `08_Insights/COMMUNICATION_STRATEGY.md`: Seção 14 (Portfólio) — sub-seção "Canais" adicionada antes do "Objetivo": distingue site próprio (portfólio principal, Product Design, cases de profundidade) de Behance (portfólio complementar, design gráfico, branding, interface craft) e documenta regra de ativação do Behance (não entra no CV-base; ativar em tailoring para vagas que valorizem Visual Design, Graphic Design, Branding ou habilidades visuais complementares).

### Motivação

Análise da vaga Vivo (Product Designer Pleno) revelou três falhas estruturais: (1) Design Systems foi classificado como gap quando é competência profissional confirmada e cotidiana na Trinks — ausência de documentação foi tratada indevidamente como ausência de competência; (2) ferramentas Adobe e After Effects não estavam representadas no vault; (3) Behance não estava documentado como canal de portfólio. A Seção 3.5 formaliza a distinção estrutural para evitar recorrência do problema 1 em análises futuras.

---

## 2026-08-21

- **Reclassificação de Dashboard / Relatórios — nova base de evidência via análise de match com vaga da Globo (UX Designer Pleno | Dados & IA).** Aprovado por Julia após proposta apresentada seguindo WRITE_PROTOCOL. Dois arquivos alterados.

  - `03_Skills/Product_Design.md`: seção "Dashboard / Relatórios" — status mantido `developing`, mas lista de projetos e evidências ampliada de 1 para 3 projetos ([[Relatório Acompanhamento do Mês]], [[Pesquisa sobre Adoção do Pagamento Automático]], [[Relatório Separação Venda e Renovação]]) e evidências (EVD-DASHBOARD-001, EVD-CLUBE-005, EVD-CLUBE-009). Observação reescrita: de "dois casos, base modesta" para "base ampliada por prática recente (2025), incluindo ownership de estruturação de relatório e comunicação de resultados de pesquisa a stakeholders; ainda sem aprofundamento técnico em visualização de dados".
  - `08_Insights/SKILL_GAPS.md`: linha "Dashboard / Relatórios" — classificação mantida `DEVELOPMENT_AREA`, evidências e "próxima ação" atualizadas para refletir prática real e recorrente (não mais "base modesta"); próxima ação passa a ser aprofundamento técnico específico (tipos de gráfico, storytelling com dados), não mais exposição básica.

  **Contexto:** correção feita por Julia durante análise de match para a vaga UX Designer Pleno | Dados & IA (Globo, ver `06_Jobs/UX_Designer_Dados_IA_Globo.md`), que exigia experiência prática em dataviz como requisito obrigatório. Julia informou dois projetos adicionais de 2025 (recém-registrados no Career OS) não capturados na classificação anterior.

  **Pendência registrada, não corrigida nesta rodada:** os projetos [[Pesquisa sobre Adoção do Pagamento Automático]] e [[Relatório Separação Venda e Renovação]] citam evidências EVD-CLUBE-005 a EVD-CLUBE-010, mas `04_Evidence/METRICS.md` e `IMPACT.md` ainda não têm todas essas evidências formalmente registradas (checagem de 2026-08-21). Reconciliação recomendada em rodada futura.

## 2026-08-20

- **Pesquisa sobre Adoção do Pagamento Automático — reconciliação com relatório final (PPTX) e confirmações diretas de Julia.** Fonte: relatório final "Uso do pagamento automático no Clube de Assinaturas" (PPTX, Trinks, dezembro/2025) enviado por Julia, mais respostas diretas a perguntas pendentes do registro anterior. Aprovação explícita de Julia recebida nesta rodada, com cinco ajustes. Seis arquivos alterados.

  **Ajustes trazidos por Julia:** (1) pesquisa de campo (survey + entrevistas) ocorreu de 7 a 18 de julho de 2025, com as 6 entrevistas todas em 9 de julho de 2025 — não novembro–dezembro/2025 como registrado inicialmente; a análise e apresentação final é que foram consolidadas em dezembro/2025. (2) número absoluto de respondentes por rota não estará disponível — removido da lista de pendências, tratado como informação permanentemente ausente. (3) após o projeto, a migração manual → automático foi implementada com validação técnica de Engenharia, e a comunicação de valor na venda foi melhorada — ambas as recomendações saem de `PROPOSED` para implementadas; a terceira recomendação (onboarding visual) segue sem status confirmado. (4) TPV pode ser apresentado externamente de forma indireta (proporções/relações), nunca em valores absolutos. (5) Pagar.me pode ser citada externamente como provedor; o concorrente Asaas não pode.

  - `02_Projects/Pesquisa sobre Adoção do Pagamento Automático.md`: reescrito com as datas corrigidas (start_date 2025-07, end_date 2025-12), status atualizado (recomendações de migração e comunicação de valor implementadas), ownership detalhado (Julia responsável principal e única condutora das 6 entrevistas; Joyce Nascimento em apoio pontual/registro de respostas; revisão de Gorette Tavares), sexto entrevistado identificado (gestor de barbearia, 4 profissionais, segmento automático), percentuais por hipótese incorporados a partir do PPTX, e regras de citação de provedores (Pagar.me liberada, Asaas vedada).
  - `04_Evidence/METRICS.md`: EVD-CLUBE-002 ganhou `raw_value`/`external_expression`/`uso externo aprovado: sim` (forma indireta) para o TPV, e nota sobre a força-tarefa que explica o crescimento até o valor atual (EVD-CLUBE-001); EVD-CLUBE-005 atualizada com as datas de campo confirmadas; nova EVD-CLUBE-009 (percentuais consolidados por hipótese H1–H5 e insights adicionais, fonte primária PPTX, `CONFIDENTIAL`/`INTERVIEW_ONLY`).
  - `04_Evidence/IMPACT.md`: EVD-CLUBE-006 atualizada com os percentuais agora confirmados pelo PPTX; EVD-CLUBE-007 (migração) atualizada de `PROPOSED` para implementada, com validação técnica de Engenharia; EVD-CLUBE-008 atualizada — Julia confirmada como condutora das 6 entrevistas, Joyce em apoio de registro; nova EVD-CLUBE-010 (comunicação de valor implementada, `INTERVIEW_ONLY`).
  - `03_Skills/Product_Strategy.md`: nota de "Product Strategy (propriamente dita)" atualizada — implementação confirmada de duas recomendações é sinal mais forte que o anterior, mas ainda não suficiente para promover o status (`developing` mantido, sem ownership de roadmap/visão evidenciado).
  - `02_Projects/Clube de Assinaturas.md`: seção Metric ganhou nota cruzada explicando que o intervalo entre a medição histórica (~R$1,5 milhão, outubro/2025) e o valor atual (R$2 milhões/mês) corresponde a crescimento real via força-tarefa multi-times, parcialmente informada por esta pesquisa — não inconsistência de dado; atribuição causal específica permanece `USER_CLAIM`.

  **Ainda pendente:** se a recomendação de onboarding visual foi implementada; detalhes do processo de validação técnica com Engenharia e de alinhamento com Comercial; outcome quantitativo pós-implementação (adoção, chamados, TPV atribuível); razão do intervalo de ~5 meses entre campo (julho/2025) e apresentação final (dezembro/2025), além do motivo já registrado (corte de dados mais recente).

- **Novo projeto — Pesquisa sobre Adoção do Pagamento Automático (PROJECT_EXTRACTION_PROMPT).** Fonte: handoff estruturado de projeto de pesquisa na Trinks, novembro–dezembro/2025 (survey Hotjar + 6 entrevistas sobre adoção do Pagamento Automático no Clube de Assinaturas). Sete arquivos alterados/criados.

  - `02_Projects/Pesquisa sobre Adoção do Pagamento Automático.md` (novo): subprojeto de [[Clube de Assinaturas]]. Status: pesquisa/análise `MEASURED`; recomendações `PROPOSED`, sem evidência de implementação. Reutiliza o baseline já existente (EVD-CLUBE-002 / [[Relatório Acompanhamento do Mês]]) como dado que motivou a pesquisa.
  - `04_Evidence/METRICS.md`: nova EVD-CLUBE-005 (escala mixed-methods: 133 respostas + 6 entrevistas, `CV_OK`).
  - `04_Evidence/IMPACT.md`: novas EVD-CLUBE-006 (gap entre valor percebido pós-adoção e conhecimento pré-adoção, `CONFIDENTIAL`/`INTERVIEW_ONLY`), EVD-CLUBE-007 (recomendação de priorização — migração manual → automático, `INTERVIEW_ONLY`, `PROPOSED`), EVD-CLUBE-008 (execução ponta a ponta — recrutamento e condução de entrevistas, `CV_OK`).
  - `01_Experience/Trinks.md`: adicionado link do novo projeto em "Principais projetos", como subprojeto de [[Clube de Assinaturas]].
  - `03_Skills/Research.md`: novo projeto referenciado em Entrevistas, Surveys, Síntese de Pesquisa e Pesquisa Aplicada à Tomada de Decisão (nenhum status de skill alterado; apenas evidência adicional a competências já `confirmed`).
  - `03_Skills/Product_Strategy.md`: nota adicionada em "Product Strategy (propriamente dita)" registrando EVD-CLUBE-007 como segundo sinal isolado — status permanece `developing`, sem promoção.
  - `03_Skills/Business.md`: novo projeto referenciado em "Pagamentos Recorrentes".

  **Não persistido nesta rodada (pendências para Julia):** percentuais detalhados do survey (desconhecimento, taxa, gestão trabalhosa, uso de dinheiro/PIX) não viraram evidência formal — a própria fonte registra denominadores divergentes entre versões sucessivas da análise, sem reconciliação disponível. Também pendentes: confirmação de ownership formal da pesquisa (Julia como responsável principal vs. outras pessoas envolvidas), identidade do sexto entrevistado, aprovação/roadmap das recomendações, e autorização para uso externo de TPV/contagem de estabelecimentos/percentuais e nomes de provedores (Pagar.me, Asaas). Ver seção "Informações desconhecidas" do projeto.

- **Lote 7.2 — Currículo PT (encerrado).** Conteúdo do CV PT aprovado por Julia; encerramento formal do Lote. Três arquivos alterados.

  - `05_Career_Materials/CV_PT.md`: pendência de LinkedIn resolvida — `[LINKEDIN]` substituído por `linkedin.com/in/juliagandolpho`; nota de pendência removida do frontmatter textual e substituída por nota registrando que a diagramação visual é mantida fora do Career OS (versão diagramada manualmente por Julia) e que este arquivo permanece a fonte textual estruturada do CV PT.
  - `00_System/PROFILE.md`: seção "Presença online" atualizada — LinkedIn: `https://www.linkedin.com/in/juliagandolpho/` (URL oficial confirmada por Julia), substituindo a nota de pendência.
  - `00_System/CHANGELOG.md`: este registro.

  **Diagramação:** decisão de Julia de não continuar refinando a diagramação visual dentro desta etapa. A versão visual em uso foi diagramada manualmente em documento externo ao Career OS; `CV_PT.md` não foi e não deve ser tratado como o layout final, apenas como fonte textual estruturada.

  **Backlog registrado para Etapa 10 — Automação (sem desenvolvimento nesta etapa):** Julia quer futuramente automatizar, com Claude, a geração de currículos diagramados a partir do Career OS, eliminando a diagramação manual a cada adaptação de vaga. Requisitos-alvo: (1) selecionar conteúdo relevante para uma vaga específica; (2) adaptar o currículo sem alterar fatos; (3) preservar a estratégia de comunicação aprovada (`COMMUNICATION_STRATEGY.md`); (4) gerar uma versão visual profissional e consistente; (5) reduzir ou eliminar trabalho manual de diagramação; (6) permitir variações de CV por vaga sem reconstruir o documento do zero. Nenhum arquivo de backlog/roadmap dedicado existe no Career OS no momento deste registro; por decisão de não criar estrutura nova apenas para este item, o requisito fica registrado aqui até que a Etapa 10 comece — momento em que deve ser revisitado e, se fizer sentido, migrado para um artefato de planejamento próprio da etapa.

  **Auditoria de consistência pós-reconciliação:** verificação por busca textual confirmou que não restam outras ocorrências de `[LINKEDIN]` ou de nota de pendência de LinkedIn na base. `05_Career_Materials/LINKEDIN.md` permanece como stub vazio (material da Etapa 7 ainda não iniciado) e não continha nenhuma referência pendente.

- **Lote 7.2 — Currículo PT (concluído).** Cinco arquivos alterados.

  **CV PT escrito:** `05_Career_Materials/CV_PT.md` — primeira versão completa do CV em português. Material editorial derivado do Career OS; não é fonte primária de fatos. Baseado na proposta da Rodada 2 com refinamentos das Rodadas 2.1 e final (Rodada 2.2). Pendência única: URL do LinkedIn não inserida (`[LINKEDIN]`); deve ser substituída pela URL real antes de publicar qualquer versão externa.

  **Decisão editorial duradoura registrada no CV:** no CV-base, nomes de projetos podem aparecer quando ajudam a organizar e demonstrar repertório. Em CVs adaptados para vagas específicas, nomes internos podem ser substituídos ou acompanhados pela descrição do domínio, problema ou contexto quando isso aumentar clareza, aderência à vaga ou performance em ATS.

  **Fatos novos reconciliados:**

  - `00_System/PROFILE.md`: nova seção "Presença online" adicionada com URL do portfólio (https://juliagand.framer.website/) e nota de pendência do LinkedIn. Confirmado por Julia em 2026-08-13.
  - `03_Skills/Research.md`: Card Sorting atualizado — projetos expandidos para [[Collabo]] + [[Trinks]]; nota de "instância única" removida. Uso recorrente na Trinks confirmado por Julia em 2026-08-13.
  - `02_Projects/COPPE.md`: Contexto enriquecido com posição institucional da COPPE (maior centro de pesquisa/pós-grad da América Latina, múltiplos públicos). Problema enriquecido com descrição da fragmentação do portal e do desafio de reorganização. Confirmado por Julia em 2026-08-13.
  - `00_System/PROFILE.md` (cursos): Customer Focus já estava registrado como "Marketing Essentials & Customer Focus — Harvard Business School (2021)". Nenhuma alteração necessária.

  **Auditoria de consistência:** sem inconsistências críticas. Pendência menor aberta: PROFILE.md registra Espanhol como "iniciante"; CV usa "básico" (aprovado por Julia em múltiplas rodadas). Semanticamente equivalente; não reconciliado neste Lote — aguarda confirmação de Julia sobre o nível preferido para o PROFILE.md.

- **Lote 7.2 Reconciliação — Correções factuais e decisões editoriais duradouras (concluído).** Sete arquivos alterados.

  **Bloco A — Correção factual: atuação de Julia no painel de conversas do Trinks IA.**
  Quatro arquivos corrigidos. A formulação anterior ("atuação via testes de usabilidade e adaptação de interface") era incompleta e factualmente incorreta. Julia foi responsável pelo design da interface do painel de conversas, interações e estados de erro. O que não é de autoria de Julia permanece explícito: fluxo conversacional da IA, lógica da conversa, comportamento do agente, estrutura da interação IA-cliente.

  - `02_Projects/Trinks IA.md`: (1) "Minha responsabilidade" — painel agora registra design de interface + interações + estados de erro + testes + adaptação mobile + handoff; (2) primeira decisão relevante — nota de autoria ampliada com distinção precisa; (3) Output — "interface do painel de conversas (design de interações e estados de erro)" adicionada como output explícito; (4) Competências demonstradas — "design de interface e interações (painel de conversas)" adicionada; (5) Competências inferidas — AI Product Design e Human-AI Interaction removidas da lista de inferidas (já `confirmed` em AI.md) e nota adicionada.
  - `03_Skills/AI.md`: (1) Human-AI Interaction — observação corrigida; atuação inclui design de interface, interações, estados de erro, testes, adaptação mobile e handoff; distinção com fluxo conversacional preservada; (2) Conversational AI UX — observação corrigida; "exclusivamente via testes" substituído por descrição precisa; status `learning` permanece (qualifica ausência de design de conversational flows).
  - `04_Evidence/IMPACT.md` (EVD-TRINKSIA-004): (1) Valor/descrição — adicionado design da interface do painel (interações e estados de erro) e testes; (2) Interpretação — "ocorreu via testes de usabilidade, não design do fluxo conversacional" substituído por distinção precisa entre autoria do painel e não-autoria do fluxo conversacional.
  - `08_Insights/COMMUNICATION_STRATEGY.md` (seções 4, 15, 16, 18): (1) Seção 4 "O que pode ser afirmado" — linha sobre adaptação mobile substituída por duas linhas que registram design do painel e adaptação mobile separadamente; (2) Seção 4 "O que não pode ser afirmado" — afirmação sobre fluxo conversacional ampliada com justificativa factual e distinção obrigatória; (3) Seção 4 tabela — nova linha adicionada para "Projetou a interface do painel de conversas"; (4) Seção 15 — autoria positiva do painel explicitada; (5) Seção 16 Trinks — "Projeto de diferenciação: Trinks IA" reescrito como Product Design (painel, config, onboarding) com pesquisa como evidência de processo; (6) Seção 18 tabela linha "Painel de conversas" — totalmente reescrita com autoria por componente.

  **Bloco B — Piloti: organizações confirmadas, JNG e IBRAM CRM.**
  Três arquivos atualizados.

  - `01_Experience/Piloti_Mobile_Internet.md`: nova seção "Organizações com atuação confirmada" com 17 entradas (19 itens da lista original, IBRAM consolidado de 3 frentes em 1 cliente). JNG anotado como trabalho voluntário da equipe da Piloti, não projeto comercial.
  - `01_Experience/Instituto_JNG.md`: contexto atualizado para registrar que o trabalho voluntário ocorreu em conjunto com a equipe da Piloti no mesmo período (2022–2023), sem ser projeto comercial da agência.
  - `02_Projects/IBRAM.md`: Frente 1 renomeada para "Sistema de imprensa / gestão de imprensa (também referido como CRM do IBRAM)" — sem nova frente criada.

  **Bloco C — Figma Make: nota de uso recorrente.**

  - `03_Skills/Tools.md`: nota descritiva adicionada ao Figma Make ("Uso recorrente e prático em prototipação e exploração de soluções, presente em quase todos os projetos atuais"). Classificação `proficiency: working` mantida.

  **Bloco D — Decisões editoriais duradouras em COMMUNICATION_STRATEGY.md.**
  Incorporadas à COMMUNICATION_STRATEGY sem duplicação das seções factuais do Bloco A.

  - Seção 1: narrativa central reescrita para remover "em SaaS B2B" do primeiro plano; SaaS B2B agora aparece como repertório, não como limite do posicionamento. Narrativa condensada atualizada. Posicionamento primário: nota adicionada ("posicionamento não restrito a SaaS B2B"). Argumento de transferibilidade atualizado.
  - Seção 14 CV PT: guideline de formato de bullets adicionada ("contexto/problema + contribuição + efeito/valor; sem verbos de ação isolados ou outcomes sem sustentação").
  - Seção 16 Trinks, "Projetos a destacar": Comissionamento por Pote marcado como prioridade; Múltiplos Assistentes anotado como menção de tipo de projeto (não prioridade na comunicação externa). Trinks IA: framing de IA atualizado para Product Design.
  - Seção 16 Entrevistas, "Histórias candidatas": ordem e framing atualizados — Comissionamento promovido; Trinks IA reescrito como Product Design; Múltiplos Assistentes anotado como menção de tipo.
  - Rodapé atualizado.

  **Auditoria cruzada:** nenhuma ocorrência residual da afirmação incorreta encontrada em arquivos operacionais. Único resíduo em CHANGELOG.md (entry histórica anterior) — preservado como registro de auditoria.

- **Lote 7.1 — Estratégia de Comunicação Externa (concluído).** Três arquivos criados ou alterados.

  - `08_Insights/COMMUNICATION_STRATEGY.md` criado (CS-001, CONFIDENTIAL): fonte canônica para decisões editoriais dos Lotes subsequentes da Etapa 7. Contém: narrativa central aprovada, posicionamento primário e secundário, hierarquia de diferenciais (Tier 1/2/3), estratégia de senioridade, estratégia de comunicação de IA, vocabulário externo recomendado, termos a evitar, Evidence Policy, Hero/Supporting/Interview-only Evidence, evidências que não podem ser publicadas, claims e métricas aprovadas com formulação e canais, palavras-chave ATS, estratégia específica por canal (CV PT, CV EN, LinkedIn, Gupy/ATS, portfólio, entrevistas), regras de consistência entre canais, red flags, papel de cada experiência na narrativa, distinção entre fato/editorial/canal.

  - `00_System/JOB_CRITERIA.md` corrigido: regra salarial CLT atualizada para refletir o registro canônico do CHANGELOG (2026-08-11): rejeição automática abaixo de R$7.000; R$7.000–8.999 compatível; ≥R$9.000 atrativo. Faixas antigas (R$5.000/6.000) removidas.

  **Principais decisões editoriais consolidadas em COMMUNICATION_STRATEGY.md:**
  - Narrativa central: Product Designer em SaaS B2B com trajetória em alta complexidade operacional/financeira; pesquisa aplicada; visão sistêmica; IA como diferencial complementar, não eixo principal.
  - Cargo externo: "Product Designer" (sem "Júnior" quando não obrigatório); nunca "Pleno" ou "Sênior" como cargo histórico.
  - EVD-TRINKSIA-002 (INTERVIEW_ONLY): formulação aprovada — "O piloto superou em mais de 10x a meta inicial de adoção de estabelecimentos."
  - EVD-TRINKSIA-003 (INTERVIEW_ONLY): formulação aprovada — "O produto processou milhares de conversas durante o piloto."
  - EVD-DASHBOARD-001 (CONFIDENTIAL — abstração segura para entrevistas): formulação aprovada — "Identifiquei risco técnico em uma demanda e propus uma alternativa de menor risco, aprovada pela equipe."
  - Piloti: experiência secundária (breadth); COPPE pode ser destacada por demanda.
  - Collabo: manter em todos os materiais, breve no CV (awards), mais contexto em portfólio/LinkedIn.
  - StudioD: pode ser omitida de CVs enxutos; nunca "Diretora de Criação".

- **Reconciliação incremental — Trinks IA (PROJECT_EXTRACTION_PROMPT).** Fonte: extração de conversa anterior via `PROJECT_EXTRACTION_PROMPT.md`, com confirmações diretas de Julia. Dois arquivos alterados, nenhuma Skill criada ou alterada.

  - `02_Projects/Trinks IA.md`: (1) "painel de conversas (via testes de usabilidade)" → "painel de conversas (via testes de usabilidade e adaptação de interface mobile)"; (2) adicionada decisão de adaptação mobile do painel — identificação de problema de densidade em dispositivos pequenos, decisão de preservar estrutura existente e ajustar proporções/tamanhos/espaçamentos, produção de handoff; nota de autoria preservada (não inclui design do fluxo conversacional); (3) Output: adicionadas "adaptações mobile do painel de conversas" e "documentação de handoff para adaptações mobile"; (4) Competências demonstradas: UX writing expandido para incluir "configuração"; adicionados "adaptação de interface para restrições de dispositivo" e "documentação de handoff".
  - `04_Evidence/METRICS.md` (EVD-TRINKSIA-001): descrição atualizada para registrar que os 20 testes contemplaram dois temas (usabilidade do painel de conversas e fluxo de onboarding), que os aprendizados contribuíram para ajustes posteriores, e que não há registro para atribuição de mudanças específicas a achados individuais.
  - Nenhuma Evidence nova criada. PROFILE.md, MARKET_POSITION.md, SKILL_GAPS.md e arquivos de 03_Skills/ não alterados.

## 2026-08-13

- **Rodada 1 — Auditoria automática de Skills e relações (execução).** Alterações em 10 arquivos.

  **03_Skills/ — relações adicionadas:**
  - `AI.md`: AI Product Design + Experience [[Trinks]]; Human-AI Interaction + Experience [[Trinks]] + Observação corrigida (decisão de supervisão humana = responsabilidade do produto, não autoria de Julia); Conversational AI UX → `learning` (remoção de EVD-TRINKSIA-004, adição de Observação explicativa — atuação via testes, não design de conversational flows).
  - `Business.md`: Pagamentos Recorrentes + Experience [[Trinks]]; Produtos Financeiros + Experience [[Trinks]]; Risco Operacional + Projects [[Múltiplos Assistentes]], [[Comissionamento por Pote]] + Evidence EVD-MULTIASSIST-001.
  - `Product_Design.md`: Product Discovery + Experience [[Trinks]]; Arquitetura da Informação + Project [[Clube de Assinaturas]]; Interaction Design + Projects [[Múltiplos Assistentes]], [[Split Financeiro]]; Prototipação + Project [[Collabo]]; Desenho de Fluxos Complexos + Experience [[Trinks]]; Estruturação de Regras de Negócio + Project [[Split Financeiro]]; Policy & Business Rules Design → `confirmed` + Projects [[Comissionamento por Pote]], [[Múltiplos Assistentes]] (K1); Client-Facing Facilitation + Experiences [[Trinks]], [[Piloti_Mobile_Internet]], [[StudioD_ESPM|StudioD ESPM]] + Projects [[Comissionamento por Pote]], [[PIX na Jornada de Pagamento]]; Alinhamento entre Stakeholders + Project [[Trinks IA]]; Problem Framing + Projects [[Comissionamento por Pote]], [[Múltiplos Assistentes]] + Evidence EVD-COMISSIONAMENTO-001; NOVA SKILL Design Systems (`developing`) com Projects [[Collabo]], [[Trinks IA]] (K4); NOVA SKILL Dashboard / Relatórios (`developing`) com Experience [[Trinks]], Project [[Relatório Acompanhamento do Mês]], Evidence EVD-DASHBOARD-001 (K6).
  - `Product_Strategy.md`: Influência sobre Escopo e Priorização + Experience [[Trinks]] + Evidence EVD-DASHBOARD-001; Product Thinking + Projects [[Comissionamento por Pote]], [[Múltiplos Assistentes]]; Risk Reduction + Projects [[Clube de Assinaturas]], [[Comissionamento por Pote]], [[Trinks IA]] + Evidences EVD-TRINKSIA-004, EVD-COMISSIONAMENTO-001 + Observação atualizada.
  - `Research.md`: Entrevistas + Projects [[Trinks IA]], [[Pesquisa B2C de Agendamento]] + Observação atualizada; Síntese de Pesquisa + Experience [[Trinks]]; Pesquisa Aplicada à Tomada de Decisão → `confirmed` + Experience [[Trinks]] + Projects [[Collabo]], [[Clube de Assinaturas]] (K2); Análise Quantitativa Básica + Experience [[Trinks]] + Project [[Trinks IA]] + Observação atualizada.

  **Correções factuais:**
  - `04_Evidence/IMPACT.md` (EVD-TRINKSIA-004): "Atuação na definição do painel de conversas" → "participação nos testes de usabilidade do painel de conversas"; decisão de supervisão humana explicitada como responsabilidade do produto, não de autoria de Julia.
  - `02_Projects/Trinks IA.md`: "painel de conversas" → "painel de conversas (via testes de usabilidade)"; Decisões relevantes — nota de autoria adicionada ao item de supervisão humana.

  **Derivados reconciliados com estado canônico de 03_Skills/:**
  - `00_System/PROFILE.md`: Diferenciais — removido "Os quatro primeiros são inferred_strong"; todos os 8 diferenciais agora listados como `confirmed`; nota editorial preservada (comunicação por exemplos; tratamento na Etapa 7).
  - `08_Insights/MARKET_POSITION.md`: tabela seção 3 — Systems Thinking, Policy & Business Rules Design, Risk Reduction, Business Thinking: `inferred_strong` → `confirmed`; evidências de Risk Reduction e Policy & Business Rules Design ampliadas; parágrafo abaixo da tabela corrigido; nota sobre AI Product Design corrigida ("decisões de design, supervisão humana" removido; substituído por descrição factual das evidências EVD-TRINKSIA-001 e EVD-TRINKSIA-004).
  - `08_Insights/SKILL_GAPS.md`: Product Thinking corrigido de `inferred_strong` para `confirmed`; NOVA LINHA Dashboard / Relatórios (DEVELOPMENT_AREA).


- `00_System/PROJECT_EXTRACTION_PROMPT.md` criado: mecanismo de extração de contexto de projetos para o Career OS. Documento de processo (não template de dados) que define o prompt padronizado para transferência de informações de novas conversas/projetos para a base. Localização: `00_System/`, junto a outros protocolos operacionais (WRITE_PROTOCOL.md, SYSTEM_RULES.md). Nenhum outro arquivo alterado.

- Revisão manual de relações Skill ↔ Project ↔ Experience em 03_Skills/ (AI.md, Business.md, Product_Design.md, Product_Strategy.md), a pedido de Julia. Seis competências promovidas de inferred_strong para confirmed com base em regra oficial definida por Julia (sustentação factual suficiente, incluindo confirmação direta acompanhada de experiência concreta compatível — não indica senioridade/especialização): Human-AI Interaction, Business Thinking, Problem Framing, Systems Thinking, Product Thinking, Risk Reduction. Product Strategy (propriamente dita) e Policy & Business Rules Design mantidos sem alteração. Aplicada nova regra de granularidade Experience vs. Project (Experience para prática recorrente transversal a toda a experiência; Project para casos representativos/específicos): adicionadas relações de Experience (principalmente [[Trinks]] e [[Piloti_Mobile_Internet]]) em várias Skills; [[Piloti_Mobile_Internet]] corrigido de Project para Experience em Arquitetura da Informação e Prototipação (limpeza estrutural aprovada por Julia). Adicionadas relações de Project: [[Collabo]] (Product Discovery, Arquitetura da Informação), [[Comissionamento por Pote]] (Interaction Design), [[Split Financeiro]]/[[Trinks IA]]/[[PIX na Jornada de Pagamento]] (Desenho de Fluxos Complexos), [[Clube de Assinaturas]] (Business Thinking), [[Múltiplos Assistentes]]/[[Comissionamento por Pote]] (Systems Thinking, como exemplos representativos). Nenhuma Evidence criada ou alterada; nenhum Project/Experience alterado; nenhuma outra Skill mudou de status. PROFILE.md, MARKET_POSITION.md e SKILL_GAPS.md não alterados nesta rodada — pendência registrada: reconciliar PROFILE.md e MARKET_POSITION.md após conclusão da revisão manual completa das Skills por Julia.

- Reconciliação pós-migração com fontes novas (LinkedIn e histórico Notion): corrigida instituição da pós-graduação em Antropologia Cultural (PUCPR, trancada); adicionadas datas de formação (ESPM, PUC-Rio) e 3 certificações (IA, Branding Essencial, Fundamentos do Scrum) em PROFILE.md; CEDS ESPM registrado com período confirmado (mar–jul/2022), sem virar experiência formal. Know-How_Learning.md e StudioD_ESPM.md atualizados (cargo "Estágio em Design Gráfico", datas, clientes e projetos históricos). Piloti_Mobile_Internet.md e Trinks.md ganharam contexto organizacional (benchmarking confirmado, ICL expandido, linhas de reporte), sem uso como evidência de senioridade. Clube de Assinaturas.md ganhou o exemplo "Separação da Venda e Renovação", classificado como comparação/validação de alternativas de design, não A/B testing. SKILL_GAPS.md manteve Experimentação/A-B testing como REAL_GAP, com nota de contexto. Nenhuma Skill mudou de status, nenhuma Evidence foi criada, MARKET_POSITION.md e JOB_CRITERIA.md não foram alterados.

## 2026-08-12

- Lote 1 da migração concluído: PROFILE.md preenchido (formação, idiomas, certificações, reconhecimentos, domínios de experiência); criadas 5 experiências em 01_Experience/ (Trinks, Piloti Mobile & Internet, StudioD ESPM, Instituto JNG, Know-How Learning). CEDS ESPM registrado em PROFILE.md como atividade acadêmica, sem experiência formal própria.
- Lote 2 da migração concluído: criados 5 projetos prioritários em 02_Projects/ (Clube de Assinaturas, Trinks IA, Comissionamento por Pote, Collabo e Pesquisa B2C de Agendamento).
- Governança de privacidade aprimorada: formalizada a classificação granular de informações e a estrutura para métricas com valor interno e expressão externa derivada.
- Lote 3 da migração concluído: criados 6 projetos complementares em 02_Projects/ (PIX na Jornada de Pagamento, Split Financeiro, Múltiplos Assistentes, Relatório Acompanhamento do Mês, COPPE, IBRAM). ABTP e ICL mantidos apenas como menção em Piloti_Mobile_Internet.md, sem entidade própria.
- Lote 4 da migração concluído: criadas 16 evidências rastreáveis em 04_Evidence/ (8 em METRICS.md, 7 em IMPACT.md, 1 em FEEDBACK.md), com IDs vinculados aos projetos correspondentes. Uma avaliação de desempenho histórica ("além do esperado") registrada como pendência a confirmar, sem virar evidência nesta etapa.
- Lote 5 da migração concluído: inventário de competências estruturado em 03_Skills/ (Product_Design, Research, AI, Product_Strategy, Business, Tools), com status confirmed/inferred_strong/developing/learning e referências a evidências e projetos. Ferramentas consolidadas em Tools.md com eixo status + proficiency.
- Lote 6 concluído: MARKET_POSITION.md e SKILL_GAPS.md preenchidos em 08_Insights/, com posicionamento atual, senioridade percebida (Pleno consolidado, sem generalização para Senior), diferenciais rastreáveis e tabela de gaps por classificação. APPLICATION_PATTERNS.md permanece vazio, sem volume suficiente de candidaturas.
- Lote 7 concluído: PROFILE.md consolidado (posicionamento principal, senioridade percebida, domínios de experiência, diferenciais, competências mais fortes, gaps atuais e direção de carreira), a partir de MARKET_POSITION.md, SKILL_GAPS.md e JOB_CRITERIA.md. Auditoria estrutural e semântica do vault concluída sem problemas de integridade. Relações reversas Project/Experience → Skills avaliadas e não implementadas (backlinks via Skills já suficientes). **Etapa 6 — Migração Profissional concluída.**

## 2026-08-11

- Career OS v1 criado.
- Estrutura inicial do vault definida.
- Regras de idioma, privacidade, escrita e critérios de vagas registradas.
- Regra salarial CLT atualizada: rejeição automática abaixo de R$ 7.000; R$ 7.000–8.999 compatível; ≥ R$ 9.000 atrativo (substitui faixas anteriores de R$ 5.000/6.000).
