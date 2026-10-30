---
tipo: documento
contexto: carreira
status: ativo
projeto: Career OS
categoria: racional de decisões e recomendações metodológicas
data_geracao: 2026-10-11
origem: conversa com ChatGPT
complementa:
  - Career_OS_Registro_2026-10-11.md
  - Career_OS_Complemento_Correcoes_2026-10-11.md
---

# Career OS — Por que decidimos assim e como projetar sistemas semelhantes

> **Propósito:** documentar o raciocínio por trás das escolhas, o que elas revelam sobre as preferências de trabalho da usuária e princípios transferíveis para construção de sistemas de conhecimento, regras, prompts e projetos complexos.
>
> **Natureza:** este documento é interpretativo e metodológico. Não é um novo protocolo obrigatório, não altera o ROADMAP e não substitui os registros factuais anteriores.
>
> **Legenda de procedência:** `[dito]` = preferência, fato ou decisão explicitamente comunicada ou aprovada; `[inferido]` = interpretação do assistente a partir da conversa; `[recomendação]` = boa prática proposta para uso futuro, ainda não aprovada como regra do Career OS.
>
> **Limite importante:** inferências sobre estilo cognitivo ou profissional não são diagnósticos, avaliações psicológicas nem critérios eliminatórios automáticos para vagas.

## 1. Princípio central do projeto

**[inferido] O Career OS deve reduzir o custo de transformar conhecimento disperso em decisões profissionais confiáveis.** Não basta armazenar dados; o sistema precisa recuperar a evidência certa, no momento certo, sem obrigar Julia a recontar seu histórico ou revalidar cada detalhe.

- [dito] A usuária quer preservar experiências, resultados, contexto, decisões e nuances.
- [dito] Quer uma fonte única que ajude a produzir materiais e avaliar vagas.
- [dito] Quer confirmações antes de alterações relevantes e rastreabilidade.
- [dito] Não quer passar tardes ajustando regras ou iterando frases sem ganho proporcional.
- [inferido] Existe uma tensão produtiva entre **profundidade da base** e **velocidade de execução**: a base deve ser rica; a interação cotidiana deve ser curta.

**[recomendação] Regra orientadora para sistemas semelhantes: armazenar com profundidade, recuperar seletivamente, decidir com evidência e executar com o menor número de passos necessário.**

## 2. O que percebi das preferências de Julia

### 2.1 Prefere precisão com pragmatismo, não perfeccionismo sem fim

**Evidências da conversa**

- [dito] Pediu objetividade e explicitou que não queria passar a tarde inteira ajustando regras.
- [dito] Questionou se uma mudança mínima no Summary do CV EN era realmente importante.
- [dito] Quis terminar LinkedIn e Gupy no mesmo dia, sem redesenhar o ROADMAP.
- [dito] Prefere receber o prompt final para o Claude, não apenas comentários sobre o que deveria pedir.

**Interpretação**

- [inferido] Valoriza rigor quando ele evita erro factual, reputacional ou operacional.
- [inferido] Tolera menos rigor cosmético quando não há benefício demonstrável.
- [inferido] Prefere uma recomendação principal e critérios claros de encerramento, em vez de múltiplas versões abertas.

**Implicação para o sistema**

- [recomendação] Classificar alterações como `CRÍTICA`, `RELEVANTE` ou `COSMÉTICA`.
- [recomendação] Interromper iterações quando o texto estiver correto, natural, adequado ao canal e sem risco material.
- [recomendação] Para mudanças cosméticas, registrar como sugestão opcional e **não bloquear a próxima etapa**.

### 2.2 Prefere perguntas específicas e pequenas

**Evidências**

- [dito] Pediu perguntas menos amplas porque a primeira resposta já exigiria um parágrafo longo.
- [dito] Responde melhor a perguntas sobre comportamentos, episódios e decisões concretas.
- [dito] Não quer questionários extensos sem necessidade.

**Interpretação**

- [inferido] Perguntas delimitadas reduzem esforço de resposta e aumentam precisão.
- [inferido] A entrevista sobre estilo de trabalho rendeu conhecimento rico porque fragmentou temas grandes em perguntas respondíveis.

