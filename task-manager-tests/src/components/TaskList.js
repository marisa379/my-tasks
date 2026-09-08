import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem 
          key={index} 
          task={task} 
          onDelete={onDeleteTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;