export default function E3W10ResoReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 10: ASP.NET Core Web API — Resources &amp; Reference</h1>
      <h2>Core Concepts Quick Reference</h2>
      <h3>1. ControllerBase vs Controller</h3>
      <pre><code>// MVC — returns Views (HTML)
      public class WebController : Controller &#123; return View(); &#125;
      
      // API — returns JSON data
      public class ApiController : ControllerBase &#123; return Ok(data); &#125;</code></pre>
      <h3>2. [ApiController] Attribute</h3>
      <pre><code>[ApiController]
      [Route("api/[controller]")]
      public class UsersController : ControllerBase
      &#123;
      // Auto-reads request body
      // Auto-returns 400 if ModelState is invalid
      &#125;</code></pre>
      <h3>3. CORS</h3>
      <pre><code>// Program.cs
      builder.Services.AddCors(options =&gt;
      &#123;
      options.AddPolicy("AllowFrontend", policy =&gt;
      &#123;
      policy.WithOrigins("http://localhost:5173")
      .AllowAnyHeader()
      .AllowAnyMethod();
      &#125;);
      &#125;);
      
      app.UseCors("AllowFrontend");</code></pre>
      <h3>4. Asynchronous APIs</h3>
      <pre><code>[HttpGet]
      public async Task&lt;IActionResult&gt; GetUsers()
      &#123;
      return Ok(await _db.Users.ToListAsync());
      &#125;</code></pre>
      <h3>5. Common Return Types</h3>
      <table><thead><tr>
        <th>Method</th>
        <th>Status Code</th>
        <th>Use Case</th>
      </tr></thead><tbody>
      <tr>
        <td><code>Ok(data)</code></td>
        <td>200</td>
        <td>Successful GET/PUT</td>
      </tr>
      <tr>
        <td><code>CreatedAtAction()</code></td>
        <td>201</td>
        <td>Successful POST</td>
      </tr>
      <tr>
        <td><code>NotFound()</code></td>
        <td>404</td>
        <td>Resource not found</td>
      </tr>
      <tr>
        <td><code>NoContent()</code></td>
        <td>204</td>
        <td>Successful DELETE</td>
      </tr>
      <tr>
        <td><code>BadRequest()</code></td>
        <td>400</td>
        <td>Invalid input</td>
      </tr>
      <h2>Learning Baseline Checklist</h2>
      <ul>
        <li>[ ] I can create a Controller in ASP.NET Core for APIs</li>
        <li>[ ] I can explain why CORS errors happen and how to fix them</li>
        <li>[ ] I can use Postman to test GET and POST requests</li>
        <li>[ ] I understand the difference between Controller and ControllerBase</li>
      </ul>
      <h2>Common Errors</h2>
      <table><thead><tr>
        <th>Error</th>
        <th>Cause</th>
        <th>Fix</th>
      </tr></thead><tbody>
      <tr>
        <td>Missing <code>[ApiController]</code></td>
        <td>Validation doesn't auto-fail</td>
        <td>Add the attribute</td>
      </tr>
      <tr>
        <td>CORS error in browser</td>
        <td>Different origins</td>
        <td>Configure CORS in Program.cs</td>
      </tr>
      <tr>
        <td>Model is null</td>
        <td>Missing <code>[FromBody]</code> or bad JSON</td>
        <td>Check request body format</td>
      </tr></tbody></table></tbody></table>
    </div>
  )
}
