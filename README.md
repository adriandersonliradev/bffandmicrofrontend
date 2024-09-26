# BFF - Backend For Frontend

Na pasta bff deste projeto temos um **Backend For Frontend (BFF)** que possui 2 endpoints. O primeiro é um get /api/data que faz chamadas a dois sites diferentes, combina as respostas e retorna para o front-end em uma única requisição e o outro é um post /api/repository que faz uma chamada ao github e retorna os repositórios do usuário que é enviado via body.

## Requisitos

- Node.js (>= v14)
- NPM

## Instalação

1. Clone este repositório:

```bash
  git clone https://github.com/adriandersonliradev/bffandmicrofrontend.git
  cd bffandmicrofrontend/bff
```

2. Instale as dependências do projeto:

```bash
  npm install
```

## Executando o BFF

Para iniciar o servidor BFF localmente:

```bash
  npm start
```

O servidor estará rodando em [http://localhost:3000](http://localhost:3000).

# Micro-Frontends com React e Vite

Este projeto contém dois micro-frontends desenvolvidos com **React** e **Vite** que são carregados dinamicamente por um shell. Cada micro-frontend está isolado em seu próprio repositório e exposto para ser consumido pelo **shell**.

## Requisitos

- Node.js (>= v14)
- NPM

## Estrutura do Projeto

O projeto é composto por dois micro-frontends, **App1** e **App2**, e um host que faz a orquestração e exibe os dois micro-frontends.

- **microfrontend-app1**
- **microfrontend-app2**
- **shell** (orquestra os dois micro-frontends)

## Instalação

### 1. Instale as dependências

Tendo em vista que no passo anterior você já clonou o repositório então vamos instalar as dependências

Vá até a pasta raiz do projeto e execute os seguintes comandos para cada um dos micro-frontends e para o shell:

```bash
cd microfrontend-app1
npm install

cd ../microfrontend-app2
npm install

cd ../shell
npm install
```

## Executando os Micro-Frontends

### 1. Execute o microfrontend-app1:

Vá até a pasta raiz do projeto e execute os seguintes comandos:

```bash
$ cd microfrontend-app1
$ npm run build
$ npm run preview
```

O microfrontend-app1 estará disponível em [http://localhost:4173](http://localhost:4173).

Obs.: analise se está rodando na porta :4173, caso não esteja rodando na porta 4173 você terá que mudar a porta no shell

### 2. Execute o microfrontend-app2:

Vá até a pasta raiz do projeto e execute os seguintes comandos:

```bash
$ cd microfrontend-app2
$ npm run build
$ npm run preview
```

O microfrontend-app2 estará disponível em [http://localhost:4174](http://localhost:4174).

Obs.: analise se está rodando na porta :4174, caso não esteja rodando na porta 4174 você terá que mudar a porta no shell

### 3. Execute o shell:

Agora, vá até o diretório do Host e execute-o para orquestrar os micro-frontends:

```bash
$ cd shell
$ npm run build
$ npm run dev
```

O Shell estará disponível em http://localhost:5173

O Shell carrega dinamicamente os micro-frontends através da Module Federation. As URLs dos micro-frontends são configuradas no arquivo de configuração vite.config.ts do host.

```javascript
remotes: {
  app1: 'http://localhost:4173/assets/remoteEntry.js',
  app2: 'http://localhost:4174/assets/remoteEntry.js'
}
```

---

Sinta-se à vontade para abrir um pull request ou enviar sugestões para melhorar o projeto.
