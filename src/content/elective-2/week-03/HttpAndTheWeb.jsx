export default function HttpAndTheWeb() {
  return (
    <div className="page-content">
      <h2>Week 3: HTTP &amp; The Web</h2>
      <div style={{ background: '#e0f2fe', padding: '15px', borderLeft: '5px solid #0284c7', marginBottom: '20px' }}>
        <strong>Learning Objectives:</strong>
        <ul>
          <li>Explain the HTTP request-response cycle and the structure of URLs.</li>
          <li>Identify and correctly use core HTTP methods (GET, POST, PUT, DELETE).</li>
          <li>Interpret HTTP status codes (200, 400, 404, 500) and headers using browser DevTools.</li>
          <li>Understand the stateless nature of HTTP and its implications for web development.</li>
        </ul>
      </div>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 2: Interfaces &amp; DI Mental Model"<br />
        🎯 This week: "We explore HTTP — the protocol that powers the web — and see how browsers and servers communicate"<br />
        <br />
        <strong>Core Concepts:</strong><br />
        ▸ A. The Request-Response Cycle (7 min)<br />▸ B. HTTP Methods / Verbs (7 min)<br />▸ C. Status Codes (6 min)<br />▸ D. Statelessness (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> From the Trenches (401 vs 403) + AI Integration + Take-Home Mission (Postman Challenge)<br />
        <br />
        ✅ By end of lab: Open Network Tab; explain GET vs POST; know 200/404/500; understand HTTP is stateless
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
            <td>Lecture + Slides + Polls</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Demo (DevTools + C# code)</td>
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
        <p>[TIP] <strong>Teaching Tip:</strong> This is the first week moving beyond syntax into how the web actually works. Use DevTools heavily; seeing real HTTP traffic makes the abstract concrete.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "When you tapped that Like button on your crush's post, about 47 things happened in under 200ms. Your phone sent a secret message to a server, the server updated a DB, and sent back a response. That's HTTP."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Digital Mail System</p>
        <ul>
          <li><strong>The Envelope (HTTP Request):</strong> You need an address (URL), a method (GET/POST), and headers (return address).</li>
          <li><strong>The Letter (Body):</strong> The actual data you are sending (like login credentials).</li>
          <li><strong>The Reply (HTTP Response):</strong> The server sends back a status code (200 OK) and the requested data.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. The Request-Response Cycle (7 min)</h4>
      <p><strong>Module Syllabus Content:</strong> The World Wide Web runs on the Hypertext Transfer Protocol (HTTP), which operates strictly on a request-response model. A client (usually a web browser or mobile app) sends an HTTP Request to a specific URL hosted on a server. The server processes this request, performs any necessary business logic or database queries, and sends back an HTTP Response containing the requested resource (like HTML, JSON, or an image). Crucially, the server cannot independently push data to the client using standard HTTP; the conversation must always be initiated by the client's request.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "HTTP is a conversation. The client (browser/phone) asks a question. The server answers. The server can NEVER start the conversation."</p>
        <p><strong>[VISUAL] Example:</strong>
        Draw: <code>Client ---(Request)---&gt; Server</code> then <code>Server ---(Response)---&gt; Client</code>.</p>
        <p><strong>[TIP] Instructor Tip:</strong> Emphasize this because students often think the server can magically push data to the client (which requires WebSockets, not standard HTTP).</p>
      </blockquote>
      <h4>▸ B. HTTP Methods (Verbs) (7 min)</h4>
      <p><strong>Module Syllabus Content:</strong> While the URL specifies <em>where</em> the request is going, the HTTP Method (or Verb) tells the server <em>what</em> action the client wants to perform. The four most common methods align with CRUD operations: <code>GET</code> retrieves data without modifying it (Read), <code>POST</code> submits data to create a new resource (Create), <code>PUT</code> (or <code>PATCH</code>) modifies an existing resource (Update), and <code>DELETE</code> removes a resource (Delete). Following standard REST principles, <code>GET</code> and <code>DELETE</code> requests should not contain a payload body, whereas <code>POST</code> and <code>PUT</code> requests include the data payload in their body.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "The URL tells the server WHERE to go. The method tells the server WHAT to do."</p>
        <p><strong>[CODE] Example:</strong></p>
        <ul>
          <li><strong>GET:</strong> Read only. (No body allowed).</li>
          <li><strong>POST:</strong> Create new. (Contains a body).</li>
          <li><strong>PUT/PATCH:</strong> Update existing.</li>
          <li><strong>DELETE:</strong> Destroy.</li>
        </ul>
        <p><strong>[TIP] Gen-Z Hook:</strong> GET is browsing the menu. POST is ordering the food. DELETE is canceling the order.</p>
      </blockquote>
      <h4>▸ C. Status Codes (6 min)</h4>
      <p><strong>Module Syllabus Content:</strong> Every HTTP response includes a three-digit status code that instantly communicates the result of the request. These are grouped into logical ranges: 2xx means Success (e.g., 200 OK, 201 Created), 3xx indicates Redirection (the resource has moved), 4xx signifies a Client Error (the user sent a bad request, like a 404 Not Found or a 400 Bad Request with invalid data), and 5xx represents a Server Error (the client's request was valid, but the server's code crashed, e.g., 500 Internal Server Error). Knowing these codes allows developers to quickly isolate whether a bug is on the frontend or the backend.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Status codes are the server's mood. 200s are happy. 400s mean you messed up. 500s mean the server messed up."</p>
        <p><strong>[CODE] Example:</strong></p>
        <ul>
          <li><strong>200 OK:</strong> Everything worked.</li>
          <li><strong>400 Bad Request:</strong> You sent bad JSON or missing data.</li>
          <li><strong>404 Not Found:</strong> The URL doesn't exist.</li>
          <li><strong>500 Internal Error:</strong> The server crashed.</li>
        </ul>
        <p><strong>[TIP] Instructor Tip:</strong> Drill 404 vs 500. 404 is a routing problem. 500 is a code logic problem.</p>
      </blockquote>
      <h4>▸ D. Statelessness (5 min)</h4>
      <p><strong>Module Syllabus Content:</strong> By design, HTTP is a stateless protocol. This means that every single request is processed in complete isolation. The server does not inherently remember anything about the client from previous requests. If you authenticate yourself on Request #1, the server will forget who you are by Request #2 unless you explicitly remind it. To maintain state—such as keeping a user logged in or keeping items in a shopping cart—web developers must implement external mechanisms like Cookies, Session IDs, or JSON Web Tokens (JWTs) that are attached to every subsequent request.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "HTTP has amnesia. Every request is completely isolated. If you log in on request 1, request 2 has no idea who you are."</p>
        <p><strong>[VISUAL] Example:</strong>
        "Hi, I'm Nina." -&gt; "Hello Nina."
        (Next request) "What's my balance?" -&gt; "Who are you?"</p>
        <p><strong>[TIP] Instructor Tip:</strong> This sets up the concept of Cookies/Tokens for later in the semester. </p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's see HTTP in action. We aren't going to look at C# first. We're going to look at the browser."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The DevTools X-Ray</strong><ul>
        <li><em>Action:</em> Open Chrome, hit F12, go to the Network Tab. Refresh google.com. Show the class the 50+ requests. Click on one and show the Headers and Response.</li>
      </ul>
      </li>
      <li><strong>Step 2: C# <code>HttpClient</code></strong><ul>
      <li><em>Action:</em> Write a simple C# Console App that makes a GET request to a public API.</li>
      </ul>
      <pre><code className="language-csharp">using var client = new HttpClient();
      var response = await client.GetAsync("https://api.github.com/users/octocat");
      response.EnsureSuccessStatusCode();
      var body = await response.Content.ReadAsStringAsync();
      Console.WriteLine(body);
      </code></pre>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> The DevTools Detective. Visit 3 different websites (e.g., Netflix, GitHub, a local news site). Open the Network tab and trace the first page load. Identify HTML requests, API calls, and find at least one 404 or 304 code.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "In an interview, someone will ask you 'What is the difference between a 401 and a 403?' 90% of candidates freeze. Here is the industry cheat code: 401 means 'I don't know who you are (Authentication failed).' 403 means 'I know exactly who you are, but you are not allowed to do this (Authorization failed).' Memorize that, and you'll pass the technical screen."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> 5. AI Integration &amp; Debugging</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "Explain the User-Agent HTTP header." Not Allowed: "Write my HTTP trace report for me."</li>
        <li><strong>Common Error 1:</strong> <code>403 Forbidden</code> on GitHub API. -&gt; You didn't supply a <code>User-Agent</code> header, so GitHub blocked your script thinking it was a malicious bot.</li>
        <li><strong>Common Error 2:</strong> <code>CORS Error</code>. -&gt; Not a bug. The browser actively blocked your request because the server didn't explicitly allow your domain to talk to it.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
      </blockquote><h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I can open the Network Tab and inspect an HTTP request.</li>
          <li><input disabled="" type="checkbox" /> I can explain the difference between GET and POST.</li>
          <li><input disabled="" type="checkbox" /> I know what 200, 404, and 500 status codes mean.</li>
          <li><input disabled="" type="checkbox" /> I understand that HTTP is stateless.</li>
        </ul>
      </blockquote>
      
      <blockquote>
      </blockquote><h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Postman Challenge"
        Instead of writing C# code, download Postman (or Insomnia).</p>
        <ol>
          <li>Make a GET request to JSONPlaceholder (<code>/users</code>).</li>
          <li>Make a POST request to JSONPlaceholder (<code>/posts</code>) with a JSON body containing a title and body.</li>
          <li><strong>The Catch:</strong> Take a screenshot of the 201 Created response, proving you successfully sent the JSON body with the correct <code>Content-Type</code> header.</li>
        </ol>
      </blockquote>
      
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 7. Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> No starter repo needed today. Focus on Chrome DevTools.</li>
          <li><strong>Solution Repo:</strong> A C# script showing how to inject headers into <code>HttpClient</code> to bypass the GitHub 403 error.</li>
        </ul>
      </blockquote>
    </div>
  )
}
