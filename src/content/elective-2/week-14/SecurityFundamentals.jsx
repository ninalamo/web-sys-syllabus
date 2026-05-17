export default function SecurityFundamentals() {
  return (
    <div className="page-content">
      <h2>Week 14: Security Fundamentals</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 13: Authentication &amp; Authorization"<br />
        🎯 This week: "Lock the doors and windows — learn about XSS, SQL injection, and CSRF so you can build apps that don't get hacked"<br />
        <br />
        <strong>Core Concepts:</strong><br />
        ▸ A. XSS (Cross-Site Scripting) (7 min)<br />▸ B. SQL Injection (7 min)<br />▸ C. CSRF (6 min)<br />▸ D. HTTPS &amp; OWASP Top 10 (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality (RA 10173 / Philippines Data Privacy) + AI Integration + Security Audit Report exercise<br />
        <br />
        ✅ By end of lab: Find SQL injection; find missing anti-forgery token; find XSS via `@Html.Raw()`; write fixes for all
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
          <td>Lecture + Slides + Vulnerability Demos</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>35 min</td>
          <td>Live Code (vulnerable -&gt; secure transformation)</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Lab (security audit + fix)</td>
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
        <p>[TIP] <strong>Teaching Tip (Week 14 strategy):</strong> This is the week where students learn that their apps are vulnerable by default. The XSS demo — actually running <code>&lt;script&gt;alert('hacked')&lt;/script&gt;</code> in their own app — is the most memorable moment. Do it live. Let them see it happen. Then show how Razor auto-encoding prevents it. The OWASP Top 10 should feel like a checklist, not a textbook.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Someone out there wants to steal your users' data. Not because they hate you — because your app has vulnerabilities. And if you don't fix them, you're legally liable. Today we learn about the three horsemen of the web apocalypse: XSS, SQL injection, and CSRF."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "Your App Is Vulnerable (And That's Okay)"<br />Three attack icons: a script tag (XSS), a SQL query with a skull (SQL injection), and a fake form (CSRF).<br />Subtitle: "Today we learn how to lock the doors."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This hook should feel alarming but not paralyzing. Follow up immediately with: "The good news? ASP.NET Core already protects you from most of these. You just need to know what to turn on and what NOT to turn off."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Every app you use has been hacked at some point. Facebook, Twitter, even your school's portal. The difference between a breached app and a secure one isn't talent — it's knowing the common attacks and how to prevent them."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you've ever seen a website where you could type HTML and it actually rendered. That's an XSS vulnerability."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Don't panic. You're not building a banking app. But the same principles apply: never trust user input, always encode output, always use parameterized queries. These three rules cover 90% of security."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Your web app is a house. XSS lets attackers sneak in a script through an open window — that's unencoded user input. SQL injection is someone picking your lock with a bobby pin — malicious SQL hidden in a text field. CSRF is tricking you into unlocking the door for them — a fake request that looks like it came from a trusted user. ASP.NET Core has built-in locks on all three. You just need to use them."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the house analogy:</p>
        <pre><code>+-------------------------------------+
        |  YOUR WEB APP (House)               |
        |                                     |
        |  [WINDOW] XSS -&gt; Open window               |
        |     (unencoded input)               |
        |     Fix: Razor auto-encodes         |
        |                                     |
        |  [LOCK] SQL Injection -&gt; Picked lock     |
        |     (string concatenation)          |
        |     Fix: EF parameterizes           |
        |                                     |
        |  [DOOR] CSRF -&gt; Tricked into opening     |
        |     (fake request)                  |
        |     Fix: Anti-forgery token         |
        +-------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The house analogy is universal. Emphasize: <strong>ASP.NET Core already has the locks installed.</strong> Students don't need to build security from scratch — they need to not disable the built-in protections. This is a key mindset shift.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "If your app is a house, which vulnerability is the easiest to fix? XSS (close the window), SQL injection (change the lock), or CSRF (install a peephole)? 10 seconds, go!" (Answer: XSS — Razor does it automatically.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like your phone's security. Face ID = authentication. App permissions = authorization. Encrypted messages = HTTPS. Your phone already has all this built in. Your app does too."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (8 min XSS -&gt; 7 min SQL injection -&gt; 5 min CSRF -&gt; 5 min HTTPS + OWASP)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's go through each vulnerability. XSS is when user input runs as code. SQL injection is when user input becomes part of a query. CSRF is when a malicious site tricks your browser into making requests on your behalf. ASP.NET Core protects against all three — but you have to know how."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the XSS attack first — a comment field with <code>&lt;script&gt;alert('hacked')&lt;/script&gt;</code>. Then show what happens when it renders raw (alert popup). Then show what Razor does — the encoded output that displays as text. Reveal one step at a time.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Do the XSS demo live.</strong> Type <code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code> into a form that uses <code>@Html.Raw()</code> and show the alert popup. The gasp from the room is guaranteed. Then remove <code>@Html.Raw()</code> and show it renders as harmless text. This visual proof is unforgettable.</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "If Razor auto-encodes by default — when would you ever use <code>@Html.Raw()</code>?" (Answer: When you control the content, like admin-written articles with formatting. Never on user-submitted content.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "XSS is like someone slipping a fake flyer into your group chat. If you just forward it (raw rendering), everyone sees the fake. If you screenshot it and add 'FAKE' (encoding), everyone sees it's harmless."<br /><strong>-&gt; Phone moment:</strong> "Think about how Facebook handles comments. If you type HTML in a comment, it shows as text, not as actual HTML. That's auto-encoding."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Is <code>@Html.Raw()</code> ever safe?"
        <strong>Short answer:</strong> Yes, when you control the content.
        <strong>Real answer:</strong> If you're rendering content that YOU wrote (admin articles, system messages), <code>@Html.Raw()</code> is fine. The danger is when the content comes from users. Rule: if a user typed it, never use <code>@Html.Raw()</code>.
        <strong>The hidden question:</strong> "What if I need to allow some HTML (like bold/italic)?" -&gt; Use a sanitizer library like HtmlSanitizer.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Does EF Core protect me from SQL injection automatically?"
        <strong>Short answer:</strong> Yes, if you use LINQ.
        <strong>Real answer:</strong> <code>.Where(u =&gt; u.Email == email)</code> is always parameterized. The danger is <code>FromSqlRaw()</code> with string interpolation. If you must use raw SQL, use parameters: <code>FromSqlRaw("SELECT * FROM Users WHERE Email = &#123;0&#125;", email)</code>.
        <strong>The hidden question:</strong> "Should I ever use FromSqlRaw?" -&gt; Only for complex queries that LINQ can't express. And always with parameters.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Three rules to remember: (1) Never use <code>@Html.Raw()</code> on user input. (2) Always use LINQ, not string SQL. (3) Always include <code>@Html.AntiForgeryToken()</code> in forms. Follow these three rules and you're safer than 90% of beginner apps."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>35 min</span> Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 35 min (10 min vulnerable code demo -&gt; 15 min secure transformation -&gt; 10 min OWASP tour)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's take a vulnerable app and fix it step by step. First I'll show you the broken code — the kind of code that gets companies sued. Then we'll fix each vulnerability one at a time."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the vulnerable controller and view side by side. Use red highlighting on the dangerous parts: <code>@Html.Raw(ViewBag.Comment)</code>, missing <code>[ValidateAntiForgeryToken]</code>, no model validation. Then reveal the secure version with green highlights.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type the vulnerable version first, then transform it live.</strong> This "before and after" approach is more memorable than showing the secure version directly. When you add <code>[ValidateAntiForgeryToken]</code>, explain: "This one attribute stops CSRF attacks. It's free security."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the CSRF attack flow:</p>
        <pre><code>User logged into bank.com (has cookie)
        v
        User visits evil.com
        v
        evil.com has hidden form: POST bank.com/transfer
        v
        Browser sends cookie automatically
        v
        Bank thinks it's the user -&gt; MONEY STOLEN
        v
        FIX: Anti-forgery token prevents this
        (evil.com can't read bank.com's token)
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Type-along:</strong> "Type the vulnerable version with me. See how simple it is? Now let's break it. Submit a script tag. Watch the alert. Now let's fix it — remove @Html.Raw, add antiforgery, add validation. Watch it become secure."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What's the OWASP Top 10? Is it a test?"
        <strong>Short answer:</strong> It's a list of the most critical web security risks.
        <strong>Real answer:</strong> The Open Web Application Security Project publishes this list every few years. It's the industry standard for "what to worry about." Companies use it for security audits. If you can name three items from it in an interview, you'll impress them.
        <strong>The hidden question:</strong> "Do I need to memorize all 10?" -&gt; No. But know the big three: injection, broken auth, XSS.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Let's focus on just XSS first. Remove <code>@Html.Raw()</code>, let Razor encode automatically. That fixes the most common vulnerability. Then add anti-forgery tokens. Then worry about the rest."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> Exercise: Security Audit Report</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min audit + fix -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here's a vulnerable app. Find at least 5 security flaws. Document each one: what it is, how to exploit it, how to fix it, and the fixed code. You have 40 minutes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> Find SQL injection vulnerability</li>
          <li><input disabled="" type="checkbox" /> Find missing anti-forgery token</li>
          <li><input disabled="" type="checkbox" /> Find XSS via <code>@Html.Raw()</code></li>
          <li><input disabled="" type="checkbox" /> Find missing input validation</li>
          <li><input disabled="" type="checkbox" /> Find missing <code>[ValidateAntiForgeryToken]</code></li>
          <li><input disabled="" type="checkbox" /> Write fixed code for each</li>
          <li><input disabled="" type="checkbox" /> Bonus: Identify missing HTTPS enforcement</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This exercise is analytical, not coding-heavy. Students should spend time reading the vulnerable code, identifying flaws, and writing the fixes. Circulate and help students who can't spot the vulnerabilities. The "aha" moment is when they realize how many flaws exist in just a few lines of code.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "Work as a red team (find flaws) and blue team (write fixes). Then swap roles. You'll learn faster by seeing both perspectives."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-exercise check-in (at 20 min):</strong> "How many flaws have you found?" (Show of hands — should be 5+.) "Which one was the hardest to spot?" "Let's discuss the SQL injection — who can explain how it works?"</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with the obvious: look for <code>@Html.Raw()</code> — that's XSS. Look for string concatenation in SQL — that's injection. Look for a POST form without <code>@Html.AntiForgeryToken()</code> — that's CSRF. Those three will get you started."</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Security isn't optional. Your school's portal, your bank, your social media — all breached at some point. If you build a commercial app and it leaks user data, you get sued, your company gets fined, and your career takes a hit. In the Philippines, the Data Privacy Act (RA 10173) requires companies to protect user data. Non-compliance = fines up to ₱5M + jail time."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Headline from a real Philippine data breach (e.g., COMELEC 2016, or a recent local breach). Label: "₱5M fine + jail time under RA 10173. This is real."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. The legal angle is the strongest argument for Filipino students — RA 10173 makes this a real consequence, not a theoretical one.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you have received a 'your data may have been breached' email?" (Some hands.) "That email was sent because someone didn't follow the security practices we're learning today."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to become a security expert today. Just follow the three rules: encode output, parameterize queries, use anti-forgery tokens. That covers the basics."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week, AI is your security consultant. Paste vulnerable code and ask it to identify flaws following OWASP Top 10. But verify every suggestion — AI can miss context-specific vulnerabilities."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Prompt template:
        "Here's my controller code [paste]. Identify all security vulnerabilities following OWASP Top 10. Show me the fixed version."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Demonstrate asking AI to audit code, then compare its findings to your own. "AI found 4 of the 6 vulnerabilities. It missed the missing HTTPS enforcement. That's why you still need to understand security yourself."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'security scanner' — it catches obvious vulnerabilities, but you need to understand why they're dangerous. If AI fixes a bug and you don't know why, you haven't learned."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common issues -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the security-related issues you'll encounter. Most of them are about knowing what NOT to do."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Issue cards:</p>
        <pre><code>+------------------------------------------+
        | Anti-forgery token mismatch (400 error)  |
        | You have [ValidateAntiForgeryToken]        |
        | without @Html.AntiForgeryToken() in form |
        +------------------------------------------+
        +------------------------------------------+
        | Razor auto-encoding is YOUR FRIEND       |
        | Don't use @Html.Raw() unless absolutely  |
        | necessary. When in doubt, leave it out.  |
        +------------------------------------------+
        +------------------------------------------+
        | SQL injection doesn't work on EF LINQ    |
        | .Where(u =&gt; u.Email == email) is safe.   |
        | FromSqlRaw() is the danger zone.         |
        +------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Anti-forgery token mismatch is like having a key that doesn't fit the lock. The form has one key, the controller expects another. Fix: make sure both the form AND the controller have the token."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Should I add CSP headers to my project?"
        <strong>Short answer:</strong> It's good practice but not required for class projects.
        <strong>Real answer:</strong> Content-Security-Policy headers tell the browser which scripts are allowed. They're an extra layer of XSS protection. Add them in Program.cs if you want bonus points.
        <strong>The hidden question:</strong> "Is my project insecure without CSP?" -&gt; No. Razor auto-encoding is your primary defense. CSP is defense-in-depth.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The two things to check first: (1) Are you using <code>@Html.Raw()</code> anywhere on user input? Remove it. (2) Do all POST forms have <code>@Html.AntiForgeryToken()</code>? Add it. Those fix the most critical vulnerabilities."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End with one action item: "If you only remember one thing: never trust user input. Encode it, validate it, parameterize it. That's the golden rule of web security."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. The XSS live demo is the most important moment — actually run <code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code> and show the popup, then show how Razor prevents it. The house analogy should be used repeatedly. The three golden rules (encode output, parameterize queries, use anti-forgery tokens) should be written on the board and left there. The #1 mistake is using <code>@Html.Raw()</code> on user input — normalize this as the most common beginner error. Connect security to RA 10173 (Philippine Data Privacy Act) for local relevance.</p>
      <hr />
    </div>
  )
}
