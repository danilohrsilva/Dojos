# Dojo Jest + Enzyme

Este dojo visa praticarmos o básico de testes de uma aplicação React com as ferramentas [jest](https://jestjs.io/docs/en/getting-started) e [enzyme](https://airbnb.io/enzyme/docs/api/).
A aplicação está toda funcionando mas faltando os testes.

## Passo 1
- Clone este repositório `git clone https://github.com/campinas-front-end/Dojos`
- Abra a pasta do projeto `cd Dojos/dojos/20181212-jest-enzyme`
- Instale as dependências com `npm install`

## Passo 2
Inicie a aplicação com `npm start`, e em outro terminal, o server `npx json-server db.json --watch --port 3001`.

## Passo 3
Rode os testes com `npm test`

## Passo 4
Vamos começar testando o `App.js`. O objetivo aqui é cobrir todas as funções, mudanças de estado e a renderização deste componente.
- Fazer um teste de snapshot.
- Testar chamada de fetch no componentDidMount.
- Implementar e testar como o componente se comporta se a chamada fetch retornar um erro.

**Plus**
A função `removeIngredientFromCart` está com um bug. Se tivermos mais de um ingrediente do mesmo tipo, não é possível remover apenas um.
Vamos resolver o bug e criar um teste para isto não acontecer novamente.

## Passo 5
O componente CartSummaryModal está utilizando o [HOC](https://reactjs.org/docs/higher-order-components.html) `StyleHoc`, o ideal é isolarmos sua implementação para fazermos o teste.
- Fazer um teste de snapshot com o componente isolado.
- Testar funções chamadas nos clicks dos botões.
- Testar comportamento do componente se receber lista de items vazia.

## Passo 6
Testar o componente Ingredient
- Fazer um teste de snapshot.
- Testar chamada de addItem no click do botão.
- Testar se o botão é desabilitado quando o ingrediente deve ser único.

### Links úteis:
Montagem completa do componente (executando lifecycles): https://airbnb.io/enzyme/docs/api/mount.html
Acessar atributos e métodos do componente: https://airbnb.io/enzyme/docs/api/ShallowWrapper/instance.html
Acessar state do componente: https://airbnb.io/enzyme/docs/api/ShallowWrapper/state.html
Simular um evento do browser: https://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html
Escrevendo mocks do jest: https://jestjs.io/docs/en/manual-mocks
