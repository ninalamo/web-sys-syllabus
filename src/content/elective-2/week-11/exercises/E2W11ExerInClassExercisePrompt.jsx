export default function E2W11ExerInClassExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 11 — In-Class Exercise: Pokemon Viewer</h1>
      <p>
      <strong>Duration:</strong> 55 minutes
      </p>
      
      <h2>Exercise: Pokemon API Viewer</h2>
      
      <br />Build a page that displays Pokemon data from the PokeAPI:
      
      
      <ol>
        <li>Create a form where a user types a Pokemon ID (e.g., 25)</li>
        <li>Submit it to a controller</li>
        <li>Use <code>HttpClient</code> (via <code>IHttpClientFactory</code>) to fetch <code>https://pokeapi.co/api/v2/pokemon/&#123;id&#125;</code></li>
        <li>Deserialize the <code>name</code> and <code>weight</code> fields</li>
        <li>Show them on the View</li>
      
      </ol>
      <br /><strong>Requirements:</strong>
      
      <ul>
        <li>Register <code>AddHttpClient()</code> in Program.cs</li>
        <li>Create a DTO class matching the API response</li>
        <li>Use <code>JsonSerializer.Deserialize</code> with <code>PropertyNameCaseInsensitive = true</code></li>
        <li>Handle errors with try/catch</li>
      
      </ul>
    </div>
  )
}
