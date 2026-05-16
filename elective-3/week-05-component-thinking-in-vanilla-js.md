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

