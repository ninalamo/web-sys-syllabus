export default function E2W15ResoCapstoneSprintReference() {
  return (
    <div className="page-content">
      <h1>Week 15: Capstone Sprint Reference</h1>
      <h2>MVP Triangle</h2>
      <pre><code>       Perfect
      /\
      /  \
      /    \
      / MVP  \   &lt;- Ship THIS
      /________\
      Fast     Good</code></pre>
      <p>
      Pick two: Fast + Good = MVP. Perfect comes later.
      </p>
      
      <h2>User Story Template</h2>
      
      
      <blockquote><p>As a <strong>[role]</strong>, I want to <strong>[action]</strong> so that <strong>[benefit]</strong>.</p></blockquote>
      
      
      <h2>Kanban Board</h2>
      
      
      <table><thead><tr>
        <th>To Do</th>
        <th>In Progress</th>
        <th>Done</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>Feature 1</td>
        <td>Feature 2</td>
        <td>Feature 3</td>
      </tr>
      
      
      <h2>Build Vertically, Not Horizontally</h2>
      
      
      <table><thead><tr>
        <th>Wrong (Horizontal)</th>
        <th>Right (Vertical)</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>All models first</td>
        <td>Feature 1: full stack (DB to View)</td>
      </tr>
      
      <tr>
        <td>All controllers</td>
        <td>Feature 2: full stack</td>
      </tr>
      
      <tr>
        <td>All views last</td>
        <td>Feature 3: full stack</td>
      </tr>
      
      
      <h2>Git Workflow</h2>
      
      
      <pre><code>git checkout -b feat-core-feature
      # ... code ...
      git add .
      git commit -m "feat: add core CRUD"
      git checkout main
      git merge feat-core-feature</code></pre>
      
      
      <h2>Deployment Prep Checklist</h2>
      
      
      <ul>
        <li>[ ] Connection string uses environment variable, not hardcoded</li>
        <li>[ ] <code>UseAuthentication()</code> before <code>UseAuthorization()</code></li>
        <li>[ ] No <code>@Html.Raw()</code> on user input</li>
        <li>[ ] All POST forms have anti-forgery tokens</li>
        <li>[ ] Migrations are ready to run</li>
        <li>[ ] App runs with <code>dotnet run</code> from a clean clone</li>
      
      </ul></tbody></table></tbody></table>
    </div>
  )
}
