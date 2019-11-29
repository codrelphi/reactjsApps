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


  return (<div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="add a task"
            value={userInput}
            onChange={handleChange}
            />
          <button>Add</button>
        </form>
        <ul>
          {
            tasks.map(task => (
              <li key={task.id}>
                {task.name}
                <button onClick={() => handleDelete(task.id)}>X</button>
              </li>
            ))
          }
        </ul>
    </div>);
}

export default App;
