<p align="center">
    <img id="rentalx" alt="Foodfy" src="./assets/RentalX.png"/>
</p>


<p align="center">
   <img src="https://img.shields.io/github/repo-size/BrunoSSantana/RentalX?style=for-the-badge">
   <img src="https://img.shields.io/github/languages/count/BrunoSSantana/RentalX?style=for-the-badge">
   <img src="https://img.shields.io/github/forks/BrunoSSantana/RentalX?style=for-the-badge">
   <img src="https://img.shields.io/bitbucket/issues/BrunoSSantana/RentalX?style=for-the-badge">
   <img src="https://img.shields.io/bitbucket/pr-raw/BrunoSSantana/RentalX?style=for-the-badge">
</p>

<p align="center">
 <a href="#overview">Overview</a> •
 <a href="#getting-started">Getting Started</a> •
 <a href="#routes">Routes</a> •
 <a href="#contribuition">Contribuition</a> •
 <a href="#author">Author</a> • 
 <a href="#license">License</a> • 
 <a href="#acknowledgements">Acknowledgements</a>
</p>

## Overview

*Este projeto que está sendo construindo, consiste em uma API com a finalidade do gerenciamento de uma locadora de caros*






## Getting Started

Para instalar esse projeto localmente, é necessário que você possua as seguinte ferramentas em sua máquina.

- [x] [Nodejs](https://nodejs.org/en/)
- [x] [Mongodb](https://www.mongodb.com/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/BrunoSSantana/RentalX.git
   ```
2. Install YARN packages
   ```sh
   yarn
   ```
3. Start o mongo

## Resources

Recursos disponíveis para acesso via API:

- Password
- Authenticate
- Rentals
- Cars
- Users
- Specifications
- Categories

## Methods

Requisições para a API devem seguir os padrões:

| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PATCH` | Atualiza pontualmente dados de um registro. |



## Responses

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `401` | Dados de acesso inválidos.|
| `404` | Registro pesquisado não encontrado (Not found).|
| `429` | Número máximo de requisições atingido. (*aguarde alguns segundos e tente novamente*)|



## Routes

### Users [/users]
Usuários da plataforma
#### Novo Usuário (Create) [POST]

- Request (application/json)
  - body
  ```JSON
  {
    "name": "Bruno Santana",
    "username": "bruno",
    "email": "bruno@gmail.com",
    "password": "123",
    "driver_license": "123456"
  }
  ```
- Response 200 (application/json)
  - body
  ```JSON
  ```

#### Listar Usuários (List) [GET] 

#### Mudar Avatar (Update) [PATCH]

### Password [/password]
#### Solicitar mudança de email (Send) [POST]

#### Redefenir senha (Update) [POST]
### Authenticate [/]
#### Session (Create) [POST]
#### Refresh Token (Update) [POST]

### Rentals [/rentals]
#### Listar por Usuário (List) [GET]
#### Devolução de Carro (Update) [POST]

### Cars
#### Novo Carro (Create) [POST]
#### Adicionar Especificação (Add) [POST]
#### Adicionar Imagem (Add) [POST]
#### Listar Carros Disponíveis (List) [POST]
### Speficications [/specifications]
#### Nova Especificação (Create) [POST]
#### Listar Especificação (List) [GET]
### Categories [/categories]
#### Novo (Create) [POST]
> Aqui vamos receber o nome e o email do usuário

- Request (application/json)
  - Body
  ```JSON
  {
    "name": "CategoryTest",
    "description": "Category description test"
  }
  ```
- Response 200 (application/json)
  - Body
  ```JSON
  
  ```

#### Importar (Import) [POST]

- Request ()
  - Headers
Response 200 (application)

#### Listar (List) [GET]
http://localhost:3333/categories
> Aqui será listada todos as categorias

O que se espera ser recebido pelo cliente nesta rota:
```JSON
[
  {
    "name": "string",
    "description": "string"
  },
  {
    "name": "string",
    "description": "string"
  }
]
```




## Contribuition

### Como contribuir?
Este é um projeto totalmente livre que aceita contribuições via pull requests no GitHub. Este documento tem a responsabilidade de alinhar as contribuições de acordo com os padrões estabelecidos no mesmo. Padrões recomendados por [gitmoji](https://gitmoji.dev/).

Para contribuir com RentalX, siga estas etapas:

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-awesome-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My awesome feature"`
4. Envie as suas alterações: `git push origin my-awesome-feature`
   > Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Author
<a href="https://github.com/BrunoSSantana/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/61945340?s=400&u=882004ebbccf5ae04e55fe4b27a5e704c3a95bab&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Bruno Santana</b></sub></a> <a href="https://github.com/BrunoSSantana/" title="Rocketseat">🚀</a>

Feito com :purple_heart: por Bruno Santana 👋🏽



## Acknowledgements

* [Img Shields](https://shields.io)
* [README Template - iuricode](https://github.com/iuricode/README-template/)
* [Best README template - othneildrew](https://github.com/othneildrew/Best-README-Template/)
* [Marvel Heroes - willmorim](https://github.com/willmorim/marvel-heroes)


## License

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

[⬆ Voltar ao topo](#rentalx)<br>


<h4 align="center"> 
	🚧 🚀 Em construção... 🚧
</h4>
