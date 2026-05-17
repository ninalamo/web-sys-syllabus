export default function E2W16ExerDeployAndPresentPrompt() {
  return (
    <div className="page-content">
      <h1>Week 16 — Capstone Deploy &amp; Present</h1>
      <p>
      <strong>Duration:</strong> 70 minutes
      </p>
      
      <h2>Part 1: Deploy (30 min)</h2>
      
      <br />Deploy your capstone to a live URL using Render or Railway:
      
      
      <ol>
        <li>Push code to GitHub</li>
        <li>Connect repo to Render/Railway</li>
        <li>Set environment variables (connection string, etc.)</li>
        <li>Configure build command: <code>dotnet publish -c Release</code></li>
        <li>Configure start command: <code>dotnet MyApp.dll</code></li>
        <li>Add auto-migration: <code>db.Database.Migrate()</code> in Program.cs</li>
        <li>Hit deploy and check logs if it fails</li>
      
      </ol>
      
      <h2>Part 2: Present (30 min)</h2>
      
      <br />10-minute presentation covering:
      
      
      <table><thead><tr>
        <th>Section</th>
        <th>Time</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>What did you build? (elevator pitch)</td>
        <td>1 min</td>
      </tr>
      
      <tr>
        <td>Live demo (register, core feature, API, validation)</td>
        <td>4 min</td>
      </tr>
      
      <tr>
        <td>Architecture diagram (Controllers -&gt; Services -&gt; DB + API)</td>
        <td>2 min</td>
      </tr>
      
      <tr>
        <td>Challenges (what broke? how did you fix it?)</td>
        <td>2 min</td>
      </tr>
      
      <tr>
        <td>AI usage (what did AI help with? what did it get wrong?)</td>
        <td>1 min</td>
      </tr>
      </tbody></table>
    </div>
  )
}
