import React, { useState } from 'react';

const Task = ({ task, onUpdateTask, onToggleComplete, onDeleteTask }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  // Function to handle save the updated task
  const handleSave = () => {
    onUpdateTask(task.id, title, description);
    setEditMode(false);
  };

  return (
    <div className={`task ${task.completed ? 'task-completed' : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          onClick={(e) => e.stopPropagation()}
        />
        {editMode ? (
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        ) : (
          <span className="task-title">{task.title}</span>
        )}
      </div>
      {isExpanded && (
        <div>
          {editMode ? (
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          ) : (
            <p className="task-description">{task.description}</p>
          )}
          <p className="task-timestamp">Last updated: {new Date(task.timestamp).toLocaleString()}</p>
          <div className='editDeletebtn'>
          {editMode ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={(e) => {e.stopPropagation(); setEditMode(true);}}>Edit</button>
          )}
          <button onClick={(e) => {e.stopPropagation(); onDeleteTask(task.id);}}>Delete</button>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Task;
