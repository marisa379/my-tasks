import React, { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  // Состояние для хранения списка задач
  const [tasks, setTasks] = useState([]);

  // Функция для добавления новой задачи
  const addTask = (newTaskText) => {
    // Валидация уже выполняется в TaskInput, но дублируем для надежности
    if (newTaskText.trim() === '') {
      alert('Название задачи не может быть пустым!');
      return;
    }

    // Создаем новую задачу с уникальным ID
    const newTask = {
      id: Date.now(), // Используем текущее время как ID
      text: newTaskText.trim()
    };

    // Добавляем задачу в список
    setTasks([...tasks, newTask]);
  };

  // Функция для удаления задачи по ID
  const deleteTask = (taskId) => {
    // Фильтруем массив, оставляя только задачи с другим ID
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>📋 Мой список дел</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;