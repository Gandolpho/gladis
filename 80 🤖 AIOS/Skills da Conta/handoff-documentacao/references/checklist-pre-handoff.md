# Checklist pré-handoff

## Índice
1. Como usar
2. Checklist

## 1. Como usar
Passe antes de escrever o handoff. Item marcado "não" vira uma de duas coisas: algo a desenhar antes (diga à Julia) ou PENDENTE no documento, com quem resolve.

## 2. Checklist
**Completo**
- [ ] Todas as telas do fluxo existem, não só o caminho feliz.
- [ ] Caminhos de erro, de volta e de saída desenhados.
- [ ] Estados vazio, carregando e erro desenhados.
- [ ] O layout passou pelo teste de estresse (texto longo, muitos itens, tela estreita).

**Conteúdo**
- [ ] Texto final em todas as telas.
- [ ] Limites de caracteres e truncamento definidos para o que é dinâmico.

**Design system**
- [ ] Componentes existentes usados onde possível; os novos estão marcados.
- [ ] Valores ligados a tokens; o que não tem token está identificado.
- [ ] Nomes de componentes iguais aos do código, quando houver.

**Acessibilidade**
- [ ] Contraste conferido com valores reais.
- [ ] Áreas de toque no padrão do projeto.
- [ ] Ordem de foco pensada para cada tela com interação.

**Arquivo**
- [ ] Frames organizados em seções (caminho feliz, erros, estados, responsivo).
- [ ] Notas de comportamento ao lado do que o desenho estático não mostra.
- [ ] Fontes disponíveis no ambiente de quem vai implementar.
