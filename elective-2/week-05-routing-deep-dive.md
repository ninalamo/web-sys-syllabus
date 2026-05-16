## Week 5: Routing Deep-Dive

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Live Route Matching |
| Code Walkthrough | 30 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 5 strategy):** Routing is the first "invisible" thing students encounter — it either works or gives a 404 with no explanation. Spend extra time on route matching order and `MapControllers()`. Use the whiteboard heavily to trace URLs to controllers.

---

### The Hook

> [SPEAK] **Script:** "TikTok's 'For You' page is just a really well-optimized route. `/fyp?user=me` -> algorithm does its thing -> video. Your app's routing is the same idea but with less machine learning and more curly braces."

> [SLIDE] **Slide:** Title: "You Already Use Routing Every Day"  
> Left: TikTok URL `/fyp` | Right: GrabFood URL `/restaurant/jollibee/order`  
> Subtitle: "Every app you use is just fancy routing."

> [ENGAGE] **Gen-Z:** "Every URL you've ever typed, every link you've ever clicked — that's routing. You're not learning something new. You're learning how the thing you already use actually works."  
> **-> Poll:** "Raise your hand if you've ever gotten a 404 and just closed the tab. Today you'll learn why that happened."

> [LOST] **If they're lost:** "Routing is just matching a URL to the right code. That's it. Type `/about` -> show about page. Type `/contact` -> show contact page. We're just adding rules."

---

### The Analogy

> [SPEAK] **Script:** "Routing is like GPS navigation. You type an address (URL), the GPS (router) figures out which road to take (controller), which house to go to (action), and whether you need a gate code (route parameter). If the address doesn't match anything, GPS says 'address not found' — that's your 404."

> [BOARD] **Whiteboard:** Draw three boxes connected by arrows:
> ```
> URL -> Router -> Controller.Action
> "/store/details/42" -> matches -> StoreController.Details(id=42)
> ```
> Below: "GPS analogy: Address = URL, Route = Controller, House = Action, Gate code = Parameters"

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "If `/store/details/42` is an address, what's the controller? What's the action? 10 seconds, go!" (Answer: Controller = Store, Action = Details, Parameter = 42.)

> [LOST] **If they're lost:** "Think of it like a school directory. You want 'Juan in Room 301.' The directory (router) tells you: building (controller) = Main, room (action) = 301, person (parameter) = Juan."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (10 min convention routing -> 10 min attribute routing -> 5 min constraints)

> [SPEAK] **Script:** "There are exactly two ways to define routes in ASP.NET Core. Convention-based: one rule for everything. Attribute-based: each controller declares its own. We'll use attribute routing because it's explicit and easier to debug."

> [SLIDE] **Slide:** Show convention routing first — single `MapControllerRoute` line. Then reveal attribute routing with the `ShopController` example. Highlight: "Same result, different approach."

> [BOARD] **Whiteboard:** Draw the route matching table:
> ```
> URL                  -> Route Pattern              -> Controller.Action
> /shop                -> [Route("")]                -> ShopController.Index
> /shop/item/5         -> [Route("item/{id}")]       -> ShopController.Product(id=5)
> /shop/category/games -> [Route("category/{name}")] -> ShopController.ByCategory(name="games")
> ```

> [TIP] **Teaching Tip:** Students will confuse convention vs attribute routing. Emphasize: **you can use both, but attribute routing is clearer for beginners.** The constraint section (`{id:int}`) is where most errors happen — spend extra time here.

> [ASK] **Ask the class:** "What happens if I visit `/shop/item/abc` with the `{id:int}` constraint?" (Pause. Answer: 404 — "abc" isn't an integer, so the route doesn't match.)

> [ENGAGE] **Gen-Z:** "Route constraints are like TikTok's age filter — `{id:int}` means 'only integers allowed.' If you're not an int, you don't get in. No explanation, just 404."  
> **-> Phone moment:** "Pull up any URL on your phone. The part after the domain? That's what we're matching today."

> [Q&A] **Student Q:** "Can I use both convention and attribute routing in the same app?"
> **Short answer:** Yes, but don't.
> **Real answer:** Mixing them creates confusion about which route matches first. Pick one convention. For MVC apps, attribute routing is cleaner.
> **The hidden question:** "Which one should I use?" -> Attribute routing. It's explicit and self-documenting.

> [Q&A] **Student Q:** "What does the `?` mean in `{id?}`?"
> **Short answer:** It makes the parameter optional.
> **Real answer:** `/store/details` and `/store/details/42` both match. Without `?`, only the version with the ID matches.
> **The hidden question:** "When should I make parameters optional?" -> When the action has sensible defaults.

> [LOST] **If they're lost:** "Forget the syntax for a second. Routing answers one question: 'When someone visits this URL, which method should run?' That's the entire concept. Everything else is just how you write the rule."

---

### Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min Program.cs setup -> 15 min controller + routes -> 10 min trace-through)

> [SPEAK] **Script:** "Let's build a multi-page site with explicit attribute routing. Watch how each `[Route]` attribute maps to a URL. Then we'll trace exactly what happens when a request comes in."

> [SLIDE] **Slide:** Show `Program.cs` first — highlight `app.MapControllers()`. Then reveal `StoreController` one action at a time. Don't show the whole controller at once.

> [TIP] **Teaching Tip:** **Type this live, don't paste.** When you type `app.MapControllers()`, pause: "Without this line, your `[Route]` attributes do nothing. This is the #1 mistake this week." Then trace `/store/details/42` step by step on the whiteboard.

