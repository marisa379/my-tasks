import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [text, setText] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (text) {
      onAddTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={submit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Введите задачу..."
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default TaskInput;