export default function E2W4ExerInClassExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 4 — In-Class Exercise: Movies MVC App</h1>
      <p>
      <strong>Duration:</strong> 55 minutes
      </p>
      
      <h2>Exercise: Movies Controller &amp; View</h2>
      
      
      <ol>
        <li>Scaffold a new MVC app: <code>dotnet new mvc -n MoviesApp</code></li>
        <li>Create a <code>MoviesController</code> with an <code>Index</code> action</li>
        <li>The <code>Index</code> action should pass a list of 3 hardcoded movies to the view</li>
        <li>Create <code>Views/Movies/Index.cshtml</code> that displays the list using Razor <code>@foreach</code></li>
        <li>Use <code>@Model</code> to access the data passed from the controller</li>
      
      </ol>
      <br /><strong>Requirements:</strong>
      
      <ul>
        <li>Controller must return <code>View()</code> with a model</li>
        <li>View must declare <code>@model</code> directive</li>
        <li>Use string interpolation in Razor with <code>@</code></li>
        <li>Each movie shows: Title, Year, Rating</li>
      
      </ul>
    </div>
  )
}
