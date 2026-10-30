# CLAUDE.md · Mapa mestre do GLADIS

Cofre da Julia, pessoal e profissional. Você atua como **parceiro**. Este arquivo é o **mapa mestre**: diz onde cada coisa mora e onde procurar. É lido em toda sessão, então mantenha-o enxuto.

## Ao começar uma sessão

Leia **só** estes, nesta ordem:
1. `80 🤖 AIOS/Regras.md` · o que pode, o que precisa de permissão e o que é proibido. **Fonte única das regras.**
2. `80 🤖 AIOS/Identidade.md` · quem ela é e como escrever.
3. `80 🤖 AIOS/Memória.md` · fatos vigentes e aprendizados.

Todo o resto é carregado sob demanda (Regras, seção 7). Se houver tarefas autônomas pendentes no Plano de Construção, avise em uma linha.

## Onde procurar (roteamento por pedido)

Vá direto à pasta indicada. **Não varra o cofre**, e restrinja as buscas a estas pastas.

| Pedido | Consulte só |
|---|---|
| Planejar o dia, a semana, a sprint ou uma entrega | Skill `planejamento` · Agenda (pessoal + Trinks), `02 ✅ Tarefas/` (planilha), `🏠 Agora.md` (seção Hoje), `TASKS.md` dos projetos ativos, `20 🧭 Áreas/Carreira/Career_OS/06_Jobs/ACTIVE.md` |
| Tarefas ("anota que preciso...", "o que tenho pra fazer") | `02 ✅ Tarefas/` · regras em `10 🎯 Projetos/GLADIS/PRD - Gerenciador de Tarefas.md` |
| Revisão semanal | Planilha (aba Feitas), `01 📅 Diário/Diário.md`, `00 📥 Inbox/`, notas de entrada dos projetos, notas criadas na semana |
| Projeto da Trinks | O trabalho vive no computador de trabalho. Aqui só o registro de carreira: `20 🧭 Áreas/Carreira/Trinks (registro)/` (comece por `Trinks (registro).md`) |
| Carreira, vaga, portfólio, cases | **Career OS** em `20 🧭 Áreas/Carreira/Career_OS/`. Comece por `00_System/INDEX.md`, e as regras dele prevalecem (Regras, seção 10) |
| Estudos e conceitos | `30 📚 Conhecimento/` · aprender ferramentas e comandos de IA para design: `30 📚 Conhecimento/IA para Design/` (mapa, uma nota por ferramenta, Laboratório) |
| Lembrar de algo | `🏠 Agora.md`, depois busca por tag ou palavra |
| Pessoa ou bicho (Suki, Johann) | `40 👥 Pessoas/` (bichos em `Pets/`, índice [[Meus bichos]]) |
| Rotina e casa | `20 🧭 Áreas/Rotina e Casa/` |
| Comida: receitas, "o que dá pra fazer hoje", estoque, perfil alimentar, "acabou o...", link de receita | `20 🧭 Áreas/Minha Cozinha/` (nota da área → `Perfil Alimentar.md` primeiro; receitas em `Receitas/`; estoque em `Estoque.md`). Skill `cozinha`, ativa. Alergia a mel é regra dura |
| Clube do livro (A Trama do Rio, clube pessoal da Julia; não é assinatura) | `20 🧭 Áreas/Clube do Livro/` · integrantes em `40 👥 Pessoas/Trama do Rio/` · custos dos kits: subpasta `Sistema de Custos de Kits/` |
| Ideias | `20 🧭 Áreas/Ideias/` |
| Assistentes pessoais para outras pessoas (Jarvis do pai, time, kit) | `20 🧭 Áreas/Assistentes Pessoais/` |
| O próprio sistema | `80 🤖 AIOS/` (passo a passo das rotinas no `Manual do Sistema.md`), `10 🎯 Projetos/GLADIS/` (PRD, Plano e Ideias) |
| Por que algo foi decidido | `80 🤖 AIOS/Histórico/` |
| Skills | `80 🤖 AIOS/Catálogo de Skills.md` |

## Onde guardar (roteamento por tipo)

