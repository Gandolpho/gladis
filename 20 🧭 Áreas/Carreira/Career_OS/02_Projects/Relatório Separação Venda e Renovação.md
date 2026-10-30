---
id: PROJ-REL-VENDA-RENOVACAO
type: project
name: Separação do Relatório de Venda e Renovação
company: Trinks
status: DESIGNED / handoff entregue (quick win)
importance: média
start_date: UNKNOWN
end_date: UNKNOWN
privacy: INTERVIEW_ONLY
domains: [SaaS B2B, Relatórios, Clube de Assinaturas, Produtos financeiros]
roles: [Product Designer]
skills: [Product Design, Information Architecture, UX Writing, Product Discovery, Systems Thinking, Responsive Design, Stakeholder Alignment]
evidence: []
portfolio_status: candidato
created: 2026-08-20
last_updated: 2026-08-20
decision_ownership: colaborativa (Julia + PO)
research_conducted: sim (sem arquivos primários disponíveis)
handoff_status: entregue (quick win)
---

# Separação do Relatório de Venda e Renovação

## Resumo

Quick win de evolução do relatório "Venda e Renovação de Assinaturas" do Clube da Trinks. O projeto partiu de uma possível separação imediata de relatórios e foi reposicionado como melhoria estrutural em tela única, preparada para suportar uma futura divisão entre gestão financeira e gestão operacional. Envolveu discovery rápido, revisão de arquitetura da informação, UX writing e handoff para desenvolvimento.

## Contexto

O relatório "Venda e Renovação de Assinaturas" existia como ferramenta de acompanhamento de novas adesões, renovações e evolução da base de assinantes do Clube. Apresentava vendas iniciais e renovações de forma pouco diferenciada, concentrando informações financeiras e operacionais na mesma visualização, com colunas como: Cliente, Assinatura, Data da venda, Tipo de venda, Preço/mês, Status, Próximo pagamento, Cobrança encerra após.

O projeto foi classificado como quick win dentro de uma iniciativa maior de melhoria do Clube. Havia indícios de dificuldade de interpretação do relatório via chamados de suporte e feedbacks de clientes (agosto/2025 e junho/2025 — evidências tratadas como USER_CLAIM, não recuperadas diretamente nesta etapa).

## Problema

O relatório funcionava como uma listagem única misturando estado da assinatura e eventos financeiros, dificultando:
- distinguir nova venda de cobrança recorrente;
- entender o canal e a modalidade da venda;
- localizar status rapidamente, especialmente no mobile;
- fazer análise financeira separada da gestão operacional.

## Minha responsabilidade

- Estruturar o discovery rápido (até 2 dias), incluindo mapeamento de certezas, suposições e dúvidas (USER_CLAIM quanto à execução integral).
- Mapear dores, necessidades e motivos de uso do relatório por diferentes perfis de usuário.
- Elaborar roteiro de entrevista com o time de Atendimento (UNKNOWN se foi aplicado).
- Contatar liderança de Relacionamento com Cliente para obter evidências de tickets. A entrevista foi realizada (USER_CLAIM confirmado por Julia), mas os arquivos que a registrariam não estão disponíveis.
- Explorar alternativas de arquitetura da informação para os relatórios.
- Estruturar a solução de quick win: filtros, big numbers, tabela, ordem de colunas e novos campos.
- Revisar microcopy (big numbers, colunas, status, terminologia).
- Preparar handoff para desenvolvimento (em andamento no momento do registro).

Grau de ownership: CONFIRMED como responsável pelo design e pela estruturação das propostas. A decisão final de implementar o quick win foi colaborativa: Julia apresentou as alternativas para a PO e a solução foi escolhida em conjunto após discussão dos prós e contras de cada proposta. Portanto, Julia não decidiu sozinha, mas teve papel ativo e central na construção e na apresentação das opções.

## Decisões relevantes

**Não separar os relatórios agora**
O projeto partiu de uma possível separação imediata entre relatório de Vendas e de Renovações. A decisão foi manter uma única tela neste momento. Critérios: escopo de quick win, menor impacto estrutural, necessidade de entregar clareza rapidamente. Autoria: decisão colaborativa entre Julia e a PO, tomada após Julia apresentar as alternativas e discutir prós e contras de cada uma. Julia não decidiu sozinha, mas foi quem estruturou e apresentou as opções.

**Preparar estrutura para futura separação Financeiro × Operacional**
A solução foi deliberadamente estruturada para ser compatível com uma futura divisão entre gestão financeira e gestão operacional — não uma simples separação de Vendas × Renovações. Isso exigiu decisões de arquitetura mais estruturais dentro de um projeto curto.

