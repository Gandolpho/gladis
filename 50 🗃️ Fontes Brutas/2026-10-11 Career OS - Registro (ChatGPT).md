---
tipo: documento
contexto: carreira
status: ativo
projeto: Career OS
parte: 1 de 1
data_geracao: 2026-10-11
origem: conversa com ChatGPT
---

# Registro de contexto e decisões do Career OS

**Proveniência:** [inferido] O ZIP anexado é um snapshot histórico de 34 arquivos, não uma leitura atual do vault. As mudanças posteriores são relatos da conversa e não devem sobrescrever o vault sem comparação.

## 1. Resumo em 5 linhas

1. [dito] Career OS é o sistema de gestão de carreira de Julia Gandolpho em Obsidian e Claude.
2. [dito] Centraliza histórico, projetos, competências, evidências, candidaturas e materiais.
3. [dito] Serve como fonte única para adaptar candidaturas sem inventar fatos.
4. [dito] Permite buscar vagas alinhadas a critérios explícitos e acompanhar resultados.
5. [dito] Deve reduzir retrabalho e manter decisões rastreáveis.

## 2. Objetivo e critérios de sucesso

- [dito] Transição para Product Designer Pleno, salário melhor e empresa mais estruturada.
- [dito] CLT mínimo desejado R$ 6.000, atrativo a partir de R$ 7.000; PJ Brasil em geral somente ≥ R$ 11.000.
- [dito] Prioridade para remoto e híbrido no RJ; evitar consultorias, blockchain, presencial em SP e ser única designer.
- [dito] Preferir vagas de alta aderência; registrar motivo de rejeição, feedback e evolução.
- [inferido] Sucesso significa documentos coerentes, atualizados no vault real e candidaturas rastreáveis.

## 3. Escopo

- [dito] Dentro: experiências, projetos, skills, evidências, critérios de vaga, watchlist, pipeline, CV PT/EN, LinkedIn, Gupy, portfólio, comunicação e protocolos.
- [dito] Fora: inventar resultados, alegar A/B Testing, atribuir autoria de comportamento conversacional da IA, expor informação confidencial.
- [dito] LinkedIn preserva histórico completo; currículo seleciona evidências para a vaga.
- [inferido] Automação integral e sincronização entre sessões não estão confirmadas.

## 4. Arquitetura do sistema

### Árvore integral do snapshot disponível

```text
Career_OS/
  07_Companies/WATCHLIST.md
  08_Insights/SKILL_GAPS.md
  08_Insights/MARKET_POSITION.md
  08_Insights/APPLICATION_PATTERNS.md
  04_Evidence/FEEDBACK.md
  04_Evidence/IMPACT.md
  04_Evidence/METRICS.md
  04_Evidence/EVIDENCE_INDEX.md
  00_System/PROFILE.md
  00_System/INDEX.md
  00_System/CHANGELOG.md
  00_System/JOB_CRITERIA.md
  00_System/SYSTEM_RULES.md
  05_Career_Materials/LINKEDIN.md
  05_Career_Materials/PORTFOLIO.md
  05_Career_Materials/GUPY.md
  05_Career_Materials/CV_PT.md
  05_Career_Materials/APPLICATION_ANSWERS.md
  05_Career_Materials/CV_EN.md
  06_Jobs/ACTIVE.md
  09_Templates/Experience.md
  09_Templates/Application.md
  09_Templates/Project.md
  09_Templates/Company.md
  09_Templates/Evidence.md
  09_Templates/Job.md
  03_Skills/Business.md
  03_Skills/Product_Strategy.md
  03_Skills/Product_Design.md
  03_Skills/Research.md
  03_Skills/AI.md
  03_Skills/Tools.md
  02_Projects/README.md
  01_Experience/README.md
```

### Arquivos posteriores relatados

- [dito] `00_System/JOB_ANALYSIS_PROTOCOL.md`: pre-score e lacunas de evidência.
- [dito] `05_Career_Materials/ATS_KEYWORDS.md`: termos ATS e claims permitidos.
- [dito] `08_Insights/COMMUNICATION_STRATEGY.md`: estratégia por canal.
- [dito] `09_Temp/ROADMAP.md`: etapa 7.3 concluída, 7.4 LinkedIn, 7.6 dependente do CV EN.
- [dito] `00_System/WRITE_PROTOCOL.md`: consultado, mas conteúdo integral indisponível.
- [inferido] `00_System/WORKING_STYLE.md`: proposta de arquivo, ainda não criado de modo confirmado.

