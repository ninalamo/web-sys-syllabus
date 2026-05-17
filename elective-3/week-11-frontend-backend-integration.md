## Week 11: Frontend/Backend Integration

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Port Architecture |
| Code Walkthrough | 30 min | Live Code (React calling ASP.NET) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** This is the "Aha!" moment of the entire semester. The moment a student clicks a button in React and sees the database update via C#, they finally understand Full Stack development.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "For 10 weeks, you've been building half a bridge. The frontend team built the UI. The backend team built the API. Today, we connect the bridge. But they are speaking two different languages (JS and C#) and running in two different cities (Port 5173 and Port 5000)."

> [BOARD] **Whiteboard Analogy:** The Translator
> *   **React (Frontend):** Speaks JavaScript. Runs on Port 5173.
> *   **ASP.NET (Backend):** Speaks C#. Runs on Port 5000/5001.
> *   **HTTP / JSON:** The universal translator in the middle. The only way they can talk is by sending JSON text back and forth.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: The Two-Server Mental Model
> **[SPEAK] Discussion:** "You are no longer running one application. You are running two completely separate servers simultaneously on your laptop. If the backend server isn't running, the frontend will fail."
>
> **[VISUAL] Example:**
> Draw two completely separate boxes on the board. One says `npm run dev`. The other says `dotnet run`.

#### Topic B: Environment Variables (`.env`)
> **[SPEAK] Discussion:** "Never hardcode `https://localhost:5000/api` into your React components. When you deploy to production, the API won't be on localhost. We use `.env` files to store URLs that change depending on where the app is running."
>
> **[CODE] Example:**
> ```text
> # .env file
> VITE_API_URL=https://localhost:5000/api
> ```
> ```jsx
> // Inside React
> fetch(`${import.meta.env.VITE_API_URL}/users`)
> ```
>
> **[TIP] Instructor Tip:** Explain that the `VITE_` prefix is strictly required, or Vite will hide the variable for security reasons.

#### Topic C: The Vite Proxy (Bypassing CORS locally)
> **[SPEAK] Discussion:** "Instead of configuring CORS on the backend for local development, we can tell the Vite frontend server to act as a proxy. When React calls `/api`, Vite silently forwards it to port 5000."
>
> **[CODE] Example:**
> ```javascript
> // vite.config.js
> server: {
>   proxy: { '/api': 'https://localhost:5000' }
> }
> ```
>
> **[TIP] Gen-Z Hook:** A proxy is like having a friend pass a note for you in class. The backend thinks the request came from the proxy (friend), not from React (you).

#### Topic D: Bulletproof Fetching
> **[SPEAK] Discussion:** "A request to the backend takes time. Your UI must handle the 3 states of a network request: Loading, Success, and Error."
>
> **[VISUAL] Example:**
> Show a React component that displays a spinner while fetching, the data on success, and a red error box if the backend is turned off.

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "I have the API running in one window, and React in the other. Let's make them talk."

*   **Step 1: The Setup**
    *   *Action:* Start the ASP.NET API from last week. Start a blank Vite React app. Show them running side-by-side.
*   **Step 2: The Proxy**
    *   *Action:* Configure `vite.config.js` to proxy `/api` requests to the ASP.NET server.
*   **Step 3: The Fetch**
    *   *Action:* In React, use `useEffect` to fetch `/api/todos`. Map over the response and render an HTML list.
*   **Step 4: The POST**
    *   *Action:* Create a simple form in React. Hook it up to a `handleSubmit` function that uses `fetch` with `method: 'POST'` and `JSON.stringify(data)` to send data to the backend. Show it updating the database.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "The most common bug when integrating frontend and backend is a spelling mistake. The backend sends `firstName`, but the frontend looks for `FirstName`. JSON is case-sensitive! In the industry, we use tools like Swagger or TypeScript generators to automatically create our frontend interfaces based on the backend code so we never make a spelling mistake again."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "How do I configure proxy in vite config?" Not Allowed: "Write the fetch wrapper for my entire app."
*   **Common Error 1:** `Failed to fetch` -> The ASP.NET server isn't running. You forgot to hit 'Run' in Visual Studio.
*   **Common Error 2:** `SyntaxError: Unexpected token < in JSON` -> The backend threw an error page (HTML) instead of JSON, and React tried to parse HTML as JSON. Check the network tab to see the backend error.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Connect the dots. Take the "Todo API" from last week, and build a simple React frontend for it. You must be able to view a list of Todos, and add a new Todo that persists to the backend database.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I know how to run a frontend and backend server simultaneously.
> > - [ ] I can configure a proxy in `vite.config.js`.
> > - [ ] I can use `fetch` to GET data from my own API and display it in React.
> > - [ ] I can use `fetch` to POST data from a React form to my API.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Full Stack Delete"
> > 1. Start with the Todo integration built in class.
> > 2. Add a "Delete" button next to every Todo item in React.
> > 3. **The Catch:** When clicked, it must send a `DELETE` HTTP request to the API. If the API returns a success status code (200/204), the React UI must update automatically to remove the item from the screen *without* refreshing the page.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** Two folders: An API and a React App, but they don't talk to each other yet.
> - **Solution Repo:** A fully integrated Full Stack app with Vite Proxy configured, Environment variables set, and full CRUD operations working.
