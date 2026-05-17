// BlogController — Solution
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
