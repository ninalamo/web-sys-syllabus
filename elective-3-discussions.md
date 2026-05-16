# Elective 3: Production-Grade Products — Full Lesson Content

---

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

> [TIP] **Teaching Tip (first week strategy):** This is a "review" week but don't assume mastery. Many students learned JS from outdated tutorials. The goal is to replace bad habits (`var`, for loops for everything) with modern patterns (`const`, `.filter()`, `.map()`). Keep energy high — this is the foundation for React.

---

### 1. The Hook

> [SPEAK] **Script:** "You know how TikTok doesn't reload the whole page when you switch from your For You feed to Following? That's not magic — it's modern JavaScript doing exactly what you're about to learn. Every app you use daily is built on the ES6+ features we're covering this week."

> [SLIDE] **Slide:** Title: "The JavaScript You Know Is Outdated"  
> Left: "ES5 (2009)" with `var`, `function()`, string concat. Right: "ES6+ (2015-now)" with `const`, `() =>`, template literals.

> [TIP] **Teaching Tip:** This hook creates productive discomfort — students realize their JS knowledge might be outdated. Frame it positively: "You're about to level up."

> [ENGAGE] **Gen-Z:** "Old JavaScript is like using a flip phone in the smartphone era. It works, but you're missing out on everything that makes modern apps feel smooth. ES6+ is the upgrade."  
> **-> Phone moment:** "Open TikTok on your phone. Switch between For You and Following. Notice it doesn't reload? That's the JavaScript we're learning today."

> [LOST] **If they're lost:** "Don't worry if your JS feels rusty. This week is a review — we're starting from the basics and building up. By the end, you'll write JS that looks like production code."

---

### 2. The Analogy

> [SPEAK] **Script:** "Think of old JavaScript like a kitchen where everything is in one giant drawer. `var` is that drawer — anything you put in it bleeds into everything else. Modern JS is like a kitchen with labeled containers: `let` is refillable, `const` is sealed, and modules are separate drawers for baking vs. cooking."

> [BOARD] **Whiteboard:** Draw the kitchen analogy:
> ```
> OLD (ES5): One giant drawer labeled "var"
>   [users, i, temp, data, results] — all mixed up
> 
> NEW (ES6+): Labeled containers
>   [const users] — sealed jar
>   [let i] — refillable container
>   [module: data.js] — separate drawer
>   [module: utils.js] — separate drawer
> ```

> [TIP] **Teaching Tip:** The kitchen analogy works well because everyone understands organization. Emphasize: `const` = sealed (can't swap the container), `let` = refillable (can change contents), `var` = everything dumped together.

> [ENGAGE] **Gen-Z:** "`var` is like your GCash transaction history — everything's in one long list and it's hard to find anything. `const` and `let` are like categorized folders: payments, received, sent. Much cleaner."  
> **-> Turn to your neighbor:** "Explain why `var` is bad using the kitchen analogy in 10 seconds. Go!"

> [LOST] **If they're lost:** "Forget the kitchen. Think of it this way: `var` lets variables escape where they shouldn't be. `const` and `let` keep them contained. That's the whole point."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (8 min let/const/var -> 5 min arrow functions -> 4 min template literals -> 4 min destructuring/spread -> 4 min modules)

> [SPEAK] **Script:** "ES6+ didn't just add features — it added structure. Before ES6, JavaScript had no real way to organize code. Everything leaked into the global scope. Let me show you what changed and why each feature matters."

> [SLIDE] **Slide:** Show one feature at a time. For each: (1) the old way, (2) the new way, (3) why it's better. Don't show all features at once — cognitive overload.

> [TIP] **Teaching Tip:** Spend the most time on `let` vs `const` vs `var` — this is the foundation. Students will use this every day. For arrow functions, emphasize the `this` difference, not just the shorter syntax.

> [ASK] **Ask the class:** "Who here has used `var` before?" (Most hands.) "Who's gotten a bug because a variable was accessible where it shouldn't be?" (Some hands.) "That's why we have `let` and `const`."

> [ENGAGE] **Gen-Z:** "The rule of thumb: `const` by default, `let` when you must, `var` never. It's like your phone settings — leave everything on default unless you have a reason to change it."  
> **-> Phone moment:** "Open your browser console right now (F12 -> Console). Type `var x = 5` then `console.log(x)`. Now type `let y = 10` then `console.log(y)`. Same result. But try accessing them outside a `{}` block — that's where they differ."

> [Q&A] **Student Q:** "Why can't I just use `let` for everything?"
> **Short answer:** You can, but `const` communicates intent.
> **Real answer:** `const` tells other developers (and yourself) "this value won't change." It's documentation through code. It also prevents accidental reassignment bugs.
> **The hidden question:** "Is this really that important?" -> In a 2,000-line file, knowing what can and can't change saves hours of debugging.

> [Q&A] **Student Q:** "When would I actually use spread vs rest? They look the same."
> **Short answer:** Same syntax (`...`), different context.
> **Real answer:** Spread expands: `[...arr1, ...arr2]` merges arrays. Rest collects: `function(a, b, ...rest)` gathers remaining args into an array. Context tells you which one it is.
> **The hidden question:** "Why use the same symbol for two things?" -> Because they're inverse operations. Spread puts things out, rest brings things in.

> [LOST] **If they're lost:** "The simplest summary: `const` = can't reassign. `let` = can reassign. `var` = don't use. Arrow functions = shorter + different `this`. Template literals = backticks with `${}`. Destructuring = pull values out in one line. Modules = split code across files."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min show old code -> 15 min refactor line by line -> 10 min explain why each change matters)

> [SPEAK] **Script:** "Let's refactor a messy piece of old JavaScript into modern ES6+. This is the kind of code you'd find in a legacy codebase. Watch how each change makes the code cleaner."

> [SLIDE] **Slide:** Side-by-side: old ES5 code on left, modern ES6+ on right. Use color coding: red for old patterns, green for new patterns.

> [TIP] **Teaching Tip:** **Type the refactor live, don't paste.** Explain each change as you make it: "I'm replacing `var` with `const` because we never reassign this." "I'm replacing the for loop with `.filter()` because it's declarative."

> [BOARD] **Whiteboard:** Draw the transformation flow:
> ```
> for loop + if -> .filter()
> manual push + string concat -> .map() + template literal
> var -> const
> function() -> () =>
> ```

> [ENGAGE] **Gen-Z:** "This refactor is like a glow-up transformation video. Before: messy, outdated, hard to read. After: clean, modern, professional. Same functionality, completely different vibe."  
> **-> Type-along:** "Open your editor. Type the ES5 code first. Then refactor it with me, line by line. Don't copy-paste — type every change."

> [Q&A] **Student Q:** "Why use `.filter()` and `.map()` instead of a for loop? Isn't the for loop faster?"
> **Short answer:** For loops are marginally faster, but the difference is negligible.
> **Real answer:** `.filter()` and `.map()` are declarative — you say WHAT you want, not HOW to get it. They're more readable, less error-prone (no index tracking), and chainable. Performance difference is microseconds.
> **The hidden question:** "Is this just a style preference?" -> No. Declarative code is easier to reason about and harder to bug.

> [LOST] **If they're lost:** "Let me show you the simplest refactor: just replace `var` with `const`. That's one change. Run it. It works. Now replace the for loop with `.filter()`. Run it. It works. One change at a time."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "Every React component you'll write this semester uses destructuring for props, arrow functions for handlers, template literals for dynamic strings, and modules for file organization. If you can't read modern JS, you can't read any production codebase."

> [SLIDE] **Slide:** Screenshot of a real React component showing destructured props, arrow function handlers, and template literals. Label each ES6+ feature.

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that modern JS isn't academic — it's in every production codebase they'll encounter.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have looked at a React tutorial and felt lost because of the syntax?" (Many hands.) "That's ES6+ syntax. After this week, you'll understand it."

> [LOST] **If they're lost:** "You don't need to master everything today. Just understand: modern JS is the standard. Every job, every framework, every tutorial uses it."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Your task: refactor this ES5 product code to modern ES6+. Replace all `var`, convert functions to arrows, use `.filter()` and `.map()`, add destructuring, template literals, and split into two files with import/export."

> [SLIDE] **Slide:** Exercise requirements as a checklist:
> - [ ] Replace all `var` with `const` or `let`
> - [ ] Convert functions to arrow functions
> - [ ] Use `.filter()` and `.map()` instead of for loops
> - [ ] Use destructuring where possible
> - [ ] Use template literals for all string building
> - [ ] Split into `data.js` and `utils.js` with `import`/`export`

> [TIP] **Teaching Tip:** The module split (requirement 6) is the hardest part. Students will struggle with `import`/`export` syntax. Circulate and help with this specifically.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the data file, the other handles the utils file. Then combine them with import/export. It's like a collab — each person owns their part."

> [LOST] **If they're lost:** "Start with the easy wins: replace `var` with `const`. Then convert the functions to arrows. Then tackle `.filter()` and `.map()`. Save the module split for last."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, you can ask AI to refactor your ES5 code and then compare its output with yours. Ask 'Why did you choose `.reduce()` here instead of `.map()`?' Don't let AI write your module imports without understanding them."

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Refactor this ES5 code to ES6+" | "Write my module imports for me" |
> | "Why did you use `.reduce()` here?" | "Do the entire exercise" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes listed in the content. AI overuses `.reduce()` — teach students to question AI's choices.

> [ENGAGE] **Gen-Z:** "AI is like having a senior dev review your code. It can suggest improvements, but you need to understand WHY the improvement is better."

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the errors and mental model traps you'll hit this week. Let's go through them so you don't spend 20 minutes Googling."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "Assignment to constant variable"    |
> | You used const and tried to reassign |
> | Fix: use let, or restructure code    |
> +--------------------------------------+
> +--------------------------------------+
> | "Cannot use import outside a module" |
> | Missing type="module" or package.json|
> | Fix: add type="module" to script tag |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The 'const reassignment' error is like trying to change a sealed GCash PIN — it's locked for a reason. If you need to change it, use `let` (the unlockable version)."

> [Q&A] **Student Q:** "Why does `const user = {}; user.name = 'Bob'` work? I thought const means it can't change?"
> **Short answer:** `const` prevents reassignment of the variable, not mutation of the value.
> **Real answer:** `const` means the variable always points to the same object. But the object's properties can still change. Think of it as: the address is fixed, but what's inside the house can change.
> **The hidden question:** "So const doesn't mean immutable?" -> Correct. For immutability, use `Object.freeze()` or a library like Immer.

> [LOST] **If they're lost:** "The #1 issue this week is the import/module error. If you see 'Cannot use import statement outside a module,' add `type="module"` to your script tag. That fixes it 90% of the time."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The ES5-to-ES6+ refactor is the core activity — type it live and have students follow along.

---

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

> [TIP] **Teaching Tip (Week 2 strategy):** Async is the hardest concept in the JavaScript curriculum. Students think synchronously by default. Use the restaurant buzzer analogy repeatedly. The event loop diagram is essential — draw it on the whiteboard and reference it throughout.

---

### 1. The Hook

> [SPEAK] **Script:** "Every time you open Instagram and see your feed load, then your stories load a second later, then your suggested accounts appear — that's async JavaScript. Your browser didn't freeze while waiting for the server. If async didn't exist, every app would lock up for seconds every time it talked to a server."

> [SLIDE] **Slide:** Title: "What If the Internet Was Synchronous?"  
> A loading screen that says "Please wait 8 seconds for your feed to load..." with a spinning wheel. Subtitle: "This is what the web would look like without async."

> [TIP] **Teaching Tip:** Make the problem visceral. Ask students to imagine waiting 8 seconds every time they tap anything. They'll immediately understand why async matters.

> [ENGAGE] **Gen-Z:** "Async is why TikTok feels instant. Without it, every swipe would freeze your phone for 3 seconds while it loads the next video. You'd have uninstalled TikTok on day one."  
> **-> Phone moment:** "Open any app right now. Watch how content loads in pieces — text first, then images, then videos. That's async working behind the scenes."

> [LOST] **If they're lost:** "Async just means 'don't wait.' Instead of stopping everything while you wait for data, you keep doing other stuff and come back when the data arrives."

---

### 2. The Analogy

> [SPEAK] **Script:** "Imagine you're at a fast-food restaurant. Synchronous is standing at the counter, ordering, and waiting there until your food is made — nobody behind you can order. Asynchronous is ordering, getting a buzzer, and sitting down. The restaurant keeps serving other customers while your food is being prepared."

> [BOARD] **Whiteboard:** Draw the restaurant comparison:
> ```
> SYNCHRONOUS:
> Customer 1 -> orders -> WAITS -> gets food -> leaves
> Customer 2 -> orders -> WAITS -> gets food -> leaves
> (Total: 20 minutes for 2 customers)
> 
> ASYNCHRONOUS:
> Customer 1 -> orders -> gets buzzer #1 -> sits
> Customer 2 -> orders -> gets buzzer #2 -> sits
> Buzzer #1 rings -> Customer 1 gets food
> Buzzer #2 rings -> Customer 2 gets food
> (Total: 10 minutes for 2 customers)
> ```

> [TIP] **Teaching Tip:** The buzzer analogy is perfect for promises. The buzzer number = the promise. When it rings = the promise resolves. If the kitchen runs out = the promise rejects.

> [ENGAGE] **Gen-Z:** "The buzzer is your promise. While you're waiting, you can scroll TikTok (other code runs). When the buzzer rings (.then()), you go get your food. If they say 'out of stock' (.catch()), you deal with it."  
> **-> Turn to your neighbor:** "In the restaurant analogy, what's the event loop? What's the call stack? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the technical terms. Async = order food, get a buzzer, sit down. Sync = order food, stand at the counter, wait. Which would you prefer?"

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (8 min event loop -> 5 min callbacks -> 5 min promises -> 5 min async/await -> 2 min Promise.all)

> [SPEAK] **Script:** "JavaScript runs on a single thread — it can only do one thing at a time. Async lets JS say 'I'll come back to this later' and keep doing other work. Here's how it works."

> [SLIDE] **Slide:** Event Loop diagram: Call Stack -> Web APIs -> Callback Queue -> Event Loop -> Call Stack. Animate the flow with a real example: `setTimeout(() => console.log('done'), 0)`.

> [TIP] **Teaching Tip:** The event loop is abstract. Draw it on the whiteboard and walk through a concrete example step by step. Students need to SEE the flow, not just hear about it.

> [ASK] **Ask the class:** "What do you think happens when you run `setTimeout(() => console.log('done'), 0)`? Does it log immediately?" (Answer: No — it goes to the callback queue and waits for the call stack to be empty.)

> [ENGAGE] **Gen-Z:** "The event loop is like a Grab driver. It checks: 'Is the current ride done? Yes? Okay, pick up the next passenger from the queue.' It never stops cycling."  
> **-> Phone moment:** "Open your browser console. Type: `console.log('A'); setTimeout(() => console.log('B'), 0); console.log('C')`. What order do they print? A, C, B — not A, B, C. That's the event loop in action."

> [Q&A] **Student Q:** "Why use async/await instead of .then()? They do the same thing."
> **Short answer:** async/await is easier to read and debug.
> **Real answer:** `.then()` chains get hard to follow, especially with error handling. async/await looks like regular synchronous code, making it easier to reason about. Under the hood, they're identical.
> **The hidden question:** "Which one should I use?" -> async/await in new code. `.then()` when working with legacy code.

> [Q&A] **Student Q:** "What's the difference between `Promise.all()` and `Promise.allSettled()`?"
> **Short answer:** `Promise.all()` fails if ANY promise fails. `Promise.allSettled()` waits for ALL regardless.
> **Real answer:** Use `Promise.all()` when you need ALL results (if one fails, the whole thing is useless). Use `Promise.allSettled()` when partial results are okay (like fetching 5 posts — if one fails, you still want the other 4).
> **The hidden question:** "When would I use each?" -> `Promise.all()` for dependencies (need all data). `Promise.allSettled()` for independent items (some data is better than none).

> [LOST] **If they're lost:** "The simplest summary: (1) `fetch()` returns a promise. (2) `await` waits for it. (3) `try/catch` handles errors. That's 90% of what you need."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min raw fetch -> 8 min .then() chain -> 10 min async/await -> 7 min Promise.all)

> [SPEAK] **Script:** "Let's build a data fetcher step by step. We'll start with raw fetch, then chain .then(), then upgrade to async/await, then do parallel requests."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: raw fetch (shows Promise pending). Step 2: .then() chain. Step 3: async/await. Step 4: Promise.all.

> [TIP] **Teaching Tip:** Emphasize the `fetch` gotcha: it doesn't throw on 404/500. Students MUST check `response.ok`. This is the #1 async bug they'll encounter.

> [BOARD] **Whiteboard:** Draw the async/await flow:
> ```
> async function fetchUsers() {
>   try {
>     await fetch() -> wait for response
>     check response.ok -> if not, throw error
>     await response.json() -> wait for parsed data
>     return data
>   } catch (error) {
>     handle error
>   }
> }
> ```

> [ENGAGE] **Gen-Z:** "async/await is like ordering on GrabFood. You place the order (fetch), wait for it to arrive (await), and if something goes wrong, Grab customer service handles it (catch)."  
> **-> Type-along:** "Type the async/await version with me. This is what you'll actually write in production. The .then() version is just for understanding."

> [Q&A] **Student Q:** "Why does `console.log(response)` show `Promise { <pending> }`?"
> **Short answer:** Because fetch returns immediately — the data hasn't arrived yet.
> **Real answer:** `fetch()` starts the request and returns a Promise. The Promise is pending until the server responds. `console.log` runs before the response arrives, so you see the pending state.
> **The hidden question:** "How do I get the actual data?" -> Use `await` or `.then()`.

> [LOST] **If they're lost:** "Start with just the async/await pattern. Forget .then() for now. The pattern is: `async` function, `await` the fetch, `try/catch` for errors. That's it."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "The Instagram web app makes 15+ parallel API calls when you load your feed. They use `Promise.all()` to fetch everything simultaneously. If they did these sequentially, your feed would take 5+ seconds to load."

> [SLIDE] **Slide:** Timeline comparison: Sequential (5+ seconds) vs Parallel (under 1 second) for loading a social media feed.

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that async isn't academic — it's the reason modern apps feel fast.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you get annoyed when an app takes more than 2 seconds to load?" (All hands.) "Async is what keeps apps under that 2-second threshold."

> [LOST] **If they're lost:** "You don't need to understand Instagram's architecture. Just know: parallel requests = faster apps. That's why `Promise.all()` exists."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Build an async data fetcher using JSONPlaceholder. Fetch posts, then fetch comments for each post in parallel. Add error handling, loading states, and compare parallel vs sequential performance."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Fetch posts from `/posts`
> - [ ] Fetch comments for first 5 posts in parallel
> - [ ] Return `{ post, comments }` objects
> - [ ] Add `try/catch` error handling
> - [ ] Simulate loading state
> - [ ] Compare parallel vs sequential timing

> [TIP] **Teaching Tip:** The timing comparison (requirement 5) is the "aha" moment. Students will see that parallel is significantly faster. Make sure they actually measure and log the times.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person writes the sequential version, the other writes the parallel version. Then compare times. The difference will surprise you."

> [LOST] **If they're lost:** "Start with just fetching posts. Get that working. Then add comments for one post. Then use `Promise.all()` for all five. Build incrementally."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate async code, then trace through it manually. Write down the order you think things will execute, then run it and compare. Never let AI handle your error boundaries."

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate async fetch code" | "Handle all my error boundaries" |
> | "Explain the event loop" | "Write my Promise.all logic" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: forgetting `response.ok` check, suggesting `Promise.all()` when `Promise.allSettled()` is needed, missing error handling.

> [ENGAGE] **Gen-Z:** "AI is great at writing async code but terrible at understanding YOUR error handling needs. Always review what it generates."

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the async errors and mental model traps you'll hit. The fetch gotcha alone will save you hours of debugging."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "Cannot read properties of undefined"|
> | Calling .json() on wrong variable    |
> | Fix: check your fetch URL and chain  |
> +--------------------------------------+
> +--------------------------------------+
> | Infinite loading / promise never     |
> | resolves                             |
> | Fix: check for missing return in     |
> | .then() or await outside async       |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The fetch gotcha is like ordering food and assuming it's ready because the app said 'order placed.' You still need to check if the restaurant actually accepted it (`response.ok`)."

> [Q&A] **Student Q:** "Why doesn't `fetch()` throw an error on 404?"
> **Short answer:** Because 404 is a valid HTTP response — the server responded, just with "not found."
> **Real answer:** `fetch()` only throws on network errors (no internet, server down). A 404 means the server IS working — it's telling you the resource doesn't exist. You need to check `response.ok` yourself.
> **The hidden question:** "That seems like a bad design." -> It's by design. HTTP status codes are information, not errors.

> [LOST] **If they're lost:** "The golden rule: always check `response.ok` after `await fetch()`. If it's false, throw an error. This prevents 90% of async bugs."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The event loop diagram and fetch gotcha are the two most important teaching points.

---

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

> [TIP] **Teaching Tip (Week 3 strategy):** TypeScript feels like extra work to students who are used to JavaScript's freedom. Frame it as "free bug detection" not "extra rules." The progressive typing approach (JS -> add types step by step) is key — don't start with a fully typed file.

---

### 1. The Hook

> [SPEAK] **Script:** "TypeScript is what stops you from pushing a bug to production where a user's age is `undefined` and your app crashes trying to calculate their birth year. JavaScript would let that slide silently. TypeScript catches it before you even run the code."

> [SLIDE] **Slide:** Title: "The Bug That TypeScript Caught"  
> Left: JavaScript code with `user.age + 1` where `age` is undefined -> crash. Right: Same code in TypeScript -> red underline error before running.

> [TIP] **Teaching Tip:** This hook works because every student has experienced a runtime type bug. Make it personal: "Raise your hand if you've had a bug where a variable was the wrong type."

> [ENGAGE] **Gen-Z:** "TypeScript is like having a bouncer at the door of your code. JavaScript lets anyone in — even `undefined` wearing a fake ID. TypeScript checks IDs at the door."  
> **-> Poll:** "How many of you have pushed code that crashed because a variable was `undefined`?" (Most hands.) "TypeScript prevents that."

> [LOST] **If they're lost:** "TypeScript is JavaScript with a safety net. You write the same code, but TypeScript checks for type mistakes before you run it."

---

### 2. The Analogy

> [SPEAK] **Script:** "JavaScript is like writing an essay without spellcheck. You can write anything, and it won't complain until someone reads it and finds mistakes. TypeScript is like spellcheck + grammar check + a fact-checker. It catches mistakes while you're typing, not after you've published."

> [BOARD] **Whiteboard:** Draw the comparison:
> ```
> JavaScript: Write -> Run -> Crash -> Fix -> Repeat
> TypeScript: Write -> Type Check -> Fix -> Run -> Works
> ```

> [TIP] **Teaching Tip:** The spellcheck analogy is universal. Emphasize: TypeScript doesn't change how your code RUNS — it checks your code BEFORE it runs. The types disappear in the output.

> [ENGAGE] **Gen-Z:** "TypeScript is like autocorrect on your phone, but for code. It won't let you send 'the user's email is 42' because 42 isn't a string. It catches it before you hit send (deploy)."  
> **-> Turn to your neighbor:** "Explain TypeScript to someone who only knows JavaScript in 15 seconds. Go!"

> [LOST] **If they're lost:** "Forget the analogy. TypeScript = JavaScript + types. You write types, TypeScript checks them, then removes them and gives you regular JavaScript. That's it."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min types vs interfaces -> 5 min any vs unknown -> 4 min union types -> 4 min optional chaining -> 4 min generics -> 3 min compilation)

> [SPEAK] **Script:** "TypeScript adds a compile-time type layer that catches errors before execution. Let me show you the key concepts you'll use every day."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a code example, (3) what error it prevents. Don't show all concepts at once.

> [TIP] **Teaching Tip:** Spend the most time on `any` vs `unknown` — this is where students make the most mistakes. Emphasize: "Always prefer `unknown` over `any`." For generics, keep it simple — show one clear example, don't go deep into advanced patterns.

> [ASK] **Ask the class:** "What's the difference between `type` and `interface`?" (Answer: Both describe object shapes, but `interface` is extendable and `type` is more flexible. Use `interface` for objects, `type` for everything else.)

> [ENGAGE] **Gen-Z:** "`any` is like saying 'IDK, just let it through' — it disables all safety. `unknown` is like saying 'I don't know yet, but check before using.' Always use `unknown` — it's the responsible choice."  
> **-> Phone moment:** "Open VS Code. Create a new .ts file. Type `let x: string = 42`. See the red underline? That's TypeScript catching a bug before you run it."

> [Q&A] **Student Q:** "Why not just use `any` everywhere? It's easier."
> **Short answer:** Because it defeats the entire purpose of TypeScript.
> **Real answer:** `any` means "don't check this type." If you use `any` everywhere, you're just writing JavaScript with extra steps. The value of TypeScript is catching type errors — `any` bypasses that.
> **The hidden question:** "Is TypeScript worth the extra effort?" -> Yes. The time you save debugging type errors far exceeds the time spent writing types.

> [Q&A] **Student Q:** "What are generics? They look confusing."
> **Short answer:** Generics are type variables — placeholders for types.
> **Real answer:** `<T>` means "this type will be determined when you use it." Like a function parameter, but for types. `ApiResponse<User>` means "an API response where the data is a User." `ApiResponse<string[]>` means "an API response where the data is an array of strings."
> **The hidden question:** "Do I need to understand this now?" -> Just the basics. You'll use generics more as you build larger apps.

> [LOST] **If they're lost:** "The simplest TypeScript summary: (1) `interface` describes object shapes. (2) `type` describes everything else. (3) `const` > `let` > `var`. (4) `unknown` > `any`. (5) Types disappear at runtime."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min show untyped JS -> 20 min progressive typing -> 5 min generics demo)

> [SPEAK] **Script:** "Let's take a JavaScript function and progressively add TypeScript types. Watch how each step catches more errors."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: untyped JS. Step 2: basic types. Step 3: optional properties. Step 4: union types. Step 5: generics.

> [TIP] **Teaching Tip:** **Type each step live.** Start with the untyped JS version, run it with bad input to show it accepts anything. Then add types step by step, showing how TypeScript catches errors at each stage.

> [BOARD] **Whiteboard:** Draw the progressive typing flow:
> ```
> JS: function createUser(name, email, age) -> accepts anything
> + types: (name: string, email: string, age: number) -> catches wrong types
> + optional: age?: number -> allows calling without age
> + union: role: "admin" | "user" -> restricts to valid values
> + generics: ApiResponse<T> -> reusable for any data type
> ```

> [ENGAGE] **Gen-Z:** "Progressive typing is like leveling up in a game. Level 1: basic types. Level 2: optional properties. Level 3: union types. Level 4: generics. Each level catches more bugs."  
> **-> Type-along:** "Type the untyped version first. Then add types with me, step by step. Run `npx tsc` after each step to see what errors TypeScript catches."

> [Q&A] **Student Q:** "Why does `createUser(42, true, 'Alice')` give an error about 'number' not assignable to 'string'?"
> **Short answer:** Because the first parameter is typed as `string`, but you passed `42` (a number).
> **Real answer:** TypeScript checks each argument against its declared type. `name: string` means the first argument must be a string. `42` is a number. TypeScript catches this mismatch before you run the code.
> **The hidden question:** "Can I disable this check?" -> Yes, with `any` or `as any`. But don't.

> [LOST] **If they're lost:** "Start with just the interface and basic types. Get that working. Then add optional properties. Then union types. Then generics. One step at a time."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "Slack's desktop app is built with TypeScript. When they migrated from JavaScript, they found 38% more bugs during development and reduced production errors by 15%. VS Code? Written in TypeScript. Every new React project defaults to TypeScript."

> [SLIDE] **Slide:** Stats: "38% more bugs caught during development. 15% fewer production errors." Logos: Slack, VS Code, Airbnb, Google.

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that TypeScript isn't optional in 2026 — it's the industry standard.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have seen 'TypeScript' in a job posting?" (Show a real JobStreet or LinkedIn screenshot if hands are low.)

> [LOST] **If they're lost:** "You don't need to love TypeScript today. Just understand: it's the industry standard. Learning it now gives you an edge."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Convert this JavaScript product project to TypeScript. Create interfaces, type all functions, add union types, handle undefined returns, and set up strict mode."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Create `Product` interface
> - [ ] Type all function parameters and return types
> - [ ] Use union type for `category`
> - [ ] Handle `getProductById` returning `undefined`
> - [ ] Create generic `ApiResponse<T>` wrapper
> - [ ] Set up `tsconfig.json` with strict mode
> - [ ] Fix all strict mode errors

> [TIP] **Teaching Tip:** The `undefined` handling (requirement 4) and strict mode setup (requirement 6) are the hardest parts. Students will struggle with `Product | undefined` return types. Circulate and help.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the data types, the other handles the function types. Then combine. It's like a collab — each person owns their part."

> [LOST] **If they're lost:** "Start with the `Product` interface. Then type one function. Then another. Don't try to type everything at once."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, paste JavaScript code into AI and ask it to add TypeScript types. Then review every type it suggests. Ask yourself: 'Would `unknown` be safer here?' Never let AI define your domain types without reviewing them."

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Add TypeScript types to this JS code" | "Define my domain types for me" |
> | "Why did you use `any` here?" | "Fix all my TypeScript errors" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: overusing `any`, generating overly complex generics, forgetting `undefined` returns. Teach students to question AI's type choices.

> [ENGAGE] **Gen-Z:** "AI is great at adding types but sometimes lazy — it'll use `any` to silence errors. Always review its suggestions."

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the TypeScript errors you'll see this week. Each one is TypeScript catching a potential bug for free."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "Property 'X' does not exist on      |
> | type 'Y'"                            |
> | You're accessing a property TS doesn't|
> | know about. Add it to the interface. |
> +--------------------------------------+
> +--------------------------------------+
> | "Type 'undefined' is not assignable  |
> | to type 'X'"                         |
> | A function might return undefined.   |
> | Common with .find() and optional props|
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "TypeScript errors are like your phone warning you before you send a risky text. It's not stopping you — it's giving you a chance to fix it first."

> [Q&A] **Student Q:** "TypeScript types don't exist at runtime? So they don't actually protect me?"
> **Short answer:** They protect you at development time, not runtime.
> **Real answer:** TypeScript catches type errors BEFORE you run the code. At runtime, the types are gone — it's just JavaScript. If the API returns wrong data at runtime, TypeScript won't catch it. For runtime validation, use a library like Zod.
> **The hidden question:** "So TypeScript isn't a silver bullet?" -> Correct. It catches development-time type errors, not runtime data issues.

> [LOST] **If they're lost:** "The #1 TypeScript issue: 'Property does not exist on type.' Fix: add the property to your interface. That solves 80% of TypeScript errors."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The progressive typing approach is key — start with untyped JS and add types step by step.

---

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

## Week 5: Component Thinking in Vanilla JS

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Component Diagram |
| Code Walkthrough | 30 min | Live Code (Button -> Counter -> Card) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 5 strategy):** This is the bridge week — students move from "JS that manipulates DOM" to "JS that thinks in components." The vanilla JS approach is intentional: if they don't understand what React abstracts, they'll write bad React. Build the Button live, then the Counter, then Card. Emphasize: props = function arguments, state = closure variables, re-render = update existing DOM.

