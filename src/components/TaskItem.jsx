import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditTask from './EditTask';

const TaskItem = ({ task, completedTask, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="task-item bg-white shadow-md rounded-lg p-4 m-2 flex flex-col items-center">
      <div className="flex items-center w-full">
        <input
          type="checkbox"
          className="mr-2 h-4 w-4"
          checked={task.completed || false}
          onChange={() => completedTask(task.id)}
        />
        <p
          className={`text-sm ${
            task.completed ? 'line-through text-gray-400' : 'text-gray-600'
          }`}
        >
          {task.description}
        </p>
        <button
          className="ml-auto text-yellow-500 flex items-center"
          onClick={() => setIsEditing(true)}
        >
          <EditIcon className="mr-1" />
        </button>
        <button
          className="text-red-500 flex items-center ml-2"
          onClick={() => deleteTask(task.id)}
        >
          <DeleteIcon className="mr-1" />
        </button>
      </div>

      {isEditing && (
  <EditTask
    task={task}
    editTask={editTask}
    setIsEditing={setIsEditing}
  />
)}

    </div>
  );
};

export default TaskItem;
