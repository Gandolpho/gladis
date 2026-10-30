---
name: pesquisa-ux
description: Pesquisa de UX da Julia, do começo ao fim, em dois modos. Planejar quando ela disser "preciso planejar uma pesquisa", "monta o plano de pesquisa", "que método eu uso", "faz o roteiro de entrevista", "plano de teste de usabilidade", "quantas pessoas eu chamo", "como recruto". Sintetizar quando ela trouxer entrevistas, notas de teste, surveys, transcrições ou tickets e disser "analisa essas entrevistas", "o que a pesquisa diz", "monta as personas", "faz o mapa de jornada", "escreve o PRD a partir da pesquisa". Gera plano, roteiro e plano de teste no modo Planejar, e personas, jornada e PRD rastreáveis até a evidência no modo Sintetizar. Prefira esta skill a uma resposta genérica sempre que o assunto for pesquisa com usuários.
---

# Pesquisa UX

## Índice
1. Por que existe
2. Escolha o modo
3. Princípios dos dois modos
4. Modo Planejar
5. Modo Sintetizar
6. Arquivos de apoio

## 1. Por que existe

A Julia planeja e conduz as pesquisas sozinha e acha difícil planejar de forma eficiente. Esta skill tira o peso da página em branco: começa por um rascunho de plano a partir de pouca informação e refina junto com ela. Depois, transforma os dados em personas, jornada e PRD com rastreabilidade. Os dois modos se conectam: as perguntas do plano guiam a síntese.

## 2. Escolha o modo

| Situação | Modo |
|---|---|
| Ainda não fez a pesquisa; precisa decidir método, participantes, roteiro | **Planejar** |
| Já tem dados (entrevistas, testes, survey, tickets) | **Sintetizar** |
| Fez uma rodada e quer saber o que investigar na próxima | Sintetizar e, nas perguntas em aberto, Planejar a próxima |

## 3. Princípios dos dois modos

- **Pesquisa serve para decidir algo.** Sempre pergunte (ou descubra no projeto) qual decisão a pesquisa vai informar. Sem decisão, a pesquisa vira documento.
- **Comportamento vale mais que opinião.** No plano, pergunte sobre o que a pessoa fez da última vez; na síntese, separe o que ela faz do que diz.
- **Nada inventado.** O que não está nos dados vira pergunta ou PENDENTE.
- **Contexto do projeto primeiro.** No GLADIS, leia a nota de entrada e o `CLAUDE.md` do projeto antes de começar.
- **Pouco por vez.** Mostre o rascunho curto primeiro e detalhe só o que a Julia aprovar. Lista longa paralisa.

## 4. Modo Planejar

Resumo; passo a passo completo em [planejar.md](references/planejar.md).

1. **Uma pergunta para começar:** "Qual decisão essa pesquisa vai ajudar a tomar, e até quando?" Com isso e o contexto do projeto, já monte um rascunho.
2. **Objetivo e perguntas de pesquisa:** um objetivo, de 3 a 5 perguntas respondíveis.
3. **Método:** recomende **um** método principal, com a justificativa em uma frase. Tabela de escolha em [metodos.md](references/metodos.md).
4. **Participantes:** perfil por comportamento, quantidade, critérios de inclusão e exclusão, como recrutar.
5. **Material:** roteiro de entrevista ([entrevista.md](references/entrevista.md)) ou plano de teste ([teste-usabilidade.md](references/teste-usabilidade.md)), consentimento e gravação.
6. **Cronograma e próximos passos:** fases com datas e o primeiro passo concreto de cada uma.
7. **Revisão do plano:** o checklist do fim de `planejar.md`.

Entregáveis: `plano-pesquisa.md` e, conforme o método, `roteiro-entrevista.md` ou `plano-teste-usabilidade.md`, na pasta do projeto.

## 5. Modo Sintetizar

Resumo; passo a passo completo em [sintetizar.md](references/sintetizar.md).

1. Encontrar os dados e listar o que achou, antes de analisar.
2. Analisar: insights com força da evidência (forte, moderada, fraca) e prioridade por frequência × impacto ([analise.md](references/analise.md)).
3. Personas (2 a 4) por padrão de comportamento.
4. Mapa de jornada do fluxo principal, com momentos de verdade ([jornada.md](references/jornada.md)).
5. PRD com requisitos ligados a insights e métricas pelo HEART.
6. No máximo 3 perguntas críticas; o resto vira PENDENTE com método sugerido.

Entregável: `ux-synthesis-report.md` na raiz do projeto, seguindo [relatorio-sintese.md](templates/relatorio-sintese.md).

## 6. Arquivos de apoio

| Arquivo | Conteúdo |
|---|---|
| [planejar.md](references/planejar.md) | Passo a passo do plano e checklist de revisão |
| [metodos.md](references/metodos.md) | Tipos de pesquisa, escolha de método, quantidade de participantes |
| [entrevista.md](references/entrevista.md) | Como escrever perguntas, conduzir e registrar entrevistas |
| [teste-usabilidade.md](references/teste-usabilidade.md) | Tarefas, condução, métricas e triagem de problemas |
| [sintetizar.md](references/sintetizar.md) | Passo a passo da síntese |
| [analise.md](references/analise.md) | Codificação, intensidade, contradições, survey, priorização, HEART |
| [jornada.md](references/jornada.md) | Regras do mapa de jornada e momentos de verdade |
| [plano-pesquisa.md](templates/plano-pesquisa.md) | Modelo do plano |
| [roteiro-entrevista.md](templates/roteiro-entrevista.md) | Modelo do roteiro |
| [plano-teste-usabilidade.md](templates/plano-teste-usabilidade.md) | Modelo do plano de teste |
| [relatorio-sintese.md](templates/relatorio-sintese.md) | Modelo do relatório de síntese |

_Origem: `ux-synthesis` da Julia, ampliada com o modo Planejar a partir de design-skills:ux-research e design:user-research, e com técnicas de síntese de product-management, journey-mapping e ux-strategy. Auditoria de 2026-10-08._
