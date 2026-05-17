export default function E2W3ResoHttpReference() {
  return (
    <div className="page-content">
      <h1>Week 3: HTTP &amp; The Web Reference</h1>
      <h2>The Request-Response Cycle</h2>
      <pre><code>Client ---(Request)---&gt; Server
      Server ---(Response)---&gt; Client</code></pre>
      <h2>HTTP Methods</h2>
      <table><thead><tr>
        <th>Method</th>
        <th>Purpose</th>
        <th>Has Body</th>
        <th>CRUD</th>
      </tr></thead><tbody>
      <tr>
        <td>GET</td>
        <td>Retrieve data</td>
        <td>No</td>
        <td>Read</td>
      </tr>
      <tr>
        <td>POST</td>
        <td>Create new resource</td>
        <td>Yes</td>
        <td>Create</td>
      </tr>
      <tr>
        <td>PUT/PATCH</td>
        <td>Update existing</td>
        <td>Yes</td>
        <td>Update</td>
      </tr>
      <tr>
        <td>DELETE</td>
        <td>Remove resource</td>
        <td>No</td>
        <td>Delete</td>
      </tr>
      <h2>Status Codes</h2>
      <table><thead><tr>
        <th>Code</th>
        <th>Meaning</th>
      </tr></thead><tbody>
      <tr>
        <td>200 OK</td>
        <td>Everything worked</td>
      </tr>
      <tr>
        <td>201 Created</td>
        <td>POST succeeded</td>
      </tr>
      <tr>
        <td>301 Moved Permanently</td>
        <td>URL changed</td>
      </tr>
      <tr>
        <td>400 Bad Request</td>
        <td>Client sent bad data</td>
      </tr>
      <tr>
        <td>401 Unauthorized</td>
        <td>Not authenticated</td>
      </tr>
      <tr>
        <td>403 Forbidden</td>
        <td>Not authorized</td>
      </tr>
      <tr>
        <td>404 Not Found</td>
        <td>URL doesn't exist</td>
      </tr>
      <tr>
        <td>500 Server Error</td>
        <td>Server crashed</td>
      </tr>
      <h2>Statelessness</h2>
      <p>
      HTTP has amnesia — every request is isolated. Cookies, Sessions, and JWTs are used to maintain state across requests.
      </p>
      
      <h2>HttpClient in C#</h2>
      
      
      <pre><code>using var client = new HttpClient();
      client.DefaultRequestHeaders.Add("User-Agent", "MyApp");
      var response = await client.GetAsync("https://api.github.com/users/octocat");
      var body = await response.Content.ReadAsStringAsync();</code></pre>
      </tbody></table></tbody></table>
    </div>
  )
}
