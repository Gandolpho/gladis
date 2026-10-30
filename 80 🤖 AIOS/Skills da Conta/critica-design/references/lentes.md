# Lentes da crítica

## Índice
1. Donald Norman
2. Steve Krug
3. Jakob Nielsen (10 heurísticas)
4. Leis de UX úteis
5. Arquitetura de informação
6. Esforço desnecessário

Use só o que explica o caso. Forçar Norman num problema que é de Krug é decoração.

## 1. Donald Norman
Affordance, mapeamento, modelo conceitual, feedback.
- Elementos interativos parecem interativos? Os que não são, não parecem clicáveis?
- O modelo mental que a interface sugere bate com o que o sistema faz por trás? Ex.: um badge que diz "tudo certo" enquanto o backend tem uma pendência real.
- Depois de uma ação, há feedback claro, ou a pessoa fica sem saber se algo aconteceu?

## 2. Steve Krug
"Não me faça pensar."
1. **Escaneio:** a hierarquia é clara? Áreas bem delimitadas? Dá para saber o que é clicável? Pouco ruído?
2. **Primeira opção razoável:** as pessoas escolhem a primeira coisa que parece certa. A ação principal é a mais visível? Os rótulos dispensam adivinhação? Há conteúdo importante escondido abaixo de um "falso fim" da tela?
3. **Autoexplicativo:** em 5 segundos dá para dizer o que é a tela e o que fazer? Botões dizem o que fazem?
4. **Navegação:** a pessoa sabe onde está, como chegou e como voltar? O título bate com o que foi clicado?
5. **Boa vontade:** algo gasta a paciência? Esconder informação que a pessoa quer (preço, prazo), punir formato de digitação, pedir dado desnecessário, texto de marketing no meio da tarefa.

Pergunta-chave para produto com muitas instâncias: a pessoa precisa ligar mentalmente duas informações distantes para entender a qual item algo se refere?

## 3. Jakob Nielsen
| # | Heurística | O que olhar |
|---|---|---|
| H1 | Visibilidade do status | Carregamento, progresso, confirmação, item selecionado, estado atual sem precisar interpretar |
| H2 | Correspondência com o mundo real | Linguagem de quem usa, sem jargão interno nem nome de campo de banco |
| H3 | Controle e liberdade | Cancelar, voltar, desfazer; saída clara em qualquer estado, inclusive alerta e erro |
| H4 | Consistência e padrões | Mesma ação, mesmo nome e mesmo resultado em todo o produto |
| H5 | Prevenção de erro | Confirmação em ação destrutiva, restrições na entrada, bons padrões |
| H6 | Reconhecer em vez de lembrar | A informação está disponível quando é necessária; nada para decorar |
| H7 | Flexibilidade e eficiência | Atalhos e ações em lote para quem usa todo dia, sem atrapalhar quem começa |
| H8 | Estética e minimalismo | Cada elemento justifica o lugar; informação rara não compete com a crítica |
| H9 | Reconhecer e recuperar de erros | Linguagem simples, diz o que houve e como resolver |
| H10 | Ajuda | Contextual, no lugar da tarefa |

## 4. Leis de UX úteis
| Lei | Pergunta | Sinal de problema |
|---|---|---|
| Proximidade / Região comum | O que é relacionado está junto e delimitado? | Grupos ambíguos, espaçamento igual em tudo |
| Semelhança | O que tem a mesma função tem a mesma cara? | Mesma função com estilos diferentes |
| Hick | Opções demais? | Mais de 5 a 7 escolhas sem filtro ou hierarquia |
| Miller | A informação está agrupada? | Listas longas sem blocos |
| Fitts | Alvo grande e perto? | Botão principal pequeno ou longe; alvo de toque pequeno |
| Doherty | Resposta em até 400 ms? | Ação sem retorno visível |
| Tesler | Quem carrega a complexidade? | Usuário fazendo conta, formatação ou memorização que o sistema poderia fazer |
| Postel | A entrada é tolerante? | Formato rígido sem necessidade |
| Jakob | Funciona como os outros produtos que a pessoa conhece? | Padrão inventado sem ganho claro |
| Von Restorff | O importante se destaca? | Nada se destaca, ou tudo compete |
| Gradiente de meta | Dá para ver o progresso? | Fluxo de várias etapas sem indicação |
| Pico-fim | O final é bem resolvido? | Confirmação fraca ou fim abrupto |
| Estética-usabilidade | O acabamento esconde problema? | Tela bonita que confunde |

## 5. Arquitetura de informação
Para fluxos e navegação, cinco perguntas:
1. Alguém novo acha o conteúdo principal em até 3 cliques?
2. As categorias fazem sentido para quem é de fora da empresa, ou refletem a estrutura interna?
3. Sem a navegação, o título de cada tela ainda diz do que ela trata?
4. Algo que a pessoa procuraria em dois lugares está acessível pelos dois?
5. Um conceito tem um nome só em todo o produto? ("Excluir" ou "Remover", não os dois)

## 6. Esforço desnecessário
Conte quantas interações a tarefa principal exige e quantas realmente avançam o objetivo. A diferença é esforço que a interface cobra: navegar para outra tela para configurar algo, confirmar ação reversível (prefira desfazer), decifrar o que é clicável, lembrar dado de outra tela.
