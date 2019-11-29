import React, {Component} from 'react';


class App extends Component {
  state = {
    tasks: [
      {id: 1, name: "Task 1"},
      {id: 2, name: "Task 2"},
    ],
    userInput: ""
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.currentTarget.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.userInput.trim().length > 0) {
      const tasks = [...this.state.tasks];
      const id = new Date().getTime();
      const name = this.state.userInput;
      const task = {id: id, name: name}
      tasks.push(task);
      this.setState({tasks: tasks});
      this.setState({userInput: ""});
    }
  }

  handleDelete = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks
    });

  }


  render(){
    return (<div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="add a task"
            value={this.state.userInput}
            onChange={this.handleChange}
            />
          <button>Add</button>
        </form>
        <ul>
          {
            this.state.tasks.map(task => (
              <li key={task.id}>
                {task.name}
                <button onClick={() => this.handleDelete(task.id)}>X</button>
              </li>
            ))
          }
        </ul>
      </div>);
  }
}

export default App;