| Chegou isto... | Vai para | Como |
|---|---|---|
| Qualquer coisa sem lugar claro | `00 📥 Inbox/` | Ela joga, você processa. |
| O dia (compromissos, principais, outras) | `🏠 Agora.md`, seção Hoje | Reescrita a cada "monta meu dia". O "Como estou" dela vai, idêntico, para `01 📅 Diário/Diário.md`. |
| Revisões semanais | `01 📅 Diário/Semanais/` | Template `Semanal`. (`Dailies/` guarda só as de 07 a 09/10.) |
| Tarefa (qualquer, de trabalho ou pessoal) | `02 ✅ Tarefas/<nome da tarefa>.md` | Template `Tarefa`. Obrigatório: nome + `categoria`. De projeto: `projeto` + `origem` (tarefa-ponte; o detalhe fica no projeto). Compromisso com hora vai para a agenda, não para cá. |
| Algo com fim e entrega | `10 🎯 Projetos/<projeto>/` | Nota de entrada com propriedades do painel. |
| Algo contínuo | `20 🧭 Áreas/<área>/` | Carreira, Clube do Livro, Rotina e Casa, Ideias, Assistentes Pessoais, Minha Cozinha. |
| Receita (importada de link, texto, print ou ditada) | `20 🧭 Áreas/Minha Cozinha/Receitas/<nome>.md` | Template `Receita`, `avaliacao: quero testar` até ela dar nota. Original externo em `50 🗃️ Fontes Brutas/`. |
| Qualquer coisa de carreira | `20 🧭 Áreas/Carreira/Career_OS/` | Segue o `INDEX` e o `WRITE_PROTOCOL` do Career OS. |
| Ideia de negócio | `20 🧭 Áreas/Ideias/Lista de Ideias.md` | Uma linha. Mini-canvas só se passar na revisão semanal. |
| Resumo de livro, curso, artigo | `30 📚 Conhecimento/Fontes Processadas/` | Template `Fonte`. |
| Conceito aprendido | `30 📚 Conhecimento/Conceitos/` | Template `Conceito`. Uma ideia por nota, sempre linkada. |
| Pessoa ou bicho | `40 👥 Pessoas/` | Template `Pessoa` (família, amigos e bichos: `Pessoa - Família e amigos`). |
| Original externo (transcrição, PDF, print, briefing) | `50 🗃️ Fontes Brutas/` | `AAAA-MM-DD Descrição`, + nota processada onde fizer sentido. |
| Reunião | Pasta do projeto ou área | Template `Reunião`. |
| PRD | Pasta do projeto | Template `PRD`. |
| Instruções, memória, regras, prompts e skills da IA | `80 🤖 AIOS/` | Nada de instrução para IA fora daqui (Regras, seção 4). Exceção: material para o assistente de outra pessoa fica em `20 🧭 Áreas/Assistentes Pessoais/`. Skill só do cofre em `Skills/`; skill instalada no app tem o original em `Skills da Conta/` (Regras, seção 6). |
| Concluído ou pausado | `90 📦 Arquivo/` | Retrospectiva antes de mover. |

## Projetos ativos

- **Busca de Vaga Pleno**
- **GLADIS**
- **Sistema de Alimentação** · pessoal, fase 9 do Plano (receitas, despensa, pré-preparo, compras). PRD aprovado em 2026-10-14; fase 1 (Fundação) construída em 2026-10-14, em uso na área `Minha Cozinha`; fases 2 a 5 por vir.
- **Presente de Natal da Trama 2026** · pessoal, kits do Clube do Livro. Custos no Sistema de Custos de Kits (`20 🧭 Áreas/Clube do Livro/`).

Arquivado: Trinks IA.

**Trinks.** Os projetos da Trinks saíram deste cofre em 2026-10-29 e vivem no computador e na conta Claude de trabalho. Aqui fica só o registro enxuto em `20 🧭 Áreas/Carreira/Trinks (registro)/` (projetos e pessoas), para portfólio e carreira. Cópia de segurança em `Documents/Claude/Cofre Claude/Trinks - Transferência/`. Dados internos da Trinks continuam confidenciais fora do cofre (Regras, seção 10).

## Propriedades e tags

Use só estes valores. Tag nova: crie e registre em `80 🤖 AIOS/Histórico/Decisões.md`.

- `contexto`: `trabalho` · `carreira` · `pessoal`
- `tipo`: `daily` · `semanal` · `projeto` · `area` · `reuniao` · `pessoa` · `conceito` · `fonte` · `ideia` · `decisao` · `processada` · `documento` · `sistema` · `tarefa` · `receita`
- `categoria` (tarefas): `trabalho` · `carreira` · `casa` · `saúde` · `pessoal` · `clube do livro` · `estudos`. Nova só quando precisar, registrada em Decisões.
- `status`: `ativo` · `pausado` · `aguardando` · `concluído`
- Temas: `tema/ia` · `tema/arquitetura-de-sistemas` · `tema/product-design` · `tema/espanhol` · `tema/carreira` · `tema/leitura`
- Projetos: `trinks/clube-de-assinaturas` · `trinks/credito-cliente` · `trinks/meios-de-pagamento` · `trinks/trinks-ia` · `trinks/comissionamento` · `carreira/busca-de-vaga`

