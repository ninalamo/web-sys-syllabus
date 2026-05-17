export default function E3W12ExerExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 12: API Versioning &amp; Documentation — Exercises</h1>
      <h2>In-Class Exercise (55 min)</h2>
      <h3>Task: Version and Document Your API</h3>
      <p>
      Take last week's API and add versioning + Swagger documentation.
      </p>
      
      <h3>Requirements</h3>
      
      
      <ol>
        <li>Install API Versioning package: <code>Asp.Versioning.Mvc</code></li>
        <li>Move your existing controller to <code>v1.0</code></li>
        <li>Create a <code>v2.0</code> controller that returns slightly different data</li>
        <li>Enable XML comments and write a <code>&lt;summary&gt;</code> for every endpoint</li>
        <li>Verify Swagger UI shows your documentation</li>
      
      </ol>
      
      <h3>Hints</h3>
      
      
      <ul>
        <li>Enable <code>&lt;GenerateDocumentationFile&gt;true&lt;/GenerateDocumentationFile&gt;</code> in <code>.csproj</code></li>
        <li>Use <code>[ApiVersion("1.0")]</code> attribute on controllers</li>
        <li>Configure Swagger to include XML comments in <code>Program.cs</code></li>
      
      </ul>
      
      <h3>Stretch Goals</h3>
      
      
      <ul>
        <li>Add versioning via query string instead of URL</li>
        <li>Add <code>&lt;param&gt;</code> and <code>&lt;returns&gt;</code> tags to XML comments</li>
        <li>Create a versioned route for both v1 and v2</li>
      
      </ul>
    </div>
  )
}
