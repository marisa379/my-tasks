import { useState } from 'react';

function TaskInput({ onAdd }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') return;
    onAdd(value.trim());
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        placeholder="Введите новую задачу..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default TaskInput;