## Week 7: Views & Layouts

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Razor Syntax |
| Code Walkthrough | 30 min | Live Code (Layouts & Partials) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** Students often confuse Razor with frontend frameworks (like React). Constantly remind them: "Razor runs on the server. By the time the browser sees it, it is 100% plain HTML."

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "If you have a website with 50 pages, and your boss says 'change the copyright year in the footer', are you going to open 50 files and edit them? No. That's a waste of your life. Today we learn how to write UI code exactly once."

> [BOARD] **Whiteboard Analogy:** The Picture Frame
> *   **Layout (`_Layout.cshtml`):** The wooden frame and the glass. It never changes. It holds the navigation bar and the footer.
> *   **View (`Index.cshtml`):** The picture inside the frame. When you click a link, the frame stays on the wall, but we swap the picture.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: The Razor Engine
> **[SPEAK] Discussion:** "Razor is a templating engine. It scans your HTML, looks for the `@` symbol, executes the C# code, and then rips the C# out, leaving only the resulting HTML to send to the user."
>
> **[CODE] Example:**
> ```html
> <!-- What you write (.cshtml) -->
> <ul>
> @foreach(var item in Model) {
>     <li>@item.Name</li>
> }
> </ul>
> ```
>
> **[TIP] Instructor Tip:** Explain the difference between `@` (inline expression) and `@{ }` (code block). Code blocks don't print to the screen.

#### Topic B: Layout Pages & `RenderBody()`
> **[SPEAK] Discussion:** "The Layout page is your master template. The magic happens at a specific method called `@RenderBody()`. That is the exact spot where your individual views are injected."
>
> **[CODE] Example:**
> ```html
> <!-- Inside _Layout.cshtml -->
> <body>
>     <nav>My Website</nav>
>     <main>
>         @RenderBody() <!-- The 'Picture' goes here -->
>     </main>
>     <footer>2026</footer>
> </body>
> ```
>
> **[TIP] Gen-Z Hook:** The Layout is your phone's status bar (battery, time). `RenderBody()` is the actual app you are currently using.

#### Topic C: ViewImports & ViewStart
> **[SPEAK] Discussion:** "To avoid typing the same C# using statements at the top of every single view, we use `_ViewImports.cshtml`. It applies globally. `_ViewStart.cshtml` is where we tell every view to use the master Layout by default."
>
> **[CODE] Example:**
> ```csharp
> // Inside _ViewStart.cshtml
> @{
>     Layout = "_Layout";
> }
> ```
>
> **[TIP] Instructor Tip:** Show what happens if you delete `_ViewStart`. Every page suddenly loses its CSS and navigation because it forgets to use the Layout.

#### Topic D: Partial Views
> **[SPEAK] Discussion:** "What if you have a complex UI element, like a Product Card, that appears on the Home page, the Search page, and the Cart page? We extract it into a Partial View so we can reuse it like a component."
>
> **[CODE] Example:**
> ```html
> <!-- Injecting a partial view -->
> <partial name="_ProductCard" model="currentItem" />
> ```
>
> **[TIP] Instructor Tip:** Note the naming convention: Layouts and Partials start with an underscore `_` to indicate they are not standalone pages.

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's build a Layout from scratch and break our UI into reusable pieces."

*   **Step 1: The Raw Layout**
    *   *Action:* Delete the default scaffolded layout. Create a new `_Layout.cshtml` with a simple Navbar and Footer. Add `@RenderBody()`.
*   **Step 2: Testing the Injection**
    *   *Action:* Create two views (`Home` and `About`). Click between them to show that the Navbar never reloads, but the content changes.
*   **Step 3: Creating a Partial**
    *   *Action:* Create `_UserCard.cshtml`. Use a `<partial>` tag inside a `foreach` loop to render a grid of 10 users using only 3 lines of code in the main view.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "In a real enterprise application, the `_Layout.cshtml` file can get messy very fast. Junior devs will put 50 script tags and CSS links in it. Always use `@RenderSection("Scripts", required: false)`. This allows a specific view (like a map page) to inject a heavy JavaScript file ONLY when that page loads, rather than forcing the entire application to download it on every click."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "How do I write an if/else block in Razor?" Not Allowed: "Write the HTML for my entire dashboard."
*   **Common Error 1:** `The name 'Model' does not exist in the current context.` -> You forgot to declare the `@model` directive at the top of the file.
*   **Common Error 2:** `Cannot locate the partial view '_MyCard'.` -> You put it in a specific controller's folder instead of the `Views/Shared` folder.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Build a "Storefront". Create a master Layout with a header. Create a list of dummy products. Build a Partial View called `_ProductTile.cshtml` that renders an image, title, and price. Use a loop on the Index page to render the partial for each product.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I understand that Razor executes on the server, not the browser.
> > - [ ] I can write a `foreach` loop in an HTML file using Razor.
> > - [ ] I know what `@RenderBody()` does in a Layout file.
> > - [ ] I can explain the purpose of the `Shared` folder.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Theme Switcher"
> > 1. Create a simple MVC blog with a Layout.
> > 2. Create a specific `_Sidebar.cshtml` partial view for recent posts.
> > 3. **The Catch:** Pass a string to `ViewData["Theme"] = "dark"` in the Controller. In the `_Layout.cshtml`, write a Razor `@if` statement that checks this ViewData. If it's dark, apply a dark CSS class to the `<body>`. If not, apply a light class.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** A project with 3 pages that have massive, duplicated HTML code in every single file.
> - **Solution Repo:** The refactored project using a clean `_Layout.cshtml` and `_Partial` views to eliminate the duplication.
