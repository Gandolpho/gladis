# CLAUDE.md · Sistema de Custos de Kits

Esta pasta guarda só o conhecimento sobre o sistema. **A aplicação mora fora do cofre**, em:

`C:\Users\Administrador\Documents\Projetos Pessoais\Sistema de Cálculo de Custos de Kits`

## Antes de mexer na aplicação

1. Leia a nota de entrada [[Sistema de Custos de Kits]] (estado atual e pontos a confirmar).
2. Leia o `CLAUDE.md` **da pasta da aplicação**. Ele tem a stack, a estrutura, as regras de negócio e a linguagem visual, e prevalece para qualquer mudança no código.
3. Trabalhe nos arquivos da aplicação pelo caminho completo. Não copie código nem dados para dentro do cofre.

## Cuidados com os dados reais

- `dados/banco.json` (na pasta da aplicação) tem os dados reais da Julia. Nunca apagar, sobrescrever ou fazer teste nele sem verificar o conteúdo e perguntar antes. Para testar, copie o arquivo e restaure depois.
- **Nunca deixe o servidor desligado no fim de uma sessão.** Se a aba da aplicação ficar aberta com o servidor parado, tudo o que ela digitar deixa de ser salvo (já houve perda de dados assim).
- Para ligar o servidor a partir daqui: rode `npm start` em segundo plano na pasta da aplicação (o Node fica em `C:\Program Files\nodejs`; recarregue o PATH antes) ou peça à Julia para abrir o `Iniciar.bat`. Depois, abra `http://localhost:5173` no painel do navegador.

## Ao terminar

Atualize o "Retrato" e os "Pontos a confirmar" da nota de entrada quando os números ou as decisões mudarem.
