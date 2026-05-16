## Week 15: CI/CD & Deployment

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Pipeline Diagram |
| Code Walkthrough | 30 min | Live Setup (CI YAML -> CD YAML -> secrets) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 15 strategy):** This is the "automate everything" week. Students are used to manual deploys — this feels like magic when it works. The assembly line analogy is essential — reference it for every pipeline stage. Build progressively: CI YAML (build + test) -> CD YAML (deploy) -> secrets management -> live deployment. The "push and it just works" moment is the payoff. Emphasize: CI/CD is not a substitute for testing — it's the automation OF testing. Secrets must NEVER be in code. The Linux vs Windows difference (GitHub Actions runs on Ubuntu) is the #1 gotcha.

### 1. The Hook

> [SPEAK] **Script:** "You wrote code, it works on your machine, you push it to GitHub, and... nothing happens. You still have to manually build, test, and deploy. Meanwhile, at every company, developers push code and it automatically gets tested, built, and deployed to production within minutes. That's CI/CD — Continuous Integration and Continuous Deployment. It's the difference between 'I deployed it manually at midnight' and 'I pushed it and went to sleep.'"

> [SLIDE] **Slide:** Title: "Push Code. Go to Sleep. Wake Up to a Live App."  
> Left: Developer manually building, testing, deploying at 2 AM (tired, error-prone). Right: Developer pushes code, GitHub Actions runs pipeline, app deploys automatically (green checkmarks everywhere). Subtitle: "This is what professional teams do."

> [TIP] **Teaching Tip:** Make the contrast visceral. Show a real GitHub Actions run with green checkmarks. Students need to SEE the automation before they believe it's possible.

> [ENGAGE] **Gen-Z:** "CI/CD is like setting up auto-pay for your bills. Instead of manually paying every month (and sometimes forgetting), it happens automatically. You push code, the pipeline handles the rest. No midnight deployment stress."  
> **-> Phone moment:** "Open GitHub. Go to the Actions tab of any popular repo. See all those green checkmarks? Each one is an automated pipeline that ran on every push. You're about to build your own."

> [LOST] **If they're lost:** "Don't worry if CI/CD sounds complex. It's just a YAML file that says 'when I push code, do these steps.' We'll build it together, step by step."

---

### 2. The Analogy

> [SPEAK] **Script:** "CI/CD is like an automated assembly line. In the old days, a car was built by hand — one person did everything. With an assembly line, each station does one thing: frame, engine, paint, inspection. If the inspection station finds a defect, the line stops and the car doesn't ship. CI/CD is the same: your code goes through stations (build -> test -> deploy). If any station fails, the deployment stops. No defective code reaches production."

> [BOARD] **Whiteboard:** Draw the assembly line:
> ```
> PUSH CODE -> [Checkout] -> [Build] -> [Test] -> [Lint] -> [Deploy]
>                [OK]            [OK]          [OK]        [OK]        [OK]
> 
> If ANY station fails -> pipeline stops -> no deploy
> 
> CI  = Build + Test + Lint (every push/PR)
> CD  = Deploy (only on main branch, after CI passes)
> 
> Secrets = fuel for the assembly line (injected, not stored)
> ```

> [TIP] **Teaching Tip:** The assembly line analogy maps perfectly: each pipeline step = a station, test failure = inspection defect, secrets = materials injected at the right station. Draw it and reference it throughout.

> [ENGAGE] **Gen-Z:** "The pipeline is like your Shopee order process. Checkout = get your code. Build = package your order. Test = quality check. Lint = verify items match listing. Deploy = ship to your address. If quality check fails, your order doesn't ship."  
> **-> Turn to your neighbor:** "In the assembly line analogy, what happens if the test station fails? Does the code still deploy? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the factory. CI/CD = push code -> automatic build -> automatic test -> automatic deploy. If any step fails, it stops. That's the whole thing."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min CI vs CD -> 5 min GitHub Actions -> 5 min pipeline stages -> 5 min secrets -> 5 min zero-downtime deployment)

> [SPEAK] **Script:** "Manual deployment is slow, error-prone, and stressful. You forget a step, you deploy the wrong version, you miss a test. CI/CD automates the entire process so every code change goes through the same rigorous pipeline. It also creates a record of every deployment — who deployed what, when, and whether it succeeded. Let me show you how each piece works."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a YAML snippet, (3) what happens without it. Don't show all concepts at once.

> [TIP] **Teaching Tip:** Spend the most time on secrets management and the CI vs CD distinction — these are where 80% of mistakes happen. For secrets, emphasize: NEVER commit them to code. For CI vs CD, emphasize: CI runs on every PR, CD only on main.

