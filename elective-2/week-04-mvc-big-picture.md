## Week 4: MVC Big Picture

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Pipeline Diagram |
| Code Walkthrough | 30 min | Live Code (scaffold + trace) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 4 strategy):** This is the first time students build a real web app. The MVC pattern will feel abstract until they see it working. Scaffold the project live, then trace the pipeline step by step. The "aha" moment is when they visit a URL and see their own HTML appear.

---

### The Hook

> [SPEAK] **Script:** "You know how Grab works? You open the app, see a map, order food, track delivery? That's MVC. And now you're going to build it. Well, not Grab. But the architecture behind it."

> [SLIDE] **Slide:** Title: "You Use MVC Every Day"  
> Screenshots of Grab, Foodpanda, and Shopee — all labeled "Built on MVC architecture."

> [TIP] **Teaching Tip:** Connect MVC to apps they use daily. Filipino students know Grab and Foodpanda well. This makes the abstract pattern feel relevant and achievable.

> [ENGAGE] **Gen-Z:** "Every app you use — Grab, Foodpanda, Shopee, even GCash — they all use MVC. You're not learning some academic concept. You're learning how the apps you use every day are built."  
> **-> Poll:** "Who here has ordered from Grab or Foodpanda this week?" (Most hands.) "That's MVC in action."

> [LOST] **If they're lost:** "MVC is just a way of organizing code so it doesn't become a mess. Think of it like having separate folders for photos, documents, and music on your phone. MVC does that for web apps."

---

### The Analogy

> [SPEAK] **Script:** "MVC is a restaurant with a really good system. The menu tells you what's available. The waiter takes your order. The kitchen cooks the food. The plating makes it look good. The customer never goes into the kitchen. The waiter never cooks. The chef never talks to customers."

> [BOARD] **Whiteboard:** Draw the restaurant MVC map:
> ```
> Customer (Browser)
>     v reads
> Menu (Route: /products/details/5)
>     v orders
> Waiter (Controller: ProductsController.Details)
>     v requests
> Kitchen (Model: Get product #5 from DB)
>     v returns
> Plating (View: .cshtml template -> HTML)
>     v serves
> Customer sees the page
> ```

> [TIP] **Teaching Tip:** The restaurant analogy is perfect for MVC because it maps 1:1. Emphasize the separation: "The waiter NEVER cooks. The controller NEVER does database work." This is the core MVC principle.

> [ENGAGE] **Gen-Z:** "MVC is like a group project where everyone has a clear role. Model = the researcher (gets the data). View = the designer (makes it look good). Controller = the team leader (coordinates everything). When roles are clear, the project works. When they're not — chaos."  
> **-> Turn to your neighbor:** "In the restaurant analogy, what happens if the waiter starts cooking? What breaks? 10 seconds, go!"

> [LOST] **If they're lost:** "Forget MVC for a second. Think about a website. You type a URL. Something figures out what page you want. That something grabs the data. Then it puts the data into a template. Then sends you the page. MVC is just names for those steps."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (10 min pipeline flow -> 8 min file structure -> 7 min key insights)

> [SPEAK] **Script:** "Here's the entire MVC request flow in seven steps. This is the backbone of every web app you'll build this semester. Trace it with me."

> [SLIDE] **Slide:** Animated pipeline diagram showing each step: Browser -> URL -> Route -> Controller -> Model -> View -> HTML -> Browser. Reveal one step at a time.

> [TIP] **Teaching Tip:** The key insight is "Controller is the middleman." Students will want to put business logic in the controller. Resist this urge early: "The controller delegates. It doesn't do real work."

> [ASK] **Ask the class:** "When you visit `/products/details/5`, which part figures out that 'products' means ProductsController?" (Answer: Routing.)

> [ENGAGE] **Gen-Z:** "The MVC pipeline is like a GrabFood order. You browse (Route), order (Controller), kitchen cooks (Model), food is plated (View), delivered to you (HTML). Each step has one job."  
> **-> Phone moment:** "Open GrabFood. Think about each screen you see. The menu list? That's a View. The restaurant data? That's a Model. The app figuring out what to show? That's a Controller."

> [Q&A] **Student Q:** "Why can't the controller just do everything? Why separate Model and View?"
> **Short answer:** You can, but it becomes unmaintable fast.
> **Real answer:** When the controller does everything, you get "fat controllers" — 500-line methods that mix database queries, business logic, and HTML generation. MVC separation means you can change the database without touching the view, or redesign the view without touching the model.
> **The hidden question:** "Isn't this over-engineering for a simple app?" -> Maybe for 10 lines. Not for 10,000.

> [Q&A] **Student Q:** "What's Razor? Is it a programming language?"
> **Short answer:** It's a template engine, not a language.
> **Real answer:** Razor lets you mix C# code with HTML in .cshtml files. The `@` symbol tells Razor "this is C#." It processes the template and outputs pure HTML.
> **The hidden question:** "Do I need to learn a new language?" -> No. It's just HTML with C# sprinkled in.

> [LOST] **If they're lost:** "MVC in three sentences: (1) URL comes in. (2) Controller handles it and gets data from Model. (3) Controller sends data to View, which makes HTML. That's it. Everything else is details."

---

### Code Walkthrough

