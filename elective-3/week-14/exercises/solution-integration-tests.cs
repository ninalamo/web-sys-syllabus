// Week 14: Integration Tests — Solution (ApiTests.cs)

using Microsoft.AspNetCore.Mvc.Testing;
using System.Net.Http.Json;
using Xunit;

namespace BlogApi.Tests;

public class ApiTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public ApiTests(WebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task GetPosts_ReturnsOkWithList()
    {
        // Act
        var response = await _client.GetAsync("/api/posts");

        // Assert
        response.EnsureSuccessStatusCode();
        var posts = await response.Content.ReadFromJsonAsync<List<Post>>();
        Assert.NotNull(posts);
    }

    [Fact]
    public async Task CreatePost_ValidData_ReturnsCreated()
    {
        // Act
        var response = await _client.PostAsJsonAsync("/api/posts",
            new { title = "Test Post", content = "Hello World" });

        // Assert
        Assert.Equal(System.Net.HttpStatusCode.Created, response.StatusCode);
        var post = await response.Content.ReadFromJsonAsync<Post>();
        Assert.Equal("Test Post", post.Title);
    }

    [Fact]
    public async Task GetPost_NonExistentId_ReturnsNotFound()
    {
        // Act
        var response = await _client.GetAsync("/api/posts/999");

        // Assert
        Assert.Equal(System.Net.HttpStatusCode.NotFound, response.StatusCode);
    }
}
