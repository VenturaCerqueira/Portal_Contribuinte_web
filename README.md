# Portal Unificado - Front-End

Este repositório contém o front-end do Portal Unificado, desenvolvido em React. Ele utiliza uma estrutura modular para facilitar a manutenção, a escalabilidade e a usabilidade em diferentes telas e dispositivos.

## **🚀 Tecnologias Utilizadas**

- **React**: Biblioteca principal para construção da interface.
- **React Router**: Gerenciamento de rotas dinâmico.
- **Bootstrap**: Framework CSS para estilização e responsividade.
- **FontAwesome**: Ícones para melhorar a usabilidade e a interface.
- **Vite**: Ferramenta de build ultrarrápida para desenvolvimento de aplicações modernas.
- **SASS/CSS**: Para estilização customizada.

---

## **📂 Estrutura de Pastas**
```plaintext
src/
├── assets/
│   ├── styles/      # Arquivos CSS/SASS globais
│   └── images/      # Imagens utilizadas no projeto
├── components/      # Componentes reutilizáveis
│   ├── navbar/      # Navbar fixa com menus e dropdowns
│   ├── bottom/      # Botões fixos no projeto
│   └── footer/      # Footer do portal
├── pages/           # Páginas principais do aplicativo
│   ├── Home/        # Página inicial
│   ├── Contribuinte/
│   ├── Mobiliario/
│   ├── Imobiliario/
│   └── Nfse/
├── App.jsx          # Componente principal do React
└── main.jsx         # Ponto de entrada do aplicativo
```
# 📦 Dependências
Aqui estão as dependências essenciais utilizadas no projeto. Certifique-se de instalá-las antes de rodar o aplicativo.

Dependências de Produção
react: ^18.x

react-dom: ^18.x

react-router-dom: ^6.x

bootstrap: ^5.x

@fortawesome/fontawesome-free: ^6.x

sass: ^1.x

Dependências de Desenvolvimento
vite: ^4.x

eslint: ^8.x

eslint-plugin-react: ^7.x

prettier: ^2.x

# 📖 Como Configurar o Ambiente
Clone o Repositório

bash
git clone https://github.com/seu-usuario/portal-unificado.git
cd portal-unificado
Instale as Dependências Certifique-se de que o Node.js e o npm estão instalados.

bash
npm install
Rode o Servidor de Desenvolvimento Use o comando abaixo para iniciar o servidor.

bash
npm run dev
Acesse no Navegador Acesse o endereço local:

http://localhost:3000/


🛠️ Scripts Disponíveis
No diretório do projeto, você pode rodar os seguintes scripts:

npm run dev: Inicia o servidor de desenvolvimento.

npm run build: Gera a build otimizada para produção.

npm run lint: Analisa o código e corrige problemas de formatação.