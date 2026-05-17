import{j as e}from"./index-6VvVNkbu.js";function t(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"student-manager-solution.cs"}),e.jsx("span",{className:"code-lang",children:"CSHARP"})]}),e.jsx("pre",{className:"language-csharp",children:e.jsx("code",{className:"language-csharp",children:`// Student Manager — Solution
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
`})})]})}export{t as default};
