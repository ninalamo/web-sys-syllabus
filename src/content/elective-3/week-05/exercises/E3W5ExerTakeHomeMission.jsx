export default function E3W5ExerTakeHomeMission() {
  return (
    <div className="page-content">
      <h1>Week 5: Take-Home Mission — "The Component Factory"</h1>
      <h2>Mission Brief</h2>
      <p>
      Create an array of 5 product objects and render them using the Vanilla JS State -&gt; render() pattern.
      </p>
      
      <h2>Your Task</h2>
      
      
      <ol>
        <li>Write a Vanilla JS function <code>ProductCard(product)</code> that takes an object and returns an HTML template literal string</li>
        <li>Use <code>.map()</code> to generate a list of strings from your array</li>
        <li><strong>The Catch:</strong> Render all 5 products to the screen using only ONE single <code>document.getElementById('app').innerHTML = ...</code> assignment. No loops calling <code>.appendChild()</code>.</li>
      
      </ol>
      
      <h2>Deliverables</h2>
      
      
      <ul>
        <li><code>index.html</code> with an <code>&lt;div id="app"&gt;</code> container</li>
        <li><code>app.js</code> with <code>ProductCard()</code> component and <code>render()</code> function</li>
        <li>Array of 5 product objects with name, price, image, description</li>
        <li>Single <code>innerHTML</code> assignment for rendering</li>
      
      </ul>
      
      <h2>Rubric</h2>
      
      
      <table><thead><tr>
        <th>Criteria</th>
        <th>Points</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td><code>ProductCard()</code> returns HTML string</td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>Uses <code>.map()</code> for generation</td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>Single <code>innerHTML</code> assignment</td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>No <code>.appendChild()</code> loops</td>
        <td>15</td>
      </tr>
      
      <tr>
        <td>Clean, readable code</td>
        <td>10</td>
      </tr>
      </tbody></table>
    </div>
  )
}
