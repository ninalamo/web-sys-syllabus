## Week 3: TypeScript Essentials

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Type Comparison |
| Code Walkthrough | 30 min | Live Code (progressive typing) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** TypeScript feels like extra work to students used to JS freedom. Frame it as "free bug detection" not "extra rules." Use progressive typing (JS -> add types step by step).

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "TypeScript is what stops you from pushing a bug to production where a user's age is `undefined` and your app crashes trying to calculate their birth year. It catches the crash before you even run the code."

> [BOARD] **Whiteboard Analogy:** 
> *   **JavaScript:** Writing an essay without spellcheck. You only find mistakes when someone reads it and points them out.
> *   **TypeScript:** Writing with autocorrect and grammar check. It puts red squiggly lines under your mistakes *as you type*.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: Inference vs Explicit Types
> **[SPEAK] Discussion:** "You don't have to type every single thing. TypeScript is smart. If you assign a string to a variable, it infers it is a string forever."
>
> **[CODE] Example:**
> ```typescript
> let name = "Alice"; // TS infers this is a string
> name = 42; // ERROR: Type 'number' is not assignable to type 'string'
> ```
>
> **[TIP] Instructor Tip:** Tell students not to over-type. `let age: number = 25;` is redundant. Just let TS infer it.

#### Topic B: Interfaces (Defining Objects)
> **[SPEAK] Discussion:** "If a function expects a 'User', how does it know what a 'User' looks like? We define an Interface to act as a blueprint for our objects."
>
> **[CODE] Example:**
> ```typescript
> interface User {
>     id: number;
>     name: string;
>     isAdmin: boolean;
> }
> ```
>
> **[TIP] Gen-Z Hook:** An interface is like a bouncer checking IDs. If the object doesn't match the required shape, it's not getting into the function.

#### Topic C: Union Types & Optional Properties
> **[SPEAK] Discussion:** "What if an ID can be a number OR a string? What if a user doesn't have a middle name? TypeScript handles flexibility safely."
>
> **[CODE] Example:**
> ```typescript
> interface User {
>     id: number | string; // Union (OR)
>     middleName?: string; // Optional (Notice the ?)
> }
> ```
>
> **[TIP] Instructor Tip:** Warn them that optional properties are dangerous because they can be `undefined`. They must check for existence before using them.

#### Topic D: The Danger of `any`
> **[SPEAK] Discussion:** "The word `any` tells the compiler 'Turn off all checks for this variable.' It defeats the entire purpose of using TypeScript."
>
> **[CODE] Example:**
> ```typescript
> let data: any = "Hello";
> data.explode(); // TS allows this, but it will crash at runtime!
> ```
>
> **[TIP] Instructor Tip:** Explain that if they don't know the type, use `unknown` instead. `unknown` forces you to check the type before acting on it.

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's take a broken JavaScript function and add TypeScript progressively to see how it catches our bugs."

*   **Step 1: The Untyped Disaster**
    *   *Action:* Write a JS function `calculateDiscount(price, discount)` and pass it `"100"` and `true`. Show the `NaN` result.
*   **Step 2: Adding Primitives**
    *   *Action:* Add `: number` to parameters. Watch the editor immediately flag the bad string/boolean inputs with red squigglies.
*   **Step 3: Creating an Interface**
    *   *Action:* Create a `Product` interface. Write a function that expects a `Product`. Pass it an object missing a required property like `price`. Watch TS complain.
*   **Step 4: API Responses**
    *   *Action:* Show how to type the response of a `fetch` call using generics or casting: `const data = await response.json() as Product[];`

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "When you start your first job, you will be handed a massive, messy codebase. If it's written in JavaScript, you'll be terrified to change anything because you won't know what breaks. If it's written in TypeScript, you can refactor confidently because the compiler acts as a safety net. 38% of all runtime bugs in production are completely eliminated just by adding TypeScript. It's not a suggestion anymore; it's a mandatory industry skill."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "Add TypeScript types to this JS code." Not Allowed: "Define my business domain types for me."
*   **Common Error 1:** "Property does not exist on type." -> You are trying to use a property you haven't defined in the interface.
*   **Common Error 2:** "Type 'undefined' is not assignable to type 'X'." -> You used an optional property `?` or an array `.find()`, and didn't write an `if` statement to handle the scenario where the item doesn't exist.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Convert a JS product catalog to TS. Create `Product` interfaces, type all function parameters, use a union type for `category`, and set up strict mode.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I can define an `interface` for a custom object.
> > - [ ] I can type function parameters and return types.
> > - [ ] I can explain why using `any` is bad practice.
> > - [ ] I can use a Union type (`|`) to restrict allowed values.
> > - [ ] I understand that TypeScript errors happen at compile-time, not runtime.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Strict Mode Migration"
> > Take the Async JS "Pokedex" fetcher from last week's homework.
> > 1. Rename the files from `.js` to `.ts`.
> > 2. Define a `Pokemon` interface based on the PokeAPI JSON response.
> > 3. **The Catch:** You must turn on `"strict": true` in the `tsconfig.json`. You cannot use the word `any` anywhere in your code. Fix every single red underline.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** A vanilla JS script with multiple subtle typing bugs (like concatenating a number and string by accident).
> - **Solution Repo:** The TS version with interfaces, strict mode enabled, and proper API response casting.
