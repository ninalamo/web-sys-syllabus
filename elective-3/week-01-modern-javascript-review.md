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

> [BOARD] **Whiteboard Analogy:**
> ```text
> OLD (ES5): One giant drawer labeled "var"
>   [users, i, temp, data, results] — all mixed up
> 
> NEW (ES6+): Labeled containers
>   [const users] — sealed jar
>   [let i] — refillable container
>   [module: utils.js] — separate drawer
> ```
> [ENGAGE] **Gen-Z:** "`var` is like your GCash transaction history — everything's in one long list. `const` and `let` are categorized folders. Much cleaner."

---

### 2. Core Concepts & Discussion Topics

> [SPEAK] **Script:** "ES6+ didn't just add features — it added structure. Let's break down the actual technical differences you'll write every day."

*   **Topic A: Variable Declaration (`let` and `const` vs `var`)**
    *   *Concept:* Block scoping vs Function scoping. `var` leaks out of `if` blocks and `for` loops. `let` and `const` stay trapped inside the `{}`.
    *   *Rule of Thumb:* Use `const` by default. Use `let` only if the value *must* change (like a loop counter). Never use `var`.
*   **Topic B: Arrow Functions & `this` Context**
    *   *Concept:* Shorter syntax `() => {}` with implicit returns for single-liners.
    *   *The "Why":* Lexical `this`. Traditional `function()` creates its own `this` context, which breaks inside callbacks (like `setTimeout`). Arrow functions inherit `this` from the surrounding code.
*   **Topic C: Declarative Arrays (`map`, `filter`, `reduce`)**
    *   *Concept:* Instead of imperative `for` loops where you manually track indices, you declare *what* you want to do.
    *   *Definitions:*
        *   `map`: Transforms every item (e.g., array of objects to array of strings).
        *   `filter`: Keeps items that match a condition.
        *   `reduce`: Boils an array down to a single value (e.g., sum).
*   **Topic D: Destructuring & Spread/Rest**
    *   *Concept:* Extracting object properties or array elements quickly.
    *   *Spread (`...`):* "Unpacking" elements (e.g., merging two arrays: `[...arr1, ...arr2]`).
    *   *Rest (`...`):* "Gathering" remaining arguments into an array in function parameters.

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's refactor a messy piece of legacy JavaScript into modern ES6+. I'll type, you type along."

*   **Step 1: Scoping Fixes**
    *   *Action:* Change all `var` to `const`, change loop variables to `let`. Show how trying to reassign a `const` throws a TypeError.
*   **Step 2: The `for` Loop Eradication**
    *   *Before:* 
      ```javascript
      var activeUsers = [];
      for(var i=0; i<users.length; i++) { if(users[i].isActive) activeUsers.push(users[i]); }
      ```
    *   *After:*
      ```javascript
      const activeUsers = users.filter(user => user.isActive);
      ```
*   **Step 3: Object Destructuring**
    *   *Action:* Instead of `user.name` and `user.email` repeated ten times, extract them: `const { name, email } = user;`

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "In university, you might lose 5 points on a rubric for using `var`. In the industry, using `var` in a modern React codebase will cause your Pull Request to be instantly rejected by the Senior Developer. It's not just a style preference; `var` causes massive memory leaks and state bugs in complex applications. Writing modern JS isn't about looking cool; it's about proving you are safe to work in a production codebase."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "Refactor this ES5 code to ES6+". Not Allowed: "Write my module imports for me."
*   **Common Error 1:** "Assignment to constant variable" (Used `const` but tried to reassign). *Fix: Use `let` or don't reassign.*
*   **Common Error 2:** "Cannot use import statement outside a module." *Fix: Add `type="module"` to the script tag.*

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Refactor a provided ES5 product inventory script to modern ES6+. Replace all `var`, convert to arrow functions, use `.filter()/.map()`, use template literals, and split into two files (`data.js` and `utils.js`).

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I can confidently explain the difference between `let`, `const`, and `var`.
> > - [ ] I can write an arrow function with implicit return.
> > - [ ] I can use `.map()` to render a list of data, and `.filter()` to search it.
> > - [ ] I can destructure an object to extract specific properties.
> > - [ ] I can split JavaScript code into separate files using `import` and `export`.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Legacy Code Rescue"
> > I have provided a 100-line "spaghetti" JavaScript file that handles a shopping cart. It uses `var`, manual `for` loops, string concatenation (`+`), and is all in one massive file. 
> > 1. Refactor it entirely into ES6+.
> > 2. Break it down into at least 3 module files (`cart.js`, `products.js`, `app.js`).
> > 3. **The Catch:** You cannot use a single `for` loop or `var` keyword anywhere.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** `legacy-cart.js` (The messy ES5 file for the live walkthrough) and the homework starter file.
> - **Solution Repo:** The refactored ES6+ versions, split into clean modules.
