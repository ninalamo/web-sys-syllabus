export default function E2W8ResoModelBindingReference() {
  return (
    <div className="page-content">
      <h1>Week 8: Model Binding &amp; Validation Reference</h1>
      <h2>Model Binding</h2>
      <p>
      The <code>name</code> attribute in HTML maps to C# parameter names:
      </p>
      
      <pre><code>&lt;input type="text" name="firstName" /&gt;</code></pre>
      
      
      <pre><code>[HttpPost]
      public IActionResult Save(string firstName) &#123; &#125;</code></pre>
      
      
      <h2>Complex Object Binding</h2>
      
      
      <pre><code>public class RegistrationDto
      &#123;
      public string Email &#123; get; set; &#125;
      public string Password &#123; get; set; &#125;
      &#125;
      
      [HttpPost]
      public IActionResult Register(RegistrationDto request) &#123; &#125;</code></pre>
      
      
      <h2>Common Data Annotations</h2>
      
      
      <table><thead><tr>
        <th>Annotation</th>
        <th>Purpose</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td><code>[Required]</code></td>
        <td>Field must not be empty</td>
      </tr>
      
      <tr>
        <td><code>[EmailAddress]</code></td>
        <td>Validates email format</td>
      </tr>
      
      <tr>
        <td><code>[StringLength(100)]</code></td>
        <td>Max length</td>
      </tr>
      
      <tr>
        <td><code>[MinLength(10)]</code></td>
        <td>Min length</td>
      </tr>
      
      <tr>
        <td><code>[Range(1, 100)]</code></td>
        <td>Numeric range</td>
      </tr>
      
      <tr>
        <td><code>[Compare("Field")]</code></td>
        <td>Must match another field</td>
      </tr>
      
      <tr>
        <td><code>[Phone]</code></td>
        <td>Validates phone number</td>
      </tr>
      
      <tr>
        <td><code>[RegularExpression("pattern")]</code></td>
        <td>Regex validation</td>
      </tr>
      
      
      <h2>ModelState.IsValid</h2>
      
      
      <pre><code>if (!ModelState.IsValid)
      &#123;
      return View(model); // Return with errors
      &#125;
      // Save data...</code></pre>
      
      
      <h2>Tag Helpers for Validation</h2>
      
      
      <pre><code>&lt;form asp-action="Index" method="post"&gt;
      &lt;input asp-htmlFor="Email" /&gt;
      &lt;span asp-validation-htmlFor="Email" className="text-danger"&gt;&lt;/span&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
      &lt;/form&gt;</code></pre>
      </tbody></table>
    </div>
  )
}
