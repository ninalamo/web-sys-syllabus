export default function E2W8ExerInClassExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 8 — In-Class Exercise: Contact Us Form</h1>
      <p>
      <strong>Duration:</strong> 55 minutes
      </p>
      
      <h2>Exercise: Contact Form with Validation</h2>
      
      <br />Build a "Contact Us" form with full model binding and validation:
      
      
      <ol>
        <li>Create a <code>ContactMessage</code> class with properties: Name, Email, Message</li>
        <li>Add Data Annotations: <code>[Required]</code> on Name, <code>[Required, EmailAddress]</code> on Email, <code>[Required, MinLength(20)]</code> on Message</li>
        <li>Create a Razor view with the form using Tag Helpers</li>
        <li>Create a controller with <code>[HttpPost]</code> that checks <code>ModelState.IsValid</code></li>
        <li>Display validation errors using <code>asp-validation-for</code></li>
      
      </ol>
      <br /><strong>Requirements:</strong>
      
      <ul>
        <li>HTML <code>name</code> attributes must match C# property names</li>
        <li>Use <code>asp-for</code> and <code>asp-validation-for</code> tag helpers</li>
        <li>Return the model back to the view when validation fails</li>
      
      </ul>
    </div>
  )
}
