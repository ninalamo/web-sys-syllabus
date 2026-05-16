## Week 14: Testing

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Testing Pyramid Diagram |
| Code Walkthrough | 30 min | Live Code (unit -> integration -> E2E) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 14 strategy):** This is the "prove it works" week. Students resist testing because it feels like extra work. The car dashboard analogy is essential — frame tests as early warning systems, not homework. Build progressively: unit tests (fast, isolated) -> integration tests (API + service) -> E2E tests (browser automation). The testing pyramid must be drawn on the whiteboard. Emphasize: tests catch regressions, they don't prove correctness. Flaky E2E tests are the #1 frustration — teach auto-waiting over manual waits.

### 1. The Hook

> [SPEAK] **Script:** "You just spent 3 weeks building a full-stack app. You change one line of code to fix a typo and suddenly the login page is broken, the dashboard doesn't load, and the API returns 500 errors. Without tests, you won't know something is broken until a user reports it. With tests, you'll know before you even commit. Testing isn't about proving your code works — it's about catching the moment it stops working."

> [SLIDE] **Slide:** Title: "The One-Line Change That Broke Everything"  
> Left: A single-line code change (typo fix). Right: Three broken screenshots — login page error, dashboard blank, API 500. Subtitle: "Without tests, you won't know until a user complains."

> [TIP] **Teaching Tip:** Make it personal. Ask: "Raise your hand if you've changed one thing and broken something unrelated." Every student has experienced this. Testing is the solution.

> [ENGAGE] **Gen-Z:** "Testing is like your phone's battery warning. You don't wait until the phone dies to know it needs charging. The 20% warning tells you BEFORE it becomes a problem. Tests are the same — they warn you before your app breaks in production."  
> **-> Phone moment:** "Think about the last time an app update broke something you used daily. That's what happens when companies skip testing. You're about to learn how to prevent that."

> [LOST] **If they're lost:** "Don't worry if you've never written tests. They're just code that checks your code. Simple functions that say 'this should equal that.' We'll start from scratch."

---

### 2. The Analogy

> [SPEAK] **Script:** "Testing is like a car's dashboard warning lights. You don't wait until the engine smokes to know something is wrong. The oil light, check engine light, and temperature gauge tell you about problems before they become catastrophic. Unit tests are the individual sensors (oil pressure, tire pressure). Integration tests are the system checks (does the engine start when you turn the key?). E2E tests are the test drive (does the car actually work on the road?)."

> [BOARD] **Whiteboard:** Draw the testing pyramid:
> ```
>        /\
>       /  \     E2E Tests (Playwright)
>      /----\    Slow, realistic, expensive
>     /      \   Test the whole system
>    /--------\  Integration Tests (WebApplicationFactory)
>   /          \ Medium speed, test component interaction
>  /------------\ Unit Tests (xUnit)
> /              \ Fast, cheap, isolated
> -------------------------------------
> Many unit tests -> Fewer integration -> Fewest E2E
> ```

> [TIP] **Teaching Tip:** The testing pyramid is the most important visual. Draw it and reference it throughout. Emphasize: DON'T invert the pyramid. If you have 50 E2E tests and 2 unit tests, your test suite will be slow and fragile.

> [ENGAGE] **Gen-Z:** "The testing pyramid is like your skincare routine. Unit tests = daily cleanser (fast, cheap, do it every day). Integration tests = weekly exfoliant (slower, deeper check). E2E tests = monthly dermatologist visit (slowest, most thorough, but you don't need it every day)."  
> **-> Turn to your neighbor:** "In the car analogy, what's a unit test? What's an E2E test? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the car. Unit test = test one function. Integration test = test two things working together. E2E test = test the whole app like a user would. That's it."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min testing pyramid -> 5 min unit tests -> 5 min integration tests -> 5 min E2E tests -> 5 min code coverage)

> [SPEAK] **Script:** "Code changes constantly. Every change risks breaking something that used to work. Tests are automated checks that verify your code still does what it's supposed to do after every change. They catch regressions before they reach users. Let me show you the three levels."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a code example, (3) what it catches that the others miss. Don't show all concepts at once.

> [TIP] **Teaching Tip:** Spend the most time on unit tests vs integration tests — students confuse these constantly. Emphasize: unit tests have NO external dependencies (no database, no network). Integration tests DO have dependencies (real API, test database).

