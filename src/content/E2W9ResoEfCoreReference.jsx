export default function E2W9ResoEfCoreReference() {
  return (
    <div className="page-content">
      <h1>Week 9: EF Core Fundamentals Reference</h1>
      <h2>What is an ORM?</h2>
      <table><thead><tr>
        <th>Approach</th>
        <th>Code</th>
      </tr></thead><tbody>
      <tr>
        <td>Raw SQL</td>
        <td><code>"INSERT INTO Users (Name) VALUES ('Nina')"</code></td>
      </tr>
      <tr>
        <td>EF Core</td>
        <td><code>_db.Users.Add(new User &#123; Name = "Nina" &#125;); await _db.SaveChangesAsync();</code></td>
      </tr>
      <h2>DbContext</h2>
      <pre><code>public class AppDbContext : DbContext
      &#123;
      public DbSet&lt;User&gt; Users &#123; get; set; &#125;
      public DbSet&lt;Product&gt; Products &#123; get; set; &#125;
      &#125;</code></pre>
      <h2>Code-First Migrations</h2>
      <pre><code>dotnet ef migrations add InitialCreate
      dotnet ef database update</code></pre>
      <h2>Registration in Program.cs</h2>
      <pre><code>builder.Services.AddDbContext&lt;AppDbContext&gt;(options =&gt;
      options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));</code></pre>
      <h2>Connection String in appsettings.json</h2>
      <pre><code>&#123;
      "ConnectionStrings": &#123;
      "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=MyAppDb;Trusted_Connection=true"
      &#125;
      &#125;</code></pre>
      <h2>LINQ Basics</h2>
      <pre><code>// SQL: SELECT * FROM Users WHERE Age &gt; 18
      var adults = _db.Users.Where(u =&gt; u.Age &gt; 18).ToList();
      
      // Get by ID
      var user = _db.Users.FindAsync(id);
      
      // Add
      _db.Users.Add(newUser);
      await _db.SaveChangesAsync();
      
      // Update
      user.Name = "New Name";
      await _db.SaveChangesAsync();
      
      // Delete
      _db.Users.Remove(user);
      await _db.SaveChangesAsync();</code></pre>
      <h2>Performance Tip</h2>
      <p>
      Always call <code>.Where()</code> BEFORE <code>.ToList()</code> — never <code>.ToList().Where()</code>.
      </p></tbody></table>
    </div>
  )
}
