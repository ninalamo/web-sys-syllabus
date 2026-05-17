export default function E3W1ResoReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 1: Modern JavaScript Review — Resources &amp; Reference</h1>
      <h2>Core Concepts Quick Reference</h2>
      <h3>1. let/const vs var</h3>
      <table><thead><tr>
        <th>Keyword</th>
        <th>Scope</th>
        <th>Reassignable</th>
        <th>Hoisting</th>
      </tr></thead><tbody>
      <tr>
        <td><code>var</code></td>
        <td>Function-scoped</td>
        <td>Yes</td>
        <td>Yes (undefined)</td>
      </tr>
      <tr>
        <td><code>let</code></td>
        <td>Block-scoped</td>
        <td>Yes</td>
        <td>No (TDZ)</td>
      </tr>
      <tr>
        <td><code>const</code></td>
        <td>Block-scoped</td>
        <td>No</td>
        <td>No (TDZ)</td>
      </tr>
      <p>
      <strong>Rule:</strong> Always use <code>const</code>. Only use <code>let</code> if the value must be reassigned. Never use <code>var</code>.
      </p>
      
      <pre><code>// BAD — leaks out of the block
      if (true) &#123;
      var a = 5;
      &#125;
      console.log(a); // 5 — oops!
      
      // GOOD — trapped inside the block
      if (true) &#123;
      const b = 10;
      &#125;
      console.log(b); // ReferenceError</code></pre>
      
      
      <h3>2. Arrow Functions</h3>
      
      
      <pre><code>// Traditional function
      function add(a, b) &#123;
      return a + b;
      &#125;
      
      // Arrow function (explicit return)
      const add = (a, b) =&gt; &#123;
      return a + b;
      &#125;;
      
      // Arrow function (implicit return)
      const add = (a, b) =&gt; a + b;
      
      // Single parameter (no parentheses needed)
      const double = x =&gt; x * 2;
      
      // Arrow functions inherit `this` from enclosing scope
      setTimeout(() =&gt; &#123;
      console.log(this.name); // Works!
      &#125;, 1000);</code></pre>
      
      
      <h3>3. Declarative Array Methods</h3>
      
      
      <pre><code>const users = [
      &#123; name: "Alice", active: true &#125;,
      &#123; name: "Bob", active: false &#125;,
      &#123; name: "Charlie", active: true &#125;
      ];
      
      // .map() — transform each element
      const names = users.map(user =&gt; user.name);
      // ["Alice", "Bob", "Charlie"]
      
      // .filter() — keep elements that pass a test
      const active = users.filter(user =&gt; user.active);
      // [&#123; name: "Alice", active: true &#125;, &#123; name: "Charlie", active: true &#125;]
      
      // .reduce() — accumulate into a single value
      const count = users.reduce((sum, user) =&gt; sum + (user.active ? 1 : 0), 0);
      // 2
      
      // Chaining
      const activeNames = users
      .filter(user =&gt; user.active)
      .map(user =&gt; user.name);
      // ["Alice", "Charlie"]</code></pre>
      
      
      <h3>4. Destructuring</h3>
      
      
      <pre><code>// Object destructuring
      const user = &#123; name: "Nina", role: "Admin", email: "nina@example.com" &#125;;
      const &#123; name, role &#125; = user;
      
      // With renaming
      const &#123; name: userName &#125; = user;
      
      // Array destructuring
      const colors = ["red", "green", "blue"];
      const [first, second] = colors;
      
      // Function parameter destructuring
      function greet(&#123; name, role &#125;) &#123;
      return `$&#123;name&#125; ($&#123;role&#125;)`;
      &#125;</code></pre>
      
      
      <h3>5. Template Literals</h3>
      
      
      <pre><code>const name = "Alice";
      const age = 25;
      
      // BAD — string concatenation
      const msg = "Hi " + name + ", you are " + age + " years old.";
      
      // GOOD — template literal
      const msg = `Hi $&#123;name&#125;, you are $&#123;age&#125; years old.`;
      
      // Multi-line strings
      const html = `
      &lt;div className="card"&gt;
      &lt;h3&gt;$&#123;name&#125;&lt;/h3&gt;
      &lt;p&gt;Age: $&#123;age&#125;&lt;/p&gt;
      &lt;/div&gt;
      `;</code></pre>
      
      
      <h3>6. ES Modules</h3>
      
      
      <pre><code>// data.js — named export
      export const products = [...];
      
      // utils.js — named and default exports
      export const formatProduct = (p) =&gt; `$&#123;p.name&#125; - $&#123;p.price&#125;`;
      export default function main() &#123; ... &#125;
      
      // app.js — imports
      import &#123; products &#125; from './data.js';
      import &#123; formatProduct &#125; from './utils.js';
      import main from './utils.js';</code></pre>
      
      
      <h2>Learning Baseline Checklist</h2>
      
      <br />By the end of this week, you must be able to say "Yes" to:
      
      
      <ul>
        <li>[ ] I can explain why <code>var</code> is bad and when to use <code>let</code> vs <code>const</code></li>
        <li>[ ] I can write an arrow function with implicit return</li>
        <li>[ ] I can use <code>.map()</code> to render a list, and <code>.filter()</code> to search it</li>
        <li>[ ] I can destructure an object to extract specific properties</li>
        <li>[ ] I can split JavaScript code into separate files using <code>import</code>/<code>export</code></li>
      
      </ul>
      
      <h2>Common Errors</h2>
      
      
      <table><thead><tr>
        <th>Error</th>
        <th>Cause</th>
        <th>Fix</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>"Assignment to constant variable"</td>
        <td>Used <code>const</code> but tried to reassign</td>
        <td>Use <code>let</code> instead</td>
      </tr>
      
      <tr>
        <td>"Cannot use import statement outside a module"</td>
        <td>Missing <code>type="module"</code> in script tag</td>
        <td>Add <code>type="module"</code></td>
      </tr>
      
      <tr>
        <td>"map is not a function"</td>
        <td>Called <code>.map()</code> on non-array</td>
        <td>Check that the value is an array</td>
      </tr>
      </tbody></table></tbody></table>
    </div>
  )
}
