export default function E3W12ExerSolutionUsersV2() {
  const code = `// Week 12: API Versioning — Solution (UsersV2Controller.cs)

using Microsoft.AspNetCore.Mvc;
using Asp.Versioning;

namespace VersionedApi.Controllers.V2;

[ApiVersion("2.0")]
[Route("api/v{version:apiVersion}/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    /// <summary>
    /// Retrieves a list of all users (v2 format with split name).
    /// </summary>
    /// <returns>A list of user objects with firstName and lastName fields.</returns>
    [HttpGet]
    public IActionResult GetAll()
    {
        // v2 returns split name — breaking change from v1
        return Ok(new[] {
            new { id = 1, firstName = "John", lastName = "Doe" },
            new { id = 2, firstName = "Jane", lastName = "Smith" },
        });
    }

    /// <summary>
    /// Retrieves a specific user by their ID (v2 format).
    /// </summary>
    /// <param name="id">The unique identifier of the user.</param>
    /// <returns>A single user object with firstName and lastName.</returns>
    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        return Ok(new { id = id, firstName = "John", lastName = "Doe" });
    }
}
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">solution-users-v2.cs</span>
        <span className="code-lang">CSHARP</span>
      </div>
      <pre className="language-csharp"><code className="language-csharp">{code}</code></pre>
    </div>
  )
}
