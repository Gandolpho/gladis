---
id: PROJ-PESQUISA-PAGAMENTO-AUTOMATICO
type: project
name: Pesquisa sobre Adoção do Pagamento Automático
company: Trinks
status: "pesquisa concluída (MEASURED); recomendações de migração e comunicação de valor: IMPLEMENTADAS (validação técnica de engenharia); recomendação de onboarding visual: PROPOSED, status de implementação não confirmado"
importance: alta
start_date: 2025-07
end_date: 2025-12
privacy: CV_OK
domains: [SaaS B2B, Produtos financeiros, Assinaturas, Pagamentos recorrentes]
roles: [Product Design, UX Research]
skills: []
evidence: [EVD-CLUBE-002, EVD-CLUBE-005, EVD-CLUBE-006, EVD-CLUBE-007, EVD-CLUBE-008, EVD-CLUBE-009, EVD-CLUBE-010]
portfolio_status: candidato forte
created: 2026-08-20
last_updated: 2026-08-20
---

# Pesquisa sobre Adoção do Pagamento Automático

Subprojeto de pesquisa dentro de [[Clube de Assinaturas]]. Não confundir com o redesign do fluxo Criar/Editar Assinatura nem com outras iniciativas do Clube — este registro cobre apenas a investigação sobre por que estabelecimentos evitam o Pagamento Automático.

## Resumo

Pesquisa mixed-methods (dados internos + survey de 133 gestores + 6 entrevistas semiestruturadas) para entender por que aproximadamente metade dos estabelecimentos do Clube de Assinaturas continuava operando no pagamento manual, mesmo com cobrança recorrente disponível via Pagar.me. Pesquisa de campo em julho/2025, com análise e apresentação consolidadas em dezembro/2025 (relatório final em PPTX revisado nesta rodada). Duas das três recomendações — migração manual → automático e comunicação de valor na venda — foram implementadas após o projeto, a primeira com validação técnica de engenharia; a pesquisa serviu como documento-base para a força-tarefa multi-times que se seguiu para aumentar vendas e TPV do Clube.

## Contexto

O Clube de Assinaturas permite venda manual, pagamento automático (link Pagar.me, cobranças recorrentes) e venda online. O produto seguia crescendo, mas a proporção de estabelecimentos usando pagamento automático permanecia estável — origem da pergunta de pesquisa.

Baseline histórico (dados internos, Metabase, outubro/2025), a mesma medição documentada em [[Relatório Acompanhamento do Mês]]:
- 399 estabelecimentos venderam assinaturas; 196 usaram pagamento automático (Pagar.me).
- Volume total R$ 1.571.146,00; R$ 818.772,00 via automático. `CONFIDENTIAL` (valores exatos); ver EVD-CLUBE-002 para expressão indireta aprovada.
- Entre 1.374 estabelecimentos com transação histórica no Clube, 614 já usaram o link de pagamento ao menos uma vez. `CONFIDENTIAL`.

Nota de cronologia (`FACT`, confirmado por Julia): a pesquisa de campo (survey + entrevistas) ocorreu em julho/2025, antes desta medição de baseline de outubro/2025. A análise integrada e a apresentação final só foram consolidadas em dezembro/2025 — um intervalo de cerca de 5 meses entre campo e apresentação, provavelmente porque a análise final incorporou um corte de dados mais recente (outubro/2025) do que o momento da coleta. Vale confirmar com Julia se há uma razão adicional para esse intervalo, caso seja relevante para o case.

Restrição declarada por Julia (`USER_CLAIM`, coerente com a dependência de infraestrutura já registrada em [[Clube de Assinaturas]]): o fluxo interno da Pagar.me não pode ser alterado pela Trinks; melhorias ficam restritas às camadas de experiência controladas pela Trinks. Pagar.me pode ser citada externamente como provedor envolvido (`CV_OK`/`INTERVIEW_ONLY`, aprovado por Julia). O concorrente Asaas, citado por um gestor entrevistado, **não pode** ser citado externamente — permanece `CONFIDENTIAL`.

## Problema

