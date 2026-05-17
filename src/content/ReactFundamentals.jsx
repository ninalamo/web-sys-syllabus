export default function ReactFundamentals() {
  return (
    <div className="page-content">
      <h2>Week 6: React Fundamentals</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 5: Component Thinking in Vanilla JS"<br />
        🎯 This week: "Learn React — components, props, state, and JSX — the framework behind Netflix and Instagram"<br />
        <br />
        <strong>LAB (3h) Topics:</strong><br />
        ▸ A. JSX — Not HTML! (7 min)<br />
        ▸ B. Components (6 min)<br />
        ▸ C. Props (7 min)<br />
        ▸ D. State — useState (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality + AI Integration + Take-Home Mission (The State Toggler)<br />
        <br />
        ✅ By end of lab: Understand JSX rules; create functional components; pass props; use useState for dynamic UI
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
            <td>Lecture + Slides + JSX Rules</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (Components + Props)</td>
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
        <p>[TIP] <strong>Teaching Tip:</strong> Students will find JSX weird ("Why is HTML in my JS?"). Remind them of last week's string templates. React just makes that pattern official and safer.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Last week we built our own clunky, string-based UI engine. Today, we throw that away and use the tool that powers Netflix, Instagram, and Airbnb. Welcome to React."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> Custom HTML Tags</p>
        <ul>
          <li>You know <code>&lt;h1&gt;</code> makes a big header.</li>
          <li>You know <code>&lt;button&gt;</code> makes a button.</li>
          <li>React lets you create <code>&lt;UserProfile /&gt;</code>. It looks like HTML, but it's a custom, reusable piece of code that you defined.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. JSX — Not HTML! (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "JSX looks exactly like HTML, but it is JavaScript. Under the hood, Babel transforms <code>&lt;h1&gt;Hi&lt;/h1&gt;</code> into <code>React.createElement('h1', null, 'Hi')</code>."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-jsx">// The curly braces let you "escape" back into JavaScript
        const name = "Nina";
        return &lt;h1&gt;Hello, &#123;name&#125;&lt;/h1&gt;;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Emphasize the exact rules of JSX: 1. Must return a single parent element. 2. <code>class</code> becomes <code>className</code>. 3. Tags must be closed (<code>&lt;img /&gt;</code>).</p>
      </blockquote>
      <h4>▸ B. Components (6 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "A React component is just a JavaScript function that returns JSX. That's it. It's not magic."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-jsx">function Button() &#123;
        return &lt;button className="btn"&gt;Click&lt;/button&gt;;
        &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Warn them: The function name MUST be capitalized. If they write <code>function button()</code>, React will assume it's a standard HTML tag and break.</p>
      </blockquote>
      <h4>▸ C. Props (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "How do we make components reusable? We pass them data. Props are like parameters for a function, or attributes on an HTML tag."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-jsx">// Passing Props
        &lt;UserCard name="Alice" age=&#123;25&#125; /&gt;
      
        // Receiving Props (Destructured)
        function UserCard(&#123; name, age &#125;) &#123; ... &#125;
      </code></pre>
      <p><strong>[TIP] Gen-Z Hook:</strong> Props flow down like a waterfall from parent to child. The child cannot push water back up the waterfall. Props are read-only.</p>
      </blockquote>
      <h4>▸ D. State — useState (5 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "If props are read-only, how does a component change? State. State is the component's personal memory. When state changes, React automatically re-renders the component."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-jsx">const [count, setCount] = useState(0);
        return &lt;button onClick=&#123;() =&gt; setCount(count + 1)&#125;&gt;&#123;count&#125;&lt;/button&gt;;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Drill this: NEVER mutate state directly (<code>count = 5</code>). You must use the setter function (<code>setCount(5)</code>) or React won't know it needs to re-render.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build a React app using Vite. We'll make a reusable <code>ProfileCard</code> component and give it some state."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: Scaffolding</strong><ul>
        <li><em>Action:</em> Run <code>npm create vite@latest my-react-app -- --template react</code>. Show the file structure.</li>
      </ul>
      </li>
      <li><strong>Step 2: Building the Component &amp; Props</strong><ul>
      <li><em>Action:</em> Create a <code>ProfileCard.jsx</code>. Give it <code>name</code> and <code>role</code> props. Render it three times in <code>App.jsx</code> with different data.</li>
      </ul>
      </li>
      <li><strong>Step 3: Adding State</strong><ul>
      <li><em>Action:</em> Add a "Like" button to the <code>ProfileCard</code> using <code>useState</code>. Show how clicking one card's like button doesn't affect the other cards (State is isolated per instance).</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. Debugging + Wrap</h3>
      <ul>
        <li><strong>Common Error 1:</strong> <code>Adjacent JSX elements must be wrapped in an enclosing tag.</code> -&gt; You tried to return two elements without wrapping them in a <code>&lt;div&gt;</code> or <code>&lt;&gt; &lt;/&gt;</code> (fragment).</li>
        <li><strong>Common Error 2:</strong> State seems one step behind. -&gt; State updates are asynchronous. If you <code>setCount(count + 1)</code> and immediately <code>console.log(count)</code>, it will show the old value.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 5. In-Class Exercise</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Build a <code>Counter</code> component with <code>+</code> and <code>-</code> buttons. Render 3 Counters on the screen. Add a Prop <code>step</code> so the first counter counts by 1, the second by 5, and the third by 10.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <h3>From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "The hardest thing to learn in React isn't the syntax; it's 'Thinking in React'. Junior devs try to reach into the DOM to grab an input value using <code>document.getElementById</code>. In React, this is an anti-pattern. You bind the input to a piece of State, and you read the State. If you are touching the DOM directly in React, you are fighting the framework, and you will lose."</p>
      </blockquote>
      <h3>AI Integration</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "Why is my useState not updating immediately?" Not Allowed: "Build this React component for me."</li>
      </ul>
      <h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I know the 3 rules of JSX (return 1 element, className, self-close tags).</li>
          <li><input disabled="" type="checkbox" /> I can create a functional component.</li>
          <li><input disabled="" type="checkbox" /> I can pass props from a Parent to a Child.</li>
          <li><input disabled="" type="checkbox" /> I can initialize and update state using the <code>useState</code> hook.</li>
        </ul>
      </blockquote>
      <h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The State Toggler"</p>
        <ol>
          <li>Create a <code>LightSwitch</code> component.</li>
          <li>It should have a piece of state called <code>isOn</code> (boolean).</li>
          <li><strong>The Catch:</strong> Based on the state, the component should completely change its CSS class (e.g., <code>&lt;div className=&#123;isOn ? 'bg-yellow' : 'bg-dark'&#125;&gt;</code>). The button text must also change between "Turn Off" and "Turn On".</li>
        </ol>
      </blockquote>
      <h3>Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> A blank Vite React app.</li>
          <li><strong>Solution Repo:</strong> A completed <code>ProfileCard</code> and <code>LightSwitch</code> showing proper prop destructuring and boolean state toggling.</li>
        </ul>
      </blockquote>
    </div>
  )
}