**Criação da coluna "Tipo de cobrança"**
Introduzida para distinguir explicitamente a primeira venda das cobranças recorrentes, evitando que "venda" e "renovação" continuassem semanticamente misturadas na tabela. Valores funcionais: Venda inicial / Renovação. A regra técnica exata de classificação no backend é UNKNOWN.

**Reestruturação de "Canal de venda"**
A coluna passou a apresentar três possibilidades: Estabelecimento / Manual, Estabelecimento / Automático, Site / Automático. Decisão separou canal de venda de meio de pagamento (Pix, cartão, dinheiro não são exibidos).

**Status movido para o início da tabela**
Reposicionado para maior prioridade por ser informação de alta relevância, especialmente difícil de localizar no mobile.

**Revisão de microcopy dos big numbers**
Títulos longos e redundantes foram reduzidos para melhorar escaneabilidade em tela densa:
- "Pagamentos confirmados no mês" → Faturamento confirmado
- "Total de assinaturas ativas" → Assinaturas ativas
- "Pagamentos previstos até o fim do mês" → Pagamentos previstos
- "Taxa de inadimplência no mês" → Taxa de inadimplência

## Processo

**Discovery**
Planejado como processo enxuto de até 2 dias. Atividades documentadas: mapeamento de certezas/suposições/dúvidas, levantamento de motivos de uso, elaboração de roteiro para entrevista com Atendimento, articulação com liderança de Relacionamento com Cliente para evidências de tickets. Execução integral: UNKNOWN.

**Exploração de arquiteturas**
Foram comparadas alternativas: separação por tipo de transação (Vendas × Renovações), separação por finalidade (Financeiro × Operacional), abas, painel consolidado, jornada, persona, evento × estado.

**Design**
Definição da estrutura final: filtros (Clientes, Assinaturas, Status, Canal de venda), big numbers (4 indicadores revisados), tabela com nova hierarquia e novos campos.

**Handoff**
Concluído para a solução quick win. Julia entregou o handoff com especificações de microcopy, layout, hierarquia e regras da coluna Tipo de cobrança.

**Testes de usabilidade**
UNKNOWN. Considerados no planejamento, sem evidência de realização.

## Complexidades

- Relatório concentra dimensões financeiras e operacionais que precisam ser separadas no futuro, mas não agora.
- Múltiplos estados de assinatura combinam condições operacionais e financeiras simultaneamente.
- Três modalidades de venda (manual, automático por link, online pelo hotsite) com lógica técnica diferente (Pagar.me).
- Decisão de quick win exigiu projetar uma solução intermediária sem comprometer a arquitetura futura.
- Alta densidade informacional em tela com múltiplos perfis de usuário (gestores, recepcionistas, financeiro).

## Estrutura da solução

**Tabela (nova ordem)**
1. Cliente
2. Assinatura
3. Status
4. Data da venda
5. Tipo de cobrança
6. Canal de venda
7. Profissional da venda
8. Preço/mês
9. Próximo pagamento
10. Encerramento previsto

**Estados de assinatura**
Ativa, Contrato pendente, Aguardando pagamento, Atrasada, Pagamento bloqueado, Aguardando pagamento da multa, Cancelada, Cancelada com consumo ativo, Suspensa por falta de pagamento, Encerrada. Novas nomenclaturas foram exploradas mas o mapping final aprovado é UNKNOWN.

## Stakeholders

- Liderança de Design / chefia de Julia: alinhamento de processo.
- Atendimento (Juliana): candidata a entrevista interna. Resultado: UNKNOWN.
- Relacionamento com Cliente (Thainara, liderança): contato para evidências de tickets. Resultado: UNKNOWN.
- Produto / PO: envolvido na definição do escopo como quick win. Autoria da decisão: UNKNOWN.
- Engenharia: destinatária do handoff.

## Resultado

### Output
Estrutura de relatório redesenhada com nova hierarquia, nova coluna Tipo de cobrança, reestruturação de Canal de venda, revisão sistemática de microcopy e handoff entregue para desenvolvimento. Implementação, release e pós-lançamento: UNKNOWN.

### Outcome
Não disponível. Projeto ainda não lançado no momento do registro.

### Métricas
Meta declarada no épico: +15% de feedback positivo nos formulários de NPS/pesquisa de usabilidade dos estabelecimentos impactados. Resultado medido: não disponível.

## Evidências

