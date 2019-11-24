import React, {Component} from 'react';


class App extends Component {

  state = {
    clients: [
      {id: 1, nom: "John Doe"},
      {id: 2, nom: "Jane Germain"},
      {id: 3, nom: "Raoul Sambo"},
    ],
    clientInput: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const clients = this.state.clients.slice();
    clients.push({id: new Date().getTime(), nom: this.state.clientInput});
    this.setState({clients, clientInput: ""});
  }

  handleChange = (event) => {
    this.setState({clientInput: event.currentTarget.value});
  }

  handleDelete = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(client => client.id === id);
    clients.splice(index, 1);
    this.setState({clients});
  }

/*
  handleEdit = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex(client => client.id === id);
    const client = clients[index];
    this.setState({clientInput: client.nom});
    console.log(this.state.clientInput);
    console.log(client.nom);

  }
*/
  render() {
    const title = "Liste de clients";
    return (
      <div>
        <h1>{title}</h1>
        <form onSubmit={this.handleSubmit}>
          <ul>
            { this.state.clients.map(client =>
                <li key={client.id}>{client.nom}
                  <button onClick={() => this.handleDelete(client.id)}>X</button>
                </li>) }
          </ul>
          <input
            type="text"
            placeholder="Ajouter un nouveau client"
            value={this.state.clientInput}
            onChange={this.handleChange}
          />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

export default App;
