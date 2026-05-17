export default function E2W13ExerInClassExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 13 — In-Class Exercise: App with Login Gate</h1>
      <p>
      <strong>Duration:</strong> 55 minutes
      </p>
      
      <h2>Exercise: Add Identity to an Existing Project</h2>
      
      <br />Take any previous project and add ASP.NET Core Identity:
      
      
      <ol>
        <li>Add ASP.NET Core Identity packages</li>
        <li>Update DbContext to inherit from <code>IdentityDbContext</code></li>
        <li>Register Identity in Program.cs (<code>UseAuthentication()</code> before <code>UseAuthorization()</code>!)</li>
        <li>Scaffold Identity pages</li>
        <li>Add <code>[Authorize]</code> to at least one controller</li>
        <li>Show <code>@User.Identity.Name</code> in the navbar</li>
        <li>Add a Logout button</li>
      
      </ol>
      <br /><strong>Bonus:</strong> Create an "Admin" role and restrict one action to that role using <code>[Authorize(Roles = "Admin")]</code>.
      
    </div>
  )
}
