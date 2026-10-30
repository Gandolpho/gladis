---
tipo: documento
contexto: pessoal
status: ativo
proxima_acao: "Comprar as balas de coco e definir quantas vão em cada pacotinho"
atualizado: 2026-10-09
tags: [tema/leitura]
---

# Sistema de Custos de Kits

Aplicação local que calcula quanto custa produzir cada kit do [[Clube do Livro]]: custo de cada item, custo por kit e custo total da produção, a partir das compras de materiais e dos processos (impressão, Cricut, laminação).

## Onde mora e como abrir

- **Pasta da aplicação** (fica fora do cofre, de propósito): `C:\Users\Administrador\Documents\Projetos Pessoais\Sistema de Cálculo de Custos de Kits`
- **Abrir:** clique duplo em `Iniciar.bat`, nessa pasta. O navegador abre em `http://localhost:5173`. Se a aplicação já estiver rodando, ele só abre o navegador.
- **Está tudo salvo?** O rodapé da barra lateral mostra "Tudo salvo". Uma faixa vermelha no topo quer dizer que a aplicação está desligada: não feche a aba, abra o `Iniciar.bat` e o que estava pendente é salvo sozinho.
- **Dados:** `dados/banco.json`, dentro da pasta da aplicação. Cópia de segurança automática a cada vez que a aplicação abre, em `dados/backups/` (guarda as 10 mais recentes).
- **Regras de cálculo e manual completo:** `README.md` na pasta da aplicação.

## Retrato em 2026-10-09

Projeto [[Presente de Natal da Trama 2026]], com 15 kits iguais. Os números vivos ficam na aplicação; este retrato serve para lembrar onde as coisas estavam.

| Item | Por kit | Tipo | Status | Custo unitário | Custo no kit |
|---|---|---|---|---|---|
| Ecobag personalizada | 1 | Artesanal | Planejado | R$ 5,82 | R$ 5,82 |
| Caneca personalizada | 1 | Comprado | Planejado | R$ 23,90 | R$ 23,90 |
| Marca-página | 2 | Artesanal | Planejado | R$ 0,25 | R$ 0,51 |
| Chaveiro artesanal | 1 | Artesanal | Em produção | R$ 1,12 | R$ 1,12 |
| Cartela de adesivos | 2 | Artesanal | Planejado | R$ 1,40 | R$ 2,79 |
| Pacotinho de bala de coco | 1 | Artesanal | Planejado | A definir | A definir |

**Custo conhecido por kit: R$ 34,14. Custo conhecido dos 15 kits: R$ 512,06.** Falta o custo do pacotinho de bala de coco.

Biblioteca: 8 materiais. Sete deles (Ecobag, Tinta para tecido, Papel para marca-página, BOPP, Cerâmica fria, Componente metálico para chaveiro, Vinil adesivo para impressão) têm uma compra registrada em 2026-10-07. A Bala de coco ainda não tem compra. Processos: Impressão (R$ 0,80 por folha), Corte na Cricut (R$ 0,30 por folha), Laminação (R$ 0,35 por folha).

## Pontos a confirmar

- **Pacotinho de bala de coco:** as balas vão ser compradas avulsas. Faltam o preço (registrar a compra em Materiais) e quantas balas vão em cada pacotinho. Também não está definido se o pacotinho terá embalagem própria.

## Decisões e notas

- Roda só no computador da Julia, sem login nem internet. Os dados ficam num arquivo, não na nuvem.
- Cada material usado num item fica preso à compra escolhida. Uma compra nova não muda o custo de kits já calculados; a troca é manual ("Usar esta compra").
- Custo desconhecido nunca vira R$ 0,00: aparece como "A definir" ou "R$ X + ?".
- Processos têm um valor único, sem histórico. Mudar o custo da Cricut muda todos os itens que usam a Cricut.
- Desperdício padrão: 5% para o que é medido por peso, comprimento ou volume, e 0% para o que é contado (argola, ecobag). Dá para mudar em cada material e em cada item.
- Visual: paleta azul-tinta, sem verde.

## Histórico

- **2026-10-06** · Aplicação criada.
- **2026-10-07** · Cadastrado o projeto Presente de Natal da Trama 2026, com itens, materiais, compras e processos.
- **2026-10-09** · Documentação trazida para o GLADIS. A aplicação continua na pasta original.
- **2026-10-09** · Corrigido o corte na Cricut do marca-página: era 4 cortes por peça, passou a ser 1 folha rende 4 marca-páginas (confirmado pela Julia). O marca-página caiu de R$ 1,38 para R$ 0,25 e o kit, de R$ 36,39 para R$ 34,14.
- **2026-10-09** · Caneca confirmada como comprada pronta. Novo item Pacotinho de bala de coco (1 por kit), com o material Bala de coco, ainda sem preço nem quantidade.
