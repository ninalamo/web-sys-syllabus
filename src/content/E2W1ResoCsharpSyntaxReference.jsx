export default function E2W1ResoCsharpSyntaxReference() {
  return (
    <div className="page-content">
      <h1>Week 1: C# Syntax Reference</h1>
      <h2>1. Case Sensitivity</h2>
      <p>
      C# is <strong>strictly case-sensitive</strong>. <code>Console</code>, <code>console</code>, and <code>CONSOLE</code> are three different identifiers.
      </p>
      
      <table><thead><tr>
        <th>Convention</th>
        <th>Used For</th>
        <th>Example</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td><strong>PascalCase</strong></td>
        <td>Classes, Methods, Properties</td>
        <td><code>WriteLine</code>, <code>StudentManager</code></td>
      </tr>
      
      <tr>
        <td><strong>camelCase</strong></td>
        <td>Local variables, parameters</td>
        <td><code>firstName</code>, <code>studentAge</code></td>
      </tr>
      
      <br />Common error: <code>CS0103 — The name does not exist in the current context</code> (usually a casing mistake).
      
      
      <hr />
      
      
      <h2>2. Semicolons &amp; Statements</h2>
      
      <br />Every statement in C# <strong>must</strong> end with a semicolon <code>;</code>.
      
      
      <pre><code>var name = "Alice";  // Correct
      var age = 25         // ERROR: CS1002 — ; expected</code></pre>
      
      <br /><strong>Tip:</strong> Whitespace, line breaks, and tabs are ignored by the compiler. The semicolon is what ends a statement.
      
      
      <hr />
      
      
      <h2>3. Console App Anatomy</h2>
      
      <br />A C# console application consists of:
      
      
      <table><thead><tr>
        <th>File</th>
        <th>Purpose</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td><code>MyApp.csproj</code></td>
        <td>Project file — SDK, target framework, dependencies</td>
      </tr>
      
      <tr>
        <td><code>Program.cs</code></td>
        <td>Source code — uses top-level statements in modern .NET</td>
      </tr>
      
      
      <h3>Key I/O Methods</h3>
      
      
      <pre><code>Console.WriteLine("Hello");   // Prints + newline
      Console.Write("Hello");       // Prints without newline
      string input = Console.ReadLine();  // Reads a line as string</code></pre>
      
      
      <h3>Build-Run Cycle</h3>
      
      
      <pre><code>dotnet build    # Compile only
      dotnet run      # Build + execute</code></pre>
      
      
      <hr />
      
      
      <h2>4. Curly Braces &amp; Code Blocks</h2>
      
      <br />Curly braces <code>&#123;&#125;</code> define code blocks for classes, methods, loops, and conditionals.
      
      
      <pre><code>if (age &gt;= 18)
      &#123;
      Console.WriteLine("Adult");
      &#125;</code></pre>
      
      <br /><strong>Always format with</strong> <code>Shift + Alt + F</code> (VS Code) to keep braces aligned.
      
      
      <hr />
      
      
      <h2>5. String Interpolation</h2>
      
      <br />Use <code>$"..."</code> to embed variables directly in strings:
      
      
      <pre><code>var name = "Alice";
      Console.WriteLine($"Hello, &#123;name&#125;!");</code></pre>
      
      
      <hr />
      
      
      <h2>6. Common Errors</h2>
      
      
      <table><thead><tr>
        <th>Error</th>
        <th>Meaning</th>
        <th>Fix</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td><code>CS1002</code></td>
        <td>Missing semicolon</td>
        <td>Add <code>;</code> at end of statement</td>
      </tr>
      
      <tr>
        <td><code>CS0103</code></td>
        <td>Name doesn't exist</td>
        <td>Check capitalization</td>
      </tr>
      
      <tr>
        <td><code>CS1519</code></td>
        <td>Invalid token in class/struct/interface</td>
        <td>Check brace matching</td>
      </tr>
      </tbody></table></tbody></table></tbody></table>
    </div>
  )
}
