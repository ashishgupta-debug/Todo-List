import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onUpdateTask, onToggleComplete, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onUpdateTask={onUpdateTask}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;

