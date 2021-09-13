# API de Silent Hill - NodeJs

![texto](https://www.mobilegamer.com.br/wp-content/uploads/2012/07/Silent-Hill.jpg)

## Objetivo

 Essa API foi  criada com o objetivo de estudar conceitos de back-end, utilizando a linguagem de programação JavaScript e o banco de dados MongoDB. Nessa API eu criei um CRUD completo de personagens da saga de jogos Silent Hill

## Modo de Usar

Essa API utiliza o mongodb como banco de dados e o mongoose como ODM, então antes de testar a API certifique se você possui o MongoDb instalado em seu computador(https://www.mongodb.com/try/download/community).

Além disso, você precisa criar o arquivo .env com a url do seu banco, utilize o arquivo .env.exemple para criar o seu. Esse é um exemplo de string de conexão com o banco de dados: mongodb://localhost:27017/db_marvel.

Agora você pode executar o projeto:

1. Para executar o projeto com o nodemon, digite no terminal: npm run dev
2. Para executar o projeto com o node, digite no terminal: npm start

### Testando a API

Você pode testar ultilizando as ferramentas Postman, Insomnia e Thunder Client (plugin no vsCode)

#### Exemplos de URLs:

Essa é a URL de teste padrão: http://localhost:3000/personagens

Para buscar por ID, Editar ou Apagar, insira o ID na URL: http://localhost:3000/personagens/5

Para fazer uma busca com query string, esse é um exemplo de URL: http://localhost:3000/personagens/filter?nome=James

### Essa é a estrutura JSON para fazer o POST e o PUT:

{

    "nome": "Peter Benjamin Paker",
    "identidade": "Spider-Man",
    "genero": "Masculino",
    "imagem": "https://static.wikia.nocookie.net/marvel/images/9/96/Friendly_Neighborhood_Spider-Man_Vol_2_8_Granov_Variant_Textless.jpg/revision/latest/scale-to-width-down/333?cb=20190906235758&path-prefix=pt-br"

}

# Obrigado por testar e utilizar esta API ^^