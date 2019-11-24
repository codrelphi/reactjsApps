import React, {Component} from 'react';


class Client extends Component {

  render() {
    const {client, handleDelete} = this.props;
    return (
        <li key={client.id}>{client.nom}
          <button onClick={() => handleDelete(client.id)}>X</button>
        </li>
      );
  }
}

export default Client;
