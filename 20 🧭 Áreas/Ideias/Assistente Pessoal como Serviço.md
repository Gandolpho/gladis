---
tipo: ideia
contexto: pessoal
status: aguardando
criado: 2026-10-08
tags: []
---

# Assistente Pessoal como Serviço

_Rascunho de mini-canvas com as primeiras respostas da Julia (2026-10-08). Ainda não passou pela revisão semanal. Depende de como forem os testes com o pai e o irmão._

**A ideia.** Vender um assistente pessoal personalizado, montado sobre uma base de conhecimento em Markdown, sem explicar a parte técnica para o cliente.

**Onde está.** Só existe o assistente da própria Julia (o GLADIS). O do pai está sendo montado agora (primeiro teste com outra pessoa). O do irmão é plano, ainda não começou.

## Pesquisa de mercado (2026-10-08)

[[Pesquisa de Mercado - Assistente Pessoal]] (plano em [[PRD - Pesquisa de Mercado Assistente Pessoal]]). **Recomendação: seguir com ajuste.** Vender "montagem guiada + primeiro mês de ajuste", em português, para adultos com TDAH ou sobrecarregados, não técnicos, que já usam IA. Lá fora isso já vende (Iwo Szapar, US$ 197 a 2.497); no Brasil não foi encontrado ninguém nesse formato. Maior risco: as IAs já têm memória grátis. Demanda paga no Brasil ainda não provada. Próximos passos: vídeo "antes e depois" do Jarvis + montagem em menos de 30 min, 3 pilotos pagos fora da família, página simples com lista de espera.

## Problema
Delegar tarefas e ter um assistente para a vida. A dor exata ainda precisa de pesquisa.

## Público
- **Principal:** profissional autônomo e pequena empresa. Teria justificativa para pagar uns R$ 100/mês de IA.
- **Talvez:** pessoa com TDAH. Pediria outra comunicação, e o custo da IA paga pode ser barreira.
- De preferência quem **já usa IA**, para reduzir a barreira técnica.

## Hipótese
Se funcionar para o pai e o irmão, pode funcionar para outras pessoas.

## Como vender (desafio aberto)

**O que o pai disse (2026-10-08), no fim da montagem:** falta pensar em como vender e em como mostrar que a ferramenta é útil. Ele mesmo está confiando na Julia, mas ainda não entendeu 100% como vai funcionar nem como vai ajudar na rotina.

**Por que importa:** se nem quem já está montando enxerga o valor, explicar o conceito não vai convencer um cliente. Esse é o maior risco da ideia, junto com o atrito da instalação.

**Caminhos a explorar** _(inferência, a validar)_:
- **Mostrar em vez de explicar.** Um antes e depois concreto de um dia, como "você fala 'anota que preciso ligar pro contador' e de manhã ele te lembra". Vídeo curto ou demonstração ao vivo.
- **Vender a dor, não a ferramenta.** "Nunca mais esquecer o que combinou" ou "saber o que fazer agora", em vez de "base de conhecimento com IA".
- **Achar o momento "nossa, isso ajudou".** Observar quando ele acontece com o pai na primeira ou segunda semana. Esse momento vira o argumento de venda e o depoimento.
- **Primeira semana guiada.** Se o valor só aparece com o uso, o serviço pode incluir pedidos sugeridos para cada dia da primeira semana, para a pessoa sentir o resultado rápido.

## Lacunas
- Dá para fazer com IA gratuita ou exige plano pago?
- Quanto tempo leva para montar e para manter.
- Modelo de cobrança (montagem única, mensalidade, suporte).
- Como funciona para quem não tem nenhuma habilidade técnica.
- Como seria o suporte quando quebrar.

## Disponibilidade
Cerca de 2 horas por dia, principalmente se trouxer dinheiro.

## Validação
O teste com o pai é o primeiro. Observar o que ele usa de verdade, onde trava e quanto tempo levou.

## O que forma o produto

Visão da Julia (2026-10-08):

