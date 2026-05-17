export default function E3W8PresPlaceholder() {
  return (
    <div className="page-content">
      <h1>Week 8: Presentations — Placeholder</h1>
      <h2>Planned Slide Deck Content</h2>
      <h3>Slide 1: Title</h3>
      <ul>
        <li>"Week 8: React Router &amp; SPA Concepts"</li>
        <li>"Add navigation — multi-page experience without page reloads"</li>
      </ul>
      <h3>Slide 2: The Hook</h3>
      <ul>
        <li>"Spotify plays music uninterrupted when you click around. YouTube doesn't flash white. That's SPA trickery."</li>
      </ul>
      <h3>Slide 3: Whiteboard Analogy</h3>
      <ul>
        <li>The Stage Play</li>
        <li>Multi-Page: curtains close, audience waits, stagehands change set</li>
        <li>SPA: curtains stay open, stage rotates instantly</li>
      </ul>
      <h3>Slide 4: What is a SPA?</h3>
      <ul>
        <li>ONE blank index.html + one massive JS file</li>
        <li>React looks at URL and decides which Component to render</li>
        <li>It's an illusion</li>
      </ul>
      <h3>Slide 5: React Router Setup</h3>
      <ul>
        <li><code>createBrowserRouter</code> (v6.4+)</li>
        <li>Not the old <code>&lt;Switch&gt;</code> syntax</li>
      </ul>
      <h3>Slide 6: Link vs Anchor</h3>
      <ul>
        <li><code>&lt;a&gt;</code> = full refresh, kills state</li>
        <li><code>&lt;Link&gt;</code> = instant SPA transition</li>
      </ul>
      <h3>Slide 7: URL Parameters</h3>
      <ul>
        <li><code>/users/:id</code> — the <code>:</code> means variable</li>
        <li><code>useParams()</code> hook</li>
      </ul>
      <h3>Slide 8: Live Coding Preview</h3>
      <ul>
        <li>Step 1: Router config</li>
        <li>Step 2: Navigation with Layout</li>
        <li>Step 3: Dynamic parameters</li>
      </ul>
      <h3>Slide 9: Common Errors</h3>
      <ul>
        <li>"useNavigate outside Router context"</li>
        <li>Blank page from no matching route</li>
      </ul>
      <h3>Slide 10: Exercise Brief</h3>
      <ul>
        <li>3-page Portfolio SPA</li>
      </ul>
      <h3>Slide 11: Learning Baseline</h3>
      <ul>
        <li>Self-assessment checklist</li>
      </ul>
    </div>
  )
}
