## Week 5: Routing Deep Dive

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Pattern Matching |
| Code Walkthrough | 30 min | Live Code (Conventional vs Attribute) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** Routing is about pattern matching. Students often struggle when a URL returns a 404 despite the controller existing. Focus heavily on how the engine matches a string to a C# method.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "How does the server know that `youtube.com/watch?v=123` goes to the video player, but `youtube.com/shorts` goes to the short-form feed? That's routing. It's the traffic cop of your application."

> [BOARD] **Whiteboard Analogy:** The Post Office Sorter
> *   The URL is the zip code on an envelope.
> *   Routing is the post office sorting machine. It looks at the zip code and throws it into the correct bin (Controller/Action). If it doesn't match any known pattern, it throws it in the trash (404 Not Found).

---

### 2. Core Concepts & Discussion Topics

#### Topic A: Conventional Routing
> **[SPEAK] Discussion:** "Conventional routing sets a master rule in `Program.cs` that applies to the whole app. It assumes you will name your classes and methods perfectly."
>
> **[CODE] Example:** 
> ```csharp
> app.MapControllerRoute(
>     name: "default",
>     pattern: "{controller=Home}/{action=Index}/{id?}");
> ```
>
> **[TIP] Instructor Tip:** Explain the `{id?}`. The `?` means it's optional. If they don't provide an ID, the route still works!

#### Topic B: Attribute Routing
> **[SPEAK] Discussion:** "Conventional routing is great for websites. Attribute routing is required for APIs. It gives you microscopic control over exactly what URL triggers a specific method by putting a tag directly above the code."
>
> **[CODE] Example:**
> ```csharp
> [Route("api/users")]
> public class UsersController : Controller {
>     [HttpGet("profile/{username}")]
>     public IActionResult GetProfile(string username) { ... }
> }
> ```
>
> **[TIP] Gen-Z Hook:** Attribute routing is like setting a custom URL for your social media profile. Instead of the default `/user?id=5123`, you force it to be exactly `/ninalamo`.

#### Topic C: Route Constraints
> **[SPEAK] Discussion:** "What if someone types `/products/details/hello`? 'hello' is not an ID number. The app will crash when it tries to look up 'hello' in the database. Route constraints stop the request before it even hits the controller."
>
> **[CODE] Example:**
> ```csharp
> [HttpGet("details/{id:int}")]
> public IActionResult Details(int id) { ... }
> ```
>
> **[TIP] Instructor Tip:** Emphasize security. Constraints prevent bad data from ever executing your C# logic.

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's break the routing engine intentionally, and then fix it using both Conventional and Attribute routing."

*   **Step 1: The Conventional Trap**
    *   *Action:* Create `ProductsController`. Add a method `ShowItem(int id)`. Try to visit `/Products/ShowItem`. It works. Now try `/Products`. It 404s because there is no `Index` method.
*   **Step 2: Mixing the Rules**
    *   *Action:* Add `[Route("catalog")]` to the `ProductsController`. Show that the conventional route `/Products/ShowItem` is now dead, and only `/catalog/ShowItem` works.
*   **Step 3: Adding Constraints**
    *   *Action:* Add `{id:int:min(1)}` to a route. Visit `/catalog/ShowItem/0` and watch it fail safely.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "In the real world, URLs are a massive part of SEO (Search Engine Optimization). If your e-commerce site uses `/item?id=8273`, Google hates it. If you use Attribute Routing to create `/products/laptops/macbook-pro`, Google loves it and ranks it higher. We don't just use Attribute Routing for organization; we use it to make money by driving search traffic."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "Why is this route returning a 404?" Not Allowed: "Write all the attribute routes for my project."
*   **Common Error 1:** `AmbiguousMatchException`. -> Two different action methods match the exact same URL. The engine doesn't know which one to pick, so it crashes.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Create a `BlogController`. Define attribute routes so that `/blog/2026/05` goes to an archive method, and `/blog/post/hello-world` goes to a specific article method. Use route constraints so the year must be 4 digits.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I can read a conventional route pattern and predict the URL.
> > - [ ] I can apply `[Route]`, `[HttpGet]`, and `[HttpPost]` attributes to a controller.
> > - [ ] I know how to make a route parameter optional (`?`).
> > - [ ] I can use route constraints like `:int` to enforce data types.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The SEO Overhaul"
> > Take the "Portfolio" project from last week.
> > 1. Convert ALL conventional routing to Attribute Routing.
> > 2. Remove the word "Portfolio" from the URLs. 
> > 3. **The Catch:** Make sure `/` (the root of the site) loads the `AboutMe` action using an empty `[Route("")]` attribute.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** A broken MVC app where clicking navigation links results in `AmbiguousMatchException` and `404 Not Found` errors.
> - **Solution Repo:** The same app fixed with strict Attribute Routing and type constraints.
