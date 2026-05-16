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

