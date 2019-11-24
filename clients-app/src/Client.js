import React, {Component} from 'react';


function Client(props) {
    const {client, handleDelete} = props;
    return (
        <li key={client.id}>{client.nom}
          <button onClick={() => handleDelete(client.id)}>X</button>
        </li>
      );
}

export default Client;
