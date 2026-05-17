export default function E2W7ExerInClassExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 7 — In-Class Exercise: Storefront</h1>
      <p>
      <strong>Duration:</strong> 55 minutes
      </p>
      
      <h2>Exercise: Storefront with Layout &amp; Partials</h2>
      
      <br />Build a "Storefront" app:
      
      
      <ol>
        <li>Create a master Layout with a header (logo, nav) and footer.</li>
        <li>Create a list of dummy products in the controller.</li>
        <li>Build a Partial View called <code>_ProductTile.cshtml</code> that renders an image (placeholder), title, and price.</li>
        <li>Use a <code>foreach</code> loop on the Index page to render the partial for each product.</li>
      
      </ol>
      <br /><strong>Requirements:</strong>
      
      <ul>
        <li>Layout must have <code>@RenderBody()</code></li>
        <li>Partial view must be in <code>Views/Shared/</code></li>
        <li>Use <code>@model</code> directive in the partial</li>
        <li>Use <code>&lt;partial name="..."&gt;</code> tag helper</li>
      
      </ul>
    </div>
  )
}
