import React, {useState} from 'react';


const App = () => {

  const [tasks, setTasks] = useState([
    {id: 1, name: "Task 1"},
    {id: 2, name: "Task 2"},
  ]);
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => setUserInput(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim().length > 0) {
      const updatedTasks = [...tasks];
      const id = new Date().getTime();
      const name = userInput;
      const task = {id: id, name: name}
      updatedTasks.push(task);
      setTasks(updatedTasks);
      setUserInput("");
    }
  }

  const handleDelete = (id) => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex(task => task.id === id);
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-6">
          <h1 align="center">Ma Todo list</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="add a task"
                value={userInput}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-lg">Add</button>
            </div>
          </form>

        <div className="list-group">
          {
            tasks.map(task => (
              <div key={task.id} className="list-group-item">
                <div className="row">
                  <div className="col-sm-10">
                    {capitalize(task.name)}
                  </div>
                  <div className="col-sm-2">
                    <button onClick={() => handleDelete(task.id)} className="btn btn-outline-danger">X</button>
                  </div>
                </div>
              </div>))
          }
        </div>
      </div>

      <div className="col"></div>
    </div>
  </div>);
}

export default App;
