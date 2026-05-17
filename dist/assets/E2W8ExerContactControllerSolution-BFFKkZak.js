import{j as e}from"./index-ChWpJeR-.js";function s(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"contact-controller-solution.cs"}),e.jsx("span",{className:"code-lang",children:"CSHARP"})]}),e.jsx("pre",{className:"language-csharp",children:e.jsx("code",{className:"language-csharp",children:`// ContactController — Solution
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
`})})]})}export{s as default};