---

### 1. The Hook

> [SPEAK] **Script:** "Every UI you interact with is made of components. The button you click to like a post? Component. The card showing that post? Component. The modal that pops up when you click 'share'? Component. Instagram's entire interface is just components nested inside components inside components. You've been using component-based UI your whole life — now you're going to build one from scratch without React, so you actually understand what React is doing under the hood."

> [SLIDE] **Slide:** Title: "You've Been Using Components Your Whole Life"  
> Screenshot of Instagram UI with colored boxes drawn around each component: Story circle, Post card, Like button, Comment section, Bottom nav. Label each one.

> [TIP] **Teaching Tip:** Make it visual. Show a real app and literally draw boxes around components. Students need to SEE that components are everywhere before they build one.

> [ENGAGE] **Gen-Z:** "Components are like your Shopee cart — each item is its own thing with its own price, quantity, and remove button. The cart just holds them together. That's composition."  
> **-> Phone moment:** "Open any app right now. Point out 3 components you can see. The header is one. The feed card is another. The bottom nav is a third. That's component thinking."

> [LOST] **If they're lost:** "A component is just a function that returns a piece of UI. That's it. You already know functions. Now we're making them return DOM elements instead of numbers or strings."

---

### 2. The Analogy

> [SPEAK] **Script:** "Think of components like LEGO bricks. Each brick is self-contained — it has its own shape, color, and way of connecting to other bricks. A 2x4 red brick doesn't care what it's connected to. You can snap it onto a baseplate, another brick, or a specialized piece. The brick's 'props' are its color and size (set from outside). Its 'state' is whether it's connected or not (changes over time). You compose complex structures by combining simple bricks — you don't carve a castle out of a single block of plastic."

> [BOARD] **Whiteboard:** Draw the LEGO comparison:
> ```
> PROPS (from outside):    STATE (inside):
> +-------------+          +-------------+
> |  color: red |          |  connected  |
> |  size: 2x4  |          |  position   |
> |  shape: std |          |  rotation   |
> +-------------+          +-------------+
> 
> COMPOSITION:
> [Castle] = [Wall] + [Tower] + [Gate]
> [Wall]   = [Brick] + [Brick] + [Brick]
> ```

> [TIP] **Teaching Tip:** The LEGO analogy is perfect because it maps directly: props = brick properties you choose before building, state = what happens during play, composition = snapping bricks together.

> [ENGAGE] **Gen-Z:** "Props are like your Grab order — you choose the restaurant, the food, the address from outside. State is like your order status — it changes from 'preparing' to 'on the way' to 'delivered' while you wait."  
> **-> Turn to your neighbor:** "In the LEGO analogy, what's the difference between props and state? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget LEGO. Props = arguments passed to a function. State = variables inside a function that change. That's the whole thing."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min encapsulation -> 5 min props -> 5 min state -> 4 min composition -> 3 min lifecycle -> 3 min re-rendering)

> [SPEAK] **Script:** "Before components, you wrote UI as one giant HTML file with scattered JavaScript. Change one thing, break three others. Components solve this by encapsulating HTML, CSS, and JavaScript into reusable, isolated units. Let me show you the core concepts."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a visual diagram, (3) why it matters. Don't show all concepts at once — cognitive overload.

> [TIP] **Teaching Tip:** Spend the most time on props vs state — this is the foundation for React. Students will confuse these constantly. Emphasize: props come from outside (read-only), state lives inside (changeable).

> [ASK] **Ask the class:** "If a Button component needs to know its label and color, are those props or state?" (Props — they're set from outside.) "If a Counter needs to track its current number, is that props or state?" (State — it changes inside the component.)

> [ENGAGE] **Gen-Z:** "Encapsulation is like your GCash PIN — nobody outside can see it or change it. The component keeps its own secrets."  
> **-> Phone moment:** "Think of a TikTok video card. The video URL, username, likes count — those are props passed in. Whether it's playing or paused — that's state."

> [Q&A] **Student Q:** "Why can't a component change its own props?"
> **Short answer:** Because props belong to the parent, not the component.
> **Real answer:** If a component could change its own props, you'd have data flowing in multiple directions and no way to track where changes came from. One-way data flow (parent -> child via props) makes debugging predictable.
> **The hidden question:** "What if the component needs to change the data?" -> It asks the parent to change it via a callback function.

> [Q&A] **Student Q:** "What's the difference between re-rendering and creating new DOM elements?"
> **Short answer:** Re-rendering updates existing elements. Creating new ones destroys and rebuilds.
> **Real answer:** When you call `textContent = newValue`, you're updating an existing element — that's re-rendering. When you call `innerHTML = ''` and rebuild, you're destroying everything and starting over — you lose event listeners, focus, scroll position.
> **The hidden question:** "Why does it matter?" -> Performance and UX. Updating in place is faster and preserves user interactions.

> [LOST] **If they're lost:** "The simplest summary: (1) Props = inputs from outside. (2) State = data inside that changes. (3) Composition = components using components. (4) Re-render = update existing DOM, don't rebuild."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min Button -> 15 min Counter -> 10 min Card composition)

> [SPEAK] **Script:** "Let's build three components step by step. First a Button — the simplest component. Then a Counter — to show state. Then a Card — to show composition. Each builds on the last."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: Button (props only). Step 2: Counter (props + state + re-render). Step 3: Card (composition — uses Button internally).

> [TIP] **Teaching Tip:** **Type each component live, don't paste.** For the Counter, emphasize the closure pattern: `let count` is the state, `render()` updates the DOM, event handlers update state then call `render()`. This is exactly how React's `useState` works under the hood.

> [BOARD] **Whiteboard:** Draw the Counter's data flow:
> ```
> Counter({ initialCount: 5 })
>   v
> let count = 5  <- STATE (closure variable)
>   v
> render() -> display.textContent = count  <- UPDATE DOM
>   v
> click "+" -> count++ -> render()  <- STATE CHANGE -> RE-RENDER
> ```

> [ENGAGE] **Gen-Z:** "Building components is like assembling a Gundam kit. Step 1: build one piece (Button). Step 2: add moving parts (Counter with state). Step 3: snap pieces together (Card uses Button). Each step builds on the last."  
> **-> Type-along:** "Type the Button first. Test it. Then type the Counter. Test it. Then type the Card. Don't skip testing — each component should work independently."

> [Q&A] **Student Q:** "Why do we create DOM elements once and only update textContent in render()?"
> **Short answer:** Because creating new elements destroys event listeners.
> **Real answer:** If you called `createElement` inside `render()`, every state change would create brand new elements. The old event listeners would be attached to the old elements — they'd stop working. By creating elements once and only updating `textContent`, the listeners stay attached.
> **The hidden question:** "Isn't that what React's Virtual DOM does?" -> Yes! React does this automatically. You're learning the manual version first.

> [LOST] **If they're lost:** "Start with just the Button. Get it working. Then add the Counter — copy the Button pattern but add a `count` variable and a `render()` function. One step at a time."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "Before React existed, Facebook's newsfeed was built with manually managed DOM updates. Every time a new post arrived, they had to figure out which DOM nodes to create, update, or remove. It was a maintenance nightmare. React's component model solved this by letting developers describe *what* the UI should look like for a given state, and React figures out *how* to update the DOM. The vanilla JS components you're building this week are exactly what every company was doing before 2013."

> [SLIDE] **Slide:** Timeline: "Pre-2013: Manual DOM manipulation (jQuery spaghetti)" -> "2013: React introduces component model" -> "2026: Every framework uses components."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that component thinking isn't a React invention — it's the solution to a real problem that every company faced.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have used jQuery?" (Some hands.) "jQuery is like the flip phone of DOM manipulation. It works, but components are the smartphone upgrade."

> [LOST] **If they're lost:** "You don't need to know Facebook's history. Just understand: components solve the problem of 'how do I keep my UI organized when it gets complex?'"

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Build a vanilla JS component library with three components: Button, Card, and Modal. Each takes props, manages its own state, and returns a DOM element."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Button: `label`, `variant`, `onClick`, `disabled`
> - [ ] Card: `title`, `content`, `image` (optional), `actions` (array of Button configs)
> - [ ] Modal: `isOpen`, `title`, `content`, `onClose` — show/hide on `isOpen` change
> - [ ] Each component is a function returning a DOM element
> - [ ] Each component handles its own re-rendering
> - [ ] Demo page: Card with Buttons, Modal opens on Button click

> [TIP] **Teaching Tip:** The Modal (requirement 3) is the hardest part — students need to handle show/hide state and the overlay. Circulate and help with the overlay CSS and the `isOpen` toggle pattern.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person builds Button + Card, the other builds Modal. Then combine them into a demo page. It's like a collab — each person owns their component."

> [LOST] **If they're lost:** "Start with Button. Get it working with variants. Then Card — it's just a div with children. Then Modal — use `display: none` / `display: flex` for show/hide. Build incrementally."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate a vanilla JS component, then trace through its DOM manipulation. Ask 'What happens to the old DOM element when state changes?' If the answer involves `innerHTML`, that's a red flag."

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate a Button component in vanilla JS" | "Design my component API" |
> | "What happens when state changes?" | "Write my entire component library" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: `innerHTML` for re-rendering (XSS risk + destroys listeners), re-rendering entire DOM tree, leaking state between instances. Teach students to audit AI's DOM approach.

> [ENGAGE] **Gen-Z:** "AI is like that classmate who copies fast but doesn't understand. It'll give you working code, but you need to verify it doesn't use `innerHTML` or leak state."

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the errors and mental model traps you'll hit this week. The event listener double-fire alone will save you hours of debugging."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "Event listener fires multiple times"|
> | Adding listeners in render() instead |
> | of during element creation           |
> | Fix: add listeners once, outside render|
> +--------------------------------------+
> +--------------------------------------+
> | "innerHTML XSS vulnerability"        |
> | User input executed as HTML          |
> | Fix: use textContent for user data   |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The double-fire listener is like pressing the GCash send button twice because the app didn't respond fast enough — now you sent money twice. Add the listener once, not every render."

> [Q&A] **Student Q:** "Why does `container.innerHTML = ''` break my event listeners?"
> **Short answer:** Because it destroys all child elements and creates new ones.
> **Real answer:** `innerHTML = ''` removes every child DOM node from memory. New elements created after that are brand new — they have no event listeners attached. The old listeners were attached to the old elements, which no longer exist.
> **The hidden question:** "So how do I clear content?" -> Update individual properties (`textContent`, `className`) instead of replacing everything.

> [LOST] **If they're lost:** "The #1 issue: event listeners firing multiple times. If your counter jumps by 2 instead of 1, you're adding listeners in `render()`. Move them to element creation, outside `render()`."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: Button (props) -> Counter (state + re-render) -> Card (composition). Students must understand that React's `useState` and JSX are abstractions over the closure + DOM patterns they're building manually. The `innerHTML` danger and event listener double-fire are the two most common bugs to watch for.

---

## Week 6: React Fundamentals

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + JSX Comparison |
| Code Walkthrough | 30 min | Live Code (Counter -> Button -> Card) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 6 strategy):** This is the "aha" week — students finally see why React exists. Side-by-side comparison with Week 5's vanilla Counter is essential. Show the vanilla version first, then the React version. The contrast makes the value obvious. Emphasize: JSX is just `createElement`, `useState` is the closure pattern automated, re-render is automatic.

---

### 1. The Hook

> [SPEAK] **Script:** "Remember building that Counter component in vanilla JS last week? You had to manually create DOM elements, attach event listeners, and write a render function that updated the display. In React, that same Counter is 8 lines of code. React isn't just less code — it's a completely different way of thinking about UI. Instead of telling the browser *how* to update the DOM, you tell React *what* the UI should look like for any given state, and React figures out the rest."

> [SLIDE] **Slide:** Side-by-side: Week 5 vanilla Counter (~40 lines) on left, React Counter (8 lines) on right. Highlight the reduction.

