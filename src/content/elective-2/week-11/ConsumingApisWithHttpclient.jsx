export default function ConsumingApisWithHttpclient() {
  return (
    <div className="page-content">
      <h2>Week 11: Consuming APIs with HttpClient</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 10: Relationships &amp; Data Display"<br />
        🎯 This week: "Reach outward — consuming third-party APIs using HttpClient to bring external data into our app"<br />
        <br />
        <strong>Core Concepts:</strong><br />
        ▸ A. `IHttpClientFactory` (7 min)<br />▸ B. JSON Deserialization (7 min)<br />▸ C. Async/Await in Controllers (6 min)<br />▸ D. DTOs (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> From the Trenches (rate limiting) + AI Integration + Take-Home Mission (External API Dashboard)<br />
        <br />
        ✅ By end of lab: Know why we use `IHttpClientFactory`; write `async Task&lt;IActionResult&gt;`; use `JsonSerializer.Deserialize`; understand DTO class purpose
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
            <td>Lecture + Slides + Async/Await</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (IHttpClientFactory)</td>
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
        <p>[TIP] <strong>Teaching Tip:</strong> We touched on <code>HttpClient</code> in Week 3, but today we formalize it in an MVC Controller. Focus heavily on JSON deserialization — mapping random API text into strict C# classes.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Not every app owns its data. If you build a travel site, you don't build a global weather database. You ask someone else's server for the weather. Today, our C# backend acts as a client, requesting data from the outside world."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Subcontractor</p>
        <ul>
          <li><strong>Browser:</strong> The client ordering a house.</li>
          <li><strong>Your Controller:</strong> The General Contractor.</li>
          <li><strong>External API:</strong> The Electrician.</li>
          <li>Your controller takes the order, pauses its work, calls the electrician (API) to get the wiring done, and then finishes the house (HTML) to give back to the client.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. <code>IHttpClientFactory</code> (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "You might see tutorials use <code>new HttpClient()</code>. Never do this. It leaves network sockets open and will crash a production server. We inject a factory that safely manages connections for us."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">// In Program.cs
        builder.Services.AddHttpClient();
      
        // In Controller Constructor
        public MyController(IHttpClientFactory factory) &#123;
        _client = factory.CreateClient();
        &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Connect this back to Week 2 (Dependency Injection). This is the ultimate proof of why DI is powerful.</p>
      </blockquote>
      <h4>▸ B. JSON Deserialization (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "APIs return JSON text. C# wants Objects. We use a Deserializer to map the text to our C# class."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">var jsonText = await response.Content.ReadAsStringAsync();
        var user = JsonSerializer.Deserialize&lt;ApiUser&gt;(jsonText, new JsonSerializerOptions &#123; PropertyNameCaseInsensitive = true &#125;);
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Emphasize the <code>PropertyNameCaseInsensitive = true</code>. Without it, JSON <code>firstName</code> won't map to C# <code>FirstName</code> and everything will be null.</p>
      </blockquote>
      <h4>▸ C. Async/Await in Controllers (6 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "When you make a network request, it might take 2 seconds. A Web Server shouldn't freeze for 2 seconds. <code>async/await</code> frees up the server to handle other users while waiting for the API to reply."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">public async Task&lt;IActionResult&gt; FetchData() &#123;
        var res = await _client.GetAsync("https://api.com/data");
        return View();
        &#125;
      </code></pre>
      <p><strong>[TIP] Gen-Z Hook:</strong> Async is like putting someone on hold. The server puts User A on hold while the API fetches, answers User B's quick question, then goes back to User A.</p>
      </blockquote>
      <h4>▸ D. Data Transfer Objects (DTOs) (5 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Don't reuse your Database models for external APIs. An API might send you 50 fields, but you only care about 3. Create a DTO class specifically to catch the exact API data you want."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build a page that shows a random Chuck Norris joke every time you refresh."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The Setup</strong><ul>
        <li><em>Action:</em> Register <code>AddHttpClient()</code> in <code>Program.cs</code>. Inject it into a <code>JokeController</code>.</li>
      </ul>
      </li>
      <li><strong>Step 2: The DTO</strong><ul>
      <li><em>Action:</em> Look at the JSON from <code>api.chucknorris.io</code>. Create a C# <code>JokeDto</code> class with a <code>value</code> string property.</li>
      </ul>
      </li>
      <li><strong>Step 3: The Fetch and Map</strong><ul>
      <li><em>Action:</em> Write the <code>async</code> method. Call <code>GetAsync</code>. Ensure success status code. Deserialize the JSON string into the <code>JokeDto</code>.</li>
      </ul>
      </li>
      <li><strong>Step 4: The View</strong><ul>
      <li><em>Action:</em> Pass the <code>JokeDto.value</code> to the Razor View and render it in an <code>&lt;h1&gt;</code>.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Build a "Pokemon Viewer". Create a form where a user types a Pokemon ID (e.g., 25). Submit it to a controller. Use <code>HttpClient</code> to fetch <code>https://pokeapi.co/api/v2/pokemon/25</code>. Deserialize the <code>name</code> and <code>weight</code>, and show them on the View.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "Third-party APIs will go down. If you build an app that completely crashes because the Weather API is offline, your architecture is weak. Always wrap external HTTP calls in a <code>try/catch</code> block. If it fails, log the error and show the user a graceful fallback message ('Weather data temporarily unavailable') instead of throwing a massive 500 Server Error."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> 5. AI Integration &amp; Debugging</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "Generate a C# class based on this JSON payload." Not Allowed: "Write the controller logic to fetch and display."</li>
        <li><strong>Common Error 1:</strong> All properties in the DTO are null. -&gt; The API JSON uses camelCase (<code>firstName</code>) but your C# properties are PascalCase (<code>FirstName</code>) and you forgot <code>PropertyNameCaseInsensitive = true</code>.</li>
        <li><strong>Common Error 2:</strong> <code>SocketException: No such host is known.</code> -&gt; You misspelled the API URL or your laptop isn't connected to the internet.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
      </blockquote><h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I know why we use <code>IHttpClientFactory</code> instead of <code>new HttpClient()</code>.</li>
          <li><input disabled="" type="checkbox" /> I can write an <code>async Task&lt;IActionResult&gt;</code> controller method.</li>
          <li><input disabled="" type="checkbox" /> I can use <code>JsonSerializer.Deserialize</code> to convert JSON to a C# object.</li>
          <li><input disabled="" type="checkbox" /> I understand the purpose of a DTO class.</li>
        </ul>
      </blockquote>
      
      <blockquote>
      </blockquote><h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The GitHub Profiler"</p>
        <ol>
          <li>Create a Search Page.</li>
          <li>The user types a GitHub username and hits search.</li>
          <li><strong>The Catch:</strong> You must fetch from <code>https://api.github.com/users/&#123;username&#125;</code>. You MUST add a <code>User-Agent</code> header to the <code>HttpClient</code> request (GitHub requires this). Deserialize their Avatar URL, Name, and Public Repos count, and display it in a nice Bootstrap card.</li>
        </ol>
      </blockquote>
      
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 7. Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> An MVC app with an empty <code>JokeController</code>.</li>
          <li><strong>Solution Repo:</strong> A fully robust API consumer demonstrating <code>IHttpClientFactory</code>, <code>try/catch</code> error handling, and JSON deserialization.</li>
        </ul>
      </blockquote>
    </div>
  )
}
