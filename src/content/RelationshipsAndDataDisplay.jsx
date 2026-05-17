export default function RelationshipsAndDataDisplay() {
  return (
    <div className="page-content">
      <h2>Week 10: Relationships &amp; Data Display</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 9: EF Core Fundamentals"<br />
        🎯 This week: "Connect tables — defining relationships, eager-loading related data, and displaying it with ViewModels"<br />
        <br />
        <strong>Core Concepts:</strong><br />
        ▸ A. 1-to-Many in C# (7 min)<br />▸ B. Eager Loading / `.Include()` (7 min)<br />▸ C. ViewModels (6 min)<br />▸ D. Displaying Related Data (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality (Lazy vs Eager) + AI Integration + Take-Home Mission (One-to-Many CRUD)<br />
        <br />
        ✅ By end of lab: Define 1-to-Many relationship; understand why `.Include()` is needed; create a ViewModel; loop through related data safely in Razor
      </div>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (Lab - ~150 min)</strong></p>
        <table>
          <thead>
            <tr>
              <th>Block</th>
              <th>Time</th>
              <th>Format</th>
            </tr>
          </thead>
          <tbody><tr>
            <td>Hook + Analogy</td>
            <td>15 min</td>
            <td>Lecture + Whiteboard</td>
          </tr>
          <tr>
            <td>Concept Discussion</td>
            <td>25 min</td>
            <td>Lecture + Slides + C# Models</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (.Include and ViewModels)</td>
          </tr>
          <tr>
            <td>Break</td>
            <td>10 min</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Exercise</td>
            <td>55 min</td>
            <td>Lab (solo or pairs)</td>
          </tr>
          <tr>
            <td>Debugging + Wrap</td>
            <td>15 min</td>
            <td>Group Debug + Q&amp;A</td>
          </tr>
          <tr>
            <td>Buffer</td>
            <td>10 min</td>
            <td>Overflow / Stretch discussion</td>
          </tr>
        </tbody></table>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The hardest part of this week is the <code>NullReferenceException</code> when a student forgets to <code>.Include()</code> related data. Hammer this concept: EF Core is lazy by default.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Last week we saved a single User to a table. But real apps are interconnected. A User has many Orders. An Order has many Products. How do we tell our C# code that these things are linked?"</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Parent and the Children</p>
        <ul>
          <li><strong>1-to-Many:</strong> Think of a <code>Category</code> (e.g., Electronics) as a parent holding a box. Inside that box is a <code>List&lt;Product&gt;</code> (Phones, Laptops).</li>
          <li>If you just ask the database for the Parent, it gives you the parent but leaves the box empty to save time. You must explicitly ask it to <code>.Include()</code> the contents of the box.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. 1-to-Many in C# (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "In SQL, you use Primary and Foreign Keys. In EF Core, we just use Navigation Properties. We give the child a reference to the parent, and the parent a list of children."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">public class Category &#123;
        public int Id &#123; get; set; &#125;
        public List&lt;Product&gt; Products &#123; get; set; &#125; // The Many
        &#125;
        public class Product &#123;
        public int Id &#123; get; set; &#125;
        public int CategoryId &#123; get; set; &#125; // The Foreign Key
        public Category Category &#123; get; set; &#125; // The Parent
        &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Show them how running a migration creates the exact Foreign Key constraint in SQL Server just from these properties.</p>
      </blockquote>
      <h4>▸ B. Eager Loading (<code>.Include</code>) (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "EF Core assumes you only want the main object. If you load a Category, its <code>Products</code> list will be <code>null</code>. To get the products, you must Eager Load them."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">// WRONG: Products will be null
        var cat = _db.Categories.First(c =&gt; c.Id == 1);
      
        // RIGHT: Products will be populated
        var cat = _db.Categories.Include(c =&gt; c.Products).First(c =&gt; c.Id == 1);
      </code></pre>
      <p><strong>[TIP] Gen-Z Hook:</strong> Not using <code>.Include()</code> is like ordering food delivery but forgetting to check the "include utensils" box. You get the food, but you can't actually eat it.</p>
      </blockquote>
      <h4>▸ C. ViewModels (6 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "A ViewModel is a custom class created specifically for a Razor View. If a page needs a Category, a list of latest News, and the current User's name, you build a ViewModel to hold all three."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">public class DashboardViewModel &#123;
        public Category Category &#123; get; set; &#125;
        public List&lt;string&gt; RecentNews &#123; get; set; &#125;
        &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Explain that passing raw Database entities straight to a View is dangerous because it exposes sensitive data (like password hashes). ViewModels act as a security filter.</p>
      </blockquote>
      <h4>▸ D. Displaying Related Data (5 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Once we pass the ViewModel to the Razor view, we can use standard C# loops to render HTML."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-html">&lt;h2&gt;@Model.Category.Name&lt;/h2&gt;
        @foreach(var prod in Model.Category.Products) &#123;
        &lt;li&gt;@prod.Name&lt;/li&gt;
        &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Warn them: If the list is empty or null, the loop will crash the entire page. Always use <code>@if(Model.Category.Products != null)</code> first.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build a blog with Authors and Posts, seed some data, and render it."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The Models &amp; Migration</strong><ul>
        <li><em>Action:</em> Create <code>Author</code> and <code>Post</code> classes. Run <code>add-migration</code> and <code>update-database</code>.</li>
      </ul>
      </li>
      <li><strong>Step 2: Seeding Data</strong><ul>
      <li><em>Action:</em> Quickly manually insert an Author and two Posts into the database via SQL Server Object Explorer.</li>
      </ul>
      </li>
      <li><strong>Step 3: The Crash Demo</strong><ul>
      <li><em>Action:</em> In the Controller, load the Author <em>without</em> <code>.Include()</code>. Pass it to a View that loops over <code>Author.Posts</code>. Run the app. Watch the <code>NullReferenceException</code>.</li>
      </ul>
      </li>
      <li><strong>Step 4: The Fix</strong><ul>
      <li><em>Action:</em> Add <code>.Include(a =&gt; a.Posts)</code>. Refresh. Show the posts appearing.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Build a "School System". Create a <code>Course</code> and <code>Student</code> model (1-to-many: one course has many students). Create a ViewModel. Write a page that displays the Course name and a list of all enrolled Students.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "The N+1 Query Problem is the #1 reason enterprise apps slow down. If you query 50 Categories, and inside a Razor View you loop through them and ask for their Products, Entity Framework will secretly execute 50 individual SQL queries behind the scenes. Your app will crawl. ALWAYS use <code>.Include()</code> in the controller so it does exactly ONE SQL <code>JOIN</code> query instead of 50."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> 5. AI Integration &amp; Debugging</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "How do I configure a many-to-many relationship?" Not Allowed: "Write my entire DbContext configuration."</li>
        <li><strong>Common Error 1:</strong> <code>NullReferenceException</code> in the Razor view. -&gt; You forgot to <code>.Include()</code> the related data in your controller.</li>
        <li><strong>Common Error 2:</strong> <code>Invalid column name 'CategoryId'</code>. -&gt; You added the property to the C# class but forgot to run <code>add-migration</code> and <code>update-database</code>.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
      </blockquote><h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I know how to define a 1-to-Many relationship in C#.</li>
          <li><input disabled="" type="checkbox" /> I understand why EF Core uses <code>.Include()</code>.</li>
          <li><input disabled="" type="checkbox" /> I can create a ViewModel to pass combined data to a view.</li>
          <li><input disabled="" type="checkbox" /> I can loop through related data safely in a Razor View.</li>
        </ul>
      </blockquote>
      
      <blockquote>
      </blockquote><h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The E-Commerce Dashboard"</p>
        <ol>
          <li>Extend the School System exercise.</li>
          <li>Add a <code>Teacher</code> model.</li>
          <li><strong>The Catch:</strong> Build a <code>DashboardViewModel</code> that contains a list of ALL Courses, a list of ALL Teachers, and a total count of Students. Pass this single ViewModel to a <code>Dashboard/Index</code> view and display three distinct sections on the HTML page.</li>
        </ol>
      </blockquote>
      
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 7. Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> An empty MVC project with EF Core installed.</li>
          <li><strong>Solution Repo:</strong> A fully working 1-to-Many relationship showing Eager Loading and a Dashboard ViewModel.</li>
        </ul>
      </blockquote>
    </div>
  )
}
