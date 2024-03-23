import classNames from "classnames";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

const TaskItem: React.FC<{ task: Task; deleteTask: (id: number) => void; toggleTask: (id: number) => void; }> = ({ task, deleteTask, toggleTask }) => {
  return (
    <div className="flex justify-between items-center border-b bg-slate-200 px-4 py-2 rounded-2xl">
      <div onClick={() => toggleTask(task.id)} className="flex items-center space-x-4">
        <input type="checkbox" className="form-checkbox h-5 w-5" checked={task.status} readOnly />
        <div className="flex flex-col justify-start items-start">
          <h4 className={classNames(
            'text-lg font-semibold',
            task.status ? 'line-through' : ''
          )}>{task.title}</h4>
          <p className={classNames(
            'text-sm text-gray-500',
            task.status ? 'line-through' : ''
          )}>{task.description}</p>
        </div>
      </div>
      <button onClick={() => deleteTask(task.id)} className="font-semibold">Delete</button>
    </div>
  );
}

export default TaskItem;