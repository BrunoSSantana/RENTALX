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
3. Start data base
```sh
docker-compose up
```
4. Create Tables
```sh
yarn typeorm migration:run
```
5. Start aplication
```sh
yarn dev
```

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



## Rsponses

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

- URL: `/user`

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
- Response 201 (No Content)

- Response 400 (application/json)
  - body
  ```JSON
  {
    "message": "Users already Exists"
  }
  ```

#### Listar Usuários (List) [GET]
- URL: `/users/profile`
- Request (application/json)
  - Headers
  ```
  Authorization: Bearer [access_token]
  ```
- Response 200 (application/json)
  - body
  ```JSON
  {
    "email": "admin@rentalx.com.br",
    "name": "admin",
    "id": "82dc4fdc-0508-4c0e-8b8f-6ddfd031eb40",
    "avatar": "402a83ba53fee8d56d39ebe4c87bdf6c-deckfailcat.png",
    "driver_license": "123456",
    "avatar_url": "http://localhost:3333/avatar/402a83ba53fee8d56d39ebe4c87bdf6c-deckfailcat.png"
  }
  ```
- Response 401 (application/json)
  - body
  ```JSON
  {
    "message": "Invalid Token"
  }
  ```

#### Mudar Avatar do Usuário (Update) [PATCH]
- URL: `/users/avatar`
- Request (multipart/form-data)
  - Multipart = avatart
- Response 204 (No Content)

### Password [/password]
#### Solicitar mudança de senha (Send) [POST]
- URL: `/password/forgot`
- Request (application/json)
  - body
  ```JSON
  {
	  "email": "useremail@example.com"
  }
  ```
- Response 200 (No Body)
- Response 400 (application/json)
  - body
  ```JSON
  {
    "message": "User does not exists"
  }
  ```

#### Redefenir senha (Update) [POST]
- URL: `/password/reset?token=:token`
- Request (application/json)
  - body
  ```JSON
  {
    "password": "senha123"
  }
  ```
  - Query
  ```/password/reset?token=5aaea858-b1be-4833-833c-ad8f476b8db8```
- Response 200 (No body)

### Authenticate [/]
#### Session (Create) [POST]
- URL: `/sessions `
- Request (application/json)
  - body
  ```JSON
  {
	  "email": "useremail@example.com",
	  "password": "senha123"
  }
  ```
- Response 200 (application/json)
  - body
  ```JSON
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjczOTA1ODMsImV4cCI6MTYyNzU2MzM4Mywic3ViIjoiODJkYzRmZGMtMDUwOC00YzBlLThiOGYtNmRkZmQwMzFlYjQwIn0.seSEFDdQtskaSQEXgk311SjZXtjYfXdFV5vugBs11DA",
    "user": {
      "name": "User",
      "email": "useremail@example.com"
    },
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHJlbnRhbHguY29tLmJyIiwiaWF0IjoxNjI3MzkwNTgzLCJleHAiOjE2Mjk5ODI1ODMsInN1YiI6IjgyZGM0ZmRjLTA1MDgtNGMwZS04YjhmLTZkZGZkMDMxZWI0MCJ9.qgxEY1Ka3SbGfzzkKZI73WadeNgOQp3M3eJcf8ygW34"
  }
  ```
- Response 400 (application/json)
  -body
  ```JSON
  {
    "message": "Email or password incorrect!"
  }
  ```

#### Refresh Token (Update) [POST]
- URL: `/refresh-token`
- Request (application/json)
  - body
  ```JSON
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHJlbnRhbHguY29tLmJyIiwiaWF0IjoxNjI3MzkwNTgzLCJleHAiOjE2Mjk5ODI1ODMsInN1YiI6IjgyZGM0ZmRjLTA1MDgtNGMwZS04YjhmLTZkZGZkMDMxZWI0MCJ9.qgxEY1Ka3SbGfzzkKZI73WadeNgOQp3M3eJcf8ygW34"
  }
  ```