**Implicação**

- [recomendação] Perguntar apenas o que muda a decisão imediata.
- [recomendação] Quando precisar de investigação, usar perguntas curtas, numeradas e sobre situações observáveis.
- [recomendação] Não perguntar o que já está em arquivo canônico.

### 2.3 Prefere voz pessoal sem perder credibilidade

**Evidências**

- [dito] Quer linguagem mais calorosa, casual e profissional para LinkedIn, contato com empresas e site.
- [dito] Não quer que o About pareça um currículo narrado ou uma lista de testes e métricas.
- [dito] Prefere texto escaneável, não muito longo, sem uso de dois-pontos no About.
- [dito] Gosta da formulação “tomar decisões baseadas em dados, e não em achismos”.

**Interpretação**

- [inferido] A escrita deve preservar identidade e raciocínio, não apenas otimizar keywords.
- [inferido] Prova de competência não exige transformar toda apresentação em inventário de realizações.

**Implicação**

- [recomendação] Separar instruções editoriais por canal: CV, LinkedIn, entrevista, portfólio, mensagem a recrutador.
- [recomendação] No LinkedIn, usar exemplos representativos e deixar detalhes de métricas nas experiências.
- [recomendação] Fazer uma revisão de “voz humana” depois da revisão factual, não em lugar dela.

### 2.4 Valoriza o histórico completo, mas aceita seleção contextual

**Evidências**

- [dito] Rejeitou remover experiências antigas do LinkedIn apenas por não estarem alinhadas ao posicionamento atual.
- [dito] Considera Know-How, CEDS, design visual e audiovisual partes relevantes da trajetória.
- [dito] Aceita omitir experiências menos relevantes do CV.

**Interpretação**

- [inferido] Não quer que otimização para recrutamento apague sua identidade profissional ou trajetória.
- [inferido] Entende que documentos diferentes têm finalidades diferentes.

**Implicação**

- [recomendação] Tratar histórico profissional como base de longo prazo; gerar visões seletivas por canal.
- [recomendação] Não confundir “não destacar” com “apagar”.
- [recomendação] Preservar experiências anteriores em registros canônicos, mesmo quando não aparecem em candidatura.

### 2.5 Prefere entender causas, consequências e interdependências

**Evidências**

- [dito] Questiona requisitos e procura entender o problema antes de abrir o Figma.
- [dito] Diferencia impossibilidade técnica de custo de implementação.
- [dito] Tem facilidade para mapear regras, exceções e impactos cruzados.
- [dito] Valoriza discussões com Produto e Engenharia para ponderar trade-offs.

**Interpretação**

- [inferido] Tende a trabalhar bem com modelos explícitos de decisão, dependências e exceções.
- [inferido] Uma resposta que mostra apenas a conclusão pode ser menos útil que uma que explica o critério, **desde que não seja excessivamente longa**.

**Implicação**

- [recomendação] Registrar racional em formato compacto: contexto → evidência → decisão → consequência.
- [recomendação] Usar matrizes e fluxos quando houver regras interdependentes, mas não para cada decisão trivial.

### 2.6 Usa IA como infraestrutura de pensamento, não só para produzir textos

**Evidências**

- [dito] Usa Claude, ChatGPT, Obsidian e NotebookLM para organizar informação, pesquisa, projetos e automações.
- [dito] Prefere bases de fontes selecionadas para limitar ruído e aumentar confiabilidade.
- [dito] Quer preservar o contexto para continuar o trabalho entre sessões e ferramentas.
- [dito] Não quer expor publicamente projetos privados ligados à busca de emprego.

**Interpretação**

- [inferido] O ganho principal de IA, neste contexto, é memória operacional, síntese, consistência e aceleração de decisões.
- [inferido] A qualidade depende tanto da arquitetura dos dados quanto do modelo utilizado.

**Implicação**

- [recomendação] Projetar para portabilidade entre assistentes.
- [recomendação] Manter informações sensíveis separadas de materiais públicos.
- [recomendação] Não deixar que o assistente confunda uma cópia temporária com o repositório verdadeiro.

