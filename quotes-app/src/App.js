import React, { Component } from 'react';
import './App.css';
import citations from './citations';


class App extends Component {

  state = {}

  // componentWillMount est déprécié et non sécurisé
  componentDidMount() {
    this.genererCitation();
  }

  genererCitation(event) {
    //transforme les citations en Array
    const keyArray = Object.keys(citations);
    // choisi aléatoirement un key dans le Array
    const randomKey = keyArray[Math.floor(Math.floor(Math.random() * keyArray.length))];
    // vérifie que deux citations ne sont pas identiques
    if (this.state.citation === citations[randomKey].citation) {
      this.genererCitation();
      return;
    }
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
