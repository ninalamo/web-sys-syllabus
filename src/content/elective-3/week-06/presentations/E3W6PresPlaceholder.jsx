export default function E3W6PresPlaceholder() {
  return (
    <div className="page-content">
      <h1>Week 6: Presentations — Placeholder</h1>
      <h2>Planned Slide Deck Content</h2>
      <h3>Slide 1: Title</h3>
      <ul>
        <li>"Week 6: React Fundamentals"</li>
        <li>"Components, props, state, and JSX"</li>
      </ul>
      <h3>Slide 2: The Hook</h3>
      <ul>
        <li>"Last week we built our own clunky UI engine. Today we use the tool that powers Netflix, Instagram, and Airbnb."</li>
      </ul>
      <h3>Slide 3: Whiteboard Analogy</h3>
      <ul>
        <li>Custom HTML Tags: <code>&lt;UserProfile /&gt;</code> — looks like HTML, but it's your code</li>
      </ul>
      <h3>Slide 4: JSX — Not HTML!</h3>
      <ul>
        <li>JSX = JavaScript, not HTML</li>
        <li>Babel transforms it to <code>React.createElement()</code></li>
        <li>Rules: single parent, className, self-close tags</li>
      </ul>
      <h3>Slide 5: Components</h3>
      <ul>
        <li>Just a function that returns JSX</li>
        <li>MUST be capitalized</li>
      </ul>
      <h3>Slide 6: Props</h3>
      <ul>
        <li>Parameters for components</li>
        <li>Flow down like a waterfall (read-only)</li>
      </ul>
      <h3>Slide 7: useState</h3>
      <ul>
        <li>Component's personal memory</li>
        <li>When state changes, React re-renders</li>
        <li>NEVER mutate directly</li>
      </ul>
      <h3>Slide 8: Live Coding Preview</h3>
      <ul>
        <li>Step 1: Scaffold React app with Vite</li>
        <li>Step 2: Build ProfileCard with props</li>
        <li>Step 3: Add Like button with useState</li>
      </ul>
      <h3>Slide 9: Common Errors</h3>
      <ul>
        <li>Adjacent JSX elements</li>
        <li>State one step behind</li>
      </ul>
      <h3>Slide 10: Exercise Brief</h3>
      <ul>
        <li>Counter with step prop</li>
        <li>3 counters with different steps</li>
      </ul>
      <h3>Slide 11: Learning Baseline</h3>
      <ul>
        <li>Self-assessment checklist</li>
      </ul>
    </div>
  )
}
