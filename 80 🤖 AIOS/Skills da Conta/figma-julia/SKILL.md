---
name: figma-julia
description: Padrões da Julia para trabalhar dentro de arquivos Figma, em três modos. Cards de documentação (regras, contexto, fluxos e estados em cards coloridos por categoria) quando ela pedir "documenta as regras no Figma", "cria um card de regra", "padroniza a documentação do arquivo". Componentizar (frames duplicados viram Component Set com variantes) quando disser "isso deveria ser um componente", "componentiza", "cria variantes a partir disso". Telas por clonagem (novas telas de um fluxo feito com prints reais, clonando e alterando só o necessário) quando disser "gera as telas desse fluxo", "só tenho prints", "cria as telas que faltam reaproveitando as existentes". Use também quando notar texto explicativo com estilos diferentes, elementos copiados sem ser instância, ou fluxo baseado em screenshots.
---

# Figma da Julia

## Índice
1. Escolha o modo
2. Regras comuns a todos os modos
3. Organização do arquivo
4. Arquivos de apoio

## 1. Escolha o modo

| Pedido | Modo | Leia |
|---|---|---|
| Documentar regra, contexto, fluxo ou estado | Cards de documentação | `references/cards-documentacao.md` e `references/card-builder.md` |
| Frames repetidos que deveriam ser um componente | Componentizar | `references/componentizar.md` e `references/sizing-cheatsheet.md` |
| Novas telas de um fluxo feito com prints reais | Telas por clonagem | `references/telas-por-clonagem.md` |

Um pedido pode passar por mais de um modo. Ex.: gerar as telas de erro por clonagem e depois documentar a regra ao lado com um card.

Para transformar uma gravação de tela em estados no Figma, use a skill `figma:video-interaction-mapper`, do plugin do Figma.

## 2. Regras comuns a todos os modos

1. **Carregue a skill `figma:figma-use` antes de qualquer `use_figma`.** Ela documenta as regras da Plugin API; os erros mais comuns vêm de pular esse passo.
2. **Inspecione antes de criar.** Rode `get_metadata` na página para entender a estrutura, os nomes e o que já existe.
3. **Reaproveite o que existe.** Se um elemento já é instância de um componente, use esse componente (`await instance.getMainComponentAsync()`). Se o arquivo já tem variáveis de cor, prefira ligar a elas (`boundVariables`) a usar cores fixas.
4. **Fontes:** antes de criar texto, confira com `figma.listAvailableFontsAsync()`. Se o arquivo usa uma fonte que não está instalada (ex.: "Inter Tight"), use a mais próxima disponível só no conteúdo novo, nunca reescreva texto existente com outra fonte, e avise a Julia.
5. **Carregue as fontes antes de criar texto** (`figma.loadFontAsync`).
6. **Confira o resultado de verdade:** depois de cada etapa, leia de volta as propriedades importantes e tire `screenshot()` antes de seguir. Não presuma que o código fez o que deveria.
7. **Mude o mínimo.** Altere só o que o pedido exige; nada de "aproveitar para arrumar" outras partes sem perguntar.

## 3. Organização do arquivo

- Agrupe em **Sections** por assunto: caminho feliz, erros, estados, responsivo, componentes, documentação.
- Telas novas que estendem um fluxo entram **na mesma Section** do fluxo, como nova linha ou coluna, não soltas na página.
- Documentação de uma interação fica **ao lado** da interação, não numa área de "regras gerais" separada.
- Nomes de frame no padrão `fluxo / passo / estado` (ex.: `Assinatura / Pagamento / Erro`). Nada de "Frame 47".
- Nomes de variante no padrão `Propriedade=Valor`.

## 4. Arquivos de apoio

| Arquivo | Conteúdo |
|---|---|
| `references/cards-documentacao.md` | Categorias, anatomia do card, pareamento e sub-blocos |
| `references/card-builder.md` | Código `makeInfoCard()` e grade de layout |
| `references/componentizar.md` | Passo a passo para virar Component Set e documentar o componente |
| `references/sizing-cheatsheet.md` | Combinações de sizing mode do auto layout |
| `references/telas-por-clonagem.md` | Clonar a tela certa e alterar só o elemento necessário |

_Origem: fusão de figma-doc-cards, figma-component-from-frames e flow-screens-from-screenshots, com convenções de organização tiradas de design-skills:design-ops e da documentação de componentes do design-superpowers. Auditoria de 2026-10-08._
