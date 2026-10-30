---
tipo: sistema
contexto: pessoal
atualizado: 2026-10-20
---

# Prompt · Pesquisa aprofundada: fluxos de identidade visual com IA

Para colar numa conversa de **pesquisa aprofundada** (Deep Research no Claude, ou equivalente). Foi escrito para funcionar **sem** a conversa anterior: leva dentro dele o contexto, o que já tentamos e o que sai de útil. Projeto: [[Identidade Visual da Trama do Rio]]. O resultado volta para o cofre e alimenta a retomada da etapa 4.

Por que existe: a etapa 4 travou no ChatGPT (imagens com cara de giz de cera e de revista teen, informação demais, paleta bagunçada, texto torto, rostos recriados). A ideia é descobrir fluxos e ferramentas melhores, sobretudo com o Claude, antes de gerar mais imagens.

---

## Prompt (copie daqui)

Quero que você faça uma pesquisa aprofundada, com fontes, sobre **as técnicas, fluxos e ferramentas mais atuais e recentes (2025 e 2026) para criar identidade visual com ajuda de IA**, com foco no **Claude** (Claude Design, Artifacts, geração de HTML/SVG, skills, conectores e MCPs, Claude Code) e em outras ferramentas **gratuitas ou baratas** que se encaixem em um fluxo. Trabalhe como diretora de arte e estrategista de marca sênior, e traga o que está funcionando agora na prática, não só o que as ferramentas prometem.

### 1. O caso que precisa resolver

Estou criando a nova identidade visual do **Trama do Rio**, meu clube do livro. É um projeto de marca conduzido como se tivesse cliente real: eu sou a cliente e também a designer parceira (sou product designer, então entendo de design; não preciso que explique o básico).

**O clube.** Brasileiro, do Rio, 100% feminino desde meados de 2026, mulheres adultas de 25 a 40 anos. Tom de voz: brincalhão, carioca, acolhedor, "caos organizado". Vibe: a amiga fofoqueira e engraçada somada à amiga aconchegante. O nome "Trama" tem três sentidos: trama narrativa, trama de tecido e tramar (aprontar). Amizade é central; a leitura é paixão por literatura de qualidade, de qualquer gênero.

**O que já está decidido (não reabrir):**
- O formato do logo fica (símbolo e lettering não são redesenhados). Mudam cores e aplicações.
- O tecido **não** é o eixo da marca (costura e retalho só como acento opcional).
- Abandonar: estética de supermercado/boteco, clip-art, cores chapadas e saturadas, tipografia pesada e genérica, visual neutro, "menininha", infantil, minimalista, corporativo.
- Referências favoritas: templates de book club em azul e rosa, Daisy Made e Daze Social. Lógica comum: fundo de padrão + painel de conteúdo opcional + camada solta de adesivos e doodles + foto em estilo mix mídia (janela, polaroid, recorte).
- Sistema com **três modos que conversam entre si**: **B Edição Extra** (indicações temáticas e trends; cara de revista de fofoca para mulheres adultas, não de jornal nem scrapbook), **C Capa Manda** (leitura do mês; cor e forma da capa do livro mandam) e **D Álbum de Recortes** (recordações dos encontros presenciais; fotos reais, papel, fita).
- Paleta base: quente e doce, com coral dominante, rosa-chiclete, creme, vinho no texto (nunca preto), confete em lima e pervinca. Cor muda por mês conforme a capa do livro.
- Tipografia: título pesado (condensado no B, serifa fluida anos 70 no C e no D), script formal elegante só em uma ou duas palavras, texto fino para o corpo, escrita à mão em no máximo um elemento.
- Regras: 3 a 5 elementos por peça; uma família de desenho só; saturação parecida entre as cores; **fotos reais não são editadas, só recortadas**; **sem logo nos posts comuns**.

**Restrições práticas:**
- Quem usa a marca no dia a dia são duas ou três meninas das redes, **sem formação em design**, em **Canva (a Lissa tem Pro)** e **CapCut**. Simplicidade de uso é requisito: tipografia e templates têm de existir e funcionar no Canva.
- Entregas finais: paleta, tipografia, elementos e grafismos, regras do logo, manual com certo e errado, kit para Canva e CapCut, e no fim um design system no Claude Design. Também aplicação no Presente de Natal 2026 (ecobag, marca-páginas, cartelas de adesivos) com orçamento apertado (R$ 34,14 por kit) e **gráfica ainda sem fornecedor**.
- Orçamento de ferramentas: **gratuito ou barato**. Já tenho Claude e ChatGPT. Diga o custo mensal de cada coisa que recomendar e o que dá para fazer só no plano grátis.
- Eu tenho TDAH: fluxos com poucas etapas, cada uma com entrega visível e primeiro passo pequeno, funcionam melhor que fluxos longos e cheios de ferramentas.
- Sistema operacional: Windows. Meu cofre de notas (Obsidian) é lido pelo Claude Code, então fluxos que usem Claude Code ou arquivos locais são bem-vindos.

