export default function E3W8ExerExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 8: React Router &amp; SPA Concepts — Exercises</h1>
      <h2>In-Class Exercise (55 min)</h2>
      <h3>Task: 3-Page Portfolio SPA</h3>
      <p>
      Build a Portfolio SPA with Home, Projects, and Contact pages.
      </p>
      
      <h3>Starter Files</h3>
      
      
      <ul>
        <li>Scaffold a new Vite React app</li>
        <li>Install React Router: <code>npm install react-router-dom</code></li>
      
      </ul>
      
      <h3>Requirements</h3>
      
      
      <ol>
        <li>Create 3 page components: <code>Home</code>, <code>Projects</code>, <code>Contact</code></li>
        <li>Use <code>createBrowserRouter</code> to configure routes</li>
        <li>Create a shared <code>Layout</code> component with a persistent Navbar</li>
        <li>Use <code>&lt;Link&gt;</code> for navigation (NOT <code>&lt;a&gt;</code>)</li>
        <li>Ensure navigation is instant (no white flashes)</li>
      
      </ol>
      
      <h3>Hints</h3>
      
      
      <ul>
        <li><code>&lt;Link to="/about"&gt;</code> not <code>&lt;a href="/about"&gt;</code></li>
        <li>Use <code>&lt;Outlet /&gt;</code> in the Layout for child routes</li>
        <li><code>createBrowserRouter</code> is the modern React Router v6.4+ API</li>
      
      </ul>
      
      <h3>Stretch Goals</h3>
      
      
      <ul>
        <li>Add a 404 "Not Found" page</li>
        <li>Add active link styling</li>
        <li>Add a loading indicator during route transitions</li>
      
      </ul>
    </div>
  )
}
