export default function E3W13ResoReferenceCard() {
  return (
    <div className="page-content">
      <h1>Week 13: Auth Deep-Dive — Resources &amp; Reference</h1>
      <h2>Core Concepts Quick Reference</h2>
      <h3>1. JWT Structure</h3>
      <pre><code>Header.Payload.Signature</code></pre>
      <ul>
        <li><strong>Header</strong>: Algorithm used (e.g., HS256)</li>
        <li><strong>Payload</strong>: Claims (NOT encrypted — base64 encoded, anyone can read)</li>
        <li><strong>Signature</strong>: Proves authenticity — prevents tampering</li>
      </ul>
      <h3>2. Concert Wristband Analogy</h3>
      <pre><code>CONCERT WRISTBAND = JWT
      +---------------------------------+
      | Header: "Hologram: HS256"       | &lt;- Algorithm used
      | Payload: "Name, VIP area, Date" | &lt;- Claims (NOT encrypted)
      | Signature: Holographic seal     | &lt;- Proves authenticity
      | Expiry: "Valid until midnight"  | &lt;- exp claim
      +---------------------------------+
      
      ACCESS TOKEN (15 min) = Day pass
      REFRESH TOKEN (7 days) = Season pass (can be revoked)</code></pre>
      <h3>3. Auth Flow</h3>
      <pre><code>Login -&gt; POST /auth/login -&gt; &#123; accessToken (15min), refreshToken (7 days) &#125;
      v
      API call -&gt; Authorization: Bearer &lt;accessToken&gt; -&gt; 200 OK
      v
      accessToken expires -&gt; 401 -&gt; POST /auth/refresh -&gt; new tokens
      v
      Old refreshToken revoked -&gt; replay attack prevented
      v
      refreshToken expires or revoked -&gt; full logout</code></pre>
      <h3>4. Key Security Rules</h3>
      <ul>
        <li>JWT payload is NOT encrypted — never put sensitive data in it</li>
        <li>Signature prevents tampering, NOT reading</li>
        <li>Access tokens: short-lived (15 min)</li>
        <li>Refresh tokens: long-lived but revocable (stored server-side)</li>
        <li>Token rotation prevents replay attacks</li>
        <li>NEVER hardcode secret keys</li>
      </ul>
      <h3>5. ASP.NET Core Auth Setup</h3>
      <pre><code>builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
      .AddJwtBearer(options =&gt;
      &#123;
      options.TokenValidationParameters = new TokenValidationParameters
      &#123;
      ValidateIssuer = true,
      ValidateAudience = true,
      ValidateLifetime = true,
      ValidateIssuerSigningKey = true,
      ValidIssuer = builder.Configuration["Jwt:Issuer"],
      ValidAudience = builder.Configuration["Jwt:Audience"],
      IssuerSigningKey = new SymmetricSecurityKey(
      Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Secret"]))
      &#125;;
      &#125;);
      
      app.UseAuthentication();
      app.UseAuthorization();</code></pre>
      <h2>Learning Baseline Checklist</h2>
      <ul>
        <li>[ ] I can decode a JWT and read its payload</li>
        <li>[ ] I understand signed ≠ encrypted</li>
        <li>[ ] I can implement refresh token rotation</li>
        <li>[ ] I can protect endpoints with <code>[Authorize]</code> and roles</li>
        <li>[ ] I know why secret keys must never be hardcoded</li>
      </ul>
    </div>
  )
}
