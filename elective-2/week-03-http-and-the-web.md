## Week 3: HTTP & The Web

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Polls |
| Code Walkthrough | 30 min | Live Demo (DevTools + C# code) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** This is the first week moving beyond syntax into how the web actually works. Use DevTools heavily; seeing real HTTP traffic makes the abstract concrete.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "When you tapped that Like button on your crush's post, about 47 things happened in under 200ms. Your phone sent a secret message to a server, the server updated a DB, and sent back a response. That's HTTP."

> [BOARD] **Whiteboard Analogy:** The Digital Mail System
> *   **The Envelope (HTTP Request):** You need an address (URL), a method (GET/POST), and headers (return address).
> *   **The Letter (Body):** The actual data you are sending (like login credentials).
> *   **The Reply (HTTP Response):** The server sends back a status code (200 OK) and the requested data.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: The Request-Response Cycle
> **[SPEAK] Discussion:** "HTTP is a conversation. The client (browser/phone) asks a question. The server answers. The server can NEVER start the conversation."
>
> **[VISUAL] Example:**
> Draw: `Client ---(Request)---> Server` then `Server ---(Response)---> Client`.
>
> **[TIP] Instructor Tip:** Emphasize this because students often think the server can magically push data to the client (which requires WebSockets, not standard HTTP).

#### Topic B: HTTP Methods (Verbs)
> **[SPEAK] Discussion:** "The URL tells the server WHERE to go. The method tells the server WHAT to do."
>
> **[CODE] Example:**
> *   **GET:** Read only. (No body allowed).
> *   **POST:** Create new. (Contains a body).
> *   **PUT/PATCH:** Update existing.
> *   **DELETE:** Destroy.
>
> **[TIP] Gen-Z Hook:** GET is browsing the menu. POST is ordering the food. DELETE is canceling the order.

#### Topic C: Status Codes
> **[SPEAK] Discussion:** "Status codes are the server's mood. 200s are happy. 400s mean you messed up. 500s mean the server messed up."
>
> **[CODE] Example:**
> *   **200 OK:** Everything worked.
> *   **400 Bad Request:** You sent bad JSON or missing data.
> *   **404 Not Found:** The URL doesn't exist.
> *   **500 Internal Error:** The server crashed.
>
> **[TIP] Instructor Tip:** Drill 404 vs 500. 404 is a routing problem. 500 is a code logic problem.

#### Topic D: Statelessness
> **[SPEAK] Discussion:** "HTTP has amnesia. Every request is completely isolated. If you log in on request 1, request 2 has no idea who you are."
>
> **[VISUAL] Example:**
> "Hi, I'm Nina." -> "Hello Nina."
> (Next request) "What's my balance?" -> "Who are you?"
>
> **[TIP] Instructor Tip:** This sets up the concept of Cookies/Tokens for later in the semester. 

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's see HTTP in action. We aren't going to look at C# first. We're going to look at the browser."

*   **Step 1: The DevTools X-Ray**
    *   *Action:* Open Chrome, hit F12, go to the Network Tab. Refresh google.com. Show the class the 50+ requests. Click on one and show the Headers and Response.
*   **Step 2: C# `HttpClient`**
    *   *Action:* Write a simple C# Console App that makes a GET request to a public API.
      ```csharp
      using var client = new HttpClient();
      var response = await client.GetAsync("https://api.github.com/users/octocat");
      response.EnsureSuccessStatusCode();
      var body = await response.Content.ReadAsStringAsync();
      Console.WriteLine(body);
      ```

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "In an interview, someone will ask you 'What is the difference between a 401 and a 403?' 90% of candidates freeze. Here is the industry cheat code: 401 means 'I don't know who you are (Authentication failed).' 403 means 'I know exactly who you are, but you are not allowed to do this (Authorization failed).' Memorize that, and you'll pass the technical screen."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "Explain the User-Agent HTTP header." Not Allowed: "Write my HTTP trace report for me."
*   **Common Error 1:** `403 Forbidden` on GitHub API. -> You didn't supply a `User-Agent` header, so GitHub blocked your script thinking it was a malicious bot.
*   **Common Error 2:** `CORS Error`. -> Not a bug. The browser actively blocked your request because the server didn't explicitly allow your domain to talk to it.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** The DevTools Detective. Visit 3 different websites (e.g., Netflix, GitHub, a local news site). Open the Network tab and trace the first page load. Identify HTML requests, API calls, and find at least one 404 or 304 code.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I can open the Network Tab and inspect an HTTP request.
> > - [ ] I can explain the difference between GET and POST.
> > - [ ] I know what 200, 404, and 500 status codes mean.
> > - [ ] I understand that HTTP is stateless.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Postman Challenge"
> > Instead of writing C# code, download Postman (or Insomnia).
> > 1. Make a GET request to JSONPlaceholder (`/users`).
> > 2. Make a POST request to JSONPlaceholder (`/posts`) with a JSON body containing a title and body.
> > 3. **The Catch:** Take a screenshot of the 201 Created response, proving you successfully sent the JSON body with the correct `Content-Type` header.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** No starter repo needed today. Focus on Chrome DevTools.
> - **Solution Repo:** A C# script showing how to inject headers into `HttpClient` to bypass the GitHub 403 error.
