// Week 11 — Pokemon DTO and Controller

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
