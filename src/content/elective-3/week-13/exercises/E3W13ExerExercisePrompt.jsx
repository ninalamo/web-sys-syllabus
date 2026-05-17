export default function E3W13ExerExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 13: Auth Deep-Dive — Exercises</h1>
      <h2>In-Class Exercise (55 min)</h2>
      <h3>Task: Complete JWT Auth System</h3>
      <p>
      Build a complete JWT auth system with refresh tokens.
      </p>
      
      <h3>Requirements</h3>
      
      
      <ol>
        <li>JWT generation in ASP.NET Core (login returns access + refresh tokens)</li>
        <li>Store refresh tokens in DB with expiration and revocation</li>
        <li>Refresh endpoint with token rotation (revoke old, issue new)</li>
        <li><code>[Authorize]</code> on protected endpoints</li>
        <li><code>[Authorize(Roles = "Admin")]</code> for role-based access</li>
        <li>Frontend auto-refresh on 401</li>
        <li>JWT workshop: decode at jwt.io, modify payload, verify signature breaks</li>
        <li>Logout endpoint that revokes current refresh token</li>
      
      </ol>
      
      <h3>Hints</h3>
      
      
      <ul>
        <li>Access token: short-lived (15 min)</li>
        <li>Refresh token: long-lived (7 days), stored server-side</li>
        <li>Token rotation: revoke old token before issuing new one</li>
        <li>Never hardcode secret keys</li>
      
      </ul>
      
      <h3>Stretch Goals</h3>
      
      
      <ul>
        <li>Add token blacklist for immediate revocation</li>
        <li>Add rate limiting on the login endpoint</li>
        <li>Add refresh token fingerprinting (bind to device/IP)</li>
      
      </ul>
    </div>
  )
}
