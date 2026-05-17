export default function E3W5ExerExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 5: Component Thinking (Vanilla JS) — Exercises</h1>
      <h2>In-Class Exercise (55 min)</h2>
      <h3>Task: State-Driven Todo List</h3>
      <p>
      Build a Todo List in Vanilla JS using State. Do not read the DOM to find out what the todos are.
      </p>
      
      <h3>Starter Files</h3>
      
      
      <ul>
        <li><code>starter/index.html</code> — Basic HTML with empty containers</li>
        <li><code>starter/app.js</code> — Empty JS file with TODOs</li>
      
      </ul>
      
      <h3>Requirements</h3>
      
      
      <ol>
        <li>Keep an array <code>let todos = []</code> as your single source of truth</li>
        <li>When a user types, update the array, then call <code>renderTodos()</code></li>
        <li>Write a <code>TodoItem(todo)</code> component function that returns an HTML string</li>
        <li>Use <code>.map()</code> to generate all todo HTML, then set <code>innerHTML</code> once</li>
      
      </ol>
      
      <h3>Hints</h3>
      
      
      <ul>
        <li>Never read <code>input.value</code> from the DOM to determine state</li>
        <li>State changes -&gt; call <code>render()</code> -&gt; UI updates</li>
        <li>Use template literals for HTML generation</li>
      
      </ul>
      
      <h3>Stretch Goals</h3>
      
      
      <ul>
        <li>Add a "toggle complete" feature</li>
        <li>Add a "delete todo" feature</li>
        <li>Add filtering (All / Active / Completed)</li>
      
      </ul>
    </div>
  )
}
