import React, { Component } from 'react';
import './App.css';

const Person = ({data}) => (
  <div className="apoiador">
    <img src={data.picture} className="apoiador__picture"/>
    <span className="apoiador__name">{data.name}</span>
  </div>
);

const Filter = ({search}) => (
  <nav className="search">
    <input type="text" className="search__field" placeholder="Buscar"
           onChange={search}
     />
  </nav>
);

export default class Apoiadores extends Component {
  constructor() {
    super();

    this.state = {
      apoiadores: [],
      searchValue: ''
    };
  }

  componentWillMount() {

    // getdata
    var uriApoiadores = 'http://localhost:8000/apoiadores';
    fetch(uriApoiadores)
      .then(result => result.json() )
      .then(data => this.setState({ apoiadores: data}) );
  }

  search(event) {
    let searchValue = event.target.value;
    this.setState({
      searchValue
    })
  }

  renderApoiadores(value) {
    return this.state.apoiadores.map((i, key) => {
      if(i.name.includes(this.state.searchValue)) {
        return <Person key={key} data={i}></Person>
      }
    })
  }

  render () {
    return (
      <div>
        <Filter search={this.search.bind(this)} />
        <div className="apoiadores">
          {this.renderApoiadores()}
        </div>
      </div>
    )
  }
}
