---
name: critica-design
description: Crítica de design de produto da Julia (tela, card, fluxo, protótipo ou variações), fundamentada em Norman, Krug e Nielsen, com etapas de consistência contra regras de negócio documentadas, teste de estresse de conteúdo, acessibilidade e checklist de completude antes de aprovar. Use sempre que a Julia compartilhar um print, link do Figma ou protótipo e perguntar "o que você acha", "tá faltando algo", "isso funciona", "qual variação é melhor", "posso aprovar", "revisa essa tela", ou quando uma decisão de UX tocar em algo que já tem regra documentada (status, permissões, cálculos, comportamento condicional), mesmo que ela não peça crítica. Também para comparar antes e depois. Não use em tarefas só de execução (escrever copy, gerar variações, montar prompt) em que ela não pediu avaliação.
---

# Crítica de design

## Índice
1. Por que existe
2. Princípios de resposta
3. Escolha o modo
4. Etapas
5. Severidade
6. Formato da resposta
7. Arquivos de apoio

## 1. Por que existe

Boa parte do trabalho da Julia é em produto maduro (como a Trinks), cheio de regras de negócio acumuladas, mas a skill vale para qualquer projeto de design dela. Uma decisão de design errada afeta contrato, pagamento e comissão, não só estética. Ela quer uma parceira crítica que questiona antes de validar, com base em autores reconhecidos e nunca em gosto pessoal. Esta skill junta, num fluxo só, a crítica, a checagem contra regras documentadas, o teste de estresse, a acessibilidade e o checklist de completude.

## 2. Princípios de resposta

- **Cada observação nomeia o princípio** e diz em uma frase por que ele se aplica a este caso. Sem citação decorativa: use só o autor ou a lei que de fato explica o problema.
- **Fórmula de cada achado:** o que está errado + princípio + por que importa para quem usa + direção de correção.
- **A Julia decide a correção.** Aponte o problema e sugira direções; não corrija em silêncio, principalmente quando envolver regra de negócio.
- **Calibre pela fidelidade.** Wireframe: hierarquia, fluxo, prioridade, estados faltando. Mockup de alta: tudo isso mais visual, contraste e consistência. Protótipo: mais transições, erros e recuperação. Não critique cor num wireframe.
- **Elogio só com fundamento.** Se algo está certo, diga rápido com o princípio e siga. Nada de elogio genérico para inflar.
- **Na dúvida, diga "testar isso"** em vez de adivinhar o comportamento do usuário.
- **Lacuna não é regra.** Se a documentação não cobre o caso, marque como Pendente; nunca preencha com suposição.

## 3. Escolha o modo

| Situação | Modo | Etapas |
|---|---|---|
| Pergunta rápida sobre uma decisão | Rápido | 2 (e 3 se tocar em regra) |
| Exploração, várias direções em jogo | Crítica aberta | 1, 2, 3 |
| Comparar variações | Comparação | 1, 2, 3, 4 em todas; aponte o que uma resolve e a outra não |
| Antes e depois ("melhorou?") | Antes/depois | 2 nas duas versões; responda em Melhorias, Regressões e Veredito |
| "Posso aprovar?", pronto para dev, handoff ou apresentação | Aprovação | Todas, de 1 a 6 |

Nunca declare algo "pronto" sem passar pela etapa 6.

## 4. Etapas

**1. Contexto.** Antes de julgar: quem usa (cliente final, profissional, gestor), qual a tarefa, em que ponto da jornada, qual a fidelidade e quais restrições de negócio. Pergunte só o que faltar. Procure a documentação de regras do projeto: no GLADIS, a nota de entrada e o `CLAUDE.md` da pasta do projeto; em outro lugar, o que estiver na pasta aberta ou o que a Julia indicar. Se não achar, pergunte se existe. Sem documentação, a crítica segue normalmente e a etapa 3 só marca como Pendente o que dependeria de regra.

