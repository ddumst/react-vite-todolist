// TaskForm.tsx
import React, { useState } from 'react';

interface TaskFormProps {
  addTask: (title: string, description: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleSubmit = () => {
    addTask(newTaskTitle, newTaskDescription);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  return (
    <div className="flex gap-2 border border-gray-300 rounded-2xl p-4">
      <input type="text" placeholder="Title" value={newTaskTitle} onChange={e => setNewTaskTitle(e.target.value)} className="border-b border-gray-300 focus:outline-none focus:border-indigo-500" />
      <input type="text" placeholder="Description" value={newTaskDescription} onChange={e => setNewTaskDescription(e.target.value)} className="border-b border-gray-300 focus:outline-none focus:border-indigo-500" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-2 py-2 rounded text-sm">Add Task</button>
    </div>
  );
};

export default TaskForm;