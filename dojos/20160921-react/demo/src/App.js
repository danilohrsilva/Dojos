import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super();

    this.state = {
      count: 0
    };

    this.increase = this.increase.bind(this)
  }

  increase () {
    this.setState({count: ++this.state.count})
  }

  render () {
    return (
      <header>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>+</button>
      </header>
    )
  }
}

export default App;