## 3. Racional das principais decisões do Career OS

| Decisão | Evidência e motivação | Racional interpretado | Limite ou trade-off | Origem |
|---|---|---|---|---|
| Obsidian como base canônica | Necessidade de conhecimento reutilizável e editável | Arquivos Markdown permitem portabilidade e leitura por ferramentas diferentes | Sincronização exige mecanismo confiável | [dito] + [inferido] |
| Claude como operador do Career OS | Interesse em uso de IA para organizar e executar | Assistente pode transformar a base em ações contextualizadas | Acesso a arquivos pode ser parcial | [dito] + [inferido] |
| Estrutura por experiência, projeto, skill e evidência | Evitar informação dispersa | Permite reutilizar uma mesma prova em vários materiais | Excesso de granularidade cria manutenção | [dito] + [inferido] |
| Classificar fatos, claims e privacidade | Evitar exageros e exposição | A credibilidade depende da origem e do contexto do dado | Classificação exige disciplina | [dito] + [inferido] |
| Confirmação para mudanças relevantes | Controle sobre base profissional | Protege fonte canônica contra inferências indevidas | Pode criar atrito se cada ajuste trivial exigir aprovação | [dito] + [inferido] |
| CV seleciona; LinkedIn preserva | Objetivos diferentes dos canais | Currículo otimiza candidatura; LinkedIn mostra trajetória e narrativa | Não significa publicar todo detalhe privado | [dito] |
| Headline prioriza recorrência, IA e pesquisa | Experiência mais representativa que “produtos financeiros” | Posicionamento específico sem ficar restrito a um subdomínio menor | Algumas buscas por finanças podem depender de outras seções | [dito] + [inferido] |
| About não deve listar apenas 20 testes | Pesquisa recorrente em vários projetos | Evita reduzir competência ampla a uma única métrica | Perde uma prova numérica no About, mantida em Experience | [dito] |
| About curto e pessoal | Texto longo estava cansativo | Melhor leitura e representação autêntica | Nem todos os insights cabem no texto público | [dito] + [inferido] |
| Insights pessoais em arquivo separado | Material valioso para carreira futura | Preserva profundidade sem alongar o LinkedIn | Requer organização e controle de privacidade | [dito] + [inferido] |
| Não reabrir ROADMAP por esse arquivo | Prioridade de terminar LinkedIn e Gupy | Pequena adição deve ser absorvida sem interromper fluxo | Registro pode ocorrer depois da tarefa principal | [dito] |
| Validar escrita no vault real | Arquivo criado na sessão não aparecia no Obsidian | “Ferramenta informou sucesso” não é “resultado entregue” | Verificação tem custo, mas evita perda de trabalho | [dito] + [inferido] |
| Encerrar microajustes editoriais | Etapa 7.3 se alongou demais | Limite de iteração protege tempo e foco | Algumas melhorias opcionais ficam para depois | [dito] + [inferido] |

### 3.1 Por que a auditoria de LinkedIn começou por pesquisa

- [dito] Julia pediu pesquisa sobre recrutamento no LinkedIn antes de alterar Headline, About e Skills.
- [inferido] Isso evitou partir apenas de preferências estéticas ou suposições sobre o algoritmo.
- [inferido] A pesquisa também revelou que várias alegações populares sobre ranqueamento são incertas.
- [recomendação] Sempre separar **fatos documentados pela plataforma**, **práticas observadas por profissionais** e **hipóteses de algoritmo**.
- [recomendação] Usar pesquisa para estabelecer critérios de decisão, não para transformar o projeto em auditoria interminável.

### 3.2 Por que a versão inicial do About não funcionou

- [dito] Julia considerou o texto longo, pouco escaneável, formal demais e semelhante a currículo.
- [inferido] O assistente tentou converter quase toda a entrevista sobre estilo de trabalho em uma única apresentação pública.
- [inferido] O problema foi de **seleção de conteúdo**, não de falta de conteúdo.
- [recomendação] Separar “conhecimento que o sistema deve guardar” de “informação que a audiência precisa ler agora”.
- [recomendação] Um bom About não é um inventário completo de competências, mas uma porta de entrada para o restante do perfil.

