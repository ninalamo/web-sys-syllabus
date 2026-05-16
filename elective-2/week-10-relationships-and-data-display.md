## Week 10: Relationships & Data Display

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

> [TIP] **Teaching Tip (Week 10 strategy):** This is the hardest EF Core week. Navigation properties, `.Include()`, the N+1 problem, and async all hit at once. The N+1 problem is invisible with small datasets — you MUST show them the difference between 1 query and 101 queries. Use the whiteboard to draw the JOIN. Students will get `NullReferenceException` constantly because they forget `.Include()` — normalize this error as a learning moment.

---

### The Hook

> [SPEAK] **Script:** "One-to-many relationships. Sounds like something from your ex's Tinder settings. But in web apps, it's how products belong to categories, orders have items, and users write reviews. Without relationships, your data is just a bunch of lonely tables."

> [SLIDE] **Slide:** Title: "Your Data Is Lonely"  
> Left: Two separate tables (Products, Categories) with no connecting line, labeled "No Relationships."  
> Right: Same tables connected by a line from CategoryId to Id, labeled "With Relationships."  
> Subtitle: "Today we connect the dots."

> [TIP] **Teaching Tip:** The Tinder joke gets a laugh — use it to transition into the real concept. Then immediately show a real-world example: Shopee product pages where each product shows its category.

> [ENGAGE] **Gen-Z:** "Think about Shopee. Every product has a category. Every order has items. Every review has a user. None of these exist in isolation. Relationships are what make a database useful instead of just a bunch of spreadsheets."  
> **-> Poll:** "Raise your hand if you've ever seen a product page that shows the category name. That's a relationship working."

> [LOST] **If they're lost:** "Forget the term 'one-to-many' for a second. Think: one category has many products. One author has many books. That's it. We're just learning how to code that connection."

---

### The Analogy

> [SPEAK] **Script:** "Spotify playlists. A Playlist has many Songs. A Song belongs to one Playlist. When you open a playlist, Spotify's gotta load 50 songs at once. Without navigation properties, they'd have to run 51 separate queries — one for the playlist, 50 for each song. That's the N+1 problem."

> [BOARD] **Whiteboard:** Draw the N+1 problem visually:
> ```
> BAD (N+1 queries):
> Query 1: SELECT * FROM Playlists          <- 1 query
> Query 2: SELECT * FROM Songs WHERE PlaylistId = 1  <- N queries
> Query 3: SELECT * FROM Songs WHERE PlaylistId = 2
> Query 4: SELECT * FROM Songs WHERE PlaylistId = 3
> ... (50 more)
> 
> GOOD (1 query with JOIN):
> SELECT * FROM Playlists
> LEFT JOIN Songs ON Playlists.Id = Songs.PlaylistId  <- 1 query
> ```

> [TIP] **Teaching Tip:** The Spotify analogy is perfect for Filipino students — almost all use Spotify. Emphasize the key insight: **without `.Include()`, navigation properties are null.** This is the #1 source of errors this week.

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "If you open a Spotify playlist with 50 songs and the app runs 51 queries — why is that bad? 10 seconds, go!" (Answer: Slow. Each query takes time. 51 queries = 51 round trips to the server.)

> [LOST] **If they're lost:** "Think of it like ordering from a menu. Bad way: order one item, wait, order another, wait, repeat 50 times. Good way: order everything at once. `.Include()` is ordering everything at once."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (8 min navigation properties -> 8 min Include/Eager Loading -> 5 min N+1 -> 4 min async)

> [SPEAK] **Script:** "Here's the entire relationships mental model: navigation properties connect tables, `.Include()` loads related data in one query, the N+1 problem is what happens when you don't use Include, and async keeps your app from freezing. Let's go through each."

> [SLIDE] **Slide:** Show the Category and Product models side by side. Highlight `List<Product>` in Category and `Category Category` in Product. Then reveal the foreign key `CategoryId` — this is the glue.

> [TIP] **Teaching Tip:** The most important concept: **EF Core figures out relationships from naming conventions.** `CategoryId` + `Category` navigation property = EF knows it's a foreign key. Emphasize: "Name your foreign key `{ClassName}Id` and EF does the rest." For `.Include()`, stress: "Without it, the navigation property is null. Always."