> [TIP] **Teaching Tip:** The side-by-side comparison is your strongest teaching tool this week. Let students sit with the visual contrast for a moment before explaining anything.

> [ENGAGE] **Gen-Z:** "Vanilla JS is like manually editing every frame of an animation. React is like telling Canva 'make it smooth' and it handles the tweening. Same result, 10x less effort."  
> **-> Phone moment:** "Open the Instagram app. Tap the like button on a post. That heart animation? In vanilla JS that's 20+ lines. In React it's one `useState` call."

> [LOST] **If they're lost:** "React is just a library that does the DOM manipulation for you. You describe what you want, React makes it happen. That's the whole idea."

---

### 2. The Analogy

> [SPEAK] **Script:** "Vanilla JS is like giving a chef step-by-step instructions: 'Pick up the knife, cut the onion into 5mm pieces, heat the pan to 180C, add oil, wait 30 seconds...' React is like telling the chef 'I want a stir-fry' and trusting them to handle the details. You describe the desired outcome (the UI for a given state), and React handles the DOM manipulation. You don't care *how* React updates the DOM — you just care that it does."

> [BOARD] **Whiteboard:** Draw the declarative vs imperative comparison:
> ```
> IMPERATIVE (Vanilla JS):
> 1. createElement('button')
> 2. button.textContent = '+'
> 3. button.addEventListener('click', fn)
> 4. container.appendChild(button)
> 5. count++
> 6. display.textContent = count
> 
> DECLARATIVE (React):
> <button onClick={() => setCount(c+1)}>+</button>
> <span>{count}</span>
> ```

> [TIP] **Teaching Tip:** The chef analogy works because everyone understands the difference between micromanaging and delegating. Emphasize: declarative = describe the outcome, imperative = describe the steps.

> [ENGAGE] **Gen-Z:** "Imperative is like giving your Grab driver turn-by-turn directions. Declarative is like entering the destination in the app and letting Waze figure out the route."  
> **-> Turn to your neighbor:** "Give an imperative vs declarative example from real life. 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the analogy. Imperative = tell the computer every step. Declarative = tell the computer what you want. React is declarative."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min JSX -> 5 min functional components -> 5 min useState -> 3 min props drilling -> 3 min one-way data flow -> 4 min reconciliation)

> [SPEAK] **Script:** "Manual DOM manipulation is tedious, error-prone, and hard to reason about. When your app has 20 interactive elements, tracking which DOM nodes need updating when state changes becomes impossible. React solves this with a declarative model: you describe the UI as a function of state, and React handles the DOM updates efficiently."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a code example, (3) what problem it solves. Don't show all concepts at once.

> [TIP] **Teaching Tip:** Spend the most time on `useState` — this is the biggest mental shift from Week 5. Students need to understand: calling `setCount` doesn't change the variable immediately, it schedules a re-render. Also emphasize: JSX is NOT HTML — it's JavaScript that looks like HTML.

> [ASK] **Ask the class:** "In the vanilla Counter, what happened when you clicked '+'?" (count++, then render().) "In React, what happens when you click '+'?" (setCount() is called, React re-renders the component automatically.) "See the difference? You don't call render — React does it for you."

> [ENGAGE] **Gen-Z:** "JSX is like a template — it looks like HTML but it's actually JavaScript. `className` instead of `class` because `class` is a reserved word. Curly braces `{}` to embed JavaScript expressions."  
> **-> Phone moment:** "Open VS Code. Create a new React file. Type `<div>Hello</div>`. See how it's colored differently? That's JSX — your editor knows it's not regular HTML."

> [Q&A] **Student Q:** "Why can't I use `class` in JSX? HTML uses `class`."
> **Short answer:** Because `class` is a reserved word in JavaScript.
> **Real answer:** JSX is JavaScript, not HTML. In JavaScript, `class` is used for class declarations. So React uses `className` instead. Same for `for` -> `htmlFor`, `onclick` -> `onClick` (camelCase).
> **The hidden question:** "That's annoying." -> It is, but you'll get used to it. Your editor's autocomplete will help.

> [Q&A] **Student Q:** "What's props drilling and why is it bad?"
> **Short answer:** Passing data through too many levels of components.
> **Real answer:** If `App` has user data and `Button` (5 levels deep) needs it, every component in between must pass it down even if they don't use it. It's like passing a note through 5 people — the middle people are just carriers. We'll fix this later with Context.
> **The hidden question:** "Is it actually a problem?" -> For small apps, no. For large apps, yes. Don't worry about it yet.

> [LOST] **If they're lost:** "The simplest React summary: (1) JSX = HTML-like syntax in JS. (2) Components = functions returning JSX. (3) `useState` = state that triggers re-render. (4) Props = data from parent. (5) One-way flow = parent to child."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (10 min Counter conversion -> 10 min Button with props -> 10 min Card composition)

> [SPEAK] **Script:** "Let's convert the vanilla JS Counter from Week 5 into React. Watch how each manual step disappears. Then we'll build a Button with props and a Card that uses Button — just like last week, but in React."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: Counter (compare with vanilla). Step 2: Button (props + variants). Step 3: Card (composition with spread props).

> [TIP] **Teaching Tip:** **Type the Counter live and compare with Week 5's version side by side.** Point out each elimination: no `createElement`, no `addEventListener`, no manual `render()`. This is the most powerful moment of the week.

> [BOARD] **Whiteboard:** Draw the React data flow:
> ```
> Parent: <Counter />
>   v
> Counter() -> useState(0) -> count = 0
>   v
> JSX: <button onClick={() => setCount(count+1)}>+</button>
>   v
> Click -> setCount(1) -> React re-renders Counter()
>   v
> Counter() -> count = 1 -> new JSX -> React updates only changed DOM
> ```

> [ENGAGE] **Gen-Z:** "Converting vanilla to React is like upgrading from a manual car to automatic. Same destination, but you don't need to think about the gears (DOM manipulation)."  
> **-> Type-along:** "Type the Counter with me. Notice what you DON'T have to type: no createElement, no addEventListener, no render function. React handles all of that."

> [Q&A] **Student Q:** "Why does `{actions.map((action, index) => (<Button key={index} {...action} />))}` work?"
> **Short answer:** `.map()` returns an array of JSX elements, and React renders arrays.
> **Real answer:** `actions.map()` transforms each action object into a `<Button>` element. The `{...action}` spread passes each property as a prop. So `{ label: "Save", onClick: fn }` becomes `<Button label="Save" onClick={fn} />`. The `key` helps React track which items changed.
> **The hidden question:** "Why do I need a key?" -> Without it, React can't efficiently update the list when items are added, removed, or reordered.

> [LOST] **If they're lost:** "Start with just the Counter. Get `useState` working. Then add the Button — it's just a function returning JSX. Then Card — it's JSX with `{actions.map(...)}`. One component at a time."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "React powers the Facebook newsfeed, Instagram web, Netflix UI, Airbnb, Uber Eats, and thousands of other products. The `useState` hook you're learning this week is the same hook used in every React component at every company that uses React. When you see a like button increment on Instagram, that's `useState` (or `useReducer`) updating a counter. The component model you're learning is the industry standard for frontend development."

> [SLIDE] **Slide:** Logos: Facebook, Instagram, Netflix, Airbnb, Uber Eats. Stat: "React is used by 40%+ of professional frontend developers worldwide."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that React isn't academic — it's the most popular frontend library in the world.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have seen 'React' in a job posting on JobStreet or LinkedIn?" (Most hands.) "That's because it's the #1 frontend skill employers want."

> [LOST] **If they're lost:** "You don't need to know every company using React. Just understand: learning React makes you employable. Period."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Convert your Week 5 vanilla JS component library to React. Same three components — Button, Card, Modal — but now with JSX, useState, and TypeScript props interfaces."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Set up Vite + React + TypeScript project
> - [ ] Convert Button to React with TypeScript props interface
> - [ ] Convert Card to React, using React Button internally
> - [ ] Convert Modal to React — use `useState` for `isOpen`
> - [ ] Demo page: all three components working together
> - [ ] TypeScript interfaces for all props
> - [ ] Modal opens when Button inside Card is clicked (state lifting)

> [TIP] **Teaching Tip:** State lifting (requirement 7) is the hardest part. Students need to move `isOpen` state from Modal to the parent component and pass it down as props + a callback. Circulate and help with this pattern specifically.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles Button + Card, the other handles Modal + state lifting. Then combine. It's like a collab — each person owns their component."

> [LOST] **If they're lost:** "Start with the project setup (`npm create vite@latest`). Then convert Button — it's the simplest. Then Card. Then Modal. Save state lifting for last."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to convert a vanilla JS component to React. Then compare its approach with yours. Ask 'Why did you use useState here instead of passing it as a prop?'"

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Convert this vanilla JS component to React" | "Write my component hierarchy" |
> | "Why useState here vs prop?" | "Design my state management" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: class components (outdated), too much state in one component, missing TypeScript types, suggesting `useEffect` for derived state. Teach students to question AI's architecture choices.

> [ENGAGE] **Gen-Z:** "AI is like a senior dev who sometimes gives outdated advice. It might suggest class components from 2018. Always check: is this the modern hooks pattern?"

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the React errors and mental model traps you'll hit this week. The undefined `.map()` error alone will save you hours of Googling."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "Cannot read properties of undefined |
> | (reading 'map')"                     |
> | Data hasn't loaded yet               |
> | Fix: optional chaining or default [] |
> +--------------------------------------+
> +--------------------------------------+
> | "React Hook 'useState' is called     |
> | conditionally"                       |
> | Hook inside if/loop/nested function  |
> | Fix: move hook to top of component   |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The undefined `.map()` error is like trying to count items in your Shopee cart before it loads. You need to check if the cart exists first: `items?.map(...)`."

> [Q&A] **Student Q:** "Why does `setCount(count + 1); console.log(count);` still log the old value?"
> **Short answer:** Because state updates are batched — they don't happen immediately.
> **Real answer:** React batches state updates for performance. When you call `setCount`, React schedules a re-render but doesn't update `count` right away. The `console.log` runs before the re-render, so it sees the old value. If you need the new value, use `useEffect` or the functional update pattern: `setCount(c => c + 1)`.
> **The hidden question:** "So state isn't actually synchronous?" -> No. It's scheduled. The new value appears on the next render.

> [LOST] **If they're lost:** "The #1 issue: calling `.map()` on undefined data. Always add a loading check: `if (!items) return <p>Loading...</p>` or use optional chaining `items?.map(...)`."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core teaching move is the side-by-side comparison: Week 5 vanilla Counter vs Week 6 React Counter. Students should viscerally feel the reduction in boilerplate. Key pitfalls: undefined `.map()`, conditional hooks, and the async nature of state updates. State lifting in the exercise is the hardest concept — plan extra time for it.

---

## Week 7: Effects & Data Fetching

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Dependency Array Diagram |
| Code Walkthrough | 30 min | Live Code (basic -> loading/error -> AbortController -> custom hook) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 7 strategy):** This is the hardest week so far. `useEffect` is the most misunderstood React hook. The dependency array is where 80% of bugs come from. Build progressively: basic effect -> loading/error -> AbortController -> custom hook. Draw the dependency array logic on the whiteboard every time. Use the security guard analogy repeatedly.

---

### 1. The Hook

> [SPEAK] **Script:** "You know how your TikTok feed refreshes when you pull down? Or how your Discord server list updates when someone creates a new channel? That's `useEffect` working behind the scenes — fetching data when the component loads, cleaning up when you navigate away, and re-fetching when something changes. It's the bridge between your React component and the outside world (APIs, timers, subscriptions). Get it wrong, and your app makes infinite API calls. Get it right, and your app feels alive."

> [SLIDE] **Slide:** Title: "The Hook That Connects Your App to the World"  
> Diagram: React Component <-> useEffect <-> API / Timer / DOM / Subscription. Show the bidirectional flow.

> [TIP] **Teaching Tip:** Make the stakes clear: "Get it wrong = infinite API calls = your app crashes." Students need to understand that useEffect is powerful but dangerous.

> [ENGAGE] **Gen-Z:** "useEffect is like your phone's background app refresh. It runs when needed — when you open the app, when data changes, when you close it. Without it, your apps would be static and dead."  
> **-> Phone moment:** "Open TikTok. Pull down to refresh. Watch new videos appear. That's useEffect fetching new data when you trigger the action."

> [LOST] **If they're lost:** "useEffect just means 'run this code when something happens.' When the component loads, when data changes, when it unmounts. That's it."

---

### 2. The Analogy

> [SPEAK] **Script:** "`useEffect` is like a security guard at a building. The guard has three jobs: (1) When someone enters (component mounts), check their ID and let them in. (2) When something changes (dependency updates), re-check their ID. (3) When someone leaves (component unmounts), make sure they return their badge. The dependency array is the guard's instruction manual: 'Re-check ID when X changes.' An empty array means 'Only check on entry.' No array means 'Check on every single change' — which is usually a mistake."

> [BOARD] **Whiteboard:** Draw the security guard comparison:
> ```
> useEffect(() => {
>   // ENTRY: component mounts
>   checkID();
>   
>   return () => {
>     // EXIT: component unmounts
>     returnBadge();
>   };
> }, [dependency]);
>    ^
>    GUARD'S INSTRUCTIONS:
>    []     = only check on entry
>    [dep]  = re-check when dep changes
>    (none) = check EVERY render (BAD!)
> ```

> [TIP] **Teaching Tip:** The security guard analogy is perfect because it maps to all three phases: mount, update, unmount. Draw it on the whiteboard and reference it throughout the session.

> [ENGAGE] **Gen-Z:** "The dependency array is like your GCash notification settings. `[]` = notify me once (on signup). `[userId]` = notify me when my user ID changes. No array = notify me on EVERY single action (annoying, right?)."  
> **-> Turn to your neighbor:** "In the security guard analogy, what happens if there's NO dependency array? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the guard. `[]` = run once. `[x]` = run when x changes. Nothing = run every time (usually a bug). That's the whole dependency array."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min dependency array -> 5 min cleanup -> 4 min loading/error -> 4 min custom hooks -> 4 min race conditions -> 3 min useEffect timing)

> [SPEAK] **Script:** "React components are pure functions of state — they take props and state and return UI. But real apps need to do *side effects*: fetch data, subscribe to events, set timers, manipulate the DOM directly. `useEffect` is React's way of saying 'run this code outside the normal render cycle.'"

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a code example, (3) what happens if you get it wrong. Don't show all concepts at once.

> [TIP] **Teaching Tip:** Spend the most time on the dependency array — this is where most bugs happen. Show the three patterns clearly: `[]` (mount only), `[dep]` (on change), none (every render = bug). Draw a decision tree on the whiteboard.

> [ASK] **Ask the class:** "If I want to fetch data when the component first loads, what's my dependency array?" (`[]`) "If I want to re-fetch when the user ID changes?" (`[userId]`) "If I want to set up a timer that runs every second?" (trick question — use `setInterval` with functional updates, not useEffect with no deps)

> [ENGAGE] **Gen-Z:** "The dependency array is like your TikTok For You algorithm. `[]` = show me the same feed forever. `[interests]` = update when my interests change. No array = refresh on every single scroll (chaos)."  
> **-> Phone moment:** "Open your browser console. We'll trace through a useEffect step by step. Watch when it runs and when it doesn't."

> [Q&A] **Student Q:** "Why does useEffect run AFTER render? Why not before?"
> **Short answer:** Because the component needs to be on screen first.
> **Real answer:** useEffect runs after the browser has painted the screen. This prevents blocking the UI. If useEffect ran before render, it could delay showing anything to the user. The render happens first (so the user sees something), then the effect runs (to fetch data, set up subscriptions, etc.).
> **The hidden question:** "Can I block rendering with useEffect?" -> No. Use `useSyncExternalStore` or Suspense for that.

> [Q&A] **Student Q:** "What's a race condition and why should I care?"
> **Short answer:** When two async operations compete and the wrong one wins.
> **Real answer:** Imagine fetching user A's profile, then quickly clicking user B. User A's response might arrive AFTER user B's. Without cleanup, you'd see user A's data on user B's profile. AbortController cancels the stale request so only the latest one matters.
> **The hidden question:** "Does this actually happen?" -> Yes, every time a user clicks fast. It's one of the most common production bugs.

> [LOST] **If they're lost:** "The simplest useEffect summary: (1) `[]` = run once on mount. (2) `[dep]` = run when dep changes. (3) Return a cleanup function. (4) Always handle loading + error states. That's 90% of what you need."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min basic -> 8 min loading/error -> 10 min AbortController -> 7 min custom hook)

> [SPEAK] **Script:** "Let's build a data-fetching component step by step. We'll start with the simplest effect, add loading and error states, then add cleanup with AbortController, and finally extract it into a reusable custom hook."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: basic effect (fetch on mount). Step 2: loading/error states. Step 3: AbortController cleanup. Step 4: custom `useFetch` hook.

> [TIP] **Teaching Tip:** **Type each step live.** Emphasize the progression: each step adds one thing. The AbortController step is the most important — it's what separates amateur from professional code. Show the "memory leak" warning that appears without cleanup.

> [BOARD] **Whiteboard:** Draw the effect lifecycle:
> ```
> MOUNT: useEffect runs -> fetch starts -> loading = true
> FETCH: response arrives -> data set -> loading = false -> re-render
> UPDATE: userId changes -> cleanup (abort old) -> new fetch starts
> UNMOUNT: cleanup (abort) -> component removed
> ```

> [ENGAGE] **Gen-Z:** "Building a useFetch hook is like creating your own GCash API wrapper. You handle the request, the loading spinner, the error message, and the cleanup — all in one reusable package."  
> **-> Type-along:** "Type the basic version first. Test it. Then add loading/error. Then AbortController. Then extract to useFetch. Each step should work before moving to the next."

> [Q&A] **Student Q:** "Why do we need AbortController? Can't we just ignore the old response?"
> **Short answer:** No — the old response will still try to set state on an unmounted component.
> **Real answer:** Without AbortController, the old fetch still completes and tries to call `setUser()` or `setLoading()`. If the component has unmounted (user navigated away), React warns about "state update on unmounted component." AbortController actually cancels the network request, saving bandwidth and preventing the warning.
> **The hidden question:** "Does aborting cancel the server request?" -> Yes, the browser sends a cancel signal. The server may still process it, but the browser won't wait for the response.

> [LOST] **If they're lost:** "Start with just the basic effect — fetch on mount with `[]`. Get that working. Then add loading state. Then error. Then AbortController. Then extract to useFetch. One layer at a time."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "Every data-fetching component at every company follows this exact pattern: loading state, error state, success state, cleanup on unmount. The `useFetch` custom hook you just built is the same pattern used in production libraries like `react-query` and `SWR`. The AbortController cleanup is what prevents the 'memory leak' warnings you see in React dev tools. TikTok's web app uses this exact pattern for every feed request."

> [SLIDE] **Slide:** Show the pattern as a universal template: `useFetch` -> `{ data, loading, error }` -> three UI states. Logos: react-query, SWR, Apollo Client.

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that the custom hook they built is the same pattern used by professional libraries — they've just built a mini react-query.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you think you just built something that companies pay for?" (Hands.) "react-query is literally a more robust version of the useFetch hook you just wrote."

> [LOST] **If they're lost:** "You don't need to know react-query today. Just understand: the pattern you learned is the industry standard for data fetching."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Build a data-fetching dashboard using your useFetch custom hook. Fetch posts and users from JSONPlaceholder in parallel, show loading/error states, add a refresh button, and a search filter."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Create `useFetch` custom hook
> - [ ] Fetch posts from `/posts` and users from `/users`
> - [ ] Both fetch in parallel on mount
> - [ ] Loading spinners while data loads
> - [ ] Error messages if fetch fails (test with bad URL)
> - [ ] "Refresh" button that re-fetches
> - [ ] Search/filter input for posts by title (client-side)
> - [ ] Post detail page with URL params

> [TIP] **Teaching Tip:** The search filter (requirement 6) and post detail page (requirement 7) are stretch goals. The core is the useFetch hook + dashboard. Students who finish early can tackle the extras.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person builds the useFetch hook, the other builds the dashboard UI. Then combine and add the search filter together."

> [LOST] **If they're lost:** "Start with useFetch. Get it working with one endpoint. Then add the second. Then loading/error UI. Then refresh. Then search. One feature at a time."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate a useFetch hook, then audit its dependency array and cleanup function. Ask 'What happens if the URL changes rapidly?' and 'Does this handle race conditions?'"

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate a useFetch hook" | "Write my dependency array" |
> | "Does this handle race conditions?" | "Fix my infinite re-render loop" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: missing cleanup (no AbortController), fetch inside component body (not in useEffect), wrong dependency array, missing loading reset. Teach students to audit AI's effect logic.

> [ENGAGE] **Gen-Z:** "AI writes useEffect code fast but often forgets the cleanup. It's like ordering GrabFood without checking if the restaurant is still open — looks fine until you realize nothing's coming."

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the useEffect errors and mental model traps you'll hit this week. The infinite re-render loop alone will save you hours of debugging."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "Can't perform state update on       |
> | unmounted component"                 |
> | Effect runs after component removed  |
> | Fix: cleanup function with AbortCtrl |
> +--------------------------------------+
> +--------------------------------------+
> | "Infinite re-render loop"            |
> | Dependency changes every render      |
> | Fix: stabilize dependency or move    |
> | inside effect                        |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The infinite loop is like your phone stuck in a boot loop — it restarts, which triggers the restart, which triggers the restart. Check your dependency array: is something changing every render?"

