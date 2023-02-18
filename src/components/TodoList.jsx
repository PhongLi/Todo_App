import TodoItem from './TodoItem';

function TodoList({ todoList, deleteTask, editTask, finishTask }) {
    return (
        <div className="main">
            <input type="checkbox" id="toggle-all" className="toggle-all" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {todoList.map((task, index) => (
                    <TodoItem
                        key={index}
                        task={task}
                        onDelete={() => deleteTask(index)}
                        onEdit={(taskName) => {
                            editTask(index, taskName);
                        }}
                        onFinish={() => finishTask(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
