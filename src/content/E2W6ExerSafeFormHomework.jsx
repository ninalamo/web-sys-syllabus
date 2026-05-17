export default function E2W6ExerSafeFormHomework() {
  return (
    <div className="page-content">
      <h1>Take-Home Mission: "The Safe Form Submission"</h1>
      <p>
      Build a basic HTML form that POSTs to a <code>ContactController</code>.
      </p>
      
      <ol>
        <li>If the message is empty, return a <code>BadRequest</code>.</li>
        <li>If the message is valid, pretend to save it, and implement the <strong>PRG Pattern</strong> (Post-Redirect-Get) to redirect to a "Success" action.</li>
        <li><strong>The Catch:</strong> The "Success" action must return a <code>View</code> that says "Thank you!", and hitting refresh on that page should NOT trigger the form resubmission warning.</li>
      
      </ol>
    </div>
  )
}
