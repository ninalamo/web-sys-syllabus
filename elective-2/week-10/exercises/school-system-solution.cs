// Week 10 — Model & ViewModel examples

// Course.cs
public class Course
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Code { get; set; }
    public List<Student> Students { get; set; } = new();
}

// Student.cs
public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public int CourseId { get; set; }
    public Course Course { get; set; }
}

// CourseDetailsViewModel.cs
public class CourseDetailsViewModel
{
    public string CourseName { get; set; }
    public string CourseCode { get; set; }
    public List<Student> Students { get; set; }
}

// Controller usage
public IActionResult Details(int id)
{
    var course = _db.Courses
        .Include(c => c.Students)
        .FirstOrDefault(c => c.Id == id);

    if (course == null) return NotFound();

    var vm = new CourseDetailsViewModel
    {
        CourseName = course.Name,
        CourseCode = course.Code,
        Students = course.Students
    };
    return View(vm);
}
