import React, {Component} from 'react';


const Client = ({client, handleDelete}) => (
        <li key={client.id}>{client.nom}
          <button onClick={() => handleDelete(client.id)}>X</button>
        </li>
      );
export default Client;
