export default function E3W9ResoReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 9: API Design Philosophy — Resources &amp; Reference</h1>
      <h2>Core Concepts Quick Reference</h2>
      <h3>1. RESTful Principles</h3>
      <p>
      URLs represent Resources (Nouns). HTTP Methods represent Actions (Verbs).
      </p>
      
      <pre><code>BAD:  GET /getAllUsers
      BAD:  POST /createNewUser
      
      GOOD: GET    /users       (Returns a list)
      GOOD: POST   /users       (Creates one)
      GOOD: GET    /users/5     (Returns user #5)
      GOOD: DELETE /users/5     (Deletes user #5)</code></pre>
      
      
      <h3>2. HTTP Status Codes</h3>
      
      
      <table><thead><tr>
        <th>Code</th>
        <th>Meaning</th>
        <th>When to use</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>200</td>
        <td>OK</td>
        <td>Normal success</td>
      </tr>
      
      <tr>
        <td>201</td>
        <td>Created</td>
        <td>Success for POST</td>
      </tr>
      
      <tr>
        <td>400</td>
        <td>Bad Request</td>
        <td>Frontend sent bad data</td>
      </tr>
      
      <tr>
        <td>401</td>
        <td>Unauthorized</td>
        <td>No token / Not logged in</td>
      </tr>
      
      <tr>
        <td>404</td>
        <td>Not Found</td>
        <td>Resource doesn't exist</td>
      </tr>
      
      <tr>
        <td>500</td>
        <td>Server Error</td>
        <td>Backend developer failed to catch exception</td>
      </tr>
      
      
      <h3>3. JSON Response Standard</h3>
      
      
      <pre><code>&#123;
      "data": &#123; "id": 5, "name": "Nina" &#125;,
      "success": true,
      "message": null
      &#125;</code></pre>
      
      
      <h3>4. Pagination &amp; Filtering</h3>
      
      
      <pre><code>GET /users?page=2&amp;limit=50&amp;sort=name_asc</code></pre>
      
      
      <ul>
        <li>Query parameters (<code>?key=value</code>) = filtering, sorting, pagination</li>
        <li>Path parameters (<code>/users/5</code>) = identifying a specific resource</li>
      
      </ul>
      
      <h3>5. API Contract Rules</h3>
      
      
      <ul>
        <li>Never return the entire database — use pagination</li>
        <li>Don't nest objects 10 layers deep — keep it flat</li>
        <li>Returning 200 OK for an error = broken contract</li>
      
      </ul>
      
      <h2>Learning Baseline Checklist</h2>
      
      
      <ul>
        <li>[ ] I can design RESTful URLs using Nouns instead of Verbs</li>
        <li>[ ] I understand when to use GET vs POST vs PUT vs DELETE</li>
        <li>[ ] I know why we return specific HTTP status codes</li>
        <li>[ ] I can use query parameters to design pagination</li>
      
      </ul></tbody></table>
    </div>
  )
}
