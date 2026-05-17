export default function E3W14ExerSolutionUnitTests() {
  const code = `// Week 14: Unit Tests — Solution (ServiceTests.cs)

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
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">solution-unit-tests.cs</span>
        <span className="code-lang">CSHARP</span>
      </div>
      <pre className="language-csharp"><code className="language-csharp">{code}</code></pre>
    </div>
  )
}
