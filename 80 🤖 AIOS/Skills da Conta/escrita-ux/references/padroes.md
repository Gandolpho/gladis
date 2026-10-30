# Padrões por elemento

## Índice
1. Regras gerais de forma
2. Títulos
3. Botões e links
4. Campos de formulário
5. Mensagens de erro
6. Feedback de sucesso
7. Estados vazios
8. Confirmações
9. Notificações, carregamento e tooltips
10. Onboarding

Regras gerais. Se o guia do produto disser diferente, vale o guia.

## 1. Regras gerais de forma
- **Maiúscula só na primeira palavra** (e em nomes próprios) em títulos, botões, colunas e menus. O "Title Case" do inglês não se usa em português.
- **Sem ponto** em títulos, subtítulos e botões. Frases de corpo terminam com ponto.
- **Aspas** para citar elementos da interface no texto: Clique em "Salvar alterações".
- **Sem itálico.** Destaque com negrito, em ideias, não em palavras soltas.
- **Números em algarismos** ("3 formas de pagamento").
- **Mesmo termo para a mesma coisa** em todo o produto.

## 2. Títulos
- Dizem onde a pessoa está ou o que vai fazer. Substantivo ("Formas de pagamento") ou tarefa ("Adicionar forma de pagamento").
- De 3 a 6 palavras.
- Em modal de ação, use o mesmo verbo do botão principal (título "Cancelar assinatura?", botão "Cancelar assinatura").

## 3. Botões e links
- **Verbo no infinitivo + objeto, quando precisar:** "Salvar", "Adicionar item", "Baixar relatório".
- De 1 a 3 palavras é o ideal; 5 no máximo.
- Nada de "OK", "Enviar" genérico, "Sim" e "Não": diga a ação.
- Nada de "Clique aqui" e "Ver mais" sozinhos. Para quem usa leitor de tela, o link precisa dizer para onde leva: "Ver detalhes do plano".
- Ação destrutiva com o verbo exato: "Excluir" para apagar de vez, "Remover" quando dá para voltar.
- Par de botões: principal com a ação, secundário com a saída ("Excluir cliente" / "Manter cliente", ou "Voltar").

## 4. Campos de formulário
- **Rótulo** visível, sempre: substantivo curto ("E-mail", "Telefone"). Placeholder não substitui rótulo.
- **Sem dois-pontos** depois do rótulo.
- **Texto de ajuda** quando a pessoa precisaria adivinhar: o formato, ou por que o dado é pedido ("Usamos para enviar o comprovante").
- **Placeholder** só para formato ("nome@email.com", "(00) 00000-0000").
- **Obrigatório** sinalizado antes do envio, não só pela cor.

## 5. Mensagens de erro
**Fórmula:** o que aconteceu + por que (se ajudar) + o que fazer. Sem culpar a pessoa, sem alarme, sem código técnico.

| Tipo | Padrão | Exemplo |
|---|---|---|
| No campo | O que o campo precisa | "Informe um e-mail com @." |
| Recuperável (modal ou faixa) | O que falhou. Causa provável. Próximo passo. | "Pagamento não aprovado. O cartão foi recusado. Tente outro cartão." |
| Bloqueante | O que está bloqueado. Por quê. O que fazer. | "Assinatura pausada. O pagamento está pendente. Atualize o cartão para voltar a usar." |
| Permissão | Benefício. Permissão necessária. | "Receba os lembretes de horário. Permita as notificações." |

**Evite:** "Inválido" (soa como juízo sobre a pessoa; prefira o que falta: "Informe..."), "Erro", "Algo deu errado" sozinho, "Ocorreu um erro" e qualquer beco sem saída.

Erro sempre com ícone ou texto além da cor.

## 6. Feedback de sucesso
- Diga **o que** foi concluído, de forma específica: "Cupom criado", "Despesa cadastrada". Nunca "Ação realizada com sucesso".
- Particípio passado, curto.
- Quando houver um próximo passo útil, acrescente: "Assinatura ativada. O cliente já pode usar os serviços."
- Comemoração proporcional ao feito: rotina pede só confirmação.

## 7. Estados vazios
| Tipo | Padrão | Exemplo |
|---|---|---|
| Primeiro uso | O que vai aparecer aqui + benefício + ação | "Nenhum plano criado ainda. Crie um plano para vender assinaturas." · "Criar plano" |
| Concluído pela pessoa | Confirmação positiva + quando aparece mais | "Tudo em dia. Novas pendências aparecem aqui." |
| Sem resultado | O que não foi achado + alternativa | "Nenhum cliente com esse nome. Confira a grafia ou limpe os filtros." |
| Sem acesso | O que não está disponível + por quê + como ter | "Relatórios disponíveis no Plano Anual. Conheça os planos." |

Um botão principal só. Sem tom negativo ("Você não tem...").

## 8. Confirmações
- Pergunta com a ação e o objeto: "Excluir 3 agendamentos?", nunca "Tem certeza?".
- Consequência em uma frase: "Os horários voltam a ficar livres."
- Diga se dá para desfazer.
- Botões com a ação, não "Sim"/"Não".
- Para ação reversível, prefira oferecer "Desfazer" a pedir confirmação.

## 9. Notificações, carregamento e tooltips
- **Notificação:** título com o fato ou a ação + uma frase de contexto. Só o que vale interromper.
- **Carregamento:** diga o que está acontecendo ("Gerando relatório...") e, se demorar, quanto falta.
- **Tooltip:** só o que não é óbvio, em uma frase. Nada essencial escondido em tooltip.

## 10. Onboarding
- Um conceito por vez.
- Benefício antes do pedido ("Conecte a agenda para receber lembretes", não "Conecte a agenda").
- Sempre com saída ("Pular", "Fazer depois").
- Comemore a primeira vitória da pessoa, não o produto.
