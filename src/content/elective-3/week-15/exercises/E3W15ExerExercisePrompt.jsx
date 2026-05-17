export default function E3W15ExerExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 15: CI/CD &amp; Deployment — Exercises</h1>
      <h2>In-Class Exercise (55 min)</h2>
      <h3>Task: Set Up Full CI/CD Pipeline</h3>
      <p>
      Create automated build, test, and deploy workflows for your full-stack app.
      </p>
      
      <h3>Requirements</h3>
      
      
      <ol>
        <li><code>.github/workflows/ci.yml</code> — runs on push to <code>main</code> and PRs</li>
        <li>Backend: <code>dotnet build</code> + <code>dotnet test</code></li>
        <li>Frontend: <code>npm ci</code> + <code>npm run lint</code> + <code>npm run build</code></li>
        <li>Both jobs must pass for PR to be mergeable</li>
        <li><code>.github/workflows/cd.yml</code> — runs only on <code>main</code>, needs CI</li>
        <li>Deploy frontend to Vercel/Netlify/GitHub Pages</li>
        <li>Deploy backend to Render/Railway/Azure</li>
        <li>All secrets in GitHub Secrets (never in code)</li>
        <li>Deployment status badge in README</li>
        <li>Make a small change, push, verify pipeline deploys</li>
      
      </ol>
      
      <h3>Hints</h3>
      
      
      <ul>
        <li>CI runs on every push/PR</li>
        <li>CD only runs on <code>main</code> after CI passes</li>
        <li>Use <code>needs: [ci-check]</code> to create dependencies</li>
        <li><code>npm ci</code> is deterministic — use it in CI, not <code>npm install</code></li>
      
      </ul>
      
      <h3>Stretch Goals</h3>
      
      
      <ul>
        <li>Add a deployment notification (Slack/Discord webhook)</li>
        <li>Add a staging environment</li>
        <li>Add automatic version tagging</li>
      
      </ul>
    </div>
  )
}
