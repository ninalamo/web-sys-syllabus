export default function ReactRouterAndSpaConcepts() {
  return (
    <div className="page-content">
      <h2>Week 8: React Router &amp; SPA Concepts</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 7: Effects &amp; Data Fetching"<br />
        🎯 This week: "Add navigation — React Router turns our single-page app into a multi-page experience"<br />
        <br />
        <strong>LAB (3h) Topics:</strong><br />
        ▸ A. The Single Page Application (7 min)<br />
        ▸ B. React Router Setup (7 min)<br />
        ▸ C. `&lt;Link&gt;` vs `&lt;a&gt;` (6 min)<br />
        ▸ D. URL Parameters (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality + AI Integration + Take-Home Mission (The Fake E-Commerce Site)<br />
        <br />
        ✅ By end of lab: Explain what a SPA is; configure `createBrowserRouter`; explain why `&lt;Link&gt;` over `&lt;a&gt;`; use `useParams()`
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
            <td>Lecture + Slides + Routing Map</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (BrowserRouter setup)</td>
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
        <p>[TIP] <strong>Teaching Tip:</strong> Students are used to creating <code>about.html</code> and <code>contact.html</code>. The concept of a Single Page Application (where there is literally only one <code>index.html</code> file) requires a major mental shift.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Notice how Spotify plays music uninterrupted even when you click around different pages? Notice how YouTube doesn't flash a white screen when you go to a channel? That's because you never actually left the page. The application is tricking you."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Stage Play</p>
        <ul>
          <li><strong>Multi-Page App (Old Web):</strong> Between every scene, the curtains close, the audience waits in the dark, stagehands change the set, the curtains open. (Full page reload).</li>
          <li><strong>Single Page App (React):</strong> The curtains stay open. The stage rotates instantly. The music never stops playing. The URL changes, but the browser never reloads.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. The Single Page Application (SPA) (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "In a React app, the server gives the browser ONE blank HTML file (<code>index.html</code>) and one massive JavaScript file. React looks at the URL (e.g., <code>/about</code>) and decides which Component to render. It's an illusion."</p>
        <p><strong>[VISUAL] Example:</strong>
        Draw: <code>URL changes -&gt; React intercepts it -&gt; React unmounts &lt;Home /&gt; -&gt; React mounts &lt;About /&gt;</code>.</p>
        <p><strong>[TIP] Instructor Tip:</strong> Emphasize that routing in React happens 100% in the browser. The server is not involved.</p>
      </blockquote>
      <h4>▸ B. React Router Setup (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "React doesn't have routing built-in. We use the industry standard library: React Router. It acts as the traffic cop for our components."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-jsx">const router = createBrowserRouter([
        &#123; path: "/", element: &lt;Home /&gt; &#125;,
        &#123; path: "/about", element: &lt;About /&gt; &#125;
        ]);
        // Inside index.js
        &lt;RouterProvider router=&#123;router&#125; /&gt;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Ensure you are teaching the modern React Router v6.4+ (<code>createBrowserRouter</code> data API), not the old v5 <code>&lt;Switch&gt;</code> syntax.</p>
      </blockquote>
      <h4>▸ C. <code>&lt;Link&gt;</code> vs <code>&lt;a&gt;</code> (6 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "If you use a standard HTML <code>&lt;a href="/about"&gt;</code> tag, the browser will force a full refresh. You will lose all your React State. You must use React Router's <code>&lt;Link&gt;</code> component instead."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-jsx">// BAD (Causes refresh, kills state)
        &lt;a href="/login"&gt;Login&lt;/a&gt;
      
        // GOOD (Instant SPA transition)
        &lt;Link to="/login"&gt;Login&lt;/Link&gt;
      </code></pre>
      <p><strong>[TIP] Gen-Z Hook:</strong> Using an <code>&lt;a&gt;</code> tag in React is like closing the app and reopening it just to switch tabs. It's a massive vibe kill.</p>
      </blockquote>
      <h4>▸ D. URL Parameters (5 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "We don't create a separate route for all 10 million users on Facebook. We create one route <code>/users/:id</code> and grab the ID from the URL using a hook."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-jsx">// Route: path="/users/:id"
        function UserProfile() &#123;
        const &#123; id &#125; = useParams();
        return &lt;h1&gt;Loading profile for user &#123;id&#125;...&lt;/h1&gt;;
        &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Explain that the <code>:</code> in the path is what tells React Router "this is a variable, not a literal word."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build a store with a Home page, a Product Catalog, and individual Product Details pages."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The Router Config</strong><ul>
        <li><em>Action:</em> Install <code>react-router-dom</code>. Set up <code>createBrowserRouter</code> in <code>main.jsx</code>. Create empty <code>&lt;Home&gt;</code> and <code>&lt;Products&gt;</code> components.</li>
      </ul>
      </li>
      <li><strong>Step 2: Navigation</strong><ul>
      <li><em>Action:</em> Create a <code>&lt;Navbar&gt;</code> component with <code>&lt;Link&gt;</code> tags. Add an overarching Layout route so the Navbar stays persistent across all pages.</li>
      </ul>
      </li>
      <li><strong>Step 3: Dynamic Parameters</strong><ul>
      <li><em>Action:</em> Create a route for <code>/products/:id</code>. Inside the <code>&lt;ProductDetail&gt;</code> component, use <code>useParams()</code> to grab the ID and display it on the screen.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. Debugging + Wrap</h3>
      <ul>
        <li><strong>Common Error 1:</strong> <code>useNavigate() may be used only in the context of a &lt;Router&gt; component.</code> -&gt; You tried to use a routing hook outside of the Router Provider.</li>
        <li><strong>Common Error 2:</strong> The page goes completely blank. -&gt; You probably created an infinite redirect loop, or didn't provide a matching path so React rendered absolutely nothing.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 5. In-Class Exercise</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Build a 3-page "Portfolio" SPA: Home, Projects, and Contact. Use a shared Layout so the Navigation bar is always visible. Ensure that moving between pages is instant (no white flashes).</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <h3>From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "SPAs are amazing for user experience, but historically terrible for SEO (Search Engine Optimization). If Google's bot visits a basic React app, it just sees an empty <code>&lt;div id="root"&gt;&lt;/div&gt;</code>. This is why companies like Netflix use Next.js—a React framework that pre-renders the HTML on the server. Learning React Router is the stepping stone to understanding Next.js."</p>
      </blockquote>
      <h3>AI Integration</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "How do I redirect a user programmatically?" Not Allowed: "Write all my application routes."</li>
      </ul>
      <h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I can explain what a Single Page Application is.</li>
          <li><input disabled="" type="checkbox" /> I know how to configure <code>createBrowserRouter</code>.</li>
          <li><input disabled="" type="checkbox" /> I can explain why <code>&lt;Link&gt;</code> must be used instead of <code>&lt;a&gt;</code>.</li>
          <li><input disabled="" type="checkbox" /> I can extract dynamic data from the URL using <code>useParams()</code>.</li>
        </ul>
      </blockquote>
      <h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Fake E-Commerce Site"</p>
        <ol>
          <li>Create a React app with React Router.</li>
          <li>The <code>/products</code> page should list 3 clickable product names (e.g., Laptop, Phone, Tablet).</li>
          <li>Clicking one should navigate to <code>/products/:id</code>.</li>
          <li><strong>The Catch:</strong> On the Product Detail page, use the <code>useParams()</code> hook to read the ID, and then conditionally render the name and a fake price for that specific item based on the ID.</li>
        </ol>
      </blockquote>
      <h3>Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> A Vite React app with 3 components (<code>Home</code>, <code>About</code>, <code>Profile</code>) but no routing installed.</li>
          <li><strong>Solution Repo:</strong> The app wired up with React Router v6, showcasing Layouts, <code>&lt;Outlet&gt;</code>, and <code>&lt;Link&gt;</code> navigation.</li>
        </ul>
      </blockquote>
    </div>
  )
}
