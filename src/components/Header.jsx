import { useRef, useState } from 'react';

function Header({ addTask }) {
    const [todo, setTodo] = useState('');
    const ref = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const todoItem = { name: todo, completed: false };
        addTask(todoItem);
        setTodo('');
    };
    return (
        <div className="header">
            <h1>todos</h1>
            <form onSubmit={handleSubmit}>
                <input
                    ref={ref}
                    className="new-todo"
                    placeholder="What needs to be done?"
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                    autoFocus
                ></input>
            </form>
        </div>
    );
}

export default Header;
