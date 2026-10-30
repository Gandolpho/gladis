---
id: SYS-RULES
type: system
privacy: CONFIDENTIAL
created: 2026-08-11
last_updated: 2026-10-11
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

### Privacidade granular (por bloco, evidência ou informação específica)

- O campo `privacy` no frontmatter representa a classificação padrão do arquivo.
- Um bloco, evidência, métrica ou informação específica pode ter classificação mais restritiva que a classificação padrão do arquivo.
- Quando houver classificação específica, ela sempre prevalece sobre a classificação geral do arquivo, para aquele conteúdo.
- Conteúdo nunca pode ser utilizado em um destino com nível de exposição maior do que o permitido pela sua própria classificação (a mais específica aplicável, não a do arquivo).
- Uma informação mais restrita dentro de um arquivo não torna automaticamente todo o arquivo igualmente restrito.
- Na dúvida sobre a classificação de uma informação específica, usar temporariamente o nível mais restritivo razoável e sinalizar para validação.

## Escrita e alterações

Antes de qualquer alteração de conteúdo existente, seguir obrigatoriamente [[WRITE_PROTOCOL]].

A solicitação inicial de uma mudança NÃO constitui aprovação para executá-la.

- Ler: automático
- Criar novos arquivos seguindo templates: automático
- Registrar novas vagas e candidaturas: automático
- Alterar fatos existentes: exige confirmação
- Persistir inferências: exige confirmação
- Tornar informação menos restrita: exige confirmação
- Mover ou renomear sem mudar significado: automático
- Ajustar pontuação e fluidez em texto de material, sem mudar o sentido: automático, informar depois (limites no [[WRITE_PROTOCOL]])
- Encerrar candidatura por inatividade: exige confirmação
- Excluir informação: exige confirmação adicional

### Validade do frontmatter

- Todo frontmatter criado ou alterado deve permanecer YAML válido.
- Valores que contenham dois-pontos, colchetes ou outros caracteres que possam ser interpretados incorretamente pelo parser YAML devem receber aspas.
- Após qualquer escrita em lote, verificar a validade estrutural do frontmatter dos arquivos afetados antes de reportar a execução como concluída.

## Histórico

Usar [[CHANGELOG]] para mudanças relevantes. Não criar cópias integrais de cada versão de arquivo.

## Eficiência

- Evitar duplicação
- Preferir links entre arquivos
- Não carregar toda a base sem necessidade
- Não criar arquivos muito pequenos sem valor operacional

## Pretensão Salarial

### Regra geral

Nunca recomendar pretensão salarial com base apenas nas faixas internas do Career OS.
Os critérios de `JOB_CRITERIA.md` funcionam como restrições e parâmetros de decisão, não como âncora de recomendação.

### Pesquisa externa obrigatória

Antes de qualquer recomendação, pesquisar na internet seguindo esta hierarquia de fontes:

1. Faixa publicada pela própria empresa ou na própria vaga;
2. Vagas atuais ou recentes da mesma empresa com faixa divulgada;
3. Dados salariais reportados por funcionários ou candidatos em plataformas de remuneração confiáveis (ex: Glassdoor, entre outras);
4. Pesquisas salariais de consultorias ou empresas de recrutamento reconhecidas;
5. Cargos equivalentes na mesma empresa;
6. Empresas comparáveis e mercado geral, nessa ordem, quando faltarem dados específicos.

Priorizar dados dos últimos 12 meses. Quando não houver volume suficiente, ampliar progressivamente o período e informar explicitamente a idade dos dados utilizados. Dados antigos não devem ser tratados como representação direta da faixa atual sem ressalva.

Priorizar fontes recentes e específicas. Não usar média genérica de Product Designer quando houver dados mais específicos disponíveis.

Diferenciar salário-base de remuneração total. Benefícios, bônus, PLR, ações e outros componentes podem ser considerados na avaliação global da oportunidade, mas não devem ser misturados diretamente à faixa de salário-base ao calcular a pretensão. Sempre indicar quando a comparação envolve remuneração total.

### Análise de aderência obrigatória

Comparar a vaga com o Career OS e classificar a aderência de Julia em uma das categorias:

- abaixo do nível esperado;
- parcialmente qualificada;
- adequadamente qualificada;
- fortemente qualificada;
- acima do nível esperado.

Avaliar: senioridade solicitada, responsabilidades, competências obrigatórias e desejáveis, experiência de domínio, ferramentas, nível de autonomia esperado, diferenciais competitivos e gaps reais.
Não inferir senioridade apenas pelo cargo formal atual de Julia.

### Cálculo da pretensão

A recomendação final deve combinar quatro dimensões:

