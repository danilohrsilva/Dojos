# Dojo #2 - AngularJS

Introdução ao framework AngularJS - 25/05/2016


## Proposta

Aplicação "**Listagem de apoiadores do _DevNaEstrada_**".


## Setup

`$ [sudo] npm install`  
`$ gulp`


## Estrutura de arquivos

```
app/
  |-- css/
  |     |-- app.css
  |-- js/
  |     |-- controllers/
  |     |     |-- apoiaseController.js
  |     |-- directives/
  |     |     |-- dfApoiadorDirective.js
  |     |-- services/
  |     |     |-- apoiadoresFactory.js
  |     |-- app.js
  |-- index.html
```

## Exercício
Reproduzir as funcionalidades conforme [este exemplo](http://codepen.io/lnfnunes/full/YqBYpQ/).


**Itens que serão exercitados:**

* ng-app
* ng-controller _(controller as)_
* ng-model
* ng-bind / {{ expressions }}
* ng-repeat
* ng-if / ng-show / ng-hide
* filtros
* directivas
* ng-model-options


**Funcionalidades:**

* Exibir na _view_ uma listagem dos "apoiadores" contido no controller _"js/apoiaseController.js"_.
* _Filtrar_ apenas os usuários **ativos**.
* _Ordenar_ os resultados em **ordem alfabética**.
* _Filtrar_ os itens da listagem conforme o campo de busca é digitado.
* Adicionar uma espera de 300ms antes de efetuar o filtro anterior conforme o usuário digita **(debounce)**.
* Criar uma diretiva customizada do tipo elemento ("E") para os apoiadores _"js/dfApoiadorDirective.js"_.
* Criar um filtro customizado para normalizar os nomes dos apoiadores **(capitalize)**.
