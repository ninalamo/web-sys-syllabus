export default function E3W8ResoReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 8: React Router &amp; SPA Concepts — Resources &amp; Reference</h1>
      <h2>Core Concepts Quick Reference</h2>
      <h3>1. Single Page Application (SPA)</h3>
      <pre><code>URL changes -&gt; React intercepts -&gt; React unmounts &lt;Home /&gt; -&gt; React mounts &lt;About /&gt;</code></pre>
      <p>
      Routing happens 100% in the browser. The server is not involved.
      </p>
      
      <h3>2. React Router Setup (v6.4+)</h3>
      
      
      <pre><code>import &#123; createBrowserRouter, RouterProvider &#125; from 'react-router-dom';
      
      const router = createBrowserRouter([
      &#123; path: "/", element: &lt;Home /&gt; &#125;,
      &#123; path: "/about", element: &lt;About /&gt; &#125;,
      ]);
      
      function App() &#123;
      return &lt;RouterProvider router=&#123;router&#125; /&gt;;
      &#125;</code></pre>
      
      
      <h3>3. Link vs Anchor</h3>
      
      
      <pre><code>// BAD — causes full page refresh, kills state
      &lt;a href="/login"&gt;Login&lt;/a&gt;
      
      // GOOD — instant SPA transition
      &lt;Link to="/login"&gt;Login&lt;/Link&gt;</code></pre>
      
      
      <h3>4. URL Parameters</h3>
      
      
      <pre><code>// Route: path="/users/:id"
      function UserProfile() &#123;
      const &#123; id &#125; = useParams();
      return &lt;h1&gt;Profile for user &#123;id&#125;&lt;/h1&gt;;
      &#125;</code></pre>
      
      
      <h3>5. Layout Routes with Outlet</h3>
      
      
      <pre><code>function Layout() &#123;
      return (
      &lt;div&gt;
      &lt;Navbar /&gt;
      &lt;Outlet /&gt; &#123;/* Child routes render here */&#125;
      &lt;/div&gt;
      );
      &#125;
      
      const router = createBrowserRouter([
      &#123;
      path: '/',
      element: &lt;Layout /&gt;,
      children: [
      &#123; index: true, element: &lt;Home /&gt; &#125;,
      &#123; path: 'about', element: &lt;About /&gt; &#125;,
      ],
      &#125;,
      ]);</code></pre>
      
      
      <h2>Learning Baseline Checklist</h2>
      
      
      <ul>
        <li>[ ] I can explain what a Single Page Application is</li>
        <li>[ ] I know how to configure <code>createBrowserRouter</code></li>
        <li>[ ] I can explain why <code>&lt;Link&gt;</code> must be used instead of <code>&lt;a&gt;</code></li>
        <li>[ ] I can extract dynamic data from the URL using <code>useParams()</code></li>
      
      </ul>
      
      <h2>Common Errors</h2>
      
      
      <table><thead><tr>
        <th>Error</th>
        <th>Cause</th>
        <th>Fix</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>"useNavigate may be used only in context of Router"</td>
        <td>Hook outside Router Provider</td>
        <td>Wrap app in RouterProvider</td>
      </tr>
      
      <tr>
        <td>Blank page</td>
        <td>No matching route or infinite redirect</td>
        <td>Check route paths</td>
      </tr>
      </tbody></table>
    </div>
  )
}
