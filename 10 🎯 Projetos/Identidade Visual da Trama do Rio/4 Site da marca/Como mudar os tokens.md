---
tipo: documento
contexto: pessoal
status: ativo
data: 2026-10-22
tags: [tema/product-design]
---

# Como mudar os tokens do site

Projeto: [[Identidade Visual da Trama do Rio]]. Tudo o que muda a cara do site mora em `src/tokens.json`. As páginas, o CSS e o JavaScript só **usam** esses valores.

## As três camadas

1. **Marca** (`marca` no arquivo): os valores. As 14 cores, as cores de apoio (branco, cru, ouro), as transparências de tinta, as nove letras, os raios dos cantos e os espaços (largura da página, largura do texto, margem lateral, espaço entre seções).
2. **Papéis** (`papeis`): o que cada valor faz. `bg` é o fundo da página, `fg` o texto, `card` o fundo dos cartões, `accent` o destaque, `link` o link. O site só tem a versão clara (`claro`); a `escuro` fica guardada no arquivo, sem uso. Os `fixos` valem sempre (as letras padrão, o fundo dos selos "pode" e "não pode", a cor da fita).
3. **Componentes** (`src/site.css`): cartão, botão, etiqueta. Só usam papéis e valores de marca por nome, nunca um código de cor.

## O que mudar para quê

| Quero mudar | Edite em `tokens.json` |
|---|---|
| O fundo de todas as páginas | `papeis.claro.bg`  |
| A cor do texto | `papeis.claro.fg` |
| A letra do título, do texto, do script ou da mão | `papeis.fixos.titulo` / `corpo` / `script` / `mao` (aponte para uma letra de `marca.fontes`) |
| Uma cor da paleta em todo o site | `marca.cor.<nome>.hex` |
| O arredondamento dos cartões | `marca.raios.cartao` |
| A largura da página ou do texto | `marca.espacos.largura` / `leitura` |
| O espaço entre seções | `marca.espacos.espaco-secao` |

Se a letra nova ainda não está carregada, acrescente o nome dela em `marca.google.base`.

## Depois de editar

Rode o gerador e publique: `node src/gen.js "<pasta 4 Site da marca>" "<pasta 3 Núcleo da marca>"`. Ele reescreve `site/tokens.css` e `site/tokens.js`, e a página Tokens e arquivos acompanha.

## Limite conhecido

As transparências (`tinta-14` e as outras) são escritas à mão em `rgba`. Se o vinho mudar, elas continuam no vinho antigo até alguém atualizar.
