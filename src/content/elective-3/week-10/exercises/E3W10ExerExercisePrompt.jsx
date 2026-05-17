export default function E3W10ExerExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 10: ASP.NET Core Web API — Exercises</h1>
      <h2>In-Class Exercise (55 min)</h2>
      <h3>Task: Video Games CRUD API</h3>
      <p>
      Build an ASP.NET Core Web API that manages a list of Video Games.
      </p>
      
      <h3>Starter Files</h3>
      
      
      <ul>
        <li>Create a new ASP.NET Core Web API project</li>
        <li>Delete the WeatherForecast controller</li>
      
      </ul>
      
      <h3>Requirements</h3>
      
      <br />Implement the following endpoints:
      
      
      <ol>
        <li><code>GET /api/games</code> — List all games</li>
        <li><code>GET /api/games/&#123;id&#125;</code> — Get a single game</li>
        <li><code>POST /api/games</code> — Create a new game</li>
        <li><code>PUT /api/games/&#123;id&#125;</code> — Update a game</li>
        <li><code>DELETE /api/games/&#123;id&#125;</code> — Delete a game</li>
      
      </ol>
      <br />Test each endpoint with Postman.
      
      
      <h3>Hints</h3>
      
      
      <ul>
        <li>Inherit from <code>ControllerBase</code>, not <code>Controller</code></li>
        <li>Use <code>[ApiController]</code> and <code>[Route("api/[controller]")]</code></li>
        <li>Return <code>Ok()</code>, <code>CreatedAtAction()</code>, <code>NotFound()</code>, <code>NoContent()</code></li>
        <li>Use an in-memory list for storage during this exercise</li>
      
      </ul>
      
      <h3>Stretch Goals</h3>
      
      
      <ul>
        <li>Add model validation</li>
        <li>Add CORS configuration</li>
        <li>Add a custom header check middleware</li>
      
      </ul>
    </div>
  )
}
