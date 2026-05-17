export default function E3W2PresPlaceholder() {
  return (
    <div className="page-content">
      <h1>Week 2: Presentations — Placeholder</h1>
      <h2>Planned Slide Deck Content</h2>
      <h3>Slide 1: Title</h3>
      <ul>
        <li>"Week 2: Async JavaScript Deep-Dive"</li>
        <li>"The engine that keeps your app responsive while talking to servers"</li>
      </ul>
      <h3>Slide 2: The Hook</h3>
      <ul>
        <li>Instagram loads feed first, stories later — browser doesn't freeze</li>
        <li>That's async JavaScript</li>
      </ul>
      <h3>Slide 3: Whiteboard Analogy</h3>
      <ul>
        <li>The Fast-Food Restaurant</li>
        <li>Sync: Order, wait at counter, nobody else can order</li>
        <li>Async: Order, get buzzer, sit down, line keeps moving</li>
      </ul>
      <h3>Slide 4: The Event Loop</h3>
      <ul>
        <li>Call Stack -&gt; Web APIs -&gt; Callback Queue -&gt; Event Loop</li>
        <li>"The Event Loop is a bouncer"</li>
      </ul>
      <h3>Slide 5: Promises</h3>
      <ul>
        <li>Pending, Fulfilled, Rejected</li>
        <li>Online shopping order analogy</li>
      </ul>
      <h3>Slide 6: The fetch API Gotcha</h3>
      <ul>
        <li><code>fetch</code> does NOT reject on 404/500</li>
        <li>Must check <code>response.ok</code></li>
      </ul>
      <h3>Slide 7: async/await</h3>
      <ul>
        <li>Before: <code>.then().then().then()</code> (Callback Hell)</li>
        <li>After: <code>async/await</code> (reads like sync code)</li>
      </ul>
      <h3>Slide 8: Promise.all()</h3>
      <ul>
        <li>Parallel vs Sequential fetches</li>
        <li>Cut loading time in half</li>
      </ul>
      <h3>Slide 9: Live Coding Preview</h3>
      <ul>
        <li>Step 1: Raw <code>.then()</code> chain</li>
        <li>Step 2: Upgrade to <code>async/await</code></li>
        <li>Step 3: Error handling with <code>try/catch</code></li>
        <li>Step 4: <code>Promise.all()</code> for parallel requests</li>
      </ul>
      <h3>Slide 10: Common Errors</h3>
      <ul>
        <li>"Cannot read properties of undefined"</li>
        <li>Infinite loading state</li>
      </ul>
      <h3>Slide 11: Exercise Brief</h3>
      <ul>
        <li>Build async fetcher with JSONPlaceholder</li>
        <li>Fetch posts + comments in parallel</li>
      </ul>
      <h3>Slide 12: Learning Baseline</h3>
      <ul>
        <li>Self-assessment checklist</li>
      </ul>
    </div>
  )
}
