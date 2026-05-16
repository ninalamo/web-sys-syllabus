## Week 12: API Versioning & Documentation

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Versioning Strategy Diagram |
| Code Walkthrough | 30 min | Live Code (versioning setup -> v2 controller -> Swagger -> deprecation) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 12 strategy):** This is the "professional API" week — students learn how real companies evolve APIs without breaking clients. The restaurant menu update analogy is essential. Build progressively: versioning setup -> v1 + v2 controllers -> Swagger multi-version -> deprecation headers. Emphasize: versioning is for EVOLUTION, not for fixing bad design. The deprecation headers (RFC 8594) are a nice professional touch that impresses. Students will struggle with Swagger showing duplicate endpoints — this is the most common bug.

### 1. The Hook

> [SPEAK] **Script:** "Remember when Twitter changed its API and your favorite third-party app just... stopped working? Or when Google deprecated an API you were using and gave you 6 months to migrate? API versioning is how companies change their APIs without breaking everyone's apps. It's the difference between 'we updated our API' and 'we broke your app.' You're going to learn how to evolve an API gracefully — because in the real world, APIs never stay the same."

> [SLIDE] **Slide:** Title: "How to Change Your API Without Breaking the World"  
> Left: Twitter API v1 -> v2 migration — broken apps, angry tweets. Right: Stripe API versioning — "pin to any version, works forever." Subtitle: "The difference is versioning strategy."

> [TIP] **Teaching Tip:** This hook creates stakes — students realize that API changes have real consequences for real users. Make it personal: "Raise your hand if you've ever had an app stop working after an update."

> [ENGAGE] **Gen-Z:** "API versioning is like your phone's OS update. iOS 17 doesn't delete your iOS 16 apps — they still work. Apple gives developers time to update their apps for the new version. That's versioning: old stuff keeps working while new stuff rolls out."  
> **-> Phone moment:** "Open your phone's settings -> About -> Software version. See that number? That's versioning. Your apps don't break when the OS updates because Apple maintains backward compatibility."

> [LOST] **If they're lost:** "Don't worry if you've never versioned an API. It's simpler than it sounds: you keep the old version working while you build the new one. Clients choose which version to use."

---

### 2. The Analogy

> [SPEAK] **Script:** "API versioning is like a restaurant updating its menu. The old menu had 'Burger #1' for $5. The new menu has 'Gourmet Burger' for $12. If you just swap the menus, customers who ordered 'Burger #1' get confused. Instead, you keep both menus available for a while. Regular customers can still order from the old menu. New customers get the new menu. Eventually, you phase out the old one — but you give everyone time to adjust. API versioning does the same thing for developers."

> [BOARD] **Whiteboard:** Draw the menu comparison:
> ```
> OLD MENU (v1):                  NEW MENU (v2):
> +------------------+            +------------------+
> | Burger #1   $5   |            | Gourmet Burger $12|
> | Fries       $3   |            | Truffle Fries  $6 |
> | Soda        $2   |            | Craft Soda     $4 |
> +------------------+            +------------------+
> 
> BOTH MENUS AVAILABLE -> customers choose
> Eventually: OLD MENU retires with notice
> "Burger #1 discontinued Jan 1, 2027"
> ```

> [TIP] **Teaching Tip:** The menu analogy maps perfectly: old menu = v1 API, new menu = v2 API, "both available" = parallel versions, "discontinued notice" = deprecation headers. Draw it and reference it throughout.

> [ENGAGE] **Gen-Z:** "The deprecation headers are like your Shopee item showing 'This product will be delisted on Jan 1.' You can still buy it, but you know it's going away and should find an alternative."  
> **-> Turn to your neighbor:** "In the restaurant analogy, what's the API version? What's the deprecation header? 15 seconds, discuss!"

> [LOST] **If they're lost:** "Forget the restaurant. Versioning = keep old API working while building new one. Deprecation = tell clients "this version is going away, use the new one." That's the whole thing."

---

### 3. Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min URL versioning -> 5 min header versioning -> 5 min deprecation strategy -> 5 min Swagger per version -> 5 min breaking vs non-breaking changes)

> [SPEAK] **Script:** "APIs change. You add fields, remove fields, change data types, rename endpoints. If you just push changes, every client that depends on the old behavior breaks. Versioning lets you introduce changes while keeping the old version working for existing clients. Let me show you the strategies."

> [SLIDE] **Slide:** Show one concept at a time. For each: (1) the concept, (2) a code example, (3) when to use it. Don't show all concepts at once.

> [TIP] **Teaching Tip:** Spend the most time on breaking vs non-breaking changes — this is the most important concept. Students need to understand: adding a field is safe, removing a field is breaking. Draw a decision tree on the whiteboard.

> [ASK] **Ask the class:** "If I add a new field `imageUrl` to the Post response, is that a breaking change?" (No — old clients ignore unknown fields.) "If I rename `title` to `name`?" (Yes — old clients expect `title` and will crash.) "If I change `id` from integer to string?" (Yes — old clients expect a number.)

