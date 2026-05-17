export default function Testing() {
  return (
    <div className="page-content">
      <h2>Week 14: Testing</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 13: Auth Deep-Dive"<br />
        🎯 This week: "Write unit, integration, and E2E tests — prove your app works beyond manual clicking"<br />
        <br />
        <strong>LAB (3h) Topics:</strong><br />
        ▸ A. Testing Pyramid (5 min)<br />
        ▸ B. Unit Tests — xUnit (5 min)<br />
        ▸ C. Integration Tests — WebApplicationFactory (5 min)<br />
        ▸ D. E2E Tests — Playwright (5 min)<br />
        ▸ E. Code Coverage (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality + AI Integration + Take-Home Mission<br />
        <br />
        ✅ By end of lab: Write Arrange-Act-Assert unit tests; use WebApplicationFactory for integration tests; automate browser tests with Playwright; generate coverage reports
      </div>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (Lab - ~150 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Testing Pyramid Diagram</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>30 min</td>
          <td>Live Code (unit -&gt; integration -&gt; E2E)</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Lab (solo or pairs)</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>10 min</td>
          <td>Overflow / Stretch discussion</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 14 strategy):</strong> This is the "prove it works" week. Students resist testing because it feels like extra work. The car dashboard analogy is essential — frame tests as early warning systems, not homework. Build progressively: unit tests (fast, isolated) -&gt; integration tests (API + service) -&gt; E2E tests (browser automation). The testing pyramid must be drawn on the whiteboard. Emphasize: tests catch regressions, they don't prove correctness. Flaky E2E tests are the #1 frustration — teach auto-waiting over manual waits.</p>
      </blockquote>
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "You just spent 3 weeks building a full-stack app. You change one line of code to fix a typo and suddenly the login page is broken, the dashboard doesn't load, and the API returns 500 errors. Without tests, you won't know something is broken until a user reports it. With tests, you'll know before you even commit. Testing isn't about proving your code works — it's about catching the moment it stops working."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "The One-Line Change That Broke Everything"<br />Left: A single-line code change (typo fix). Right: Three broken screenshots — login page error, dashboard blank, API 500. Subtitle: "Without tests, you won't know until a user complains."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Make it personal. Ask: "Raise your hand if you've changed one thing and broken something unrelated." Every student has experienced this. Testing is the solution.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Testing is like your phone's battery warning. You don't wait until the phone dies to know it needs charging. The 20% warning tells you BEFORE it becomes a problem. Tests are the same — they warn you before your app breaks in production."<br /><strong>-&gt; Phone moment:</strong> "Think about the last time an app update broke something you used daily. That's what happens when companies skip testing. You're about to learn how to prevent that."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Don't worry if you've never written tests. They're just code that checks your code. Simple functions that say 'this should equal that.' We'll start from scratch."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 2. The Analogy</h3>
      <blockquote>
        <p><em>(Part of Hook — same 15 min block)</em></p>
        <blockquote>
          <p>[SPEAK] <strong>Script:</strong> "Testing is like a car's dashboard warning lights. You don't wait until the engine smokes to know something is wrong. The oil light, check engine light, and temperature gauge tell you about problems before they become catastrophic. Unit tests are the individual sensors (oil pressure, tire pressure). Integration tests are the system checks (does the engine start when you turn the key?). E2E tests are the test drive (does the car actually work on the road?)."</p>
        </blockquote>
        <blockquote>
          <p>[BOARD] <strong>Whiteboard:</strong> Draw the testing pyramid:</p>
          <pre><code>       /\
          /  \     E2E Tests (Playwright)
          /----\    Slow, realistic, expensive
          /      \   Test the whole system
          /--------\  Integration Tests (WebApplicationFactory)
          /          \ Medium speed, test component interaction
          /------------\ Unit Tests (xUnit)
          /              \ Fast, cheap, isolated
          -------------------------------------
          Many unit tests -&gt; Fewer integration -&gt; Fewest E2E
        </code></pre>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The testing pyramid is the most important visual. Draw it and reference it throughout. Emphasize: DON'T invert the pyramid. If you have 50 E2E tests and 2 unit tests, your test suite will be slow and fragile.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "The testing pyramid is like your skincare routine. Unit tests = daily cleanser (fast, cheap, do it every day). Integration tests = weekly exfoliant (slower, deeper check). E2E tests = monthly dermatologist visit (slowest, most thorough, but you don't need it every day)."<br /><strong>-&gt; Turn to your neighbor:</strong> "In the car analogy, what's a unit test? What's an E2E test? 15 seconds, discuss!"</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the car. Unit test = test one function. Integration test = test two things working together. E2E test = test the whole app like a user would. That's it."</p>
      </blockquote>
      <hr />
      </blockquote><h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 3. Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (5 min testing pyramid -&gt; 5 min unit tests -&gt; 5 min integration tests -&gt; 5 min E2E tests -&gt; 5 min code coverage)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Code changes constantly. Every change risks breaking something that used to work. Tests are automated checks that verify your code still does what it's supposed to do after every change. They catch regressions before they reach users. Let me show you the three levels."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show one concept at a time. For each: (1) the concept, (2) a code example, (3) what it catches that the others miss. Don't show all concepts at once.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Spend the most time on unit tests vs integration tests — students confuse these constantly. Emphasize: unit tests have NO external dependencies (no database, no network). Integration tests DO have dependencies (real API, test database).</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "If I test a service method that calls a database, is that a unit test or integration test?" (Integration — it has an external dependency.) "If I test a method that does math on its inputs?" (Unit — no external dependencies.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Code coverage is like your phone's storage meter. 100% coverage doesn't mean your phone is organized — it just means every byte is accounted for. You can have 100% coverage with useless tests, just like you can have 100% storage with useless files."<br /><strong>-&gt; Phone moment:</strong> "Open your browser's DevTools. Every test you write is like adding a checkpoint in your code. When you change something, the checkpoints tell you if anything broke."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why write tests if I can just manually test the app?"
        <strong>Short answer:</strong> Manual testing doesn't scale.
        <strong>Real answer:</strong> Every time you change code, you'd need to manually test every feature. With 10 features, that's 10 manual checks. With 100 features, that's 100 manual checks. Tests automate this — run them in seconds, every time you change code. They also catch regressions you didn't think to check for.
        <strong>The hidden question:</strong> "Isn't writing tests slower than just coding?" -&gt; Short term, yes. Long term, tests save hours of debugging.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What's the difference between <code>[Fact]</code> and <code>[Theory]</code>?"
        <strong>Short answer:</strong> <code>[Fact]</code> is one test case. <code>[Theory]</code> is many test cases with different inputs.
        <strong>Real answer:</strong> <code>[Fact]</code> tests one specific scenario. <code>[Theory]</code> + <code>[InlineData]</code> runs the same test logic with multiple inputs — one test method, many cases. Use <code>[Theory]</code> when you want to test the same behavior with different data (empty string, null, valid input, etc.).
        <strong>The hidden question:</strong> "When should I use which?" -&gt; <code>[Fact]</code> for specific scenarios. <code>[Theory]</code> for parameterized edge cases.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The simplest testing summary: (1) Unit tests = test one function, no dependencies. (2) Integration tests = test components together. (3) E2E tests = test the whole app. (4) Coverage = how much code runs during tests. That's 90% of what you need."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 4. Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 30 min (10 min unit tests -&gt; 10 min integration tests -&gt; 10 min E2E tests)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's write tests for the blog API — all three levels. We'll start with unit tests for the service layer, then integration tests for the API endpoints, then E2E tests for the full user flow. Each level catches different bugs."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show each step on its own slide. Step 1: Unit test (Arrange-Act-Assert pattern). Step 2: Integration test (WebApplicationFactory). Step 3: E2E test (Playwright browser automation).</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type each test live.</strong> For unit tests, emphasize the Arrange-Act-Assert pattern — it's the universal test structure. For integration tests, show that <code>WebApplicationFactory</code> starts the actual API in memory — no separate server needed. For E2E, emphasize: use auto-waiting, never manual sleeps.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the Arrange-Act-Assert pattern:</p>
        <pre><code>ARRANGE: Set up the test data and dependencies
        ACT:     Run the code being tested
        ASSERT:  Verify the outcome
      
        Example:
        Arrange: service + valid request
        Act:     result = service.CreateAsync(request)
        Assert:  result.Title == "Test Post"
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Writing tests is like setting up checkpoints in a video game. Arrange = set up the level. Act = play through it. Assert = verify you beat the boss. If the assertion fails, you know exactly where things went wrong."<br /><strong>-&gt; Type-along:</strong> "Type the unit test first. Run it — watch it pass. Then break the code intentionally and watch it fail. Then the integration test. Then E2E. See each test pass before moving on."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does the integration test use <code>WebApplicationFactory&lt;Program&gt;</code>?"
        <strong>Short answer:</strong> It starts your actual API in memory — no separate server needed.
        <strong>Real answer:</strong> <code>WebApplicationFactory</code> creates an in-memory test server that runs your real API with real routing, real middleware, real DI. It's not a mock — it's your actual app. The difference is you can swap out the database for a test database. This catches real bugs that unit tests miss (misconfigured DI, wrong query, serialization issues).
        <strong>The hidden question:</strong> "Is this slower than a unit test?" -&gt; Yes, but it catches different bugs. Both are needed.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with just one unit test. Get it passing. Then add a second. Then the integration test. Then E2E. Don't try to write all tests at once."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 5. Debugging + Wrap</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the testing errors and mental model traps you'll hit this week. The flaky E2E test alone will save you from hours of frustration."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+--------------------------------------+
        | "Test host process exited            |
        | unexpectedly"                        |
        | DI issue or null reference in code   |
        | Fix: run with debugger to find line  |
        +--------------------------------------+
        +--------------------------------------+
        | "E2E test passes sometimes, fails    |
        | other times"                         |
        | Timing issue — element not ready     |
        | Fix: use auto-waiting, not manual    |
        +--------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "The flaky test is like your WiFi — sometimes it works, sometimes it doesn't. Usually it's a timing issue: the test clicks before the page loads. Use <code>await expect(locator).toBeVisible()</code> instead of <code>waitForTimeout</code>."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "100% coverage doesn't mean bug-free? Then what's the point?"
        <strong>Short answer:</strong> Coverage measures which lines run, not which behaviors are tested.
        <strong>Real answer:</strong> You can have 100% coverage with one test that asserts the wrong thing. Coverage tells you "this line was executed" — not "this line was tested correctly." It's a floor, not a ceiling. Low coverage means you definitely have untested code. High coverage means you MIGHT have tested everything.
        <strong>The hidden question:</strong> "So what's a good coverage target?" -&gt; 70-80% is realistic. 100% is usually not worth the effort.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The #1 issue: test isolation. If Test A creates data and Test B expects clean data, Test B fails. Each test must set up its own data and clean up after itself. Use a fresh database or in-memory store for each test."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. In-Class Exercise</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min coding -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Add a test suite to your capstone application. Write unit tests for your service layer, integration tests for your API endpoints, and an E2E test for the login-to-dashboard flow. Set up code coverage reporting."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> 5+ unit tests for service layer (happy paths + error cases)</li>
          <li><input disabled="" type="checkbox" /> Use <code>[Theory]</code> for parameterized tests</li>
          <li><input disabled="" type="checkbox" /> 3+ integration tests for API endpoints (GET, POST, error responses)</li>
          <li><input disabled="" type="checkbox" /> 1+ E2E test: login -&gt; dashboard flow</li>
          <li><input disabled="" type="checkbox" /> Code coverage report (aim for 70%+ backend)</li>
          <li><input disabled="" type="checkbox" /> All tests pass</li>
          <li><input disabled="" type="checkbox" /> CORS configuration test</li>
          <li><input disabled="" type="checkbox" /> JWT auth protection test</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The E2E test (requirement 3) and JWT auth protection test (requirement 7) are the hardest parts. Students will struggle with Playwright setup and testing authenticated endpoints. Circulate and help with these specifically.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "One person handles unit + integration tests, the other handles E2E tests. Then combine and run the full suite together. It's like a collab — each person owns their test level."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with one unit test. Get it passing. Then add more unit tests. Then the integration test. Then E2E. Don't try to write everything at once."</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <h3>Industry Reality</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "At Google, every code change requires passing tests before it can be merged. At Amazon, services without adequate test coverage cannot be deployed to production. The testing pyramid is not academic theory — it's how every major engineering team ships code safely. Playwright is used by Microsoft, Adobe, and thousands of companies for E2E testing. xUnit is the standard testing framework for .NET, used in every .NET shop."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Stats: "Google: 150M+ tests run daily. Amazon: zero-deployment without tests." Logos: Google, Amazon, Microsoft, Adobe. Show a real CI pipeline with test results.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. Show them that testing isn't academic — it's what every professional team does before shipping code.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you have used an app that clearly wasn't tested?" (All hands.) "That's what happens when teams skip testing. You're learning how to NOT be that team."</p>
      </blockquote>
      <h3>AI Integration</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week, ask AI to generate tests for a specific function, then review the assertions. Ask 'Does this test actually verify the right thing?' and 'What edge case is this missing?'"</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> AI usage guide:</p>
        <table>
          <thead>
            <tr>
              <th>[OK] Allowed</th>
              <th>[NO] Not Allowed</th>
            </tr>
          </thead>
          <tbody><tr>
            <td>"Generate unit tests for this function"</td>
            <td>"Write my test assertions"</td>
          </tr>
          <tr>
            <td>"What edge cases am I missing?"</td>
            <td>"Fix my flaky E2E test"</td>
          </tr>
        </tbody></table>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Point out the common AI mistakes: testing implementation details instead of behavior, no test database for integration tests, hardcoded waits in E2E tests, only happy paths (no error cases). Teach students to audit AI's test quality.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI writes tests fast but often tests the wrong thing. It's like checking if your phone turns on but not if it can make calls. Always review: does this test verify the RIGHT behavior?"</p>
      </blockquote>
      <hr />
      <p><em>This week's core arc: testing need -&gt; car dashboard analogy -&gt; testing pyramid -&gt; unit -&gt; integration -&gt; E2E. Key pitfalls: inverting the testing pyramid, flaky E2E tests, testing implementation instead of behavior, 100% coverage fallacy.</em></p>
    </div>
  )
}
