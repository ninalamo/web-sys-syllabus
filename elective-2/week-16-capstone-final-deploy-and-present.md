## Week 16: Capstone Final — Deploy & Present

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 20 min | Lecture + Slides + Deployment Demo |
| Code Walkthrough | 25 min | Live Demo (deploy to Render/Railway) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 70 min | Lab (deploy + presentation prep) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 5 min | Overflow |

> [TIP] **Teaching Tip (Week 16 strategy):** This is deployment and presentation week. Students should spend most of their time deploying and practicing their demos. Keep lectures short. The deployment demo should be live — actually deploy a sample app during class. Walk around constantly during the build session. Help students with connection strings, environment variables, and platform-specific issues. The presentation practice is as important as the deployment — students need to learn how to demo their work.

---

### The Hook

> [SPEAK] **Script:** "Your app is about to go live. Real URL. Real users (your classmates). No pressure. You're about to experience the most terrifying and rewarding moment in software development: hitting 'Deploy.'"

> [SLIDE] **Slide:** Title: "Your App Goes Live Today"  
> Left: `localhost:5001` with a red X through it.  
> Right: `mycapstone.onrender.com` with a green checkmark.  
> Subtitle: "From your laptop to the internet."

> [TIP] **Teaching Tip:** This hook should feel exciting but also acknowledge the anxiety. Say: "Deploying for the first time is scary. It's supposed to be. But once you see your app on a real URL, you'll never look at websites the same way again."

> [ENGAGE] **Gen-Z:** "An app that only runs on your laptop is like a TikTok video that only you can see. Deployment is hitting 'Post.' Suddenly the whole world can see what you made."  
> **-> Poll:** "Raise your hand if you've ever deployed something to the internet." (Few hands.) "By the end of this session, that changes."

> [LOST] **If they're lost:** "Don't worry if deployment feels intimidating. We'll do it step by step. The platform does most of the work. You just need to connect your repo and set a few variables."

---

### The Analogy

> [SPEAK] **Script:** "You've been cooking in your kitchen — that's your local machine — for weeks. The food tastes great to you. But now you're opening a restaurant — that's production. New challenges: does the food survive delivery? Can the kitchen handle 20 orders at once? What if the power goes out? Deployment is where your app meets the real world — and the real world doesn't care about your feelings."

> [BOARD] **Whiteboard:** Draw the kitchen-to-restaurant analogy:
> ```
> Your Kitchen (localhost)     ->     Restaurant (Production)
> +-----------------+                +-----------------+
| You test it       |                | Anyone can access |
| Your database     |      ->         | Real database     |
| Your files        |                | Server files      |
| Fast (no network) |                | Network latency   |
| No security       |                | HTTPS required    |
+-----------------+                +-----------------+
> ```
> Arrow labeled: "Deployment = moving from kitchen to restaurant"

> [TIP] **Teaching Tip:** The kitchen analogy works well. Emphasize the key differences: production has a real database (not LocalDB), real network latency, real users, and real security requirements. The connection string change is the #1 deployment issue — highlight it.

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "What's the biggest difference between testing on your laptop and deploying to the internet? 10 seconds, go!" (Answers: connection string, environment variables, HTTPS, network speed.)

> [LOST] **If they're lost:** "Think of it like moving from a practice court to a real game. Same skills, different pressure. Your code works on localhost — now we just need to put it on a server that everyone can reach."

---

### Concept Discussion

> [TIME] **Pacing:** 20 min total (8 min hosting options -> 7 min deployment checklist -> 5 min production config)

> [SPEAK] **Script:** "Here's how deployment works. Your app runs on localhost — only your machine can see it. Deployment puts it on a server that anyone can access. We'll use Render or Railway because they have free tiers and support .NET. The process is: push to GitHub, connect the repo to the platform, set environment variables, and deploy."

> [SLIDE] **Slide:** Show the hosting comparison table one platform at a time. Highlight Render and Railway as the easiest options for class projects. Then reveal the deployment checklist — read through each item.

> [TIP] **Teaching Tip:** The most important concept: **environment variables replace hardcoded values.** Students will want to put their production connection string in `appsettings.json`. Don't let them. Explain: "Your connection string has a password. If you commit it to GitHub, it's public forever. Use environment variables instead."

