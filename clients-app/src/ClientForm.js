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

    if (nom.length > 0) {
      this.props.handleAddClient({id, nom});
      this.setState({clientInput: ""});
    }

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Ajouter un nouveau client"
          maxlength="52"
          value={this.state.clientInput}
          onChange={this.handleChange}
        />
        <button className="btn waves-effect waves-light red lighten-1">
          Confirmer
          <i className="material-icons right">send</i>
        </button>
      </form>
    );
  }

}

export default ClientForm;
