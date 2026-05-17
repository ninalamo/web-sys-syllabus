export default function E3W13PresPlaceholder() {
  return (
    <div className="page-content">
      <h1>Week 13: Presentations — Placeholder</h1>
      <h2>Planned Slide Deck Content</h2>
      <h3>Slide 1: Title</h3>
      <ul>
        <li>"Week 13: Auth Deep-Dive"</li>
        <li>"JWT internals — decode, forge, validate, refresh, secure"</li>
      </ul>
      <h3>Slide 2: The Hook</h3>
      <ul>
        <li>"You implemented JWT auth but do you actually know what's inside that token?"</li>
      </ul>
      <h3>Slide 3: The Token</h3>
      <ul>
        <li>JWT string split into 3 parts with color coding</li>
        <li>jwt.io showing decoded payload</li>
        <li>"Anyone can read this. The signature is all that stops forgery."</li>
      </ul>
      <h3>Slide 4: Whiteboard Analogy</h3>
      <ul>
        <li>Concert Wristband = JWT</li>
        <li>Header = hologram type, Payload = printed info, Signature = holographic seal</li>
      </ul>
      <h3>Slide 5: JWT Structure</h3>
      <ul>
        <li>Header, Payload, Signature</li>
        <li>Payload is readable, not encrypted</li>
      </ul>
      <h3>Slide 6: Signature Verification</h3>
      <ul>
        <li>Change role from "user" to "admin" -&gt; signature breaks</li>
        <li>"Signed ≠ Encrypted"</li>
      </ul>
      <h3>Slide 7: Access vs Refresh Tokens</h3>
      <ul>
        <li>Access: 15 min, stateless</li>
        <li>Refresh: 7 days, stored server-side, revocable</li>
      </ul>
      <h3>Slide 8: Auth Flow Diagram</h3>
      <ul>
        <li>Login -&gt; Access + Refresh -&gt; API calls -&gt; Refresh -&gt; Logout</li>
      </ul>
      <h3>Slide 9: Live Coding Preview</h3>
      <ul>
        <li>Generate -&gt; Validate -&gt; Refresh -&gt; Frontend rotation</li>
      </ul>
      <h3>Slide 10: Common Errors</h3>
      <ul>
        <li>Signature validation failure (key mismatch)</li>
        <li>Token valid but user not authorized (role mismatch)</li>
      </ul>
      <h3>Slide 11: Exercise Brief</h3>
      <ul>
        <li>Complete JWT auth system with refresh tokens</li>
      </ul>
      <h3>Slide 12: Learning Baseline</h3>
      <ul>
        <li>Self-assessment checklist</li>
      </ul>
    </div>
  )
}
