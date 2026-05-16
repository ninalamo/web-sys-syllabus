## Week 13: Auth Deep-Dive

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + JWT Structure Diagram |
| Code Walkthrough | 30 min | Live Code (generate -> validate -> refresh -> frontend) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 13 strategy):** This is the security deep-dive week. Students implemented basic auth in Week 11 but likely don't understand what's inside a JWT. The concert wristband analogy is essential — reference it for every JWT concept. Build progressively: decode -> generate -> validate -> refresh -> frontend rotation. The jwt.io workshop (exercise requirement 7) is the "aha" moment — students physically forge a token and watch the signature break. Emphasize: JWT payload is NOT encrypted, only signed. Refresh token rotation prevents replay attacks. Never let students hardcode secrets.

### 1. The Hook

> [SPEAK] **Script:** "You implemented JWT auth last week, but do you actually know what's inside that token? Can you read it? Can you forge one? If you can't answer yes to all three, you have a security problem. JWTs are everywhere — every time you log into Discord, GitHub, or your bank's website, a token like this is proving who you are. But tokens expire, they get stolen, and they can be forged if you don't understand how they work. This week, we go deep into what makes auth actually secure."

> [SLIDE] **Slide:** Title: "The Token You're Trusting With Everything"  
> Left: A JWT string split into its three parts with color coding. Right: jwt.io showing the decoded payload with user ID, role, and expiration. Subtitle: "Anyone can read this. The signature is all that stops forgery."

> [TIP] **Teaching Tip:** Make it visceral. Show a real JWT from their Week 11 project decoded on jwt.io. Students are always shocked that their "secret" user data is readable by anyone.

> [ENGAGE] **Gen-Z:** "A JWT is like your student ID — anyone can read the name and photo on it, but they can't forge the hologram seal. That seal is the signature. Without it, the ID is worthless."  
> **-> Phone moment:** "Open jwt.io in your browser. Paste this token. Watch it decode in real-time. See your user ID, your role, your expiration — all in plain text. That's what you've been sending with every request."

> [LOST] **If they're lost:** "Don't worry if JWTs feel abstract. By the end of today, you'll be able to read, generate, and validate them. We start from the basics."

---

### 2. The Analogy

> [SPEAK] **Script:** "A JWT is like a concert wristband. When you buy a ticket (login), the venue gives you a wristband (token) that proves you're allowed in. The wristband has info printed on it: your name, the date, which areas you can access (payload). It has a special holographic seal (signature) that proves it's real — you can't just print one at home. The wristband expires at midnight (exp claim). When it expires, you go to the ticket booth (refresh endpoint) with your old wristband to get a new one. If someone steals your wristband, they can get in — that's why you keep it safe."

> [BOARD] **Whiteboard:** Draw the wristband comparison:
> ```
> CONCERT WRISTBAND = JWT
> +---------------------------------+
> | Header: "Hologram: HS256"       | <- Algorithm used
> | Payload: "Name, VIP area, Date" | <- Claims (NOT encrypted)
> | Signature: Holographic seal     | <- Proves authenticity
> | Expiry: "Valid until midnight"  | <- exp claim
> +---------------------------------+
> 
> ACCESS TOKEN (15 min) = Day pass
> REFRESH TOKEN (7 days) = Season pass (can be revoked)
> ```

> [TIP] **Teaching Tip:** The wristband analogy maps perfectly: header = hologram type, payload = printed info, signature = holographic seal, exp = expiry time, refresh = getting a new wristband at the booth. Draw it and reference it throughout.

> [ENGAGE] **Gen-Z:** "Access token vs refresh token is like your GCash OTP vs your login session. The OTP (access token) expires in 5 minutes — short-lived, used for one transaction. Your login session (refresh token) lasts longer but can be revoked if someone reports your phone stolen."  
> **-> Turn to your neighbor:** "In the wristband analogy, what happens if someone steals your wristband? What prevents them from staying forever? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the concert. JWT = three parts: header (algorithm), payload (data), signature (proof). Payload is readable. Signature prevents tampering. That's the core."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min JWT structure -> 4 min header -> 4 min payload -> 4 min signature -> 4 min access vs refresh -> 4 min OAuth2)

> [SPEAK] **Script:** "HTTP is stateless — every request is independent. The server doesn't remember who you are between requests. JWTs solve this by giving the client a self-contained token that proves identity. The server doesn't need to store session data — it just validates the token's signature. Let me show you how each part works."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a real JWT example, (3) what happens if you get it wrong. Don't show all concepts at once.

> [TIP] **Teaching Tip:** Spend the most time on the signature and access vs refresh tokens — these are where 80% of security issues happen. For the signature, emphasize: it prevents tampering, NOT reading. For refresh tokens, emphasize: rotation prevents replay attacks.

