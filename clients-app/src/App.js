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

  }

  handleDelete = (id) => {
    const clients = this.state.clients.slice()
    const index = clients.findIndex(client => client.id === id);
    clients.splice(index, 1);
    this.setState({
      clients: clients
    });
  };

  render() {
    const title = "Liste de clients";
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map(client =>
            <li>{client.nom} <button onClick={() => this.handleDelete(client.id)}>X</button></li>
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
