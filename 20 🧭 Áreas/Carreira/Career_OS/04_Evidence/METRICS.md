---
id: EVD-METRICS
type: system
privacy: CONFIDENTIAL
created: 2026-08-11
last_updated: 2026-08-20
---

# Métricas

> Evidências quantitativas. Privacidade granular por bloco: a classificação de cada evidência prevalece sobre a classificação padrão deste arquivo.

## EVD-TRINKSIA-001

**Projeto:** [[Trinks IA]]
**Tipo:** métrica de pesquisa (escala/metodologia)
**Confiança:** confirmed
**Privacidade:** CV_OK

**Valor / descrição:** Planejamento e condução de 20 testes de usabilidade moderados (20 participantes), distribuídos entre dois temas: usabilidade do painel de conversas e fluxo de onboarding. Os aprendizados obtidos contribuíram para ajustes posteriores na experiência da Trinks IA. Não há registro suficientemente detalhado para atribuir mudanças específicas a achados individuais.

### Interpretação

Evidência de escala e metodologia de pesquisa aplicada conduzida de ponta a ponta. Ferramentas ou métodos do repertório profissional geral (ex.: Hotjar, chamados de suporte) não devem ser automaticamente vinculados a estes 20 testes específicos, salvo confirmação adicional.

### Fonte

Atualização 2026, item 3 (source: user_confirmed); currículo atual.

---

## EVD-TRINKSIA-002

**Projeto:** [[Trinks IA]]
**Tipo:** métrica de adoção
**Confiança:** confirmed (valores) / derived (proporção)
**Privacidade:** INTERVIEW_ONLY

**Valor interno:** Meta inicial de 7 estabelecimentos; resultado de 83 estabelecimentos ativados no piloto (~11,9x a meta).
**Expressão externa candidata:** "piloto superou em mais de 10x a meta inicial de adoção"
**Uso externo aprovado:** não

### Interpretação

Internamente: o piloto superou a meta inicial em ordem de grandeza. Não atribuir esse resultado a uma decisão de Design isolada.

### Fonte

Atualização 2026, item 4 (source: user_confirmed).

---

## EVD-TRINKSIA-003

**Projeto:** [[Trinks IA]]
**Tipo:** métrica de funil
**Confiança:** confirmed
**Privacidade:** INTERVIEW_ONLY

**Valor interno:** 9.820 conversas; 1.413 agendamentos; ~14% de conversão, durante o piloto.
**Expressão externa candidata:** "produto operou milhares de conversas durante o piloto"
**Uso externo aprovado:** não

### Interpretação

Evidência de escala de uso real do produto. Não afirmar que a taxa de conversão resultou de decisões específicas de Design.

### Fonte

Atualização 2026, item 4 (source: user_confirmed).

---

## EVD-CLUBE-001

**Projeto:** [[Clube de Assinaturas]]
**Tipo:** métrica financeira (valor atual)
**Confiança:** confirmed
**Privacidade:** CV_OK

**Valor / descrição:** R$2 milhões/mês transacionados no Clube de Assinaturas (dado mais recente, já público no currículo atual).

### Interpretação

Escala financeira do produto no momento mais recente. Não atribuir esse volume a uma decisão de Design isolada.

### Fonte

Currículo atual.

---

## EVD-CLUBE-002

**Projeto:** [[Clube de Assinaturas]], [[Relatório Acompanhamento do Mês]], [[Pesquisa sobre Adoção do Pagamento Automático]]
**Tipo:** métrica financeira (medição histórica)
**Confiança:** confirmed
**Privacidade:** CONFIDENTIAL

**Valor interno:** Medição de outubro/2025: ~R$1,5 milhão em volume total (R$1.571.146,00); 399 estabelecimentos venderam assinaturas; 196 com renovação automática (R$818.772,00 via automático); entre 1.374 estabelecimentos com histórico no Clube, 614 já usaram o link de pagamento ao menos uma vez.
**Expressão externa candidata:** "embora pouco menos da metade dos estabelecimentos usasse pagamento automático, esse grupo já respondia por mais da metade do volume total transacionado no período — indício de maior ticket médio entre adotantes do automático."
**Uso externo aprovado:** sim, apenas na forma indireta acima (proporções/relações, sem valores absolutos em R$ ou contagens exatas). Julia aprovou expressão indireta de TPV em 2026-08-20; os valores absolutos (R$1.571.146,00, R$818.772,00, 399, 196, 1.374, 614) permanecem `CONFIDENTIAL` e não devem ser usados externamente.

### Interpretação

Ponto de comparação histórico, referente a um levantamento anterior (outubro/2025), usado como baseline motivador da [[Pesquisa sobre Adoção do Pagamento Automático]]. Não deve ser confundido nem somado com o valor atual (EVD-CLUBE-001); o crescimento entre os dois valores corresponde a uma força-tarefa multi-times da empresa (parcialmente informada por essa pesquisa) para aumentar vendas e TPV do Clube — não é inconsistência de medição (`USER_CLAIM` quanto à atribuição causal específica à pesquisa; `FACT` quanto ao crescimento em si).

### Fonte

