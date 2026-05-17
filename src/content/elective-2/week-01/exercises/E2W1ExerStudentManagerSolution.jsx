export default function E2W1ExerStudentManagerSolution() {
  const code = `// Student Manager — Solution
// Step 1: Define the Student class
public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
    public double Grade { get; set; }
}

// Step 2: Main program
var students = new List<Student>
{
    new Student { Name = "Alice", Age = 20, Grade = 92.5 },
    new Student { Name = "Bob", Age = 22, Grade = 85.0 },
    new Student { Name = "Charlie", Age = 21, Grade = 78.3 }
};

Console.WriteLine("Student List:");
foreach (var s in students)
{
    Console.WriteLine($"{s.Name}, Age: {s.Age}, Grade: {s.Grade}");
}

var avgGrade = students.Average(s => s.Grade);
Console.WriteLine($"\\nAverage Grade: {avgGrade:F2}");
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">student-manager-solution.cs</span>
        <span className="code-lang">CSHARP</span>
      </div>
      <pre className="language-csharp"><code className="language-csharp">{code}</code></pre>
    </div>
  )
}
