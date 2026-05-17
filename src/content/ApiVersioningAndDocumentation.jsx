export default function ApiVersioningAndDocumentation() {
  return (
    <div className="page-content">
      <h2>Week 12: API Versioning &amp; Documentation</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 11: Frontend/Backend Integration"<br />
        🎯 This week: "Learn why API versioning matters and how to document APIs with Swagger"<br />
        <br />
        <strong>LAB (3h) Topics:</strong><br />
        ▸ A. Why Version APIs? (7 min)<br />
        ▸ B. URL Versioning (6 min)<br />
        ▸ C. Swagger / OpenAPI (7 min)<br />
        ▸ D. XML Comments (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality + AI Integration + Take-Home Mission (The Professional Contract)<br />
        <br />
        ✅ By end of lab: Understand why APIs need versioning; configure URL-based versioning; use Swagger UI; write XML doc comments
      </div>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (Lab - ~150 min)</strong></p>
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
            <td>Lecture + Slides + Versioning Strats</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (Swagger &amp; XML Comments)</td>
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
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Documentation sounds boring to students. Frame it as a weapon: "Good documentation is how you prove to your boss that your code works without them having to read the code."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Imagine you change the URL of your API from <code>/users</code> to <code>/customers</code>. Tomorrow, 10,000 people open your mobile app on their phones. The app tries to fetch <code>/users</code>. It gets a 404. Your app crashes on 10,000 devices. How do we upgrade APIs without breaking existing apps? Versioning."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Restaurant Menu</p>
        <ul>
          <li><strong>v1 Menu:</strong> Burgers and Fries. (Mobile App 1.0 reads this).</li>
          <li><strong>v2 Menu:</strong> Tacos and Salad. (Mobile App 2.0 reads this).</li>
          <li>If you just replace the menu, the person who ordered a Burger gets angry. You must keep BOTH menus active until everyone has upgraded to the new app.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. Why Version APIs? (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Websites (React) update instantly when the user refreshes. Mobile apps do not. Users might not update your app for 6 months. Your backend MUST support multiple versions simultaneously."</p>
        <p><strong>[TIP] Instructor Tip:</strong> Emphasize that "Breaking Changes" (deleting a field, changing a type from string to int) require a new version. Adding a <em>new</em> field does not.</p>
      </blockquote>
      <h4>▸ B. URL Versioning (6 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "The most common way to version an API is to literally put the version number in the URL."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">[ApiVersion("1.0")]
        [Route("api/v&#123;version:apiVersion&#125;/users")]
        public class UsersV1Controller : ControllerBase &#123; ... &#125;
      </code></pre>
      <p><strong>[TIP] Gen-Z Hook:</strong> Versioning is like branching off a new cinematic universe. Earth-1 (v1) and Earth-2 (v2) exist at the same time, doing different things.</p>
      </blockquote>
      <h4>▸ C. Swagger / OpenAPI (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "If you build an API, how does the frontend team know what endpoints exist? You don't email them a Word document. You use Swagger—a tool that automatically reads your C# code and generates a beautiful, interactive webpage documenting your API."</p>
        <p><strong>[VISUAL] Example:</strong>
        Show the standard Swagger UI interface with the GET/POST blocks. Emphasize the "Try it out" button.</p>
      </blockquote>
      <h4>▸ D. XML Comments (5 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Code tells you 'How', comments tell you 'Why'. By adding three slashes <code>///</code> above a method, we can write descriptions that Swagger will automatically display to the frontend developers."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">/// &lt;summary&gt;
        /// Retrieves a specific user by their ID.
        /// &lt;/summary&gt;
        [HttpGet("&#123;id&#125;")]
        public IActionResult GetUser(int id) &#123; ... &#125;
      </code></pre>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's break an API, realize we need versioning, and then generate documentation for it."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The Breaking Change</strong><ul>
        <li><em>Action:</em> Have an API that returns <code>&#123; "name": "John Doe" &#125;</code>. Change it to return <code>&#123; "firstName": "John", "lastName": "Doe" &#125;</code>. Show how this breaks the React frontend instantly.</li>
      </ul>
      </li>
      <li><strong>Step 2: Implementing Versioning</strong><ul>
      <li><em>Action:</em> Install the <code>Asp.Versioning.Mvc</code> package. Set up <code>AddApiVersioning()</code>. Create a <code>v1</code> controller (old data) and a <code>v2</code> controller (new data). Show Postman calling both.</li>
      </ul>
      </li>
      <li><strong>Step 3: Enabling XML Comments</strong><ul>
      <li><em>Action:</em> Open the <code>.csproj</code> file and enable <code>&lt;GenerateDocumentationFile&gt;true&lt;/GenerateDocumentationFile&gt;</code>. Write XML comments above the endpoints.</li>
      </ul>
      </li>
      <li><strong>Step 4: Swagger UI</strong><ul>
      <li><em>Action:</em> Run the app. Open the <code>/swagger</code> endpoint. Show how the XML comments now appear on the webpage.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. Debugging + Wrap</h3>
      <ul>
        <li><strong>Common Error 1:</strong> XML comments don't show up in Swagger. -&gt; You forgot to tell the Swagger configuration in <code>Program.cs</code> to explicitly include the <code>.xml</code> file path generated by the compiler.</li>
        <li><strong>Common Error 2:</strong> <code>AmbiguousMatchException</code>. -&gt; You have a v1 and v2 controller, but you forgot to add the <code>[ApiVersion]</code> attribute, so the framework doesn't know which one to use.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 5. In-Class Exercise</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Take last week's API. Install API Versioning. Move your existing controller to <code>v1.0</code>. Create a <code>v2.0</code> controller that returns slightly different data. Enable XML comments and write a <code>&lt;summary&gt;</code> for every endpoint.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <h3>From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "In a professional environment, frontend developers will literally refuse to work on a feature if the Swagger documentation isn't updated first. If I have to read your backend C# code to figure out what JSON to send you, you have failed as an API designer. Swagger is the contract you sign with the rest of the company."</p>
      </blockquote>
      <h3>AI Integration</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "Generate XML summary comments for this controller method." Not Allowed: "Write the logic to duplicate my v1 controller to v2."</li>
      </ul>
      <h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I understand why API versioning is necessary for mobile apps.</li>
          <li><input disabled="" type="checkbox" /> I can configure URL-based API versioning in ASP.NET Core.</li>
          <li><input disabled="" type="checkbox" /> I know how to navigate and use the Swagger UI.</li>
          <li><input disabled="" type="checkbox" /> I can write XML <code>///</code> comments that appear in Swagger.</li>
        </ul>
      </blockquote>
      <h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Professional Contract"</p>
        <ol>
          <li>Create a brand new "Inventory API".</li>
          <li>It must have 3 endpoints.</li>
          <li><strong>The Catch:</strong> You don't need to actually write the database logic. The endpoints can just return fake data. But you MUST write pristine XML comments containing a <code>&lt;summary&gt;</code>, <code>&lt;param&gt;</code>, and <code>&lt;returns&gt;</code> tag for every endpoint, and submit a screenshot of the beautiful Swagger UI page showing your documentation.</li>
        </ol>
      </blockquote>
      <h3>Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> A working API without any versioning or documentation.</li>
          <li><strong>Solution Repo:</strong> The API configured with <code>v1</code> and <code>v2</code> endpoints, fully documented with XML comments hooked up to Swagger.</li>
        </ul>
      </blockquote>
    </div>
  )
}