Contexto profissional (Relatório Acompanhamento do Mês); confirmado como baseline da Pesquisa sobre Adoção do Pagamento Automático, dezembro/2025; aprovação de expressão externa indireta por Julia em 2026-08-20.

---

## EVD-COLLABO-001

**Projeto:** [[Collabo]]
**Tipo:** métrica de pesquisa (amostra)
**Confiança:** confirmed
**Privacidade:** PUBLIC

**Valor / descrição:** Survey com 115 participantes, conduzido como parte da pesquisa do TCC.

### Interpretação

Evidência de volume de coleta de dados primários conduzida individualmente.

### Fonte

Contexto profissional.

---

## EVD-COLLABO-002

**Projeto:** [[Collabo]]
**Tipo:** métrica de reconhecimento competitivo
**Confiança:** confirmed
**Privacidade:** PUBLIC

**Valor / descrição:** iF Design Student Award 2025 — shortlist/finalista entre aproximadamente 7.000 projetos globais, sem prêmio final.

### Interpretação

Posicionamento competitivo em escala global. Não afirmar que o projeto venceu o prêmio.

### Fonte

Currículo atual.

---

## EVD-CLUBE-005

**Projeto:** [[Pesquisa sobre Adoção do Pagamento Automático]]
**Tipo:** métrica de pesquisa (escala/metodologia)
**Confiança:** confirmed
**Privacidade:** CV_OK

**Valor / descrição:** Pesquisa mixed-methods sobre adoção do Pagamento Automático no Clube de Assinaturas: survey in-product via Hotjar com 133 respostas válidas de gestores responsáveis (exibido de 7 a 18 de julho de 2025, segmentado em rotas manual/híbrido/automático) + 6 entrevistas semiestruturadas de 30–45min, todas realizadas em 9 de julho de 2025 (3 híbridos, 2 manuais, 1 automático), recrutadas a partir do próprio survey.

### Interpretação

Evidência de escala e desenho metodológico de pesquisa mista (quanti + quali) conduzida de ponta a ponta, incluindo segmentação comportamental, triangulação e execução operacional concentrada (6 entrevistas em um único dia). Uma versão anterior da mesma conversa mencionou 7 entrevistas; a versão final e a apresentação consolidada confirmam 6.

### Fonte

Handoff de projeto (extração estruturada) e relatório final em PPTX, dezembro/2025 (source: user_confirmed); datas de campo confirmadas por Julia em 2026-08-20.

---

## EVD-CLUBE-009

**Projeto:** [[Pesquisa sobre Adoção do Pagamento Automático]]
**Tipo:** métrica de pesquisa (percentuais consolidados por hipótese)
**Confiança:** confirmed
**Privacidade:** CONFIDENTIAL (percentuais) / INTERVIEW_ONLY (achados sem número exato)

**Valor / descrição:** Percentuais do survey/entrevistas por hipótese, conforme relatório final em PPTX (fonte primária, dezembro/2025): H1 desconhecimento — 38% dos gestores manuais não conheciam a funcionalidade, 54% não entendiam como funciona; H2 taxa — 26% dos gestores manuais consideram a taxa inadequada; H3 controle — 11% dos apenas-manuais citam controle como motivo, 32% dos híbridos dizem que clientes preferem pagar presencialmente; H4 receio — não perguntado diretamente, mas 48% dos híbridos relatam que o automático "dá trabalho para gerir"; H5 migração — 15% dos híbridos citam dificuldade de migrar, 12% não tiveram tempo, 7% dos manuais tentaram o automático e pararam. Outros insights: 24% dos híbridos dizem que o automático não funciona bem; 31% dos manuais e híbridos recebem em dinheiro/PIX; entre os apenas-automáticos, 74% dizem que o automático melhora muito a operação, 91% recomendariam a outros negócios, e 60% apontam a recorrência automática como principal motivador de adoção.

### Interpretação

Este relatório em PPTX é a fonte primária e mais recente (data da análise: dezembro/2025), e resolve a divergência de percentuais registrada em versões anteriores da mesma conversa — em especial, confirma 31% para uso de dinheiro/PIX entre manuais e híbridos (não os ~70% de uma reconstrução anterior). Não há, nas fontes, o N absoluto por segmento — os percentuais não podem ser convertidos em contagens exatas. Citações atribuídas a gestores no PPTX são a versão apresentada oficialmente pela Trinks; não confirmadas contra as transcrições brutas originais nesta rodada.

### Fonte

Relatório de Pesquisa: Uso do pagamento automático no Clube de Assinaturas (PPTX, Trinks, data da análise: dezembro/2025), enviado por Julia em 2026-08-20.

---

## EVD-PILOTI-001

**Projeto/Experiência:** [[Piloti_Mobile_Internet]]
**Tipo:** métrica de volume/amplitude
**Confiança:** confirmed
**Privacidade:** CV_OK

**Valor / descrição:** Atuação em mais de 30 projetos digitais na Piloti Mobile & Internet.

### Interpretação

Evidência de volume e amplitude de exposição profissional a diferentes domínios e clientes. Não usar para inferir profundidade, ownership ou senioridade em todos os projetos — a maior parte não tem detalhamento individual nas fontes.

### Fonte

Currículo atual.
