export default function EffectsAndDataFetching() {
  return (
    <div className="page-content">
      <h2>Week 7: Effects &amp; Data Fetching</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 6: React Fundamentals"<br />
        🎯 This week: "Make components dynamic — `useEffect` lets us fetch data, set up subscriptions, and handle side effects"<br />
        <br />
        <strong>LAB (3h) Topics:</strong><br />
        ▸ A. The `useEffect` Hook (7 min)<br />
        ▸ B. The Dependency Array (7 min)<br />
        ▸ C. Data Fetching inside Effects (6 min)<br />
        ▸ D. The Cleanup Function (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality + AI Integration + Take-Home Mission (The Window Resizer)<br />
        <br />
        ✅ By end of lab: Know why we use `useEffect`; understand `[]` vs `[state]` vs no deps; write `fetch` in `useEffect`; return cleanup function
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
            <td>Lecture + Slides + The Array</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (useEffect + fetch)</td>
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
        <p>[TIP] <strong>Teaching Tip:</strong> <code>useEffect</code> is the most abused hook in React. Students will try to use it for everything. Hammer home the rule: "If you can calculate it during render, you don't need a <code>useEffect</code>."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "A React component's main job is to take Props/State and return UI. But what if you need to talk to the outside world? Like fetching data from an API, or setting a timer? That's called a 'Side Effect'. You can't just throw it in the middle of your component, or React will panic."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Play Actor</p>
        <ul>
          <li><strong>Render:</strong> The actor is on stage performing their lines (returning UI). You cannot interrupt them.</li>
          <li><strong>Effect:</strong> After the scene is done (after Render), the actor goes backstage to check their phone (fetch data).</li>
          <li><code>useEffect</code> literally means "do this <em>after</em> the screen has painted."</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. The <code>useEffect</code> Hook (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "<code>useEffect</code> takes two arguments: a function (what to do) and a dependency array (when to do it). It runs at least once, immediately after the first render."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-jsx">useEffect(() =&gt; &#123;
        console.log("The component just painted to the screen!");
        &#125;, []);
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Emphasize that <code>useEffect</code> is an escape hatch. It lets you step outside of React's predictable rendering to do messy things.</p>
      </blockquote>
      <h4>▸ B. The Dependency Array (The Infinite Loop Trap) (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "The array tells React exactly when to re-run the effect. If you mess this up, you will accidentally DDOS an API by fetching data 1,000 times a second."</p>
        <p><strong>[VISUAL] Example:</strong></p>
        <ul>
          <li><code>[]</code> (Empty) = Run ONCE (on mount).</li>
          <li><code>[count]</code> = Run on mount, AND whenever <code>count</code> changes.</li>
          <li><em>No Array</em> = Run on EVERY single render (Danger!).</li>
        </ul>
        <p><strong>[TIP] Gen-Z Hook:</strong> The dependency array is your notification settings. Empty array means "mute all, only tell me when I join the group." <code>[count]</code> means "only ping me if <code>count</code> messages me." No array means "ping me for absolutely everything."</p>
      </blockquote>
      <h4>▸ C. Data Fetching inside Effects (6 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "You cannot make the <code>useEffect</code> callback an <code>async</code> function directly. You must declare the async function inside, and then call it."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-jsx">useEffect(() =&gt; &#123;
        async function loadData() &#123;
        const res = await fetch('/api/data');
        setData(await res.json());
        &#125;
        loadData();
        &#125;, []);
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Show them the 3-state pattern for fetching: <code>data</code> (null), <code>isLoading</code> (true), <code>error</code> (null). A robust UI handles all three.</p>
      </blockquote>
      <h4>▸ D. The Cleanup Function (5 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "If your effect starts a timer or subscribes to a chat room, you must clean it up when the component leaves the screen, or you will create a memory leak."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-jsx">useEffect(() =&gt; &#123;
        const timer = setInterval(() =&gt; console.log('tick'), 1000);
        return () =&gt; clearInterval(timer); // The Cleanup
        &#125;, []);
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Explain that the cleanup function runs right before the component is destroyed (unmounted).</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build a component that fetches a random user from an API when it loads."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The Initial State</strong><ul>
        <li><em>Action:</em> Set up <code>user</code> (null) and <code>loading</code> (true) state. Render a "Loading..." text.</li>
      </ul>
      </li>
      <li><strong>Step 2: The Fetch Effect</strong><ul>
      <li><em>Action:</em> Add the <code>useEffect</code> with an empty array <code>[]</code>. Fetch from <code>https://randomuser.me/api/</code>. Update the state. Show the UI transition from "Loading..." to the user's name.</li>
      </ul>
      </li>
      <li><strong>Step 3: The Infinite Loop Warning</strong><ul>
      <li><em>Action:</em> Delete the empty array <code>[]</code>. Add a <code>console.log('Fetching...')</code>. Open DevTools and watch it print 10,000 times as React gets stuck in a Render -&gt; Fetch -&gt; SetState -&gt; Render loop.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. Debugging + Wrap</h3>
      <ul>
        <li><strong>Common Error 1:</strong> <code>useEffect function must return a cleanup function or nothing.</code> -&gt; You made the <code>useEffect</code> callback <code>async</code>. Async functions return Promises, which breaks React's cleanup expectations.</li>
        <li><strong>Common Error 2:</strong> The effect runs twice in development. -&gt; This is React 18's Strict Mode. It intentionally mounts, unmounts, and remounts your component to test if your cleanup function works.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 5. In-Class Exercise</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Build a <code>PokeSearch</code> component. It has an input field and a piece of state called <code>searchQuery</code>. Write a <code>useEffect</code> that depends on <code>[searchQuery]</code>. Whenever the query changes, fetch that specific Pokemon from the PokeAPI.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <h3>From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "In modern enterprise React, we actually don't use <code>useEffect</code> for data fetching anymore. It's too error-prone with race conditions and caching. In the real world, we use libraries like React Query or SWR, or frameworks like Next.js. However, you MUST understand how <code>useEffect</code> works because you will inherit legacy codebases that have hundreds of them, and you will be expected to fix their memory leaks."</p>
      </blockquote>
      <h3>AI Integration</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "Explain why my useEffect is running twice." Not Allowed: "Write the fetch logic for my homework."</li>
      </ul>
      <h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I know why we use <code>useEffect</code> instead of fetching data directly in the component body.</li>
          <li><input disabled="" type="checkbox" /> I understand the difference between <code>[]</code>, <code>[state]</code>, and no dependency array.</li>
          <li><input disabled="" type="checkbox" /> I can write a <code>fetch</code> request inside a <code>useEffect</code>.</li>
          <li><input disabled="" type="checkbox" /> I know how to return a cleanup function.</li>
        </ul>
      </blockquote>
      <h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Window Resizer"</p>
        <ol>
          <li>Create a component that displays the current browser window width in pixels.</li>
          <li>Add a <code>useEffect</code> that adds a <code>'resize'</code> event listener to the <code>window</code>.</li>
          <li><strong>The Catch:</strong> You must include a cleanup function that uses <code>removeEventListener</code>. Prove it works by adding a button to hide/unmount the component and verifying no errors occur when resizing.</li>
        </ol>
      </blockquote>
      <h3>Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> A component with a "Show Data" button but no fetching logic.</li>
          <li><strong>Solution Repo:</strong> A fully working PokeSearch utilizing <code>useEffect</code>, loading states, and error handling.</li>
        </ul>
      </blockquote>
    </div>
  )
}
