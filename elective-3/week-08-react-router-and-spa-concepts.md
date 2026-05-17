## Week 8: React Router & SPA Concepts

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Routing Map |
| Code Walkthrough | 30 min | Live Code (BrowserRouter setup) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** Students are used to creating `about.html` and `contact.html`. The concept of a Single Page Application (where there is literally only one `index.html` file) requires a major mental shift.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "Notice how Spotify plays music uninterrupted even when you click around different pages? Notice how YouTube doesn't flash a white screen when you go to a channel? That's because you never actually left the page. The application is tricking you."

> [BOARD] **Whiteboard Analogy:** The Stage Play
> *   **Multi-Page App (Old Web):** Between every scene, the curtains close, the audience waits in the dark, stagehands change the set, the curtains open. (Full page reload).
> *   **Single Page App (React):** The curtains stay open. The stage rotates instantly. The music never stops playing. The URL changes, but the browser never reloads.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: The Single Page Application (SPA)
> **[SPEAK] Discussion:** "In a React app, the server gives the browser ONE blank HTML file (`index.html`) and one massive JavaScript file. React looks at the URL (e.g., `/about`) and decides which Component to render. It's an illusion."
>
> **[VISUAL] Example:**
> Draw: `URL changes -> React intercepts it -> React unmounts <Home /> -> React mounts <About />`.
>
> **[TIP] Instructor Tip:** Emphasize that routing in React happens 100% in the browser. The server is not involved.

#### Topic B: React Router Setup
> **[SPEAK] Discussion:** "React doesn't have routing built-in. We use the industry standard library: React Router. It acts as the traffic cop for our components."
>
> **[CODE] Example:**
> ```jsx
> const router = createBrowserRouter([
>   { path: "/", element: <Home /> },
>   { path: "/about", element: <About /> }
> ]);
> // Inside index.js
> <RouterProvider router={router} />
> ```
>
> **[TIP] Instructor Tip:** Ensure you are teaching the modern React Router v6.4+ (`createBrowserRouter` data API), not the old v5 `<Switch>` syntax.

#### Topic C: `<Link>` vs `<a>`
> **[SPEAK] Discussion:** "If you use a standard HTML `<a href="/about">` tag, the browser will force a full refresh. You will lose all your React State. You must use React Router's `<Link>` component instead."
>
> **[CODE] Example:**
> ```jsx
> // BAD (Causes refresh, kills state)
> <a href="/login">Login</a>
> 
> // GOOD (Instant SPA transition)
> <Link to="/login">Login</Link>
> ```
>
> **[TIP] Gen-Z Hook:** Using an `<a>` tag in React is like closing the app and reopening it just to switch tabs. It's a massive vibe kill.

#### Topic D: URL Parameters
> **[SPEAK] Discussion:** "We don't create a separate route for all 10 million users on Facebook. We create one route `/users/:id` and grab the ID from the URL using a hook."
>
> **[CODE] Example:**
> ```jsx
> // Route: path="/users/:id"
> function UserProfile() {
>     const { id } = useParams();
>     return <h1>Loading profile for user {id}...</h1>;
> }
> ```
>
> **[TIP] Instructor Tip:** Explain that the `:` in the path is what tells React Router "this is a variable, not a literal word."

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's build a store with a Home page, a Product Catalog, and individual Product Details pages."

*   **Step 1: The Router Config**
    *   *Action:* Install `react-router-dom`. Set up `createBrowserRouter` in `main.jsx`. Create empty `<Home>` and `<Products>` components.
*   **Step 2: Navigation**
    *   *Action:* Create a `<Navbar>` component with `<Link>` tags. Add an overarching Layout route so the Navbar stays persistent across all pages.
*   **Step 3: Dynamic Parameters**
    *   *Action:* Create a route for `/products/:id`. Inside the `<ProductDetail>` component, use `useParams()` to grab the ID and display it on the screen.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "SPAs are amazing for user experience, but historically terrible for SEO (Search Engine Optimization). If Google's bot visits a basic React app, it just sees an empty `<div id="root"></div>`. This is why companies like Netflix use Next.js—a React framework that pre-renders the HTML on the server. Learning React Router is the stepping stone to understanding Next.js."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "How do I redirect a user programmatically?" Not Allowed: "Write all my application routes."
*   **Common Error 1:** `useNavigate() may be used only in the context of a <Router> component.` -> You tried to use a routing hook outside of the Router Provider.
*   **Common Error 2:** The page goes completely blank. -> You probably created an infinite redirect loop, or didn't provide a matching path so React rendered absolutely nothing.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Build a 3-page "Portfolio" SPA: Home, Projects, and Contact. Use a shared Layout so the Navigation bar is always visible. Ensure that moving between pages is instant (no white flashes).

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I can explain what a Single Page Application is.
> > - [ ] I know how to configure `createBrowserRouter`.
> > - [ ] I can explain why `<Link>` must be used instead of `<a>`.
> > - [ ] I can extract dynamic data from the URL using `useParams()`.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Fake E-Commerce Site"
> > 1. Create a React app with React Router.
> > 2. The `/products` page should list 3 clickable product names (e.g., Laptop, Phone, Tablet).
> > 3. Clicking one should navigate to `/products/:id`.
> > 4. **The Catch:** On the Product Detail page, use the `useParams()` hook to read the ID, and then conditionally render the name and a fake price for that specific item based on the ID.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** A Vite React app with 3 components (`Home`, `About`, `Profile`) but no routing installed.
> - **Solution Repo:** The app wired up with React Router v6, showcasing Layouts, `<Outlet>`, and `<Link>` navigation.
