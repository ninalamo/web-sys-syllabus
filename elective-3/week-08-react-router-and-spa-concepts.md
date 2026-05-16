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

