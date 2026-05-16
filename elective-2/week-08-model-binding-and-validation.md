## Week 8: Model Binding & Validation

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Live Form Demo |
| Code Walkthrough | 30 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 8 strategy):** This is the first week students build forms that accept user input. The magic of model binding ("it just populates my object!") is exciting, but validation is where real learning happens. Students will struggle with `ModelState.IsValid` — walk through the validation flow slowly and deliberately.

---

### The Hook

> [SPEAK] **Script:** "That 'Email is required' red text that makes you feel personally attacked? That's validation. And today you're not just seeing it — you're building it. Your form will reject empty fields before your server even breaks a sweat."

> [SLIDE] **Slide:** Title: "You've Been Validated"  
> Left: Screenshot of a form with red error messages ("Name is required", "Invalid email").  
> Right: Same form with all green checkmarks.  
> Subtitle: "Today you build both."

> [ENGAGE] **Gen-Z:** "Every form you've ever filled out — GCash signup, Shopee checkout, even your college enrollment — they all use validation. Today you become the one who decides what 'valid' means."  
> **-> Poll:** "Raise your hand if you've ever submitted a form and got an error that made no sense. Today you'll learn how to write better error messages."

> [LOST] **If they're lost:** "Validation is just checking if the data makes sense before saving it. Empty name? Reject. Bad email? Reject. That's it. We're just learning how to code those checks."

---

### The Analogy

> [SPEAK] **Script:** "Model binding is like airport immigration. The officer (model binder) looks at your passport (form data) and automatically fills out a visitor record (C# model). If the name field is blank, they stamp 'REQUIRED' in red. If the email doesn't have an @ symbol, they flag it. All this happens before you even leave the airport counter."

> [BOARD] **Whiteboard:** Draw the immigration analogy:
> ```
> Form Data (Passport)          C# Model (Visitor Record)
> +-----------------+           +-----------------+
> | Name: "Juan"    |  ------->  | Name = "Juan"   | [OK]
> | Email: "juan@"  |  ------->  | Email = "juan@" | [NO] Invalid!
> | Age: "abc"      |  ------->  | Age = ???       | [NO] Not a number!
> +-----------------+           +-----------------+
> ```

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "If you submit a form with an empty name field — what should happen? Should the server save it? 10 seconds, go!" (Answer: No — validation rejects it.)

> [LOST] **If they're lost:** "Think of it like a bouncer checking IDs at a club. Model binding = reading the ID. Validation = checking if you're 18+. If you pass, you get in. If not, you get an error message."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (10 min model binding -> 10 min data annotations -> 5 min client-side validation)

> [SPEAK] **Script:** "Model binding is the magic that turns form fields into C# objects automatically. You don't write `Request.Form['Name']` — ASP.NET does it for you. Then data annotations add validation rules right on your model. And client-side validation catches errors before the form even submits."

> [SLIDE] **Slide:** Show the model binding flow first: HTML form -> C# object. Then reveal data annotations one at a time: `[Required]`, `[EmailAddress]`, `[StringLength]`, `[Range]`. Finally show the form with Tag Helpers.

> [TIP] **Teaching Tip:** The most important concept: **property names must match form field names**. If your model has `Name` but your input has `name="UserName"`, binding fails. Tag Helpers (`asp-for="Name"`) handle this automatically — emphasize this benefit.

> [ASK] **Ask the class:** "What happens if someone submits a form with `Name: ''` (empty string) and the model has `[Required]`?" (Answer: `ModelState.IsValid` is false. The form returns with an error message.)

> [ENGAGE] **Gen-Z:** "Data annotations are like TikTok's content filters. `[Required]` = 'you must fill this in.' `[EmailAddress]` = 'this better look like an email.' `[Range(1,5)]` = 'pick a number between 1 and 5, no cheating.' The model enforces the rules."  
> **-> Phone moment:** "Open any app with a signup form. The red error messages? Those are data annotations in action."

> [Q&A] **Student Q:** "Why do I need server-side validation if I have client-side validation?"
> **Short answer:** Client-side can be bypassed.
> **Real answer:** Anyone can disable JavaScript or use tools like Postman to send requests directly to your server. Client-side validation is for user experience. Server-side validation is for security. You need both.
> **The hidden question:** "Isn't client-side enough?" -> Never. It's a convenience feature, not a security feature.

> [Q&A] **Student Q:** "What does `ModelState.IsValid` actually check?"
> **Short answer:** All data annotations on the model.
> **Real answer:** It checks every property's validation attributes (`[Required]`, `[EmailAddress]`, etc.) AND checks if the model binder could convert the form values to the correct types. If either fails, `IsValid` is false.
> **The hidden question:** "How do I know which field failed?" -> `ModelState.Values.SelectMany(v => v.Errors)` gives you all errors.

> [LOST] **If they're lost:** "Forget the technical terms. The flow is: (1) User fills form. (2) ASP.NET creates a C# object from the form data. (3) Check if the object passes all rules. (4) If yes, save it. If no, show errors. That's the entire concept."

---

### Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min model -> 10 min controller -> 10 min view -> 5 min trace-through)

> [SPEAK] **Script:** "Let's build a complete contact form with validation. Model, controller, view — the full stack. Watch how the pieces connect and how validation errors flow back to the user."

> [SLIDE] **Slide:** Show `ContactFormModel` first with all annotations. Then the controller with GET and POST actions. Then the view with Tag Helpers. Reveal one piece at a time.

