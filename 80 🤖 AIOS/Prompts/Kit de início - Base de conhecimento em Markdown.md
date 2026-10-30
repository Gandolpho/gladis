---
tipo: sistema
contexto: trabalho
atualizado: 2026-10-08
---

# Kit de início: base de conhecimento em Markdown

> **Para quem vai usar:** envie este arquivo para a IA que você usa (Gemini, Claude, ChatGPT ou outra) e escreva: "Leia este arquivo e me ajude a montar minha base de conhecimento." A IA conduz o resto.

---

## Para a IA: o que você vai fazer

Você vai ajudar uma Product Designer da Trinks a montar uma **base de conhecimento em Markdown**: uma pasta no computador dela com arquivos de texto simples (`.md`), organizados por assunto, que a IA que ela escolher vai ler para trabalhar com o contexto real dos projetos.

Ela não precisa saber Markdown nem montar nada na mão. **Você cria a estrutura, escreve os arquivos e mantém tudo organizado.** Ela só conversa com você.

### Como conduzir

1. **Explique em duas ou três frases** o que vai acontecer, sem jargão técnico.
2. **Faça poucas perguntas, uma de cada vez:**
   - Qual IA e qual app você está usando? (A IA oficial do time é o Gemini. A resposta define se você consegue criar os arquivos direto na pasta ou se vai entregar o conteúdo para ela salvar.)
   - Em quais projetos você está trabalhando agora? Escolha um para começar.
   - Que material desse projeto você já tem? (Briefing, PRD, decisões, atas, pesquisa.)
3. **Recomende o Obsidian** (gratuito) para ela ler e editar as notas. Ele funciona no computador e não envia o conteúdo das notas para a internet. Oriente a criar uma pasta vazia, abrir no Obsidian com "Abrir pasta como cofre" e não instalar plugins da comunidade.
4. **Monte a estrutura mínima** descrita abaixo. Não crie pastas além dessas no começo.
5. **Crie o arquivo de instruções** com o nome certo para a IA dela (seção "Arquivo de instruções").
6. **Monte o primeiro projeto** com o material que ela tiver: nota de entrada e arquivo de decisões.
7. **Explique como ela vai usar a base no dia a dia** com a ferramenta dela (seção "Como usar a base depois").
8. **Termine mostrando** o que foi criado e dando três exemplos de pedidos que ela já pode fazer.

### Se você não consegue criar arquivos

Algumas IAs, no app de chat, só conversam e não salvam arquivos (é o caso do Gemini no navegador). Nesse caso:
- Entregue cada arquivo em um bloco de código separado, com o nome do arquivo e a pasta onde ele deve ficar.
- Explique em uma linha como salvar: no Obsidian, criar uma nota com o nome indicado e colar o conteúdo.
- Sempre que algo for decidido ou atualizado numa conversa, entregue no fim o trecho pronto para ela colar na nota certa (por exemplo, a nova linha do `decisoes.md`). É isso que mantém a base atualizada.

---

## Estrutura mínima

```
Base de Design/
  <arquivo de instruções>   o mapa para a IA (nome depende da ferramenta, ver abaixo)
  Inbox/                    material novo, ainda sem lugar
  Projetos/
    <Nome do projeto>/
      <Nome do projeto>.md  nota de entrada: status e onde parei
      decisoes.md           o que foi decidido, quando e por quem
  Arquivo/                  projetos encerrados, só para consulta
```

Outras pastas (Áreas, Conhecimento, Fontes Brutas) só entram quando houver material para elas. A estrutura cresce com o uso.

---

## Arquivo de instruções

É o mapa da base. A IA lê esse arquivo primeiro, antes de qualquer outro. O nome depende da ferramenta:

| Ferramenta | Nome do arquivo |
|---|---|
| Gemini (app no navegador) | `instrucoes-ia.md` (vai nas instruções do Gem, ver abaixo) |
| Gemini CLI | `GEMINI.md` |
| Claude (app desktop, Claude Code ou Cowork) | `CLAUDE.md` |
| ChatGPT / Codex | `AGENTS.md` |

Se ela usar mais de uma IA, mantenha um arquivo principal com o conteúdo e, nos outros, só a linha: `Leia o <arquivo principal> desta pasta e siga as instruções dele.`

### Modelo

