import{j as e}from"./index-ChWpJeR-.js";function a(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"movies-controller-starter.cs"}),e.jsx("span",{className:"code-lang",children:"CSHARP"})]}),e.jsx("pre",{className:"language-csharp",children:e.jsx("code",{className:"language-csharp",children:`// Week 4 — Starter: MoviesController.cs
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
`})})]})}export{a as default};
