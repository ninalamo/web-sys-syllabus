## Week 6: Controllers & Action Results

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Code Comparison |
| Code Walkthrough | 30 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 6 strategy):** Students will want to put all logic in the controller. Resist this urge early — frame the controller as a "traffic cop" that delegates, not a "kitchen" that cooks. The key mental model: every action returns an `IActionResult`, and the specific type determines what the browser receives.

---

### The Hook

> [SPEAK] **Script:** "Your controller is the bouncer of your web app. It decides who gets in (View), who gets kicked out (Redirect), who gets a VIP pass (Json), and who's dead to the app (StatusCode 404)."

> [SLIDE] **Slide:** Title: "The Controller is the Bouncer"  
> Visual: A bouncer at a club door with four signs: "View -> Inside," "Redirect -> Next door," "Json -> VIP lounge," "404 -> Not on the list."

> [ENGAGE] **Gen-Z:** "Every response your app sends is the controller making a decision. View = 'you're welcome in.' Redirect = 'go somewhere else.' Json = 'here's the data, no HTML.' 404 = 'you don't exist to me.'"  
> **-> Poll:** "Raise your hand if you've ever clicked a link and got redirected to a login page. That's `RedirectToAction` in action."

> [LOST] **If they're lost:** "A controller is just a class that handles web requests. You type a URL, the controller runs a method, and that method decides what to send back. That's it."

---

### The Analogy

> [SPEAK] **Script:** "A controller is a fast-food drive-thru speaker. The customer (browser) says 'I'll have a #5' (the URL). The speaker (controller) can respond in different ways: 'Here's your food' is View, 'We're out, go to the other location' is Redirect, 'Here's the nutritional info' is Json, and 'Sorry, we're closed' is StatusCode."

> [BOARD] **Whiteboard:** Draw the drive-thru analogy:
> ```
> Customer (Browser) -> "I want /shop/details/5"
>     v
> Speaker (Controller) -> Details(int id)
>     v
> Response options:
>   [BURGER] View()     -> "Here's the page"
>   [REFRESH] Redirect() -> "Go to /shop instead"
>   [CLIPBOARD] Json()     -> "Here's the data"
>   [NOENTRY] StatusCode -> "Not found / Closed"
> ```

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "If you visit `/shop/details/5` and the product doesn't exist — what should the controller return? 10 seconds, go!" (Answer: `NotFound()` or `StatusCode(404)`.)

> [LOST] **If they're lost:** "Think of it like GCash. You request money transfer. The app responds: success (View), insufficient funds (StatusCode 400), or server error (StatusCode 500). Same request, different responses."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (15 min action results -> 10 min model binding primitives)

> [SPEAK] **Script:** "Every action method returns `IActionResult`. Think of it as 'something the browser can work with.' There are about 8 types you'll use 90% of the time. Let's go through each one."

> [SLIDE] **Slide:** Show each action result type one at a time — not all at once. For each: the method name, what it returns, and a one-line example. Use a table format.

> [TIP] **Teaching Tip:** The most important distinction: `View()` returns HTML, `Json()` returns data, `Redirect()` sends the browser elsewhere. Students confuse these constantly. Emphasize: "View = page. Json = data. Redirect = go somewhere else."

