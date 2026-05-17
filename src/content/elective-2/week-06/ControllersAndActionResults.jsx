export default function ControllersAndActionResults() {
  return (
    <div className="page-content">
      <h2>Week 6: Controllers &amp; Action Results</h2>
      <div style={{ background: '#e0f2fe', padding: '15px', borderLeft: '5px solid #0284c7', marginBottom: '20px' }}>
        <strong>Learning Objectives:</strong>
        <ul>
          <li>Understand the purpose of the <code>IActionResult</code> interface in controller actions.</li>
          <li>Return appropriate HTTP status codes (e.g., NotFound, BadRequest) for edge cases.</li>
          <li>Implement the Post-Redirect-Get (PRG) pattern to prevent duplicate form submissions.</li>
          <li>Return raw data (JSON) and files directly from a controller, bypassing Razor views entirely.</li>
        </ul>
      </div>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 5: Routing Deep Dive"<br />
        🎯 This week: "Learn what controllers can return — not just views, but JSON, redirects, files, and status codes"<br />
        <br />
        <strong>Core Concepts:</strong><br />
        ▸ A. The `IActionResult` Interface (9 min)<br />▸ B. Redirection Patterns (8 min)<br />▸ C. Returning Data / JSON (8 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Pro-Tip on return types + AI Integration + Take-Home Mission (API Endpoint)<br />
        <br />
        ✅ By end of lab: Explain why controllers return `IActionResult`; return NotFound(); redirect to a different action; return raw JSON instead of Razor
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
            <td>Lecture + Slides + Return Types</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (IActionResult variants)</td>
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
        <p>[TIP] <strong>Teaching Tip:</strong> Up until now, students have only used <code>return View()</code>. Today they learn a controller can return JSON, files, redirects, or raw status codes. </p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "If you ask a waiter for a menu, they hand you paper. If you ask for water, they hand you a glass. If you ask where the bathroom is, they point you in a direction. Controllers do the exact same thing based on what the browser asks for."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Waiter's Responses</p>
        <ul>
          <li><code>return View()</code> -&gt; Handing you the menu (HTML).</li>
          <li><code>return Json()</code> -&gt; Handing you raw ingredients (Data for APIs).</li>
          <li><code>return Redirect()</code> -&gt; Pointing you to another table.</li>
          <li><code>return NotFound()</code> -&gt; "We're out of stock."</li>
          <li><code>return File()</code> -&gt; Handing you a printed receipt (PDF).</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. The <code>IActionResult</code> Interface (9 min)</h4>
      <p><strong>Module Syllabus Content:</strong> Controllers are not forced to return HTML. The <code>IActionResult</code> interface is a powerful abstraction that allows a single controller method to return entirely different types of responses based on the request's context. Depending on the logic, a controller can return a <code>View()</code> to render an HTML page, a <code>BadRequest()</code> to signal a 400 status code for invalid input, or a <code>NotFound()</code> for a 404 status code if a database record is missing. Because all these specific result types implement the <code>IActionResult</code> interface, the method signature remains clean and highly flexible.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Why do our methods return <code>IActionResult</code> instead of <code>string</code> or <code>HTML</code>? Because <code>IActionResult</code> is an interface that allows us to return <em>anything</em>. It gives us maximum flexibility."</p>
        <p><strong>[CODE] Example:</strong> </p>
        <pre><code className="language-csharp">public IActionResult GetUser(int id) &#123;
        if (id == 0) return BadRequest(); // 400
        if (id &gt; 100) return NotFound(); // 404
        return View(); // 200 OK + HTML
        &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Emphasize that <code>IActionResult</code> is just a box. What goes inside the box dictates the HTTP status code and the body content.</p>
      </blockquote>
      <h4>▸ B. Redirection (8 min)</h4>
      <p><strong>Module Syllabus Content:</strong> Redirection is a crucial navigational tool. Instead of returning content directly, a controller can return a <code>Redirect()</code> or <code>RedirectToAction()</code>, which sends an HTTP 302 (Found) response back to the browser. The browser then automatically makes a brand new GET request to the provided URL. This is universally used in the Post-Redirect-Get (PRG) pattern: after a user successfully submits a form via POST, the server redirects them to a success page. This ensures that if the user refreshes the success page, they do not accidentally resubmit the POST data and duplicate a transaction.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Sometimes the job of an action is just to send the user somewhere else. After a user logs in, you don't return a 'Login Success' view; you redirect them to the Dashboard."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">public IActionResult ProcessLogin() &#123;
        // logic...
        return RedirectToAction("Dashboard", "Admin");
        &#125;
      </code></pre>
      <p><strong>[TIP] Gen-Z Hook:</strong> Redirection is like tapping a link in TikTok that forces Safari to open. The app says 'I can't handle this here, let me bounce you to the right place.'</p>
      </blockquote>
      <h4>▸ C. Returning Data (JSON) (8 min)</h4>
      <p><strong>Module Syllabus Content:</strong> Modern web applications heavily rely on JavaScript frameworks (like React or Vue) or mobile apps that consume raw data rather than HTML. Controllers handle this effortlessly using the <code>Json()</code> action result. When a developer passes a C# object or list into <code>return Json(myData)</code>, the ASP.NET Core framework automatically serializes the C# object into a JSON string and sets the HTTP response header <code>Content-Type</code> to <code>application/json</code>. This allows the exact same backend infrastructure to serve both traditional web pages and dynamic API data.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "If your front-end is React or a mobile app, it doesn't want HTML. It wants raw data. We can bypass Razor views entirely and just dump objects as JSON."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">public IActionResult ApiGetItem() &#123;
        var item = new &#123; Name = "Laptop", Price = 999 &#125;;
        return Json(item);
        &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Remind them of Week 3 (HTTP). <code>return Json()</code> automatically sets the header <code>Content-Type: application/json</code>. The framework handles the heavy lifting.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build one controller that returns four completely different things based on the input."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The Swiss Army Controller</strong><ul>
        <li><em>Action:</em> Create <code>DownloadController</code>.</li>
      </ul>
      </li>
      <li><strong>Step 2: Testing Status Codes</strong><ul>
      <li><em>Action:</em> Write a method <code>GetDocument(int id)</code>. If id is negative, <code>return BadRequest()</code>. If id is 99, <code>return Unauthorized()</code>. Show DevTools so students see the real HTTP codes changing.</li>
      </ul>
      </li>
      <li><strong>Step 3: The Redirect Chain</strong><ul>
      <li><em>Action:</em> Write a method that does <code>RedirectToAction()</code>. Trace the Network tab to show the <code>302 Found</code> response bouncing the browser to the new URL.</li>
      </ul>
      </li>
      <li><strong>Step 4: Returning a File</strong><ul>
      <li><em>Action:</em> Use <code>return File()</code> to send a <code>.txt</code> file to the browser and force a download prompt.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Build a <code>SearchController</code>. If the user searches for "Google", redirect them to <code>https://google.com</code>. If they search for empty string, return <code>BadRequest()</code>. If they search for "Secret", return <code>Json()</code> with hidden data. Otherwise, return a normal <code>View()</code>.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "A classic junior developer mistake is returning a <code>View()</code> when a database save fails. If the user submits a form to buy a ticket, and it fails, and you just <code>return View()</code>, the URL remains the POST URL. If they hit 'Refresh' on their browser, it will submit the payment again! Always use the PRG pattern: <strong>Post-Redirect-Get</strong>. After a POST, always <code>RedirectToAction()</code>. Never return a view directly from a POST."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> 5. AI Integration &amp; Debugging</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "What is the difference between Redirect and RedirectToAction?" Not Allowed: "Write the PRG pattern logic for my homework."</li>
        <li><strong>Common Error 1:</strong> <code>Cannot implicitly convert type 'string' to 'IActionResult'</code>. -&gt; You forgot to wrap your string in a helper method like <code>Ok("string")</code> or <code>Content("string")</code>.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
      </blockquote><h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I can explain why controllers return <code>IActionResult</code>.</li>
          <li><input disabled="" type="checkbox" /> I can return an explicit HTTP status code like <code>NotFound()</code>.</li>
          <li><input disabled="" type="checkbox" /> I can redirect a user to a different controller action.</li>
          <li><input disabled="" type="checkbox" /> I can return raw JSON data instead of a Razor view.</li>
        </ul>
      </blockquote>
      
      <blockquote>
      </blockquote><h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Safe Form Submission"
        Build a basic HTML form that POSTs to a <code>ContactController</code>.</p>
        <ol>
          <li>If the message is empty, return a <code>BadRequest</code>.</li>
          <li>If the message is valid, pretend to save it, and then implement the <strong>PRG Pattern</strong> (Post-Redirect-Get) to redirect the user to a "Success" action.</li>
          <li><strong>The Catch:</strong> The "Success" action must return a <code>View</code> that says "Thank you!", and hitting refresh on that page should NOT trigger the form resubmission warning in the browser.</li>
        </ol>
      </blockquote>
      
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 7. Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> A Controller that returns strings and raw HTML strings, looking messy.</li>
          <li><strong>Solution Repo:</strong> The <code>SearchController</code> exercise completed, showcasing 4 different <code>IActionResult</code> return types.</li>
        </ul>
      </blockquote>
    </div>
  )
}
