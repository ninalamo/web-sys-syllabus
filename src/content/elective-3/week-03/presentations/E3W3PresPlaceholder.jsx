export default function E3W3PresPlaceholder() {
  return (
    <div className="page-content">
      <h1>Week 3: Presentations — Placeholder</h1>
      <h2>Planned Slide Deck Content</h2>
      <h3>Slide 1: Title</h3>
      <ul>
        <li>"Week 3: TypeScript Essentials"</li>
        <li>"Add a safety net — catch bugs before runtime"</li>
      </ul>
      <h3>Slide 2: The Hook</h3>
      <ul>
        <li>"TypeScript stops you from pushing a bug where a user's age is <code>undefined</code>"</li>
      </ul>
      <h3>Slide 3: Whiteboard Analogy</h3>
      <ul>
        <li>JavaScript: Writing without spellcheck</li>
        <li>TypeScript: Writing with autocorrect and grammar check</li>
      </ul>
      <h3>Slide 4: Inference vs Explicit Types</h3>
      <ul>
        <li>TS is smart — don't over-type</li>
        <li><code>let name = "Alice"</code> — TS knows it's a string</li>
      </ul>
      <h3>Slide 5: Interfaces</h3>
      <ul>
        <li>Blueprint for objects</li>
        <li>"A bouncer checking IDs"</li>
      </ul>
      <h3>Slide 6: Union Types &amp; Optional Properties</h3>
      <ul>
        <li><code>id: number | string</code></li>
        <li><code>middleName?: string</code> — dangerous, must check</li>
      </ul>
      <h3>Slide 7: The Danger of <code>any</code></h3>
      <ul>
        <li><code>any</code> = "turn off all checks"</li>
        <li>Use <code>unknown</code> instead</li>
      </ul>
      <h3>Slide 8: Live Coding Preview</h3>
      <ul>
        <li>Step 1: The untyped disaster (NaN result)</li>
        <li>Step 2: Adding primitives (red squigglies appear)</li>
        <li>Step 3: Creating an interface</li>
        <li>Step 4: Typing API responses</li>
      </ul>
      <h3>Slide 9: Common Errors</h3>
      <ul>
        <li>"Property does not exist on type"</li>
        <li>"Type 'undefined' is not assignable"</li>
      </ul>
      <h3>Slide 10: Exercise Brief</h3>
      <ul>
        <li>Convert JS catalog to TS</li>
        <li>Create interfaces, type functions, use union types</li>
      </ul>
      <h3>Slide 11: Learning Baseline</h3>
      <ul>
        <li>Self-assessment checklist</li>
      </ul>
    </div>
  )
}
