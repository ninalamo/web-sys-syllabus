export default function E3W5PresPlaceholder() {
  return (
    <div className="page-content">
      <h1>Week 5: Presentations — Placeholder</h1>
      <h2>Planned Slide Deck Content</h2>
      <h3>Slide 1: Title</h3>
      <ul>
        <li>"Week 5: Component Thinking (Vanilla JS)"</li>
        <li>"Building reusable UI blocks before we meet React"</li>
      </ul>
      <h3>Slide 2: The Hook</h3>
      <ul>
        <li>Lego castle analogy: Imperative = step-by-step instructions. Declarative = picture of finished castle.</li>
      </ul>
      <h3>Slide 3: Whiteboard Analogy</h3>
      <ul>
        <li>The Chef vs The Microwave</li>
        <li>Imperative: chop, stir, monitor (document.createElement)</li>
        <li>Declarative: press 'Popcorn' (change State)</li>
      </ul>
      <h3>Slide 4: Imperative DOM (The Pain)</h3>
      <ul>
        <li>4 lines for a button</li>
        <li>Slow, verbose, error-prone</li>
      </ul>
      <h3>Slide 5: State as Single Source of Truth</h3>
      <ul>
        <li>State -&gt; renders -&gt; UI</li>
        <li>Don't touch the &lt;h1&gt;, change the State</li>
      </ul>
      <h3>Slide 6: Components in Vanilla JS</h3>
      <ul>
        <li>Function that returns HTML string</li>
        <li>Template literals as JSX precursor</li>
      </ul>
      <h3>Slide 7: Live Coding Preview</h3>
      <ul>
        <li>Step 1: Imperative counter (brittle)</li>
        <li>Step 2: State-driven counter (clean)</li>
        <li>Step 3: Componentizing</li>
      </ul>
      <h3>Slide 8: Common Errors</h3>
      <ul>
        <li>"Cannot read properties of null" — JS ran before HTML loaded</li>
      </ul>
      <h3>Slide 9: Exercise Brief</h3>
      <ul>
        <li>Build Todo List using State pattern</li>
        <li>No DOM reading for state</li>
      </ul>
      <h3>Slide 10: Learning Baseline</h3>
      <ul>
        <li>Self-assessment checklist</li>
      </ul>
    </div>
  )
}
