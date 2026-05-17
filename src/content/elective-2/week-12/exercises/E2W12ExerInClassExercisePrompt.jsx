export default function E2W12ExerInClassExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 12 — In-Class Exercise: Peer Code Review</h1>
      <p>
      <strong>Duration:</strong> 55 minutes
      </p>
      
      <h2>Exercise: Peer Review Lab</h2>
      
      <br />This is a consolidation week. No new code — review and debug existing projects.
      
      <br /><strong>Part 1 (20 min):</strong> Find bugs in the "Frankenstein" app (if provided by instructor), or pair up and review each other's code from previous weeks.
      
      <br /><strong>Look for:</strong>
      
      <ol>
        <li>A bad variable name</li>
        <li>Missing null check</li>
        <li>A route that could 404</li>
        <li>Missing <code>[ValidateAntiForgeryToken]</code></li>
        <li>A LINQ query that calls <code>.ToList()</code> too early</li>
        <li>Missing <code>.Include()</code> causing NullReferenceException</li>
      
      </ol>
      <br /><strong>Part 2 (35 min):</strong> Fix the bugs you found.
      
      <br /><strong>Deliverable:</strong> List of 3 things you found and how you fixed them.
      
    </div>
  )
}
