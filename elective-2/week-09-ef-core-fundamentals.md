## Week 9: EF Core Fundamentals

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Code Comparison |
| Code Walkthrough | 35 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 5 min | Overflow |

> [TIP] **Teaching Tip (Week 9 strategy):** This is the first time students touch a real database. The magic of "I wrote C# and it made a table!" is powerful — but migrations will confuse them. Go slow on `dotnet ef migrations add` and `dotnet ef database update`. Have them run these commands themselves, not just watch you. The "aha" moment is when they see data persist after restarting the app.

---

### The Hook

> [SPEAK] **Script:** "Remember writing SQL queries in VB? String concatenation, SQL injection vulnerabilities, crying at 2 AM because you forgot a comma? We're never doing that again. Entity Framework Core writes the SQL for you. You just write C#."

> [SLIDE] **Slide:** Title: "Never Write SQL Again"  
> Left: A messy VB SQL string with concatenation, labeled "The Old Way."  
> Right: Clean C# LINQ query, labeled "The EF Core Way."  
> Subtitle: "Same database. Zero SQL strings. One happier you."

> [TIP] **Teaching Tip:** Read the hook with relief, not mockery. Some students actually liked writing SQL. Frame EF Core as a productivity upgrade, not a replacement for understanding databases.

> [ENGAGE] **Gen-Z:** "EF Core is like autocorrect but for databases. You type what you want in C#, and it figures out the SQL. Except unlike autocorrect, it actually gets it right."  
> **-> Poll:** "Raise your hand if you've ever gotten a SQL syntax error because of a missing quote. Today that ends."

> [LOST] **If they're lost:** "If you've never written SQL before, even better. You're learning the modern way from day one. EF Core is how most .NET developers interact with databases."

---

### The Analogy

> [SPEAK] **Script:** "An ORM is like Google Drive for your data. You don't care *how* Google stores your files — you just open the folder, drag files in, and search for them. EF Core is Google Drive for your C# objects. It saves them to a database without you writing `INSERT INTO` or `SELECT * FROM`."

> [BOARD] **Whiteboard:** Draw the ORM translation layer:
> ```
> C# Objects                    Database Tables
> +-----------------+           +-----------------+
> | Product class   |  <-EF->    | Products table   |
> | .Name property  |  <-EF->    | Name column      |
> | .Price property |  <-EF->    | Price column     |
> | List<Product>   |  <-EF->    | SELECT * query   |
> +-----------------+           +-----------------+
> ```
> Label the middle arrow: "EF Core translates automatically."

> [TIP] **Teaching Tip:** The Google Drive analogy works for most students. For those who don't use Drive, add: "Or like GCash — you don't care how the money is stored in their servers, you just see your balance and send money."

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "If EF Core is Google Drive for data, what's the 'folder'? What's the 'file'? 10 seconds, go!" (Answer: Folder = table, File = row/record.)

> [LOST] **If they're lost:** "Think of it like a translator at the UN. You speak C#. The database speaks SQL. EF Core is the translator in the middle. You say 'give me all products' in C#, EF Core says 'SELECT * FROM Products' to the database."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (8 min ORM concept -> 7 min DbContext -> 5 min migrations -> 5 min CRUD)

> [SPEAK] **Script:** "Here's the entire EF Core mental model in four parts: ORM translates, DbContext connects, migrations version-control your database, and CRUD is how you interact with data. Let's go through each one."

> [SLIDE] **Slide:** Show the C# class -> SQL table mapping first. Reveal one property at a time: `int Id` -> `Id int PRIMARY KEY IDENTITY`, `string Name` -> `Name nvarchar(max)`, `decimal Price` -> `Price decimal(18,2)`.

> [TIP] **Teaching Tip:** The most important concept this week is **`DbSet<T>` as a "database-connected List<T>."** Students already know `List<T>` — build on that. Emphasize: "You query it like a List, but the data lives in a database." For migrations, stress: "Migrations are version control for your database schema. Like git, but for tables."

> [ASK] **Ask the class:** "If I add a new property to my Product class — how does the database know about it?" (Answer: You create a new migration and apply it.)

