export default function E3W11PresPlaceholder() {
  return (
    <div className="page-content">
      <h1>Week 11: Presentations — Placeholder</h1>
      <h2>Planned Slide Deck Content</h2>
      <h3>Slide 1: Title</h3>
      <ul>
        <li>"Week 11: Frontend/Backend Integration"</li>
        <li>"Connect React frontend to ASP.NET backend — full stack integration"</li>
      </ul>
      <h3>Slide 2: The Hook</h3>
      <ul>
        <li>"For 10 weeks you've been building half a bridge. Today we connect it."</li>
      </ul>
      <h3>Slide 3: Whiteboard Analogy</h3>
      <ul>
        <li>The Translator</li>
        <li>React speaks JS (Port 5173), ASP.NET speaks C# (Port 5000)</li>
        <li>HTTP/JSON = universal translator</li>
      </ul>
      <h3>Slide 4: Two-Server Mental Model</h3>
      <ul>
        <li>Two separate boxes: <code>npm run dev</code> and <code>dotnet run</code></li>
        <li>If backend isn't running, frontend fails</li>
      </ul>
      <h3>Slide 5: Environment Variables</h3>
      <ul>
        <li>Never hardcode localhost URLs</li>
        <li><code>.env</code> files with <code>VITE_</code> prefix</li>
      </ul>
      <h3>Slide 6: Vite Proxy</h3>
      <ul>
        <li>Vite acts as a middleman</li>
        <li>"Like having a friend pass a note for you"</li>
      </ul>
      <h3>Slide 7: Bulletproof Fetching</h3>
      <ul>
        <li>3 states: Loading, Success, Error</li>
        <li>Show spinner, data, or error box</li>
      </ul>
      <h3>Slide 8: Live Coding Preview</h3>
      <ul>
        <li>Step 1: Start both servers</li>
        <li>Step 2: Configure proxy</li>
        <li>Step 3: Fetch and display</li>
        <li>Step 4: POST from form</li>
      </ul>
      <h3>Slide 9: Common Errors</h3>
      <ul>
        <li>"Failed to fetch"</li>
        <li>"Unexpected token &lt; in JSON"</li>
      </ul>
      <h3>Slide 10: Exercise Brief</h3>
      <ul>
        <li>Connect Todo API to React frontend</li>
      </ul>
      <h3>Slide 11: Learning Baseline</h3>
      <ul>
        <li>Self-assessment checklist</li>
      </ul>
    </div>
  )
}