Por que os estabelecimentos evitam o Pagamento Automático no Clube de Assinaturas?

Hipóteses investigadas (numeradas H1–H5 no relatório final): H1 desconhecimento dos benefícios; H2 percepção de que a taxa não compensa; H3 manual parece mais seguro e dá mais controle; H4 receio de cobranças automáticas; H5 dificuldade em migrar do manual para o automático.

## Minha responsabilidade

Responsável principal pelo planejamento e execução de toda a pesquisa: estruturação do problema; estruturação e revisão do survey (rotas manual/híbrido/automático, pergunta de qualificação, execução via Hotjar); planejamento da etapa qualitativa; recrutamento direto dos participantes (contato, agendamento); condução das 6 entrevistas; análise quanti + quali; construção e revisão da apresentação de resultados; formulação das recomendações.

Apoio pontual de Joyce Nascimento em momentos específicos, incluindo apoio no registro das respostas durante as entrevistas (função de apoio/anotação, não cofacilitação da condução — todas as 6 entrevistas foram conduzidas por Julia). Revisão da pesquisa/apresentação por Gorette Tavares, líder de Design da Trinks, que pediu simplificação de objetivos e etapas com foco em resultados.

Classificação: `USER_CLAIM` confirmado diretamente por Julia (fonte de maior prioridade no sistema, conforme SYSTEM_RULES). Sem evidência independente de terceiros nesta conversa sobre a divisão de ownership.

## Decisões relevantes

- Segmentar o survey por comportamento de pagamento (manual / híbrido / automático) em vez de questionário único, para contextualizar respostas por perfil. `FACT`.
- Inserir pergunta de escape para garantir que só gestores responsáveis respondessem. `FACT`.
- Não perguntar diretamente sobre emoções/medo no survey — investigar esse tema na etapa qualitativa, por ser difícil de medir objetivamente em questionário curto. `FACT`. Confirmado pelo relatório final: o receio de cobrança automática (H4) não aparece diretamente no survey; é inferido indiretamente pelos 48% de híbridos que relatam que o automático "dá trabalho para gerir", e explicado pela falta de transparência em falhas nas entrevistas.
- Analisar os entrevistados híbridos nos dois grupos qualitativos (manual e automático), preservando a experiência real com ambos os métodos em vez de forçar uma classificação exclusiva. `FACT`.
- Priorizar migração manual → automático como recomendação principal de produto. `FACT` — implementada após o projeto, com validação técnica de engenharia (criação de fluxo de migração simplificado: troca de método de pagamento sem recriar assinatura, preservação de contrato e histórico, envio de link curto de atualização quando necessário).
- Propor comunicação de valor baseada em storytelling/prova social (casos reais, depoimentos de gestores só-automático) em vez de lista de funcionalidades, para a venda. `FACT` — implementada após o projeto (melhoria na comunicação de valor na hora da venda).
- Recomendar melhoria da explicação visual e onboarding do Clube/pagamento automático. `PROPOSED` — status de implementação não confirmado por Julia nesta rodada.

## Processo

Diagnóstico inicial (análise de dados internos via Metabase, hipóteses) → survey quantitativo via Hotjar, exibido de 7 a 18 de julho de 2025 nas páginas do Clube (133 respostas válidas de gestores responsáveis) → recrutamento qualitativo a partir do próprio survey → 6 entrevistas semiestruturadas, todas realizadas em 9 de julho de 2025 (30–45min, Google Meet, transcrição via Gemini; 3 híbridos, 2 manuais, 1 automático — o entrevistado apenas-automático é gestor de uma barbearia com 4 profissionais) → síntese e triangulação quanti + quali por hipótese e por tema adicional (gestão trabalhosa do automático, hábito de pagamento presencial, visibilidade de falhas, valor percebido pós-adoção) → análise final e apresentação consolidada em dezembro/2025, com recomendações.

Sem evidência de uso de card sorting, testes de usabilidade, prototipação, A/B testing, benchmarking estruturado, wireframes ou handoff formal de design nesta pesquisa específica — não associar esses métodos a este projeto sem confirmação adicional. Handoff técnico da recomendação de migração ocorreu (Engenharia validou e implementou), mas não há detalhamento do processo de handoff nas fontes desta pesquisa.