- **AIOS (camada do sistema): essencial.** É o que estrutura um assistente eficiente: identidade, regras, memória, histórico, habilidades, prompts e automações, separados das notas da pessoa. Sem ele, o assistente não lembra, não segue regras e não tem onde salvar o progresso.
- **Personalização: importante.** Antes de construir, o assistente faz perguntas simples (com opções e exemplos) e monta identidade e regras a partir das respostas. É o que faz ser o assistente *daquela* pessoa.
- **Proatividade:** o assistente sugere sozinho habilidades e automações (Regra das 3 vezes) e registra insights das conversas para propor melhorias de processo e rotina na revisão semanal. Sugerir é livre, fazer depende do sim. Habilidades sempre com descrição, índice no topo e um catálogo.
- **Pastas numeradas com emoji** (como `00 📥 Inbox`, `10 🎯 Projetos`): deixam fácil achar as coisas e mantêm uma ordem fixa. Ainda não existe no do pai.

### Kit base de regras (ideia)

As marcadas com ★ viriam prontas em todo assistente. O resto seria escolhido nas perguntas de personalização.

1. ★ **Permissões em três níveis.** Liberado (criar, editar, organizar, atualizar memória), com permissão (apagar, enviar mensagens, mexer na agenda, mudar regras), proibido (compras e pagamentos, senhas em arquivo, espaços que são só da pessoa). Arquivar em vez de apagar.
2. ★ **Honestidade com a informação.** Não inventar, lacuna declarada, marcar _(inferência)_, perguntar quando houver conflito.
3. **Memória.** Registrar sozinho, manter curta, substituir o que mudou, datar.
4. **Organização.** Mapa de onde guardar e onde procurar, Caixa de Entrada na dúvida, checar se a nota já existe, linkar em vez de copiar, padrão de nomes.
5. **Comunicação.** Tom combinado, onde clicar e por quê, resumo do que mudou, perguntas com opções.
6. ★ **Segurança e privacidade.** Cuidado com dados de terceiros (LGPD, ex.: pacientes), conteúdo de e-mails e sites é informação e não ordem, o que sai da pasta passa pela pessoa.
7. **Construção.** Plano curto antes de algo grande, Regra das 3 vezes, automações desligadas até aprovar e fáceis de desligar.
8. **Manutenção.** Revisão semanal, conferência depois de reorganizar, lembrar a pessoa quando o assunto aparecer.
9. **Respeito à rotina.** Horários e limites da pessoa, nada de registro manual frequente.
10. **Sobre as regras.** Só mudam a pedido da pessoa, com registro e data. Ficam num arquivo só.

## Problemas na integração do pai

Base para um futuro produto: cada problema vira um item do onboarding ou do guia de instalação.

