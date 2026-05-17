export default function E3W3ExerTakeHomeMission() {
  return (
    <div className="page-content">
      <h1>Week 3: Take-Home Mission — "The Strict Mode Migration"</h1>
      <h2>Mission Brief</h2>
      <p>
      Take the Async JS "Pokedex" fetcher from last week's homework and convert it to TypeScript.
      </p>
      
      <h2>Your Task</h2>
      
      
      <ol>
        <li>Rename the files from <code>.js</code> to <code>.ts</code></li>
        <li>Define a <code>Pokemon</code> interface based on the PokeAPI JSON response</li>
        <li><strong>The Catch:</strong> You must turn on <code>"strict": true</code> in <code>tsconfig.json</code></li>
        <li>You cannot use the word <code>any</code> anywhere in your code</li>
        <li>Fix every single red underline</li>
      
      </ol>
      
      <h2>Deliverables</h2>
      
      
      <ul>
        <li><code>.ts</code> files with full type coverage</li>
        <li><code>Pokemon</code> interface matching PokeAPI response shape</li>
        <li><code>tsconfig.json</code> with <code>"strict": true</code></li>
        <li>Zero uses of <code>any</code></li>
      
      </ul>
      
      <h2>Rubric</h2>
      
      
      <table><thead><tr>
        <th>Criteria</th>
        <th>Points</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td><code>Pokemon</code> interface defined</td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>All function parameters typed</td>
        <td>20</td>
      </tr>
      
      <tr>
        <td>Return types specified</td>
        <td>15</td>
      </tr>
      
      <tr>
        <td><code>"strict": true</code> enabled</td>
        <td>15</td>
      </tr>
      
      <tr>
        <td>Zero uses of <code>any</code></td>
        <td>25</td>
      </tr>
      </tbody></table>
    </div>
  )
}
