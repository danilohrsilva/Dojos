import React, { Component } from 'react';
import Apoiador from './Apoiador.js';
import Busca from './Busca.js';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      apoiadores: [],
      search: ''
    };

    this.handleSearch = this.handleSearch.bind(this)
  }

  setApoiadores () {
    fetch('http://localhost:8000/apoiadores', { method: 'get' })
    .then(res => res.json())
    .then(res => this.setState({apoiadores: res}));
  }

  handleSearch (e) {
    this.setState({search: e.target.value})
  }

  componentWillMount () {
    this.setApoiadores();
  }

  render () {
    return (
      <div className="App">
        <header>
          <h1>DOJO - React</h1>
          <h2>Listagem de apoiadores do <i className="dne">DEV<span className="highlight">na</span>ESTRADA</i></h2>
        </header>
        <Busca handleSearch={this.handleSearch}/>
        <div className="apoiadores">
          {this.state.apoiadores.map((apoiador) => (
            apoiador.name.toLowerCase().includes(this.state.search) &&
            <Apoiador name={apoiador.name} picture={apoiador.picture}/>
          ))}

          {/*
           // Outra implementação possível

          {this.state.apoiadores.map((apoiador) => {
            if (apoiador.name.toLowerCase().includes(this.state.search)) {
              return <Apoiador name={apoiador.name} picture={apoiador.picture} />
            }
          })}
          */}
        </div>
      </div>
    );
  }
}

export default App;