> [Q&A] **Student Q:** "Why does `useEffect` with `setInterval` always log the same value?"
> **Short answer:** Because the interval captures the value from when the effect was created.
> **Real answer:** With `[]` as the dependency array, the effect runs once. The `setInterval` callback captures `count` at that moment (0). Even though `count` changes on re-renders, the interval still references the original 0. Fix: use functional updates `setCount(c => c + 1)` or add `count` to the dependency array (but then you need to clear and reset the interval each time).
> **The hidden question:** "Which fix is better?" -> Functional updates are cleaner for counters. Dependency array changes are better when you actually need the current value.

> [LOST] **If they're lost:** "The #1 issue: infinite re-render loops. If your app freezes, check your dependency array. Is it an object or array created inline? That creates a new reference every render. Move it outside the component or use `useMemo`."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: basic effect -> loading/error -> AbortController -> custom hook. The dependency array is the most important concept — draw it on the whiteboard every time. The stale closure + infinite loop are the two most common bugs. Emphasize: the useFetch pattern they build is the same pattern used by react-query and SWR in production.

---

## Week 8: React Router & SPA Concepts

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Route Diagram |
| Code Walkthrough | 30 min | Live Code (basic routes -> params -> lazy -> navigate) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 8 strategy):** This week ties everything together — students build their first multi-page app. The hotel receptionist analogy is essential for understanding SPA vs MPA. Build routes progressively: basic -> params -> lazy -> programmatic nav. The `<Outlet />` for nested routes is the hardest concept — draw the layout tree on the whiteboard.

---

### 1. The Hook

> [SPEAK] **Script:** "When you click from your Instagram profile to your feed, the page doesn't reload. The URL changes, the content changes, but the browser doesn't do a full page refresh. That's a Single Page Application (SPA) and it's powered by client-side routing. React Router is what makes this possible — it intercepts link clicks, changes the URL, and tells React which component to show, all without a page reload. Every modern web app you use is an SPA."

> [SLIDE] **Slide:** Title: "The Page That Never Reloads"  
> Video or GIF: Clicking between pages in an SPA — URL changes, content swaps, no loading spinner. Contrast with a traditional website that does a full page reload.

> [TIP] **Teaching Tip:** Make the contrast visceral. Show a traditional website reload (white flash, loading bar) vs an SPA transition (instant, smooth). Students need to FEEL the difference.

> [ENGAGE] **Gen-Z:** "SPAs are why switching from your TikTok For You to Following feels instant. Without client-side routing, every tab switch would be like reloading the whole app — imagine waiting 3 seconds every time you swipe."  
> **-> Phone moment:** "Open Instagram on your browser (not the app). Click from your profile to a post. Watch the URL change but the page NOT reload. That's React Router (or similar) in action."

> [LOST] **If they're lost:** "An SPA is just a website that doesn't reload when you click links. The URL changes, the content changes, but the browser stays on the same page. That's it."

---

### 2. The Analogy

> [SPEAK] **Script:** "Client-side routing is like a hotel with a smart receptionist. In a traditional website (server-side routing), every time you want a different room, you leave the building, go back to the front desk, and get a new key. In an SPA, the receptionist (React Router) is already inside. You say 'I want room 301' and they hand you the key without you leaving the building. The hallway (the browser) stays the same — only the room content changes."

> [BOARD] **Whiteboard:** Draw the hotel comparison:
> ```
> TRADITIONAL (Server-side):
> You -> Leave building -> Front desk -> New key -> Enter room
> (Full page reload every time)
> 
> SPA (Client-side):
> You -> Tell receptionist -> Get key -> Enter room
> (No leaving, no reload)
> 
> BrowserRouter = the building
> React Router  = the receptionist
> Routes        = the room directory
> <Link>        = telling the receptionist (not leaving)
> <a href>      = leaving the building (BAD!)
> ```

> [TIP] **Teaching Tip:** The hotel analogy maps perfectly: BrowserRouter = building, React Router = receptionist, Routes = directory, Link = internal request, `<a href>` = leaving the building. Draw it and reference it throughout.

> [ENGAGE] **Gen-Z:** "The `<Link>` vs `<a>` difference is like using the internal hotel phone vs walking outside to call. `<Link>` stays inside the building (SPA). `<a>` leaves the building (full reload)."  
> **-> Turn to your neighbor:** "In the hotel analogy, what's the difference between `<Link>` and `<a href>`? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the hotel. `<Link>` = change URL without reload. `<a href>` = full page reload. Always use `<Link>` in React."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min client vs server routing -> 5 min react-router-dom -> 4 min URL params -> 4 min lazy loading -> 4 min nested routes -> 3 min programmatic navigation)

> [SPEAK] **Script:** "In a traditional website, every page change requires a full server request and page reload. This is slow and loses application state (scroll position, form data, open modals). SPAs keep the app loaded and swap content in place, making navigation instant. Let me show you how React Router makes this work."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a code example, (3) a visual diagram. Don't show all concepts at once.

> [TIP] **Teaching Tip:** Spend the most time on nested routes and `<Outlet />` — this is the hardest concept. Draw a layout tree: DashboardLayout contains Outlet, which renders Posts or Posts/:id. Students need to SEE the nesting visually.

> [ASK] **Ask the class:** "What happens if you use `<a href='/page'>` in a React app?" (Full page reload — defeats the purpose of SPA.) "So what should you use instead?" (`<Link to='/page'>`.)

> [ENGAGE] **Gen-Z:** "URL params are like your Shopee order ID — `/orders/:orderId`. The `:orderId` part changes for each order, but the page structure stays the same. `/orders/ABC123` and `/orders/DEF456` use the same component with different data."  
> **-> Phone moment:** "Look at any URL in your browser. Find the part that changes between pages — that's a URL param. `/users/42` -> `42` is the param."

> [Q&A] **Student Q:** "Why do I need lazy loading? My app is small."
> **Short answer:** You don't need it for small apps, but it's good practice.
> **Real answer:** Lazy loading splits your code into chunks. Instead of downloading 500KB upfront, you download 100KB for the home page, then fetch other chunks only when the user navigates to those pages. For small apps the difference is negligible, but it scales well.
> **The hidden question:** "Is it hard to add?" -> No. Just wrap with `lazy()` and `Suspense`. Two lines of code.

> [Q&A] **Student Q:** "What's `<Outlet />` and why do I need it?"
> **Short answer:** It's a placeholder where child routes render inside a parent layout.
> **Real answer:** Without `<Outlet />`, a parent route renders its content but has nowhere to put child routes. Think of it as a slot: the parent layout (sidebar, header) stays the same, and `<Outlet />` is where the page-specific content appears. It's like a frame that holds different pictures.
> **The hidden question:** "Can I have multiple outlets?" -> Yes, but that's advanced. One outlet per layout is the common pattern.

> [LOST] **If they're lost:** "The simplest routing summary: (1) `<BrowserRouter>` wraps everything. (2) `<Routes>` contains `<Route>` definitions. (3) `<Link>` navigates without reload. (4) `useParams` reads URL params. (5) `<Outlet />` for nested layouts."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (8 min basic routes -> 7 min URL params -> 8 min lazy loading -> 7 min useNavigate)

> [SPEAK] **Script:** "Let's build a multi-page SPA step by step. We'll start with basic routes, add dynamic URL params, then lazy-load pages, and finally add programmatic navigation with useNavigate."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: basic routing (BrowserRouter, Routes, Route, Link). Step 2: URL params (useParams). Step 3: lazy loading (lazy + Suspense). Step 4: programmatic navigation (useNavigate).

> [TIP] **Teaching Tip:** **Type each step live.** For the lazy loading step, open the Network tab in DevTools to show that the chunk is only loaded when navigating to that route. This visual proof is powerful.

> [BOARD] **Whiteboard:** Draw the route tree:
> ```
> <BrowserRouter>
>   +-- <nav> (always visible)
>   +-- <Routes>
>       +-- /        -> <Home />
>       +-- /about   -> <About />
>       +-- /users/:id -> <UserDetail /> (uses useParams)
>       +-- *        -> <NotFound />
> ```

> [ENGAGE] **Gen-Z:** "Setting up routes is like building a Grab route map. Each `<Route>` is a destination. `<Link>` is tapping the destination. `useNavigate` is the driver taking you there programmatically."  
> **-> Type-along:** "Type the basic routes first. Test each one by clicking. Then add params. Then lazy loading — watch the Network tab. Then useNavigate."

> [Q&A] **Student Q:** "Why does `useNavigate` need to be inside BrowserRouter?"
> **Short answer:** Because it needs access to the routing context.
> **Real answer:** `useNavigate` (and all routing hooks) use React's Context API internally. They need to be inside a `<BrowserRouter>` to access the navigation history, current URL, and other routing state. If you use it outside, there's no router context to connect to — hence the error.
> **The hidden question:** "Can I put BrowserRouter anywhere?" -> Yes, but typically at the top level of your app (in `main.jsx` or `App.jsx`).

> [LOST] **If they're lost:** "Start with just the basic routes — Home, About, Users. Get navigation working with `<Link>`. Then add the params route. Then lazy loading. Then useNavigate. One feature at a time."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "Every SPA you've ever used — Gmail, Google Docs, Figma, Notion, Discord — uses client-side routing. React Router is the most popular routing library for React, used by over 12 million projects. The lazy loading pattern you're learning is what makes apps like Figma load in 2 seconds instead of 15 — they only load the code for the feature you're currently using."

> [SLIDE] **Slide:** Logos: Gmail, Google Docs, Figma, Notion, Discord. Stat: "React Router: 12M+ weekly npm downloads." Show a Network tab screenshot with code-split chunks loading on demand.

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that routing isn't academic — it's what makes every modern web app feel fast.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have noticed that Gmail doesn't reload when you switch between Inbox, Sent, and Drafts?" (All hands.) "That's client-side routing. You just learned how it works."

> [LOST] **If they're lost:** "You don't need to know every SPA's architecture. Just understand: routing is what makes web apps feel like native apps."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Build a multi-page SPA with at least 3 routes. Set up react-router-dom, create Home, Dashboard, and Post Detail pages, use lazy loading, and add a persistent navigation bar."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Install and set up `react-router-dom`
> - [ ] `/` — Home page with welcome message + links
> - [ ] `/dashboard` — Dashboard (reuse Week 7 data-fetching)
> - [ ] `/dashboard/posts/:id` — Post detail (nested route)
> - [ ] `*` — 404 page for unmatched routes
> - [ ] `<Link>` for all navigation (no `<a>` tags)
> - [ ] `useNavigate` for programmatic navigation
> - [ ] Lazy-load dashboard and post detail with `Suspense`
> - [ ] Persistent nav bar on all pages (layout route)
> - [ ] Active link styling

> [TIP] **Teaching Tip:** The nested routes + `<Outlet />` (dashboard layout) and active link styling are the hardest parts. Students will struggle with where to put the `<Outlet />` and how to use `useLocation` for active styling. Circulate and help.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the route setup (basic routes, params, lazy loading), the other handles the layout (persistent nav, active styling, nested routes). Then combine."

> [LOST] **If they're lost:** "Start with basic routes — Home, Dashboard, 404. Get `<Link>` navigation working. Then add the nested post detail route. Then lazy loading. Then active styling. Build incrementally."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate routing setup code, then verify that every route has a proper fallback and error boundary. Ask 'What happens if the lazy-loaded component fails to load?'"

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate routing setup for React" | "Design my route structure" |
> | "What happens if lazy import fails?" | "Fix my nested routes" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: `<a href>` instead of `<Link>`, missing `Suspense` wrappers, no catch-all route, nested `BrowserRouter`. Teach students to audit AI's routing code for these specifically.

> [ENGAGE] **Gen-Z:** "AI will sometimes use `<a href>` because it's trained on old tutorials. Always check: is it using `<Link>`? If not, that's a full page reload — not what you want."

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the routing errors and mental model traps you'll hit this week. The `<a>` vs `<Link>` mistake alone will save you from a frustrating debugging session."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "useNavigate() may be used only in   |
> | the context of a <Router> component" |
> | Hook used outside BrowserRouter      |
> | Fix: wrap component tree in Router   |
> +--------------------------------------+
> +--------------------------------------+
> | "Page reloads on navigation"         |
> | Used <a href> instead of <Link>      |
> | Fix: replace all <a> with <Link>     |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "Using `<a href>` in React is like ordering food on GrabFood by walking to the restaurant — you COULD do it, but you're missing the whole point of the app. Use `<Link>`."

> [Q&A] **Student Q:** "Why does my lazy-loaded component show a blank screen?"
> **Short answer:** The import path is probably wrong.
> **Real answer:** When `lazy(() => import('./Settings'))` has a wrong path, the chunk fails to load. Suspense's fallback never appears because the error happens before the component tries to render. Check the Network tab in DevTools — you'll see a failed chunk load with a 404. Fix the import path and it works.
> **The hidden question:** "Why doesn't Suspense catch this error?" -> Suspense catches loading delays, not import failures. Use an Error Boundary for that.

> [LOST] **If they're lost:** "The #1 issue: page reloads on navigation. If clicking a link causes a full page reload, you used `<a href>` instead of `<Link to>`. Replace all `<a>` tags with `<Link>` components."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: basic routes -> URL params -> lazy loading -> programmatic navigation. The hotel receptionist analogy is the key mental model. The `<Outlet />` for nested routes and `<Link>` vs `<a>` are the two most important teaching points. The exercise ties together everything from Weeks 5-7 into a real multi-page SPA — this is the "wow" moment where students see how all the pieces connect.

---

## Week 9: API Design Philosophy

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + REST Constraint Diagram |
| Code Walkthrough | 30 min | Live Spec Writing (OpenAPI YAML) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 9 strategy):** This is the pivot week — students switch from frontend consumers to backend designers. The biggest mental shift: "APIs are products, not implementation details." Emphasize API-first design: contract before code. The restaurant menu analogy is essential — reference it every time you introduce a new concept. Don't let students skip to coding; the OpenAPI spec IS the work this week.

### 1. The Hook

> [SPEAK] **Script:** "You know how Twitter's API changed and thousands of third-party apps broke overnight? Or how Instagram's API has strict rate limits that made developers scream? APIs are products, and bad API design is like a restaurant with no menu — customers don't know what's available, the kitchen doesn't know what to make, and everyone leaves frustrated. You're about to learn how to design APIs that other developers (including your future self) actually want to use."

> [SLIDE] **Slide:** Title: "APIs Are Products, Not Afterthoughts"  
> Left: Twitter API v1 -> v2 migration chaos (broken apps, angry devs). Right: Stripe's API docs (clean, consistent, beloved). Subtitle: "The difference is design philosophy."

> [TIP] **Teaching Tip:** This hook creates stakes — students realize their future APIs could break real products. Make it personal: "Raise your hand if you've ever used an API with terrible documentation."

> [ENGAGE] **Gen-Z:** "Bad API design is like a GCash transfer with no confirmation screen. You send the money, but you have no idea if it went through, how much the fee was, or where to check the receipt. Good APIs tell you exactly what happened."  
> **-> Phone moment:** "Open any app that uses a public API — maybe a weather app or a crypto tracker. Notice how it loads data smoothly? That's good API design working behind the scenes."

> [LOST] **If they're lost:** "Don't worry if you've never designed an API before. You've been USING them your whole life. This week, you learn how they're built from the consumer's perspective first."

---

### 2. The Analogy

> [SPEAK] **Script:** "Designing an API is like designing a restaurant menu. The menu (API contract) tells customers (frontend developers) exactly what they can order (endpoints), how to order it (HTTP methods), what they'll get back (response format), and what happens if something goes wrong (error responses). A good menu is consistent, clear, and doesn't surprise you. A bad menu has 'Chef's Surprise' as the only option and charges you differently every time. Your API contract is the menu — write it before you build the kitchen."

> [BOARD] **Whiteboard:** Draw the restaurant comparison:
> ```
> MENU (API Contract)          KITCHEN (Backend Implementation)
> +------------------+         +------------------+
> | GET /posts       | ------=> |  Fetch from DB   |
> | POST /posts      | ------=> |  Insert to DB    |
> | DELETE /posts/42 | ------=> |  Remove from DB  |
> +------------------+         +------------------+
> 
> GOOD MENU:                    BAD MENU:
> - Clear descriptions          - "Chef's Surprise"
> - Consistent prices           - Different prices daily
> - Error: "Out of stock"       - Error: *silence*
> ```

> [TIP] **Teaching Tip:** The menu analogy maps perfectly: menu items = endpoints, ordering method = HTTP verbs, dish description = response schema, "out of stock" = error responses. Draw it and reference it throughout.

> [ENGAGE] **Gen-Z:** "The API contract is like your Shopee order page — it shows exactly what you're getting, the price, the delivery date, and what happens if something goes wrong. No surprises."  
> **-> Turn to your neighbor:** "In the restaurant analogy, what's the HTTP method? What's the response body? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the restaurant. API contract = agreement on what data goes in, what comes out, and what errors look like. Write it before coding. That's the whole point."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min REST constraints -> 5 min resource modeling -> 5 min HTTP methods -> 5 min error contracts -> 5 min naming conventions)

> [SPEAK] **Script:** "Without a contract, frontend and backend developers work in the dark. The backend builds endpoints the frontend doesn't need. The frontend expects data the backend doesn't provide. API-first design solves this by agreeing on the contract *before* writing any code. Let me show you the core principles."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a good vs bad example, (3) why it matters. Don't show all concepts at once — cognitive overload.

> [TIP] **Teaching Tip:** Spend the most time on resource modeling and HTTP method semantics — this is where students make the most mistakes. They'll want to create `/getUser` and `/createUser`. Stop them. Emphasize: nouns, not verbs.

> [ASK] **Ask the class:** "If you want to get all users, what's the endpoint?" (`GET /users`) "If you want to create a new user?" (`POST /users`) "If you want to delete user 42?" (`DELETE /users/42`) "See the pattern? The URL is the resource, the method is the action."

> [ENGAGE] **Gen-Z:** "REST constraints are like the rules of a board game. Stateless = each turn is independent. Client-server = you play your cards, the game board tracks the state. Uniform interface = everyone follows the same rules. Break the rules and the game falls apart."  
> **-> Phone moment:** "Open your browser's DevTools -> Network tab. Look at any API request. What's the HTTP method? What's the URL? What's the response status? That's REST in action."

> [Q&A] **Student Q:** "Why can't I just use POST for everything? It's simpler."
> **Short answer:** Because it breaks the REST contract and loses semantics.
> **Real answer:** `GET` is cacheable and safe. `PUT` is idempotent (retry-safe). `DELETE` is idempotent. If you use POST for everything, you lose caching, retry safety, and every tool that understands HTTP semantics. Proxies, CDNs, and browsers all rely on these semantics.
> **The hidden question:** "Does this really matter?" -> Yes. Using wrong methods breaks caching, breaks retry logic, and makes your API confusing for every developer who uses it.

> [Q&A] **Student Q:** "What's the difference between PUT and PATCH?"
> **Short answer:** PUT replaces the entire resource. PATCH updates specific fields.
> **Real answer:** `PUT /users/1` with `{ name: "Bob" }` replaces the entire user — any fields not included become null/default. `PATCH /users/1` with `{ name: "Bob" }` only changes the name, leaving other fields intact. Use PUT when you have the full resource, PATCH when you're updating a few fields.
> **The hidden question:** "Which one should I use?" -> PATCH for partial updates (most common). PUT when you're replacing the entire resource.

> [LOST] **If they're lost:** "The simplest API design summary: (1) URLs are nouns (resources). (2) HTTP methods are verbs (actions). (3) Errors are consistent. (4) Write the contract first. That's 90% of what you need."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min explain contract-first -> 15 min write OpenAPI spec live -> 10 min validate in Swagger Editor)

> [SPEAK] **Script:** "Let's design an OpenAPI spec for a blog API — contract first, code later. We'll define the data shapes first, then the endpoints, then validate it. This is how professional teams design APIs."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: schemas (Post, Error). Step 2: GET /posts (list with pagination). Step 3: POST /posts (create with validation). Step 4: GET/DELETE /posts/{id}.

> [TIP] **Teaching Tip:** **Type the OpenAPI spec live, don't paste.** Explain each section as you write it: "This is the Post schema — these are the fields the client can expect." "This `readOnly: true` means the client can't set it — the server generates it."

> [BOARD] **Whiteboard:** Draw the spec structure:
> ```
> openapi.yaml
> +-- info (title, version, description)
> +-- components
> |   +-- schemas (Post, Error)
> +-- paths
>     +-- /posts (GET, POST)
>     +-- /posts/{postId} (GET, DELETE)
> ```

> [ENGAGE] **Gen-Z:** "Writing an OpenAPI spec is like building a Gundam instruction manual. You define every part (schemas), every assembly step (endpoints), and what the final product looks like (responses). Then you build it."  
> **-> Type-along:** "Open the Swagger Editor in your browser. Type the spec with me, section by section. Watch it validate in real-time — green means valid, red means fix it."

> [Q&A] **Student Q:** "Why define schemas before endpoints?"
> **Short answer:** Because schemas are your data types — endpoints reference them.
> **Real answer:** Defining schemas first is like defining TypeScript interfaces before writing functions. You establish the data shapes, then endpoints reference those shapes with `$ref`. This avoids duplication and ensures consistency — every endpoint that returns a Post uses the exact same schema.
> **The hidden question:** "Can I write endpoints first?" -> You can, but you'll end up duplicating response shapes. Schema-first is cleaner.

> [LOST] **If they're lost:** "Start with just the Post schema. Get that right. Then add the Error schema. Then one endpoint (GET /posts). Validate it. Then add the next endpoint. One piece at a time."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "Stripe's API is widely considered the gold standard of API design. Their consistency is legendary — every endpoint follows the same patterns, every error has the same structure, and their documentation is generated from their OpenAPI spec. Companies that design their API contract first (like Stripe, Twilio, GitHub) have happier developers and fewer integration bugs. Companies that don't (like early Twitter, early Facebook) spend years fixing breaking changes."

