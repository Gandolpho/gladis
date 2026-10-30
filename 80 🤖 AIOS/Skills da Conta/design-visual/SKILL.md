---
name: design-visual
description: Direção visual da Julia para qualquer projeto (site, landing, protótipo, peça de marca, identidade), feita para a interface NÃO ter cara de IA nem de template. Use quando ela pedir para criar ou refazer algo visual, disser "tá genérico", "com cara de IA", "faz algo com personalidade", "monta o visual de...", ou antes de gerar qualquer tela ou página em código. Funciona para marca nova, marca já definida (Trama, Trinks, portfólio, clientes) e projeto sem marca. Não é crítica de tela pronta (use critica-design) nem texto de interface (use escrita-ux).
---

# Design visual · direção que foge do genérico

Skill **agnóstica de projeto**: nada aqui assume uma marca. A identidade vem sempre de um **brief** (passo 1), que muda a cada projeto.

## Princípio

O genérico nasce de decidir pouco antes de gerar. O modelo preenche as lacunas com a média (azul/roxo, cards iguais, sombra suave, Inter, hero centralizado). Então: **decidir primeiro, gerar depois, conferir no fim.** Uma skill de estilo por vez; várias juntas se anulam e voltam à média.

## Fluxo

### 1. Brief (obrigatório, antes de qualquer código)
Procure um `DESIGN.md` ou nota de marca no projeto. Se existir, ele manda: **marca aprovada é restrição, não inspiração.** Se não existir, monte um brief curto com a Julia (máx. 6 perguntas, só as que faltam):
- Para quem é e o que a pessoa precisa fazer ali.
- 3 adjetivos de personalidade e 3 que **não** servem.
- Referências que ela gosta (e por quê) e as que odeia.
- Paleta, fontes, logo e regras já decididas (se houver).
- Onde vai viver (web, mobile, impresso, apresentação).
- O que é proibido.

Se for projeto novo, salve o brief como `DESIGN.md` na pasta do projeto, com: paleta (hex e papel de cada cor), fontes e usos, regras de contraste, espaçamento, forma (cantos, bordas, sombras), tom de imagem, **lista de proibidos** e amostras aprovadas.

### 2. Direção (uma decisão ousada por peça)
Escolha **uma** ideia central e diga em uma linha ("editorial quente com tipografia grande", "técnico e denso, tudo em grade"). Defina:
- **Contraste de escala:** um elemento tipográfico grande de verdade, o resto contido.
- **Um ponto de tensão** (assimetria, corte, cor inesperada) em vez de tudo equilibrado.
- **Pares de fonte com papel** (títulos, texto, detalhe), nunca uma fonte só por padrão.
- **Cor com hierarquia:** uma dominante, uma de apoio, uma de ação. Neutros com temperatura (nunca cinza puro sem motivo).

### 3. Referência antes do código (peças importantes)
Para landing, identidade ou tela-chave: gere ou descreva a referência visual primeiro (imagem, moodboard, esboço em texto com medidas) e valide com a Julia antes de implementar. Em retoque de algo existente, **audite antes de mexer**: liste o que está genérico, o que é identidade, e só então altere.

### 4. Implementação
- Tokens primeiro (cores, fontes, espaços, raios) como variáveis; nada de valor solto.
- Layout com intenção: grade que muda de ritmo, não 3 cards iguais em fileira.
- Movimento só onde explica algo (entrada, estado, hierarquia). Respeitar `prefers-reduced-motion`.
- Modo escuro com contraste e hierarquia próprios, não só inverter.
- Ícones em SVG, sem emoji como ícone. Imagens com função, não de banco genérico.
- Entregar completo: sem placeholder, sem "lorem", sem trechos pulados.

### 5. Checagem final (antes de mostrar)
Reprove a peça se tiver 3 ou mais:
- [ ] Gradiente roxo/azul ou brilho neon sem motivo
- [ ] Fileira de cards iguais com ícone, título e texto
- [ ] Sombra difusa e cantos arredondados iguais em tudo
- [ ] Hero centralizado com dois botões e selo "novo"
- [ ] Fonte padrão do sistema ou Inter sem escolha deliberada
- [ ] Tudo com o mesmo peso visual, sem hierarquia
- [ ] Texto de enchimento ("soluções inovadoras", "eleve seu...")
- [ ] Contraste abaixo do mínimo WCAG AA, alvo de toque pequeno, foco invisível
- [ ] Algo que poderia ser de qualquer outra marca trocando só o logo

Última pergunta: **se eu tirar o logo, dá para saber de quem é?** Se não, volte ao passo 2.

## Regras de convivência com outras skills
- Rode **uma** skill de estilo por vez e diga qual. Se disparar mais de uma (design-taste-frontend, frontend-design, high-end-visual-design, no-ui-slop), escolha uma e ignore as outras na peça.
- Esta skill manda no **processo** (brief, direção, checagem); a skill de estilo escolhida manda na **execução**. Padrão sugerido: `design-taste-frontend` para sites e interfaces, `brandkit` para pranchas de marca, `redesign-existing-projects` para refazer algo pronto.
- Depois de pronto, para avaliar: `critica-design`. Para textos: `escrita-ux`. Para dev: `handoff-documentacao`.

## Saída
Mostre primeiro a **direção em uma linha** e o brief usado; depois a peça; no fim, o resultado da checagem (o que passou, o que ainda destoa). Português do Brasil.
