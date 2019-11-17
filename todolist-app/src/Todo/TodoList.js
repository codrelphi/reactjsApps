import React, { Component } from 'react';


class TodoList extends Component {

  constructor() {
    super();
    this.state = {
      userInput: '',
      items: []
    }
  }

  onChange(event) {
    this.setState({
      userInput: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Ma Todo list</h1>
        <input
          type="text"
          placeholder="Renseigner un item"
          value={this.state.userInput}
          onChange={this.onChange.bind(this)}
          />
        <button>Ajouter</button>
      </div>
    );
  }
}

export default TodoList;
