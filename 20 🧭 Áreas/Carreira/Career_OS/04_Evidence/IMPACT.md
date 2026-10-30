---
id: EVD-IMPACT
type: system
privacy: CONFIDENTIAL
created: 2026-08-11
last_updated: 2026-08-20
---

# Impactos

> Impactos qualitativos, decisões com consequência relevante e redução de risco. Privacidade granular por bloco: a classificação de cada evidência prevalece sobre a classificação padrão deste arquivo.

## EVD-DASHBOARD-001

**Projeto/Experiência:** [[Trinks]] (caso transversal; sem projeto dedicado nas fontes)
**Tipo:** redução de risco técnico / decisão de produto
**Confiança:** confirmed
**Privacidade:** CONFIDENTIAL

**Valor / descrição:** Solicitação inicial de adicionar uma coluna de "taxa de fidelização" a um relatório existente, semelhante a um dado apresentado por um concorrente. Ao analisar os relatórios da Trinks, foi identificado que os dados relevantes já existiam, mas fragmentados entre relatórios diferentes, relacionados a múltiplas iniciativas estratégicas da empresa (Clube de Assinaturas, rotina de mensagens, programa de fidelidade, assistente de IA no WhatsApp). Foi identificado que a proposta inicial manteria a informação escondida e poderia introduzir risco técnico ao alterar cálculos de um relatório relevante. Foi proposta a consolidação de três métricas já existentes no dashboard da página inicial, concentrando a implementação no frontend. A proposta foi defendida com sucesso.

**Expressão externa candidata:** "Reformulei uma solicitação pontual de métrica em uma solução consolidada de dashboard, reduzindo risco técnico e tornando informações relacionadas mais acessíveis."
**Uso externo aprovado:** não

### Interpretação

Capacidade de identificar risco técnico antes da implementação e propor solução de menor risco que atende à necessidade original. Não afirmar resultado quantitativo pós-implementação (não medido); não atribuir a decisão a uma métrica de negócio alcançada depois.

### Fonte

Atualização 2026, item 6 (source: user_confirmed).

---

## EVD-CLUBE-003

**Projeto:** [[Clube de Assinaturas]]
**Tipo:** advocacy / priorização
**Confiança:** confirmed
**Privacidade:** CV_OK

**Valor / descrição:** O fluxo Criar e Editar Assinatura, considerado essencial para o produto, acumulava problemas de usabilidade e bugs desde períodos anteriores. Foi identificada a relevância do problema e defendida a necessidade de priorizar sua melhoria durante meses. O projeto posteriormente entrou em desenvolvimento.

### Interpretação

Evidência de persistência na defesa de uma prioridade relevante ao longo do tempo. Não afirmar melhoria de usabilidade pós-lançamento; ainda não há dado quantitativo pós-redesign.

### Fonte

Contexto profissional; Atualização 2026, item 5.

---

## EVD-COMISSIONAMENTO-001

**Projeto:** [[Comissionamento por Pote]]
**Tipo:** generalização de solução
**Confiança:** confirmed
**Privacidade:** CV_OK

**Valor / descrição:** Múltiplos estabelecimentos possuíam regras de comissão distintas e conflitantes. Houve participação na transformação dessas exceções específicas em um modelo configurável único, evitando a necessidade de customizações individuais.

### Interpretação

Capacidade de identificar um padrão comum entre casos aparentemente distintos e propor uma solução única escalável. Sem dado quantitativo de redução de esforço operacional. Nomes de clientes usados como exemplo permanecem `CONFIDENTIAL` no projeto, não incluídos aqui.

### Fonte

Contexto profissional.

---

## EVD-MULTIASSIST-001

**Projeto:** [[Múltiplos Assistentes]]
**Tipo:** análise de impacto sistêmico
**Confiança:** confirmed
**Privacidade:** CV_OK

**Valor / descrição:** Uma regra existente (um assistente por profissional) não representava a operação real de diversos clientes. A mudança dessa regra central tinha implicações simultâneas em agenda, relatórios, fechamento financeiro, estornos e split de valores. Houve discovery e mapeamento operacional antes de estruturar o novo modelo.

### Interpretação

