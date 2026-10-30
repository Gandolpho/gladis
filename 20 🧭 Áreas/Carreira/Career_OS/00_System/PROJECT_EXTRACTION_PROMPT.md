# PROJECT EXTRACTION PROMPT
## Objetivo
Use este prompt ao final de um projeto ou quando houver contexto profissional relevante acumulado nesta conversa.
Sua tarefa é analisar TODO o histórico disponível desta conversa relacionado ao projeto e produzir um documento estruturado de transferência de contexto para o meu Career OS.
O objetivo não é escrever currículo, LinkedIn, case de portfólio ou material promocional.
O objetivo é extrair fatos, decisões, responsabilidades, processos, resultados, evidências e possíveis competências de forma confiável, para que outra IA possa posteriormente reconciliar essas informações com minha base profissional.
---
# PRINCÍPIOS OBRIGATÓRIOS
## 1. Use apenas informações sustentadas pela conversa
Não invente informações.
Não complete lacunas usando conhecimento genérico sobre Product Design, UX, a empresa, o produto ou o mercado.
Não presuma que uma atividade normalmente realizada por Product Designers foi realizada por mim.
Se uma informação não puder ser determinada, marque:
`UNKNOWN`
e explique o que falta saber.
---
## 2. Diferencie claramente fato, declaração, inferência e hipótese
Classifique informações relevantes quando necessário como:
### FACT
Informação explicitamente estabelecida na conversa como algo que aconteceu.
### USER_CLAIM
Informação declarada por mim sobre minha própria atuação, mas sem outra evidência disponível nesta conversa.
Não significa que seja falsa. Serve apenas para preservar a origem da informação.
### INFERENCE
Conclusão razoável derivada de fatos disponíveis, mas que não foi explicitamente declarada.
Toda INFERENCE deve indicar quais fatos a sustentam.
### HYPOTHESIS
Interpretação possível que ainda precisa ser validada.
### UNKNOWN
Informação que não pode ser determinada com segurança.
Nunca transforme INFERENCE ou HYPOTHESIS em FACT.
---
## 3. Diferencie intenção de execução
Conversas de projeto frequentemente incluem:
- ideias;
- alternativas;
- propostas;
- hipóteses;
- sugestões da IA;
- decisões preliminares;
- funcionalidades consideradas;
- soluções descartadas.
Não trate algo como implementado apenas porque foi discutido.
Sempre que possível, diferencie:
`IDEA`
`PROPOSED`
`VALIDATED`
`APPROVED`
`DESIGNED`
`DEVELOPED`
`RELEASED`
`MEASURED`
Se o estado não puder ser determinado, use `UNKNOWN`.
---
## 4. Diferencie autoria e participação
Não atribua automaticamente a mim tudo que aparece nesta conversa.
Sempre que possível, diferencie:
- decisão minha;
- trabalho executado por mim;
- trabalho realizado em colaboração;
- decisão de PM/PO;
- decisão de liderança;
- decisão de engenharia;
- demanda de cliente;
- requisito de negócio;
- sugestão da IA;
- informação apenas recebida por mim.
Se a autoria estiver ambígua, marque como `UNKNOWN`.
Isso é especialmente importante para decisões estratégicas, métricas, pesquisas, arquitetura, regras de negócio e resultados.
---
## 5. Diferencie output de outcome
### OUTPUT
Algo produzido ou entregue.
Exemplos:
- fluxo;
- protótipo;
- pesquisa;
- documentação;
- interface;
- teste de usabilidade;
- nova regra;
- apresentação.
### OUTCOME
Mudança observável causada ou associada ao trabalho.
Exemplos:
- aumento de conversão;
- redução de erros;
- aumento de adoção;
- redução de chamados;
- redução de risco;
- economia de tempo;
- mudança de comportamento;
- impacto financeiro.
Nunca transforme output em outcome.
Se o projeto foi entregue mas o resultado não foi medido, diga explicitamente:
`Outcome não disponível ou não medido.`
---
## 6. Preserve números exatamente
Não arredonde, extrapole ou transforme números sem necessidade.
Para qualquer métrica encontrada, registre:
- valor;
- unidade;
- período;
- contexto;
- origem dentro da conversa;
- se é histórico ou atual;
- se representa baseline, meta, resultado ou estimativa.
Se alguma dessas informações não estiver disponível, marque a lacuna.
---
## 7. Não transforme linguagem de currículo em evidência automaticamente
Frases genéricas como:
- "liderei";
- "otimizei";
- "melhorei";
- "gerei impacto";
- "aumentei eficiência";
- "reduzi riscos";
- "atuei estrategicamente";
não devem ser aceitas isoladamente como evidência.
Procure fatos concretos que sustentem a afirmação.
Caso não existam, registre a afirmação como USER_CLAIM ou INFERENCE, conforme o contexto.
---
# PROCESSO DE ANÁLISE
Antes de produzir o documento:
1. Analise todo o contexto relevante disponível nesta conversa.
2. Identifique as diferentes fases do projeto.
3. Separe decisões finais de alternativas descartadas.
4. Identifique explicitamente minha participação.
5. Procure números, métricas, resultados e feedbacks.
6. Procure decisões em que eu tenha influenciado escopo, regras, experiência ou direção da solução.
7. Identifique colaboração com clientes, engenharia, produto, design e outras áreas.
8. Identifique possíveis competências demonstradas.
9. Procure contradições dentro da própria conversa.
10. Identifique informações importantes que continuam ausentes.
Não faça uma análise baseada apenas nas mensagens mais recentes.
---
# FORMATO DE SAÍDA
Produza o documento nas seções abaixo.
# 1. IDENTIFICAÇÃO DO PROJETO
**Nome do projeto:**
**Empresa:**
**Produto/área:**
**Período:**
**Status atual:**
**Meu papel:**
**Contexto resumido:**
**Problema original:**
**Objetivos do projeto:**
Quando alguma informação não estiver disponível, use `UNKNOWN`.
---
# 2. CONTEXTO E PROBLEMA
Explique:
- qual problema motivou o projeto;
- quem era afetado;
- quais necessidades de usuário existiam;
- quais necessidades de negócio existiam;
- quais restrições técnicas ou operacionais existiam;
- quais riscos estavam envolvidos;
- quais hipóteses iniciais existiam.
Separe fatos de interpretações.
---
# 3. MINHA RESPONSABILIDADE
Liste apenas responsabilidades sustentadas pela conversa.
Para cada responsabilidade relevante, indique quando possível:
**Responsabilidade:**
**Tipo de participação:**
- responsável principal;
- colaboração;
- apoio;
- influência;
- UNKNOWN.
**Evidência/contexto que sustenta essa atribuição:**
Não infira ownership apenas pelo meu cargo.
---
# 4. PROCESSO DE DESIGN E PRODUTO
Identifique quais atividades realmente ocorreram.
Considere, quando aplicável:
- Product Discovery;
- definição do problema;
- desk research;
- benchmarking;
- entrevistas;
- surveys;
- análise quantitativa;
- análise de dados;
- card sorting;
- testes de usabilidade;
- síntese de pesquisa;
- arquitetura da informação;
- fluxos;
- wireframes;
- prototipação;
- Interaction Design;
- UX Writing;
- regras de negócio;
- validação com clientes;
- validação técnica;
- handoff;
- acompanhamento com desenvolvimento;
- acompanhamento pós-lançamento.
Não inclua métodos apenas porque seriam adequados ao projeto.
---
# 5. DECISÕES IMPORTANTES
Para cada decisão relevante, use:
## Decisão [n]
**Problema:**
**Alternativas consideradas:**
**Decisão tomada:**
**Meu papel na decisão:**
**Critérios utilizados:**
**Trade-offs:**
**Restrições consideradas:**
**Riscos considerados:**
**Resultado conhecido:**
**Classificação:** FACT / USER_CLAIM / INFERENCE / HYPOTHESIS
Priorize decisões que demonstrem raciocínio de produto, e não apenas escolhas visuais.
---
# 6. REGRAS DE NEGÓCIO E COMPLEXIDADE
Liste regras de negócio relevantes identificadas no projeto.
Inclua, quando aplicável:
- dependências;
- exceções;
- estados;
- permissões;
- regras financeiras;
- regras contratuais;
- recorrência;
- cancelamento;
- pagamentos;
- configurações;
- consequências em outras áreas do produto;
- impactos sistêmicos.
Explique quais dessas regras foram apenas recebidas como requisito e quais tiveram participação minha na definição ou estruturação.
---
# 7. STAKEHOLDERS E COLABORAÇÃO
Identifique stakeholders mencionados, como:
- clientes;
- usuários;
- Product Manager / Product Owner;
- engenharia;
- Design;
- liderança;
- suporte;
- comercial;
- financeiro;
- jurídico;
- outras áreas.
Para cada relação relevante, descreva como ocorreu a interação.
Destaque separadamente situações em que eu:
- conduzi reuniões;
- conduzi entrevistas;
- conduzi testes;
- apresentei propostas;
- defendi uma decisão;
- negociei trade-offs;
- influenciei escopo;
- validei hipóteses diretamente com clientes;
- facilitei alinhamentos entre áreas.
---
# 8. OUTPUTS
Liste entregáveis efetivamente produzidos.
Para cada um:
**Output:**
**Minha participação:**
**Status:** PROPOSED / VALIDATED / APPROVED / DESIGNED / DEVELOPED / RELEASED / UNKNOWN
---
# 9. RESULTADOS E OUTCOMES
Separe em:
## Resultados quantitativos
Para cada métrica:
**Métrica:**
**Valor:**
**Período:**
**Contexto:**
**Baseline/meta/resultado:**
**Relação com o projeto:**
**Confiança:**
## Resultados qualitativos
Inclua:
- feedbacks;
- mudanças de decisão;
- adoção observada;
- validações;
- reconhecimento;
- mudanças operacionais;
- redução de risco demonstrável.
## Resultados não disponíveis
Liste outcomes importantes que ainda não foram medidos ou aos quais não tenho acesso.
Não invente impacto.
---
# 10. POSSÍVEIS EVIDÊNCIAS PARA O CAREER OS
Identifique fatos que possam justificar uma Evidence estruturada.
Para cada candidato:
## Evidence Candidate [n]
**Tipo:**
- METRIC
- IMPACT
- DECISION
- FEEDBACK
- RECOGNITION
- OTHER
**Fato:**
**Contexto:**
**O que demonstra:**
**Fonte dentro da conversa:**
**Força:** alta / média / baixa
**Confidence:** confirmed / derived / unverified
**Output ou outcome:**
**Possível uso externo:** PUBLIC / CV_OK / INTERVIEW_ONLY / CONFIDENTIAL / UNKNOWN
Não crie IDs `EVD-*`. O Career OS decidirá posteriormente se a evidência deve ser criada e qual ID utilizar.
---
# 11. COMPETÊNCIAS CANDIDATAS
Não declare automaticamente que possuo uma competência apenas porque ela parece compatível com o projeto.
Para cada relação candidata:
**Skill candidata:**
**Fato que sustenta a associação:**
**Projeto ou experiência relacionada:**
**Força da relação:** alta / média / baixa
**Recorrência:** caso pontual / recorrente neste projeto / UNKNOWN
**Classificação:** FACT / USER_CLAIM / INFERENCE
**Justificativa:**
Considere especialmente competências relacionadas a:
- Product Design;
- Research;
- Product Strategy;
- Business;
- AI;
- colaboração e facilitação.
Não crie novas Skills apenas para encaixar uma atividade. Apenas sinalize possíveis lacunas na taxonomia.
---
# 12. PRIVACIDADE E USO EXTERNO
Classifique informações sensíveis encontradas.
Use:
### PUBLIC
Pode ser publicada abertamente.
### CV_OK
Pode ser usada em currículo e materiais de candidatura.
### INTERVIEW_ONLY
Pode ser discutida em processos seletivos, mas não deveria ficar publicada.
### CONFIDENTIAL
Não deve ser utilizada externamente.
### UNKNOWN
Precisa de decisão antes de qualquer uso externo.
Preste atenção especial a:
- métricas internas;
- receita;
- TPV;
- conversão;
- quantidade de clientes;
- nomes de clientes;
- informações estratégicas;
- decisões ainda não lançadas;
- funcionamento interno;
- dados de usuários.
Quando houver dúvida, prefira `UNKNOWN`, não PUBLIC.
---
# 13. CONTRADIÇÕES E AMBIGUIDADES
Liste qualquer situação em que:
- duas mensagens tragam informações diferentes;
- autoria esteja ambígua;
- uma proposta possa ter sido confundida com decisão final;
- uma funcionalidade possa ter sido confundida com algo lançado;
- uma métrica esteja sem contexto;
- uma afirmação pareça mais forte do que os fatos disponíveis.
Para cada item, explique o conflito.
---
# 14. INFORMAÇÕES AUSENTES
Liste informações que seriam valiosas para o Career OS, mas não podem ser determinadas pela conversa.
Priorize perguntas sobre:
- datas;
- autoria;
- responsabilidades;
- métodos;
- usuários;
- stakeholders;
- decisões;
- métricas;
- outcomes;
- lançamento;
- impacto;
- feedbacks.
Não faça perguntas apenas para completar burocraticamente o documento.
---
# 15. PERGUNTAS PARA JULIA
Transforme apenas as lacunas realmente relevantes em perguntas objetivas.
Agrupe perguntas relacionadas.
Priorize aquelas cuja resposta poderia:
1. criar uma Evidence forte;
2. confirmar uma competência;
3. esclarecer autoria;
4. diferenciar output de outcome;
5. tornar um case mais forte;
6. permitir uso externo de uma informação.
---
# 16. HANDOFF PARA O CAREER OS
Finalize com uma seção compacta destinada especificamente à IA responsável pelo Career OS.
## Fatos novos
Liste apenas fatos que parecem suficientemente sustentados para possível incorporação.
## Complementos a registros existentes
Indique quais informações provavelmente complementam Projects, Experiences ou Profile existentes.
## Competências candidatas
Liste Skill → relação proposta → força → fundamento.
## Evidence candidates
Liste os candidatos mais relevantes.
## Métricas e outcomes
Liste separadamente métricas confirmadas, outcomes qualitativos e resultados ainda não medidos.
## Possíveis correções
Liste informações que podem contradizer ou corrigir registros anteriores.
## Privacidade
Liste qualquer informação que exija cuidado especial.
## Pendências
Liste o que precisa ser confirmado por Julia antes da integração.
## Potencial para materiais de carreira
Separe:
**CV**
Fatos/resultados potencialmente úteis para currículo.
**LinkedIn**
Informações que podem enriquecer posicionamento ou descrição de experiência.
**Portfólio**
Decisões, processo, trade-offs e resultados que podem fortalecer um case.
**Entrevistas**
Histórias ou exemplos que podem funcionar bem como respostas comportamentais ou discussão aprofundada de projetos.
Essas são sugestões editoriais, não novos fatos.
---
# REGRAS FINAIS
- Não escreva ou atualize o Career OS.
- Não crie IDs definitivos.
- Não transforme este documento em currículo ou case.
- Não tente deixar minha atuação mais impressionante.
- Não reduza minha atuação por causa do meu cargo formal.
- Não use cargo como proxy de senioridade.
- Não confunda participação com ownership.
- Não confunda proposta com implementação.
- Não confunda implementação com resultado.
- Não confunda correlação com impacto causado pelo projeto.
- Não confunda validação interna de alternativas com A/B testing.
- Não transforme uso de IA durante o processo em experiência profissional de AI Product Design, a menos que o próprio produto projetado tenha componente de IA.
- Preserve nuances e incertezas.
- Prefira informação verificável a linguagem promocional.
- Quando houver dúvida, sinalize a dúvida.
O documento deve ser detalhado o suficiente para que outra IA consiga integrar o projeto ao Career OS sem precisar ler toda esta conversa, mas não deve repetir informações sem necessidade.
