export default function AsyncJavascriptDeepDive() {
  return (
    <div className="page-content">
      <h2>Week 2: Async JavaScript Deep-Dive</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 1: Modern JavaScript Review"<br />
        🎯 This week: "Tackle async — the engine that keeps your app responsive while talking to servers"<br />
        <br />
        <strong>LAB (3h) Topics:</strong><br />
        ▸ A. The Single Thread &amp; The Event Loop (7 min)<br />
        ▸ B. Promises (The Buzzer) (7 min)<br />
        ▸ C. The `fetch` API Gotcha (6 min)<br />
        ▸ D. `async` / `await` (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality + AI Integration + Take-Home Mission (The Broken Pokedex)<br />
        <br />
        ✅ By end of lab: Explain why app doesn't freeze; write `fetch` with `async/await`; check `response.ok`; wrap async code in `try/catch`
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
            <td>Lecture + Slides + Event Loop Diagram</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (fetch + async/await)</td>
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
        <p>[TIP] <strong>Teaching Tip:</strong> Async is the hardest concept in the JS curriculum. Students think synchronously by default. Use the restaurant buzzer analogy repeatedly. </p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Every time you open Instagram, your feed loads first, then stories load a second later. Your browser didn't freeze. That's async JavaScript working to keep the app responsive."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Fast-Food Restaurant</p>
        <ul>
          <li><strong>Sync:</strong> Order at the counter, wait there until food is ready. Nobody else can order. The line stops.</li>
          <li><strong>Async:</strong> Order, get a buzzer, sit down. The line keeps moving. When the buzzer rings (Promise resolves), you get your food.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. The Single Thread &amp; The Event Loop (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "JavaScript is single-threaded. It has only one 'Call Stack'. If a network request takes 5 seconds and you execute it synchronously, the entire browser locks up. Async offloads that work to the browser's background threads."</p>
        <p><strong>[VISUAL] Example:</strong>
        Draw: <code>Call Stack -&gt; Web APIs (background) -&gt; Callback Queue -&gt; Event Loop</code>.</p>
        <p><strong>[TIP] Instructor Tip:</strong> Explain that the Event Loop is just a bouncer. It constantly checks: "Is the Call Stack empty? If yes, let the next task from the Queue in."</p>
      </blockquote>
      <h4>▸ B. Promises (The Buzzer) (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "A Promise is exactly what it sounds like. The browser promises to give you data eventually. But until then, it gives you an object representing that future data."</p>
        <p><strong>[CODE] Example:</strong></p>
        <ul>
          <li><code>Pending</code>: Waiting for the server.</li>
          <li><code>Fulfilled</code>: The server replied with data.</li>
          <li><code>Rejected</code>: The network failed.</li>
        </ul>
        <p><strong>[TIP] Gen-Z Hook:</strong> A Promise is an online shopping order. It's 'Pending' during shipping, 'Fulfilled' when delivered, and 'Rejected' if the package gets lost.</p>
      </blockquote>
      <h4>▸ C. The <code>fetch</code> API Gotcha (6 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "<code>fetch()</code> is the modern way to talk to APIs. It returns a Promise. BUT there is a massive gotcha: It does NOT reject on a 404 or 500 error."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-javascript">const res = await fetch('/missing-page');
        if (!res.ok) throw new Error("This is how we handle 404s!");
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Emphasize that <code>fetch</code> only throws a true error if the literal internet connection is severed. Otherwise, you MUST check <code>response.ok</code>.</p>
      </blockquote>
      <h4>▸ D. <code>async</code> / <code>await</code> (5 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Before <code>await</code>, we used <code>.then().then().then()</code>, creating Callback Hell. <code>await</code> pauses the function (but not the browser) until the Promise resolves, making asynchronous code read like synchronous code."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-javascript">async function getUser() &#123;
        const response = await fetch('/api/user');
        const data = await response.json();
        return data;
        &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Drill this rule: "You cannot use the word <code>await</code> unless the function signature has the word <code>async</code>."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build a data fetcher. We'll start with raw Promises, then upgrade to async/await."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The Old <code>.then()</code> Chain</strong><ul>
        <li><em>Action:</em> Write a <code>fetch</code> call using <code>.then(res =&gt; res.json())</code>. Explain why chaining gets messy fast.</li>
      </ul>
      </li>
      <li><strong>Step 2: The <code>async/await</code> Upgrade</strong><ul>
      <li><em>Action:</em> Rewrite the same logic using <code>async function</code> and <code>await</code>. Show how much cleaner it looks.</li>
      </ul>
      </li>
      <li><strong>Step 3: Error Handling (<code>try/catch</code>)</strong><ul>
      <li><em>Action:</em> Intentionally misspell the API URL. Wrap the <code>await</code> calls in a <code>try/catch</code> block and log the error safely.</li>
      </ul>
      </li>
      <li><strong>Step 4: <code>Promise.all()</code></strong><ul>
      <li><em>Action:</em> Show how to execute two <code>fetch</code> calls in parallel (e.g., getting Users and Posts simultaneously) to cut loading time in half.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 5. Debugging + Wrap</h3>
      <ul>
        <li><strong>Common Error 1:</strong> <code>Cannot read properties of undefined (reading 'json')</code> -&gt; Usually means the <code>fetch</code> failed or you forgot to <code>await</code> it.</li>
        <li><strong>Common Error 2:</strong> Infinite loading state. -&gt; Forgot to clear the loading state in a <code>finally</code> block or returning early in the <code>catch</code>.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. In-Class Exercise</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Build an async fetcher using JSONPlaceholder. Fetch posts, then fetch comments for each post in parallel using <code>Promise.all()</code>. Add error handling and loading states.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <h3>4. From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "In university, you're taught that if your code compiles, it works. In the industry, we assume the network is actively trying to destroy our app. A user will enter an elevator, drop to 3G, and your API call will hang for 15 seconds. If you don't build loading spinners and <code>catch</code> blocks with fallback UI, your app looks broken. We don't write async code just to get data; we write it to protect the user experience when the internet inevitably fails."</p>
      </blockquote>
      <h3>5. AI Integration</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "Generate async fetch code". Not Allowed: "Handle all my error boundaries for me."</li>
      </ul>
      <h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I can explain why an app doesn't freeze when fetching data.</li>
          <li><input disabled="" type="checkbox" /> I can write a <code>fetch</code> request using <code>async/await</code>.</li>
          <li><input disabled="" type="checkbox" /> I know how to check <code>response.ok</code> before trying to parse JSON.</li>
          <li><input disabled="" type="checkbox" /> I can wrap my async code in a <code>try/catch</code> block.</li>
          <li><input disabled="" type="checkbox" /> I understand when to use <code>Promise.all()</code> to speed up multiple requests.</li>
        </ul>
      </blockquote>
      <h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Broken Pokedex"
        Connect the in-class fetcher to the free PokeAPI (<code>pokeapi.co</code>).</p>
        <ol>
          <li>Fetch 3 of your favorite Pokemon using <code>Promise.all()</code>.</li>
          <li><strong>The Catch:</strong> Intentionally misspell one URL so it fails. Write the error handling so the app shows a user-friendly message ("Pokemon ran away!") instead of crashing the console.</li>
        </ol>
      </blockquote>
      <h3>Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> Basic HTML/JS with empty click handlers for "Load Users".</li>
          <li><strong>Solution Repo:</strong> Fully working <code>async/await</code> fetch, complete with <code>try/catch</code>, loading spinner logic, and <code>response.ok</code> checks.</li>
        </ul>
      </blockquote>
    </div>
  )
}
