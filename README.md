# Projeto de Automação de Testes com Playwright e TypeScript
Este projeto é uma aplicação prática de automação de testes no saucedemo utilizando o Playwright com TypeScript.

## Pré-requisitos

Certifique-se de ter os seguintes pré-requisitos instalados:

- Node.js
- IDE (usei o Intellij)

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```npm install```

### Executando os Testes
Para executar os testes, utilize o seguinte comando:

```npx playwright test```

## Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

├── src/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Contém os arquivos de código-fonte<br>
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── pages/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Páginas da aplicação (Page Objects)<br>
│ &nbsp;&nbsp;&nbsp;&nbsp; │ &nbsp;&nbsp; &nbsp;&nbsp;├── LoginPage.ts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Definição da página de login<br>│ &nbsp;&nbsp; &nbsp;&nbsp;│ &nbsp;&nbsp;&nbsp;&nbsp; └── ProductsPage.ts &nbsp;&nbsp; # Definição da página de produtos<br>
│ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── tests/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Casos de teste automatizados<br>
│ &nbsp;&nbsp;&nbsp;&nbsp; │ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── login.spec.ts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Testes relacionados à autenticação<br>
├── .gitignore &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Configuração do git para ignorar arquivos/diretórios<br>
├── package.json &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Arquivo de configuração do projeto Node.js<br>
├── package-lock.json &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Contém as versões das dependências do projeto<br>
├── playwright.config.ts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Arquivo de configuração do Playwright<br>
├── tsconfig.json &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Arquivo de configuração do TypeScript<br>
└── README.md &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Este arquivo<br>
## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests com melhorias, correções de bugs ou novos recursos.
