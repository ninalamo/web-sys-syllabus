export default function E2W13ResoIdentityReference() {
  return (
    <div className="page-content">
      <h1>Week 13 — Identity Setup Commands</h1>
      <pre><code># Install packages
      dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore
      dotnet add package Microsoft.AspNetCore.Identity.UI
      
      # Update DbContext
      public class AppDbContext : IdentityDbContext&lt;IdentityUser&gt;
      &#123;
      public AppDbContext(DbContextOptions&lt;AppDbContext&gt; options) : base(options) &#123; &#125;
      &#125;
      
      # Program.cs
      builder.Services.AddDefaultIdentity&lt;IdentityUser&gt;(options =&gt;
      &#123;
      options.SignIn.RequireConfirmedAccount = false;
      options.Password.RequireDigit = true;
      options.Password.RequiredLength = 8;
      &#125;)
      .AddEntityFrameworkStores&lt;AppDbContext&gt;();
      
      # Middleware order (CRITICAL)
      app.UseAuthentication();  // MUST be before UseAuthorization
      app.UseAuthorization();
      
      # Scaffold Identity pages
      dotnet aspnet-codegenerator identity -dc AppDbContext --files "Account.Register;Account.Login;Account.Logout"</code></pre>
      <h2>Key Concepts</h2>
      <table><thead><tr>
        <th>Concept</th>
        <th>Description</th>
      </tr></thead><tbody>
      <tr>
        <td>Authentication</td>
        <td>Who are you? (login)</td>
      </tr>
      <tr>
        <td>Authorization</td>
        <td>What can you do? (roles)</td>
      </tr>
      <tr>
        <td><code>IdentityUser</code></td>
        <td>Built-in user model</td>
      </tr>
      <tr>
        <td><code>UserManager</code></td>
        <td>Manages user data</td>
      </tr>
      <tr>
        <td><code>SignInManager</code></td>
        <td>Manages sessions</td>
      </tr>
      <tr>
        <td><code>[Authorize]</code></td>
        <td>Attribute to protect routes</td>
      </tr></tbody></table>
    </div>
  )
}
