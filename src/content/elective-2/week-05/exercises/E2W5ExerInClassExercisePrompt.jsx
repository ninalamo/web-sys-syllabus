export default function E2W5ExerInClassExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 5 — In-Class Exercise: Blog Routing</h1>
      <p>
      <strong>Duration:</strong> 55 minutes
      </p>
      
      <h2>Exercise: BlogController with Attribute Routing</h2>
      
      <br />Create a <code>BlogController</code> with attribute routes so that:
      
      <ul>
        <li><code>/blog/2026/05</code> goes to an <code>Archive(int year, int month)</code> method</li>
        <li><code>/blog/post/hello-world</code> goes to a <code>Post(string slug)</code> method</li>
      
      </ul>
      <br /><strong>Requirements:</strong>
      
      <ul>
        <li>Use <code>[Route]</code> attribute on the controller</li>
        <li>Use <code>[HttpGet]</code> with route template on each action</li>
        <li>Year must be constrained to 4 digits (<code>&#123;year:int:length(4)&#125;</code>)</li>
        <li>Month must be constrained to valid months (1-12)</li>
        <li>Return simple ViewData or Content strings</li>
      
      </ul>
    </div>
  )
}
