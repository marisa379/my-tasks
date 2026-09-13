function TaskItem({ task, onDelete, onUpdate }) {
  const handleToggle = () => {
    onUpdate(task.id, { completed: !task.completed });
  };

  const handleEdit = () => {
    const newTitle = prompt('Введите новое название задачи:', task.title);
    if (newTitle !== null && newTitle.trim() !== '') {
      onUpdate(task.id, { title: newTitle.trim() });
    }
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <span className="task-title">{task.title}</span>
      <div className="task-actions">
        <button onClick={handleEdit}>Редактировать</button>
        <button onClick={() => onDelete(task.id)}>Удалить</button>
      </div>
    </li>
  );
}

export default TaskItem;