Capacidade de mapear implicações de uma mudança de regra em múltiplas áreas do sistema antes de implementá-la. O outcome ("maior aderência operacional") permanece intended, sem evidência quantitativa observável.

### Fonte

Contexto profissional.

---

## EVD-TRINKSIA-004

**Projeto:** [[Trinks IA]]
**Tipo:** decisão de produto (confiança em IA)
**Confiança:** confirmed
**Privacidade:** CV_OK

**Valor / descrição:** Atuação no onboarding com atenção especial à construção de confiança inicial, considerando que o comportamento da IA não é totalmente previsível. Design da interface do painel de conversas com supervisão humana (interações e estados de erro), planejamento e condução de testes de usabilidade do painel, e adaptação mobile.

### Interpretação

Design de onboarding com racional explícito voltado a mitigar risco de confiança em um produto de comportamento não determinístico. A decisão sobre o modelo de supervisão humana no painel de conversas foi de responsabilidade do produto. Julia projetou a interface do painel (interações, estados de erro) e conduziu os testes de usabilidade. O fluxo conversacional da IA não foi projetado por Julia. Não atribuir a essas decisões as métricas de conversão/adoção do piloto (EVD-TRINKSIA-002 e EVD-TRINKSIA-003), sem causalidade comprovada.

### Fonte

Contexto profissional; Atualização 2026. Correção factual aplicada em 2026-08-13 (Rodada 1 — auditoria).

---

## EVD-CLUBE-004

**Projeto:** [[Clube de Assinaturas]]
**Tipo:** reconhecimento por pares (fato observável)
**Confiança:** confirmed
**Privacidade:** CV_OK

**Valor / descrição:** Três fatos observáveis, confirmados por Julia:
- Atuação como referência interna no domínio do Clube de Assinaturas.
- Designers e PMs procuram sua opinião.
- Orientação informal de outras designers.

### Interpretação

Reconhecimento por colegas, não autoavaliação. Não converter, nesta etapa, em Mentoring, Design Leadership, senioridade ou competência equivalente — permanece fato observável (decisão já registrada no Lote 1).

### Fonte

Atualização 2026, item 1 (source: user_confirmed).

---

## EVD-CLUBE-006

**Projeto:** [[Pesquisa sobre Adoção do Pagamento Automático]]
**Tipo:** insight de pesquisa (gap de valor percebido vs. comunicado)
**Confiança:** confirmed (existência do gap) / unverified (percentuais exatos)
**Privacidade:** CONFIDENTIAL (percentuais) / INTERVIEW_ONLY (achado em si, sem números)

**Valor / descrição:** A pesquisa identificou contraste consistente entre gestores que já usam exclusivamente o pagamento automático (74% dizem que melhora muito a operação, 91% recomendariam a outros negócios) e gestores manuais, entre os quais 38% não conheciam a funcionalidade e 54% não entendiam exatamente como ela funciona antes de considerar adotá-la.

**Expressão externa candidata:** "identifiquei, em pesquisa mixed-methods, um gap entre o valor percebido por usuários já adotantes de um recurso de pagamento recorrente e o valor comunicado a quem ainda não adotou"
**Uso externo aprovado:** não (achado em si pode ser discutido em entrevista, `INTERVIEW_ONLY`; percentuais exatos permanecem `CONFIDENTIAL`)

### Interpretação

Capacidade de conectar dado quantitativo (survey) e qualitativo (entrevistas) para localizar uma oportunidade de produto/comunicação, não apenas descrever comportamento. Os percentuais foram confirmados pelo relatório final em PPTX (fonte primária, dezembro/2025), que resolve a divergência de denominadores registrada em versões anteriores da mesma conversa. A magnitude do gap está confirmada; o N absoluto por segmento não está disponível.

### Fonte

Relatório de Pesquisa: Uso do pagamento automático no Clube de Assinaturas (PPTX, Trinks, dezembro/2025), enviado por Julia em 2026-08-20.

---

## EVD-CLUBE-007

**Projeto:** [[Pesquisa sobre Adoção do Pagamento Automático]]
**Tipo:** decisão / recomendação de produto (priorização), implementada
**Confiança:** confirmed
**Privacidade:** INTERVIEW_ONLY