> [ASK] **Ask the class:** "If your app works on localhost but crashes on the server — what's the first thing you check?" (Answer: The logs. Every platform has a log viewer. Read the error message.)

> [ENGAGE] **Gen-Z:** "Environment variables are like your GCash PIN — you don't write it in your notebook where anyone can see it. You keep it in your head (the server's environment). The app reads it when it needs it."  
> **-> Phone moment:** "Open any deployed website. Look at the URL. That URL points to a server somewhere. Your app is about to have one of those."

> [Q&A] **Student Q:** "Which platform should I use?"
> **Short answer:** Render or Railway — both have free tiers and .NET support.
> **Real answer:** Render is easiest — connect GitHub, set build/start commands, add env vars, deploy. Railway is similar but gives you $5 credit. Azure is more powerful but more complex. For a class project, Render is fine.
> **The hidden question:** "Will it stay free forever?" -> Render free tier sleeps after 15 min of inactivity. Railway credit runs out. But for a demo, it's enough.

> [Q&A] **Student Q:** "What if my deployment fails?"
> **Short answer:** Check the logs.
> **Real answer:** 90% of deployment failures are: wrong connection string, missing migration, or missing environment variable. The platform's log viewer will tell you exactly what went wrong. Read the error, fix it, redeploy.
> **The hidden question:** "How many times will I need to redeploy?" -> Probably 2-3 times. That's normal. Even senior devs redeploy multiple times.

> [LOST] **If they're lost:** "Forget the platform specifics. The flow is: (1) Push code to GitHub. (2) Connect repo to platform. (3) Set connection string as env var. (4) Hit deploy. (5) Check logs if it fails. That's it."

---

### Code Walkthrough

> [TIME] **Pacing:** 25 min (10 min production-ready Program.cs -> 10 min live deploy demo -> 5 min post-deploy testing)

> [SPEAK] **Script:** "Let's make our app production-ready and deploy it. First, the Program.cs changes — environment-aware error pages, auto-migration on startup. Then I'll deploy a sample app live so you can see the process."

> [SLIDE] **Slide:** Show the production-ready Program.cs with the environment check highlighted: `if (!app.Environment.IsDevelopment())`. Then show the `db.Database.Migrate()` line — explain this is what creates/updates the database on the server.

> [TIP] **Teaching Tip:** **Do the deployment live.** Even if it takes a few minutes, students need to see the full process: GitHub push -> platform connect -> env var setup -> deploy -> URL works. If the deployment fails (it might), that's actually valuable — show them how to read the logs and fix the issue.

> [BOARD] **Whiteboard:** Draw the deployment flow:
> ```
> Local Code -> git push -> GitHub -> Platform (Render/Railway)
>                                              v
>                                   Build: dotnet publish -c Release
>                                              v
>                                   Start: dotnet MyApp.dll
>                                              v
>                                   Migrate: db.Database.Migrate()
>                                              v
>                                   Live URL: https://myapp.onrender.com
> ```

> [ENGAGE] **Gen-Z:** **-> Watch along:** "I'm deploying this app live. Watch every step. This is the same process you'll follow. If I make a mistake, you'll learn from it. If it works, you'll know it's possible."

> [Q&A] **Student Q:** "Why `db.Database.Migrate()` instead of `EnsureCreated()`?"
> **Short answer:** `Migrate()` applies pending migrations. `EnsureCreated()` only creates if nothing exists.
> **Real answer:** `EnsureCreated()` is fine for the first deploy. But if you add a new column later and redeploy, `EnsureCreated()` won't add it. `Migrate()` applies all pending migrations, so it works for both first deploy and updates.
> **The hidden question:** "Is it safe to auto-migrate in production?" -> For a class project, yes. In a real company, you'd run migrations separately from the app startup.

> [LOST] **If they're lost:** "Let's focus on just getting the app running. Skip the auto-migration for now. Deploy with `EnsureCreated()`. Get it working. Then add migrations later."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "An app that only runs on your laptop doesn't exist. An app on the internet is real. Deployment is the difference between 'I learned coding' and 'I built a product.' Hiring managers don't care about your localhost — they want to see a URL. Plus, deployed apps look better on your resume than 'ran it on my machine.'"

