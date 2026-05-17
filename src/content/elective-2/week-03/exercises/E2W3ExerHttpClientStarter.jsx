export default function E2W3ExerHttpClientStarter() {
  const code = `# HTTP HttpClient Starter

\`\`\`csharp
using var client = new HttpClient();
var response = await client.GetAsync("https://api.github.com/users/octocat");
response.EnsureSuccessStatusCode();
var body = await response.Content.ReadAsStringAsync();
Console.WriteLine(body);
\`\`\`
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">http-client-starter.cs</span>
        <span className="code-lang">CSHARP</span>
      </div>
      <pre className="language-csharp"><code className="language-csharp">{code}</code></pre>
    </div>
  )
}
