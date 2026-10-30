---
tipo: documento
contexto: pessoal
status: concluído
data: 2026-10-11
tags: [tema/arquitetura-de-sistemas, tema/ia]
---

# Sugestões do ChatGPT para a Revisão de Regras · 2026-10-11

**Para quem lê:** esta nota vai para a conversa que está fazendo a [[Revisão de Regras 2026-10-11]]. Ela traz o que sobrou, depois de cruzar as dicas do ChatGPT (documento "Racional e guia de sistemas", em `50 🗃️ Fontes Brutas/`) com o que o sistema já tem e com a própria Revisão. A maior parte das dicas já está coberta. Ficaram **3 propostas novas** e **1 ideia para guardar**.

**Origem:** o ChatGPT acompanhou a construção do Career OS e, ao fim, escreveu recomendações metodológicas. Ele mesmo marca que são recomendações, não regras aprovadas.

**Motivo de existir:** a Julia disse que não quer passar a tarde ajustando regras nem textos. As propostas abaixo atacam esse ponto, no formato da Revisão (gatilho, ação, exceção, como saber que funcionou, se falhar).

---

## 1. Propostas novas

### N1 · Parar a revisão de texto quando só sobra o cosmético

- **Problema:** a etapa 7.3 do Career OS (CV EN) se alongou em rodadas de microajuste. O ChatGPT apontou como causa a falta de critério de parada, e não a falta de rigor.
- **Onde mora:** [[Manual do Sistema]], dentro da autorrevisão de textos (R1). No arquivo fixo, no máximo uma linha apontando para ele.

> **Revisão de texto.** **Gatilho:** a Julia pede para revisar ou escrever um texto que ela vai usar (CV, LinkedIn, resposta de candidatura, documento). **Ação:** classificar o que achar em **bloqueante** (erro factual, de escopo, de privacidade ou de autoria), **relevante** (clareza, adequação ao canal) e **opcional**. Corrigir bloqueantes e relevantes **em uma única versão**, dar **uma recomendação principal** e deixar o opcional como sugestão, sem bloquear a entrega. **Exceção:** risco jurídico, confidencialidade e atribuição indevida de resultado são sempre bloqueantes. **Funcionou se:** um texto fecha em até 2 rodadas. **Se falhar:** se a Julia disser "chega", entregar a versão atual sem nova rodada.

- **Critério de parada (pergunta que o Claude faz a si):** "Se eu continuar mais 30 minutos, qual erro concreto evito?" Se a resposta for "talvez soe melhor", é opcional.
- **Esforço:** P. **Tokens:** neutro (vai para o Manual, lido só quando o caso aparece).
- **Relação com o que existe:** complementa a auditoria de naturalidade (Regras §12), que olha o estilo. Esta olha o quanto iterar.

### N2 · Validação proporcional ao risco no Career OS ✅ APROVADA em 2026-10-11 (só o nível baixo)

> **Já aplicada no Career OS** (`WRITE_PROTOCOL` e `SYSTEM_RULES`, entrada no `CHANGELOG`). A Julia liberou **ajuste direto de pontuação e fluidez em texto de material**. Os níveis alto e médio da tabela abaixo ficam como estavam (o protocolo atual já cobre). Nada a implementar nesta conversa, só a ciência.

- **Problema:** o `WRITE_PROTOCOL` do Career OS exige proposta e "Aprovar alterações?" para **toda** alteração de conteúdo existente. Para ajuste de pontuação ou fluidez em um rascunho de material, isso vira atrito. O próprio ChatGPT apontou esse atrito.
- **Proposta:**

| Risco | Exemplo | Tratamento |
|---|---|---|
| Alto | fato, métrica, cargo, datas, privacidade, autoria | Protocolo atual, sem mudança |
| Médio | headline, posicionamento, estrutura de texto | Uma proposta consolidada, uma aprovação |
| Baixo | pontuação e fluidez em **rascunho de material** (CV, LinkedIn, textos de candidatura) | Ajuste direto, avisado depois em uma linha |

- **Limite:** nunca vale para fatos, evidências, perfil, critérios de vaga ou regras. Só para texto de material.
- **Por que depende dela:** muda o `WRITE_PROTOCOL`, e dentro do Career OS as regras locais prevalecem (Regras §10). Pede o "sim" dela. Foi perguntado a ela nesta data e não houve resposta ainda.
- **Interação com a C1:** a C1 já cuida das pontes. Esta proposta é sobre edição de texto, não sobre ponte. Se aprovada, a C1 segue como está.
- **Esforço:** P.

