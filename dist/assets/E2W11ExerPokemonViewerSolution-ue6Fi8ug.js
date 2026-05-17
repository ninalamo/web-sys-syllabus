import{j as e}from"./index-u8WTylHP.js";function t(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"pokemon-viewer-solution.cs"}),e.jsx("span",{className:"code-lang",children:"CSHARP"})]}),e.jsx("pre",{className:"language-csharp",children:e.jsx("code",{className:"language-csharp",children:`// Week 11 — Pokemon DTO and Controller

// PokemonDto.cs
public class PokemonDto
{
    public string Name { get; set; }
    public int Weight { get; set; }
}

// PokemonController.cs
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

public class PokemonController : Controller
{
    private readonly HttpClient _httpClient;

    public PokemonController(IHttpClientFactory factory)
    {
        _httpClient = factory.CreateClient();
    }

    public IActionResult Index()
    {
        return View();
    }

    [HttpPost]
    public async Task<IActionResult> Index(int id)
    {
        try
        {
            var response = await _httpClient.GetAsync($"https://pokeapi.co/api/v2/pokemon/{id}");
            response.EnsureSuccessStatusCode();
            var json = await response.Content.ReadAsStringAsync();
            var pokemon = JsonSerializer.Deserialize<PokemonDto>(json,
                new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
            return View("Result", pokemon);
        }
        catch
        {
            ViewBag.Error = "Pokemon not found!";
            return View("Index");
        }
    }
}
`})})]})}export{t as default};
