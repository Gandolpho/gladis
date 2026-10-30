---
tipo: documento
contexto: pessoal
status: aprovado
data: 2026-10-14
tags: []
---

# PRD · Sistema de Alimentação

_Regra PRD First: nada é construído antes de este documento ser aprovado. Base: respostas da etapa 3 no [[Acompanhamento - Sistema de Alimentação]]._

## Problema

A Julia ama cozinhar, mas hoje cozinha só umas 2 vezes por semana e pede delivery 1 ou 2 vezes. O ciclo que trava é este:
1. **Não sabe o que comprar** (a decisão que mais pesa). No mercado, compra por impulso. No iFood, compra 2 ou 3 vezes por semana, sem lista.
2. Sem compra organizada, não há pré-preparo. Sem base pronta, a refeição passa de 15 minutos, e aí ela pede delivery ou esquece de comer.
3. Cozinha só para ela, com estômago de bariátrica, erra nas porções e joga comida fora.
4. As receitas estão espalhadas (Notion, mais de 100 no YouTube, uma pasta enorme no Instagram) e nada aprende com o que ela gosta.

Planos alimentares fechados não funcionam para ela (enjoa de repetir e não consegue planejar a semana com antecedência). Registro manual frequente também não funciona ([[Identidade]]).

## Objetivo

Um sistema em que ela **fala no chat** e o Claude faz o trabalho de organizar. Em 3 meses:
- As receitas favoritas estão no caderno, com tags, tempo e nota.
- Ela diz o que tem (ou o Claude já sabe, por estimativa) e pergunta "o que dá pra fazer hoje?". Recebe opções simples e mais elaboradas, sem plano fixo.
- A compra tem lista, dividida por mercado, e o gasto mensal é conhecido.
- O freezer tem sempre um estoque de bases e semi-prontos, como o saco de nhoque de hoje.

**Como saber que deu certo** (sinais, não metas rígidas): menos pedidos de delivery por semana que no mês 1; menos idas ao iFood por semana; menos comida jogada fora (ela diz); gasto mensal conhecido a partir do mês 2.

## Como o sistema funciona (visão geral)

O coração é o modelo que já funciona para ela: **base pronta → pratos diferentes**. Um picadinho vira curry, sopa, molho de macarrão ou prato com arroz e feijão. O sistema organiza tudo em torno disso.

**O ciclo do mês**
- **Dia grande (1 por mês)**, num fim de semana no Rio: compra das carnes e do que vai para o freezer, porcionamento nas forminhas de silicone, marinadas, cubos de tempero e bases grandes (nhoque, por exemplo). O Claude entrega um roteiro na ordem certa, aproveitando os equipamentos ao mesmo tempo.
- **Mercado a cada 2 semanas**, com lista em checklist, dividida por mercado.
- **2 ou 3 sessões curtas por semana**, à noite: arroz, batatas assadas, uma base de carne, legume picado.
- **iFood só para extras**, a partir de uma lista curta, e não por impulso.

**No dia a dia**, tudo pelo chat:
- "Acabou o requeijão", "comprei frango", "fiz o nhoque" → o Claude atualiza o estoque.
- "O que dá pra fazer hoje?" → 3 opções: uma de até 15 minutos com as bases prontas, uma média e uma mais elaborada. Ela escolhe e pede a receita na hora.
- "Vou pedir delivery" ou "tô sem cabeça" → o Claude oferece duas opções de emergência do estoque antes.
- "Fiz o curry, sabor 5, dificuldade 2" → nota registrada no caderno.
- Um link do YouTube ou do Instagram → vira receita no caderno.

## Escopo

**Dentro**
- Perfil alimentar: alergia, texturas, gostos, culinárias, marcas, porção e objetivos leves de nutrição.
- Caderno de receitas: uma nota por receita, com tags e notas, e visão em planilha (Bases).
- Catálogo de **bases e pré-preparos**: como fazer, como congelar, quanto dura e em que pratos cada base se transforma.
- Estoque estimado (armário, geladeira e freezer), atualizado pelo chat.
- Compras: mapa dos mercados (o que comprar onde), lista em checklist, histórico de preços a partir das notas fiscais e gasto mensal.
- Sugestões: "o que dá pra fazer hoje", cardápio de emergência anti-delivery e receitas novas parecidas com as que ela gosta.
- Nutrição leve: calorias, proteína e fibra **estimadas** por porção, só como informação. Estratégias para colocar mais legumes de um jeito que respeite a textura.
- Importação de receitas: Notion primeiro (umas 20), depois YouTube e Instagram, aos poucos, quando ela mandar.
- Acesso pelo celular para a lista de compras.

