export default function E2W14ResoSecurityReference() {
  return (
    <div className="page-content">
      <h1>Week 14: Security Fundamentals Reference</h1>
      <h2>Three Golden Rules</h2>
      <ol>
        <li><strong>Never trust user input</strong> — encode it, validate it, parameterize it</li>
        <li><strong>Never use <code>@Html.Raw()</code> on user input</strong> — Razor auto-encodes by default</li>
        <li><strong>Always include anti-forgery tokens</strong> on POST forms</li>
      </ol>
      <h2>XSS (Cross-Site Scripting)</h2>
      <pre><code>&lt;!-- VULNERABLE: renders user input as HTML --&gt;
      @Html.Raw(ViewBag.UserComment)
      
      &lt;!-- SAFE: Razor auto-encodes --&gt;
      @ViewBag.UserComment</code></pre>
      <h2>SQL Injection</h2>
      <pre><code>// VULNERABLE: string concatenation
      _db.Users.FromSqlRaw($"SELECT * FROM Users WHERE Email = '&#123;email&#125;'");
      
      // SAFE: LINQ (parameterized)
      _db.Users.Where(u =&gt; u.Email == email);
      
      // SAFE: Parameterized raw SQL
      _db.Users.FromSqlRaw("SELECT * FROM Users WHERE Email = &#123;0&#125;", email);</code></pre>
      <h2>CSRF (Cross-Site Request Forgery)</h2>
      <pre><code>&lt;!-- VULNERABLE: no token --&gt;
      &lt;form method="post" action="/account/transfer"&gt;
      
      &lt;!-- SAFE: includes anti-forgery token --&gt;
      &lt;form method="post" action="/account/transfer"&gt;
      @Html.AntiForgeryToken()
      &lt;/form&gt;</code></pre>
      <pre><code>// SAFE: validates the token
      [HttpPost]
      [ValidateAntiForgeryToken]
      public IActionResult Transfer(TransferModel model) &#123; &#125;</code></pre>
      <h2>Security Checklist</h2>
      <ul>
        <li>[ ] All POST forms include <code>@Html.AntiForgeryToken()</code></li>
        <li>[ ] All POST actions have <code>[ValidateAntiForgeryToken]</code></li>
        <li>[ ] Never use <code>@Html.Raw()</code> on user input</li>
        <li>[ ] All database queries use LINQ (not <code>FromSqlRaw</code>)</li>
        <li>[ ] <code>app.UseAuthentication()</code> is before <code>app.UseAuthorization()</code></li>
        <li>[ ] HTTPS is enabled in production</li>
        <li>[ ] Passwords are hashed (Identity does this automatically)</li>
        <li>[ ] Error pages don't show stack traces in production</li>
      </ul>
    </div>
  )
}