> [ASK] **Ask the class:** "What's the difference between CI and CD?" (CI = build and test on every push. CD = deploy after CI passes.) "Why not deploy on every PR?" (Because PRs are work-in-progress — you only deploy merged, reviewed code.)

> [ENGAGE] **Gen-Z:** "Secrets management is like your GCash MPIN. You don't write it on a sticky note (hardcoded in code). You don't text it to anyone (committed to git). You keep it in your head (environment variable) and only use it when needed (runtime injection)."  
> **-> Phone moment:** "Open your GitHub repo -> Settings -> Secrets and variables -> Actions. See where you add secrets? That's where your API keys, database passwords, and JWT secrets live — encrypted, never in code."

> [Q&A] **Student Q:** "Why use `npm ci` instead of `npm install` in CI?"
> **Short answer:** `npm ci` is deterministic — it installs exactly what's in the lock file.
> **Real answer:** `npm install` can update the lock file if dependencies changed. On CI, you want reproducible builds — the exact same packages every time. `npm ci` reads the lock file and installs those exact versions. If the lock file is out of sync, `npm ci` fails (which is good — it catches the problem).
> **The hidden question:** "Does it matter for small projects?" -> Yes. It's a habit. Build it now, and it scales naturally.

> [Q&A] **Student Q:** "What's zero-downtime deployment and do I need it?"
> **Short answer:** Deploying without taking the app offline. For your capstone, probably not.
> **Real answer:** Zero-downtime means the old version keeps serving requests while the new version starts up. Once the new version is healthy, traffic switches over. For production apps with users, this is essential. For your capstone, a brief downtime during deploy is acceptable.
> **The hidden question:** "How do companies do it?" -> Blue-green deployments, canary releases, rolling updates. But that's beyond this class.

> [LOST] **If they're lost:** "The simplest CI/CD summary: (1) CI = build + test on every push. (2) CD = deploy after CI passes. (3) Secrets go in GitHub Secrets, not code. (4) Pipeline stages run in order. That's 90% of what you need."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (10 min CI YAML -> 10 min CD YAML -> 10 min secrets + live demo)

> [SPEAK] **Script:** "Let's set up a full CI/CD pipeline from scratch. We'll write the CI workflow that builds and tests on every push, then the CD workflow that deploys to production, then configure secrets. By the end, you'll push code and watch it deploy automatically."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: CI YAML (checkout -> build -> test -> lint). Step 2: CD YAML (deploy backend + frontend). Step 3: Secrets configuration.

> [TIP] **Teaching Tip:** **Type the YAML live, don't paste.** For the CI workflow, emphasize: `needs` creates dependencies between jobs. For the CD workflow, emphasize: it only runs on `main` and requires CI to pass. For secrets, show the GitHub UI where they're configured.

> [BOARD] **Whiteboard:** Draw the pipeline flow:
> ```
> PUSH -> CI Pipeline:
>   +- backend: checkout -> dotnet restore -> dotnet build -> dotnet test
>   +- frontend: checkout -> npm ci -> npm run lint -> npm run build
> 
> MERGE to main -> CD Pipeline (needs CI):
>   +- deploy-backend: azure/webapps-deploy (uses secret)
>   +- deploy-frontend: actions-gh-pages (uses GITHUB_TOKEN)
> ```

> [ENGAGE] **Gen-Z:** "Writing a CI/CD pipeline is like setting up a Rube Goldberg machine. Each step triggers the next. If one domino falls wrong, the whole thing stops. But when it works? Pure magic."  
> **-> Type-along:** "Type the CI workflow first. Push it and watch it run in GitHub Actions. Then the CD workflow. Then add secrets. Then make a small change and watch the full pipeline deploy it."

> [Q&A] **Student Q:** "Why does the CD job have `needs: [ci-check]`?"
> **Short answer:** It won't run unless CI passes.
> **Real answer:** `needs` creates a dependency. The CD job waits for the CI job to complete successfully before starting. If CI fails (tests fail, build fails), CD never runs — no broken code reaches production. Without `needs`, CD would run regardless of CI status.
> **The hidden question:** "Can I have multiple dependencies?" -> Yes. `needs: [ci-backend, ci-frontend]` waits for both.

> [LOST] **If they're lost:** "Start with just the CI workflow. Push it and watch it run. Get it green. Then add the CD workflow. Then secrets. One piece at a time."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "At Vercel, every push to `main` triggers a deployment that's live in under 60 seconds. At Netflix, their CI/CD pipeline runs over 100,000 tests before deploying. The GitHub Actions workflow you're building is the same concept used by every company that ships software. The difference is scale — they have more stages, more environments (staging, canary, production), and more automated checks. But the principle is identical: automate everything, fail fast, deploy safely."

