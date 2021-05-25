<p align="center">
    <img alt="Foodfy" src="./assets/RentalX.png"/>
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
 <a href="#author">Author</a> • 
 <a href="#acknowledgements">Acknowledgements</a>
</p>

## Overview

*Este projeto que está sendo construindo, consiste em uma API com a finalidade do gerenciamento de uma locadora de caros*






## Getting Started

Para instalar esse projeto localmente, é necessário que você possua as seguinte ferramentas em sua máquina.

- [x] [Nodejs](https://nodejs.org/en/)
- [x] [yarn](https://yarnpkg.com/)
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

## Routes
*Atualmente contamos com as seguintes rotas:*


<details>
  <summary><strong>CATEGORIES</strong></summary>


**POST/**

http://localhost:3333/categories
> Aqui vamos receber o nome e o email do usuário

O que se espera ser enviado pelo cliente nesta rota:
```JSON
{
  "name": "CategoryTest",
  "description": "Category description test"
}
```

**GET**
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
</details>


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

[⬆ Voltar ao topo](#nome-do-projeto)<br>


<h4 align="center"> 
	🚧 🚀 Em construção... 🚧
</h4>