## Rotinas

**Inbox.** Para cada item: original vai para Fontes Brutas + nota processada. Tarefa vai para a planilha ou para a próxima ação do projeto. Ideia vai para a Lista de Ideias. Aprendizado vira conceito. No fim, diga em poucas linhas o que foi para onde.

**Nota processada.** A partir de uma fonte bruta: resumo curto, insights, ações e link `[[...]]` para o original. Nunca copie o original inteiro.

**Dia** ("monta meu dia"). O dia mora no `🏠 Agora.md`, seção Hoje; não existe mais daily. Leia as duas agendas e as tarefas abertas rodando `powershell -NoProfile -File "80 🤖 AIOS/Scripts/tarefas-abertas.ps1"` (uma linha por tarefa com `fazer_em` até hoje; `-SemData` inclui as sem data), sem abrir as notas uma a uma. Antes de reescrever a seção: se o "Como estou" tiver texto da Julia, copie-o **idêntico**, com a data dele, para o topo de `01 📅 Diário/Diário.md` e esvazie o campo; processe as Capturas soltas (rotina Inbox) e esvazie. Ponha a data de hoje no título e escreva os **compromissos** (com hora). Na planilha, escolha as **3 principais** (`principal: true`, sempre com `primeiro_passo` mínimo: uma ação de poucos minutos que diga o que abrir e o que fazer) e de 5 a 7 **outras** (`fazer_em`: hoje), misturando trabalho, hobbies, projetos pessoais e casa; urgentes e prazos próximos primeiro; rápidas só se forem obrigatórias no dia. Tire o `principal` de tarefas de dias anteriores que não são mais prioridade. **Sem time blocking e sem blocos na agenda.** Mostre o dia no chat em texto com emoji, sem card colorido (economiza tokens): 🔵 compromissos, 🩷 3 principais com o primeiro passo, 🔹 outras, 🌸 recarga, sem horário nas tarefas. A versão colorida já é o Agora. Card visual só se ela pedir ("me mostra em card"). O histórico do que foi feito fica na planilha (aba Feitas, com `concluida_em`).

**Tarefa nova.** A Julia fala, você cria a nota em `02 ✅ Tarefas/` pelo template, classifica e diz em uma linha onde ficou. Se a tarefa for grande ou vaga, preencha `primeiro_passo` com uma ação pequena e concreta. Tarefa de projeto vira tarefa-ponte. Ao ver uma tarefa `feita` sem `concluida_em`, preencha a data; se for ponte, marque também na origem (no Career OS, pelo protocolo dele). Todo início de mês, mova as feitas do mês anterior para `02 ✅ Tarefas/Feitas/AAAA-MM/`. Menos é mais.

**Revisão semanal** (sexta). Siga o roteiro do `80 🤖 AIOS/Manual do Sistema.md`, seção 1: compromissos e feitas da semana, tarefas paradas, pontes, Inbox, próximas ações, Insights, contagem da Regra das 3 Vezes, Ideias - GLADIS e um item do rodízio do sistema.

**Ideias para o sistema.** Quando a Julia falar uma ideia para o GLADIS, anote uma linha em `10 🎯 Projetos/GLADIS/Ideias - GLADIS.md` e não construa na hora.

**Insights.** Ao perceber um padrão numa conversa (tarefa adiada de novo, pedido repetido, algo que funcionou ou travou), anote uma linha em `80 🤖 AIOS/Insights.md`, sem interromper.

**"O que eu faço agora?"** Modo rápido: não carregue a skill `planejamento`. Leia só o frontmatter das tarefas não feitas em `02 ✅ Tarefas/` (sem a subpasta `Feitas/`) com `fazer_em` até hoje, e os compromissos das próximas horas nas duas agendas. Ordem: principais, depois urgentes e prazos próximos. Considere tempo e energia só se ela disser ("tenho 20 minutos", "estou cansada"). Sugira **uma** tarefa só, com o primeiro passo concreto e o motivo em uma linha. Não mostre a lista inteira. Se ela recusar, sugira outra.

**Lembretes.** Mantenha a seção Lembretes do `🏠 Agora.md` e mencione itens quando o assunto aparecer.

## Integrações

Google Calendar (IDs e padrões em Memória), Google Drive e Gmail (leitura), Notion (leitura, conector ativo, é a origem da migração da fase 6). Permissões em Regras.

## Convenções

Português. Datas `AAAA-MM-DD`, semanas `AAAA-Www`. Emojis nos nomes, quase nenhum no corpo. Notas curtas e escaneáveis fora dos estudos. Templates são flexíveis.
