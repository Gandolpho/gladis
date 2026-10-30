---
tipo: documento
contexto: pessoal
status: aprovado
data: 2026-10-07
tags: [tema/arquitetura-de-sistemas]
---

# PRD · Migração do Notion

_Regra PRD First: nada é migrado antes de este documento ser aprovado._

## Problema
O Notion da Julia tem duas áreas grandes: a "Biblioteca de registros" (rascunho de segundo cérebro, com o Livro de receitas) e o "Meu Guia de UX". O conteúdo tem valor, mas está desorganizado, e parte dele não é mais relevante. Copiar tudo traria a bagunça junto e encheria o cofre novo de coisa inútil. Migrar à mão é inviável para ela.

## Objetivo
Trazer **só o que vale**, já **reescrito no formato do cofre**, sem perder nada sem querer e sem dar trabalho para a Julia além de aprovar.

**Deu certo quando:**
- Cada item do Notion tem um destino registrado: migrado, destilado, deixado no Notion ou descartado, com o motivo.
- As notas novas seguem as convenções do cofre (propriedades, tags, links) e são mais curtas e claras que a origem.
- A Julia gastou, por lote, só o tempo de revisar a triagem e conferir uma amostra.

## Princípio central: destilar, não copiar
O Notion **continua existindo e é a fonte original**. Por isso não precisamos de uma cópia bruta no cofre. Cada nota nova guarda o link de volta para a página de origem (propriedade `origem`). Se um dia faltar algo, o original está lá.

## Escopo
**Dentro:** "Meu Guia de UX" e "Biblioteca de registros", exceto o Livro de receitas.
**Fora:** o Livro de receitas, que entra pela fase 9 com PRD próprio. Também fica de fora qualquer edição ou exclusão no Notion.

## Como funciona: um lote por vez

Um **lote** é um caderno ou uma seção, por exemplo "Leis de UX". Nunca a área inteira de uma vez.

**1. Inventário (automático, só leitura).** O Claude lê a estrutura do lote (títulos, tamanho, data da última edição, subpáginas) sem trazer o conteúdo inteiro, e monta uma nota de triagem com uma sugestão para cada item:

| Etiqueta | Quando | O que acontece |
|---|---|---|
| ⚪ **Preservar** | Texto escrito pela própria Julia, como as páginas do **Glossário de UX** do Meu Guia de UX | Vem **com o texto idêntico, palavra por palavra**. O Claude só acrescenta propriedades no topo e uma seção "Conexões" separada no fim. Nunca resume, corrige nem reorganiza o texto |
| 🟢 **Migrar** | Conteúdo atual, útil e já bem escrito | Vira nota nova, só ajustada ao formato do cofre |
| 🟡 **Destilar** | Útil, mas bagunçado, repetido ou longo demais | Vira nota nova **reescrita**: resumida, organizada e linkada |
| 🔵 **Deixar no Notion** | Pode ser útil um dia, mas não agora | Não vem. Fica registrado com link, para achar se precisar |
| 🔴 **Descartar** | Vazio, duplicado, obsoleto ou rascunho abandonado | Não vem. **Nada é apagado no Notion** |

Marca extra, que pode vir junto com qualquer etiqueta: 💼 **propor ao Career OS**, para conteúdo que pode virar evidência de carreira. É só uma sugestão, e segue o protocolo do Career OS (proposta + aprovação).

O Claude justifica cada sugestão em poucas palavras, por exemplo: "sem edição desde 2023", "duplica a página X", "vazio".

**2. Triagem (Julia, poucos minutos).** A Julia lê a nota de triagem e só muda o que discordar. O resto vale como aprovado. **Nada é criado antes deste passo.**

**3. Transformação (automático).** Para os itens 🟢 e 🟡, o Claude cria **notas novas** no lugar certo do mapa:
- **Meu Guia de UX** vai para `30 📚 Conhecimento/`. Cada ideia forte vira uma nota de Conceito, curta e linkada (por exemplo, uma nota por lei de UX). Os materiais de referência viram notas de Fonte.
- **Biblioteca de registros** vai para cada área conforme o tema (Rotina e Casa, Ideias, Pessoas...), e o Claude decide pelo mapa.
- Toda nota nova leva: propriedades, tags da lista oficial, links para conceitos relacionados que **já existem** no cofre e `origem: <link do Notion>`.
- Conteúdo que é inferência do Claude, e não da Julia, recebe a marca _(inferência)_.

