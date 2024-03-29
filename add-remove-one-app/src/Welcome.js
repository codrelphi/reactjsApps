import React, { Component } from 'react';

class Welcome extends Component {

  constructor() {
    super(); // call the constructor of the parent Component
    this.state = {
      count: 0
    };
    this.removeOne = this.removeOne.bind(this);
    this.remiseZero = this.remiseZero.bind(this);
  }

  addOne() {
    this.setState({
      count: this.state.count + 1
    });
  }

  removeOne() {
    this.setState({
      count: this.state.count - 1
    });
  }

  remiseZero() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome {this.props.name}</h1>
        <p>Mon compteur: {this.state.count}</p>
        <button onClick={() => this.addOne()}>Ajouter 1</button>
        <button onClick={this.removeOne}>Enlever 1</button>
        <button onClick={this.remiseZero}>Remise à 0</button>
      </div>
    );
  }
}

export default Welcome;
