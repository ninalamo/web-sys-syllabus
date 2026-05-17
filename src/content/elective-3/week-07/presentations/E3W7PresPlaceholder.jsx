export default function E3W7PresPlaceholder() {
  return (
    <div className="page-content">
      <h1>Week 7: Presentations — Placeholder</h1>
      <h2>Planned Slide Deck Content</h2>
      <h3>Slide 1: Title</h3>
      <ul>
        <li>"Week 7: Effects &amp; Data Fetching"</li>
        <li>"useEffect — side effects, subscriptions, and API calls"</li>
      </ul>
      <h3>Slide 2: The Hook</h3>
      <ul>
        <li>"A component's main job is Props/State -&gt; UI. But what about talking to the outside world?"</li>
      </ul>
      <h3>Slide 3: Whiteboard Analogy</h3>
      <ul>
        <li>The Play Actor</li>
        <li>Render = on stage performing</li>
        <li>Effect = backstage checking phone after the scene</li>
      </ul>
      <h3>Slide 4: useEffect Hook</h3>
      <ul>
        <li>Takes a function + dependency array</li>
        <li>Runs after the screen has painted</li>
      </ul>
      <h3>Slide 5: Dependency Array (The Infinite Loop Trap)</h3>
      <ul>
        <li><code>[]</code> = run once</li>
        <li><code>[count]</code> = run when count changes</li>
        <li>No array = run every render (DDOS yourself)</li>
      </ul>
      <h3>Slide 6: Data Fetching in Effects</h3>
      <ul>
        <li>Cannot make callback async directly</li>
        <li>Must declare async function inside and call it</li>
      </ul>
      <h3>Slide 7: Cleanup Function</h3>
      <ul>
        <li>For timers, subscriptions, event listeners</li>
        <li>Runs before component is destroyed</li>
      </ul>
      <h3>Slide 8: Live Coding Preview</h3>
      <ul>
        <li>Step 1: Initial state (loading)</li>
        <li>Step 2: Fetch effect with <code>[]</code></li>
        <li>Step 3: Infinite loop warning (delete <code>[]</code>)</li>
      </ul>
      <h3>Slide 9: Common Errors</h3>
      <ul>
        <li>async useEffect callback</li>
        <li>Effect runs twice in Strict Mode</li>
      </ul>
      <h3>Slide 10: Exercise Brief</h3>
      <ul>
        <li>PokeSearch with useEffect</li>
      </ul>
      <h3>Slide 11: Learning Baseline</h3>
      <ul>
        <li>Self-assessment checklist</li>
      </ul>
    </div>
  )
}
