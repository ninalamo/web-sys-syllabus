## Week 16: Capstone Final

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Architecture Diagram |
| Code Walkthrough | 30 min | Architecture Review + Oral Defense Prep |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Capstone Presentations |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 16 strategy):** This is the culmination — everything from 15 weeks comes together. The restaurant grand opening analogy is essential. This week is NOT about teaching new concepts — it's about students presenting, defending, and reflecting. The oral defense prep is the most valuable activity: run mock Q&A sessions. Emphasize: a working simple app beats a broken complex one. The demo disaster prep (video backup, screenshots) is critical — Murphy's Law applies. Students must be able to explain every AI-generated section.

### 1. The Hook

> [SPEAK] **Script:** "This is it. The moment where everything you've learned over 15 weeks comes together into one product. You're not just building an app — you're building a portfolio piece that proves you can ship a production-grade full-stack application. When you walk into a job interview and they ask 'what have you built?', this is your answer. Make it count."

> [SLIDE] **Slide:** Title: "15 Weeks. One Product. Your Portfolio."  
> Timeline graphic: Week 1 (JS) -> Week 6 (React) -> Week 10 (ASP.NET) -> Week 13 (Auth) -> Week 14 (Testing) -> Week 15 (CI/CD) -> Week 16 (Capstone). Each week is a building block leading to the final product.

> [TIP] **Teaching Tip:** Make it emotional. Remind them how far they've come: "Week 1 you were replacing `var` with `const`. Today you're deploying a full-stack app with JWT auth, tests, and CI/CD. That's a transformation."

> [ENGAGE] **Gen-Z:** "Your capstone is like your college thesis but actually useful. Instead of a paper nobody reads, you're building a real app that runs on the internet. When you apply for jobs, this is what you show — not your grades, your PRODUCT."  
> **-> Phone moment:** "Open your deployed app on your phone right now. That's YOUR app, running on the internet, accessible from anywhere. Sixteen weeks ago, you couldn't have built that."

> [LOST] **If they're lost:** "Don't panic if your capstone isn't perfect. A working simple app is better than a broken complex one. Focus on what works, document what doesn't, and be honest about tradeoffs."

---

### 2. The Analogy

> [SPEAK] **Script:** "The capstone is like a restaurant's grand opening. For 15 weeks, you've been learning individual skills: cooking (components), plating (styling), inventory management (state), customer service (APIs), health inspection (testing), and opening procedures (deployment). Now it's opening night. Every skill needs to work together. The food needs to be good, the service needs to be smooth, and the health inspector needs to approve. One weak link and the whole experience falls apart."

> [BOARD] **Whiteboard:** Draw the restaurant comparison:
> ```
> 15 WEEKS OF PREP -> GRAND OPENING
> 
> Cooking (Components)     -> Your React UI
> Plating (Styling)        -> Your CSS/Tailwind
> Inventory (State)        -> useState, Context, Auth
> Customer Service (APIs)  -> ASP.NET Core endpoints
> Health Inspection (Test) -> xUnit, Playwright tests
> Opening Procedures (CD)  -> GitHub Actions pipeline
> 
> GRAND OPENING = Capstone Defense
> - Does the app work? (functional)
> - Is the code clean? (quality)
> - Is it deployed? (production-ready)
> - Can you explain your choices? (engineering)
> ```

> [TIP] **Teaching Tip:** The restaurant analogy maps perfectly: each skill learned = a restaurant competency, grand opening = capstone defense. Draw it and reference it throughout. Emphasize: the defense is NOT about having the most features — it's about having a complete, working product.

> [ENGAGE] **Gen-Z:** "The oral defense is like your thesis defense but for your CODE. Instead of defending your research methodology, you're defending why you chose JWT over cookies, React over Vue, and why your architecture makes sense."  
> **-> Turn to your neighbor:** "In the restaurant analogy, what's the 'health inspection'? What's the 'grand opening'? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the restaurant. Capstone = show your working app, explain your choices, answer questions. That's it. You've been building toward this for 15 weeks."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min architecture decisions -> 5 min security posture -> 5 min test strategy -> 5 min deployment -> 5 min tradeoff articulation)

