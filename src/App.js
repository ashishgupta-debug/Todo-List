import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import SearchBar from './components/SearchBar';
import tasksData from './data/tasks.json';
import './App.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const App = () => {
  const [tasks, setTasks] = useState([]);
  const query = useQuery();

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  // Function to create any task
  const handleCreateTask = (title, description) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
      timestamp: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  // Function to update any task
  const handleUpdateTask = (id, title, description) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title, description, timestamp: new Date().toISOString() } : task
    ));
  };

  // Function to complete any task
  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to delete any task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(query.get('q')?.toLowerCase() || '')
  );

  return (
    <div className='container'>
      <h1 className='h1'>
        Todo List
      </h1>
      <div className="App">
      <SearchBar />
      <TaskForm onCreateTask={handleCreateTask} />
      <TaskList
        tasks={filteredTasks}
        onUpdateTask={handleUpdateTask}
        onToggleComplete={handleToggleComplete}
        onDeleteTask={handleDeleteTask}
      />
    </div>
    </div>
    
  );
};

export default App;