> [ENGAGE] **Gen-Z:** "URL versioning is like having v1 and v2 of a game app on your phone. Both work, but v2 has new features. Header versioning is like the same app but with a settings toggle for 'new UI' — same URL, different behavior."  
> **-> Phone moment:** "Look at any API URL with a version in it. `/api/v1/users` vs `/api/v2/users`. See how the version is in the path? That's URL versioning — the most common approach."

> [Q&A] **Student Q:** "Why not just always use the latest version and force everyone to update?"
> **Short answer:** Because you can't control when clients update.
> **Real answer:** Third-party developers, mobile apps (which need app store approval), and enterprise clients all have their own release cycles. You can't force them to update on your timeline. Versioning lets YOU change your API on YOUR schedule while clients migrate at THEIR pace.
> **The hidden question:** "How long should I maintain old versions?" -> Depends on your clients. AWS maintains v1 APIs that are 15+ years old. Stripe lets you pin to any version forever.

> [Q&A] **Student Q:** "What counts as a breaking change?"
> **Short answer:** Anything that makes existing client code stop working.
> **Real answer:** Breaking: removing a field, renaming a field, changing a field type, removing an endpoint, changing an error format. Non-breaking: adding a field, adding an endpoint, adding a query parameter, adding an optional field. The rule: if existing client code still works without changes, it's non-breaking.
> **The hidden question:** "What about adding a required field?" -> That's breaking. Old clients won't send it, so their requests will fail.

> [LOST] **If they're lost:** "The simplest versioning summary: (1) URL versioning = `/api/v1/` vs `/api/v2/`. (2) Keep old version working. (3) Deprecation headers tell clients to migrate. (4) Breaking changes = new version. Non-breaking = same version. That's 90% of what you need."

---

### 4. Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min install packages -> 10 min versioning setup -> 10 min v1 + v2 controllers -> 5 min Swagger + deprecation)

> [SPEAK] **Script:** "Let's add versioning to the ASP.NET Core API. We'll install the versioning package, configure it in Program.cs, create v1 and v2 controllers, set up multi-version Swagger, and add deprecation headers. Each step builds on the last."

> [SLIDE] **Slide:** Show each step on its own slide. Step 1: install packages. Step 2: Program.cs versioning config. Step 3: PostsController (v1) + PostsV2Controller (v2). Step 4: Swagger multi-version + deprecation headers.

> [TIP] **Teaching Tip:** **Type each step live.** For the Swagger setup, emphasize: each version needs its own `SwaggerDoc` and `SwaggerEndpoint`. For deprecation, show the headers being added manually — `Deprecated = true` alone doesn't add response headers.

> [BOARD] **Whiteboard:** Draw the versioning architecture:
> ```
> /api/v1/posts -> PostsController (v1)
> /api/v2/posts -> PostsV2Controller (v2)
> 
> Swagger UI:
>   Dropdown: [Blog API v1 =>]
>             Blog API v1
>             Blog API v2
> 
> Deprecation headers (v1 responses):
>   Deprecation: true
>   Sunset: Sat, 01 Jan 2027 00:00:00 GMT
>   Link: </api/v2/posts>; rel="successor-version"
> ```

> [ENGAGE] **Gen-Z:** "Setting up API versioning is like maintaining two branches of a game. v1 is the stable release everyone plays. v2 is the beta with new features. Both run on the same server, players choose which version to use."  
> **-> Type-along:** "Install the packages first. Then configure versioning in Program.cs. Then create the v1 controller (your existing one). Then create the v2 controller with a breaking change. Then set up Swagger for both versions."

> [Q&A] **Student Q:** "Why do I need two separate controllers? Can't I put version logic in one controller?"
> **Short answer:** You can, but separate controllers are cleaner and easier to maintain.
> **Real answer:** With separate controllers, each version is isolated. V1 stays exactly as it is. V2 can have completely different logic, response shapes, and validation rules. If you put version logic in one controller, you get if/else branches for every endpoint — messy and hard to maintain. Separate controllers = clean separation.
> **The hidden question:** "What if the change is small?" -> For small changes, you can handle it in one controller. But for this class, use separate controllers to learn the pattern.

> [LOST] **If they're lost:** "Start with just the versioning setup in Program.cs. Get `/api/v1/posts` working (your existing controller). Then add the v2 controller. Then set up Swagger for both. Then add deprecation headers. One step at a time."

---

### 5. The "Industry Reality"

> [SPEAK] **Script:** "AWS has APIs that are over 15 years old and still running v1 alongside v12. They never break existing clients — they add new versions and deprecate old ones with years of notice. Stripe's API versioning is so good that you can pin your integration to a specific version and it will work forever. The deprecation headers you're learning are an IETF standard (RFC 8594) used by Google, GitHub, and Microsoft."

