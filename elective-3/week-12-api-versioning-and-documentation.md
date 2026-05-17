## Week 12: API Versioning & Documentation

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Versioning Strats |
| Code Walkthrough | 30 min | Live Code (Swagger & XML Comments) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** Documentation sounds boring to students. Frame it as a weapon: "Good documentation is how you prove to your boss that your code works without them having to read the code."

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "Imagine you change the URL of your API from `/users` to `/customers`. Tomorrow, 10,000 people open your mobile app on their phones. The app tries to fetch `/users`. It gets a 404. Your app crashes on 10,000 devices. How do we upgrade APIs without breaking existing apps? Versioning."

> [BOARD] **Whiteboard Analogy:** The Restaurant Menu
> *   **v1 Menu:** Burgers and Fries. (Mobile App 1.0 reads this).
> *   **v2 Menu:** Tacos and Salad. (Mobile App 2.0 reads this).
> *   If you just replace the menu, the person who ordered a Burger gets angry. You must keep BOTH menus active until everyone has upgraded to the new app.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: Why Version APIs?
> **[SPEAK] Discussion:** "Websites (React) update instantly when the user refreshes. Mobile apps do not. Users might not update your app for 6 months. Your backend MUST support multiple versions simultaneously."
>
> **[TIP] Instructor Tip:** Emphasize that "Breaking Changes" (deleting a field, changing a type from string to int) require a new version. Adding a *new* field does not.

#### Topic B: URL Versioning
> **[SPEAK] Discussion:** "The most common way to version an API is to literally put the version number in the URL."
>
> **[CODE] Example:**
> ```csharp
> [ApiVersion("1.0")]
> [Route("api/v{version:apiVersion}/users")]
> public class UsersV1Controller : ControllerBase { ... }
> ```
>
> **[TIP] Gen-Z Hook:** Versioning is like branching off a new cinematic universe. Earth-1 (v1) and Earth-2 (v2) exist at the same time, doing different things.

#### Topic C: Swagger (OpenAPI)
> **[SPEAK] Discussion:** "If you build an API, how does the frontend team know what endpoints exist? You don't email them a Word document. You use Swagger—a tool that automatically reads your C# code and generates a beautiful, interactive webpage documenting your API."
>
> **[VISUAL] Example:**
> Show the standard Swagger UI interface with the GET/POST blocks. Emphasize the "Try it out" button.

#### Topic D: XML Comments
> **[SPEAK] Discussion:** "Code tells you 'How', comments tell you 'Why'. By adding three slashes `///` above a method, we can write descriptions that Swagger will automatically display to the frontend developers."
>
> **[CODE] Example:**
> ```csharp
> /// <summary>
> /// Retrieves a specific user by their ID.
> /// </summary>
> [HttpGet("{id}")]
> public IActionResult GetUser(int id) { ... }
> ```

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's break an API, realize we need versioning, and then generate documentation for it."

*   **Step 1: The Breaking Change**
    *   *Action:* Have an API that returns `{ "name": "John Doe" }`. Change it to return `{ "firstName": "John", "lastName": "Doe" }`. Show how this breaks the React frontend instantly.
*   **Step 2: Implementing Versioning**
    *   *Action:* Install the `Asp.Versioning.Mvc` package. Set up `AddApiVersioning()`. Create a `v1` controller (old data) and a `v2` controller (new data). Show Postman calling both.
*   **Step 3: Enabling XML Comments**
    *   *Action:* Open the `.csproj` file and enable `<GenerateDocumentationFile>true</GenerateDocumentationFile>`. Write XML comments above the endpoints.
*   **Step 4: Swagger UI**
    *   *Action:* Run the app. Open the `/swagger` endpoint. Show how the XML comments now appear on the webpage.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "In a professional environment, frontend developers will literally refuse to work on a feature if the Swagger documentation isn't updated first. If I have to read your backend C# code to figure out what JSON to send you, you have failed as an API designer. Swagger is the contract you sign with the rest of the company."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "Generate XML summary comments for this controller method." Not Allowed: "Write the logic to duplicate my v1 controller to v2."
*   **Common Error 1:** XML comments don't show up in Swagger. -> You forgot to tell the Swagger configuration in `Program.cs` to explicitly include the `.xml` file path generated by the compiler.
*   **Common Error 2:** `AmbiguousMatchException`. -> You have a v1 and v2 controller, but you forgot to add the `[ApiVersion]` attribute, so the framework doesn't know which one to use.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Take last week's API. Install API Versioning. Move your existing controller to `v1.0`. Create a `v2.0` controller that returns slightly different data. Enable XML comments and write a `<summary>` for every endpoint.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I understand why API versioning is necessary for mobile apps.
> > - [ ] I can configure URL-based API versioning in ASP.NET Core.
> > - [ ] I know how to navigate and use the Swagger UI.
> > - [ ] I can write XML `///` comments that appear in Swagger.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Professional Contract"
> > 1. Create a brand new "Inventory API".
> > 2. It must have 3 endpoints.
> > 3. **The Catch:** You don't need to actually write the database logic. The endpoints can just return fake data. But you MUST write pristine XML comments containing a `<summary>`, `<param>`, and `<returns>` tag for every endpoint, and submit a screenshot of the beautiful Swagger UI page showing your documentation.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** A working API without any versioning or documentation.
> - **Solution Repo:** The API configured with `v1` and `v2` endpoints, fully documented with XML comments hooked up to Swagger.
