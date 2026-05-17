## Week 12: Mini Capstone Checkpoint

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + MVP Planning |
| Code Walkthrough | 30 min | Live Debugging (Common pitfalls) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (Code Review + Catchup) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** Do not introduce new code today. This is a consolidation week. Students are building a mini-project to prove they understand MVC, EF Core, and Routing before moving to advanced topics like Security.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "You have all the Lego pieces. You know how the bricks snap together. Now, nobody is handing you an instruction manual. You have to build the house yourself."

> [BOARD] **Whiteboard Analogy:** The House Blueprint
> *   **Foundation (EF Core):** If the database is broken, nothing works.
> *   **Walls (Controllers/Models):** The structure that holds data.
> *   **Paint (Views):** Make it look good *last*. Don't paint a wall before it's built!

---

### 2. Core Concepts & Discussion Topics

#### Topic A: Architecture Review
> **[SPEAK] Discussion:** "Let's review the golden rule of MVC: Separation of Concerns. Where does logic go? Not in the view. Where does HTML go? Not in the controller."
>
> **[VISUAL] Example:**
> Draw a triangle: `Model (Data/Rules) <--> Controller (Traffic Cop) <--> View (UI)`.
>
> **[TIP] Instructor Tip:** Ask students to shout out where specific tasks belong (e.g., "Where do I validate an email?" -> Model Annotation. "Where do I query the database?" -> Controller).

#### Topic B: Minimum Viable Product (MVP)
> **[SPEAK] Discussion:** "Perfection is the enemy of done. An MVP is the absolute bare minimum required to prove the app works."
>
> **[CODE] Example:**
> *   **Not MVP:** A login system, dark mode toggle, forgotten password email.
> *   **MVP:** I can click "Add Item", it saves to the database, and it appears on the list.
>
> **[TIP] Gen-Z Hook:** MVP is the rough draft of your TikTok. Post it, see if the hook works, then worry about the filters later.

#### Topic C: Debugging the Yellow Screen
> **[SPEAK] Discussion:** "When ASP.NET crashes, it throws a giant yellow/white error screen with 500 lines of text. Do not panic. The answer is almost always in the first 2 lines."
>
> **[VISUAL] Example:**
> Show an `InvalidOperationException: The view was not found`. Point exactly to where it says what view name it was looking for.
>
> **[TIP] Instructor Tip:** Teach them the "Read the Red" rule. If it's a compiler error, read the red underline. If it's a runtime error, read the top line of the stack trace.

#### Topic D: Peer Code Review
> **[SPEAK] Discussion:** "In the industry, you never push code without someone else reading it first. We look for naming conventions, dead code, and security risks."

---

### 3. Code Walkthrough / Live Debugging Blueprint

> [SPEAK] **Script:** "I have a broken project. We are going to debug it together using the skills you've learned."

*   **Step 1: The Routing Bug**
    *   *Action:* Run an app where clicking a link returns a 404. Trace it to a misspelled Action method name in the controller.
*   **Step 2: The Database Bug**
    *   *Action:* Try to save a record. It crashes with a column error. Show them how to check if a migration was run.
*   **Step 3: The View Bug**
    *   *Action:* Show a page crashing because a `foreach` loop is iterating over a `null` list. Add the `null` check.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "The biggest mistake junior developers make on their first big project is Feature Creep. They start building an inventory system, decide it needs a chat feature, spend 3 days trying to build chat, and fail the project because the inventory system doesn't work. The industry builds in 'Sprints'. Sprint 1: Make it work. Sprint 2: Make it pretty. Sprint 3: Add the chat feature. Stick to Sprint 1."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "Explain this stack trace to me." Not Allowed: "Write my mini-capstone project."
*   **Common Error 1:** Getting stuck for 3 hours on a typo. -> Teach them to walk away for 5 minutes. The brain needs a reset to spot obvious typos.
*   **Common Error 2:** Deleting everything and starting over. -> Version control (Git) exists so you can undo mistakes. Commit frequently.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Peer Review Lab. Have students swap laptops (or screenshare). The reviewer must find 3 things to improve in the other person's code: a bad variable name, a missing comment, or a missing `null` check.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I can build an MVC app from scratch without a tutorial.
> > - [ ] I know how to connect an app to a database using EF Core.
> > - [ ] I can read a runtime error and figure out which file caused it.
> > - [ ] I understand the concept of an MVP.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Mini-Capstone MVP"
> > 1. Finish the core functionality of your assigned mini-project (e.g., a simple To-Do tracker, Expense logger, or Book library).
> > 2. It must have 2 Models with a 1-to-Many relationship.
> > 3. **The Catch:** You must deploy or present the code running flawlessly locally. No extra features allowed until the core CRUD (Create, Read, Update, Delete) operations work perfectly.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** A "Frankenstein" MVC app with 4 intentional, common bugs (Routing, NullReference, Model State, Migration missing).
> - **Solution Repo:** The bugs fixed, acting as a reference for how clean architecture should look at the halfway point.
