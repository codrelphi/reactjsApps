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

  addTodo(event) {
    event.preventDefault();
    this.setState({
      userInput: '',
      items: [...this.state.items, this.state.userInput]
    });
  }

  deleteTodo(event) {
    event.preventDefault(); // don't reload the page
    const array = this.state.items;
    const index = array.indexOf(String(event.target.value));
    console.log(index)
    array.splice(index, 1);
    this.setState({items: array});
  }

  renderTodos() {
    return this.state.items.map((item) => {
        return (<div key={item}>
                  {item} | <button onClick={this.deleteTodo.bind(this)}>X</button>
                </div>);
      });
  }

  render() {
    return (
      <div>
        <h1>Ma Todo list</h1>
        <form>
          <input
            type="text"
            placeholder="Renseigner un item"
            value={this.state.userInput}
            onChange={this.onChange.bind(this)}
            />
          <button onClick={this.addTodo.bind(this)}>Ajouter</button>
        </form>
        <div>{this.renderTodos()}</div>
      </div>
    );
  }
}

export default TodoList;
