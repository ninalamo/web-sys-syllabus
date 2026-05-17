export default function E3W16ExerPresentationTemplate() {
  return (
    <div className="page-content">
      <h1>Week 16: Capstone Presentation Template</h1>
      <h2>Presentation Structure</h2>
      <h3>1. Introduction (1 min)</h3>
      <ul>
        <li>Project name and tagline</li>
        <li>Problem it solves</li>
        <li>Tech stack overview</li>
      </ul>
      <h3>2. Architecture Overview (2 min)</h3>
      <ul>
        <li>Draw or show your architecture diagram</li>
        <li>Frontend (React) -&gt; HTTP/JSON -&gt; Backend (ASP.NET Core) -&gt; Database</li>
        <li>Authentication flow (JWT)</li>
        <li>CI/CD pipeline</li>
      </ul>
      <h3>3. Live Demo (5 min)</h3>
      <ul>
        <li>Start with the deployed URL</li>
        <li>Walk through key user flows:</li>
        <li>User registration/login</li>
        <li>Core CRUD operations</li>
        <li>Any unique features</li>
        <li>Show the codebase briefly</li>
      </ul>
      <h3>4. Technical Decisions (2 min)</h3>
      <ul>
        <li>Why React? Why ASP.NET Core?</li>
        <li>Why JWT? Why this database?</li>
        <li>What tradeoffs did you make?</li>
      </ul>
      <h3>5. Challenges &amp; Learnings (1 min)</h3>
      <ul>
        <li>What was hardest?</li>
        <li>What would you do differently?</li>
      </ul>
      <h3>6. Q&amp;A (5 min)</h3>
      <ul>
        <li>Be prepared to defend every decision</li>
        <li>Be honest about limitations</li>
      </ul>
      <h2>Tips</h2>
      <ul>
        <li>A working simple app beats a broken complex one</li>
        <li>Have a video backup ready</li>
        <li>Be confident and honest</li>
        <li>You can say "I don't know, but here's how I'd find out"</li>
      </ul>
    </div>
  )
}
