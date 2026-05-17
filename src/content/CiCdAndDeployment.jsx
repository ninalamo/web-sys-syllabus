export default function CiCdAndDeployment() {
  return (
    <div className="page-content">
      <h2>Week 15: CI/CD &amp; Deployment</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 14: Testing"<br />
        🎯 This week: "Automate build, test, and deploy with GitHub Actions — push code, watch it go live"<br />
        <br />
        <strong>LAB (3h) Topics:</strong><br />
        ▸ A. CI vs CD (5 min)<br />
        ▸ B. GitHub Actions (5 min)<br />
        ▸ C. Pipeline Stages — Build, Test, Lint (5 min)<br />
        ▸ D. Secrets Management (5 min)<br />
        ▸ E. Zero-Downtime Deployment (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality + AI Integration + Take-Home Mission<br />
        <br />
        ✅ By end of lab: Write CI workflow (build + test); write CD workflow (deploy); configure GitHub Secrets; run a full pipeline from push to deploy
      </div>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (Lab - ~150 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Pipeline Diagram</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>30 min</td>
          <td>Live Setup (CI YAML -&gt; CD YAML -&gt; secrets)</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Lab (solo or pairs)</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>10 min</td>
          <td>Overflow / Stretch discussion</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 15 strategy):</strong> This is the "automate everything" week. Students are used to manual deploys — this feels like magic when it works. The assembly line analogy is essential — reference it for every pipeline stage. Build progressively: CI YAML (build + test) -&gt; CD YAML (deploy) -&gt; secrets management -&gt; live deployment. The "push and it just works" moment is the payoff. Emphasize: CI/CD is not a substitute for testing — it's the automation OF testing. Secrets must NEVER be in code. The Linux vs Windows difference (GitHub Actions runs on Ubuntu) is the #1 gotcha.</p>
      </blockquote>
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "You wrote code, it works on your machine, you push it to GitHub, and... nothing happens. You still have to manually build, test, and deploy. Meanwhile, at every company, developers push code and it automatically gets tested, built, and deployed to production within minutes. That's CI/CD — Continuous Integration and Continuous Deployment. It's the difference between 'I deployed it manually at midnight' and 'I pushed it and went to sleep.'"</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "Push Code. Go to Sleep. Wake Up to a Live App."<br />Left: Developer manually building, testing, deploying at 2 AM (tired, error-prone). Right: Developer pushes code, GitHub Actions runs pipeline, app deploys automatically (green checkmarks everywhere). Subtitle: "This is what professional teams do."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Make the contrast visceral. Show a real GitHub Actions run with green checkmarks. Students need to SEE the automation before they believe it's possible.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "CI/CD is like setting up auto-pay for your bills. Instead of manually paying every month (and sometimes forgetting), it happens automatically. You push code, the pipeline handles the rest. No midnight deployment stress."<br /><strong>-&gt; Phone moment:</strong> "Open GitHub. Go to the Actions tab of any popular repo. See all those green checkmarks? Each one is an automated pipeline that ran on every push. You're about to build your own."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Don't worry if CI/CD sounds complex. It's just a YAML file that says 'when I push code, do these steps.' We'll build it together, step by step."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 2. The Analogy</h3>
      <blockquote>
        <p><em>(Part of Hook — same 15 min block)</em></p>
        <blockquote>
          <p>[SPEAK] <strong>Script:</strong> "CI/CD is like an automated assembly line. In the old days, a car was built by hand — one person did everything. With an assembly line, each station does one thing: frame, engine, paint, inspection. If the inspection station finds a defect, the line stops and the car doesn't ship. CI/CD is the same: your code goes through stations (build -&gt; test -&gt; deploy). If any station fails, the deployment stops. No defective code reaches production."</p>
        </blockquote>
        <blockquote>
          <p>[BOARD] <strong>Whiteboard:</strong> Draw the assembly line:</p>
          <pre><code>PUSH CODE -&gt; [Checkout] -&gt; [Build] -&gt; [Test] -&gt; [Lint] -&gt; [Deploy]
          [OK]            [OK]          [OK]        [OK]        [OK]
      
          If ANY station fails -&gt; pipeline stops -&gt; no deploy
      
          CI  = Build + Test + Lint (every push/PR)
          CD  = Deploy (only on main branch, after CI passes)
      
          Secrets = fuel for the assembly line (injected, not stored)
        </code></pre>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The assembly line analogy maps perfectly: each pipeline step = a station, test failure = inspection defect, secrets = materials injected at the right station. Draw it and reference it throughout.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "The pipeline is like your Shopee order process. Checkout = get your code. Build = package your order. Test = quality check. Lint = verify items match listing. Deploy = ship to your address. If quality check fails, your order doesn't ship."<br /><strong>-&gt; Turn to your neighbor:</strong> "In the assembly line analogy, what happens if the test station fails? Does the code still deploy? 15 seconds, discuss!"</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the factory. CI/CD = push code -&gt; automatic build -&gt; automatic test -&gt; automatic deploy. If any step fails, it stops. That's the whole thing."</p>
      </blockquote>
      <hr />
      </blockquote><h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 3. Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (5 min CI vs CD -&gt; 5 min GitHub Actions -&gt; 5 min pipeline stages -&gt; 5 min secrets -&gt; 5 min zero-downtime deployment)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Manual deployment is slow, error-prone, and stressful. You forget a step, you deploy the wrong version, you miss a test. CI/CD automates the entire process so every code change goes through the same rigorous pipeline. It also creates a record of every deployment — who deployed what, when, and whether it succeeded. Let me show you how each piece works."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show one concept at a time. For each: (1) the concept, (2) a YAML snippet, (3) what happens without it. Don't show all concepts at once.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Spend the most time on secrets management and the CI vs CD distinction — these are where 80% of mistakes happen. For secrets, emphasize: NEVER commit them to code. For CI vs CD, emphasize: CI runs on every PR, CD only on main.</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "What's the difference between CI and CD?" (CI = build and test on every push. CD = deploy after CI passes.) "Why not deploy on every PR?" (Because PRs are work-in-progress — you only deploy merged, reviewed code.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Secrets management is like your GCash MPIN. You don't write it on a sticky note (hardcoded in code). You don't text it to anyone (committed to git). You keep it in your head (environment variable) and only use it when needed (runtime injection)."<br /><strong>-&gt; Phone moment:</strong> "Open your GitHub repo -&gt; Settings -&gt; Secrets and variables -&gt; Actions. See where you add secrets? That's where your API keys, database passwords, and JWT secrets live — encrypted, never in code."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why use <code>npm ci</code> instead of <code>npm install</code> in CI?"
        <strong>Short answer:</strong> <code>npm ci</code> is deterministic — it installs exactly what's in the lock file.
        <strong>Real answer:</strong> <code>npm install</code> can update the lock file if dependencies changed. On CI, you want reproducible builds — the exact same packages every time. <code>npm ci</code> reads the lock file and installs those exact versions. If the lock file is out of sync, <code>npm ci</code> fails (which is good — it catches the problem).
        <strong>The hidden question:</strong> "Does it matter for small projects?" -&gt; Yes. It's a habit. Build it now, and it scales naturally.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What's zero-downtime deployment and do I need it?"
        <strong>Short answer:</strong> Deploying without taking the app offline. For your capstone, probably not.
        <strong>Real answer:</strong> Zero-downtime means the old version keeps serving requests while the new version starts up. Once the new version is healthy, traffic switches over. For production apps with users, this is essential. For your capstone, a brief downtime during deploy is acceptable.
        <strong>The hidden question:</strong> "How do companies do it?" -&gt; Blue-green deployments, canary releases, rolling updates. But that's beyond this class.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The simplest CI/CD summary: (1) CI = build + test on every push. (2) CD = deploy after CI passes. (3) Secrets go in GitHub Secrets, not code. (4) Pipeline stages run in order. That's 90% of what you need."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 4. Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 30 min (10 min CI YAML -&gt; 10 min CD YAML -&gt; 10 min secrets + live demo)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's set up a full CI/CD pipeline from scratch. We'll write the CI workflow that builds and tests on every push, then the CD workflow that deploys to production, then configure secrets. By the end, you'll push code and watch it deploy automatically."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show each step on its own slide. Step 1: CI YAML (checkout -&gt; build -&gt; test -&gt; lint). Step 2: CD YAML (deploy backend + frontend). Step 3: Secrets configuration.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type the YAML live, don't paste.</strong> For the CI workflow, emphasize: <code>needs</code> creates dependencies between jobs. For the CD workflow, emphasize: it only runs on <code>main</code> and requires CI to pass. For secrets, show the GitHub UI where they're configured.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the pipeline flow:</p>
        <pre><code>PUSH -&gt; CI Pipeline:
        +- backend: checkout -&gt; dotnet restore -&gt; dotnet build -&gt; dotnet test
        +- frontend: checkout -&gt; npm ci -&gt; npm run lint -&gt; npm run build
      
        MERGE to main -&gt; CD Pipeline (needs CI):
        +- deploy-backend: azure/webapps-deploy (uses secret)
        +- deploy-frontend: actions-gh-pages (uses GITHUB_TOKEN)
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Writing a CI/CD pipeline is like setting up a Rube Goldberg machine. Each step triggers the next. If one domino falls wrong, the whole thing stops. But when it works? Pure magic."<br /><strong>-&gt; Type-along:</strong> "Type the CI workflow first. Push it and watch it run in GitHub Actions. Then the CD workflow. Then add secrets. Then make a small change and watch the full pipeline deploy it."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does the CD job have <code>needs: [ci-check]</code>?"
        <strong>Short answer:</strong> It won't run unless CI passes.
        <strong>Real answer:</strong> <code>needs</code> creates a dependency. The CD job waits for the CI job to complete successfully before starting. If CI fails (tests fail, build fails), CD never runs — no broken code reaches production. Without <code>needs</code>, CD would run regardless of CI status.
        <strong>The hidden question:</strong> "Can I have multiple dependencies?" -&gt; Yes. <code>needs: [ci-backend, ci-frontend]</code> waits for both.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with just the CI workflow. Push it and watch it run. Get it green. Then add the CD workflow. Then secrets. One piece at a time."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 5. Debugging + Wrap</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the CI/CD errors and traps you'll hit this week. The Linux vs Windows difference alone will save you from a frustrating debugging session."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+--------------------------------------+
        | "Resource not accessible by          |
        | integration"                         |
        | Workflow lacks permissions           |
        | Fix: check GITHUB_TOKEN permissions  |
        +--------------------------------------+
        +--------------------------------------+
        | "Pipeline passes locally but fails   |
        | on GitHub Actions"                   |
        | GitHub runs Ubuntu, not Windows      |
        | Fix: test in Linux environment       |
        +--------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "The Linux vs Windows issue is like your Android app not working on iPhone. GitHub Actions runs on Ubuntu (Linux), so Windows-specific paths (<code>\</code> vs <code>/</code>) will break. Always test your code in a Linux-compatible way."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "CI/CD is not a substitute for testing? So I still need tests?"
        <strong>Short answer:</strong> Yes. CI/CD automates running your tests — it doesn't replace them.
        <strong>Real answer:</strong> CI/CD is the pipeline that RUNS your tests. Without tests, the pipeline just builds and deploys — it doesn't verify anything. A pipeline without tests is like an assembly line without quality inspection — fast, but defective products ship.
        <strong>The hidden question:</strong> "What should my pipeline look like?" -&gt; Lint -&gt; Test -&gt; Build -&gt; Deploy. If any step fails, stop.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The #1 issue: secrets leak. If you accidentally committed a secret to your repository, rotate it immediately (generate a new one), remove the old one, and consider using <code>git-filter-repo</code> to remove it from history. Never commit secrets."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. In-Class Exercise</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min coding -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Set up a complete CI/CD pipeline for your full-stack app. Create CI and CD workflows, configure secrets, deploy to free hosting platforms, and verify the pipeline runs automatically on push."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> <code>.github/workflows/ci.yml</code> — runs on push to <code>main</code> and PRs</li>
          <li><input disabled="" type="checkbox" /> Backend: <code>dotnet build</code> + <code>dotnet test</code></li>
          <li><input disabled="" type="checkbox" /> Frontend: <code>npm ci</code> + <code>npm run lint</code> + <code>npm run build</code></li>
          <li><input disabled="" type="checkbox" /> Both jobs must pass for PR to be mergeable</li>
          <li><input disabled="" type="checkbox" /> <code>.github/workflows/cd.yml</code> — runs only on <code>main</code>, needs CI</li>
          <li><input disabled="" type="checkbox" /> Deploy frontend to Vercel/Netlify/GitHub Pages</li>
          <li><input disabled="" type="checkbox" /> Deploy backend to Render/Railway/Azure</li>
          <li><input disabled="" type="checkbox" /> All secrets in GitHub Secrets (never in code)</li>
          <li><input disabled="" type="checkbox" /> Deployment status badge in README</li>
          <li><input disabled="" type="checkbox" /> Make a small change, push, verify pipeline deploys</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The CD deployment (requirements 5-7) is the hardest part — students will struggle with hosting platform setup and secret configuration. Circulate and help with publish profiles and environment variables.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "One person handles the CI workflow (build + test), the other handles the CD workflow (deploy + secrets). Then combine and test the full pipeline together."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with the CI workflow. Push it and watch it run. Get it green. Then the CD workflow. Then secrets. Then the live deploy test. Build incrementally."</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <h3>Industry Reality</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "At Vercel, every push to <code>main</code> triggers a deployment that's live in under 60 seconds. At Netflix, their CI/CD pipeline runs over 100,000 tests before deploying. The GitHub Actions workflow you're building is the same concept used by every company that ships software. The difference is scale — they have more stages, more environments (staging, canary, production), and more automated checks. But the principle is identical: automate everything, fail fast, deploy safely."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Stats: "Vercel: 60-second deploys. Netflix: 100,000+ tests per deploy." Logos: Vercel, Netflix, GitHub. Show a real GitHub Actions dashboard with multiple workflows.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. Show them that CI/CD isn't academic — it's how every professional team ships code.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you have used an app that had a bad update?" (All hands.) "That's what happens when teams don't have automated testing in their pipeline. You're learning how to prevent that."</p>
      </blockquote>
      <h3>AI Integration</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week, ask AI to generate a GitHub Actions workflow, then review every step. Ask 'What happens if this step fails?' and 'Are secrets handled correctly?'"</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> AI usage guide:</p>
        <table>
          <thead>
            <tr>
              <th>[OK] Allowed</th>
              <th>[NO] Not Allowed</th>
            </tr>
          </thead>
          <tbody><tr>
            <td>"Generate a CI workflow for .NET + React"</td>
            <td>"Handle my deployment secrets"</td>
          </tr>
          <tr>
            <td>"What's wrong with this pipeline?"</td>
            <td>"Configure my production credentials"</td>
          </tr>
        </tbody></table>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Point out the common AI mistakes: secrets in workflow files instead of <code>$&#123;&#123; secrets.NAME &#125;&#125;</code>, <code>npm install</code> instead of <code>npm ci</code>, missing <code>needs</code> dependencies, outdated action versions. Teach students to audit AI's pipeline code.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI writes CI/CD configs fast but often makes dangerous mistakes. It's like giving someone your house keys — if the AI puts secrets in the code, anyone can see them. Always check: are secrets using <code>$&#123;&#123; secrets.* &#125;&#125;</code>?"</p>
      </blockquote>
      <hr />
      <p><em>This week's core arc: manual deploy pain -&gt; assembly line analogy -&gt; CI YAML -&gt; CD YAML -&gt; secrets -&gt; live deployment. Key pitfalls: secrets in code, <code>npm install</code> instead of <code>npm ci</code>, missing <code>needs</code> dependencies, Linux vs Windows paths, CI/CD without tests.</em></p>
    </div>
  )
}
