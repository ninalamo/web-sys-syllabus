export default function Elective2BuildingWebProducts() {
  return (
    <div className="page-content">
      <h1>Elective 2: Building Web Products (Level 1)</h1>
      <h2>Course Philosophy</h2>
      <p>Concept-first, stack-agnostic lecture — ASP.NET Core as the concrete lab vehicle.
      Build real things. Uncover concepts as-needed. Learn by shipping.</p>
      <h2>Prerequisites</h2>
      <ul>
        <li>Basic HTML, CSS, JavaScript (not expert)</li>
        <li>VB.NET background (OOP concepts familiar, syntax translation needed)</li>
        <li>No prior web framework experience required</li>
      </ul>
      <h2>Term Structure</h2>
      <table>
        <thead>
          <tr>
            <th>Term</th>
            <th>Weeks</th>
            <th>Focus</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Prelim</td>
          <td>1–4</td>
          <td>C# for MVC + Web Foundations</td>
          <td>[GREEN] Familiar (VB-&gt;C# translation)</td>
        </tr>
        <tr>
          <td>Midterm</td>
          <td>5–8</td>
          <td>ASP.NET Core MVC — the hard part</td>
          <td>[RED] Hardest — full term</td>
        </tr>
        <tr>
          <td>PreFinals</td>
          <td>9–12</td>
          <td>Data &amp; Persistence + Consuming APIs</td>
          <td>[YELLOW] Medium</td>
        </tr>
        <tr>
          <td>Finals</td>
          <td>13–16</td>
          <td>User Interaction + Security + Capstone</td>
          <td>[YELLOW] Lighter + Integration</td>
        </tr>
      </tbody></table>
      <h2>Schedule</h2>
      <ul>
        <li>Saturday: 3 hours (lecture + lab, in-depth)</li>
        <li>Weekday: 1 hour online (applied — code review, debugging lab, standup, AI tool demo)</li>
      </ul>
      <hr />
      <h2>Prelim — C# for MVC + Web Foundations</h2>
      <p><strong>Goal:</strong> Translate VB.NET knowledge to C#, understand the web request lifecycle.</p>
      <h3>Learning Objectives</h3>
      <ul>
        <li>Write C# using idiomatic syntax (not VB translated literally)</li>
        <li>Use constructors, interfaces, and dependency injection</li>
        <li>Explain the HTTP request-response cycle</li>
        <li>Identify HTTP methods, status codes, and headers using browser DevTools</li>
        <li>Trace a request through the MVC pipeline</li>
      </ul>
      <h3>Week 1 — C# Translation Bootcamp</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Sat (3h)</strong></td>
          <td>C# syntax from VB</td>
          <td>Types, properties, methods, classes, <code>var</code>, string interpolation, LINQ. Live code: convert a VB WinForms class to C# console app.</td>
        </tr>
        <tr>
          <td><strong>Online (1h)</strong></td>
          <td>C# katas</td>
          <td>5 small exercises converting VB patterns to C# idioms.</td>
        </tr>
      </tbody></table>
      <p><strong>Deliverable:</strong> C# console app portfolio (FizzBuzz, calculator, etc.)</p>
      <p><strong>AI policy:</strong> No AI code gen. AI allowed for syntax explanation only.</p>
      <h3>Week 2 — Interfaces &amp; DI Mental Model</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Sat (3h)</strong></td>
          <td>What is a contract? Why controllers shouldn't create their own services. Console app with manual DI.</td>
          <td>Interface segregation, constructor injection, IoC container concept.</td>
        </tr>
        <tr>
          <td><strong>Online (1h)</strong></td>
          <td>DI playground</td>
          <td>Inject different implementations of <code>INotificationService</code> (Email, SMS, Console).</td>
        </tr>
      </tbody></table>
      <p><strong>Deliverable:</strong> DI demo console app</p>
      <h3>Week 3 — HTTP &amp; The Web</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Sat (3h)</strong></td>
          <td>Request/response lifecycle, URL structure, HTTP methods, status codes, headers, statelessness. DevTools network tab deep-dive.</td>
          <td>GET/POST/PUT/DELETE, status codes (200, 301, 401, 403, 500), caching headers.</td>
        </tr>
        <tr>
          <td><strong>Online (1h)</strong></td>
          <td>Trace a real website</td>
          <td>Map every request from browsing to a page loading. Identify methods, statuses, timing.</td>
        </tr>
      </tbody></table>
      <p><strong>Deliverable:</strong> HTTP trace report</p>
      <h3>Week 4 — MVC Big Picture</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Sat (3h)</strong></td>
          <td>Request -&gt; route -&gt; controller -&gt; model -&gt; view -&gt; response. Scaffold empty ASP.NET Core MVC project, walk through every file.</td>
          <td><code>Program.cs</code>, routing, <code>Controller</code>, <code>View</code>, <code>Model</code>, <code>cshtml</code>.</td>
        </tr>
        <tr>
          <td><strong>Online (1h)</strong></td>
          <td>Hello MVC</td>
          <td>Add a controller, view, model. Show the pipeline live.</td>
        </tr>
      </tbody></table>
      <p><strong>Deliverable:</strong> Hello MVC running locally</p>
      <hr />
      <h2>Midterm — ASP.NET Core MVC (The Hard Part)</h2>
      <p><strong>Goal:</strong> Build multi-page SSR apps with routing, controllers, views, and real data flow.</p>
      <h3>Learning Objectives</h3>
      <ul>
        <li>Define routes using convention and attribute routing</li>
        <li>Return different action result types (View, Redirect, Json, StatusCode)</li>
        <li>Build consistent UI with layouts, partial views, and tag helpers</li>
        <li>Bind form data to C# models with validation</li>
      </ul>
      <h3>Week 5 — Routing Deep-Dive</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Sat (3h)</strong></td>
          <td>Convention vs attribute routing, route parameters, route constraints. Build a multi-page site with navigation.</td>
          <td><code>&#123;controller&#125;/&#123;action&#125;/&#123;id&#125;</code>, <code>[Route]</code>, optional params, <code>LinkGenerator</code>.</td>
        </tr>
        <tr>
          <td><strong>Online (1h)</strong></td>
          <td>Debugging lab</td>
          <td>"Why is this route not matching?" — diagnose routing issues.</td>
        </tr>
      </tbody></table>
      <p><strong>Deliverable:</strong> Multi-page site with 3+ routes</p>
      <h3>Week 6 — Controllers &amp; Action Results</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Sat (3h)</strong></td>
          <td><code>IActionResult</code>, <code>View()</code>, <code>Redirect()</code>, <code>Json()</code>, <code>Content()</code>, <code>StatusCode()</code>. Returning different response types.</td>
          <td>Action methods, model binding (primitive), <code>[FromRoute]</code>, <code>[FromQuery]</code>.</td>
        </tr>
        <tr>
          <td><strong>Online (1h)</strong></td>
          <td>Code review</td>
          <td>Examine a controller and identify every type of action result.</td>
        </tr>
      </tbody></table>
      <p><strong>Deliverable:</strong> Controller portfolio with 5+ action result types</p>
      <h3>Week 7 — Views &amp; Layouts</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Sat (3h)</strong></td>
          <td>Razor syntax, Layout pages, Partial Views, View Components, Tag Helpers.</td>
          <td><code>@</code>, <code>@model</code>, <code>Layout</code>, <code>RenderBody()</code>, <code>PartialAsync</code>, <code>ViewComponent</code>.</td>
        </tr>
        <tr>
          <td><strong>Online (1h)</strong></td>
          <td>Refactor to Layout</td>
          <td>Take raw HTML pages and create a shared layout.</td>
        </tr>
      </tbody></table>
      <p><strong>Deliverable:</strong> Consistent themed site with layout</p>
      <h3>Week 8 — Model Binding &amp; Validation</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Sat (3h)</strong></td>
          <td>Form -&gt; C# object automatically. <code>[Bind]</code>, <code>[ValidateAntiForgeryToken]</code>, data annotations.</td>
          <td><code>[Required]</code>, <code>[StringLength]</code>, <code>[EmailAddress]</code>, <code>ModelState.IsValid</code>, client-side validation.</td>
        </tr>
        <tr>
          <td><strong>Online (1h)</strong></td>
          <td>Build a contact form</td>
          <td>Form posts -&gt; validated -&gt; display result or errors.</td>
        </tr>
      </tbody></table>
      <p><strong>Deliverable:</strong> Working contact form with validation</p>
      <hr />
      <h2>PreFinals — Data &amp; Persistence + Consuming APIs</h2>
      <p><strong>Goal:</strong> Store and retrieve data, talk to external services.</p>
      <h3>Learning Objectives</h3>
      <ul>
        <li>Define DbContext and entities for an application</li>
        <li>Create and apply database migrations</li>
        <li>Query data using LINQ with relationships</li>
        <li>Use IHttpClientFactory to consume external APIs</li>
        <li>Handle loading, error, and empty states</li>
      </ul>
      <h3>Week 9 — EF Core Fundamentals</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Sat (3h)</strong></td>
          <td>DbContext, DbSet, migrations, CRUD. From "just SQL" to ORM mental model.</td>
          <td><code>Add-Migration</code>, <code>Update-Database</code>, LINQ queries.</td>
        </tr>
        <tr>
          <td><strong>Online (1h)</strong></td>
          <td>Reverse engineer</td>
          <td>Existing DB -&gt; EF models. Compare hand-written SQL vs LINQ.</td>
        </tr>
      </tbody></table>
      <p><strong>Deliverable:</strong> First migration + seed data</p>
      <h3>Week 10 — Relationships &amp; Data Display</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Sat (3h)</strong></td>
          <td>Navigation properties, eager/lazy loading, <code>Include()</code>, <code>ToListAsync()</code>. Display related data in views.</td>
          <td><code>.Include()</code>, <code>.ThenInclude()</code>, navigation properties, foreign keys, <code>async</code>.</td>
        </tr>
        <tr>
          <td><strong>Online (1h)</strong></td>
          <td>Debugging lab</td>
          <td>N+1 query problem — identify, fix, measure performance difference.</td>
        </tr>
      </tbody></table>
      <p><strong>Deliverable:</strong> Data-driven page with related data</p>
      <h3>Week 11 — Consuming APIs with HttpClient</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Sat (3h)</strong></td>
          <td><code>IHttpClientFactory</code>, JSON serialization, error handling. Fetch data from a public API and display.</td>
          <td><code>GetFromJsonAsync</code>, serialization, try-catch, null checks.</td>
        </tr>
        <tr>
          <td><strong>Online (1h)</strong></td>
          <td>API scavenger hunt</td>
          <td>Find, call, display data from 3 different public APIs.</td>
        </tr>
      </tbody></table>
      <p><strong>Deliverable:</strong> API dashboard (weather + news + GitHub stats)</p>
      <h3>Week 12 — Mini-Capstone Checkpoint</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Sat (3h)</strong></td>
          <td>Integrate DB + external API into one app. Student choice (task manager with weather? blog with GitHub stats?).</td>
          <td>Integration patterns, separation of concerns, Service layer.</td>
        </tr>
        <tr>
          <td><strong>Online (1h)</strong></td>
          <td>Peer review</td>
          <td>Present architecture diagram, get feedback.</td>
        </tr>
      </tbody></table>
      <p><strong>Deliverable:</strong> Running integrated app</p>
      <hr />
      <h2>Finals — User Interaction + Security + Capstone</h2>
      <p><strong>Goal:</strong> Polish, secure, deploy, and present.</p>
      <h3>Learning Objectives</h3>
      <ul>
        <li>Implement cookie-based authentication with ASP.NET Core Identity</li>
        <li>Identify and prevent XSS, CSRF, and SQL injection</li>
        <li>Plan and execute a full-stack web project independently</li>
        <li>Deploy a web application to a cloud platform</li>
      </ul>
      <h3>Week 13 — Authentication &amp; Authorization</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Sat (3h)</strong></td>
          <td>Cookie auth, <code>[Authorize]</code>, roles, register/login/logout. ASP.NET Core Identity scaffold.</td>
          <td>Identity, <code>SignInManager</code>, <code>UserManager</code>, <code>[Authorize]</code>, roles.</td>
        </tr>
        <tr>
          <td><strong>Online (1h)</strong></td>
          <td>Add auth</td>
          <td>Take previous app, add login, protect routes.</td>
        </tr>
      </tbody></table>
      <p><strong>Deliverable:</strong> App with login gate</p>
      <h3>Week 14 — Security Fundamentals</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Sat (3h)</strong></td>
          <td>XSS (Razor auto-encodes), SQL injection (EF prevents), CSRF (antiforgery token), HTTPS. OWASP quick tour.</td>
          <td>Auto-encoding, <code>[ValidateAntiForgeryToken]</code>, parameterized queries, CSP headers.</td>
        </tr>
        <tr>
          <td><strong>Online (1h)</strong></td>
          <td>Security audit lab</td>
          <td>Given a vulnerable app, find and fix 5 security flaws.</td>
        </tr>
      </tbody></table>
      <p><strong>Deliverable:</strong> Security audit report</p>
      <h3>Week 15 — Capstone Sprint</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Sat (3h)</strong></td>
          <td>Build complete web app from scratch. User stories -&gt; schema -&gt; routes -&gt; UI -&gt; auth.</td>
          <td>Kanban board, feature branches, daily commits.</td>
        </tr>
        <tr>
          <td><strong>Online (1h)</strong></td>
          <td>Sprint review</td>
          <td>Demo progress, get feedback, adjust scope.</td>
        </tr>
      </tbody></table>
      <p><strong>Deliverable:</strong> Capstone sprint delivery</p>
      <h3>Week 16 — Capstone Final</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Topic</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Sat (3h)</strong></td>
          <td>Polish, deploy, final testing. Deployment to Render/Railway/Azure.</td>
          <td>Full product cycle, environment config, deployment pipeline.</td>
        </tr>
        <tr>
          <td><strong>Online (1h)</strong></td>
          <td>Final presentations</td>
          <td>10-min demo + 5-min Q&amp;A per student. Oral defense of architecture decisions.</td>
        </tr>
      </tbody></table>
      <p><strong>Deliverable:</strong> Deployed capstone + source code + presentation</p>
      <hr />
      <h2>AI / Vibe-Coding Integration</h2>
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>Policy</th>
            <th>Rationale</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Prelim (Weeks 1–4)</strong></td>
          <td>No AI code gen. AI for explanation and debugging help only.</td>
          <td>Build foundational mental models. Students must type every line.</td>
        </tr>
        <tr>
          <td><strong>Midterm (Weeks 5–8)</strong></td>
          <td>AI as debugging tutor. "Why is this not working?" style queries.</td>
          <td>Learn to diagnose problems before learning to generate solutions.</td>
        </tr>
        <tr>
          <td><strong>PreFinals (Weeks 9–12)</strong></td>
          <td>AI as pair programmer. Students must comment every AI-generated line explaining what it does.</td>
          <td>Transition period. Students learn to evaluate AI output.</td>
        </tr>
        <tr>
          <td><strong>Finals (Weeks 13–16)</strong></td>
          <td>Full AI allowed. Submission includes: prompt log + code review of AI output + oral defense.</td>
          <td>Mirror industry reality. Students act as architects/reviewers.</td>
        </tr>
      </tbody></table>
      <h3>Core Principles</h3>
      <ul>
        <li><strong>Read before you generate</strong> — understand manually written code before using AI</li>
        <li><strong>Assume the AI got something wrong; find it</strong> — audit mentality</li>
        <li><strong>Prompt literacy</strong> — teach prompt patterns as a meta-skill</li>
        <li><strong>Attribution</strong> — document what AI generated vs. what you wrote</li>
      </ul>
      <hr />
      <h2>Cross-Cutting Practices</h2>
      <table>
        <thead>
          <tr>
            <th>Practice</th>
            <th>Integration</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><strong>Git</strong></td>
          <td>Week 1: init/commit/push. Week 8: branching. Finals: feature branches</td>
        </tr>
        <tr>
          <td><strong>Kanban</strong></td>
          <td>Introduced Midterm week 1. PreFinals: sprint planning. Finals: full sprint</td>
        </tr>
        <tr>
          <td><strong>Debugging</strong></td>
          <td>Dedicated lab each term (Weeks 5, 10) + online sessions</td>
        </tr>
        <tr>
          <td><strong>Code Review</strong></td>
          <td>Week 12 peer review. Finals PR-based workflow</td>
        </tr>
        <tr>
          <td><strong>Deployment</strong></td>
          <td>Week 16 cloud deployment (Render / Railway / Azure)</td>
        </tr>
      </tbody></table>
      <h2>Grading Breakdown (Suggested)</h2>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Weekly deliverables (6)</td>
          <td>30%</td>
        </tr>
        <tr>
          <td>Midterm project</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>PreFinals checkpoint</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>Finals capstone</td>
          <td>30%</td>
        </tr>
      </tbody></table>
    </div>
  )
}