## Complexidades

Pagamento automático depende de credenciamento e infraestrutura da Pagar.me, fora do controle direto da Trinks; em parte das falhas, a Pagar.me não fornece detalhamento completo, limitando o que a Trinks consegue explicar ao estabelecimento. Migração de assinatura manual para automática exigia nova ação do cliente antes da implementação da recomendação — não era uma troca simples de modalidade, e dividia o histórico do cliente em duas assinaturas diferentes, perdendo informações como duração da assinatura original.

## Stakeholders

Gestores de estabelecimentos: público central, recrutados e entrevistados diretamente. Liderança de Julia (Gorette Tavares): revisou a apresentação e pediu simplificação de objetivos/etapas, com foco em resultados. Joyce Nascimento: apoio pontual, incluindo registro de respostas durante as entrevistas. Comercial: recomendação de comunicação de valor foi implementada, o que sugere colaboração posterior, ainda que o processo de apresentação/alinhamento com a área não esteja detalhado nas fontes — `UNKNOWN` quanto ao processo, `FACT` quanto ao resultado (comunicação de valor implementada). Engenharia: validou tecnicamente e implementou o fluxo de migração manual → automático — `FACT`.

## Resultado

### Output

Diagnóstico inicial (dados + hipóteses); survey quantitativo (133 respostas válidas); roteiros de entrevista por segmento; recrutamento qualitativo; 6 entrevistas conduzidas; matriz de análise integrada quanti + quali por hipótese; apresentação final consolidada (PPTX, dezembro/2025) com citações de entrevistados, análise integrada quanti+quali e três recomendações.

### Outcome

Duas das três recomendações foram implementadas após o projeto: (1) fluxo de migração manual → automático, com validação técnica de engenharia; (2) melhoria na comunicação de valor na hora da venda. A pesquisa serviu como documento-base para uma força-tarefa multi-times voltada a aumentar vendas e TPV do Clube de Assinaturas — `USER_CLAIM`, não isolável de outras iniciativas da força-tarefa que não fazem parte desta pesquisa.

Outcome quantitativo pós-implementação (ex.: variação na proporção de estabelecimentos em automático, redução de chamados de falha, impacto direto em TPV) **não medido ou não disponível nesta rodada** — não confundir a implementação das recomendações (confirmada) com resultado mensurado (ainda não fornecido). O crescimento de TPV do Clube de R$1,5 milhão (baseline desta pesquisa, out/2025) para R$2 milhões/mês (métrica mais recente, já pública) é `FACT` de crescimento real ocorrido no período, mas sua atribuição específica a esta pesquisa — em vez de à força-tarefa como um todo — permanece `USER_CLAIM`.

Status da terceira recomendação (explicação visual/onboarding): não confirmado — tratar como `PROPOSED` até informação adicional.

### Metric

Survey: 133 respostas válidas, gestores responsáveis, exibido de 7 a 18 de julho de 2025, Hotjar. `CV_OK` para o tamanho de amostra e desenho metodológico.
Qualitativa: 6 entrevistas semiestruturadas (3 híbridos, 2 manuais, 1 automático), 30–45min, todas em 9 de julho de 2025. `CV_OK` para a metodologia e a escala de execução em um único dia.

Percentuais por hipótese, confirmados pelo relatório final em PPTX (fonte primária, dezembro/2025 — resolve divergências de versões anteriores da mesma conversa): ver EVD-CLUBE-009. `CONFIDENTIAL`/`INTERVIEW_ONLY` conforme classificação de cada evidência — não usar externamente sem aprovação específica adicional.

Número absoluto de respondentes por rota (manual/híbrido/automático): confirmado por Julia como indisponível — não será fornecido. Tratar como informação permanentemente ausente, não como pendência.

### Impact

