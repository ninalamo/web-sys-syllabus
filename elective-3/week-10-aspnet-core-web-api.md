## Week 10: ASP.NET Core Web API

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + API Attributes |
| Code Walkthrough | 30 min | Live Code (Postman & API Setup) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** Students know MVC (returning Views). Now they need to unlearn the "View" part. APIs don't care about HTML. They are strictly data machines.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "If you build an MVC app with Razor views, it only works in a web browser. But what if your boss asks you to build a mobile app for iOS? You'd have to rewrite the entire application. Web APIs solve this: they serve raw data, so a website, an iPhone app, and a smart fridge can all use the exact same backend."

> [BOARD] **Whiteboard Analogy:** The Kitchen (Revisited)
> *   **MVC:** The kitchen cooks the food AND plates it beautifully (HTML) before handing it to the waiter.
> *   **Web API:** The kitchen just hands the waiter a box of raw ingredients (JSON). The customer (React/Mobile App) decides how to plate it.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: Web API vs MVC (`ControllerBase`)
> **[SPEAK] Discussion:** "In an API, we don't inherit from `Controller`. We inherit from `ControllerBase`. Why? Because `ControllerBase` strips out all the heavy HTML/View rendering engine that we don't need."
>
> **[CODE] Example:**
> ```csharp
> // MVC
> public class WebController : Controller { return View(); }
> 
> // API
> public class ApiController : ControllerBase { return Ok(data); }
> ```
>
> **[TIP] Instructor Tip:** Emphasize the word `Ok()`. We return HTTP status codes explicitly now.

#### Topic B: The `[ApiController]` Attribute
> **[SPEAK] Discussion:** "Adding `[ApiController]` to the top of your class gives it superpowers. It automatically reads data from the request body without you asking, and it automatically returns a `400 Bad Request` if `ModelState` is invalid."
>
> **[CODE] Example:**
> ```csharp
> [ApiController]
> [Route("api/[controller]")]
> public class UsersController : ControllerBase { ... }
> ```
>
> **[TIP] Gen-Z Hook:** `[ApiController]` is the automatic spellcheck for your API. It rejects bad requests before they even hit your actual code.

#### Topic C: CORS (Cross-Origin Resource Sharing)
> **[SPEAK] Discussion:** "If your React app is on `localhost:3000` and your API is on `localhost:5000`, the browser will BLOCK the connection. This is CORS. It is a browser security feature to stop malicious websites from secretly calling APIs."
>
> **[VISUAL] Example:**
> Show the massive red CORS error in Chrome DevTools.
>
> **[TIP] Instructor Tip:** Teach them to love the CORS error. It means the browser is protecting them. They just have to configure the server to explicitly allow `localhost:3000`.

#### Topic D: Asynchronous APIs
> **[SPEAK] Discussion:** "APIs must handle thousands of requests per second. Every database call MUST be async to free up server threads."
>
> **[CODE] Example:**
> ```csharp
> [HttpGet]
> public async Task<IActionResult> GetUsers() {
>     return Ok(await _db.Users.ToListAsync());
> }
> ```

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's build a blank API and test it with Postman. No browsers allowed."

*   **Step 1: Scaffolding the API**
    *   *Action:* Create a new ASP.NET Core Web API project. Delete the WeatherForecast controller. Create a `ProductsController`.
*   **Step 2: Attribute Routing**
    *   *Action:* Setup `[Route("api/products")]`. Create a `[HttpGet]` and a `[HttpGet("{id}")]`.
*   **Step 3: Postman Testing**
    *   *Action:* Open Postman. Hit the GET endpoint. Then create a `[HttpPost]` endpoint and use Postman to send a JSON body to it. Show the 201 Created response.
*   **Step 4: CORS Configuration**
    *   *Action:* Show the 3 lines of code in `Program.cs` required to enable CORS for a specific origin.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "In the real world, you never expose your actual database models to the API. If you have a `User` model with a `PasswordHash` property, and you do `return Ok(_db.Users)`, you just leaked everyone's password to the internet. Always, ALWAYS map your database models to a DTO (Data Transfer Object) before returning it from an API."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "How do I configure CORS in ASP.NET Core 8?" Not Allowed: "Write all my API endpoints."
*   **Common Error 1:** 404 Not Found in Postman. -> You forgot `[HttpGet]` on the method, or the route name doesn't match the URL you typed.
*   **Common Error 2:** 415 Unsupported Media Type. -> You tried to POST data to the API, but you forgot to set the Postman body type to `raw` -> `JSON`.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Build a "Todo API". No frontend. Just the backend. Create endpoints for GET all, GET by ID, POST (create), and DELETE. Use an in-memory list or EF Core InMemory database. Test all 4 endpoints successfully using Postman.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I know the difference between `Controller` and `ControllerBase`.
> > - [ ] I can explain what CORS is and why it exists.
> > - [ ] I can use Postman to test GET and POST endpoints.
> > - [ ] I understand the purpose of the `[ApiController]` attribute.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Secure DTO"
> > 1. Create an API for a `Customer` database (Id, Name, Email, CreditCardNumber).
> > 2. **The Catch:** The `GET /api/customers` endpoint must return a list of customers, but the `CreditCardNumber` must NOT be in the JSON response. Create a `CustomerResponseDto` to strip out the sensitive data before returning it.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** None. Scaffold a blank API live.
> - **Solution Repo:** A fully functional Todo API with Postman collection exports so students can see exactly how to test it.