### 3.3 Por que a discussão sobre Design Systems exigiu cuidado

- [dito] Há uso de DS estabelecido, contribuição em componentes e documentação, mas não criação profissional integral do sistema.
- [inferido] A escolha de verbo importa porque altera a percepção de autoria e senioridade.
- [recomendação] Em qualquer claim, explicitar **nível de participação**: usou, contribuiu, liderou, definiu ou construiu integralmente.
- [recomendação] Não sacrificar precisão por keywords ATS.

### 3.4 Por que “não pagamento” foi tratado como regra de comportamento

- [dito] O escopo incluía políticas e fluxos de inadimplência, não processamento técnico de cobrança.
- [inferido] Termos próximos podem sugerir responsabilidades muito diferentes.
- [recomendação] Ao traduzir experiência profissional, validar **o que a pessoa decidiu** e **o que ela não implementou**, além do termo mais idiomático.

## 4. Dicas para construir sistemas semelhantes

### 4.1 Começar pelas decisões que o sistema precisa apoiar

**[recomendação] Não começar desenhando pastas.** Primeiro listar decisões recorrentes, por exemplo:

1. Vale candidatar-me a esta vaga?
2. Que experiências sustentam minha aderência?
3. O que posso afirmar publicamente?
4. Qual CV ou narrativa devo usar?
5. Que lacunas precisam de validação?
6. Que aprendizados da candidatura devem atualizar a base?

Depois, definir o menor conjunto de registros que permite responder a essas perguntas.

### 4.2 Separar cinco camadas

| Camada | Função | Exemplo |
|---|---|---|
| Fonte | Documento ou relato original | Entrevista, CV, métrica |
| Fato canônico | Informação normalizada e verificável | Projeto, papel, resultado |
| Interpretação | Significado e posicionamento | Competência demonstrada |
| Decisão | Escolha feita e seu racional | Usar claim no LinkedIn |
| Apresentação | Texto para canal específico | About, CV, Gupy |

**[recomendação] Não armazenar todas essas camadas como se fossem fatos equivalentes.** Uma inferência sobre senioridade não deve se tornar automaticamente uma linha de currículo.

### 4.3 Usar fonte única sem criar arquivo único gigante

- [recomendação] Fonte única significa **autoridade clara**, não um único documento físico.
- [recomendação] Guardar projeto uma vez e referenciá-lo nos materiais derivados.
- [recomendação] Manter índice leve com links para documentos canônicos.
- [recomendação] Evitar repetir métricas em vários arquivos editáveis, onde podem divergir.
- [recomendação] Usar notas de síntese para leitura rápida e arquivos detalhados para evidência.

### 4.4 Definir ciclo de vida de informação

```text
CAPTURADO
  ↓ validar fonte e contexto
EM_VERIFICAÇÃO
  ↓ confirmado
CANÔNICO
  ↓ aprovado para canal
PUBLICÁVEL
  ↓ alteração factual
REVISÃO_NECESSÁRIA
  ↓ revalidar
CANÔNICO / ARQUIVADO
```

**[recomendação]** Estados acima são modelo sugerido, não schema já aprovado. Dados incompletos devem permanecer identificados como incompletos.

### 4.5 Projetar para portabilidade

- [recomendação] Preferir Markdown e YAML simples a estruturas proprietárias desnecessárias.
- [recomendação] Usar IDs estáveis para documentos e relações.
- [recomendação] Guardar decisões importantes no vault, não apenas na conversa.
- [recomendação] Produzir handoff com estado, pendências, fontes e próximo passo.
- [recomendação] Não presumir que uma sessão de IA terá acesso a todos os arquivos.

### 4.6 Testar o sistema por tarefas reais

**[recomendação]** Antes de ampliar a arquitetura, testar três cenários:

- Uma vaga claramente incompatível deve ser rejeitada rapidamente, com motivo.
- Uma vaga boa deve gerar análise e CV adaptado sem inventar experiência.
- Uma nova evidência de projeto deve atualizar as referências corretas sem criar contradições.

