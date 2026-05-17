export default function E2W5ExerBlogControllerStarter() {
  const code = `// BlogController — Starter
using Microsoft.AspNetCore.Mvc;

[Route("blog")]
public class BlogController : Controller
{
    [HttpGet("")]
    public IActionResult Index()
    {
        return Content("Blog Home");
    }

    // TODO: Add route for /blog/{year}/{month}
    // Constrain year to 4 digits, month to 1-12

    // TODO: Add route for /blog/post/{slug}
}
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">blog-controller-starter.cs</span>
        <span className="code-lang">CSHARP</span>
      </div>
      <pre className="language-csharp"><code className="language-csharp">{code}</code></pre>
    </div>
  )
}
