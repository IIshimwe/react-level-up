import "./App.css";
import { useState } from "react";

function App() {
  // All tasks created will be stored in this array
  const [todolist, setTodoList] = useState([]);
  // New task typed will be stored in this variable
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    // Add new task to the todolist array
    setTodoList([...todolist, newTask]);
    // Clear the input field
    setNewTask("");
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="Type your task here"
          onChange={handleChange}
        />
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="todos-container">
        {todolist.map((task, key) => {
          return (
            <p key={key} className="task">
              {task}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;