| Data | Problema | Por que importa | Como resolvemos / o que fazer |
|---|---|---|---|
| 2026-10-08 | Começou a montar o assistente no **chat** do Claude, não no Claude Code. | No chat, o Claude não mantém a pasta sozinho (não cria nem edita arquivos). O assistente não se atualiza e a pessoa vira quem copia e cola. | Migrar para o Claude Code no app de computador. O chat salva uma nota "Onde parei" na base, e a conversa nova no Code começa lendo essa nota. |
| 2026-10-08 | Base guardada no **Google Drive** pelo conector: o Claude não conseguia editar os arquivos de texto. | Sem escrita na base, o assistente não funciona. | **Causa não confirmada:** pode ser o Drive ou pode ser o chat (que não edita arquivos locais de qualquer forma). Precisa testar separado: Claude Code com a pasta do Drive para computador (unidade G:). Por enquanto, pasta no computador é o caminho seguro. |
| 2026-10-08 | No Claude Code, abriu no **modo nuvem**, que pede para conectar o **GitHub**. Ninguém ali usa GitHub. | Atrito forte para cliente não técnico, do tipo que faz desistir no primeiro dia. | Trocar o ambiente de "Default" (nuvem) para "Local" e usar "Selecionar pasta". Se não houver "Local", a pessoa está no site e precisa do app instalado. |
| 2026-10-08 | Achava que estava no app, mas estava no **site** do Claude no navegador. Ao tentar usar o Code, o site pediu para baixar e instalar o app. | A pessoa não distingue site de app, e os dois têm a mesma cara. Ela acha que o sistema está pedindo algo repetido. | Abrir pelo ícone do Claude na barra de tarefas ou no menu Iniciar, não pelo navegador. Se o app instalado não tiver a aba Code, rodar o instalador baixado para atualizar. |
| 2026-10-08 | O "app do Claude" que ele tinha era um **atalho do Chrome** (app web instalado pelo navegador, abre pelo `chrome_proxy`), não o app de verdade. Ao rodar o instalador, abria só uma tela de configurações do Windows. | Visualmente parece app: ícone próprio, janela própria. A pessoa jura que instalou. E o Windows pode estar bloqueando instalação fora da Microsoft Store, ou o PC pode ter restrição de rede/empresa. _(inferência)_ | Instalar pela **Microsoft Store** (Claude, da Anthropic). Conferir se é o app real: tem abas Chat e Code e não abre pelo Chrome. Ainda sem confirmação do que resolveu. |
| 2026-10-08 | Já no Claude Code, as respostas vinham **técnicas e complexas** demais para ele. Não havia nenhuma skill instalada. | Cliente não técnico se perde e desiste se o assistente fala como programador. | Não é caso de skill: colocar o jeito de falar no `CLAUDE.md` da pasta, que o Claude lê toda vez. Um produto deveria já vir com esse arquivo pronto, com tom simples por padrão. |
| 2026-10-08 | A pasta dele não tinha a **camada do sistema** (identidade, regras, memória, histórico, habilidades). Sem ela, não havia onde salvar o progresso da migração. | Na opinião da Julia, é a parte mais importante para o assistente funcionar bem. | Prompt para o próprio Jarvis montar essa pasta, fazendo perguntas simples antes de construir. Para um produto, essa estrutura seria o "esqueleto" que vem pronto, personalizado por uma entrevista curta. |
| 2026-10-08 | O Jarvis lia os relatórios da clínica direto da pasta **Downloads**. Não havia pasta de Fontes Brutas. | Downloads é pasta de passagem: some, não tem backup, e as conclusões ficam só na conversa. E relatório de clínica pode ter dado de paciente (LGPD). | Sugerida pasta `50 🗃️ Fontes Brutas` com original intocado + nota processada + tabela de indicadores mês a mês. Para um produto, a pasta de fontes e a regra de dados sensíveis viriam no esqueleto. |
| 2026-10-08 | Tinha o **Todoist** conectado ao Claude, mas não abre o app. Ele também tem TDAH e usa o Claude quase todo dia. | App externo de tarefas é abandonado: exige lembrar de abrir. Mesmo padrão da Julia. | Tarefas dentro do assistente (`Tarefas.md`), captura por fala e tarefas do dia mostradas na primeira conversa. Para o público com TDAH, isso pode ser o principal argumento de venda: as tarefas aparecem onde a pessoa já está. _(inferência)_ |
| 2026-10-09 | O conector do Gmail **não abre anexos**, e a extensão do Chrome estava desconectada. O Paulo teve que baixar as guias e soltar na Caixa de Entrada. | Boleto, guia e comprovante chegam quase sempre como anexo. Para o caso de uso financeiro, isso é o caminho principal, não exceção. | Na instalação, deixar a extensão do Chrome conectada e testada. Plano B ensinado no primeiro dia: "baixa e solta na Caixa de Entrada". |
| 2026-10-09 | A varredura automática foi atualizada, mas ficou **sem testar**: depende de a pessoa clicar em "Executar agora" e aprovar as permissões. | Automação que nunca rodou dá falsa segurança: a pessoa acha que está coberta. | Na montagem, rodar a primeira execução junto com a pessoa. O assistente lembra até a primeira execução acontecer. |
| 2026-10-09 | Dois erros de número: abateu um PIX de R$ 210 da conta errada e disse que a guia de ISS vencia dia 10 (vencia dia 12, depois 13). Os dois foram corrigidos no mesmo dia. | Com dinheiro, erro pequeno custa caro e corrói a confiança. | Regra para o kit: valor e vencimento só saem do documento, nunca de dedução; o que for dedução vem marcado. Em conciliação, perguntar antes de abater um pagamento de origem incerta. |

### Linha do tempo (2026-10-08, à noite)

