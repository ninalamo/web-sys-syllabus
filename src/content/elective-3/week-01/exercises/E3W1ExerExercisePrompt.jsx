export default function E3W1ExerExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 1: Modern JavaScript Review — Exercises</h1>
      <h2>In-Class Exercise (55 min)</h2>
      <h3>Task: ES5 to ES6+ Refactor</h3>
      <p>
      You are given a legacy product inventory script written in ES5. Your job is to refactor it to modern ES6+.
      </p>
      
      <h3>Starter Files</h3>
      
      
      <ul>
        <li><code>starter/legacy-inventory.js</code> — The messy ES5 code to refactor</li>
        <li><code>starter/data.js</code> — Product data (provided)</li>
        <li><code>starter/utils.js</code> — Utility functions (to be created)</li>
      
      </ul>
      
      <h3>Requirements</h3>
      
      
      <ol>
        <li>Replace all <code>var</code> declarations with <code>const</code> or <code>let</code></li>
        <li>Convert all function expressions to arrow functions</li>
        <li>Replace <code>for</code> loops with <code>.map()</code>, <code>.filter()</code>, <code>.reduce()</code></li>
        <li>Replace string concatenation (<code>+</code>) with template literals</li>
        <li>Split the code into two module files: <code>data.js</code> and <code>utils.js</code></li>
        <li>Use <code>import</code>/<code>export</code> to share code between files</li>
      
      </ol>
      
      <h3>Hints</h3>
      
      
      <ul>
        <li>Use <code>const</code> by default; only use <code>let</code> when reassignment is necessary</li>
        <li>Arrow functions with a single expression can use implicit return</li>
        <li><code>.filter()</code> returns a new array with elements that pass a test</li>
        <li><code>.map()</code> transforms each element and returns a new array</li>
      
      </ul>
      
      <h3>Stretch Goals</h3>
      
      
      <ul>
        <li>Add a <code>.reduce()</code> to calculate total inventory value</li>
        <li>Use destructuring in function parameters</li>
        <li>Add a default export for the main function</li>
      
      </ul>
    </div>
  )
}
