export default function E2W1ExerStudentManagerStarter() {
  const code = `// Student Manager — Starter
// TODO: Define a Student class, create a list, display with foreach, average grade.

// Step 1: Define the Student class here



// Step 2: Main program
var students = new List<Student>();

// Add at least 3 students


// Display all students using foreach


// Calculate and display average grade
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">student-manager-starter.cs</span>
        <span className="code-lang">CSHARP</span>
      </div>
      <pre className="language-csharp"><code className="language-csharp">{code}</code></pre>
    </div>
  )
}