> [BOARD] **Whiteboard:** Trace the full request path:
> ```
> GET /store/details/42
>   v
> [Route("store")] on StoreController -> prefix match [OK]
>   v
> [Route("details/{id:int}")] -> pattern match [OK]
>   v
> 42 is int -> constraint passes [OK]
>   v
> Details(int id) runs with id = 42
>   v
> Returns View with ViewBag.ProductId = 42
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Open your project. Type the `StoreController` with me. Every route attribute. Every action. Don't copy-paste — typing builds the muscle memory."

> [Q&A] **Student Q:** "Why do I need both `[Route("")]` and `[Route("index")]` on the same action?"
> **Short answer:** So both `/store` and `/store/index` work.
> **Real answer:** Multiple `[Route]` attributes on one action let you support multiple URLs for the same page. Useful for backward compatibility.
> **The hidden question:** "Is this overkill?" -> Maybe. But it's a useful pattern to know.

> [LOST] **If they're lost:** "Let's trace the simplest route first: `GET /store`. The controller has `[Route("store")]` — that's the prefix. The action has `[Route("")]` — that means 'no extra path.' So `/store` = prefix + empty = match. That's it."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "Routing is the first thing that happens when a request hits your app. If routing is broken, nothing else matters. At companies like Microsoft and Uber, routing misconfigurations have caused entire site outages."

> [SLIDE] **Slide:** Screenshot of a real 404 error page from a major site (e.g., GitHub's 404 page with their octocat). Label: "Even big companies get routing wrong sometimes."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. The SEO point is the most practical — `/product/nike-shoes` vs `/product?id=3982`. Show them a real Google search result to make it concrete.

> [ENGAGE] **Gen-Z:** "Clean URLs are like having a clean Instagram bio. `/product/nike-shoes` tells Google and humans exactly what the page is. `/product?id=3982` looks sketchy and ranks lower."

> [LOST] **If they're lost:** "You don't need to memorize everything today. Just remember: routing = URL to code. If routing works, your app works. If it doesn't, nothing else matters."

---

### Exercise: Multi-Page Site with 3+ Routes

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Build a GameZone store with four routes. Each route should display different info. Use attribute routing. You have 40 minutes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Create `GamesController` with `[Route("games")]`
> - [ ] `/games` — list all games (hardcoded `List<Game>`)
> - [ ] `/games/details/{id:int}` — show game details
> - [ ] `/games/genre/{genre}` — filter by genre
> - [ ] `/games/search/{query:required}` — search by name

> [TIP] **Teaching Tip:** Circulate during the first 10 minutes — students will get stuck on `MapControllers()` or route constraints. The "aha" moment is when they visit `/games/details/5` and see dynamic content.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person writes the controller, the other creates the views. Then swap. You'll learn faster by seeing both sides."

> [ASK] **Mid-exercise check-in (at 20 min):** "How many have `/games` working?" (Show of hands.) "How many have `/games/details/{id}` working?" "If neither, let's do a quick group debug."

> [LOST] **If they're lost:** "Start with just ONE route: `/games`. Get that working. Then add `/games/details/{id:int}`. Don't try to build all four at once."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week marks a policy shift: AI is now your debugging tutor. Ask it why a route isn't matching. Ask it to explain 404s. But you still can't ask it to generate your controller."

> [SLIDE] **Slide:** Allowed vs Not Allowed:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Why is this route not matching?" | "Generate my GamesController" |
> | "Why am I getting 404 on /games/details/abc?" | "Write all my routes for me" |

> [TIP] **Teaching Tip:** Frame the policy shift positively: "You've earned more AI freedom because you understand the basics now. But debugging with AI is a skill — you need to know what to ask."

> [ENGAGE] **Gen-Z:** "AI is your 'route detective' — it helps you figure out why things break, but it doesn't build things for you. Use it like Google, not like a ghostwriter."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the routing errors you WILL see this week. Let's go through them so you don't spend 20 minutes Googling."

> [SLIDE] **Slide:** Error cards:
> ```
> +-----------------------------------------+
> | 404 on valid route                      |
> | Did you call app.MapControllers()?      |
> | Did you restart the app?                |
> +-----------------------------------------+
> +-----------------------------------------+
> | AmbiguousMatchException                 |
> | Two routes match the same URL.          |
> | Fix: Make one route more specific.      |
> +-----------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "AmbiguousMatchException is like two people answering your call at the same time. ASP.NET says 'I don't know who to talk to' and throws an error. Fix: make one route more specific."

> [Q&A] **Student Q:** "Why does a constraint failure give 404 instead of 400?"
> **Short answer:** Because the route doesn't match — it's "not found," not "bad request."
> **Real answer:** A constraint is part of the route pattern. If the constraint fails, ASP.NET treats it as if the route doesn't exist. Another route might match, so it keeps looking.
> **The hidden question:** "That's confusing." -> Yes. It's a known quirk of ASP.NET Core routing.

> [LOST] **If they're lost:** "The two things to check first: (1) Did you call `app.MapControllers()` in Program.cs? (2) Did you restart the app after changing routes? Those fix 90% of routing issues."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: `MapControllers()` enables attribute routing. Without it, your `[Route]` attributes are ignored."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. The #1 pitfall is forgetting `app.MapControllers()` — emphasize it repeatedly. Use the whiteboard to trace URLs to actions — visual route matching is the fastest way to build the mental model.

---