> [SPEAK] **Script:** "Individual skills are useless without the ability to combine them into a complete product. The capstone forces you to make architecture decisions, handle tradeoffs, and present your work — exactly what you'll do in a real job. Let me show you what examiners look for."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) an example answer, (3) what a bad answer looks like. Don't show all concepts at once.

> [TIP] **Teaching Tip:** Spend the most time on tradeoff articulation — this is what separates engineers from coders. Run mock Q&A: "Why did you choose X?" "What would you do differently?" Students need to practice defending their choices out loud.

> [ASK] **Ask the class:** "If an examiner asks 'Why JWT over cookie-based auth?', what's a good answer?" (JWT is stateless, scales horizontally, tradeoff is revocation difficulty — handled with refresh token rotation.) "What's a bad answer?" ('Because the tutorial used JWT.' — no reasoning.)

> [ENGAGE] **Gen-Z:** "Tradeoff articulation is like explaining why you chose your college. 'I chose UP because it's the best' is weak. 'I chose UP because the CS program has industry partnerships, the tradeoff is the commute, but the networking opportunities outweigh it' — that's engineering thinking."  
> **-> Phone moment:** "Look at your deployed app. For every technology you used, ask yourself: why this one? What was the alternative? What did I give up? If you can't answer, figure it out before the defense."

> [Q&A] **Student Q:** "What if my app doesn't work during the demo?"
> **Short answer:** Have a backup plan.
> **Real answer:** Record a video of your demo beforehand. Take screenshots of key features. Have a local fallback ready. Test the live deployment right before your presentation. Know how to restart your services if they crash. The best presenters prepare for disaster.
> **The hidden question:** "Will I lose points?" -> Not if you have a backup. Examiners understand that live demos fail. What they DO penalize is having no backup.

> [Q&A] **Student Q:** "What if I used AI for most of my code?"
> **Short answer:** That's fine — if you can explain it.
> **Real answer:** In the real world, engineers use AI constantly. The difference is they understand what the AI generates. If you can trace through every AI-generated section line by line and explain why it works, you're fine. If you can't, rewrite it. The oral defense will expose gaps in understanding.
> **The hidden question:** "How much AI is too much?" -> There's no limit on AI usage. The limit is your ability to explain and defend every line.

> [LOST] **If they're lost:** "The simplest capstone summary: (1) Deployed app that works. (2) Clean code with tests. (3) CI/CD pipeline. (4) Can explain every choice. That's what examiners look for. Focus on these four things."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (15 min architecture review -> 15 min oral defense mock Q&A)

> [SPEAK] **Script:** "Let's review what a production-grade capstone looks like — the full architecture from frontend to database. Then we'll practice the oral defense with real questions examiners will ask."

> [SLIDE] **Slide:** Show the full architecture diagram. Then show the mock Q&A format: examiner question -> good answer -> why it's good.

> [TIP] **Teaching Tip:** **Run the mock Q&A live.** Pick 3-4 students at random and ask them real defense questions. This is the most valuable preparation they'll get. Give constructive feedback on their answers.

> [BOARD] **Whiteboard:** Draw the full-stack architecture:
> ```
> Frontend (React) -> HTTP + JSON + Bearer token -> Backend (ASP.NET Core)
>   +- Pages/Routes                                              +- Controllers
>   +- Components                                                +- Services
>   +- Hooks (useFetch, useAuth)                                 +- Models
>   +- Context (Auth, State)                                     +- Auth (JWT)
> 
> Backend -> Entity Framework Core -> Database (SQL Server)
>   +- Swagger/OpenAPI docs                          +- Migrations
>   +- [ApiController] validation                    +- Seeding
>   +- CORS policy                                   +- Tables
> ```