### Módulos e fluxos

- [dito] `00_System`: regras, identidade e critérios; `01_Experience`/`02_Projects`: histórico e projetos; `03_Skills`/`04_Evidence`: competências e provas; `05_Career_Materials`: materiais; `06_Jobs`/`07_Companies`: vagas e empresas; `08_Insights`: análise; `09_Templates`: modelos.
- [dito] Pipeline: Oportunidades → Candidatura preparada → Aplicada → Retorno → Entrevista → Case → Oferta → Encerrada.
- [inferido] Vaga → verificar critérios → distinguir lacuna documental de real → pontuar fit → adaptar material com evidência → candidatar → registrar retorno e aprendizado.
- [dito] Alterações precisam chegar ao vault local real. Arquivos editados na cópia de sessão não sincronizam necessariamente.

## 5. Regras e protocolos

- [dito] Hierarquia da fonte: Julia → Obsidian → CV/documentos mestres → inferências → estimativas.
- [dito] Privacidade: `PUBLIC`, `CV_OK`, `INTERVIEW_ONLY`, `CONFIDENTIAL`; usar nível mais restritivo na dúvida.
- [dito] Leitura e criação com templates podem ser automáticas; alteração de fatos, persistência de inferência, reclassificação menos restrita e encerramento por inatividade exigem confirmação; exclusão exige confirmação adicional.
- [dito] Usar CHANGELOG e links, evitar duplicação e não carregar vault inteiro sem necessidade.
- [dito] No CV, linguagem objetiva, factual e ATS; no LinkedIn, narrativa pessoal, mais leve, com histórico amplo.
- [dito] No About, preferir 800–1.300 caracteres, 3–5 parágrafos curtos, sem dois-pontos, sem métricas excessivas, com a ideia “dados, e não em achismos”.
- [dito] Evitar microiterações; ao final de análises destinadas ao Claude, fornecer prompt pronto.

### Pre-score validation relatada

```text
EVIDENCE GAP = falta documentação para comprovar habilidade.
CONFIRMED GAP = lacuna confirmada após validação.
Validar antes de calcular Job Fit.
Não interpretar silêncio do CV como ausência de habilidade.
Não inventar competência para aumentar pontuação.
```

**Limite:** [inferido] Resumo de regra relatada, não transcrição do protocolo posterior.

## 6. Artefatos criados (na íntegra)

### 6.1 Arquivos originais do snapshot, íntegra

[inferido] São versões históricas e podem estar desatualizadas. Cada conteúdo é transcrito sem reescrita.

#### `Career_OS/07_Companies/WATCHLIST.md`

```markdown
---
id: CMP-WATCHLIST
type: system
privacy: CONFIDENTIAL
created: 2026-08-11
last_updated: 2026-08-11
---

# Watchlist de empresas

## Empresas iniciais

- Globo
- IBM
- L'Oréal
- iFood

Objetivo futuro: manter aproximadamente 15 empresas de alta compatibilidade, considerando aderência profissional, remuneração, benefícios, qualidade de vida, maturidade de produto/design e modelo de trabalho.
```

#### `Career_OS/08_Insights/SKILL_GAPS.md`

```markdown
# Gaps de competências

> Diferenciar fato, padrão, hipótese e recomendação.
```

#### `Career_OS/08_Insights/MARKET_POSITION.md`

```markdown
# Posicionamento de mercado

> Análises derivadas de vagas, mercado e evolução profissional.
```

#### `Career_OS/08_Insights/APPLICATION_PATTERNS.md`

```markdown
# Padrões de candidaturas

> Identificar padrões de avanço, rejeição e conversão ao longo do tempo.
```

#### `Career_OS/04_Evidence/FEEDBACK.md`

```markdown
# Feedbacks

> Registrar apenas feedback profissional com valor estratégico.
```

#### `Career_OS/04_Evidence/IMPACT.md`

```markdown
# Impactos

> Impactos qualitativos e redução de risco serão migrados na Etapa 5.
```

#### `Career_OS/04_Evidence/METRICS.md`

```markdown
# Métricas

> Evidências quantitativas serão migradas na Etapa 5.
```

