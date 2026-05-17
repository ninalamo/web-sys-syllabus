export default function E3W16ResoReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 16: Capstone Final — Resources &amp; Reference</h1>
      <h2>Core Concepts Quick Reference</h2>
      <h3>1. Full-Stack Architecture</h3>
      <pre><code>Frontend (React) -&gt; HTTP + JSON + Bearer token -&gt; Backend (ASP.NET Core)
      +- Pages/Routes                                              +- Controllers
      +- Components                                                +- Services
      +- Hooks (useFetch, useAuth)                                 +- Models
      +- Context (Auth, State)                                     +- Auth (JWT)
      
      Backend -&gt; Entity Framework Core -&gt; Database (SQL Server)
      +- Swagger/OpenAPI docs                          +- Migrations
      +- [ApiController] validation                    +- Seeding
      +- CORS policy                                   +- Tables</code></pre>
      <h3>2. Capstone Evaluation Criteria</h3>
      <table><thead><tr>
        <th>Area</th>
        <th>What Examiners Look For</th>
      </tr></thead><tbody>
      <tr>
        <td><strong>Functional</strong></td>
        <td>Does the app work?</td>
      </tr>
      <tr>
        <td><strong>Quality</strong></td>
        <td>Is the code clean?</td>
      </tr>
      <tr>
        <td><strong>Production</strong></td>
        <td>Is it deployed?</td>
      </tr>
      <tr>
        <td><strong>Engineering</strong></td>
        <td>Can you explain your choices?</td>
      </tr>
      <h3>3. Tradeoff Articulation</h3>
      <p>
      <strong>Good answer:</strong> "I chose JWT because it's stateless and scales horizontally. The tradeoff is revocation difficulty, which I handled with refresh token rotation."
      </p>
      <br /><strong>Bad answer:</strong> "Because the tutorial used JWT."
      
      
      <h3>4. Demo Disaster Checklist</h3>
      
      
      <ul>
        <li>[ ] Video recording of demo</li>
        <li>[ ] Screenshots of key features</li>
        <li>[ ] Local fallback ready</li>
        <li>[ ] Live deployment tested before presentation</li>
        <li>[ ] Know how to restart services if they crash</li>
      
      </ul>
      
      <h3>5. AI Usage Guidelines</h3>
      
      
      <table><thead><tr>
        <th>Allowed</th>
        <th>Not Allowed</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>"Review my architecture for security issues"</td>
        <td>"Make my architectural decisions"</td>
      </tr>
      
      <tr>
        <td>"Generate README structure"</td>
        <td>"Write my tradeoff analysis"</td>
      </tr>
      
      <tr>
        <td>Boilerplate generation</td>
        <td>Core logic without understanding</td>
      </tr>
      
      <br /><strong>Rule:</strong> If AI chose it and you can't explain why, you'll fail the Q&amp;A.
      
      
      <h2>Key Reminders</h2>
      
      
      <ul>
        <li>Working simple &gt; broken complex</li>
        <li>Be honest about limitations</li>
        <li>Prepare for disaster</li>
        <li>You must understand every line of code you present</li>
      
      </ul></tbody></table></tbody></table>
    </div>
  )
}
