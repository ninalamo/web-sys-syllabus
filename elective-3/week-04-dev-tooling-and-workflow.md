## Week 4: Dev Tooling & Workflow

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Terminal Demos |
| Code Walkthrough | 30 min | Live Code (NPM init to Vite build) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** This week involves a lot of terminal usage. Students will get frustrated with `npm ERR!`. Walk around and help them read the actual error messages instead of just typing fixes for them.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "You've been writing HTML, CSS, and JS in separate files and opening them in a browser. That works for a 3-page website. It fails catastrophically for an app with 5,000 files. Today we learn the industrial machines that build modern web apps."

> [BOARD] **Whiteboard Analogy:** The Car Factory
> *   **Your Code:** The raw steel, rubber, and glass.
> *   **NPM:** The supply chain delivering pre-built parts (radio, tires) from other factories.
> *   **Vite (Bundler):** The assembly line that crushes 5,000 files down into a single, highly optimized, drivable car.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: NPM & `package.json`
> **[SPEAK] Discussion:** "NPM is the Node Package Manager. It is a giant library of free code written by other people. The `package.json` is your receipt. It lists exactly which versions of which libraries your app needs to run."
>
> **[CODE] Example:**
> ```json
> "dependencies": { "react": "^18.2.0" },
> "devDependencies": { "eslint": "^8.0.0" }
> ```
>
> **[TIP] Instructor Tip:** Emphasize that dependencies are required for the app to work in production. DevDependencies are just tools for the developer (like linters).

#### Topic B: The `node_modules` Black Hole
> **[SPEAK] Discussion:** "When you run `npm install`, it downloads all the code listed in your `package.json` into a folder called `node_modules`. This folder is massive. It will contain tens of thousands of files."
>
> **[VISUAL] Example:**
> Show the `.gitignore` file with `node_modules/` in it.
>
> **[TIP] Gen-Z Hook:** Never commit `node_modules` to GitHub. It's like mailing your entire house instead of just the blueprint. GitHub will reject it, and your teammates will hate you.

#### Topic C: Bundlers (Vite)
> **[SPEAK] Discussion:** "Browsers are slow at downloading 500 individual JS files. A bundler like Vite takes your modern modules and crushes them together into one optimized `.js` file for the browser."
>
> **[CODE] Example:**
> Run `npm run build`. Show the terminal output where it shrinks the code into the `dist/` folder.
>
> **[TIP] Instructor Tip:** Explain why Create React App (CRA) is dead and why Vite is the modern standard (it uses native ES modules so dev server starts in 100ms instead of 10 seconds).

#### Topic D: Git Feature Branches
> **[SPEAK] Discussion:** "In the real world, you don't commit directly to the `main` branch. You create a sandbox, do your work, and then request to merge it."
>
> **[CODE] Example:**
> ```bash
> git checkout -b feature/login-page
> # Do work, commit, push
> ```
>
> **[TIP] Instructor Tip:** Drill this rule: "Working directly on `main` is a fireable offense in most companies."

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's build a modern project from scratch using Vite, install a package, and push it to a feature branch."

*   **Step 1: Scaffolding with Vite**
    *   *Action:* Run `npm create vite@latest my-app -- --template vanilla`. `cd` into it, run `npm install`, then `npm run dev`.
*   **Step 2: Installing a Package**
    *   *Action:* Install a visual package like `canvas-confetti`. Import it into `main.js` and make a button trigger it. Show the `package.json` updating.
*   **Step 3: Branching & Pushing**
    *   *Action:* Create a feature branch, commit the confetti feature, and push it to GitHub.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "When you join a company, day one is usually 'Set up your local environment.' You will pull the code, run `npm install`, and it will immediately crash. This is normal. Half the job of a modern frontend developer is fighting with mismatched Node versions and broken dependencies. Learn to read the red error text. The answer is almost always literally written in the terminal output, but junior devs panic and don't read it."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "What does this npm error mean?" Not Allowed: "Write a bash script to do all my git commands."
*   **Common Error 1:** `npm ERR! code ERESOLVE`. -> Dependency conflict. Usually fixed by reading the terminal and using `--legacy-peer-deps` (explain why cautiously).
*   **Common Error 2:** `command not found: vite`. -> You forgot to run `npm install` before running `npm run dev`.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Scaffold a vanilla Vite app. Install the `date-fns` package. Write a script that imports `formatDistanceToNow` to show exactly how many days/hours ago they were born. Push it to a feature branch.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I know why we use `package.json`.
> > - [ ] I understand why `node_modules` must be in `.gitignore`.
> > - [ ] I can use Vite to scaffold and run a development server.
> > - [ ] I can install a 3rd party package using NPM.
> > - [ ] I can create and push a Git feature branch.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Linter's Revenge"
> > 1. Create a new Vite Vanilla project.
> > 2. Write a messy, poorly formatted JavaScript file with unused variables and bad indentation.
> > 3. **The Catch:** Install ESLint and Prettier. Configure them. Run the linting script and take a screenshot of ESLint screaming at your bad code, then run the auto-fix command to format it perfectly.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** None. Scaffold live.
> - **Solution Repo:** A vanilla Vite project with `canvas-confetti` and `date-fns` installed, demonstrating basic package importing.
