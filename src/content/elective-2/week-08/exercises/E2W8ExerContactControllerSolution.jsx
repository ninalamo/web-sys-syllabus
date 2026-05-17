export default function E2W8ExerContactControllerSolution() {
  const code = `// ContactController — Solution
using Microsoft.AspNetCore.Mvc;

public class ContactController : Controller
{
    [HttpGet]
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Index(ContactMessage model)
    {
        if (!ModelState.IsValid)
        {
            return View(model); // Return form with validation errors
        }

        // Pretend to save...
        TempData["Success"] = "Thank you for your message!";
        return RedirectToAction("Index");
    }
}
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">contact-controller-solution.cs</span>
        <span className="code-lang">CSHARP</span>
      </div>
      <pre className="language-csharp"><code className="language-csharp">{code}</code></pre>
    </div>
  )
}
