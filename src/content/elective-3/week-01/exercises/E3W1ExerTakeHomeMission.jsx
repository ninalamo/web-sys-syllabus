export default function E3W1ExerTakeHomeMission() {
  return (
    <div className="page-content">
      <h1>Week 1: Take-Home Mission — "The Legacy Code Rescue"</h1>
      <h2>Mission Brief</h2>
      <p>
      You have been handed a 100-line "spaghetti" JavaScript file that handles a shopping cart. It uses <code>var</code>, manual <code>for</code> loops, string concatenation (<code>+</code>), and is all in one massive file.
      </p>
      
      <h2>Your Task</h2>
      
      
      <ol>
        <li>Refactor it entirely into ES6+</li>
        <li>Break it down into at least 3 module files:</li>
      
      </ol>
      <ul>
        <li><code>cart.js</code> — Cart logic (add, remove, update quantity)</li>
        <li><code>products.js</code> — Product catalog data and lookup functions</li>
        <li><code>app.js</code> — Main application entry point</li>
      
      </ul>
      <ol>
        <li><strong>The Catch:</strong> You cannot use a single <code>for</code> loop or <code>var</code> keyword anywhere</li>
      
      </ol>
      
      <h2>Deliverables</h2>
      
      
      <ul>
        <li>Three separate <code>.js</code> files using <code>import</code>/<code>export</code></li>
        <li>All array operations use <code>.map()</code>, <code>.filter()</code>, <code>.reduce()</code></li>
        <li>All strings use template literals</li>
        <li>All functions are arrow functions</li>
        <li>A brief README explaining your refactoring decisions</li>
      
      </ul>
      
      <h2>Starter Code (provided by instructor)</h2>
      
      <br />See <code>legacy-cart.js</code> in the exercises folder.
      
      
      <h2>Rubric</h2>
      
      
      <table><thead><tr>
        <th>Criteria</th>
        <th>Points</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>No <code>var</code> keywords</td>
        <td>20</td>
      </tr>
      
      <tr>
        <td>No <code>for</code> loops</td>
        <td>20</td>
      </tr>
      
      <tr>
        <td>Proper module structure (3+ files)</td>
        <td>20</td>
      </tr>
      
      <tr>
        <td>Uses <code>.map()</code>/<code>.filter()</code>/<code>.reduce()</code></td>
        <td>20</td>
      </tr>
      
      <tr>
        <td>Template literals throughout</td>
        <td>10</td>
      </tr>
      
      <tr>
        <td>Arrow functions throughout</td>
        <td>10</td>
      </tr>
      </tbody></table>
    </div>
  )
}
