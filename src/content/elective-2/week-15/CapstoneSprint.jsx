export default function CapstoneSprint() {
  return (
    <div className="page-content">
      <h2>Week 15: Capstone Sprint</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 14: Security Fundamentals"<br />
        🎯 This week: "Everything comes together — build your capstone project from scratch using everything you've learned"<br />
        <br />
        <strong>Core Concepts:</strong><br />
        ▸ A. Architecture Review (7 min)<br />▸ B. Minimum Viable Product (7 min)<br />▸ C. Vertical Slicing (6 min)<br />▸ D. Git Workflow (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality (sprint planning) + AI Integration + Capstone Sprint deliverables<br />
        <br />
        ✅ By end of lab: Plan first; write user stories; design schema; sketch routes; build vertically; first feature working end-to-end
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
          <td>Lecture + Slides + Planning Framework</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>25 min</td>
          <td>Live Code (project scaffolding + structure)</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>70 min</td>
          <td>Lab (capstone build session)</td>
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
        <p>[TIP] <strong>Teaching Tip (Week 15 strategy):</strong> This is NOT a teaching week — it's a building week. Keep lectures short. Students should spend 70+ minutes coding. The planning framework (user stories, schema design, Kanban) is the most important thing you'll teach this week — students who skip planning will waste hours. Walk around constantly. This week reveals who actually learned the material. Be supportive but honest.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "No more exercises. No more tutorials. You have one week to build whatever you want. You pick the idea. You design the schema. You build the routes. You ship it. This is your portfolio piece. Make it count."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "This Is Your Portfolio Piece"<br />Three screenshots: a GitHub repo with green contribution squares, a deployed app URL, and a resume with "Full-Stack Web Developer" listed.<br />Subtitle: "What you build this week is what you show in interviews."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Deliver this with energy but also warmth. Some students are genuinely anxious about building something from scratch. Acknowledge it: "It's okay to be nervous. You have all the pieces from Weeks 1-14. Today we just put them together."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "This is the final boss level. You've been grinding XP all semester — MVC, EF Core, APIs, auth, security. Now you face the boss: build a real app. You have all the skills. You just need to combine them."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you're nervous about building something from scratch. Good. That means you care. Now let's do it."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Don't panic. This isn't a test. It's a sprint. You'll build something small but complete. If you can do a controller, a model, a view, and a database query — you can do this."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This is week 15 of your startup. You've done customer research — that's the previous weeks learning the tools. You know your tech stack — ASP.NET Core, EF Core, Identity. Now it's time to build the MVP: Minimum Viable Product. Not the perfect product. The shippable product. Features you can't finish? Cut them. Bugs that don't crash things? Ship them anyway. You can fix them in the next sprint."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the MVP triangle:</p>
        <pre><code>       Perfect
        /\
        /  \
        /    \
        / MVP  \   &lt;- Ship THIS
        /________\
        Fast     Good
      </code></pre>
      <p>Below: "Pick two: Fast + Good = MVP. Perfect comes later."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The MVP concept is critical — students will try to build too much. Emphasize: <strong>scope is your enemy.</strong> A working app with 3 features beats a broken app with 10. Draw the triangle and leave it on the board for the entire session.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "What's ONE feature your app absolutely needs to work? Not 'nice to have' — NEEDS. 10 seconds, go!" (Then ask 2-3 people to share. Reinforce: "That's your MVP. Everything else is bonus.")</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like a TikTok video. You don't need fancy effects, transitions, and music. You need one clear idea that works. Your app is the same — one core feature that works well."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>20 min</span> Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 20 min total (7 min planning -&gt; 7 min vertical slicing -&gt; 6 min git workflow)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here's how to plan a capstone in one week. Day 1-2: plan before you code. Define user stories, design your schema, sketch your routes. Day 3-5: build vertically — one feature at a time, full stack. Day 6-7: polish and deploy. Don't build horizontally — don't do all your models first, then all your controllers. You won't see progress."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the user story template: "As a [role], I want to [action] so that [benefit]." Then reveal 3 examples. Then show the Kanban board: To Do -&gt; In Progress -&gt; Done.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The most important concept: <strong>build vertically, not horizontally.</strong> Students will want to create all models first, then all controllers, then all views. This is wrong — they won't see anything working until the very end. Instead: pick one feature, build it from database to view, test it, then move to the next feature.</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "If you have 5 features and 5 days — do you build all 5 databases on day 1, or do you build one complete feature per day?" (Answer: One complete feature per day. You'll have 5 working features instead of 5 half-built ones.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Building vertically is like cooking one dish at a time instead of prepping all ingredients for 5 dishes. You get to eat (see progress) after each dish, not at the very end."<br /><strong>-&gt; Phone moment:</strong> "Open GitHub Projects or Trello on your phone. Create three columns: To Do, Doing, Done. Add your features as cards. Move them as you work. This is how real teams track work."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "How many features should I aim for?"
        <strong>Short answer:</strong> 3 core features minimum.
        <strong>Real answer:</strong> The requirements say 3+ tables, 1+ relationship, auth, API, service layer, validation, layout. That's your baseline. Any features beyond that are bonus. Don't over-scope.
        <strong>The hidden question:</strong> "What if I finish early?" -&gt; Add polish: better styling, error messages, loading states. Not more features.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Should I use feature branches?"
        <strong>Short answer:</strong> Yes, but keep it simple.
        <strong>Real answer:</strong> Create one branch per feature: <code>feat-auth</code>, <code>feat-tasks</code>, <code>feat-api</code>. Merge into <code>main</code> when the feature works. If you're working solo, you can commit directly to <code>main</code> — but branches are good practice.
        <strong>The hidden question:</strong> "Is git required?" -&gt; Yes. Your deliverable is a GitHub repo.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the planning framework for a second. Just answer: what does your app DO? Write that in one sentence. Then list the 3 things a user needs to do. Build those 3 things. That's your capstone."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min (5 min project scaffold -&gt; 10 min folder structure -&gt; 10 min Program.cs template)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's scaffold a capstone project from scratch. Watch how the folder structure maps to the architecture: Controllers handle HTTP, Services handle logic, Models handle data, Views handle display. Everything connects through Program.cs."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the project structure diagram first — the folder tree with Controllers, Models, ViewModels, Services, Views, wwwroot. Then reveal the Program.cs template with all registrations highlighted.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type this live.</strong> Scaffold the project, create the folders, and build the Program.cs step by step. After each registration line, explain what it enables: "This line adds MVC. This line adds the database. This line adds Identity. This line adds HttpClient. This line adds your service."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the dependency flow:</p>
        <pre><code>Program.cs wires everything:
        AddControllersWithViews()  -&gt; MVC pipeline
        AddDbContext()             -&gt; Database
        AddDefaultIdentity()       -&gt; Auth
        AddHttpClient()            -&gt; API calls
        AddScoped&lt;IService, Svc&gt;() -&gt; Your service
      
        Controller -&gt; Service -&gt; DbContext -&gt; Database
        -&gt; HttpClient -&gt; API
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Type-along:</strong> "Scaffold the project with me. Create the folders. Build Program.cs. This is your starting template. Every capstone starts here."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Do I need all these packages for a simple app?"
        <strong>Short answer:</strong> No. Only add what you need.
        <strong>Real answer:</strong> The template includes Identity, EF Core, and HttpClient because the requirements ask for auth, database, and API integration. If your app doesn't need one of these, skip it. But the capstone requirements require all three.
        <strong>The hidden question:</strong> "Can I add more later?" -&gt; Yes. <code>dotnet add package</code> works anytime.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with the minimum: MVC + EF Core + Identity. Get those working. Then add HttpClient for the API. Then add your service layer. One piece at a time."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>70 min</span> Exercise: Capstone Sprint Delivery</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 70 min total (5 min planning -&gt; 60 min build -&gt; 5 min quick share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Choose a project idea or propose your own. Plan first — write your user stories, design your schema, sketch your routes. Then build vertically — one feature at a time. You have 60 minutes of build time. I'll be walking around helping."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Project ideas:</p>
        <ol>
          <li><strong>Task Manager Pro</strong> — Users, tasks, categories, due dates, priority, reminders API</li>
          <li><strong>Recipe Box</strong> — Users, recipes, ingredients, categories, search, meal planner</li>
          <li><strong>Book Tracker</strong> — Users, books, reading logs, ratings, reviews, Google Books API</li>
          <li><strong>Study Group App</strong> — Users, study groups, flashcards, quiz scores, study timer</li>
          <li><strong>Personal Budget</strong> — Users, expenses, categories, monthly summaries, charts</li>
        </ol>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This is a build session, not a lecture. Walk around constantly. The first 15 minutes should be planning — make students write user stories and sketch their schema before they code. The "aha" moment is when they get their first feature working end-to-end (database -&gt; service -&gt; controller -&gt; view).</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Work in pairs or solo:</strong> "This is your mini-capstone. Treat it like a real project. Plan first, then code. Draw your architecture diagram before you write a single line."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-exercise check-in (at 30 min):</strong> "How many have at least one feature working end-to-end?" (Show of hands.) "How many have authentication working?" "If you're stuck, raise your hand — I'll come over."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with the database. Define your models. Create the DbContext. Run the migration. Get data displaying on a page. Then add authentication. Then add the API. Then add the service layer. One layer at a time."</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This capstone is what you show in interviews. 'Build a complete web app' demonstrates you understand the full stack — database design, backend architecture, frontend rendering, authentication, deployment. A GitHub repo with a running app gets you hired faster than any certificate."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Screenshot of a real job posting for ".NET Developer" with "Portfolio/GitHub required" highlighted. Label: "This is what employers want to see."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. Connect it directly to job hunting: "When an interviewer asks 'show me something you built,' you'll show them this capstone. A deployed URL beats a certificate every time."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you have a GitHub profile?" (Some hands.) "By the end of this week, your GitHub will have something real on it. Not a tutorial. Not an exercise. Your app."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to build the next Facebook. You need to build something that works, that you can explain, and that you're proud of. That's enough."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Full AI is allowed this week. Use it for code generation, debugging, architecture suggestions, styling. But for every AI-generated code block, add a comment: <code>// AI-generated: reviewed by [your name]</code>. This tracks what came from AI vs what you wrote."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> AI tracking requirement:</p>
        <table>
          <thead>
            <tr>
              <th>Requirement</th>
              <th>What it means</th>
            </tr>
          </thead>
          <tbody><tr>
            <td>Comment every AI block</td>
            <td><code>// AI-generated: reviewed by Juan</code></td>
          </tr>
          <tr>
            <td>Prompt log</td>
            <td>Save every prompt you used</td>
          </tr>
          <tr>
            <td>Code review</td>
            <td>Document what AI got wrong</td>
          </tr>
        </tbody></table>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Demonstrate the workflow: (1) Ask AI for code, (2) Review it, (3) Add the comment, (4) Test it. "AI generates the code, but YOU understand it. The comment is your signature — you're saying 'I reviewed this and it's correct.'"</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'co-pilot' this week — it suggests code, you steer. If you can't explain what the code does, you didn't review it. And if you didn't review it, you can't defend it."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common issues -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the capstone pitfalls you'll face this week. Most of them aren't technical — they're about scope and time management."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Pitfall cards:</p>
        <pre><code>+------------------------------------------+
        | Scope creep                              |
        | You want to build Instagram but you have |
        | 1 week. Pick 3 core features. Cut rest.  |
        +------------------------------------------+
        +------------------------------------------+
        | Saving the hardest part for last         |
        | Build the hard thing first. If it fails, |
        | you have time to adjust.                 |
        +------------------------------------------+
        +------------------------------------------+
        | Not committing                           |
        | Commit after every working feature.      |
        | If something breaks, you can roll back.  |
        +------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Scope creep is like adding toppings to a pizza until it collapses. Three toppings = delicious. Ten toppings = a mess. Pick your three core features and stick to them."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "My database schema is wrong — do I need to start over?"
        <strong>Short answer:</strong> No. Use migrations to change it.
        <strong>Real answer:</strong> Create a new migration: <code>dotnet ef migrations add UpdateSchema</code>. Then apply it: <code>dotnet ef database update</code>. If the migration fails because of existing data, you can delete the database and start fresh (it's a class project, not production).
        <strong>The hidden question:</strong> "Will I lose my data?" -&gt; Yes, if you delete the database. But for a class project, that's fine.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The two things to focus on: (1) Do you have at least one feature working end-to-end? If not, drop everything else and make it work. (2) Is your code committed to GitHub? If not, commit now. Those are the minimum deliverables."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End with one action item: "If you only remember one thing: a working app with 3 features beats a broken app with 10. Ship what works."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. This is a build week — keep lectures short (70 min build time), walk around constantly. The MVP triangle should be drawn on the board and left there. The #1 pitfall is scope creep — students try to build too much. Reinforce "3 core features, ship what works." The vertical slicing concept (build one feature end-to-end before starting the next) is the most important planning lesson. AI is fully allowed but requires tracking comments on every generated block. Be supportive: students are nervous about building from scratch. Celebrate small wins: "Your first feature works? That's huge."</p>
      <hr />
    </div>
  )
}