- Decisão de estruturar o quick win de forma compatível com arquitetura futura (Financeiro × Operacional). Força: alta. Confidence: confirmed.
- Criação da coluna Tipo de cobrança para distinção semântica entre venda inicial e recorrência. Força: alta. Confidence: confirmed.
- Reorganização da hierarquia da tabela com Status no início, especificamente para mobile. Força: média. Confidence: confirmed.
- Revisão de microcopy dos big numbers para reduzir densidade e inconsistência terminológica. Força: média. Confidence: confirmed.
- Exploração de múltiplas arquiteturas alternativas antes da decisão final. Força: média. Confidence: confirmed quanto à exploração; UNKNOWN quanto à autoria da decisão.

## Competências demonstradas

- **Product Design** — estruturação completa da solução: filtros, big numbers, hierarquia de tabela, novos campos, handoff. Força: alta.
- **Information Architecture** — distinção conceitual entre evento financeiro e estado operacional; separação semântica de venda inicial e recorrência; organização por relevância e contexto de uso. Força: alta.
- **UX Writing** — revisão sistemática de big numbers, colunas, status e taxonomia (Canal de venda, Tipo de cobrança, Encerramento previsto). Força: alta.
- **Product Discovery** — estruturação de perguntas, CSD, hipóteses, roteiro para entrevista, busca de evidências com suporte. Força: média/alta. Execução integral: UNKNOWN.
- **Systems Thinking** — solução de curto prazo deliberadamente compatível com arquitetura futura mais estrutural. Força: média/alta.
- **Responsive Design** — hierarquia revisada especificamente para encontrabilidade no mobile. Força: média.
- **Stakeholder Alignment** — articulação planejada com chefia, Atendimento e Relacionamento com Cliente. Execução dos retornos: UNKNOWN. Força: média.

## Contradições e ambiguidades

- O nome "Separação do relatório" sugere dois relatórios criados. A decisão foi não separar agora. Não registrar como "Julia separou o relatório em duas telas".
- A separação futura é Financeiro × Operacional, não simplesmente Vendas × Renovações. São lógicas distintas.
- "Canal de venda" é o nome final aprovado. Versões intermediárias ("Origem da venda", "Como foi vendida") não devem ser tratadas como decisão.
- "Meio de pagamento" (Pix, cartão, dinheiro) foi explicitamente excluído do escopo. Não confundir com Canal de venda.
- Nomenclaturas de status sugeridas pela IA não devem ser registradas como decisões até confirmação de Julia.

## Potencial para currículo

Com cautela e após confirmação de lançamento: bullet sobre evolução de relatório complexo e estruturação de quick win compatível com arquitetura futura. Uso genérico aceitável: "melhoria de relatório de recorrência" (CV_OK). Detalhes estruturais: INTERVIEW_ONLY até confirmação de confidencialidade e implementação.

## Potencial para portfólio

Alto potencial para mostrar: problema de informação densa, alternativas exploradas, trade-off entre quick win e solução estrutural, arquitetura futura, taxonomia, hierarquia mobile, UX Writing. Condicionado à confirmação de lançamento e aprovação de confidencialidade.

## Potencial para entrevistas

Forte especialmente para perguntas sobre: lidar com escopo reduzido, equilibrar curto e longo prazo, estruturar informação complexa, trabalhar com produto legado, evitar retrabalho, tomar decisões sem evidência perfeita, usar Atendimento como proxy de conhecimento quando discovery direto é limitado.

## Informações ausentes

Data exata de início; quem priorizou o épico; achados específicos das entrevistas com Atendimento e Relacionamento com Cliente (arquivos não disponíveis); se houve teste de usabilidade; regra técnica definitiva de Venda inicial × Renovação no backend; se o desenvolvimento começou; se houve lançamento; resultados pós-lançamento.

## Perguntas para Julia

~~1. A decisão de fazer um quick win agora e separar Financeiro × Operacional depois foi sua proposta, veio da PO/liderança ou foi construída em conjunto?~~ RESPONDIDO: Decisão colaborativa com a PO, após Julia apresentar as alternativas e discutir prós e contras.

~~2. Você era a designer principal/responsável por esse projeto ou estava apoiando outra pessoa?~~ RESPONDIDO (implícito): Julia era a designer responsável pelo design e pela estruturação das propostas.

~~3. A conversa com Juliana/Atendimento ou com Thainara chegou a acontecer? Quais evidências concretas foram encontradas?~~ RESPONDIDO PARCIALMENTE: A entrevista aconteceu, mas os arquivos de registro não estão disponíveis. Achados específicos não recuperáveis nesta etapa.

4. A nova organização da tabela foi validada com usuários, Atendimento, Produto ou Engenharia?
5. A regra técnica de "Venda inicial × Renovação" foi definida com Engenharia?
6. A meta de +15% continua válida ou era apenas proposta inicial do épico?
7. O desenvolvimento começou? Há previsão de lançamento?