**Fora**
- Plano alimentar fixo. Só se ela pedir, caso a caso.
- Meta ou contagem obrigatória de calorias, e orientação clínica. O sistema não substitui nutricionista.
- A comida do irmão (só o espaço dele no armário é levado em conta).
- Comprar por ela: o Claude monta a lista e nunca faz pedido no iFood nem em lugar nenhum.
- Importar as pastas inteiras do YouTube e do Instagram de uma vez.
- Editar qualquer coisa no Notion (só leitura).

## Estrutura proposta

A pasta do projeto guarda só o PRD e o acompanhamento. O sistema em uso é contínuo, então mora numa área nova:

```
20 🧭 Áreas/Minha Cozinha/
  Minha Cozinha.md           nota da área, com links para tudo
  Perfil Alimentar.md        alergia, texturas, gostos, marcas, porção
  Receitas/                  uma nota por receita + visão Receitas.base
  Bases e Pré-preparos/      uma nota por base (picadinho, nhoque, cubos de tempero...)
  Estoque.md                 armário, geladeira e freezer, em tabelas curtas
  Compras/
    Mercados.md              o que comprar em cada mercado e com que frequência
    Lista de Compras.md      checklist da compra atual
    Preços.md                histórico de preços por item e mercado
    Gastos.md                gasto por mês
80 🤖 AIOS/Skills/cozinha/   a skill que opera tudo (SKILL.md enxuto + arquivos de apoio por modo)
```

Notas fiscais e prints de receita entram em `50 🗃️ Fontes Brutas/`, como hoje.

**Nota de receita (propriedades)**
- `refeicao`: café, almoço, jantar, lanche, sobremesa (pode ter mais de uma)
- `sabor_tipo`: doce ou salgado
- `culinaria`: brasileira, italiana, indiana, chinesa, japonesa, mexicana...
- `proteina` e `usa_bases` (links para as bases do catálogo)
- `tempo_ativo` e `tempo_total` (com as bases prontas e do zero, quando mudar muito)
- `rende` (porções no tamanho dela) e `congela_bem`
- `avaliacao`: quero testar, aprovada ou não curti
- `nota_sabor` e `nota_dificuldade` (1 a 5), e `faria_de_novo` (sim, talvez, não)
- `fonte` e `link_original`
- `kcal_porcao`, `proteina_g` e `fibra_g`, sempre marcados como estimativa
- `ultima_vez` (data em que fez)

O corpo da nota tem ingredientes (já na porção dela), modo de preparo e "variações com o que costuma ter em casa".

**Estoque estimado.** Cada item tem local, quantidade aproximada, data de entrada e validade estimada. Os básicos do perfil têm a marca "sempre ter", que gera a lista de compras sozinha quando acabam. Quando o Claude estimar, a linha leva _(estimativa)_. Antes de sugerir algo que depende de um item incerto, ele pergunta "ainda tem X?".

## Requisitos

**Regras duras**
1. **Mel nunca entra**, nem como "parecida". Inclui produtos que podem ter mel: molho barbecue, mostarda e mel, granola, alguns pães e molhos prontos. Nesses casos o Claude avisa "conferir o rótulo".
2. Nada babento nem borrachudo, e nada de frutos do mar. Peixe pode.
3. Nunca sugerir congelar a refeição pronta. Só bases.
4. Nunca montar plano fixo sem ela pedir.
5. Receita que não foi testada por ela fica como "quero testar" até ela dar nota.
6. Informação que não estava no vídeo ou no texto original não é inventada: vira _(a conferir)_.

