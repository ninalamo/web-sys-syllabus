## Week 9: API Design Philosophy

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + The REST Contract |
| Code Walkthrough | 30 min | Live Diagramming (Postman) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** We are shifting from Frontend to Backend. Students will want to dive into C# immediately. STOP them. Architecture comes before code. Today is about *how* we design URLs and JSON payloads, regardless of the language.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "If you build an API with URLs like `/getTheUsers` and `/updateUserById`, you will be laughed out of a job interview. An API is a professional contract between the frontend and the backend. Today, we learn the rules of REST—the language of the internet."

> [BOARD] **Whiteboard Analogy:** The Vending Machine (The Contract)
> *   **The Button (Endpoint):** A4 (Chips). It's clearly labeled.
> *   **The Coin Slot (Payload):** You must insert exactly 50 pesos. If you insert a leaf, it rejects it (400 Bad Request).
> *   **The Output (Response):** It dispenses the chips (200 OK) or shows an 'Out of Stock' light (404 Not Found).
> *   If the vending machine changes how it works internally, you don't care, as long as A4 still gives you chips. That's a strong API contract.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: RESTful Principles (Nouns vs Verbs)
> **[SPEAK] Discussion:** "In REST, URLs represent Resources (Nouns). The HTTP Method represents the Action (Verb). We never put verbs in the URL."
>
> **[CODE] Example:**
> ```text
> BAD:  GET /getAllUsers
> BAD:  POST /createNewUser
> 
> GOOD: GET /users      (Returns a list)
> GOOD: POST /users     (Creates one)
> GOOD: GET /users/5    (Returns user #5)
> GOOD: DELETE /users/5 (Deletes user #5)
> ```
>
> **[TIP] Instructor Tip:** Drill this hard. "The URL is the 'Thing'. The HTTP Method is what you 'Do' to the Thing."

#### Topic B: JSON Standardization
> **[SPEAK] Discussion:** "When you send data back to the frontend, it needs to be predictable. Don't nest objects 10 layers deep. Keep it flat, clean, and consistent."
>
> **[CODE] Example:**
> ```json
> // A predictable API response
> {
>     "data": { "id": 5, "name": "Nina" },
>     "success": true,
>     "message": null
> }
> ```
>
> **[TIP] Gen-Z Hook:** Good JSON is like a well-organized Notion page. Everything has a predictable place. Bad JSON is like a messy bedroom.

#### Topic C: The API Contract (Status Codes)
> **[SPEAK] Discussion:** "The frontend relies on Status Codes to know if it should show a success toast, a red error message, or redirect to a login screen. If your API throws an error but returns a 200 OK, you have broken the contract."
>
> **[VISUAL] Example:**
> *   `200 OK`: Normal success.
> *   `201 Created`: Success for a POST.
> *   `400 Bad Request`: Frontend sent bad validation data.
> *   `401 Unauthorized`: No token / Not logged in.
>
> **[TIP] Instructor Tip:** Emphasize that returning `500` means the backend developer failed to catch an exception.

#### Topic D: Pagination & Filtering
> **[SPEAK] Discussion:** "Never return the entire database. If a table has 10 million rows, `GET /users` will crash your server. You must use query parameters for pagination."
>
> **[CODE] Example:**
> ```text
> GET /users?page=2&limit=50&sort=name_asc
> ```
>
> **[TIP] Instructor Tip:** Explain that query parameters `?key=value` are used for filtering, sorting, and pagination, while path parameters `/users/5` are used to identify a specific resource.

---

### 3. Code Walkthrough / Live Diagramming Blueprint

> [SPEAK] **Script:** "We aren't opening Visual Studio today. We are opening Postman and a Whiteboard to design the architecture for a Blog API."

*   **Step 1: Designing the Endpoints**
    *   *Action:* Ask the class: "How do we get all posts?" (`GET /posts`). "How do we get comments for post #2?" (`GET /posts/2/comments`). Write the map on the board.
*   **Step 2: Inspecting a Real API**
    *   *Action:* Open Postman. Make a GET request to `https://jsonplaceholder.typicode.com/posts`. Show the clean JSON array.
*   **Step 3: Breaking the Rules**
    *   *Action:* Discuss why an endpoint like `POST /posts/2/delete` is horrible architecture (it mixes POST and DELETE, and puts a verb in the URL).

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "Frontend and Backend developers at companies will physically argue over API design. The Frontend wants the exact shape of data they need for their React component. The Backend wants to keep the data normalized and generic. A good API is a compromise. If you build an API endpoint that only works for one specific UI button, you failed. Build APIs around resources, not screens."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "Is this URL design RESTful?" Not Allowed: "Design my entire database schema."
*   **Common Error 1:** Designing `GET /users?id=5` instead of `GET /users/5`. -> Query parameters are for filtering a list. Path parameters are for identifying a single specific resource.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** You are building an API for a Library system. Write a Markdown document defining the exact HTTP Method, URL, and expected JSON Body for the following actions: 1) Add a new book. 2) List all books. 3) Checkout a specific book. 4) Delete a book.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I can design RESTful URLs using Nouns instead of Verbs.
> > - [ ] I understand when to use GET vs POST vs PUT vs DELETE.
> > - [ ] I know why we return specific HTTP status codes.
> > - [ ] I can use query parameters to design pagination (`?page=1`).

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The API Architect"
> > Write an API Specification Document for a simple "Twitter Clone" (Tweets and Users).
> > 1. Define 5 endpoints (Methods + URLs).
> > 2. Write out a sample JSON response for `GET /tweets`.
> > 3. **The Catch:** Your endpoints must be perfectly RESTful. You must design an endpoint to "Like" a tweet without using the word "Like" as a verb in the URL. (Hint: Creating a "like" resource).

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** None. This is a design/architecture week.
> - **Solution Repo:** A completed API Specification Markdown document showing the perfect RESTful routes for the Library exercise.
