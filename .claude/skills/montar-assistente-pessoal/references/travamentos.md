# Travamentos conhecidos

Vistos na montagem do Jarvis do pai (2026-10-08). Detalhes e linha do tempo em [[Assistente Pessoal como Serviço]]. Acrescente aqui cada travamento novo que valer para outras pessoas.

| Sinal (o que a pessoa vê ou diz) | O que está acontecendo | Como resolver |
|---|---|---|
| "O Claude disse que não consegue editar os arquivos" | Está no **chat**, ou usando o conector do Drive. O chat não mantém a pasta. | Ir para o app instalado, aba Code (ou Cowork), ambiente Local, e escolher a pasta. Antes, pedir ao chat uma nota "Onde parei" na pasta (ou copiar o texto). |
| Pedido para conectar o **GitHub**; botão "Selecionar repositório"; ícone de nuvem ao lado de "Default" | Sessão no **modo nuvem**. | Clicar no botão do ambiente ("Default") e escolher **Local**. O botão vira "Selecionar pasta". |
| Tela "Instale e abra o aplicativo" mesmo dizendo que já tem o app | Está no **site**, no navegador. | Abrir o app pelo menu Iniciar. Se não tiver aba Code, instalar/atualizar. |
| O "app" abre pelo Chrome; no local do arquivo aparece `chrome_proxy` | É um **atalho do Chrome** (site instalado como app), não o app real. | Instalar pela **Microsoft Store** (Claude, da Anthropic). Desinstalar o atalho antigo para não confundir. |
| O instalador só abre uma tela de configurações do Windows | Palpite: Windows aceitando só apps da Store, ou PC com restrição. | Instalar pela Store. Se não der, pedir print da tela de configurações. |
| Instalação pela Store demorando | Normal até uns 10 minutos (no pai: 11). | Se parar, abrir a Biblioteca da Store, pausar e retomar. |
| Respostas técnicas demais | Sem instrução de tom. | Pedir ao assistente que crie/atualize o CLAUDE.md com a seção "Como falar comigo". Não é caso de skill. |
| "Não consegui abrir o anexo do e-mail" | O conector do Gmail não abre anexos, e a extensão do Chrome não está conectada. | Conectar a extensão do Chrome na montagem. Plano B: baixar o anexo e soltar na Caixa de Entrada. |
| Automação criada, mas "ficou pendente executar" | A primeira execução pede que a pessoa clique em "Executar agora" e aprove as permissões. | Rodar a primeira vez junto com a pessoa, na montagem. |
| Assistente lendo arquivos da pasta Downloads | Sem Fontes Brutas. | Trazer os originais para `50 🗃️ Fontes Brutas/`, respeitando a regra de dados de terceiros. |

**Ainda sem resposta:** se o Claude Code edita bem arquivos na pasta do Google Drive para computador (unidade G:). Testar e atualizar esta linha.