> [ENGAGE] **Gen-Z:** "Reviewing your architecture is like checking your outfit before a job interview. Every piece needs to make sense together. Your frontend talks to your backend, your backend talks to your database, your CI/CD deploys everything. If one piece is missing or broken, the whole thing falls apart."  
> **-> Practice:** "Turn to your neighbor. One is the examiner, one is the student. Ask: 'Why did you choose this architecture?' Switch roles after 2 minutes."

> [Q&A] **Student Q:** "How do I explain my architecture if I don't fully understand it?"
> **Short answer:** You need to understand it before the defense.
> **Real answer:** Go through every file in your project. Trace the data flow: user clicks button -> React component sends request -> API controller receives it -> service processes it -> database stores it -> response returns -> UI updates. If you can trace this flow for every feature, you can explain your architecture.
> **The hidden question:** "What if I copied code I don't understand?" -> Rewrite it. You can't defend what you don't understand.

> [LOST] **If they're lost:** "Focus on the data flow. For every feature in your app, trace: frontend -> API -> database -> response -> UI. If you can explain this for each feature, you can handle any defense question."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "This capstone defense mirrors a real architecture review at any tech company. When an engineer proposes a new system, they present the architecture, justify their choices, discuss tradeoffs, and answer questions from senior engineers. The format is identical: demo the product, explain the architecture, defend your decisions. The only difference is that in a real company, the stakes are higher and the audience is your team instead of your professor."

> [SLIDE] **Slide:** Architecture review format at Google, Amazon, Microsoft. Show a real architecture diagram from a tech blog. Stat: "Every FAANG company uses this exact format for technical reviews."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that the capstone defense isn't academic — it's the same format used in real engineering roles.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you think this defense is just a school requirement?" (Some hands.) "It's actually practice for your first job. Every tech company makes you present and defend your work. This is your rehearsal."

> [LOST] **If they're lost:** "You don't need to know Google's review process. Just understand: the skills you're practicing today — presenting, defending, explaining tradeoffs — are the same skills you'll use in every engineering job."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min prep -> 40 min presentations -> 10 min feedback)

> [SPEAK] **Script:** "Present your production-grade full-stack capstone application. Demo the live app, walk through your architecture, and defend every decision. This is your moment to show what you've built."

> [SLIDE] **Slide:** Deliverables checklist:
> - [ ] Deployed full-stack app — live URL
> - [ ] Source code — clean repo with README
> - [ ] Documentation — architecture diagram, API docs, setup instructions
> - [ ] CI/CD pipeline — automated build, test, deploy
> - [ ] Test suite — unit, integration, E2E + coverage report
> - [ ] 10-minute demo — live walkthrough
> - [ ] 5-minute Q&A — defend architectural decisions

> [TIP] **Teaching Tip:** The oral defense Q&A (deliverable 7) is where students shine or struggle. Run a structured format: 10-min demo -> 5-min Q&A -> 2-min feedback. Keep time strictly.

> [ENGAGE] **Gen-Z:** **-> Presentations:** "This is your showcase. Treat it like a product launch. Show what works, be honest about what doesn't, and own your decisions. The best presentations are confident and honest."

> [LOST] **If they're lost:** "If your live demo fails, switch to your video backup immediately. Don't panic. Don't try to fix it live. Examiners respect preparation more than perfection."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "Use AI for boilerplate (component scaffolding, API endpoint templates, test setup). Use it to review your architecture ('what security issues do you see in this design?'). Use it to generate your README structure. But the architecture decisions, the security posture, and the tradeoff analysis must be YOURS."

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Review my architecture for security issues" | "Make my architectural decisions" |
> | "Generate README structure" | "Write my tradeoff analysis" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: overly complex architectures, patterns students don't understand, security vulnerabilities in AI-generated code, "best practice" suggestions that don't fit the use case. Emphasize: if AI chose it and you can't explain why, you'll fail the Q&A.

