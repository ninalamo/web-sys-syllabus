## Week 14: Security Fundamentals

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Vulnerability Demos |
| Code Walkthrough | 35 min | Live Code (vulnerable -> secure transformation) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (security audit + fix) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 5 min | Overflow |

> [TIP] **Teaching Tip (Week 14 strategy):** This is the week where students learn that their apps are vulnerable by default. The XSS demo — actually running `<script>alert('hacked')</script>` in their own app — is the most memorable moment. Do it live. Let them see it happen. Then show how Razor auto-encoding prevents it. The OWASP Top 10 should feel like a checklist, not a textbook.

---

### The Hook

> [SPEAK] **Script:** "Someone out there wants to steal your users' data. Not because they hate you — because your app has vulnerabilities. And if you don't fix them, you're legally liable. Today we learn about the three horsemen of the web apocalypse: XSS, SQL injection, and CSRF."

> [SLIDE] **Slide:** Title: "Your App Is Vulnerable (And That's Okay)"  
> Three attack icons: a script tag (XSS), a SQL query with a skull (SQL injection), and a fake form (CSRF).  
> Subtitle: "Today we learn how to lock the doors."

> [TIP] **Teaching Tip:** This hook should feel alarming but not paralyzing. Follow up immediately with: "The good news? ASP.NET Core already protects you from most of these. You just need to know what to turn on and what NOT to turn off."

> [ENGAGE] **Gen-Z:** "Every app you use has been hacked at some point. Facebook, Twitter, even your school's portal. The difference between a breached app and a secure one isn't talent — it's knowing the common attacks and how to prevent them."  
> **-> Poll:** "Raise your hand if you've ever seen a website where you could type HTML and it actually rendered. That's an XSS vulnerability."

> [LOST] **If they're lost:** "Don't panic. You're not building a banking app. But the same principles apply: never trust user input, always encode output, always use parameterized queries. These three rules cover 90% of security."

---

### The Analogy

> [SPEAK] **Script:** "Your web app is a house. XSS lets attackers sneak in a script through an open window — that's unencoded user input. SQL injection is someone picking your lock with a bobby pin — malicious SQL hidden in a text field. CSRF is tricking you into unlocking the door for them — a fake request that looks like it came from a trusted user. ASP.NET Core has built-in locks on all three. You just need to use them."

> [BOARD] **Whiteboard:** Draw the house analogy:
> ```
> +-------------------------------------+
> |  YOUR WEB APP (House)               |
> |                                     |
> |  [WINDOW] XSS -> Open window               |
> |     (unencoded input)               |
> |     Fix: Razor auto-encodes         |
> |                                     |
> |  [LOCK] SQL Injection -> Picked lock     |
> |     (string concatenation)          |
> |     Fix: EF parameterizes           |
> |                                     |
> |  [DOOR] CSRF -> Tricked into opening     |
> |     (fake request)                  |
> |     Fix: Anti-forgery token         |
> +-------------------------------------+
> ```

> [TIP] **Teaching Tip:** The house analogy is universal. Emphasize: **ASP.NET Core already has the locks installed.** Students don't need to build security from scratch — they need to not disable the built-in protections. This is a key mindset shift.

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "If your app is a house, which vulnerability is the easiest to fix? XSS (close the window), SQL injection (change the lock), or CSRF (install a peephole)? 10 seconds, go!" (Answer: XSS — Razor does it automatically.)

> [LOST] **If they're lost:** "Think of it like your phone's security. Face ID = authentication. App permissions = authorization. Encrypted messages = HTTPS. Your phone already has all this built in. Your app does too."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (8 min XSS -> 7 min SQL injection -> 5 min CSRF -> 5 min HTTPS + OWASP)

> [SPEAK] **Script:** "Let's go through each vulnerability. XSS is when user input runs as code. SQL injection is when user input becomes part of a query. CSRF is when a malicious site tricks your browser into making requests on your behalf. ASP.NET Core protects against all three — but you have to know how."

> [SLIDE] **Slide:** Show the XSS attack first — a comment field with `<script>alert('hacked')</script>`. Then show what happens when it renders raw (alert popup). Then show what Razor does — the encoded output that displays as text. Reveal one step at a time.

> [TIP] **Teaching Tip:** **Do the XSS demo live.** Type `<script>alert('XSS')</script>` into a form that uses `@Html.Raw()` and show the alert popup. The gasp from the room is guaranteed. Then remove `@Html.Raw()` and show it renders as harmless text. This visual proof is unforgettable.

> [ASK] **Ask the class:** "If Razor auto-encodes by default — when would you ever use `@Html.Raw()`?" (Answer: When you control the content, like admin-written articles with formatting. Never on user-submitted content.)

