## Week 7: Effects & Data Fetching

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + The Array |
| Code Walkthrough | 30 min | Live Code (useEffect + fetch) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** `useEffect` is the most abused hook in React. Students will try to use it for everything. Hammer home the rule: "If you can calculate it during render, you don't need a `useEffect`."

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "A React component's main job is to take Props/State and return UI. But what if you need to talk to the outside world? Like fetching data from an API, or setting a timer? That's called a 'Side Effect'. You can't just throw it in the middle of your component, or React will panic."

> [BOARD] **Whiteboard Analogy:** The Play Actor
> *   **Render:** The actor is on stage performing their lines (returning UI). You cannot interrupt them.
> *   **Effect:** After the scene is done (after Render), the actor goes backstage to check their phone (fetch data).
> *   `useEffect` literally means "do this *after* the screen has painted."

---

### 2. Core Concepts & Discussion Topics

#### Topic A: The `useEffect` Hook
> **[SPEAK] Discussion:** "`useEffect` takes two arguments: a function (what to do) and a dependency array (when to do it). It runs at least once, immediately after the first render."
>
> **[CODE] Example:**
> ```jsx
> useEffect(() => {
>     console.log("The component just painted to the screen!");
> }, []);
> ```
>
> **[TIP] Instructor Tip:** Emphasize that `useEffect` is an escape hatch. It lets you step outside of React's predictable rendering to do messy things.

#### Topic B: The Dependency Array (The Infinite Loop Trap)
> **[SPEAK] Discussion:** "The array tells React exactly when to re-run the effect. If you mess this up, you will accidentally DDOS an API by fetching data 1,000 times a second."
>
> **[VISUAL] Example:**
> *   `[]` (Empty) = Run ONCE (on mount).
> *   `[count]` = Run on mount, AND whenever `count` changes.
> *   *No Array* = Run on EVERY single render (Danger!).
>
> **[TIP] Gen-Z Hook:** The dependency array is your notification settings. Empty array means "mute all, only tell me when I join the group." `[count]` means "only ping me if `count` messages me." No array means "ping me for absolutely everything."

#### Topic C: Data Fetching inside Effects
> **[SPEAK] Discussion:** "You cannot make the `useEffect` callback an `async` function directly. You must declare the async function inside, and then call it."
>
> **[CODE] Example:**
> ```jsx
> useEffect(() => {
>     async function loadData() {
>         const res = await fetch('/api/data');
>         setData(await res.json());
>     }
>     loadData();
> }, []);
> ```
>
> **[TIP] Instructor Tip:** Show them the 3-state pattern for fetching: `data` (null), `isLoading` (true), `error` (null). A robust UI handles all three.

#### Topic D: The Cleanup Function
> **[SPEAK] Discussion:** "If your effect starts a timer or subscribes to a chat room, you must clean it up when the component leaves the screen, or you will create a memory leak."
>
> **[CODE] Example:**
> ```jsx
> useEffect(() => {
>     const timer = setInterval(() => console.log('tick'), 1000);
>     return () => clearInterval(timer); // The Cleanup
> }, []);
> ```
>
> **[TIP] Instructor Tip:** Explain that the cleanup function runs right before the component is destroyed (unmounted).

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's build a component that fetches a random user from an API when it loads."

*   **Step 1: The Initial State**
    *   *Action:* Set up `user` (null) and `loading` (true) state. Render a "Loading..." text.
*   **Step 2: The Fetch Effect**
    *   *Action:* Add the `useEffect` with an empty array `[]`. Fetch from `https://randomuser.me/api/`. Update the state. Show the UI transition from "Loading..." to the user's name.
*   **Step 3: The Infinite Loop Warning**
    *   *Action:* Delete the empty array `[]`. Add a `console.log('Fetching...')`. Open DevTools and watch it print 10,000 times as React gets stuck in a Render -> Fetch -> SetState -> Render loop.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "In modern enterprise React, we actually don't use `useEffect` for data fetching anymore. It's too error-prone with race conditions and caching. In the real world, we use libraries like React Query or SWR, or frameworks like Next.js. However, you MUST understand how `useEffect` works because you will inherit legacy codebases that have hundreds of them, and you will be expected to fix their memory leaks."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "Explain why my useEffect is running twice." Not Allowed: "Write the fetch logic for my homework."
*   **Common Error 1:** `useEffect function must return a cleanup function or nothing.` -> You made the `useEffect` callback `async`. Async functions return Promises, which breaks React's cleanup expectations.
*   **Common Error 2:** The effect runs twice in development. -> This is React 18's Strict Mode. It intentionally mounts, unmounts, and remounts your component to test if your cleanup function works.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Build a `PokeSearch` component. It has an input field and a piece of state called `searchQuery`. Write a `useEffect` that depends on `[searchQuery]`. Whenever the query changes, fetch that specific Pokemon from the PokeAPI.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I know why we use `useEffect` instead of fetching data directly in the component body.
> > - [ ] I understand the difference between `[]`, `[state]`, and no dependency array.
> > - [ ] I can write a `fetch` request inside a `useEffect`.
> > - [ ] I know how to return a cleanup function.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Window Resizer"
> > 1. Create a component that displays the current browser window width in pixels.
> > 2. Add a `useEffect` that adds a `'resize'` event listener to the `window`.
> > 3. **The Catch:** You must include a cleanup function that uses `removeEventListener`. Prove it works by adding a button to hide/unmount the component and verifying no errors occur when resizing.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** A component with a "Show Data" button but no fetching logic.
> - **Solution Repo:** A fully working PokeSearch utilizing `useEffect`, loading states, and error handling.
