# Modelo do report.md

## Índice
1. Como usar
2. Modelo

## 1. Como usar

Siga esta estrutura. Os textos entre `<>` são instruções; substitua-os.

## 2. Modelo

````markdown
# Análise competitiva de <setor>: funil e precificação

> Coleta: <AAAA-MM-DD> · Concorrentes: <N> · Região/moeda vista: <ex.: BR / USD>
> Produto de referência: <nosso produto, se informado, ou "entrante genérico">

## 1. Resumo Executivo

<3–6 bullets com os insights mais acionáveis. Cada bullet = um fato + por que importa.
Ex.: "3 de 5 exigem cadastro antes de mostrar o editor; Tally deixa criar um form sem conta: é o único com barreira 0 no onboarding e o que mais cita 'rápido' nas reviews.">

## 2. Matriz Comparativa do Funil

### 2.1 Tabela

| Concorrente | Tipo | Aquisição (CTA) | Onboarding | Ativação (tempo) | Diferencial-chave | Entrada paga | Freemium |
|---|---|---|---|---|---|---|---|
| <Nome> | direto | "<CTA>" → cadastro | E-mail + SSO, sem cartão | ~3 min (inferido) | <1 linha> | US$ 29/mês | 100 respostas/mês |

### 2.2 Mapa de barreiras (0 = livre, 3 = alta)

```
                Aquisição  Onboarding  Ativação  Preço
Concorrente A   ▓░░░ 0     ▓▓░░ 1      ▓▓░░ 1    ▓░░░ 0
Concorrente B   ▓▓▓▓ 3     ▓▓▓▓ 3      ▓▓▓░ 2    ▓▓▓▓ 3
Concorrente C   ▓▓░░ 1     ▓▓▓░ 2      ▓▓░░ 1    ▓▓░░ 1
```
<Use ▓ para (barreira+1) blocos e ░ para o restante até 4. Depois do diagrama, 1–2 frases dizendo onde se concentra o atrito no mercado.>

### 2.3 Precificação lado a lado

| Concorrente | Free | Plano de entrada | Plano intermediário | Topo / Enterprise | Eixo de cobrança |
|---|---|---|---|---|---|

## 3. Análise por Concorrente

### 3.x <Nome>: <url>

![Home de <Nome>](assets/<slug>-home.png)

**Aquisição.** <proposta de valor, público, CTA> [observado]
**Onboarding.** <…>: Barreira <n>/3
![Cadastro de <Nome>](assets/<slug>-signup.png)
**Ativação.** <…>: Barreira <n>/3 [inferido: fonte]
**Funcionalidades-chave.** <core UX + diferenciais>
**Precificação.** <planos e limites>: Barreira <n>/3
![Preços de <Nome>](assets/<slug>-pricing.png)
**Pontos fortes / fracos.** <2–3 de cada>
**Limitações da coleta.** <se houve bloqueio, captura ausente ou dado inferido; senão omita>

## 4. Lacunas de Mercado e Oportunidades

<Lista priorizada (maior impacto primeiro). Cada item:
- **Oportunidade**: o que fazer.
- **Evidência**: qual padrão na matriz/análise sustenta (cite concorrentes).
- **Por que agora / risco**: 1 linha.
Busque: etapas do funil onde todos têm barreira alta; personas ignoradas; limites de freemium que todos impõem igual; diferenciais que só um player tem e que poderiam ser commodity; reclamações recorrentes em reviews.>

## 5. Implicações para o produto

<O "e daí" da análise, curto e acionável:
- **Fazer ou acelerar:** o que construir ou mudar, ligado a uma oportunidade da seção 4.
- **Diferenciar ou só igualar:** onde vale ser diferente e onde basta não ficar atrás.
- **Acompanhar:** o que monitorar nos concorrentes (preço, lançamentos) e com que frequência.>

## 6. Metodologia e Limitações

<Como os concorrentes foram escolhidos (fontes), datas, páginas visitadas, o que foi observado vs. inferido, e quaisquer bloqueios encontrados: descritos de forma neutra.>
````
