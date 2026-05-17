export default function E2W9ExerDatabaseRegistrationHomework() {
  return (
    <div className="page-content">
      <h1>Take-Home Mission: "The Database Registration"</h1>
      <p>
      Connect Week 8's User Registration form to a real SQL Database.
      </p>
      
      <ol>
        <li>Create the Models, DbContext, and run the migrations.</li>
        <li>When the user submits the form, if <code>ModelState.IsValid</code>, save using <code>_db.Users.Add()</code>.</li>
        <li><strong>The Catch:</strong> Before saving, write a LINQ query to check if the Email already exists. If it does, return a validation error.</li>
      
      </ol>
    </div>
  )
}
