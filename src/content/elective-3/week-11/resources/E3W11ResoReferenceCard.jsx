export default function E3W11ResoReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 11: Frontend/Backend Integration — Resources &amp; Reference</h1>
      <h2>Core Concepts Quick Reference</h2>
      <h3>1. Two-Server Mental Model</h3>
      <pre><code>+------------------+         JSON/HTTP         +------------------+
      |  React (Frontend) | &lt;---------------------&gt; |  ASP.NET (Backend) |
      |  Port 5173        |                          |  Port 5000/5001    |
      |  npm run dev      |                          |  dotnet run        |
      +------------------+                          +------------------+</code></pre>
      <p>
      Two completely separate servers. If the backend isn't running, the frontend fails.
      </p>
      
      <h3>2. Environment Variables</h3>
      
      
      <pre><code># .env file
      VITE_API_URL=https://localhost:5000/api</code></pre>
      
      
      <pre><code>// Inside React
      fetch(`$&#123;import.meta.env.VITE_API_URL&#125;/users`)</code></pre>
      
      <br />The <code>VITE_</code> prefix is strictly required.
      
      
      <h3>3. Vite Proxy</h3>
      
      
      <pre><code>// vite.config.js
      export default &#123;
      server: &#123;
      proxy: &#123;
      '/api': 'https://localhost:5000'
      &#125;
      &#125;
      &#125;;</code></pre>
      
      <br />The proxy forwards <code>/api</code> requests to the ASP.NET server, avoiding CORS during development.
      
      
      <h3>4. Bulletproof Fetching (3 States)</h3>
      
      
      <pre><code>// Loading -&gt; spinner
      // Success -&gt; data
      // Error -&gt; error message
      
      if (isLoading) return &lt;Spinner /&gt;;
      if (error) return &lt;ErrorBox message=&#123;error&#125; /&gt;;
      return &lt;DataDisplay data=&#123;data&#125; /&gt;;</code></pre>
      
      
      <h3>5. POST Request Pattern</h3>
      
      
      <pre><code>const res = await fetch('/api/todos', &#123;
      method: 'POST',
      headers: &#123; 'Content-Type': 'application/json' &#125;,
      body: JSON.stringify(&#123; title: 'New Todo' &#125;),
      &#125;);
      if (!res.ok) throw new Error('Failed');
      const created = await res.json();</code></pre>
      
      
      <h2>Learning Baseline Checklist</h2>
      
      
      <ul>
        <li>[ ] I know how to run a frontend and backend server simultaneously</li>
        <li>[ ] I can configure a proxy in <code>vite.config.js</code></li>
        <li>[ ] I can use <code>fetch</code> to GET data from my own API and display it in React</li>
        <li>[ ] I can use <code>fetch</code> to POST data from a React form to my API</li>
      
      </ul>
      
      <h2>Common Errors</h2>
      
      
      <table><thead><tr>
        <th>Error</th>
        <th>Cause</th>
        <th>Fix</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>"Failed to fetch"</td>
        <td>Backend server isn't running</td>
        <td>Start the ASP.NET server</td>
      </tr>
      
      <tr>
        <td>"Unexpected token &lt; in JSON"</td>
        <td>Backend returned HTML error page</td>
        <td>Check Network tab for backend error</td>
      </tr>
      
      <tr>
        <td>CORS error</td>
        <td>Missing proxy or CORS config</td>
        <td>Add proxy to vite.config.js</td>
      </tr>
      </tbody></table>
    </div>
  )
}
