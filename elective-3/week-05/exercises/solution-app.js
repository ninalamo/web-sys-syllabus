// Week 5: State-Driven Todo List — Solution

let todos = [];
let nextId = 1;

function TodoItem(todo) {
    return `
        <div class="todo ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
            <span onclick="toggleTodo(${todo.id})">${todo.text}</span>
            <span class="delete-btn" onclick="deleteTodo(${todo.id})">✕</span>
        </div>
    `;
}

function renderTodos() {
    const app = document.getElementById('app');
    app.innerHTML = todos.map(TodoItem).join('');
}

function addTodo(text) {
    if (!text.trim()) return;
    todos.push({ id: nextId++, text: text.trim(), completed: false });
    renderTodos();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
}

// Make functions available globally for inline onclick
window.toggleTodo = toggleTodo;
window.deleteTodo = deleteTodo;

document.getElementById('addBtn').addEventListener('click', () => {
    const input = document.getElementById('todoInput');
    addTodo(input.value);
    input.value = '';
});

document.getElementById('todoInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo(e.target.value);
        e.target.value = '';
    }
});

// Initial render
renderTodos();
