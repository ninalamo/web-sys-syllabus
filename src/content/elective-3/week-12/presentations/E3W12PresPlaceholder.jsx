export default function E3W12PresPlaceholder() {
  return (
    <div className="page-content">
      <h1>Week 12: Presentations — Placeholder</h1>
      <h2>Planned Slide Deck Content</h2>
      <h3>Slide 1: Title</h3>
      <ul>
        <li>"Week 12: API Versioning &amp; Documentation"</li>
        <li>"Why versioning matters and how to document with Swagger"</li>
      </ul>
      <h3>Slide 2: The Hook</h3>
      <ul>
        <li>"Change /users to /customers and 10,000 mobile apps crash tomorrow"</li>
      </ul>
      <h3>Slide 3: Whiteboard Analogy</h3>
      <ul>
        <li>The Restaurant Menu</li>
        <li>v1 Menu: Burgers and Fries (Mobile App 1.0)</li>
        <li>v2 Menu: Tacos and Salad (Mobile App 2.0)</li>
        <li>Keep BOTH menus active until everyone upgrades</li>
      </ul>
      <h3>Slide 4: Why Version APIs?</h3>
      <ul>
        <li>Breaking changes = new version</li>
        <li>Adding a field != breaking change</li>
      </ul>
      <h3>Slide 5: URL Versioning</h3>
      <ul>
        <li><code>[ApiVersion("1.0")]</code></li>
        <li><code>/api/v1/users</code> vs <code>/api/v2/users</code></li>
      </ul>
      <h3>Slide 6: Swagger / OpenAPI</h3>
      <ul>
        <li>Auto-generated interactive API docs</li>
        <li>"Try it out" button</li>
      </ul>
      <h3>Slide 7: XML Comments</h3>
      <ul>
        <li><code>///</code> above methods</li>
        <li><code>&lt;summary&gt;</code>, <code>&lt;param&gt;</code>, <code>&lt;returns&gt;</code></li>
      </ul>
      <h3>Slide 8: Live Coding Preview</h3>
      <ul>
        <li>Step 1: The breaking change</li>
        <li>Step 2: Implementing versioning</li>
        <li>Step 3: Enabling XML comments</li>
        <li>Step 4: Swagger UI</li>
      </ul>
      <h3>Slide 9: Common Errors</h3>
      <ul>
        <li>XML comments not showing</li>
        <li>AmbiguousMatchException</li>
      </ul>
      <h3>Slide 10: Exercise Brief</h3>
      <ul>
        <li>Version last week's API, add XML comments</li>
      </ul>
      <h3>Slide 11: Learning Baseline</h3>
      <ul>
        <li>Self-assessment checklist</li>
      </ul>
    </div>
  )
}
