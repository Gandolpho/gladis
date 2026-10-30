---
tipo: documento
contexto: pessoal
criado: 2026-10-11
atualizado: 2026-10-14
---

# Acompanhamento · Sistema de Alimentação

Diário de bordo do projeto: o que a gente conversou, em que etapa está, o que foi decidido e o que ainda está aberto. O Claude atualiza ao fim de cada conversa sobre o tema. Entrada do projeto: [[Sistema de Alimentação]].

## Etapas

| # | Etapa | Status |
|---|---|---|
| 1 | Julia faz as perguntas dela ao Claude | sem perguntas por ora (pode voltar a qualquer momento) |
| 2 | Julia envia os prompts antigos que usava para gerar as receitas da semana | feito (1 prompt) |
| 3 | Claude faz a rodada grande de perguntas (40, no chat) | feito (respostas em 2026-10-14) |
| 4 | Claude escreve o PRD, que pode ser dividido em fases. Julia aprova | aprovado em 2026-10-14: [[PRD - Sistema de Alimentação]] |
| 5 | Claude constrói, o máximo possível de forma automatizada, fase a fase | **fase 1 (Fundação) construída em 2026-10-14**; falta o teste dos links e o sim dela para a skill. Próxima: fase 2 (Compras), depois que ela usar a fase 1 |
| 6 | Migração das receitas do Notion (Livro de receitas, banco "Receitas") para o sistema novo | feita em 2026-10-14: 27 receitas em `Receitas/` (ver "Fase 1" abaixo) |

Regra combinada: nada do sistema é criado antes do PRD aprovado ([[Regras]], seção 2). Esta pasta só guarda o acompanhamento e, depois, o PRD.

## O que a Julia quer (pedido de 2026-10-11)

Registro fiel do pedido inicial, para servir de base ao PRD.

**Visão.** Não um armazém de receitas, e sim um sistema operacional que ajude a tomar decisões melhores sobre alimentação: o que comer, o que preparar, o que comprar e onde.

**Como ela come hoje (o que funciona).**
- Tem muita dificuldade de planejar a semana com antecedência e não gosta de refeições 100% fechadas.
- O que funciona: no começo da semana, vai ao mercado e deixa os ingredientes principais prontos (arroz, frango, batata...). Durante a semana, monta a refeição em 15 a 20 minutos a partir desse pré-preparo.
- Gosta de pré-preparo: carnes marinando, semi-prontas no freezer, cubos de tempero congelados.

**O que o sistema deve fazer.**
1. **Preferências:** guardar o que ela gosta de comer, que receitas gosta e como gosta de preparar.
2. **Despensa:** registrar o que ela tem em casa. Ela avisa que não vai conseguir manter 100% atualizado, então o sistema precisa funcionar com informação incompleta.
3. **Base de receitas:** as receitas dela já prontas (hoje no Notion) e as salvas no Instagram e no YouTube, como fonte de inspiração.
4. **Aprender o gosto dela** e, com o tempo, sugerir coisas novas.
5. **Compras:** organizar melhor, considerar atacado, dividir entre mercados quando valer a pena. Não quer ir a vários mercados todo mês, mas algumas coisas podem ser compradas em lugares diferentes.
6. **Economia:** ajudar a gastar menos.
7. **Decisões sobre alimentação** em geral.

**Como ela quer trabalhar.** Primeiro as perguntas dela, depois os prompts antigos, depois as perguntas do Claude, depois o PRD. Com o PRD aprovado, o Claude constrói sozinho o máximo que der.

## Já registrado antes deste projeto

Vem da fase 9 do [[Plano de Construção]] (2026-10-07):
- Perfil de paladar com comidas que ama, que não gosta, **alergias** e hábitos culinários.
- "O que tem na geladeira?": ela diz os ingredientes e o Claude sugere receitas da base e parecidas de fora.
- Sugestões do Claude, não decididas: área em `20 🧭 Áreas/Cozinha/`, alergia como regra dura, skill `sugerir-receita`.

