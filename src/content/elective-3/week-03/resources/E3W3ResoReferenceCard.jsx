export default function E3W3ResoReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 3: TypeScript Essentials — Resources &amp; Reference</h1>
      <h2>Core Concepts Quick Reference</h2>
      <h3>1. Inference vs Explicit Types</h3>
      <pre><code>// TS infers this is a string — no need to type it
      let name = "Alice";
      name = 42; // ERROR: Type 'number' is not assignable to type 'string'
      
      // Redundant — let TS infer
      let age: number = 25; // Just write: let age = 25;
      
      // Explicit types needed for function parameters
      function greet(name: string): string &#123;
      return `Hello, $&#123;name&#125;`;
      &#125;</code></pre>
      <h3>2. Interfaces</h3>
      <pre><code>interface User &#123;
      id: number;
      name: string;
      isAdmin: boolean;
      &#125;
      
      // Using the interface
      const user: User = &#123; id: 1, name: "Alice", isAdmin: true &#125;;</code></pre>
      <h3>3. Union Types &amp; Optional Properties</h3>
      <pre><code>interface User &#123;
      id: number | string;      // Union: can be number OR string
      middleName?: string;      // Optional: may or may not exist
      &#125;
      
      // Using optional properties safely
      function getMiddleName(user: User): string &#123;
      return user.middleName ?? "N/A"; // Must handle undefined
      &#125;</code></pre>
      <h3>4. The Danger of <code>any</code></h3>
      <pre><code>// BAD — defeats the purpose of TypeScript
      let data: any = "Hello";
      data.explode(); // TS allows this, but it crashes at runtime!
      
      // GOOD — use unknown instead
      let data: unknown = "Hello";
      if (typeof data === "string") &#123;
      console.log(data.toUpperCase()); // Safe!
      &#125;</code></pre>
      <h3>5. Type Assertion (Casting)</h3>
      <pre><code>// When you know the type better than TS
      const data = await response.json() as Product[];
      
      // Or with angle bracket syntax (not allowed in TSX)
      const data = &lt;Product[]&gt;await response.json();</code></pre>
      <h3>6. Type Aliases vs Interfaces</h3>
      <pre><code>// Type alias — good for unions, primitives, tuples
      type Status = "pending" | "fulfilled" | "rejected";
      type Point = [number, number];
      
      // Interface — good for objects, supports extension
      interface Product &#123;
      id: number;
      name: string;
      &#125;
      
      interface ExtendedProduct extends Product &#123;
      description: string;
      &#125;</code></pre>
      <h2>Learning Baseline Checklist</h2>
      <ul>
        <li>[ ] I can define an <code>interface</code> for a custom object</li>
        <li>[ ] I can type function parameters and return types</li>
        <li>[ ] I can explain why using <code>any</code> is bad practice</li>
        <li>[ ] I can use a Union type (<code>|</code>) to restrict allowed values</li>
        <li>[ ] I understand that TypeScript errors happen at compile-time, not runtime</li>
      </ul>
      <h2>Common Errors</h2>
      <table><thead><tr>
        <th>Error</th>
        <th>Cause</th>
        <th>Fix</th>
      </tr></thead><tbody>
      <tr>
        <td>"Property does not exist on type"</td>
        <td>Using undefined property</td>
        <td>Add it to the interface</td>
      </tr>
      <tr>
        <td>"Type 'undefined' is not assignable"</td>
        <td>Optional property without check</td>
        <td>Add <code>if</code> or <code>??</code> guard</td>
      </tr>
      <tr>
        <td>"Cannot find name"</td>
        <td>Missing import or typo</td>
        <td>Check spelling and imports</td>
      </tr></tbody></table>
    </div>
  )
}