**Receitas**
7. Migrar as ~20 receitas do Notion (Livro de receitas, banco "Receitas"), uma nota por receita, com tags e propriedades preenchidas.
8. Importar receitas de link do YouTube, link do Instagram, texto, print ou receita ditada no chat. Ver "Vídeos" abaixo.
9. Registrar nota no chat, em uma frase, e atualizar `ultima_vez`.
10. Visão em planilha com nome, tags, tempo e notas, com filtros por refeição, culinária e tempo.

**Estoque e porções**
11. Atualizar pelo chat, aceitando frases soltas.
12. Ao registrar uma compra ou um pré-preparo, o Claude atualiza o estoque sozinho (o que entrou, o que saiu).
13. Aviso de "usa antes que estrague" quando uma validade estiver perto.
14. Receitas e compras sempre na porção dela, para reduzir desperdício: cabe num **prato de sobremesa** e equivale a metade ou 3/4 da porção de um adulto. O Claude calcula a partir de uma porção adulta padrão e ajusta conforme ela disser "sobrou" ou "faltou". Porções extras viram base congelada, nunca sobra na geladeira.

**Compras**
15. Planejar a compra por estrutura (proteínas, carboidratos, legumes e básicos que acabaram) e mostrar de 5 a 8 sugestões de pratos possíveis com aquilo. Ela escolhe no dia.
16. Lista em checklist, agrupada por mercado e por seção, com as marcas fixas.
17. Mapa dos mercados próximos (2 Mundial, Supermarket, Swift, Atacadão, açougue, Casas Pedro e hortifrúti): o que compensa comprar em cada um, levando em conta o espaço do armário.
18. Mês 1: pesquisa de preços na internet para ter base. Depois: histórico a partir das notas fiscais e pesquisa só quando valer a pena.
19. Gasto por mês a partir das notas fiscais. Meta só depois do mês 1, se ela quiser.
20. Lista de compras numa página privada publicada no claude.ai, que abre no celular, com os itens marcáveis e salvos. O Claude atualiza a página a cada compra.

**Pré-preparo**
21. Catálogo de bases, cada uma com "vira o quê" (links para as receitas que usam a base).
22. Roteiro do dia grande mensal: ordem das tarefas usando panela de pressão, air fryer, forno e fogão ao mesmo tempo, porcionamento e etiquetas.
23. Roteiro curto das sessões da semana (até 1 hora).
24. Montar aos poucos o estoque de semi-prontos: a cada compra grande, sugerir 1 base nova para testar.

**Sugestões e aprendizado**
25. "O que dá pra fazer hoje": 3 opções em níveis diferentes, priorizando o que está perto de vencer e as bases prontas.
26. Cardápio de emergência: sempre ter de 3 a 5 opções de até 15 minutos com o que costuma ter em casa (arroz com ovo, nhoque congelado, cabelo de anjo...).
27. Receitas novas: sugerir a partir do que ela deu nota alta (culinária, base e tempo), marcadas como "quero testar".
28. Legumes: priorizar formas que respeitam a textura (assados crocantes, purê, sopa batida, ralados no molho ou na carne) e sempre bem temperados.

**Integração com o GLADIS**
29. No "monta meu dia", **uma linha no máximo** sobre comida, só quando houver algo: tirar algo do freezer para descongelar, um item perto de vencer, a compra quinzenal já passando do prazo. Isso muda a rotina do `CLAUDE.md` e entra na aprovação deste PRD.
30. A compra quinzenal não tem dia fixo: ela decide na hora. Quando passarem uns 12 dias da última compra, o Claude lembra e já oferece a lista.

## Vídeos do YouTube e do Instagram

Resposta à pergunta da Julia: **o Claude não assiste vídeo nem escuta áudio. Ele lê texto.** Na prática:
- **YouTube:** muitos vídeos de receita têm a receita na descrição, e muitos têm transcrição (legenda automática). Se der para ler um dos dois, o Claude monta a receita.
- **Instagram:** a receita costuma estar na legenda do post. O Instagram pede login para muita coisa, então talvez o Claude não consiga abrir o link sozinho.
- **Quando não der:** ela manda um print da legenda ou cola a transcrição (no YouTube fica em "...mais" → "Mostrar transcrição"). O que faltar vira _(a conferir)_, nunca chute.

Na fase 1, o Claude testa com 3 links de cada plataforma e registra aqui o que funciona.

