import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDeleteTask }) {
  // Если список задач пуст, показываем сообщение
  if (tasks.length === 0) {
    return (
      <div className="empty-message">
        🎯 У вас пока нет задач. Добавьте первую!
      </div>
    );
  }

  return (
    <ul className="task-list">
      {/* Проходим по массиву задач и рендерим TaskItem для каждой */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id} // Важно: уникальный ключ для React
          task={task}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;