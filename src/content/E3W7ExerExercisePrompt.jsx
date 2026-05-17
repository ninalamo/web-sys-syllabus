export default function E3W7ExerExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 7: Effects &amp; Data Fetching — Exercises</h1>
      <h2>In-Class Exercise (55 min)</h2>
      <h3>Task: PokeSearch Component</h3>
      <p>
      Build a <code>PokeSearch</code> component with an input field and <code>useEffect</code> for live search.
      </p>
      
      <h3>Starter Files</h3>
      
      
      <ul>
        <li>Scaffold a new Vite React app</li>
      
      </ul>
      
      <h3>Requirements</h3>
      
      
      <ol>
        <li>Create an input field with state <code>searchQuery</code></li>
        <li>Write a <code>useEffect</code> that depends on <code>[searchQuery]</code></li>
        <li>Whenever the query changes, fetch that specific Pokemon from the PokeAPI</li>
        <li>Handle loading, success, and error states</li>
      
      </ol>
      
      <h3>Hints</h3>
      
      
      <ul>
        <li>You cannot make the <code>useEffect</code> callback <code>async</code> directly — declare the async function inside</li>
        <li>Use the 3-state pattern: <code>data</code>, <code>isLoading</code>, <code>error</code></li>
        <li>Empty <code>[]</code> = run once. <code>[searchQuery]</code> = run when query changes</li>
      
      </ul>
      
      <h3>Stretch Goals</h3>
      
      
      <ul>
        <li>Add a debounce to avoid excessive API calls</li>
        <li>Add a "Clear" button</li>
        <li>Display Pokemon image and stats</li>
      
      </ul>
    </div>
  )
}
