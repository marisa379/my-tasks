import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  return (
    <div>
      <h1>Менеджер задач</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
};

export default App;