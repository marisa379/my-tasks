import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  // Состояние для поля ввода
  const [inputValue, setInputValue] = useState('');

  // Обработчик изменения текста в поле
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Обработчик отправки формы (нажатие Enter или кнопки)
  const handleSubmit = (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    // Валидация: проверяем, не пустое ли поле
    if (inputValue.trim() === '') {
      alert('⚠️ Пожалуйста, введите текст задачи!');
      return;
    }

    // Вызываем функцию добавления, переданную из App
    onAddTask(inputValue.trim());

    // Очищаем поле ввода после добавления
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-container">
      <input
        type="text"
        placeholder="✏️ Введите новую задачу..."
        value={inputValue}
        onChange={handleChange}
        className="task-input"
        autoFocus
      />
      <button type="submit" className="add-btn">
        ➕ Добавить
      </button>
    </form>
  );
}

export default TaskInput;