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

> [SPEAK] **Script:** "TS is what stops you from pushing a bug to production where a user's age is `undefined` and your app crashes trying to calculate their birth year. It catches it before you even run the code."

> [BOARD] **Whiteboard Analogy:** 
> *   **JavaScript:** Writing an essay without spellcheck. You find mistakes only when someone reads it.
> *   **TypeScript:** Writing with autocorrect + grammar check. It catches errors *as you type*.

---

### 2. Core Concepts & Discussion Topics

> [SPEAK] **Script:** "TypeScript doesn't run in the browser. It gets stripped away. It is purely a development tool to catch logic errors."

*   **Topic A: Core Primitives & Inference**
    *   *Concept:* `string`, `number`, `boolean`. TS is smart enough to infer types without you explicitly writing them (`const name = "Alice"` is inferred as string).
*   **Topic B: Interfaces vs Types**
    *   *Concept:* Defining the shape of objects.
    *   *Interface:* Best for defining objects. Extensible.
    *   *Type:* Best for unions, primitives, and complex types.
*   **Topic C: Union Types & Optional Properties**
    *   *Unions (`|`):* A variable can be one of multiple types (e.g., `status: "success" | "error"`).
    *   *Optional (`?`):* The property might not exist (`age?: number`).
*   **Topic D: The Danger of `any`**
    *   *Concept:* `any` disables TypeScript entirely for that variable. Using it defeats the purpose of the language. Use `unknown` if you truly don't know the type yet.

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's take a broken JavaScript function and add TypeScript progressively to see how it catches our bugs."

*   **Step 1: The Untyped Disaster**
    *   *Action:* Write a JS function `calculateDiscount(price, discount)` and pass it `"100"` and `true`. Show the NaN result.
*   **Step 2: Adding Primitives**
    *   *Action:* Add `: number` to parameters. Watch the editor immediately flag the bad string/boolean inputs with red squigglies.
*   **Step 3: Creating an Interface**
    *   *Action:* Create a `User` interface. Write a function that expects a `User`. Pass it an object missing a required property. Watch TS complain.
*   **Step 4: API Responses**
    *   *Action:* Show how to type the response of a `fetch` call. `const data = await response.json() as User[];`

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "When you start your first job, you will be handed a massive, messy codebase. If it's written in JavaScript, you'll be terrified to change anything because you won't know what breaks. If it's written in TypeScript, you can refactor confidently because the compiler acts as a safety net. 38% of all runtime bugs in production are completely eliminated just by adding TypeScript. It's not a suggestion anymore; it's a mandatory industry skill."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "Add TypeScript types to this JS code." Not Allowed: "Define my business domain types for me."
*   **Common Error 1:** "Property does not exist on type." -> You haven't defined it in the interface.
*   **Common Error 2:** "Type 'undefined' is not assignable to type 'X'." -> You used an optional property `?` or `.find()` and didn't handle the case where it doesn't exist.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Convert a JS product catalog to TS. Create `Product` interfaces, type all functions, use a union type for `category`, and set up strict mode.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I can define an `interface` for a custom object.
> > - [ ] I can type function parameters and return types.
> > - [ ] I can explain why using `any` is bad practice.
> > - [ ] I can use a Union type to restrict allowed values.
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