> [ASK] **Ask the class:** "If I test a service method that calls a database, is that a unit test or integration test?" (Integration — it has an external dependency.) "If I test a method that does math on its inputs?" (Unit — no external dependencies.)

> [ENGAGE] **Gen-Z:** "Code coverage is like your phone's storage meter. 100% coverage doesn't mean your phone is organized — it just means every byte is accounted for. You can have 100% coverage with useless tests, just like you can have 100% storage with useless files."  
> **-> Phone moment:** "Open your browser's DevTools. Every test you write is like adding a checkpoint in your code. When you change something, the checkpoints tell you if anything broke."

> [Q&A] **Student Q:** "Why write tests if I can just manually test the app?"
> **Short answer:** Manual testing doesn't scale.
> **Real answer:** Every time you change code, you'd need to manually test every feature. With 10 features, that's 10 manual checks. With 100 features, that's 100 manual checks. Tests automate this — run them in seconds, every time you change code. They also catch regressions you didn't think to check for.
> **The hidden question:** "Isn't writing tests slower than just coding?" -> Short term, yes. Long term, tests save hours of debugging.

> [Q&A] **Student Q:** "What's the difference between `[Fact]` and `[Theory]`?"
> **Short answer:** `[Fact]` is one test case. `[Theory]` is many test cases with different inputs.
> **Real answer:** `[Fact]` tests one specific scenario. `[Theory]` + `[InlineData]` runs the same test logic with multiple inputs — one test method, many cases. Use `[Theory]` when you want to test the same behavior with different data (empty string, null, valid input, etc.).
> **The hidden question:** "When should I use which?" -> `[Fact]` for specific scenarios. `[Theory]` for parameterized edge cases.

> [LOST] **If they're lost:** "The simplest testing summary: (1) Unit tests = test one function, no dependencies. (2) Integration tests = test components together. (3) E2E tests = test the whole app. (4) Coverage = how much code runs during tests. That's 90% of what you need."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (10 min unit tests -> 10 min integration tests -> 10 min E2E tests)

> [SPEAK] **Script:** "Let's write tests for the blog API — all three levels. We'll start with unit tests for the service layer, then integration tests for the API endpoints, then E2E tests for the full user flow. Each level catches different bugs."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: Unit test (Arrange-Act-Assert pattern). Step 2: Integration test (WebApplicationFactory). Step 3: E2E test (Playwright browser automation).

> [TIP] **Teaching Tip:** **Type each test live.** For unit tests, emphasize the Arrange-Act-Assert pattern — it's the universal test structure. For integration tests, show that `WebApplicationFactory` starts the actual API in memory — no separate server needed. For E2E, emphasize: use auto-waiting, never manual sleeps.

> [BOARD] **Whiteboard:** Draw the Arrange-Act-Assert pattern:
> ```
> ARRANGE: Set up the test data and dependencies
> ACT:     Run the code being tested
> ASSERT:  Verify the outcome
> 
> Example:
> Arrange: service + valid request
> Act:     result = service.CreateAsync(request)
> Assert:  result.Title == "Test Post"
> ```

> [ENGAGE] **Gen-Z:** "Writing tests is like setting up checkpoints in a video game. Arrange = set up the level. Act = play through it. Assert = verify you beat the boss. If the assertion fails, you know exactly where things went wrong."  
> **-> Type-along:** "Type the unit test first. Run it — watch it pass. Then break the code intentionally and watch it fail. Then the integration test. Then E2E. See each test pass before moving on."

> [Q&A] **Student Q:** "Why does the integration test use `WebApplicationFactory<Program>`?"
> **Short answer:** It starts your actual API in memory — no separate server needed.
> **Real answer:** `WebApplicationFactory` creates an in-memory test server that runs your real API with real routing, real middleware, real DI. It's not a mock — it's your actual app. The difference is you can swap out the database for a test database. This catches real bugs that unit tests miss (misconfigured DI, wrong query, serialization issues).
> **The hidden question:** "Is this slower than a unit test?" -> Yes, but it catches different bugs. Both are needed.

> [LOST] **If they're lost:** "Start with just one unit test. Get it passing. Then add a second. Then the integration test. Then E2E. Don't try to write all tests at once."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "At Google, every code change requires passing tests before it can be merged. At Amazon, services without adequate test coverage cannot be deployed to production. The testing pyramid is not academic theory — it's how every major engineering team ships code safely. Playwright is used by Microsoft, Adobe, and thousands of companies for E2E testing. xUnit is the standard testing framework for .NET, used in every .NET shop."