#### `Career_OS/04_Evidence/EVIDENCE_INDEX.md`

```markdown
---
id: EVD-INDEX
type: system
privacy: CONFIDENTIAL
created: 2026-08-11
last_updated: 2026-08-11
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
```

#### `Career_OS/00_System/PROFILE.md`

```markdown
---
id: SYS-PROFILE
type: profile
status: current
privacy: CV_OK
created: 2026-08-11
last_updated: 2026-08-11
---

# Perfil profissional atual

> Este arquivo será preenchido e validado na Etapa 5.

## Posicionamento principal

## Senioridade percebida

## Principais domínios

## Diferenciais

## Competências mais fortes

## Gaps atuais

## Direção de carreira
```

#### `Career_OS/00_System/INDEX.md`

```markdown
---
id: SYS-INDEX
type: system
privacy: CONFIDENTIAL
created: 2026-08-11
last_updated: 2026-08-11
---

# Índice do Career OS

Use este arquivo como ponto inicial de navegação.

## Onde procurar

- Perfil profissional atual → [[PROFILE]]
- Critérios para vagas → [[JOB_CRITERIA]]
- Regras do sistema → [[SYSTEM_RULES]]
- Histórico de mudanças → [[CHANGELOG]]
- Experiências profissionais → `01_Experience/`
- Projetos → `02_Projects/`
- Competências → `03_Skills/`
- Evidências → `04_Evidence/`
- Currículos e perfis → `05_Career_Materials/`
- Vagas e candidaturas → `06_Jobs/`
- Empresas e watchlist → `07_Companies/`
- Insights de carreira → `08_Insights/`
- Templates → `09_Templates/`

## Regra de leitura

Priorizar:
1. Este índice
2. Arquivo de sistema necessário
3. YAML e resumos das entidades relevantes
4. Conteúdo detalhado apenas quando necessário
```

#### `Career_OS/00_System/CHANGELOG.md`

```markdown
---
id: SYS-CHANGELOG
type: system
privacy: CONFIDENTIAL
created: 2026-08-11
last_updated: 2026-08-11
---

# Changelog

## 2026-08-11

- Career OS v1 criado.
- Estrutura inicial do vault definida.
- Regras de idioma, privacidade, escrita e critérios de vagas registradas.
```

#### `Career_OS/00_System/JOB_CRITERIA.md`

```markdown
---
id: SYS-JOB-CRITERIA
type: system
privacy: CONFIDENTIAL
created: 2026-08-11
last_updated: 2026-08-11
---

# Critérios para vagas

## Cargos prioritários

- Product Designer Pleno
- Product Designer
- Designer de Produto
- UX Designer
- UX/UI Designer

## Cargos a evitar

- Web Designer, quando o trabalho for predominantemente de design
- Design Gráfico
- Funções predominantemente de marketing ou identidade visual

## Rejeitar

- Web Designer com forte componente de desenvolvimento
- Funções híbridas designer + developer
- Vagas com responsabilidade central por frontend
- Vagas CLT com salário confirmado abaixo de R$ 5.000
- Presencial em São Paulo
- Consultorias/agências com múltiplos clientes
- Blockchain
- Situação em que Julia seria a única designer da empresa

## Salário CLT

- < R$ 5.000 → rejeitar
- R$ 5.000–5.999 → evitar / penalizar
- R$ 6.000–6.999 → compatível
- ≥ R$ 7.000 → atrativo
- Não informado → neutro, nunca impeditivo

## PJ Brasil

Evitar. Avaliar principalmente a partir de aproximadamente R$ 11.000.

## Modelo de trabalho

Preferência:
1. Remoto
2. Híbrido
3. Presencial

Híbrido: preferencialmente até 3 dias presenciais por semana.

## Localização

Presencial integral:
- Barra
- Barra Olímpica
- Jacarepaguá
- Recreio

Híbrido:
- regiões acima
- Zona Sul
- Centro

Deslocamento desejável máximo: aproximadamente 1h30.

## Empresas

Preferir:
- empresas de tecnologia com mais de 100 funcionários
- times de Design maduros
- grandes empresas de tecnologia
- SaaS B2B
- marketplaces
- IA
- produtividade

Watchlist inicial:
- Globo
- IBM
- L'Oréal
- iFood
```

#### `Career_OS/00_System/SYSTEM_RULES.md`

