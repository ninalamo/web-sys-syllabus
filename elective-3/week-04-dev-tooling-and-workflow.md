## Week 4: Dev Tooling & Workflow

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Tool Comparison |
| Code Walkthrough | 30 min | Live Setup (step-by-step scaffold) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 4 strategy):** This is a setup-heavy week. Students will get stuck on npm installs, config files, and CI setup. The goal isn't mastery — it's "I've seen it work and I know where to look when I need it." Keep the pace moving; don't get bogged down in config details.

---

### 1. The Hook

> [SPEAK] **Script:** "You know how VS Code auto-formats your code when you save, highlights errors in red before you even run anything, and suggests imports as you type? None of that is built into JavaScript itself. It's all tooling. Without these tools, you'd be debugging typos at 2 AM instead of building features."

> [SLIDE] **Slide:** Title: "The Invisible Tools Behind Your Editor"  
> Show VS Code with red underlines, auto-format on save, and import suggestions. Label each feature with the tool behind it: ESLint, Prettier, TypeScript.

> [TIP] **Teaching Tip:** Make students realize that the "magic" of their editor is actually tooling. This creates curiosity about how it works.

> [ENGAGE] **Gen-Z:** "Dev tools are like the autopilot on your phone's camera. You don't think about exposure, focus, or white balance — the tool handles it. ESLint, Prettier, and Vite are autopilot for your code."  
> **-> Poll:** "How many of you have 'Format on Save' enabled in VS Code?" (Most hands.) "That's Prettier working behind the scenes."

> [LOST] **If they're lost:** "Tooling just means 'tools that make coding easier.' You already use them — you just didn't know their names."

---

### 2. The Analogy

> [SPEAK] **Script:** "Building a web app without tooling is like building a house without power tools. You can do it with a hand saw and a hammer, but it'll take forever and the results will be uneven. Dev tools are your power tools."

> [BOARD] **Whiteboard:** Draw the tool mapping:
> ```
> Vite -> Table saw (cuts and assembles fast)
> ESLint -> Level (keeps everything straight)
> Prettier -> Sander (makes everything smooth)
> Git -> Blueprint tracker (records every change)
> ```

> [TIP] **Teaching Tip:** The power tools analogy works well because everyone understands the difference between hand tools and power tools. Emphasize: "You CAN code without these tools. But why would you?"

> [ENGAGE] **Gen-Z:** "Setting up tooling is like setting up your gaming PC. You don't NEED RGB lighting, but it makes everything feel professional and organized. ESLint is your anti-cheat — it catches you before you make a dumb mistake."  
> **-> Turn to your neighbor:** "Which tool sounds most useful to you? Vite, ESLint, Prettier, or Git? 10 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the analogy. Tooling = tools that automate boring stuff. Formatting, error checking, bundling. That's it."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min npm -> 5 min Vite -> 5 min ESLint -> 5 min Prettier -> 5 min Git/PR workflow)

> [SPEAK] **Script:** "JavaScript has no built-in way to check code quality, format code consistently, or bundle files for the browser. Tooling fills these gaps. Let me show you what each tool does and why you need it."

> [SLIDE] **Slide:** Show one tool at a time. For each: (1) what it does, (2) what happens without it, (3) a quick demo.

> [TIP] **Teaching Tip:** Don't go deep into config files — that's for the code walkthrough. Focus on the mental model: what problem does each tool solve?

> [ASK] **Ask the class:** "What happens if two developers on a team format code differently?" (Answer: Merge conflicts, inconsistent code, wasted time in code review arguing about style.)

> [ENGAGE] **Gen-Z:** "npm is like the App Store for code. You don't write everything from scratch — you download packages other people wrote. `package.json` is your shopping list."  
> **-> Phone moment:** "Open any npm package page on your browser. Look at the 'Dependencies' section. That's how real projects manage their code."

> [Q&A] **Student Q:** "Why do I need both ESLint and Prettier? Don't they do the same thing?"
> **Short answer:** No. ESLint checks for bugs, Prettier handles formatting.
> **Real answer:** ESLint catches code quality issues: unused variables, potential bugs, bad patterns. Prettier makes code look consistent: spacing, line breaks, quotes. They overlap on some formatting rules, which is why you need `eslint-config-prettier` to disable the overlap.
> **The hidden question:** "Can I just use one?" -> You could, but you'd lose either bug detection or consistent formatting.

> [Q&A] **Student Q:** "What's the difference between `npm install` and `npm ci`?"
> **Short answer:** `install` updates the lock file, `ci` uses it exactly.
> **Real answer:** `npm install` is for local development — it updates `package-lock.json` if dependencies changed. `npm ci` is for CI/CD — it installs exactly what's in the lock file, ensuring reproducible builds. Always use `npm ci` in CI.
> **The hidden question:** "Why does this matter?" -> Because `npm install` in CI can produce different results on different machines.

> [LOST] **If they're lost:** "The simplest summary: npm = package manager. Vite = bundles your code. ESLint = catches bugs. Prettier = formats code. Git = tracks changes. That's all you need to know today."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min npm init -> 5 min package.json -> 5 min install -> 5 min vite config -> 10 min CI pipeline)

