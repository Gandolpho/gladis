---
tipo: projeto
contexto: carreira
status: pausado
valor_portfolio: médio
tags: [trinks/meios-de-pagamento]
---

# Trinks - Motivo de Recusa no Extrato

Parte do guarda-chuva Meios de Pagamento. Também chamado de "erro de pagamento na venda online". Registro enxuto; o material completo está no computador de trabalho.

## O que é
Mostrar o motivo da recusa e a orientação do próximo passo nas transações com status "Falhou" do Extrato. Liga com o Clube de Assinaturas, porque falhas recorrentes de cobrança suspendem assinaturas.

## Meu papel
Design da solução, texto das orientações e perguntas às áreas envolvidas (Engenharia, PO, Jurídico).

## Solução escolhida
Chip "Falhou" clicável que abre um popover com o motivo e a orientação. Foi criado do zero um catálogo de orientações por tipo de recusa, com cuidado de acessibilidade.

## Contexto de decisão
A PO tratou como correção de bug, sem meta mensurável. Faltavam respostas da Engenharia, a definição de quem mantém o catálogo e a validação do Jurídico.

## Situação
Pausado desde 2026-10-14: os devs encontraram um bug em que pagamentos com erro não eram filtrados e o extrato mostrava registros demais. Como paliativo, a coluna de erro foi retirada. Retoma quando a Engenharia definir o filtro.

## Para portfólio
Valor médio. Sem métrica, mas bom exemplo de processo: catálogo criado do zero, acessibilidade, UX writing e articulação com Engenharia e Jurídico.

## Pessoas
[[Laura Albuquerque]] (PO), [[Gabriel Herdeiro]] e [[Danielle Bassetto]] (devs).
