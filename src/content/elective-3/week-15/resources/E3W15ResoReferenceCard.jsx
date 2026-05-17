export default function E3W15ResoReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 15: CI/CD &amp; Deployment — Resources &amp; Reference</h1>
      <h2>Core Concepts Quick Reference</h2>
      <h3>1. CI vs CD</h3>
      <table><thead><tr>
        <th>CI (Continuous Integration)</th>
        <th>CD (Continuous Deployment)</th>
      </tr></thead><tbody>
      <tr>
        <td><strong>When</strong></td>
        <td>Every push/PR</td>
        <td>Only on <code>main</code> after CI passes</td>
      </tr>
      <tr>
        <td><strong>What</strong></td>
        <td>Build + Test + Lint</td>
        <td>Deploy to production</td>
      </tr>
      <tr>
        <td><strong>Goal</strong></td>
        <td>Catch bugs early</td>
        <td>Ship code automatically</td>
      </tr>
      <h3>2. GitHub Actions Pipeline</h3>
      <pre><code>PUSH -&gt; [Checkout] -&gt; [Build] -&gt; [Test] -&gt; [Lint] -&gt; [Deploy]
      [OK]         [OK]        [OK]       [OK]        [OK]
      
      If ANY station fails -&gt; pipeline stops -&gt; no deploy</code></pre>
      <h3>3. CI Workflow Structure</h3>
      <pre><code>name: CI
      on:
      push:
      branches: [main]
      pull_request:
      branches: [main]
      
      jobs:
      build:
      runs-on: ubuntu-latest
      steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run build
      - run: npm test</code></pre>
      <h3>4. CD Workflow Structure</h3>
      <pre><code>name: CD
      on:
      push:
      branches: [main]
      
      jobs:
      deploy:
      needs: [ci-check]  # Won't run unless CI passes
      runs-on: ubuntu-latest
      steps:
      - uses: actions/checkout@v4
      - run: deploy-command
      env:
      SECRET: $&#123; secrets.DEPLOY_KEY &#125;  # Never hardcoded!</code></pre>
      <h3>5. Secrets Management</h3>
      <ul>
        <li>Store in GitHub -&gt; Settings -&gt; Secrets and variables -&gt; Actions</li>
        <li>Reference as <code>$&#123; secrets.NAME &#125;</code></li>
        <li>NEVER commit secrets to code</li>
        <li>If accidentally committed: rotate immediately, use <code>git-filter-repo</code></li>
      </ul>
      <h3>6. Key Commands</h3>
      <table><thead><tr>
        <th>Command</th>
        <th>Purpose</th>
      </tr></thead><tbody>
      <tr>
        <td><code>npm ci</code></td>
        <td>Deterministic install from lockfile</td>
      </tr>
      <tr>
        <td><code>dotnet build</code></td>
        <td>Compile the project</td>
      </tr>
      <tr>
        <td><code>dotnet test</code></td>
        <td>Run all tests</td>
      </tr>
      <tr>
        <td><code>dotnet publish</code></td>
        <td>Prepare for deployment</td>
      </tr>
      <h2>Learning Baseline Checklist</h2>
      <ul>
        <li>[ ] I can write a CI workflow (build + test)</li>
        <li>[ ] I can write a CD workflow (deploy)</li>
        <li>[ ] I can configure GitHub Secrets</li>
        <li>[ ] I can run a full pipeline from push to deploy</li>
      </ul>
      <h2>Common Errors</h2>
      <table><thead><tr>
        <th>Error</th>
        <th>Cause</th>
        <th>Fix</th>
      </tr></thead><tbody>
      <tr>
        <td>"Resource not accessible by integration"</td>
        <td>Workflow lacks permissions</td>
        <td>Check GITHUB_TOKEN permissions</td>
      </tr>
      <tr>
        <td>Pipeline passes locally but fails on GitHub</td>
        <td>GitHub runs Ubuntu, not Windows</td>
        <td>Test in Linux-compatible way</td>
      </tr>
      <tr>
        <td>Secrets leak</td>
        <td>Committed to code</td>
        <td>Rotate, remove, use git-filter-repo</td>
      </tr></tbody></table></tbody></table></tbody></table>
    </div>
  )
}