> [TIP] **Teaching Tip:** **Type this live.** After building the form, deliberately submit it with empty fields to show validation errors appearing. Then submit with valid data to show the success redirect. Students need to see both paths.

> [BOARD] **Whiteboard:** Trace the validation flow:
> ```
> User submits form (POST /contact)
>   v
> Model binding: form data -> ContactFormModel
>   v
> Validation: check [Required], [EmailAddress], etc.
>   v
> ModelState.IsValid?
>   +- NO -> return View(model) -> form shows errors
>   +- YES -> process data -> RedirectToAction("ThankYou")
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Build the contact form with me. Model first, then controller, then view. After each piece, we'll test it. Submit with empty fields — watch the red errors appear."

> [Q&A] **Student Q:** "Why do I need `@Html.AntiForgeryToken()`?"
> **Short answer:** It prevents CSRF attacks.
> **Real answer:** Without it, a malicious website could submit a form to your app on behalf of a logged-in user. The anti-forgery token proves the form came from your actual page, not a third-party site.
> **The hidden question:** "Is this really necessary for a contact form?" -> Yes. It's a security best practice for all POST forms.

> [LOST] **If they're lost:** "Let's focus on just the model and the `ModelState.IsValid` check first. Get those working. Then add the form. Then add the validation scripts. Build up gradually."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "Bad data breaks databases, crashes apps, and makes users angry. Validation is your first line of defense. Every production app validates input — not just on the client (easily bypassed) but on the server (mandatory)."

> [SLIDE] **Slide:** Screenshot of a news headline about a data breach caused by unvalidated input. Label: "This could have been prevented with `[Required]` and `[EmailAddress]`."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. The security angle is the strongest argument: "Validation isn't about being mean to users. It's about protecting your database from bad data."

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have signed up for something and got a confirmation email with weird characters in your name? That's what happens without validation."

> [LOST] **If they're lost:** "You don't need to memorize every annotation today. Just understand: validation = check data before saving. `[Required]` is the most important one. Start there."

---

### Exercise: Working Contact Form

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Build a contact form with full validation. Model with data annotations, GET and POST actions, Tag Helpers, and client-side validation. You have 40 minutes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Model: `ContactFormModel` with Name, Email, Subject, Message, Priority
> - [ ] GET action: Display empty form
> - [ ] POST action: Validate -> show errors or redirect to "Thank You"
> - [ ] View: Tag Helpers for all form elements
> - [ ] Client-side validation (jQuery validation scripts)
> - [ ] Field-level AND summary validation errors

> [TIP] **Teaching Tip:** Circulate during the first 10 minutes — students will get stuck on including the jQuery validation scripts. The "aha" moment is when they submit with empty fields and see red errors appear instantly (client-side) without a postback.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person builds the model and controller, the other builds the view with Tag Helpers. Then test together — submit invalid data and watch the errors appear."

> [ASK] **Mid-exercise check-in (at 20 min):** "How many have the form displaying?" (Show of hands.) "How many have validation errors appearing?" "If neither, let's do a quick group debug."

> [LOST] **If they're lost:** "Start with just the model and the GET action. Get the form displaying. Then add the POST action with `ModelState.IsValid`. Then add validation attributes. Don't try to build everything at once."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, AI helps you debug validation issues. Ask it why `ModelState.IsValid` is false, why error messages aren't showing, or why client-side validation isn't working. But don't ask it to generate your form."

> [SLIDE] **Slide:** Prompt template:
> "I'm submitting a form but ModelState.IsValid is false. Here's my model [paste] and form [paste]. What am I missing?"

> [TIP] **Teaching Tip:** Demonstrate a good debugging prompt. Show how AI can identify a missing `[Required]` attribute or a mismatched property name. This is practical, not cheating.

> [ENGAGE] **Gen-Z:** "AI is your 'validation detective' — it helps you figure out why the form is rejecting data. Use it to find the bug, not to write the code."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the validation errors you'll see this week. Most are about property names or missing scripts."

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | ModelState.IsValid is false but no       |
> | errors visible                           |
> | Use ModelState.Values.SelectMany         |
> | (v => v.Errors) to find hidden errors    |
> +------------------------------------------+
> +------------------------------------------+
> | Client-side validation not working       |
> | Missing jQuery Validation scripts        |
> | Check: _Layout includes the scripts      |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "Hidden validation errors are like a group chat where someone is mad but won't say why. `ModelState.Values.SelectMany(v => v.Errors)` is you asking 'okay, what's actually wrong?'"

> [Q&A] **Student Q:** "Why does my form give a 400 error when I submit?"
> **Short answer:** Missing anti-forgery token.
> **Real answer:** ASP.NET Core requires `[ValidateAntiForgeryToken]` on POST actions by default. If your form doesn't include `@Html.AntiForgeryToken()`, the server rejects the request with a 400 error.
> **The hidden question:** "Can I turn this off?" -> Yes, but don't. It's a critical security feature.

> [LOST] **If they're lost:** "The three things to check: (1) Does your model have `[Required]` on the right properties? (2) Does your form use `asp-for` Tag Helpers? (3) Does your POST action check `ModelState.IsValid`? Those fix 90% of validation issues."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: always check `ModelState.IsValid` before processing form data. Never trust user input."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. The validation flow (form -> bind -> validate -> isValid -> process/return) is the core mental model. Test both paths — valid and invalid submissions — so students see the full cycle. The #1 pitfall is forgetting jQuery validation scripts for client-side validation.

---

## TERM 3: PREFINALS — Data & Persistence + Consuming APIs

---

