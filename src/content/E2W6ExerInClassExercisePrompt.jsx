export default function E2W6ExerInClassExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 6 — In-Class Exercise: SearchController</h1>
      <p>
      <strong>Duration:</strong> 55 minutes
      </p>
      
      <h2>Exercise: SearchController with Multiple Return Types</h2>
      
      <br />Build a <code>SearchController</code> that returns different <code>IActionResult</code> types:
      
      
      <ul>
        <li>If the user searches for "Google", redirect to <code>https://google.com</code></li>
        <li>If they search for empty string, return <code>BadRequest()</code></li>
        <li>If they search for "Secret", return <code>Json()</code> with hidden data</li>
        <li>Otherwise, return a normal <code>View()</code></li>
      
      </ul>
      <br /><strong>Requirements:</strong>
      
      <ul>
        <li>Use <code>IActionResult</code> as return type</li>
        <li>Demonstrate <code>Redirect()</code>, <code>BadRequest()</code>, <code>Json()</code>, and <code>View()</code></li>
        <li>Use query string parameter for search term</li>
      
      </ul>
    </div>
  )
}
