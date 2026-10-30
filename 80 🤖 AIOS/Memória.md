---
tipo: sistema
atualizado: 2026-10-14
---

# Memória

O que o Claude precisa saber para trabalhar bem com a Julia. É lida em toda sessão, então precisa ser **curta**: só fatos vigentes. Decisões e mudanças vão para [[Decisões]], e o que muda na estrutura vai para o [[Log]].

O Claude atualiza este arquivo sozinho (ver [[Regras]], "Registro de memória"). Quando uma informação deixar de valer, ela é substituída, e a versão antiga vai para o histórico se for relevante.

## Aprendizados sobre a Julia

- Autismo e TDAH: qualquer coisa que exija registro manual frequente tende a ser abandonada. Prefira que o Claude faça o trabalho de organizar.
- Recarga diária (leitura ou algo criativo) é necessidade, não luxo. Nunca sacrificar no planejamento, mas **sem horário marcado**: ela decide na hora o que fazer (ler, criar, ir ao mercado...).
- **Não trabalha com time blocking.** Prefere uma lista das tarefas do dia e ir fazendo, sem horário. Só compromissos e reuniões têm hora fixa. Não criar blocos de foco, transição ou recarga na agenda. Tarefas da casa acontecem quando ela sente necessidade, não com data marcada. (2026-10-08)
- Compromissos **sempre** aparecem no dia (seção Hoje do `🏠 Agora.md`) e na revisão semanal. (2026-10-08)
- **O dia mora no `🏠 Agora.md`, não em daily.** Ela não usa mais a página de daily. O "Como estou" é opcional e vira diário em [[Diário]]. (2026-10-11)
- Prefere me dizer as tarefas ("anota que preciso...") e que eu crie e organize. Gosta de ver tudo em formato de planilha, desde que a organização fique comigo. (2026-10-08)
- **Tarefa grande trava.** "Finalizar o e-mail no Figma" não é ação: ela não sabe por onde começar e acaba fazendo outra coisa (em 2026-10-08, passou a tarde organizando o GLADIS em vez das tarefas da Trinks). Precisa da **tarefa mínima** para se movimentar: o que abrir e o que fazer primeiro. Ela acha que agrupar tarefas em blocos pode ajudar (a explorar, sem horário marcado). (2026-10-08)
- **Pesquisa com usuários:** é sempre ela que planeja e conduz, e planejar de forma eficiente é difícil para ela. Começar entregando um rascunho de plano a partir de pouca informação (skill `pesquisa-ux`, modo Planejar). Não faz spec nem roadmap; sprint e gestão do próprio trabalho entram no planejamento. (2026-10-08) Particularidades da Trinks no [[Manual do Sistema]], seção 5.
- **Microcopy e textos de interface:** nunca entregar uma frase só. Sempre de 4 a 6 variações diferentes, cada uma com regras de UX writing aplicadas, vantagens e desvantagens, e depois uma recomendação. Ela quer comparar e decidir, não copiar e colar (skill `escrita-ux`). (2026-10-08)
- **Visual:** o resultado visual do Claude sem plugins e skills de estilo é genérico e feio para ela. Os plugins de design e as bases de estilo instaladas em 2026-10-08 melhoraram muito. Não desativar nada que mexa no visual sem testar antes. (2026-10-08)
- **Terapia:** ela leva observações sobre como o assistente está funcionando para a psicóloga. Ficam em [[Para levar à terapia]]. Anotar quando ela pedir ("anota isso para a terapia"); quando algo parecer relevante, sugerir em uma linha, sem anotar sozinho. Tom neutro, sem diagnóstico. (2026-10-08)
- **Tokens:** ela autorizou o Claude a avisar com franqueza quando estiver gastando demais (conversa longa demais, construção do sistema virando refúgio, pedido que pode esperar). Em 2026-10-09 ela usou 25% da cota semanal em dois dias de construção do GLADIS. (2026-10-09)
- Ela pensa em sistemas e gosta de regras explícitas: quando pedir uma regra, formalizar em [[Regras]].
- Quer respostas **mais visuais**, principalmente na organização do dia: cor e estrutura, não só texto. No chat, o plano do dia vai em texto com emoji (🔵 compromissos, 🩷 principais, 🔹 outras, 🌸 recarga), sem horário nas tarefas; a cor fica no Agora. Card visual só se ela pedir, porque gasta muitos tokens. (2026-10-08, ajustado em 2026-10-11 e em 2026-10-20)
- **Paleta dela (rosa e azul, sem verde):** Burgundy `#6C0820`, Cherry Blossom Pink `#F2AEBC`, Misty Rose `#F2DCDB`, Silver Lake Blue `#5A86CB`, Lapis Lazuli `#3D5D91`. Principais = rosa (texto burgundy), compromissos = azul (texto lapis), recarga e outras = misty rose. (2026-10-08)
- **Pessoas:** uma nota por pessoa em `40 👥 Pessoas/`, com subpasta por grupo. As da Trinks estão, em versão enxuta (papel e relação de trabalho), em `20 🧭 Áreas/Carreira/Trinks (registro)/Pessoas/` (índice [[Pessoas da Trinks]]); o detalhe do dia a dia fica no computador de trabalho. Registrar com data sempre que algo útil aparecer e ler a nota antes de escrever para a pessoa. O template `Pessoa` é de trabalho; família e amigos usam `Pessoa - Família e amigos` (com aniversário). Família em `40 👥 Pessoas/Família/` (índice [[Minha família]]). (2026-10-09)
- **Os projetos da Trinks saíram deste cofre em 2026-10-29** e vivem no computador de trabalho, na conta Claude da empresa. Aqui fica só o registro enxuto em `20 🧭 Áreas/Carreira/Trinks (registro)/` (projetos e pessoas, sem números internos). Cópia de segurança em `Documents/Claude/Cofre Claude/Trinks - Transferência/` (apagar quando a Julia confirmar que está tudo no computador de trabalho). (2026-10-29)
- **"Entregue" não é "lançado":** quando ela diz que entregou um projeto da Trinks, em geral é o protótipo indo para os devs. Lançamento é quando chega ao cliente final. O Clube pro Cliente B2C foi entregue ao dev em 2026-10-08 e não está lançado. (2026-10-09)
- **Vocabulário da Trinks:** não se diz "CS"; o atendimento é **RC (Relacionamento com o Cliente)**. Mapa dos times em [[Trinks (registro)]]. (2026-10-09)
- **Proposta do Claude para o time de design (Trinks):** o material (ideias e evidências) foi para o computador de trabalho em 2026-10-29. Contexto: a empresa vai priorizar IA no design em 2027 e a Julia se posiciona como referência em IA para design; Claude para o time só em 2027, com monitoramento de uso. (2026-10-22)
- **O trabalho da Trinks é feito fora deste cofre** (computador e conta Claude de trabalho). Neste cofre só entra o registro de carreira em `20 🧭 Áreas/Carreira/Trinks (registro)/`. Nada de documento interno da Trinks aqui. (2026-10-29)
- **Bichos ficam em Pessoas:** Suki (gata dela) e Johann (gato do Felipe, com FeLV) têm uma nota cada em `40 👥 Pessoas/Pets/` (índice [[Meus bichos]]), com o mesmo tipo de anotação das pessoas. Alergia/saúde: ler antes de sugerir ração ou cuidado. (2026-10-09)
- **Pesquisas sem data:** tarefas de pesquisa (ração, ar-condicionado) não precisam de data. Ela passa as informações e o Claude analisa sozinho enquanto ela faz outra coisa. (2026-10-09)
- **Comida:** alergia a **mel** (regra dura: nunca sugerir, nem em produto que possa ter). Fez bariátrica (porções pequenas). Cozinha só para ela; o irmão mora junto e faz a própria comida. Perfil completo em [[Perfil Alimentar]] (área [[Minha Cozinha]]); antes de sugerir comida, ler o Perfil. Receitas migradas do Notion ficam `quero testar` até ela dar nota. (2026-10-14)
- Apelidos de projeto: "erro de pagamento na venda online" = Motivo de Recusa no Extrato. "E-mail no crédito online" = Email na Venda de Crédito.
- **Clube do livro da Julia = A Trama do Rio** ([[Clube do Livro]]), pessoal, não confundir com o Clube de Assinaturas da Trinks. **Não é assinatura** (mensalidade só planejada para 2027). Ela é da diretoria, na parte criativa. Integrantes em `40 👥 Pessoas/Trama do Rio/` (índice [[Integrantes da Trama]]). Os kits são presentes para as integrantes, com custo no [[Sistema de Custos de Kits]], aplicação local fora do cofre; ler o `CLAUDE.md` da subpasta antes de mexer. (2026-10-14)


