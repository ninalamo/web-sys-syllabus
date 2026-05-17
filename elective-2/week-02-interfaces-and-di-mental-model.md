## Week 2: Interfaces & DI Mental Model

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Code Comparison |
| Code Walkthrough | 30 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** DI is the hardest mental model shift this term. Students who came from VB think "just `new` it up inside the class." Expect resistance. Use the restaurant analogy repeatedly.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "Your VB form has 500 lines of code doing everything from database queries to font colors? That's not impressive — that's a cry for help. Today we learn why your classes should be 'dumb' and services should be swappable."

> [BOARD] **Whiteboard Analogy:** The Restaurant Operations
> *   **The Menu (Interface):** Tells you what food is available, but doesn't cook it.
> *   **The Waiter (Controller):** Takes your order. Doesn't cook.
> *   **The Kitchen (Service):** Cooks the food. Doesn't talk to customers.
> *   *DI Concept:* If the Head Chef quits, the Waiter doesn't need to be retrained. They still just hand the ticket to the Kitchen. We can swap the kitchen staff without breaking the restaurant.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: Interfaces (The Contract)
> **[SPEAK] Discussion:** "An interface is a contract. It says: any class that signs this contract MUST have these methods. It doesn't say HOW — just THAT they exist. It has no body."
>
> **[CODE] Example:**
> ```csharp
> public interface INotificationService {
>     void Send(string message); // No curly braces!
> }
> ```
>
> **[TIP] Gen-Z Hook:** An interface is a job posting on JobStreet. It lists the requirements. If a class applies for the job, it MUST have those skills.

#### Topic B: Tight Coupling vs. Loose Coupling
> **[SPEAK] Discussion:** "If Class A uses the `new` keyword to create Class B, they are tightly coupled. If Class B changes, Class A breaks. Loose coupling means Class A just asks for an interface, and doesn't care who provides it."
>
> **[CODE] Example:**
> ```csharp
> // TIGHT (Bad)
> EmailService _email = new EmailService(); 
> 
> // LOOSE (Good - Constructor Injection)
> public OrderProcessor(INotificationService service) {
>     _service = service;
> }
> ```
>
> **[TIP] Instructor Tip:** Emphasize that `new` is "glue". Avoid it inside business logic classes.

#### Topic C: The IoC Container (The Matchmaker)
> **[SPEAK] Discussion:** "If we aren't using `new`, who is creating the objects? The framework is. ASP.NET Core has a built-in matchmaker. When a class asks for an `INotificationService`, the matchmaker hands it an `EmailService`."
>
> **[CODE] Example:**
> ```csharp
> // Inside Program.cs
> builder.Services.AddScoped<INotificationService, EmailService>();
> ```
>
> **[TIP] Instructor Tip:** This is the magic line. Changing `EmailService` to `SmsService` right here swaps out the functionality for the entire application instantly.

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's build this from scratch. First the contract, then two implementations, then something that uses the contract."

*   **Step 1: The Contract**
    *   *Action:* Create `INotificationService` with a `Send(string msg)` method.
*   **Step 2: The Implementations**
    *   *Action:* Create `EmailService` and `SmsService` that implement `INotificationService`. Give them different `Console.WriteLine` outputs.
*   **Step 3: The Consumer (Constructor Injection)**
    *   *Action:* Create an `OrderProcessor` class. Inject the interface.
*   **Step 4: The Swap Demo**
    *   *Action:* In `Program.cs`, show how changing one line of configuration swaps the entire application from sending Emails to sending SMS.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "You will ask me, 'Why do all this extra work when I can just use `new EmailService()`?' Here is the industry secret: Unit Testing. If you hardcode `new EmailService()`, every time you test your code, you will accidentally send a real email to a customer. With DI, when we run tests, we inject a 'FakeEmailService' that does nothing. DI is what prevents you from spamming 10,000 customers during a test run."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "What does 'implements interface' mean?" Not Allowed: "Write the DI exercise for me."
*   **Common Error 1:** `Cannot create instance of interface`. -> You wrote `new INotificationService()`. You can only instantiate concrete classes (`new EmailService()`).
*   **Common Error 2:** `NullReferenceException`. -> You defined the interface in the constructor but forgot to assign it to the private field (`_service = service;`).

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Build a logging system. Interface: `ILogger`. Implementations: `ConsoleLogger`, `FileLogger`. Consumer: `UserService` (logs when a user is created). Swap them at runtime.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I can write an Interface with a method signature.
> > - [ ] I can make a class implement an Interface.
> > - [ ] I know how to use Constructor Injection to pass a dependency.
> > - [ ] I understand why using `new` inside a class makes it hard to test.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Payment Gateway Swap"
> > Build a `CheckoutService` that requires an `IPaymentProvider`.
> > 1. Create two implementations: `GCashProvider` and `CreditCardProvider`.
> > 2. In your `Program.cs`, ask the user "Press 1 for GCash, 2 for Credit Card". 
> > 3. **The Catch:** Inject the chosen provider into `CheckoutService`. `CheckoutService` must not have any `if` statements checking which payment method was chosen.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** A monolithic class (`OrderProcessor`) that hardcodes an `EmailService` and a `DatabaseService` using `new`.
> - **Solution Repo:** The exact same application refactored to use `IOrderProcessor`, `IEmailService`, and DI setup in `Program.cs`.