> [SLIDE] **Slide:** Stripe API docs screenshot (clean, consistent). Logos: Stripe, Twilio, GitHub. Stat: "API-first companies ship 40% faster with 60% fewer integration bugs."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that API design isn't academic — it's what separates professional APIs from amateur ones.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have used an API where the docs were terrible?" (Most hands.) "That's what happens when companies don't design their API contract first."

> [LOST] **If they're lost:** "You don't need to know Stripe's entire API. Just understand: good API design = consistent patterns + clear docs + contract first. That's the standard."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min spec writing -> 10 min share)

> [SPEAK] **Script:** "Design an OpenAPI spec for an e-commerce API. Define schemas for Product, Category, Order, OrderItem, and Customer. Then define endpoints for CRUD operations, filtering, and pagination. Validate it in the Swagger Editor."

> [SLIDE] **Slide:** Exercise requirements as a checklist:
> - [ ] Define schemas: Product, Category, Order, OrderItem, Customer
> - [ ] CRUD for Products (list, get, create, update, delete)
> - [ ] `GET /categories/{id}/products` — list products by category
> - [ ] `POST /orders` — create an order with order items
> - [ ] `GET /orders/{id}` — get an order by ID
> - [ ] `GET /customers/{id}/orders` — list orders for a customer
> - [ ] Pagination (`page`, `limit`) for all list endpoints
> - [ ] Filtering where appropriate (`?status=pending`)
> - [ ] Consistent error response schema
> - [ ] Proper HTTP status codes (201, 204, 404, etc.)
> - [ ] Validate in Swagger Editor

> [TIP] **Teaching Tip:** The nested resource endpoints (requirements 3, 5, 6) are the hardest part. Students will struggle with URL design for sub-resources. Circulate and help with the pattern: `/parent/{id}/child`.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the schemas (data shapes), the other handles the endpoints (URLs and methods). Then combine and validate together. It's like a collab — each person owns their part."

> [LOST] **If they're lost:** "Start with the Product schema. Then the GET /products endpoint. Then POST /products. Then add the other schemas. Then the nested endpoints. Build incrementally."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate an OpenAPI spec from your requirements, then review every endpoint for REST compliance. Ask 'Is this endpoint using the right HTTP method?' and 'Are all error responses consistent?'"

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate an OpenAPI spec for an e-commerce API" | "Design my error contract for me" |
> | "Is this endpoint REST-compliant?" | "Do the entire exercise" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes listed in the content. AI creates action-based endpoints (`/createUser`) instead of resource-based. Teach students to catch this.

> [ENGAGE] **Gen-Z:** "AI is like a junior dev who writes fast but doesn't understand REST principles. It'll give you a working spec, but you need to verify it follows resource-based design."

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the spec errors and mental model traps you'll hit this week. The inconsistent naming alone will save you from designing a confusing API."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "OpenAPI spec validation fails"      |
> | YAML syntax errors or invalid keywords|
> | Fix: use Swagger Editor to validate  |
> +--------------------------------------+
> +--------------------------------------+
> | "Inconsistent naming conventions"    |
> | Mixed singular/plural, action verbs  |
> | Fix: pick one style and stick to it  |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The inconsistent naming trap is like your Shopee search — sometimes it's 'phone case', sometimes 'phonecase', sometimes 'phone-case'. Pick one and stick to it, or nobody can find anything."

> [Q&A] **Student Q:** "REST is not a strict rulebook? So I can bend the rules?"
> **Short answer:** Yes, consistency matters more than purity.
> **Real answer:** REST is a set of architectural constraints, not a specification. Some of the best APIs bend REST rules (GraphQL, RPC-style endpoints for specific actions). The goal is that your API is predictable and consistent. If every endpoint follows the same patterns, developers can use it without reading docs for every single endpoint.
> **The hidden question:** "So when DO I break REST rules?" -> When there's a genuinely complex action that doesn't fit the CRUD model (e.g., `/posts/{id}/publish`). But keep it rare.

> [LOST] **If they're lost:** "The #1 issue: inconsistent naming. Pick plural nouns for collections (`/users`), kebab-case for multi-word (`/blog-posts`), and proper HTTP methods. That solves 80% of design confusion."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: API as product -> restaurant menu analogy -> REST constraints -> OpenAPI spec design -> validation. The biggest mental shift is from "API as implementation detail" to "API as product." The OpenAPI spec IS the deliverable this week — students should not write any backend code. Emphasize: contract first, code later. The Swagger Editor validation step is the "aha" moment — students see their spec turn from red to green. Common pitfalls: action-based endpoints (`/createUser`), inconsistent naming, wrong HTTP status codes.

---

## Week 10: ASP.NET Core Web API

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Controller Architecture Diagram |
| Code Walkthrough | 30 min | Live Code (model -> controller -> Program.cs) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 10 strategy):** This is the "contract to code" week. Students take their Week 9 OpenAPI spec and implement it in C#. The drive-through restaurant analogy is essential — controller = order taker, service = kitchen, database = pantry. Build progressively: model -> controller -> Program.cs. Emphasize: `[ApiController]` does automatic validation, `CreatedAtAction` returns 201 with Location header, and Swagger is auto-generated from attributes. Don't let students skip the service layer — controllers should be thin.

### 1. The Hook

> [SPEAK] **Script:** "You designed your API contract last week. Now it's time to actually build it. ASP.NET Core is what runs the backend of Stack Overflow, Microsoft's own services, and thousands of enterprise applications. It's fast, it's type-safe (C#), and it has built-in support for everything you need: routing, validation, documentation, and dependency injection. You're going to take your OpenAPI spec and turn it into a working API that your React frontend can actually talk to."

> [SLIDE] **Slide:** Title: "From Spec to Working API"  
> Left: Week 9's OpenAPI YAML spec. Right: Running Swagger UI with green checkmarks. Arrow between them: "This week."

> [TIP] **Teaching Tip:** Make the connection explicit: "Everything you designed last week becomes real code this week." Show the OpenAPI spec next to the Swagger UI to create visual continuity.

> [ENGAGE] **Gen-Z:** "Last week you designed the blueprint. This week you're building the house. ASP.NET Core is like your construction crew — it handles the heavy lifting (routing, validation, serialization) so you can focus on the business logic."  
> **-> Phone moment:** "Open a browser and go to any API's Swagger UI. See how you can test every endpoint right there? That's what you're building this week — your OWN Swagger UI."

> [LOST] **If they're lost:** "Don't worry if C# is new. The concepts are the same as JavaScript — classes, functions, async/await. The syntax is different but the logic is familiar."

---

### 2. The Analogy

> [SPEAK] **Script:** "Building a Web API is like setting up a drive-through restaurant. The OpenAPI spec is your menu board. The controller is the order taker — it receives requests, validates them, and passes them to the kitchen. The service layer is the kitchen — it does the actual work (cooking = business logic). The database is the pantry — where ingredients (data) are stored. `[ApiController]` is the health inspector — it enforces rules automatically (model validation, consistent error responses)."

> [BOARD] **Whiteboard:** Draw the drive-through comparison:
> ```
> CUSTOMER (Frontend/React)
>   v sends HTTP request
> ORDER TAKER (Controller)
>   v validates order, passes to kitchen
> KITCHEN (Service Layer)
>   v business logic, data processing
> PANTRY (Database)
>   v stores/retrieves data
>   ^
> CUSTOMER gets response (JSON)
> 
> [ApiController] = Health Inspector
>   -> auto-validates, returns consistent errors
> ```

> [TIP] **Teaching Tip:** The drive-through analogy maps perfectly: controller = order taker (thin, just routes), service = kitchen (does the work), database = pantry (stores data). Emphasize: the controller should NOT do the cooking — that's the service layer's job.

> [ENGAGE] **Gen-Z:** "The controller is like your Grab driver — it takes your order and delivers the response. But it doesn't cook the food. The service layer is the restaurant kitchen. If your driver starts cooking, something's wrong."  
> **-> Turn to your neighbor:** "In the drive-through analogy, what happens if the order taker also tries to cook? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the analogy. Controller = receives request, calls service, returns response. Service = does the actual work. Database = stores data. Three layers, each does one thing."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min controllers -> 5 min [ApiController] -> 5 min attribute routing -> 4 min content negotiation -> 3 min ProblemDetails -> 3 min Swagger)

> [SPEAK] **Script:** "You need a backend that can receive HTTP requests, process them, and return responses. ASP.NET Core provides a structured way to do this with controllers, routing, model binding, and built-in features like validation and documentation. Let me show you how each piece works."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a code snippet, (3) what happens without it. Don't show all concepts at once.

> [TIP] **Teaching Tip:** Spend the most time on `[ApiController]` and attribute routing — these are the biggest differences from other frameworks. Emphasize: `[ApiController]` automatically returns 400 for validation failures. Students love this because it's free validation.

> [ASK] **Ask the class:** "What does `[Route("api/[controller]")]` mean?" (`[controller]` is replaced with the class name minus "Controller", so `PostsController` -> `/api/posts`.) "What does `[HttpGet("{id}")]` add to the route?" (`/api/posts/{id}`.)

> [ENGAGE] **Gen-Z:** "Content negotiation is like ordering at Jollibee — you say what you want, and they give it to you in the format you asked for. `Accept: application/json` -> JSON response. `Accept: application/xml` -> XML response. ASP.NET Core handles the translation automatically."  
> **-> Phone moment:** "Open VS Code. Create a new ASP.NET Core project. Run `dotnet run`. Go to `/swagger` in your browser. See all your endpoints listed? That's Swagger auto-generated from your controller attributes."

> [Q&A] **Student Q:** "Why do I need a service layer? Can't I just put the logic in the controller?"
> **Short answer:** You can, but it makes your code hard to test and maintain.
> **Real answer:** Controllers should be thin — they receive requests and return responses. Business logic belongs in services. If logic is in controllers, you can't unit test it without mocking HTTP. Services can be tested in isolation. Also, if multiple controllers need the same logic, you'd duplicate it. Services are reusable.
> **The hidden question:** "Is this really necessary for a small project?" -> It's a habit. Build it now, and it scales naturally.

> [Q&A] **Student Q:** "What's `ProblemDetails` and why should I use it?"
> **Short answer:** It's the standard error response format for HTTP APIs.
> **Real answer:** Instead of returning random error shapes (`{ error: "not found" }` vs `{ message: "404" }`), `ProblemDetails` gives a consistent structure: `type`, `title`, `status`, `detail`, `instance`. Every error looks the same. Frontend developers know exactly how to parse it. It's an IETF standard (RFC 7807).
> **The hidden question:** "Do I have to use it?" -> No, but it's best practice and ASP.NET Core supports it out of the box.

> [LOST] **If they're lost:** "The simplest ASP.NET Core summary: (1) Controllers handle requests. (2) `[ApiController]` auto-validates. (3) Attribute routing maps URLs to methods. (4) Services do the work. (5) Swagger auto-generates docs. That's 90% of what you need."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min model -> 15 min controller -> 10 min Program.cs + Swagger)

> [SPEAK] **Script:** "Let's implement the blog API from Week 9's spec. We'll start with the model class, then the controller with all CRUD endpoints, then Program.cs with Swagger setup. Each step builds on the last."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: Post model with validation attributes. Step 2: PostsController with GET, POST, DELETE. Step 3: Program.cs with DI and Swagger.

> [TIP] **Teaching Tip:** **Type each step live.** For the controller, emphasize the progression: `GetAll` -> `GetById` -> `Create` -> `Delete`. Point out each return type: `Ok()` = 200, `CreatedAtAction()` = 201, `NotFound()` = 404, `NoContent()` = 204.

> [BOARD] **Whiteboard:** Draw the request flow:
> ```
> GET /api/posts/42
>   v
> PostsController.GetById(42)
>   v
> _postService.GetByIdAsync(42)
>   v
> Returns Post or null
>   v
> if null -> NotFound() (404)
> if post -> return post (200 + JSON)
> ```

> [ENGAGE] **Gen-Z:** "Building a controller is like assembling a Jollibee order station. Each endpoint is a different order type: GET = 'give me the menu', POST = 'I want to order', DELETE = 'cancel my order'. Each one has a specific response."  
> **-> Type-along:** "Type the model first. Then the controller — one endpoint at a time. Test each one in Swagger before moving to the next. Don't write all four endpoints and then test."

> [Q&A] **Student Q:** "Why does `CreatedAtAction` need `nameof(GetById)` and `new { id = post.Id }`?"
> **Short answer:** It generates the Location header URL by referencing another action.
> **Real answer:** `CreatedAtAction` needs to know which action handles the GET for the new resource (so it can build the URL). `nameof(GetById)` tells it "use the GetById method." `new { id = post.Id }` provides the route parameter values. The result is a Location header like `/api/posts/42`. This is the RESTful way to tell the client where the new resource lives.
> **The hidden question:** "Can I just return the ID?" -> You could, but the Location header is the HTTP standard for resource creation.

> [LOST] **If they're lost:** "Start with just the model and the `GetAll` endpoint. Get it working in Swagger. Then add `GetById`. Then `Create`. Then `Delete`. One endpoint at a time."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "ASP.NET Core is one of the fastest web frameworks in existence. In the TechEmpower benchmarks, it consistently ranks in the top 5 for raw request throughput. Companies like Stack Overflow, Microsoft, and GoDaddy run ASP.NET Core in production handling millions of requests per second. The `[ApiController]` attribute and `ProblemDetails` response format are the same patterns used in Microsoft's own internal APIs."

> [SLIDE] **Slide:** TechEmpower benchmark chart showing ASP.NET Core in top 5. Logos: Stack Overflow, Microsoft, GoDaddy. Stat: "ASP.NET Core handles 2+ million requests/second on commodity hardware."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that ASP.NET Core isn't academic — it's one of the fastest web frameworks in the world.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you thought .NET was old and slow?" (Some hands.) "ASP.NET Core is actually faster than Node.js, Python, and most other frameworks. It's the same .NET that runs Xbox Live and Microsoft Azure."

> [LOST] **If they're lost:** "You don't need to know the benchmarks. Just understand: ASP.NET Core is fast, type-safe, and used by major companies. It's a solid choice for production APIs."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min implementation -> 10 min share)

> [SPEAK] **Script:** "Implement your Week 9 OpenAPI spec as an ASP.NET Core Web API. Create model classes, controllers with proper HTTP methods, set up Swagger, and test every endpoint."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] `dotnet new webapi` — create project
> - [ ] Model classes for all schemas (Product, Category, Order, etc.)
> - [ ] Controllers for each resource with proper HTTP methods
> - [ ] `[ApiController]` and attribute routing on all controllers
> - [ ] `[ProducesResponseType]` attributes for documentation
> - [ ] Swagger UI setup
> - [ ] In-memory data store (`List<T>`) for now
> - [ ] Test every endpoint in Swagger UI
> - [ ] Verify model validation returns proper 400 errors

> [TIP] **Teaching Tip:** The `[ProducesResponseType]` attributes (requirement 5) and model validation testing (requirement 9) are where students struggle. Circulate and help with the `[Required]` attributes and testing with invalid data in Swagger.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the models and controllers, the other handles Program.cs and Swagger setup. Then combine and test together. It's like a collab — each person owns their layer."

> [LOST] **If they're lost:** "Start with `dotnet new webapi`. Get the default template running. Then add your first model. Then your first controller with one endpoint. Test it in Swagger. Then add more endpoints. Build incrementally."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate controller code from your OpenAPI spec, then verify every endpoint matches the contract. Ask 'Does this endpoint return the right status code?' and 'Is the response shape exactly what the spec says?'"

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate a controller from this OpenAPI spec" | "Write my service layer" |
> | "Does this endpoint return the right status code?" | "Do the entire exercise" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: returning 200 for create instead of 201, forgetting `CreatedAtAction`, putting business logic in controllers. Teach students to audit AI's controller code against their spec.

> [ENGAGE] **Gen-Z:** "AI writes controllers fast but often puts business logic where it doesn't belong. It's like a Grab driver who starts cooking your food — fast, but wrong. Always check: is the controller thin?"

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the ASP.NET Core errors and mental model traps you'll hit this week. The 415 error alone will save you from a frustrating debugging session."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "415 Unsupported Media Type"         |
> | Missing Content-Type: application/json|
> | Fix: set Content-Type header in client|
> +--------------------------------------+
> +--------------------------------------+
> | "Swagger shows no endpoints"         |
> | Missing [ApiController] or           |
> | app.MapControllers()                 |
> | Fix: check controller setup          |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The 415 error is like ordering on GrabFood without selecting a payment method. The restaurant knows you want food, but doesn't know how to process it. Set `Content-Type: application/json`."

> [Q&A] **Student Q:** "What's the difference between `ActionResult<T>` and `IActionResult`?"
> **Short answer:** `ActionResult<T>` lets you return either data or an error status. `IActionResult` only returns status.
> **Real answer:** `ActionResult<Post>` means the endpoint can return a `Post` object (200) OR an error status like `NotFound()` (404). `IActionResult` means it only returns status codes — no data in the body. Use `ActionResult<T>` when the endpoint returns data. Use `IActionResult` when it only returns a status (like `NoContent()` for delete).
> **The hidden question:** "Which one should I use?" -> `ActionResult<T>` for GET/POST. `IActionResult` for DELETE.

> [LOST] **If they're lost:** "The #1 issue: Swagger shows no endpoints. Check: (1) `[ApiController]` on the controller. (2) `app.MapControllers()` in Program.cs. (3) Controller is a public class inheriting from `ControllerBase`. That fixes 90% of Swagger issues."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: OpenAPI spec -> model -> controller -> Program.cs -> Swagger. The drive-through analogy is the key mental model. The `[ApiController]` auto-validation and `CreatedAtAction` with Location header are the two most important teaching points. Emphasize: controllers should be thin, business logic belongs in services. The exercise ties Week 9's spec into working code — students should test every endpoint in Swagger UI before moving on. Common pitfalls: 415 errors (missing Content-Type), Swagger not showing endpoints, business logic in controllers.

---

## Week 11: Frontend-Backend Integration

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + CORS + Auth Flow Diagram |
| Code Walkthrough | 30 min | Live Code (CORS -> Auth Context -> useAuthFetch -> ProtectedRoute) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 11 strategy):** This is the "full-stack comes together" week — the most anticipated and most frustrating week. CORS errors will appear immediately. The two-building office analogy is essential for CORS. Build progressively: CORS config -> auth context -> authenticated fetch -> protected routes. Emphasize: CORS is a BROWSER thing, not a server thing. The 401 -> logout flow is the most important security pattern. Students will struggle with token flow — trace it step by step on the whiteboard.

### 1. The Hook

> [SPEAK] **Script:** "You have a React frontend and an ASP.NET Core backend. They're both running. But when you try to connect them, the browser blocks it with a CORS error. Welcome to the most common full-stack developer experience. Connecting frontend to backend isn't just about making HTTP calls — it's about authentication, token management, error handling, and dealing with the browser's security model. This week is where your app becomes a real full-stack application."

> [SLIDE] **Slide:** Title: "The CORS Error That Every Full-Stack Developer Sees"  
> Big red browser console error: `Access to fetch at 'http://localhost:5000' from origin 'http://localhost:3000' has been blocked by CORS policy`. Subtitle: "If you haven't seen this yet, you will today."

> [TIP] **Teaching Tip:** Make the CORS error feel normal — not a failure, but a rite of passage. "Every developer sees this. Today you learn why it exists and how to fix it."

> [ENGAGE] **Gen-Z:** "The CORS error is like your phone's Face ID rejecting you because you're wearing a mask. It's a security feature, not a bug. The browser is protecting you from malicious sites. You just need to tell it which sites are safe."  
> **-> Phone moment:** "Open your browser console right now. Try to fetch from your API running on a different port. Watch the CORS error appear in red. That's your starting point."

> [LOST] **If they're lost:** "CORS sounds scary but it's simple: the browser blocks requests between different ports/domains by default. You just need to tell the server to allow your frontend's URL. One line of config fixes it."

---

### 2. The Analogy

> [SPEAK] **Script:** "Connecting frontend to backend is like two offices in different buildings trying to communicate. CORS is the security guard at the frontend building who says 'I don't trust that other building.' You need to give the guard a list of approved buildings (CORS policy). Authentication is the ID badge — every request needs to show it belongs. Token storage is where you keep the badge (localStorage, cookies, memory). Error handling is what happens when the other building's elevator is broken — you need a plan B."

> [BOARD] **Whiteboard:** Draw the two-building comparison:
> ```
> BUILDING A (Frontend - localhost:3000)
>   +-------------------------+
>   | Security Guard (CORS)   |
>   | Approved: Building B [OK]  |
>   | Approved: Building C [NO]  |
>   +--------+----------------+
>            | HTTP request + ID badge (token)
>            =>
> BUILDING B (Backend - localhost:5000)
>   +-------------------------+
>   | Reception (Controller)  |
>   | Checks ID badge (JWT)   |
>   | Grants/denies access    |
>   +-------------------------+
> ```

> [TIP] **Teaching Tip:** The two-building analogy maps perfectly: CORS = security guard, token = ID badge, controller = reception. Draw it and reference it throughout. Emphasize: the guard (browser) blocks first, then the reception (server) checks the badge.

