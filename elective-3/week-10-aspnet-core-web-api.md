## Week 10: ASP.NET Core Web API

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Controller Architecture Diagram |
| Code Walkthrough | 30 min | Live Code (model -> controller -> Program.cs) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 10 strategy):** This is the "contract to code" week. Students take their Week 9 OpenAPI spec and implement it in C#. The drive-through restaurant analogy is essential — controller = order taker, service = kitchen, database = pantry. Build progressively: model -> controller -> Program.cs. Emphasize: `[ApiController]` does automatic validation, `CreatedAtAction` returns 201 with Location header, and Swagger is auto-generated from attributes. Don't let students skip the service layer — controllers should be thin.

### 1. The Hook

> [SPEAK] **Script:** "You designed your API contract last week. Now it's time to actually build it. ASP.NET Core is what runs the backend of Stack Overflow, Microsoft's own services, and thousands of enterprise applications. It's fast, it's type-safe (C#), and it has built-in support for everything you need: routing, validation, documentation, and dependency injection. You're going to take your OpenAPI spec and turn it into a working API that your React frontend can actually talk to."

> [SLIDE] **Slide:** Title: "From Spec to Working API"  
> Left: Week 9's OpenAPI YAML spec. Right: Running Swagger UI with green checkmarks. Arrow between them: "This week."

> [TIP] **Teaching Tip:** Make the connection explicit: "Everything you designed last week becomes real code this week." Show the OpenAPI spec next to the Swagger UI to create visual continuity.

> [ENGAGE] **Gen-Z:** "Last week you designed the blueprint. This week you're building the house. ASP.NET Core is like your construction crew — it handles the heavy lifting (routing, validation, serialization) so you can focus on the business logic."  
> **-> Phone moment:** "Open a browser and go to any API's Swagger UI. See how you can test every endpoint right there? That's what you're building this week — your OWN Swagger UI."

> [LOST] **If they're lost:** "Don't worry if C# is new. The concepts are the same as JavaScript — classes, functions, async/await. The syntax is different but the logic is familiar."

---

### 2. The Analogy

> [SPEAK] **Script:** "Building a Web API is like setting up a drive-through restaurant. The OpenAPI spec is your menu board. The controller is the order taker — it receives requests, validates them, and passes them to the kitchen. The service layer is the kitchen — it does the actual work (cooking = business logic). The database is the pantry — where ingredients (data) are stored. `[ApiController]` is the health inspector — it enforces rules automatically (model validation, consistent error responses)."

> [BOARD] **Whiteboard:** Draw the drive-through comparison:
> ```
> CUSTOMER (Frontend/React)
>   v sends HTTP request
> ORDER TAKER (Controller)
>   v validates order, passes to kitchen
> KITCHEN (Service Layer)
>   v business logic, data processing
> PANTRY (Database)
>   v stores/retrieves data
>   ^
> CUSTOMER gets response (JSON)
> 
> [ApiController] = Health Inspector
>   -> auto-validates, returns consistent errors
> ```

> [TIP] **Teaching Tip:** The drive-through analogy maps perfectly: controller = order taker (thin, just routes), service = kitchen (does the work), database = pantry (stores data). Emphasize: the controller should NOT do the cooking — that's the service layer's job.

> [ENGAGE] **Gen-Z:** "The controller is like your Grab driver — it takes your order and delivers the response. But it doesn't cook the food. The service layer is the restaurant kitchen. If your driver starts cooking, something's wrong."  
> **-> Turn to your neighbor:** "In the drive-through analogy, what happens if the order taker also tries to cook? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the analogy. Controller = receives request, calls service, returns response. Service = does the actual work. Database = stores data. Three layers, each does one thing."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min controllers -> 5 min [ApiController] -> 5 min attribute routing -> 4 min content negotiation -> 3 min ProblemDetails -> 3 min Swagger)

> [SPEAK] **Script:** "You need a backend that can receive HTTP requests, process them, and return responses. ASP.NET Core provides a structured way to do this with controllers, routing, model binding, and built-in features like validation and documentation. Let me show you how each piece works."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a code snippet, (3) what happens without it. Don't show all concepts at once.

> [TIP] **Teaching Tip:** Spend the most time on `[ApiController]` and attribute routing — these are the biggest differences from other frameworks. Emphasize: `[ApiController]` automatically returns 400 for validation failures. Students love this because it's free validation.

> [ASK] **Ask the class:** "What does `[Route("api/[controller]")]` mean?" (`[controller]` is replaced with the class name minus "Controller", so `PostsController` -> `/api/posts`.) "What does `[HttpGet("{id}")]` add to the route?" (`/api/posts/{id}`.)