## Fases

Cada fase termina com a Julia usando o que foi feito. Com o PRD aprovado, o Claude constrói sozinho, mostra o resultado e só para onde as Regras pedem permissão (aprovar a skill, ativar automação).

| Fase | Entrega | Pronto quando |
|---|---|---|
| **1 · Fundação** | Área `Minha Cozinha`, Perfil Alimentar, template de receita, visão Receitas, migração das ~20 receitas do Notion, Estoque inicial a partir dos básicos, skill `cozinha` (rascunho) com os modos atualizar estoque, o que dá pra fazer hoje, me dá a receita, dar nota e importar receita. Teste dos links de vídeo. | Ela pergunta "o que dá pra fazer hoje?" e recebe opções vindas do caderno e do estoque. |
| **2 · Compras** | Mapa dos mercados, pesquisa de preços base, planejamento da compra por estrutura, lista em checklist no celular, leitura de nota fiscal, Preços e Gastos. | Ela faz uma compra quinzenal com a lista do sistema e a nota fiscal entra no histórico. |
| **3 · Pré-preparo e freezer** | Catálogo de bases com "vira o quê", roteiro do dia grande mensal, roteiro das sessões curtas, controle do freezer com validade. | Um dia grande feito com o roteiro, e o freezer aparece no Estoque. |
| **4 · Aprendizado** | Cardápio de emergência, sugestões novas a partir das notas, nutrição estimada nas receitas, estratégia de legumes. | Pelo menos uma receita nova sugerida pelo sistema foi testada e avaliada. |
| **5 · Automação leve** | Linha de comida no "monta meu dia", lembrete da compra quinzenal (por intervalo, sem dia fixo), comida na revisão semanal (delivery, desperdício e gasto do mês). | Ativada com o sim dela (Regras, seção 9). |

A importação do YouTube e do Instagram é contínua, a partir da fase 1, sempre que ela mandar links.

## Restrições

- Skill e automações seguem as [[Regras]]: skill nasce em `Skills em Aprovação/` e só é instalada com o sim dela; automação é construída desativada e só é ativada com o sim dela.
- Notion só leitura.
- **Tokens:** o arquivo Estoque precisa ficar curto (só o que existe, sem histórico). A skill lê só o arquivo do modo em uso. A pesquisa de preços na internet acontece no mês 1 e depois só quando valer a pena. A importação de vídeos é sob demanda.
- Celular: o cofre mora neste computador, e o Claude do celular não lê arquivos daqui. Por isso a lista de compras vai para uma página privada no claude.ai (requisito 20).

## Riscos

- **Estoque desatualizado.** Ela já avisou que não vai manter 100%. Mitigação: o Claude estima, pergunta antes de depender de um item incerto e pede uma conferência rápida antes de cada compra ("ainda tem isso?").
- **O sistema virar mais uma coisa para manter.** Mitigação: tudo pelo chat, nenhum formulário, nenhuma planilha para ela preencher.
- **Construir demais antes de usar.** Mitigação: cada fase só começa depois de ela usar a anterior por pelo menos uma compra ou uma semana.
- **Estimativa nutricional errada.** Mitigação: sempre marcada como estimativa, sem virar meta.

## Pontos decididos (2026-10-14)

1. **Nome da área:** `Minha Cozinha`.
2. **Terceira nota:** "faria de novo?" (sim, talvez, não).
3. **Celular:** página privada publicada no claude.ai para a lista de compras.
4. **Porção:** um prato de sobremesa, mais ou menos metade a 3/4 da porção de um adulto. Ajustada com o uso.
5. **Compra quinzenal:** sem dia fixo. Ela decide na hora, e o Claude lembra depois de uns 12 dias.

## Critério de pronto

- [ ] As 5 fases entregues e usadas pela Julia.
- [ ] As receitas do Notion no caderno, com tags, tempo e nota.
- [ ] Lista de compras usada no celular em pelo menos duas compras.
- [ ] Gasto do mês 1 conhecido.
- [ ] O freezer com pelo menos 3 bases diferentes, controladas no Estoque.

## Aprovação
- [x] Aprovado pela Julia em 2026-10-14
