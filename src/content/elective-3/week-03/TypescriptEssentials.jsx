export default function TypescriptEssentials() {
  return (
    <div className="page-content">
      <h2>Week 3: TypeScript Essentials</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 2: Async JavaScript Deep-Dive"<br />
        🎯 This week: "Add a safety net — TypeScript brings type-checking to catch bugs before runtime"<br />
        <br />
        <strong>LAB (3h) Topics:</strong><br />
        ▸ A. Inference vs Explicit Types (7 min)<br />
        ▸ B. Interfaces (Defining Objects) (7 min)<br />
        ▸ C. Union Types &amp; Optional Properties (6 min)<br />
        ▸ D. The Danger of `any` (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality + AI Integration + Take-Home Mission (The Strict Mode Migration)<br />
        <br />
        ✅ By end of lab: Define an `interface`; type function parameters; explain why `any` is bad; use Union types
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
            <td>Lecture + Slides + Type Comparison</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (progressive typing)</td>
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
        <p>[TIP] <strong>Teaching Tip:</strong> TypeScript feels like extra work to students used to JS freedom. Frame it as "free bug detection" not "extra rules." Use progressive typing (JS -&gt; add types step by step).</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "TypeScript is what stops you from pushing a bug to production where a user's age is <code>undefined</code> and your app crashes trying to calculate their birth year. It catches the crash before you even run the code."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> </p>
        <ul>
          <li><strong>JavaScript:</strong> Writing an essay without spellcheck. You only find mistakes when someone reads it and points them out.</li>
          <li><strong>TypeScript:</strong> Writing with autocorrect and grammar check. It puts red squiggly lines under your mistakes <em>as you type</em>.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. Inference vs Explicit Types (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "You don't have to type every single thing. TypeScript is smart. If you assign a string to a variable, it infers it is a string forever."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-typescript">let name = "Alice"; // TS infers this is a string
        name = 42; // ERROR: Type 'number' is not assignable to type 'string'
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Tell students not to over-type. <code>let age: number = 25;</code> is redundant. Just let TS infer it.</p>
      </blockquote>
      <h4>▸ B. Interfaces (Defining Objects) (7 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "If a function expects a 'User', how does it know what a 'User' looks like? We define an Interface to act as a blueprint for our objects."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-typescript">interface User &#123;
        id: number;
        name: string;
        isAdmin: boolean;
        &#125;
      </code></pre>
      <p><strong>[TIP] Gen-Z Hook:</strong> An interface is like a bouncer checking IDs. If the object doesn't match the required shape, it's not getting into the function.</p>
      </blockquote>
      <h4>▸ C. Union Types &amp; Optional Properties (6 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "What if an ID can be a number OR a string? What if a user doesn't have a middle name? TypeScript handles flexibility safely."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-typescript">interface User &#123;
        id: number | string; // Union (OR)
        middleName?: string; // Optional (Notice the ?)
        &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Warn them that optional properties are dangerous because they can be <code>undefined</code>. They must check for existence before using them.</p>
      </blockquote>
      <h4>▸ D. The Danger of <code>any</code> (5 min)</h4>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "The word <code>any</code> tells the compiler 'Turn off all checks for this variable.' It defeats the entire purpose of using TypeScript."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-typescript">let data: any = "Hello";
        data.explode(); // TS allows this, but it will crash at runtime!
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Explain that if they don't know the type, use <code>unknown</code> instead. <code>unknown</code> forces you to check the type before acting on it.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's take a broken JavaScript function and add TypeScript progressively to see how it catches our bugs."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The Untyped Disaster</strong><ul>
        <li><em>Action:</em> Write a JS function <code>calculateDiscount(price, discount)</code> and pass it <code>"100"</code> and <code>true</code>. Show the <code>NaN</code> result.</li>
      </ul>
      </li>
      <li><strong>Step 2: Adding Primitives</strong><ul>
      <li><em>Action:</em> Add <code>: number</code> to parameters. Watch the editor immediately flag the bad string/boolean inputs with red squigglies.</li>
      </ul>
      </li>
      <li><strong>Step 3: Creating an Interface</strong><ul>
      <li><em>Action:</em> Create a <code>Product</code> interface. Write a function that expects a <code>Product</code>. Pass it an object missing a required property like <code>price</code>. Watch TS complain.</li>
      </ul>
      </li>
      <li><strong>Step 4: API Responses</strong><ul>
      <li><em>Action:</em> Show how to type the response of a <code>fetch</code> call using generics or casting: <code>const data = await response.json() as Product[];</code></li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. Debugging + Wrap</h3>
      <ul>
        <li><strong>Common Error 1:</strong> "Property does not exist on type." -&gt; You are trying to use a property you haven't defined in the interface.</li>
        <li><strong>Common Error 2:</strong> "Type 'undefined' is not assignable to type 'X'." -&gt; You used an optional property <code>?</code> or an array <code>.find()</code>, and didn't write an <code>if</code> statement to handle the scenario where the item doesn't exist.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 5. In-Class Exercise</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Convert a JS product catalog to TS. Create <code>Product</code> interfaces, type all function parameters, use a union type for <code>category</code>, and set up strict mode.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <h3>From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "When you start your first job, you will be handed a massive, messy codebase. If it's written in JavaScript, you'll be terrified to change anything because you won't know what breaks. If it's written in TypeScript, you can refactor confidently because the compiler acts as a safety net. 38% of all runtime bugs in production are completely eliminated just by adding TypeScript. It's not a suggestion anymore; it's a mandatory industry skill."</p>
      </blockquote>
      <h3>AI Integration</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "Add TypeScript types to this JS code." Not Allowed: "Define my business domain types for me."</li>
      </ul>
      <h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I can define an <code>interface</code> for a custom object.</li>
          <li><input disabled="" type="checkbox" /> I can type function parameters and return types.</li>
          <li><input disabled="" type="checkbox" /> I can explain why using <code>any</code> is bad practice.</li>
          <li><input disabled="" type="checkbox" /> I can use a Union type (<code>|</code>) to restrict allowed values.</li>
          <li><input disabled="" type="checkbox" /> I understand that TypeScript errors happen at compile-time, not runtime.</li>
        </ul>
      </blockquote>
      <h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Strict Mode Migration"
        Take the Async JS "Pokedex" fetcher from last week's homework.</p>
        <ol>
          <li>Rename the files from <code>.js</code> to <code>.ts</code>.</li>
          <li>Define a <code>Pokemon</code> interface based on the PokeAPI JSON response.</li>
          <li><strong>The Catch:</strong> You must turn on <code>"strict": true</code> in the <code>tsconfig.json</code>. You cannot use the word <code>any</code> anywhere in your code. Fix every single red underline.</li>
        </ol>
      </blockquote>
      <h3>Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> A vanilla JS script with multiple subtle typing bugs (like concatenating a number and string by accident).</li>
          <li><strong>Solution Repo:</strong> The TS version with interfaces, strict mode enabled, and proper API response casting.</li>
        </ul>
      </blockquote>
    </div>
  )
}