## Prompt antigo: o que aproveitar

Original em [[2026-10-11 Prompt antigo de sugestão de refeições]].

**O que vale levar para o sistema novo:**
- Perfil fixo (casa, alergias, gostos, desgostos, básicos da despensa) informado **uma vez só**, e não a cada pedido.
- Começar perguntando o que tem em casa além dos básicos.
- Separar o que já tem do que precisa comprar, e fechar com a lista de compras.
- Alergia como regra absoluta.
- Ingredientes fáceis de achar no Brasil.

**O que falta para a visão nova:**
- Ele pensa em **refeições soltas**, uma de cada vez. O jeito que funciona para ela é **pré-preparo de bases + montagem rápida** ao longo da semana.
- Não tem memória: não aprende o que ela gostou, não lembra o que já foi sugerido e não guarda as receitas.
- Não conhece o freezer nem o que já está pré-preparado.
- Não fala de preço, de mercado nem de economia.
- Sempre entrega receitas completas e longas, quando muitas vezes uma combinação do que já está pronto bastaria.

## Rodada de perguntas (etapa 3)

40 perguntas enviadas no chat em 2026-10-11, em 8 blocos: casa e rotina, gosto, pré-preparo, saúde, despensa, compras, receitas e funcionamento. Respondidas em 2026-10-14.

## Respostas da etapa 3 (2026-10-14)

Resumo fiel das respostas às 40 perguntas. É a base do [[PRD - Sistema de Alimentação]].

**Casa e rotina**
- Cozinha quase só para ela. O irmão mora junto e às vezes comem juntos, mas em geral cada um faz a sua comida. Ele divide o armário da despensa.
- Come café da manhã, almoço, lanche da tarde e jantar. O sistema deve cobrir todos os tipos de refeição.
- Hoje cozinha só umas 2 vezes por semana (acha ruim) e pede delivery 1 ou 2 vezes por semana. Quer cortar o delivery ao máximo.
- Quando a base acaba ou o pré-preparo não acontece, ela pede delivery.
- Nem sempre passa o fim de semana no Rio (às vezes vai para a casa dos pais). Modelo que ela propôs: **um dia grande por mês**, num fim de semana no Rio, com a compra do freezer (porcionar carnes, marinar, fazer temperos), mais **2 ou 3 sessões menores por semana**, à noite.

**Gosto**
- **Alergia: mel.** Só isso.
- Ama: arroz, batata, macarrão, frango. Macarrão de molho branco com atum, nhoque, lasanha, estrogonofe, arroz com ovo, batata assada no micro-ondas, batata rösti, curry, canja, caldo verde, linguiça cuiabana, misto quente.
- Café da manhã de quase todo dia: pão com 2 fatias de queijo, 2 de presunto, requeijão light e um ovo.
- **Textura é a maior restrição.** Nada babento (nunca provou quiabo) nem borrachudo. Adora peixe, mas não quer frutos do mar (ostra, lula, camarão). Legumes são difíceis por causa da textura; está incluindo aos poucos e prefere **bem temperados**.
- Culinárias: italiana, brasileira, indiana, chinesa, japonesa, mexicana.
- **Enjoa de repetir.** O que funciona é uma base pronta (ex.: picadinho) que vira pratos diferentes: com batata, curry, sopa, arroz e feijão com fritas.
- Gosta de bastante pimenta e tempero.
- Doces, sobremesas e lanches entram.