> [ASK] **Ask the class:** "If I'm building an API for a mobile app — which action result will I use most?" (Answer: `Json()` and `StatusCode()`. Mobile apps don't render HTML.)

> [ENGAGE] **Gen-Z:** "Action results are like the different ways you respond to a text. View = a full reply. Json = just the facts. Redirect = 'check this link instead.' 404 = left on read."  
> **-> Phone moment:** "Think about the last 5 apps you used. Which ones showed you pages (View)? Which ones showed you data feeds (Json)? Both are action results."

> [Q&A] **Student Q:** "Why `IActionResult` and not just `string` or `ViewResult`?"
> **Short answer:** So one method can return different types depending on conditions.
> **Real answer:** If you return `ViewResult`, you can only return views. `IActionResult` lets you return a view, a redirect, or an error — all from the same method. This is essential for real-world logic like "if not found, return 404."
> **The hidden question:** "Isn't that over-engineering?" -> Not when you need conditional responses.

> [Q&A] **Student Q:** "What's the difference between `Redirect()` and `RedirectToAction()`?"
> **Short answer:** `Redirect` takes a URL. `RedirectToAction` takes a controller and action name.
> **Real answer:** `RedirectToAction` uses routing to build the URL. If your routes change, `RedirectToAction` still works. `Redirect("https://...")` breaks if the URL changes.
> **The hidden question:** "Which should I use?" -> `RedirectToAction` for internal routes. `Redirect` for external URLs.

> [LOST] **If they're lost:** "Forget the interface name. Just remember: `return View()` shows a page. `return Json()` shows data. `return Redirect()` sends you elsewhere. `return NotFound()` says 'not here.' Start with these four."

---

### Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min setup -> 15 min live type -> 10 min trace-through)

> [SPEAK] **Script:** "Let's build a controller that demonstrates every major action result type. Watch how each one produces a different response in the browser."

> [SLIDE] **Slide:** Show the `DemoController` one action at a time. After each action, show what the browser sees when you visit that route.

> [TIP] **Teaching Tip:** **Type this live.** After typing each action, immediately run the app and visit the route. Students need to see the actual browser output — not just the code. For `Json()`, show the raw JSON in the browser. For `Redirect()`, show the browser actually navigating.

> [BOARD] **Whiteboard:** Trace `/demos/json`:
> ```
> GET /demos/json
>   v
> DemoController.GetJson()
>   v
> Creates anonymous object { Id=1, Name="Wireless Mouse", Price=49.99 }
>   v
> return Json(product) -> serializes to JSON
>   v
> Response: Content-Type: application/json
> Body: {"id":1,"name":"Wireless Mouse","price":49.99}
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Type the `DemoController` with me. After each action, we'll test it in the browser. Don't skip any — each one teaches a different response type."

> [Q&A] **Student Q:** "Why does the `Json()` result look different in different browsers?"
> **Short answer:** Browsers render JSON differently.
> **Real answer:** Chrome shows raw JSON. Firefox might try to download it. Edge might format it. The data is the same — only the display differs. Use the Network tab to see the raw response.
> **The hidden question:** "Is my JSON broken?" -> No. It's the browser's rendering.

> [LOST] **If they're lost:** "Let's focus on just two actions first: `View()` and `Content()`. Get those working. Then add `Redirect()`. Then `Json()`. Build up gradually."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "Every response your app sends is one of these types. Understanding action results means you control exactly what the browser gets. Modern apps increasingly return JSON — SPAs, mobile apps, APIs. They all use the same controllers you're learning today."

> [SLIDE] **Slide:** Screenshot of a real API response (e.g., GitHub API returning JSON for a user). Label: "This is just a controller returning `Json()`. Same pattern you learned today."

> [TIP] **Teaching Tip:** Connect to the job market: "Every .NET job posting mentions APIs. APIs are just controllers that return `Json()` instead of `View()`. You're learning API development right now."

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have used an API before?" (Some hands.) "You just learned how to build one. Every `Json()` return is an API endpoint."

> [LOST] **If they're lost:** "You don't need to master all action results today. Just understand: the controller decides what the browser gets. That decision is the return statement."

---

### Exercise: Controller Portfolio

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Build a `PortfolioController` with at least 5 different action result types. Each route should demonstrate a different response. You have 40 minutes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] `/portfolio` -> `Content()` with intro text
> - [ ] `/portfolio/projects` -> `View()` with project list
> - [ ] `/portfolio/project/{id:int}` -> `View()` or `NotFound()`
> - [ ] `/portfolio/api/projects` -> `Json()` with project data
> - [ ] `/portfolio/redirect` -> `Redirect()` to GitHub
> - [ ] `/portfolio/error` -> `StatusCode(500)`

> [TIP] **Teaching Tip:** Circulate during the first 10 minutes. Students will get stuck on the `NotFound()` conditional logic — "how do I check if the project exists?" Help them with the pattern: `if (project == null) return NotFound();`.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person builds the View and Content actions, the other builds Json and Redirect. Then combine and test all routes together."

> [ASK] **Mid-exercise check-in (at 20 min):** "How many have 3 action types working?" (Show of hands.) "The JSON endpoint — visit it in the browser. Do you see raw data with no HTML? That's the API pattern."

> [LOST] **If they're lost:** "Start with just `Content()` and `View()`. Get those working. Then add `Redirect()`. Don't try to build all 5 at once."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, AI is your debugging partner. Ask it why your View returns 404, why Json downloads instead of displaying, or why your redirect loops. But don't ask it to generate your controller."

> [SLIDE] **Slide:** Prompt template:
> "I called [route] and expected [result type] but got [actual result]. Here's my controller code [paste]."

> [TIP] **Teaching Tip:** Demonstrate a good AI prompt vs a bad one. Good: "My View() returns 404 for Shop/Index. Here's my controller and view path." Bad: "Build me a portfolio controller."

> [ENGAGE] **Gen-Z:** "AI is your 'response type checker' — it helps you figure out why the browser shows something unexpected. Use it to debug, not to build."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the action result errors you'll see this week. Most are path issues or type confusion."

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | View() returns 404                       |
> | View file not at Views/{Controller}/     |
> | {Action}.cshtml                          |
> +------------------------------------------+
> +------------------------------------------+
> | Redirect() loops forever                 |
> | You redirected to the same URL that      |
> | triggers the redirect.                   |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "A redirect loop is like being stuck in a group chat where everyone keeps tagging each other. A -> B -> A -> B -> crash. Fix: make sure the redirect goes somewhere different."

> [Q&A] **Student Q:** "Why does `NotFound()` return an empty page?"
> **Short answer:** By default, it returns no body.
> **Real answer:** Pass an object to include a message: `return NotFound(new { error = "Not found" })`. This returns JSON with the error message.
> **The hidden question:** "How do I show a custom 404 page?" -> That's middleware, covered later.

> [LOST] **If they're lost:** "The two things to check first: (1) Is your view file in the right folder? (2) Does your action method name match the view file name? Those fix 90% of action result issues."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: `View()` looks for `Views/{Controller}/{Action}.cshtml`. If that file doesn't exist, you get 404."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. The key mental model is "controller = traffic cop." Test every action result in the browser immediately after typing it — seeing the actual response is worth more than reading about it.

---

