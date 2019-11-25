import React, {Component} from 'react';
import Client from './Client';
import ClientForm from './ClientForm';


class App extends Component {
  state = {
    clients: [
      {id: 1, nom: "John Doe"},
      {id: 2, nom: "Jane Germain"},
      {id: 3, nom: "Raoul Sambo"},
    ],
    clientInput: ""
  }

  handleAddClient = (client) => {
    const clients = [...this.state.clients]; // spread operator
    clients.push(client);
    this.setState({clients, clientInput: ""});
  }

  handleDelete = (id) => {
    const clients = [...this.state.clients];
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
      <div className="container">
        <h1 className="red-text text-lighten-1">{title}</h1>
        <ul className="collection">
          { this.state.clients.map(client => <Client client={client} handleDelete={this.handleDelete}/>) }
        </ul>
        <ClientForm handleAddClient={this.handleAddClient} />
        <br/><br/><br/>
      </div>
    );
  }
}

export default App;
