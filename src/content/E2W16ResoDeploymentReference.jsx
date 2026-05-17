export default function E2W16ResoDeploymentReference() {
  return (
    <div className="page-content">
      <h1>Week 16: Deployment Reference</h1>
      <h2>Production-Ready Program.cs</h2>
      <pre><code>var app = builder.Build();
      
      if (!app.Environment.IsDevelopment())
      &#123;
      app.UseExceptionHandler("/Home/Error");
      app.UseHsts();
      &#125;
      
      // Auto-migration on startup (for class projects)
      using (var scope = app.Services.CreateScope())
      &#123;
      var db = scope.ServiceProvider.GetRequiredService&lt;AppDbContext&gt;();
      db.Database.Migrate();
      &#125;
      
      app.UseHttpsRedirection();
      app.UseStaticFiles();
      app.UseRouting();
      app.UseAuthentication();  // MUST be before UseAuthorization
      app.UseAuthorization();
      app.MapControllerRoute(
      name: "default",
      pattern: "&#123;controller=Home&#125;/&#123;action=Index&#125;/&#123;id?&#125;");
      app.Run();</code></pre>
      <h2>Deployment Checklist</h2>
      <ul>
        <li>[ ] Code pushed to GitHub</li>
        <li>[ ] Connection string set as environment variable (never committed!)</li>
        <li>[ ] Build command configured</li>
        <li>[ ] Start command configured</li>
        <li>[ ] Migrations ready (<code>db.Database.Migrate()</code>)</li>
        <li>[ ] HTTPS enabled</li>
        <li>[ ] No hardcoded secrets in code</li>
        <li>[ ] Error pages don't show stack traces</li>
      </ul>
      <h2>Common Deployment Errors</h2>
      <table><thead><tr>
        <th>Error</th>
        <th>Likely Cause</th>
      </tr></thead><tbody>
      <tr>
        <td>502 Bad Gateway</td>
        <td>App crashed on startup — check logs</td>
      </tr>
      <tr>
        <td>CSS broken</td>
        <td>Missing <code>UseStaticFiles()</code> or wrong paths</td>
      </tr>
      <tr>
        <td>Redirect loop</td>
        <td><code>UseHttpsRedirection()</code> conflicts with platform's HTTPS</td>
      </tr>
      <tr>
        <td>Database errors</td>
        <td>Missing migration or wrong connection string</td>
      </tr>
      <tr>
        <td>500 error</td>
        <td>Missing environment variable</td>
      </tr></tbody></table>
    </div>
  )
}
