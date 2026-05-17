## Week 10: Relationships & Data Display

> [TIME] **Session Pacing (180 min)**
| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + C# Models |
| Code Walkthrough | 30 min | Live Code (.Include and ViewModels) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip:** The hardest part of this week is the `NullReferenceException` when a student forgets to `.Include()` related data. Hammer this concept: EF Core is lazy by default.

---

### 1. The Hook & The Analogy

> [SPEAK] **Script:** "Last week we saved a single User to a table. But real apps are interconnected. A User has many Orders. An Order has many Products. How do we tell our C# code that these things are linked?"

> [BOARD] **Whiteboard Analogy:** The Parent and the Children
> *   **1-to-Many:** Think of a `Category` (e.g., Electronics) as a parent holding a box. Inside that box is a `List<Product>` (Phones, Laptops).
> *   If you just ask the database for the Parent, it gives you the parent but leaves the box empty to save time. You must explicitly ask it to `.Include()` the contents of the box.

---

### 2. Core Concepts & Discussion Topics

#### Topic A: 1-to-Many in C#
> **[SPEAK] Discussion:** "In SQL, you use Primary and Foreign Keys. In EF Core, we just use Navigation Properties. We give the child a reference to the parent, and the parent a list of children."
>
> **[CODE] Example:**
> ```csharp
> public class Category {
>     public int Id { get; set; }
>     public List<Product> Products { get; set; } // The Many
> }
> public class Product {
>     public int Id { get; set; }
>     public int CategoryId { get; set; } // The Foreign Key
>     public Category Category { get; set; } // The Parent
> }
> ```
>
> **[TIP] Instructor Tip:** Show them how running a migration creates the exact Foreign Key constraint in SQL Server just from these properties.

#### Topic B: Eager Loading (`.Include`)
> **[SPEAK] Discussion:** "EF Core assumes you only want the main object. If you load a Category, its `Products` list will be `null`. To get the products, you must Eager Load them."
>
> **[CODE] Example:**
> ```csharp
> // WRONG: Products will be null
> var cat = _db.Categories.First(c => c.Id == 1);
> 
> // RIGHT: Products will be populated
> var cat = _db.Categories.Include(c => c.Products).First(c => c.Id == 1);
> ```
>
> **[TIP] Gen-Z Hook:** Not using `.Include()` is like ordering food delivery but forgetting to check the "include utensils" box. You get the food, but you can't actually eat it.

#### Topic C: ViewModels
> **[SPEAK] Discussion:** "A ViewModel is a custom class created specifically for a Razor View. If a page needs a Category, a list of latest News, and the current User's name, you build a ViewModel to hold all three."
>
> **[CODE] Example:**
> ```csharp
> public class DashboardViewModel {
>     public Category Category { get; set; }
>     public List<string> RecentNews { get; set; }
> }
> ```
>
> **[TIP] Instructor Tip:** Explain that passing raw Database entities straight to a View is dangerous because it exposes sensitive data (like password hashes). ViewModels act as a security filter.

#### Topic D: Displaying Related Data
> **[SPEAK] Discussion:** "Once we pass the ViewModel to the Razor view, we can use standard C# loops to render HTML."
>
> **[CODE] Example:**
> ```html
> <h2>@Model.Category.Name</h2>
> @foreach(var prod in Model.Category.Products) {
>     <li>@prod.Name</li>
> }
> ```
>
> **[TIP] Instructor Tip:** Warn them: If the list is empty or null, the loop will crash the entire page. Always use `@if(Model.Category.Products != null)` first.

---

### 3. Code Walkthrough / Live Coding Blueprint

> [SPEAK] **Script:** "Let's build a blog with Authors and Posts, seed some data, and render it."

*   **Step 1: The Models & Migration**
    *   *Action:* Create `Author` and `Post` classes. Run `add-migration` and `update-database`.
*   **Step 2: Seeding Data**
    *   *Action:* Quickly manually insert an Author and two Posts into the database via SQL Server Object Explorer.
*   **Step 3: The Crash Demo**
    *   *Action:* In the Controller, load the Author *without* `.Include()`. Pass it to a View that loops over `Author.Posts`. Run the app. Watch the `NullReferenceException`.
*   **Step 4: The Fix**
    *   *Action:* Add `.Include(a => a.Posts)`. Refresh. Show the posts appearing.

---

### 4. From the Trenches (Pro-Tip)

> [TRENCHES] **Instructor Script:** "The N+1 Query Problem is the #1 reason enterprise apps slow down. If you query 50 Categories, and inside a Razor View you loop through them and ask for their Products, Entity Framework will secretly execute 50 individual SQL queries behind the scenes. Your app will crawl. ALWAYS use `.Include()` in the controller so it does exactly ONE SQL `JOIN` query instead of 50."

---

### 5. AI Integration & Debugging

*   **AI Policy:** Allowed: "How do I configure a many-to-many relationship?" Not Allowed: "Write my entire DbContext configuration."
*   **Common Error 1:** `NullReferenceException` in the Razor view. -> You forgot to `.Include()` the related data in your controller.
*   **Common Error 2:** `Invalid column name 'CategoryId'`. -> You added the property to the C# class but forgot to run `add-migration` and `update-database`.

---

### 6. Exercise & Homework

> [TIME] **In-Class Exercise (55 min):** Build a "School System". Create a `Course` and `Student` model (1-to-many: one course has many students). Create a ViewModel. Write a page that displays the Course name and a list of all enrolled Students.

> ### Learning Baseline (Self-Assessment)
> > **[ASSESSMENT]** By the end of this week, students must be able to say "Yes" to:
> > - [ ] I know how to define a 1-to-Many relationship in C#.
> > - [ ] I understand why EF Core uses `.Include()`.
> > - [ ] I can create a ViewModel to pass combined data to a view.
> > - [ ] I can loop through related data safely in a Razor View.

> ### Take-Home Mission
> > **[HOMEWORK]** **Mission:** "The E-Commerce Dashboard"
> > 1. Extend the School System exercise.
> > 2. Add a `Teacher` model.
> > 3. **The Catch:** Build a `DashboardViewModel` that contains a list of ALL Courses, a list of ALL Teachers, and a total count of Students. Pass this single ViewModel to a `Dashboard/Index` view and display three distinct sections on the HTML page.

---

### 7. Instructor Assets Blueprint

> **[ASSETS]** What to prepare before this class:
> - **Starter Repo:** An empty MVC project with EF Core installed.
> - **Solution Repo:** A fully working 1-to-Many relationship showing Eager Loading and a Dashboard ViewModel.
