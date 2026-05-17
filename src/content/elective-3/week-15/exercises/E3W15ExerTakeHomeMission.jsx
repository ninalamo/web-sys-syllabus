export default function E3W15ExerTakeHomeMission() {
  return (
    <div className="page-content">
      <h1>Week 15: Take-Home Mission — "The Live Deploy"</h1>
      <h2>Mission Brief</h2>
      <p>
      Deploy your full-stack capstone application to the internet.
      </p>
      
      <h2>Your Task</h2>
      
      
      <ol>
        <li>Deploy your frontend to Vercel, Netlify, or GitHub Pages</li>
        <li>Deploy your backend to Render, Railway, or Azure</li>
        <li><strong>The Catch:</strong> Configure your CI/CD pipeline so that every push to <code>main</code> automatically redeploys both services</li>
        <li>Verify the live deployment works by making a small change, pushing, and watching it deploy</li>
      
      </ol>
      
      <h2>Deliverables</h2>
      
      
      <ul>
        <li>Live frontend URL</li>
        <li>Live backend URL</li>
        <li>CI/CD pipeline configured</li>
        <li>Screenshot of successful GitHub Actions run</li>
        <li>README with deployment status badge</li>
      
      </ul>
      
      <h2>Rubric</h2>
      
      
      <table><thead><tr>
        <th>Criteria</th>
        <th>Points</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>Frontend deployed and accessible</td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>Backend deployed and accessible</td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>CI/CD pipeline auto-deploys on push</td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>Secrets properly configured</td>
        <td>15</td>
      </tr>
      
      <tr>
        <td>README with status badge</td>
        <td>10</td>
      </tr>
      </tbody></table>
    </div>
  )
}
