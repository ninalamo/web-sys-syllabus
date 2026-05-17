export default function FrontendBackendIntegration() {
  return (
    <div className="page-content">
      <h2>Week 11: Frontend/Backend Integration</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 10: ASP.NET Core Web API"<br />
        🎯 This week: "Connect React frontend to ASP.NET backend — full stack integration in the browser"<br />
        <br />
        <strong>LAB (3h) Topics:</strong><br />
        ▸ A. Two-Server Mental Model (7 min)<br />
        ▸ B. Environment Variables (6 min)<br />
        ▸ C. Vite Proxy (7 min)<br />
        ▸ D. Bulletproof Fetching (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality + AI Integration + Take-Home Mission (The Full Stack Delete)<br />
        <br />
        ✅ By end of lab: Run frontend + backend together; configure Vite proxy; fetch GET/POST from React; handle loading/error states
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
            <td>Lecture + Slides + Port Architecture</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (React calling ASP.NET)</td>
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
        <p>[TIP] <strong>Teaching Tip:</strong> This is the "Aha!" moment of the entire semester. The moment a student clicks a button in React and sees the database update via C#, they finally understand Full Stack development.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "For 10 weeks, you've been building half a bridge. The frontend team built the UI. The backend team built the API. Today, we connect the bridge. But they are speaking two different languages (JS and C#) and running in two different cities (Port 5173 and Port 5000)."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Translator</p>
        <ul>
          <li><strong>React (Frontend):</strong> Speaks JavaScript. Runs on Port 5173.</li>
          <li><strong>ASP.NET (Backend):</strong> Speaks C#. Runs on Port 5000/5001.</li>
          <li><strong>HTTP / JSON:</strong> The universal translator in the middle. The only way they can talk is by sending JSON text back and forth.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. Two-Server Mental Model (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "You are no longer running one application. You are running two completely separate servers simultaneously on your laptop. If the backend server isn't running, the frontend will fail."</p>
        <p><strong>[VISUAL] Example:</strong>
        Draw two completely separate boxes on the board. One says <code>npm run dev</code>. The other says <code>dotnet run</code>.</p>
      </blockquote>
      <h4>▸ B. Environment Variables (6 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Never hardcode <code>https://localhost:5000/api</code> into your React components. When you deploy to production, the API won't be on localhost. We use <code>.env</code> files to store URLs that change depending on where the app is running."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-text"># .env file
        VITE_API_URL=https://localhost:5000/api
      </code></pre>
      <pre><code className="language-jsx">// Inside React
      fetch(`$&#123;import.meta.env.VITE_API_URL&#125;/users`)
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Explain that the <code>VITE_</code> prefix is strictly required, or Vite will hide the variable for security reasons.</p>
      </blockquote>
      <h4>▸ C. Vite Proxy (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Instead of configuring CORS on the backend for local development, we can tell the Vite frontend server to act as a proxy. When React calls <code>/api</code>, Vite silently forwards it to port 5000."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-javascript">// vite.config.js
        server: &#123;
        proxy: &#123; '/api': 'https://localhost:5000' &#125;
        &#125;
      </code></pre>
      <p><strong>[TIP] Gen-Z Hook:</strong> A proxy is like having a friend pass a note for you in class. The backend thinks the request came from the proxy (friend), not from React (you).</p>
      </blockquote>
      <h4>▸ D. Bulletproof Fetching (5 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "A request to the backend takes time. Your UI must handle the 3 states of a network request: Loading, Success, and Error."</p>
        <p><strong>[VISUAL] Example:</strong>
        Show a React component that displays a spinner while fetching, the data on success, and a red error box if the backend is turned off.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "I have the API running in one window, and React in the other. Let's make them talk."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The Setup</strong><ul>
        <li><em>Action:</em> Start the ASP.NET API from last week. Start a blank Vite React app. Show them running side-by-side.</li>
      </ul>
      </li>
      <li><strong>Step 2: The Proxy</strong><ul>
      <li><em>Action:</em> Configure <code>vite.config.js</code> to proxy <code>/api</code> requests to the ASP.NET server.</li>
      </ul>
      </li>
      <li><strong>Step 3: The Fetch</strong><ul>
      <li><em>Action:</em> In React, use <code>useEffect</code> to fetch <code>/api/todos</code>. Map over the response and render an HTML list.</li>
      </ul>
      </li>
      <li><strong>Step 4: The POST</strong><ul>
      <li><em>Action:</em> Create a simple form in React. Hook it up to a <code>handleSubmit</code> function that uses <code>fetch</code> with <code>method: 'POST'</code> and <code>JSON.stringify(data)</code> to send data to the backend. Show it updating the database.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. Debugging + Wrap</h3>
      <ul>
        <li><strong>Common Error 1:</strong> <code>Failed to fetch</code> -&gt; The ASP.NET server isn't running. You forgot to hit 'Run' in Visual Studio.</li>
        <li><strong>Common Error 2:</strong> <code>SyntaxError: Unexpected token &lt; in JSON</code> -&gt; The backend threw an error page (HTML) instead of JSON, and React tried to parse HTML as JSON. Check the network tab to see the backend error.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 5. In-Class Exercise</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Connect the dots. Take the "Todo API" from last week, and build a simple React frontend for it. You must be able to view a list of Todos, and add a new Todo that persists to the backend database.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <h3>From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "The most common bug when integrating frontend and backend is a spelling mistake. The backend sends <code>firstName</code>, but the frontend looks for <code>FirstName</code>. JSON is case-sensitive! In the industry, we use tools like Swagger or TypeScript generators to automatically create our frontend interfaces based on the backend code so we never make a spelling mistake again."</p>
      </blockquote>
      <h3>AI Integration</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "How do I configure proxy in vite config?" Not Allowed: "Write the fetch wrapper for my entire app."</li>
      </ul>
      <h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I know how to run a frontend and backend server simultaneously.</li>
          <li><input disabled="" type="checkbox" /> I can configure a proxy in <code>vite.config.js</code>.</li>
          <li><input disabled="" type="checkbox" /> I can use <code>fetch</code> to GET data from my own API and display it in React.</li>
          <li><input disabled="" type="checkbox" /> I can use <code>fetch</code> to POST data from a React form to my API.</li>
        </ul>
      </blockquote>
      <h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Full Stack Delete"</p>
        <ol>
          <li>Start with the Todo integration built in class.</li>
          <li>Add a "Delete" button next to every Todo item in React.</li>
          <li><strong>The Catch:</strong> When clicked, it must send a <code>DELETE</code> HTTP request to the API. If the API returns a success status code (200/204), the React UI must update automatically to remove the item from the screen <em>without</em> refreshing the page.</li>
        </ol>
      </blockquote>
      <h3>Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> Two folders: An API and a React App, but they don't talk to each other yet.</li>
          <li><strong>Solution Repo:</strong> A fully integrated Full Stack app with Vite Proxy configured, Environment variables set, and full CRUD operations working.</li>
        </ul>
      </blockquote>
    </div>
  )
}
