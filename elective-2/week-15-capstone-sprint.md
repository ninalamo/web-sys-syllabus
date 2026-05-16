## Week 15: Capstone Sprint

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 20 min | Lecture + Slides + Planning Framework |
| Code Walkthrough | 25 min | Live Code (project scaffolding + structure) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 70 min | Lab (capstone build session) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 5 min | Overflow |

> [TIP] **Teaching Tip (Week 15 strategy):** This is NOT a teaching week — it's a building week. Keep lectures short. Students should spend 70+ minutes coding. The planning framework (user stories, schema design, Kanban) is the most important thing you'll teach this week — students who skip planning will waste hours. Walk around constantly. This week reveals who actually learned the material. Be supportive but honest.

---

### The Hook

> [SPEAK] **Script:** "No more exercises. No more tutorials. You have one week to build whatever you want. You pick the idea. You design the schema. You build the routes. You ship it. This is your portfolio piece. Make it count."

> [SLIDE] **Slide:** Title: "This Is Your Portfolio Piece"  
> Three screenshots: a GitHub repo with green contribution squares, a deployed app URL, and a resume with "Full-Stack Web Developer" listed.  
> Subtitle: "What you build this week is what you show in interviews."

> [TIP] **Teaching Tip:** Deliver this with energy but also warmth. Some students are genuinely anxious about building something from scratch. Acknowledge it: "It's okay to be nervous. You have all the pieces from Weeks 1-14. Today we just put them together."

> [ENGAGE] **Gen-Z:** "This is the final boss level. You've been grinding XP all semester — MVC, EF Core, APIs, auth, security. Now you face the boss: build a real app. You have all the skills. You just need to combine them."  
> **-> Poll:** "Raise your hand if you're nervous about building something from scratch. Good. That means you care. Now let's do it."

> [LOST] **If they're lost:** "Don't panic. This isn't a test. It's a sprint. You'll build something small but complete. If you can do a controller, a model, a view, and a database query — you can do this."

---

### The Analogy

> [SPEAK] **Script:** "This is week 15 of your startup. You've done customer research — that's the previous weeks learning the tools. You know your tech stack — ASP.NET Core, EF Core, Identity. Now it's time to build the MVP: Minimum Viable Product. Not the perfect product. The shippable product. Features you can't finish? Cut them. Bugs that don't crash things? Ship them anyway. You can fix them in the next sprint."

> [BOARD] **Whiteboard:** Draw the MVP triangle:
> ```
>        Perfect
>         /\
>        /  \
>       /    \
>      / MVP  \   <- Ship THIS
>     /________\
>   Fast     Good
> ```
> Below: "Pick two: Fast + Good = MVP. Perfect comes later."

> [TIP] **Teaching Tip:** The MVP concept is critical — students will try to build too much. Emphasize: **scope is your enemy.** A working app with 3 features beats a broken app with 10. Draw the triangle and leave it on the board for the entire session.

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "What's ONE feature your app absolutely needs to work? Not 'nice to have' — NEEDS. 10 seconds, go!" (Then ask 2-3 people to share. Reinforce: "That's your MVP. Everything else is bonus.")

> [LOST] **If they're lost:** "Think of it like a TikTok video. You don't need fancy effects, transitions, and music. You need one clear idea that works. Your app is the same — one core feature that works well."

---

### Concept Discussion

> [TIME] **Pacing:** 20 min total (7 min planning -> 7 min vertical slicing -> 6 min git workflow)

> [SPEAK] **Script:** "Here's how to plan a capstone in one week. Day 1-2: plan before you code. Define user stories, design your schema, sketch your routes. Day 3-5: build vertically — one feature at a time, full stack. Day 6-7: polish and deploy. Don't build horizontally — don't do all your models first, then all your controllers. You won't see progress."

> [SLIDE] **Slide:** Show the user story template: "As a [role], I want to [action] so that [benefit]." Then reveal 3 examples. Then show the Kanban board: To Do -> In Progress -> Done.

> [TIP] **Teaching Tip:** The most important concept: **build vertically, not horizontally.** Students will want to create all models first, then all controllers, then all views. This is wrong — they won't see anything working until the very end. Instead: pick one feature, build it from database to view, test it, then move to the next feature.

