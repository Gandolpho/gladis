---
name: project-site-marca-trama
description: "Como o site da marca da Trama é construído e publicado (limites do Artifact, pastas, gerador)"
metadata:
  node_type: memory
  type: project
  originSessionId: 14683da0-0cfe-49a7-8675-eab8b47ffae0
  modified: 2026-10-21T17:11:02.790Z
---

O site da marca da Trama do Rio é um Artifact de várias páginas, gerado por script a partir de `10 🎯 Projetos/Identidade Visual da Trama do Rio/4 Site da marca/src/` (`gen.js`, `site.js`, `site.css`) para `site/`. Link privado: https://claude.ai/artifact/KyHAzqH3UA2KuGomFNUPzN.

**Why:** o Artifact não entrega arquivos para baixar (download por link e ZIP são bloqueados), então os arquivos de entrega ficam numa pasta do Drive da equipe, que a Julia só cria quando o site estiver pronto. O site mostra e explica; não serve arquivo.

**How to apply:**
- Para publicar, copiar `site/` para `C:\Users\Administrador\Downloads\_trama-site-publicacao` (o publicador não lê a pasta temporária da sessão), publicar com `files` e `root` e apagar a cópia depois.
- Republicar só os arquivos que mudaram; os outros ficam.
- O navegador do app não é logado no claude.ai: testar localmente (servidor Node) e pedir à Julia que abra o link.
- Ela aprova uma aba por vez; mostrar antes de passar para a próxima.
- Elementos SVG são recoloridos por máscara CSS; PNG tem cor fixa. Equipe agora, portfólio depois (blocos internos marcados; trocar as referências 07, 08, 09 e 12 por moodboard próprio).

- Nunca editar o `tokens.json` (nem outro arquivo UTF-8) com `ConvertFrom-Json` ou `Get-Content` do PowerShell: o acento estraga. Editar com Node, que preserva UTF-8.

- Os PNGs com textura (80 MB) ficam fora do cofre, em `Documents/Claude/Trama - arquivos de entrega/`, porque o cofre tem histórico git. O cofre guarda o gerador (`4 Site da marca/gerador-textura/`, determinístico por semente) e só as miniaturas.
- Para publicar mais de 255 arquivos, divida em várias publicações; o catálogo de elementos carrega por trechos.

Ver [[feedback-relembrar-referencias-trama]].
- A página principal do Artifact é o `file_path` de cada publicação: publicar sempre com `file_path` = `index.html` e as outras páginas em `files`. Publicar com outra página como `file_path` a troca no lugar da Visão geral (aconteceu em 2026-10-22, v18 a v20).
- O site só tem tema claro; o modo escuro foi removido em 2026-10-22 (tokens-build.js não emite mais o escuro).
- Folhas de elementos do ChatGPT (PNG com transparência) são separadas em recortes por script no navegador do app (componentes conectados, `gap=3`, mínimo 1200 px); fica em `Documents/Claude/Trama - arquivos de entrega/Recortes/`, nome `objeto-<desc>-colorido.png`. Folha 1 (29 recortes, leitura e casa) feita em 2026-10-22.
- Não duplicar as formas SVG como PNG com textura no site (a Julia rejeitou em 2026-10-22). O site mostra só o que não existe em outro formato; textura em PNG vai direto para o Drive.
- Ao publicar, listar em `files` todas as imagens novas (pasta inteira não entra sozinha): em 2026-10-22 os desenhos apareceram com erro por falta do `ob/`.