Se esses cenários falham, mais pastas ou regras provavelmente não resolverão o problema.

## 5. Dicas de estruturação de regras eficientes

### 5.1 Toda regra precisa responder a cinco perguntas

1. **Quando se aplica?**
2. **O que fazer?**
3. **O que não fazer?**
4. **Qual é a exceção?**
5. **Como verificar o resultado?**

**Exemplo de regra bem definida**

```yaml
id: RULE-CLAIM-001
titulo: Não atribuir autoria sem evidência
gatilho: criação_ou_revisao_de_material_publico
acao: verificar_papel_real_e_evidencia
proibido: ampliar_escopo_ou_senioridade_sem_confirmacao
excecao: nenhuma_sem_aprovacao_explicita
verificacao: claim_rastreavel_a_fonte
prioridade: critica
status: exemplo_nao_aprovado
```

### 5.2 Distinguir regras de princípios e preferências

| Tipo | Exemplo | Tratamento |
|---|---|---|
| Regra obrigatória | Não inventar métricas | Bloqueia publicação |
| Princípio | Preservar contexto factual | Orienta julgamento |
| Preferência | Evitar dois-pontos no About | Aplicar ao canal específico |
| Heurística | Preferir 3–5 parágrafos | Flexível conforme resultado |
| Exceção | LinkedIn mantém experiências antigas | Sobrescreve heurística geral de concisão |

**[recomendação]** Não transformar toda preferência estilística em regra global. “Evitar dois-pontos no About” não significa proibir dois-pontos em YAML, documentação ou mensagens técnicas.

### 5.3 Usar hierarquia de prioridade

```text
P0 — Segurança, privacidade, veracidade, integridade de dados.
P1 — Requisitos do usuário, critérios eliminatórios e conclusão da tarefa.
P2 — Qualidade funcional, clareza e adequação ao canal.
P3 — Estilo, concisão e refinamentos cosméticos.
```

**[recomendação]** Em conflito, resolver o nível superior primeiro. Uma correção P3 não deve reabrir uma entrega P1 aprovada sem ganho material.

### 5.4 Evitar duplicação e contradição

- [recomendação] Uma regra tem um único local canônico.
- [recomendação] Outros documentos apontam para ela, em vez de reescrevê-la.
- [recomendação] Regras com escopo diferente devem declarar esse escopo.
- [recomendação] Toda alteração de regra deve considerar quais fluxos dependem dela.

### 5.5 Não deixar protocolos virarem burocracia

**[inferido]** Parte do atrito vivido na etapa 7.3 veio de várias rodadas de aprovação para alterações editoriais pequenas.

**[recomendação]** Aplicar “orçamento de revisão”:

```text
1. Identificar erros factuais ou de escopo.
2. Corrigir todos em uma rodada.
3. Fazer uma revisão única de linguagem e legibilidade.
4. Aprovar se cumprir os critérios essenciais.
5. Registrar melhorias opcionais sem bloquear conclusão.
```

Exceções: risco jurídico, confidencialidade, atribuição indevida de resultados ou dados materialmente incorretos.

## 6. Dicas de construção de prompts

### 6.1 Estrutura mínima de um bom prompt operacional

**[recomendação]** Um prompt reutilizável deve conter:

1. Papel e objetivo.
2. Fontes que precisam ser consultadas.
3. Escopo e limites.
4. Critérios de qualidade.
5. Formato de entrega.
6. Critério de parada.
7. Política de atualização e aprovação, se houver escrita.

**Template completo**