> [ASK] **Ask the class:** "If you have 5 features and 5 days — do you build all 5 databases on day 1, or do you build one complete feature per day?" (Answer: One complete feature per day. You'll have 5 working features instead of 5 half-built ones.)

> [ENGAGE] **Gen-Z:** "Building vertically is like cooking one dish at a time instead of prepping all ingredients for 5 dishes. You get to eat (see progress) after each dish, not at the very end."  
> **-> Phone moment:** "Open GitHub Projects or Trello on your phone. Create three columns: To Do, Doing, Done. Add your features as cards. Move them as you work. This is how real teams track work."

> [Q&A] **Student Q:** "How many features should I aim for?"
> **Short answer:** 3 core features minimum.
> **Real answer:** The requirements say 3+ tables, 1+ relationship, auth, API, service layer, validation, layout. That's your baseline. Any features beyond that are bonus. Don't over-scope.
> **The hidden question:** "What if I finish early?" -> Add polish: better styling, error messages, loading states. Not more features.

> [Q&A] **Student Q:** "Should I use feature branches?"
> **Short answer:** Yes, but keep it simple.
> **Real answer:** Create one branch per feature: `feat-auth`, `feat-tasks`, `feat-api`. Merge into `main` when the feature works. If you're working solo, you can commit directly to `main` — but branches are good practice.
> **The hidden question:** "Is git required?" -> Yes. Your deliverable is a GitHub repo.

> [LOST] **If they're lost:** "Forget the planning framework for a second. Just answer: what does your app DO? Write that in one sentence. Then list the 3 things a user needs to do. Build those 3 things. That's your capstone."

---

### Code Walkthrough

> [TIME] **Pacing:** 25 min (5 min project scaffold -> 10 min folder structure -> 10 min Program.cs template)

> [SPEAK] **Script:** "Let's scaffold a capstone project from scratch. Watch how the folder structure maps to the architecture: Controllers handle HTTP, Services handle logic, Models handle data, Views handle display. Everything connects through Program.cs."

> [SLIDE] **Slide:** Show the project structure diagram first — the folder tree with Controllers, Models, ViewModels, Services, Views, wwwroot. Then reveal the Program.cs template with all registrations highlighted.

> [TIP] **Teaching Tip:** **Type this live.** Scaffold the project, create the folders, and build the Program.cs step by step. After each registration line, explain what it enables: "This line adds MVC. This line adds the database. This line adds Identity. This line adds HttpClient. This line adds your service."

> [BOARD] **Whiteboard:** Draw the dependency flow:
> ```
> Program.cs wires everything:
>   AddControllersWithViews()  -> MVC pipeline
>   AddDbContext()             -> Database
>   AddDefaultIdentity()       -> Auth
>   AddHttpClient()            -> API calls
>   AddScoped<IService, Svc>() -> Your service
> 
> Controller -> Service -> DbContext -> Database
>                          -> HttpClient -> API
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Scaffold the project with me. Create the folders. Build Program.cs. This is your starting template. Every capstone starts here."

> [Q&A] **Student Q:** "Do I need all these packages for a simple app?"
> **Short answer:** No. Only add what you need.
> **Real answer:** The template includes Identity, EF Core, and HttpClient because the requirements ask for auth, database, and API integration. If your app doesn't need one of these, skip it. But the capstone requirements require all three.
> **The hidden question:** "Can I add more later?" -> Yes. `dotnet add package` works anytime.

> [LOST] **If they're lost:** "Start with the minimum: MVC + EF Core + Identity. Get those working. Then add HttpClient for the API. Then add your service layer. One piece at a time."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "This capstone is what you show in interviews. 'Build a complete web app' demonstrates you understand the full stack — database design, backend architecture, frontend rendering, authentication, deployment. A GitHub repo with a running app gets you hired faster than any certificate."

> [SLIDE] **Slide:** Screenshot of a real job posting for ".NET Developer" with "Portfolio/GitHub required" highlighted. Label: "This is what employers want to see."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Connect it directly to job hunting: "When an interviewer asks 'show me something you built,' you'll show them this capstone. A deployed URL beats a certificate every time."

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have a GitHub profile?" (Some hands.) "By the end of this week, your GitHub will have something real on it. Not a tutorial. Not an exercise. Your app."

> [LOST] **If they're lost:** "You don't need to build the next Facebook. You need to build something that works, that you can explain, and that you're proud of. That's enough."

---

### Exercise: Capstone Sprint Delivery

> [TIME] **Pacing:** 70 min total (5 min planning -> 60 min build -> 5 min quick share)

> [SPEAK] **Script:** "Choose a project idea or propose your own. Plan first — write your user stories, design your schema, sketch your routes. Then build vertically — one feature at a time. You have 60 minutes of build time. I'll be walking around helping."

> [SLIDE] **Slide:** Project ideas:
> 1. **Task Manager Pro** — Users, tasks, categories, due dates, priority, reminders API
> 2. **Recipe Box** — Users, recipes, ingredients, categories, search, meal planner
> 3. **Book Tracker** — Users, books, reading logs, ratings, reviews, Google Books API
> 4. **Study Group App** — Users, study groups, flashcards, quiz scores, study timer
> 5. **Personal Budget** — Users, expenses, categories, monthly summaries, charts

> [TIP] **Teaching Tip:** This is a build session, not a lecture. Walk around constantly. The first 15 minutes should be planning — make students write user stories and sketch their schema before they code. The "aha" moment is when they get their first feature working end-to-end (database -> service -> controller -> view).

> [ENGAGE] **Gen-Z:** **-> Work in pairs or solo:** "This is your mini-capstone. Treat it like a real project. Plan first, then code. Draw your architecture diagram before you write a single line."

> [ASK] **Mid-exercise check-in (at 30 min):** "How many have at least one feature working end-to-end?" (Show of hands.) "How many have authentication working?" "If you're stuck, raise your hand — I'll come over."

> [LOST] **If they're lost:** "Start with the database. Define your models. Create the DbContext. Run the migration. Get data displaying on a page. Then add authentication. Then add the API. Then add the service layer. One layer at a time."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "Full AI is allowed this week. Use it for code generation, debugging, architecture suggestions, styling. But for every AI-generated code block, add a comment: `// AI-generated: reviewed by [your name]`. This tracks what came from AI vs what you wrote."

> [SLIDE] **Slide:** AI tracking requirement:
> | Requirement | What it means |
> |------------|--------------|
> | Comment every AI block | `// AI-generated: reviewed by Juan` |
> | Prompt log | Save every prompt you used |
> | Code review | Document what AI got wrong |

> [TIP] **Teaching Tip:** Demonstrate the workflow: (1) Ask AI for code, (2) Review it, (3) Add the comment, (4) Test it. "AI generates the code, but YOU understand it. The comment is your signature — you're saying 'I reviewed this and it's correct.'"

> [ENGAGE] **Gen-Z:** "AI is your 'co-pilot' this week — it suggests code, you steer. If you can't explain what the code does, you didn't review it. And if you didn't review it, you can't defend it."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common issues -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the capstone pitfalls you'll face this week. Most of them aren't technical — they're about scope and time management."

> [SLIDE] **Slide:** Pitfall cards:
> ```
> +------------------------------------------+
> | Scope creep                              |
> | You want to build Instagram but you have |
> | 1 week. Pick 3 core features. Cut rest.  |
> +------------------------------------------+
> +------------------------------------------+
> | Saving the hardest part for last         |
> | Build the hard thing first. If it fails, |
> | you have time to adjust.                 |
> +------------------------------------------+
> +------------------------------------------+
> | Not committing                           |
> | Commit after every working feature.      |
> | If something breaks, you can roll back.  |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "Scope creep is like adding toppings to a pizza until it collapses. Three toppings = delicious. Ten toppings = a mess. Pick your three core features and stick to them."

> [Q&A] **Student Q:** "My database schema is wrong — do I need to start over?"
> **Short answer:** No. Use migrations to change it.
> **Real answer:** Create a new migration: `dotnet ef migrations add UpdateSchema`. Then apply it: `dotnet ef database update`. If the migration fails because of existing data, you can delete the database and start fresh (it's a class project, not production).
> **The hidden question:** "Will I lose my data?" -> Yes, if you delete the database. But for a class project, that's fine.

> [LOST] **If they're lost:** "The two things to focus on: (1) Do you have at least one feature working end-to-end? If not, drop everything else and make it work. (2) Is your code committed to GitHub? If not, commit now. Those are the minimum deliverables."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: a working app with 3 features beats a broken app with 10. Ship what works."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. This is a build week — keep lectures short (70 min build time), walk around constantly. The MVP triangle should be drawn on the board and left there. The #1 pitfall is scope creep — students try to build too much. Reinforce "3 core features, ship what works." The vertical slicing concept (build one feature end-to-end before starting the next) is the most important planning lesson. AI is fully allowed but requires tracking comments on every generated block. Be supportive: students are nervous about building from scratch. Celebrate small wins: "Your first feature works? That's huge."

---

