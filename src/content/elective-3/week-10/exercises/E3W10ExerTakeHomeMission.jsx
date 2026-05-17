export default function E3W10ExerTakeHomeMission() {
  return (
    <div className="page-content">
      <h1>Week 10: Take-Home Mission — "The Secure DTO"</h1>
      <h2>Mission Brief</h2>
      <p>
      Add authentication headers and middleware to your Video Games API.
      </p>
      
      <h2>Your Task</h2>
      
      
      <ol>
        <li>Add a POST request to create a new game with headers in Postman</li>
        <li>Add a PUT request to update a game</li>
        <li><strong>The Catch:</strong> Your POST must include a custom header <code>X-Auth-Token: learn-2024</code></li>
        <li><strong>Challenge:</strong> Add a middleware that checks this header and returns 401 if it's missing</li>
      
      </ol>
      
      <h2>Deliverables</h2>
      
      
      <ul>
        <li>Postman Collection with all CRUD requests</li>
        <li>Custom header middleware in ASP.NET Core</li>
        <li>401 response when header is missing</li>
        <li>200/201 response when header is present</li>
      
      </ul>
      
      <h2>Rubric</h2>
      
      
      <table><thead><tr>
        <th>Criteria</th>
        <th>Points</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>Postman Collection exported</td>
        <td>20</td>
      </tr>
      
      <tr>
        <td>Custom header middleware</td>
        <td>30</td>
      </tr>
      
      <tr>
        <td>Returns 401 when header missing</td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>All CRUD endpoints working</td>
        <td>15</td>
      </tr>
      
      <tr>
        <td>Clean middleware code</td>
        <td>10</td>
      </tr>
      </tbody></table>
    </div>
  )
}
