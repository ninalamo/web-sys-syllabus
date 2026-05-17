export default function ModernJavascriptReview() {
  return (
    <div className="page-content">
      <h2>Week 1: Modern JavaScript Review</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🎯 This week: "Replace outdated JS habits (var, for loops) with modern ES6+ patterns used by every framework"<br />
        <br />
        <strong>LAB (3h) Topics:</strong><br />
        ▸ A. let/const vs var (7 min)<br />
        ▸ B. Arrow Functions &amp; Context (6 min)<br />
        ▸ C. Declarative Arrays — map, filter (7 min)<br />
        ▸ D. Destructuring (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality + AI Integration + Take-Home Mission (The Legacy Code Rescue)<br />
        <br />
        ✅ By end of lab: Explain why var is bad; write arrow functions; use map/filter; destructure objects; split code into modules
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
            <td>Lecture + Slides + Code Comparison</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (refactor alongside)</td>
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
        <p>[TIP] <strong>Teaching Tip:</strong> This is a "review" week but don't assume mastery. Many students learned JS from outdated tutorials. The goal is to replace bad habits (<code>var</code>, for loops for everything) with modern patterns (<code>const</code>, <code>.filter()</code>, <code>.map()</code>). Keep energy high.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. Course Overview &amp; The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Course Framing — "Production-Grade Products":</strong> "This elective is called <em>Production-Grade Products</em>. That means by the end of 16 weeks, you will ship a full-stack web application — with a React frontend, an ASP.NET Core Web API backend, a database, authentication, automated tests, and a CI/CD pipeline that deploys it to the internet. Not a tutorial project. A real, deployed product you can put in your portfolio."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard — The 16-Week Roadmap:</strong></p>
        <ul>
          <li><strong>Prelim (Weeks 1-4):</strong> Modern JavaScript / TypeScript + Dev Tooling — unlearn old JS, learn the modern toolchain</li>
          <li><strong>Midterm (Weeks 5-8):</strong> Component Architecture — from vanilla JS components to React</li>
          <li><strong>PreFinals (Weeks 9-12):</strong> API as Product — design, build, and document ASP.NET Core Web APIs</li>
          <li><strong>Finals (Weeks 13-16):</strong> Auth, Testing, CI/CD, and Capstone — secure, test, deploy, and present</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Why JavaScript First?:</strong> "React — the framework we start in Week 6 — is built entirely on modern JavaScript. <code>map()</code>, <code>filter()</code>, destructuring, arrow functions, modules — these aren't optional niceties, they are the syntax you will write in every single React component. If you're still writing <code>var</code> and <code>for</code> loops, React will feel like a foreign language. This week is the foundation. Get this right, and the next 15 weeks click into place."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Messy Drawer vs The Organizer</p>
        <ul>
          <li><strong>OLD (ES5):</strong> One giant drawer labeled "var". <code>users</code>, <code>i</code>, <code>temp</code>, <code>data</code> are all mixed up.</li>
          <li><strong>NEW (ES6+):</strong> Labeled containers. <code>const users</code> is a sealed jar. <code>let i</code> is a refillable container. <code>module.js</code> is a separate drawer entirely.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. let/const vs var (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Before ES6, <code>var</code> was the only way to declare variables. The problem? <code>var</code> ignores block scope like <code>if</code> statements and loops. It leaks everywhere. <code>let</code> and <code>const</code> fix this by staying trapped inside their curly braces."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-javascript">if (true) &#123;
        var a = 5; // Leaks!
        const b = 10; // Trapped!
        &#125;
        console.log(a); // Prints 5
        console.log(b); // ReferenceError
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Teach the strict hierarchy: Always use <code>const</code>. Only use <code>let</code> if the value <em>must</em> be reassigned (like a loop counter). Never use <code>var</code>.</p>
      </blockquote>
      <h4>▸ B. Arrow Functions &amp; Context (6 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Arrow functions aren't just a shorter way to write code. They solve a massive headache in older JS: losing the <code>this</code> context inside callbacks like <code>setTimeout</code>."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-javascript">// ES5
        var self = this; // The hacky old way
        setTimeout(function() &#123; console.log(self.name); &#125;, 1000);
      
        // ES6 Arrow Function
        setTimeout(() =&gt; &#123; console.log(this.name); &#125;, 1000);
      </code></pre>
      <p><strong>[TIP] Gen-Z Hook:</strong> An arrow function is like a loyal friend. It remembers where it came from (inherits <code>this</code>), while traditional functions get confused depending on who called them.</p>
      </blockquote>
      <h4>▸ C. Declarative Arrays — map, filter (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Imperative code tells the computer <em>how</em> to do something (a <code>for</code> loop). Declarative code tells it <em>what</em> you want. Modern JS relies on declarative array methods."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-javascript">// Transform an array (map)
        const names = users.map(user =&gt; user.name);
      
        // Keep only active users (filter)
        const active = users.filter(user =&gt; user.isActive);
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Emphasize that these methods do NOT change the original array; they return a brand new array. This is critical for React state later.</p>
      </blockquote>
      <h4>▸ D. Destructuring (5 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Destructuring is a shortcut to extract properties from an object without writing <code>user.</code> ten times."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-javascript">const user = &#123; name: "Nina", role: "Admin" &#125;;
        const &#123; name, role &#125; = user;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Mention that they will use this exact syntax every single day in React to extract "props".</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's refactor a messy piece of legacy JavaScript into modern ES6+. I'll type, you type along."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: Scoping Fixes</strong><ul>
        <li><em>Action:</em> Change all <code>var</code> to <code>const</code>. Run the script to show where reassignments break, then change those specific variables to <code>let</code>.</li>
      </ul>
      </li>
      <li><strong>Step 2: The <code>for</code> Loop Eradication</strong><ul>
      <li><em>Action:</em> Find a messy <code>for</code> loop that pushes items to a new array. Delete it entirely and replace it with a one-line <code>.filter()</code> or <code>.map()</code>.</li>
      </ul>
      </li>
      <li><strong>Step 3: String Interpolation</strong><ul>
      <li><em>Action:</em> Replace messy <code>greeting = "Hi " + user.name + "!"</code> concatenations with template literals <code>`Hi $&#123;user.name&#125;!`</code>.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. Debugging + Wrap</h3>
      <ul>
        <li><strong>Common Error 1:</strong> "Assignment to constant variable" -&gt; You used <code>const</code> but tried to reassign it. <em>Fix: Use <code>let</code>.</em></li>
        <li><strong>Common Error 2:</strong> "Cannot use import statement outside a module." -&gt; <em>Fix: Add <code>type="module"</code> to the script tag in your HTML.</em></li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 5. In-Class Exercise</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Refactor a provided ES5 product inventory script to modern ES6+. Replace all <code>var</code>, convert to arrow functions, use <code>.filter()/.map()</code>, use template literals, and split into two files (<code>data.js</code> and <code>utils.js</code>).</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <h3>From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "In university, you might lose 5 points on a rubric for using <code>var</code>. In the industry, using <code>var</code> in a modern React codebase will cause your Pull Request to be instantly rejected by the Senior Developer. It's not just a style preference; <code>var</code> causes massive memory leaks and state bugs in complex applications. Writing modern JS isn't about looking cool; it's about proving you are safe to work in a production codebase."</p>
      </blockquote>
      <h3>AI Integration</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "Refactor this ES5 code to ES6+". Not Allowed: "Write my module imports for me."</li>
      </ul>
      <h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I can explain why <code>var</code> is bad and when to use <code>let</code> vs <code>const</code>.</li>
          <li><input disabled="" type="checkbox" /> I can write an arrow function with implicit return.</li>
          <li><input disabled="" type="checkbox" /> I can use <code>.map()</code> to render a list, and <code>.filter()</code> to search it.</li>
          <li><input disabled="" type="checkbox" /> I can destructure an object to extract specific properties.</li>
          <li><input disabled="" type="checkbox" /> I can split JavaScript code into separate files using <code>import</code>/<code>export</code>.</li>
        </ul>
      </blockquote>
      <h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Legacy Code Rescue"
        I have provided a 100-line "spaghetti" JavaScript file that handles a shopping cart. It uses <code>var</code>, manual <code>for</code> loops, string concatenation (<code>+</code>), and is all in one massive file. </p>
        <ol>
          <li>Refactor it entirely into ES6+.</li>
          <li>Break it down into at least 3 module files (<code>cart.js</code>, <code>products.js</code>, <code>app.js</code>).</li>
          <li><strong>The Catch:</strong> You cannot use a single <code>for</code> loop or <code>var</code> keyword anywhere.</li>
        </ol>
      </blockquote>
      <h3>Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> <code>legacy-cart.js</code> (The messy ES5 file for the live walkthrough).</li>
          <li><strong>Solution Repo:</strong> The refactored ES6+ versions, split into clean modules using modern syntax.</li>
        </ul>
      </blockquote>
    </div>
  )
}
