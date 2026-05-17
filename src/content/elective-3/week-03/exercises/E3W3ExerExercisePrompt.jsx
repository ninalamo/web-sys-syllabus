export default function E3W3ExerExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 3: TypeScript Essentials — Exercises</h1>
      <h2>In-Class Exercise (55 min)</h2>
      <h3>Task: Convert JS Product Catalog to TypeScript</h3>
      <p>
      Convert a JavaScript product catalog to TypeScript with proper typing.
      </p>
      
      <h3>Starter Files</h3>
      
      
      <ul>
        <li><code>starter/catalog.js</code> — Untyped JS product catalog</li>
        <li><code>starter/tsconfig.json</code> — TypeScript configuration</li>
      
      </ul>
      
      <h3>Requirements</h3>
      
      
      <ol>
        <li>Create <code>Product</code> and <code>Category</code> interfaces</li>
        <li>Type all function parameters and return types</li>
        <li>Use a union type for <code>category</code> (e.g., <code>"electronics" | "furniture" | "clothing"</code>)</li>
        <li>Set up strict mode in <code>tsconfig.json</code></li>
        <li>Fix every red underline</li>
      
      </ol>
      
      <h3>Hints</h3>
      
      
      <ul>
        <li>Start by renaming <code>.js</code> to <code>.ts</code></li>
        <li>Let TypeScript infer where possible (don't over-type)</li>
        <li>Use <code>?</code> for optional properties</li>
        <li>Use <code>unknown</code> instead of <code>any</code> when type is uncertain</li>
      
      </ul>
      
      <h3>Stretch Goals</h3>
      
      
      <ul>
        <li>Create a generic <code>ApiResponse&lt;T&gt;</code> type</li>
        <li>Use a type guard to validate API responses</li>
        <li>Add readonly properties where appropriate</li>
      
      </ul>
    </div>
  )
}
