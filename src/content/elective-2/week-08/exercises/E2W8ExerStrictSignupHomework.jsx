export default function E2W8ExerStrictSignupHomework() {
  return (
    <div className="page-content">
      <h1>Take-Home Mission: "The Strict Sign-Up"</h1>
      <ol>
        <li>Create a User Registration form.</li>
        <li>Model: Username, Password, ConfirmPassword, Age.</li>
        <li><strong>The Catch:</strong> Use the <code>[Compare("Password")]</code> annotation to ensure ConfirmPassword matches. Create a custom validation rule (or use Regex annotation) to ensure the Password contains at least one uppercase letter and one number.</li>
      </ol>
    </div>
  )
}
