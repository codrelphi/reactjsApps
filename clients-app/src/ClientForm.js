import React, {Component} from 'react';


class ClientForm extends Component {

  state = {
    clientInput: ""
  }

  handleChange = (event) => {
    this.setState({clientInput: event.currentTarget.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.clientInput;

    this.props.handleAddClient({id, nom});
    this.setState({clientInput: ""});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Ajouter un nouveau client"
          value={this.state.clientInput}
          onChange={this.handleChange}
        />
        <button>Confirmer</button>
      </form>
    );
  }

}

export default ClientForm;
