export default function E3W7ResoReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 7: Effects &amp; Data Fetching — Resources &amp; Reference</h1>
      <h2>Core Concepts Quick Reference</h2>
      <h3>1. useEffect Basics</h3>
      <pre><code>useEffect(() =&gt; &#123;
      // Runs after the component paints to the screen
      console.log("Component mounted or updated");
      &#125;, []); // Empty array = run once on mount</code></pre>
      <h3>2. Dependency Array Rules</h3>
      <table><thead><tr>
        <th>Array</th>
        <th>When it runs</th>
      </tr></thead><tbody>
      <tr>
        <td><code>[]</code></td>
        <td>ONCE (on mount)</td>
      </tr>
      <tr>
        <td><code>[count]</code></td>
        <td>On mount + whenever <code>count</code> changes</td>
      </tr>
      <tr>
        <td>No array</td>
        <td>On EVERY render (danger!)</td>
      </tr>
      <h3>3. Data Fetching in useEffect</h3>
      <pre><code>// WRONG — useEffect callback cannot be async
      useEffect(async () =&gt; &#123;
      const data = await fetch('/api/data'); // Breaks cleanup!
      &#125;, []);
      
      // RIGHT — declare async function inside
      useEffect(() =&gt; &#123;
      async function loadData() &#123;
      const res = await fetch('/api/data');
      setData(await res.json());
      &#125;
      loadData();
      &#125;, []);</code></pre>
      <h3>4. Cleanup Function</h3>
      <pre><code>useEffect(() =&gt; &#123;
      const timer = setInterval(() =&gt; console.log('tick'), 1000);
      
      // Cleanup runs when component unmounts
      return () =&gt; clearInterval(timer);
      &#125;, []);</code></pre>
      <h3>5. The 3-State Fetch Pattern</h3>
      <pre><code>const [data, setData] = useState(null);
      const [isLoading, setIsLoading] = useState(true);
      const [error, setError] = useState(null);
      
      useEffect(() =&gt; &#123;
      async function fetch() &#123;
      try &#123;
      setIsLoading(true);
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed');
      setData(await res.json());
      &#125; catch (err) &#123;
      setError(err.message);
      &#125; finally &#123;
      setIsLoading(false);
      &#125;
      &#125;
      fetch();
      &#125;, [url]);</code></pre>
      <h2>Learning Baseline Checklist</h2>
      <ul>
        <li>[ ] I know why we use <code>useEffect</code> instead of fetching directly in the component body</li>
        <li>[ ] I understand the difference between <code>[]</code>, <code>[state]</code>, and no dependency array</li>
        <li>[ ] I can write a <code>fetch</code> request inside a <code>useEffect</code></li>
        <li>[ ] I know how to return a cleanup function</li>
      </ul>
      <h2>Common Errors</h2>
      <table><thead><tr>
        <th>Error</th>
        <th>Cause</th>
        <th>Fix</th>
      </tr></thead><tbody>
      <tr>
        <td>"useEffect function must return cleanup or nothing"</td>
        <td>Made callback <code>async</code></td>
        <td>Declare async function inside</td>
      </tr>
      <tr>
        <td>Effect runs twice in dev</td>
        <td>React 18 Strict Mode</td>
        <td>Normal — tests cleanup works</td>
      </tr>
      <tr>
        <td>Infinite loop</td>
        <td>State set inside effect without proper deps</td>
        <td>Fix dependency array</td>
      </tr></tbody></table></tbody></table>
    </div>
  )
}
