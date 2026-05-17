export default function E2W11ExerGithubProfilerHomework() {
  return (
    <div className="page-content">
      <h1>Take-Home Mission: "The GitHub Profiler"</h1>
      <ol>
        <li>Create a Search Page.</li>
        <li>The user types a GitHub username and hits search.</li>
        <li><strong>The Catch:</strong> You must fetch from <code>https://api.github.com/users/&#123;username&#125;</code>. You MUST add a <code>User-Agent</code> header to the <code>HttpClient</code> request (GitHub requires this). Deserialize their Avatar URL, Name, and Public Repos count, and display it in a nice Bootstrap card.</li>
      </ol>
    </div>
  )
}
