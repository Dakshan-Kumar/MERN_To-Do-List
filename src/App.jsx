import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import TaskPage from './components/TaskPage'
function App() {
const [search, setSearch] = useState('')

const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [
        { id: 1, description: 'Task 1', completed: false },
        { id: 2, description: 'Task 2', completed: false }
    ]
);

const submitTask = (search) => {
    const current_id = tasks.length + 1;
    const newTask = { id: current_id,  description: search , completed: false};
    console.log(newTask);
    setTasks([...tasks, newTask])
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
};

const editTask = (id, updatedDescription) => {
    const newTasks = tasks.map((task) => {
        if (task.id === id) {
            return { ...task, description: updatedDescription };
        }
        return task;
    });
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
}

const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
};

const completedTask=(id) => {
    const newTasks = tasks.map((task) => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
}

return (
    <div>
        <header>
        To Do List
        </header>
        <div>
            <Search search={search} setSearch={setSearch} submitTask={submitTask} />
            <TaskPage tasks={tasks} completedTask={completedTask} deleteTask={deleteTask} editTask={editTask} />
        </div>
    </div>
    );
}

export default App