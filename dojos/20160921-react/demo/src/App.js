import React, { Component } from 'react';
import logo from './logo.svg';
import Apoiador from './Apoiador.js';
import Busca from './Busca.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>DOJO - React</h1>
          <h2>Listagem de apoiadores do <i className="dne">DEV<span className="highlight">na</span>ESTRADA</i></h2>
        </header>
        <Busca />
        <div className="apoiadores">
          <Apoiador />
        </div>
      </div>
    );
  }
}

export default App;
