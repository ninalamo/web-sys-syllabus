## Week 5: Component Thinking (Vanilla JS)

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + DOM Diagrams |
| Code Walkthrough | 30 min | Live Code (Imperative vs Declarative) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** Do NOT skip this week to rush into React. If students don't feel the pain of imperative DOM manipulation, they will never understand why React's declarative state is so powerful.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "Imagine building a Lego castle. The old way of coding (Imperative) is writing instructions: 'Pick up blue block. Put it on red block. Move red block left.' If you mess up one step, the castle breaks. The modern way (Declarative) is handing the computer a picture of the finished castle and saying, 'Make it look like this.'"

> [BOARD] **Whiteboard Analogy:** The Chef vs The Microwave
> *   **Imperative (Vanilla DOM):** You are the chef. You have to chop, stir, monitor the heat, and plate the food step-by-step (`document.createElement`, `element.appendChild`).
> *   **Declarative (State -> UI):** You are using a microwave. You press 'Popcorn' (change State). The machine handles the exact heating elements (UI updates) automatically.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: Imperative DOM Manipulation (The Pain)
> **[SPEAK] Discussion:** "Directly touching the DOM is slow, verbose, and error-prone. Keeping track of exactly which element needs to change creates massive spaghetti code."
>
> **[CODE] Example:**
> ```javascript
> const btn = document.createElement('button');
> btn.classList.add('btn-primary');
> btn.innerText = 'Click Me';
> document.getElementById('app').appendChild(btn);
> ```
>
> **[TIP] Instructor Tip:** Have them look at that code and realize it took 4 lines just to make a button appear.

#### Topic B: State as the Single Source of Truth
> **[SPEAK] Discussion:** "Instead of reading from the HTML (e.g., `input.value`), we keep data in a JavaScript object called 'State'. The HTML is just a dumb reflection of the State."
>
> **[VISUAL] Example:**
> Draw: `State { count: 5 } ---> renders ---> <h1>5</h1>`
> "If you want the <h1> to show 6, you don't touch the <h1>. You change the State to 6, and tell the UI to re-draw itself."
>
> **[TIP] Gen-Z Hook:** The State is the group chat. The UI is just the notifications popping up on your lock screen. 

#### Topic C: Components in Vanilla JS
> **[SPEAK] Discussion:** "A component is just a function that returns UI. We can build reusable blocks of UI even without React using template literals."
>
> **[CODE] Example:**
> ```javascript
> function UserCard(user) {
>     return `<div class="card">
>                 <h3>${user.name}</h3>
>             </div>`;
> }
> ```
>
> **[TIP] Instructor Tip:** This is the direct stepping stone to JSX next week.

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's build a simple counter app twice. First, the painful old way. Then, the modern State-driven way."

*   **Step 1: The Imperative Counter**
    *   *Action:* Build a counter using `document.querySelector`, reading the text inside the `span`, parsing it to an `int`, adding 1, and writing it back to the `span`. Show how brittle it is.
*   **Step 2: The State-Driven Counter**
    *   *Action:* Create a variable `let count = 0;`. Write a `render()` function that replaces the `innerHTML` of the app with the current `count`. The button click simply does `count++; render();`.
*   **Step 3: Componentizing**
    *   *Action:* Extract the HTML string generation into a `CounterNode(count)` function. 

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "In 2012, everyone built apps by directly mutating the DOM using jQuery. As apps like Facebook grew, they realized they had a massive problem: an unread message badge would say '1', but the chat box would be empty. The DOM states were out of sync. This is why React was invented. We NEVER want the DOM to hold the data. Data lives in JavaScript memory, and the UI just blindly obeys the data."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "Explain the difference between innerText and innerHTML." Not Allowed: "Write the vanilla JS component rendering engine for me."
*   **Common Error 1:** `Uncaught TypeError: Cannot read properties of null (reading 'appendChild')` -> Your JavaScript ran before the HTML finished loading, so `getElementById` found nothing.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Build a Todo List in Vanilla JS using State. Do not read the DOM to find out what the todos are. Keep an array `let todos = []`. When a user types, update the array, then call `renderTodos()`.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I can explain why direct DOM manipulation is hard to maintain.
> > - [ ] I know what "State" means in a web application.
> > - [ ] I can write a JavaScript function that returns an HTML string based on data.
> > - [ ] I understand the concept of re-rendering UI when data changes.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Component Factory"
> > Create an array of 5 product objects. 
> > 1. Write a Vanilla JS function `ProductCard(product)` that takes an object and returns an HTML template literal string.
> > 2. Use `.map()` to generate a list of strings from your array.
> > 3. **The Catch:** Render all 5 products to the screen using only one single `document.getElementById('app').innerHTML = ...` assignment. No loops calling `.appendChild()`.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** A basic HTML file with empty `<div>` containers.
> - **Solution Repo:** The Counter and Todo List applications built using the Vanilla JS State -> `render()` pattern.
