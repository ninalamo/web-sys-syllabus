import{j as e}from"./index-ChWpJeR-.js";function r(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"solution-unit-tests.cs"}),e.jsx("span",{className:"code-lang",children:"CSHARP"})]}),e.jsx("pre",{className:"language-csharp",children:e.jsx("code",{className:"language-csharp",children:`// Week 14: Unit Tests — Solution (ServiceTests.cs)

using Xunit;

namespace BlogApi.Tests;

public class PostServiceTests
{
    [Fact]
    public void CreatePost_ValidRequest_ReturnsPost()
    {
        // Arrange
        var service = new PostService();
        var request = new CreatePostRequest { Title = "Test Post", Content = "Hello" };

        // Act
        var result = service.CreateAsync(request);

        // Assert
        Assert.Equal("Test Post", result.Title);
        Assert.NotNull(result.Id);
    }

    [Theory]
    [InlineData("")]
    [InlineData("   ")]
    [InlineData(null)]
    public void CreatePost_EmptyTitle_ThrowsArgumentException(string title)
    {
        // Arrange
        var service = new PostService();
        var request = new CreatePostRequest { Title = title, Content = "Hello" };

        // Act & Assert
        var ex = Assert.Throws<ArgumentException>(() => service.CreateAsync(request));
        Assert.Contains("title", ex.Message);
    }

    [Fact]
    public void GetPost_ExistingId_ReturnsPost()
    {
        // Arrange
        var service = new PostService();
        var post = service.CreateAsync(new CreatePostRequest { Title = "Test", Content = "Content" });

        // Act
        var result = service.GetByIdAsync(post.Id);

        // Assert
        Assert.NotNull(result);
        Assert.Equal("Test", result.Title);
    }

    [Fact]
    public void GetPost_NonExistentId_ReturnsNull()
    {
        // Arrange
        var service = new PostService();

        // Act
        var result = service.GetByIdAsync(999);

        // Assert
        Assert.Null(result);
    }
}
`})})]})}export{r as default};