```text
TAREFA
[Uma frase com o resultado desejado.]

CONTEXTO
[Projeto, etapa atual, decisões já aprovadas e restrições relevantes.]

FONTES
Consulte primeiro:
- [arquivo canônico A]
- [arquivo canônico B]
Se uma fonte estiver indisponível, sinalize. Não presuma conteúdo.

REGRAS
- Não invente informações.
- Diferencie fatos, declarações e inferências.
- Preserve decisões já aprovadas.
- Não reabra questões cosméticas sem ganho material.
- Não altere arquivos sem seguir o protocolo de escrita.

EXECUÇÃO
1. Verifique somente o necessário.
2. Identifique bloqueios reais.
3. Produza uma recomendação principal.
4. Faça alterações somente quando autorizadas.

SAÍDA
- Resultado final pronto para uso.
- Alterações realizadas ou propostas.
- Pendências realmente bloqueantes.
- Próximo passo concreto.

CRITÉRIO DE PARADA
Encerre quando o resultado estiver factualmente correto,
adequado ao canal e pronto para a próxima etapa.
Não gere rodadas extras de polimento por iniciativa própria.
```

### 6.2 Prompts de leitura, decisão e escrita são tarefas diferentes

**[recomendação]** Separar em fases apenas quando houver benefício:

```text
LEITURA: encontre evidências e conflitos, sem editar.
DECISÃO: recomende caminho, justifique brevemente e indique bloqueios.
ESCRITA: aplique exclusivamente as decisões aprovadas.
VERIFICAÇÃO: confira destino real, conteúdo e changelog.
```

**[recomendação]** Para tarefas pequenas, combinar fases em um único prompt, mantendo as mesmas verificações internamente.

### 6.3 Prompt para evitar retrabalho editorial

```text
Revise o texto somente em relação a:
1. precisão factual;
2. adequação ao público e canal;
3. clareza e naturalidade;
4. riscos de interpretação.

Classifique achados em:
- bloqueante;
- melhoria relevante;
- opcional.

Corrija os bloqueantes e as melhorias relevantes em uma única versão.
Não proponha alternativas cosméticas nem solicite aprovação para
microajustes que não alterem o significado.
Ao final, diga apenas se está pronto ou o que realmente impede concluir.
```

### 6.4 Prompt de extração de conhecimento de uma conversa

```text
Extraia desta conversa:
- fatos confirmados;
- decisões tomadas;
- justificativas explicitadas;
- preferências do usuário;
- inferências do assistente;
- questões não resolvidas;
- arquivos que precisam de atualização.

Para cada item, indique origem e confiança.
Não converta inferências em fatos.
Não altere o vault ainda.
Sugira somente os arquivos canônicos que devem receber cada informação.
Evite duplicar conteúdo já existente.
```

### 6.5 Prompt de handoff entre sessões ou assistentes

```text
Crie um handoff autossuficiente com:
1. objetivo do trabalho;
2. arquivos canônicos envolvidos;
3. decisões já aprovadas;
4. artefatos produzidos e seu status real;
5. alterações feitas e onde foram gravadas;
6. conflitos e pendências;
7. próxima ação mínima.

Diferencie:
- arquivo escrito em cópia temporária;
- arquivo gravado no vault real;
- arquivo verificado pela usuária.

Não declare "concluído" sem evidência de entrega no destino correto.
```

### 6.6 Como reduzir consumo de contexto

- [recomendação] Pedir leitura seletiva por índice, não leitura integral do vault em toda tarefa.
- [recomendação] Usar documentos mestres curtos para orientar onde buscar.
- [recomendação] Manter prompts autossuficientes quando abrir uma nova sessão.
- [recomendação] Não colar longas versões anteriores quando a versão atual está em arquivo acessível.
- [recomendação] Exigir que o assistente sinalize fontes indisponíveis em vez de reconstruí-las de memória.

### 6.7 Antipadrões de prompts observados

| Antipadrão | Consequência | Alternativa |
|---|---|---|
| “Revise tudo até ficar perfeito” | Iteração sem fim | Critérios de aprovação e parada |
| “Use todo o meu contexto” | Texto longo e pouco seletivo | Selecionar evidências por finalidade |
| “Atualize o vault” sem destino verificável | Escrita em cópia temporária | Caminho real e verificação |
| “Otimize para ATS” sem limites | Keywords forçadas | Precisão factual primeiro |
| “Faça todas as perguntas necessárias” | Questionário extenso | Perguntar só bloqueios |
| “Escreva como meu currículo” para LinkedIn | Tom impessoal e inventário de métricas | Regras por canal |

