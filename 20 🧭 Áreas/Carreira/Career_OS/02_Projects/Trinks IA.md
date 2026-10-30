---
id: PROJ-TRINKS-IA
type: project
name: Trinks IA
company: Trinks
status: piloto
importance: alta
start_date:
end_date:
privacy: CV_OK
domains: [IA aplicada, SaaS B2B]
roles: [Product Design, UX Research]
skills: []
evidence: [EVD-TRINKSIA-001, EVD-TRINKSIA-002, EVD-TRINKSIA-003, EVD-TRINKSIA-004]
portfolio_status: candidato
created: 2026-08-12
last_updated: 2026-08-13
---

# Trinks IA

## Resumo

Iniciativa de atendimento e agendamento via WhatsApp com Inteligência Artificial para estabelecimentos de beleza e bem-estar. Status atual: piloto.

## Contexto

Pequenos negócios com equipe limitada, frequentemente dependentes de atendimento manual. A Trinks iniciou uma iniciativa de IA para reduzir carga operacional dos estabelecimentos e ampliar conversões, com comportamento não totalmente determinístico (diferente de software tradicional).

## Problema

Construir uma solução que automatizasse processos, mantivesse confiança do usuário e fosse simples para gestores, mesmo com um produto cujo comportamento não é completamente previsível.

## Minha responsabilidade

Discovery, construção de personas (Maria e Denise), mapeamento de dores, definição de jornadas, estruturação de onboarding. Atuação em três componentes do produto: painel de conversas (design da interface, interações e estados de erro; testes de usabilidade; adaptação mobile e documentação de handoff), configuração e onboarding (design). Planejamento e condução de 20 testes moderados de usabilidade com entrevistas. Contribuição para evolução de componentes e estruturação do Design System da solução durante processo de migração de linguagem visual.

## Decisões relevantes

- Painel de conversas com supervisão humana e possibilidade de assumir o controle da conversa quando necessário. *(Decisão de produto sobre o comportamento e as regras de supervisão da IA. Julia foi responsável pelo design da interface do painel, interações e estados de erro. O fluxo conversacional da IA — lógica da conversa, comportamento do agente, estrutura da interação IA-cliente — não foi projetado por Julia.)*
- Adaptação mobile do painel de conversas: em dispositivos pequenos, aproximadamente uma conversa ficava visível ao mesmo tempo. Optou-se por ajustar proporções, tamanhos e espaçamentos sem redesenho estrutural, pois o produto já estava em produção. Produziu-se documentação de handoff para implementação. *(Decisão e execução: Julia. Autoria da estrutura original do painel: desconhecida.)*
- Onboarding com atenção especial à construção de confiança inicial, considerando o comportamento não determinístico da IA.
- Fluxo de configuração para personalização do comportamento da IA pelo estabelecimento antes do uso.

## Processo

Discovery e construção de personas para compreender necessidades e receios dos usuários em relação ao uso de IA. Testes moderados de usabilidade (20), usando análise qualitativa, chamados de suporte, Hotjar e dados internos.

## Complexidades

Comportamento não determinístico da IA. Necessidade de gerar confiança mesmo com imprevisibilidade. Personas com preocupações diferentes: Maria (escalabilidade, controle, eficiência) e Denise (tempo, atendimento, custo, facilidade de uso).

## Stakeholders

Estabelecimentos (gestores). Colaboração cross-functional com Produto e Engenharia é fato geral da experiência na Trinks; aplicação específica a este projeto não detalhada além de discovery e personas nas fontes disponíveis.

## Resultado

### Output

Personas (Maria, Denise), fluxos de onboarding e configuração, interface do painel de conversas (design de interações e estados de erro), adaptações mobile do painel de conversas, documentação de handoff para implementação, 20 testes moderados de usabilidade conduzidos, contribuição a componentes de Design System.

### Outcome

Descobertas orientaram decisões sobre comunicação, configuração, onboarding e adoção (fato registrado na fonte).

### Impact

Não atribuir causalidade direta entre decisões específicas de Design e métricas de adoção ou conversão do piloto.

### Metric

20 testes moderados de usabilidade: `CV_OK`, já público no currículo atual.

Valores absolutos do piloto, classificados `INTERVIEW_ONLY`, `external_approved: false`:

- raw_value: 83 estabelecimentos ativados (meta inicial: 7)
- raw_value: 9.820 conversas
- raw_value: 1.413 agendamentos
- raw_value: ~14% de conversão

external_expression candidatas (não aprovadas para uso externo):

- "piloto superou em mais de 10x a meta inicial de adoção"
- "produto operou milhares de conversas durante o piloto"

## Evidências

Ver seção Metric acima. Detalhamento normalizado a estruturar em `04_Evidence/METRICS.md` (Lote 4).

## Competências demonstradas

Discovery, construção de personas, planejamento e condução de testes moderados de usabilidade, análise qualitativa, design de interface e interações (painel de conversas), UX writing (onboarding e configuração), adaptação de interface para restrições de dispositivo, documentação de handoff.

## Competências inferidas (candidatas, não confirmadas)

Conversational AI UX, Product Strategy, Systems Thinking. Nenhuma persistida como competência confirmada nesta etapa.

> Nota: AI Product Design e Human-AI Interaction estão registradas como `confirmed` em `03_Skills/AI.md`, com evidência deste projeto — não devem ser listadas como inferidas aqui.

## Potencial para currículo

Alto (parcialmente já refletido no currículo atual, sem os valores absolutos do piloto).

## Potencial para portfólio

Alto, com restrição: valores absolutos do piloto não podem ser publicados sem aprovação específica.

## Informações desconhecidas

Data de início do projeto. Papel detalhado de outros stakeholders além do já registrado.
