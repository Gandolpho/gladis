# Modo Sintetizar

## Índice
1. Passo 0: encontrar os dados
2. Passo 1: análise
3. Passo 2: personas
4. Passo 3: mapa de jornada
5. Passo 4: PRD
6. Passo 5: lacunas e perguntas
7. Entregável

Transforma pesquisa bruta em três entregáveis encadeados: **personas → jornada → PRD**, com cada afirmação ligada à evidência. O que não está nos dados vira pergunta ou lacuna marcada, nunca afirmação. Escreva no idioma dos dados (padrão: português do Brasil).

## 1. Passo 0: encontrar os dados
Procure no diretório do projeto, recursivamente:
- Texto: `.md`, `.txt`, `.docx`, `.pdf`, transcrições `.vtt`/`.srt`.
- Tabelas de survey: `.csv`, `.xlsx`.
- Pistas no nome ou na pasta: entrevista, interview, transcri, pesquisa, research, survey, teste, usabilidade, notas, spec, brief.

No GLADIS, olhe também `50 🗃️ Fontes Brutas/` quando a Julia indicar. Se existir um `plano-pesquisa.md` (do modo Planejar), leia antes: as perguntas de pesquisa dele guiam a síntese. Ignore `node_modules`, `.git`, código, builds e qualquer `ux-synthesis-report.md` anterior.

Liste o que encontrou (arquivo, tipo, uma linha do que parece ser) antes de analisar. Se algo não parecer pesquisa, pergunte se entra.

**Sem dados de pesquisa,** pare e peça: "Não encontrei dados de pesquisa nesta pasta. Pode colar os resumos ou transcrições aqui, ou me dizer onde estão os arquivos?" Não gere personas a partir de suposições.

## 2. Passo 1: análise
Para cada fonte, extraia:
- **Quem:** participante anonimizado (P1, P2…), segmento, contexto. Não copie nomes reais, e-mails, telefones ou documentos.
- **Dores, necessidades, objetivos, comportamentos e citações** (curtas, com a fonte).
- **O que a pessoa faz, separado do que ela diz que faz.**
- **Gambiarras e contornos:** necessidades não atendidas disfarçadas.

Agrupe por afinidade em **insights**, com a força da evidência:

| Força | Critério |
|---|---|
| **Forte** | 3+ participantes ou fontes independentes, ou dado quantitativo de survey |
| **Moderada** | 2 fontes |
| **Fraca** | 1 fonte, ou inferência a partir de indícios |

Insights fracos entram rotulados: são candidatos a validar. Ordene por frequência × impacto. Contradições costumam revelar segmentos. Técnicas em `analise.md`. Em survey, use os números como estão ("3 de 5 respondentes", não "60% dos usuários").

## 3. Passo 2: personas (2 a 4)
Cada persona é um **padrão de comportamento** que aparece em pelo menos 2 participantes, não um participante disfarçado nem um recorte demográfico. Se os dados só sustentarem 1 segmento, crie 1 e diga por quê.

Cada uma tem: perfil, objetivos, dores, comportamentos, conhecimento técnico, "Baseada em: P1, P4, P6" e **o que ela muda nas decisões de produto**. Atributos como idade e cargo só se vierem dos dados.

## 4. Passo 3: mapa de jornada
Uma jornada por persona e por cenário, do fluxo principal **como é hoje**. De 3 a 7 etapas, com ações, pensamentos e sentimentos, fricções (com a evidência) e oportunidades (como propostas). Marque os **momentos de verdade**. Regras em `jornada.md`.

## 5. Passo 4: PRD
Siga `../templates/relatorio-sintese.md`:
- **Problema:** dos insights fortes ou moderados, com evidência.
- **Métricas:** 1 ou 2 categorias do HEART (`analise.md`). Sem inventar baseline nem meta: `[baseline: a levantar]`, `[meta: a definir com o time]`.
- **Requisitos funcionais:** ID, prioridade (Must/Should/Could), persona e insight de origem. Sem insight, vai para "Ideias sem evidência".
- **Não funcionais:** WCAG 2.2 AA, LGPD, desempenho (referências de mercado marcadas "validar com engenharia").
- **Escopo e casos de borda:** dentro e fora, com justificativa; casos dos dados e os que a jornada sugere.

## 6. Passo 5: lacunas e perguntas
Se faltar algo crítico (objetivo de negócio, segmento a priorizar, restrição, métrica que o time já usa), faça **no máximo 3 perguntas**, as que mudam o PRD. Sem resposta, mantenha `PENDENTE` em "Perguntas em aberto", com o método que fecharia cada uma.

## 7. Entregável
Salve `ux-synthesis-report.md` na raiz do projeto (se existir, pergunte se sobrescreve ou salva com data). Ao terminar, diga onde está, quantas fontes, os 3 insights mais fortes e o que ficou pendente.
