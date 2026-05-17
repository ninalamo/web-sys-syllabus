export default function E3W6ResoReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 6: React Fundamentals — Resources &amp; Reference</h1>
      <h2>Core Concepts Quick Reference</h2>
      <h3>1. JSX Rules</h3>
      <ol>
        <li>Must return a single parent element (or use <code>&lt;&gt;...&lt;/&gt;</code> fragments)</li>
        <li><code>class</code> becomes <code>className</code></li>
        <li>All tags must be closed (<code>&lt;img /&gt;</code>, <code>&lt;br /&gt;</code>)</li>
        <li>Use <code>&#123;&#125;</code> to embed JavaScript expressions</li>
      </ol>
      <pre><code>const name = "Nina";
      return &lt;h1&gt;Hello, &#123;name&#125;&lt;/h1&gt;;</code></pre>
      <h3>2. Components</h3>
      <pre><code>// Functional component (MUST be capitalized)
      function Button() &#123;
      return &lt;button className="btn"&gt;Click&lt;/button&gt;;
      &#125;
      
      // Arrow function component
      const Button = () =&gt; &lt;button className="btn"&gt;Click&lt;/button&gt;;</code></pre>
      <h3>3. Props</h3>
      <pre><code>// Passing Props
      &lt;UserCard name="Alice" age=&#123;25&#125; /&gt;
      
      // Receiving Props (Destructured)
      function UserCard(&#123; name, age &#125;) &#123;
      return &lt;div&gt;&#123;name&#125; is &#123;age&#125;&lt;/div&gt;;
      &#125;
      
      // Props are read-only — flow down like a waterfall</code></pre>
      <h3>4. useState</h3>
      <pre><code>const [count, setCount] = useState(0);
      
      // NEVER mutate state directly
      // count = 5; // WRONG
      
      // Always use the setter
      setCount(5); // RIGHT
      
      // State updates are asynchronous
      setCount(count + 1);
      console.log(count); // Still shows old value!</code></pre>
      <h3>5. Conditional Rendering</h3>
      <pre><code>&#123;isLoggedIn ? &lt;Dashboard /&gt; : &lt;Login /&gt;&#125;
      &#123;items.length &gt; 0 &amp;&amp; &lt;ItemList items=&#123;items&#125; /&gt;&#125;
      &#123;loading &amp;&amp; &lt;Spinner /&gt;&#125;</code></pre>
      <h3>6. Lists in JSX</h3>
      <pre><code>&#123;users.map(user =&gt; (
      &lt;li key=&#123;user.id&#125;&gt;&#123;user.name&#125;&lt;/li&gt;
      ))&#125;</code></pre>
      <h2>Learning Baseline Checklist</h2>
      <ul>
        <li>[ ] I know the 3 rules of JSX (return 1 element, className, self-close tags)</li>
        <li>[ ] I can create a functional component</li>
        <li>[ ] I can pass props from a Parent to a Child</li>
        <li>[ ] I can initialize and update state using the <code>useState</code> hook</li>
      </ul>
      <h2>Common Errors</h2>
      <table><thead><tr>
        <th>Error</th>
        <th>Cause</th>
        <th>Fix</th>
      </tr></thead><tbody>
      <tr>
        <td>"Adjacent JSX elements must be wrapped"</td>
        <td>Multiple elements without wrapper</td>
        <td>Wrap in <code>&lt;div&gt;</code> or <code>&lt;&gt;</code></td>
      </tr>
      <tr>
        <td>State one step behind</td>
        <td>State updates are async</td>
        <td>Don't log state right after setting</td>
      </tr>
      <tr>
        <td>Component not rendering</td>
        <td>Function name not capitalized</td>
        <td>Capitalize component name</td>
      </tr></tbody></table>
    </div>
  )
}
