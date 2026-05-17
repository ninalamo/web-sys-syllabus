## Week 11: Consuming APIs with HttpClient

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Async/Await |
| Code Walkthrough | 30 min | Live Code (IHttpClientFactory) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** We touched on `HttpClient` in Week 3, but today we formalize it in an MVC Controller. Focus heavily on JSON deserialization — mapping random API text into strict C# classes.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "Not every app owns its data. If you build a travel site, you don't build a global weather database. You ask someone else's server for the weather. Today, our C# backend acts as a client, requesting data from the outside world."

> [BOARD] **Whiteboard Analogy:** The Subcontractor
> *   **Browser:** The client ordering a house.
> *   **Your Controller:** The General Contractor.
> *   **External API:** The Electrician.
> *   Your controller takes the order, pauses its work, calls the electrician (API) to get the wiring done, and then finishes the house (HTML) to give back to the client.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: `IHttpClientFactory`
> **[SPEAK] Discussion:** "You might see tutorials use `new HttpClient()`. Never do this. It leaves network sockets open and will crash a production server. We inject a factory that safely manages connections for us."
>
> **[CODE] Example:**
> ```csharp
> // In Program.cs
> builder.Services.AddHttpClient();
> 
> // In Controller Constructor
> public MyController(IHttpClientFactory factory) {
>     _client = factory.CreateClient();
> }
> ```
>
> **[TIP] Instructor Tip:** Connect this back to Week 2 (Dependency Injection). This is the ultimate proof of why DI is powerful.

#### Topic B: JSON Deserialization
> **[SPEAK] Discussion:** "APIs return JSON text. C# wants Objects. We use a Deserializer to map the text to our C# class."
>
> **[CODE] Example:**
> ```csharp
> var jsonText = await response.Content.ReadAsStringAsync();
> var user = JsonSerializer.Deserialize<ApiUser>(jsonText, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
> ```
>
> **[TIP] Instructor Tip:** Emphasize the `PropertyNameCaseInsensitive = true`. Without it, JSON `firstName` won't map to C# `FirstName` and everything will be null.

#### Topic C: Async/Await in Controllers
> **[SPEAK] Discussion:** "When you make a network request, it might take 2 seconds. A Web Server shouldn't freeze for 2 seconds. `async/await` frees up the server to handle other users while waiting for the API to reply."
>
> **[CODE] Example:**
> ```csharp
> public async Task<IActionResult> FetchData() {
>     var res = await _client.GetAsync("https://api.com/data");
>     return View();
> }
> ```
>
> **[TIP] Gen-Z Hook:** Async is like putting someone on hold. The server puts User A on hold while the API fetches, answers User B's quick question, then goes back to User A.

#### Topic D: Data Transfer Objects (DTOs)
> **[SPEAK] Discussion:** "Don't reuse your Database models for external APIs. An API might send you 50 fields, but you only care about 3. Create a DTO class specifically to catch the exact API data you want."

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's build a page that shows a random Chuck Norris joke every time you refresh."

*   **Step 1: The Setup**
    *   *Action:* Register `AddHttpClient()` in `Program.cs`. Inject it into a `JokeController`.
*   **Step 2: The DTO**
    *   *Action:* Look at the JSON from `api.chucknorris.io`. Create a C# `JokeDto` class with a `value` string property.
*   **Step 3: The Fetch and Map**
    *   *Action:* Write the `async` method. Call `GetAsync`. Ensure success status code. Deserialize the JSON string into the `JokeDto`.
*   **Step 4: The View**
    *   *Action:* Pass the `JokeDto.value` to the Razor View and render it in an `<h1>`.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "Third-party APIs will go down. If you build an app that completely crashes because the Weather API is offline, your architecture is weak. Always wrap external HTTP calls in a `try/catch` block. If it fails, log the error and show the user a graceful fallback message ('Weather data temporarily unavailable') instead of throwing a massive 500 Server Error."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "Generate a C# class based on this JSON payload." Not Allowed: "Write the controller logic to fetch and display."
*   **Common Error 1:** All properties in the DTO are null. -> The API JSON uses camelCase (`firstName`) but your C# properties are PascalCase (`FirstName`) and you forgot `PropertyNameCaseInsensitive = true`.
*   **Common Error 2:** `SocketException: No such host is known.` -> You misspelled the API URL or your laptop isn't connected to the internet.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Build a "Pokemon Viewer". Create a form where a user types a Pokemon ID (e.g., 25). Submit it to a controller. Use `HttpClient` to fetch `https://pokeapi.co/api/v2/pokemon/25`. Deserialize the `name` and `weight`, and show them on the View.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I know why we use `IHttpClientFactory` instead of `new HttpClient()`.
> > - [ ] I can write an `async Task<IActionResult>` controller method.
> > - [ ] I can use `JsonSerializer.Deserialize` to convert JSON to a C# object.
> > - [ ] I understand the purpose of a DTO class.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The GitHub Profiler"
> > 1. Create a Search Page.
> > 2. The user types a GitHub username and hits search.
> > 3. **The Catch:** You must fetch from `https://api.github.com/users/{username}`. You MUST add a `User-Agent` header to the `HttpClient` request (GitHub requires this). Deserialize their Avatar URL, Name, and Public Repos count, and display it in a nice Bootstrap card.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** An MVC app with an empty `JokeController`.
> - **Solution Repo:** A fully robust API consumer demonstrating `IHttpClientFactory`, `try/catch` error handling, and JSON deserialization.
