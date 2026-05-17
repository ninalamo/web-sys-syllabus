## Week 6: React Fundamentals

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + JSX Rules |
| Code Walkthrough | 30 min | Live Code (Components + Props) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** Students will find JSX weird ("Why is HTML in my JS?"). Remind them of last week's string templates. React just makes that pattern official and safer.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "Last week we built our own clunky, string-based UI engine. Today, we throw that away and use the tool that powers Netflix, Instagram, and Airbnb. Welcome to React."

> [BOARD] **Whiteboard Analogy:** Custom HTML Tags
> *   You know `<h1>` makes a big header.
> *   You know `<button>` makes a button.
> *   React lets you create `<UserProfile />`. It looks like HTML, but it's a custom, reusable piece of code that you defined.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: JSX (Not HTML!)
> **[SPEAK] Discussion:** "JSX looks exactly like HTML, but it is JavaScript. Under the hood, Babel transforms `<h1>Hi</h1>` into `React.createElement('h1', null, 'Hi')`."
>
> **[CODE] Example:**
> ```jsx
> // The curly braces let you "escape" back into JavaScript
> const name = "Nina";
> return <h1>Hello, {name}</h1>;
> ```
>
> **[TIP] Instructor Tip:** Emphasize the exact rules of JSX: 1. Must return a single parent element. 2. `class` becomes `className`. 3. Tags must be closed (`<img />`).

#### Topic B: Components
> **[SPEAK] Discussion:** "A React component is just a JavaScript function that returns JSX. That's it. It's not magic."
>
> **[CODE] Example:**
> ```jsx
> function Button() {
>     return <button className="btn">Click</button>;
> }
> ```
>
> **[TIP] Instructor Tip:** Warn them: The function name MUST be capitalized. If they write `function button()`, React will assume it's a standard HTML tag and break.

#### Topic C: Props (Properties)
> **[SPEAK] Discussion:** "How do we make components reusable? We pass them data. Props are like parameters for a function, or attributes on an HTML tag."
>
> **[CODE] Example:**
> ```jsx
> // Passing Props
> <UserCard name="Alice" age={25} />
> 
> // Receiving Props (Destructured)
> function UserCard({ name, age }) { ... }
> ```
>
> **[TIP] Gen-Z Hook:** Props flow down like a waterfall from parent to child. The child cannot push water back up the waterfall. Props are read-only.

#### Topic D: State (`useState`)
> **[SPEAK] Discussion:** "If props are read-only, how does a component change? State. State is the component's personal memory. When state changes, React automatically re-renders the component."
>
> **[CODE] Example:**
> ```jsx
> const [count, setCount] = useState(0);
> return <button onClick={() => setCount(count + 1)}>{count}</button>;
> ```
>
> **[TIP] Instructor Tip:** Drill this: NEVER mutate state directly (`count = 5`). You must use the setter function (`setCount(5)`) or React won't know it needs to re-render.

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's build a React app using Vite. We'll make a reusable `ProfileCard` component and give it some state."

*   **Step 1: Scaffolding**
    *   *Action:* Run `npm create vite@latest my-react-app -- --template react`. Show the file structure.
*   **Step 2: Building the Component & Props**
    *   *Action:* Create a `ProfileCard.jsx`. Give it `name` and `role` props. Render it three times in `App.jsx` with different data.
*   **Step 3: Adding State**
    *   *Action:* Add a "Like" button to the `ProfileCard` using `useState`. Show how clicking one card's like button doesn't affect the other cards (State is isolated per instance).

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "The hardest thing to learn in React isn't the syntax; it's 'Thinking in React'. Junior devs try to reach into the DOM to grab an input value using `document.getElementById`. In React, this is an anti-pattern. You bind the input to a piece of State, and you read the State. If you are touching the DOM directly in React, you are fighting the framework, and you will lose."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "Why is my useState not updating immediately?" Not Allowed: "Build this React component for me."
*   **Common Error 1:** `Adjacent JSX elements must be wrapped in an enclosing tag.` -> You tried to return two elements without wrapping them in a `<div>` or `<> </>` (fragment).
*   **Common Error 2:** State seems one step behind. -> State updates are asynchronous. If you `setCount(count + 1)` and immediately `console.log(count)`, it will show the old value.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Build a `Counter` component with `+` and `-` buttons. Render 3 Counters on the screen. Add a Prop `step` so the first counter counts by 1, the second by 5, and the third by 10.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I know the 3 rules of JSX (return 1 element, className, self-close tags).
> > - [ ] I can create a functional component.
> > - [ ] I can pass props from a Parent to a Child.
> > - [ ] I can initialize and update state using the `useState` hook.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The State Toggler"
> > 1. Create a `LightSwitch` component.
> > 2. It should have a piece of state called `isOn` (boolean).
> > 3. **The Catch:** Based on the state, the component should completely change its CSS class (e.g., `<div className={isOn ? 'bg-yellow' : 'bg-dark'}>`). The button text must also change between "Turn Off" and "Turn On".

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** A blank Vite React app.
> - **Solution Repo:** A completed `ProfileCard` and `LightSwitch` showing proper prop destructuring and boolean state toggling.
