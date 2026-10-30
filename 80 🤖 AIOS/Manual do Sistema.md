---
tipo: sistema
atualizado: 2026-10-11
---

# Manual do Sistema

Detalhe de como as rotinas e regras do GLADIS funcionam. **Lido sob demanda**, só quando a situação aparecer. A regra em si (o que pode e o que não pode) continua em [[Regras]]; aqui fica o passo a passo.

## Índice
1. Revisão semanal
2. Rodízio do sistema
3. Autorrevisão por tipo de entrega
4. Referências técnicas
5. Contexto por assunto

---

## 1. Revisão semanal

Sexta, 9h às 9h30 (agenda pessoal). Ordem:

1. Compromissos da semana e tarefas feitas na semana (planilha, aba Feitas). Se ela escreveu no [[Diário]] na semana, ler para perceber padrões, sem citar trechos a menos que ela traga o assunto.
2. Tarefas sem prazo paradas há mais de 2 semanas: fazer, agendar ou largar?
3. Tarefas-ponte conferidas com a origem.
4. Inbox processado e próximas ações dos projetos atualizadas.
5. Insights: conexões, padrões de rotina, avanço da carreira, ideias que merecem canvas. Ler [[Insights]], sugerir de 1 a 3 melhorias e registrar a decisão dela.
6. **Regra das 3 Vezes:** olhar o [[Log]] e as tarefas feitas da semana, somar as repetições na seção "Candidatas" do [[Catálogo de Skills]] e, ao chegar a 3, propor a skill.
7. Ideias novas de [[Ideias - GLADIS]] para ela decidir.
8. **Rodízio do sistema** (seção 2): um item só, em poucos minutos.

## 2. Rodízio do sistema

A revisão do sistema não é uma sessão longa por mês: cada revisão semanal revisa **uma coisa só**. Cada item volta uma vez por mês. O item é definido pelo dia do mês em que cai a sexta:

| Sexta cai nos dias | Item | O que olhar |
|---|---|---|
| 1 a 7 | **Memória** | Cortar o que deixou de valer, mover detalhe de projeto para a nota do projeto (deixando só um link), reagrupar por tema. |
| 8 a 14 | **CLAUDE.md** | Projetos ativos, roteamento e rotinas ainda batem com a realidade? Dá para enxugar? |
| 15 a 21 | **Regras** | Regras que ninguém usa, repetidas ou longas demais; detalhe que pode vir para este Manual. |
| 22 a 28 | **Skills e tokens** | Revisão das skills e agentes do [[Catálogo de Skills]] (manter, aprimorar, aposentar), checkpoint uso real × [[PRD - GLADIS]] e análise de gasto: anexos pesados, rotinas repetidas, conversas longas. |
| 29 a 31 (quando houver) | **Pequenos** | Identidade, `🏠 Agora.md`, este Manual e o tamanho do Log e de Decisões (arquivar só se o Log passar de ~40 KB). |

Em cada item, o Claude mostra o antes e o depois, propõe os cortes e **nada sai sem a aprovação da Julia**. Se a semana estiver cheia, ela pode adiar o item, que vira o primeiro da semana seguinte. A revisão de integridade é separada (Regras, seção 8).

## 3. Autorrevisão por tipo de entrega

Complementa a regra geral (Regras, seção 14). Checagens que já existem em outro lugar não se repetem aqui: o dia na rotina Dia do `CLAUDE.md`, listas de tarefas na skill `planejamento`, textos na auditoria de naturalidade (Regras, seção 12).

| Entrega | Conferir |
|---|---|
| Tarefa nova | Nome é ação; `categoria` válida; ponte com `projeto` e `origem`; não existe tarefa igual aberta |
| Nota ou arquivo novo | Pasta certa pelo mapa; propriedades da lista oficial; frontmatter válido; nome não repetido no `Cofre Claude`; links existem |
| Mudança no sistema | Registros feitos (Mudanças nas Regras, Decisões, Log); `CLAUDE.md` e Catálogo atualizados se o roteamento mudou; nada duplicado entre arquivos; revisão de integridade se mexeu em 5 arquivos ou mais |
| Agenda | Agenda certa (pessoal × Trinks); data, hora e dia da semana conferidos; conflito avisado |
| Documento de projeto ou PRD | Etiquetas do projeto (Confirmado, Hipótese...); lacunas declaradas; decisões "não reabrir" respeitadas |
| Texto que sai do cofre | `privacy` do Career OS e confidencialidade da Trinks; microcopy em 4 a 6 variações |

Quando um erro corrigido pela Julia se repetir duas vezes, ele ganha uma linha nesta tabela.

## 4. Referências técnicas

- **CSS no Obsidian:** em tabelas do Bases, só usar as variáveis `--bases-table-*`. Padding, altura ou borda manual nas células desalinham as linhas. Para ver o resultado, tirar print do Obsidian (computer use) em vez de supor. (2026-10-08)
- **Obsidian:** tema AnuPpuccin; plugins da comunidade Day Planner, Iconize e Calendar (instalados pela Julia em 08/10). A seção Hoje do Agora e o template da semanal usam callouts coloridos (o template `Daily` ficou sem uso em 2026-10-11). A configuração dos plugins fica em `.obsidian` e precisa de permissão.
- **Backup:** o `Cofre Claude` é um repositório git local (sem envio para a internet), criado em 2026-10-11. O Claude salva uma versão no começo e no fim de cada sessão em que mexer em arquivos de sistema e antes de cada lote de mudanças. Ver uma versão antiga: `git log -- <arquivo>`; voltar um arquivo: `git checkout <versão> -- <arquivo>`.

## 5. Contexto por assunto

- **Pesquisa com usuários na Trinks:** planos enxutos (3 a 5 perguntas, poucas tarefas, sessão curta); homologação fica atrás de VPN, então teste com externos usa protótipo com dados fictícios; consentimento verbal no início da gravação; dev e PO em geral não assistem. (2026-10-09)


## 6. Orquestração entre modelos

O Claude não troca sozinho o modelo da conversa (quem escolhe é a Julia, no seletor do app), mas escolhe o modelo dos subagentes.

- **Delegação padrão:** revisão de integridade → sempre o agente `revisor-integridade` (Haiku). PRD e texto importante que sai do cofre → `critico-independente` antes de entregar. Inventário do Notion → `inventario-migracao` (Haiku). Pergunta curta e frequente → nunca subagente, porque ele começa do zero e sai mais caro. O subagente devolve só a conclusão. O modelo principal fica com o que exige raciocínio: construir, decidir, escrever para a Julia e revisar.
- **Modelo desalinhado:** quando o modelo não combinar com a tarefa, o Claude avisa em uma linha: rotina (montar o dia, processar o Inbox, anotar tarefas) num modelo pesado → sugerir Sonnet; construção, decisão ou escrita importante num modelo leve → sugerir Opus.
- **Hora de trocar de conversa:** cada mensagem relê a conversa inteira. O Claude avisa quando a conversa estiver longa, quando o assunto mudar ou quando um tema terminar, com um resumo de passagem de poucas linhas (o que foi feito, onde está, o que falta), e garante que o que importa já está salvo no cofre.