> [ENGAGE] **Gen-Z:** "Content negotiation is like ordering at Jollibee — you say what you want, and they give it to you in the format you asked for. `Accept: application/json` -> JSON response. `Accept: application/xml` -> XML response. ASP.NET Core handles the translation automatically."  
> **-> Phone moment:** "Open VS Code. Create a new ASP.NET Core project. Run `dotnet run`. Go to `/swagger` in your browser. See all your endpoints listed? That's Swagger auto-generated from your controller attributes."

> [Q&A] **Student Q:** "Why do I need a service layer? Can't I just put the logic in the controller?"
> **Short answer:** You can, but it makes your code hard to test and maintain.
> **Real answer:** Controllers should be thin — they receive requests and return responses. Business logic belongs in services. If logic is in controllers, you can't unit test it without mocking HTTP. Services can be tested in isolation. Also, if multiple controllers need the same logic, you'd duplicate it. Services are reusable.
> **The hidden question:** "Is this really necessary for a small project?" -> It's a habit. Build it now, and it scales naturally.

> [Q&A] **Student Q:** "What's `ProblemDetails` and why should I use it?"
> **Short answer:** It's the standard error response format for HTTP APIs.
> **Real answer:** Instead of returning random error shapes (`{ error: "not found" }` vs `{ message: "404" }`), `ProblemDetails` gives a consistent structure: `type`, `title`, `status`, `detail`, `instance`. Every error looks the same. Frontend developers know exactly how to parse it. It's an IETF standard (RFC 7807).
> **The hidden question:** "Do I have to use it?" -> No, but it's best practice and ASP.NET Core supports it out of the box.

> [LOST] **If they're lost:** "The simplest ASP.NET Core summary: (1) Controllers handle requests. (2) `[ApiController]` auto-validates. (3) Attribute routing maps URLs to methods. (4) Services do the work. (5) Swagger auto-generates docs. That's 90% of what you need."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min model -> 15 min controller -> 10 min Program.cs + Swagger)

> [SPEAK] **Script:** "Let's implement the blog API from Week 9's spec. We'll start with the model class, then the controller with all CRUD endpoints, then Program.cs with Swagger setup. Each step builds on the last."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: Post model with validation attributes. Step 2: PostsController with GET, POST, DELETE. Step 3: Program.cs with DI and Swagger.

> [TIP] **Teaching Tip:** **Type each step live.** For the controller, emphasize the progression: `GetAll` -> `GetById` -> `Create` -> `Delete`. Point out each return type: `Ok()` = 200, `CreatedAtAction()` = 201, `NotFound()` = 404, `NoContent()` = 204.

> [BOARD] **Whiteboard:** Draw the request flow:
> ```
> GET /api/posts/42
>   v
> PostsController.GetById(42)
>   v
> _postService.GetByIdAsync(42)
>   v
> Returns Post or null
>   v
> if null -> NotFound() (404)
> if post -> return post (200 + JSON)
> ```

> [ENGAGE] **Gen-Z:** "Building a controller is like assembling a Jollibee order station. Each endpoint is a different order type: GET = 'give me the menu', POST = 'I want to order', DELETE = 'cancel my order'. Each one has a specific response."  
> **-> Type-along:** "Type the model first. Then the controller — one endpoint at a time. Test each one in Swagger before moving to the next. Don't write all four endpoints and then test."

> [Q&A] **Student Q:** "Why does `CreatedAtAction` need `nameof(GetById)` and `new { id = post.Id }`?"
> **Short answer:** It generates the Location header URL by referencing another action.
> **Real answer:** `CreatedAtAction` needs to know which action handles the GET for the new resource (so it can build the URL). `nameof(GetById)` tells it "use the GetById method." `new { id = post.Id }` provides the route parameter values. The result is a Location header like `/api/posts/42`. This is the RESTful way to tell the client where the new resource lives.
> **The hidden question:** "Can I just return the ID?" -> You could, but the Location header is the HTTP standard for resource creation.

> [LOST] **If they're lost:** "Start with just the model and the `GetAll` endpoint. Get it working in Swagger. Then add `GetById`. Then `Create`. Then `Delete`. One endpoint at a time."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "ASP.NET Core is one of the fastest web frameworks in existence. In the TechEmpower benchmarks, it consistently ranks in the top 5 for raw request throughput. Companies like Stack Overflow, Microsoft, and GoDaddy run ASP.NET Core in production handling millions of requests per second. The `[ApiController]` attribute and `ProblemDetails` response format are the same patterns used in Microsoft's own internal APIs."

