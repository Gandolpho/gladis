---
name: ux-synthesis
description: Analisa dados brutos de pesquisa presentes no diretório para gerar User Personas, Mapa de Jornada do Usuário e um Product Requirement Document (PRD) em Markdown. Use sempre que o usuário pedir para sintetizar pesquisa de UX, transformar entrevistas, notas de teste de usabilidade, respostas de survey ou especificações em personas, jornada ou PRD, ou disser coisas como "analisa essas entrevistas", "o que a pesquisa diz", "monta as personas", "escreve o PRD a partir da pesquisa" — mesmo que cite só um dos três entregáveis. Prefira esta skill a uma síntese genérica quando o resultado precisar virar requisitos de produto.
---

# UX Synthesis

Transforma pesquisa bruta em três entregáveis encadeados: **personas → jornada → PRD**. O valor está na rastreabilidade: cada persona, dor e requisito aponta para a evidência que o sustenta. Um PRD com métricas ou personas inventadas é pior que nenhum, porque o time vai construir em cima dele com confiança. Por isso a regra que atravessa tudo: **o que não está nos dados vira pergunta ou lacuna marcada, nunca afirmação.**

Escreva o relatório no idioma dos dados de pesquisa (padrão: português do Brasil).

## Passo 0 — Encontrar os dados

Procure no diretório do projeto (recursivamente) arquivos que pareçam pesquisa:

- Texto: `.md`, `.txt`, `.docx`, `.pdf`, transcrições `.vtt`/`.srt`
- Tabelas de survey: `.csv`, `.xlsx`
- Pistas no nome ou na pasta: entrevista, interview, transcri, pesquisa, research, survey, teste, usabilidade, notas, spec, brief

Ignore `node_modules`, `.git`, código-fonte, builds e qualquer `ux-synthesis-report.md` anterior (é saída, não fonte).

Liste para o usuário o que encontrou (arquivo + tipo + uma linha do que parece ser) antes de analisar. Se algo parecer não ser pesquisa, pergunte se entra.

**Se não houver dados de pesquisa**, pare e peça: "Não encontrei dados de pesquisa nesta pasta. Pode colar os resumos ou transcrições aqui, ou me dizer onde estão os arquivos?" Não gere personas a partir de suposições sobre o produto.

## Passo 1 — Análise e ingestão

Leia todas as fontes e extraia, para cada uma:

- **Quem**: participante anonimizado (P1, P2…), segmento, contexto de uso. Não copie nomes reais, e-mails, telefones ou documentos para o relatório — a pesquisa é sobre padrões, e o relatório circula mais que os dados brutos.
- **Dores, necessidades, objetivos, comportamentos e citações marcantes** (citações curtas, até ~2 frases, com a fonte).

Depois agrupe por afinidade em **insights**. Para cada insight, registre quantas fontes o sustentam e marque a força da evidência:

| Força | Critério |
|---|---|
| **Forte** | 3+ participantes/fontes independentes, ou dado quantitativo de survey |
| **Moderada** | 2 fontes |
| **Fraca** | 1 fonte, ou inferência sua a partir de indícios |

Insights fracos podem entrar, mas sempre rotulados — eles são candidatos a validar, não base para requisito obrigatório.

Para surveys, use os números exatamente como estão (n, percentuais). Não extrapole amostras pequenas ("3 de 5 respondentes", não "60% dos usuários").

## Passo 2 — Personas (2 a 4)

Cada persona é um **padrão** que aparece em pelo menos 2 participantes, não um participante disfarçado. Crie entre 2 e 4. Se os dados só sustentarem 1 segmento distinto, crie 1 e diga explicitamente que a amostra não permite separar mais — inventar uma segunda persona para cumprir a cota é exatamente o tipo de ficção que esta skill evita.

Cada persona contém: perfil, objetivos centrais, pain points, comportamentos, nível de conhecimento técnico e "Baseada em: P1, P4, P6". Nome e foto fictícios são aceitáveis como recurso de memorização; idade, cargo e demais atributos só se vierem dos dados (senão, "não informado").

## Passo 3 — Mapa de jornada

Mapeie o **fluxo principal** do produto (o que mais aparece nos dados). Se houver mais de um fluxo relevante, faça o principal e liste os outros como candidatos. Se as personas tiverem jornadas muito diferentes, indique na tabela onde divergem.

Para cada etapa: Ações do usuário · Pensamentos/Sentimentos · Pontos de fricção · Oportunidades de design. Cite a evidência nas fricções (ex.: "P2, P5"). Oportunidades são propostas suas — escreva-as como tal.

## Passo 4 — PRD

Siga a estrutura em `references/report-template.md`. Regras que mantêm o PRD honesto:

- **Problema**: derivado dos insights fortes/moderados, com a evidência citada.
- **Métricas**: proponha métricas que meçam o problema, mas **não invente baselines nem metas numéricas**. Use `[baseline: a levantar]` e `[meta: a definir com o time]` quando os dados não trouxerem números.
- **Requisitos funcionais**: cada um com ID (RF-01…), prioridade (Must/Should/Could), persona(s) atendida(s) e insight de origem. Um requisito sem insight de origem não entra — ou vai para "Ideias sem evidência" ao final.
- **Requisitos não-funcionais**: Acessibilidade (WCAG 2.2 nível AA como padrão), privacidade (LGPD, quando houver dados pessoais — e em produtos BR quase sempre há) e desempenho. Valores de referência de mercado (ex.: Core Web Vitals) podem entrar marcados como "referência, validar com engenharia".
- **Escopo e casos de borda**: in-scope / out-of-scope com justificativa curta; casos de borda vindos dos dados (falhas, exceções relatadas) e os que a jornada sugere (estado vazio, erro, conexão ruim, permissões).

## Passo 5 — Lacunas e perguntas de clarificação

Antes de dar o relatório por concluído, verifique se faltam dados **críticos** para escopo ou métricas — por exemplo: qual o objetivo de negócio, qual segmento priorizar, se há restrição de prazo/plataforma, qual a métrica que o time já acompanha.

Se faltar, faça **no máximo 3 perguntas**, as mais decisivas, e espere a resposta. Se o usuário responder, incorpore. Se disser para seguir sem, mantenha as lacunas marcadas como `PENDENTE` no relatório e liste-as na seção "Perguntas em aberto". Perguntar menos é melhor que perguntar tudo: escolha as que mudam o PRD.

## Entregável

Salve `ux-synthesis-report.md` na raiz do projeto (se já existir, pergunte se sobrescreve ou salva como `ux-synthesis-report-<data>.md`). Estrutura completa em `references/report-template.md` — leia antes de escrever.

Ao terminar, diga ao usuário em poucas linhas: onde está o arquivo, quantas fontes foram usadas, os 3 insights mais fortes e o que ficou pendente.
