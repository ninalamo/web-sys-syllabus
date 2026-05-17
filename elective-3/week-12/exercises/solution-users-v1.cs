// Week 12: API Versioning — Solution (UsersV1Controller.cs)

using Microsoft.AspNetCore.Mvc;
using Asp.Versioning;

namespace VersionedApi.Controllers.V1;

[ApiVersion("1.0")]
[Route("api/v{version:apiVersion}/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    /// <summary>
    /// Retrieves a list of all users (v1 format).
    /// </summary>
    /// <returns>A list of user objects with name field.</returns>
    [HttpGet]
    public IActionResult GetAll()
    {
        // v1 returns flat name
        return Ok(new[] {
            new { id = 1, name = "John Doe" },
            new { id = 2, name = "Jane Smith" },
        });
    }

    /// <summary>
    /// Retrieves a specific user by their ID.
    /// </summary>
    /// <param name="id">The unique identifier of the user.</param>
    /// <returns>A single user object.</returns>
    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        return Ok(new { id = id, name = "John Doe" });
    }
}
