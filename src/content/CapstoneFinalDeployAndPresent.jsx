export default function CapstoneFinalDeployAndPresent() {
  return (
    <div className="page-content">
      <h2>Week 16: Capstone Final — Deploy &amp; Present</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 15: Capstone Sprint"<br />
        🎯 This week: "Ship it — deploying to a live URL and presenting our work in a 10-minute demo"<br />
        <br />
        <strong>Core Concepts:</strong><br />
        ▸ A. Hosting Options (8 min)<br />▸ B. Deployment Checklist (7 min)<br />▸ C. Production Configuration (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> AI Integration + Deploy &amp; Present exercise deliverables<br />
        <br />
        ✅ By end of lab: What did you build? live demo; architecture diagram; challenges; AI usage
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
          <td>20 min</td>
          <td>Lecture + Slides + Deployment Demo</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>25 min</td>
          <td>Live Demo (deploy to Render/Railway)</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>70 min</td>
          <td>Lab (deploy + presentation prep)</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>5 min</td>
          <td>Overflow</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 16 strategy):</strong> This is deployment and presentation week. Students should spend most of their time deploying and practicing their demos. Keep lectures short. The deployment demo should be live — actually deploy a sample app during class. Walk around constantly during the build session. Help students with connection strings, environment variables, and platform-specific issues. The presentation practice is as important as the deployment — students need to learn how to demo their work.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Your app is about to go live. Real URL. Real users (your classmates). No pressure. You're about to experience the most terrifying and rewarding moment in software development: hitting 'Deploy.'"</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "Your App Goes Live Today"<br />Left: <code>localhost:5001</code> with a red X through it.<br />Right: <code>mycapstone.onrender.com</code> with a green checkmark.<br />Subtitle: "From your laptop to the internet."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This hook should feel exciting but also acknowledge the anxiety. Say: "Deploying for the first time is scary. It's supposed to be. But once you see your app on a real URL, you'll never look at websites the same way again."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "An app that only runs on your laptop is like a TikTok video that only you can see. Deployment is hitting 'Post.' Suddenly the whole world can see what you made."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you've ever deployed something to the internet." (Few hands.) "By the end of this session, that changes."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Don't worry if deployment feels intimidating. We'll do it step by step. The platform does most of the work. You just need to connect your repo and set a few variables."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "You've been cooking in your kitchen — that's your local machine — for weeks. The food tastes great to you. But now you're opening a restaurant — that's production. New challenges: does the food survive delivery? Can the kitchen handle 20 orders at once? What if the power goes out? Deployment is where your app meets the real world — and the real world doesn't care about your feelings."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the kitchen-to-restaurant analogy:</p>
        <pre><code>Your Kitchen (localhost)     -&gt;     Restaurant (Production)
        +-----------------+                +-----------------+
      </code></pre>
      </blockquote>
      <p>| You test it       |                | Anyone can access |
      | Your database     |      -&gt;         | Real database     |
      | Your files        |                | Server files      |
      | Fast (no network) |                | Network latency   |
      | No security       |                | HTTPS required    |
      +-----------------+                +-----------------+</p>
      <blockquote>
        <pre><code>Arrow labeled: "Deployment = moving from kitchen to restaurant"
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The kitchen analogy works well. Emphasize the key differences: production has a real database (not LocalDB), real network latency, real users, and real security requirements. The connection string change is the #1 deployment issue — highlight it.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "What's the biggest difference between testing on your laptop and deploying to the internet? 10 seconds, go!" (Answers: connection string, environment variables, HTTPS, network speed.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like moving from a practice court to a real game. Same skills, different pressure. Your code works on localhost — now we just need to put it on a server that everyone can reach."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>20 min</span> Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 20 min total (8 min hosting options -&gt; 7 min deployment checklist -&gt; 5 min production config)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here's how deployment works. Your app runs on localhost — only your machine can see it. Deployment puts it on a server that anyone can access. We'll use Render or Railway because they have free tiers and support .NET. The process is: push to GitHub, connect the repo to the platform, set environment variables, and deploy."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the hosting comparison table one platform at a time. Highlight Render and Railway as the easiest options for class projects. Then reveal the deployment checklist — read through each item.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The most important concept: <strong>environment variables replace hardcoded values.</strong> Students will want to put their production connection string in <code>appsettings.json</code>. Don't let them. Explain: "Your connection string has a password. If you commit it to GitHub, it's public forever. Use environment variables instead."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "If your app works on localhost but crashes on the server — what's the first thing you check?" (Answer: The logs. Every platform has a log viewer. Read the error message.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Environment variables are like your GCash PIN — you don't write it in your notebook where anyone can see it. You keep it in your head (the server's environment). The app reads it when it needs it."<br /><strong>-&gt; Phone moment:</strong> "Open any deployed website. Look at the URL. That URL points to a server somewhere. Your app is about to have one of those."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Which platform should I use?"
        <strong>Short answer:</strong> Render or Railway — both have free tiers and .NET support.
        <strong>Real answer:</strong> Render is easiest — connect GitHub, set build/start commands, add env vars, deploy. Railway is similar but gives you $5 credit. Azure is more powerful but more complex. For a class project, Render is fine.
        <strong>The hidden question:</strong> "Will it stay free forever?" -&gt; Render free tier sleeps after 15 min of inactivity. Railway credit runs out. But for a demo, it's enough.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What if my deployment fails?"
        <strong>Short answer:</strong> Check the logs.
        <strong>Real answer:</strong> 90% of deployment failures are: wrong connection string, missing migration, or missing environment variable. The platform's log viewer will tell you exactly what went wrong. Read the error, fix it, redeploy.
        <strong>The hidden question:</strong> "How many times will I need to redeploy?" -&gt; Probably 2-3 times. That's normal. Even senior devs redeploy multiple times.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the platform specifics. The flow is: (1) Push code to GitHub. (2) Connect repo to platform. (3) Set connection string as env var. (4) Hit deploy. (5) Check logs if it fails. That's it."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min (10 min production-ready Program.cs -&gt; 10 min live deploy demo -&gt; 5 min post-deploy testing)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's make our app production-ready and deploy it. First, the Program.cs changes — environment-aware error pages, auto-migration on startup. Then I'll deploy a sample app live so you can see the process."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the production-ready Program.cs with the environment check highlighted: <code>if (!app.Environment.IsDevelopment())</code>. Then show the <code>db.Database.Migrate()</code> line — explain this is what creates/updates the database on the server.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Do the deployment live.</strong> Even if it takes a few minutes, students need to see the full process: GitHub push -&gt; platform connect -&gt; env var setup -&gt; deploy -&gt; URL works. If the deployment fails (it might), that's actually valuable — show them how to read the logs and fix the issue.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the deployment flow:</p>
        <pre><code>Local Code -&gt; git push -&gt; GitHub -&gt; Platform (Render/Railway)
        v
        Build: dotnet publish -c Release
        v
        Start: dotnet MyApp.dll
        v
        Migrate: db.Database.Migrate()
        v
        Live URL: https://myapp.onrender.com
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Watch along:</strong> "I'm deploying this app live. Watch every step. This is the same process you'll follow. If I make a mistake, you'll learn from it. If it works, you'll know it's possible."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why <code>db.Database.Migrate()</code> instead of <code>EnsureCreated()</code>?"
        <strong>Short answer:</strong> <code>Migrate()</code> applies pending migrations. <code>EnsureCreated()</code> only creates if nothing exists.
        <strong>Real answer:</strong> <code>EnsureCreated()</code> is fine for the first deploy. But if you add a new column later and redeploy, <code>EnsureCreated()</code> won't add it. <code>Migrate()</code> applies all pending migrations, so it works for both first deploy and updates.
        <strong>The hidden question:</strong> "Is it safe to auto-migrate in production?" -&gt; For a class project, yes. In a real company, you'd run migrations separately from the app startup.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Let's focus on just getting the app running. Skip the auto-migration for now. Deploy with <code>EnsureCreated()</code>. Get it working. Then add migrations later."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>70 min</span> Exercise: Deploy + Present</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 70 min total (5 min prep -&gt; 30 min deploy -&gt; 30 min presentation practice + delivery -&gt; 5 min wrap)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Two parts today. Part 1: deploy your capstone to a live URL. Part 2: present your app in a 10-minute demo. Your presentation should cover: what you built, a live demo, your architecture, your challenges, and your AI usage. You have 70 minutes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Presentation structure:</p>
        <ol>
          <li><strong>What did you build?</strong> (1 min) — Elevator pitch</li>
          <li><strong>Live demo</strong> (4 min) — Register, core feature, API, validation</li>
          <li><strong>Architecture</strong> (2 min) — Diagram: Controllers -&gt; Services -&gt; DB + API</li>
          <li><strong>Challenges</strong> (2 min) — What broke? How did you fix it?</li>
          <li><strong>AI usage</strong> (1 min) — What did AI help with? What did it get wrong?</li>
        </ol>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This is the most important session of the term. Help students deploy first — without a live URL, the presentation has no impact. Then help them practice their demo. The "aha" moment is when they visit their own live URL and see their app running on the internet.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Practice your demo:</strong> "Run through your presentation once before presenting. Time it. If it's over 10 minutes, cut something. If your app crashes during the demo, that's okay — explain what went wrong. That's real development."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-session check-in (at 30 min):</strong> "How many have deployed?" (Show of hands.) "How many have a working live URL?" "If you're stuck on deployment, raise your hand — I'll come over."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Focus on getting the app deployed first. Skip the presentation prep until you have a working URL. If deployment fails, check the logs. 90% of failures are connection string or migration issues."</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "An app that only runs on your laptop doesn't exist. An app on the internet is real. Deployment is the difference between 'I learned coding' and 'I built a product.' Hiring managers don't care about your localhost — they want to see a URL. Plus, deployed apps look better on your resume than 'ran it on my machine.'"</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Side-by-side resume entries:
        Left: "Built a task manager app (ran locally)" — boring.
        Right: "Built and deployed a task manager app — live at [URL], 50+ users" — impressive.
        Subtitle: "Which one gets you hired?"</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. The resume angle is the strongest argument: "A deployed URL on your resume is proof you can ship. Most graduates can't say that."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you want to put a live URL on your resume?" (All hands.) "That's what we're doing today. Not a localhost link. A real URL that anyone can visit."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to understand DevOps today. Just know: push to GitHub, connect to platform, set env vars, deploy. That's the entire process."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Full AI is allowed and required this week. Use AI for deployment troubleshooting, error message diagnosis, and optimization suggestions. Submit your prompt log showing you used AI to help debug deployment issues."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Prompt template:
        "I'm deploying my ASP.NET Core app to [platform] and getting this error [paste log]. What's wrong?"</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Demonstrate asking AI about a deployment error. Show how to paste the platform's log output and get a diagnosis. "AI is great at reading error logs — it's like having a senior dev looking over your shoulder."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'deployment buddy' — it reads error logs, suggests fixes, and tells you what env vars you need. But you still need to understand what it's telling you."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the deployment errors you WILL see. Let's go through them so you don't panic when they happen."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+------------------------------------------+
        | 502 Bad Gateway                          |
        | Your app crashed on startup.             |
        | Check logs: connection string? missing   |
        | migration? missing env vars?             |
        +------------------------------------------+
        +------------------------------------------+
        | CSS broken on live site                  |
        | Check: UseStaticFiles() in Program.cs    |
        | Paths use ~: href="~/css/site.css"       |
        +------------------------------------------+
        +------------------------------------------+
        | Redirect loop after deployment           |
        | UseHttpsRedirection() conflicts with     |
        | platform's HTTPS termination.            |
        | Fix: conditionally apply it.             |
        +------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "502 Bad Gateway is like calling a restaurant and getting no answer. The server is there but your app crashed. Check the logs — they'll tell you exactly what went wrong."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "My free tier app goes to sleep — is that a problem for the demo?"
        <strong>Short answer:</strong> No, just wait for it to wake up.
        <strong>Real answer:</strong> Render free tier spins down after 15 min of inactivity. The first request after idle takes ~30 seconds. This is normal. Mention it in your presentation: "The app sleeps to save resources — this is expected behavior on the free tier."
        <strong>The hidden question:</strong> "Should I upgrade?" -&gt; Not for a class project. The free tier is enough for a demo.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Should I commit my connection string to GitHub?"
        <strong>Short answer:</strong> NEVER.
        <strong>Real answer:</strong> Connection strings contain passwords. If you commit them, they're public forever. Use <code>appsettings.Production.json</code> (excluded from git via <code>.gitignore</code>) or environment variables on the platform.
        <strong>The hidden question:</strong> "How do I check if I already committed it?" -&gt; <code>git log -p -- appsettings.json</code> — if you see the connection string in the diff, rotate the password immediately.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The three things to check first: (1) Is your connection string set as an environment variable? (2) Did migrations run on the server? (3) Are you reading the platform's logs? Those fix 90% of deployment issues."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End with one action item: "If you only remember one thing: an app on the internet is real. An app on localhost is a draft. Today you shipped something real. Be proud of that."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. This is deployment and presentation week — keep lectures short, spend 70 min on deploy + demo. The live deployment demo is the most important moment — actually deploy an app during class, even if it takes time. The kitchen-to-restaurant analogy should be used repeatedly. The #1 deployment error is connection string issues — drill environment variables over hardcoded values. The presentation structure (1 min pitch, 4 min demo, 2 min architecture, 2 min challenges, 1 min AI) should be written on the board. Help every student get a live URL — that's the deliverable. Celebrate the moment they see their app on the internet for the first time.</p>
      <hr />
      <h2>Quick Reference Cards</h2>
      <h3>C# / VB Translation Card</h3>
      <table>
        <thead>
          <tr>
            <th>VB.NET</th>
            <th>C#</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><code>Dim x As Integer = 5</code></td>
          <td><code>int x = 5;</code></td>
        </tr>
        <tr>
          <td><code>Public Property Name As String</code></td>
          <td><code>public string Name &#123; get; set; &#125;</code></td>
        </tr>
        <tr>
          <td><code>If x &gt; 5 Then ... End If</code></td>
          <td><code>if (x &gt; 5) &#123; ... &#125;</code></td>
        </tr>
        <tr>
          <td><code>For i = 1 To 10</code></td>
          <td><code>for (int i = 1; i &lt;= 10; i++)</code></td>
        </tr>
        <tr>
          <td><code>Function Add(a, b) As Integer</code></td>
          <td><code>int Add(int a, int b)</code></td>
        </tr>
        <tr>
          <td><code>Nothing</code></td>
          <td><code>null</code></td>
        </tr>
        <tr>
          <td><code>&amp;</code> (string concat)</td>
          <td><code>+</code> or <code>$"..."</code></td>
        </tr>
        <tr>
          <td><code>arr(0)</code></td>
          <td><code>arr[0]</code></td>
        </tr>
      </tbody></table>
      <h3>HTTP Status Codes Cheat Sheet</h3>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Meaning</th>
            <th>What to do</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>200</td>
          <td>OK</td>
          <td>Everything worked</td>
        </tr>
        <tr>
          <td>201</td>
          <td>Created</td>
          <td>POST succeeded</td>
        </tr>
        <tr>
          <td>301</td>
          <td>Moved Permanently</td>
          <td>URL changed, update your links</td>
        </tr>
        <tr>
          <td>400</td>
          <td>Bad Request</td>
          <td>You sent bad data</td>
        </tr>
        <tr>
          <td>401</td>
          <td>Unauthorized</td>
          <td>Need to log in</td>
        </tr>
        <tr>
          <td>403</td>
          <td>Forbidden</td>
          <td>Logged in but not allowed</td>
        </tr>
        <tr>
          <td>404</td>
          <td>Not Found</td>
          <td>URL doesn't exist</td>
        </tr>
        <tr>
          <td>500</td>
          <td>Server Error</td>
          <td>The server broke (not your fault but you have to fix it)</td>
        </tr>
      </tbody></table>
      <h3>DI Registration Lifetimes</h3>
      <table>
        <thead>
          <tr>
            <th>Lifetime</th>
            <th>When created</th>
            <th>Use for</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><code>AddTransient</code></td>
          <td>Every time it's requested</td>
          <td>Lightweight, stateless services</td>
        </tr>
        <tr>
          <td><code>AddScoped</code></td>
          <td>Once per HTTP request</td>
          <td>DbContext, services with state per request</td>
        </tr>
        <tr>
          <td><code>AddSingleton</code></td>
          <td>Once for the app's lifetime</td>
          <td>Configuration, caching, logging</td>
        </tr>
      </tbody></table>
      <h3>EF Core Query Patterns</h3>
      <pre><code className="language-csharp">// Get all
      db.Products.ToListAsync()
      
      // Get one by ID
      db.Products.FindAsync(id)
      db.Products.FirstOrDefaultAsync(p =&gt; p.Id == id)
      
      // Filter
      db.Products.Where(p =&gt; p.Price &gt; 100).ToListAsync()
      
      // Include related data
      db.Products.Include(p =&gt; p.Category).ToListAsync()
      
      // Nested include
      db.Categories.Include(c =&gt; c.Products)
      .ThenInclude(p =&gt; p.Reviews).ToListAsync()
      
      // Projection (only specific fields)
      db.Products.Select(p =&gt; new &#123; p.Name, p.Price &#125;).ToListAsync()
      
      // Count
      db.Products.CountAsync()
      
      // Check existence
      db.Products.AnyAsync(p =&gt; p.Name == "Nintendo Switch")
      </code></pre>
      <h3>Security Checklist</h3>
      <ul>
        <li><input disabled="" type="checkbox" /> All POST forms include <code>@Html.AntiForgeryToken()</code></li>
        <li><input disabled="" type="checkbox" /> All POST actions have <code>[ValidateAntiForgeryToken]</code></li>
        <li><input disabled="" type="checkbox" /> Never use <code>@Html.Raw()</code> on user input</li>
        <li><input disabled="" type="checkbox" /> All database queries use LINQ (not <code>FromSqlRaw</code>)</li>
        <li><input disabled="" type="checkbox" /> <code>app.UseAuthentication()</code> is before <code>app.UseAuthorization()</code></li>
        <li><input disabled="" type="checkbox" /> HTTPS is enabled in production</li>
        <li><input disabled="" type="checkbox" /> Passwords are hashed (Identity does this automatically)</li>
        <li><input disabled="" type="checkbox" /> Error pages don't show stack traces in production</li>
      </ul>
      <hr />
      <p><em>End of Elective 2: Building Web Products — Full Lesson Content</em></p>
    </div>
  )
}
