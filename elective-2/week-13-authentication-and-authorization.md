## Week 13: Authentication & Authorization

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Code Walkthrough |
| Code Walkthrough | 35 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 5 min | Overflow |

> [TIP] **Teaching Tip (Week 13 strategy):** This is the first week students deal with user identity — a conceptually heavy shift from "data in tables" to "people with accounts." The scaffolding commands will feel magical but confusing. Make them type every command themselves. The critical pipeline order (`UseAuthentication` before `UseAuthorization`) is the #1 error — write it on the board and leave it there.

---

### The Hook

> [SPEAK] **Script:** "That 'Login with Google' button isn't magic. It's a session cookie. And yes, you're going to build the entire login system from scratch. Well, ASP.NET Core Identity does most of the work — but you'll understand what it's doing. If you can't log in, you can't post. If you can't post, what's even the point?"

> [SLIDE] **Slide:** Title: "Who Are You?"  
> Left: A login screen from a familiar app (Facebook, GCash, or Canvas).  
> Right: The same app's dashboard after login, with the user's name visible.  
> Subtitle: "Today you build the gate between these two screens."

> [TIP] **Teaching Tip:** This hook should feel urgent — authentication is the feature that separates toy apps from real products. Ask: "How many of you logged into something today?" (All hands.) "Every single one of those was built by someone who learned exactly what we're learning today."

> [ENGAGE] **Gen-Z:** "Every app you use has a bouncer at the door. That bouncer checks your ID, gives you a wristband, and decides which rooms you can enter. Today you become the bouncer."  
> **-> Poll:** "Raise your hand if you've ever been locked out of an account because you forgot your password. Today you'll learn how that lock works."

> [LOST] **If they're lost:** "Don't worry if this feels abstract. Authentication is just: prove who you are, get a cookie, show the cookie on every page. That's the entire concept. We're just learning the code that makes it happen."

---

### The Analogy

> [SPEAK] **Script:** "Authentication is a VIP wristband at a club. You show your ID at the front desk — that's registration. They check it, give you a wristband — that's your session cookie. Now the bouncer looks at your wristband and lets you in — that's `[Authorize]`. Different wristband colors mean different access: green for regular, gold for VIP, black for staff. And at closing time, the wristband expires — that's session timeout."

> [BOARD] **Whiteboard:** Draw the club analogy:
> ```
> Front Desk (Register) -> Wristband (Cookie) -> Bouncer ([Authorize])
>                                                    v
>                                    Green -> Main floor (regular user)
>                                    Gold  -> VIP area (premium)
>                                    Black -> Back office (admin)
> ```
> Below: "Register -> Cookie -> Authorize. That's the entire auth flow."

