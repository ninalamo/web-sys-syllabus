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

> [TIP] **Teaching Tip:** This is the first time students build a real web app. The MVC pattern will feel abstract until they see it working. Scaffold the project live, then trace the pipeline step by step.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "You know how Grab works? You open the app, see a map, order food, track delivery? That's MVC. And now you're going to build it. Well, not Grab. But the architecture behind it."

> [BOARD] **Whiteboard Analogy:** The Restaurant Pipeline
> *   **Customer (Browser):** Reads the menu and orders.
> *   **Menu (Route):** Understands the request (e.g., `/products/details/5`).
> *   **Waiter (Controller):** Takes the order to the kitchen.
> *   **Kitchen (Model):** Cooks the food (gets data from Database).
> *   **Plating (View):** Makes the food look good (.cshtml -> HTML).

---

### 2. Core Concepts & Discussion Topics

#### Topic A: The MVC Pipeline Flow
> **[SPEAK] Discussion:** "When you type a URL, it doesn't just open a file anymore. It triggers a pipeline. The URL is routed to a Controller, which asks the Model for data, and hands that data to a View to generate HTML."
>
> **[VISUAL] Example:** 
> Draw the pipeline: `Browser -> URL -> Route -> Controller -> Model -> View -> HTML -> Browser`.
>
> **[TIP] Instructor Tip:** The key insight is "Controller is the middleman." Students will want to put business logic in the controller. Resist this urge early: "The controller delegates. It doesn't do real work."

#### Topic B: Scaffolded File Structure
> **[SPEAK] Discussion:** "In an MVC app, convention is king. Folders are named specifically so the framework knows where to find things automatically."
>
> **[CODE] Example:**
> ```text
> /Controllers (C# logic)
> /Models (Data shapes)
> /Views (Razor HTML templates)
> Program.cs (The engine startup)
> ```
>
> **[TIP] Instructor Tip:** Tell them: "If you name your folder 'MyViews' instead of 'Views', the app breaks. Follow the conventions."

#### Topic C: Razor Syntax Basics
> **[SPEAK] Discussion:** "Razor is not a new language. It is an engine that lets you sprinkle C# into your HTML using the `@` symbol."
>
> **[CODE] Example:**
> ```html
> <h1>Welcome, @Model.UserName</h1>
> @if(Model.IsAdmin) { <button>Delete</button> }
> ```
>
> **[TIP] Gen-Z Hook:** Razor is like an Instagram filter. The HTML is the raw photo; the C# `@` syntax dynamically changes how it looks before it's posted to the browser.

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's scaffold an MVC project from scratch and trace exactly what happens when a request comes in."

*   **Step 1: Scaffolding**
    *   *Action:* Run `dotnet new mvc -n HelloMvc` live. Open the folder. Show `Program.cs`.
*   **Step 2: Trace the Default Route**
    *   *Action:* Open `Program.cs` and show `pattern: "{controller=Home}/{action=Index}/{id?}"`. Explain what this means.
*   **Step 3: Controller to View**
    *   *Action:* Open `HomeController.cs`. Show the `Index()` action returning `View()`. Open `Views/Home/Index.cshtml` and change the `<h1>`. Run the app.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "Why do we use MVC? Because when the Marketing team says 'change the button color', you shouldn't have to touch database code. When the Database team changes a table, the UI shouldn't break. MVC separates concerns. If you mix your SQL queries into your HTML files, you are building a nightmare that no company will pay you to maintain."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "Explain this Razor syntax." Not Allowed: "Generate my entire MVC controller and view."
*   **Common Error 1:** `InvalidOperationException: The view 'Index' was not found.` -> You misspelled the view file, put it in the wrong folder, or your Action method name doesn't match the view name.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Scaffold a new MVC app. Create a `MoviesController`. Add an `Index` action that returns a view with a list of 3 hardcoded movies using Razor syntax.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I can trace the path of a URL to a Controller Action.
> > - [ ] I know the difference between the Models, Views, and Controllers folders.
> > - [ ] I can use the `@` symbol to render a C# variable in HTML.
> > - [ ] I can explain why the Controller is just a "middleman".

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Portfolio Skeleton"
> > 1. Create a new MVC project.
> > 2. Create a `PortfolioController`.
> > 3. Add 3 Actions: `AboutMe`, `Projects`, `Contact`.
> > 4. Create the corresponding 3 Razor Views.
> > 5. **The Catch:** Use a shared layout file `_Layout.cshtml` to ensure all 3 pages have the exact same navigation menu.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** Nothing. You will scaffold this live.
> - **Solution Repo:** A completed MVC project with the `MoviesController` and a basic Razor view iterating over a `List<string>`.
