export default function E3W9ExerTakeHomeMission() {
  return (
    <div className="page-content">
      <h1>Week 9: Take-Home Mission — "The API Architect"</h1>
      <h2>Mission Brief</h2>
      <p>
      Write an API Specification Document for a simple "Twitter Clone" (Tweets and Users).
      </p>
      
      <h2>Your Task</h2>
      
      
      <ol>
        <li>Define 5 endpoints (Methods + URLs)</li>
        <li>Write out a sample JSON response for <code>GET /tweets</code></li>
        <li><strong>The Catch:</strong> Your endpoints must be perfectly RESTful. You must design an endpoint to "Like" a tweet without using the word "Like" as a verb in the URL. (Hint: Creating a "like" resource)</li>
      
      </ol>
      
      <h2>Deliverables</h2>
      
      
      <ul>
        <li>Markdown document with 5+ endpoint definitions</li>
        <li>Sample JSON response for <code>GET /tweets</code></li>
        <li>RESTful "like" endpoint design</li>
        <li>Proper HTTP status codes for each endpoint</li>
      
      </ul>
      
      <h2>Rubric</h2>
      
      
      <table><thead><tr>
        <th>Criteria</th>
        <th>Points</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>5+ endpoints defined</td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>Perfectly RESTful URLs (no verbs)</td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>Sample JSON response</td>
        <td>15</td>
      </tr>
      
      <tr>
        <td>Proper HTTP status codes</td>
        <td>15</td>
      </tr>
      
      <tr>
        <td>Creative "like" endpoint design</td>
        <td>20</td>
      </tr>
      </tbody></table>
    </div>
  )
}