> [SPEAK] **Script:** "Let's set up a professional project from scratch. We'll go step by step: npm init, add scripts, install dependencies, configure Vite, and set up a CI pipeline."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: `npm init -y`. Step 2: package.json scripts. Step 3: install commands. Step 4: vite.config.ts. Step 5: CI YAML.

> [TIP] **Teaching Tip:** **Run each command live.** Show the terminal output after each step. When you run `npm install`, show the `node_modules` folder appearing. When you run `npm run dev`, show the browser opening.

> [BOARD] **Whiteboard:** Draw the project structure as you build it:
> ```
> my-app/
> +-- package.json       <- project ID + scripts
> +-- vite.config.ts     <- Vite settings
> +-- .eslintrc          <- ESLint rules
> +-- .prettierrc        <- Prettier settings
> +-- .github/workflows/ <- CI pipeline
> |   +-- ci.yml
> +-- src/               <- your code
> ```

> [ENGAGE] **Gen-Z:** "Setting up a project is like building a PC. You pick the parts (dependencies), assemble them (config files), and test if it boots (npm run dev)."  
> **-> Type-along:** "Run each command with me. Don't copy-paste — type it. You need to know these commands by heart."

> [Q&A] **Student Q:** "Why does vite.config.ts need the React plugin?"
> **Short answer:** Because Vite doesn't understand JSX by default.
> **Real answer:** JSX (the HTML-like syntax in React) isn't valid JavaScript. The React plugin tells Vite how to transform JSX into regular JavaScript. Without it, your .tsx files would cause syntax errors.
> **The hidden question:** "What if I'm not using React?" -> Then you don't need the React plugin. Vite has plugins for Vue, Svelte, etc.

> [LOST] **If they're lost:** "Focus on the scripts in package.json. `dev` = start dev server. `build` = bundle for production. `lint` = check code quality. Those three are the ones you'll use every day."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "At any mid-to-large company, you cannot push code to `main` without a passing CI pipeline. Your first week at a real job, you'll be setting up your dev environment with the exact same tools."

> [SLIDE] **Slide:** Show a real GitHub Actions CI run with green checkmarks. Label: "This runs on every PR. If it fails, your code doesn't merge."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that tooling isn't academic — it's what every professional team uses.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have used GitHub Actions before?" (Few hands.) "After this week, you'll have set up your first CI pipeline."

> [LOST] **If they're lost:** "You don't need to understand CI/CD fully today. Just know: it's automated testing that runs when you push code. If it fails, you fix it."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min scaffold -> 10 min share)

> [SPEAK] **Script:** "Set up a professional project scaffold from scratch. npm init, Vite with React + TypeScript, ESLint, Prettier, CI pipeline, README, and a PR workflow."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] `npm init` with `"type": "module"`
> - [ ] Vite + React + TypeScript
> - [ ] ESLint strict config
> - [ ] Prettier setup
> - [ ] ESLint + Prettier compatibility
> - [ ] `.github/workflows/ci.yml`
> - [ ] `README.md` with setup instructions
> - [ ] Git branch + PR

> [TIP] **Teaching Tip:** The ESLint + Prettier compatibility (requirement 5) is the hardest part. Students will get conflicting rules. Circulate and help with `eslint-config-prettier`.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the tooling setup (Vite, ESLint, Prettier), the other handles the Git workflow (branch, commit, PR). Then combine."

> [LOST] **If they're lost:** "Start with `npm init` and `npm install`. Get the dev server running first. Then add ESLint. Then Prettier. Then CI. One step at a time."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate config files and then review each setting. Ask 'What does this rule actually check?' for every ESLint rule. Never let AI configure your CI pipeline without understanding every step."

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate a .eslintrc config" | "Set up my entire CI pipeline" |
> | "What does this ESLint rule check?" | "Fix my ESLint/Prettier conflicts" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: outdated ESLint configs, conflicting Prettier rules, `npm install` instead of `npm ci` in CI.

> [ENGAGE] **Gen-Z:** "AI is great at generating config files but terrible at understanding YOUR project's needs. Always review what it generates."

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the setup errors you'll hit this week. Most of them are dependency or config issues."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "Cannot find module 'react'"         |
> | Missing node_modules or corrupted    |
> | Fix: delete node_modules, npm install|
> +--------------------------------------+
> +--------------------------------------+
> | "ESLint and Prettier conflict"       |
> | Both control formatting              |
> | Fix: install eslint-config-prettier  |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The ESLint/Prettier conflict is like having two managers telling you to do the same thing differently. You need one to step back — that's `eslint-config-prettier`."

> [Q&A] **Student Q:** "Why does my app work in dev but break after build?"
> **Short answer:** Dev and production handle things differently.
> **Real answer:** Vite's dev server resolves imports differently than the production build. You might be relying on dev-only behavior (like importing a file with a relative path that works in dev but not in production). Always test the production build locally with `npm run preview` before deploying.
> **The hidden question:** "How do I prevent this?" -> Always run `npm run preview` before deploying.

> [LOST] **If they're lost:** "The #1 issue: never commit `node_modules`. If you did, run `git rm -r --cached node_modules` and add it to `.gitignore`. That fixes it."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The step-by-step scaffold is key — run each command live and show the results.

---