> [ENGAGE] **Gen-Z:** "DbContext is like your GCash app. It's your connection to your money (database). You don't touch the bank vault directly — you go through the app. `DbSet<Product>` is like your transaction history — a list that's connected to the real data."  
> **-> Phone moment:** "Think about how your phone apps store data. They don't save to files — they save to databases. EF Core is how your C# code talks to those databases."

> [Q&A] **Student Q:** "Do I still need to learn SQL?"
> **Short answer:** Yes, eventually.
> **Real answer:** EF Core handles 90% of what you'll do. But when something goes wrong — slow queries, complex joins — you need to read the SQL EF generates. You don't write it daily, but you need to understand it.
> **The hidden question:** "Can I skip SQL entirely?" -> Not if you want to be a senior developer. But you can start with EF Core and learn SQL as needed.

> [Q&A] **Student Q:** "What's the difference between `Find()` and `Where()`?"
> **Short answer:** `Find()` gets one record by primary key. `Where()` filters by any condition.
> **Real answer:** `Find(1)` generates `SELECT ... WHERE Id = 1` and checks the local cache first. `Where(p => p.Price < 50)` generates `SELECT ... WHERE Price < 50` and always hits the database.
> **The hidden question:** "Which is faster?" -> `Find()` for single records by ID. `Where()` for everything else.

> [LOST] **If they're lost:** "Forget the technical terms. The flow is: (1) Define a class. (2) Add it as a DbSet in DbContext. (3) Run a migration. (4) Now you can add, read, update, and delete records using C# only. That's it."

---

### Code Walkthrough

> [TIME] **Pacing:** 35 min (5 min packages -> 10 min models + DbContext -> 5 min Program.cs -> 5 min migrations -> 10 min controller)

> [SPEAK] **Script:** "Let's set up EF Core from scratch. Watch how each piece connects — the model, the DbContext, the connection string, the migration, and finally the controller that uses it all."

> [SLIDE] **Slide:** Show the setup steps one at a time: (1) packages, (2) models, (3) DbContext, (4) Program.cs registration, (5) migration commands, (6) controller. Don't show everything at once.

> [TIP] **Teaching Tip:** **Type this live, don't paste.** When you run `dotnet ef migrations add InitialCreate`, pause and explain: "This command compares your models to the last migration and generates a C# file describing what changed." Then run `dotnet ef database update` and say: "This applies the migration to the actual database." Make the deliberate mistake of forgetting `UseSqlServer()` — let it fail, then fix it.

