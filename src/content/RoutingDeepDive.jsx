export default function RoutingDeepDive() {
  return (
    <div className="page-content">
      <h2>Week 5: Routing Deep Dive</h2>
      <div style={{ background: '#e0f2fe', padding: '15px', borderLeft: '5px solid #0284c7', marginBottom: '20px' }}>
        <strong>Learning Objectives:</strong>
        <ul>
          <li>Understand the role of routing in mapping URLs to Controller actions.</li>
          <li>Implement Conventional Routing to establish global application URL patterns.</li>
          <li>Implement Attribute Routing for highly specific, SEO-friendly, and API-centric endpoints.</li>
          <li>Apply Route Constraints to enforce data types and prevent invalid requests from executing code.</li>
        </ul>
      </div>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 4: MVC Big Picture"<br />
        🎯 This week: "Go deeper into routing — the traffic cop that maps URLs to controller actions"<br />
        <br />
        <strong>Core Concepts:</strong><br />
        ▸ A. Conventional Routing (9 min)<br />▸ B. Attribute Routing (9 min)<br />▸ C. Route Constraints (7 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Pro-Tip with real-world scenario + AI Integration + Take-Home Mission (Route Designer)<br />
        <br />
        ✅ By end of lab: Read a conventional route pattern; apply `[Route]`, `[HttpGet]`; make route params optional; use route constraints like `:int`
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
            <td>Lecture + Slides + Pattern Matching</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (Conventional vs Attribute)</td>
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
        <p>[TIP] <strong>Teaching Tip:</strong> Routing is about pattern matching. Students often struggle when a URL returns a 404 despite the controller existing. Focus heavily on how the engine matches a string to a C# method.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "How does the server know that <code>youtube.com/watch?v=123</code> goes to the video player, but <code>youtube.com/shorts</code> goes to the short-form feed? That's routing. It's the traffic cop of your application."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Post Office Sorter</p>
        <ul>
          <li>The URL is the zip code on an envelope.</li>
          <li>Routing is the post office sorting machine. It looks at the zip code and throws it into the correct bin (Controller/Action). If it doesn't match any known pattern, it throws it in the trash (404 Not Found).</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. Conventional Routing (9 min)</h4>
      <p><strong>Module Syllabus Content:</strong> Conventional routing relies on a global template (typically defined in <code>Program.cs</code>) to map URLs to code. The default pattern, <code>&#123;controller=Home&#125;/&#123;action=Index&#125;/&#123;id?&#125;</code>, acts as a master rule. The routing engine breaks the incoming URL into segments based on the slashes. It looks at the first segment to find a matching Controller class, the second segment to find the Action method within that class, and the third segment as an optional parameter. This approach is highly efficient for standard web applications because a single rule can route thousands of pages automatically without requiring you to explicitly define every single URL.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Conventional routing sets a master rule in <code>Program.cs</code> that applies to the whole app. It assumes you will name your classes and methods perfectly."</p>
        <p><strong>[CODE] Example:</strong> </p>
        <pre><code className="language-csharp">app.MapControllerRoute(
        name: "default",
        pattern: "&#123;controller=Home&#125;/&#123;action=Index&#125;/&#123;id?&#125;");
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Explain the <code>&#123;id?&#125;</code>. The <code>?</code> means it's optional. If they don't provide an ID, the route still works!</p>
      </blockquote>
      <h4>▸ B. Attribute Routing (9 min)</h4>
      <p><strong>Module Syllabus Content:</strong> While conventional routing is great for broad strokes, Attribute Routing offers surgical precision. By placing <code>[Route]</code>, <code>[HttpGet]</code>, or <code>[HttpPost]</code> attributes directly above a controller class or method, developers can define exact URL paths that ignore the global convention. This is absolutely essential for building REST APIs, where the URL structure must strictly follow resource-based naming conventions (e.g., <code>/api/v1/users/5/orders</code>). Attribute routing also allows for the creation of highly readable, SEO-optimized URLs that don't necessarily match the underlying C# class names.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Conventional routing is great for websites. Attribute routing is required for APIs. It gives you microscopic control over exactly what URL triggers a specific method by putting a tag directly above the code."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">[Route("api/users")]
        public class UsersController : Controller &#123;
        [HttpGet("profile/&#123;username&#125;")]
        public IActionResult GetProfile(string username) &#123; ... &#125;
        &#125;
      </code></pre>
      <p><strong>[TIP] Gen-Z Hook:</strong> Attribute routing is like setting a custom URL for your social media profile. Instead of the default <code>/user?id=5123</code>, you force it to be exactly <code>/ninalamo</code>.</p>
      </blockquote>
      <h4>▸ C. Route Constraints (7 min)</h4>
      <p><strong>Module Syllabus Content:</strong> Route Constraints act as a first line of defense for your application. By adding type constraints like <code>:int</code> or <code>:guid</code> directly into the route template (e.g., <code>&#123;id:int&#125;</code>), you instruct the routing engine to only match the route if the parameter is of the correct data type. If a user attempts to navigate to <code>/products/details/apple</code> instead of an ID number, the route constraint prevents the request from even reaching the controller, safely returning a 404 Not Found instead of crashing the application with a Type Conversion error.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "What if someone types <code>/products/details/hello</code>? 'hello' is not an ID number. The app will crash when it tries to look up 'hello' in the database. Route constraints stop the request before it even hits the controller."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">[HttpGet("details/&#123;id:int&#125;")]
        public IActionResult Details(int id) &#123; ... &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Emphasize security. Constraints prevent bad data from ever executing your C# logic.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's break the routing engine intentionally, and then fix it using both Conventional and Attribute routing."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The Conventional Trap</strong><ul>
        <li><em>Action:</em> Create <code>ProductsController</code>. Add a method <code>ShowItem(int id)</code>. Try to visit <code>/Products/ShowItem</code>. It works. Now try <code>/Products</code>. It 404s because there is no <code>Index</code> method.</li>
      </ul>
      </li>
      <li><strong>Step 2: Mixing the Rules</strong><ul>
      <li><em>Action:</em> Add <code>[Route("catalog")]</code> to the <code>ProductsController</code>. Show that the conventional route <code>/Products/ShowItem</code> is now dead, and only <code>/catalog/ShowItem</code> works.</li>
      </ul>
      </li>
      <li><strong>Step 3: Adding Constraints</strong><ul>
      <li><em>Action:</em> Add <code>&#123;id:int:min(1)&#125;</code> to a route. Visit <code>/catalog/ShowItem/0</code> and watch it fail safely.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Create a <code>BlogController</code>. Define attribute routes so that <code>/blog/2026/05</code> goes to an archive method, and <code>/blog/post/hello-world</code> goes to a specific article method. Use route constraints so the year must be 4 digits.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "In the real world, URLs are a massive part of SEO (Search Engine Optimization). If your e-commerce site uses <code>/item?id=8273</code>, Google hates it. If you use Attribute Routing to create <code>/products/laptops/macbook-pro</code>, Google loves it and ranks it higher. We don't just use Attribute Routing for organization; we use it to make money by driving search traffic."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> 5. AI Integration &amp; Debugging</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "Why is this route returning a 404?" Not Allowed: "Write all the attribute routes for my project."</li>
        <li><strong>Common Error 1:</strong> <code>AmbiguousMatchException</code>. -&gt; Two different action methods match the exact same URL. The engine doesn't know which one to pick, so it crashes.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
      </blockquote><h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I can read a conventional route pattern and predict the URL.</li>
          <li><input disabled="" type="checkbox" /> I can apply <code>[Route]</code>, <code>[HttpGet]</code>, and <code>[HttpPost]</code> attributes to a controller.</li>
          <li><input disabled="" type="checkbox" /> I know how to make a route parameter optional (<code>?</code>).</li>
          <li><input disabled="" type="checkbox" /> I can use route constraints like <code>:int</code> to enforce data types.</li>
        </ul>
      </blockquote>
      
      <blockquote>
      </blockquote><h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The SEO Overhaul"
        Take the "Portfolio" project from last week.</p>
        <ol>
          <li>Convert ALL conventional routing to Attribute Routing.</li>
          <li>Remove the word "Portfolio" from the URLs. </li>
          <li><strong>The Catch:</strong> Make sure <code>/</code> (the root of the site) loads the <code>AboutMe</code> action using an empty <code>[Route("")]</code> attribute.</li>
        </ol>
      </blockquote>
      
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 7. Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> A broken MVC app where clicking navigation links results in <code>AmbiguousMatchException</code> and <code>404 Not Found</code> errors.</li>
          <li><strong>Solution Repo:</strong> The same app fixed with strict Attribute Routing and type constraints.</li>
        </ul>
      </blockquote>
    </div>
  )
}