## 7. Dicas para planejar projetos complexos

### 7.1 Trabalhar com entregáveis e critérios de saída

**[recomendação]** Cada etapa do ROADMAP deve ter:

```yaml
etapa: "7.X"
objetivo: "Resultado verificável"
dependencias:
  - "Artefato ou decisão necessária"
entregaveis:
  - "Arquivo ou alteração concreta"
criterios_de_saida:
  - "O que precisa estar correto"
  - "Como verificar"
bloqueios:
  - "Somente dependências reais"
fora_do_escopo:
  - "O que não será resolvido agora"
status: "nao_iniciado"
```

Esse é um **modelo sugerido**, não a estrutura oficial atual do ROADMAP.

### 7.2 Separar caminho crítico de melhorias paralelas

- [dito] Julia queria concluir LinkedIn e Gupy sem desviar para grande reestruturação da base.
- [inferido] A criação de uma página de estilo de trabalho é útil, mas não precisa bloquear a publicação do About.
- [recomendação] Manter um caminho crítico curto e uma fila de melhorias não bloqueantes.

**Exemplo**

```text
CAMINHO CRÍTICO
LinkedIn → Gupy → candidaturas

FILA PARALELA
Registrar estilo de trabalho
Revisar tags secundárias
Reorganizar arquivos antigos
Aprimorar templates opcionais
```

### 7.3 Usar validação proporcional ao risco

| Tipo de alteração | Exemplo | Validação sugerida |
|---|---|---|
| Alta criticidade | Salário, cargo, métrica, privacidade | Fonte + aprovação |
| Média criticidade | Headline, posicionamento | Uma revisão consolidada |
| Baixa criticidade | Pontuação e fluidez | Ajuste direto, sem nova rodada |

**[recomendação]** O custo de validação deve acompanhar o risco de erro, não o número de palavras alteradas.

### 7.4 Planejar com dependências reais, não imaginadas

- [recomendação] Perguntar “o que impede tecnicamente esta etapa?” antes de criar uma dependência.
- [recomendação] Se algo pode ser concluído com dados atuais, concluir e registrar melhoria futura.
- [recomendação] Não exigir atualização de todo o Career OS para editar uma seção do LinkedIn.

### 7.5 Usar decisões reversíveis a favor da velocidade

- [recomendação] Diferenciar decisões fáceis de reverter (texto temporário de About) de decisões com alto custo (excluir arquivos, divulgar dado confidencial).
- [recomendação] Para decisões reversíveis, preferir versão boa e publicável a refinamento ilimitado.
- [recomendação] Para decisões irreversíveis, investir mais na checagem.

### 7.6 Definir encerramento de etapa com verificação externa

**Lição da etapa 7.3**

- [dito] O Claude relatou arquivo criado, mas Julia não o encontrou no Obsidian.
- [dito] Depois foi identificada diferença entre cópia de sessão e vault local.
- [dito] A confirmação manual do destino foi necessária.

**[recomendação] Checklist de conclusão**

```text
[ ] Entregável existe.
[ ] Conteúdo corresponde à versão aprovada.
[ ] Caminho de destino é o canônico.
[ ] Escrita ocorreu no repositório real, não em cópia temporária.
[ ] Estado do ROADMAP foi atualizado quando cabível.
[ ] Mudança foi registrada conforme protocolo.
[ ] Usuária recebeu informação clara sobre o que foi concluído.
```

## 8. Como eu melhoraria o modo de colaboração com assistentes

### 8.1 Contrato de resposta sugerido

**[recomendação]** Para tarefas do Career OS:

```text
Seja objetivo, mas não superficial.
Dê uma recomendação principal.
Questione fatos relevantes; não reabra escolhas editoriais aprovadas.
Faça perguntas apenas quando a resposta mudar o resultado.
Quando o trabalho envolver Claude, entregue no final o prompt pronto.
Distinga proposta, execução e verificação.
Não declare sucesso sem confirmação do destino.
```

### 8.2 Critério para interromper uma análise

**[recomendação]** Perguntar:

