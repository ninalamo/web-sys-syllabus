export default function AuthenticationAndAuthorization() {
  return (
    <div className="page-content">
      <h2>Week 13: Authentication &amp; Authorization</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 12: Mini Capstone Checkpoint"<br />
        🎯 This week: "Add user accounts — authentication tells us who you are, authorization controls what you can do"<br />
        <br />
        <strong>Core Concepts:</strong><br />
        ▸ A. Auth vs Authz (8 min)<br />▸ B. Identity Scaffold Setup (7 min)<br />▸ C. Protecting Routes with `[Authorize]` (5 min)<br />▸ D. SignInManager vs UserManager (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> The 'Why Should I Care?' + AI Integration + Identity Scaffold exercise deliverables<br />
        <br />
        ✅ By end of lab: Add Identity packages; register Identity; scaffold pages; add `[Authorize]`; show user name; create Admin role
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
          <td>Lecture + Slides + Code Walkthrough</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>35 min</td>
          <td>Live Code (instructor + students type)</td>
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
          <td>5 min</td>
          <td>Overflow</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 13 strategy):</strong> This is the first week students deal with user identity — a conceptually heavy shift from "data in tables" to "people with accounts." The scaffolding commands will feel magical but confusing. Make them type every command themselves. The critical pipeline order (<code>UseAuthentication</code> before <code>UseAuthorization</code>) is the #1 error — write it on the board and leave it there.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "That 'Login with Google' button isn't magic. It's a session cookie. And yes, you're going to build the entire login system from scratch. Well, ASP.NET Core Identity does most of the work — but you'll understand what it's doing. If you can't log in, you can't post. If you can't post, what's even the point?"</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "Who Are You?"<br />Left: A login screen from a familiar app (Facebook, GCash, or Canvas).<br />Right: The same app's dashboard after login, with the user's name visible.<br />Subtitle: "Today you build the gate between these two screens."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This hook should feel urgent — authentication is the feature that separates toy apps from real products. Ask: "How many of you logged into something today?" (All hands.) "Every single one of those was built by someone who learned exactly what we're learning today."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Every app you use has a bouncer at the door. That bouncer checks your ID, gives you a wristband, and decides which rooms you can enter. Today you become the bouncer."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you've ever been locked out of an account because you forgot your password. Today you'll learn how that lock works."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Don't worry if this feels abstract. Authentication is just: prove who you are, get a cookie, show the cookie on every page. That's the entire concept. We're just learning the code that makes it happen."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Authentication is a VIP wristband at a club. You show your ID at the front desk — that's registration. They check it, give you a wristband — that's your session cookie. Now the bouncer looks at your wristband and lets you in — that's <code>[Authorize]</code>. Different wristband colors mean different access: green for regular, gold for VIP, black for staff. And at closing time, the wristband expires — that's session timeout."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the club analogy:</p>
        <pre><code>Front Desk (Register) -&gt; Wristband (Cookie) -&gt; Bouncer ([Authorize])
        v
        Green -&gt; Main floor (regular user)
        Gold  -&gt; VIP area (premium)
        Black -&gt; Back office (admin)
      </code></pre>
      <p>Below: "Register -&gt; Cookie -&gt; Authorize. That's the entire auth flow."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The club analogy works well for Filipino students — many have experienced wristband-based venues. Emphasize the key insight: <strong>the cookie IS the wristband.</strong> The server doesn't remember you — it checks the cookie on every request. This connects back to Week 3's statelessness.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "If the wristband is your cookie, what happens when you close your browser? Does the wristband disappear? 10 seconds, go!" (Answer: Depends — if it's a session cookie, yes. If "remember me," it persists.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like GCash. You log in once, and the app remembers you for a while. That 'remembering' is a cookie. When you log out, the cookie is deleted. Next time you open GCash, you need to log in again."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (8 min auth vs authz -&gt; 10 min Identity setup -&gt; 7 min protecting routes)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here's the distinction you MUST know: authentication is 'who are you?' and authorization is 'what are you allowed to do?' You can be authenticated — I know your name — but not authorized — you can't access the admin panel. ASP.NET Core Identity handles both, and it does the hard stuff for you: password hashing, cookie management, session handling."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the <code>AddDefaultIdentity</code> configuration one option at a time. Highlight <code>RequireConfirmedAccount = false</code> — explain why we disable it for class projects. Then show <code>RequireDigit</code> and <code>RequiredLength</code> — these are the password rules students will encounter.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The most important concept: <strong><code>IdentityUser</code> is just a model with special properties.</strong> Students already know models — build on that. For <code>SignInManager</code> vs <code>UserManager</code>, emphasize: "SignInManager handles sessions. UserManager handles user data. One logs you in, the other creates your account."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "If I put <code>[Authorize]</code> on a controller — what happens when an unauthenticated user visits?" (Answer: They get redirected to the login page.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Auth vs Authz is like your school ID. Authentication = the guard checks your ID and says 'yes, you're a student here.' Authorization = the guard says 'you're a student, but you can't enter the faculty lounge.' Same ID, different access levels."<br /><strong>-&gt; Phone moment:</strong> "Open any app that requires login. Look at what you can do vs what an admin can do. That difference is authorization."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why can't I just store passwords in the database?"
        <strong>Short answer:</strong> Because if your database is breached, every password is exposed.
        <strong>Real answer:</strong> Identity hashes passwords using a one-way algorithm. Even if someone steals your database, they can't reverse the hash to get the original password. Rolling your own password storage is one of the most common security mistakes.
        <strong>The hidden question:</strong> "Can I see the hashed password?" -&gt; Yes, but it looks like gibberish. That's the point.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What's the difference between SignInManager and UserManager?"
        <strong>Short answer:</strong> SignInManager handles login/logout sessions. UserManager handles user data.
        <strong>Real answer:</strong> <code>UserManager.CreateAsync()</code> creates the user record. <code>SignInManager.SignInAsync()</code> sets the authentication cookie. You need both for a complete registration flow.
        <strong>The hidden question:</strong> "Why two managers?" -&gt; Separation of concerns. One manages identity data, the other manages sessions.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the manager names. The flow is: (1) User fills registration form. (2) UserManager creates the account. (3) SignInManager logs them in. (4) They get a cookie. (5) Every page checks the cookie. That's it."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>35 min</span> Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 35 min (5 min packages -&gt; 10 min Program.cs -&gt; 10 min scaffold -&gt; 10 min protect + test)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's add Identity to an existing project step by step. Watch how each piece connects — the packages, the DbContext change, the Program.cs registration, and finally the scaffolded pages that just work."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the Program.cs changes with the critical line highlighted: <code>app.UseAuthentication()</code> MUST come before <code>app.UseAuthorization()</code>. Use a red arrow between them labeled "ORDER MATTERS."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type this live, don't paste.</strong> When you type the middleware order, pause dramatically: "If you swap these two lines, authentication breaks. The bouncer checks authorization before checking identity. Nothing gets in." Make the deliberate mistake of putting <code>UseAuthorization</code> first — show the error, then fix it.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the middleware pipeline:</p>
        <pre><code>Request -&gt; UseStaticFiles -&gt; UseRouting -&gt; UseAuthentication -&gt; UseAuthorization -&gt; Controller
        v
        No cookie? -&gt; Redirect to Login
        Has cookie? -&gt; Continue to Controller
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Type-along:</strong> "Run the package install commands with me. Then update your DbContext. Then Program.cs. Then scaffold. Watch the Identity pages appear. That's the moment your app gets a login system."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What does <code>dotnet aspnet-codegenerator identity</code> actually do?"
        <strong>Short answer:</strong> It generates the login, register, and logout pages for you.
        <strong>Real answer:</strong> It creates Razor Pages (not MVC views) in an <code>/Identity/Account/</code> folder with all the logic for registration, login, logout, password reset, etc. You didn't write any of it — Microsoft did. But now you know where to find it.
        <strong>The hidden question:</strong> "Can I customize these pages?" -&gt; Yes. The scaffolded files are yours to edit.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Let's do the absolute minimum: add the packages, update DbContext, register Identity in Program.cs, and scaffold. Skip the custom controllers for now. Get the built-in login page working first."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> Exercise: App with Login Gate</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min coding -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Take any previous project and add Identity. Lock down the main pages behind login. Show the user's name in the navbar. Create an admin role. You have 40 minutes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> Add ASP.NET Core Identity packages</li>
          <li><input disabled="" type="checkbox" /> Update DbContext to inherit from <code>IdentityDbContext</code></li>
          <li><input disabled="" type="checkbox" /> Register Identity in Program.cs (auth before authz!)</li>
          <li><input disabled="" type="checkbox" /> Scaffold Identity pages</li>
          <li><input disabled="" type="checkbox" /> Add <code>[Authorize]</code> to at least one controller</li>
          <li><input disabled="" type="checkbox" /> Show <code>@User.Identity.Name</code> in the navbar</li>
          <li><input disabled="" type="checkbox" /> Add Logout button</li>
          <li><input disabled="" type="checkbox" /> Bonus: Create an "Admin" role and restrict one action</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Circulate during the first 15 minutes — Identity setup is where students get stuck. The "aha" moment is when they visit a protected page and get redirected to the login screen. Walk around and celebrate that moment.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "One person handles the Identity setup (packages, DbContext, Program.cs), the other handles the views (navbar, logout button). Then combine and test together."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-exercise check-in (at 20 min):</strong> "How many have the login page working?" (Show of hands.) "How many have a protected page that redirects to login?" "If neither, let's do a quick group debug."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with just the packages and Program.cs. Get Identity registered. Then scaffold the pages. Test the login. Then add <code>[Authorize]</code> to a controller. One step at a time."</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Authentication is in every app that has users. E-commerce, social media, banking, email, your school's portal. If you can't implement login/logout/signup, you can't build a real product. ASP.NET Core Identity handles hashing, session management, cookie security, and password policies — all the things you'd get wrong if you rolled your own."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Screenshot of a real breach headline (e.g., a company that stored plaintext passwords). Label: "This company didn't hash passwords. 2 million accounts exposed. Don't be this company."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. The security angle is the strongest argument: "Identity handles the hard stuff so you don't accidentally leak passwords."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you use the same password for multiple accounts?" (Some hands will go up nervously.) "That's why companies need to hash passwords. Even if one site gets breached, your password on other sites is still safe."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to understand cryptography today. Just know: Identity handles passwords securely. Use it. Don't roll your own."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week marks a policy shift: FULL AI ALLOWED. AI can generate anything. But you must submit a prompt log, a code review of what AI got wrong, and be ready for an oral defense. You're not just using AI — you're auditing it."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> New AI policy:</p>
        <table>
          <thead>
            <tr>
              <th>Requirement</th>
              <th>What it means</th>
            </tr>
          </thead>
          <tbody><tr>
            <td>Prompt log</td>
            <td>Save every prompt you used</td>
          </tr>
          <tr>
            <td>Code review</td>
            <td>Document what AI got wrong and what you fixed</td>
          </tr>
          <tr>
            <td>Oral defense</td>
            <td>Explain why you chose certain patterns</td>
          </tr>
        </tbody></table>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Frame this positively: "You've earned full AI access because you understand the fundamentals now. But with great power comes great responsibility. If AI generates code you can't explain, you don't understand it."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'senior developer' now — it writes code, you review it. If you can't explain what it does, you can't ship it. That's how real code reviews work."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the Identity errors you WILL see this week. Let's go through them so you don't spend 20 minutes Googling."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+------------------------------------------+
        | Identity tables not created              |
        | Run: dotnet ef migrations add AddIdentity|
        | Then: dotnet ef database update          |
        +------------------------------------------+
        +------------------------------------------+
        | [Authorize] -&gt; blank page                 |
        | Login path not configured. Add:          |
        | options.LoginPath = "/Identity/..."      |
        +------------------------------------------+
        +------------------------------------------+
        | @User.Identity.Name is empty             |
        | UseAuthentication() must come BEFORE     |
        | UseAuthorization() in Program.cs         |
        +------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Blank page on [Authorize] is like showing up to a party with no address. The bouncer knows you're invited but doesn't know where to send you. Fix: tell the bouncer where the login page is."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does the password policy require a special character? That's annoying."
        <strong>Short answer:</strong> It's the default. You can change it.
        <strong>Real answer:</strong> The default policy requires uppercase, digit, special char, and 8+ chars. For class projects, you can relax it: <code>options.Password.RequireNonAlphanumeric = false</code>. In production, keep it strict.
        <strong>The hidden question:</strong> "How do I change it?" -&gt; In the <code>AddDefaultIdentity</code> options block.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The three things to check first: (1) Did you run the Identity migration? (2) Is <code>UseAuthentication()</code> before <code>UseAuthorization()</code>? (3) Did you scaffold the Identity pages? Those fix 90% of Identity issues."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End with one action item: "If you only remember one thing: <code>UseAuthentication()</code> before <code>UseAuthorization()</code>. The order matters. Every time."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. The critical concept is the middleware pipeline order — <code>UseAuthentication</code> before <code>UseAuthorization</code> — write it on the board and leave it there. The club/wristband analogy should be used repeatedly. The #1 error is forgetting the Identity migration — drill <code>dotnet ef migrations add AddIdentity</code> followed by <code>dotnet ef database update</code>. The "aha" moment is the redirect to login on a protected page — make sure every student sees it happen. Full AI access begins this week, but with audit requirements (prompt log, code review, oral defense).</p>
      <hr />
    </div>
  )
}
