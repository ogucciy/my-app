import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  return (
    <div className="App" style={{ padding: 30, fontFamily: 'Arial' }}>
      <h1>My Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={addTask} style={{ marginLeft: 10 }}>Add</button>
      <ul style={{ marginTop: 20 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ textAlign: 'left' }}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
