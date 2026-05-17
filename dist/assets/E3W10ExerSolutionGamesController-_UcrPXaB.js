import{j as e}from"./index-Dh6XhhbZ.js";function i(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"solution-games-controller.cs"}),e.jsx("span",{className:"code-lang",children:"CSHARP"})]}),e.jsx("pre",{className:"language-csharp",children:e.jsx("code",{className:"language-csharp",children:`// Week 10: Video Games API — Solution (GamesController.cs)

using Microsoft.AspNetCore.Mvc;

namespace VideoGamesApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GamesController : ControllerBase
{
    private static readonly List<Game> Games = new()
    {
        new Game { Id = 1, Title = "The Legend of Zelda", Genre = "Adventure", Price = 59.99m },
        new Game { Id = 2, Title = "Mario Kart", Genre = "Racing", Price = 49.99m },
    };
    private static int _nextId = 3;

    [HttpGet]
    public IActionResult GetAll() => Ok(Games);

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var game = Games.FirstOrDefault(g => g.Id == id);
        if (game is null) return NotFound();
        return Ok(game);
    }

    [HttpPost]
    public IActionResult Create(Game game)
    {
        game.Id = _nextId++;
        Games.Add(game);
        return CreatedAtAction(nameof(GetById), new { id = game.Id }, game);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Game updated)
    {
        var game = Games.FirstOrDefault(g => g.Id == id);
        if (game is null) return NotFound();
        game.Title = updated.Title;
        game.Genre = updated.Genre;
        game.Price = updated.Price;
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var game = Games.FirstOrDefault(g => g.Id == id);
        if (game is null) return NotFound();
        Games.Remove(game);
        return NoContent();
    }
}

public class Game
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Genre { get; set; } = string.Empty;
    public decimal Price { get; set; }
}
`})})]})}export{i as default};
