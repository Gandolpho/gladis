---
tipo: documento
contexto: pessoal
data: 2026-10-07
tags: [tema/product-design]
---

# Exemplo de triagem · Meu Guia de UX

_Exemplo para a Julia visualizar o processo do [[PRD - Migração do Notion]]. **Nada foi migrado.** As três páginas foram lidas no Notion, só leitura, em 07/10._

Assim fica a nota de triagem de um lote. Você lê, muda só a coluna "Destino" onde discordar, e o resto vale como aprovado.

---

## Página 1 · ✨ Carga cognitiva
_Glossário de UX › User Research · última edição em 19/03/2024 · texto seu_

| Item | Destino sugerido | Por quê |
|---|---|---|
| Texto da página | ⚪ **Preservar** | Está no Glossário de UX, então é texto seu e entra idêntico |

**Como ficaria no cofre:** `30 📚 Conhecimento/Conceitos/Carga cognitiva.md`

```
---
tipo: conceito
contexto: pessoal
origem: https://app.notion.com/p/74426d6004f24261be8cc9926f54510a
texto: preservado
tags: [tema/product-design]
---

# Carga cognitiva

Carga cognitiva é um **esforço mental** que leva um usuário a processar
informações, raciocinar e tomar decisões. [...]
(o texto inteiro, idêntico ao Notion, sem nenhuma palavra mudada)

---
## Conexões
_Acrescentado pelo Claude, fora do seu texto._
- [[Lei de Hick]] · [[Lei de Miller]] (se vierem do lote "Leis de UX")
- Livro citado: "Não Me Faça Pensar", Steve Krug
```

A única coisa nova é o bloco de propriedades no topo e a seção "Conexões" no fim, separada por uma linha.

---

## Página 2 · Anotações ESPM
_Fica no fim do Meu Guia de UX, fora da grade do glossário · última edição em 04/08/2024 · é um "contêiner" com subpáginas e bancos de dados_

| Item | Destino sugerido | Por quê |
|---|---|---|
| Banco de dados de anotações (sem título) | ❓ inspecionar no lote real | Não abri o conteúdo neste exemplo |
| Design Emocional | 🟡 **Destilar** | Tema de estudo que vira conceito, se o conteúdo for anotação de aula |
| Identidade Visual Avançada | 🟡 **Destilar** | Idem |
| Tópicos avançados 2 | 🔵 **Deixar no Notion** | O título não diz o assunto. Só vem se o conteúdo valer a pena |
| Teste de Usabilidade Rotten Tomatoes | 🟡 **Destilar** + 💼 **propor ao Career OS** | Parece um trabalho prático seu. Pode virar evidência de carreira, mas isso só com a sua aprovação, pelo protocolo do Career OS |
| Calendário (do curso) | 🔴 **Descartar** | Agenda de um curso já encerrado |
| A página "Anotações ESPM" em si | 🔴 não vira nota | É só um contêiner. O que importa são as subpáginas |

**Como ficaria uma nota destilada:** `30 📚 Conhecimento/Conceitos/Design emocional.md`, com a ideia em uma frase, a explicação nas suas palavras, um exemplo, links para conceitos relacionados e `origem:` apontando para a página do Notion. O tamanho (curto ou médio) a gente decide no piloto.

---

## Página 3 · Organização PDI 2024.2
_Fica no fim do Meu Guia de UX, fora da grade do glossário · última edição em 24/10/2024_

| Item | Destino sugerido | Por quê |
|---|---|---|
| A página de organização em si | 🔴 **Descartar** | Planejamento de um semestre que já passou |
| Estudos avaliação de interface · PDI Julia | 🟡 **Destilar** | Conteúdo de estudo que continua útil. Liga com Análise Heurística e Usabilidade do glossário |
| Estudos de visual design · PDI Julia | 🟡 **Destilar** | Idem. Liga com Design Visual e Gestalt |
| 8 links salvos (avaliação de interface, visual design, conteúdo) | 🟢 **Migrar** | Viram uma lista de referências dentro das notas destiladas acima, separadas por tema |
| O fato de ter feito um PDI | 💼 **propor ao Career OS** | Pode servir como evidência de desenvolvimento. Só com a sua aprovação |

---

## Coisas que o exemplo mostrou

- **A página principal também tem itens fora do glossário:** links de roadmap, a lista "Tarefas pra mim" (curso de WordPress, ler "O Design do Dia a Dia") e os bancos "Minha Biblioteca" e "UX Skills to master". Cada um ganha uma linha na triagem do lote.
- **Os termos do glossário ainda em checklist** (Persona, Mapa de empatia, Card Sorting...) são uma lista de estudos pendentes. Sugestão: virar **uma nota só**, "Termos para estudar", em vez de uma nota vazia por termo.
- **Ponte com a carreira:** algumas páginas (o teste de usabilidade, o PDI) podem virar evidência no Career OS. O Claude só sugere. Quem decide é você, e pelo protocolo do Career OS.