> [ENGAGE] **Gen-Z:** "CORS is like your subdivision's gate guard. Even if the house inside wants to receive you, the guard won't let you in unless your name is on the approved list. The CORS policy IS that approved list."  
> **-> Turn to your neighbor:** "In the two-building analogy, what's the token? What's the CORS policy? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the buildings. CORS = browser blocks cross-origin requests. Fix = server sends 'allow this origin' header. Auth = every request needs a token. That's the whole thing."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min CORS -> 5 min token-based auth -> 5 min token storage -> 5 min useContext for auth -> 5 min error handling consistency)

> [SPEAK] **Script:** "Your frontend and backend are separate applications running on different ports. The browser's same-origin policy blocks cross-origin requests by default. You need to configure CORS, handle authentication tokens, manage error states consistently, and keep the two apps in sync. Let me show you how each piece works."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a diagram, (3) what happens if you get it wrong. Don't show all concepts at once.

> [TIP] **Teaching Tip:** Spend the most time on CORS and token storage — these are where 80% of bugs happen. For CORS, emphasize: it's a BROWSER feature, not a server feature. For token storage, show the tradeoff triangle: localStorage (easy but XSS-vulnerable) vs httpOnly cookies (secure but complex) vs memory (safest but lost on refresh).

> [ASK] **Ask the class:** "What happens when React on port 3000 tries to fetch from API on port 5000?" (Browser sends OPTIONS preflight request first.) "What does the server need to respond with?" (`Access-Control-Allow-Origin: http://localhost:3000`.) "What if it doesn't?" (Browser blocks the request — you see the CORS error.)

> [ENGAGE] **Gen-Z:** "Token storage is like where you keep your house keys. localStorage = under the doormat (easy to find). httpOnly cookies = in a safe (harder to access). Memory = in your pocket (safest but you might drop them). Each has tradeoffs."  
> **-> Phone moment:** "Open your browser's DevTools -> Application tab -> Local Storage. See any tokens stored there? That's how many apps keep you logged in."

> [Q&A] **Student Q:** "Why is localStorage vulnerable to XSS?"
> **Short answer:** Because any JavaScript running on your page can read it.
> **Real answer:** If an attacker injects malicious JavaScript into your page (through a vulnerable dependency, user input, etc.), that script can read `localStorage.getItem('token')` and send it to the attacker's server. With httpOnly cookies, JavaScript can't read them — the browser sends them automatically with requests. The tradeoff: httpOnly cookies are harder to use with SPAs on different domains.
> **The hidden question:** "So should I use cookies instead?" -> For production, yes. For this class, localStorage is fine — but understand the tradeoff.

> [Q&A] **Student Q:** "Why use `useContext` for auth instead of passing props?"
> **Short answer:** Because auth state is needed everywhere — prop drilling would be a nightmare.
> **Real answer:** If you pass `user` and `isAuthenticated` through props, every component in the tree needs to receive and forward them. With `useContext`, any component can access auth state directly, no matter how deep it is in the tree. It's like a global variable but reactive — when the context changes, all consuming components re-render.
> **The hidden question:** "Isn't context slower than props?" -> Slightly, but the convenience outweighs the cost for auth state.

> [LOST] **If they're lost:** "The simplest integration summary: (1) CORS = server allows frontend's origin. (2) Token = sent with every request in Authorization header. (3) Auth context = shares login state across the app. (4) 401 = logout. That's 90% of what you need."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min CORS config -> 10 min Auth context -> 10 min useAuthFetch -> 5 min ProtectedRoute)

> [SPEAK] **Script:** "Let's connect React to the ASP.NET Core API with authentication. We'll start with CORS on the backend, then build the auth context, then the authenticated fetch hook, then protected routes. Each step builds on the last."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: CORS policy in Program.cs. Step 2: AuthContext with login/logout. Step 3: useAuthFetch with token header. Step 4: ProtectedRoute with Navigate.

> [TIP] **Teaching Tip:** **Type each step live.** For the auth context, trace the token flow: login -> store token -> include in header -> 401 -> logout. For useAuthFetch, emphasize the AbortController cleanup (from Week 7).

> [BOARD] **Whiteboard:** Draw the auth flow:
> ```
> Login page -> POST /api/auth/login -> { token, user }
>   v
> Store token in localStorage + React state
>   v
> useAuthFetch -> adds Authorization: Bearer <token>
>   v
> API validates token -> returns data (200) or invalid (401)
>   v
> If 401 -> logout() -> clear token -> redirect to /login
> ```

> [ENGAGE] **Gen-Z:** "Building the auth flow is like setting up your GCash account. You log in once (get token), then every transaction uses that token automatically. If your session expires (401), you need to log in again. The auth context is like GCash keeping you logged in across pages."  
> **-> Type-along:** "Type the CORS config first. Test it — the CORS error should disappear. Then the auth context. Then useAuthFetch. Then ProtectedRoute. Test each step before moving on."

> [Q&A] **Student Q:** "Why does `useAuthFetch` need `token` and `logout` in the dependency array?"
> **Short answer:** Because the effect needs to re-run when the token changes or logout function changes.
> **Real answer:** If the token changes (user logs in/out), the effect needs to re-fetch with the new token. If `logout` changes (unlikely but possible), the effect needs the latest version. Without these in the dependency array, the effect would use stale values — the old token or old logout function.
> **The hidden question:** "What if I omit them?" -> The effect won't re-run when the token changes. You'd see stale data or failed requests.

> [LOST] **If they're lost:** "Start with just the CORS config. Get the frontend talking to the backend — even without auth. Then add the login page. Then the auth context. Then useAuthFetch. Then ProtectedRoute. One piece at a time."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "Every full-stack app at every company follows this exact pattern: CORS configuration, token-based auth, protected routes, and consistent error handling. The `Authorization: Bearer <token>` header is the universal language of web APIs. When you log into any app and stay logged in across page refreshes, that's token storage working. When you get kicked back to the login page after your session expires, that's the 401 handler. This is the backbone of every modern web application."

> [SLIDE] **Slide:** Auth flow diagram used by major platforms. Logos: Google, GitHub, Discord. Stat: "Bearer token auth is used by 95%+ of modern web APIs."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that the pattern they're building is the industry standard — not a classroom invention.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have been logged out of an app because your session expired?" (All hands.) "That's the exact 401 handler you're building today. You're learning how the apps you use every day actually work."

> [LOST] **If they're lost:** "You don't need to know every platform's auth system. Just understand: the pattern you're building is what every company uses. CORS + tokens + protected routes = full-stack auth."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Connect your React frontend to your ASP.NET Core API with authentication. Set up CORS, build a login page, create auth context, implement token-based API calls, and protect routes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] CORS policy in ASP.NET Core allowing React dev server
> - [ ] Auth endpoint: `POST /api/auth/login` returns JWT
> - [ ] Login page with email/password form
> - [ ] `AuthProvider` context managing login/logout state
> - [ ] Token stored in localStorage after login
> - [ ] `useAuthFetch` hook including token in every request
> - [ ] `ProtectedRoute` component redirecting unauthenticated users
> - [ ] Dashboard page fetching protected data from API
> - [ ] Token expiration handling: 401 -> redirect to login
> - [ ] Logout button clearing token and redirecting

> [TIP] **Teaching Tip:** The token expiration handling (requirement 9) and `ProtectedRoute` with `replace` (requirement 7) are the hardest parts. Students will struggle with the 401 -> logout -> redirect flow. Circulate and help with this specifically.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the backend (CORS + auth endpoint), the other handles the frontend (auth context + protected routes). Then combine and test the full login flow together."

> [LOST] **If they're lost:** "Start with CORS. Get the frontend talking to the backend without auth. Then add a simple login that just stores a fake token. Then build the auth context. Then useAuthFetch. Then ProtectedRoute. Build incrementally."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate auth flow code, then audit the token storage approach. Ask 'What happens if there's an XSS vulnerability?' and 'Is localStorage the right choice for this token?'"

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate an auth context for React" | "Handle my authentication flow" |
> | "What are the XSS risks of localStorage?" | "Fix my CORS configuration" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: storing tokens in localStorage without mentioning XSS, `AllowAnyOrigin()` with `AllowCredentials()` (invalid combination), missing 401 handling. Teach students to audit AI's auth code for security issues.

> [ENGAGE] **Gen-Z:** "AI writes auth code fast but often skips the security considerations. It's like building a house with no locks on the doors — looks good, but anyone can walk in. Always check the security implications."

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the integration errors and mental model traps you'll hit this week. The CORS error alone will save you from hours of confusion."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "Access blocked by CORS policy"      |
> | API doesn't allow frontend's origin  |
> | Fix: add CORS policy in Program.cs   |
> +--------------------------------------+
> +--------------------------------------+
> | "401 Unauthorized on every request"  |
> | Token not sent or malformed header   |
> | Fix: check Authorization header format|
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The CORS error is like your phone blocking an unknown number. You need to add the number to your contacts (CORS policy) before it can reach you."

> [Q&A] **Student Q:** "Why does CORS work in Postman but not in the browser?"
> **Short answer:** Because Postman doesn't enforce CORS. Browsers do.
> **Real answer:** CORS is a browser security feature, not a server feature. The server sends headers saying "this origin is allowed," but the browser is what actually checks and blocks. Postman, curl, and server-to-server requests don't have this check. That's why your API works in Postman but fails in the browser.
> **The hidden question:** "So the server is fine?" -> Yes. The server is working. The browser is blocking the request for security.

> [LOST] **If they're lost:** "The #1 issue: CORS errors. If you see 'blocked by CORS policy,' add a CORS policy in your ASP.NET Core Program.cs that allows your frontend's URL (e.g., `http://localhost:3000`). That fixes it 90% of the time."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: CORS -> auth context -> useAuthFetch -> protected routes. The two-building analogy is the key mental model. CORS and token storage are the two most important teaching points — trace the token flow step by step on the whiteboard. Emphasize: CORS is a BROWSER thing, not a server thing. The 401 -> logout -> redirect flow is the most important security pattern. Common pitfalls: CORS errors (missing policy), 401 on every request (malformed Authorization header), `AllowAnyOrigin()` with `AllowCredentials()` (invalid combination), missing `replace` in Navigate (redirect loops).

---

## Week 12: API Versioning & Documentation

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Versioning Strategy Diagram |
| Code Walkthrough | 30 min | Live Code (versioning setup -> v2 controller -> Swagger -> deprecation) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 12 strategy):** This is the "professional API" week — students learn how real companies evolve APIs without breaking clients. The restaurant menu update analogy is essential. Build progressively: versioning setup -> v1 + v2 controllers -> Swagger multi-version -> deprecation headers. Emphasize: versioning is for EVOLUTION, not for fixing bad design. The deprecation headers (RFC 8594) are a nice professional touch that impresses. Students will struggle with Swagger showing duplicate endpoints — this is the most common bug.

### 1. The Hook

> [SPEAK] **Script:** "Remember when Twitter changed its API and your favorite third-party app just... stopped working? Or when Google deprecated an API you were using and gave you 6 months to migrate? API versioning is how companies change their APIs without breaking everyone's apps. It's the difference between 'we updated our API' and 'we broke your app.' You're going to learn how to evolve an API gracefully — because in the real world, APIs never stay the same."

> [SLIDE] **Slide:** Title: "How to Change Your API Without Breaking the World"  
> Left: Twitter API v1 -> v2 migration — broken apps, angry tweets. Right: Stripe API versioning — "pin to any version, works forever." Subtitle: "The difference is versioning strategy."

> [TIP] **Teaching Tip:** This hook creates stakes — students realize that API changes have real consequences for real users. Make it personal: "Raise your hand if you've ever had an app stop working after an update."

> [ENGAGE] **Gen-Z:** "API versioning is like your phone's OS update. iOS 17 doesn't delete your iOS 16 apps — they still work. Apple gives developers time to update their apps for the new version. That's versioning: old stuff keeps working while new stuff rolls out."  
> **-> Phone moment:** "Open your phone's settings -> About -> Software version. See that number? That's versioning. Your apps don't break when the OS updates because Apple maintains backward compatibility."

> [LOST] **If they're lost:** "Don't worry if you've never versioned an API. It's simpler than it sounds: you keep the old version working while you build the new one. Clients choose which version to use."

---

### 2. The Analogy

> [SPEAK] **Script:** "API versioning is like a restaurant updating its menu. The old menu had 'Burger #1' for $5. The new menu has 'Gourmet Burger' for $12. If you just swap the menus, customers who ordered 'Burger #1' get confused. Instead, you keep both menus available for a while. Regular customers can still order from the old menu. New customers get the new menu. Eventually, you phase out the old one — but you give everyone time to adjust. API versioning does the same thing for developers."

> [BOARD] **Whiteboard:** Draw the menu comparison:
> ```
> OLD MENU (v1):                  NEW MENU (v2):
> +------------------+            +------------------+
> | Burger #1   $5   |            | Gourmet Burger $12|
> | Fries       $3   |            | Truffle Fries  $6 |
> | Soda        $2   |            | Craft Soda     $4 |
> +------------------+            +------------------+
> 
> BOTH MENUS AVAILABLE -> customers choose
> Eventually: OLD MENU retires with notice
> "Burger #1 discontinued Jan 1, 2027"
> ```

> [TIP] **Teaching Tip:** The menu analogy maps perfectly: old menu = v1 API, new menu = v2 API, "both available" = parallel versions, "discontinued notice" = deprecation headers. Draw it and reference it throughout.

> [ENGAGE] **Gen-Z:** "The deprecation headers are like your Shopee item showing 'This product will be delisted on Jan 1.' You can still buy it, but you know it's going away and should find an alternative."  
> **-> Turn to your neighbor:** "In the restaurant analogy, what's the API version? What's the deprecation header? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the restaurant. Versioning = keep old API working while building new one. Deprecation = tell clients "this version is going away, use the new one." That's the whole thing."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min URL versioning -> 5 min header versioning -> 5 min deprecation strategy -> 5 min Swagger per version -> 5 min breaking vs non-breaking changes)

> [SPEAK] **Script:** "APIs change. You add fields, remove fields, change data types, rename endpoints. If you just push changes, every client that depends on the old behavior breaks. Versioning lets you introduce changes while keeping the old version working for existing clients. Let me show you the strategies."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a code example, (3) when to use it. Don't show all concepts at once.

> [TIP] **Teaching Tip:** Spend the most time on breaking vs non-breaking changes — this is the most important concept. Students need to understand: adding a field is safe, removing a field is breaking. Draw a decision tree on the whiteboard.

> [ASK] **Ask the class:** "If I add a new field `imageUrl` to the Post response, is that a breaking change?" (No — old clients ignore unknown fields.) "If I rename `title` to `name`?" (Yes — old clients expect `title` and will crash.) "If I change `id` from integer to string?" (Yes — old clients expect a number.)

> [ENGAGE] **Gen-Z:** "URL versioning is like having v1 and v2 of a game app on your phone. Both work, but v2 has new features. Header versioning is like the same app but with a settings toggle for 'new UI' — same URL, different behavior."  
> **-> Phone moment:** "Look at any API URL with a version in it. `/api/v1/users` vs `/api/v2/users`. See how the version is in the path? That's URL versioning — the most common approach."

> [Q&A] **Student Q:** "Why not just always use the latest version and force everyone to update?"
> **Short answer:** Because you can't control when clients update.
> **Real answer:** Third-party developers, mobile apps (which need app store approval), and enterprise clients all have their own release cycles. You can't force them to update on your timeline. Versioning lets YOU change your API on YOUR schedule while clients migrate at THEIR pace.
> **The hidden question:** "How long should I maintain old versions?" -> Depends on your clients. AWS maintains v1 APIs that are 15+ years old. Stripe lets you pin to any version forever.

> [Q&A] **Student Q:** "What counts as a breaking change?"
> **Short answer:** Anything that makes existing client code stop working.
> **Real answer:** Breaking: removing a field, renaming a field, changing a field type, removing an endpoint, changing an error format. Non-breaking: adding a field, adding an endpoint, adding a query parameter, adding an optional field. The rule: if existing client code still works without changes, it's non-breaking.
> **The hidden question:** "What about adding a required field?" -> That's breaking. Old clients won't send it, so their requests will fail.

> [LOST] **If they're lost:** "The simplest versioning summary: (1) URL versioning = `/api/v1/` vs `/api/v2/`. (2) Keep old version working. (3) Deprecation headers tell clients to migrate. (4) Breaking changes = new version. Non-breaking = same version. That's 90% of what you need."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min install packages -> 10 min versioning setup -> 10 min v1 + v2 controllers -> 5 min Swagger + deprecation)

> [SPEAK] **Script:** "Let's add versioning to the ASP.NET Core API. We'll install the versioning package, configure it in Program.cs, create v1 and v2 controllers, set up multi-version Swagger, and add deprecation headers. Each step builds on the last."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: install packages. Step 2: Program.cs versioning config. Step 3: PostsController (v1) + PostsV2Controller (v2). Step 4: Swagger multi-version + deprecation headers.

> [TIP] **Teaching Tip:** **Type each step live.** For the Swagger setup, emphasize: each version needs its own `SwaggerDoc` and `SwaggerEndpoint`. For deprecation, show the headers being added manually — `Deprecated = true` alone doesn't add response headers.

> [BOARD] **Whiteboard:** Draw the versioning architecture:
> ```
> /api/v1/posts -> PostsController (v1)
> /api/v2/posts -> PostsV2Controller (v2)
> 
> Swagger UI:
>   Dropdown: [Blog API v1 =>]
>             Blog API v1
>             Blog API v2
> 
> Deprecation headers (v1 responses):
>   Deprecation: true
>   Sunset: Sat, 01 Jan 2027 00:00:00 GMT
>   Link: </api/v2/posts>; rel="successor-version"
> ```

> [ENGAGE] **Gen-Z:** "Setting up API versioning is like maintaining two branches of a game. v1 is the stable release everyone plays. v2 is the beta with new features. Both run on the same server, players choose which version to use."  
> **-> Type-along:** "Install the packages first. Then configure versioning in Program.cs. Then create the v1 controller (your existing one). Then create the v2 controller with a breaking change. Then set up Swagger for both versions."

> [Q&A] **Student Q:** "Why do I need two separate controllers? Can't I put version logic in one controller?"
> **Short answer:** You can, but separate controllers are cleaner and easier to maintain.
> **Real answer:** With separate controllers, each version is isolated. V1 stays exactly as it is. V2 can have completely different logic, response shapes, and validation rules. If you put version logic in one controller, you get if/else branches for every endpoint — messy and hard to maintain. Separate controllers = clean separation.
> **The hidden question:** "What if the change is small?" -> For small changes, you can handle it in one controller. But for this class, use separate controllers to learn the pattern.

> [LOST] **If they're lost:** "Start with just the versioning setup in Program.cs. Get `/api/v1/posts` working (your existing controller). Then add the v2 controller. Then set up Swagger for both. Then add deprecation headers. One step at a time."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "AWS has APIs that are over 15 years old and still running v1 alongside v12. They never break existing clients — they add new versions and deprecate old ones with years of notice. Stripe's API versioning is so good that you can pin your integration to a specific version and it will work forever. The deprecation headers you're learning are an IETF standard (RFC 8594) used by Google, GitHub, and Microsoft."

> [SLIDE] **Slide:** AWS API versioning timeline (v1 from 2006 still running). Stripe API versioning dashboard. Stat: "AWS maintains 12+ API versions simultaneously. Stripe: pin to any version, works forever."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that versioning isn't academic — it's what every major platform does to maintain trust with developers.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have used an API that just... changed without warning?" (Some hands.) "That's why versioning exists. Companies that don't version lose developer trust. Companies that do (Stripe, AWS, GitHub) keep developers happy for years."

> [LOST] **If they're lost:** "You don't need to know AWS's entire versioning strategy. Just understand: versioning = keep old working, add new, deprecate gracefully. That's the professional standard."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min implementation -> 10 min share)

> [SPEAK] **Script:** "Add versioning to your existing ASP.NET Core API. Create a v2 with at least one breaking change, keep v1 working, configure multi-version Swagger, add deprecation headers, and write a migration guide."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Install and configure `Asp.Versioning.Mvc`
> - [ ] Create v2 of API with at least one breaking change
> - [ ] Keep v1 working alongside v2
> - [ ] Configure Swagger UI to show both versions
> - [ ] Mark v1 as deprecated with deprecation headers
> - [ ] Write migration guide (v1 -> v2 changes)
> - [ ] Test both versions in Swagger UI
> - [ ] Verify `api-supported-versions` and `api-deprecated-versions` headers

> [TIP] **Teaching Tip:** The Swagger multi-version setup (requirement 4) and deprecation headers (requirement 5) are the hardest parts. Students will struggle with `GroupNameFormat` and manually adding response headers. Circulate and help with these specifically.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the versioning setup and v2 controller, the other handles Swagger config and deprecation headers. Then combine and test both versions together."

> [LOST] **If they're lost:** "Start with installing the packages and configuring versioning in Program.cs. Get v1 working with the versioned URL. Then add v2. Then Swagger. Then deprecation. Build incrementally."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate a versioning strategy for your API, then review it for breaking vs non-breaking changes. Ask 'Is this change actually breaking?' and 'What's the migration path for existing clients?'"

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate versioning setup for ASP.NET Core" | "Decide what's a breaking change" |
> | "Is adding a field a breaking change?" | "Write my migration guide" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: suggesting deleting old version immediately, not understanding URL vs header versioning tradeoffs, generating Swagger configs that don't separate versions. Teach students to question AI's versioning decisions.

