export default function E3W2ResoReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 2: Async JavaScript Deep-Dive — Resources &amp; Reference</h1>
      <h2>Core Concepts Quick Reference</h2>
      <h3>1. The Event Loop</h3>
      <pre><code>Call Stack -&gt; Web APIs (background) -&gt; Callback Queue -&gt; Event Loop</code></pre>
      <p>
      The Event Loop constantly checks: "Is the Call Stack empty? If yes, let the next task from the Queue in."
      </p>
      
      <h3>2. Promise States</h3>
      
      
      <table><thead><tr>
        <th>State</th>
        <th>Meaning</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td><code>Pending</code></td>
        <td>Waiting for the server</td>
      </tr>
      
      <tr>
        <td><code>Fulfilled</code></td>
        <td>The server replied with data</td>
      </tr>
      
      <tr>
        <td><code>Rejected</code></td>
        <td>The network failed</td>
      </tr>
      
      
      <h3>3. The fetch API Gotcha</h3>
      
      
      <pre><code>// WRONG — fetch does NOT reject on 404/500
      const res = await fetch('/missing-page');
      const data = await res.json(); // This might fail!
      
      // RIGHT — always check response.ok
      const res = await fetch('/missing-page');
      if (!res.ok) throw new Error(`HTTP $&#123;res.status&#125;`);
      const data = await res.json();</code></pre>
      
      
      <h3>4. async/await Pattern</h3>
      
      
      <pre><code>// The .then() chain (old way)
      fetch('/api/user')
      .then(res =&gt; res.json())
      .then(data =&gt; console.log(data))
      .catch(err =&gt; console.error(err));
      
      // async/await (modern way)
      async function getUser() &#123;
      try &#123;
      const response = await fetch('/api/user');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      return data;
      &#125; catch (error) &#123;
      console.error('Error:', error);
      &#125;
      &#125;</code></pre>
      
      <br /><strong>Rule:</strong> You cannot use <code>await</code> unless the function has <code>async</code>.
      
      
      <h3>5. Promise.all() for Parallel Requests</h3>
      
      
      <pre><code>// Sequential (slow — waits for each to finish)
      const users = await fetch('/users').then(r =&gt; r.json());
      const posts = await fetch('/posts').then(r =&gt; r.json());
      
      // Parallel (fast — both start at the same time)
      const [users, posts] = await Promise.all([
      fetch('/users').then(r =&gt; r.json()),
      fetch('/posts').then(r =&gt; r.json())
      ]);</code></pre>
      
      
      <h3>6. The 3-State Fetch Pattern</h3>
      
      
      <pre><code>const [data, setData] = useState(null);
      const [isLoading, setIsLoading] = useState(true);
      const [error, setError] = useState(null);
      
      useEffect(() =&gt; &#123;
      async function loadData() &#123;
      try &#123;
      setIsLoading(true);
      const res = await fetch(url);
      if (!res.ok) throw new Error('Fetch failed');
      setData(await res.json());
      &#125; catch (err) &#123;
      setError(err.message);
      &#125; finally &#123;
      setIsLoading(false);
      &#125;
      &#125;
      loadData();
      &#125;, [url]);</code></pre>
      
      
      <h2>Learning Baseline Checklist</h2>
      
      
      <ul>
        <li>[ ] I can explain why an app doesn't freeze when fetching data</li>
        <li>[ ] I can write a <code>fetch</code> request using <code>async/await</code></li>
        <li>[ ] I know how to check <code>response.ok</code> before trying to parse JSON</li>
        <li>[ ] I can wrap my async code in a <code>try/catch</code> block</li>
        <li>[ ] I understand when to use <code>Promise.all()</code> to speed up multiple requests</li>
      
      </ul>
      
      <h2>Common Errors</h2>
      
      
      <table><thead><tr>
        <th>Error</th>
        <th>Cause</th>
        <th>Fix</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>"Cannot read properties of undefined (reading 'json')"</td>
        <td>Fetch failed or forgot to <code>await</code></td>
        <td>Check <code>response.ok</code> and <code>await</code></td>
      </tr>
      
      <tr>
        <td>Infinite loading state</td>
        <td>Forgot <code>finally</code> block or early return in <code>catch</code></td>
        <td>Add <code>finally &#123; setIsLoading(false) &#125;</code></td>
      </tr>
      
      <tr>
        <td>"await is only valid in async functions"</td>
        <td>Used <code>await</code> outside an <code>async</code> function</td>
        <td>Add <code>async</code> to the function signature</td>
      </tr>
      </tbody></table></tbody></table>
    </div>
  )
}