**Pré-preparo e cozinha**
- Já faz: cubinhos congelados de feijão, extrato de tomate, alho picado, salsa, cebolinha e alho-poró; brócolis e espinafre congelados; batatas assadas no papel-alumínio na geladeira (viram purê, rösti ou nhoque); arroz pronto para a semana; cenoura picada.
- No freezer agora: um saco grande de nhoque caseiro, feito meses atrás. É o exemplo do que ela quer ter sempre.
- Equipamentos: fogão, air fryer, micro-ondas, panela de pressão elétrica, liquidificador, processador pequeno, batedeira de mão. Forminhas de silicone para porcionar (compradas nesta semana).
- Freezer grande. **Nunca congela refeição pronta, só bases**, e descongela ao longo do dia.
- Dia comum: até 15 minutos, mas gosta de transformar a base (carne pronta vira molho de macarrão, arroz da geladeira vira risoto). **Se não tem nada fácil, tende a esquecer de comer.** Dia com tempo: pratos mais complexos, carnes marinando dias antes.
- Ama cozinhar, é conforto e prazer. Precisa de opções realistas para os dias sem tempo.

**Saúde e nutrição**
- Fez bariátrica e já perdeu 40 kg. Ainda está perdendo peso, mas o foco é uma vida mais saudável e leve, não emagrecer.
- Sem nutricionista e sem plano alimentar.
- Quer saber calorias e macros como informação, sem ser meta. Melhorar proteína, fibra e vitaminas e comer mais legumes. Trabalha sentada no quarto, bem sedentária.

**Despensa**
- Básicos: arroz, batata, batata palha, cebola, tomate, cenoura, requeijão, queijo, presunto, manteiga, Rap10, tapioca, creme de leite, farinha de mandioca, feijão em grão (pouco usado), alho e cheiro-verde congelados, frango, nuggets, batata frita congelada, macarrão rápido (cabelo de anjo no lugar do miojo), Coca-Cola.
- Quer atualizar **falando no chat**. Topa que o Claude estime o estoque e peça confirmação de vez em quando.
- **Joga bastante comida fora**, porque cozinha só para ela, com estômago de bariátrica, e erra nas porções.

**Compras e economia**
- Mora entre a Barra Olímpica e Curicica (Rio). Perto: 2 Mundial, Supermarket, Swift, Atacadão, açougue, Casas Pedro e hortifrúti.
- Hoje compra 2 ou 3 vezes por semana, quase sempre pelo iFood. No iFood gasta menos, porque escolhe só o do dia a dia. No mercado vê coisas e compra demais, por falta de lista.
- Ideal: mercado presencial a cada 2 semanas e iFood só para extras pontuais.
- Não sabe quanto gasta. O primeiro mês serve de base.
- Consegue guardar as notas fiscais. Preços: pesquisar na internet só no primeiro mês, para ter base, e depois usar o que gastar menos token.
- Despensa é um armário comprido e fundo, dividido com o irmão. Pouco espaço para atacado.
- Marcas fixas: farinha de mandioca fina, arroz Tio João, requeijão light Catupiry, frango e presunto Sadia. Mussarela pode variar, mas com qualidade boa. O resto ela vai dizendo ao montar as listas.

**Receitas**
- Notion: umas 20 receitas, uma por página. Não são todas as que ela faz. Importar o Notion primeiro e depois ela traz outras.
- YouTube (mais de 100) e Instagram (pasta enorme): quer mandar **aos poucos**, porque não quer guardar tudo. Perguntou se o Claude consegue tirar receita de vídeo.
- Receita boa: saborosa e não muito difícil. Topa dar nota a toda receita, separando sabor e dificuldade, e aceita uma terceira nota sugerida pelo Claude.

**Como o sistema funciona**
- Base no GLADIS, mas precisa acompanhar pelo celular, principalmente no mercado.
- Claude faz sozinho: transcrever e categorizar receitas (com tags: doce ou salgado, refeição, culinária), gerenciar a despensa, sugerir receitas a partir do estoque, explicar o pré-preparo e ir montando aos poucos um **estoque de semi-prontos** (freezer e despensa).
- **Nada de plano alimentar fixo.** O planejamento normal é: estruturar a compra (carnes, legumes e carboidratos da semana) e sugerir receitas possíveis. Ela escolhe no dia e pede a receita na hora. Se quiser um plano rígido, ela avisa.
- Formatos: receitas em lista ou planilha com nome, tags, tempo de preparo e nota. Lista de compras em **checklist**.
- **O que mais trava: o que comprar.**
- Sucesso em 3 meses: as favoritas já estão no sistema, ela diz o que tem e pergunta o que dá para fazer hoje, e recebe opções simples e mais elaboradas de uma base ampla, sem amarras.

