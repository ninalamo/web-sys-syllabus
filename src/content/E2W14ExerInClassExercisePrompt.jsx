export default function E2W14ExerInClassExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 14 — In-Class Exercise: Security Audit Report</h1>
      <p>
      <strong>Duration:</strong> 55 minutes
      </p>
      
      <h2>Exercise: Security Audit</h2>
      
      <br />You are given a vulnerable app (or code snippets). Find at least 5 security flaws:
      
      
      <ol>
        <li>SQL injection vulnerability (string concatenation in SQL)</li>
        <li>Missing anti-forgery token on a POST form</li>
        <li>XSS via <code>@Html.Raw()</code> on user input</li>
        <li>Missing input validation</li>
        <li>Missing <code>[ValidateAntiForgeryToken]</code> on POST action</li>
      
      </ol>
      <br />For each flaw, document:
      
      <ul>
        <li>What the flaw is</li>
        <li>How to exploit it</li>
        <li>How to fix it</li>
        <li>Show the fixed code</li>
      
      </ul>
      <br /><strong>Bonus:</strong> Identify missing HTTPS enforcement.
      
    </div>
  )
}
