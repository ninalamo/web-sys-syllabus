export default function E3W6ExerExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 6: React Fundamentals — Exercises</h1>
      <h2>In-Class Exercise (55 min)</h2>
      <h3>Task: Counter Component with Props</h3>
      <p>
      Build a <code>Counter</code> component with <code>+</code> and <code>-</code> buttons. Render 3 Counters on the screen.
      </p>
      
      <h3>Starter Files</h3>
      
      
      <ul>
        <li>Scaffold a new Vite React app: <code>npm create vite@latest week6-exercise -- --template react</code></li>
      
      </ul>
      
      <h3>Requirements</h3>
      
      
      <ol>
        <li>Create a <code>Counter</code> component with <code>+</code> and <code>-</code> buttons</li>
        <li>Add a Prop <code>step</code> so the first counter counts by 1, the second by 5, and the third by 10</li>
        <li>Use <code>useState</code> for the count state</li>
        <li>Render 3 Counter instances in <code>App.jsx</code></li>
      
      </ol>
      
      <h3>Hints</h3>
      
      
      <ul>
        <li>Component names MUST be capitalized</li>
        <li>Use <code>className</code> instead of <code>class</code> in JSX</li>
        <li>Never mutate state directly — use the setter function</li>
      
      </ul>
      
      <h3>Stretch Goals</h3>
      
      
      <ul>
        <li>Add a "Reset" button</li>
        <li>Add color styling that changes based on positive/negative count</li>
        <li>Add a prop for initial count value</li>
      
      </ul>
    </div>
  )
}