> [SLIDE] **Slide:** TechEmpower benchmark chart showing ASP.NET Core in top 5. Logos: Stack Overflow, Microsoft, GoDaddy. Stat: "ASP.NET Core handles 2+ million requests/second on commodity hardware."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that ASP.NET Core isn't academic — it's one of the fastest web frameworks in the world.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you thought .NET was old and slow?" (Some hands.) "ASP.NET Core is actually faster than Node.js, Python, and most other frameworks. It's the same .NET that runs Xbox Live and Microsoft Azure."

> [LOST] **If they're lost:** "You don't need to know the benchmarks. Just understand: ASP.NET Core is fast, type-safe, and used by major companies. It's a solid choice for production APIs."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min implementation -> 10 min share)

> [SPEAK] **Script:** "Implement your Week 9 OpenAPI spec as an ASP.NET Core Web API. Create model classes, controllers with proper HTTP methods, set up Swagger, and test every endpoint."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] `dotnet new webapi` — create project
> - [ ] Model classes for all schemas (Product, Category, Order, etc.)
> - [ ] Controllers for each resource with proper HTTP methods
> - [ ] `[ApiController]` and attribute routing on all controllers
> - [ ] `[ProducesResponseType]` attributes for documentation
> - [ ] Swagger UI setup
> - [ ] In-memory data store (`List<T>`) for now
> - [ ] Test every endpoint in Swagger UI
> - [ ] Verify model validation returns proper 400 errors

> [TIP] **Teaching Tip:** The `[ProducesResponseType]` attributes (requirement 5) and model validation testing (requirement 9) are where students struggle. Circulate and help with the `[Required]` attributes and testing with invalid data in Swagger.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the models and controllers, the other handles Program.cs and Swagger setup. Then combine and test together. It's like a collab — each person owns their layer."

> [LOST] **If they're lost:** "Start with `dotnet new webapi`. Get the default template running. Then add your first model. Then your first controller with one endpoint. Test it in Swagger. Then add more endpoints. Build incrementally."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate controller code from your OpenAPI spec, then verify every endpoint matches the contract. Ask 'Does this endpoint return the right status code?' and 'Is the response shape exactly what the spec says?'"

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate a controller from this OpenAPI spec" | "Write my service layer" |
> | "Does this endpoint return the right status code?" | "Do the entire exercise" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: returning 200 for create instead of 201, forgetting `CreatedAtAction`, putting business logic in controllers. Teach students to audit AI's controller code against their spec.

> [ENGAGE] **Gen-Z:** "AI writes controllers fast but often puts business logic where it doesn't belong. It's like a Grab driver who starts cooking your food — fast, but wrong. Always check: is the controller thin?"

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the ASP.NET Core errors and mental model traps you'll hit this week. The 415 error alone will save you from a frustrating debugging session."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "415 Unsupported Media Type"         |
> | Missing Content-Type: application/json|
> | Fix: set Content-Type header in client|
> +--------------------------------------+
> +--------------------------------------+
> | "Swagger shows no endpoints"         |
> | Missing [ApiController] or           |
> | app.MapControllers()                 |
> | Fix: check controller setup          |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The 415 error is like ordering on GrabFood without selecting a payment method. The restaurant knows you want food, but doesn't know how to process it. Set `Content-Type: application/json`."

> [Q&A] **Student Q:** "What's the difference between `ActionResult<T>` and `IActionResult`?"
> **Short answer:** `ActionResult<T>` lets you return either data or an error status. `IActionResult` only returns status.
> **Real answer:** `ActionResult<Post>` means the endpoint can return a `Post` object (200) OR an error status like `NotFound()` (404). `IActionResult` means it only returns status codes — no data in the body. Use `ActionResult<T>` when the endpoint returns data. Use `IActionResult` when it only returns a status (like `NoContent()` for delete).
> **The hidden question:** "Which one should I use?" -> `ActionResult<T>` for GET/POST. `IActionResult` for DELETE.

> [LOST] **If they're lost:** "The #1 issue: Swagger shows no endpoints. Check: (1) `[ApiController]` on the controller. (2) `app.MapControllers()` in Program.cs. (3) Controller is a public class inheriting from `ControllerBase`. That fixes 90% of Swagger issues."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: OpenAPI spec -> model -> controller -> Program.cs -> Swagger. The drive-through analogy is the key mental model. The `[ApiController]` auto-validation and `CreatedAtAction` with Location header are the two most important teaching points. Emphasize: controllers should be thin, business logic belongs in services. The exercise ties Week 9's spec into working code — students should test every endpoint in Swagger UI before moving on. Common pitfalls: 415 errors (missing Content-Type), Swagger not showing endpoints, business logic in controllers.

---

