---
tipo: documento
contexto: pessoal
status: ativo
tags: []
---

# Prompt · Revisão de Regras do GLADIS

Para colar numa conversa nova (modelo mais capaz, esforço no máximo). Backup já feito em `GLADIS backup 2026-10-12`, ao lado da pasta GLADIS. Fases 1 e 2 não editam nada; a Fase 3 só roda depois da aprovação por ID.

```
ultrathink

Quero uma revisão profunda e um aprimoramento das regras do GLADIS. O objetivo é um sistema mais otimizado, mais automatizado e mais robusto, com regras mais completas e precisas, para eu não precisar repetir pedidos nem corrigir os mesmos erros.

## Modo de trabalho
Nesta etapa você NÃO edita nada, a não ser o relatório descrito abaixo. Você lê, analisa e propõe. Só implementa depois da minha aprovação, item por item.
Se algo bloquear de verdade, faça no máximo 3 perguntas objetivas. Fora isso, siga com defaults sensatos e liste as suposições que fez.

## O que ler (na íntegra, nesta ordem)
1. CLAUDE.md
2. 80 🤖 AIOS/Regras.md
3. 80 🤖 AIOS/Identidade.md e Memória.md
4. 80 🤖 AIOS/Insights.md e Histórico/Decisões.md (o que já foi decidido e por quê; não reabra decisão sem motivo forte)
5. 80 🤖 AIOS/Catálogo de Skills.md e as skills `planejamento` e `revisao-integridade`
6. 10 🎯 Projetos/GLADIS/: PRD, Plano de Construção, Ideias - GLADIS
7. Do Career OS e dos projetos da Trinks, só as regras (Regras seção 10 e os CLAUDE.md de projeto), não o conteúdo.
Não varra o resto do cofre.

## Contexto que eu mesma percebo (peso alto na análise)

### Atritos hoje
- Ainda preciso acompanhar o sistema de muito perto. Quero que ele ande mais sozinho.
- **Estou tomando decisões demais para o sistema funcionar.** Isso é o atrito principal. Todo pedido de confirmação para alterar documento, mudar regra, apagar arquivo ou apagar e-mail pesa, principalmente quando é repetitivo.
- Acompanhar o GLADIS pelo Obsidian está ficando complexo, por causa da quantidade de pastas. Por enquanto funciona, mas acho que a visualização não vai se sustentar a longo prazo e em algum momento vou querer um dashboard. Não quero reduzir as pastas, a organização atual é boa. Avalie se isso pede alguma regra; se for só ideia para o futuro, registre em Ideias - GLADIS.
- Com o Notion, preciso dar OK demais para passar informações. Quero menos confirmações nesse fluxo, sem abrir mão das proteções que importam.
- Meus e-mails ainda não entraram no sistema, e isso é uma PRIORIDADE.

### Onde o Claude erra ou eu preciso corrigir
- Eu quero que ele fale comigo de forma simples, mas as regras do sistema NÃO devem ser simples. Quero regras muito bem trabalhadas, que funcionem corretamente e prevejam os erros antes de acontecerem.
- Não quero ter que revisar tudo. Muitos erros o próprio Claude poderia pegar revisando a própria resposta antes de me entregar. Proponha uma regra de autorrevisão (o que conferir antes de entregar, por tipo de tarefa).
- Ainda usamos poucos agentes.

### O que eu gostaria que acontecesse sozinho
- O sistema me dar sugestões por conta própria para deixar minha vida mais eficiente, sem eu pedir.
- Gerenciar minha caixa de entrada: acompanhar, filtrar e limpar e-mails de promoção. Ao propor, trate "apagar" como mover para a lixeira e destaque a mudança de permissão do Gmail (hoje é só leitura) para eu aprovar de forma explícita.
- Passagem de informações do Notion com menos aprovações.
- Agentes que trabalhem sozinhos. Ideias minhas, para você avaliar e melhorar:
  - um agente orquestrador, que gerencia os outros;
  - um agente revisor de PRDs, para revisar os PRDs que o Claude escreve;
  - um agente de organização do sistema, que percebe coisas fora do lugar e as lista num documento, sem corrigir sozinho, e me avisa no resumo do dia.
- No geral: mais coisas feitas por conta própria, com aviso depois, quando for seguro.

### Autonomia gradual para decisões repetitivas (proposta minha, quero que você desenhe como regra)
Aplica-se a ações como apagar e-mail, apagar ou mover arquivo, alterar documento e alterar regra.
1. **Primeiras vezes:** pergunte, normalmente.
2. **Padrão repetido:** quando a mesma ação se repetir várias vezes e eu aprovar quase sempre, o sistema deve perceber sozinho e me sugerir transformar aquela ação em automática. Defina quantas repetições e qual taxa de aprovação disparam a sugestão.
3. **Segundo olhar:** ao automatizar, sugira criar um agente de revisão que reavalie a decisão (por exemplo, "faz sentido apagar isto?") antes de ela ser executada.
4. **Quarentena:** como alternativa ou complemento, as ações de apagar não destroem nada na hora. Os itens vão para uma pasta de quarentena/arquivo, com registro do que foi movido, de onde e por quê, e aparecem no resumo da semana.
5. **Limpeza:** se depois de 1 a 2 semanas eu não reclamar nem restaurar nada, o item pode ser eliminado de vez para liberar espaço. Defina o prazo, e desenhe essa etapa final respeitando as proibições de exclusão definitiva: ela deve depender de mecanismo reversível ou de aprovação minha em lote, não de apagar sozinho.
6. **Trava de segurança:** nada disso vale para regras, Identidade, Memória, nem para qualquer coisa irreversível ou sem cópia. Para alteração de regra e de documento do sistema, o ganho esperado é aprovação em lote (uma lista por semana, em vez de uma pergunta por vez), não autonomia total.
7. Qualquer ação automatizada precisa de log, forma de desfazer e uma regra clara para eu poder "desligar" a automação.

### O que NÃO quero que mude
- A forma como as tarefas e a organização do dia estão sendo trabalhadas.
- As pastas bem divididas. Posso até querer dividir um pouco mais no futuro, mas não reduzir.
- A economia de tokens. É essencial. Quero o sistema o mais econômico possível no dia a dia.
  - Propostas novas podem gastar mais tokens, isso é normal, mas me diga o custo de cada uma.
  - Sempre que eu estiver passando do limite em algo, sugira formas de economizar.

## Fase 1 · Diagnóstico
1. Inventário numerado de todas as regras (arquivo e seção), cada uma classificada como: funciona / ambígua / conflita com outra / redundante / obsoleta / provavelmente nunca acionada.
2. Onde o sistema depende de alguém lembrar (eu ou você), o que é candidato a virar mecanismo.
3. Lacunas: situações recorrentes nas rotinas (daily, tarefa nova, inbox, revisão semanal, "o que eu faço agora", lembretes, projetos, carreira, agenda) que não têm regra clara.
4. Peso por sessão: o que é lido toda vez (CLAUDE.md, Regras, Identidade, Memória) versus o que é sob demanda, e o que está no lugar errado.

## Fase 2 · Propostas
Para cada proposta: ID, problema, texto da nova regra pronto para colar, onde vai morar, tipo de mecanismo (regra escrita, skill, template, propriedade, subagente, tarefa agendada, hook), benefício, risco, efeito no custo de tokens por sessão, esforço (P/M/G).
- Toda regra nova segue a forma: gatilho → ação → exceção → como saber que funcionou → o que fazer se falhar.
- Agrupe por tema (captura e inbox, tarefas e planejamento, revisões e rodízio, memória e aprendizado, integridade do cofre, carreira e Trinks, agenda e integrações, permissões, tokens).
- Inclua o que deve ser removido, fundido ou simplificado, não só o que adicionar.
- Ordene por impacto ÷ esforço e marque "ganho rápido" e "estrutural".
- Proponha pelo menos uma melhoria de automação real (tarefa agendada, subagente, hook ou skill), com o que exatamente seria criado.

## Restrições
- "Mais complexa" significa mais precisa e cobrindo mais casos, não mais longa no que é lido toda sessão. O detalhe vai para arquivos sob demanda; o CLAUDE.md continua sendo um mapa enxuto.
- Regras.md segue como fonte única; nada duplicado entre arquivos.
- Qualquer mudança em permissões ou proibições, destaque à parte e peça confirmação explícita.
- Respeite o Career OS (as regras dele prevalecem) e os CLAUDE.md dos projetos.
- Preserve as preferências já registradas (menos é mais, sem time blocking, convenções de nome e tags).
- Português, notas curtas e escaneáveis.

## Entrega da Fase 1 e 2
Salve tudo em `10 🎯 Projetos/GLADIS/Revisão de Regras 2026-10-12.md`. No chat, dê só: resumo em até 10 linhas, as 5 propostas de maior impacto e as suposições. Antes de me entregar, rode o agente `critico-independente` sobre o relatório (objetivo: regras melhores sem inflar o sistema; público: eu mesma) e incorpore o que fizer sentido.

## Fase 3 · Implementação (só depois da minha aprovação por ID)
- Em lotes pequenos, por tema.
- Registre cada decisão em Histórico/Decisões.md; atualize o Catálogo de Skills e o CLAUDE.md só se o roteamento mudar.
- Depois de cada lote, rode o `revisor-integridade` e me mostre só os problemas.
- Para automações (agendamentos, hooks), mostre exatamente o que será criado antes de criar.
```

## Antes de enviar

- Escolher o modelo mais capaz (Fable 5.1, ou Opus 5.5) e o esforço no máximo, numa conversa nova.
- Em "resumo do dia", confirmar qual página é (daily ou `🏠 Agora.md`).
- Não abrir a pasta de backup no Obsidian durante a revisão.
