# Dojo #1 - TDD

Testes automatizados em JS com o framework Jasmine - 14/04/2016

## Proposta

Aplicação **Gerenciador de Podcasts**.

Esta aplicação possui as classes *User*, *Podcast* e *Episode*. Podemos criar instâncias destas classes com a função *create*. Ex:

```js
var user = User.create('Bob');
console.log(user.name); // Bob
```

## Setup

`[sudo] npm i -g jasmine`  
`jasmine init`

Para executar os testes:

`jasmine`

## Exercícios

Adicionar funcionalidades aos modelos, usando TDD.

Sugestões:

* Usuário se inscreve em podcasts.
* Podcast adiciona episódios.
* Usuário verifica por novos episódios de seus podcasts.
* Usuário pode curtir um episódio
* Podcasts mais populares (com mais assinantes)
* Podcasts mais curtidos (soma das curtidas em seus episódios)
