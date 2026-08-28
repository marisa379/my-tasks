import React from 'react';

function TaskItem({ task, onDeleteTask }) {
  return (
    <li className="task-item">
      <span className="task-text">
        {task.text}
      </span>
      <button
        onClick={() => onDeleteTask(task.id)}
        className="delete-btn"
        title="Удалить задачу"
      >
        🗑️ Удалить
      </button>
    </li>
  );
}

export default TaskItem;