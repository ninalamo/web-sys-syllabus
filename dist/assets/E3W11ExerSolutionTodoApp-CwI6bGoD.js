import{j as e}from"./index-ChWpJeR-.js";function s(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"solution-todo-app.jsx"}),e.jsx("span",{className:"code-lang",children:"JSX"})]}),e.jsx("pre",{className:"language-jsx",children:e.jsx("code",{className:"language-jsx",children:`// Week 11: Full-Stack Todo Integration — Solution (React)

import { useState, useEffect } from 'react';

function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTodos() {
            try {
                const res = await fetch('/api/todos');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setTodos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchTodos();
    }, []);

    async function addTodo(e) {
        e.preventDefault();
        if (!newTodo.trim()) return;

        try {
            const res = await fetch('/api/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: newTodo, isCompleted: false }),
            });
            if (!res.ok) throw new Error('Failed to create');
            const created = await res.json();
            setTodos([...todos, created]);
            setNewTodo('');
        } catch (err) {
            setError(err.message);
        }
    }

    if (isLoading) return <p>Loading todos...</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

    return (
        <div>
            <h1>Todos</h1>
            <form onSubmit={addTodo}>
                <input value={newTodo} onChange={e => setNewTodo(e.target.value)} placeholder="Add todo..." />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
`})})]})}export{s as default};
