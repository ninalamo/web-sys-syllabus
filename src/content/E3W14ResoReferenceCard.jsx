export default function E3W14ResoReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 14: Testing — Resources &amp; Reference</h1>
      <h2>Core Concepts Quick Reference</h2>
      <h3>1. The Testing Pyramid</h3>
      <pre><code>       /\
      /  \     E2E Tests (Playwright) — Slow, realistic, expensive
      /----\
      /      \   Integration Tests (WebApplicationFactory) — Medium speed
      /--------\
      /          \  Unit Tests (xUnit) — Fast, cheap, isolated
      /------------\</code></pre>
      <p>
      Many unit tests -&gt; Fewer integration -&gt; Fewest E2E
      </p>
      
      <h3>2. Arrange-Act-Assert Pattern</h3>
      
      
      <pre><code>[Fact]
      public void TestName()
      &#123;
      // Arrange: Set up test data and dependencies
      var service = new MyService();
      var input = new Request &#123; Name = "Test" &#125;;
      
      // Act: Run the code being tested
      var result = service.Process(input);
      
      // Assert: Verify the outcome
      Assert.Equal("Test", result.Name);
      &#125;</code></pre>
      
      
      <h3>3. [Fact] vs [Theory]</h3>
      
      
      <pre><code>// [Fact] — one test case
      [Fact]
      public void Add_TwoPlusTwo_EqualsFour() &#123; ... &#125;
      
      // [Theory] — many test cases with different inputs
      [Theory]
      [InlineData(0)]
      [InlineData(-1)]
      [InlineData(-100)]
      public void CreatePost_NegativeId_Throws(int id) &#123; ... &#125;</code></pre>
      
      
      <h3>4. Integration Tests with WebApplicationFactory</h3>
      
      
      <pre><code>public class ApiTests : IClassFixture&lt;WebApplicationFactory&lt;Program&gt;&gt;
      &#123;
      private readonly HttpClient _client;
      
      public ApiTests(WebApplicationFactory&lt;Program&gt; factory)
      &#123;
      _client = factory.CreateClient();
      &#125;
      
      [Fact]
      public async Task GetPosts_ReturnsOk()
      &#123;
      var response = await _client.GetAsync("/api/posts");
      response.EnsureSuccessStatusCode();
      &#125;
      &#125;</code></pre>
      
      
      <h3>5. E2E Tests with Playwright</h3>
      
      
      <pre><code>test('user can login', async (&#123; page &#125;) =&gt; &#123;
      await page.goto('/login');
      await page.getByLabel('Username').fill('admin');
      await page.getByRole('button', &#123; name: 'Login' &#125;).click();
      await expect(page).toHaveURL('/dashboard');
      &#125;);</code></pre>
      
      <br />Use auto-waiting: <code>await expect(locator).toBeVisible()</code> — NOT <code>waitForTimeout</code>.
      
      
      <h3>6. Code Coverage</h3>
      
      
      <pre><code># .NET
      dotnet test --collect:"XPlat Code Coverage"
      
      # Coverage measures which lines run, NOT which behaviors are tested
      # 70-80% is realistic; 100% is usually not worth the effort</code></pre>
      
      
      <h2>Learning Baseline Checklist</h2>
      
      
      <ul>
        <li>[ ] I can write Arrange-Act-Assert unit tests</li>
        <li>[ ] I can use <code>WebApplicationFactory</code> for integration tests</li>
        <li>[ ] I can automate browser tests with Playwright</li>
        <li>[ ] I can generate coverage reports</li>
        <li>[ ] I understand that coverage ≠ bug-free</li>
      
      </ul>
      
      <h2>Common Errors</h2>
      
      
      <table><thead><tr>
        <th>Error</th>
        <th>Cause</th>
        <th>Fix</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>"Test host process exited unexpectedly"</td>
        <td>DI issue or null reference</td>
        <td>Run with debugger</td>
      </tr>
      
      <tr>
        <td>Flaky E2E tests</td>
        <td>Timing issue</td>
        <td>Use auto-waiting, not manual sleeps</td>
      </tr>
      
      <tr>
        <td>Tests not isolated</td>
        <td>Shared state between tests</td>
        <td>Each test sets up own data</td>
      </tr>
      </tbody></table>
    </div>
  )
}