> [ASK] **Ask the class:** "If I change the role from 'user' to 'admin' in the JWT payload, will the server accept it?" (No — the signature won't match.) "But can I READ the role from the token?" (Yes — payload is base64 encoded, not encrypted.)

> [ENGAGE] **Gen-Z:** "The JWT signature is like your GCash transaction receipt's QR code. You can read the receipt, but you can't change the amount and have the QR code still be valid. The server scans the QR (signature) to verify nothing was changed."  
> **-> Phone moment:** "Open jwt.io. Paste this token. Change the role from 'user' to 'admin'. Watch the signature turn red — 'Invalid Signature.' That's the whole point of JWTs."

> [Q&A] **Student Q:** "If the payload isn't encrypted, why not just use a session cookie?"
> **Short answer:** Sessions require server-side storage. JWTs are stateless.
> **Real answer:** With sessions, the server stores session data (in memory, database, or Redis). Every request requires a database lookup. With JWTs, the token is self-contained — the server validates the signature and extracts claims without any database query. This scales better for distributed systems. The tradeoff: JWTs can't be easily revoked (hence refresh token rotation).
> **The hidden question:** "Which is better?" -> Depends. Sessions for simple apps. JWTs for distributed APIs and mobile apps.

> [Q&A] **Student Q:** "Why do I need refresh tokens? Why not just make the access token last 7 days?"
> **Short answer:** Because if a 7-day token is stolen, the attacker has 7 days.
> **Real answer:** Short-lived access tokens (15 min) limit the damage of theft. If an access token is stolen, the attacker has 15 minutes max. Refresh tokens are stored server-side, so they CAN be revoked. If you detect suspicious activity, you revoke the refresh token and the attacker loses access on the next refresh attempt.
> **The hidden question:** "Is 15 minutes enough?" -> For most apps, yes. The frontend silently refreshes in the background — the user never notices.

> [LOST] **If they're lost:** "The simplest JWT summary: (1) Three parts: header, payload, signature. (2) Payload is readable, not encrypted. (3) Signature prevents tampering. (4) Access tokens are short-lived. (5) Refresh tokens are long-lived but revocable. That's 90% of what you need."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (8 min generate -> 8 min validate -> 8 min refresh -> 6 min frontend)

> [SPEAK] **Script:** "Let's implement JWT auth properly — from token generation to validation to refresh to frontend rotation. Each step builds on the last, and by the end you'll have a production-grade auth system."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: Generate JWT (claims, signing, expiration). Step 2: Validate JWT (Program.cs config). Step 3: Refresh token flow (rotate, revoke). Step 4: Frontend auto-refresh.

> [TIP] **Teaching Tip:** **Type each step live.** For token generation, emphasize: the secret key must NEVER be hardcoded. For validation, emphasize: the order matters — `AddAuthentication` before `UseAuthentication`. For refresh, emphasize: rotation is the key security feature — each refresh token is single-use.

> [BOARD] **Whiteboard:** Draw the auth flow:
> ```
> Login -> POST /auth/login -> { accessToken (15min), refreshToken (7 days) }
>   v
> API call -> Authorization: Bearer <accessToken> -> 200 OK
>   v
> accessToken expires -> 401 -> POST /auth/refresh -> new tokens
>   v
> Old refreshToken revoked -> replay attack prevented
>   v
> refreshToken expires or revoked -> full logout
> ```

> [ENGAGE] **Gen-Z:** "Building JWT auth is like setting up a VIP club system. Step 1: issue the wristband (generate token). Step 2: check the wristband at the door (validate). Step 3: replace expired wristbands (refresh). Step 4: kick out fake wristbands (signature check)."  
> **-> Type-along:** "Type the token generation first. Test it by decoding on jwt.io. Then the validation config. Then the refresh flow. Then the frontend. Test each step before moving on."

> [Q&A] **Student Q:** "Why does the refresh token flow revoke the old token BEFORE issuing a new one?"
> **Short answer:** To prevent replay attacks.
> **Real answer:** If you issued a new token before revoking the old one, both tokens would be valid simultaneously. An attacker who stole the old token could keep using it. By revoking first, only the new token works. If the refresh fails (old token was already used), you know it was stolen and can force a full logout.
> **The hidden question:** "What if the request fails between revoke and issue?" -> That's why you do both in a database transaction — either both succeed or both fail.

> [LOST] **If they're lost:** "Start with just token generation. Get a token, decode it on jwt.io, verify it looks right. Then add validation. Then refresh. Then frontend. One piece at a time."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "Every major platform uses JWTs. GitHub's API accepts JWTs for authentication. Auth0 and Okta (identity providers used by thousands of companies) issue JWTs. The refresh token pattern you're learning is exactly what GitHub, Google, and Amazon use to keep you logged in without requiring constant re-authentication. The 15-minute access token + 7-day refresh token split is the industry standard."

> [SLIDE] **Slide:** Auth flow diagram used by major platforms. Logos: GitHub, Google, Amazon, Auth0. Stat: "95%+ of modern web APIs use Bearer token auth with JWT."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that the auth pattern they're building is the industry standard — not a classroom invention.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have been logged out of an app after a few days of inactivity?" (Most hands.) "That's the refresh token expiring. The app couldn't silently renew your session, so it forced a re-login."

> [LOST] **If they're lost:** "You don't need to know every platform's auth system. Just understand: the pattern you're building is what every company uses. JWT + refresh tokens = production auth."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Build a complete JWT auth system with refresh tokens. Generate tokens, store refresh tokens in the database, implement token rotation, protect endpoints with `[Authorize]`, add role-based access, and build the frontend auto-refresh flow."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] JWT generation in ASP.NET Core (login returns access + refresh)
> - [ ] Store refresh tokens in DB with expiration and revocation
> - [ ] Refresh endpoint with token rotation (revoke old, issue new)
> - [ ] `[Authorize]` on protected endpoints
> - [ ] `[Authorize(Roles = "Admin")]` for role-based access
> - [ ] Frontend auto-refresh on 401
> - [ ] JWT workshop: decode at jwt.io, modify payload, verify signature breaks
> - [ ] Logout endpoint that revokes current refresh token