- Response 200 (application/json)
  - body
  ```JSON
  {
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHJlbnRhbHguY29tLmJyIiwiaWF0IjoxNjI3MzkwNjI1LCJleHAiOjE2Mjk5ODI2MjUsInN1YiI6IjgyZGM0ZmRjLTA1MDgtNGMwZS04YjhmLTZkZGZkMDMxZWI0MCJ9.Hf44nhYy4jHDqoxIsgpRrdhBYyFuOegOzD7UeqNFemE",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjczOTA2MjUsImV4cCI6MTYyNzU2MzQyNSwic3ViIjoiODJkYzRmZGMtMDUwOC00YzBlLThiOGYtNmRkZmQwMzFlYjQwIn0.WzU9RwZA3mUxJk0Vc97aUf8ubd9p9zlwAtCDjVGAZh8"
  }
  ```
- Response 500 (Internal Server Error)
  - body
  ```JSON
  {
    "status": "error",
    "message": "Internal server error - invalid signature"
  }
  ```

### Speficications [/specifications]
#### Nova Especificação (Create) [POST]
- URL: `/specifications/`
- Request (application/json)
  - body
  ```JSON
  {
    "name": "3 portas",
    "description": "carro com 2 portas"
  }
  ```
    - Headers
  ```
  Authorization: Bearer [access_token_admin]
  ```
- Response 201 (Created)
- Response 400 (Bad Request)
  - body
  ```JSON
  {
    "message": "Specification already exists"
  }
  ```

<!-- #### Listar Especificação (List) [GET]
- URL: `/specifications/`
- Request (application/json)
  - body
- Response 200 (application/json)
  - body -->

### Categories [/categories]
#### Novo (Create) [POST]
- URL: `/categories`
- Request (application/json)
  - Body
  ```JSON
  {
    "name": "CategoryTest",
    "description": "Category description test"
  }
  ```
- Response 201 (Created)

- Response 401 (Unauthorized)
  - body
  ```JSON
  {
    "message": "Token missing"
  }
  ```
- Response 401 (Unauthorized)
  - body
  ```JSON
  {
    "message": "Invalid token"
  }
  ```

#### Importar (Import) [POST]
- URL: `/categories/import`
- Request (multipart/form-data)
  - Multipart = file
- Response 201 (Created)
- Response 401 (Unauthorized)
  - body
  ```JSON
  {
    "message": "Token missing"
  }
  ```
- Response 401 (Unauthorized)
  - body
  ```JSON
  {
    "message": "Invalid token"
  }
  ```

#### Listar (List) [GET]
- URL: `/categories`
- Request (No Content)
- Response 200 (application/json)
  - body
  ```JSON
  [
    {
      "id": "950261bc-86af-4c96-8256-e0a3771a7ea8",
      "name": "nova categoria",
      "description": "Categoria de carrão",
      "created_at": "2021-08-09T21:01:41.060Z"
    }
  ]
  ```

### Cars [/cars]
#### Novo Carro (Create) [POST]
- URL: `/cars`
- Request (application/json)
  - body
  ```JSON
  {
    "brand": "Audi",
    "category_id": "a62d6d0b-8c82-4aa1-ba4f-3cc2330d93a0",
    "daily_rate": 140,
    "description": "Carro massa",
    "fine_amount": 100,
    "license_plate": "DFG-4454",
    "name": "Audi A4"
  }
  ```
  - Headers
  ```
  Authorization: Bearer [access_token_admin]
  ```
- Response 200 (application/json)
  - body
  ```JSON
  {
    "id": "ae18ebef-eff7-4b14-9c55-c0a6aaed172a",
    "available": true,
    "name": "Audi A4",
    "description": "Carro massa",
    "daily_rate": 140,
    "license_plate": "DFG-4454",
    "fine_amount": 100,
    "brand": "Audi",
    "category_id": "a62d6d0b-8c82-4aa1-ba4f-3cc2330d93a0"
  }
  ```
- Response 201 (Created)
- Response 400 (Bad Request)
  - body
  ```JSON
  {
    "message": "Car already exists!"
  }
  ```
- Response 401 (Unauthorized)
  - body
  ```JSON
  {
    "message": "Token missing"
  }
  ```
- Response 401 (Unauthorized)
  - body
  ```JSON
  {
    "message": "Invalid token"
  }
  ```

