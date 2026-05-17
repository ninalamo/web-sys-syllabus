export default function E3W12ResoReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 12: API Versioning &amp; Documentation — Resources &amp; Reference</h1>
      <h2>Core Concepts Quick Reference</h2>
      <h3>1. Why Version APIs?</h3>
      <ul>
        <li>Websites update instantly; mobile apps do not</li>
        <li>Users might not update for 6 months</li>
        <li>Breaking changes require a new version</li>
        <li>Adding a new field does NOT require a new version</li>
      </ul>
      <h3>2. URL Versioning</h3>
      <pre><code>[ApiVersion("1.0")]
      [Route("api/v&#123;version:apiVersion&#125;/users")]
      public class UsersV1Controller : ControllerBase &#123; ... &#125;</code></pre>
      <h3>3. Swagger / OpenAPI</h3>
      <p>
      Swagger automatically reads your C# code and generates an interactive webpage documenting your API.
      </p>
      
      <pre><code>// Program.cs
      builder.Services.AddEndpointsApiExplorer();
      builder.Services.AddSwaggerGen();
      
      if (app.Environment.IsDevelopment())
      &#123;
      app.UseSwagger();
      app.UseSwaggerUI();
      &#125;</code></pre>
      
      
      <h3>4. XML Comments</h3>
      
      
      <pre><code>/// &lt;summary&gt;
      /// Retrieves a specific user by their ID.
      /// &lt;/summary&gt;
      /// &lt;param name="id"&gt;The unique identifier of the user.&lt;/param&gt;
      /// &lt;returns&gt;A single user object.&lt;/returns&gt;
      [HttpGet("&#123;id&#125;")]
      public IActionResult GetUser(int id) &#123; ... &#125;</code></pre>
      
      <br />Enable in <code>.csproj</code>:
      
      <pre><code>&lt;GenerateDocumentationFile&gt;true&lt;/GenerateDocumentationFile&gt;</code></pre>
      
      
      <h3>5. Versioning Setup</h3>
      
      
      <pre><code>// Program.cs
      builder.Services.AddApiVersioning(options =&gt;
      &#123;
      options.DefaultApiVersion = new ApiVersion(1, 0);
      options.AssumeDefaultVersionWhenUnspecified = true;
      options.ReportApiVersions = true;
      &#125;);</code></pre>
      
      
      <h2>Learning Baseline Checklist</h2>
      
      
      <ul>
        <li>[ ] I understand why API versioning is necessary for mobile apps</li>
        <li>[ ] I can configure URL-based API versioning in ASP.NET Core</li>
        <li>[ ] I know how to navigate and use the Swagger UI</li>
        <li>[ ] I can write XML <code>///</code> comments that appear in Swagger</li>
      
      </ul>
      
      <h2>Common Errors</h2>
      
      
      <table><thead><tr>
        <th>Error</th>
        <th>Cause</th>
        <th>Fix</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>XML comments don't show in Swagger</td>
        <td>Swagger config doesn't include XML file</td>
        <td>Add <code>IncludeXmlComments()</code></td>
      </tr>
      
      <tr>
        <td><code>AmbiguousMatchException</code></td>
        <td>Missing <code>[ApiVersion]</code> attribute</td>
        <td>Add version attribute to controllers</td>
      </tr>
      </tbody></table>
    </div>
  )
}