```markdown
---
id: SYS-RULES
type: system
privacy: CONFIDENTIAL
created: 2026-08-11
last_updated: 2026-08-11
---

# Regras do sistema

## Fonte da verdade

1. Informação confirmada por Julia
2. Obsidian
3. Currículo e documentos mestres
4. Inferências fundamentadas
5. Estimativas

Inferências e estimativas nunca devem ser tratadas como fatos.

## Idioma

- Priorizar português em todo conteúdo destinado à leitura, revisão ou acompanhamento.
- YAML, IDs, enums e campos técnicos podem permanecer em inglês quando isso melhorar consistência e automação.

## Privacidade

- `PUBLIC`
- `CV_OK`
- `INTERVIEW_ONLY`
- `CONFIDENTIAL`

Na dúvida, usar o nível mais restritivo.

## Escrita e alterações

- Ler: automático
- Criar novos arquivos seguindo templates: automático
- Registrar novas vagas e candidaturas: automático
- Alterar fatos existentes: exige confirmação
- Persistir inferências: exige confirmação
- Tornar informação menos restrita: exige confirmação
- Mover ou renomear sem mudar significado: automático
- Encerrar candidatura por inatividade: exige confirmação
- Excluir informação: exige confirmação adicional

## Histórico

Usar [[CHANGELOG]] para mudanças relevantes. Não criar cópias integrais de cada versão de arquivo.

## Eficiência

- Evitar duplicação
- Preferir links entre arquivos
- Não carregar toda a base sem necessidade
- Não criar arquivos muito pequenos sem valor operacional
```

#### `Career_OS/05_Career_Materials/LINKEDIN.md`

```markdown
# LinkedIn

> Base para otimização do perfil.
```

#### `Career_OS/05_Career_Materials/PORTFOLIO.md`

```markdown
# Portfólio

> Inventário e hierarquia de cases.
```

#### `Career_OS/05_Career_Materials/GUPY.md`

```markdown
# Gupy

> Base para otimização do perfil.
```

#### `Career_OS/05_Career_Materials/CV_PT.md`

```markdown
---
id: MAT-CV-PT
type: career_material
material_type: cv
language: pt-BR
role_target: Product Designer
status: current
source_of_truth: false
privacy: CV_OK
created: 2026-08-11
last_updated: 2026-08-11
---

# Currículo base em português

> Será preenchido/revisado após a migração da base.
```

#### `Career_OS/05_Career_Materials/APPLICATION_ANSWERS.md`

```markdown
---
id: MAT-APPLICATION-ANSWERS
type: career_material
privacy: CONFIDENTIAL
created: 2026-08-11
last_updated: 2026-08-11
---

# Respostas para candidaturas

## Factuais

Informações que podem ser respondidas automaticamente quando já confirmadas.

## Contextuais

Respostas que precisam ser adaptadas à vaga.

## Sensíveis

Não armazenar aqui CPF, documentos, dados bancários, endereço completo ou outras informações pessoais desnecessárias.
```

#### `Career_OS/05_Career_Materials/CV_EN.md`

```markdown
---
id: MAT-CV-EN
type: career_material
material_type: cv
language: en
role_target: Product Designer
status: current
source_of_truth: false
privacy: CV_OK
created: 2026-08-11
last_updated: 2026-08-11
---

# Currículo base em inglês

> Será preenchido/revisado após a migração da base.
```

#### `Career_OS/06_Jobs/ACTIVE.md`

```markdown
---
id: JOBS-ACTIVE
type: system
privacy: CONFIDENTIAL
created: 2026-08-11
last_updated: 2026-08-11
---

# Candidaturas e oportunidades ativas

| Empresa | Vaga | Fit | Status | Última atividade | Próxima ação |
|---|---|---:|---|---|---|

## Regra de inatividade

Após 60 dias sem atualização:
- `APPLIED` ou `RESPONSE`: sugerir arquivamento como `CLOSED — No response`, se não houver indicação de processo em andamento.
- `INTERVIEW`, `CASE` ou `OFFER`: sugerir follow-up antes de qualquer arquivamento.
- Rejeição formal: pode sugerir encerramento imediatamente.

Mudança de ativo para encerrado exige confirmação.
```

#### `Career_OS/09_Templates/Experience.md`

