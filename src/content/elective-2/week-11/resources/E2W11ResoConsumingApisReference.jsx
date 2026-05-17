export default function E2W11ResoConsumingApisReference() {
  return (
    <div className="page-content">
      <h1>Week 11: Consuming APIs Reference</h1>
      <h2>IHttpClientFactory</h2>
      <pre><code>// Program.cs
      builder.Services.AddHttpClient();
      
      // Controller
      public class MyController : Controller
      &#123;
      private readonly HttpClient _client;
      public MyController(IHttpClientFactory factory)
      &#123;
      _client = factory.CreateClient();
      &#125;
      &#125;</code></pre>
      <h2>JSON Deserialization</h2>
      <pre><code>var json = await response.Content.ReadAsStringAsync();
      var user = JsonSerializer.Deserialize&lt;ApiUser&gt;(json,
      new JsonSerializerOptions &#123; PropertyNameCaseInsensitive = true &#125;);</code></pre>
      <h2>Async/Await in Controllers</h2>
      <pre><code>public async Task&lt;IActionResult&gt; FetchData()
      &#123;
      var res = await _client.GetAsync("https://api.com/data");
      res.EnsureSuccessStatusCode();
      var data = await res.Content.ReadAsStringAsync();
      return View(model);
      &#125;</code></pre>
      <h2>DTOs (Data Transfer Objects)</h2>
      <pre><code>public class JokeDto
      &#123;
      public string Value &#123; get; set; &#125;
      &#125;</code></pre>
      <h2>Error Handling</h2>
      <pre><code>try
      &#123;
      var response = await _client.GetAsync(url);
      response.EnsureSuccessStatusCode();
      // ...
      &#125;
      catch (HttpRequestException ex)
      &#123;
      ViewBag.Error = "API temporarily unavailable.";
      return View("Error");
      &#125;</code></pre>
    </div>
  )
}