> [ENGAGE] **Gen-Z:** "AI is like a consultant who suggests big changes without understanding the cost to your users. It might say 'just delete v1' — but that breaks everyone using it. Always review: who does this affect?"

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the versioning errors and mental model traps you'll hit this week. The duplicate Swagger endpoints alone will save you from a confusing debugging session."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "Swagger shows duplicate endpoints"  |
> | API explorer grouping incorrectly    |
> | Fix: GroupNameFormat +               |
> | SubstituteApiVersionInUrl            |
> +--------------------------------------+
> +--------------------------------------+
> | "400 — API version not found"        |
> | Calling /api/posts without version   |
> | Fix: use /api/v1/posts or set default|
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The duplicate Swagger issue is like having two identical items on your Shopee cart — you can't tell which is which. GroupNameFormat separates them into v1 and v2 sections."

> [Q&A] **Student Q:** "Versioning is not a substitute for good design? So I can't use versioning to fix bad APIs?"
> **Short answer:** You can, but it's not the right tool.
> **Real answer:** If your v1 API is poorly designed, versioning just lets you ship v2 that's also poorly designed. Versioning is for EVOLUTION — adding features, improving response shapes, supporting new use cases. It's not for fixing fundamental design mistakes. If v1 is bad, the right approach is to design v2 well and migrate clients — not to keep versioning your way out of bad decisions.
> **The hidden question:** "So what if I already have a bad v1?" -> Design v2 well. Write a clear migration guide. Give clients time to move. Learn from v1's mistakes.

> [LOST] **If they're lost:** "The #1 issue: Swagger shows duplicate endpoints. Check that `GroupNameFormat = "'v'VV"` is set and `SubstituteApiVersionInUrl = true` is enabled. Each version should have its own Swagger document. That fixes 90% of Swagger versioning issues."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: versioning need -> restaurant menu analogy -> URL versioning -> v1 + v2 controllers -> multi-version Swagger -> deprecation headers. The restaurant menu analogy is the key mental model. Breaking vs non-breaking changes is the most important concept — draw the decision tree on the whiteboard. Emphasize: versioning is for evolution, not for fixing bad design. The deprecation headers (RFC 8594) are a professional touch. Common pitfalls: Swagger showing duplicate endpoints (missing GroupNameFormat), 400 errors (missing version in URL), deprecation headers not appearing (need manual header addition, not just `Deprecated = true`).

---

## Week 13: Auth Deep-Dive

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + JWT Structure Diagram |
| Code Walkthrough | 30 min | Live Code (generate -> validate -> refresh -> frontend) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 13 strategy):** This is the security deep-dive week. Students implemented basic auth in Week 11 but likely don't understand what's inside a JWT. The concert wristband analogy is essential — reference it for every JWT concept. Build progressively: decode -> generate -> validate -> refresh -> frontend rotation. The jwt.io workshop (exercise requirement 7) is the "aha" moment — students physically forge a token and watch the signature break. Emphasize: JWT payload is NOT encrypted, only signed. Refresh token rotation prevents replay attacks. Never let students hardcode secrets.

### 1. The Hook

> [SPEAK] **Script:** "You implemented JWT auth last week, but do you actually know what's inside that token? Can you read it? Can you forge one? If you can't answer yes to all three, you have a security problem. JWTs are everywhere — every time you log into Discord, GitHub, or your bank's website, a token like this is proving who you are. But tokens expire, they get stolen, and they can be forged if you don't understand how they work. This week, we go deep into what makes auth actually secure."

> [SLIDE] **Slide:** Title: "The Token You're Trusting With Everything"  
> Left: A JWT string split into its three parts with color coding. Right: jwt.io showing the decoded payload with user ID, role, and expiration. Subtitle: "Anyone can read this. The signature is all that stops forgery."

> [TIP] **Teaching Tip:** Make it visceral. Show a real JWT from their Week 11 project decoded on jwt.io. Students are always shocked that their "secret" user data is readable by anyone.

> [ENGAGE] **Gen-Z:** "A JWT is like your student ID — anyone can read the name and photo on it, but they can't forge the hologram seal. That seal is the signature. Without it, the ID is worthless."  
> **-> Phone moment:** "Open jwt.io in your browser. Paste this token. Watch it decode in real-time. See your user ID, your role, your expiration — all in plain text. That's what you've been sending with every request."

> [LOST] **If they're lost:** "Don't worry if JWTs feel abstract. By the end of today, you'll be able to read, generate, and validate them. We start from the basics."

---

### 2. The Analogy

> [SPEAK] **Script:** "A JWT is like a concert wristband. When you buy a ticket (login), the venue gives you a wristband (token) that proves you're allowed in. The wristband has info printed on it: your name, the date, which areas you can access (payload). It has a special holographic seal (signature) that proves it's real — you can't just print one at home. The wristband expires at midnight (exp claim). When it expires, you go to the ticket booth (refresh endpoint) with your old wristband to get a new one. If someone steals your wristband, they can get in — that's why you keep it safe."

> [BOARD] **Whiteboard:** Draw the wristband comparison:
> ```
> CONCERT WRISTBAND = JWT
> +---------------------------------+
> | Header: "Hologram: HS256"       | <- Algorithm used
> | Payload: "Name, VIP area, Date" | <- Claims (NOT encrypted)
> | Signature: Holographic seal     | <- Proves authenticity
> | Expiry: "Valid until midnight"  | <- exp claim
> +---------------------------------+
> 
> ACCESS TOKEN (15 min) = Day pass
> REFRESH TOKEN (7 days) = Season pass (can be revoked)
> ```

> [TIP] **Teaching Tip:** The wristband analogy maps perfectly: header = hologram type, payload = printed info, signature = holographic seal, exp = expiry time, refresh = getting a new wristband at the booth. Draw it and reference it throughout.

> [ENGAGE] **Gen-Z:** "Access token vs refresh token is like your GCash OTP vs your login session. The OTP (access token) expires in 5 minutes — short-lived, used for one transaction. Your login session (refresh token) lasts longer but can be revoked if someone reports your phone stolen."  
> **-> Turn to your neighbor:** "In the wristband analogy, what happens if someone steals your wristband? What prevents them from staying forever? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the concert. JWT = three parts: header (algorithm), payload (data), signature (proof). Payload is readable. Signature prevents tampering. That's the core."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min JWT structure -> 4 min header -> 4 min payload -> 4 min signature -> 4 min access vs refresh -> 4 min OAuth2)

> [SPEAK] **Script:** "HTTP is stateless — every request is independent. The server doesn't remember who you are between requests. JWTs solve this by giving the client a self-contained token that proves identity. The server doesn't need to store session data — it just validates the token's signature. Let me show you how each part works."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a real JWT example, (3) what happens if you get it wrong. Don't show all concepts at once.

> [TIP] **Teaching Tip:** Spend the most time on the signature and access vs refresh tokens — these are where 80% of security issues happen. For the signature, emphasize: it prevents tampering, NOT reading. For refresh tokens, emphasize: rotation prevents replay attacks.

> [ASK] **Ask the class:** "If I change the role from 'user' to 'admin' in the JWT payload, will the server accept it?" (No — the signature won't match.) "But can I READ the role from the token?" (Yes — payload is base64 encoded, not encrypted.)

> [ENGAGE] **Gen-Z:** "The JWT signature is like your GCash transaction receipt's QR code. You can read the receipt, but you can't change the amount and have the QR code still be valid. The server scans the QR (signature) to verify nothing was changed."  
> **-> Phone moment:** "Open jwt.io. Paste this token. Change the role from 'user' to 'admin'. Watch the signature turn red — 'Invalid Signature.' That's the whole point of JWTs."

> [Q&A] **Student Q:** "If the payload isn't encrypted, why not just use a session cookie?"
> **Short answer:** Sessions require server-side storage. JWTs are stateless.
> **Real answer:** With sessions, the server stores session data (in memory, database, or Redis). Every request requires a database lookup. With JWTs, the token is self-contained — the server validates the signature and extracts claims without any database query. This scales better for distributed systems. The tradeoff: JWTs can't be easily revoked (hence refresh token rotation).
> **The hidden question:** "Which is better?" -> Depends. Sessions for simple apps. JWTs for distributed APIs and mobile apps.

> [Q&A] **Student Q:** "Why do I need refresh tokens? Why not just make the access token last 7 days?"
> **Short answer:** Because if a 7-day token is stolen, the attacker has 7 days.
> **Real answer:** Short-lived access tokens (15 min) limit the damage of theft. If an access token is stolen, the attacker has 15 minutes max. Refresh tokens are stored server-side, so they CAN be revoked. If you detect suspicious activity, you revoke the refresh token and the attacker loses access on the next refresh attempt.
> **The hidden question:** "Is 15 minutes enough?" -> For most apps, yes. The frontend silently refreshes in the background — the user never notices.

> [LOST] **If they're lost:** "The simplest JWT summary: (1) Three parts: header, payload, signature. (2) Payload is readable, not encrypted. (3) Signature prevents tampering. (4) Access tokens are short-lived. (5) Refresh tokens are long-lived but revocable. That's 90% of what you need."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (8 min generate -> 8 min validate -> 8 min refresh -> 6 min frontend)

> [SPEAK] **Script:** "Let's implement JWT auth properly — from token generation to validation to refresh to frontend rotation. Each step builds on the last, and by the end you'll have a production-grade auth system."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: Generate JWT (claims, signing, expiration). Step 2: Validate JWT (Program.cs config). Step 3: Refresh token flow (rotate, revoke). Step 4: Frontend auto-refresh.

> [TIP] **Teaching Tip:** **Type each step live.** For token generation, emphasize: the secret key must NEVER be hardcoded. For validation, emphasize: the order matters — `AddAuthentication` before `UseAuthentication`. For refresh, emphasize: rotation is the key security feature — each refresh token is single-use.

> [BOARD] **Whiteboard:** Draw the auth flow:
> ```
> Login -> POST /auth/login -> { accessToken (15min), refreshToken (7 days) }
>   v
> API call -> Authorization: Bearer <accessToken> -> 200 OK
>   v
> accessToken expires -> 401 -> POST /auth/refresh -> new tokens
>   v
> Old refreshToken revoked -> replay attack prevented
>   v
> refreshToken expires or revoked -> full logout
> ```

> [ENGAGE] **Gen-Z:** "Building JWT auth is like setting up a VIP club system. Step 1: issue the wristband (generate token). Step 2: check the wristband at the door (validate). Step 3: replace expired wristbands (refresh). Step 4: kick out fake wristbands (signature check)."  
> **-> Type-along:** "Type the token generation first. Test it by decoding on jwt.io. Then the validation config. Then the refresh flow. Then the frontend. Test each step before moving on."

> [Q&A] **Student Q:** "Why does the refresh token flow revoke the old token BEFORE issuing a new one?"
> **Short answer:** To prevent replay attacks.
> **Real answer:** If you issued a new token before revoking the old one, both tokens would be valid simultaneously. An attacker who stole the old token could keep using it. By revoking first, only the new token works. If the refresh fails (old token was already used), you know it was stolen and can force a full logout.
> **The hidden question:** "What if the request fails between revoke and issue?" -> That's why you do both in a database transaction — either both succeed or both fail.

> [LOST] **If they're lost:** "Start with just token generation. Get a token, decode it on jwt.io, verify it looks right. Then add validation. Then refresh. Then frontend. One piece at a time."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "Every major platform uses JWTs. GitHub's API accepts JWTs for authentication. Auth0 and Okta (identity providers used by thousands of companies) issue JWTs. The refresh token pattern you're learning is exactly what GitHub, Google, and Amazon use to keep you logged in without requiring constant re-authentication. The 15-minute access token + 7-day refresh token split is the industry standard."

> [SLIDE] **Slide:** Auth flow diagram used by major platforms. Logos: GitHub, Google, Amazon, Auth0. Stat: "95%+ of modern web APIs use Bearer token auth with JWT."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that the auth pattern they're building is the industry standard — not a classroom invention.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have been logged out of an app after a few days of inactivity?" (Most hands.) "That's the refresh token expiring. The app couldn't silently renew your session, so it forced a re-login."

> [LOST] **If they're lost:** "You don't need to know every platform's auth system. Just understand: the pattern you're building is what every company uses. JWT + refresh tokens = production auth."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Build a complete JWT auth system with refresh tokens. Generate tokens, store refresh tokens in the database, implement token rotation, protect endpoints with `[Authorize]`, add role-based access, and build the frontend auto-refresh flow."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] JWT generation in ASP.NET Core (login returns access + refresh)
> - [ ] Store refresh tokens in DB with expiration and revocation
> - [ ] Refresh endpoint with token rotation (revoke old, issue new)
> - [ ] `[Authorize]` on protected endpoints
> - [ ] `[Authorize(Roles = "Admin")]` for role-based access
> - [ ] Frontend auto-refresh on 401
> - [ ] JWT workshop: decode at jwt.io, modify payload, verify signature breaks
> - [ ] Logout endpoint that revokes current refresh token

> [TIP] **Teaching Tip:** The token rotation (requirement 3) and frontend auto-refresh (requirement 6) are the hardest parts. Students will struggle with the revoke-then-issue pattern and the retry logic. Circulate and help with these specifically.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the backend (JWT generation, validation, refresh), the other handles the frontend (auto-refresh, 401 handling). Then combine and test the full flow together."

> [LOST] **If they're lost:** "Start with token generation. Get a valid token. Then add validation. Then the refresh endpoint. Then frontend. Save the jwt.io workshop for last — it's the fun part."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate JWT code, then audit the secret key handling, token expiration, and refresh token rotation. Ask 'Where is the secret stored?' and 'Can this token be replayed?'"

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate JWT token generation code" | "Handle my secret keys" |
> | "What are the security risks of this refresh flow?" | "Configure my signing credentials" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: hardcoded secrets, no refresh token rotation, long access token expiration (24 hours), missing issuer/audience validation. Teach students to audit AI's auth code for security issues.

> [ENGAGE] **Gen-Z:** "AI writes auth code fast but often skips the security details. It's like building a house with no locks — looks good, but anyone can walk in. Always check: where's the secret? How long does the token last? Can it be replayed?"

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the JWT errors and security traps you'll hit this week. The signature validation failure alone will save you from hours of confusion."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "401 Unauthorized — signature       |
> | validation failed"                   |
> | Signing key mismatch between         |
> | generation and validation            |
> | Fix: use the same secret in both     |
> +--------------------------------------+
> +--------------------------------------+
> | "Token valid but user not authorized"|
> | Missing or mismatched role claim     |
> | Fix: check token payload at jwt.io   |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The signature mismatch is like having two different GCash PINs — one for sending, one for receiving. They need to match, or nothing works."

> [Q&A] **Student Q:** "JWT payload is NOT encrypted? So anyone can read my user data?"
> **Short answer:** Yes. The signature prevents tampering, not reading.
> **Real answer:** Base64 encoding is NOT encryption. Anyone with the token can decode the payload. Never put passwords, SSNs, or credit cards in a JWT. The signature only proves the payload hasn't been changed — it doesn't hide it.
> **The hidden question:** "So how do I protect sensitive data?" -> Don't put it in the token. Store it server-side and only include a user ID in the JWT.

> [LOST] **If they're lost:** "The #1 issue: token works locally but fails in production. Check: (1) Is the JWT secret the same? (2) Is issuer/audience configured? (3) Is the server clock synchronized? JWT expiration is time-based — if the clock is off, valid tokens appear expired."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: JWT anatomy -> concert wristband analogy -> generate -> validate -> refresh -> frontend rotation. The jwt.io workshop is the "aha" moment — students physically forge a token and watch the signature break. Key pitfalls: hardcoded secrets, payload confusion (signed ≠ encrypted), missing refresh token rotation, server clock drift in production. Emphasize: the 15-minute access + 7-day refresh pattern is the industry standard. The refresh token replay attack prevention (rotation) is the most important security concept this week.

---

## Week 14: Testing

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Testing Pyramid Diagram |
| Code Walkthrough | 30 min | Live Code (unit -> integration -> E2E) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 14 strategy):** This is the "prove it works" week. Students resist testing because it feels like extra work. The car dashboard analogy is essential — frame tests as early warning systems, not homework. Build progressively: unit tests (fast, isolated) -> integration tests (API + service) -> E2E tests (browser automation). The testing pyramid must be drawn on the whiteboard. Emphasize: tests catch regressions, they don't prove correctness. Flaky E2E tests are the #1 frustration — teach auto-waiting over manual waits.

### 1. The Hook

> [SPEAK] **Script:** "You just spent 3 weeks building a full-stack app. You change one line of code to fix a typo and suddenly the login page is broken, the dashboard doesn't load, and the API returns 500 errors. Without tests, you won't know something is broken until a user reports it. With tests, you'll know before you even commit. Testing isn't about proving your code works — it's about catching the moment it stops working."

> [SLIDE] **Slide:** Title: "The One-Line Change That Broke Everything"  
> Left: A single-line code change (typo fix). Right: Three broken screenshots — login page error, dashboard blank, API 500. Subtitle: "Without tests, you won't know until a user complains."

> [TIP] **Teaching Tip:** Make it personal. Ask: "Raise your hand if you've changed one thing and broken something unrelated." Every student has experienced this. Testing is the solution.

> [ENGAGE] **Gen-Z:** "Testing is like your phone's battery warning. You don't wait until the phone dies to know it needs charging. The 20% warning tells you BEFORE it becomes a problem. Tests are the same — they warn you before your app breaks in production."  
> **-> Phone moment:** "Think about the last time an app update broke something you used daily. That's what happens when companies skip testing. You're about to learn how to prevent that."

> [LOST] **If they're lost:** "Don't worry if you've never written tests. They're just code that checks your code. Simple functions that say 'this should equal that.' We'll start from scratch."

---

### 2. The Analogy

> [SPEAK] **Script:** "Testing is like a car's dashboard warning lights. You don't wait until the engine smokes to know something is wrong. The oil light, check engine light, and temperature gauge tell you about problems before they become catastrophic. Unit tests are the individual sensors (oil pressure, tire pressure). Integration tests are the system checks (does the engine start when you turn the key?). E2E tests are the test drive (does the car actually work on the road?)."

> [BOARD] **Whiteboard:** Draw the testing pyramid:
> ```
>        /\
>       /  \     E2E Tests (Playwright)
>      /----\    Slow, realistic, expensive
>     /      \   Test the whole system
>    /--------\  Integration Tests (WebApplicationFactory)
>   /          \ Medium speed, test component interaction
>  /------------\ Unit Tests (xUnit)
> /              \ Fast, cheap, isolated
> -------------------------------------
> Many unit tests -> Fewer integration -> Fewest E2E
> ```

> [TIP] **Teaching Tip:** The testing pyramid is the most important visual. Draw it and reference it throughout. Emphasize: DON'T invert the pyramid. If you have 50 E2E tests and 2 unit tests, your test suite will be slow and fragile.

> [ENGAGE] **Gen-Z:** "The testing pyramid is like your skincare routine. Unit tests = daily cleanser (fast, cheap, do it every day). Integration tests = weekly exfoliant (slower, deeper check). E2E tests = monthly dermatologist visit (slowest, most thorough, but you don't need it every day)."  
> **-> Turn to your neighbor:** "In the car analogy, what's a unit test? What's an E2E test? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the car. Unit test = test one function. Integration test = test two things working together. E2E test = test the whole app like a user would. That's it."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min testing pyramid -> 5 min unit tests -> 5 min integration tests -> 5 min E2E tests -> 5 min code coverage)

> [SPEAK] **Script:** "Code changes constantly. Every change risks breaking something that used to work. Tests are automated checks that verify your code still does what it's supposed to do after every change. They catch regressions before they reach users. Let me show you the three levels."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a code example, (3) what it catches that the others miss. Don't show all concepts at once.

> [TIP] **Teaching Tip:** Spend the most time on unit tests vs integration tests — students confuse these constantly. Emphasize: unit tests have NO external dependencies (no database, no network). Integration tests DO have dependencies (real API, test database).

> [ASK] **Ask the class:** "If I test a service method that calls a database, is that a unit test or integration test?" (Integration — it has an external dependency.) "If I test a method that does math on its inputs?" (Unit — no external dependencies.)

> [ENGAGE] **Gen-Z:** "Code coverage is like your phone's storage meter. 100% coverage doesn't mean your phone is organized — it just means every byte is accounted for. You can have 100% coverage with useless tests, just like you can have 100% storage with useless files."  
> **-> Phone moment:** "Open your browser's DevTools. Every test you write is like adding a checkpoint in your code. When you change something, the checkpoints tell you if anything broke."

> [Q&A] **Student Q:** "Why write tests if I can just manually test the app?"
> **Short answer:** Manual testing doesn't scale.
> **Real answer:** Every time you change code, you'd need to manually test every feature. With 10 features, that's 10 manual checks. With 100 features, that's 100 manual checks. Tests automate this — run them in seconds, every time you change code. They also catch regressions you didn't think to check for.
> **The hidden question:** "Isn't writing tests slower than just coding?" -> Short term, yes. Long term, tests save hours of debugging.

> [Q&A] **Student Q:** "What's the difference between `[Fact]` and `[Theory]`?"
> **Short answer:** `[Fact]` is one test case. `[Theory]` is many test cases with different inputs.
> **Real answer:** `[Fact]` tests one specific scenario. `[Theory]` + `[InlineData]` runs the same test logic with multiple inputs — one test method, many cases. Use `[Theory]` when you want to test the same behavior with different data (empty string, null, valid input, etc.).
> **The hidden question:** "When should I use which?" -> `[Fact]` for specific scenarios. `[Theory]` for parameterized edge cases.

> [LOST] **If they're lost:** "The simplest testing summary: (1) Unit tests = test one function, no dependencies. (2) Integration tests = test components together. (3) E2E tests = test the whole app. (4) Coverage = how much code runs during tests. That's 90% of what you need."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (10 min unit tests -> 10 min integration tests -> 10 min E2E tests)

