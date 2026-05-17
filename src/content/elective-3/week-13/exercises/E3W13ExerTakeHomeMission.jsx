export default function E3W13ExerTakeHomeMission() {
  return (
    <div className="page-content">
      <h1>Week 13: Take-Home Mission — "The Security Audit"</h1>
      <h2>Mission Brief</h2>
      <p>
      Audit and harden your JWT auth implementation.
      </p>
      
      <h2>Your Task</h2>
      
      
      <ol>
        <li>Take your existing JWT auth system</li>
        <li>Decode your access token at jwt.io and verify the payload is readable</li>
        <li>Modify the role claim from "user" to "admin" and verify the signature breaks</li>
        <li>Write a brief security audit document covering:</li>
      
      </ol>
      <ul>
        <li>Where is the secret stored? (Should NOT be hardcoded)</li>
        <li>How long does the access token last?</li>
        <li>Can the refresh token be replayed?</li>
        <li>What happens if a token is stolen?</li>
      
      </ul>
      
      <h2>Deliverables</h2>
      
      
      <ul>
        <li>Screenshot of jwt.io showing decoded token</li>
        <li>Screenshot showing broken signature after modification</li>
        <li>Security audit document (1-2 pages)</li>
        <li>Any code fixes you identified and implemented</li>
      
      </ul>
      
      <h2>Rubric</h2>
      
      
      <table><thead><tr>
        <th>Criteria</th>
        <th>Points</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>jwt.io decode screenshot</td>
        <td>15</td>
      </tr>
      
      <tr>
        <td>Signature break screenshot</td>
        <td>15</td>
      </tr>
      
      <tr>
        <td>Secret key not hardcoded</td>
        <td>20</td>
      </tr>
      
      <tr>
        <td>Refresh token rotation documented</td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>Security audit document</td>
        <td>25</td>
      </tr>
      </tbody></table>
    </div>
  )
}
