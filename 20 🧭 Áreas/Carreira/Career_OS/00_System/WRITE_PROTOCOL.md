---
id: SYS-WRITE-PROTOCOL
type: system
privacy: CONFIDENTIAL
created: 2026-08-11
last_updated: 2026-10-11
---

# Protocolo obrigatório de escrita

Este protocolo deve ser consultado antes de qualquer operação que altere conteúdo já existente no Career OS.

## Regra principal

Uma solicitação de alteração NÃO constitui autorização para editar a base.

Quando Julia solicitar mudança em uma informação, regra, classificação, inferência ou conteúdo já existente, seguir obrigatoriamente:

1. NÃO alterar nenhum arquivo.
2. Identificar os arquivos afetados.
3. Apresentar uma proposta curta contendo:
   - arquivo afetado;
   - conteúdo ou valor atual;
   - alteração proposta;
   - justificativa.
4. Perguntar: **"Aprovar alterações?"**
5. Aguardar uma nova mensagem contendo aprovação explícita.
6. Somente após essa aprovação executar as alterações.
7. Informar de forma curta o que foi alterado.
8. Registrar no CHANGELOG apenas quando a mudança for relevante para o histórico profissional ou para o funcionamento do sistema.

## Fluxo obrigatório

REQUEST → PROPOSAL → APPROVAL → EXECUTION → REPORT

A mensagem REQUEST nunca deve ser interpretada como APPROVAL.

### Exemplo

Julia:
"Meu salário mínimo CLT agora é R$7.000."

Comportamento incorreto:
Editar JOB_CRITERIA.md imediatamente.

Comportamento correto:

"Alteração proposta:

JOB_CRITERIA.md
Atual: rejeitar abaixo de R$5.000
Proposto: rejeitar abaixo de R$7.000
Motivo: nova preferência informada por Julia.

Aprovar alterações?"

Somente após Julia responder afirmativamente a alteração pode ser executada.

## Alterações em lote

Vários arquivos podem ser incluídos na mesma proposta.

Uma única aprovação pode autorizar todas as alterações claramente listadas naquela proposta.

A aprovação não autoriza alterações adicionais que não tenham sido apresentadas.

## Criações permitidas sem aprovação

Não é necessária aprovação prévia para:

- criar novo arquivo seguindo um template existente;
- registrar nova vaga;
- registrar nova candidatura;
- adicionar nova entidade sem modificar fatos existentes;
- mover ou renomear arquivos quando isso não alterar o significado da informação.

Se a criação exigir inferir uma informação sobre Julia, a inferência deve ser apresentada para aprovação antes de ser persistida como fato.

## Ajuste direto em texto de material

Aprovado por Julia em 2026-10-11.

Não é necessária proposta nem aprovação prévia para ajustar **pontuação e fluidez** em **texto de material**.

- **Texto de material:** conteúdo redigido para uso externo, como `CV_PT.md`, `CV_EN.md`, `LINKEDIN.md`, `GUPY.md`, `PORTFOLIO.md`, `APPLICATION_ANSWERS.md` e rascunhos de textos de candidatura.
- **Pontuação e fluidez:** vírgulas, pontos, travessões, concordância, ortografia e reescrita de uma frase para ler melhor, **sem mudar o sentido e sem acrescentar ou retirar informação**.
- **Como informar:** em uma linha, depois de feito, dizendo o que foi ajustado.

**Nunca vale para:**

- fatos, números, métricas, datas, cargos, nomes de empresa ou de projeto, autoria, nível de participação ou claims;
- classificação de privacidade;
- arquivos de sistema, perfil, evidências, skills, critérios de vaga ou regras;
- qualquer mudança que altere o que o texto afirma.

Na dúvida se o ajuste muda o sentido, seguir o fluxo normal: proposta e "Aprovar alterações?".

## Exclusões

Exclusões sempre exigem confirmação específica.

Mesmo que Julia diga "exclua X", essa mensagem deve ser tratada como REQUEST.

Antes de excluir:

1. identificar o que será excluído;
2. informar brevemente o impacto;
3. perguntar se a exclusão está aprovada;
4. aguardar confirmação explícita;
5. somente então excluir.

## Conflitos de informação

Se uma nova informação contradizer um fato existente:

- não escolher automaticamente qual informação está correta;
- mostrar a divergência;
- propor a atualização;
- aguardar aprovação.

## Inferências

Claude pode identificar novas competências, padrões ou interpretações a partir das evidências existentes.

Pode apresentar essas inferências livremente durante análises.

Para registrá-las permanentemente no Career OS como informação sobre Julia, deve solicitar aprovação.

## Regra de segurança

Em caso de dúvida entre:

- alterar imediatamente; ou
- solicitar aprovação;

sempre solicitar aprovação.