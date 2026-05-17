export default function E3W6ExerTakeHomeMission() {
  return (
    <div className="page-content">
      <h1>Week 6: Take-Home Mission — "The State Toggler"</h1>
      <h2>Mission Brief</h2>
      <p>
      Create a <code>LightSwitch</code> component that demonstrates boolean state toggling.
      </p>
      
      <h2>Your Task</h2>
      
      
      <ol>
        <li>Create a <code>LightSwitch</code> component</li>
        <li>It should have a piece of state called <code>isOn</code> (boolean)</li>
        <li><strong>The Catch:</strong> Based on the state, the component should completely change its CSS class (e.g., <code>&lt;div className=&#123;isOn ? 'bg-yellow' : 'bg-dark'&#125;&gt;</code>). The button text must also change between "Turn Off" and "Turn On"</li>
      
      </ol>
      
      <h2>Deliverables</h2>
      
      
      <ul>
        <li><code>LightSwitch.jsx</code> component</li>
        <li>CSS styling for <code>bg-yellow</code> and <code>bg-dark</code> classes</li>
        <li>Button that toggles state and changes text</li>
        <li>Visual feedback (background color change)</li>
      
      </ul>
      
      <h2>Rubric</h2>
      
      
      <table><thead><tr>
        <th>Criteria</th>
        <th>Points</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td><code>useState</code> with boolean</td>
        <td>20</td>
      </tr>
      
      <tr>
        <td>Conditional CSS class</td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>Button text changes with state</td>
        <td>20</td>
      </tr>
      
      <tr>
        <td>Visual feedback works</td>
        <td>20</td>
      </tr>
      
      <tr>
        <td>Clean component structure</td>
        <td>15</td>
      </tr>
      </tbody></table>
    </div>
  )
}
