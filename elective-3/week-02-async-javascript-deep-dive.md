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

> [SPEAK] **Script:** "Every time you open Instagram, your feed loads first, then stories load a second later. Your browser didn't freeze. That's async JavaScript."

> [BOARD] **Whiteboard Analogy:** The Fast-Food Restaurant
> *   **Sync:** Order at the counter, wait there until food is ready. Nobody else can order.
> *   **Async:** Order, get a buzzer, sit down. Others can order. When buzzer rings (Promise resolves), you get your food.

---

### 2. Core Concepts & Discussion Topics

> [SPEAK] **Script:** "JavaScript runs on a single thread. It can only do one thing at a time. Async lets JS say 'I'll come back to this later'."

*   **Topic A: The Single Thread & The Event Loop**
    *   *Call Stack:* Where your active functions execute.
    *   *Web APIs:* Browser-managed background threads (handles `fetch`, `setTimeout`).
    *   *Callback Queue:* Where finished background tasks wait.
    *   *Event Loop:* The bouncer that checks if the Call Stack is empty, then moves items from the Queue to the Stack.
*   **Topic B: Promises (The Buzzer)**
    *   *Definition:* An object representing eventual completion or failure.
    *   *States:* Pending (waiting), Fulfilled (success), Rejected (failure).
*   **Topic C: `fetch` API**
    *   *Concept:* The modern way to make HTTP requests. It returns a Promise.
    *   *The Gotcha:* `fetch` does NOT reject on HTTP 404/500 errors. It only rejects on network failures. You must check `response.ok`.
*   **Topic D: `async / await`**
    *   *Concept:* Syntactic sugar over Promises. Makes asynchronous code read top-to-bottom like synchronous code.
    *   *Rule:* You can only use `await` inside a function marked `async`.

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's build a data fetcher. We'll start with raw Promises, then upgrade to async/await."

*   **Step 1: The `fetch` with `.then()` (The Old Way)**
    *   *Action:* Show the chain. 
      ```javascript
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => console.log(data));
      ```
*   **Step 2: Upgrading to `async/await` (The Modern Way)**
    *   *Action:* Rewrite the same logic.
      ```javascript
      async function getUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
      }
      ```
*   **Step 3: Error Handling & `response.ok`**
    *   *Action:* Add the `try/catch` and the critical `response.ok` check. Show what happens when you misspell the URL.
*   **Step 4: `Promise.all()`**
    *   *Action:* Show how to run two `fetch` calls in parallel instead of sequentially to save time.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "In university, you're taught that if your code compiles, it works. In the industry, we assume the network is actively trying to destroy our app. A user will enter an elevator, drop to 3G, and your API call will hang for 15 seconds. If you don't build loading states and `catch` blocks, your app looks broken. We don't write async code just to get data; we write it to protect the user experience when the internet inevitably fails."

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
