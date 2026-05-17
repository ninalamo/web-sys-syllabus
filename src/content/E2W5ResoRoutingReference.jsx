export default function E2W5ResoRoutingReference() {
  return (
    <div className="page-content">
      <h1>Week 5: Routing Deep Dive Reference</h1>
      <h2>Conventional Routing</h2>
      <pre><code>app.MapControllerRoute(
      name: "default",
      pattern: "&#123;controller=Home&#125;/&#123;action=Index&#125;/&#123;id?&#125;");</code></pre>
      <h2>Attribute Routing</h2>
      <pre><code>[Route("api/users")]
      public class UsersController : Controller
      &#123;
      [HttpGet("profile/&#123;username&#125;")]
      public IActionResult GetProfile(string username) &#123; ... &#125;
      &#125;</code></pre>
      <h2>Route Constraints</h2>
      <table><thead><tr>
        <th>Constraint</th>
        <th>Example</th>
        <th>Description</th>
      </tr></thead><tbody>
      <tr>
        <td><code>:int</code></td>
        <td><code>&#123;id:int&#125;</code></td>
        <td>Must be integer</td>
      </tr>
      <tr>
        <td><code>:guid</code></td>
        <td><code>&#123;id:guid&#125;</code></td>
        <td>Must be GUID</td>
      </tr>
      <tr>
        <td><code>:length(n)</code></td>
        <td><code>&#123;year:length(4)&#125;</code></td>
        <td>Exact length</td>
      </tr>
      <tr>
        <td><code>:min(n)</code></td>
        <td><code>&#123;age:min(0)&#125;</code></td>
        <td>Minimum value</td>
      </tr>
      <tr>
        <td><code>:range(a,b)</code></td>
        <td><code>&#123;month:range(1,12)&#125;</code></td>
        <td>Range of values</td>
      </tr>
      <h2>Optional Parameters</h2>
      <pre><code>&#123;id?&#125;  // The ? makes it optional</code></pre>
      <h2>Common Errors</h2>
      <table><thead><tr>
        <th>Error</th>
        <th>Cause</th>
      </tr></thead><tbody>
      <tr>
        <td><code>AmbiguousMatchException</code></td>
        <td>Two actions match the same URL</td>
      </tr>
      <tr>
        <td>404</td>
        <td>No route matches the URL pattern</td>
      </tr></tbody></table></tbody></table>
    </div>
  )
}
