import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
function App() {
    const [tasks, setTasks] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('TODO_LIST'));
        return storageJobs ?? [];
    });

    const updateLocal = (newTasks) => {
        const jsonTasks = JSON.stringify(newTasks);
        localStorage.setItem('TODO_LIST', jsonTasks);
    };
    const addTask = (task) => {
        const newTasks = [...tasks, task];
        setTasks(newTasks);
        updateLocal(newTasks);
    };
    const deleteTask = (id) => {
        const newTasks = [...tasks];
        newTasks.splice(id, 1);
        setTasks(newTasks);
        updateLocal(newTasks);
    };
    const editTask = (id, taskName) => {
        const newTask = { ...tasks[id], name: taskName };
        const _tasks = [...tasks];
        _tasks.splice(id, 1, newTask);
        setTasks(_tasks);
        updateLocal(_tasks);
    };
    const finishTask = (id) => {
        const newTask = { ...tasks[id], completed: !tasks[id].completed };
        const _tasks = [...tasks];
        _tasks.splice(id, 1, newTask);
        setTasks(_tasks);
        updateLocal(_tasks);
    };
    return (
        <div className="App">
            <div className="todoapp">
                <Header addTask={addTask}></Header>
                <TodoList
                    todoList={tasks}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    finishTask={finishTask}
                ></TodoList>
            </div>
        </div>
    );
}

export default App;
