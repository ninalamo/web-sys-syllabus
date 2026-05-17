export default function E3W4ResoReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 4: NPM &amp; Vite Quick Reference</h1>
      <h2>Essential Commands</h2>
      <h3>NPM</h3>
      <pre><code>npm init -y              # Create package.json
      npm install &lt;package&gt;    # Install a dependency
      npm install -D &lt;package&gt; # Install a dev dependency
      npm run &lt;script&gt;         # Run a script from package.json
      npm ci                   # Install from lockfile (for CI)</code></pre>
      <h3>Vite</h3>
      <pre><code>npm create vite@latest my-app -- --template vanilla
      cd my-app
      npm install
      npm run dev              # Start dev server
      npm run build            # Build for production
      npm run preview          # Preview production build</code></pre>
      <h3>Git Feature Branches</h3>
      <pre><code>git checkout -b feature/login-page   # Create and switch to branch
      git add .                            # Stage all changes
      git commit -m "feat: add login page" # Commit
      git push -u origin feature/login-page # Push to remote</code></pre>
      <h2>package.json Structure</h2>
      <pre><code>&#123;
      "name": "my-app",
      "version": "1.0.0",
      "type": "module",
      "scripts": &#123;
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
      &#125;,
      "dependencies": &#123;
      "date-fns": "^3.0.0"
      &#125;,
      "devDependencies": &#123;
      "vite": "^5.0.0"
      &#125;
      &#125;</code></pre>
      <h2>.gitignore Essentials</h2>
      <pre><code>node_modules/
      dist/
      .env
      .env.local
      *.log
      .DS_Store</code></pre>
      <h2>Learning Baseline Checklist</h2>
      <ul>
        <li>[ ] I know why we use <code>package.json</code></li>
        <li>[ ] I understand why <code>node_modules</code> must be in <code>.gitignore</code></li>
        <li>[ ] I can use Vite to scaffold and run a development server</li>
        <li>[ ] I can install a 3rd party package using NPM</li>
        <li>[ ] I can create and push a Git feature branch</li>
      </ul>
      <h2>Common Errors</h2>
      <table><thead><tr>
        <th>Error</th>
        <th>Cause</th>
        <th>Fix</th>
      </tr></thead><tbody>
      <tr>
        <td><code>npm ERR! code ERESOLVE</code></td>
        <td>Dependency conflict</td>
        <td>Read terminal, try <code>--legacy-peer-deps</code></td>
      </tr>
      <tr>
        <td><code>command not found: vite</code></td>
        <td>Forgot <code>npm install</code></td>
        <td>Run <code>npm install</code> first</td>
      </tr>
      <tr>
        <td>Port already in use</td>
        <td>Another dev server running</td>
        <td>Kill the other process or use <code>--port 3001</code></td>
      </tr></tbody></table>
    </div>
  )
}
