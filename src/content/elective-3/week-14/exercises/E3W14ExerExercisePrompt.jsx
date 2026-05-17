export default function E3W14ExerExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 14: Testing — Exercises</h1>
      <h2>In-Class Exercise (55 min)</h2>
      <h3>Task: Add Test Suite to Capstone Application</h3>
      <p>
      Write unit, integration, and E2E tests for your capstone application.
      </p>
      
      <h3>Requirements</h3>
      
      
      <ol>
        <li>5+ unit tests for service layer (happy paths + error cases)</li>
        <li>Use <code>[Theory]</code> for parameterized tests</li>
        <li>3+ integration tests for API endpoints (GET, POST, error responses)</li>
        <li>1+ E2E test: login -&gt; dashboard flow</li>
        <li>Code coverage report (aim for 70%+ backend)</li>
        <li>All tests pass</li>
        <li>CORS configuration test</li>
        <li>JWT auth protection test</li>
      
      </ol>
      
      <h3>Hints</h3>
      
      
      <ul>
        <li>Unit tests: Arrange-Act-Assert pattern, NO external dependencies</li>
        <li>Integration tests: <code>WebApplicationFactory</code> starts API in memory</li>
        <li>E2E tests: Playwright with auto-waiting (no manual sleeps)</li>
        <li>Each test must set up its own data and clean up</li>
      
      </ul>
      
      <h3>Stretch Goals</h3>
      
      
      <ul>
        <li>Test edge cases (empty input, max length, special characters)</li>
        <li>Add a test for the refresh token flow</li>
        <li>Test the error response format</li>
      
      </ul>
    </div>
  )
}
