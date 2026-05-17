export default function E3W2ExerExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 2: Async JavaScript Deep-Dive — Exercises</h1>
      <h2>In-Class Exercise (55 min)</h2>
      <h3>Task: Async Fetcher with JSONPlaceholder</h3>
      <p>
      Build an async data fetcher that retrieves posts and their comments from JSONPlaceholder.
      </p>
      
      <h3>Starter Files</h3>
      
      
      <ul>
        <li><code>starter/index.html</code> — Basic HTML with empty click handlers</li>
        <li><code>starter/fetcher.js</code> — Empty JS file with TODOs</li>
      
      </ul>
      
      <h3>Requirements</h3>
      
      
      <ol>
        <li>Fetch posts from <code>https://jsonplaceholder.typicode.com/posts</code></li>
        <li>For each post, fetch its comments using <code>Promise.all()</code></li>
        <li>Add loading states (show "Loading..." while fetching)</li>
        <li>Add error handling with <code>try/catch</code></li>
        <li>Check <code>response.ok</code> before parsing JSON</li>
      
      </ol>
      
      <h3>Hints</h3>
      
      
      <ul>
        <li>Use <code>async/await</code> instead of <code>.then()</code> chains</li>
        <li><code>Promise.all()</code> runs multiple fetches in parallel</li>
        <li>Always wrap async code in <code>try/catch</code></li>
        <li>Remember: <code>fetch</code> does NOT reject on 404/500 — you must check <code>response.ok</code></li>
      
      </ul>
      
      <h3>Stretch Goals</h3>
      
      
      <ul>
        <li>Add a "Retry" button on error</li>
        <li>Show a spinner during loading</li>
        <li>Display post count and comment count</li>
      
      </ul>
    </div>
  )
}
