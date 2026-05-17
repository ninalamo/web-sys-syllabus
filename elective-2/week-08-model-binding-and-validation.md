## Week 8: Model Binding & Validation

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + HTML Forms |
| Code Walkthrough | 30 min | Live Code (Binding & Annotations) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** Model Binding is "magic" to students. They won't understand how the HTML form data automatically becomes a C# object. Walk through the `name` attribute matching process very slowly.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "In older languages, if a user submitted a form with 20 fields, you had to write 20 lines of code to manually extract each piece of data from the HTTP request. ASP.NET Core does this automatically. It's called Model Binding."

> [BOARD] **Whiteboard Analogy:** The Translator
> *   **The Form (Spanish):** The browser sends raw text data via HTTP (`name=Alice&age=25`).
> *   **Model Binder (The Translator):** ASP.NET catches this text, looks at your C# method, and automatically translates the text into a C# `User` object.
> *   **The Controller (English):** You just use the object. No parsing required.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: The `name` Attribute Magic
> **[SPEAK] Discussion:** "How does the framework know which input goes to which C# variable? It matches the HTML `name` attribute exactly to the C# parameter name."
>
> **[CODE] Example:**
> ```html
> <!-- HTML -->
> <input type="text" name="firstName" />
> ```
> ```csharp
> // C# Controller
> [HttpPost]
> public IActionResult Save(string firstName) { ... }
> ```
>
> **[TIP] Instructor Tip:** Tell them: "If your HTML says `name="userAge"` but your C# says `int age`, it will fail. They must match perfectly."

#### Topic B: Complex Object Binding
> **[SPEAK] Discussion:** "If a form has 10 fields, we don't write a C# method with 10 parameters. We create a Class, and the model binder maps the form directly into the Class properties."
>
> **[CODE] Example:**
> ```csharp
> public class RegistrationDto {
>     public string Email { get; set; }
>     public string Password { get; set; }
> }
> 
> [HttpPost]
> public IActionResult Register(RegistrationDto request) { ... }
> ```
>
> **[TIP] Gen-Z Hook:** Object binding is like auto-fill on your phone. As long as the labels match, the framework fills out the C# object for you instantly.

#### Topic C: Data Annotations
> **[SPEAK] Discussion:** "We don't want users submitting blank emails or passwords that are 2 characters long. Instead of writing massive `if` statements in the controller, we attach rules directly to the Model using Attributes."
>
> **[CODE] Example:**
> ```csharp
> [Required(ErrorMessage = "Email is required")]
> [EmailAddress]
> public string Email { get; set; }
> ```
>
> **[TIP] Instructor Tip:** Explain Separation of Concerns. The Controller routes traffic; it shouldn't be responsible for knowing what makes a password valid.

#### Topic D: `ModelState.IsValid`
> **[SPEAK] Discussion:** "Annotations define the rules, but the Controller has to enforce them. `ModelState.IsValid` checks if the incoming data passed all the annotation tests."
>
> **[CODE] Example:**
> ```csharp
> if (!ModelState.IsValid) {
>     return View(request); // Kick them back to the form with errors
> }
> ```
>
> **[TIP] Instructor Tip:** Emphasize that returning the `request` back to the view is what keeps the user's typed data in the boxes so they don't have to start over.

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's build a registration form, break it on purpose, and then secure it with validation."

*   **Step 1: The Raw Form**
    *   *Action:* Create a simple HTML form for a User (Name, Age). Point it to a `[HttpPost]` action. Show the debugger catching the populated C# object.
*   **Step 2: Adding Annotations**
    *   *Action:* Add `[Required]` and `[Range(18, 99)]` to the Age property. Submit the form with age 12.
*   **Step 3: Enforcing `ModelState`**
    *   *Action:* Add the `if (!ModelState.IsValid)` block. 
*   **Step 4: Tag Helpers**
    *   *Action:* Add `<span asp-validation-for="Age"></span>` to the HTML to show the error message dynamically on the screen.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "Never, ever trust client-side validation. You can write HTML5 `required` attributes and JavaScript validation all day. But I can open Chrome DevTools, delete your JavaScript, and submit a blank form to your server. Client-side validation is for User Experience (making it fast). Server-side validation (`ModelState`) is for Security. You must always have both."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "What Data Annotation do I use for a phone number?" Not Allowed: "Write the controller logic for my login form."
*   **Common Error 1:** Object properties are all null. -> Your HTML `name` attributes don't match your C# property names.
*   **Common Error 2:** The form clears out when there's an error. -> You returned `View()` instead of `View(model)` in your `!ModelState.IsValid` block.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Build a "Contact Us" form. Bind it to a `ContactMessage` class. Require the Name, make the Email a valid email address, and ensure the Message is at least 20 characters long. Display the validation errors on the form.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I know how the `name` attribute connects HTML to C#.
> > - [ ] I can bind an HTTP POST to a complex C# object.
> > - [ ] I can apply Data Annotations like `[Required]` to a class.
> > - [ ] I can use `ModelState.IsValid` to prevent bad data from saving.
> > - [ ] I can explain why server-side validation is mandatory.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Strict Sign-Up"
> > 1. Create a User Registration form.
> > 2. Model: Username, Password, ConfirmPassword, Age.
> > 3. **The Catch:** Use the `[Compare("Password")]` annotation to ensure ConfirmPassword matches. Create a custom validation rule (or use Regex annotation) to ensure the Password contains at least one uppercase letter and one number.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** An HTML form that submits to a controller, but has zero validation.
> - **Solution Repo:** The form fully wired up with Tag Helpers, Model binding, Data Annotations, and ModelState checking.