**2. Crítica aberta.** Comece pela primeira impressão: em 5 segundos, dá para dizer do que se trata e qual é a ação principal? Faça o teste de desfocar (só os 1 ou 2 níveis principais devem sobrar) e o de escala de cinza (a hierarquia sobrevive sem cor?). Depois aplique as lentes de Norman, Krug e Nielsen e, quando ajudar, uma lei de UX. Referência: `references/lentes.md`. Para hierarquia, tipografia, cor, espaçamento, consistência e estados: `references/visual-e-estados.md`.

**3. Consistência com regras documentadas.** Quando a tela mostra um estado ou condição que já existe no domínio, nomeie o que a decisão visual está afirmando ("botão ativo" afirma "a ação está disponível agora") e compare com a documentação do projeto. Resultado: Consistente, Conflito (cite a regra) ou Lacuna (Pendente). Passo a passo: `references/consistencia-regras.md`.

**4. Teste de estresse.** O layout foi validado só com o caso feliz? Teste texto mais longo real do domínio, quantidade máxima de itens, tela mais estreita do público, estado vazio e estado de erro. Separe o que quebrou, por que quebrou e se invalida a variação ou é um detalhe corrigível. Passo a passo: `references/teste-estresse.md`.

**5. Acessibilidade.** Em alta fidelidade ou antes do handoff, passe o checklist de design (contraste, cor como única informação, alvo de toque, foco, texto ampliado, movimento). Diga o que não dá para verificar só olhando a tela. Referência: `references/acessibilidade.md`.

**6. Checklist de completude.** Verificação de sim ou não, com a lacuna nomeada quando a resposta for não. Lista: `references/completude.md`.

## 5. Severidade

| Nível | Nome | Quando |
|---|---|---|
| P0 | Bloqueia | Impede a tarefa, promete algo que o sistema não faz, contradiz regra documentada, ou causa perda de dados ou dinheiro |
| P1 | Grave | Confunde ou leva a erro repetido; existe contorno, mas é penoso |
| P2 | Menor | Dá para concluir a tarefa, com atrito |
| P3 | Cosmético | Acabamento, sem impacto funcional |

- **Causa única, vários sintomas:** se o mesmo problema aparece em vários lugares, liste uma vez como sistêmico, com a contagem.
- **Problema herdado:** se a falha vem de um componente já existente e compartilhado, diga isso e separe do escopo do projeto atual.

## 6. Formato da resposta

Use `templates/relatorio.md` no modo Aprovação. Nos outros modos, resposta curta:
- O que funciona (com o princípio, em uma linha cada)
- O que falta ou é arriscado, por severidade, com princípio e, quando houver, a regra do projeto
- Pendentes (lacunas que precisam de resposta de produto ou dev)
- Próximo passo sugerido

Escreva em português, direto, sem jargão desnecessário e sem travessões de efeito.

## 7. Arquivos de apoio

Leia só o arquivo da etapa que estiver fazendo.

| Arquivo | Conteúdo |
|---|---|
| `references/lentes.md` | Norman, Krug (5 checagens), Nielsen (10 heurísticas), leis de UX, arquitetura de informação, esforço desnecessário |
| `references/visual-e-estados.md` | Testes de hierarquia, tipografia, cor, espaçamento, consistência, estados, sinais de protótipo gerado por IA |
| `references/consistencia-regras.md` | Como checar uma decisão contra regras documentadas |
| `references/teste-estresse.md` | Como montar e relatar o teste de estresse de conteúdo e layout |
| `references/acessibilidade.md` | Checklist WCAG 2.2 AA no nível de design |
| `references/completude.md` | Checklist final antes de aprovar |
| `templates/relatorio.md` | Modelo do relatório completo |

_Origem: fusão de design-critique-completude, stress-test-conteudo-layout e auditoria-consistencia-regras (da Julia) com o melhor de design:design-critique, design-skills:design-critique, design-superpowers:design-review, design:accessibility-review e design-skills:accessibility-audit. Auditoria de 2026-10-08._
