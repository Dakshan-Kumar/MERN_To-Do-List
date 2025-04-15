import React from 'react';
import TaskItem from './TaskItem';

const TaskPage = ({ tasks, completedTask, editTask, deleteTask }) => {
    const [filterMode, setFilterMode] = React.useState('all'); // 'all', 'completed', 'incomplete'

    const filteredTasks = React.useMemo(() => {
        if (filterMode === 'completed') {
            return tasks.filter(task => task.completed);
        } else if (filterMode === 'incomplete') {
            return tasks.filter(task => !task.completed);
        }
        return tasks; // 'all'
    }, [tasks, filterMode]);

    return (
    <div className="p-6 bg-gray-100 min-h-screen">
        <div className="mb-4 flex gap-2 item-center justify-center">
        <button
            onClick={() => setFilterMode("all")}
            className={`px-4 py-2 rounded transition ${
            filterMode === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
        >
            Show All Tasks
        </button>
        <button
            onClick={() => setFilterMode("completed")}
            className={`px-4 py-2 rounded transition ${
            filterMode === "completed"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
        >
            Show Completed Tasks
        </button>
        <button
            onClick={() => setFilterMode("incomplete")}
            className={`px-4 py-2 rounded transition ${
            filterMode === "incomplete"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
        >
            Show Incomplete Tasks
        </button>
        </div>
        {filteredTasks && filteredTasks.length > 0 ? (
        <div className="grid gap-4">
            {filteredTasks.map((task) => (
            <MemoizedTaskItem
                key={task.id}
                task={task}
                completedTask={completedTask}
                editTask={editTask}
                deleteTask={deleteTask}
            />
            ))}
        </div>
        ) : (
        <p className="text-center text-gray-500">No tasks available</p>
        )}
    </div>
    );
};

const MemoizedTaskItem = React.memo(TaskItem);

export default TaskPage;
