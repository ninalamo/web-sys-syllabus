import{j as e}from"./index-u8WTylHP.js";function s(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"blog-controller-starter.cs"}),e.jsx("span",{className:"code-lang",children:"CSHARP"})]}),e.jsx("pre",{className:"language-csharp",children:e.jsx("code",{className:"language-csharp",children:`// BlogController — Starter
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
`})})]})}export{s as default};
