export default function E3W11ExerTakeHomeMission() {
  return (
    <div className="page-content">
      <h1>Week 11: Take-Home Mission — "The Full Stack Delete"</h1>
      <h2>Mission Brief</h2>
      <p>
      Add delete functionality to the Todo integration built in class.
      </p>
      
      <h2>Your Task</h2>
      
      
      <ol>
        <li>Start with the Todo integration built in class</li>
        <li>Add a "Delete" button next to every Todo item in React</li>
        <li><strong>The Catch:</strong> When clicked, it must send a <code>DELETE</code> HTTP request to the API. If the API returns a success status code (200/204), the React UI must update automatically to remove the item from the screen <strong>without</strong> refreshing the page</li>
      
      </ol>
      
      <h2>Deliverables</h2>
      
      
      <ul>
        <li>Delete button on each todo item</li>
        <li>DELETE HTTP request to the API</li>
        <li>Automatic UI update on success</li>
        <li>Error handling for failed deletes</li>
      
      </ul>
      
      <h2>Rubric</h2>
      
      
      <table><thead><tr>
        <th>Criteria</th>
        <th>Points</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>Delete button rendered</td>
        <td>15</td>
      </tr>
      
      <tr>
        <td>DELETE HTTP request sent</td>
        <td>30</td>
      </tr>
      
      <tr>
        <td>UI updates without page refresh</td>
        <td>30</td>
      </tr>
      
      <tr>
        <td>Error handling</td>
        <td>15</td>
      </tr>
      
      <tr>
        <td>Clean code</td>
        <td>10</td>
      </tr>
      </tbody></table>
    </div>
  )
}
