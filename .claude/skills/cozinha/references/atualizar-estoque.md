# Modo: atualizar estoque

Arquivo alvo: `20 🧭 Áreas/Minha Cozinha/Estoque.md`. Só o que **existe agora**, sem histórico.

## O que ela pode dizer
Frases soltas: "acabou o requeijão", "comprei 2 kg de frango", "fiz o nhoque, sobraram 3 porções", "tem ovo ainda?", "joguei o presunto fora". Aceite tudo, sem pedir formato.

## Como atualizar
1. Identifique item, ação (entrou, saiu, acabou, sobrou, jogou fora) e quantidade, se ela disse.
2. Edite a linha na tabela do local certo (Freezer, Geladeira, Armário).
   - Entrou: quantidade, `Entrada` = hoje, `Validade` só se ela disse ou for óbvia (marque _(estimativa)_).
   - Acabou: **apague a linha** se não for "sempre ter"; se for "sempre ter", deixe `0` para a fase 2 gerar a lista de compras.
   - Item novo: crie a linha no local mais provável e marque _(inferência)_ no local.
3. **Compra ou pré-preparo registrado** (ex.: "fiz o nhoque"): atualize o que entrou (nhoque no freezer) **e** o que saiu (batata, farinha, ovo). Estime o que saiu e marque _(estimativa)_.
4. Atualize `atualizado:` no frontmatter.

## Incerteza
- Nunca invente quantidade. Sem número dito: `a conferir`.
- Se a ação depende de um item incerto (ex.: "fiz o nhoque" mas não sabe quanta batata tinha), registre e siga; não pergunte nada que não mude o resultado.
- No máximo **uma** pergunta de conferência por vez, e só quando for sugerir algo que dependa do item.

## Validade perto
Se uma validade estimada estiver a até 3 dias, avise "usa antes que estrague" e ofereça o modo "o que dá pra fazer hoje" com esse item na frente.

## Tamanho
Arquivo curto de propósito: se passar de umas 60 linhas, enxugue (junte itens, apague o que acabou) antes de crescer.

## Resposta
Uma linha: "Anotado: nhoque no freezer (3 porções), saíram batata e farinha (estimativa)."
