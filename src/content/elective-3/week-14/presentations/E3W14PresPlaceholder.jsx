export default function E3W14PresPlaceholder() {
  return (
    <div className="page-content">
      <h1>Week 14: Presentations — Placeholder</h1>
      <h2>Planned Slide Deck Content</h2>
      <h3>Slide 1: Title</h3>
      <ul>
        <li>"Week 14: Testing"</li>
        <li>"Unit, integration, and E2E tests — prove your app works"</li>
      </ul>
      <h3>Slide 2: The Hook</h3>
      <ul>
        <li>"You change one line to fix a typo and suddenly login, dashboard, and API all break"</li>
      </ul>
      <h3>Slide 3: Whiteboard Analogy</h3>
      <ul>
        <li>Car Dashboard Warning Lights</li>
        <li>Unit tests = individual sensors</li>
        <li>Integration tests = system checks</li>
        <li>E2E tests = test drive</li>
      </ul>
      <h3>Slide 4: The Testing Pyramid</h3>
      <ul>
        <li>Draw the pyramid</li>
        <li>DON'T invert it</li>
      </ul>
      <h3>Slide 5: Unit Tests (xUnit)</h3>
      <ul>
        <li>Arrange-Act-Assert pattern</li>
        <li>No external dependencies</li>
        <li>Fast, cheap, isolated</li>
      </ul>
      <h3>Slide 6: Integration Tests (WebApplicationFactory)</h3>
      <ul>
        <li>Starts actual API in memory</li>
        <li>Real routing, real middleware</li>
        <li>Catches DI and serialization bugs</li>
      </ul>
      <h3>Slide 7: E2E Tests (Playwright)</h3>
      <ul>
        <li>Browser automation</li>
        <li>Auto-waiting, not manual sleeps</li>
        <li>Test the whole user flow</li>
      </ul>
      <h3>Slide 8: Code Coverage</h3>
      <ul>
        <li>Measures which lines run, not which behaviors tested</li>
        <li>70-80% is realistic</li>
      </ul>
      <h3>Slide 9: Live Coding Preview</h3>
      <ul>
        <li>Unit test -&gt; break code intentionally -&gt; watch it fail</li>
        <li>Integration test</li>
        <li>E2E test</li>
      </ul>
      <h3>Slide 10: Common Errors</h3>
      <ul>
        <li>Test host exited unexpectedly</li>
        <li>Flaky E2E tests</li>
      </ul>
      <h3>Slide 11: Exercise Brief</h3>
      <ul>
        <li>Add test suite to capstone</li>
      </ul>
      <h3>Slide 12: Learning Baseline</h3>
      <ul>
        <li>Self-assessment checklist</li>
      </ul>
    </div>
  )
}