```markdown
---
id:
type: experience
company:
role:
seniority:
employment_type:
status:
start_date:
end_date:
location:
work_model:
privacy: CV_OK
projects: []
skills: []
created:
last_updated:
---

# Nome da empresa

## Contexto

## Escopo da atuação

## Evolução

## Responsabilidades

## Principais projetos

## Stakeholders

## Evidências de evolução

## Observações para carreira
```

#### `Career_OS/09_Templates/Application.md`

```markdown
---
id:
type: application
job:
company:
status:
application_date:
last_activity:
application_mode:
cv_base:
cv_customized:
cv_snapshot_preserved:
recruiters: []
outcome:
rejection_reason:
archive_candidate: false
privacy: CONFIDENTIAL
created:
last_updated:
---

# Candidatura

## Resumo

## Adaptações do currículo

## Respostas relevantes

## Timeline

## Próxima ação
```

#### `Career_OS/09_Templates/Project.md`

```markdown
---
id:
type: project
name:
company:
status:
importance:
start_date:
end_date:
privacy: CV_OK
domains: []
roles: []
skills: []
evidence: []
portfolio_status:
created:
last_updated:
---

# Nome do projeto

## Resumo

## Contexto

## Problema

## Minha responsabilidade

## Decisões relevantes

## Processo

## Complexidades

## Stakeholders

## Resultado

## Evidências

## Competências demonstradas

## Potencial para currículo

## Potencial para portfólio
```

#### `Career_OS/09_Templates/Company.md`

```markdown
---
id:
type: company
name:
status:
priority:
country:
employee_size:
industry:
work_models: []
design_maturity:
company_quality:
last_researched:
privacy: PUBLIC
created:
last_updated:
---

# Empresa

## Por que é relevante

## Compatibilidade com Julia

## Produto e domínio

## Design

## Modelo de trabalho

## Remuneração

## Benefícios

## Qualidade de vida

## Riscos e observações

## Vagas relacionadas
```

#### `Career_OS/09_Templates/Evidence.md`

```markdown
## EVD-ID

**Projeto:**  
**Tipo:**  
**Métrica/Impacto:**  
**Valor:**  
**Base ou meta:**  
**Interpretação:**  
**Confiança:** confirmed / derived / estimated / unverified  
**Privacidade:** PUBLIC / CV_OK / INTERVIEW_ONLY / CONFIDENTIAL  
**Fonte:**  
**Última verificação:**
```

#### `Career_OS/09_Templates/Job.md`

```markdown
---
id:
type: job
company:
company_name:
title:
seniority:
source:
url:
job_posted:
discovered:
location:
work_model:
employment_type:
salary_disclosed:
job_fit:
job_quality:
company_quality:
recommendation:
status: opportunity
application_id:
privacy: CV_OK
created:
last_updated:
last_activity:
---

# Vaga

## Resumo

## Mapeamento de requisitos

| Requisito | Compatibilidade | Evidência |
|---|---|---|
| | | |

### Compatibilidade

- `CONFIRMED` → Confirmado
- `PARTIAL` → Parcial
- `TRANSFERABLE` → Experiência transferível
- `HIDDEN_IN_CV` → Existe, mas não está bem comunicado
- `GAP` → Gap real

## Pontos fortes

## Gaps

## Qualidade da vaga

## Qualidade da empresa

## Recomendação

## Descrição original
```

#### `Career_OS/03_Skills/Business.md`

```markdown
---
id: SKL-DOM-BUSINESS
type: skill_domain
name: Business
status: active
privacy: PUBLIC
created: 2026-08-11
last_updated: 2026-08-11
---

# Negócios

> Conteúdo será migrado e validado na Etapa 5.
```

#### `Career_OS/03_Skills/Product_Strategy.md`

```markdown
---
id: SKL-DOM-PRODUCT-STRATEGY
type: skill_domain
name: Product Strategy
status: active
privacy: PUBLIC
created: 2026-08-11
last_updated: 2026-08-11
---

# Estratégia de Produto

> Conteúdo será migrado e validado na Etapa 5.
```

#### `Career_OS/03_Skills/Product_Design.md`

```markdown
---
id: SKL-DOM-PRODUCT-DESIGN
type: skill_domain
name: Product Design
status: active
privacy: PUBLIC
created: 2026-08-11
last_updated: 2026-08-11
---

# Product Design

> Conteúdo será migrado e validado na Etapa 5.
```

