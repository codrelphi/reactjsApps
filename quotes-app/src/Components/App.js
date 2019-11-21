import React, { Component } from 'react';
import '../index.css';
import citations from '../citations';
import Citation from './Citation';


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
      <div className="container h-100">
        <div className="row align-items-center">
          <div className="col-6 mx-auto">
            <div className="card border-primary mb-3" styleName="max-width: 18rem;">
              <div className="card-header">Citation</div>
              <div className="card-body text-primary">
                <p className="card-text"><Citation details={this.state} /></p>
              </div>
            </div>
            <div>
              <button className="btn btn-primary btn-lg btn-block" onClick={e => this.genererCitation(e)}>Une autre citation!</button>
            </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