> [SLIDE] **Slide:** Stats: "Vercel: 60-second deploys. Netflix: 100,000+ tests per deploy." Logos: Vercel, Netflix, GitHub. Show a real GitHub Actions dashboard with multiple workflows.

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that CI/CD isn't academic — it's how every professional team ships code.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have used an app that had a bad update?" (All hands.) "That's what happens when teams don't have automated testing in their pipeline. You're learning how to prevent that."

> [LOST] **If they're lost:** "You don't need to know Netflix's infrastructure. Just understand: the pipeline you're building is the same concept. Automate everything, fail fast, deploy safely."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Set up a complete CI/CD pipeline for your full-stack app. Create CI and CD workflows, configure secrets, deploy to free hosting platforms, and verify the pipeline runs automatically on push."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] `.github/workflows/ci.yml` — runs on push to `main` and PRs
> - [ ] Backend: `dotnet build` + `dotnet test`
> - [ ] Frontend: `npm ci` + `npm run lint` + `npm run build`
> - [ ] Both jobs must pass for PR to be mergeable
> - [ ] `.github/workflows/cd.yml` — runs only on `main`, needs CI
> - [ ] Deploy frontend to Vercel/Netlify/GitHub Pages
> - [ ] Deploy backend to Render/Railway/Azure
> - [ ] All secrets in GitHub Secrets (never in code)
> - [ ] Deployment status badge in README
> - [ ] Make a small change, push, verify pipeline deploys

> [TIP] **Teaching Tip:** The CD deployment (requirements 5-7) is the hardest part — students will struggle with hosting platform setup and secret configuration. Circulate and help with publish profiles and environment variables.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the CI workflow (build + test), the other handles the CD workflow (deploy + secrets). Then combine and test the full pipeline together."

> [LOST] **If they're lost:** "Start with the CI workflow. Push it and watch it run. Get it green. Then the CD workflow. Then secrets. Then the live deploy test. Build incrementally."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate a GitHub Actions workflow, then review every step. Ask 'What happens if this step fails?' and 'Are secrets handled correctly?'"

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate a CI workflow for .NET + React" | "Handle my deployment secrets" |
> | "What's wrong with this pipeline?" | "Configure my production credentials" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: secrets in workflow files instead of `${{ secrets.NAME }}`, `npm install` instead of `npm ci`, missing `needs` dependencies, outdated action versions. Teach students to audit AI's pipeline code.

> [ENGAGE] **Gen-Z:** "AI writes CI/CD configs fast but often makes dangerous mistakes. It's like giving someone your house keys — if the AI puts secrets in the code, anyone can see them. Always check: are secrets using `${{ secrets.* }}`?"

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the CI/CD errors and traps you'll hit this week. The Linux vs Windows difference alone will save you from a frustrating debugging session."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "Resource not accessible by          |
> | integration"                         |
> | Workflow lacks permissions           |
> | Fix: check GITHUB_TOKEN permissions  |
> +--------------------------------------+
> +--------------------------------------+
> | "Pipeline passes locally but fails   |
> | on GitHub Actions"                   |
> | GitHub runs Ubuntu, not Windows      |
> | Fix: test in Linux environment       |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The Linux vs Windows issue is like your Android app not working on iPhone. GitHub Actions runs on Ubuntu (Linux), so Windows-specific paths (`\` vs `/`) will break. Always test your code in a Linux-compatible way."

> [Q&A] **Student Q:** "CI/CD is not a substitute for testing? So I still need tests?"
> **Short answer:** Yes. CI/CD automates running your tests — it doesn't replace them.
> **Real answer:** CI/CD is the pipeline that RUNS your tests. Without tests, the pipeline just builds and deploys — it doesn't verify anything. A pipeline without tests is like an assembly line without quality inspection — fast, but defective products ship.
> **The hidden question:** "What should my pipeline look like?" -> Lint -> Test -> Build -> Deploy. If any step fails, stop.

> [LOST] **If they're lost:** "The #1 issue: secrets leak. If you accidentally committed a secret to your repository, rotate it immediately (generate a new one), remove the old one, and consider using `git-filter-repo` to remove it from history. Never commit secrets."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: manual deploy pain -> assembly line analogy -> CI YAML -> CD YAML -> secrets -> live deployment. The assembly line analogy is the key mental model. Key pitfalls: secrets in code (not GitHub Secrets), `npm install` instead of `npm ci`, missing `needs` dependencies, Linux vs Windows path differences, CI/CD without tests. Emphasize: the "push and it just works" moment is the payoff — make sure every student experiences it. The deployment status badge in the README is a nice professional touch.

---

