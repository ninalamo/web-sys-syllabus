export default function E3W2ExerTakeHomeMission() {
  return (
    <div className="page-content">
      <h1>Week 2: Take-Home Mission — "The Broken Pokedex"</h1>
      <h2>Mission Brief</h2>
      <p>
      Connect your in-class fetcher to the free PokeAPI (<code><a href="https://pokeapi.co/api/v2/">https://pokeapi.co/api/v2/</a></code>).
      </p>
      
      <h2>Your Task</h2>
      
      
      <ol>
        <li>Fetch 3 of your favorite Pokemon using <code>Promise.all()</code></li>
        <li><strong>The Catch:</strong> Intentionally misspell one URL so it fails</li>
        <li>Write error handling so the app shows a user-friendly message ("Pokemon ran away!") instead of crashing the console</li>
      
      </ol>
      
      <h2>Deliverables</h2>
      
      
      <ul>
        <li>A single HTML + JS file (or separate files)</li>
        <li>Fetches 3 Pokemon details (name, image, stats)</li>
        <li>One intentionally broken URL with graceful error handling</li>
        <li>Loading states and error display</li>
      
      </ul>
      
      <h2>Rubric</h2>
      
      
      <table><thead><tr>
        <th>Criteria</th>
        <th>Points</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>Uses <code>async/await</code></td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>Uses <code>Promise.all()</code> for parallel fetches</td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>Checks <code>response.ok</code></td>
        <td>15</td>
      </tr>
      
      <tr>
        <td>Has <code>try/catch</code> error handling</td>
        <td>20</td>
      </tr>
      
      <tr>
        <td>User-friendly error message for failed fetch</td>
        <td>15</td>
      </tr>
      </tbody></table>
    </div>
  )
}
