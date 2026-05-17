// BlogController — Starter
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
