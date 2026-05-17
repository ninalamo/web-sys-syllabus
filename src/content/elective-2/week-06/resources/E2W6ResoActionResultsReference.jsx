export default function E2W6ResoActionResultsReference() {
  return (
    <div className="page-content">
      <h1>Week 6: Controllers &amp; Action Results Reference</h1>
      <h2>IActionResult Return Types</h2>
      <table><thead><tr>
        <th>Helper Method</th>
        <th>HTTP Status</th>
        <th>Description</th>
      </tr></thead><tbody>
      <tr>
        <td><code>View()</code></td>
        <td>200 OK</td>
        <td>Returns HTML view</td>
      </tr>
      <tr>
        <td><code>Json(obj)</code></td>
        <td>200 OK</td>
        <td>Returns JSON data</td>
      </tr>
      <tr>
        <td><code>Redirect(url)</code></td>
        <td>302 Found</td>
        <td>Redirects to another URL</td>
      </tr>
      <tr>
        <td><code>RedirectToAction(name, controller)</code></td>
        <td>302 Found</td>
        <td>Redirects to another action</td>
      </tr>
      <tr>
        <td><code>NotFound()</code></td>
        <td>404 Not Found</td>
        <td>Resource not found</td>
      </tr>
      <tr>
        <td><code>BadRequest()</code></td>
        <td>400 Bad Request</td>
        <td>Invalid input</td>
      </tr>
      <tr>
        <td><code>Unauthorized()</code></td>
        <td>401 Unauthorized</td>
        <td>Not authenticated</td>
      </tr>
      <tr>
        <td><code>File(bytes, type)</code></td>
        <td>200 OK</td>
        <td>Returns a file</td>
      </tr>
      <tr>
        <td><code>Content(str)</code></td>
        <td>200 OK</td>
        <td>Returns raw string</td>
      </tr>
      <tr>
        <td><code>StatusCode(code)</code></td>
        <td>Custom</td>
        <td>Any HTTP status code</td>
      </tr>
      <h2>Post-Redirect-Get (PRG) Pattern</h2>
      <pre><code>[HttpPost]
      public IActionResult Submit(FormModel model)
      &#123;
      if (!ModelState.IsValid)
      return View(model); // Return form with errors
      
      // Save data...
      
      return RedirectToAction("Success"); // PRG: redirect after POST
      &#125;
      
      public IActionResult Success()
      &#123;
      return View();
      &#125;</code></pre>
      <p>
      This prevents duplicate form submissions on page refresh.
      </p></tbody></table>
    </div>
  )
}
