---
name: revisao-integridade
description: Revisão de integridade do GLADIS da Julia (cofre Obsidian "Cofre Claude"). Confere links, nomes repetidos, caminhos antigos, frontmatter, notas de entrada, filtros do Bases e informação perdida. Use SEMPRE depois de mudanças drásticas ou em lote (mover/renomear pastas, reorganizar arquivos de sistema, dividir ou fundir notas, ~5 ou mais arquivos estruturais na mesma tarefa), quando a Julia pedir "revisa o sistema", "confere os links", "vê se a gente perdeu alguma coisa", e na revisão mensal do sistema.
---

# Revisão de integridade

Regra de origem: Regras, seção 8. A skill diz **como** fazer, e as Regras dizem **quando**.

## Passo 0 · Antes de mudar (quando der)
Se a mudança vai dividir, fundir ou reescrever arquivos, **leia-os antes**. A checagem de informação perdida (passo 3) depende de comparar o antes com o depois, e o script não faz isso sozinho. Para mover pastas, anote o número de arquivos e o tamanho total antes.

## Passo 1 · Rodar o script (só leitura)
```
powershell -NoProfile -ExecutionPolicy Bypass -File "<pasta desta skill>\verificar.ps1" -Cofre "C:\Users\Administrador\Documents\Claude\Cofre Claude" -CaminhosAntigos "<regex do caminho antigo>"
```
Em `-CaminhosAntigos`, passe os nomes de pastas ou arquivos que mudaram nesta tarefa (ex.: `"80 🤖 Sistema"`, `"\[\[Trinks\]\]"`). O script verifica: links quebrados, nomes repetidos, caminhos antigos, frontmatter, notas de entrada, filtros do Bases e o tamanho de cada pasta.

## Passo 2 · Interpretar
- **Falsos positivos comuns:** IDs que não são notas e links para títulos dentro de notas. Antes de chamar de quebrado, confira se o alvo existe como título (`[[nota#título]]`).
- **Nome repetido** em qualquer lugar do cofre (inclusive no Career OS) é problema, mesmo sem link quebrado: o Obsidian pode mandar o link para a nota errada. Renomeie a nota do GLADIS, nunca a do subsistema.
- **Filtros do Bases** usam caminhos a partir de `Cofre Claude`, então começam com `GLADIS/`.

## Passo 3 · O que o script não pega (fazer à mão)
1. **Informação perdida:** compare os arquivos reescritos ou divididos com a versão anterior. Cada regra, fato ou decisão do antes precisa estar em algum lugar do depois.
2. **Edições que falharam em silêncio:** confira se as entradas de [[Log]], [[Decisões]] e [[Mudanças nas Regras]] desta tarefa realmente estão gravadas. Uma edição pode falhar sem que se perceba.
3. **Mapa:** as pastas e os projetos citados no `CLAUDE.md` batem com o que existe?
4. **Tamanho dos arquivos lidos em toda sessão:** CLAUDE.md, Regras, Identidade e Memória continuam curtos?

## Passo 4 · Corrigir
- **Seguro e reversível** (link no GLADIS, caminho antigo, aspas no YAML, entrada de log faltando): corrija na hora.
- **Dentro de um subsistema** (Career OS, pastas de projeto): siga as regras locais. No Career OS, isso significa propor no formato arquivo / atual / proposto / motivo, perguntar "Aprovar alterações?" e registrar no CHANGELOG dele depois de aprovado.
- **Exige decisão** (o que fazer com informação duplicada ou conflitante): liste e pergunte.

## Passo 5 · Reportar
Para a Julia, em poucas linhas: o que foi verificado (com números), o que foi corrigido, o que precisa da decisão dela. No [[Log]], uma linha com o resultado.
