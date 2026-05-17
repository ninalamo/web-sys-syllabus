## Week 2: Async JavaScript Deep-Dive

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Event Loop Diagram |
| Code Walkthrough | 30 min | Live Code (fetch + async/await) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** Async is the hardest concept in the JS curriculum. Students think synchronously by default. Use the restaurant buzzer analogy repeatedly. 

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "Every time you open Instagram, your feed loads first, then stories load a second later. Your browser didn't freeze. That's async JavaScript working to keep the app responsive."

> [BOARD] **Whiteboard Analogy:** The Fast-Food Restaurant
> *   **Sync:** Order at the counter, wait there until food is ready. Nobody else can order. The line stops.
> *   **Async:** Order, get a buzzer, sit down. The line keeps moving. When the buzzer rings (Promise resolves), you get your food.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: The Single Thread & The Event Loop
> **[SPEAK] Discussion:** "JavaScript is single-threaded. It has only one 'Call Stack'. If a network request takes 5 seconds and you execute it synchronously, the entire browser locks up. Async offloads that work to the browser's background threads."
>
> **[VISUAL] Example:**
> Draw: `Call Stack -> Web APIs (background) -> Callback Queue -> Event Loop`.
>
> **[TIP] Instructor Tip:** Explain that the Event Loop is just a bouncer. It constantly checks: "Is the Call Stack empty? If yes, let the next task from the Queue in."

#### Topic B: Promises (The Buzzer)
> **[SPEAK] Discussion:** "A Promise is exactly what it sounds like. The browser promises to give you data eventually. But until then, it gives you an object representing that future data."
>
> **[CODE] Example:**
> *   `Pending`: Waiting for the server.
> *   `Fulfilled`: The server replied with data.
> *   `Rejected`: The network failed.
>
> **[TIP] Gen-Z Hook:** A Promise is an online shopping order. It's 'Pending' during shipping, 'Fulfilled' when delivered, and 'Rejected' if the package gets lost.

#### Topic C: The `fetch` API Gotcha
> **[SPEAK] Discussion:** "`fetch()` is the modern way to talk to APIs. It returns a Promise. BUT there is a massive gotcha: It does NOT reject on a 404 or 500 error."
>
> **[CODE] Example:**
> ```javascript
> const res = await fetch('/missing-page');
> if (!res.ok) throw new Error("This is how we handle 404s!");
> ```
>
> **[TIP] Instructor Tip:** Emphasize that `fetch` only throws a true error if the literal internet connection is severed. Otherwise, you MUST check `response.ok`.

#### Topic D: `async` / `await`
> **[SPEAK] Discussion:** "Before `await`, we used `.then().then().then()`, creating Callback Hell. `await` pauses the function (but not the browser) until the Promise resolves, making asynchronous code read like synchronous code."
>
> **[CODE] Example:**
> ```javascript
> async function getUser() {
>     const response = await fetch('/api/user');
>     const data = await response.json();
>     return data;
> }
> ```
>
> **[TIP] Instructor Tip:** Drill this rule: "You cannot use the word `await` unless the function signature has the word `async`."

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's build a data fetcher. We'll start with raw Promises, then upgrade to async/await."

*   **Step 1: The Old `.then()` Chain**
    *   *Action:* Write a `fetch` call using `.then(res => res.json())`. Explain why chaining gets messy fast.
*   **Step 2: The `async/await` Upgrade**
    *   *Action:* Rewrite the same logic using `async function` and `await`. Show how much cleaner it looks.
*   **Step 3: Error Handling (`try/catch`)**
    *   *Action:* Intentionally misspell the API URL. Wrap the `await` calls in a `try/catch` block and log the error safely.
*   **Step 4: `Promise.all()`**
    *   *Action:* Show how to execute two `fetch` calls in parallel (e.g., getting Users and Posts simultaneously) to cut loading time in half.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "In university, you're taught that if your code compiles, it works. In the industry, we assume the network is actively trying to destroy our app. A user will enter an elevator, drop to 3G, and your API call will hang for 15 seconds. If you don't build loading spinners and `catch` blocks with fallback UI, your app looks broken. We don't write async code just to get data; we write it to protect the user experience when the internet inevitably fails."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "Generate async fetch code". Not Allowed: "Handle all my error boundaries for me."
*   **Common Error 1:** `Cannot read properties of undefined (reading 'json')` -> Usually means the `fetch` failed or you forgot to `await` it.
*   **Common Error 2:** Infinite loading state. -> Forgot to clear the loading state in a `finally` block or returning early in the `catch`.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Build an async fetcher using JSONPlaceholder. Fetch posts, then fetch comments for each post in parallel using `Promise.all()`. Add error handling and loading states.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I can explain why an app doesn't freeze when fetching data.
> > - [ ] I can write a `fetch` request using `async/await`.
> > - [ ] I know how to check `response.ok` before trying to parse JSON.
> > - [ ] I can wrap my async code in a `try/catch` block.
> > - [ ] I understand when to use `Promise.all()` to speed up multiple requests.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Broken Pokedex"
> > Connect the in-class fetcher to the free PokeAPI (`pokeapi.co`).
> > 1. Fetch 3 of your favorite Pokemon using `Promise.all()`.
> > 2. **The Catch:** Intentionally misspell one URL so it fails. Write the error handling so the app shows a user-friendly message ("Pokemon ran away!") instead of crashing the console.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** Basic HTML/JS with empty click handlers for "Load Users".
> - **Solution Repo:** Fully working `async/await` fetch, complete with `try/catch`, loading spinner logic, and `response.ok` checks.