#### Adicionar Especificação (Add) [POST]
- URL: `/cars/specifications/:id`
- URL Params [:id=car_id]
- Request (application/json)
  - body
  ```JSON
  {
    "specifications_id": [
      "f11355c6-8b70-4641-a9cb-f6a7f00a3b94"
    ]
  }
  ```
  - Headers
  ```
  Authorization: Bearer [access_token_admin]
  ```
- Response 200 (application/json)
  - body
  ```JSON
  {
    "id": "65ec8cb5-dbbd-473f-8887-84b58ea9e45c",
    "available": true,
    "name": "Audi GTX",
    "description": "Carro massa",
    "daily_rate": "140",
    "license_plate": "DFG-1256",
    "fine_amount": "100",
    "brand": "Audi",
    "category_id": "a62d6d0b-8c82-4aa1-ba4f-3cc2330d93a0",
    "created_at": "2021-07-03T23:39:11.725Z",
    "specifications": [
      {
        "id": "f11355c6-8b70-4641-a9cb-f6a7f00a3b94",
        "name": "Direção elétrico",
        "description": "carro com câmbio automático",
        "created_at": "2021-06-19T23:54:11.655Z"
      }
    ]
  }
  ```
- Response 401 (Unauthorized)
  - body
  ```JSON
  {
    "message": "Token missing"
  }
  ```
- Response 401 (Unauthorized)
  - body
  ```JSON
  {
    "message": "Invalid token"
  }
  ```
- Response 400 (Bad Request)
  - body
  ```JSON
  {
    "message": "Car doesn't exist!"
  }
  ```

#### Adicionar Imagem (Add) [POST]
- URL: `/cars/images/:id`
- URL Params [:id=car_id]
- Request (multipart/form-data)
  - Multipart = [images]

  - Headers
  ```
  Authorization: Bearer [access_token_admin]
  ```
- Response 201 (Created)

#### Listar Carros Disponíveis (List) [POST]
- URL: `/cars/available?:key=:value`
- URL Query [brand||category_id||name]
- Request (application/json)
  - URL example: `/cars/available?brand=Audi`
- Response 200 (application/json)
  - body
  ```JSON
  [
    {
      "id": "65ec8cb5-dbbd-473f-8887-84b58ea9e45c",
      "available": true,
      "name": "Audi GTX",
      "description": "Carro massa",
      "daily_rate": "140",
      "license_plate": "DFG-1256",
      "fine_amount": "100",
      "brand": "Audi",
      "category_id": "a62d6d0b-8c82-4aa1-ba4f-3cc2330d93a0",
      "created_at": "2021-07-03T23:39:11.725Z"
    },
    {
      "id": "ae18ebef-eff7-4b14-9c55-c0a6aaed172a",
      "available": true,
      "name": "Audi A4",
      "description": "Carro massa",
      "daily_rate": "140",
      "license_plate": "DFG-4454",
      "fine_amount": "100",
      "brand": "Audi",
      "category_id": "a62d6d0b-8c82-4aa1-ba4f-3cc2330d93a0",
      "created_at": "2021-07-04T14:18:22.984Z"
    },
    {
      "id": "f82e77a3-0aa7-47a8-b131-cf162cad30f2",
      "available": true,
      "name": "Audi A3",
      "description": "Carro massa",
      "daily_rate": "140",
      "license_plate": "DFG-1254",
      "fine_amount": "100",
      "brand": "Audi",
      "category_id": "a62d6d0b-8c82-4aa1-ba4f-3cc2330d93a0",
      "created_at": "2021-07-04T14:15:36.849Z"
    }
  ]
  ```

### Rentals [/rentals]

#### Criar Rental (Create) [POST]
- URL: `/rentals/`
- Request (application/json)
  - body
  ```JSON
  {
	  "expected_return_date": "2021-07-21T17:42:13.946Z",
	  "car_id": "65ec8cb5-dbbd-473f-8887-84b58ea9e45c"
  }
  ```
  - Headers
  ```
  Authorization: Bearer [access_token_admin]
  ```

