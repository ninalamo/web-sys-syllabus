export default function E3W5ResoReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 5: Component Thinking (Vanilla JS) — Resources &amp; Reference</h1>
      <h2>Core Concepts Quick Reference</h2>
      <h3>1. Imperative DOM Manipulation (The Pain)</h3>
      <pre><code>// 4 lines just to make a button appear
      const btn = document.createElement('button');
      btn.classList.add('btn-primary');
      btn.innerText = 'Click Me';
      document.getElementById('app').appendChild(btn);</code></pre>
      <h3>2. State as Single Source of Truth</h3>
      <pre><code>State &#123; count: 5 &#125; --- renders ---&gt; &lt;h1&gt;5&lt;/h1&gt;
      
      Change State -&gt; Re-render -&gt; UI updates automatically
      NEVER read from the DOM to determine state</code></pre>
      <h3>3. Components in Vanilla JS</h3>
      <pre><code>function UserCard(user) &#123;
      return `&lt;div className="card"&gt;
      &lt;h3&gt;$&#123;user.name&#125;&lt;/h3&gt;
      &lt;p&gt;$&#123;user.role&#125;&lt;/p&gt;
      &lt;/div&gt;`;
      &#125;
      
      // Render all users
      function render() &#123;
      document.getElementById('app').innerHTML =
      users.map(UserCard).join('');
      &#125;</code></pre>
      <h3>4. The State -&gt; Render Pattern</h3>
      <pre><code>let state = &#123; count: 0 &#125;;
      
      function render() &#123;
      document.getElementById('app').innerHTML = `
      &lt;h1&gt;$&#123;state.count&#125;&lt;/h1&gt;
      &lt;button onclick="increment()"&gt;+1&lt;/button&gt;
      `;
      &#125;
      
      function increment() &#123;
      state.count++;
      render(); // Re-render after state change
      &#125;
      
      render(); // Initial render</code></pre>
      <h2>Learning Baseline Checklist</h2>
      <ul>
        <li>[ ] I can explain why direct DOM manipulation is hard to maintain</li>
        <li>[ ] I know what "State" means in a web application</li>
        <li>[ ] I can write a JavaScript function that returns an HTML string based on data</li>
        <li>[ ] I understand the concept of re-rendering UI when data changes</li>
      </ul>
      <h2>Key Principle</h2>
      <blockquote><p><strong>Data lives in JavaScript memory. The UI just blindly obeys the data.</strong></p></blockquote>
      <blockquote><p>Never let the DOM hold the data.</p></blockquote>
    </div>
  )
}
