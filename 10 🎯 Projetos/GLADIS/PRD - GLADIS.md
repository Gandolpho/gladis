---
tipo: documento
contexto: pessoal
data: 2026-10-07
versao: 1.0
tags: [tema/arquitetura-de-sistemas, tema/ia]
---

# PRD · GLADIS

Documento de requisitos do sistema. É a referência que o Claude consulta antes de mudar qualquer coisa estrutural. Mudanças de escopo entram no [[#Histórico de versões]].

## 1. Problema

A Julia é autista e tem TDAH. Ela tem dificuldade em se organizar, manter constância e lembrar das coisas, e hoje alterna cerca de quatro contextos por semana: o projeto principal do sprint no Trinks, as demandas paralelas do Trinks, a busca de vaga e os projetos pessoais. As informações estão espalhadas entre Notion, pastas no Claude e no ChatGPT, outro cofre do Obsidian e o WhatsApp.

O resultado é perder contexto ao trocar de atividade, esquecer compromissos e ideias, e sentir que nada avança. Sistemas tradicionais de produtividade falham com ela porque exigem manutenção manual constante.

## 2. Usuária

Uma pessoa só: a Julia, Product Designer CLT, em transição para Pleno. Detalhes em [[Identidade]].

**Restrição central de design:** o custo de manutenção para ela precisa ser perto de zero. Se uma funcionalidade depender de registro manual frequente, ela será abandonada.

## 3. Objetivos

| # | Objetivo | Como saber que deu certo |
|---|---|---|
| O1 | Ter um único lugar para jogar tudo | Ela usa o Inbox e para de mandar coisas soltas para si mesma no WhatsApp |
| O2 | Não perder o contexto ao trocar de projeto | Todo projeto ativo tem "onde parei" e "próxima ação" atualizados |
| O3 | Ter uma rotina estruturada e sustentável | Há daily na maioria dos dias úteis e a revisão semanal acontece 3 semanas seguidas |
| O4 | Avançar a carreira de forma visível | O banco de métricas e os cases crescem, e as candidaturas são registradas |
| O5 | Lembrar das coisas | Ela relata que o Claude lembrou de algo que ela teria esquecido |
| O6 | Aprender de forma conectada | Notas de estudo viram conceitos linkados entre si |

## 4. Fora de escopo (por enquanto)

- Rastreamento de hábitos e dashboards de métricas pessoais
- Finanças pessoais
- Área de negócio para o Estúdio Camélia
- Migração de conteúdo antigo (é uma fase própria do plano)
- Plugins de terceiros, até haver uma necessidade concreta

## 5. Princípios de design

1. **O Claude organiza, a Julia captura.** Ela só precisa lembrar de duas portas: o Inbox e a nota Agora.
2. **Nada é obrigatório.** Templates são pontos de partida, e campos vazios são normais.
3. **Menos é mais.** No máximo 3 prioridades por dia e 5 campos no painel.
4. **Original intocado.** Fontes brutas nunca são editadas.
5. **Tags e busca primeiro.** As pastas dão ordem, e as propriedades dão navegação.
6. **Ajuste por evidência.** A rotina muda com base no que as revisões semanais mostram, não por teoria.
7. **Tom certo por contexto.** Direto no profissional e encorajador no pessoal.

## 6. Requisitos funcionais

### Captura
- **RF01** Inbox único em `00 📥 Inbox`, aceitando qualquer formato.
- **RF02** Captura pelo celular sincronizando com o Inbox. Hoje a captura é pelo WhatsApp, e a solução está a definir (ver plano, fase 3).

### Processamento
- **RF03** O Claude processa o Inbox sob demanda e na revisão semanal, e no final diz o que foi para onde.
- **RF04** Fonte bruta vai para `50 🗃️ Fontes Brutas` e gera uma nota processada com resumo, insights, ações e link para o original.
- **RF05** Estudos viram notas de fonte e conceitos interligados.

### Rotina
- **RF06** Daily com as seções: Como estou (exclusiva da Julia), Agenda, 3 prioridades, Plano, Capturas e Fechamento. _(Atualização de 2026-10-11: não existe mais daily. O dia mora na seção Hoje do `🏠 Agora.md`, sem Fechamento; o "Como estou" é opcional e copiado, idêntico, para o [[Diário]]. A revisão completa deste PRD é o S1 da [[Revisão de Regras 2026-10-11]].)_
- **RF07** O Claude monta o plano do dia com blocos de foco, transições e recarga, e cria esses eventos direto na agenda pessoal do Google Calendar.
- **RF08** Revisão semanal com insights automáticos: conexões entre notas, padrões e avanço da carreira.

### Projetos e carreira
- **RF09** Painel em Bases com status, contexto, prazo, próxima ação e valor de portfólio.
- **RF10** Área de Carreira com visão, posicionamento, metas, empresas-alvo, cases e banco de métricas.
- **RF11** Projetos concluídos vão para o Arquivo com retrospectiva.

### Memória
- **RF12** Lembretes mantidos pelo Claude na nota Agora.
- **RF13** Aprendizados e correções registrados automaticamente em [[Memória]].
- **RF14** Log resumido de alterações estruturais em [[Log]].

### Camada da IA (AIOS)
- **RF15** Tudo o que é da IA mora em `80 🤖 AIOS/`. Exceções: `CLAUDE.md` da raiz e dos projetos, e `.claude/`.
- **RF16** PRD First: automações, código, skills e projetos complexos começam por um PRD aprovado.
- **RF17** Regra das 3 Vezes: tarefa repetida 3 vezes vira proposta de skill, que só entra no sistema com aprovação.
- **RF18** Catálogo de skills com revisão mensal (manter, aprimorar ou aposentar).
- **RF19** Histórico (log, decisões, mudanças nas regras) separado das regras e da memória.

## 7. Requisitos não funcionais

- **RNF01 · Segurança:** permissões em três níveis (liberado, com permissão, proibido), definidas numa fonte única: [[Regras]].
- **RNF02 · Portabilidade:** tudo em Markdown puro. A Identidade funciona com qualquer IA.
- **RNF03 · Legibilidade:** notas curtas e escaneáveis fora da área de estudos.
- **RNF04 · Idioma:** português, com datas em `AAAA-MM-DD`.
- **RNF05 · Eficiência de tokens:** roteamento via mapa mestre, carregamento sob demanda e delegação de tarefas mecânicas a modelos mais leves ([[Regras]], seção 7). Os arquivos lidos em toda sessão precisam continuar curtos.

## 8. Riscos

| Risco | Mitigação |
|---|---|
| A Julia abandona a daily | A daily é opcional e curta. O Claude pode criá-la já preenchida a partir da agenda |
| O Inbox vira um depósito eterno | O processamento acontece na revisão semanal e o Claude avisa quando passar de 15 itens |
| A revisão semanal não acontece | Evento recorrente na agenda pessoal, com o Claude conduzindo a revisão |
| O sistema fica complexo demais | Toda mudança estrutural passa por este PRD e entra no Log |
| A captura continua presa no WhatsApp | Fase 3 do plano testa alternativas de captura móvel |

## Histórico de versões
- **1.1 · 2026-10-07** · Camada da IA (RF15 a RF19) e eficiência de tokens (RNF05). Career OS integrado como subsistema com regras próprias.
- **1.0 · 2026-10-07** · Versão inicial, a partir da entrevista de diagnóstico.
