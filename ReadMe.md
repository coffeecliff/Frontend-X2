# 🏆 X2 — Site Informativo do Projeto X2

 ![Projeto X2](./public/webLogo.png)


## 📖 Descrição
 
O **X2** é um site informativo desenvolvido para divulgar e centralizar informações sobre o **Projeto X2**.  
Seu objetivo é apresentar a edição atual do projeto, os resultados dos jogos passados e, futuramente, exibir os resultados em tempo real durante as partidas.
 
O site busca ampliar a **visibilidade** do projeto e oferecer acesso rápido aos resultados para pessoas que não puderem estar presentes nos jogos.  
O projeto nasceu da necessidade de aprimorar o **marketing do Projeto X2**, que antes contava apenas com o Instagram como meio de divulgação.  
Com o site, espera-se alcançar mais público e fortalecer a identidade visual do projeto.
 
---
 
## 🚧 Status do Projeto
 
> 🔨 **Em desenvolvimento**
 
---
 
## ⚙️ Funcionalidades
 
### Sistema **Client**
- Visualização dos resultados dos jogos.
 
### Sistema **Admin**
- Edição das informações da **Home** do site.  
- Edição da **Tabela de Jogos**.  
- Edição da seção **Sobre**.  
- Edição da tela de **Patrocinadores**.
 
---
 
## 🧠 Tecnologias Utilizadas
 
**Linguagens:**  
- HTML  
- CSS / TailwindCSS  
- JavaScript  
 
**Framework:**  
- React + Vite  
 
---
 
## 🧩 Pré-requisitos
 
- Navegador atualizado (Chrome, Edge, Firefox, etc.)  
- Node.js (para desenvolvimento e build do projeto)  
- npm ou yarn instalado
 
---
 
## 💻 Instalação
 
```bash
# Clone este repositório
git clone https://github.com/coffeecliff/Frontend-X2
 
# Instale as dependências
npm install
 
# Inicie o servidor de desenvolvimento
npm run dev


## Estrutura de pastas

    src/
    ├── assets/                 # Imagens e ícones
    ├── components/
    |   └── Button.jsx          # Componentes reutilizáveis
    |   └── Card.jsx            # Componentes reutilizáveis
    |   └── Footer.jsx          # Componentes reutilizáveis
    |   └── Input.jsx           # Componentes reutilizáveis
    |   └── LoadingSpinner.jsx  # Componentes reutilizáveis
    |   └── Privatenavbar.jsx   # Componentes reutilizáveis
    |   └── PublicNavbar.jsx    # Componentes reutilizáveis
    |   └── Sidebar.jsx         # Componentes reutilizáveis
    ├── context/
    │   └── AuthContext.jsx     # Controle de autenticação
    ├── pages/                  # Páginas do sistema (Home, Login,, about, etc.)
    |   └── About.jsx           # Pagina about conta um pouco sobre o projeto          
    |   └── AdmAboutEdit.jsx    # Pagina de edicão da pagina about          
    |   └── AdmGamesEdit.jsx    # Pagina de edição da tabela da pagina jogos                
    |   └── AdmHomeEdit.jsx     # Pagina de edição da tabela de resultados da home               
    |   └── AdmSponsorEdit.jsx  # Pagina de edição dos patrocinadores                   
    |   └── Games.jsx           # Pagina que mostra o resultado das tabelas dos jogos          
    |   └── Home.jsx            # Pagina inicial do site        
    |   └── Login.jsx           # Pagina login do site         
    |   └── NewEdition.jsx      # Pagina que mostra a edição atual do desafio              
    |   └── Register.jsx        # Pagina de registro do site              
    |   └── Sponsor.jsx         # Pagina de patrocinadores            
    ├── routes/
    │   └── AppRoutes.jsx       # Definição das rotas
    ├── services/
    |   └── mockApi.js          # somente temos mockApi para testarmos a autenticação e entrarmos na page adm           
    ├── App.jsx
    ├── index.css
    └── main.jsx
