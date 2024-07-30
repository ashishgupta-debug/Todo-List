import React, { useState } from 'react';
// import './App.css';

const TaskForm = ({ onCreateTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Function to add any task
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTask(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form 
    onSubmit={handleSubmit}>
        <div className='taskForm'>
        <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
        </div>
        
    </form>
  );
};

export default TaskForm;