### 2. O que já tentamos e por que travou

Geramos imagens de direção no **ChatGPT (imagem)** a partir de prompts longos em inglês, anexando 4 referências e fotos reais. Problemas recorrentes:
1. Informação demais na peça, mesmo com o pedido de "um post, uma ideia".
2. Desenho demais: cara de giz de cera, "revista teen", infantil.
3. Paleta bagunçada, em vez de vivos porém harmônicos.
4. B saiu com cara de scrapbook, não de revista.
5. O gerador recria rostos e fotos, mesmo quando se pede "só recortar".
6. Texto em português sai torto; adesivos e elementos não são reaproveitáveis (não viram biblioteca para o Canva).
7. Cada rodada gera uma imagem solta, não um **sistema**: não sai paleta com códigos, fontes, grade, nem regras.

Diagnóstico provisório meu: estou usando gerador de imagem para uma tarefa que é de **sistema** (regras, grade, tokens, componentes). Quero testar essa hipótese e descobrir fluxos que partam do sistema.

### 3. O que investigar

Cubra, com profundidade, estes blocos. Para cada técnica, fluxo ou ferramenta, diga: o que é, como se usa na prática, quanto custa, em que ponto do processo de marca entra, o que entrega de verdade, e limitações conhecidas.

**A. Claude para identidade visual**
- Claude Design: o que faz hoje, como criar um design system a partir de referências e arquivos, limites, quanto consome do plano, relatos reais de uso para marca.
- Artifacts e geração de HTML/CSS/SVG como ferramenta de **protótipo de sistema**: página de direção (paleta, tipografia, grade, componentes, exemplos de peça) que eu possa abrir, comparar e ajustar. Técnicas para fazer o Claude gerar peças de post renderizadas em HTML com tipografia real e exportar para PNG.
- Claude lendo imagens (moodboards, referências, prints): técnicas para extrair paleta, estrutura de composição, tipo de letra e "regras implícitas" das referências em forma de especificação reutilizável, em vez de prompt solto.
- Skills, MCPs e conectores relevantes (Canva, Figma, geração de imagem, fontes, paleta). Quais existem, quais funcionam, o que exigem. Inclua o que o Claude Code pode automatizar com arquivos locais (gerar peças em lote, renderizar HTML para imagem, montar kit de assets).
- Padrões de prompt e de briefing que fazem o Claude agir como diretor de arte: formatos de brief, uso de "design tokens" como instrução, ciclos de crítica e revisão, como evitar o resultado genérico ("AI slop") em design.

**B. Geradores de imagem e como usá-los melhor (não como eixo, como parte do fluxo)**
- Comparar os geradores atuais (ChatGPT/GPT image, Gemini/Nano Banana, Midjourney, Ideogram, Recraft, Flux, Firefly, Krea, Leonardo, Seedream e o que mais for relevante em 2026) para: **texto legível em português**, **controle de paleta**, **estilo consistente entre gerações**, **uso de imagem de referência/estilo (style reference, moodboard, srefs, LoRA)**, **geração de elementos isolados com fundo transparente** (adesivos, recortes, papéis, texturas) e **vetor/SVG**. Custo e plano grátis de cada um.
- Técnicas para evitar o "visual teen/giz de cera/infantil" e conseguir um tom editorial adulto, divertido e colorido.
- Como manter rostos e fotos reais intactos (fluxos em que a IA só faz fundo, textura e elementos, e a foto real entra depois no Canva ou editor).
- Fluxos de **consistência de estilo** (referência de estilo, paleta travada por código, bibliotecas de elementos geradas em lote e reaproveitadas).

**C. Fluxos de ponta a ponta de criação de identidade com IA**
- Fluxos descritos por designers e estúdios em 2025 e 2026 (artigos, vídeos, threads, estudos de caso, Behance, comunidades de design): do briefing ao manual, onde a IA entra em cada etapa, onde **não** deve entrar. Priorize relatos de quem entregou marca real.
- Como usar IA para: exploração de conceito, moodboard, naming de cores, escolha e pareamento de fontes, grade e layout, padrões e texturas, ícones e grafismos, manual de marca, aplicações (mockups), e testes de consistência.
- Fluxos para **manter coerência ao longo do tempo** depois da criação: prompt-base da marca, "brand brief" reutilizável para o Claude e para o ChatGPT, checagem de peça contra o manual por IA.