- Response 201 (Created)
  - body
  ```JSON
  {
    "id": "514babe2-cd21-4614-8d77-2a4c9348fb59",
    "car_id": "2635d48f-d33f-44e9-b8dc-51dd6f0aee65",
    "user_id": "86a0cfc8-2ae6-4aee-ba59-98eb015b48af",
    "expected_return_date": "2021-10-21T17:42:13.946Z",
    "created_at": "2021-08-10T02:05:35.748Z",
    "updated_at": "2021-08-10T02:05:35.748Z"
  }
  ```
- Response 401 (Unauthirized)
  - body
  ```JSON
  {
    "message": "Invalid token"
  }
  ```
- Response 401 (Unauthirized)
  - body
  ```JSON
  {
    "message": "Token missing"
  }
  ```
- Response 400 (Bad Request)
  - body
  ```JSON
  {
    "message": "Invalid return time!"
  }
  ```
- Response 400 (Bad Request)
  - body
  ```JSON
  {
    "message": "Car is unavailable"
  }
  ```
- Response 400 (Bad Request)
  - body
  ```JSON
  {
    "message": "There's a rental in progress for user!"
  }
  ```
#### Listar por Usuário (List) [GET]
- URL: `/rentals/user`
- Request (application/json)
  - Headers
  ```
  Authorization: Bearer [access_token]
  ```
- Response 200 (application/json)
  - body
  ```JSON
  [
    {
      "id": "e55252cc-8d27-43bf-b4f0-87fdf12d3cc7",
      "car_id": "65ec8cb5-dbbd-473f-8887-84b58ea9e45c",
      "user_id": "39429398-9497-4f8f-9094-fa52c3b7406b",
      "start_date": "2021-07-18T18:26:58.965Z",
      "end_date": null,
      "expected_return_date": "2021-07-21T17:42:13.946Z",
      "total": null,
      "created_at": "2021-07-18T18:26:58.965Z",
      "updated_at": "2021-07-18T18:26:58.965Z",
      "car": {
        "id": "65ec8cb5-dbbd-473f-8887-84b58ea9e45c",
        "available": false,
        "name": "Audi GTX",
        "description": "Carro massa",
        "daily_rate": "140",
        "license_plate": "DFG-1256",
        "fine_amount": "100",
        "brand": "Audi",
        "category_id": "a62d6d0b-8c82-4aa1-ba4f-3cc2330d93a0",
        "created_at": "2021-07-03T23:39:11.725Z"
      }
    }
  ]
  ```
- Response 401 (Unauthirized)
  - body
  ```JSON
  {
    "message": "Invalid token"
  }
  ```
- Response 401 (Unauthirized)
  - body
  ```JSON
  {
    "message": "Token missing"
  }
  ```

#### Devolução de Carro (Update) [POST]- Request (application/json)
- URL: `/rentals/devolution/:id`
- URL Params [:id=user.id]
- Request (application/json)
  ```
  /rentals/devolution/9e5c0e72-38f3-4a35-bdb4-55d99a9e6abd
  ```
- Response 200 (application/json)
  - body
  ```JSON
  {
    "id": "9e5c0e72-38f3-4a35-bdb4-55d99a9e6abd",
    "car_id": "65ec8cb5-dbbd-473f-8887-84b58ea9e45c",
    "user_id": "39429398-9497-4f8f-9094-fa52c3b7406b",
    "start_date": "2021-07-18T18:05:53.166Z",
    "end_date": "2021-07-18T18:15:09.535Z",
    "expected_return_date": "2021-07-21T17:42:13.946Z",
    "total": 340,
    "created_at": "2021-07-18T18:05:53.166Z",
    "updated_at": "2021-07-18T18:14:59.827Z"
  }
  ```





<!-- ## Contribuition

### Como contribuir?
Este é um projeto totalmente livre que aceita contribuições via pull requests no GitHub. Este documento tem a responsabilidade de alinhar as contribuições de acordo com os padrões estabelecidos no mesmo. Padrões recomendados por [gitmoji](https://gitmoji.dev/).

Para contribuir com RentalX, siga estas etapas:

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-awesome-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My awesome feature"`
4. Envie as suas alterações: `git push origin my-awesome-feature`
   > Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request). -->

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
