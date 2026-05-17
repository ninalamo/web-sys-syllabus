export default function E3W11ExerExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 11: Frontend/Backend Integration — Exercises</h1>
      <h2>In-Class Exercise (55 min)</h2>
      <h3>Task: Full-Stack Todo Integration</h3>
      <p>
      Connect a React frontend to an ASP.NET Core backend.
      </p>
      
      <h3>Starter Files</h3>
      
      
      <ul>
        <li>Use the Todo API from Week 10</li>
        <li>Create a new Vite React app</li>
      
      </ul>
      
      <h3>Requirements</h3>
      
      
      <ol>
        <li>Run both servers simultaneously (API on port 5000, React on port 5173)</li>
        <li>Configure Vite proxy to forward <code>/api</code> requests to the ASP.NET server</li>
        <li>Use <code>useEffect</code> to fetch and display the list of Todos</li>
        <li>Create a form to add a new Todo that persists to the backend</li>
      
      </ol>
      
      <h3>Hints</h3>
      
      
      <ul>
        <li><code>vite.config.js</code> proxy config:</li>
        <br />  <code>`</code>js
        <br />  server: &#123; proxy: &#123; '/api': '<a href="https://localhost:5000'">https://localhost:5000'</a> &#125; &#125;
        <br />  <code>`</code>
        <li>Use <code>fetch</code> with <code>method: 'POST'</code> and <code>JSON.stringify(data)</code></li>
        <li>Handle loading and error states</li>
      
      </ul>
      
      <h3>Stretch Goals</h3>
      
      
      <ul>
        <li>Add environment variables for the API URL</li>
        <li>Add optimistic UI updates</li>
        <li>Add a loading spinner during POST</li>
      
      </ul>
    </div>
  )
}
