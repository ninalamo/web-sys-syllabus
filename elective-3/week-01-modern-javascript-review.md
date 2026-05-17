## Week 1: Modern JavaScript Review

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Code Comparison |
| Code Walkthrough | 30 min | Live Code (refactor alongside) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** This is a "review" week but don't assume mastery. Many students learned JS from outdated tutorials. The goal is to replace bad habits (`var`, for loops for everything) with modern patterns (`const`, `.filter()`, `.map()`). Keep energy high.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "You know how TikTok doesn't reload the whole page when you switch from your For You feed to Following? That's not magic — it's modern JavaScript. Every app you use daily is built on the ES6+ features we're covering this week."

> [BOARD] **Whiteboard Analogy:** The Messy Drawer vs The Organizer
> *   **OLD (ES5):** One giant drawer labeled "var". `users`, `i`, `temp`, `data` are all mixed up.
> *   **NEW (ES6+):** Labeled containers. `const users` is a sealed jar. `let i` is a refillable container. `module.js` is a separate drawer entirely.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: Variable Declaration (`let`/`const` vs `var`)
> **[SPEAK] Discussion:** "Before ES6, `var` was the only way to declare variables. The problem? `var` ignores block scope like `if` statements and loops. It leaks everywhere. `let` and `const` fix this by staying trapped inside their curly braces."
>
> **[CODE] Example:**
> ```javascript
> if (true) {
>     var a = 5; // Leaks!
>     const b = 10; // Trapped!
> }
> console.log(a); // Prints 5
> console.log(b); // ReferenceError
> ```
>
> **[TIP] Instructor Tip:** Teach the strict hierarchy: Always use `const`. Only use `let` if the value *must* be reassigned (like a loop counter). Never use `var`.

#### Topic B: Arrow Functions & Context
> **[SPEAK] Discussion:** "Arrow functions aren't just a shorter way to write code. They solve a massive headache in older JS: losing the `this` context inside callbacks like `setTimeout`."
>
> **[CODE] Example:**
> ```javascript
> // ES5
> var self = this; // The hacky old way
> setTimeout(function() { console.log(self.name); }, 1000);
> 
> // ES6 Arrow Function
> setTimeout(() => { console.log(this.name); }, 1000);
> ```
>
> **[TIP] Gen-Z Hook:** An arrow function is like a loyal friend. It remembers where it came from (inherits `this`), while traditional functions get confused depending on who called them.

#### Topic C: Declarative Arrays (`map`, `filter`)
> **[SPEAK] Discussion:** "Imperative code tells the computer *how* to do something (a `for` loop). Declarative code tells it *what* you want. Modern JS relies on declarative array methods."
>
> **[CODE] Example:**
> ```javascript
> // Transform an array (map)
> const names = users.map(user => user.name);
> 
> // Keep only active users (filter)
> const active = users.filter(user => user.isActive);
> ```
>
> **[TIP] Instructor Tip:** Emphasize that these methods do NOT change the original array; they return a brand new array. This is critical for React state later.

#### Topic D: Destructuring
> **[SPEAK] Discussion:** "Destructuring is a shortcut to extract properties from an object without writing `user.` ten times."
>
> **[CODE] Example:**
> ```javascript
> const user = { name: "Nina", role: "Admin" };
> const { name, role } = user;
> ```
>
> **[TIP] Instructor Tip:** Mention that they will use this exact syntax every single day in React to extract "props".

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's refactor a messy piece of legacy JavaScript into modern ES6+. I'll type, you type along."

*   **Step 1: Scoping Fixes**
    *   *Action:* Change all `var` to `const`. Run the script to show where reassignments break, then change those specific variables to `let`.
*   **Step 2: The `for` Loop Eradication**
    *   *Action:* Find a messy `for` loop that pushes items to a new array. Delete it entirely and replace it with a one-line `.filter()` or `.map()`.
*   **Step 3: String Interpolation**
    *   *Action:* Replace messy `greeting = "Hi " + user.name + "!"` concatenations with template literals `` `Hi ${user.name}!` ``.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "In university, you might lose 5 points on a rubric for using `var`. In the industry, using `var` in a modern React codebase will cause your Pull Request to be instantly rejected by the Senior Developer. It's not just a style preference; `var` causes massive memory leaks and state bugs in complex applications. Writing modern JS isn't about looking cool; it's about proving you are safe to work in a production codebase."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "Refactor this ES5 code to ES6+". Not Allowed: "Write my module imports for me."
*   **Common Error 1:** "Assignment to constant variable" -> You used `const` but tried to reassign it. *Fix: Use `let`.*
*   **Common Error 2:** "Cannot use import statement outside a module." -> *Fix: Add `type="module"` to the script tag in your HTML.*

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Refactor a provided ES5 product inventory script to modern ES6+. Replace all `var`, convert to arrow functions, use `.filter()/.map()`, use template literals, and split into two files (`data.js` and `utils.js`).

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I can explain why `var` is bad and when to use `let` vs `const`.
> > - [ ] I can write an arrow function with implicit return.
> > - [ ] I can use `.map()` to render a list, and `.filter()` to search it.
> > - [ ] I can destructure an object to extract specific properties.
> > - [ ] I can split JavaScript code into separate files using `import`/`export`.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Legacy Code Rescue"
> > I have provided a 100-line "spaghetti" JavaScript file that handles a shopping cart. It uses `var`, manual `for` loops, string concatenation (`+`), and is all in one massive file. 
> > 1. Refactor it entirely into ES6+.
> > 2. Break it down into at least 3 module files (`cart.js`, `products.js`, `app.js`).
> > 3. **The Catch:** You cannot use a single `for` loop or `var` keyword anywhere.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** `legacy-cart.js` (The messy ES5 file for the live walkthrough).
> - **Solution Repo:** The refactored ES6+ versions, split into clean modules using modern syntax.