> [TIP] **Teaching Tip:** The club analogy works well for Filipino students — many have experienced wristband-based venues. Emphasize the key insight: **the cookie IS the wristband.** The server doesn't remember you — it checks the cookie on every request. This connects back to Week 3's statelessness.

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "If the wristband is your cookie, what happens when you close your browser? Does the wristband disappear? 10 seconds, go!" (Answer: Depends — if it's a session cookie, yes. If "remember me," it persists.)

> [LOST] **If they're lost:** "Think of it like GCash. You log in once, and the app remembers you for a while. That 'remembering' is a cookie. When you log out, the cookie is deleted. Next time you open GCash, you need to log in again."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (8 min auth vs authz -> 10 min Identity setup -> 7 min protecting routes)

> [SPEAK] **Script:** "Here's the distinction you MUST know: authentication is 'who are you?' and authorization is 'what are you allowed to do?' You can be authenticated — I know your name — but not authorized — you can't access the admin panel. ASP.NET Core Identity handles both, and it does the hard stuff for you: password hashing, cookie management, session handling."

> [SLIDE] **Slide:** Show the `AddDefaultIdentity` configuration one option at a time. Highlight `RequireConfirmedAccount = false` — explain why we disable it for class projects. Then show `RequireDigit` and `RequiredLength` — these are the password rules students will encounter.

> [TIP] **Teaching Tip:** The most important concept: **`IdentityUser` is just a model with special properties.** Students already know models — build on that. For `SignInManager` vs `UserManager`, emphasize: "SignInManager handles sessions. UserManager handles user data. One logs you in, the other creates your account."

> [ASK] **Ask the class:** "If I put `[Authorize]` on a controller — what happens when an unauthenticated user visits?" (Answer: They get redirected to the login page.)

> [ENGAGE] **Gen-Z:** "Auth vs Authz is like your school ID. Authentication = the guard checks your ID and says 'yes, you're a student here.' Authorization = the guard says 'you're a student, but you can't enter the faculty lounge.' Same ID, different access levels."  
> **-> Phone moment:** "Open any app that requires login. Look at what you can do vs what an admin can do. That difference is authorization."

> [Q&A] **Student Q:** "Why can't I just store passwords in the database?"
> **Short answer:** Because if your database is breached, every password is exposed.
> **Real answer:** Identity hashes passwords using a one-way algorithm. Even if someone steals your database, they can't reverse the hash to get the original password. Rolling your own password storage is one of the most common security mistakes.
> **The hidden question:** "Can I see the hashed password?" -> Yes, but it looks like gibberish. That's the point.

> [Q&A] **Student Q:** "What's the difference between SignInManager and UserManager?"
> **Short answer:** SignInManager handles login/logout sessions. UserManager handles user data.
> **Real answer:** `UserManager.CreateAsync()` creates the user record. `SignInManager.SignInAsync()` sets the authentication cookie. You need both for a complete registration flow.
> **The hidden question:** "Why two managers?" -> Separation of concerns. One manages identity data, the other manages sessions.

> [LOST] **If they're lost:** "Forget the manager names. The flow is: (1) User fills registration form. (2) UserManager creates the account. (3) SignInManager logs them in. (4) They get a cookie. (5) Every page checks the cookie. That's it."

---

### Code Walkthrough

> [TIME] **Pacing:** 35 min (5 min packages -> 10 min Program.cs -> 10 min scaffold -> 10 min protect + test)

> [SPEAK] **Script:** "Let's add Identity to an existing project step by step. Watch how each piece connects — the packages, the DbContext change, the Program.cs registration, and finally the scaffolded pages that just work."

> [SLIDE] **Slide:** Show the Program.cs changes with the critical line highlighted: `app.UseAuthentication()` MUST come before `app.UseAuthorization()`. Use a red arrow between them labeled "ORDER MATTERS."

> [TIP] **Teaching Tip:** **Type this live, don't paste.** When you type the middleware order, pause dramatically: "If you swap these two lines, authentication breaks. The bouncer checks authorization before checking identity. Nothing gets in." Make the deliberate mistake of putting `UseAuthorization` first — show the error, then fix it.

> [BOARD] **Whiteboard:** Draw the middleware pipeline:
> ```
> Request -> UseStaticFiles -> UseRouting -> UseAuthentication -> UseAuthorization -> Controller
>                                                              v
>                                              No cookie? -> Redirect to Login
>                                              Has cookie? -> Continue to Controller
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Run the package install commands with me. Then update your DbContext. Then Program.cs. Then scaffold. Watch the Identity pages appear. That's the moment your app gets a login system."

> [Q&A] **Student Q:** "What does `dotnet aspnet-codegenerator identity` actually do?"
> **Short answer:** It generates the login, register, and logout pages for you.
> **Real answer:** It creates Razor Pages (not MVC views) in an `/Identity/Account/` folder with all the logic for registration, login, logout, password reset, etc. You didn't write any of it — Microsoft did. But now you know where to find it.
> **The hidden question:** "Can I customize these pages?" -> Yes. The scaffolded files are yours to edit.

> [LOST] **If they're lost:** "Let's do the absolute minimum: add the packages, update DbContext, register Identity in Program.cs, and scaffold. Skip the custom controllers for now. Get the built-in login page working first."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "Authentication is in every app that has users. E-commerce, social media, banking, email, your school's portal. If you can't implement login/logout/signup, you can't build a real product. ASP.NET Core Identity handles hashing, session management, cookie security, and password policies — all the things you'd get wrong if you rolled your own."

> [SLIDE] **Slide:** Screenshot of a real breach headline (e.g., a company that stored plaintext passwords). Label: "This company didn't hash passwords. 2 million accounts exposed. Don't be this company."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. The security angle is the strongest argument: "Identity handles the hard stuff so you don't accidentally leak passwords."

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you use the same password for multiple accounts?" (Some hands will go up nervously.) "That's why companies need to hash passwords. Even if one site gets breached, your password on other sites is still safe."

> [LOST] **If they're lost:** "You don't need to understand cryptography today. Just know: Identity handles passwords securely. Use it. Don't roll your own."

---

### Exercise: App with Login Gate

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Take any previous project and add Identity. Lock down the main pages behind login. Show the user's name in the navbar. Create an admin role. You have 40 minutes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Add ASP.NET Core Identity packages
> - [ ] Update DbContext to inherit from `IdentityDbContext`
> - [ ] Register Identity in Program.cs (auth before authz!)
> - [ ] Scaffold Identity pages
> - [ ] Add `[Authorize]` to at least one controller
> - [ ] Show `@User.Identity.Name` in the navbar
> - [ ] Add Logout button
> - [ ] Bonus: Create an "Admin" role and restrict one action

> [TIP] **Teaching Tip:** Circulate during the first 15 minutes — Identity setup is where students get stuck. The "aha" moment is when they visit a protected page and get redirected to the login screen. Walk around and celebrate that moment.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the Identity setup (packages, DbContext, Program.cs), the other handles the views (navbar, logout button). Then combine and test together."

> [ASK] **Mid-exercise check-in (at 20 min):** "How many have the login page working?" (Show of hands.) "How many have a protected page that redirects to login?" "If neither, let's do a quick group debug."

> [LOST] **If they're lost:** "Start with just the packages and Program.cs. Get Identity registered. Then scaffold the pages. Test the login. Then add `[Authorize]` to a controller. One step at a time."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week marks a policy shift: FULL AI ALLOWED. AI can generate anything. But you must submit a prompt log, a code review of what AI got wrong, and be ready for an oral defense. You're not just using AI — you're auditing it."

> [SLIDE] **Slide:** New AI policy:
> | Requirement | What it means |
> |------------|--------------|
> | Prompt log | Save every prompt you used |
> | Code review | Document what AI got wrong and what you fixed |
> | Oral defense | Explain why you chose certain patterns |

> [TIP] **Teaching Tip:** Frame this positively: "You've earned full AI access because you understand the fundamentals now. But with great power comes great responsibility. If AI generates code you can't explain, you don't understand it."

> [ENGAGE] **Gen-Z:** "AI is your 'senior developer' now — it writes code, you review it. If you can't explain what it does, you can't ship it. That's how real code reviews work."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the Identity errors you WILL see this week. Let's go through them so you don't spend 20 minutes Googling."

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | Identity tables not created              |
> | Run: dotnet ef migrations add AddIdentity|
> | Then: dotnet ef database update          |
> +------------------------------------------+
> +------------------------------------------+
> | [Authorize] -> blank page                 |
> | Login path not configured. Add:          |
> | options.LoginPath = "/Identity/..."      |
> +------------------------------------------+
> +------------------------------------------+
> | @User.Identity.Name is empty             |
> | UseAuthentication() must come BEFORE     |
> | UseAuthorization() in Program.cs         |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "Blank page on [Authorize] is like showing up to a party with no address. The bouncer knows you're invited but doesn't know where to send you. Fix: tell the bouncer where the login page is."

> [Q&A] **Student Q:** "Why does the password policy require a special character? That's annoying."
> **Short answer:** It's the default. You can change it.
> **Real answer:** The default policy requires uppercase, digit, special char, and 8+ chars. For class projects, you can relax it: `options.Password.RequireNonAlphanumeric = false`. In production, keep it strict.
> **The hidden question:** "How do I change it?" -> In the `AddDefaultIdentity` options block.

> [LOST] **If they're lost:** "The three things to check first: (1) Did you run the Identity migration? (2) Is `UseAuthentication()` before `UseAuthorization()`? (3) Did you scaffold the Identity pages? Those fix 90% of Identity issues."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: `UseAuthentication()` before `UseAuthorization()`. The order matters. Every time."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. The critical concept is the middleware pipeline order — `UseAuthentication` before `UseAuthorization` — write it on the board and leave it there. The club/wristband analogy should be used repeatedly. The #1 error is forgetting the Identity migration — drill `dotnet ef migrations add AddIdentity` followed by `dotnet ef database update`. The "aha" moment is the redirect to login on a protected page — make sure every student sees it happen. Full AI access begins this week, but with audit requirements (prompt log, code review, oral defense).

---

