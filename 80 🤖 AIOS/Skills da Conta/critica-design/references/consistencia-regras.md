# Consistência com regras documentadas

## Índice
1. Por que
2. Quando
3. Como conduzir
4. Como comunicar

## 1. Por que
Em produto maduro, uma decisão de UX tomada sem olhar o que já existe gera dois problemas: a interface promete algo que o backend não faz, ou duas partes do produto tratam a mesma situação de jeitos diferentes. Já aconteceu: um card mostrava saldo de serviços disponível durante um estado de alerta, mas a documentação dizia que esse status bloqueia o consumo dos benefícios.

## 2. Quando
- A tela mostra um estado ou condição que já existe no domínio (status de assinatura, permissões, cálculos financeiros, comportamento condicional).
- A copy diz o que a pessoa pode ou não pode fazer numa situação.
- Duas variações tratam a mesma situação de formas diferentes.
- A decisão é sobre como algo aparece (esmaecido, oculto, bloqueado) num estado que já tem comportamento definido.

## 3. Como conduzir
1. **Nomeie a afirmação implícita.** Toda decisão visual afirma algo sobre o sistema. "Botão ativo" afirma "a ação está disponível agora". Escreva essa afirmação antes de checar.
2. **Busque a documentação do projeto.** No GLADIS: nota de entrada → `CLAUDE.md` do projeto → documento de regras indicado lá. Fora dele: arquivos da pasta aberta, links que a Julia passou ou pergunte onde estão. Prefira regras numeradas ou nomeadas e o glossário de status, se houver. Se o projeto não tiver documentação, diga isso e trate cada afirmação implícita como Pendente.
3. **Compare.** Três resultados:
   - **Consistente:** cite a regra que confirma, em uma linha.
   - **Conflito:** cite a regra (número ou nome) e explique a diferença. Severidade P0.
   - **Lacuna:** a documentação não cobre. Marque como Pendente e diga com quem confirmar (produto, dev). Não invente a resposta.
4. **Conflito entre pessoas ou documentos:** se alguém aprovou e outra pessoa reverteu, ou duas fontes divergem, mostre a contradição e deixe a decisão com quem tem autoridade. Não escolha um lado.

## 4. Como comunicar
Sempre com a origem: "documento X, seção Y, diz que..." ou "não documentado, Pendente". Lacuna dita com a mesma clareza de um conflito: tratar lacuna como regra decidida é tão ruim quanto ignorar uma regra que existe. Use as etiquetas do projeto (Confirmado, Hipótese, Pendente).
