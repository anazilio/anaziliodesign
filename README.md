# GMartins - Portfolio

### 💻 Figma

- [Layout](https://www.figma.com/file/t4hrbbiVa8tRSMAcnzK3v0/GMartins?type=design&node-id=0-1&mode=design&t=CAtpGfjqbs1HxGQw-0)

### 🎯 Tecnologias

- [Nextjs](https://nextjs.org/)
- [React](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)

### ✋🏻 Pré-requisitos

- [Node (16x +)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/getting-started/)

### :construction: Configurações

- Crie um arquivo `.env` na raiz do projeto adicione as variaveis:

  - `NEXT_PUBLIC_MAP_KEY=XXXXXX`, Caso não tenha uma key para a utilização do Mapa entre no [Google Cloud Console](https://console.cloud.google.com/) e crie um projeto, e habilite a `API do Maps JavaScript` e crie a Chave da API.

  - `NEXT_PUBLIC_SMTP_HOST=smtp.sendgrid.net`
  - `NEXT_PUBLIC_SMTP_PORT=465`
  - `NEXT_PUBLIC_SMTP_USER=XXXXX`
  - `NEXT_PUBLIC_SMTP_PASSWORD=XXXXX`
  - `NEXT_PUBLIC_SMTP_FROM_EMAIL=faleconosco@gmartinslogistica.com.br`
  - ##### :warning: ATENÇÃO CASO OCORRA MUDANÇAS NAS VARIAVEIS DE AMBIENTE REFLITA ELAS NO AMBIENTE DE DEPLOY `VERCEL`

### 📚 Comandos essenciais

- Criar um novo componete em `src/components/{ComponentName}`

      yarn component
      // ...
      What is the name of the component: ....

- Criar uma nova página em `src/screens/{ComponentName}`

      yarn page
      // ...
      What is the name of the component: ....

### 🔥 Instalação e execução

- Faça um clone desse repositório utilizando o camando `git clone https://github.com/Williams25/gmartins`
- Entre na pasta do projeto `cd gmartins` e logo após `code .`
- Para instalar as dependências do projeto exucute no terminal `yarn` ou `npm i`
- Para executa-lo execute `yarn dev` ou `npm run dev`
