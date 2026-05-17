import{j as e}from"./index-u8WTylHP.js";function n(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"search-controller-solution.cs"}),e.jsx("span",{className:"code-lang",children:"CSHARP"})]}),e.jsx("pre",{className:"language-csharp",children:e.jsx("code",{className:"language-csharp",children:`// SearchController — Solution
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
`})})]})}export{n as default};
