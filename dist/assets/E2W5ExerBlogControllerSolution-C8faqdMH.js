import{j as e}from"./index-6VvVNkbu.js";function n(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"blog-controller-solution.cs"}),e.jsx("span",{className:"code-lang",children:"CSHARP"})]}),e.jsx("pre",{className:"language-csharp",children:e.jsx("code",{className:"language-csharp",children:`// BlogController — Solution
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
`})})]})}export{n as default};