> [ENGAGE] **Gen-Z:** "XSS is like someone slipping a fake flyer into your group chat. If you just forward it (raw rendering), everyone sees the fake. If you screenshot it and add 'FAKE' (encoding), everyone sees it's harmless."  
> **-> Phone moment:** "Think about how Facebook handles comments. If you type HTML in a comment, it shows as text, not as actual HTML. That's auto-encoding."

> [Q&A] **Student Q:** "Is `@Html.Raw()` ever safe?"
> **Short answer:** Yes, when you control the content.
> **Real answer:** If you're rendering content that YOU wrote (admin articles, system messages), `@Html.Raw()` is fine. The danger is when the content comes from users. Rule: if a user typed it, never use `@Html.Raw()`.
> **The hidden question:** "What if I need to allow some HTML (like bold/italic)?" -> Use a sanitizer library like HtmlSanitizer.

> [Q&A] **Student Q:** "Does EF Core protect me from SQL injection automatically?"
> **Short answer:** Yes, if you use LINQ.
> **Real answer:** `.Where(u => u.Email == email)` is always parameterized. The danger is `FromSqlRaw()` with string interpolation. If you must use raw SQL, use parameters: `FromSqlRaw("SELECT * FROM Users WHERE Email = {0}", email)`.
> **The hidden question:** "Should I ever use FromSqlRaw?" -> Only for complex queries that LINQ can't express. And always with parameters.

> [LOST] **If they're lost:** "Three rules to remember: (1) Never use `@Html.Raw()` on user input. (2) Always use LINQ, not string SQL. (3) Always include `@Html.AntiForgeryToken()` in forms. Follow these three rules and you're safer than 90% of beginner apps."

---

### Code Walkthrough

> [TIME] **Pacing:** 35 min (10 min vulnerable code demo -> 15 min secure transformation -> 10 min OWASP tour)

> [SPEAK] **Script:** "Let's take a vulnerable app and fix it step by step. First I'll show you the broken code — the kind of code that gets companies sued. Then we'll fix each vulnerability one at a time."

> [SLIDE] **Slide:** Show the vulnerable controller and view side by side. Use red highlighting on the dangerous parts: `@Html.Raw(ViewBag.Comment)`, missing `[ValidateAntiForgeryToken]`, no model validation. Then reveal the secure version with green highlights.

> [TIP] **Teaching Tip:** **Type the vulnerable version first, then transform it live.** This "before and after" approach is more memorable than showing the secure version directly. When you add `[ValidateAntiForgeryToken]`, explain: "This one attribute stops CSRF attacks. It's free security."

