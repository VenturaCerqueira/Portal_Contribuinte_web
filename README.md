Este repositório contém o front-end do Portal Unificado, desenvolvido em React. Ele foi projetado para ser modular, escalável e responsivo, facilitando a manutenção e usabilidade em diferentes dispositivos.

🚀 Tecnologias Utilizadas
O projeto utiliza as seguintes tecnologias e componentes principais:

Tecnologia	Versão	Descrição
React	18.2.0	Biblioteca principal para construção da interface.
React DOM	18.2.0	Gerenciamento da renderização no DOM.
React Router DOM	6.4.0	Gerenciamento de rotas no React.
Bootstrap	5.2.3	Framework CSS para responsividade e layout.
FontAwesome	6.2.1	Ícones para melhorar a interface.
SASS	1.54.9	Pré-processador CSS para estilização customizada.
Vite	3.2.0	Ferramenta de build rápida para desenvolvimento.
ESLint	8.31.0	Linter para padronização de código.
Prettier	2.8.0	Ferramenta de formatação automática de código.
📂 Estrutura do Projeto
A organização das pastas foi feita para garantir modularidade e escalabilidade:

plaintext
src/
├── assets/
│   ├── styles/      # Arquivos CSS/SASS globais e reset
│   └── images/      # Imagens do projeto
├── components/      # Componentes reutilizáveis
│   ├── navbar/      # Navbar fixa com menus e dropdowns
│   ├── bottom/      # Botões flutuantes
│   └── footer/      # Rodapé do portal
├── pages/           # Páginas principais do sistema
│   ├── Home/        # Página inicial
│   ├── Contribuinte/
│   ├── Mobiliario/
│   ├── Imobiliario/
│   └── Nfse/
├── App.jsx          # Componente principal do React
└── main.jsx         # Ponto de entrada do aplicativo
📦 Pré-requisitos
Antes de começar, verifique se você tem os seguintes pré-requisitos instalados em sua máquina:

Node.js (v16.20.2 ou superior)

npm (v8.x ou superior)

📖 Passo a Passo para Configuração
1. Clone o Repositório
Comece clonando este repositório em sua máquina local:

bash
git clone https://github.com/VenturaCerqueira/Portal_Contribuinte_web.git
cd Portal_Contribuinte_web
2. Instale as Dependências
Instale as dependências do projeto especificadas no arquivo package.json:

bash
npm install
3. Configure a Porta do Servidor (Opcional)
Por padrão, o servidor de desenvolvimento do Vite usará a porta 5173. Se você deseja rodar na porta 3000 como antes, edite ou crie o arquivo vite.config.js na raiz do projeto com o seguinte conteúdo:

javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Altere a porta para 3000
  },
});
4. Inicie o Servidor de Desenvolvimento
Após configurar, inicie o servidor de desenvolvimento:

bash
npm run dev
Acesse o projeto no navegador:

http://localhost:3000
5. Scripts Disponíveis
Aqui estão os principais scripts definidos no package.json:

npm run dev: Inicia o servidor de desenvolvimento.

npm run build: Gera a build otimizada para produção.

npm run start: Executa o servidor de pré-visualização da build.

npm run lint: Verifica e corrige problemas no código.


🛠️ Solução de Problemas
Erro: Porta Padrão do Vite Não É 3000
Se o projeto abrir em outra porta (como 5173), altere a porta no arquivo vite.config.js como descrito acima.

Erro: Caminhos de Arquivo Não Encontrados
Verifique se os caminhos no App.jsx e outros arquivos estão corretos. Exemplo:

javascript
import "./assets/styles/global.css"; // Caminho correto
Erro: Versão do Node.js
Se você estiver usando o Node.js v18 ou superior e o projeto apresentar problemas, volte para o Node.js v16.20.2 (ou vice-versa) utilizando nvm ou reinstale o Node.js..