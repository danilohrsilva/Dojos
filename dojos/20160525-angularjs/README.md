# Dojo #2 - AngularJS

Introdução ao framework AngularJS - 25/05/2016

## Proposta

Aplicação **Listagem de apoiadores do _DevNaEstrada_**.

Itens que serão exercitados:
* ng-model
* ng-bind / {{ expressions }}
* ng-repeat
* ng-if / ng-show / ng-hide
* filtros
* directivas
* ng-model-options

## Setup

`[sudo] npm install`  

Para rodar:

`npm run dev`

## Exercícios

Reproduzir as funcionalidades conforme [este exemplo](http://codepen.io/lnfnunes/full/YqBYpQ/).

Funcionalidades:

* Exibir uma listagem com cada "apoiador" contido em "apoiadores".
* Exibir apenas os usuários **ativos**.
* Ordenar os resultados em **ordem alfabética**.
* **Filtrar** os itens da listagem conforme o campo de busca é digitado.
* Adicionar uma espera de 300ms antes de efetuar o filtro anterior conforme o usuário digita **(debounce)**.
* Criar uma diretiva customizada do tipo elemento ("E") para os apoiadores.
* Criar um filtro customizado para normalizar os nomes dos apoiadores **(capitalize)**.