> [ASK] **Ask the class:** "If I query `db.Products.ToList()` — what is `product.Category` for each product?" (Pause. Answer: null. Because we didn't use `.Include()`.)

> [ENGAGE] **Gen-Z:** "Navigation properties are like following someone on Instagram. You have a link to their profile (the related data), but you don't automatically load their entire feed — you have to click (`.Include()`) to see it."  
> **-> Phone moment:** "Think about how Facebook loads a post with comments. The post loads first, then comments load. That's eager loading — everything in one go."

> [Q&A] **Student Q:** "Why do I need both `CategoryId` and `Category Category`? Isn't one enough?"
> **Short answer:** `CategoryId` is the actual foreign key. `Category` is the navigation property for convenience.
> **Real answer:** You could have just `CategoryId` and manually query the category. But `Category` lets you write `product.Category.Name` instead of a separate query. EF Core uses both to understand the relationship.
> **The hidden question:** "Can I skip the navigation property?" -> Yes, but your code will be uglier.

> [Q&A] **Student Q:** "What's the difference between async and sync for database calls?"
> **Short answer:** Async doesn't block the thread while waiting for the database.
> **Real answer:** In a web app, each request gets a thread. If you block it waiting for the database, that thread can't handle other requests. Async frees the thread to do other work. With 100 concurrent users, async matters a lot.
> **The hidden question:** "Is it that important?" -> For a class project, no. For production, yes.

> [LOST] **If they're lost:** "Forget async for now. Focus on this: (1) Define navigation properties in your models. (2) Use `.Include()` when you need related data. (3) Without Include, navigation properties are null. That's the core."

---

### Code Walkthrough

> [TIME] **Pacing:** 35 min (10 min models + relationships -> 10 min controller with Include -> 10 min view with nested loops -> 5 min SQL comparison)

> [SPEAK] **Script:** "Let's build a store that displays categories with their products. Watch how `.Include()` loads everything in one query, and how the view loops through categories and then products inside each category."

> [SLIDE] **Slide:** Show the StoreController first — highlight `.Include(c => c.Products)`. Then show the View — highlight the nested `@foreach` loops. Finally show the generated SQL — one LEFT JOIN query.

> [TIP] **Teaching Tip:** **Type this live.** After typing the controller, run the app and show the output. Then open the SQL Server output window and show the generated query. Say: "See? One query. Not N+1. EF Core generated a LEFT JOIN for us." This visual proof is powerful.

> [BOARD] **Whiteboard:** Draw the query flow:
> ```
> _db.Categories.Include(c => c.Products)
>       v
> SELECT c.*, p.*
> FROM Categories c
> LEFT JOIN Products p ON c.Id = p.CategoryId
>       v
> EF maps results back to:
>   Category { Products: [Product, Product, ...] }
>   Category { Products: [Product, ...] }
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Type the controller with me. Notice the `.Include()`. Then type the view — nested foreach loops. Run it. See categories with their products grouped. That's relationships working."

> [Q&A] **Student Q:** "Why does the view use `category.Products.Count` — isn't that another query?"
> **Short answer:** No — because we used `.Include()`, the products are already loaded.
> **Real answer:** `.Include(c => c.Products)` loads all products for all categories in one query. `category.Products.Count` just counts the in-memory list. Zero additional database calls.
> **The hidden question:** "How do I know it's not making extra queries?" -> Check the SQL output window. You'll see only one query.

> [LOST] **If they're lost:** "Let's do the simplest relationship first: just the controller with `.Include()`. Get that working. Then add the view. Don't try to build everything at once."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "The N+1 problem takes down production apps. It works fine with 10 categories — 11 queries, 20ms. Then crashes with 10,000 categories — 10,001 queries, 30 seconds. Companies have pushed hotfixes at 2 AM for this exact issue. Learning `.Include()` now saves you from that 2 AM call."

> [SLIDE] **Slide:** A timeline visualization: "10 categories = 20ms [OK]" -> "100 categories = 200ms [OK]" -> "10,000 categories = 30 seconds [NO]" -> "With Include: 10,000 categories = 50ms [OK]"

> [TIP] **Teaching Tip:** Keep this to 5 minutes. The 2 AM hotfix story is memorable — students will remember it when they write their first `.Include()`.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have had an app that was fast at first but got slower as you added more data?" (Some hands.) "That might be the N+1 problem. Today you learned how to fix it."

> [LOST] **If they're lost:** "You don't need to understand performance tuning today. Just remember: use `.Include()` when you need related data. That prevents the N+1 problem. That's enough for now."

---

### Exercise: Data-Driven Page with Related Data

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Build an author-book system. Authors have books. Display authors with their book counts. Show author details with all their books. You have 40 minutes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Create models: `Author` (Id, Name, Bio) and `Book` (Id, Title, Price, Genre, AuthorId, Author)
> - [ ] Create `AppDbContext` with DbSets
> - [ ] Seed data: 3 authors, 3-5 books each
> - [ ] Create `AuthorsController` with `Index` and `Details/{id}`
> - [ ] `Index` — list all authors with book counts
> - [ ] `Details` — show author info + all their books (use `.Include()`)
> - [ ] Create views that display related data
> - [ ] Stretch: "Books by Genre" page with `.Where()`
> - [ ] Stretch: async everywhere

> [TIP] **Teaching Tip:** Circulate during the first 15 minutes — students will get stuck on the model relationships and `.Include()` syntax. The "aha" moment is when they see the book count on the author listing page.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person builds the models and seed data, the other builds the controller and views. Then combine and test together."

> [ASK] **Mid-exercise check-in (at 20 min):** "How many have the seed data working?" (Show of hands.) "How many see book counts on the author page?" "If neither, let's do a quick group debug."

> [LOST] **If they're lost:** "Start with just the models. Get Author and Book with the right properties. Then add the DbSet. Then seed data. Then the controller with `.Include()`. One step at a time."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, AI can generate Include statements, navigation properties, and LINQ queries. But you must comment every generated line. Show me you understand what `.Include(a => a.Books)` actually does."

> [SLIDE] **Slide:** Prompt template:
> "I have Author and Book models. Generate the Include query to show an author with all their books. Here are my models [paste]." Then comment each line.

> [TIP] **Teaching Tip:** Demonstrate asking AI for an Include query, then walk through adding comments. "This line starts the query on the Authors table. This line tells EF to also load the Books for each author. This line executes the query and returns a list."

> [ENGAGE] **Gen-Z:** "AI is your 'LINQ tutor' — it generates the query, you explain it. If you can't explain why `.Include()` is there, you didn't learn."

> [LOST] **If they're lost:** "Start by asking AI to explain concepts: 'What does .Include() do?' 'What's the N+1 problem?' Build understanding first, then use AI for code."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the relationship errors you WILL see this week. Most of them are 'forgot Include' or 'forgot await.'"

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | NullReferenceException on                |
> | product.Category.Name                    |
> | You forgot .Include(p => p.Category)     |
> +------------------------------------------+
> +------------------------------------------+
> | "A possible object cycle was detected"   |
> | JSON loops: Category->Products->Category   |
> | Fix: configure JSON to ignore cycles     |
> +------------------------------------------+
> +------------------------------------------+
> | Async method returns Task, not data      |
> | You forgot await                         |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "NullReferenceException on a navigation property is like clicking an Instagram link that goes nowhere. The link exists (the property), but you didn't load the page (.Include())."

> [Q&A] **Student Q:** "Why does my app work fine with 10 records but feel slow with 100?"
> **Short answer:** You might have the N+1 problem.
> **Real answer:** With 10 records, N+1 = 11 queries — fast enough to not notice. With 100 records, N+1 = 101 queries — noticeable lag. Check the SQL output window to see how many queries are running.
> **The hidden question:** "How do I check?" -> Look at the Visual Studio Output window while the app runs. Count the SELECT statements.

> [LOST] **If they're lost:** "The two things to check first: (1) Are you using `.Include()` for every navigation property you access? (2) Are you using `await` on every async method? Those fix 90% of this week's errors."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: if you access a navigation property, you MUST use `.Include()`. Without it, it's null."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. The N+1 problem is the core concept — show the visual difference between 1 query and N+1 queries. The #1 error is `NullReferenceException` from missing `.Include()` — normalize it as the expected learning curve. Use the Spotify playlist analogy repeatedly. Async is secondary; focus on relationships first.

---