**D. Ferramentas de execução e entrega (gratuitas ou baratas)**
- Canva (Pro): recursos atuais de IA (Magic Studio, Magic Design, Brand Kit, Magic Switch, geração de elementos, Affinity), templates compartilháveis e bloqueio de elementos para quem não é designer. Como montar um kit que as meninas usem sem quebrar.
- Alternativas e complementos gratuitos: Figma (grátis), Penpot, Affinity (agora gratuito), Photopea, Krita, Inkscape, Google Fonts, fontes gratuitas com licença comercial, geradores de paleta, ferramentas de remoção de fundo, texturas e papéis gratuitos, geradores de padrão (patterns) e SVG.
- CapCut: como levar a identidade para vídeo (fontes, cores, animações de entrada e saída, templates) com as limitações do plano grátis.
- Para o kit de Natal: IA para mockups de ecobag, marca-páginas e adesivos; preparação de arquivo para gráfica de pequena tiragem; fornecedores baratos de adesivo e impressão no Brasil que aceitem tiragem pequena (apenas como pesquisa, sem contratar nada).

**E. Antipadrões e riscos**
- O que dá errado ao fazer identidade visual com IA: estética genérica, falta de sistema, texto incorreto, inconsistência, licença e direitos de uso das imagens geradas (uso comercial, registro de marca, direitos autorais sobre arte gerada por IA, política de cada ferramenta), fontes sem licença no Canva, dependência de ferramenta paga.
- Como checar originalidade e evitar parecer cópia das referências favoritas (Daisy Made, Daze Social).

### 4. O que quero receber

1. **Resumo executivo (até 1 página):** o que mudou em 2025 e 2026 de verdade e qual é a minha melhor aposta para sair do travamento.
2. **Mapa de ferramentas:** tabela com ferramenta, para que serve neste projeto, custo (grátis e pago), nível de esforço, qualidade do resultado para o meu caso, e link oficial. Marque o que **já tenho** (Claude, ChatGPT, Canva Pro da Lissa).
3. **3 a 5 fluxos candidatos, do mais simples ao mais ambicioso**, cada um com: passo a passo curto (de 4 a 7 etapas), ferramentas usadas, o que se entrega em cada etapa, tempo estimado, custo, riscos, e **por que resolveria os 7 problemas listados na seção 2**. Pelo menos um fluxo deve partir do Claude (sistema em HTML/tokens primeiro, imagem depois) e pelo menos um deve ser de custo zero.
4. **Receitas de prompt e de briefing** que você encontrou funcionando (exemplos reais ou adaptados, em português quando fizer sentido), especialmente: (a) prompt para o Claude extrair as regras das minhas referências em especificação, (b) brief de direção de arte para o Claude, (c) prompt de imagem para elementos isolados em fundo transparente, (d) prompt de consistência de estilo.
5. **Lista de "o que não fazer"**, com o motivo de cada item.
6. **Perguntas em aberto** que só eu posso responder para escolher entre os fluxos (no máximo 4).
7. **Fontes:** link, data e um aviso de confiabilidade (oficial, estúdio, relato pessoal, vídeo, fórum). Diferencie o que é **fato verificado** do que é **opinião ou relato**. Se não achar evidência de algo, diga que não achou; não invente ferramenta, recurso ou preço. Confirme preços e planos na página oficial e informe a data da checagem.

### 5. Como trabalhar

- Priorize fontes de 2025 e 2026; trate o que for mais antigo como possivelmente desatualizado e sinalize.
- Pesquise em português e em inglês. Inclua documentação oficial, blogs de design, estudos de caso, comunidades (Reddit, Discord, Hacker News, X, YouTube) e newsletters de IA para design.
- Quando uma ferramenta tiver mudado muito recentemente, diga o que mudou e quando.
- Seja direta: recomende, não só liste. Se uma ferramenta popular não serve para o meu caso, diga e explique.
- Escreva em português do Brasil, em frases curtas e escaneáveis, sem enrolação.
- Não gere imagens nem proponha identidade nova agora. O objetivo desta rodada é **descobrir e comparar fluxos**.

---

## Depois que a pesquisa voltar

1. Salvar o relatório em `50 🗃️ Fontes Brutas/AAAA-MM-DD Pesquisa - Fluxos de identidade visual com IA.md` e criar a nota processada (resumo, insights, ações) em `30 📚 Conhecimento/IA para Design/`.
2. Escolher **um** fluxo para testar na etapa 4, com um primeiro passo pequeno.
3. Registrar a decisão na nota do projeto [[Identidade Visual da Trama do Rio]].
4. Se a pesquisa trouxer ferramenta nova de IA para design, criar nota em `IA para Design/` (uma por ferramenta).