> “Se eu continuar refinando isso por mais 30 minutos, qual erro concreto vou evitar ou qual resultado relevante vou melhorar?”

Se a resposta for apenas “talvez soe um pouco melhor”, registrar como opcional e seguir.

### 8.3 Quando usar documento separado

Criar documento novo quando pelo menos uma condição ocorrer:

- [recomendação] O conteúdo tem função diferente dos arquivos existentes.
- [recomendação] Será reutilizado em múltiplas etapas.
- [recomendação] Tem política de privacidade ou atualização própria.
- [recomendação] Misturá-lo a outro documento prejudicaria recuperação e manutenção.

**Aplicação:** o estilo de trabalho merece registro separado porque pode apoiar LinkedIn, entrevistas, cultura de empresas e desenvolvimento profissional. Não é apenas material para o About.

## 9. Recomendações que NÃO devem virar regras automaticamente

- [recomendação] Número fixo de parágrafos do About.
- [recomendação] Usar exatamente 50 skills no LinkedIn.
- [recomendação] Priorizar sempre pesquisa quantitativa ou qualitativa.
- [recomendação] Fazer entrevistas com usuários em todo projeto.
- [recomendação] Usar o mesmo método de discovery para toda demanda.
- [recomendação] Criar arquivo novo para cada observação.
- [recomendação] Exigir confirmação humana para toda correção de pontuação.
- [recomendação] Assumir que o algoritmo de recrutamento tem pesos públicos conhecidos.

**[inferido]** A preferência da usuária por sistemas robustos não significa preferência por sistemas rígidos. A estrutura deve apoiar julgamento, não substituí-lo.

## 10. Modelo compacto de registro de decisões futuras

**[recomendação]** Usar somente para decisões com impacto relevante.

```markdown
## DEC-XXXX — [Título]

- Data: AAAA-MM-DD
- Estado: proposta | aprovada | substituída
- Origem: [dito] | [inferido] | [recomendação]
- Contexto: [problema que exigiu decisão]
- Decisão: [o que foi escolhido]
- Evidência: [fonte ou observação]
- Por quê: [justificativa em 1–3 frases]
- Alternativas: [somente as consideradas]
- Consequência: [o que muda]
- Revisitar quando: [gatilho concreto, se existir]
```

**[recomendação]** Não usar esse registro para cada microajuste de redação. Registrar decisões estruturais, de posicionamento, privacidade, escopo e workflow.

## 11. Síntese de princípios transferíveis

1. **[inferido]** Uma base rica deve produzir interações simples.
2. **[recomendação]** Evidência e interpretação precisam continuar distinguíveis.
3. **[recomendação]** A forma de apresentação deve depender do canal e da audiência.
4. **[recomendação]** Uma regra eficiente especifica gatilho, ação, exceção e verificação.
5. **[recomendação]** Um prompt eficiente define resultado, fontes, limites, formato e parada.
6. **[recomendação]** Uma etapa de projeto só está concluída quando o resultado existe no destino correto.
7. **[recomendação]** Refinamento deve ser proporcional ao impacto, não à disponibilidade de tempo.
8. **[inferido]** Preservar a história completa e selecionar o que comunicar são objetivos compatíveis.
9. **[recomendação]** Sistemas bons toleram informação incompleta sem transformá-la em certeza.
10. **[recomendação]** A IA deve facilitar decisões humanas, não criar uma nova camada de burocracia.

## 12. Limites e pontos para validar

- [inferido] As interpretações sobre preferências são leituras da conversa, não atributos permanentes ou universais.
- [inferido] Não foi feita pesquisa externa para este documento; as dicas são recomendações metodológicas derivadas do histórico e de princípios gerais de organização de informação.
- [dito] A usuária indicou que o CV EN ainda será finalizado em outro sistema; este documento não o trata como concluído.
- [inferido] Exemplos de YAML, regras e prompts aqui são **propostas**, não arquivos implementados.
- [inferido] Não houve acesso ao vault atual do Obsidian nesta elaboração; o documento não certifica o estado de sincronização de arquivos.

**FIM DO DOCUMENTO**
