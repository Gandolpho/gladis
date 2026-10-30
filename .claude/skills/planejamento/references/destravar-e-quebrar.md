# Destravar e Quebrar

## Índice
1. Modo Destravar
2. Modo Quebrar
3. Etapas de trabalho de design
4. Exemplo de quebra
5. Quando algo está bloqueado

## 1. Modo Destravar
1. **Despejar:** peça para ela listar tudo o que está na cabeça, sem ordem. Não comente nada ainda.
2. **Separar 3:** ajude a escolher só 3 coisas que importam agora. O resto vai para as tarefas sem data: guardar, não esquecer.
3. **Escolher 1:** das 3, qual alivia mais se ficar pronta, ou tem prazo mais perto?
4. **Encolher:** reescreva o primeiro passo como uma versão de 5 minutos.
5. **Começar:** sugira fazer só esses 5 minutos. Ela pode parar depois, e está tudo bem.

Responda curto: a uma coisa, o primeiro passo e onde o resto ficou guardado. Ofereça registrar o que saiu do despejo em `02 ✅ Tarefas/`.

## 2. Modo Quebrar
1. Se não estiver claro: é de trabalho (design) ou pessoal?
2. **Pessoal:** quebre direto em passos curtos, seguindo a regra de escrita, até cada passo poder ser começado sem pensar.
3. **Trabalho de design:** use as etapas abaixo para ordenar. Para ela, entregue só as ações simples, agrupadas com títulos humanos.
4. **Teste final:** se ela não conseguir dizer o primeiro passo em 30 segundos, ainda está grande. Quebre mais.

## 3. Etapas de trabalho de design
Uso interno, para ordenar. Os títulos da coluna do meio são os que ela vê.

| Etapa | Título na lista | Tipo de tarefa no Notion |
|---|---|---|
| Entender o pedido, ler o briefing, listar dúvidas | Entender o pedido | Entendimento e Definição; Alinhamento de Escopo com PO |
| Rascunhar direções, decidir o que testar | Desenhar opções | Design Sprint |
| Construir no Figma | Montar no Figma | Design Sprint; Ajustes em protótipos |
| Validar | Testar com quem usa / com o dev / com o time | Validação de Usabilidade; Validação Técnica; Validação Interna |
| Mostrar e ajustar | Mostrar pra [pessoa] | Revisão de conteúdo e protótipo |
| Documentar | Deixar pronto pro dev | Documentação de Design |
| Conferir o que foi construído | Testar na homologação | QA de UX |

Para pesquisa, use a skill `pesquisa-ux`; para crítica antes de mostrar, `critica-design`; para documentar, `handoff-documentacao`; para textos, `escrita-ux`.

## 4. Exemplo de quebra
Pedido: "fazer a tela do Clube para o cliente".

```markdown
**Entender o pedido**
- [ ] Abrir o card do Clube no Notion (2 min)
- [ ] Ler o debriefing e os critérios de aceite (10 min)
- [ ] Escrever os estados da assinatura numa lista (15 min)
- [ ] Anotar as dúvidas pro PO (10 min)

Depois: desenhar opções · mostrar pra design lead · montar no Figma · deixar pronto pro dev
```

Mostre o primeiro grupo em detalhe; os outros como uma linha.

## 5. Quando algo está bloqueado
Descubra o tipo de bloqueio. Para ela, escreva só a ação.

| Tipo (uso interno) | O que fazer | Como aparece para ela |
|---|---|---|
| Falta definição (PO) | Parar e perguntar; não inventar regra | "Mandar a dúvida X pro PO no Slack (5 min)" |
| Falta aprovação (design lead) | Avançar em outra coisa enquanto espera | "Enquanto não responde: [outra tarefa]" |
| Dúvida técnica (dev) | Fazer uma versão simples enquanto valida | "Perguntar pro dev se X é possível (5 min)" |
| Falta acesso ou material | Pedir a quem tem | "Pedir o link do briefing pro PO (2 min)" |
