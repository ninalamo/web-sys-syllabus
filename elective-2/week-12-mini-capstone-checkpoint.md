## Week 12: Mini-Capstone Checkpoint

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Architecture Diagram |
| Code Walkthrough | 35 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 60 min | Lab (mini-capstone build session) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 10 min | Group Debug + Q&A |
| Buffer | 5 min | Overflow |

> [TIP] **Teaching Tip (Week 12 strategy):** This is not a teaching week — it's a building week. Students should spend most of their time coding, not listening. Keep lectures short. The service layer is the new concept — everything else is review. Walk around constantly. This week reveals who actually learned the material and who has been coasting. Be supportive but honest: "If you can't wire up DI by now, you need to review Weeks 2 and 9."

---

### The Hook

> [SPEAK] **Script:** "Everything you've learned this semester — MVC, routing, models, validation, EF Core, APIs — it all comes together this week. You're not writing exercises anymore. You're building a real app. Scared? Good. That means it matters."

> [SLIDE] **Slide:** Title: "This Is Where It All Comes Together"  
> A puzzle visualization: pieces labeled "MVC," "Routing," "EF Core," "APIs," "Validation" clicking together into a complete app screenshot.  
> Subtitle: "Week 12: The pieces connect."

> [TIP] **Teaching Tip:** Deliver this with energy but also warmth. Some students are genuinely anxious about building something from scratch. Acknowledge it: "It's okay to be nervous. You have all the pieces. Today we just put them together."

> [ENGAGE] **Gen-Z:** "This is like the final boss level. You've been grinding XP all semester — leveling up your MVC skills, unlocking EF Core, mastering APIs. Now you face the boss: build a real app. You have all the skills. You just need to combine them."  
> **-> Poll:** "Raise your hand if you're nervous about building something from scratch. Good. That means you care. Now let's do it."

> [LOST] **If they're lost:** "Don't panic. This isn't a test. It's a checkpoint. You'll build something small but complete. If you can do a controller, a model, a view, and a database query — you can do this."

---

### The Analogy

> [SPEAK] **Script:** "You've been training for a sport all semester. Week 1 you learned to hold the racket. Week 5 you learned to serve. Week 9 you learned the rules. This week you play your first real match. You'll make mistakes. You'll drop the ball. But you'll also see how everything connects, and that's the point."

> [BOARD] **Whiteboard:** Draw the full architecture diagram:
> ```
> Browser (User visits /tasks)
>     v
> Controller (TaskController.Index)
>     v                    v
> Service (ITaskService)   Service (IWeatherService)
>     v                    v
> DbContext (Database)     HttpClient (External API)
>     v                    v
> Task data                Weather data
>     v                    v
>         ViewModel (combined)
>             v
>         View (HTML rendered)
> ```

> [TIP] **Teaching Tip:** This diagram is the most important visual of the entire term. Draw it slowly. Point to each layer. Say: "This is what a real .NET app looks like. Not a toy. A real app." Leave it on the board for the entire session.

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "Point to the diagram. If the database is down, which layer breaks first? If the API is slow, which layer feels it? 10 seconds, go!" (Database down -> Service layer. API slow -> Service layer -> Controller waits.)

> [LOST] **If they're lost:** "Think of it like a restaurant chain. The customer (browser) talks to the manager (controller). The manager tells the kitchen (service) what to make. The kitchen gets ingredients from the fridge (database) and from suppliers (APIs). Each layer has one job."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (10 min service layer -> 8 min separation of concerns -> 7 min integration patterns)

> [SPEAK] **Script:** "The service layer is the new concept this week. It's a class that sits between your controller and your data. Controllers handle HTTP. Services handle business logic. This separation is what separates toy apps from production apps."

> [SLIDE] **Slide:** Show the controller vs service comparison side by side. Left: a fat controller doing database work, validation, and API calls (labeled "Bad"). Right: a thin controller delegating to services (labeled "Good").

> [TIP] **Teaching Tip:** The service layer is a conceptual leap. Students will ask "why not just put it in the controller?" Answer: "You can. But when your controller is 200 lines long and you need the same logic in another controller, you'll wish you had a service." Show them a real-world example: a UserController and an AdminController both needing the same user lookup logic.

