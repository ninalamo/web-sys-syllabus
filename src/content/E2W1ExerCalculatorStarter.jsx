export default function E2W1ExerCalculatorStarter() {
  const code = `// Calculator — Starter
// TODO: Build a console calculator that:
// 1. Prompts for two numbers
// 2. Prompts for an operation (+, -, *, /)
// 3. Performs the calculation and shows the result
// 4. Loops until user types "exit"

while (true)
{
    Console.Write("Enter first number (or 'exit' to quit): ");
    string input = Console.ReadLine();
    if (input.ToLower() == "exit") break;

    // Your code here
}
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">calculator-starter.cs</span>
        <span className="code-lang">CSHARP</span>
      </div>
      <pre className="language-csharp"><code className="language-csharp">{code}</code></pre>
    </div>
  )
}
