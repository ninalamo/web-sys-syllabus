export default function E2W9ExerEfCoreBooksSolution() {
  const code = `// Week 9 — Solution files
// Book.cs
public class Book
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Author { get; set; }
    public int YearPublished { get; set; }
}

// AppDbContext.cs
using Microsoft.EntityFrameworkCore;
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<Book> Books { get; set; }
}

// Program.cs registration
// builder.Services.AddDbContext<AppDbContext>(options =>
//     options.UseInMemoryDatabase("BookDb"));

// BooksController.cs
public class BooksController : Controller
{
    private readonly AppDbContext _db;
    public BooksController(AppDbContext db) { _db = db; }

    public IActionResult Index()
    {
        var recentBooks = _db.Books.Where(b => b.YearPublished > 2000).ToList();
        return View(recentBooks);
    }
}
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">ef-core-books-solution.cs</span>
        <span className="code-lang">CSHARP</span>
      </div>
      <pre className="language-csharp"><code className="language-csharp">{code}</code></pre>
    </div>
  )
}
