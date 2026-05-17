export default function E2W1ExerTranslationEngineHomework() {
  return (
    <div className="page-content">
      <h1>Take-Home Mission: "The Translation Engine"</h1>
      <p>
      <strong>Due:</strong> Next session
      <br /><strong>Format:</strong> Individual submission
      <br /><strong>Goal:</strong> Reinforce C# syntax by translating a familiar program.
      </p>
      
      <h2>Instructions</h2>
      
      <br />Take the classic <strong>"Bank Account"</strong> assignment from your previous programming course (VB.NET or otherwise). Rewrite the entire application in C#.
      
      
      <h3>The Catch</h3>
      
      <br />You <strong>must</strong> use:
      
      <ul>
        <li><code>var</code> for <strong>all</strong> local variable declarations</li>
        <li>String interpolation (<code>$"..."</code>) for <strong>all</strong> console output</li>
        <li>PascalCase for class and method names</li>
        <li>camelCase for local variables</li>
      
      </ul>
      
      <h3>What to Submit</h3>
      
      
      <ol>
        <li>A single <code>Program.cs</code> file with the complete translation.</li>
        <li>A brief comment at the top noting the original language you translated from.</li>
      
      </ol>
      
      <h3>Example Snippet</h3>
      
      
      <pre><code>// Translated from VB.NET Bank Account
      var accountHolder = "Juan";
      var balance = 1000.00m;
      Console.WriteLine($"Account holder: &#123;accountHolder&#125;, Balance: &#123;balance:C&#125;");</code></pre>
      
      
      <h3>Rubric</h3>
      
      
      <table><thead><tr>
        <th>Criteria</th>
        <th>Points</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>Correct C# syntax (semicolons, braces, case)</td>
        <td>40%</td>
      </tr>
      
      <tr>
        <td>Uses <code>var</code> for all local variables</td>
        <td>20%</td>
      </tr>
      
      <tr>
        <td>Uses string interpolation for all output</td>
        <td>20%</td>
      </tr>
      
      <tr>
        <td>Program runs without errors</td>
        <td>20%</td>
      </tr>
      </tbody></table>
    </div>
  )
}