> [TIP] **Teaching Tip:** The token rotation (requirement 3) and frontend auto-refresh (requirement 6) are the hardest parts. Students will struggle with the revoke-then-issue pattern and the retry logic. Circulate and help with these specifically.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the backend (JWT generation, validation, refresh), the other handles the frontend (auto-refresh, 401 handling). Then combine and test the full flow together."

> [LOST] **If they're lost:** "Start with token generation. Get a valid token. Then add validation. Then the refresh endpoint. Then frontend. Save the jwt.io workshop for last — it's the fun part."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate JWT code, then audit the secret key handling, token expiration, and refresh token rotation. Ask 'Where is the secret stored?' and 'Can this token be replayed?'"

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate JWT token generation code" | "Handle my secret keys" |
> | "What are the security risks of this refresh flow?" | "Configure my signing credentials" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: hardcoded secrets, no refresh token rotation, long access token expiration (24 hours), missing issuer/audience validation. Teach students to audit AI's auth code for security issues.

> [ENGAGE] **Gen-Z:** "AI writes auth code fast but often skips the security details. It's like building a house with no locks — looks good, but anyone can walk in. Always check: where's the secret? How long does the token last? Can it be replayed?"

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the JWT errors and security traps you'll hit this week. The signature validation failure alone will save you from hours of confusion."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "401 Unauthorized — signature       |
> | validation failed"                   |
> | Signing key mismatch between         |
> | generation and validation            |
> | Fix: use the same secret in both     |
> +--------------------------------------+
> +--------------------------------------+
> | "Token valid but user not authorized"|
> | Missing or mismatched role claim     |
> | Fix: check token payload at jwt.io   |
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The signature mismatch is like having two different GCash PINs — one for sending, one for receiving. They need to match, or nothing works."

> [Q&A] **Student Q:** "JWT payload is NOT encrypted? So anyone can read my user data?"
> **Short answer:** Yes. The signature prevents tampering, not reading.
> **Real answer:** Base64 encoding is NOT encryption. Anyone with the token can decode the payload. Never put passwords, SSNs, or credit cards in a JWT. The signature only proves the payload hasn't been changed — it doesn't hide it.
> **The hidden question:** "So how do I protect sensitive data?" -> Don't put it in the token. Store it server-side and only include a user ID in the JWT.

> [LOST] **If they're lost:** "The #1 issue: token works locally but fails in production. Check: (1) Is the JWT secret the same? (2) Is issuer/audience configured? (3) Is the server clock synchronized? JWT expiration is time-based — if the clock is off, valid tokens appear expired."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: JWT anatomy -> concert wristband analogy -> generate -> validate -> refresh -> frontend rotation. The jwt.io workshop is the "aha" moment — students physically forge a token and watch the signature break. Key pitfalls: hardcoded secrets, payload confusion (signed ≠ encrypted), missing refresh token rotation, server clock drift in production. Emphasize: the 15-minute access + 7-day refresh pattern is the industry standard. The refresh token replay attack prevention (rotation) is the most important security concept this week.

---

