export default function E2W6ExerSearchControllerSolution() {
  const code = `// SearchController — Solution
using Microsoft.AspNetCore.Mvc;

public class SearchController : Controller
{
    public IActionResult Index(string query)
    {
        if (string.IsNullOrWhiteSpace(query))
            return BadRequest("Query cannot be empty.");

        if (query.Equals("Google", StringComparison.OrdinalIgnoreCase))
            return Redirect("https://google.com");

        if (query.Equals("Secret", StringComparison.OrdinalIgnoreCase))
            return Json(new { message = "You found the secret!", data = "HiddenValue123" });

        ViewBag.Query = query;
        return View();
    }
}
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">search-controller-solution.cs</span>
        <span className="code-lang">CSHARP</span>
      </div>
      <pre className="language-csharp"><code className="language-csharp">{code}</code></pre>
    </div>
  )
}
