# Checklist de completude

## Índice
1. Como usar
2. Conteúdo e clareza
3. Estados e ações
4. Escrita de interface
5. Antes de dizer "pronto"

## 1. Como usar
Etapa final antes de aprovar. Cada item é sim ou não. Quando for não, nomeie a lacuna e o princípio entre parênteses, sem reexplicar a teoria. Não corrija em silêncio: aponte o que falhou, por que e qual princípio viola, e deixe a Julia decidir a correção.

## 2. Conteúdo e clareza
1. [ ] Toda ambiguidade sobre "a qual item isso se refere" está resolvida? Quando há várias instâncias do mesmo tipo (estabelecimentos, planos), cada card se identifica sozinho. (Krug, escaneio)
2. [ ] Nenhuma informação contraditória no mesmo card ou tela. Ex.: saldo disponível ao lado de um badge de bloqueio de consumo. (Norman, modelo conceitual)
3. [ ] Nenhum jargão técnico ou termo interno vazando para quem está do lado de fora (cliente final, gestor não técnico). (Nielsen H2)
4. [ ] A informação secundária está em segundo plano e a crítica não está enterrada. (Krug, hierarquia)
5. [ ] Nenhum elemento parece interativo sem ser, nem deixa de parecer interativo quando é. (Norman, affordance)

## 3. Estados e ações
6. [ ] Todo alerta ou pendência tem uma ação clara associada, não só um aviso. (Nielsen H3)
7. [ ] Estados vazio, carregando, erro e sucesso estão desenhados. (Nielsen H1 e H9)
8. [ ] Ação destrutiva tem confirmação específica ("Cancelar 3 agendamentos?", não "Tem certeza?") ou desfazer. (Nielsen H5)
9. [ ] A decisão visual foi checada contra as regras documentadas do projeto, e as lacunas estão marcadas como Pendente. (etapa 3)
10. [ ] O layout passou pelo teste de estresse. (etapa 4)
11. [ ] O checklist de acessibilidade de design foi passado. (etapa 5)

## 4. Escrita de interface
12. [ ] Botões dizem a ação ("Salvar plano", não "Enviar").
13. [ ] Erros dizem o que houve, como resolver e oferecem ação, sem culpar a pessoa.
14. [ ] Estado vazio orienta o próximo passo.
15. [ ] O tom combina com o momento: em erro, pagamento e segurança, clareza vem antes de simpatia.

## 5. Antes de dizer "pronto"
- Todos os P0 resolvidos ou com decisão registrada.
- Pendentes listados com quem precisa responder.
- Se algum item falhou por causa de componente compartilhado, isso foi separado do escopo do projeto.