#### `Career_OS/03_Skills/Research.md`

```markdown
---
id: SKL-DOM-RESEARCH
type: skill_domain
name: Research
status: active
privacy: PUBLIC
created: 2026-08-11
last_updated: 2026-08-11
---

# Pesquisa

> Conteúdo será migrado e validado na Etapa 5.
```

#### `Career_OS/03_Skills/AI.md`

```markdown
---
id: SKL-DOM-AI
type: skill_domain
name: Artificial Intelligence
status: active
privacy: PUBLIC
created: 2026-08-11
last_updated: 2026-08-11
---

# Inteligência Artificial

> Conteúdo será migrado e validado na Etapa 5.

## AI Product Design

## Uso de IA no processo de Design

## Agentes e sistemas de conhecimento

## Prompting e contexto

## Ferramentas
```

#### `Career_OS/03_Skills/Tools.md`

```markdown
---
id: SKL-DOM-TOOLS
type: skill_domain
name: Tools
status: active
privacy: PUBLIC
created: 2026-08-11
last_updated: 2026-08-11
---

# Ferramentas

> Conteúdo será migrado e validado na Etapa 5.
```

#### `Career_OS/02_Projects/README.md`

```markdown
# Projetos

Criar um arquivo próprio apenas quando o projeto tiver valor para carreira, currículo, portfólio ou demonstração de competência.

A estrutura narrativa pode variar de projeto para projeto.
```

#### `Career_OS/01_Experience/README.md`

```markdown
# Experiências profissionais

Um arquivo por experiência profissional relevante.

Não duplicar detalhes extensos de projetos. Usar links para `02_Projects/`.
```

### 6.2 Headline aprovada para LinkedIn

```text
Product Designer | SaaS B2B | Recorrência, IA e pesquisa aplicada
```

[dito] Escolhida explicitamente pela usuária.

### 6.3 About temporário mais recente

```text
Sou Product Designer com experiência em SaaS B2B, principalmente em produtos de recorrência e com IA. Gosto de entender bem o problema antes de partir para a solução, questionando requisitos, mapeando cenários e considerando as regras de negócio e as restrições técnicas envolvidas.

Gosto de tomar decisões baseadas em dados, e não em achismos. Por isso, pesquisa faz parte do meu processo de diferentes formas, desde entender o que já sabemos sobre um problema até investigar lacunas e validar decisões quando necessário.

Tenho bastante afinidade com produtos que envolvem muitas regras, cenários e exceções. Nos últimos anos, venho trabalhando especialmente com recorrência e IA, dois contextos que me ensinaram muito sobre como equilibrar complexidade, autonomia e uma experiência clara para quem está usando o produto.

Minha trajetória também passa por UX/UI, design visual e audiovisual, experiências que influenciam até hoje a forma como penso interfaces, jornadas e narrativas.

Portfólio · juliagand.framer.website
```

[dito] Versão provisória sugerida; publicação não confirmada.

### 6.4 Prompt mais recente para reduzir o About

```text
Quero reduzir bastante o About antes de fecharmos a versão final.

A proposta atual está tentando explicar minha forma de trabalhar em detalhes demais e acabou virando quase um miniartigo. Para o LinkedIn, quero um texto mais escaneável e agradável de ler.

Use estas diretrizes:

- Mire em aproximadamente 800–1.300 caracteres.
- Use 3–5 parágrafos curtos.
- Não transforme o About em uma versão narrativa do currículo.
- Não liste projetos, métricas ou métodos de pesquisa em excesso.
- Preserve uma linguagem profissional, mas mais leve, pessoal e calorosa que a do CV.
- Evite dois-pontos.
- Preserve minha frase/ideia “gosto de tomar decisões baseadas em dados, e não em achismos”.
- Keywords devem aparecer naturalmente, sem keyword stuffing.
- Não tente incluir todas as informações que forneci sobre minha forma de trabalhar.

Estruture o conteúdo em quatro ideias principais:
1. Quem sou como Product Designer e meu contexto em SaaS B2B.
2. Como penso e trabalho, especialmente questionamento de requisitos, entendimento do problema e decisões baseadas em evidências.
3. Meu repertório atual em recorrência e IA e minha afinidade com problemas que envolvem regras, cenários e exceções.
4. Como minha trajetória anterior em UX/UI, design visual, audiovisual e agência complementa minha atuação atual.

As respostas detalhadas que forneci devem continuar sendo tratadas como conhecimento relevante para o Career OS, mesmo quando não entrarem no About.

Crie uma única versão recomendada. Não apresente alternativas neste momento.
```