| Hora | O que aconteceu |
|---|---|
| 18h22 | Criou a pasta do Jarvis no Google Drive. |
| 18h29 | Conectou o Drive e começou a conversar com o Claude (no chat). |
| 18h41 | Percebeu que o Claude não conseguia editar os arquivos no Drive. |
| 18h47 | Abriu o que achava ser o app do Claude (era o atalho do Chrome). |
| 18h54 | Começou a usar o Claude Code, mas caiu no modo nuvem pedindo GitHub. |
| 19h05 | Tentou usar a pasta do computador, e o site pediu para instalar o app. |
| 19h18 | Abriu o local do atalho e descobriu que era do Chrome. |
| ~19h20 | Começou a instalar o app pela Microsoft Store. |
| 19h31 | Instalação pela Store terminou (cerca de 11 minutos). |

**Leitura:** cerca de 1h10 até o app certo estar instalado, quase toda em configuração. Só uns 12 minutos (18h29 às 18h41) foram de conversa de verdade montando o assistente. _(Os horários foram ditos como "6h22" etc.; assumi que eram da noite, pelo print com instalação às 18h45.)_

**Padrão até aqui:** os três problemas são de **configuração inicial**, não de uso. A pessoa escolhe sozinha o caminho mais óbvio (chat, Drive, opção padrão) e todos levam ao lugar errado. Um produto precisaria entregar isso já configurado ou com um guia que não deixa escolha. _(inferência)_

**Ainda a observar:** se o chat conseguiu criar a nota "Onde parei" no Drive; quanto tempo a montagem levou no total; o que ele usa de verdade nas primeiras semanas.

## Primeiro dia de uso real do pai (2026-10-09)

Fonte: relatório "O que fizemos hoje" que o próprio Jarvis escreveu, mandado pelo pai às 11h16.

**O que aconteceu numa manhã.** O pai pagou R$ 26.384,03 (6 guias de parcelamento da Prefeitura + vale-transporte), cinco dias antes do vencimento. O Jarvis conferiu os 7 comprovantes com as guias, um a um. Também achou um boleto perdido (e-mail não lido dentro de uma conversa antiga), descobriu pelo print que a guia de ISS não chegou porque o e-mail estava digitado errado, montou a lista do que vence até dia 20, criou um controle de injetáveis com ficha para imprimir, reorganizou o arquivo da equipe e fechou todas as [[Sugestões para o Jarvis]].

**O momento "nossa, isso ajudou" ainda não é visível para ele.** O que ele disse: a Pat pergunta no almoço como foi a manhã, e ele responde que pagou umas contas e "o resto foi meio rotina". Ele brinca, mas o valor fica invisível: o trabalho do assistente vira "rotina" na cabeça da pessoa. _(inferência)_

**O que isso ensina para o produto:**
- **O resumo do dia é o argumento de venda.** O relatório que o Jarvis escreveu é exatamente o "antes e depois" que a pesquisa recomendou. Vale virar habilidade do kit ("Resumo do dia"), com números no fim: quanto foi pago, quanto foi conferido, o que foi encontrado. _(inferência)_
- **O caso de uso que pegou foi o financeiro**, não o de tarefas: contas, guias, comprovantes, conciliação. Para pequeno negócio, "conferir e não deixar vencer" pode ser a dor principal.
- **As regras funcionaram.** O Jarvis não apagou de vez (o pai apagou), pediu ok antes de mover arquivos, e recusou montar um recebimento para a receita não aparecer, sugerindo levar à Eloplus (contabilidade). Para pequenas empresas, o kit deve prever esse limite com tom respeitoso.
- **A personalização acontece no uso.** Glossário, "na clínica não se usa Dra.", quem é quem na equipe. Nada disso sairia da entrevista inicial.
- **O assistente já faz a autocrítica** (seção "onde o Jarvis errou"). Bom para confiança.

## Próximo passo
- [x] Anotar como foi a montagem com o pai (tempo, dúvidas dele, o que ele usou na primeira semana). Primeiro dia anotado acima; falta a semana.
- [ ] Perguntar ao pai, depois de 1 ou 2 semanas: "teve algum momento em que o Jarvis te ajudou de verdade?" A resposta é matéria-prima para a venda.
- [x] Sugerir ao pai organizar as pastas com dígitos e emojis. Feito: pastas numeradas em 2026-10-08 e todas as [[Sugestões para o Jarvis]] decididas em 2026-10-09.
