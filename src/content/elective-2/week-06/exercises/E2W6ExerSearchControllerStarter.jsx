export default function E2W6ExerSearchControllerStarter() {
  const code = `// SearchController — Starter
using Microsoft.AspNetCore.Mvc;

public class SearchController : Controller
{
    public IActionResult Index(string query)
    {
        // TODO: If query is empty, return BadRequest()
        // TODO: If query is "Google", redirect to https://google.com
        // TODO: If query is "Secret", return Json with hidden data
        // TODO: Otherwise, pass query to View()
    }
}
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">search-controller-starter.cs</span>
        <span className="code-lang">CSHARP</span>
      </div>
      <pre className="language-csharp"><code className="language-csharp">{code}</code></pre>
    </div>
  )
}
