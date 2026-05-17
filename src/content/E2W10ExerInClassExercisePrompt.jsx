export default function E2W10ExerInClassExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 10 — In-Class Exercise: School System</h1>
      <p>
      <strong>Duration:</strong> 55 minutes
      </p>
      
      <h2>Exercise: Course-Student Relationship</h2>
      
      <br />Build a "School System" with 1-to-many relationship:
      
      
      <ol>
        <li>Create <code>Course</code> model (Id, Name, Code) and <code>Student</code> model (Id, Name, Email, CourseId)</li>
        <li><code>Course</code> has a <code>List&lt;Student&gt;</code> navigation property</li>
        <li><code>Student</code> has a <code>Course</code> navigation property and foreign key</li>
        <li>Create a ViewModel: <code>CourseDetailsViewModel</code> with Course info + list of Students</li>
        <li>Write a page that displays the Course name and a list of all enrolled Students</li>
      
      </ol>
      <br /><strong>Requirements:</strong>
      
      <ul>
        <li>Use <code>.Include()</code> to eagerly load students</li>
        <li>Check for null before looping in Razor</li>
        <li>Use a ViewModel (not the raw entity)</li>
      
      </ul>
    </div>
  )
}