## Decisões

| Data | Decisão | Motivo |
|---|---|---|
| 2026-10-11 | Projeto aberto em `10 🎯 Projetos/Sistema de Alimentação/`, absorvendo a fase 9 do Plano de Construção. | O escopo cresceu de "receitas" para alimentação, despensa e compras. |
| 2026-10-11 | Ordem de trabalho: perguntas da Julia → prompts antigos → perguntas do Claude → PRD → construção. | Pedido dela. |
| 2026-10-14 | Sem plano alimentar fixo. O planejamento é por estrutura de compra (carnes, carboidratos, legumes) mais sugestões, e ela escolhe no dia. | Enjoa de repetir e não consegue planejar a semana antes. |
| 2026-10-14 | Ciclo proposto por ela: dia grande mensal num fim de semana no Rio, mercado a cada 2 semanas, 2 ou 3 sessões curtas por semana e iFood só para extras. | Nem todo fim de semana ela está no Rio. |
| 2026-10-14 | Atualização do estoque pelo chat, com estimativa do Claude e confirmação de vez em quando. | Resposta dela. |
| 2026-10-14 | Receitas do YouTube e do Instagram entram aos poucos, quando ela mandar, e não a pasta inteira. | Ela não quer guardar tudo. |
| 2026-10-14 | Área do sistema: `20 🧭 Áreas/Minha Cozinha/`. | Nome escolhido por ela. |
| 2026-10-14 | Terceira nota da receita: "faria de novo?" (sim, talvez, não). | Sugestão do Claude, aceita. |
| 2026-10-14 | Lista de compras no celular por página privada no claude.ai. | Sugestão do Claude, aceita. |
| 2026-10-14 | Porção: um prato de sobremesa, metade a 3/4 da porção de um adulto, ajustada com o uso. | Ela não sabe medir em gramas. |
| 2026-10-14 | Compra quinzenal sem dia fixo. O Claude lembra depois de uns 12 dias. | Ela decide na hora. O intervalo de 12 dias é sugestão do Claude. |
| 2026-10-20 | Campo das receitas renomeado de `status` para `avaliacao` (quero testar, aprovada, não curti). | `status` é reservado a ativo/pausado/aguardando/concluído. |

## Fase 1 · Fundação (construída em 2026-10-14)

**Entregue** (área [[Minha Cozinha]]):
- Nota da área, [[Perfil Alimentar]] (regras duras, porção, gostos, despensa, marcas) e [[Estoque]] inicial a partir dos básicos dela.
- Template `Receita` (`70 🧩 Templates/`) e visão `Receitas.base` (todas, por refeição, por culinária, quero testar, aprovadas).
- **27 receitas migradas do Notion** (o PRD dizia "umas 20"; o banco tem 27). Só leitura no Notion; nada foi alterado lá. Fotos e vídeos ficaram no Notion (cada nota tem o link do original).
- Skill `cozinha` em `80 🤖 AIOS/Skills/cozinha/` (5 modos, um arquivo de apoio por modo). **Aprovada e instalada em 2026-10-20.**

