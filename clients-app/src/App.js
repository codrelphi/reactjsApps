import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    clients: [
      {id: 1, nom: "Lior Chamla"},
      {id: 2, nom: "Magali Pernin"},
      {id: 3, nom: "Joseph Durand"}
    ],
    compteur: 0
  }

  handleClick = () => {
    this.setState({
      compteur: this.state.compteur + 1
  });
  }

  render() {
    const title = "Liste de clients";
    return (
      <div>
        <h1>{title}</h1>
        {this.state.compteur}
        <button onClick={this.handleClick}>click me</button>
        <ul>
          {this.state.clients.map(client =>
            <li>{client.nom} <button>X</button></li>
          )}
        </ul>
        <form>
          <input type="text" placeholder="Ajouter un client" />
          <button>Confirmer</button>
        </form>
      </div>
    );

  }
}

export default App;
