import React from 'react';


const Client = ({client, handleDelete}) => (
        <li key={client.id} className="collection-item"><div>{client.nom}
          <button className="btn secondary-content red" onClick={() => handleDelete(client.id)}>
              <i className="tiny material-icons">delete</i>
          </button>
          </div><br/>
        </li>
      );
export default Client;


//<li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
