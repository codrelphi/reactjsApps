import React, {useState} from 'react';


const ClientForm = (props) => {

  const [clientInput, setClientInput] = useState("")
  const handleChange = (event) => {
    setClientInput(event.currentTarget.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = capitalize(clientInput);

    if (nom.length > 0) {
      props.handleAddClient({id, nom});
      setClientInput("");
    }

  }

  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1)

  return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ajouter un nouveau client"
          maxlength="52"
          value={clientInput}
          onChange={handleChange}
        />
        <button className="btn waves-effect waves-light red lighten-1">
          Confirmer
          <i className="material-icons right">send</i>
        </button>
      </form>
    );
}

export default ClientForm;
