---
tipo: documento
contexto: pessoal
status: aprovado
data: 2026-10-09
tags: [tema/ia, tema/arquitetura-de-sistemas]
---

# PRD · Subagentes

_Regra PRD First: nada é construído antes de este documento ser aprovado._

## Problema
Algumas tarefas do GLADIS leem muitos arquivos de uma vez (revisão de integridade com mais de 500 links, inventário do Notion). Hoje tudo isso entra na conversa principal, que fica pesada e cara. E, quando o Claude revisa algo que ajudou a construir, ele carrega o viés da conversa.

## Objetivo
Três ajudantes separados, cada um com instruções, modelo e ferramentas próprios. Eles trabalham fora da conversa principal e devolvem só a conclusão. Deu certo se a revisão de integridade e o inventário gastarem visivelmente menos na conversa principal, e se as críticas apontarem problemas que o Claude principal não viu.

## Escopo
**Dentro:**

| Subagente | Modelo | Ferramentas | O que faz | Devolve |
|---|---|---|---|---|
| `revisor-integridade` | Haiku | Só leitura no cofre (Read, Grep, Glob) | Roda a checagem da skill `revisao-integridade` (links, caminhos, frontmatter, nomes repetidos, notas de entrada) | Lista curta de problemas, separando os seguros de corrigir dos que pedem decisão. O Claude principal corrige |
| `critico-independente` | O mesmo da conversa | Só leitura no cofre | Revisa um arquivo (case, texto de candidatura, PRD, protótipo descrito) **sem o contexto da conversa**, a partir do objetivo e do público informados | Pontos fortes, problemas em ordem de gravidade e perguntas em aberto. Aplica a auditoria de naturalidade e respeita os níveis de `privacy` do Career OS |
| `inventario-migracao` | Haiku | Só leitura no Notion e no cofre | Varre uma página ou área do Notion seguindo o [[PRD - Migração do Notion]] | Lista de itens com a triagem sugerida (migrar, destilar, deixar, descartar). O Claude principal escreve a nota de triagem |

**Fora:**
- Subagente para o "o que eu faço agora?" (é curto e frequente; o custo de começar do zero não compensa).
- Subagentes que escrevem no cofre, mandam mensagens ou mexem em agenda. Todos são só leitura.

## Onde moram
- Original de cada um em `80 🤖 AIOS/Agentes/<nome>.md`.
- `.claude/agents` vira um atalho para essa pasta, igual ao de skills.
- **Precisa de mudança nas Regras, seção 4:** a exceção de `.claude/` passa a incluir o atalho dos agentes. Isso entra junto com a aprovação deste PRD.
- Cada um ganha uma linha no [[Catálogo de Skills]] (seção nova "Agentes") e entra na revisão mensal.

## Restrições
- Instruções curtas: cada subagente aponta para a skill ou o PRD que já existe, em vez de copiar o conteúdo (sem duplicação).
- O Claude chama um subagente só quando a tarefa for de volume ou precisar de olhos novos ([[Regras]], seção 7). A Julia também pode pedir pelo nome.

## Riscos
- Haiku errar na triagem ou deixar passar um link quebrado. Mitigação: o Claude principal confere o que for corrigir, e a triagem continua passando pela Julia.
- O crítico ser genérico sem contexto. Mitigação: o pedido sempre leva objetivo, público e critérios.

## Critério de pronto
- [x] Os três arquivos criados em `80 🤖 AIOS/Agentes/` e o atalho funcionando (09/10)
- [x] Regras (seção 4) e Catálogo atualizados (09/10)
- [ ] Teste: uma revisão de integridade pelo subagente, comparada com a última feita na conversa principal
- [ ] Teste: uma crítica de um texto real, avaliada pela Julia
- [ ] Teste: inventário da página 02 da [[Fila da migração]]

## Aprovação
- [x] Aprovado pela Julia em 2026-10-09