**Valor / descrição:** A pesquisa identificou a impossibilidade de migrar diretamente uma assinatura já criada no manual para o automático (exigia nova ação do cliente, dividindo o histórico em duas assinaturas e perdendo dados como duração original) como barreira estrutural à adoção. A partir dessa evidência quanti + quali convergente, essa migração foi priorizada como recomendação principal e **implementada** após o projeto: fluxo de migração simplificado (troca de método sem recriar assinatura, preservação de contrato/histórico, link curto de atualização quando necessário), com validação técnica de Engenharia.

### Interpretação

Evidência de raciocínio de priorização apoiado em pesquisa, com fechamento raro de ver a recomendação implementada: a recomendação combinou o achado estrutural (migração exigia recriação) com o padrão de maior valor percebido pós-adoção (EVD-CLUBE-006). Status: `DEVELOPED`/`RELEASED` quanto à implementação (confirmado por Julia). Outcome quantitativo pós-implementação (ex.: variação na taxa de adoção) ainda não medido ou não disponível — não confundir implementação com resultado mensurado.

### Fonte

Handoff de projeto (extração estruturada) e relatório final em PPTX, dezembro/2025; status de implementação confirmado por Julia em 2026-08-20.

---

## EVD-CLUBE-008

**Projeto:** [[Pesquisa sobre Adoção do Pagamento Automático]]
**Tipo:** execução operacional de pesquisa (ponta a ponta)
**Confiança:** confirmed
**Privacidade:** CV_OK

**Valor / descrição:** Recrutamento direto de participantes a partir das respostas do survey (contato individual, negociação de horários, envio de link de agenda) e condução de todas as 6 entrevistas semiestruturadas, realizadas em um único dia (9 de julho de 2025), com apoio de Joyce Nascimento no registro das respostas durante as sessões.

### Interpretação

Evidência de research operacional completo (recrutamento → agendamento → condução), incluindo a concentração de todas as entrevistas em um único dia. Julia confirmou diretamente que conduziu as 6 entrevistas; Joyce teve papel de apoio/anotação, não de cofacilitação da condução.

### Fonte

Handoff de projeto (extração estruturada) e confirmação direta de Julia em 2026-08-20.

---

## EVD-CLUBE-010

**Projeto:** [[Pesquisa sobre Adoção do Pagamento Automático]]
**Tipo:** decisão / recomendação de produto (comunicação), implementada
**Confiança:** confirmed (implementação) / unverified (outcome)
**Privacidade:** INTERVIEW_ONLY

**Valor / descrição:** A pesquisa identificou que a objeção à taxa do automático era principalmente um problema de percepção, não de preço — quem já usa o automático relata valer a pena, mas esse valor não chega a quem ainda não adotou. Foi recomendada comunicação de valor baseada em storytelling e prova social (casos reais, depoimentos de gestores só-automático) em vez de lista de funcionalidades, direcionada à venda. Confirmado por Julia que essa recomendação foi **implementada** após o projeto (melhoria na comunicação de valor na hora da venda).

### Interpretação

Segunda recomendação desta pesquisa com implementação confirmada (ver também EVD-CLUBE-007). Processo de implementação com a área Comercial não está detalhado nas fontes — `UNKNOWN` quanto ao processo, `FACT` quanto ao resultado de implementação. Outcome quantitativo (ex.: variação em conversão ou adoção após a mudança de comunicação) não medido ou não disponível.

### Fonte

Handoff de projeto (extração estruturada) e relatório final em PPTX, dezembro/2025; status de implementação confirmado por Julia em 2026-08-20.

---

## EVD-COLLABO-003

**Projeto:** [[Collabo]]
**Tipo:** reconhecimento externo
**Confiança:** confirmed
**Privacidade:** PUBLIC

**Valor / descrição:** Brasil Design Award 2024 — Bronze Estudantil; Brasil Design Award 2024 — Voto Popular; iF Design Student Award 2025 — shortlist.

### Interpretação

Reconhecimento por terceiros (banca, público votante, curadoria internacional). Não transformar o prêmio em alegação de impacto de negócio ou de produto — é reconhecimento externo de qualidade, não validação comercial.

### Fonte

Currículo atual; Contexto profissional.
