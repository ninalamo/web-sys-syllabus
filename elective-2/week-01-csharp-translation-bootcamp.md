## Week 1: C# Translation Bootcamp

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Side-by-Side Comparison |
| Code Walkthrough | 35 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 5 min | Overflow |

> [TIP] **Teaching Tip:** This is Week 1. Students are nervous. Some haven't written code in months. If they only get one thing from this week, it should be: curly braces, semicolons, and `var`.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "You already know .NET concepts through VB. C# is the same ideas, different syntax. Think of it like speaking the same language with a different accent. Let's see how they compare — side by side."

> [BOARD] **Whiteboard Analogy:** The Automatic vs. Manual Car
> *   **VB (Automatic):** It handles the shifting for you (`End If`, `End Sub`).
> *   **C# (Manual):** You have direct control over the gears. You declare types explicitly, close your own curly braces `{}`, and define exact access modifiers. Same road, different driving experience.

---

### 2. Core Concepts & Discussion Topics

> [SPEAK] **Script:** "Here is the cheat sheet for this entire week. There are exactly 6 things different between VB and C#. Everything else is identical logic."

*   **Topic A: Case Sensitivity (The #1 Bug Creator)**
    *   *Concept:* VB doesn't care about capitalization. C# does. `Console` is not `console`.
    *   *Rule of Thumb:* Classes and Methods are PascalCase (`Console.WriteLine`). Variables are camelCase (`studentName`).
*   **Topic B: Statement Terminators (The Semicolon)**
    *   *Concept:* VB ends a statement with a new line. C# ends a statement with a semicolon `;`. The compiler uses this to know you're done speaking.
*   **Topic C: Scope Definition (Curly Braces)**
    *   *Concept:* VB uses `If...End If` or `Sub...End Sub`. C# uses `{` to start a block and `}` to end it.
*   **Topic D: Implicit Typing (`var`)**
    *   *Concept:* It is NOT "typeless". It means "let the compiler figure out the type based on the right side of the equals sign."
    *   *Example:* `var name = "Alice";` (Compiler locks it in as a string).
*   **Topic E: String Interpolation**
    *   *Concept:* The modern way to inject variables into strings. Put a `$` before the quotes and use `{}` around variables.
    *   *Example:* `$"Hello, {name}!"`

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let me show you a class you already know in VB. Now here it is in C#. Don't read it — *scan* it. What's the same? What's different?"

*   **Step 1: The "Hello World" Translation**
    *   *Action:* Write a simple VB Console output, then translate to C# Top-Level Statements.
      ```csharp
      // C# Version
      Console.WriteLine("What is your name?");
      var name = Console.ReadLine();
      Console.WriteLine($"Hello, {name}!");
      ```
*   **Step 2: Translating a Class**
    *   *Action:* Show the transition from `Public Property Name As String` to `public string Name { get; set; }`. 
*   **Step 3: Translating an Array & Loop**
    *   *Action:* Translate a `For Each` loop into a C# `foreach` loop.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "Why did the industry switch from VB to C#? Because C# is strictly enforced. When you're working on a codebase with 50 other developers, you don't want 'loose' code. You want strict rules so that if someone breaks something, the compiler yells at them immediately. C# forces you to be disciplined, which makes you a professional."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "In C#, how do I write a For Each loop?" Not Allowed: "Write my FizzBuzz exercise for me."
*   **Common Error 1:** `CS1002 — ; expected`. -> You forgot a semicolon. Check the end of your line.
*   **Common Error 2:** `CS0103 — The name doesn't exist in the current context`. -> 99% of the time, this is a case sensitivity issue. You typed `console` instead of `Console`.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Three small programs in one console app: FizzBuzz, a basic Calculator, and a Student Manager list. Use C# syntax.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I know that C# is case-sensitive and can fix capitalization errors.
> > - [ ] I remember to end my statements with semicolons.
> > - [ ] I can write a basic `foreach` loop in C#.
> > - [ ] I understand how to use `var` properly.
> > - [ ] I can create a simple Class with Properties in C#.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Translation Engine"
> > Take the classic "Bank Account" assignment from your previous VB course (the one with Deposit, Withdraw, and Balance checking). 
> > 1. Rewrite the entire application in C#.
> > 2. **The Catch:** You must use `var` for all local variable declarations, and use string interpolation `$` for all console outputs.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** A PDF or markdown file containing the "Old VB Code" snippets that you will translate live.
> - **Solution Repo:** A C# Console Application with the completed FizzBuzz, Calculator, and Student Manager code.
