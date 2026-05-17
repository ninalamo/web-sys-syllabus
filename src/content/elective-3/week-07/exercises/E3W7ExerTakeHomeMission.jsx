export default function E3W7ExerTakeHomeMission() {
  return (
    <div className="page-content">
      <h1>Week 7: Take-Home Mission — "The Window Resizer"</h1>
      <h2>Mission Brief</h2>
      <p>
      Create a component that tracks and displays the browser window width with proper cleanup.
      </p>
      
      <h2>Your Task</h2>
      
      
      <ol>
        <li>Create a component that displays the current browser window width in pixels</li>
        <li>Add a <code>useEffect</code> that adds a <code>'resize'</code> event listener to the <code>window</code></li>
        <li><strong>The Catch:</strong> You must include a cleanup function that uses <code>removeEventListener</code>. Prove it works by adding a button to hide/unmount the component and verifying no errors occur when resizing</li>
      
      </ol>
      
      <h2>Deliverables</h2>
      
      
      <ul>
        <li><code>WindowResizer.jsx</code> component</li>
        <li><code>useEffect</code> with cleanup function</li>
        <li>Hide/show button to test unmounting</li>
        <li>Proof that no errors occur after unmount</li>
      
      </ul>
      
      <h2>Rubric</h2>
      
      
      <table><thead><tr>
        <th>Criteria</th>
        <th>Points</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>Displays window width</td>
        <td>20</td>
      </tr>
      
      <tr>
        <td><code>useEffect</code> with resize listener</td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>Cleanup function with <code>removeEventListener</code></td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>Hide/show button for unmount testing</td>
        <td>15</td>
      </tr>
      
      <tr>
        <td>No errors after unmount</td>
        <td>15</td>
      </tr>
      </tbody></table>
    </div>
  )
}