[dito] Houve erro 503 no Claude; recebimento não confirmado.

### 6.5 Checklist LinkedIn

```text
[ ] Headline aprovada
[ ] About curto e escaneável
[ ] Trinks: Clube, Comissionamento, Trinks IA, PIX e Design Systems
[ ] Piloti: 30+ projetos e COPPE
[ ] StudioD: manter
[ ] Know-How: preservar histórico
[ ] CEDS: avaliar seção Voluntariado, sem apagar histórico
[ ] Skills: verificar lista completa; priorizar Product Design, User Research, Usability Testing
[ ] Remover A/B Testing, se presente
[ ] Featured: portfólio
[ ] Open to Work e preferências de vaga
[ ] Idioma e URL personalizada
[ ] Corrigir PUCPR trancada, se ainda listada como ativa
[ ] Conferir cursos e prêmios
[ ] Remover claims imprecisos sobre IA conversacional
```

### 6.6 Estrutura proposta para registrar estilo de trabalho

```markdown
# Como trabalho e tomo decisões

## Análise inicial
- Briefing, documentação, lacunas e pesquisa proporcional à necessidade.
- Jornadas, fluxos e exceções antes de telas.

## Questionamento
- Perguntar por que uma solução foi proposta.
- Diferenciar impossibilidade técnica de custo e complexidade.

## Pesquisa aplicada
- Primeiro verificar o conhecimento existente.
- Evidência inclui métricas, tickets, entrevistas, testes e surveys.
- Exemplo: conversas com clientes mudaram hipótese sobre reassinatura de contrato.

## Regras e recorrência
- Mapear ramificações e efeitos cruzados.
- Considerar ciclo de vida, alterações, inadimplência e comunicação.

## IA como produto
- Preservar controle humano, confiança e caminhos de exceção.

## IA como ferramenta
- Pesquisa, síntese, bases de conhecimento, prototipação e automações.
- Não divulgar projetos pessoais de busca de emprego.

## Trajetória
- Design visual: hierarquia e legibilidade.
- Cinema: narrativa e jornada.
- Agência: pragmatismo e velocidade.

## Colaboração
- Facilitar conversas com Produto e Engenharia.
- Discutir trade-offs e documentar riscos.

## Expressão pessoal
- “Gosto de tomar decisões baseadas em dados, e não em achismos.”

## Cuidados
- Não converter preferências em critérios eliminatórios sem aprovação.
- Não atribuir origem médica a competências profissionais.
```

[inferido] Estrutura proposta, não artefato aprovado ou criado.

## 7. Decisões tomadas

| Decisão | Motivo | Alternativas descartadas | Data aproximada | Origem |
|---|---|---|---|---|
| Obsidian como fonte canônica | Evitar perda de contexto | Chat isolado | 2026-08 | [dito] |
| Aprovação para alterar fatos | Preservar integridade | Edição irrestrita | 2026-08 | [dito] |
| CV EN rodada 3 concluído | Precisão e clareza | Novas microiterações | 2026-08-21 | [dito] |
| `non-payment handling` | Regras e fluxos, sem processamento técnico | `failed payment rules` | 2026-08-21 | [dito] |
| `Social Communication (Film)` | Não implica graduação concluída | `Bachelor's` | 2026-08-21 | [dito] |
| Bullet independente de Design Systems | Experiência profissional real | Remover ou mesclar | 2026-08-21 | [dito] |
| Headline prioriza recorrência e IA | Reflete experiência central | Financeiro em primeiro | 2026-08 | [dito] |
| LinkedIn mantém experiências antigas | História completa importa | Tratar como CV | 2026-08 | [dito] |
| Não alegar A/B Testing | Lacuna confirmada | Confundir testes e experimentos | 2026-08 | [dito] |
| Não alegar desenho do diálogo da IA | Escopo foi interface/configuração | IA conversacional como autoria | 2026-08 | [dito] |
| About com voz leve e pessoal | Autenticidade | Tom técnico do CV | 2026-08 | [dito] |
| Registrar working style após About | Preservar insights sem atrasar etapa | Reformar roadmap | 2026-08 | [dito] |