> [SPEAK] **Script:** "Let's write tests for the blog API — all three levels. We'll start with unit tests for the service layer, then integration tests for the API endpoints, then E2E tests for the full user flow. Each level catches different bugs."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: Unit test (Arrange-Act-Assert pattern). Step 2: Integration test (WebApplicationFactory). Step 3: E2E test (Playwright browser automation).

> [TIP] **Teaching Tip:** **Type each test live.** For unit tests, emphasize the Arrange-Act-Assert pattern — it's the universal test structure. For integration tests, show that `WebApplicationFactory` starts the actual API in memory — no separate server needed. For E2E, emphasize: use auto-waiting, never manual sleeps.

> [BOARD] **Whiteboard:** Draw the Arrange-Act-Assert pattern:
> ```
> ARRANGE: Set up the test data and dependencies
> ACT:     Run the code being tested
> ASSERT:  Verify the outcome
> 
> Example:
> Arrange: service + valid request
> Act:     result = service.CreateAsync(request)
> Assert:  result.Title == "Test Post"
> ```

> [ENGAGE] **Gen-Z:** "Writing tests is like setting up checkpoints in a video game. Arrange = set up the level. Act = play through it. Assert = verify you beat the boss. If the assertion fails, you know exactly where things went wrong."  
> **-> Type-along:** "Type the unit test first. Run it — watch it pass. Then break the code intentionally and watch it fail. Then the integration test. Then E2E. See each test pass before moving on."

> [Q&A] **Student Q:** "Why does the integration test use `WebApplicationFactory<Program>`?"
> **Short answer:** It starts your actual API in memory — no separate server needed.
> **Real answer:** `WebApplicationFactory` creates an in-memory test server that runs your real API with real routing, real middleware, real DI. It's not a mock — it's your actual app. The difference is you can swap out the database for a test database. This catches real bugs that unit tests miss (misconfigured DI, wrong query, serialization issues).
> **The hidden question:** "Is this slower than a unit test?" -> Yes, but it catches different bugs. Both are needed.

> [LOST] **If they're lost:** "Start with just one unit test. Get it passing. Then add a second. Then the integration test. Then E2E. Don't try to write all tests at once."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "At Google, every code change requires passing tests before it can be merged. At Amazon, services without adequate test coverage cannot be deployed to production. The testing pyramid is not academic theory — it's how every major engineering team ships code safely. Playwright is used by Microsoft, Adobe, and thousands of companies for E2E testing. xUnit is the standard testing framework for .NET, used in every .NET shop."

> [SLIDE] **Slide:** Stats: "Google: 150M+ tests run daily. Amazon: zero-deployment without tests." Logos: Google, Amazon, Microsoft, Adobe. Show a real CI pipeline with test results.

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that testing isn't academic — it's what every professional team does before shipping code.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have used an app that clearly wasn't tested?" (All hands.) "That's what happens when teams skip testing. You're learning how to NOT be that team."

> [LOST] **If they're lost:** "You don't need to know Google's testing infrastructure. Just understand: tests are mandatory in every professional codebase. Learning them now gives you an edge."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Add a test suite to your capstone application. Write unit tests for your service layer, integration tests for your API endpoints, and an E2E test for the login-to-dashboard flow. Set up code coverage reporting."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] 5+ unit tests for service layer (happy paths + error cases)
> - [ ] Use `[Theory]` for parameterized tests
> - [ ] 3+ integration tests for API endpoints (GET, POST, error responses)
> - [ ] 1+ E2E test: login -> dashboard flow
> - [ ] Code coverage report (aim for 70%+ backend)
> - [ ] All tests pass
> - [ ] CORS configuration test
> - [ ] JWT auth protection test

> [TIP] **Teaching Tip:** The E2E test (requirement 3) and JWT auth protection test (requirement 7) are the hardest parts. Students will struggle with Playwright setup and testing authenticated endpoints. Circulate and help with these specifically.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles unit + integration tests, the other handles E2E tests. Then combine and run the full suite together. It's like a collab — each person owns their test level."

> [LOST] **If they're lost:** "Start with one unit test. Get it passing. Then add more unit tests. Then the integration test. Then E2E. Don't try to write everything at once."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate tests for a specific function, then review the assertions. Ask 'Does this test actually verify the right thing?' and 'What edge case is this missing?'"

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate unit tests for this function" | "Write my test assertions" |
> | "What edge cases am I missing?" | "Fix my flaky E2E test" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: testing implementation details instead of behavior, no test database for integration tests, hardcoded waits in E2E tests, only happy paths (no error cases). Teach students to audit AI's test quality.

> [ENGAGE] **Gen-Z:** "AI writes tests fast but often tests the wrong thing. It's like checking if your phone turns on but not if it can make calls. Always review: does this test verify the RIGHT behavior?"

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the testing errors and mental model traps you'll hit this week. The flaky E2E test alone will save you from hours of frustration."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "Test host process exited            |
> | unexpectedly"                        |
> | DI issue or null reference in code   |
> | Fix: run with debugger to find line  |
> +--------------------------------------+
> +--------------------------------------+
> | "E2E test passes sometimes, fails    |
> | other times"                         |
> | Timing issue — element not ready     |
> | Fix: use auto-waiting, not manual    |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The flaky test is like your WiFi — sometimes it works, sometimes it doesn't. Usually it's a timing issue: the test clicks before the page loads. Use `await expect(locator).toBeVisible()` instead of `waitForTimeout`."

> [Q&A] **Student Q:** "100% coverage doesn't mean bug-free? Then what's the point?"
> **Short answer:** Coverage measures which lines run, not which behaviors are tested.
> **Real answer:** You can have 100% coverage with one test that asserts the wrong thing. Coverage tells you "this line was executed" — not "this line was tested correctly." It's a floor, not a ceiling. Low coverage means you definitely have untested code. High coverage means you MIGHT have tested everything.
> **The hidden question:** "So what's a good coverage target?" -> 70-80% is realistic. 100% is usually not worth the effort.

> [LOST] **If they're lost:** "The #1 issue: test isolation. If Test A creates data and Test B expects clean data, Test B fails. Each test must set up its own data and clean up after itself. Use a fresh database or in-memory store for each test."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: testing need -> car dashboard analogy -> testing pyramid -> unit -> integration -> E2E. The Arrange-Act-Assert pattern is the universal test structure — draw it on the whiteboard. Key pitfalls: inverting the testing pyramid (too many E2E, too few unit), flaky E2E tests (timing issues), testing implementation details instead of behavior, 100% coverage fallacy. Emphasize: tests catch regressions, they don't prove correctness. The "break the code intentionally" moment is powerful — students see tests catch bugs they introduced.

---

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

## Week 16: Capstone Final

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Architecture Diagram |
| Code Walkthrough | 30 min | Architecture Review + Oral Defense Prep |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Capstone Presentations |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 16 strategy):** This is the culmination — everything from 15 weeks comes together. The restaurant grand opening analogy is essential. This week is NOT about teaching new concepts — it's about students presenting, defending, and reflecting. The oral defense prep is the most valuable activity: run mock Q&A sessions. Emphasize: a working simple app beats a broken complex one. The demo disaster prep (video backup, screenshots) is critical — Murphy's Law applies. Students must be able to explain every AI-generated section.

### 1. The Hook

> [SPEAK] **Script:** "This is it. The moment where everything you've learned over 15 weeks comes together into one product. You're not just building an app — you're building a portfolio piece that proves you can ship a production-grade full-stack application. When you walk into a job interview and they ask 'what have you built?', this is your answer. Make it count."

> [SLIDE] **Slide:** Title: "15 Weeks. One Product. Your Portfolio."  
> Timeline graphic: Week 1 (JS) -> Week 6 (React) -> Week 10 (ASP.NET) -> Week 13 (Auth) -> Week 14 (Testing) -> Week 15 (CI/CD) -> Week 16 (Capstone). Each week is a building block leading to the final product.

> [TIP] **Teaching Tip:** Make it emotional. Remind them how far they've come: "Week 1 you were replacing `var` with `const`. Today you're deploying a full-stack app with JWT auth, tests, and CI/CD. That's a transformation."

> [ENGAGE] **Gen-Z:** "Your capstone is like your college thesis but actually useful. Instead of a paper nobody reads, you're building a real app that runs on the internet. When you apply for jobs, this is what you show — not your grades, your PRODUCT."  
> **-> Phone moment:** "Open your deployed app on your phone right now. That's YOUR app, running on the internet, accessible from anywhere. Sixteen weeks ago, you couldn't have built that."

> [LOST] **If they're lost:** "Don't panic if your capstone isn't perfect. A working simple app is better than a broken complex one. Focus on what works, document what doesn't, and be honest about tradeoffs."

---

### 2. The Analogy

> [SPEAK] **Script:** "The capstone is like a restaurant's grand opening. For 15 weeks, you've been learning individual skills: cooking (components), plating (styling), inventory management (state), customer service (APIs), health inspection (testing), and opening procedures (deployment). Now it's opening night. Every skill needs to work together. The food needs to be good, the service needs to be smooth, and the health inspector needs to approve. One weak link and the whole experience falls apart."

> [BOARD] **Whiteboard:** Draw the restaurant comparison:
> ```
> 15 WEEKS OF PREP -> GRAND OPENING
> 
> Cooking (Components)     -> Your React UI
> Plating (Styling)        -> Your CSS/Tailwind
> Inventory (State)        -> useState, Context, Auth
> Customer Service (APIs)  -> ASP.NET Core endpoints
> Health Inspection (Test) -> xUnit, Playwright tests
> Opening Procedures (CD)  -> GitHub Actions pipeline
> 
> GRAND OPENING = Capstone Defense
> - Does the app work? (functional)
> - Is the code clean? (quality)
> - Is it deployed? (production-ready)
> - Can you explain your choices? (engineering)
> ```

> [TIP] **Teaching Tip:** The restaurant analogy maps perfectly: each skill learned = a restaurant competency, grand opening = capstone defense. Draw it and reference it throughout. Emphasize: the defense is NOT about having the most features — it's about having a complete, working product.

> [ENGAGE] **Gen-Z:** "The oral defense is like your thesis defense but for your CODE. Instead of defending your research methodology, you're defending why you chose JWT over cookies, React over Vue, and why your architecture makes sense."  
> **-> Turn to your neighbor:** "In the restaurant analogy, what's the 'health inspection'? What's the 'grand opening'? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the restaurant. Capstone = show your working app, explain your choices, answer questions. That's it. You've been building toward this for 15 weeks."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min architecture decisions -> 5 min security posture -> 5 min test strategy -> 5 min deployment -> 5 min tradeoff articulation)

> [SPEAK] **Script:** "Individual skills are useless without the ability to combine them into a complete product. The capstone forces you to make architecture decisions, handle tradeoffs, and present your work — exactly what you'll do in a real job. Let me show you what examiners look for."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) an example answer, (3) what a bad answer looks like. Don't show all concepts at once.

> [TIP] **Teaching Tip:** Spend the most time on tradeoff articulation — this is what separates engineers from coders. Run mock Q&A: "Why did you choose X?" "What would you do differently?" Students need to practice defending their choices out loud.

> [ASK] **Ask the class:** "If an examiner asks 'Why JWT over cookie-based auth?', what's a good answer?" (JWT is stateless, scales horizontally, tradeoff is revocation difficulty — handled with refresh token rotation.) "What's a bad answer?" ('Because the tutorial used JWT.' — no reasoning.)

> [ENGAGE] **Gen-Z:** "Tradeoff articulation is like explaining why you chose your college. 'I chose UP because it's the best' is weak. 'I chose UP because the CS program has industry partnerships, the tradeoff is the commute, but the networking opportunities outweigh it' — that's engineering thinking."  
> **-> Phone moment:** "Look at your deployed app. For every technology you used, ask yourself: why this one? What was the alternative? What did I give up? If you can't answer, figure it out before the defense."

> [Q&A] **Student Q:** "What if my app doesn't work during the demo?"
> **Short answer:** Have a backup plan.
> **Real answer:** Record a video of your demo beforehand. Take screenshots of key features. Have a local fallback ready. Test the live deployment right before your presentation. Know how to restart your services if they crash. The best presenters prepare for disaster.
> **The hidden question:** "Will I lose points?" -> Not if you have a backup. Examiners understand that live demos fail. What they DO penalize is having no backup.

> [Q&A] **Student Q:** "What if I used AI for most of my code?"
> **Short answer:** That's fine — if you can explain it.
> **Real answer:** In the real world, engineers use AI constantly. The difference is they understand what the AI generates. If you can trace through every AI-generated section line by line and explain why it works, you're fine. If you can't, rewrite it. The oral defense will expose gaps in understanding.
> **The hidden question:** "How much AI is too much?" -> There's no limit on AI usage. The limit is your ability to explain and defend every line.

> [LOST] **If they're lost:** "The simplest capstone summary: (1) Deployed app that works. (2) Clean code with tests. (3) CI/CD pipeline. (4) Can explain every choice. That's what examiners look for. Focus on these four things."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (15 min architecture review -> 15 min oral defense mock Q&A)

> [SPEAK] **Script:** "Let's review what a production-grade capstone looks like — the full architecture from frontend to database. Then we'll practice the oral defense with real questions examiners will ask."

> [SLIDE] **Slide:** Show the full architecture diagram. Then show the mock Q&A format: examiner question -> good answer -> why it's good.

> [TIP] **Teaching Tip:** **Run the mock Q&A live.** Pick 3-4 students at random and ask them real defense questions. This is the most valuable preparation they'll get. Give constructive feedback on their answers.

> [BOARD] **Whiteboard:** Draw the full-stack architecture:
> ```
> Frontend (React) -> HTTP + JSON + Bearer token -> Backend (ASP.NET Core)
>   +- Pages/Routes                                              +- Controllers
>   +- Components                                                +- Services
>   +- Hooks (useFetch, useAuth)                                 +- Models
>   +- Context (Auth, State)                                     +- Auth (JWT)
> 
> Backend -> Entity Framework Core -> Database (SQL Server)
>   +- Swagger/OpenAPI docs                          +- Migrations
>   +- [ApiController] validation                    +- Seeding
>   +- CORS policy                                   +- Tables
> ```

> [ENGAGE] **Gen-Z:** "Reviewing your architecture is like checking your outfit before a job interview. Every piece needs to make sense together. Your frontend talks to your backend, your backend talks to your database, your CI/CD deploys everything. If one piece is missing or broken, the whole thing falls apart."  
> **-> Practice:** "Turn to your neighbor. One is the examiner, one is the student. Ask: 'Why did you choose this architecture?' Switch roles after 2 minutes."

> [Q&A] **Student Q:** "How do I explain my architecture if I don't fully understand it?"
> **Short answer:** You need to understand it before the defense.
> **Real answer:** Go through every file in your project. Trace the data flow: user clicks button -> React component sends request -> API controller receives it -> service processes it -> database stores it -> response returns -> UI updates. If you can trace this flow for every feature, you can explain your architecture.
> **The hidden question:** "What if I copied code I don't understand?" -> Rewrite it. You can't defend what you don't understand.

> [LOST] **If they're lost:** "Focus on the data flow. For every feature in your app, trace: frontend -> API -> database -> response -> UI. If you can explain this for each feature, you can handle any defense question."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "This capstone defense mirrors a real architecture review at any tech company. When an engineer proposes a new system, they present the architecture, justify their choices, discuss tradeoffs, and answer questions from senior engineers. The format is identical: demo the product, explain the architecture, defend your decisions. The only difference is that in a real company, the stakes are higher and the audience is your team instead of your professor."

> [SLIDE] **Slide:** Architecture review format at Google, Amazon, Microsoft. Show a real architecture diagram from a tech blog. Stat: "Every FAANG company uses this exact format for technical reviews."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that the capstone defense isn't academic — it's the same format used in real engineering roles.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you think this defense is just a school requirement?" (Some hands.) "It's actually practice for your first job. Every tech company makes you present and defend your work. This is your rehearsal."

> [LOST] **If they're lost:** "You don't need to know Google's review process. Just understand: the skills you're practicing today — presenting, defending, explaining tradeoffs — are the same skills you'll use in every engineering job."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min prep -> 40 min presentations -> 10 min feedback)

> [SPEAK] **Script:** "Present your production-grade full-stack capstone application. Demo the live app, walk through your architecture, and defend every decision. This is your moment to show what you've built."

> [SLIDE] **Slide:** Deliverables checklist:
> - [ ] Deployed full-stack app — live URL
> - [ ] Source code — clean repo with README
> - [ ] Documentation — architecture diagram, API docs, setup instructions
> - [ ] CI/CD pipeline — automated build, test, deploy
> - [ ] Test suite — unit, integration, E2E + coverage report
> - [ ] 10-minute demo — live walkthrough
> - [ ] 5-minute Q&A — defend architectural decisions

> [TIP] **Teaching Tip:** The oral defense Q&A (deliverable 7) is where students shine or struggle. Run a structured format: 10-min demo -> 5-min Q&A -> 2-min feedback. Keep time strictly.

> [ENGAGE] **Gen-Z:** **-> Presentations:** "This is your showcase. Treat it like a product launch. Show what works, be honest about what doesn't, and own your decisions. The best presentations are confident and honest."

> [LOST] **If they're lost:** "If your live demo fails, switch to your video backup immediately. Don't panic. Don't try to fix it live. Examiners respect preparation more than perfection."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "Use AI for boilerplate (component scaffolding, API endpoint templates, test setup). Use it to review your architecture ('what security issues do you see in this design?'). Use it to generate your README structure. But the architecture decisions, the security posture, and the tradeoff analysis must be YOURS."

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Review my architecture for security issues" | "Make my architectural decisions" |
> | "Generate README structure" | "Write my tradeoff analysis" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: overly complex architectures, patterns students don't understand, security vulnerabilities in AI-generated code, "best practice" suggestions that don't fit the use case. Emphasize: if AI chose it and you can't explain why, you'll fail the Q&A.

> [ENGAGE] **Gen-Z:** "AI is your co-pilot, not your pilot. It can suggest routes, but YOU need to know where you're going and why. In the defense, examiners will ask 'why did you choose this?' — if your answer is 'AI suggested it,' that's not enough."

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the capstone pitfalls and disaster scenarios you need to prepare for. The demo disaster alone will save your presentation."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "App works locally but breaks in     |
> | production"                          |
> | Check: env vars, DB connection,      |
> | CORS, HTTPS, file paths              |
> +--------------------------------------+
> +--------------------------------------+
> | "It works but I can't explain why"   |
> | AI-generated code you don't          |
> | understand                           |
> | Fix: trace through every section     |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The demo disaster is like your presentation file not opening during class. Always have a backup: video recording, screenshots, local fallback. Murphy's Law says if something CAN break during a demo, it WILL."

> [Q&A] **Student Q:** "More features = better project, right?"
> **Short answer:** No. Working simple > broken complex.
> **Real answer:** A CRUD app with auth, tests, CI/CD, and a clean deployment is worth more than a social network with 20 features that crashes. Examiners evaluate: does it work? is it well-built? can you explain it? Not: how many features does it have?
> **The hidden question:** "So I shouldn't add more features?" -> Only if they work. A finished simple app beats an unfinished complex one every time.

> [LOST] **If they're lost:** "The #1 capstone issue: 'it works but I can't explain why.' Before your defense, go through every AI-generated section and trace through it line by line. If you can't explain it, rewrite it. The oral defense WILL expose gaps."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: 15-week journey -> restaurant grand opening analogy -> architecture review -> mock Q&A -> live presentations. The restaurant analogy is the key mental model. Key pitfalls: demo disasters (no backup), AI-generated code students can't explain, feature bloat over working simplicity, inability to articulate tradeoffs. Emphasize: the oral defense mirrors real architecture reviews at tech companies. The mock Q&A practice is the most valuable preparation activity. A working simple app with auth, tests, and CI/CD beats a broken complex app every time. The video backup for the demo is non-negotiable — prepare for Murphy's Law.

---

## Appendix: AI / Vibe-Coding Integration Guide

### Phase-by-Phase Policy

| Phase | Policy | Rationale |
|-------|--------|-----------|
| **Prelim (Weeks 1-4)** | Full AI access. Focus: "compare AI-generated TS types with hand-written ones" | Students have L1 foundations. AI as comparison tool, not crutch. |
| **Midterm (Weeks 5-8)** | AI allowed. Mandatory: 1-paragraph README per AI-generated component explaining what it does and what was changed | Build the audit muscle. Students must understand before accepting. |
| **PreFinals (Weeks 9-12)** | AI generates OpenAPI spec -> students review/correct/critique. AI generates client SDK -> students test and find bugs | AI as generator, student as quality gate. |
| **Finals (Weeks 13-16)** | Full AI. Assessment: system behavior, security, performance, and ability to articulate "AI suggested X, but I chose Y because..." | Mirror industry reality. Architects who leverage AI critically. |

### Core Principles

- **Prompt literacy** — teach chain-of-thought, persona prompting, context stuffing
- **Audit the output** — assume AI got something wrong; your job is to find it
- **Explain tradeoffs** — every AI suggestion comes with a decision ("I accepted this because...", "I rejected this and rewrote as...")
- **Ethics and attribution** — document what AI generated vs. what you wrote

### Cross-Cutting Practices

| Practice | Integration |
|----------|-------------|
| **Git** | Prelim: PR workflow, code review. Finals: CI/CD pipeline |
| **Kanban** | Every term starts with sprint planning. Week 15: release sprint |
| **Debugging** | Dedicated labs (Weeks 2, 7) + AI-assisted diagnostic culture |
| **Code Review** | PR-based workflow. Week 11 peer review. AI-assisted code review |
| **Deployment** | Week 15 CI/CD. Week 16 production deployment |
