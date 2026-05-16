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