**4. Verificação (automático + amostra).**
- Roda a skill `revisao-integridade`.
- O Claude compara uma amostra de notas destiladas com a origem, para garantir que nenhuma ideia importante se perdeu na reescrita.
- A Julia abre 2 ou 3 notas e diz se o tom e o tamanho estão bons.

**5. Registro.** A nota de triagem do lote vira o registro final: cada item do Notion com o destino (link para a nota nova, "deixado no Notion" ou "descartado: motivo"). Uma linha no [[Log]].

## Piloto
Começar com **um lote pequeno do "Meu Guia de UX"**, por exemplo "Leis de UX". O objetivo é calibrar o nível de destilação: quanto resumir, como linkar, o tom das notas. Os lotes seguintes copiam o padrão aprovado no piloto. Se a partir do piloto o processo se repetir igual, ele vira uma skill (`migrar-lote-notion`) pela Regra das 3 Vezes.

## Restrições
- **Glossário de UX é intocável (pedido da Julia, 07/10).** Os textos das páginas do glossário foram escritos por ela e entram com o conteúdo **idêntico**. Nenhuma etiqueta além de ⚪ Preservar, 🔵 ou 🔴 (página vazia) se aplica a eles. Na verificação, o Claude compara o texto migrado com o original e precisa dar 100% igual.
- **Notion só leitura.** O Claude nunca edita, move nem apaga nada no Notion. _(Proposta de regra nova, ver abaixo.)_
- **Tokens:** o inventário lê só a estrutura e os metadados. O conteúdo completo é lido só dos itens 🟢 e 🟡, um lote por vez. O inventário pode ser feito por um subagente com modelo mais leve (Regras, seção 7).
- **Ritmo:** no máximo um lote por sessão, para a revisão não pesar. Sugestão: puxar um lote na revisão semanal de sexta.

## Riscos
| Risco | Mitigação |
|---|---|
| Descartar algo que a Julia queria | Nada some: o Notion fica intacto e a triagem registra tudo com link |
| A destilação perde nuance | Piloto para calibrar + comparação por amostra + link de origem em toda nota |
| Virar um projeto sem fim | Lotes pequenos com começo e fim, e a ordem fica no Plano de Construção |
| Encher o cofre de nota rasa | 🔵 e 🔴 existem justamente para filtrar. Na dúvida, fica no Notion |

## Regra nova proposta (precisa do sim da Julia)
Na seção 1 das [[Regras]], em **Com permissão**: _editar, mover ou apagar qualquer coisa no Notion._ Ler continua liberado.

## Perguntas em aberto
1. O nível de resumo na destilação: prefere notas bem curtas (a ideia em uma frase + exemplo) ou médias (com a explicação inteira nas suas palavras)? O piloto ajuda a decidir.
2. Primeiro lote: "Leis de UX" está bom, ou há outro caderno que você usa mais?

## Ajustes pedidos na aprovação (07/10)
- **Uma página por vez.** Cada lote é **uma única página** do Notion, com as subpáginas dela. Nunca categorizar tudo de uma vez. É mais lento, mas mais certeiro.
- **Ordem:** começar pela **Biblioteca de registros**, página por página.
- **Formato da triagem:** agrupar por destino (⚪ 🟢 🟡 🔵 🔴), com cada item em bloco próprio (nome, por quê, para onde vai), nunca vários itens embolados na mesma linha de tabela.
- **Meu Guia de UX:** as três páginas soltas abaixo do glossário (Anotações ESPM, Organização PDI 2024.2, Demandas Priority Report) são anotações rápidas e **não vêm** para o cofre.
- A Julia não aprovou nem negou as categorizações do exemplo. Elas foram só ilustração.

## Aprovação
- [x] PRD aprovado pela Julia em 2026-10-07
- [x] Regra "Notion só leitura" aprovada junto com o PRD
