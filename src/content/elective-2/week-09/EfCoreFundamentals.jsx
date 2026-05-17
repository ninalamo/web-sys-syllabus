export default function EfCoreFundamentals() {
  return (
    <div className="page-content">
      <h2>Week 9: EF Core Fundamentals</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 8: Model Binding &amp; Validation"<br />
        🎯 This week: "Persist data by connecting our app to a real database using Entity Framework Core"<br />
        <br />
        <strong>Core Concepts:</strong><br />
        ▸ A. What is an ORM? (7 min)<br />▸ B. The `DbContext` (7 min)<br />▸ C. Code-First Migrations (6 min)<br />▸ D. LINQ Basics (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Pro-Tip (generated SQL) + AI Integration + Take-Home Mission (CRUD with EF Core)<br />
        <br />
        ✅ By end of lab: Understand ORM vs raw SQL; configure connection string; create DbContext and DbSet; run migrations; write basic LINQ `.Where()`
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
            <td>Lecture + Slides + DB Mapping</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (Migrations &amp; Setup)</td>
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
        <p>[TIP] <strong>Teaching Tip:</strong> If they had a DB course before this, they are used to writing raw SQL strings (<code>SELECT * FROM...</code>). EF Core will blow their minds, but the abstraction can be confusing. Ground it by showing the generated SQL in the console.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Writing raw SQL strings in C# is dangerous. If you misspell a column name, the compiler doesn't know, and your app crashes at runtime. Entity Framework (EF) Core fixes this. It turns your C# classes into database tables automatically."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Translator (Again)</p>
        <ul>
          <li><strong>C# App:</strong> Speaks Objects (Classes, Lists).</li>
          <li><strong>SQL Database:</strong> Speaks Tables (Rows, Columns).</li>
          <li><strong>Entity Framework (ORM):</strong> The universal translator. You give it a C# object, it translates it into an <code>INSERT</code> statement, talks to the DB, and translates the DB rows back into C# objects for you.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. What is an ORM? (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "ORM stands for Object-Relational Mapper. Instead of interacting with the database using SQL commands, we interact with it using C# methods."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">// Old Way (Raw SQL)
        "INSERT INTO Users (Name) VALUES ('Nina')";
      
        // EF Core Way (ORM)
        _db.Users.Add(new User &#123; Name = "Nina" &#125;);
        _db.SaveChanges();
      </code></pre>
      <p><strong>[TIP] Gen-Z Hook:</strong> An ORM is like a personal assistant. You just say "Save this user," and the assistant figures out the exact SQL paperwork needed to make it happen.</p>
      </blockquote>
      <h4>▸ B. The <code>DbContext</code> (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "The <code>DbContext</code> is the most important file in your data layer. It represents your active session with the database. Every table you want to query must be listed here as a <code>DbSet</code>."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">public class AppDbContext : DbContext &#123;
        public DbSet&lt;User&gt; Users &#123; get; set; &#125;
        public DbSet&lt;Product&gt; Products &#123; get; set; &#125;
        &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Explain that <code>DbSet&lt;User&gt;</code> is the C# equivalent of <code>CREATE TABLE Users</code>.</p>
      </blockquote>
      <h4>▸ C. Code-First Migrations (6 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "We don't open SQL Server Management Studio to create tables anymore. We write C# classes, and tell EF Core to generate the database based on our code. C# is the single source of truth."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-bash">dotnet ef migrations add InitialCreate
        dotnet ef database update
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Explain what a migration file actually is—it's a timestamped blueprint of instructions telling the DB how to change its structure to match the C# classes.</p>
      </blockquote>
      <h4>▸ D. LINQ Basics (5 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "LINQ (Language Integrated Query) is how we ask the database for data using C#."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">// SQL: SELECT * FROM Users WHERE Age &gt; 18
        var adults = _db.Users.Where(u =&gt; u.Age &gt; 18).ToList();
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Remind them of the Javascript <code>.filter()</code> method from previous weeks. LINQ uses the exact same declarative mindset, just translated to SQL.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's connect our app to a database, create a table from a C# class, and save our first record."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The Setup</strong><ul>
        <li><em>Action:</em> Add the EF Core NuGet packages (SqlServer and Tools). Add the connection string to <code>appsettings.json</code>.</li>
      </ul>
      </li>
      <li><strong>Step 2: The <code>DbContext</code></strong><ul>
      <li><em>Action:</em> Create <code>AppDbContext</code>. Add a <code>Student</code> model with an <code>Id</code> and <code>Name</code>. Add <code>DbSet&lt;Student&gt; Students</code> to the context. Register the context in <code>Program.cs</code>.</li>
      </ul>
      </li>
      <li><strong>Step 3: The Migration</strong><ul>
      <li><em>Action:</em> Run <code>add-migration</code> and <code>update-database</code>. Open SQL Server Object Explorer and physically show the students that the table was created.</li>
      </ul>
      </li>
      <li><strong>Step 4: CRUD Operations</strong><ul>
      <li><em>Action:</em> In a controller, inject the <code>AppDbContext</code>. Show an <code>Add</code> and <code>SaveChanges</code>.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Setup EF Core in an empty project using an InMemory Database (for speed). Create a <code>Book</code> model. Write a controller that adds 3 books on startup, and has an endpoint that returns all books published after the year 2000 using LINQ.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "The biggest mistake junior devs make with EF Core is calling <code>.ToList()</code> too early. <code>_db.Users.ToList().Where(u =&gt; u.Age &gt; 18)</code> will download ONE MILLION users from the database into the server's RAM, and then filter them. <code>_db.Users.Where(u =&gt; u.Age &gt; 18).ToList()</code> translates the filter into SQL, so the database only sends back the 5 users you need. Order matters. Database bandwidth is expensive."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> 5. AI Integration &amp; Debugging</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "How do I write a LINQ query for finding a user by email?" Not Allowed: "Build my entire DbContext and Models."</li>
        <li><strong>Common Error 1:</strong> <code>Unable to create an object of type 'AppDbContext'.</code> -&gt; Usually means your connection string is missing or you forgot to register the context in <code>Program.cs</code>.</li>
        <li><strong>Common Error 2:</strong> Saving data doesn't appear in the DB. -&gt; You forgot to call <code>await _db.SaveChangesAsync();</code>.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
      </blockquote><h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I understand the difference between raw SQL and an ORM.</li>
          <li><input disabled="" type="checkbox" /> I know how to configure a connection string in <code>appsettings.json</code>.</li>
          <li><input disabled="" type="checkbox" /> I can create a <code>DbContext</code> and add <code>DbSet</code> properties.</li>
          <li><input disabled="" type="checkbox" /> I can run <code>add-migration</code> and <code>update-database</code>.</li>
          <li><input disabled="" type="checkbox" /> I can write a basic LINQ <code>.Where()</code> query.</li>
        </ul>
      </blockquote>
      
      <blockquote>
      </blockquote><h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Database Initialization"
        Connect last week's User Registration form to a real SQL Database.</p>
        <ol>
          <li>Create the Models, DbContext, and run the migrations.</li>
          <li>When the user submits the form, if <code>ModelState.IsValid</code>, save the user to the database using <code>_db.Users.Add()</code>.</li>
          <li><strong>The Catch:</strong> Before saving, write a LINQ query to check if the <code>Email</code> already exists in the database. If it does, return a validation error to the view saying "Email already taken".</li>
        </ol>
      </blockquote>
      
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 7. Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> A project with the Models already built, but no EF Core packages installed.</li>
          <li><strong>Solution Repo:</strong> The fully configured project with EF Core SqlServer, completed migrations, and basic LINQ queries in the controller.</li>
        </ul>
      </blockquote>
    </div>
  )
}
