import React from 'react';

const TaskItem = ({ task, onDelete }) => {
  return (
    <li>
      <span>{task}</span>
      <button onClick={() => onDelete(task)}>Удалить</button>
    </li>
  );
};

export default TaskItem;