> [ASK] **Ask the class:** "If I need to get all tasks in two different controllers — do I copy-paste the database query, or do I put it in a service?" (Answer: Service. DRY — Don't Repeat Yourself.)

> [ENGAGE] **Gen-Z:** "The service layer is like having a group chat for your app's logic. Instead of every controller doing its own thing, they all ask the service. The service is the group admin — it knows the rules and coordinates everything."  
> **-> Phone moment:** "Think about how GCash works. The app (controller) doesn't talk to the bank directly. It goes through GCash's backend service. That service handles the logic, security, and database. Same pattern."

> [Q&A] **Student Q:** "Do I need a service for every model?"
> **Short answer:** No. Start with services for complex logic.
> **Real answer:** Simple CRUD (create, read, update, delete) can stay in controllers. Services are for when you have business rules, multiple data sources, or shared logic. Don't over-engineer a class project.
> **The hidden question:** "How do I know when it's complex enough?" -> If the controller method is more than 15 lines, consider a service.

> [Q&A] **Student Q:** "What's the difference between a service and a repository?"
> **Short answer:** A repository is just data access. A service is business logic + data access.
> **Real answer:** A repository wraps DbContext operations (GetAll, GetById, Add, Update, Delete). A service uses repositories (or DbContext directly) plus adds business rules: "A task can only be completed if it's not overdue." For this course, skip the repository layer — services talking directly to DbContext is fine.
> **The hidden question:** "Which pattern should I use for my capstone?" -> Service + DbContext directly. Keep it simple.

> [LOST] **If they're lost:** "Forget the architecture patterns for a second. The service layer is just a class that does the real work. The controller asks the service to do things. That's it. Start there. Refine later."

---

### Code Walkthrough

> [TIME] **Pacing:** 35 min (5 min model -> 10 min service interface + implementation -> 10 min controller with DI -> 10 min wiring + test)

> [SPEAK] **Script:** "Let's build a Task Manager with a weather feature. Watch how the controller delegates to two services — one for database tasks, one for API weather data. Everything connects through dependency injection."

> [SLIDE] **Slide:** Show the TaskItem model first. Then the ITaskService interface. Then the TaskService implementation. Then the controller. Finally Program.cs registration. Reveal one piece at a time.

> [TIP] **Teaching Tip:** **Type this live.** After typing the service, pause: "This is where the real work happens — not in the controller." After typing the controller, emphasize: "Look how thin this controller is. It just delegates. That's the goal." In Program.cs, highlight: "This one line wires everything together: `AddScoped<ITaskService, TaskService>()`."

> [BOARD] **Whiteboard:** Trace the full request flow:
> ```
> GET /task
>   v
> TaskController.Index()
>   v
> _taskService.GetAllAsync() -> db.Tasks.Include(t => t.Category).ToListAsync()
> _weatherService.GetCurrentWeatherAsync() -> HttpClient -> API -> JSON -> C# object
>   v
> Combine into TaskDashboardViewModel
>   v
> return View(model) -> renders HTML
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Build the service with me. Interface first, then implementation. Then the controller. Then wire it up in Program.cs. Run it. See tasks and weather on the same page. That's integration."

> [Q&A] **Student Q:** "Why use an interface for the service? Why not just the class?"
> **Short answer:** Interfaces make your code testable and swappable.
> **Real answer:** With an interface, you can swap implementations (e.g., a fake service for testing). DI containers register interfaces to implementations. It's the same DI pattern from Week 2 — now applied to services.
> **The hidden question:** "Is this overkill for a class project?" -> Maybe. But it's the industry standard. Practice it now.

> [LOST] **If they're lost:** "Start with just the service and controller for tasks. Skip the weather API for now. Get the database part working. Then add the API service. One layer at a time."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "This is the architecture used by 90% of production .NET apps. Controllers that just delegate. Services that contain real logic. DbContext for data access. ViewModels for display. When you interview for a job, you'll describe exactly this pattern. When you build your capstone, you'll use exactly this pattern."

> [SLIDE] **Slide:** A real company's architecture diagram (simplified). Label each layer: "This is what Microsoft, Accenture, and local .NET shops use. Same pattern. Different scale."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Connect it directly to their capstone and job interviews: "When an interviewer asks 'describe your project architecture,' you'll say: controllers delegate to services, services use EF Core for data and HttpClient for APIs. That answer gets you hired."

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you want to work at a company that builds real software, not just class projects?" (Most hands.) "This architecture is how real software is built. Learning it now gives you a head start."

> [LOST] **If they're lost:** "You don't need to understand enterprise architecture today. Just know: thin controllers, fat services. That's the pattern. Everything else builds on it."

---

### Exercise: Integrated App

> [TIME] **Pacing:** 60 min total (5 min setup -> 50 min build -> 5 min quick share)

> [SPEAK] **Script:** "Choose one: Task Manager with Weather, or Book Blog with GitHub Stats. Build it from scratch. Use everything you've learned. You have 50 minutes. I'll be walking around helping."

> [SLIDE] **Slide:** Exercise requirements checklist:
> - [ ] ASP.NET Core MVC project
> - [ ] EF Core with SQL Server (at least 2 related tables)
> - [ ] At least one external API integration
> - [ ] Service layer (interface + implementation)
> - [ ] DI wired up in `Program.cs`
> - [ ] Multiple views with layout
> - [ ] Form validation on at least one page
> - [ ] Architecture diagram (text is fine)

> [TIP] **Teaching Tip:** This is a build session, not a lecture. Walk around constantly. The first 15 minutes will be setup-heavy — help students scaffold the project, create folders, and register services. The "aha" moment is when they see data from both the database and an API on the same page.

> [ENGAGE] **Gen-Z:** **-> Work in pairs or solo:** "This is your mini-capstone. Treat it like a real project. Plan first, then code. Draw your architecture diagram before you write a single line."

> [ASK] **Mid-exercise check-in (at 25 min):** "How many have the database working?" (Show of hands.) "How many have the API working?" "How many have both on the same page?" "If you're stuck, raise your hand — I'll come over."

> [LOST] **If they're lost:** "Start with the database part. Get EF Core working with one model. Then add the second model with a relationship. Then add the service layer. Then the API. Then combine. Don't try to build everything at once."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, AI is your full pair programmer. Architecture suggestions, service layer code, integration patterns — all allowed. But comment every AI-generated line. And be ready to explain your choices."

> [SLIDE] **Slide:** Prompt template:
> "Here's my architecture plan [describe]. Generate the service layer code for feature X. I need an interface and implementation."

> [TIP] **Teaching Tip:** Demonstrate a full AI-assisted workflow: (1) Describe the architecture to AI, (2) Get service code, (3) Add comments, (4) Wire up DI, (5) Test. Emphasize: "AI generates the code, but YOU understand it. That's the difference between using AI and being used by it."

> [ENGAGE] **Gen-Z:** "AI is your 'senior developer' this week — it suggests architecture, writes boilerplate, and catches mistakes. But you're still the one who ships the code. If you can't explain it, you can't defend it."

> [LOST] **If they're lost:** "Start by asking AI to help you plan: 'I want to build a Task Manager with weather. What folders and files do I need?' Then ask for code. Planning first prevents chaos."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 10 min (5 min common errors -> 5 min group debug)

> [SPEAK] **Script:** "Here are the integration errors you'll see this week. Most are DI registration issues or circular dependencies."

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | "Unable to resolve service for type      |
> | 'ITaskService'"                          |
> | You forgot AddScoped in Program.cs       |
> +------------------------------------------+
> +------------------------------------------+
> | Circular dependency detected             |
> | ServiceA -> ServiceB -> ServiceA           |
> | Fix: break the cycle with an interface   |
> +------------------------------------------+
> +------------------------------------------+
> | API call in a foreach loop               |
> | Slow. Use Task.WhenAll instead           |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "'Unable to resolve service' is like calling someone who didn't save your number. You're trying to use a service that was never registered. Fix: `AddScoped<ITaskService, TaskService>()` in Program.cs."

> [Q&A] **Student Q:** "My app works but it's really slow when loading the page."
> **Short answer:** You might be making API calls sequentially or in a loop.
> **Real answer:** If you call APIs one after another, each one waits for the previous. Use `Task.WhenAll` to call them in parallel. Also check: are you using `.Include()` for database queries? Without it, you might have the N+1 problem.
> **The hidden question:** "How do I check?" -> Add `Console.WriteLine` before and after each API call to see the timing.

> [LOST] **If they're lost:** "The two things to check first: (1) Is every service registered in Program.cs? (2) Does your controller constructor match the registered services? Those fix 90% of integration errors."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: every service you use in a constructor MUST be registered in Program.cs with `AddScoped<TInterface, TImplementation>()`."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. This is a build week — keep lectures short, walk around constantly. The service layer is the new concept — everything else is review from Weeks 2-11. The architecture diagram on the whiteboard should stay up the entire session. The #1 error is unregistered services — drill `AddScoped<TInterface, TImplementation>()`. Be supportive: students are nervous about building from scratch. Celebrate small wins: "Your first API call worked? That's huge."

---

## TERM 4: FINALS — User Interaction + Security + Capstone

---

