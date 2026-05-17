export default function E2W12ResoCapstoneCheckpointReference() {
  return (
    <div className="page-content">
      <h1>Week 12: Mini Capstone Checkpoint Reference</h1>
      <h2>Architecture Review</h2>
      <pre><code>Model (Data/Rules) &lt;--&gt; Controller (Traffic Cop) &lt;--&gt; View (UI)</code></pre>
      <h2>Minimum Viable Product (MVP)</h2>
      <p>
      The absolute bare minimum required to prove the app works.
      </p>
      
      <table><thead><tr>
        <th>Not MVP</th>
        <th>MVP</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>Login, dark mode, password reset</td>
        <td>Click "Add Item", saves to DB, appears on list</td>
      </tr>
      
      
      <h2>Debugging the Yellow Screen</h2>
      
      
      <ol>
        <li>Read the <strong>first 2 lines</strong> of the error</li>
        <li>Look for: "The view was not found", "NullReferenceException", "InvalidOperationException"</li>
        <li>Check the file path mentioned in the stack trace</li>
      
      </ol>
      
      <h2>Peer Code Review Checklist</h2>
      
      
      <ul>
        <li>Naming conventions (PascalCase for classes, camelCase for locals)</li>
        <li>Dead code (unused variables, commented-out code)</li>
        <li>Security (no <code>@Html.Raw()</code> on user input, anti-forgery tokens present)</li>
        <li>Null checks (especially on navigation properties)</li>
        <li><code>.ToList()</code> placement (after <code>.Where()</code>, not before)</li>
        <li>Route ordering (more specific routes before general ones)</li>
      
      </ul></tbody></table>
    </div>
  )
}