> [ENGAGE] **Gen-Z:** "AI is your co-pilot, not your pilot. It can suggest routes, but YOU need to know where you're going and why. In the defense, examiners will ask 'why did you choose this?' — if your answer is 'AI suggested it,' that's not enough."

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the capstone pitfalls and disaster scenarios you need to prepare for. The demo disaster alone will save your presentation."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "App works locally but breaks in     |
> | production"                          |
> | Check: env vars, DB connection,      |
> | CORS, HTTPS, file paths              |
> +--------------------------------------+
> +--------------------------------------+
> | "It works but I can't explain why"   |
> | AI-generated code you don't          |
> | understand                           |
> | Fix: trace through every section     |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The demo disaster is like your presentation file not opening during class. Always have a backup: video recording, screenshots, local fallback. Murphy's Law says if something CAN break during a demo, it WILL."

> [Q&A] **Student Q:** "More features = better project, right?"
> **Short answer:** No. Working simple > broken complex.
> **Real answer:** A CRUD app with auth, tests, CI/CD, and a clean deployment is worth more than a social network with 20 features that crashes. Examiners evaluate: does it work? is it well-built? can you explain it? Not: how many features does it have?
> **The hidden question:** "So I shouldn't add more features?" -> Only if they work. A finished simple app beats an unfinished complex one every time.

> [LOST] **If they're lost:** "The #1 capstone issue: 'it works but I can't explain why.' Before your defense, go through every AI-generated section and trace through it line by line. If you can't explain it, rewrite it. The oral defense WILL expose gaps."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: 15-week journey -> restaurant grand opening analogy -> architecture review -> mock Q&A -> live presentations. The restaurant analogy is the key mental model. Key pitfalls: demo disasters (no backup), AI-generated code students can't explain, feature bloat over working simplicity, inability to articulate tradeoffs. Emphasize: the oral defense mirrors real architecture reviews at tech companies. The mock Q&A practice is the most valuable preparation activity. A working simple app with auth, tests, and CI/CD beats a broken complex app every time. The video backup for the demo is non-negotiable — prepare for Murphy's Law.

---

## Appendix: AI / Vibe-Coding Integration Guide

### Phase-by-Phase Policy

| Phase | Policy | Rationale |
|-------|--------|-----------|
| **Prelim (Weeks 1-4)** | Full AI access. Focus: "compare AI-generated TS types with hand-written ones" | Students have L1 foundations. AI as comparison tool, not crutch. |
| **Midterm (Weeks 5-8)** | AI allowed. Mandatory: 1-paragraph README per AI-generated component explaining what it does and what was changed | Build the audit muscle. Students must understand before accepting. |
| **PreFinals (Weeks 9-12)** | AI generates OpenAPI spec -> students review/correct/critique. AI generates client SDK -> students test and find bugs | AI as generator, student as quality gate. |
| **Finals (Weeks 13-16)** | Full AI. Assessment: system behavior, security, performance, and ability to articulate "AI suggested X, but I chose Y because..." | Mirror industry reality. Architects who leverage AI critically. |

### Core Principles

- **Prompt literacy** — teach chain-of-thought, persona prompting, context stuffing
- **Audit the output** — assume AI got something wrong; your job is to find it
- **Explain tradeoffs** — every AI suggestion comes with a decision ("I accepted this because...", "I rejected this and rewrote as...")
- **Ethics and attribution** — document what AI generated vs. what you wrote

### Cross-Cutting Practices

| Practice | Integration |
|----------|-------------|
| **Git** | Prelim: PR workflow, code review. Finals: CI/CD pipeline |
| **Kanban** | Every term starts with sprint planning. Week 15: release sprint |
| **Debugging** | Dedicated labs (Weeks 2, 7) + AI-assisted diagnostic culture |
| **Code Review** | PR-based workflow. Week 11 peer review. AI-assisted code review |
| **Deployment** | Week 15 CI/CD. Week 16 production deployment |
