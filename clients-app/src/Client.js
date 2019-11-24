import React, {Component} from 'react';


class Client extends Component {

  render() {
    const client = this.props.client;
    const handleDelete = this.props.handleDelete;

    return (
        <li key={client.id}>{client.nom}
          <button onClick={() => handleDelete(client.id)}>X</button>
        </li>
      );
  }
}

export default Client;