## 8. Estado atual

### Pronto e validado
- [dito] CV EN da etapa 7.3 criado e confirmado manualmente no vault por Julia.
- [dito] Headline escolhida.
- [dito] Pesquisa e auditoria LinkedIn concluídas pelo Claude.

### Em andamento
- [dito] Etapa 7.4 LinkedIn: About temporário sugerido, versão publicada não confirmada; experiências, Skills, Featured e configurações por verificar.
- [dito] Registro de estilo de trabalho planejado, não confirmado como criado.

### Não iniciado ou não confirmado
- [dito] Ajustes de Gupy ainda pendentes nesta conversa.
- [inferido] Estado posterior de ROADMAP, CHANGELOG e integrações precisa de conferência.

## 9. O que falta

| Prioridade | O que fazer | Por que importa | Primeiro passo |
|---|---|---|---|
| P0 | Concluir LinkedIn | Visibilidade profissional | Abrir perfil e revisar checklist |
| P0 | Ajustar Gupy | Coerência de candidaturas | Abrir cadastro atual |
| P1 | Criar nota de estilo de trabalho | Preservar insights | Criar arquivo único após fechar About |
| P1 | Verificar arquivos locais | Evitar falsa sincronização | Conferir ROADMAP e CHANGELOG |
| P2 | Conciliar skills e evidências | Melhor tailoring | Verificar arquivo canônico e skills da plataforma |

## 10. Perguntas em aberto e riscos

- [dito] Edições na cópia da sessão Claude não apareciam automaticamente no Obsidian; CV EN e ROADMAP foram depois gravados via bridge, com confirmação da usuária.
- [dito] CHANGELOG e Product_Design.md apareceram ausentes em determinadas sessões, embora constem no ZIP histórico.
- [dito] Erro `postCcrV2ClientEvents: 503` interrompeu comunicação com Claude.
- [dito] PUCPR aparece trancada na base, mas figurava como ativa no LinkedIn analisado.
- [inferido] Não há confirmação da versão efetivamente publicada do About.
- [inferido] Não há conteúdo integral atualizado de `JOB_ANALYSIS_PROTOCOL.md`, `ATS_KEYWORDS.md`, `COMMUNICATION_STRATEGY.md`, `WRITE_PROTOCOL.md` e `ROADMAP.md` nesta sessão.
- [inferido] Regras algorítmicas de LinkedIn relatadas pelo Claude não devem ser tomadas como pesos oficiais comprovados.

## 11. Próximo passo recomendado

**[inferido] Concluir a etapa 7.4 diretamente no LinkedIn, usando o About temporário se necessário, sem novas rodadas de microajustes.** Em seguida, registrar os insights de estilo de trabalho em uma nota única e avançar para Gupy.

## 12. Glossário

| Termo | Definição |
|---|---|
| Career OS | Sistema de conhecimento e operação de carreira |
| Vault | Cofre/pasta de notas do Obsidian |
| Snapshot | Cópia dos arquivos em um momento específico |
| Job Fit | Avaliação de aderência à vaga |
| EVIDENCE GAP | Falta evidência documental suficiente |
| CONFIRMED GAP | Lacuna efetivamente confirmada |
| Tailoring | Adaptação de material para vaga específica |
| CV_OK | Informação liberada para currículo |
| INTERVIEW_ONLY | Informação restrita à entrevista |
| CONFIDENTIAL | Informação não pública |
| Discovery | Investigação de problemas e oportunidades |
| Featured | Seção Destaques do LinkedIn |
| About | Seção Sobre do LinkedIn |
| ROADMAP | Plano de etapas e dependências |
| CHANGELOG | Histórico de alterações |
| Trinks IA | Produto com IA para atendimento/agendamento |
| Clube de Assinaturas | Produto de recorrência da Trinks |
| Collabo | Projeto acadêmico de inclusão no trabalho |

## Checklist final

- [x] Contexto, arquitetura e regras registrados.
- [x] Snapshot integral incluído, com templates e schemas históricos.
- [x] Decisões e situação das etapas 7.3 e 7.4 registradas.
- [x] Headline, About temporário, checklist e prompt preservados.
- [ ] Conferir versões atualizadas no vault real.
- [ ] Conferir LinkedIn publicado e estado da Gupy.

FIM DO DOCUMENTO
