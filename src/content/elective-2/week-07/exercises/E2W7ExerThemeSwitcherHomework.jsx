export default function E2W7ExerThemeSwitcherHomework() {
  return (
    <div className="page-content">
      <h1>Take-Home Mission: "The Theme Switcher"</h1>
      <ol>
        <li>Create a simple MVC blog with a Layout.</li>
        <li>Create a specific <code>_Sidebar.cshtml</code> partial view for recent posts.</li>
        <li><strong>The Catch:</strong> Pass a string to <code>ViewData["Theme"] = "dark"</code> in the Controller. In the <code>_Layout.cshtml</code>, write a Razor <code>@if</code> statement that checks this ViewData. If it's dark, apply a dark CSS class. If not, apply a light class.</li>
      </ol>
    </div>
  )
}
