import React, { Component } from 'react';
import './App.css';
import citations from './citations';


class App extends Component {

  state = {}

  genererCitation(event) {

    //transforme les citations en Array
    const keyArray = Object.keys(citations);
    const randomKey = keyArray[Math.floor(Math.floor(Math.random() * keyArray.length))];
    console.log(randomKey);
    this.setState(citations[randomKey]);

  }

  render() {
    return (
      <div>
        <p>
          {this.state.citation}
          <span>- {this.state.auteur}</span>
        </p>
        <button onClick={e => this.genererCitation(e)}>Une autre citation!</button>
      </div>
    );
  }
}

export default App;