## Erros e correções

- Em passo a passo de interface, dizer **onde fica** cada coisa na tela, **onde clicar** e **por que** fazer aquilo. (2026-10-07, instrução "fixe a aba" ficou confusa)
- **A seção Hoje do Agora é a fonte mais recente do que foi decidido no dia.** Antes de citar compromisso ou prazo, conferir nela, não só no Plano ou nos Lembretes. E, quando ela mudar algo lá, atualizar Lembretes e Plano na hora. (2026-10-09, sugeri várias vezes a revisão semanal que ela já tinha adiado para 16/10)
- **Moodboard aprovado é restrição, não inspiração.** Em projeto de marca, pedir "rotas realmente diferentes" depois de a Julia aprovar um moodboard faz a conversa seguinte sair dele (Trama, 2026-10-14). Variar dentro da estrutura aprovada, mostrar ao lado das favoritas e pedir que a conversa nova descreva as imagens antes de propor.

## Estrutura do cofre

- O sistema se chama **GLADIS** (antes "Segundo Cérebro", renomeado em 2026-10-08). O cofre do Obsidian é a pasta **`Cofre Claude`**, e o `GLADIS` é uma pasta dentro dele, ao lado de `Scheduled`. Caminhos em Bases e configurações do Obsidian começam com `GLADIS/`.
- O **Career OS** mora em `20 🧭 Áreas/Carreira/Career_OS/` desde 2026-10-07, com regras próprias. Ela trabalha nele **pelo Code**, não pelo Cowork (o Cowork não tem acesso à pasta e já gravou arquivos numa cópia de sessão). (2026-10-11) Antes de criar nota com nome que já exista nele (ex.: `Trinks`), escolha outro nome.
- Detalhes do Obsidian (CSS do Bases, tema, plugins) e do backup git: [[Manual do Sistema]], seção 4.

## Integrações

- **Agenda pessoal**: `juliagandolpho@gmail.com`
- **Agenda da Trinks**: `julia.gandolpho@trinks.com`
- Também existem "Calendário UX" (grupo do time) e "Feriados no Brasil". Use os feriados ao planejar a semana.
- Os horários do trabalho mudam com frequência: sempre ler a agenda da Trinks antes de planejar o dia.
- **Notion:** o conector do claude.ai funciona (verificado em 07/10). O Livro de receitas fica em "Biblioteca de registros › Cadernos › Livro de receitas", com o banco "Receitas" em "› Backend". Nada é migrado sem o plano da fase 6.
- **Padrões da agenda** (daily da Trinks, almoço, reuniões fixas, revisão semanal, quarta à noite): skill `planejamento`, `references/agenda.md`, seção 6.
