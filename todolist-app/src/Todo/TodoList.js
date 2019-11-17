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
    const inputUser = this.state.userInput;
    if (inputUser !== '') {
      this.setState({
        userInput: '',
        items: [...this.state.items, inputUser]
      });
    }
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
        return (<div key={item} className="list-group-item">
                  <div className="row">
                    <div className="col-sm-10">{item}</div>
                    <div className="col-sm-2"><button onClick={this.deleteTodo.bind(this)} className="btn btn-outline-danger">X</button></div>
                  </div>
                </div>);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-6">
            <h1 align="center">Ma Todo list</h1>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Renseigner un item"
                  value={this.state.userInput}
                  onChange={this.onChange.bind(this)}
                  className="form-control"
                  />
              </div>
              <div className="form-group">
                <button
                  onClick={this.addTodo.bind(this)}
                  type="button"
                  className="btn btn-primary btn-lg"
                >
                  Ajouter
                </button>
              </div>
            </form>
            <div className="list-group">{this.renderTodos()}</div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default TodoList;
