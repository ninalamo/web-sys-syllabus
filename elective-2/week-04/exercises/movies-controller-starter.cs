// Week 4 — Starter: MoviesController.cs
using Microsoft.AspNetCore.Mvc;
using MoviesApp.Models;

namespace MoviesApp.Controllers;

public class MoviesController : Controller
{
    public IActionResult Index()
    {
        var movies = new List<Movie>
        {
            new Movie { Title = "Inception", Year = 2010, Rating = 8.8 },
            new Movie { Title = "The Matrix", Year = 1999, Rating = 8.7 },
            new Movie { Title = "Parasite", Year = 2019, Rating = 8.5 }
        };
        return View(movies);
    }
}
