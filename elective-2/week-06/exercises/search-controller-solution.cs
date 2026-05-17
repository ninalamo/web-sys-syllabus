// SearchController — Solution
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
