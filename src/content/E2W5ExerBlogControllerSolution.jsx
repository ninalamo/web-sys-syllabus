export default function E2W5ExerBlogControllerSolution() {
  const code = `// BlogController — Solution
using Microsoft.AspNetCore.Mvc;

[Route("blog")]
public class BlogController : Controller
{
    [HttpGet("")]
    public IActionResult Index()
    {
        return Content("Blog Home");
    }

    [HttpGet("{year:int:length(4)}/{month:int:range(1,12)}")]
    public IActionResult Archive(int year, int month)
    {
        return Content($"Archive: {year}/{month}");
    }

    [HttpGet("post/{slug}")]
    public IActionResult Post(string slug)
    {
        return Content($"Post: {slug}");
    }
}
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">blog-controller-solution.cs</span>
        <span className="code-lang">CSHARP</span>
      </div>
      <pre className="language-csharp"><code className="language-csharp">{code}</code></pre>
    </div>
  )
}
