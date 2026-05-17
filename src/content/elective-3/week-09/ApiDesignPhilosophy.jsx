export default function ApiDesignPhilosophy() {
  return (
    <div className="page-content">
      <h2>Week 9: API Design Philosophy</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 8: React Router &amp; SPA Concepts"<br />
        🎯 This week: "Shift to the backend — learning how to design RESTful APIs before writing any C# code"<br />
        <br />
        <strong>LAB (3h) Topics:</strong><br />
        ▸ A. RESTful Principles (Nouns vs Verbs) (7 min)<br />
        ▸ B. JSON Standardization (6 min)<br />
        ▸ C. The API Contract / Status Codes (7 min)<br />
        ▸ D. Pagination &amp; Filtering (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality + AI Integration + Take-Home Mission (The API Architect)<br />
        <br />
        ✅ By end of lab: Design RESTful URLs using Nouns; understand GET/POST/PUT/DELETE; return specific HTTP status codes; use query params for pagination
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
            <td>Lecture + Slides + The REST Contract</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Diagramming (Postman)</td>
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
        <p>[TIP] <strong>Teaching Tip:</strong> We are shifting from Frontend to Backend. Students will want to dive into C# immediately. STOP them. Architecture comes before code. Today is about <em>how</em> we design URLs and JSON payloads, regardless of the language.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "If you build an API with URLs like <code>/getTheUsers</code> and <code>/updateUserById</code>, you will be laughed out of a job interview. An API is a professional contract between the frontend and the backend. Today, we learn the rules of REST—the language of the internet."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Vending Machine (The Contract)</p>
        <ul>
          <li><strong>The Button (Endpoint):</strong> A4 (Chips). It's clearly labeled.</li>
          <li><strong>The Coin Slot (Payload):</strong> You must insert exactly 50 pesos. If you insert a leaf, it rejects it (400 Bad Request).</li>
          <li><strong>The Output (Response):</strong> It dispenses the chips (200 OK) or shows an 'Out of Stock' light (404 Not Found).</li>
          <li>If the vending machine changes how it works internally, you don't care, as long as A4 still gives you chips. That's a strong API contract.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. RESTful Principles (Nouns vs Verbs) (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "In REST, URLs represent Resources (Nouns). The HTTP Method represents the Action (Verb). We never put verbs in the URL."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-text">BAD:  GET /getAllUsers
        BAD:  POST /createNewUser
      
        GOOD: GET /users      (Returns a list)
        GOOD: POST /users     (Creates one)
        GOOD: GET /users/5    (Returns user #5)
        GOOD: DELETE /users/5 (Deletes user #5)
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Drill this hard. "The URL is the 'Thing'. The HTTP Method is what you 'Do' to the Thing."</p>
      </blockquote>
      <h4>▸ B. JSON Standardization (6 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "When you send data back to the frontend, it needs to be predictable. Don't nest objects 10 layers deep. Keep it flat, clean, and consistent."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-json">// A predictable API response
        &#123;
        "data": &#123; "id": 5, "name": "Nina" &#125;,
        "success": true,
        "message": null
        &#125;
      </code></pre>
      <p><strong>[TIP] Gen-Z Hook:</strong> Good JSON is like a well-organized Notion page. Everything has a predictable place. Bad JSON is like a messy bedroom.</p>
      </blockquote>
      <h4>▸ C. The API Contract / Status Codes (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "The frontend relies on Status Codes to know if it should show a success toast, a red error message, or redirect to a login screen. If your API throws an error but returns a 200 OK, you have broken the contract."</p>
        <p><strong>[VISUAL] Example:</strong></p>
        <ul>
          <li><code>200 OK</code>: Normal success.</li>
          <li><code>201 Created</code>: Success for a POST.</li>
          <li><code>400 Bad Request</code>: Frontend sent bad validation data.</li>
          <li><code>401 Unauthorized</code>: No token / Not logged in.</li>
        </ul>
        <p><strong>[TIP] Instructor Tip:</strong> Emphasize that returning <code>500</code> means the backend developer failed to catch an exception.</p>
      </blockquote>
      <h4>▸ D. Pagination &amp; Filtering (5 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Never return the entire database. If a table has 10 million rows, <code>GET /users</code> will crash your server. You must use query parameters for pagination."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-text">GET /users?page=2&amp;limit=50&amp;sort=name_asc
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Explain that query parameters <code>?key=value</code> are used for filtering, sorting, and pagination, while path parameters <code>/users/5</code> are used to identify a specific resource.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Diagramming Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "We aren't opening Visual Studio today. We are opening Postman and a Whiteboard to design the architecture for a Blog API."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: Designing the Endpoints</strong><ul>
        <li><em>Action:</em> Ask the class: "How do we get all posts?" (<code>GET /posts</code>). "How do we get comments for post #2?" (<code>GET /posts/2/comments</code>). Write the map on the board.</li>
      </ul>
      </li>
      <li><strong>Step 2: Inspecting a Real API</strong><ul>
      <li><em>Action:</em> Open Postman. Make a GET request to <code>https://jsonplaceholder.typicode.com/posts</code>. Show the clean JSON array.</li>
      </ul>
      </li>
      <li><strong>Step 3: Breaking the Rules</strong><ul>
      <li><em>Action:</em> Discuss why an endpoint like <code>POST /posts/2/delete</code> is horrible architecture (it mixes POST and DELETE, and puts a verb in the URL).</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. Debugging + Wrap</h3>
      <ul>
        <li><strong>Common Error 1:</strong> Designing <code>GET /users?id=5</code> instead of <code>GET /users/5</code>. -&gt; Query parameters are for filtering a list. Path parameters are for identifying a single specific resource.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 5. In-Class Exercise</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> You are building an API for a Library system. Write a Markdown document defining the exact HTTP Method, URL, and expected JSON Body for the following actions: 1) Add a new book. 2) List all books. 3) Checkout a specific book. 4) Delete a book.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <h3>From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "Frontend and Backend developers at companies will physically argue over API design. The Frontend wants the exact shape of data they need for their React component. The Backend wants to keep the data normalized and generic. A good API is a compromise. If you build an API endpoint that only works for one specific UI button, you failed. Build APIs around resources, not screens."</p>
      </blockquote>
      <h3>AI Integration</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "Is this URL design RESTful?" Not Allowed: "Design my entire database schema."</li>
      </ul>
      <h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I can design RESTful URLs using Nouns instead of Verbs.</li>
          <li><input disabled="" type="checkbox" /> I understand when to use GET vs POST vs PUT vs DELETE.</li>
          <li><input disabled="" type="checkbox" /> I know why we return specific HTTP status codes.</li>
          <li><input disabled="" type="checkbox" /> I can use query parameters to design pagination (<code>?page=1</code>).</li>
        </ul>
      </blockquote>
      <h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The API Architect"
        Write an API Specification Document for a simple "Twitter Clone" (Tweets and Users).</p>
        <ol>
          <li>Define 5 endpoints (Methods + URLs).</li>
          <li>Write out a sample JSON response for <code>GET /tweets</code>.</li>
          <li><strong>The Catch:</strong> Your endpoints must be perfectly RESTful. You must design an endpoint to "Like" a tweet without using the word "Like" as a verb in the URL. (Hint: Creating a "like" resource).</li>
        </ol>
      </blockquote>
      <h3>Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> None. This is a design/architecture week.</li>
          <li><strong>Solution Repo:</strong> A completed API Specification Markdown document showing the perfect RESTful routes for the Library exercise.</li>
        </ul>
      </blockquote>
    </div>
  )
}