1. **Mercado** — faixa salarial real encontrada para empresa, cargo e contexto comparável.
2. **Aderência** — quão competitiva Julia é especificamente para aquela vaga.
3. **Senioridade real da vaga** — nível de responsabilidade descrito, independentemente do nome do cargo.
4. **Critérios pessoais** — mínimos, preferências e restrições de `JOB_CRITERIA.md`.

Nunca partir do mínimo pessoal e acrescentar margem arbitrária.
Nunca inflar a pretensão apenas por alta aderência ignorando a faixa praticada pela empresa.
Nunca reduzir a pretensão automaticamente porque o cargo formal atual de Julia tem senioridade inferior.

### Tratamento da incerteza

Se não houver dados confiáveis suficientes:

- declarar a limitação explicitamente;
- ampliar para cargos equivalentes e empresas comparáveis;
- apresentar intervalo de confiança;
- não inventar precisão.

Diferenciar claramente nas respostas:

- `FACT` — dado encontrado em fonte externa;
- `MARKET ESTIMATE` — estimativa derivada de múltiplas referências;
- `CAREER OS FACT` — informação sobre Julia;
- `INFERENCE` — avaliação de aderência;
- `RECOMMENDATION` — pretensão sugerida.

### Formato padrão da resposta

Estrutura obrigatória ao responder sobre pretensão salarial:

1. **Aderência à vaga** — compatibilidade, forças e gaps.
2. **Mercado** — faixas encontradas para empresa, cargo e mercado comparável. Incluir fontes, data dos dados e qualidade das informações.
3. **Leitura do cenário** — como a posição de Julia dentro da faixa foi determinada.
4. **Pretensão recomendada** — faixa de mercado estimada; faixa de pretensão recomendada; valor único caso o formulário exija apenas um número; piso de negociação; justificativa.

### Formulários com campo único (ex: Gupy)

Após toda a análise, recomendar explicitamente:
`"Se o campo aceitar apenas um número, eu colocaria R$ X."`
O número deve considerar estratégia de negociação, não apenas a média da faixa.

### Exceção

A pesquisa externa só pode ser dispensada se Julia disser explicitamente que não a quer naquela análise. Nesse caso, informar que a recomendação será menos confiável e baseada apenas no Career OS.

## Textos Narrativos de Candidatura — Protocolo

Esta seção define o processo operacional para geração e auditoria de textos narrativos de candidatura — campos do tipo "Fale sobre você", "Conte sobre sua trajetória", "Por que quer trabalhar aqui?", "Por que acredita ter fit com esta vaga?", apresentações profissionais em formulários, cartas de motivação e respostas semelhantes que complementem o currículo.

Para os princípios editoriais, voz e estratégia por tipo de campo, ver `COMMUNICATION_STRATEGY.md` — Seção 19.

### Processo obrigatório antes da escrita

Para qualquer texto narrativo personalizado para uma vaga, seguir internamente esta sequência:

1. Entender exatamente o que o campo está perguntando.
2. Verificar limite de caracteres ou palavras.
3. Analisar a descrição da vaga.
4. Identificar de 2 a 3 pontos de aderência realmente relevantes.
5. Consultar o Career OS para evidências e fatos pertinentes.
6. Identificar o que já estará evidente no currículo enviado.
7. Selecionar o que acrescentará interpretação, contexto ou motivação novos.
8. Definir a narrativa central do texto.
9. Escrever.
10. Executar a auditoria pós-escrita abaixo antes de entregar.

### Auditoria pós-escrita obrigatória

Revisar silenciosamente antes de entregar qualquer texto narrativo.

**Redundância**
- O texto está apenas recontando o currículo?
- Quantas frases acrescentam contexto, interpretação ou motivação novos?
- Algum parágrafo virou lista de skills em prosa?

**Personalização**
- Este texto funcionaria praticamente igual para outra empresa?
- A conexão com a vaga é sustentada por algo concreto?
- A motivação pela empresa vai além da descrição da vaga?

**Naturalidade**
- Há travessões no meio de frases ou dois-pontos recorrentes para criar impacto?
- Usei estruturas "não é X, é Y" de forma repetida?
- Há sequências artificiais de três itens sem necessidade?
- As frases estão excessivamente simétricas?
- Há buzzwords que poderiam ser removidas?

**Evidência e privacidade**
- Alguma frase exagera a participação de Julia?
- Algum resultado é atribuído causalmente ao trabalho dela sem evidência?
- Alguma informação viola a privacy do Career OS?
- Dados INTERVIEW_ONLY ou CONFIDENTIAL aparecem indevidamente?

**Voz**
- Isso parece algo que uma Product Designer brasileira poderia realmente escrever sobre si?
- O texto está profissional sem parecer uma carta corporativa genérica?
- Há alguma frase que Julia provavelmente não diria em uma conversa profissional?

Se encontrar problemas em qualquer dimensão, revisar antes de apresentar.
