export default function E3W15PresPlaceholder() {
  return (
    <div className="page-content">
      <h1>Week 15: Presentations — Placeholder</h1>
      <h2>Planned Slide Deck Content</h2>
      <h3>Slide 1: Title</h3>
      <ul>
        <li>"Week 15: CI/CD &amp; Deployment"</li>
        <li>"Automate build, test, and deploy with GitHub Actions"</li>
      </ul>
      <h3>Slide 2: The Hook</h3>
      <ul>
        <li>"Push code. Go to sleep. Wake up to a live app."</li>
      </ul>
      <h3>Slide 3: Whiteboard Analogy</h3>
      <ul>
        <li>The Automated Assembly Line</li>
        <li>Each station: checkout -&gt; build -&gt; test -&gt; lint -&gt; deploy</li>
        <li>If any station fails, the line stops</li>
      </ul>
      <h3>Slide 4: CI vs CD</h3>
      <ul>
        <li>CI = build + test on every push</li>
        <li>CD = deploy after CI passes (only on main)</li>
      </ul>
      <h3>Slide 5: GitHub Actions</h3>
      <ul>
        <li>YAML files in <code>.github/workflows/</code></li>
        <li>Green checkmarks = automated pipelines</li>
      </ul>
      <h3>Slide 6: Pipeline Stages</h3>
      <ul>
        <li>Checkout -&gt; Build -&gt; Test -&gt; Lint -&gt; Deploy</li>
        <li><code>needs:</code> creates dependencies</li>
      </ul>
      <h3>Slide 7: Secrets Management</h3>
      <ul>
        <li>"Like your GCash MPIN"</li>
        <li>GitHub Secrets, not code</li>
        <li><code>$&#123; secrets.NAME &#125;</code></li>
      </ul>
      <h3>Slide 8: Zero-Downtime Deployment</h3>
      <ul>
        <li>Old version serves while new starts</li>
        <li>Brief downtime acceptable for capstone</li>
      </ul>
      <h3>Slide 9: Live Coding Preview</h3>
      <ul>
        <li>CI YAML -&gt; CD YAML -&gt; Secrets -&gt; Live deploy</li>
      </ul>
      <h3>Slide 10: Common Errors</h3>
      <ul>
        <li>Linux vs Windows paths</li>
        <li>Secrets in workflow files</li>
      </ul>
      <h3>Slide 11: Exercise Brief</h3>
      <ul>
        <li>Full CI/CD pipeline setup</li>
      </ul>
      <h3>Slide 12: Learning Baseline</h3>
      <ul>
        <li>Self-assessment checklist</li>
      </ul>
    </div>
  )
}
