## Week 9: EF Core Fundamentals

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + DB Mapping |
| Code Walkthrough | 30 min | Live Code (Migrations & Setup) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** If they had a DB course before this, they are used to writing raw SQL strings (`SELECT * FROM...`). EF Core will blow their minds, but the abstraction can be confusing. Ground it by showing the generated SQL in the console.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "Writing raw SQL strings in C# is dangerous. If you misspell a column name, the compiler doesn't know, and your app crashes at runtime. Entity Framework (EF) Core fixes this. It turns your C# classes into database tables automatically."

> [BOARD] **Whiteboard Analogy:** The Translator (Again)
> *   **C# App:** Speaks Objects (Classes, Lists).
> *   **SQL Database:** Speaks Tables (Rows, Columns).
> *   **Entity Framework (ORM):** The universal translator. You give it a C# object, it translates it into an `INSERT` statement, talks to the DB, and translates the DB rows back into C# objects for you.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: What is an ORM?
> **[SPEAK] Discussion:** "ORM stands for Object-Relational Mapper. Instead of interacting with the database using SQL commands, we interact with it using C# methods."
>
> **[CODE] Example:**
> ```csharp
> // Old Way (Raw SQL)
> "INSERT INTO Users (Name) VALUES ('Nina')";
> 
> // EF Core Way (ORM)
> _db.Users.Add(new User { Name = "Nina" });
> _db.SaveChanges();
> ```
>
> **[TIP] Gen-Z Hook:** An ORM is like a personal assistant. You just say "Save this user," and the assistant figures out the exact SQL paperwork needed to make it happen.

#### Topic B: The `DbContext`
> **[SPEAK] Discussion:** "The `DbContext` is the most important file in your data layer. It represents your active session with the database. Every table you want to query must be listed here as a `DbSet`."
>
> **[CODE] Example:**
> ```csharp
> public class AppDbContext : DbContext {
>     public DbSet<User> Users { get; set; }
>     public DbSet<Product> Products { get; set; }
> }
> ```
>
> **[TIP] Instructor Tip:** Explain that `DbSet<User>` is the C# equivalent of `CREATE TABLE Users`.

#### Topic C: Code-First Migrations
> **[SPEAK] Discussion:** "We don't open SQL Server Management Studio to create tables anymore. We write C# classes, and tell EF Core to generate the database based on our code. C# is the single source of truth."
>
> **[CODE] Example:**
> ```bash
> dotnet ef migrations add InitialCreate
> dotnet ef database update
> ```
>
> **[TIP] Instructor Tip:** Explain what a migration file actually is—it's a timestamped blueprint of instructions telling the DB how to change its structure to match the C# classes.

#### Topic D: LINQ Basics
> **[SPEAK] Discussion:** "LINQ (Language Integrated Query) is how we ask the database for data using C#."
>
> **[CODE] Example:**
> ```csharp
> // SQL: SELECT * FROM Users WHERE Age > 18
> var adults = _db.Users.Where(u => u.Age > 18).ToList();
> ```
>
> **[TIP] Instructor Tip:** Remind them of the Javascript `.filter()` method from previous weeks. LINQ uses the exact same declarative mindset, just translated to SQL.

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's connect our app to a database, create a table from a C# class, and save our first record."

*   **Step 1: The Setup**
    *   *Action:* Add the EF Core NuGet packages (SqlServer and Tools). Add the connection string to `appsettings.json`.
*   **Step 2: The `DbContext`**
    *   *Action:* Create `AppDbContext`. Add a `Student` model with an `Id` and `Name`. Add `DbSet<Student> Students` to the context. Register the context in `Program.cs`.
*   **Step 3: The Migration**
    *   *Action:* Run `add-migration` and `update-database`. Open SQL Server Object Explorer and physically show the students that the table was created.
*   **Step 4: CRUD Operations**
    *   *Action:* In a controller, inject the `AppDbContext`. Show an `Add` and `SaveChanges`. 

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "The biggest mistake junior devs make with EF Core is calling `.ToList()` too early. `_db.Users.ToList().Where(u => u.Age > 18)` will download ONE MILLION users from the database into the server's RAM, and then filter them. `_db.Users.Where(u => u.Age > 18).ToList()` translates the filter into SQL, so the database only sends back the 5 users you need. Order matters. Database bandwidth is expensive."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "How do I write a LINQ query for finding a user by email?" Not Allowed: "Build my entire DbContext and Models."
*   **Common Error 1:** `Unable to create an object of type 'AppDbContext'.` -> Usually means your connection string is missing or you forgot to register the context in `Program.cs`.
*   **Common Error 2:** Saving data doesn't appear in the DB. -> You forgot to call `await _db.SaveChangesAsync();`.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Setup EF Core in an empty project using an InMemory Database (for speed). Create a `Book` model. Write a controller that adds 3 books on startup, and has an endpoint that returns all books published after the year 2000 using LINQ.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I understand the difference between raw SQL and an ORM.
> > - [ ] I know how to configure a connection string in `appsettings.json`.
> > - [ ] I can create a `DbContext` and add `DbSet` properties.
> > - [ ] I can run `add-migration` and `update-database`.
> > - [ ] I can write a basic LINQ `.Where()` query.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The Database Initialization"
> > Connect last week's User Registration form to a real SQL Database.
> > 1. Create the Models, DbContext, and run the migrations.
> > 2. When the user submits the form, if `ModelState.IsValid`, save the user to the database using `_db.Users.Add()`.
> > 3. **The Catch:** Before saving, write a LINQ query to check if the `Email` already exists in the database. If it does, return a validation error to the view saying "Email already taken".

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** A project with the Models already built, but no EF Core packages installed.
> - **Solution Repo:** The fully configured project with EF Core SqlServer, completed migrations, and basic LINQ queries in the controller.
