## Week 7: Views & Layouts

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Live Razor Demo |
| Code Walkthrough | 30 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 7 strategy):** This is the week students finally see their apps look like real websites. The "aha" moment is when they create a layout and all pages instantly get a navbar. Spend extra time on `_ViewStart.cshtml` placement — it's the #1 cause of "my layout isn't applying."

---

### The Hook

> [SPEAK] **Script:** "Your website looks like it's from 1998. Three different pages, three different fonts, zero consistency. Today, we fix that. Your app will finally look like someone in this decade designed it."

> [SLIDE] **Slide:** Title: "From 1998 to 2026"  
> Left: Screenshot of a plain HTML page with Times New Roman, no styling, labeled "Before."  
> Right: Same content with a navbar, cards, footer, labeled "After Layout."

> [ENGAGE] **Gen-Z:** "Your app without a layout is like a TikTok with no filter — it works, but nobody wants to look at it. Today we add the filter."  
> **-> Poll:** "Raise your hand if you've ever judged a website by how it looks and left immediately. That's why layouts matter."

> [LOST] **If they're lost:** "Don't worry if you're not a designer. Layouts are about consistency, not beauty. Same navbar, same footer, same colors on every page. That's it."

---

### The Analogy

> [SPEAK] **Script:** "A shopping mall has a consistent design — same signage, same floor tiles, same lighting in every corridor. The individual stores (your pages) have their own content, but the hallway (the layout) stays the same. You don't redesign the hallway for every store. That's a Layout page."

> [BOARD] **Whiteboard:** Draw the mall analogy:
> ```
> +-------------------------------------+
> |  MALL LAYOUT (_Layout.cshtml)       |
> |  +-----+ +-----+ +-----+           |
> |  |Store| |Store| |Store|  <- Pages   |
> |  |  A  | |  B  | |  C  |  (Views)   |
> |  +-----+ +-----+ +-----+           |
> |  Same hallway, same entrance, same  |
> |  exit for every store               |
> +-------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "Think of your favorite app. What stays the same on every screen? The bottom nav? The top bar? That's the layout. The content that changes? That's the view. 10 seconds, go!"

> [LOST] **If they're lost:** "A layout is a template. Every page gets injected into it. Same header, same footer, different content in the middle. Like a Canva template — you change the text but keep the design."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (10 min Razor syntax -> 8 min layouts -> 7 partials + tag helpers)

> [SPEAK] **Script:** "Razor lets you mix C# and HTML in the same file. The `@` symbol is your escape hatch — it tells the engine 'this is C# code, not HTML.' Layouts wrap every page. Partials are reusable chunks. Tag helpers make HTML feel like HTML, not C#."

> [SLIDE] **Slide:** Show Razor syntax examples one at a time: variable output, loops, conditionals. Then show the layout structure with `@RenderBody()` highlighted. Then show a partial view.

> [TIP] **Teaching Tip:** Students will confuse `@{ }` (code block) with `@variable` (output). Emphasize: curly braces = execute code, no braces = print value. For layouts, the critical point is `_ViewStart.cshtml` — it must be in the `Views/` folder, not `Views/Shared/`.

> [ASK] **Ask the class:** "If I have 50 pages and I need to change the navbar — how many files do I edit without a layout?" (Answer: 50. With a layout: 1.)

> [ENGAGE] **Gen-Z:** "Razor syntax is like Instagram captions with hashtags. Regular text = HTML. `@something` = C# code. `@{ block }` = multiple lines of code. The `@` is your hashtag."  
> **-> Phone moment:** "Think about how Instagram templates work — same frame, different photo. That's exactly what a layout does."

> [Q&A] **Student Q:** "Why does the layout file start with an underscore?"
> **Short answer:** It's a convention — files starting with `_` are not directly accessible as views.
> **Real answer:** ASP.NET won't serve `_Layout.cshtml` if someone visits `/Shared/_Layout`. The underscore marks it as a "support file" — it's used by other views, not accessed directly.
> **The hidden question:** "Can I name it something else?" -> Yes, but don't. The underscore convention is universal.

> [Q&A] **Student Q:** "What's the difference between a partial view and a regular view?"
> **Short answer:** A partial is a reusable chunk. A regular view is a full page.
> **Real answer:** Partials don't run `_ViewStart` and don't need a layout. They're like components — you include them inside other views. Think of them as LEGO bricks.
> **The hidden question:** "When should I use a partial?" -> When the same HTML appears on multiple pages (product cards, nav items, forms).

> [LOST] **If they're lost:** "Forget Razor for a second. Think of it like this: you have one HTML file with a hole in the middle (`@RenderBody()`). Every page fills that hole. The rest of the HTML stays the same. That's a layout."

---

### Code Walkthrough

> [TIME] **Pacing:** 30 min (10 min layout setup -> 10 min view + tag helpers -> 10 min test + partial)

> [SPEAK] **Script:** "Let's build a themed site from scratch. First the layout, then a view that uses it, then a partial for reusable cards. Watch how the pieces connect."

> [SLIDE] **Slide:** Show `_Layout.cshtml` first — highlight the `@RenderBody()` spot. Then show `_ViewStart.cshtml`. Then show a page view getting injected into the layout.

> [TIP] **Teaching Tip:** **Type this live.** Create the `_Layout.cshtml` file, then `_ViewStart.cshtml`, then a page view. After each step, run the app and show the result. The "aha" moment is when they see the navbar appear on a page they didn't add it to.

> [BOARD] **Whiteboard:** Draw the file structure and rendering flow:
> ```
> Views/
>   _ViewStart.cshtml  ->  Layout = "_Layout"
>   Shared/
>     _Layout.cshtml   ->  <nav> @RenderBody() <footer>
>   Games/
>     Index.cshtml     ->  injected into @RenderBody()
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Create the `_Layout.cshtml` with me. Then `_ViewStart.cshtml`. Then a page. Run it after each step. Watch the layout appear like magic."

