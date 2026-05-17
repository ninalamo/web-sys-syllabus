# HTTP HttpClient Starter

```csharp
using var client = new HttpClient();
var response = await client.GetAsync("https://api.github.com/users/octocat");
response.EnsureSuccessStatusCode();
var body = await response.Content.ReadAsStringAsync();
Console.WriteLine(body);
```