> [SLIDE] **Slide:** Side-by-side resume entries:
> Left: "Built a task manager app (ran locally)" — boring.
> Right: "Built and deployed a task manager app — live at [URL], 50+ users" — impressive.
> Subtitle: "Which one gets you hired?"

> [TIP] **Teaching Tip:** Keep this to 5 minutes. The resume angle is the strongest argument: "A deployed URL on your resume is proof you can ship. Most graduates can't say that."

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you want to put a live URL on your resume?" (All hands.) "That's what we're doing today. Not a localhost link. A real URL that anyone can visit."

> [LOST] **If they're lost:** "You don't need to understand DevOps today. Just know: push to GitHub, connect to platform, set env vars, deploy. That's the entire process."

---

### Exercise: Deploy + Present

> [TIME] **Pacing:** 70 min total (5 min prep -> 30 min deploy -> 30 min presentation practice + delivery -> 5 min wrap)

> [SPEAK] **Script:** "Two parts today. Part 1: deploy your capstone to a live URL. Part 2: present your app in a 10-minute demo. Your presentation should cover: what you built, a live demo, your architecture, your challenges, and your AI usage. You have 70 minutes."

> [SLIDE] **Slide:** Presentation structure:
> 1. **What did you build?** (1 min) — Elevator pitch
> 2. **Live demo** (4 min) — Register, core feature, API, validation
> 3. **Architecture** (2 min) — Diagram: Controllers -> Services -> DB + API
> 4. **Challenges** (2 min) — What broke? How did you fix it?
> 5. **AI usage** (1 min) — What did AI help with? What did it get wrong?

> [TIP] **Teaching Tip:** This is the most important session of the term. Help students deploy first — without a live URL, the presentation has no impact. Then help them practice their demo. The "aha" moment is when they visit their own live URL and see their app running on the internet.

> [ENGAGE] **Gen-Z:** **-> Practice your demo:** "Run through your presentation once before presenting. Time it. If it's over 10 minutes, cut something. If your app crashes during the demo, that's okay — explain what went wrong. That's real development."

> [ASK] **Mid-session check-in (at 30 min):** "How many have deployed?" (Show of hands.) "How many have a working live URL?" "If you're stuck on deployment, raise your hand — I'll come over."

> [LOST] **If they're lost:** "Focus on getting the app deployed first. Skip the presentation prep until you have a working URL. If deployment fails, check the logs. 90% of failures are connection string or migration issues."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "Full AI is allowed and required this week. Use AI for deployment troubleshooting, error message diagnosis, and optimization suggestions. Submit your prompt log showing you used AI to help debug deployment issues."

> [SLIDE] **Slide:** Prompt template:
> "I'm deploying my ASP.NET Core app to [platform] and getting this error [paste log]. What's wrong?"

> [TIP] **Teaching Tip:** Demonstrate asking AI about a deployment error. Show how to paste the platform's log output and get a diagnosis. "AI is great at reading error logs — it's like having a senior dev looking over your shoulder."

> [ENGAGE] **Gen-Z:** "AI is your 'deployment buddy' — it reads error logs, suggests fixes, and tells you what env vars you need. But you still need to understand what it's telling you."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the deployment errors you WILL see. Let's go through them so you don't panic when they happen."

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | 502 Bad Gateway                          |
> | Your app crashed on startup.             |
> | Check logs: connection string? missing   |
> | migration? missing env vars?             |
> +------------------------------------------+
> +------------------------------------------+
> | CSS broken on live site                  |
> | Check: UseStaticFiles() in Program.cs    |
> | Paths use ~: href="~/css/site.css"       |
> +------------------------------------------+
> +------------------------------------------+
> | Redirect loop after deployment           |
> | UseHttpsRedirection() conflicts with     |
> | platform's HTTPS termination.            |
> | Fix: conditionally apply it.             |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "502 Bad Gateway is like calling a restaurant and getting no answer. The server is there but your app crashed. Check the logs — they'll tell you exactly what went wrong."

> [Q&A] **Student Q:** "My free tier app goes to sleep — is that a problem for the demo?"
> **Short answer:** No, just wait for it to wake up.
> **Real answer:** Render free tier spins down after 15 min of inactivity. The first request after idle takes ~30 seconds. This is normal. Mention it in your presentation: "The app sleeps to save resources — this is expected behavior on the free tier."
> **The hidden question:** "Should I upgrade?" -> Not for a class project. The free tier is enough for a demo.

