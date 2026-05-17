export default function ComponentThinkingInVanillaJs() {
  return (
    <div className="page-content">
      <h2>Week 5: Component Thinking (Vanilla JS)</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 4: Dev Tooling &amp; Workflow"<br />
        🎯 This week: "Shift our mindset to components — building reusable UI blocks with vanilla JavaScript before we meet React"<br />
        <br />
        <strong>LAB (3h) Topics:</strong><br />
        ▸ A. Imperative DOM Manipulation (9 min)<br />
        ▸ B. State as Single Source of Truth (9 min)<br />
        ▸ C. Components in Vanilla JS (7 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality + AI Integration + Take-Home Mission (The Component Factory)<br />
        <br />
        ✅ By end of lab: Explain why direct DOM manipulation is hard; know what State means; write function returning HTML string from data; understand re-rendering on data change
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
            <td>Lecture + Slides + DOM Diagrams</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (Imperative vs Declarative)</td>
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
        <p>[TIP] <strong>Teaching Tip:</strong> Do NOT skip this week to rush into React. If students don't feel the pain of imperative DOM manipulation, they will never understand why React's declarative state is so powerful.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Imagine building a Lego castle. The old way of coding (Imperative) is writing instructions: 'Pick up blue block. Put it on red block. Move red block left.' If you mess up one step, the castle breaks. The modern way (Declarative) is handing the computer a picture of the finished castle and saying, 'Make it look like this.'"</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Chef vs The Microwave</p>
        <ul>
          <li><strong>Imperative (Vanilla DOM):</strong> You are the chef. You have to chop, stir, monitor the heat, and plate the food step-by-step (<code>document.createElement</code>, <code>element.appendChild</code>).</li>
          <li><strong>Declarative (State -&gt; UI):</strong> You are using a microwave. You press 'Popcorn' (change State). The machine handles the exact heating elements (UI updates) automatically.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. Imperative DOM Manipulation (The Pain) (9 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Directly touching the DOM is slow, verbose, and error-prone. Keeping track of exactly which element needs to change creates massive spaghetti code."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-javascript">const btn = document.createElement('button');
        btn.classList.add('btn-primary');
        btn.innerText = 'Click Me';
        document.getElementById('app').appendChild(btn);
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Have them look at that code and realize it took 4 lines just to make a button appear.</p>
      </blockquote>
      <h4>▸ B. State as the Single Source of Truth (9 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Instead of reading from the HTML (e.g., <code>input.value</code>), we keep data in a JavaScript object called 'State'. The HTML is just a dumb reflection of the State."</p>
        <p><strong>[VISUAL] Example:</strong>
        Draw: <code>State &#123; count: 5 &#125; ---&gt; renders ---&gt; &lt;h1&gt;5&lt;/h1&gt;</code>
        "If you want the &lt;h1&gt; to show 6, you don't touch the &lt;h1&gt;. You change the State to 6, and tell the UI to re-draw itself."</p>
        <p><strong>[TIP] Gen-Z Hook:</strong> The State is the group chat. The UI is just the notifications popping up on your lock screen. </p>
      </blockquote>
      <h4>▸ C. Components in Vanilla JS (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "A component is just a function that returns UI. We can build reusable blocks of UI even without React using template literals."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-javascript">function UserCard(user) &#123;
        return `&lt;div className="card"&gt;
        &lt;h3&gt;$&#123;user.name&#125;&lt;/h3&gt;
        &lt;/div&gt;`;
        &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> This is the direct stepping stone to JSX next week.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build a simple counter app twice. First, the painful old way. Then, the modern State-driven way."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The Imperative Counter</strong><ul>
        <li><em>Action:</em> Build a counter using <code>document.querySelector</code>, reading the text inside the <code>span</code>, parsing it to an <code>int</code>, adding 1, and writing it back to the <code>span</code>. Show how brittle it is.</li>
      </ul>
      </li>
      <li><strong>Step 2: The State-Driven Counter</strong><ul>
      <li><em>Action:</em> Create a variable <code>let count = 0;</code>. Write a <code>render()</code> function that replaces the <code>innerHTML</code> of the app with the current <code>count</code>. The button click simply does <code>count++; render();</code>.</li>
      </ul>
      </li>
      <li><strong>Step 3: Componentizing</strong><ul>
      <li><em>Action:</em> Extract the HTML string generation into a <code>CounterNode(count)</code> function.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. Debugging + Wrap</h3>
      <ul>
        <li><strong>Common Error 1:</strong> <code>Uncaught TypeError: Cannot read properties of null (reading 'appendChild')</code> -&gt; Your JavaScript ran before the HTML finished loading, so <code>getElementById</code> found nothing.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 5. In-Class Exercise</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Build a Todo List in Vanilla JS using State. Do not read the DOM to find out what the todos are. Keep an array <code>let todos = []</code>. When a user types, update the array, then call <code>renderTodos()</code>.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <h3>From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "In 2012, everyone built apps by directly mutating the DOM using jQuery. As apps like Facebook grew, they realized they had a massive problem: an unread message badge would say '1', but the chat box would be empty. The DOM states were out of sync. This is why React was invented. We NEVER want the DOM to hold the data. Data lives in JavaScript memory, and the UI just blindly obeys the data."</p>
      </blockquote>
      <h3>AI Integration</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "Explain the difference between innerText and innerHTML." Not Allowed: "Write the vanilla JS component rendering engine for me."</li>
      </ul>
      <h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I can explain why direct DOM manipulation is hard to maintain.</li>
          <li><input disabled="" type="checkbox" /> I know what "State" means in a web application.</li>
          <li><input disabled="" type="checkbox" /> I can write a JavaScript function that returns an HTML string based on data.</li>
          <li><input disabled="" type="checkbox" /> I understand the concept of re-rendering UI when data changes.</li>
        </ul>
      </blockquote>
      <h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Component Factory"
        Create an array of 5 product objects. </p>
        <ol>
          <li>Write a Vanilla JS function <code>ProductCard(product)</code> that takes an object and returns an HTML template literal string.</li>
          <li>Use <code>.map()</code> to generate a list of strings from your array.</li>
          <li><strong>The Catch:</strong> Render all 5 products to the screen using only one single <code>document.getElementById('app').innerHTML = ...</code> assignment. No loops calling <code>.appendChild()</code>.</li>
        </ol>
      </blockquote>
      <h3>Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> A basic HTML file with empty <code>&lt;div&gt;</code> containers.</li>
          <li><strong>Solution Repo:</strong> The Counter and Todo List applications built using the Vanilla JS State -&gt; <code>render()</code> pattern.</li>
        </ul>
      </blockquote>
    </div>
  )
}