```markdown
# Instruções para a IA

## Quem sou
<Nome>, Product Designer na Trinks. Respostas em português, diretas e didáticas.

## Onde está cada coisa
- Inbox/: material novo, ainda sem lugar. Processe e mova para a pasta certa.
- Projetos/<nome>/: um projeto por pasta. Comece pela nota de entrada.
- Arquivo/: projetos encerrados. Só consulta.

## Regras
- Antes de responder sobre um projeto, leia a nota de entrada e o decisoes.md dele.
- Não invente. Se faltar informação, diga o que falta.
- Toda decisão nova vai para o decisoes.md do projeto, com data e quem decidiu.
- Mantenha a nota de entrada atualizada: status e próxima ação.
- Não leia nem crie arquivos fora desta pasta.
- Nunca salve senhas, tokens, dados pessoais de clientes ou documentos confidenciais na íntegra.
```

---

## Como usar a base depois

Explique para ela o caminho que vale para a ferramenta dela:

- **Gemini no navegador:** criar um **Gem** (um assistente personalizado do Gemini). O conteúdo do arquivo de instruções vai no campo de instruções do Gem, e as notas do projeto entram como arquivos de conhecimento. Quando as notas mudarem, ela atualiza os arquivos do Gem. Alternativa mais simples: anexar a nota de entrada e o `decisoes.md` no começo de cada conversa.
- **Claude no app desktop (Claude Code ou Cowork), Gemini CLI ou Codex:** a IA lê e escreve direto na pasta. Basta abrir a pasta na ferramenta.
- **ChatGPT no navegador:** anexar as notas no começo da conversa, ou usar um projeto do ChatGPT com os arquivos.

Em todos os casos, o hábito que faz a base funcionar é o mesmo: **decidiu, registrou.** O que fica só no chat não vira contexto para a próxima conversa.

---

## Modelos de nota

### Nota de entrada do projeto

```markdown
# <Nome do projeto>

- **Status:** ativo
- **PO:** <nome>
- **Próxima ação:** <uma frase>

## Contexto
<O que é o projeto e para quem, em três ou quatro linhas.>

## Onde parei
<Data> · <o que foi feito por último e o que vem a seguir.>

## Regras de design já confirmadas
- <regra> (<data>)

## Links
- Figma: <link>
- Briefing/PRD: <link ou [[nota]]>
```

### Arquivo de decisões

```markdown
# Decisões: <Nome do projeto>

| Data | Decisão | Quem decidiu | Por quê |
|---|---|---|---|
| AAAA-MM-DD | <o que foi decidido> | <pessoa> | <motivo em uma frase> |
```

---

## Como trabalhar no dia a dia

Depois de montada a base, siga estes fluxos quando ela pedir:

- **"Guarda isso" ou material novo:** coloque no Inbox. Ao processar, crie uma nota resumida na pasta certa e linke o original.
- **Transcrição de reunião:** transforme em ata com decisões, pendências e responsáveis. Decisões vão para o `decisoes.md`.
- **Pesquisa e entrevistas:** agrupe dores e padrões, com uma fala de exemplo para cada um.
- **"Onde eu parei?":** leia a nota de entrada e responda em poucas linhas.
- **Revisão de tela ou copy:** siga as regras confirmadas do projeto. Se algo contrariar uma regra, avise.
- **Pedido repetido:** se ela explicar a mesma coisa três vezes, sugira transformar em regra no arquivo de instruções.

### Boas práticas

- Links entre notas no formato `[[Nome da nota]]`.
- Datas no formato AAAA-MM-DD.
- Notas curtas e escaneáveis.
- Não importar notas antigas em massa. Trazer só o que for usado.
- Material em PDF ou documento longo: guardar um resumo em `.md` e o link do original. A IA lê `.md` gastando bem menos do que lê PDF.

---

## Segurança

- A pasta em si é segura: no Obsidian, as notas ficam no computador. O cuidado é com o que se conecta a ela.
- Plugins da comunidade do Obsidian são feitos por terceiros e podem acessar a pasta inteira. Use só os nativos ou plugins aprovados.
- Só conecte a pasta (ou envie notas) a IAs e ferramentas aprovadas pela empresa, com a conta corporativa. Quando a IA lê uma nota, o conteúdo vai para a empresa da IA processar.
- Nunca guarde nas notas: senhas, tokens, dados pessoais de clientes (LGPD), dados financeiros identificáveis, contratos confidenciais na íntegra. Use um resumo e um link para o documento original no Drive.
- Protótipos e testes usam dados fictícios.
