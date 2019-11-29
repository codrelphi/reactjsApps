import React, {useState} from 'react';
import Client from './Client';
import ClientForm from './ClientForm';


const App = () => {
  const [clients, setClients] = useState([
    {id: 1, nom: "John Doe"},
    {id: 2, nom: "Jane Germain"},
    {id: 3, nom: "Raoul Sambo"},
  ]);


  const handleAddClient = (client) => {
    const updatedClients = [...clients]; // spread operator
    updatedClients.push(client);
    setClients(updatedClients);
  }

  const handleDelete = (id) => {
    const updatedClients = [...clients];
    const index = updatedClients.findIndex(client => client.id === id);
    updatedClients.splice(index, 1);
    setClients(updatedClients);
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

  const title = "Liste de clients";
  return (
      <div className="container">
        <h1 className="red-text text-lighten-1">{title}<span>({clients.length})</span></h1>
        <ul className="collection">
          { clients.map(client => <Client client={client} handleDelete={handleDelete}/>) }
        </ul>
        <ClientForm handleAddClient={handleAddClient} />
        <br/><br/><br/>
      </div>
    );
}

export default App;
