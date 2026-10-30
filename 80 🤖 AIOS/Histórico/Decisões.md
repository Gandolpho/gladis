---
tipo: sistema
---

# Registro de decisões

Decisões-chave e mudanças de estratégia do sistema, em ordem cronológica (mais recente no topo). Só se adiciona; nada se apaga. Consultar **sob demanda**, não em toda sessão.

Formato: **data** · decisão · motivo (quando não for óbvio).

- **2026-10-29** · **Projetos e pessoas da Trinks saem do cofre pessoal.** Projetos (Clube de Assinaturas e Meios de Pagamento), área Trinks, notas de pessoas, 19 tarefas de trabalho e 4 fontes brutas foram copiados (conferidos por hash) para `Cofre Claude/Trinks - Transferência/` e removidos. Fica só o registro enxuto em `20 🧭 Áreas/Carreira/Trinks (registro)/`, sem números internos, para portfólio e carreira. Motivo: a empresa liberou a conta Claude de trabalho; dados internos da Trinks são confidenciais.
- **2026-10-27** · **Trama: 3 pastéis novos para fundo (sálvia #CADDBF, céu #BCDFF2, manteiga #FFE8A3) e rodízio de fundos nas artes.** A cor do fundo vai em cada prompt (`[COR DO FUNDO]`), nunca a cargo da ferramenta; fundo rosa no máximo 1 a cada 4 posts e nunca dois seguidos; a cor de cada post é registrada no Calendário de Divulgações. Motivo: os únicos pastéis eram rosados e o Instagram estava virando fundo algodão-doce.
- **2026-10-21** · **Teste de usabilidade do Clube pro Cliente B2C vira rodada interna, plano v4**: colegas da Trinks em dois grupos (Novatos e Especialistas), sessões de 45 min com 4 tarefas (T4 = detalhe da assinatura), protótipo no Lovable copiando as telas atuais (páginas antigas como são) e comparação com o modelo de pacote fora (a Joyce testa pacote). Motivo: os estabelecimentos não responderam; os Especialistas também rendem sugestões. H4 e H6 ficam inconclusivas. Decisão da Julia.
- **2026-10-20** · **Dia no chat em texto com emoji, sem card colorido** (a cor fica no Agora); card só sob pedido. Tarefas abertas lidas por script (`Scripts/tarefas-abertas.ps1`). Motivo: o guia de visuais custava uns 7 mil tokens por uso. Decisão da Julia.
- **2026-10-20** · **Skill `cozinha` aprovada pela Julia e instalada** em `80 🤖 AIOS/Skills/cozinha/` (cofre, lida pelo Claude Code). Falta o teste de importação com os 6 links.
- **2026-10-20** · **Campo `status` das receitas renomeado para `avaliacao`** (valores: quero testar, aprovada, não curti). Motivo: `status` é reservado a ativo/pausado/aguardando/concluído; assim não há exceção ao vocabulário. Alterado nas 27 receitas, no template `Receita`, na `Receitas.base`, na skill `cozinha` (rascunho), no PRD e no CLAUDE.md. Substitui o nome `status` citado na entrada de 2026-10-14.
- **2026-10-15** · **Projetos da Trinks reorganizados em guarda-chuvas.** Comissionamento por Pote sai do Arquivo e vai para dentro do Clube de Assinaturas (continua pausado). Motivo de Recusa no Extrato vai para o novo guarda-chuva Trinks - Meios de Pagamento. Tag nova: `trinks/meios-de-pagamento`.

- **2026-10-14** · **Fase 1 do Sistema de Alimentação construída.** Valores novos registrados: `tipo: receita`; propriedades de receita (`refeicao`, `sabor_tipo`, `culinaria`, `proteina`, `usa_bases`, `tempo_ativo`, `tempo_total`, `rende`, `congela_bem`, `status` = quero testar/aprovada/não curti, `nota_sabor`, `nota_dificuldade`, `faria_de_novo`, `fonte`, `link_original`, `kcal_porcao`, `proteina_g`, `fibra_g`, `ultima_vez`, `alerta`, `etiquetas`); tag `receita`. As 27 receitas do Notion entram todas como `quero testar` (regra dura 5 do PRD: só vira "aprovada" com nota dela). `culinaria` herdou os valores do Notion (inclui "família", "fit" e "fusão", a normalizar depois). Motivo: manter o que ela escreveu, sem inventar classificação.

- **2026-10-14** · **PRD do Sistema de Alimentação aprovado** ([[PRD - Sistema de Alimentação]]). Substitui a fase 9 (Receitas) do Plano. O sistema vai morar em `20 🧭 Áreas/Minha Cozinha/`, operado pela skill `cozinha`, sem plano alimentar fixo, com construção em 5 fases. Decisões detalhadas no [[Acompanhamento - Sistema de Alimentação]].

- **2026-10-11** · **O dia passa a morar no `🏠 Agora.md`** (seção Hoje: compromissos, 3 principais, outras, recarga, capturas). A Julia não vai usar mais a página de daily. Fica um campo opcional "Como estou", só dela; na virada do dia o Claude copia o texto, idêntico, para `01 📅 Diário/Diário.md`. Sem Fechamento: o histórico do que foi feito fica na aba Feitas da planilha. As dailies de 07 a 09/10 ficam guardadas. Motivo: ela quer uma página só para organizar o dia.
- **2026-10-11** · Sugestões do ChatGPT para as regras ([[Sugestões do ChatGPT para a Revisão de Regras]]) entram no lote 2 da revisão (N1 parada da revisão de texto, N3 conferir o destino real, guia de como escrever regra) e como critério de passagem entre lotes (3 cenários reais). N2 (ajuste direto de pontuação e fluidez em material) foi aprovado pela Julia no Career OS em outra conversa.

- **2026-10-11** · Revisão de Regras ([[Revisão de Regras 2026-10-11]]): 19 propostas em 5 lotes, aprovadas por ID. Lote 1 aprovado e feito: backup do cofre em **git local** (o Obsidian Sync não é pago), salvando versão no começo e no fim das sessões que mexem no sistema e antes de cada lote (opção a, sem agendamento do Windows); regras enxutas com o detalhe no novo [[Manual do Sistema]]; autorrevisão (Regras §14); Regra das 3 Vezes contada na revisão semanal; fase do `CLAUDE.md` de projeto atualizada junto com o status; Identidade sem time blocking. Motivo: ela quer menos decisões, menos correções e menos tokens fixos por sessão.

- **2026-10-09** · Subagentes aprovados: três ajudantes só leitura (revisor de integridade e inventário da migração com Haiku, crítico independente com o modelo da conversa). Nenhum subagente para o "o que eu faço agora?", porque o custo de começar do zero não compensa numa pergunta curta e frequente.

- **2026-10-09** · A construção do GLADIS segue como projeto em `10 🎯 Projetos/GLADIS/`, separada do sistema em uso (`80 🤖 AIOS/`). O Plano de Construção vira roadmap (Agora, Próximo, Depois) e as ideias para o sistema ganham a nota [[Ideias - GLADIS]], decididas na revisão semanal. Progresso acompanhado pelo Log e pela revisão mensal, sem arquivo novo. Rituais de recarga e transição na agenda (fase 4, C17) cancelados por causa da decisão de não usar time blocking. Motivo: a Julia vai trabalhar no sistema por meses e quer registrar as ideias sem perder nenhuma.

- **2026-10-08** · Auditoria de skills, categoria 5: `planejamento-julia` vira `planejamento`, morando no cofre (`80 🤖 AIOS/Skills/`), porque depende do GLADIS e vai ser ajustada com frequência; o Claude propõe ajustes e edita com o sim da Julia. Planejamento flexível por prazo (hoje, dias, sprint, mais longo). QA de UX planejado card a card, sem tempo fixo. Plugins `product-management` e `desktop-commander` e a skill `morning` desativados.

- **2026-10-08** · Auditoria de skills, categoria 4: nova `escrita-ux` (qualquer produto, guia da Trinks só em projetos da Trinks, sempre de 4 a 6 variações justificadas). O guia da Trinks pode ir para o app, com o aval da Julia. `writing-guidelines` aposentada; plugins `design`, `marketing` e `brand-voice` desativados. `design-skills` mantido e reavaliado na categoria 6, por causa da `design-elevation`.

- **2026-10-08** · Auditoria de skills, categoria 3: `ux-synthesis` vira `pesquisa-ux`, com os modos Planejar e Sintetizar, porque a Julia planeja todas as pesquisas e tem dificuldade nisso. `competitor-pipeline-research` revisada. Plugins: `product-tracking-skills` desativado; `product-management` só depois da categoria 5, para aproveitar o que servir à sprint.

- **2026-10-08** · Auditoria de skills, categoria 2: aprovadas a revisão de `handoff-documentacao` e de `prompt-prototipagem-ia` e a nova `figma-julia` (substitui figma-doc-cards, figma-component-from-frames e flow-screens-from-screenshots). As três moram no app, com original em `Skills da Conta/`. Cards de documentação no Figma com 4 categorias (Interação em laranja) até a Julia definir outra paleta.

- **2026-10-08** · Skill `montar-assistente-pessoal` aprovada. Vive no cofre, porque depende do kit em `20 🧭 Áreas/Assistentes da Família/`.

- **2026-10-08** · Tarefa grande ou vaga sempre com um primeiro passo mínimo e concreto (campo `primeiro_passo`), e as 3 principais da daily nunca aparecem sem ele. Motivo: a Julia travou o dia inteiro em tarefas da Trinks como "finalizar o e-mail no Figma", que não dizem por onde começar.
- **2026-10-08** · Material para o assistente de outra pessoa (kit, habilidades, sugestões) mora em `20 🧭 Áreas/Assistentes da Família/`, não no AIOS. Motivo: o AIOS é para as instruções do GLADIS; o kit é entrega para outra pessoa.

- **2026-10-08** · Insights ganham arquivo próprio no AIOS, anotados pelo Claude durante as conversas e transformados em sugestões na revisão semanal. Motivo: antes eram gerados na hora da revisão e se perdiam. Ideia surgiu das sugestões para o Jarvis do pai.

- **2026-10-08** · Auditoria de skills feita por categoria, aproveitando o que for útil dos plugins antes de desativar qualquer um. Toda skill ganha índice no início. Find Skills e Claude Mem não serão instalados por enquanto (a Memória do GLADIS já cumpre o papel). Detalhes em [[2026-10-08 Auditoria de Skills]].
- **2026-10-08** · Skill `critica-design` aprovada. Substitui design-critique-completude, stress-test-conteudo-layout e auditoria-consistencia-regras e vale para qualquer projeto, não só a Trinks. Mora no app, com o original em `80 🤖 AIOS/Skills da Conta/`. Motivo: a Julia pede crítica em outros computadores e projetos.

- **2026-10-08** · Sem time blocking: só compromissos têm horário; a daily é uma lista. Motivo: a Julia não segue horários fixos e decide na hora o que fazer.
- **2026-10-08** · Gerenciador de tarefas: opção A (uma nota por tarefa + Bases), planejamento do "Hoje" delegado ao Claude, tarefas-ponte com projetos e Career OS. Detalhes em [[PRD - Gerenciador de Tarefas]].

- **2026-10-08** · O sistema passa a se chamar **GLADIS**, a pedido da Julia. Entradas anteriores do histórico mantêm o nome "Segundo Cérebro".

- **2026-10-07** · PRD da migração do Notion aprovado com ajustes: uma página por vez, começando pela Biblioteca de registros; triagem agrupada por destino e item por item; as 3 páginas soltas do Meu Guia de UX não vêm; o Glossário de UX é preservado com texto idêntico.

- **2026-10-07** · Registrados como trabalho futuro: migração de duas áreas do Notion (rascunho de segundo cérebro e estudos de UX) e o Sistema de receitas (fase 9, começa com PRD). Nada executado agora, a pedido da Julia.

- **2026-10-07** · Career OS movido intacto para `20 🧭 Áreas/Carreira/Career_OS/` (60 arquivos, mesmo tamanho antes e depois). As permissões de pasta do Cowork no Claude Desktop ainda apontam para o caminho antigo, e a Julia vai corrigir. Integração: a área Carreira virou atalho, Busca de Vaga aponta para `06_Jobs/ACTIVE`, métricas ficam só no Career OS, e o mapa do CLAUDE.md aponta para ele.
- **2026-10-07** · Regras do Career OS trazidas para o Segundo Cérebro: hierarquia da fonte da verdade, inferência marcada, conflito não se resolve sozinho, privacidade ao sair do cofre, YAML válido, sem duplicação, auditoria de naturalidade. Subsistemas mantêm regras próprias quando são mais rígidas.
- **2026-10-07** · Nota `Trinks.md` da área renomeada para `Área Trinks.md`, por conflito de nome com `Career_OS/01_Experience/Trinks.md` (49 links `[[Trinks]]` no Career OS).

- **2026-10-07** · Pasta do sistema renomeada para `80 🤖 AIOS`, isolando a camada da IA (regras, identidade, memória, skills, prompts). Histórico separado das regras em `AIOS/Histórico/`.
- **2026-10-07** · Memória dividida: `Memória.md` guarda só o que é preciso para trabalhar; decisões vão para este arquivo. Motivo: economizar tokens, porque a memória é lida em toda sessão.
- **2026-10-07** · Novas regras: PRD First, Regra das 3 Vezes (skills com aprovação), otimização de tokens, registro autônomo de memória.
- **2026-10-07** · Skills aprovadas ficam em `AIOS/Skills/`, ligadas a `.claude/skills/` para o Claude Code carregar. Rascunhos ficam em `AIOS/Skills em Aprovação/`.
- **2026-10-07** · Pastas de primeiro nível mantidas (PARA, em português, com prefixo numérico). O exemplo Atlas/Calendar/Efforts foi atendido pelo mapa de roteamento do CLAUDE.md, sem renomear pastas.
- **2026-10-07** · Comissionamento por Pote inativo, movido para o Arquivo.
- **2026-10-07** · Projetos da Trinks vivem dentro do cofre como pastas de trabalho do Claude Code (com CLAUDE.md próprio) + nota de entrada para o painel. Copiados de `Documents\Trabalho\Trinks\Repositório Claude\`, com os originais mantidos lá até a Julia confirmar.
- **2026-10-07** · Clube de Assinaturas é guarda-chuva (tipo `area`, fora do painel). Entregas dele ficam em subpastas.
- **2026-10-07** · Trinks IA pausado e movido para o Arquivo.
- **2026-10-07** · Regras consolidadas em `Regras.md` como fonte única.
- **2026-10-07** · Agenda da Trinks: leitura livre, escrita só com permissão a cada vez.
- **2026-10-07** · Revisão semanal às sextas, 9h às 9h30. O dia foi escolhido pela Julia; o horário de 9h foi sugestão do Claude, então ajustar se não funcionar.
- **2026-10-07** · Arquitetura base: PARA adaptado (Projetos, Áreas, Conhecimento, Arquivo) + conceitos interligados. Navegação principal por propriedades, tags e busca.
- **2026-10-07** · Inbox único em `00 📥 Inbox/`. A Julia joga, o Claude processa.
- **2026-10-07** · Originais em `50 🗃️ Fontes Brutas/` ficam intocados, e o trabalho vai em nota processada separada.
- **2026-10-07** · Painel de projetos em Bases com só cinco campos: status, contexto, prazo, próxima ação, valor de portfólio.
- **2026-10-07** · Estúdio Camélia é uma nota única em Ideias. Vira área só se for reativado.
- **2026-10-07** · Ideias em dois estágios: linha na Lista de Ideias, e mini-canvas só depois de passar na revisão semanal.
- **2026-10-07** · Sem rastreamento de hábitos por enquanto. Retomar quando a rotina estiver estável.
- **2026-10-07** · Começar só com recursos nativos (Bases, Templates, Daily Notes). Plugins entram quando fizerem falta.
- **2026-10-07** · Migração de Notion, ChatGPT, Claude e do outro cofre fica para uma etapa futura.
