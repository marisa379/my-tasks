import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onUpdate }) {
  if (tasks.length === 0) {
    return <p className="empty">Список задач пуст</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}

export default TaskList;