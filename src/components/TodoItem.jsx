import { useState } from 'react';

function TodoItem({ task, onDelete, onEdit, onFinish }) {
    const [editing, setEditing] = useState(false);
    const [taskName, setTaskName] = useState(task.name);
    const handleEdit = (e) => {
        e.preventDefault();
        if (taskName.length > 0) {
            onEdit(taskName.trim());
            setEditing(false);
        }
    };
    return (
        <li className={`${task.completed && 'completed'} ${editing && 'editing'}`}>
            <div className="view">
                <input type="checkbox" className="toggle" defaultChecked={task.completed} onClick={onFinish} />
                <label onDoubleClick={() => setEditing(true)}>{task.name}</label>
                <button className="destroy" onClick={onDelete}></button>
            </div>
            <form onSubmit={handleEdit}>
                <input className="edit" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            </form>
        </li>
    );
}

export default TodoItem;
