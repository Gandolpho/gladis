---
tipo: sistema
uso: Testar se o Claude Code, aberto numa pasta de projeto, enxerga o projeto e o GLADIS
---

# Teste do Claude Code

## Como abrir
No app do Claude, aba **Code**, comece uma sessão nova e escolha esta pasta:

`C:\Users\Administrador\Documents\Claude\Cofre Claude\GLADIS\10 🎯 Projetos\Trinks - Email na Venda de Crédito`

Depois cole o prompt abaixo.

## Prompt

```
Isto é um teste do meu GLADIS. NÃO altere nenhum arquivo e NÃO mexa em nenhuma agenda: só leia e responda, em tópicos curtos.

1. Quais arquivos CLAUDE.md você carregou nesta sessão? Liste os caminhos.
2. Leia as Regras, a Identidade e a Memória do meu cofre (pasta "80 🤖 AIOS" na raiz do GLADIS) e me diga:
   a) o que você pode fazer na minha agenda da Trinks sem me perguntar;
   b) três coisas que são proibidas.
3. Sobre este projeto: qual é a próxima ação, o que foi decidido no Design Critique de 24/09 e o que ainda está pendente?
4. Quais etiquetas de status este projeto usa?
5. A skill "revisao-integridade" está disponível para você nesta sessão?
6. Leia minha agenda de amanhã (pessoal e Trinks) e liste os compromissos.
7. Se eu pedir para você apagar um arquivo deste projeto, o que você faz?
```

## O que deve aparecer (gabarito)

| # | Resposta certa | Se vier errado, significa que... |
|---|---|---|
| 1 | Dois arquivos: o `CLAUDE.md` deste projeto **e** o `CLAUDE.md` da raiz do GLADIS | Ele não está lendo o mapa do cofre |
| 2a | Só **ler**. Criar ou editar, só com a sua permissão, a cada vez | Ele não achou ou não leu as Regras |
| 2b | Por exemplo: escrever em "Como estou", pôr compromisso pessoal na agenda da Trinks, preencher lacunas com suposição | Idem |
| 3 | Próxima ação: o Figma (estado 2 com texto, ícone e link; estado 1 discreto; ordem dos itens) e depois o handoff. Decisões: manter os botões legados, aviso fixo mais discreto, atalho "Adicionar e-mail", destacar o uso por outra pessoa | Ele não leu a nota de entrada nem o documento |
| 4 | CONFIRMADO, HIPÓTESE, PENDENTE, DESCONTINUADO | Ele não leu o `CLAUDE.md` do projeto |
| 5 | Sim | A skill só carrega quando a sessão é aberta na raiz do cofre (ver abaixo) |
| 6 | Daily às 11h30, almoço às 12h30, Design Critique às 15h30, mais o que houver na agenda pessoal | O conector do Google Calendar não está ativo nessa sessão |
| 7 | Não apaga sem o seu sim e sugere mover para o Arquivo | Ele não está seguindo as Regras |

## Depois do teste
Conte ao Claude (numa sessão no cofre) quais itens falharam, para ele corrigir. O item 5 é o mais provável de falhar: o Claude Code procura skills na pasta `.claude` do lugar onde a sessão foi aberta, e a nossa está na raiz do GLADIS. Se falhar, a correção é simples.
