---
tipo: fonte
contexto: carreira
formato: plugin
autor: design-superpowers (plugin de terceiros para Claude)
link:
status: lendo
tags: [tema/ia, tema/product-design]
---

# design-superpowers

## Por que estou estudando isso
Quero aprender a usar comandos de IA no meu fluxo de design. Este plugin estava instalado, mas desativei na [[2026-10-08 Auditoria de Skills]] porque o comando de revisão dele competia com a minha skill `critica-design`. Esta nota guarda o que ele faz para eu reativar quando for estudar.

## Resumo
Seis comandos que fazem o Claude trabalhar como um time de design: direção visual, design de telas com um design system, extração de linguagem visual, revisão e gestão de design system. Antes de rodar, ele detecta o nível de maturidade do projeto:

| Nível | Situação | O que muda |
|---|---|---|
| L0 | Sem design system | Só critérios gerais |
| L1 | Existe um `DESIGN.md` | Confere contra ele |
| L2 | Existe design system | Confere tokens e componentes |
| L3 | Design system corporativo | Usa automações no Figma |

## Os comandos
| Comando | O que faz | Útil para mim? |
|---|---|---|
| `/map-design` | Lê um print, site, arquivo do Figma ou código e gera um `DESIGN.md`: paleta, tipografia, espaçamento, componentes, o que fazer e o que evitar, e um guia para usar em prompts | **Alta.** Gerar o DESIGN.md da Trinks e colar nos prompts do Figma Make ou do Lovable |
| `/creative` | Direção visual: moodboard, paleta, tipografia, grid, revisão de identidade | **Média.** Projetos pessoais e de portfólio |
| `/design` | Escolhe componentes, compõe layout, procura padrões e aponta componente que falta, a partir de um design system | **Média.** Depende de ter o design system da Trinks descrito |
| `/design-review` | Revisão em 5 frentes (visual, usabilidade, acessibilidade, design system, movimento) com severidade P0 a P3 | **Baixa.** A `critica-design` já faz isso do meu jeito |
| `/ds-make`, `/ds-manage` | Criar e versionar tokens e componentes, publicar, relatório de adoção | **Baixa.** Para quem mantém um design system |
| `ds-producer`, `ds-consumer` | Fluxos de um time de design system específico (Shortcut, Notion, plugins próprios) | **Baixa** |
| `/figma-setup` | Instala o PluginOS, a ponte entre o plugin e o Figma | Necessário para usar com Figma |

## Ideias principais
- **DESIGN.md como contexto:** um arquivo que descreve a linguagem visual de um produto e serve de instrução fixa para qualquer IA que gere telas.
- **Maturidade antes de regra:** não cobrar tokens de quem ainda não tem design system.
- **Revisão em frentes separadas:** visual, usabilidade, acessibilidade, design system e movimento, juntadas num relatório só. Parte disso já entrou na `critica-design`.

## Como reativar para estudar
1. Nas configurações do app, ative o plugin design-superpowers.
2. Numa sessão separada, rode `/figma-setup` se for usar com o Figma.
3. Enquanto ele estiver ativo, peça crítica com `/critica-design`, pelo nome.
4. Ao terminar, anote o resultado no [[Laboratório de IA para Design]] e decida se ele fica ativo.

## O que vou aplicar
- Primeiro teste: `/map-design` em prints de telas da Trinks (ver Laboratório).