> [BOARD] **Whiteboard:** Draw the CSRF attack flow:
> ```
> User logged into bank.com (has cookie)
>     v
> User visits evil.com
>     v
> evil.com has hidden form: POST bank.com/transfer
>     v
> Browser sends cookie automatically
>     v
> Bank thinks it's the user -> MONEY STOLEN
>     v
> FIX: Anti-forgery token prevents this
> (evil.com can't read bank.com's token)
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Type the vulnerable version with me. See how simple it is? Now let's break it. Submit a script tag. Watch the alert. Now let's fix it — remove @Html.Raw, add antiforgery, add validation. Watch it become secure."

> [Q&A] **Student Q:** "What's the OWASP Top 10? Is it a test?"
> **Short answer:** It's a list of the most critical web security risks.
> **Real answer:** The Open Web Application Security Project publishes this list every few years. It's the industry standard for "what to worry about." Companies use it for security audits. If you can name three items from it in an interview, you'll impress them.
> **The hidden question:** "Do I need to memorize all 10?" -> No. But know the big three: injection, broken auth, XSS.

> [LOST] **If they're lost:** "Let's focus on just XSS first. Remove `@Html.Raw()`, let Razor encode automatically. That fixes the most common vulnerability. Then add anti-forgery tokens. Then worry about the rest."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "Security isn't optional. Your school's portal, your bank, your social media — all breached at some point. If you build a commercial app and it leaks user data, you get sued, your company gets fined, and your career takes a hit. In the Philippines, the Data Privacy Act (RA 10173) requires companies to protect user data. Non-compliance = fines up to ₱5M + jail time."

> [SLIDE] **Slide:** Headline from a real Philippine data breach (e.g., COMELEC 2016, or a recent local breach). Label: "₱5M fine + jail time under RA 10173. This is real."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. The legal angle is the strongest argument for Filipino students — RA 10173 makes this a real consequence, not a theoretical one.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have received a 'your data may have been breached' email?" (Some hands.) "That email was sent because someone didn't follow the security practices we're learning today."

> [LOST] **If they're lost:** "You don't need to become a security expert today. Just follow the three rules: encode output, parameterize queries, use anti-forgery tokens. That covers the basics."

---

### Exercise: Security Audit Report

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min audit + fix -> 10 min share)

> [SPEAK] **Script:** "Here's a vulnerable app. Find at least 5 security flaws. Document each one: what it is, how to exploit it, how to fix it, and the fixed code. You have 40 minutes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Find SQL injection vulnerability
> - [ ] Find missing anti-forgery token
> - [ ] Find XSS via `@Html.Raw()`
> - [ ] Find missing input validation
> - [ ] Find missing `[ValidateAntiForgeryToken]`
> - [ ] Write fixed code for each
> - [ ] Bonus: Identify missing HTTPS enforcement

> [TIP] **Teaching Tip:** This exercise is analytical, not coding-heavy. Students should spend time reading the vulnerable code, identifying flaws, and writing the fixes. Circulate and help students who can't spot the vulnerabilities. The "aha" moment is when they realize how many flaws exist in just a few lines of code.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "Work as a red team (find flaws) and blue team (write fixes). Then swap roles. You'll learn faster by seeing both perspectives."

> [ASK] **Mid-exercise check-in (at 20 min):** "How many flaws have you found?" (Show of hands — should be 5+.) "Which one was the hardest to spot?" "Let's discuss the SQL injection — who can explain how it works?"

> [LOST] **If they're lost:** "Start with the obvious: look for `@Html.Raw()` — that's XSS. Look for string concatenation in SQL — that's injection. Look for a POST form without `@Html.AntiForgeryToken()` — that's CSRF. Those three will get you started."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, AI is your security consultant. Paste vulnerable code and ask it to identify flaws following OWASP Top 10. But verify every suggestion — AI can miss context-specific vulnerabilities."

> [SLIDE] **Slide:** Prompt template:
> "Here's my controller code [paste]. Identify all security vulnerabilities following OWASP Top 10. Show me the fixed version."

> [TIP] **Teaching Tip:** Demonstrate asking AI to audit code, then compare its findings to your own. "AI found 4 of the 6 vulnerabilities. It missed the missing HTTPS enforcement. That's why you still need to understand security yourself."

> [ENGAGE] **Gen-Z:** "AI is your 'security scanner' — it catches obvious vulnerabilities, but you need to understand why they're dangerous. If AI fixes a bug and you don't know why, you haven't learned."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common issues -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the security-related issues you'll encounter. Most of them are about knowing what NOT to do."

> [SLIDE] **Slide:** Issue cards:
> ```
> +------------------------------------------+
> | Anti-forgery token mismatch (400 error)  |
> | You have [ValidateAntiForgeryToken]        |
> | without @Html.AntiForgeryToken() in form |
> +------------------------------------------+
> +------------------------------------------+
> | Razor auto-encoding is YOUR FRIEND       |
> | Don't use @Html.Raw() unless absolutely  |
> | necessary. When in doubt, leave it out.  |
> +------------------------------------------+
> +------------------------------------------+
> | SQL injection doesn't work on EF LINQ    |
> | .Where(u => u.Email == email) is safe.   |
> | FromSqlRaw() is the danger zone.         |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "Anti-forgery token mismatch is like having a key that doesn't fit the lock. The form has one key, the controller expects another. Fix: make sure both the form AND the controller have the token."

> [Q&A] **Student Q:** "Should I add CSP headers to my project?"
> **Short answer:** It's good practice but not required for class projects.
> **Real answer:** Content-Security-Policy headers tell the browser which scripts are allowed. They're an extra layer of XSS protection. Add them in Program.cs if you want bonus points.
> **The hidden question:** "Is my project insecure without CSP?" -> No. Razor auto-encoding is your primary defense. CSP is defense-in-depth.

> [LOST] **If they're lost:** "The two things to check first: (1) Are you using `@Html.Raw()` anywhere on user input? Remove it. (2) Do all POST forms have `@Html.AntiForgeryToken()`? Add it. Those fix the most critical vulnerabilities."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: never trust user input. Encode it, validate it, parameterize it. That's the golden rule of web security."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. The XSS live demo is the most important moment — actually run `<script>alert('XSS')</script>` and show the popup, then show how Razor prevents it. The house analogy should be used repeatedly. The three golden rules (encode output, parameterize queries, use anti-forgery tokens) should be written on the board and left there. The #1 mistake is using `@Html.Raw()` on user input — normalize this as the most common beginner error. Connect security to RA 10173 (Philippine Data Privacy Act) for local relevance.

---