**O que a migração achou e ela precisa saber:**
- **Pudim de chocolate leva mel** no original (1 colher de sopa). Migrado com `alerta` e a linha riscada. A troca (açúcar? adoçante?) está _(a conferir)_.
- **Receitas incompletas no original** (ficaram com _(a conferir)_ nos trechos que faltam): Empadão da Elda (só a massa, sem recheio nem preparo), Frango do KFC (sem preparo), Torta de limão (sem preparo), Panqueca individual (sem preparo, só o vídeo), Gorditas (inconsistências entre ingredientes e preparo).
- **Todas entraram como `avaliacao: quero testar`**, porque o sistema não sabe quais ela já fez e aprovou. Ela promove falando ("o caldo verde é aprovado, sabor 5").
- **Quantidades originais**: ainda não ajustadas para a porção dela (isso acontece na hora, no modo "me dá a receita"). Só Panqueca individual, Geladinho, Miojo caseiro e Hambúrguer de forno já eram individuais.
- `culinaria` herdou os rótulos do Notion, que misturam culinária e tipo ("família", "fit", "fusão"). Normalizar depois, quando ela quiser.
- `refeicao`, `sabor_tipo` e `proteina` foram inferidos na migração (marcado nas notas). Revisar com o uso.
- Valores nutricionais só no Miojo caseiro (462 kcal, 44 g de proteína, parece alto) e no Hambúrguer de forno (350 kcal, 25 g); vieram da legenda dos vídeos, não foram calculados.
- Ingredientes no Notion eram um banco relacionado ("Stock status"); não foi migrado (a lista dentro de cada página basta).

**Estoque inicial:** quantidades e validades estão `a conferir` e o local de cada item é inferência. Falta uma conferência rápida dela (primeira atualização pelo chat).

**Teste dos links (resultado parcial, 1 link de cada, em 2026-10-14):**
| Plataforma | O que funcionou | O que não |
|---|---|---|
| YouTube | Só o título da página. Sem descrição nem transcrição legíveis. | Receita completa. Precisa que ela cole a descrição ou a transcrição (modo documentado na skill). |
| Instagram | A **legenda inteira abriu** sem login (receita do pudim na leiteira, já no caderno). | Não testado com vários posts; o Instagram costuma bloquear e pode falhar em outros. |

Falta o teste com os **3 links de YouTube e 3 de Instagram** que ela vai mandar. O resultado entra aqui e em [[PRD - Sistema de Alimentação]] (seção "Vídeos").

## Perguntas em aberto

- **Pudim de chocolate:** com o que trocar o mel (açúcar, adoçante, outra coisa)?
- ~~**Skill `cozinha`:** aprovar para instalar?~~ Aprovada e instalada em 2026-10-20.
- **Receitas migradas:** quais ela já fez e aprova? (Promove falando; não precisa responder todas agora.)
- **Links de teste:** mandar 3 do YouTube e 3 do Instagram.


## Registro das conversas

### 2026-10-11 · Abertura
Julia descreveu o que quer (seção acima). Claude criou este acompanhamento e a nota de entrada. Julia não tinha perguntas e mandou o prompt antigo (guardado em Fontes Brutas e analisado acima). Claude enviou a rodada de 40 perguntas. Próximo passo: as respostas.

### 2026-10-14 · Respostas e PRD
Julia respondeu as 40 perguntas (resumo acima) e perguntou se o Claude consegue tirar receita de vídeo (resposta no PRD, seção "Vídeos"). Claude escreveu o rascunho do [[PRD - Sistema de Alimentação]], em 5 fases. Ela respondeu os 5 pontos para decidir no mesmo dia, e o PRD foi ajustado. PRD aprovado no mesmo dia. Próximo passo: construir a fase 1 numa conversa nova.

### 2026-10-14 · Fase 1 construída
Em conversa nova, o Claude leu o PRD e as respostas e construiu a fase 1: área `Minha Cozinha`, Perfil, Estoque, template e visão de receitas, 27 receitas migradas do Notion (só leitura), rascunho da skill `cozinha`. CLAUDE.md, Catálogo, Log, Decisões e Memória atualizados. Um teste técnico de 1 link de cada plataforma mostrou que a legenda do Instagram abre e o YouTube só dá o título. Pendentes com ela: troca do mel no pudim de chocolate, aprovação da skill, os 6 links de teste e a conferência do Estoque.
