## Week 6: Controllers & Action Results

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Return Types |
| Code Walkthrough | 30 min | Live Code (IActionResult variants) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** Up until now, students have only used `return View()`. Today they learn a controller can return JSON, files, redirects, or raw status codes. 

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "If you ask a waiter for a menu, they hand you paper. If you ask for water, they hand you a glass. If you ask where the bathroom is, they point you in a direction. Controllers do the exact same thing based on what the browser asks for."

> [BOARD] **Whiteboard Analogy:** The Waiter's Responses
> *   `return View()` -> Handing you the menu (HTML).
> *   `return Json()` -> Handing you raw ingredients (Data for APIs).
> *   `return Redirect()` -> Pointing you to another table.
> *   `return NotFound()` -> "We're out of stock."
> *   `return File()` -> Handing you a printed receipt (PDF).

---

### 2. Core Concepts & Discussion Topics

#### Topic A: The `IActionResult` Interface
> **[SPEAK] Discussion:** "Why do our methods return `IActionResult` instead of `string` or `HTML`? Because `IActionResult` is an interface that allows us to return *anything*. It gives us maximum flexibility."
>
> **[CODE] Example:** 
> ```csharp
> public IActionResult GetUser(int id) {
>     if (id == 0) return BadRequest(); // 400
>     if (id > 100) return NotFound(); // 404
>     return View(); // 200 OK + HTML
> }
> ```
>
> **[TIP] Instructor Tip:** Emphasize that `IActionResult` is just a box. What goes inside the box dictates the HTTP status code and the body content.

#### Topic B: Redirection
> **[SPEAK] Discussion:** "Sometimes the job of an action is just to send the user somewhere else. After a user logs in, you don't return a 'Login Success' view; you redirect them to the Dashboard."
>
> **[CODE] Example:**
> ```csharp
> public IActionResult ProcessLogin() {
>     // logic...
>     return RedirectToAction("Dashboard", "Admin");
> }
> ```
>
> **[TIP] Gen-Z Hook:** Redirection is like tapping a link in TikTok that forces Safari to open. The app says 'I can't handle this here, let me bounce you to the right place.'

#### Topic C: Returning Data (JSON)
> **[SPEAK] Discussion:** "If your front-end is React or a mobile app, it doesn't want HTML. It wants raw data. We can bypass Razor views entirely and just dump objects as JSON."
>
> **[CODE] Example:**
> ```csharp
> public IActionResult ApiGetItem() {
>     var item = new { Name = "Laptop", Price = 999 };
>     return Json(item);
> }
> ```
>
> **[TIP] Instructor Tip:** Remind them of Week 3 (HTTP). `return Json()` automatically sets the header `Content-Type: application/json`. The framework handles the heavy lifting.

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's build one controller that returns four completely different things based on the input."

*   **Step 1: The Swiss Army Controller**
    *   *Action:* Create `DownloadController`. 
*   **Step 2: Testing Status Codes**
    *   *Action:* Write a method `GetDocument(int id)`. If id is negative, `return BadRequest()`. If id is 99, `return Unauthorized()`. Show DevTools so students see the real HTTP codes changing.
*   **Step 3: The Redirect Chain**
    *   *Action:* Write a method that does `RedirectToAction()`. Trace the Network tab to show the `302 Found` response bouncing the browser to the new URL.
*   **Step 4: Returning a File**
    *   *Action:* Use `return File()` to send a `.txt` file to the browser and force a download prompt.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "A classic junior developer mistake is returning a `View()` when a database save fails. If the user submits a form to buy a ticket, and it fails, and you just `return View()`, the URL remains the POST URL. If they hit 'Refresh' on their browser, it will submit the payment again! Always use the PRG pattern: **Post-Redirect-Get**. After a POST, always `RedirectToAction()`. Never return a view directly from a POST."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "What is the difference between Redirect and RedirectToAction?" Not Allowed: "Write the PRG pattern logic for my homework."
*   **Common Error 1:** `Cannot implicitly convert type 'string' to 'IActionResult'`. -> You forgot to wrap your string in a helper method like `Ok("string")` or `Content("string")`.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Build a `SearchController`. If the user searches for "Google", redirect them to `https://google.com`. If they search for empty string, return `BadRequest()`. If they search for "Secret", return `Json()` with hidden data. Otherwise, return a normal `View()`.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I can explain why controllers return `IActionResult`.
> > - [ ] I can return an explicit HTTP status code like `NotFound()`.
> > - [ ] I can redirect a user to a different controller action.
> > - [ ] I can return raw JSON data instead of a Razor view.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Safe Form Submission"
> > Build a basic HTML form that POSTs to a `ContactController`.
> > 1. If the message is empty, return a `BadRequest`.
> > 2. If the message is valid, pretend to save it, and then implement the **PRG Pattern** (Post-Redirect-Get) to redirect the user to a "Success" action.
> > 3. **The Catch:** The "Success" action must return a `View` that says "Thank you!", and hitting refresh on that page should NOT trigger the form resubmission warning in the browser.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** A Controller that returns strings and raw HTML strings, looking messy.
> - **Solution Repo:** The `SearchController` exercise completed, showcasing 4 different `IActionResult` return types.