### N3 · "Concluído" só com verificação no destino real

- **Problema real, relatado no Career OS:** o Claude escreveu `CV_EN.md` e `ROADMAP.md` numa **cópia de sessão** (`/mnt/user-data/uploads/Career_OS/`) e informou sucesso. Os arquivos não apareceram no Obsidian. Depois foram gravados no cofre real por uma ponte, e a Julia confirmou manualmente.
- **Onde mora:** reforço da checagem "as edições deram certo?" da R1.

> **Entrega gravada fora do Claude Code** (Cowork, Desktop, uploads, ponte). **Gatilho:** a tarefa grava em arquivo do cofre. **Ação:** antes de dizer "feito", conferir que o arquivo existe no **caminho real do cofre** e que o conteúdo é o aprovado. "A ferramenta informou sucesso" não basta. **Se falhar:** dizer onde o arquivo ficou e que não está no cofre.

- **Ligação com o P4 e com a medição da seção 8:** o `CHANGELOG` do Career OS (2026-10-07) registra que as permissões de pasta do Claude Desktop/Cowork **ainda precisam ser atualizadas para o novo caminho** do Career OS, e isso está pendente. A medição do P4 já suspeita que parte dos "OKs" vem do Cowork. Vale resolver os dois juntos.
- **Esforço:** P. Dentro do Claude Code (como agora) o risco é menor, porque a escrita é direta.

---

## 2. Ideia para guardar (não implementar agora)

### I1 · Material derivado desatualizado

- **Ideia:** quando um fato do Career OS muda, CV, LinkedIn e textos derivados ficam desatualizados sem ninguém ver. O ChatGPT sugeriu um estado `REVISÃO_NECESSÁRIA`.
- **Versão barata:** uma checagem do **zelador (A2)**: material em `05_Career_Materials/` com `last_updated` anterior ao de um arquivo-fonte que ele cita (Experience, Project, Evidence). Só aponta, não corrige. Custo de token zero, por ser script.
- **Quando:** depois que o A2 rodar. Está também no radar das etapas 8 e 11 do Career OS. Sugestão de linha para `Ideias - GLADIS`: `Zelador: avisar material do Career OS mais velho que a fonte que ele cita.`

---

## 3. Já coberto (sem ação)

| Dica do ChatGPT | Onde já está |
|---|---|
| Perguntar pouco, perguntas curtas e específicas | Regras §13 |
| Leitura seletiva, documentos mestres curtos, não colar versão antiga | Regras §7 e T1 |
| Separar fato, inferência e estimativa; privacidade por nível | Regras §11 e `SYSTEM_RULES` do Career OS |
| Aprovação em lote | P3 e C1 |
| Regra com gatilho, ação, exceção e verificação | Formato padrão da própria Revisão (seção 2) |
| Hierarquia de prioridade P0 a P3 | Regras §1 (liberado, com permissão, proibido) |
| Prompt de handoff entre sessões | Skill `handoff-documentacao` e Plano de Construção |
| Prompt de extração de conhecimento de conversa | `PROJECT_EXTRACTION_PROMPT` do Career OS |
| Registro de decisão (`DEC-XXXX`) | [[Decisões]] |
| Testar o sistema com 3 cenários reais | Etapa 9 do Career OS |
| Caminho crítico e fila paralela, critérios de saída | Plano de Construção (Agora, Próximo, Depois) e checklist do PRD (A3) |
| Contrato de resposta (objetivo, uma recomendação, perguntar só se mudar o resultado) | Regras §12 e §13, Identidade |

## 4. Cuidados que o ChatGPT levantou

- **Preferência de canal não vira regra global.** "Evitar dois-pontos no About" vale para o About do LinkedIn, não para YAML, documentação ou mensagem técnica. Não promover regras de estilo de um canal para o sistema inteiro.
- **Estrutura apoia o julgamento, não o substitui.** Não transformar toda observação em regra nem em arquivo novo.
- **Exemplos de regra, YAML e prompts do documento original são propostas**, não coisas implementadas.

---

## 5. O que preciso da conversa de revisão

1. Encaixar **N1** no R1 e no Manual (sem crescer o arquivo fixo).
2. Levar **N2** à Julia como decisão dela. Não aplicar antes do "sim".
3. Juntar **N3** ao P4 e resolver o pendente das permissões de pasta do Cowork.
4. Registrar **I1** em `Ideias - GLADIS` e olhar quando o A2 existir.
