import { useState } from 'react';
import './App.css';
import TaskItem, { Task } from './components/TaskItem';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const addTask = (title: string, description: string) => {
    setTasks([...tasks, { id: Date.now(), title, description, status: false }]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: !task.status } : task));
  };

  const updateTask = (id: number, title: string, description: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, title, description } : task));
    setEditingTask(null);
  };

  return (
    <div className="App">
      <TaskForm addTask={addTask} editingTask={editingTask} updateTask={updateTask} />
      <div className="flex flex-col space-y-4 mt-4">
        {tasks.map(task => 
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} setEditingTask={setEditingTask} />
        )}
      </div>
    </div>
  );
}

export default App;