> [TIME] **Pacing:** 30 min (10 min scaffold -> 10 min Program.cs -> 10 min controller + view + trace)

> [SPEAK] **Script:** "Let's scaffold an MVC project from scratch and trace exactly what happens when a request comes in. Watch how the pieces connect."

> [SLIDE] **Slide:** Show the project file structure first, then reveal Program.cs, then the controller, then the view. Each on its own slide.

> [TIP] **Teaching Tip:** Scaffold the project live with `dotnet new mvc`. Then open each file and explain its role. The most important file is Program.cs — it's where MVC is configured. Trace the full pipeline for `GET /` step by step.

> [BOARD] **Whiteboard:** Draw the route matching:
> ```
> URL: /
> Pattern: {controller=Home}/{action=Index}/{id?}
> Match: controller=Home (default), action=Index (default), id=null
> Result: HomeController.Index() runs
> ```

> [ENGAGE] **Gen-Z:** "Scaffolding a project is like using a template on Canva. You don't start from a blank page — you start with a structure and customize it. `dotnet new mvc` is your template."  
> **-> Type-along:** "Run `dotnet new mvc -n HelloMvc` with me. Then `cd HelloMvc`. Then `dotnet run`. Watch it compile and open the browser."

> [Q&A] **Student Q:** "What does `AddControllersWithViews()` actually do?"
> **Short answer:** It tells ASP.NET Core to set up the MVC pipeline.
> **Real answer:** It registers the services needed for controllers, views, model binding, and routing. Without it, ASP.NET doesn't know how to handle MVC requests.
> **The hidden question:** "What if I forget this line?" -> Your controllers won't work. You'll get 404s everywhere.

> [LOST] **If they're lost:** "Let me show you the simplest MVC app possible. One controller, one action, one view. Three files. That's all you need to start."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "MVC is the dominant web architecture pattern. Every major framework uses it or a variant. Learn it once, apply it everywhere."

> [SLIDE] **Slide:** Logos of ASP.NET Core MVC, Ruby on Rails, Django, Laravel, Spring MVC — all labeled "Uses MVC."

> [TIP] **Teaching Tip:** This section should be 5 minutes max. Show them that MVC is transferable knowledge. If they learn it in C#, they can apply it to Python, Ruby, Java, etc.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you plan to work with web apps after graduation?" (Most hands.) "MVC is the most common pattern you'll encounter. Learning it now gives you a head start."

> [LOST] **If they're lost:** "You don't need to love MVC today. Just understand: it organizes code. That's enough for now."

---

### Exercise: Hello MVC

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Create a new MVC project. Add a ShopController with two actions. Create the views. Run it. Visit the routes. You'll have your first working web app."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] `dotnet new mvc -n HelloMvc`
> - [ ] Examine all folders and files
> - [ ] Create `ShopController` with `Index()` and `Product(int id)`
> - [ ] Create views in `Views/Shop/`
> - [ ] Run and visit both routes

> [TIP] **Teaching Tip:** The first 15 minutes will be setup-heavy. Circulate and help with `dotnet` commands. The "aha" moment is when they visit `/shop/product/5` and see their own dynamic content.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person creates the controller, the other creates the views. Then swap. You'll learn faster by seeing both sides."

> [LOST] **If they're lost:** "Start with just the `Index()` action. Get that working first. Then add `Product(int id)`. Don't try to build everything at once."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, you can ask AI to explain MVC concepts or debug routing issues. You cannot ask it to generate your controllers or views."

> [SLIDE] **Slide:** Allowed vs Not Allowed:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Explain what app.UseRouting() does" | "Generate my ShopController" |
> | "Why is my view not found?" | "Write all my views for me" |

> [TIP] **Teaching Tip:** The scaffolded project has a lot of generated code. Encourage students to ask AI to explain specific lines rather than generating new code.

> [ENGAGE] **Gen-Z:** "AI is your 'code-senpai' for MVC concepts. Ask it to explain the pipeline, not to build your app."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the MVC errors you'll see this week. Most of them are naming or path issues."

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | 404 on a route that should work          |
> | Check: Controller name needs "Controller"|
> | suffix. Action method name must match.   |
> +------------------------------------------+
> +------------------------------------------+
> | "The view 'Index' was not found"         |
> | Path must be: Views/{Controller}/{Action}|
> | .cshtml. Case matters on Linux/Mac.      |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "A 404 on your own route is like giving someone your address but they go to the wrong house. Check the address (route), check the house name (controller), check the room (action)."

> [Q&A] **Student Q:** "Why does the controller need 'Controller' at the end of the name?"
> **Short answer:** It's a convention that ASP.NET uses to find controllers.
> **Real answer:** The routing system looks for classes ending in `Controller`. `ShopController` maps to `/shop`. `Shop` alone won't be found. It's how ASP.NET discovers controllers automatically.
> **The hidden question:** "Can I change this convention?" -> Yes, but don't. It's standard for a reason.

> [LOST] **If they're lost:** "The two things to check first: (1) Does your controller name end with 'Controller'? (2) Is your view file in the right folder? Those two fix 90% of MVC errors."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The scaffold-and-trace approach is key — students need to see the full pipeline working end-to-end.

---

## TERM 2: MIDTERM — ASP.NET Core MVC (The Hard Part)

---