> [Q&A] **Student Q:** "Should I commit my connection string to GitHub?"
> **Short answer:** NEVER.
> **Real answer:** Connection strings contain passwords. If you commit them, they're public forever. Use `appsettings.Production.json` (excluded from git via `.gitignore`) or environment variables on the platform.
> **The hidden question:** "How do I check if I already committed it?" -> `git log -p -- appsettings.json` — if you see the connection string in the diff, rotate the password immediately.

> [LOST] **If they're lost:** "The three things to check first: (1) Is your connection string set as an environment variable? (2) Did migrations run on the server? (3) Are you reading the platform's logs? Those fix 90% of deployment issues."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: an app on the internet is real. An app on localhost is a draft. Today you shipped something real. Be proud of that."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. This is deployment and presentation week — keep lectures short, spend 70 min on deploy + demo. The live deployment demo is the most important moment — actually deploy an app during class, even if it takes time. The kitchen-to-restaurant analogy should be used repeatedly. The #1 deployment error is connection string issues — drill environment variables over hardcoded values. The presentation structure (1 min pitch, 4 min demo, 2 min architecture, 2 min challenges, 1 min AI) should be written on the board. Help every student get a live URL — that's the deliverable. Celebrate the moment they see their app on the internet for the first time.

---

## Quick Reference Cards

### C# / VB Translation Card

| VB.NET | C# |
|--------|-----|
| `Dim x As Integer = 5` | `int x = 5;` |
| `Public Property Name As String` | `public string Name { get; set; }` |
| `If x > 5 Then ... End If` | `if (x > 5) { ... }` |
| `For i = 1 To 10` | `for (int i = 1; i <= 10; i++)` |
| `Function Add(a, b) As Integer` | `int Add(int a, int b)` |
| `Nothing` | `null` |
| `&` (string concat) | `+` or `$"..."` |
| `arr(0)` | `arr[0]` |

### HTTP Status Codes Cheat Sheet

| Code | Meaning | What to do |
|------|---------|-----------|
| 200 | OK | Everything worked |
| 201 | Created | POST succeeded |
| 301 | Moved Permanently | URL changed, update your links |
| 400 | Bad Request | You sent bad data |
| 401 | Unauthorized | Need to log in |
| 403 | Forbidden | Logged in but not allowed |
| 404 | Not Found | URL doesn't exist |
| 500 | Server Error | The server broke (not your fault but you have to fix it) |

### DI Registration Lifetimes

| Lifetime | When created | Use for |
|----------|-------------|---------|
| `AddTransient` | Every time it's requested | Lightweight, stateless services |
| `AddScoped` | Once per HTTP request | DbContext, services with state per request |
| `AddSingleton` | Once for the app's lifetime | Configuration, caching, logging |

### EF Core Query Patterns

```csharp
// Get all
db.Products.ToListAsync()

// Get one by ID
db.Products.FindAsync(id)
db.Products.FirstOrDefaultAsync(p => p.Id == id)

// Filter
db.Products.Where(p => p.Price > 100).ToListAsync()

// Include related data
db.Products.Include(p => p.Category).ToListAsync()

// Nested include
db.Categories.Include(c => c.Products)
    .ThenInclude(p => p.Reviews).ToListAsync()

// Projection (only specific fields)
db.Products.Select(p => new { p.Name, p.Price }).ToListAsync()

// Count
db.Products.CountAsync()

// Check existence
db.Products.AnyAsync(p => p.Name == "Nintendo Switch")
```

### Security Checklist

- [ ] All POST forms include `@Html.AntiForgeryToken()`
- [ ] All POST actions have `[ValidateAntiForgeryToken]`
- [ ] Never use `@Html.Raw()` on user input
- [ ] All database queries use LINQ (not `FromSqlRaw`)
- [ ] `app.UseAuthentication()` is before `app.UseAuthorization()`
- [ ] HTTPS is enabled in production
- [ ] Passwords are hashed (Identity does this automatically)
- [ ] Error pages don't show stack traces in production

---

*End of Elective 2: Building Web Products — Full Lesson Content*
