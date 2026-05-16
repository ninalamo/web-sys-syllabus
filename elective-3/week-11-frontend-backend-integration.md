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