> [SLIDE] **Slide:** AWS API versioning timeline (v1 from 2006 still running). Stripe API versioning dashboard. Stat: "AWS maintains 12+ API versions simultaneously. Stripe: pin to any version, works forever."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Show them that versioning isn't academic — it's what every major platform does to maintain trust with developers.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have used an API that just... changed without warning?" (Some hands.) "That's why versioning exists. Companies that don't version lose developer trust. Companies that do (Stripe, AWS, GitHub) keep developers happy for years."

> [LOST] **If they're lost:** "You don't need to know AWS's entire versioning strategy. Just understand: versioning = keep old working, add new, deprecate gracefully. That's the professional standard."

---

### 6. Exercise

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min implementation -> 10 min share)

> [SPEAK] **Script:** "Add versioning to your existing ASP.NET Core API. Create a v2 with at least one breaking change, keep v1 working, configure multi-version Swagger, add deprecation headers, and write a migration guide."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Install and configure `Asp.Versioning.Mvc`
> - [ ] Create v2 of API with at least one breaking change
> - [ ] Keep v1 working alongside v2
> - [ ] Configure Swagger UI to show both versions
> - [ ] Mark v1 as deprecated with deprecation headers
> - [ ] Write migration guide (v1 -> v2 changes)
> - [ ] Test both versions in Swagger UI
> - [ ] Verify `api-supported-versions` and `api-deprecated-versions` headers

> [TIP] **Teaching Tip:** The Swagger multi-version setup (requirement 4) and deprecation headers (requirement 5) are the hardest parts. Students will struggle with `GroupNameFormat` and manually adding response headers. Circulate and help with these specifically.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the versioning setup and v2 controller, the other handles Swagger config and deprecation headers. Then combine and test both versions together."

> [LOST] **If they're lost:** "Start with installing the packages and configuring versioning in Program.cs. Get v1 working with the versioned URL. Then add v2. Then Swagger. Then deprecation. Build incrementally."

---

### 7. AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, ask AI to generate a versioning strategy for your API, then review it for breaking vs non-breaking changes. Ask 'Is this change actually breaking?' and 'What's the migration path for existing clients?'"

> [SLIDE] **Slide:** AI usage guide:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate versioning setup for ASP.NET Core" | "Decide what's a breaking change" |
> | "Is adding a field a breaking change?" | "Write my migration guide" |

> [TIP] **Teaching Tip:** Point out the common AI mistakes: suggesting deleting old version immediately, not understanding URL vs header versioning tradeoffs, generating Swagger configs that don't separate versions. Teach students to question AI's versioning decisions.

> [ENGAGE] **Gen-Z:** "AI is like a consultant who suggests big changes without understanding the cost to your users. It might say 'just delete v1' — but that breaks everyone using it. Always review: who does this affect?"

---

### 8. Debugging / "Watch Out For" Section

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the versioning errors and mental model traps you'll hit this week. The duplicate Swagger endpoints alone will save you from a confusing debugging session."

> [SLIDE] **Slide:** Error cards:
> ```
> +--------------------------------------+
> | "Swagger shows duplicate endpoints"  |
> | API explorer grouping incorrectly    |
> | Fix: GroupNameFormat +               |
> | SubstituteApiVersionInUrl            |
> +--------------------------------------+
> +--------------------------------------+
> | "400 — API version not found"        |
> | Calling /api/posts without version   |
> | Fix: use /api/v1/posts or set default|
> +--------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The duplicate Swagger issue is like having two identical items on your Shopee cart — you can't tell which is which. GroupNameFormat separates them into v1 and v2 sections."

> [Q&A] **Student Q:** "Versioning is not a substitute for good design? So I can't use versioning to fix bad APIs?"
> **Short answer:** You can, but it's not the right tool.
> **Real answer:** If your v1 API is poorly designed, versioning just lets you ship v2 that's also poorly designed. Versioning is for EVOLUTION — adding features, improving response shapes, supporting new use cases. It's not for fixing fundamental design mistakes. If v1 is bad, the right approach is to design v2 well and migrate clients — not to keep versioning your way out of bad decisions.
> **The hidden question:** "So what if I already have a bad v1?" -> Design v2 well. Write a clear migration guide. Give clients time to move. Learn from v1's mistakes.

> [LOST] **If they're lost:** "The #1 issue: Swagger shows duplicate endpoints. Check that `GroupNameFormat = "'v'VV"` is set and `SubstituteApiVersionInUrl = true` is enabled. Each version should have its own Swagger document. That fixes 90% of Swagger versioning issues."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The core arc is: versioning need -> restaurant menu analogy -> URL versioning -> v1 + v2 controllers -> multi-version Swagger -> deprecation headers. The restaurant menu analogy is the key mental model. Breaking vs non-breaking changes is the most important concept — draw the decision tree on the whiteboard. Emphasize: versioning is for evolution, not for fixing bad design. The deprecation headers (RFC 8594) are a professional touch. Common pitfalls: Swagger showing duplicate endpoints (missing GroupNameFormat), 400 errors (missing version in URL), deprecation headers not appearing (need manual header addition, not just `Deprecated = true`).

---

