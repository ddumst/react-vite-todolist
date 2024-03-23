// TaskForm.tsx
import React, { useEffect, useState } from 'react';
import { Task } from '../TaskItem';

interface TaskFormProps {
  addTask: (title: string, description: string) => void;
  updateTask: (id: number, title: string, description: string) => void;
  editingTask: Task | null;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask, updateTask, editingTask }) => {
  const [title, setTitle] = useState(editingTask ? editingTask.title : '');
  const [description, setDescription] = useState(editingTask ? editingTask.description : '');

  const handleSubmit = () => {
    if (editingTask) {
      updateTask(editingTask.id, title, description);
    } else {
      addTask(title, description);
    }
    setTitle('');
    setDescription('');
  };

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editingTask]);

  return (
    <div className="flex gap-2 border border-gray-300 rounded-2xl p-4">
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="border-b border-gray-300 focus:outline-none focus:border-indigo-500" />
      <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="border-b border-gray-300 focus:outline-none focus:border-indigo-500" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-2 py-2 rounded text-sm">Add Task</button>
    </div>
  );
};

export default TaskForm;