> [BOARD] **Whiteboard:** Draw the full data flow:
> ```
> Controller -> AppDbContext -> SQL Server
>      v            v
>   Product     DbSet<Product>
>      v            v
>   .Add()     .SaveChanges() -> INSERT INTO Products
>   .ToList()  db.Products    -> SELECT * FROM Products
>   .Find(1)   db.Products    -> SELECT ... WHERE Id = 1
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Install the packages with me. Then create the models. Then the DbContext. Run the migration. Watch the database get created. This is the moment your code becomes persistent."

> [Q&A] **Student Q:** "What's `(localdb)\MSSQLLocalDB`?"
> **Short answer:** It's a lightweight SQL Server that comes with Visual Studio.
> **Real answer:** LocalDB is a developer-friendly version of SQL Server. It runs on-demand, doesn't need a service, and stores files in your user folder. Perfect for development. In production, you'd use a real SQL Server instance.
> **The hidden question:** "Do I need to install SQL Server separately?" -> No. LocalDB comes with Visual Studio.

> [LOST] **If they're lost:** "Let's do the absolute minimum: one model, one DbSet, one migration. Get that working. Then add the controller. Don't try to set up everything at once."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "EF Core is used by 70%+ of .NET web apps. It's not optional — it's the standard. Companies pick .NET precisely because EF Core makes database work so smooth. Without it, you're writing SQL strings, managing connections manually, and debugging 'string or binary data would be truncated' at 11 PM."

> [SLIDE] **Slide:** Screenshot of a real job posting for ".NET Developer" highlighting "Entity Framework" or "EF Core" in the requirements. Bonus: show a job posting from a Philippine company.

> [TIP] **Teaching Tip:** Keep this to 5 minutes. The goal is motivation. Connect it to their future: "Every .NET job you apply for will mention EF Core. Learning it now means you're already ahead."

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have seen 'Entity Framework' in a job posting?" (Show a real JobStreet screenshot if hands are low.) "That's your future self thanking you for paying attention today."

> [LOST] **If they're lost:** "You don't need to master EF Core today. Just understand: it lets you work with databases using C# instead of SQL. That's the core idea. Everything else is details."

---

### Exercise: First Migration + Seed Data

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Create a new MVC project, set up EF Core, define a Product model, create your first migration, seed some data, and display it on a page. You have 40 minutes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Create ASP.NET Core MVC project
> - [ ] Add EF Core SQL Server packages
> - [ ] Define `Product` model (Id, Name, Price, StockQuantity, CreatedAt)
> - [ ] Create `AppDbContext` with `DbSet<Product>`
> - [ ] Register DbContext in `Program.cs`
> - [ ] Create and apply first migration
> - [ ] Add seed data (5 products)
> - [ ] Create `ProductsController` with `Index` action
> - [ ] Run and verify products appear on page

> [TIP] **Teaching Tip:** Circulate during the first 15 minutes — migration setup is where students get stuck. The "aha" moment is when they run the app and see seeded data on the page for the first time. Walk around and celebrate that moment.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the models and DbContext, the other handles the migration and controller. Then combine and test together."

> [ASK] **Mid-exercise check-in (at 20 min):** "How many have the migration applied?" (Show of hands.) "How many see data on the page?" "If neither, let's do a quick group debug."

> [LOST] **If they're lost:** "Start with just the model and DbContext. Get those compiling. Then try the migration command. If it fails, run `dotnet build` first. Then add the seed data. Finally the controller. One step at a time."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week marks a policy shift: AI is now your pair programmer. You can ask it to generate DbContext code, seed data, and migration help. But for every line AI generates, you must add a comment explaining what it does. This proves you understand it."

> [SLIDE] **Slide:** Allowed vs Not Allowed:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate an EF Core DbContext for Product and Category" | "Build my entire exercise" |
> | "Write seed data for 5 products" (then comment every line) | "Do my migration for me" |

> [TIP] **Teaching Tip:** Demonstrate the comment requirement. Show AI-generated code, then walk through adding line-by-line comments. "This line registers the DbContext. This line defines the connection string. This line creates a DbSet." The comments are the learning.

> [ENGAGE] **Gen-Z:** "AI is your 'pair programmer' now — it writes code, you explain it. If you can't explain what a line does, you didn't learn anything. The comments are your proof of understanding."

> [LOST] **If they're lost:** "Start by asking AI to explain concepts, not generate code. 'What does DbSet<Product> mean?' 'What does SaveChanges() do?' Build understanding first, then use AI for code."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the EF Core errors you WILL see this week. Let's go through them so you don't spend 20 minutes Googling."

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | "Cannot add migration"                   |
> | Run dotnet restore first.                |
> | Make sure the project builds.            |
> +------------------------------------------+
> +------------------------------------------+
> | "No database provider configured"        |
> | You forgot UseSqlServer() in Program.cs  |
> +------------------------------------------+
> +------------------------------------------+
> | "Invalid object name 'Products'"         |
> | You haven't run dotnet ef database update|
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "'Cannot add migration' is like trying to save a file in a folder that doesn't exist. Run `dotnet restore` first — it's like refreshing your project's dependencies."

> [Q&A] **Student Q:** "What does 'migrations out of sync' mean?"
> **Short answer:** Your code has migrations your database doesn't know about.
> **Real answer:** If a teammate adds a migration and you pull their code, your database is behind. Run `dotnet ef database update` to catch up. It's like `git pull` but for your database schema.
> **The hidden question:** "How do I avoid this?" -> Always run migrations after pulling code from teammates.

> [LOST] **If they're lost:** "The three things to check first: (1) Does the project build? (2) Did you call `UseSqlServer()`? (3) Did you run `dotnet ef database update`? Those fix 90% of EF Core errors this week."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: `dotnet ef migrations add` creates the migration file. `dotnet ef database update` applies it. You need both."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. The key mental model is "DbSet = database-connected List." The #1 pitfall is forgetting to run migrations — emphasize `dotnet ef migrations add` followed by `dotnet ef database update` as a two-step process. Have students run these commands themselves, not just watch. The "aha" moment is seeing seeded data persist on the page after restarting the app.

---