> [SLIDE] **Slide:** Stats: "Google: 150M+ tests run daily. Amazon: zero-deployment without tests." Logos: Google, Amazon, Microsoft, Adobe. Show a real CI pipeline with test results.

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that testing isn't academic — it's what every professional team does before shipping code.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have used an app that clearly wasn't tested?" (All hands.) "That's what happens when teams skip testing. You're learning how to NOT be that team."

> [LOST] **If they're lost:** "You don't need to know Google's testing infrastructure. Just understand: tests are mandatory in every professional codebase. Learning them now gives you an edge."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Add a test suite to your capstone application. Write unit tests for your service layer, integration tests for your API endpoints, and an E2E test for the login-to-dashboard flow. Set up code coverage reporting."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] 5+ unit tests for service layer (happy paths + error cases)
> - [ ] Use `[Theory]` for parameterized tests
> - [ ] 3+ integration tests for API endpoints (GET, POST, error responses)
> - [ ] 1+ E2E test: login -> dashboard flow
> - [ ] Code coverage report (aim for 70%+ backend)
> - [ ] All tests pass
> - [ ] CORS configuration test
> - [ ] JWT auth protection test

> [TIP] **Teaching Tip:** The E2E test (requirement 3) and JWT auth protection test (requirement 7) are the hardest parts. Students will struggle with Playwright setup and testing authenticated endpoints. Circulate and help with these specifically.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles unit + integration tests, the other handles E2E tests. Then combine and run the full suite together. It's like a collab — each person owns their test level."

> [LOST] **If they're lost:** "Start with one unit test. Get it passing. Then add more unit tests. Then the integration test. Then E2E. Don't try to write everything at once."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate tests for a specific function, then review the assertions. Ask 'Does this test actually verify the right thing?' and 'What edge case is this missing?'"

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate unit tests for this function" | "Write my test assertions" |
> | "What edge cases am I missing?" | "Fix my flaky E2E test" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: testing implementation details instead of behavior, no test database for integration tests, hardcoded waits in E2E tests, only happy paths (no error cases). Teach students to audit AI's test quality.

> [ENGAGE] **Gen-Z:** "AI writes tests fast but often tests the wrong thing. It's like checking if your phone turns on but not if it can make calls. Always review: does this test verify the RIGHT behavior?"

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the testing errors and mental model traps you'll hit this week. The flaky E2E test alone will save you from hours of frustration."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "Test host process exited            |
> | unexpectedly"                        |
> | DI issue or null reference in code   |
> | Fix: run with debugger to find line  |
> +--------------------------------------+
> +--------------------------------------+
> | "E2E test passes sometimes, fails    |
> | other times"                         |
> | Timing issue — element not ready     |
> | Fix: use auto-waiting, not manual    |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The flaky test is like your WiFi — sometimes it works, sometimes it doesn't. Usually it's a timing issue: the test clicks before the page loads. Use `await expect(locator).toBeVisible()` instead of `waitForTimeout`."

> [Q&A] **Student Q:** "100% coverage doesn't mean bug-free? Then what's the point?"
> **Short answer:** Coverage measures which lines run, not which behaviors are tested.
> **Real answer:** You can have 100% coverage with one test that asserts the wrong thing. Coverage tells you "this line was executed" — not "this line was tested correctly." It's a floor, not a ceiling. Low coverage means you definitely have untested code. High coverage means you MIGHT have tested everything.
> **The hidden question:** "So what's a good coverage target?" -> 70-80% is realistic. 100% is usually not worth the effort.

> [LOST] **If they're lost:** "The #1 issue: test isolation. If Test A creates data and Test B expects clean data, Test B fails. Each test must set up its own data and clean up after itself. Use a fresh database or in-memory store for each test."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: testing need -> car dashboard analogy -> testing pyramid -> unit -> integration -> E2E. The Arrange-Act-Assert pattern is the universal test structure — draw it on the whiteboard. Key pitfalls: inverting the testing pyramid (too many E2E, too few unit), flaky E2E tests (timing issues), testing implementation details instead of behavior, 100% coverage fallacy. Emphasize: tests catch regressions, they don't prove correctness. The "break the code intentionally" moment is powerful — students see tests catch bugs they introduced.

---