> [Q&A] **Student Q:** "Why do I need `_ViewStart.cshtml`? Can't I just set the layout in each view?"
> **Short answer:** You can, but it's repetitive.
> **Real answer:** `_ViewStart.cshtml` runs before every view in its folder and subfolders. Set the layout once, and every view inherits it. Without it, you'd write `@{ Layout = "_Layout"; }` in every single view file.
> **The hidden question:** "Is this really necessary?" -> For 3 pages, no. For 30, absolutely.

> [LOST] **If they're lost:** "Let's do the simplest layout possible: an HTML file with `<h1>My Site</h1>`, then `@RenderBody()`, then `<footer>Copyright</footer>`. That's it. Every page gets that wrapper."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "Consistent UI isn't just about looks — it builds user trust. Amazon, Facebook, and Reddit all use layout systems. Changing your nav bar in one file instead of 50 pages saves hours. In industry, layouts are non-negotiable."

> [SLIDE] **Slide:** Side-by-side: a site with inconsistent pages (different nav, different fonts) vs a site with a layout. Label: "Which one would you trust with your GCash?"

> [TIP] **Teaching Tip:** Keep this to 5 minutes. The practical point is time-saving: "One file change vs 50 file changes." That's the argument that convinces students.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have visited a website where every page looked different and immediately left?" (Most hands.) "That's what happens without layouts."

> [LOST] **If they're lost:** "You don't need to be a designer. Layouts are about consistency. Same navbar everywhere. Same footer everywhere. That alone makes your site look 10x better."

---

### Exercise: Consistent Themed Site

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Take your GameZone site from Week 5 and add a layout. Navigation bar, footer, consistent styling. Every page should look like it belongs to the same site. You have 40 minutes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Create `_Layout.cshtml` with nav (3+ links using Tag Helpers)
> - [ ] Add `@RenderBody()` in the main content area
> - [ ] Add footer with copyright
> - [ ] Create `_ViewStart.cshtml` to set the layout
> - [ ] Add `site.css` with basic styling
> - [ ] Bonus: Create `_ProductCard.cshtml` partial view

> [TIP] **Teaching Tip:** Circulate during the first 10 minutes — students will get stuck on `_ViewStart.cshtml` placement. The most common error: putting it in `Views/Shared/` instead of `Views/`.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person builds the layout HTML, the other writes the CSS. Then combine and test on all pages."

> [ASK] **Mid-exercise check-in (at 20 min):** "How many pages have the navbar?" (Show of hands.) "Visit each page — does the nav look the same everywhere? That's the layout working."

> [LOST] **If they're lost:** "Start with just the layout file. Get it working with one page. Then add the CSS. Then add the partial. Don't try to style everything at once."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, AI can help you debug layout issues. Ask it why your layout isn't applying, why your partial isn't rendering, or why your CSS isn't loading. But don't ask it to design your site."

> [SLIDE] **Slide:** Prompt template:
> "I created a layout at [path] but my pages don't use it. Here's my _ViewStart.cshtml [paste]."

> [TIP] **Teaching Tip:** Demonstrate asking AI about a layout issue vs asking it to generate HTML. The first is learning. The second is copying.

> [ENGAGE] **Gen-Z:** "AI is your 'layout debugger' — it helps you figure out why things aren't rendering, but it doesn't design your site for you. You still need to pick the colors."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the layout errors you'll see this week. Most are file placement or naming issues."

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | Layout not applying                      |
> | Is _ViewStart.cshtml in Views/ folder?   |
> | (Not Views/Shared/ — that's wrong)       |
> +------------------------------------------+
> +------------------------------------------+
> | CSS not loading                          |
> | Check: wwwroot/css/site.css exists       |
> | Using ~/ for root path: href="~/css/..." |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "Layout not applying is like putting your profile picture in the wrong folder on your phone. The file exists, but the app can't find it. Check the path."

> [Q&A] **Student Q:** "Why does `@RenderBody()` have to be called exactly once?"
> **Short answer:** Because there's only one place for the page content to go.
> **Real answer:** If you call it twice, ASP.NET doesn't know which copy gets the content. It throws an exception to prevent ambiguous rendering.
> **The hidden question:** "What if I want content in two places?" -> Use `@RenderSection()` instead.

> [LOST] **If they're lost:** "The three things to check: (1) Is `_ViewStart.cshtml` in `Views/`? (2) Does `_Layout.cshtml` exist in `Views/Shared/`? (3) Does the layout file have `@RenderBody()`? Those fix 90% of layout issues."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: `_ViewStart.cshtml` goes in `Views/`, not `Views/Shared/`. That's the #1 mistake."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. The "aha" moment is the layout appearing on all pages — make sure students see it happen live. The #1 pitfall is `_ViewStart.cshtml` placement — emphasize `Views/` not `Views/Shared/`.

---