Identificação de um gap entre valor percebido por quem já usa o automático (melhora muito a operação, recomendaria a outros, motivador principal é a recorrência automática) e o baixo conhecimento/entendimento entre quem ainda usa manual — insumo direto para as recomendações de migração e comunicação de valor, ambas implementadas. Ver EVD-CLUBE-006 e EVD-CLUBE-010.

## Evidências

- [[METRICS#EVD-CLUBE-002|EVD-CLUBE-002]] — baseline histórico (399 estabelecimentos / 196 automático / ~R$1,5 milhão), reutilizado aqui como dado que motivou a pesquisa. `CONFIDENTIAL` (valores exatos); expressão indireta aprovada por Julia (ver METRICS.md).
- EVD-CLUBE-005 — escala da pesquisa mixed-methods (133 respostas + 6 entrevistas, todas em um único dia). `CV_OK`.
- EVD-CLUBE-006 — gap entre valor percebido (pós-adoção) e valor comunicado (pré-adoção). `CONFIDENTIAL`/`INTERVIEW_ONLY`.
- EVD-CLUBE-007 — recomendação de migração manual → automático, implementada com validação técnica de engenharia. `INTERVIEW_ONLY`.
- EVD-CLUBE-008 — execução ponta a ponta de pesquisa (recrutamento, agendamento, condução de todas as entrevistas). `CV_OK`.
- EVD-CLUBE-009 — percentuais consolidados por hipótese (fonte: relatório final PPTX). `CONFIDENTIAL`/`INTERVIEW_ONLY`.
- EVD-CLUBE-010 — implementação da comunicação de valor na venda. `INTERVIEW_ONLY`.

## Competências demonstradas

Pesquisa mixed-methods (survey + entrevistas + dados internos), desenho de survey segmentado por comportamento, condução de entrevistas semiestruturadas (6 em um único dia), síntese e triangulação de pesquisa por hipótese, product discovery, comunicação com liderança (ajuste de apresentação conforme feedback), conexão entre research e priorização de produto com implementação subsequente confirmada.

## Competências inferidas (candidatas, não confirmadas)

Product Strategy (conexão entre achados, adoção e priorização, agora reforçada pela implementação efetiva de duas recomendações) e Business Acumen (relação entre taxa, TPV, recorrência e valor) seguem como candidatas médias/altas, ainda não promovidas a `confirmed` em `03_Skills/`. A implementação confirmada fortalece o caso para Product Strategy, mas ainda falta evidência de ownership de roadmap/visão sustentado por Julia — sinalizado para decisão futura, não promovido automaticamente nesta rodada.

## Potencial para currículo

Médio-alto, sem detalhes internos: pesquisa mixed-methods com 133 respostas e 6 entrevistas sobre adoção de pagamentos recorrentes, com recomendações implementadas (migração de assinatura e comunicação de valor). Não usar TPV exato, contagem de estabelecimentos ou percentuais internos sem autorização — TPV pode ser expresso apenas de forma indireta (ver EVD-CLUBE-002).

## Potencial para portfólio

Alto — narrativa completa e agora com fechamento de implementação: problema de negócio → baseline → hipóteses → survey → entrevistas → triangulação → insights → priorização → implementação (migração + comunicação de valor). Pontos fortes específicos: segmentação manual/híbrido/automático; contraste entre percepção pré-adoção e valor pós-adoção; migração como barreira estrutural resolvida com validação técnica; recomendação cross-functional (Produto + Comercial + Engenharia) com resultado de implementação confirmado. Ainda falta o outcome quantitativo pós-implementação para fechar o case com resultado medido. Estrutura de case ainda não desenvolvida.

## Informações desconhecidas

Planilha/base que sustente os denominadores exatos dos percentuais do relatório final (o PPTX traz os percentuais, não os N absolutos); se a recomendação de onboarding visual foi implementada; detalhes do processo de validação técnica da migração com Engenharia; detalhes de como a comunicação de valor foi implementada com o Comercial; outcome quantitativo pós-implementação (adoção, chamados, TPV atribuível); razão específica do intervalo de ~5 meses entre a coleta (julho/2025) e a apresentação final (dezembro/2025), além do possível motivo já registrado (atualização do corte de dados).
