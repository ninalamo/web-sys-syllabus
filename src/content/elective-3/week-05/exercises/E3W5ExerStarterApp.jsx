export default function E3W5ExerStarterApp() {
  const code = `// Week 5: State-Driven Todo List — Starter
// TODO: Complete the functions below

// STATE — the single source of truth
let todos = [];

// TODO: Component function — returns HTML string for a single todo
function TodoItem(todo) {
    // Return a template literal string
}

// TODO: Render function — updates the DOM based on state
function renderTodos() {
    // 1. Map todos to HTML strings using TodoItem
    // 2. Join them together
    // 3. Set innerHTML of #app ONCE
}

// TODO: Add todo — updates state, then re-renders
function addTodo(text) {
    // 1. Create a new todo object { id, text, completed }
    // 2. Push to todos array
    // 3. Call renderTodos()
}

// Wire up the input
document.getElementById('addBtn').addEventListener('click', () => {
    const input = document.getElementById('todoInput');
    addTodo(input.value);
    input.value = '';
});
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">starter-app.js</span>
        <span className="code-lang">JAVASCRIPT</span>
      </div>
      <pre className="language-javascript"><code className="language-javascript">{code}</code></pre>
    </div>
  )
}
