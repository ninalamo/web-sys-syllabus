// ContactController — Solution
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
