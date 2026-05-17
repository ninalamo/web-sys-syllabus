export default function E3W4PresPlaceholder() {
  return (
    <div className="page-content">
      <h1>Week 4: Presentations — Placeholder</h1>
      <h2>Planned Slide Deck Content</h2>
      <h3>Slide 1: Title</h3>
      <ul>
        <li>"Week 4: Dev Tooling &amp; Workflow"</li>
        <li>"Professionalize our workflow — NPM, Vite, and Git branches"</li>
      </ul>
      <h3>Slide 2: The Hook</h3>
      <ul>
        <li>"What works for a 3-page website fails catastrophically for 5,000 files"</li>
      </ul>
      <h3>Slide 3: Whiteboard Analogy</h3>
      <ul>
        <li>The Car Factory</li>
        <li>Your Code = raw materials</li>
        <li>NPM = supply chain</li>
        <li>Vite = assembly line</li>
      </ul>
      <h3>Slide 4: NPM &amp; package.json</h3>
      <ul>
        <li>"Your receipt" — lists exactly which versions your app needs</li>
        <li>dependencies vs devDependencies</li>
      </ul>
      <h3>Slide 5: node_modules Black Hole</h3>
      <ul>
        <li>Never commit to GitHub</li>
        <li>"Like mailing your entire house instead of the blueprint"</li>
      </ul>
      <h3>Slide 6: Bundlers / Vite</h3>
      <ul>
        <li>Why CRA is dead</li>
        <li>Vite uses native ES modules — 100ms startup</li>
      </ul>
      <h3>Slide 7: Git Feature Branches</h3>
      <ul>
        <li>"Working directly on main is a fireable offense"</li>
        <li>Branch -&gt; Commit -&gt; Push -&gt; PR -&gt; Merge</li>
      </ul>
      <h3>Slide 8: Live Coding Preview</h3>
      <ul>
        <li>Step 1: Scaffold with Vite</li>
        <li>Step 2: Install a package (canvas-confetti)</li>
        <li>Step 3: Branch and push</li>
      </ul>
      <h3>Slide 9: Common Errors</h3>
      <ul>
        <li><code>ERESOLVE</code> dependency conflict</li>
        <li><code>command not found: vite</code></li>
      </ul>
      <h3>Slide 10: Exercise Brief</h3>
      <ul>
        <li>Scaffold Vite app, install date-fns, push to feature branch</li>
      </ul>
      <h3>Slide 11: Learning Baseline</h3>
      <ul>
        <li>Self-assessment checklist</li>
      </ul>
    </div>
  )
}
