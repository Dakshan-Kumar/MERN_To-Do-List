import React, { useState, useEffect } from 'react';

const EditTask = ({ task = {}, editTask, setIsEditing }) => {
const [newDescription, setNewDescription] = useState('');

useEffect(() => {
    if (task.description) {
    setNewDescription(task.description);
    }
}, [task]);

const handleSave = () => {
    if (newDescription.trim()) {
    editTask(task.id, newDescription);
    setIsEditing(false);
    }
};

return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-40 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">Edit Task</h2>
        <input
        type="text"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        className="w-full border px-2 py-1 rounded mb-4"
        />
        <div className="flex justify-end">
        <button
            onClick={() => setIsEditing(false)}
            className="mr-2 px-4 py-1 text-sm bg-gray-300 rounded"
        >
            Cancel
        </button>
        <button
            onClick={handleSave}
            className="px-4 py-1 text-sm bg-blue-500 text-white rounded"
        >
            Save
        </button>
        </div>
    </div>
    </div>
);
};

export default EditTask;
