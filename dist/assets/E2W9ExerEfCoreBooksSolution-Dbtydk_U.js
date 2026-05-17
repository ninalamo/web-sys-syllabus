import{j as e}from"./index-u8WTylHP.js";function t(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"ef-core-books-solution.cs"}),e.jsx("span",{className:"code-lang",children:"CSHARP"})]}),e.jsx("pre",{className:"language-csharp",children:e.jsx("code",{className:"language-csharp",children:`// Week 9 — Solution files
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
`})})]})}export{t as default};
