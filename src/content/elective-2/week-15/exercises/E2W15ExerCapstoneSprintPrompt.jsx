export default function E2W15ExerCapstoneSprintPrompt() {
  return (
    <div className="page-content">
      <h1>Week 15 — Capstone Sprint</h1>
      <p>
      <strong>Duration:</strong> 70 minutes build session
      </p>
      
      <h2>Exercise: Build Your Capstone MVP</h2>
      
      <br />Choose a project idea or propose your own. Build vertically — one feature at a time.
      
      
      <h3>Suggested Project Ideas</h3>
      
      
      <ol>
        <li><strong>Task Manager Pro</strong> — Users, tasks, categories, due dates, priority</li>
        <li><strong>Recipe Box</strong> — Users, recipes, ingredients, categories, search</li>
        <li><strong>Book Tracker</strong> — Users, books, reading logs, ratings, Google Books API</li>
        <li><strong>Study Group App</strong> — Users, study groups, flashcards, quiz scores</li>
        <li><strong>Personal Budget</strong> — Users, expenses, categories, monthly summaries</li>
      
      </ol>
      
      <h3>Requirements</h3>
      
      
      <ul>
        <li>3+ database tables</li>
        <li>1+ 1-to-Many relationship</li>
        <li>Authentication (Identity)</li>
        <li>At least one external API call</li>
        <li>Service layer (interface + implementation)</li>
        <li>Data annotations + validation</li>
        <li>Layout with navigation</li>
      
      </ul>
      
      <h3>Architecture Template</h3>
      
      
      <pre><code>Program.cs wires everything:
      AddControllersWithViews()  -&gt; MVC pipeline
      AddDbContext()             -&gt; Database
      AddDefaultIdentity()       -&gt; Auth
      AddHttpClient()            -&gt; API calls
      AddScoped&lt;IService, Svc&gt;() -&gt; Your service</code></pre>
      
      
      <h3>Build Order (Vertical Slicing)</h3>
      
      
      <ol>
        <li>Database: Models + DbContext + Migration</li>
        <li>Feature 1: Controller -&gt; Service -&gt; View (full stack)</li>
        <li>Authentication: Identity setup</li>
        <li>Feature 2: Another full-stack feature</li>
        <li>API integration: HttpClient + DTO</li>
        <li>Polish: Layout, validation, error handling</li>
      
      </ol>
    </div>
  )
}
