# Dojo - React Native
> Repositório com os arquivos base para o Campinas Front-End Dojo #8.

## Setup
Esse setup seguiu o guia [Getting Started](http://facebook.github.io/react-native/docs/getting-started.html) **Quick Start**. Utilizando [create-react-native-app](https://github.com/react-community/create-react-native-app).

## Iniciando o app
```
yarn run ios
```

## Desafio
1. Criar componente `Card.js` para listar lugares;
2. Obter todos os lugares pelo endereço `/places` e listá-los. Cada `Card` deve ter um link para a tela `Details/:id`;
3. Criar tela `Details.js` para exibir os detalhes de um lugar;
4. Carregar dados pelo endereço `/places/:id` e exibi-los na tela `Details.js`;
5. Fazer um formulário na tela `Details` e enviar via POST para `/booking` com os seguinte corpo:
```
{
  "checkIn": "string",
  "checkout": "string",
  "email": "string",
}
```
6. Após enviar o formulário de reserva, redirecione o usuário para a tela `Success.js`;
7. Criar tela `Success.js`;
