# Elective 2: Building Web Products — Full Lesson Content

---

## TERM 1: PRELIM — C# for MVC + Web Foundations

---

## Week 1: C# Translation Bootcamp

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Side-by-Side Comparison |
| Code Walkthrough | 35 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 5 min | Overflow |

> [TIP] **Teaching Tip (first week strategy):** This is Week 1 — students are nervous, some haven't written code in months, and a few might have missed the prerequisite. Keep the energy high and the stakes low. The goal is not mastery — it's "I survived and I understand the map." Tell them explicitly: "If you only get one thing from this week, it should be: curly braces, semicolons, and `var`."

---

### The Hook

> [SPEAK] **Script:** "You already know .NET concepts through VB. C# is the same ideas, different syntax. Think of it like speaking the same language with a different accent. Let's see how they compare — side by side."

> [SLIDE] **Slide:** Title: "Welcome to C# — You Already Know This"  
> Left column: VB logo with "You know this"  |  Right column: C# logo with "Now add this"  
> Subtitle: "Same .NET. Different syntax. More options."

> [TIP] **Teaching Tip:** The goal is to bridge from what they know to what the industry uses. Keep it positive — "you already understand OOP and .NET, now here's the syntax that most companies use." Frame it as expanding their toolkit, not replacing what they learned.

> [ENGAGE] **Gen-Z:** "C# and VB are like having two phones — one Android, one iOS. Same apps (Facebook, TikTok), different way of swiping. You already know one, now you're learning the other."  
> **-> Poll:** "Raise your hand if you've written code in VB before." (Acknowledge their existing knowledge as valuable.)

> [LOST] **If they're lost:** Some incoming students might not have strong VB. That's fine. Say: "If you don't know VB well, don't worry — we're starting from scratch with C#. VB knowledge is a head start, not a requirement."

---

### The Analogy

> [SPEAK] **Script:** "Learning C# from VB is like switching from an automatic to a manual transmission. The destination is the same — you're still writing .NET code — but you get more direct control over how things work. You declare your types explicitly, close your own curly braces, and decide exactly what's `public` vs `private`. It's the same road, just a different driving experience."

> [SLIDE] **Slide:** Side-by-side images: an automatic car gear shift labeled "Familiar (VB)" and a manual stick shift labeled "Expanded (C#)".  
> Below: "Same .NET platform. More options in your toolkit."

> [BOARD] **Whiteboard:** Draw a line down the middle. Left: "VB syntax" — write keywords: `End Function`, `Dim`, `Then`. Right: "C# syntax" — write keywords: `}`, `;`, `var`. Draw an arrow from left to right labeled "Translation mode."

> [TIP] **Teaching Tip:** The manual transmission analogy works for about 70% of Filipino students — many have experience with jeepneys or family cars. For the 30% who don't drive, add: "Or like switching from Globe to Smart. Same phone, different network, different settings."

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "On a scale of 'automatic' to 'manual,' where are you in your coding journey right now?" (10 seconds, then ask 2 people to share.)

> [LOST] **If they're lost:** "Think of it like phone OS updates. Android to iOS. Same apps (Facebook, TikTok), different way of swiping. You know the destination, you just need to learn the new gestures."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (15 min lecture -> 5 min side-by-side -> 5 min Q&A)

> [SPEAK] **Script:** "Here's the cheat sheet for this entire week. Print this. Put it on your wall. There are exactly 6 things different between VB and C#: curly braces, semicolons, `var`, string interpolation, LINQ, and properties. Everything else is the same." (Proceed through the comparison table.)

> [SLIDE] **Slide:** The comparison table from the original content — but reformatted as a single readable slide with one row highlighted at a time. Do NOT show all rows at once (cognitive overload). Reveal one row, explain it, then reveal the next.

> [SLIDE] **Whiteboard:** After the slide, redraw the table from memory. Ask the class to call out differences. This acts as a recall test. "What's one difference?" — write it. "Give me another." Keep going until they cover all 6.

> [TIP] **Teaching Tip:** The comparison table is the nucleus of this section. Spend the most time on **case sensitivity** (it will cause the most errors today) and **`var`** (misunderstood concept — students think it means "no type"). For `var`, emphasize: "It's not typeless. It's 'compiler picks the type.' Very different."

> [ASK] **Ask the class:** "Which of these differences do you think will bite you the most?" (Pause. Let them call out guesses. Someone will say semicolons. Confirm: "Yes. You will forget semicolons. I still forget semicolons.")

> [ENGAGE] **Gen-Z:** "This table is the 'cheat code' for leveling up from VB to C#."  
> **-> Phone moment:** "Take a photo of this table. Name it 'csharp-cheatsheet.' You'll reference it every week this term."

> [Q&A] **Student Q:** "Do we have to memorize all these?"
> **Short answer:** No. You'll memorize them by making mistakes.
> **Real answer:** The errors force you to learn. Every missing semicolon or wrong case will throw a compiler error. Read the error, fix it, move on. By Week 3, it's automatic.
> **The hidden question:** "How much effort does this take?" -> Less than you think. Your VB brain just needs retraining.

> [Q&A] **Student Q:** "Why does Microsoft even have two languages?"
> **Short answer:** Historical. VB was for beginners, C# for professionals. They kept both for legacy, but new features only go to C#.
> **The hidden question:** "Why are we switching mid-program?" -> Because the industry did.

> [LOST] **If they're lost:** Some students freeze at the table. Pivot to a **code-only comparison** — show one VB line, immediately show the C# equivalent, repeat. No table, just code side-by-side. Say: "Forget the table. Here's the pattern: VB says `End Something`, C# says `}`. That's 90% of it."

---

### Code Walkthrough

> [TIME] **Pacing:** 35 min (10 min read-along -> 15 min live type -> 10 min trace-through)

> [SPEAK] **Script:** "Let me show you a class you already know in VB. Here it is. Now here it is in C#. Don't read it — *scan* it. What's the same? What's different?" (Show the VB Student class, then the C# version.)

> [SLIDE] **Slide:** Side-by-side of the VB and C# `Student` class. The two code blocks on one slide. Use color coding: green = same parts, red = syntax differences.

> [TIP] **Teaching Tip:** Walk through this **line by line**, pointing at each one:
> - "VB says `Public Class Student` — C# says `public class Student` (lowercase `class`!)"
> - "VB says `End Class` — C# says `}`"
> - "VB says `Public Property Name As String` — C# says `public string Name { get; set; }`"
>
> The goal is pattern recognition, not memorization.

> [BOARD] **Whiteboard:** Draw the "mental stack" for the console app entry point:
> ```
> Program.cs execution (top to bottom)
> +-----------------+
> | Console.WriteLine|  <- line 1
> | var name = ...   |  <- line 2  
> | Console.WriteLine|  <- line 3
> +-----------------+
> ```
> Emphasize: "C# 10+ lets you just write code at the top level. No class. No `Sub Main`. Just code."

> [ASK] **Ask the class:** "What do you notice about the constructor? How is it different from VB?" (Wait 5 seconds. The answer: it doesn't say `Sub New` — it just says `Student(...)` because the class name IS the constructor.)

> [ENGAGE] **Gen-Z:** "This is the 'before and after glow-up' of our code."  
> **-> Type-along moment:** "Open Visual Studio. Create a new Console App. Type this with me. Do NOT copy-paste — type every line. Typing builds muscle memory." (Walk around the room as they type.)

> [TIP] **Teaching Tip (live coding):** When you type the code live, **make deliberate mistakes**. Type `console.writeline` with wrong case. Let it fail. Say "See? Case sensitive." Then fix it. Students learn more from watching you debug than from watching you write perfect code.

> [Q&A] **Student Q:** "What are 'top-level statements'?"
> **Short answer:** A shortcut. Instead of wrapping your code in a class, you just write it.
> **Real answer:** Before C# 10, every console app needed `class Program { static void Main() { ... } }`. Top-level statements let you skip the ceremony. Internally, the compiler wraps it for you.
> **The hidden question:** "Is this cheating?" -> No. It's the modern way. You'll learn the `Main` method version later.

> [LOST] **If they're lost:** "Let me show you the simplest possible C# program:"  
> ```csharp
> Console.WriteLine("Hi");
> var name = Console.ReadLine();
> Console.WriteLine($"Hello, {name}");
> ```
> "That's it. Three lines. Type these three lines. Get them working. Everything else builds on this."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "C# is the primary language for new .NET development. Most job postings for .NET developers ask for C#. You already understand .NET through VB — learning C# expands your options and makes you more versatile in the job market."

> [SLIDE] **Slide:** A screenshot of a real job posting from Indeed or LinkedIn filtered for ".NET developer." Highlight the "C#" requirement. Bonus points if it mentions the Philippines.

> [TIP] **Teaching Tip:** This section should be short and punchy — 5 minutes max. Don't elaborate. The goal is motivation, not instruction. Students need to hear: "This expands what you can do and where you can work."

> [ENGAGE] **Gen-Z:** **-> Poll:** "By show of hands, how many of you have seen 'C#' in a job posting?" (Almost all hands should go up for senior students. If not, show them live.)

> [Q&A] **Student Q:** "Why are we learning C# if we already know VB?"
> **Short answer:** Most companies build new products in C#. Knowing both makes you more valuable.
> **Real answer:** VB and C# both run on the same .NET framework. The concepts you already know — classes, properties, loops, events — are identical. C# just uses a different syntax that has become the industry standard for new development. Think of it as bilingualism for programmers.

---

### Exercise: C# Console App Portfolio

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Okay, your turn. Here's what I want you to build. Three programs in one console app. FizzBuzz, Calculator, Student Manager. You have 40 minutes. Work alone or in pairs. I'll be walking around."

> [SLIDE] **Slide:** The exercise requirements as a checklist with checkboxes:
> - [ ] FizzBuzz (loop 1-100, print Fizz/Buzz/FizzBuzz)
> - [ ] Calculator (two numbers + operator -> result)
> - [ ] Student Manager (List<Student>, add/list/search)

> [TIP] **Teaching Tip:** **Circulate.** The first 10 minutes of lab time is when students get stuck on setup. Walk around and unstick them. Spend no more than 30 seconds per person — if it takes longer, bring the whole class together and address the common issue.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "If you're stuck, find the person next to you. Explain your problem. Half the time you'll figure it out by explaining."

> [ASK] **Mid-exercise check-in (at 20 min):** "How many have FizzBuzz working?" (Show of hands.) "How many have Calculator working?" (Show of hands.) "If you have neither, that's okay — let's do a quick group debug."

> [TIP] **Teaching Tip (stretch time):** For students who finish early, have a "stretch goal" ready: "Can you write FizzBuzz with no `if` statement? Use a ternary expression." or "Can you make your calculator handle continuous operations? (like a real calculator: `5 + 3 = 8, then + 2 = 10)`"

> [LOST] **If they're lost:** For FizzBuzz specifically, some students freeze at the logic. Walk them through it verbally: "Start with the most specific case first — FizzBuzz (divisible by both). Then Fizz (divisible by 3). Then Buzz (divisible by 5). Then else (just the number). Order matters."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "Here's the AI policy for this course: AI is allowed, but only for specific things. This week, you can ask AI to explain syntax differences. You CANNOT ask it to write your exercises. Here's the difference."

> [SLIDE] **Slide:** Two columns:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "What's the C# equivalent of For Each?" | "Write my FizzBuzz for me" |
> | "Why does this say CS1002?" | "Generate the whole Student Manager" |
> | "Explain what this code does" | "Debug this without telling me why" |

> [SPEAK] **Script:** "The prompt template for this week: 'In C#, how do I [thing I knew in VB]?' This builds your translation muscle. Every time you use AI to translate, you learn the pattern. By Week 4, you won't need it."

> [TIP] **Teaching Tip:** Be explicit about **WHY** the restriction exists. "If AI writes your code, you can't debug it. If you can't debug it, you fail the midterm when I take the AI away." Frame it as skill-building, not punishment.

> [ENGAGE] **Gen-Z:** "Think of AI as your 'code-senpai' — it guides, but doesn't do your homework. Using AI isn't cheating. Using AI without understanding IS."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Let's save you the Google searches. Here are the 5 errors you WILL see this week. Memorize their error codes."

> [SLIDE] **Slide:** Error cards — each error gets a box with: error code, what it looks like, how to fix it.
> ```
> +---------------------------------+
> | CS1002 — ; expected             |
> | You forgot a semicolon.         |
> | Check the line above too.       |
> +---------------------------------+
> +---------------------------------+
> | CS0103 — name doesn't exist     |
> | Misspelled? Wrong scope?        |
> +---------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "CS1002 is the 'Tas you forgot your jacket' of C# errors — it happens to everyone, it's annoying, but you just fix it and move on."

> [ASK] **Group debug:** "I'm going to show you some broken code. In 30 seconds with your neighbor, find all the errors." (Show intentionally broken code from the walkthrough.) "Let's fix them together."

> [Q&A] **Student Q:** "Why does the error message say 'expected' — I don't get it."
> **Short answer:** "`; expected` is compiler-speak for 'you forgot a semicolon here.'
> **Real answer:** The compiler expected to find a semicolon at this position because every statement ends with one. It's reading left to right and saying "I was expecting a `;` but I found a newline instead."
> **The hidden question:** "Why is the error message so unhelpful?" -> Compiler errors are written for other compilers, not humans. You learn to read them with practice.

> [TIP] **Teaching Tip:** End the debugging section with **one clear action item**: "If you only remember one thing from this section: when in doubt, add `;`. If that doesn't fix it, check for case."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. Refer to inline annotations during delivery — they are ordered to match the flow of the lesson.

---

## Week 2: Interfaces & DI Mental Model

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Code Comparison |
| Code Walkthrough | 30 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 2 strategy):** DI is the hardest mental model shift this term. Students who came from VB think "just new it up inside the class." Expect resistance. Use the restaurant analogy repeatedly — every time someone asks "why not just create it inside?", point back to the waiter/kitchen metaphor.

---

### The Hook

> [SPEAK] **Script:** "Your VB form has 500 lines of code doing everything from database queries to font colors? That's not impressive — that's a cry for help. Today we learn why your classes should be dumb and services should be swappable."

> [SLIDE] **Slide:** Title: "500 Lines of Code ≠ Good Code"  
> Left: Screenshot of a massive VB form with 500+ lines, labeled "Spaghetti."  
> Right: Clean interface + service pattern, labeled "Scalable."

> [TIP] **Teaching Tip:** This hook is intentionally confrontational — it challenges the "more code = better programmer" mindset. Deliver it with humor, not judgment. Some students are proud of their 500-line forms.

> [ENGAGE] **Gen-Z:** "A 500-line form is like a Jollibee tray where you put your burger, fries, spaghetti, and drink all in one pile. It works, but it's messy. Interfaces are the dividers that keep everything organized."  
> **-> Poll:** "Raise your hand if you've ever opened your own code from last semester and had no idea what it does."

> [LOST] **If they're lost:** "Don't worry if your past code is messy. Everyone writes messy code first. Today we learn how to organize it."

---

### The Analogy

> [SPEAK] **Script:** "Think of a restaurant. The waiter takes your order and brings food, but they don't cook. The kitchen is where the actual work happens. The menu is the interface — it tells you what's available without you needing to go into the kitchen. If the chef quits, the waiter doesn't need retraining — they still look at the same menu."

> [BOARD] **Whiteboard:** Draw three boxes: "Customer" -> "Waiter (Controller)" -> "Kitchen (Service)." Draw a "Menu" arrow between Waiter and Kitchen labeled "Interface." Add a second kitchen box labeled "Kitchen B (swap!)" with the same menu arrow.

> [TIP] **Teaching Tip:** The restaurant analogy works well for Filipino students — everyone has been to a restaurant. Emphasize the key insight: **the waiter never cooks, the kitchen never talks to customers.** This maps directly to Controller -> Service separation.

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "Explain DI using the restaurant analogy in 15 seconds. Go!" (Then pick 2 people to share their version.)

> [LOST] **If they're lost:** "Think of it like GCash and Maya. Both are payment apps (interface). A store accepts 'payment apps' — it doesn't care which one you use. Swap GCash for Maya, the store still works. That's DI."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (15 min interface -> 10 min DI)

> [SPEAK] **Script:** "An interface is a contract. It says: any class that signs this contract MUST have these methods. It doesn't say HOW — just THAT. This is the foundation of everything we'll build this semester."

> [SLIDE] **Slide:** Show the `INotificationService` interface alone first. Then reveal `EmailService` and `SmsService` side by side, both implementing the same interface. Highlight that the `Send` method signature is identical.

> [TIP] **Teaching Tip:** Students will ask "why not just use a base class?" Address this proactively: "Interfaces are 'what you can do.' Base classes are 'what you are.' A class can implement many interfaces but only inherit one base class. Interfaces are more flexible."

> [ASK] **Ask the class:** "If I have an interface with 5 methods, and a class implements it — how many methods MUST that class have?" (Answer: All 5. No exceptions.)

> [ENGAGE] **Gen-Z:** "An interface is like a job posting on JobStreet. It lists the requirements. If you apply (implement), you MUST have those skills. How you got those skills? That's your implementation."  
> **-> Phone moment:** "Pull up any job posting. The 'Requirements' section? That's an interface. Your resume? That's your implementation."

> [Q&A] **Student Q:** "Can an interface have code in it?"
> **Short answer:** Not in the way you're thinking.
> **Real answer:** C# 8+ allows default interface methods, but that's advanced. For now: interfaces only declare signatures, no bodies. Think of them as pure contracts.
> **The hidden question:** "Is an interface just an empty class?" -> No. An empty class can be instantiated. An interface cannot.

> [LOST] **If they're lost:** "Forget the word 'interface' for a second. Think 'promise.' This code promises: 'I will have a Send method that takes two strings.' Any class that makes this promise can be used anywhere that promise is expected."

---

### Code Walkthrough

> [TIME] **Pacing:** 30 min (10 min interface + implementations -> 10 min consumer class -> 10 min wiring + swap demo)

> [SPEAK] **Script:** "Let's build this from scratch. First the contract, then two implementations, then something that uses the contract. Watch how the consumer never knows which implementation it's getting."

> [SLIDE] **Slide:** Show the full DI demo code in 4 steps, revealing one step at a time: (1) interface, (2) two implementations, (3) OrderService, (4) wiring in Main.

> [TIP] **Teaching Tip:** **Type this live, don't paste.** When you type `public class EmailService : INotificationService`, pause and say: "The colon means 'implements.' This class is signing the contract." Make the deliberate mistake of writing `new INotificationService()` — let it fail, then explain why.

> [BOARD] **Whiteboard:** Draw the dependency flow:
> ```
> Main -> creates EmailService
>      -> injects into OrderService
>      -> OrderService calls _notif.Send()
>      -> EmailService.Send() runs
> ```
> Then redraw with SmsService. Show that only the Main line changes.

> [ENGAGE] **Gen-Z:** "This is the 'plug and play' of programming. Like swapping earbuds — your phone doesn't care if they're Apple, Samsung, or JBL. As long as they use Bluetooth (the interface), they work."  
> **-> Type-along:** "Type the interface definition with me. Then type EmailService. Then SmsService. Don't copy-paste."

> [Q&A] **Student Q:** "Why `private readonly`? Why not just `private`?"
> **Short answer:** `readonly` means it can only be set in the constructor.
> **Real answer:** It prevents accidental reassignment later in the class. It's a safety guarantee: "This dependency won't change after construction."
> **The hidden question:** "Is that really necessary?" -> In a small app, no. In a 10,000-line app, yes. It prevents a whole class of bugs.

> [LOST] **If they're lost:** "Let me show you the simplest DI possible:"  
> ```csharp
> interface IGreeter { void Greet(string name); }
> class EnglishGreeter : IGreeter { public void Greet(string n) => Console.WriteLine($"Hello, {n}"); }
> class TagalogGreeter : IGreeter { public void Greet(string n) => Console.WriteLine($"Kumusta, {n}!"); }
> 
> IGreeter greeter = new TagalogGreeter();
> greeter.Greet("Juan"); // Kumusta, Juan!
> ```
> "Swap `TagalogGreeter` for `EnglishGreeter` — everything else stays the same. That's DI."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "Spotify, Netflix, Microsoft, and your future employer all use DI. It's not optional — it's how modern backend code is written. If you apply for a .NET job and don't know what DI is, the interview ends in under five minutes."

> [SLIDE] **Slide:** Screenshot of an ASP.NET Core `Program.cs` showing `builder.Services.AddScoped<INotificationService, EmailService>()`. Label: "This one line is DI in production."

> [TIP] **Teaching Tip:** Keep this section to 5 minutes. The goal is motivation. Show them that DI isn't academic — it's in every real .NET project.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have seen 'Dependency Injection' in a job posting?" (Show a real JobStreet or LinkedIn screenshot if hands are low.)

> [LOST] **If they're lost:** "You don't need to master DI today. You just need to understand: interfaces = contracts, DI = swapping implementations. That's enough for now."

---

### Exercise: DI Playground

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Build a notification system with three implementations. Email, SMS, and Console. Let the user pick which one at runtime. You have 40 minutes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Define `INotificationService` interface
> - [ ] Implement `EmailService`, `SmsService`, `ConsoleService`
> - [ ] Create `NotificationSender` with constructor injection
> - [ ] Let user pick service at runtime
> - [ ] Bonus: Add a fourth implementation

> [TIP] **Teaching Tip:** Circulate during the first 10 minutes — students will get stuck on the interface definition or the constructor injection pattern. The bonus (runtime selection) is where the DI concept really clicks.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "Work in pairs. One person types the interface, the other types the implementations. Then swap roles for the consumer class."

> [LOST] **If they're lost:** "Start with just the interface and ONE implementation. Get that working. Then add the second. Then the third. Don't try to build everything at once."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, you can ask AI to explain interface concepts or debug DI compilation errors. You cannot ask it to generate your entire exercise."

> [SLIDE] **Slide:** Allowed vs Not Allowed columns:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "What does 'implements interface' mean?" | "Generate my DI exercise" |
> | "Why does this say 'does not implement interface member'?" | "Write all three service classes for me" |

> [TIP] **Teaching Tip:** Frame AI as a "rubber duck that talks back." It's great for explaining concepts, terrible for doing your thinking.

> [ENGAGE] **Gen-Z:** "AI is your 'code-senpai' — it guides, but doesn't do your homework. If AI writes your interfaces, you won't understand them when the midterm comes."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the errors you WILL see this week. Let's go through them so you don't spend 20 minutes Googling."

> [SLIDE] **Slide:** Error cards:
> ```
> +---------------------------------------------+
> | "Cannot create instance of interface"        |
> | You wrote: new INotificationService()        |
> | Fix: new EmailService() (concrete class)     |
> +---------------------------------------------+
> +---------------------------------------------+
> | NullReferenceException at _service.Send()    |
> | You forgot to pass the dependency            |
> | Fix: Check your constructor call             |
> +---------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "The 'Cannot create instance of interface' error is like trying to order from a menu that doesn't exist. You need an actual kitchen (concrete class), not just the menu (interface)."

> [Q&A] **Student Q:** "But why can't I just new up the service inside the class? It works!"
> **Short answer:** It works until you need to test it or swap it.
> **Real answer:** Hard-coded dependencies mean you can't mock them for unit tests, can't swap implementations, and can't change behavior without modifying the class itself. DI solves all three.
> **The hidden question:** "This seems like extra work for no benefit." -> The benefit shows up at scale. With 50 classes, DI is essential. With 3, it's practice.

> [LOST] **If they're lost:** "The simplest fix: whenever you see 'Cannot create instance of interface,' replace the interface name with the concrete class name. `new INotificationService()` -> `new EmailService()`. That fixes 90% of this week's errors."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. The hardest concept is DI — use the restaurant analogy repeatedly and let students type along during the walkthrough.

---

## Week 3: HTTP & The Web

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Polls |
| Code Walkthrough | 30 min | Live Demo (DevTools + C# code) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 3 strategy):** This is the first week that moves beyond C# syntax into how the web actually works. Students who struggled with C# may find this refreshing — it's conceptual, not syntactic. Use DevTools heavily; seeing real HTTP traffic makes the abstract concrete.

---

### The Hook

> [SPEAK] **Script:** "When you tapped that Like button on your crush's post, about 47 things happened in under 200ms. Your phone sent a secret message to a server somewhere, the server updated a database, and sent back a response. That's HTTP. And yes, you'll be tested on it."

> [SLIDE] **Slide:** Title: "What Happens When You Tap 'Like'"  
> A timeline visualization: Tap -> HTTP Request -> Server -> Database -> HTTP Response -> Heart appears. Total: 200ms.

> [TIP] **Teaching Tip:** This hook works because it connects to something students do daily. Don't over-explain — just plant the curiosity. They'll learn the details in the concept discussion.

> [ENGAGE] **Gen-Z:** "Every TikTok like, every Instagram story view, every GCash transaction — all HTTP. You're already using this protocol hundreds of times a day. Today you learn how it works behind the scenes."  
> **-> Phone moment:** "Pull up your phone. Open Instagram. Every time you scroll and new content loads? That's an HTTP request. You're looking at HTTP responses right now."

> [LOST] **If they're lost:** "HTTP is just how computers talk to each other on the internet. Like texting, but for apps. You send a message, you get a reply."

---

### The Analogy

> [SPEAK] **Script:** "HTTP is like sending a letter. You write a letter with a method (GET = asking for something, POST = sending something), an address (URL), headers (return address), and maybe a body (the actual content). The server reads it and sends back a response with a status code."

> [BOARD] **Whiteboard:** Draw the letter analogy visually:
> ```
> +--------------------------------+
> | ENVELOPE (HTTP Request)        |
> | Method: GET                    |
> | Address: /api/users            |
> | Headers: Auth, Content-Type    |
> | Body: (empty for GET)          |
> +--------------------------------+
>         v
> +--------------------------------+
> | RESPONSE (HTTP Response)       |
> | Status: 200 OK                 |
> | Headers: Content-Type: JSON    |
> | Body: [{name: "Juan", ...}]    |
> +--------------------------------+
> ```

> [TIP] **Teaching Tip:** The letter analogy is universal but can feel abstract. Make it concrete by showing a real HTTP request in DevTools right after the analogy. Connect the parts: "See this 'GET'? That's the method. See this URL? That's the address."

> [ENGAGE] **Gen-Z:** "HTTP methods are like the different buttons on a food delivery app. GET = browse the menu. POST = place an order. PUT = change your entire order. PATCH = just remove the onions. DELETE = cancel the order."  
> **-> Turn to your neighbor:** "What HTTP method is 'adding a comment on Facebook'? What about 'deleting a post'? 10 seconds, go!"

> [LOST] **If they're lost:** "Forget the letter. Think of ordering from Jollibee. GET = looking at the menu board. POST = giving your order to the cashier. The cashier gives you a number (status code). 200 = your food is ready. 404 = they don't have that item. 500 = the kitchen caught fire."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (10 min request-response cycle -> 8 min methods table -> 5 min status codes -> 2 min statelessness)

> [SPEAK] **Script:** "Here's the request-response cycle in six steps. This is the foundation of everything web-related. Memorize this flow — you'll use it every week for the rest of the semester."

> [SLIDE] **Slide:** Show the 6-step request-response cycle as a flow diagram. Animate each step: Browser -> Build Request -> Travel -> Server Process -> Build Response -> Browser Render.

> [TIP] **Teaching Tip:** The methods table and status codes are the two things students MUST memorize. Spend the most time here. For methods, emphasize: GET and POST are the ones they'll use 90% of the time. PUT, PATCH, DELETE come later with APIs.

> [ASK] **Ask the class:** "What status code do you think you'll see most often?" (Answer: 200. Then ask: "What about the one you'll see when you mistype a URL?" Answer: 404.)

> [ENGAGE] **Gen-Z:** "Status codes are like your relationship status. 200 = 'It's good.' 401 = 'Who are you again?' 403 = 'I know you but no.' 404 = 'Not here, not coming.' 500 = 'It's not you, it's me (the server).'"  
> **-> Phone moment:** "Open DevTools on your laptop right now. F12 -> Network tab. Refresh any page. See all those entries? Each one is an HTTP request. Click one. Look at the status code."

> [Q&A] **Student Q:** "What's the difference between 401 and 403?"
> **Short answer:** 401 = "I don't know who you are." 403 = "I know who you are but you can't do this."
> **Real answer:** 401 means authentication failed (you need to log in). 403 means authorization failed (you're logged in but don't have permission).
> **The hidden question:** "Why two codes for 'no'?" -> Because the fix is different. 401 -> log in. 403 -> get permission.

> [Q&A] **Student Q:** "What does 'stateless' mean?"
> **Short answer:** The server doesn't remember you between requests.
> **Real answer:** Each HTTP request is independent. If you log in on request 1, the server doesn't automatically know you're logged in on request 2. That's why we need cookies/sessions (covered in Week 13).
> **The hidden question:** "But websites remember me — how?" -> Cookies. We'll get there.

> [LOST] **If they're lost:** "HTTP is a conversation. You ask, I answer. Then I forget you existed. Next time you ask, I treat you like a stranger. That's stateless. Cookies are like a name tag — 'Hi, I'm Juan, I was here before.'"

---

### Code Walkthrough

> [TIME] **Pacing:** 30 min (10 min DevTools demo -> 10 min raw HTTP -> 10 min C# HttpClient)

> [SPEAK] **Script:** "Let's see HTTP in action. Open DevTools, go to the Network tab, and refresh any page. Every line you see is an HTTP request. Let's look at one together."

> [SLIDE] **Slide:** Split screen: left side shows DevTools Network tab, right side shows the raw HTTP request/response text.

> [TIP] **Teaching Tip:** Do the DevTools demo FIRST — it's visual and immediate. Then show the raw HTTP text to demystify what's happening under the hood. Finally, show the C# HttpClient code to connect it back to programming.

> [BOARD] **Whiteboard:** Draw the HttpClient flow:
> ```
> HttpClient created
>   v
> GET request sent to api.github.com
>   v
> Response received (check status code!)
>   v
> If success -> read body as string
> If fail -> print error
> ```

> [ENGAGE] **Gen-Z:** "DevTools is like X-ray vision for websites. You can see every request, every response, every cookie. It's the closest thing to hacker mode you'll get without actually hacking."  
> **-> Live demo:** "Everyone open DevTools now. F12. Network tab. Refresh. Click the first request. Look at the Headers tab. Find the 'Request Method' — it should say GET."

> [Q&A] **Student Q:** "Why does the first HttpClient example get a 403?"
> **Short answer:** GitHub's API requires a User-Agent header to identify who's making the request.
> **Real answer:** Without a User-Agent, GitHub can't tell if the request is from a real app or a bot. They block unidentified requests to prevent abuse.
> **The hidden question:** "Why do APIs have these requirements?" -> Rate limiting, abuse prevention, and analytics.

> [LOST] **If they're lost:** "Forget the code for a second. The flow is: (1) Create a client. (2) Tell it what URL to visit. (3) Get the response. (4) Check if it worked. (5) Read the data. That's it. The code just implements these five steps."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "Every app you've ever used runs on HTTP. Instagram? HTTP. TikTok? HTTP. Canvas? HTTP. Understanding the request-response cycle is understanding how the internet works."

> [SLIDE] **Slide:** Show a screenshot of DevTools Network tab with 50+ requests from a single page load. Label: "One page load = 50+ HTTP conversations."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. The goal is to make HTTP feel essential, not academic. Connect it to debugging: "When your app breaks, 80% of the time it's an HTTP issue."

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have seen a 404 error before?" (All hands.) "That's HTTP. You already know more than you think."

> [LOST] **If they're lost:** "You don't need to memorize everything today. Just remember: request -> response. That's the core. Everything else is details."

---

### Exercise: HTTP Trace Report

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min tracing -> 10 min share)

> [SPEAK] **Script:** "Your mission: be a web detective. Visit three websites, open DevTools, and document every HTTP request they make. You'll be surprised how many requests a single page makes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Open DevTools Network tab
> - [ ] Visit 3 different websites
> - [ ] Capture all requests for first page load
> - [ ] Identify: HTML, CSS, JS, images, API calls
> - [ ] Note status codes and what they mean
> - [ ] Write a short report

> [TIP] **Teaching Tip:** This exercise is observational, not coding-heavy. Circulate and help students interpret what they see. The "aha" moment is when they realize a simple page makes 50+ requests.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "Work with a partner. One person navigates, the other records. Then switch. Compare notes — did both sites make the same types of requests?"

> [LOST] **If they're lost:** "Start with just ONE website. Google.com is the simplest. Open DevTools, refresh, and count how many requests you see. Then categorize them: which are HTML? Which are images? Build from there."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, you can ask AI to explain status codes, HTTP headers, or why a request failed. You cannot ask it to generate your trace report — you need to observe and document yourself."

> [SLIDE] **Slide:** Allowed vs Not Allowed:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "What does status code 304 mean?" | "Write my HTTP trace report" |
> | "Explain the User-Agent header" | "Generate fake network data for me" |

> [TIP] **Teaching Tip:** The key skill this week is observation. AI can explain concepts, but it can't look at your DevTools screen and tell you what you're seeing. That's the learning.

> [ENGAGE] **Gen-Z:** "AI is like having a tutor who knows HTTP but can't see your screen. Ask it questions, but do the observation yourself."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common issues -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the HTTP-related issues you'll encounter. Most of them aren't bugs — they're features you need to understand."

> [SLIDE] **Slide:** Issue cards:
> ```
> +-------------------------------------+
> | CORS Error                          |
> | Browser blocks cross-domain request |
> | Fix: Server must allow it           |
> +-------------------------------------+
> +-------------------------------------+
> | 304 Not Modified                    |
> | NOT an error — it's caching!        |
> | Browser says "I already have this"  |
> +-------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "CORS errors are like trying to enter a building with someone else's ID. The building (server) says 'I don't recognize you.' The fix isn't to sneak in — it's to get the building to recognize your ID."

> [Q&A] **Student Q:** "Why does the browser block cross-domain requests? That seems annoying."
> **Short answer:** It's a security feature, not a bug.
> **Real answer:** Without CORS, any website could make requests to your bank's API on your behalf. CORS prevents unauthorized cross-site requests.
> **The hidden question:** "How do I fix it?" -> The server needs to send the right CORS headers. You can't fix it from the client side alone.

> [LOST] **If they're lost:** "Red entries in DevTools = errors. Click on them. Read the status code. Read the response body. 90% of debugging is just reading what the error tells you."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The DevTools demo is the most important part — make sure every student opens Network tab and sees real HTTP traffic.

---

## Week 4: MVC Big Picture

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Pipeline Diagram |
| Code Walkthrough | 30 min | Live Code (scaffold + trace) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 4 strategy):** This is the first time students build a real web app. The MVC pattern will feel abstract until they see it working. Scaffold the project live, then trace the pipeline step by step. The "aha" moment is when they visit a URL and see their own HTML appear.

---

### The Hook

> [SPEAK] **Script:** "You know how Grab works? You open the app, see a map, order food, track delivery? That's MVC. And now you're going to build it. Well, not Grab. But the architecture behind it."

> [SLIDE] **Slide:** Title: "You Use MVC Every Day"  
> Screenshots of Grab, Foodpanda, and Shopee — all labeled "Built on MVC architecture."

> [TIP] **Teaching Tip:** Connect MVC to apps they use daily. Filipino students know Grab and Foodpanda well. This makes the abstract pattern feel relevant and achievable.

> [ENGAGE] **Gen-Z:** "Every app you use — Grab, Foodpanda, Shopee, even GCash — they all use MVC. You're not learning some academic concept. You're learning how the apps you use every day are built."  
> **-> Poll:** "Who here has ordered from Grab or Foodpanda this week?" (Most hands.) "That's MVC in action."

> [LOST] **If they're lost:** "MVC is just a way of organizing code so it doesn't become a mess. Think of it like having separate folders for photos, documents, and music on your phone. MVC does that for web apps."

---

### The Analogy

> [SPEAK] **Script:** "MVC is a restaurant with a really good system. The menu tells you what's available. The waiter takes your order. The kitchen cooks the food. The plating makes it look good. The customer never goes into the kitchen. The waiter never cooks. The chef never talks to customers."

> [BOARD] **Whiteboard:** Draw the restaurant MVC map:
> ```
> Customer (Browser)
>     v reads
> Menu (Route: /products/details/5)
>     v orders
> Waiter (Controller: ProductsController.Details)
>     v requests
> Kitchen (Model: Get product #5 from DB)
>     v returns
> Plating (View: .cshtml template -> HTML)
>     v serves
> Customer sees the page
> ```

> [TIP] **Teaching Tip:** The restaurant analogy is perfect for MVC because it maps 1:1. Emphasize the separation: "The waiter NEVER cooks. The controller NEVER does database work." This is the core MVC principle.

> [ENGAGE] **Gen-Z:** "MVC is like a group project where everyone has a clear role. Model = the researcher (gets the data). View = the designer (makes it look good). Controller = the team leader (coordinates everything). When roles are clear, the project works. When they're not — chaos."  
> **-> Turn to your neighbor:** "In the restaurant analogy, what happens if the waiter starts cooking? What breaks? 10 seconds, go!"

> [LOST] **If they're lost:** "Forget MVC for a second. Think about a website. You type a URL. Something figures out what page you want. That something grabs the data. Then it puts the data into a template. Then sends you the page. MVC is just names for those steps."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (10 min pipeline flow -> 8 min file structure -> 7 min key insights)

> [SPEAK] **Script:** "Here's the entire MVC request flow in seven steps. This is the backbone of every web app you'll build this semester. Trace it with me."

> [SLIDE] **Slide:** Animated pipeline diagram showing each step: Browser -> URL -> Route -> Controller -> Model -> View -> HTML -> Browser. Reveal one step at a time.

> [TIP] **Teaching Tip:** The key insight is "Controller is the middleman." Students will want to put business logic in the controller. Resist this urge early: "The controller delegates. It doesn't do real work."

> [ASK] **Ask the class:** "When you visit `/products/details/5`, which part figures out that 'products' means ProductsController?" (Answer: Routing.)

> [ENGAGE] **Gen-Z:** "The MVC pipeline is like a GrabFood order. You browse (Route), order (Controller), kitchen cooks (Model), food is plated (View), delivered to you (HTML). Each step has one job."  
> **-> Phone moment:** "Open GrabFood. Think about each screen you see. The menu list? That's a View. The restaurant data? That's a Model. The app figuring out what to show? That's a Controller."

> [Q&A] **Student Q:** "Why can't the controller just do everything? Why separate Model and View?"
> **Short answer:** You can, but it becomes unmaintable fast.
> **Real answer:** When the controller does everything, you get "fat controllers" — 500-line methods that mix database queries, business logic, and HTML generation. MVC separation means you can change the database without touching the view, or redesign the view without touching the model.
> **The hidden question:** "Isn't this over-engineering for a simple app?" -> Maybe for 10 lines. Not for 10,000.

> [Q&A] **Student Q:** "What's Razor? Is it a programming language?"
> **Short answer:** It's a template engine, not a language.
> **Real answer:** Razor lets you mix C# code with HTML in .cshtml files. The `@` symbol tells Razor "this is C#." It processes the template and outputs pure HTML.
> **The hidden question:** "Do I need to learn a new language?" -> No. It's just HTML with C# sprinkled in.

> [LOST] **If they're lost:** "MVC in three sentences: (1) URL comes in. (2) Controller handles it and gets data from Model. (3) Controller sends data to View, which makes HTML. That's it. Everything else is details."

---

### Code Walkthrough

> [TIME] **Pacing:** 30 min (10 min scaffold -> 10 min Program.cs -> 10 min controller + view + trace)

> [SPEAK] **Script:** "Let's scaffold an MVC project from scratch and trace exactly what happens when a request comes in. Watch how the pieces connect."

> [SLIDE] **Slide:** Show the project file structure first, then reveal Program.cs, then the controller, then the view. Each on its own slide.

> [TIP] **Teaching Tip:** Scaffold the project live with `dotnet new mvc`. Then open each file and explain its role. The most important file is Program.cs — it's where MVC is configured. Trace the full pipeline for `GET /` step by step.

> [BOARD] **Whiteboard:** Draw the route matching:
> ```
> URL: /
> Pattern: {controller=Home}/{action=Index}/{id?}
> Match: controller=Home (default), action=Index (default), id=null
> Result: HomeController.Index() runs
> ```

> [ENGAGE] **Gen-Z:** "Scaffolding a project is like using a template on Canva. You don't start from a blank page — you start with a structure and customize it. `dotnet new mvc` is your template."  
> **-> Type-along:** "Run `dotnet new mvc -n HelloMvc` with me. Then `cd HelloMvc`. Then `dotnet run`. Watch it compile and open the browser."

> [Q&A] **Student Q:** "What does `AddControllersWithViews()` actually do?"
> **Short answer:** It tells ASP.NET Core to set up the MVC pipeline.
> **Real answer:** It registers the services needed for controllers, views, model binding, and routing. Without it, ASP.NET doesn't know how to handle MVC requests.
> **The hidden question:** "What if I forget this line?" -> Your controllers won't work. You'll get 404s everywhere.

> [LOST] **If they're lost:** "Let me show you the simplest MVC app possible. One controller, one action, one view. Three files. That's all you need to start."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "MVC is the dominant web architecture pattern. Every major framework uses it or a variant. Learn it once, apply it everywhere."

> [SLIDE] **Slide:** Logos of ASP.NET Core MVC, Ruby on Rails, Django, Laravel, Spring MVC — all labeled "Uses MVC."

> [TIP] **Teaching Tip:** This section should be 5 minutes max. Show them that MVC is transferable knowledge. If they learn it in C#, they can apply it to Python, Ruby, Java, etc.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you plan to work with web apps after graduation?" (Most hands.) "MVC is the most common pattern you'll encounter. Learning it now gives you a head start."

> [LOST] **If they're lost:** "You don't need to love MVC today. Just understand: it organizes code. That's enough for now."

---

### Exercise: Hello MVC

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Create a new MVC project. Add a ShopController with two actions. Create the views. Run it. Visit the routes. You'll have your first working web app."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] `dotnet new mvc -n HelloMvc`
> - [ ] Examine all folders and files
> - [ ] Create `ShopController` with `Index()` and `Product(int id)`
> - [ ] Create views in `Views/Shop/`
> - [ ] Run and visit both routes

> [TIP] **Teaching Tip:** The first 15 minutes will be setup-heavy. Circulate and help with `dotnet` commands. The "aha" moment is when they visit `/shop/product/5` and see their own dynamic content.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person creates the controller, the other creates the views. Then swap. You'll learn faster by seeing both sides."

> [LOST] **If they're lost:** "Start with just the `Index()` action. Get that working first. Then add `Product(int id)`. Don't try to build everything at once."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, you can ask AI to explain MVC concepts or debug routing issues. You cannot ask it to generate your controllers or views."

> [SLIDE] **Slide:** Allowed vs Not Allowed:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Explain what app.UseRouting() does" | "Generate my ShopController" |
> | "Why is my view not found?" | "Write all my views for me" |

> [TIP] **Teaching Tip:** The scaffolded project has a lot of generated code. Encourage students to ask AI to explain specific lines rather than generating new code.

> [ENGAGE] **Gen-Z:** "AI is your 'code-senpai' for MVC concepts. Ask it to explain the pipeline, not to build your app."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the MVC errors you'll see this week. Most of them are naming or path issues."

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | 404 on a route that should work          |
> | Check: Controller name needs "Controller"|
> | suffix. Action method name must match.   |
> +------------------------------------------+
> +------------------------------------------+
> | "The view 'Index' was not found"         |
> | Path must be: Views/{Controller}/{Action}|
> | .cshtml. Case matters on Linux/Mac.      |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "A 404 on your own route is like giving someone your address but they go to the wrong house. Check the address (route), check the house name (controller), check the room (action)."

> [Q&A] **Student Q:** "Why does the controller need 'Controller' at the end of the name?"
> **Short answer:** It's a convention that ASP.NET uses to find controllers.
> **Real answer:** The routing system looks for classes ending in `Controller`. `ShopController` maps to `/shop`. `Shop` alone won't be found. It's how ASP.NET discovers controllers automatically.
> **The hidden question:** "Can I change this convention?" -> Yes, but don't. It's standard for a reason.

> [LOST] **If they're lost:** "The two things to check first: (1) Does your controller name end with 'Controller'? (2) Is your view file in the right folder? Those two fix 90% of MVC errors."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The scaffold-and-trace approach is key — students need to see the full pipeline working end-to-end.

---

## TERM 2: MIDTERM — ASP.NET Core MVC (The Hard Part)

---

## Week 5: Routing Deep-Dive

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Live Route Matching |
| Code Walkthrough | 30 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 5 strategy):** Routing is the first "invisible" thing students encounter — it either works or gives a 404 with no explanation. Spend extra time on route matching order and `MapControllers()`. Use the whiteboard heavily to trace URLs to controllers.

---

### The Hook

> [SPEAK] **Script:** "TikTok's 'For You' page is just a really well-optimized route. `/fyp?user=me` -> algorithm does its thing -> video. Your app's routing is the same idea but with less machine learning and more curly braces."

> [SLIDE] **Slide:** Title: "You Already Use Routing Every Day"  
> Left: TikTok URL `/fyp` | Right: GrabFood URL `/restaurant/jollibee/order`  
> Subtitle: "Every app you use is just fancy routing."

> [ENGAGE] **Gen-Z:** "Every URL you've ever typed, every link you've ever clicked — that's routing. You're not learning something new. You're learning how the thing you already use actually works."  
> **-> Poll:** "Raise your hand if you've ever gotten a 404 and just closed the tab. Today you'll learn why that happened."

> [LOST] **If they're lost:** "Routing is just matching a URL to the right code. That's it. Type `/about` -> show about page. Type `/contact` -> show contact page. We're just adding rules."

---

### The Analogy

> [SPEAK] **Script:** "Routing is like GPS navigation. You type an address (URL), the GPS (router) figures out which road to take (controller), which house to go to (action), and whether you need a gate code (route parameter). If the address doesn't match anything, GPS says 'address not found' — that's your 404."

> [BOARD] **Whiteboard:** Draw three boxes connected by arrows:
> ```
> URL -> Router -> Controller.Action
> "/store/details/42" -> matches -> StoreController.Details(id=42)
> ```
> Below: "GPS analogy: Address = URL, Route = Controller, House = Action, Gate code = Parameters"

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "If `/store/details/42` is an address, what's the controller? What's the action? 10 seconds, go!" (Answer: Controller = Store, Action = Details, Parameter = 42.)

> [LOST] **If they're lost:** "Think of it like a school directory. You want 'Juan in Room 301.' The directory (router) tells you: building (controller) = Main, room (action) = 301, person (parameter) = Juan."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (10 min convention routing -> 10 min attribute routing -> 5 min constraints)

> [SPEAK] **Script:** "There are exactly two ways to define routes in ASP.NET Core. Convention-based: one rule for everything. Attribute-based: each controller declares its own. We'll use attribute routing because it's explicit and easier to debug."

> [SLIDE] **Slide:** Show convention routing first — single `MapControllerRoute` line. Then reveal attribute routing with the `ShopController` example. Highlight: "Same result, different approach."

> [BOARD] **Whiteboard:** Draw the route matching table:
> ```
> URL                  -> Route Pattern              -> Controller.Action
> /shop                -> [Route("")]                -> ShopController.Index
> /shop/item/5         -> [Route("item/{id}")]       -> ShopController.Product(id=5)
> /shop/category/games -> [Route("category/{name}")] -> ShopController.ByCategory(name="games")
> ```

> [TIP] **Teaching Tip:** Students will confuse convention vs attribute routing. Emphasize: **you can use both, but attribute routing is clearer for beginners.** The constraint section (`{id:int}`) is where most errors happen — spend extra time here.

> [ASK] **Ask the class:** "What happens if I visit `/shop/item/abc` with the `{id:int}` constraint?" (Pause. Answer: 404 — "abc" isn't an integer, so the route doesn't match.)

> [ENGAGE] **Gen-Z:** "Route constraints are like TikTok's age filter — `{id:int}` means 'only integers allowed.' If you're not an int, you don't get in. No explanation, just 404."  
> **-> Phone moment:** "Pull up any URL on your phone. The part after the domain? That's what we're matching today."

> [Q&A] **Student Q:** "Can I use both convention and attribute routing in the same app?"
> **Short answer:** Yes, but don't.
> **Real answer:** Mixing them creates confusion about which route matches first. Pick one convention. For MVC apps, attribute routing is cleaner.
> **The hidden question:** "Which one should I use?" -> Attribute routing. It's explicit and self-documenting.

> [Q&A] **Student Q:** "What does the `?` mean in `{id?}`?"
> **Short answer:** It makes the parameter optional.
> **Real answer:** `/store/details` and `/store/details/42` both match. Without `?`, only the version with the ID matches.
> **The hidden question:** "When should I make parameters optional?" -> When the action has sensible defaults.

> [LOST] **If they're lost:** "Forget the syntax for a second. Routing answers one question: 'When someone visits this URL, which method should run?' That's the entire concept. Everything else is just how you write the rule."

---

### Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min Program.cs setup -> 15 min controller + routes -> 10 min trace-through)

> [SPEAK] **Script:** "Let's build a multi-page site with explicit attribute routing. Watch how each `[Route]` attribute maps to a URL. Then we'll trace exactly what happens when a request comes in."

> [SLIDE] **Slide:** Show `Program.cs` first — highlight `app.MapControllers()`. Then reveal `StoreController` one action at a time. Don't show the whole controller at once.

> [TIP] **Teaching Tip:** **Type this live, don't paste.** When you type `app.MapControllers()`, pause: "Without this line, your `[Route]` attributes do nothing. This is the #1 mistake this week." Then trace `/store/details/42` step by step on the whiteboard.

> [BOARD] **Whiteboard:** Trace the full request path:
> ```
> GET /store/details/42
>   v
> [Route("store")] on StoreController -> prefix match [OK]
>   v
> [Route("details/{id:int}")] -> pattern match [OK]
>   v
> 42 is int -> constraint passes [OK]
>   v
> Details(int id) runs with id = 42
>   v
> Returns View with ViewBag.ProductId = 42
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Open your project. Type the `StoreController` with me. Every route attribute. Every action. Don't copy-paste — typing builds the muscle memory."

> [Q&A] **Student Q:** "Why do I need both `[Route("")]` and `[Route("index")]` on the same action?"
> **Short answer:** So both `/store` and `/store/index` work.
> **Real answer:** Multiple `[Route]` attributes on one action let you support multiple URLs for the same page. Useful for backward compatibility.
> **The hidden question:** "Is this overkill?" -> Maybe. But it's a useful pattern to know.

> [LOST] **If they're lost:** "Let's trace the simplest route first: `GET /store`. The controller has `[Route("store")]` — that's the prefix. The action has `[Route("")]` — that means 'no extra path.' So `/store` = prefix + empty = match. That's it."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "Routing is the first thing that happens when a request hits your app. If routing is broken, nothing else matters. At companies like Microsoft and Uber, routing misconfigurations have caused entire site outages."

> [SLIDE] **Slide:** Screenshot of a real 404 error page from a major site (e.g., GitHub's 404 page with their octocat). Label: "Even big companies get routing wrong sometimes."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. The SEO point is the most practical — `/product/nike-shoes` vs `/product?id=3982`. Show them a real Google search result to make it concrete.

> [ENGAGE] **Gen-Z:** "Clean URLs are like having a clean Instagram bio. `/product/nike-shoes` tells Google and humans exactly what the page is. `/product?id=3982` looks sketchy and ranks lower."

> [LOST] **If they're lost:** "You don't need to memorize everything today. Just remember: routing = URL to code. If routing works, your app works. If it doesn't, nothing else matters."

---

### Exercise: Multi-Page Site with 3+ Routes

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Build a GameZone store with four routes. Each route should display different info. Use attribute routing. You have 40 minutes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Create `GamesController` with `[Route("games")]`
> - [ ] `/games` — list all games (hardcoded `List<Game>`)
> - [ ] `/games/details/{id:int}` — show game details
> - [ ] `/games/genre/{genre}` — filter by genre
> - [ ] `/games/search/{query:required}` — search by name

> [TIP] **Teaching Tip:** Circulate during the first 10 minutes — students will get stuck on `MapControllers()` or route constraints. The "aha" moment is when they visit `/games/details/5` and see dynamic content.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person writes the controller, the other creates the views. Then swap. You'll learn faster by seeing both sides."

> [ASK] **Mid-exercise check-in (at 20 min):** "How many have `/games` working?" (Show of hands.) "How many have `/games/details/{id}` working?" "If neither, let's do a quick group debug."

> [LOST] **If they're lost:** "Start with just ONE route: `/games`. Get that working. Then add `/games/details/{id:int}`. Don't try to build all four at once."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week marks a policy shift: AI is now your debugging tutor. Ask it why a route isn't matching. Ask it to explain 404s. But you still can't ask it to generate your controller."

> [SLIDE] **Slide:** Allowed vs Not Allowed:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Why is this route not matching?" | "Generate my GamesController" |
> | "Why am I getting 404 on /games/details/abc?" | "Write all my routes for me" |

> [TIP] **Teaching Tip:** Frame the policy shift positively: "You've earned more AI freedom because you understand the basics now. But debugging with AI is a skill — you need to know what to ask."

> [ENGAGE] **Gen-Z:** "AI is your 'route detective' — it helps you figure out why things break, but it doesn't build things for you. Use it like Google, not like a ghostwriter."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the routing errors you WILL see this week. Let's go through them so you don't spend 20 minutes Googling."

> [SLIDE] **Slide:** Error cards:
> ```
> +-----------------------------------------+
> | 404 on valid route                      |
> | Did you call app.MapControllers()?      |
> | Did you restart the app?                |
> +-----------------------------------------+
> +-----------------------------------------+
> | AmbiguousMatchException                 |
> | Two routes match the same URL.          |
> | Fix: Make one route more specific.      |
> +-----------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "AmbiguousMatchException is like two people answering your call at the same time. ASP.NET says 'I don't know who to talk to' and throws an error. Fix: make one route more specific."

> [Q&A] **Student Q:** "Why does a constraint failure give 404 instead of 400?"
> **Short answer:** Because the route doesn't match — it's "not found," not "bad request."
> **Real answer:** A constraint is part of the route pattern. If the constraint fails, ASP.NET treats it as if the route doesn't exist. Another route might match, so it keeps looking.
> **The hidden question:** "That's confusing." -> Yes. It's a known quirk of ASP.NET Core routing.

> [LOST] **If they're lost:** "The two things to check first: (1) Did you call `app.MapControllers()` in Program.cs? (2) Did you restart the app after changing routes? Those fix 90% of routing issues."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: `MapControllers()` enables attribute routing. Without it, your `[Route]` attributes are ignored."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. The #1 pitfall is forgetting `app.MapControllers()` — emphasize it repeatedly. Use the whiteboard to trace URLs to actions — visual route matching is the fastest way to build the mental model.

---

## Week 6: Controllers & Action Results

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Code Comparison |
| Code Walkthrough | 30 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> [TIP] **Teaching Tip (Week 6 strategy):** Students will want to put all logic in the controller. Resist this urge early — frame the controller as a "traffic cop" that delegates, not a "kitchen" that cooks. The key mental model: every action returns an `IActionResult`, and the specific type determines what the browser receives.

---

### The Hook

> [SPEAK] **Script:** "Your controller is the bouncer of your web app. It decides who gets in (View), who gets kicked out (Redirect), who gets a VIP pass (Json), and who's dead to the app (StatusCode 404)."

> [SLIDE] **Slide:** Title: "The Controller is the Bouncer"  
> Visual: A bouncer at a club door with four signs: "View -> Inside," "Redirect -> Next door," "Json -> VIP lounge," "404 -> Not on the list."

> [ENGAGE] **Gen-Z:** "Every response your app sends is the controller making a decision. View = 'you're welcome in.' Redirect = 'go somewhere else.' Json = 'here's the data, no HTML.' 404 = 'you don't exist to me.'"  
> **-> Poll:** "Raise your hand if you've ever clicked a link and got redirected to a login page. That's `RedirectToAction` in action."

> [LOST] **If they're lost:** "A controller is just a class that handles web requests. You type a URL, the controller runs a method, and that method decides what to send back. That's it."

---

### The Analogy

> [SPEAK] **Script:** "A controller is a fast-food drive-thru speaker. The customer (browser) says 'I'll have a #5' (the URL). The speaker (controller) can respond in different ways: 'Here's your food' is View, 'We're out, go to the other location' is Redirect, 'Here's the nutritional info' is Json, and 'Sorry, we're closed' is StatusCode."

> [BOARD] **Whiteboard:** Draw the drive-thru analogy:
> ```
> Customer (Browser) -> "I want /shop/details/5"
>     v
> Speaker (Controller) -> Details(int id)
>     v
> Response options:
>   [BURGER] View()     -> "Here's the page"
>   [REFRESH] Redirect() -> "Go to /shop instead"
>   [CLIPBOARD] Json()     -> "Here's the data"
>   [NOENTRY] StatusCode -> "Not found / Closed"
> ```

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "If you visit `/shop/details/5` and the product doesn't exist — what should the controller return? 10 seconds, go!" (Answer: `NotFound()` or `StatusCode(404)`.)

> [LOST] **If they're lost:** "Think of it like GCash. You request money transfer. The app responds: success (View), insufficient funds (StatusCode 400), or server error (StatusCode 500). Same request, different responses."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (15 min action results -> 10 min model binding primitives)

> [SPEAK] **Script:** "Every action method returns `IActionResult`. Think of it as 'something the browser can work with.' There are about 8 types you'll use 90% of the time. Let's go through each one."

> [SLIDE] **Slide:** Show each action result type one at a time — not all at once. For each: the method name, what it returns, and a one-line example. Use a table format.

> [TIP] **Teaching Tip:** The most important distinction: `View()` returns HTML, `Json()` returns data, `Redirect()` sends the browser elsewhere. Students confuse these constantly. Emphasize: "View = page. Json = data. Redirect = go somewhere else."

> [ASK] **Ask the class:** "If I'm building an API for a mobile app — which action result will I use most?" (Answer: `Json()` and `StatusCode()`. Mobile apps don't render HTML.)

> [ENGAGE] **Gen-Z:** "Action results are like the different ways you respond to a text. View = a full reply. Json = just the facts. Redirect = 'check this link instead.' 404 = left on read."  
> **-> Phone moment:** "Think about the last 5 apps you used. Which ones showed you pages (View)? Which ones showed you data feeds (Json)? Both are action results."

> [Q&A] **Student Q:** "Why `IActionResult` and not just `string` or `ViewResult`?"
> **Short answer:** So one method can return different types depending on conditions.
> **Real answer:** If you return `ViewResult`, you can only return views. `IActionResult` lets you return a view, a redirect, or an error — all from the same method. This is essential for real-world logic like "if not found, return 404."
> **The hidden question:** "Isn't that over-engineering?" -> Not when you need conditional responses.

> [Q&A] **Student Q:** "What's the difference between `Redirect()` and `RedirectToAction()`?"
> **Short answer:** `Redirect` takes a URL. `RedirectToAction` takes a controller and action name.
> **Real answer:** `RedirectToAction` uses routing to build the URL. If your routes change, `RedirectToAction` still works. `Redirect("https://...")` breaks if the URL changes.
> **The hidden question:** "Which should I use?" -> `RedirectToAction` for internal routes. `Redirect` for external URLs.

> [LOST] **If they're lost:** "Forget the interface name. Just remember: `return View()` shows a page. `return Json()` shows data. `return Redirect()` sends you elsewhere. `return NotFound()` says 'not here.' Start with these four."

---

### Code Walkthrough

> [TIME] **Pacing:** 30 min (5 min setup -> 15 min live type -> 10 min trace-through)

> [SPEAK] **Script:** "Let's build a controller that demonstrates every major action result type. Watch how each one produces a different response in the browser."

> [SLIDE] **Slide:** Show the `DemoController` one action at a time. After each action, show what the browser sees when you visit that route.

> [TIP] **Teaching Tip:** **Type this live.** After typing each action, immediately run the app and visit the route. Students need to see the actual browser output — not just the code. For `Json()`, show the raw JSON in the browser. For `Redirect()`, show the browser actually navigating.

> [BOARD] **Whiteboard:** Trace `/demos/json`:
> ```
> GET /demos/json
>   v
> DemoController.GetJson()
>   v
> Creates anonymous object { Id=1, Name="Wireless Mouse", Price=49.99 }
>   v
> return Json(product) -> serializes to JSON
>   v
> Response: Content-Type: application/json
> Body: {"id":1,"name":"Wireless Mouse","price":49.99}
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Type the `DemoController` with me. After each action, we'll test it in the browser. Don't skip any — each one teaches a different response type."

> [Q&A] **Student Q:** "Why does the `Json()` result look different in different browsers?"
> **Short answer:** Browsers render JSON differently.
> **Real answer:** Chrome shows raw JSON. Firefox might try to download it. Edge might format it. The data is the same — only the display differs. Use the Network tab to see the raw response.
> **The hidden question:** "Is my JSON broken?" -> No. It's the browser's rendering.

> [LOST] **If they're lost:** "Let's focus on just two actions first: `View()` and `Content()`. Get those working. Then add `Redirect()`. Then `Json()`. Build up gradually."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "Every response your app sends is one of these types. Understanding action results means you control exactly what the browser gets. Modern apps increasingly return JSON — SPAs, mobile apps, APIs. They all use the same controllers you're learning today."

> [SLIDE] **Slide:** Screenshot of a real API response (e.g., GitHub API returning JSON for a user). Label: "This is just a controller returning `Json()`. Same pattern you learned today."

> [TIP] **Teaching Tip:** Connect to the job market: "Every .NET job posting mentions APIs. APIs are just controllers that return `Json()` instead of `View()`. You're learning API development right now."

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have used an API before?" (Some hands.) "You just learned how to build one. Every `Json()` return is an API endpoint."

> [LOST] **If they're lost:** "You don't need to master all action results today. Just understand: the controller decides what the browser gets. That decision is the return statement."

---

### Exercise: Controller Portfolio

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Build a `PortfolioController` with at least 5 different action result types. Each route should demonstrate a different response. You have 40 minutes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] `/portfolio` -> `Content()` with intro text
> - [ ] `/portfolio/projects` -> `View()` with project list
> - [ ] `/portfolio/project/{id:int}` -> `View()` or `NotFound()`
> - [ ] `/portfolio/api/projects` -> `Json()` with project data
> - [ ] `/portfolio/redirect` -> `Redirect()` to GitHub
> - [ ] `/portfolio/error` -> `StatusCode(500)`

> [TIP] **Teaching Tip:** Circulate during the first 10 minutes. Students will get stuck on the `NotFound()` conditional logic — "how do I check if the project exists?" Help them with the pattern: `if (project == null) return NotFound();`.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person builds the View and Content actions, the other builds Json and Redirect. Then combine and test all routes together."

> [ASK] **Mid-exercise check-in (at 20 min):** "How many have 3 action types working?" (Show of hands.) "The JSON endpoint — visit it in the browser. Do you see raw data with no HTML? That's the API pattern."

> [LOST] **If they're lost:** "Start with just `Content()` and `View()`. Get those working. Then add `Redirect()`. Don't try to build all 5 at once."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, AI is your debugging partner. Ask it why your View returns 404, why Json downloads instead of displaying, or why your redirect loops. But don't ask it to generate your controller."

> [SLIDE] **Slide:** Prompt template:
> "I called [route] and expected [result type] but got [actual result]. Here's my controller code [paste]."

> [TIP] **Teaching Tip:** Demonstrate a good AI prompt vs a bad one. Good: "My View() returns 404 for Shop/Index. Here's my controller and view path." Bad: "Build me a portfolio controller."

> [ENGAGE] **Gen-Z:** "AI is your 'response type checker' — it helps you figure out why the browser shows something unexpected. Use it to debug, not to build."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the action result errors you'll see this week. Most are path issues or type confusion."

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | View() returns 404                       |
> | View file not at Views/{Controller}/     |
> | {Action}.cshtml                          |
> +------------------------------------------+
> +------------------------------------------+
> | Redirect() loops forever                 |
> | You redirected to the same URL that      |
> | triggers the redirect.                   |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "A redirect loop is like being stuck in a group chat where everyone keeps tagging each other. A -> B -> A -> B -> crash. Fix: make sure the redirect goes somewhere different."

> [Q&A] **Student Q:** "Why does `NotFound()` return an empty page?"
> **Short answer:** By default, it returns no body.
> **Real answer:** Pass an object to include a message: `return NotFound(new { error = "Not found" })`. This returns JSON with the error message.
> **The hidden question:** "How do I show a custom 404 page?" -> That's middleware, covered later.

> [LOST] **If they're lost:** "The two things to check first: (1) Is your view file in the right folder? (2) Does your action method name match the view file name? Those fix 90% of action result issues."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: `View()` looks for `Views/{Controller}/{Action}.cshtml`. If that file doesn't exist, you get 404."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. The key mental model is "controller = traffic cop." Test every action result in the browser immediately after typing it — seeing the actual response is worth more than reading about it.

---

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

## Week 9: EF Core Fundamentals

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Code Comparison |
| Code Walkthrough | 35 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 5 min | Overflow |

> [TIP] **Teaching Tip (Week 9 strategy):** This is the first time students touch a real database. The magic of "I wrote C# and it made a table!" is powerful — but migrations will confuse them. Go slow on `dotnet ef migrations add` and `dotnet ef database update`. Have them run these commands themselves, not just watch you. The "aha" moment is when they see data persist after restarting the app.

---

### The Hook

> [SPEAK] **Script:** "Remember writing SQL queries in VB? String concatenation, SQL injection vulnerabilities, crying at 2 AM because you forgot a comma? We're never doing that again. Entity Framework Core writes the SQL for you. You just write C#."

> [SLIDE] **Slide:** Title: "Never Write SQL Again"  
> Left: A messy VB SQL string with concatenation, labeled "The Old Way."  
> Right: Clean C# LINQ query, labeled "The EF Core Way."  
> Subtitle: "Same database. Zero SQL strings. One happier you."

> [TIP] **Teaching Tip:** Read the hook with relief, not mockery. Some students actually liked writing SQL. Frame EF Core as a productivity upgrade, not a replacement for understanding databases.

> [ENGAGE] **Gen-Z:** "EF Core is like autocorrect but for databases. You type what you want in C#, and it figures out the SQL. Except unlike autocorrect, it actually gets it right."  
> **-> Poll:** "Raise your hand if you've ever gotten a SQL syntax error because of a missing quote. Today that ends."

> [LOST] **If they're lost:** "If you've never written SQL before, even better. You're learning the modern way from day one. EF Core is how most .NET developers interact with databases."

---

### The Analogy

> [SPEAK] **Script:** "An ORM is like Google Drive for your data. You don't care *how* Google stores your files — you just open the folder, drag files in, and search for them. EF Core is Google Drive for your C# objects. It saves them to a database without you writing `INSERT INTO` or `SELECT * FROM`."

> [BOARD] **Whiteboard:** Draw the ORM translation layer:
> ```
> C# Objects                    Database Tables
> +-----------------+           +-----------------+
> | Product class   |  <-EF->    | Products table   |
> | .Name property  |  <-EF->    | Name column      |
> | .Price property |  <-EF->    | Price column     |
> | List<Product>   |  <-EF->    | SELECT * query   |
> +-----------------+           +-----------------+
> ```
> Label the middle arrow: "EF Core translates automatically."

> [TIP] **Teaching Tip:** The Google Drive analogy works for most students. For those who don't use Drive, add: "Or like GCash — you don't care how the money is stored in their servers, you just see your balance and send money."

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "If EF Core is Google Drive for data, what's the 'folder'? What's the 'file'? 10 seconds, go!" (Answer: Folder = table, File = row/record.)

> [LOST] **If they're lost:** "Think of it like a translator at the UN. You speak C#. The database speaks SQL. EF Core is the translator in the middle. You say 'give me all products' in C#, EF Core says 'SELECT * FROM Products' to the database."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (8 min ORM concept -> 7 min DbContext -> 5 min migrations -> 5 min CRUD)

> [SPEAK] **Script:** "Here's the entire EF Core mental model in four parts: ORM translates, DbContext connects, migrations version-control your database, and CRUD is how you interact with data. Let's go through each one."

> [SLIDE] **Slide:** Show the C# class -> SQL table mapping first. Reveal one property at a time: `int Id` -> `Id int PRIMARY KEY IDENTITY`, `string Name` -> `Name nvarchar(max)`, `decimal Price` -> `Price decimal(18,2)`.

> [TIP] **Teaching Tip:** The most important concept this week is **`DbSet<T>` as a "database-connected List<T>."** Students already know `List<T>` — build on that. Emphasize: "You query it like a List, but the data lives in a database." For migrations, stress: "Migrations are version control for your database schema. Like git, but for tables."

> [ASK] **Ask the class:** "If I add a new property to my Product class — how does the database know about it?" (Answer: You create a new migration and apply it.)

> [ENGAGE] **Gen-Z:** "DbContext is like your GCash app. It's your connection to your money (database). You don't touch the bank vault directly — you go through the app. `DbSet<Product>` is like your transaction history — a list that's connected to the real data."  
> **-> Phone moment:** "Think about how your phone apps store data. They don't save to files — they save to databases. EF Core is how your C# code talks to those databases."

> [Q&A] **Student Q:** "Do I still need to learn SQL?"
> **Short answer:** Yes, eventually.
> **Real answer:** EF Core handles 90% of what you'll do. But when something goes wrong — slow queries, complex joins — you need to read the SQL EF generates. You don't write it daily, but you need to understand it.
> **The hidden question:** "Can I skip SQL entirely?" -> Not if you want to be a senior developer. But you can start with EF Core and learn SQL as needed.

> [Q&A] **Student Q:** "What's the difference between `Find()` and `Where()`?"
> **Short answer:** `Find()` gets one record by primary key. `Where()` filters by any condition.
> **Real answer:** `Find(1)` generates `SELECT ... WHERE Id = 1` and checks the local cache first. `Where(p => p.Price < 50)` generates `SELECT ... WHERE Price < 50` and always hits the database.
> **The hidden question:** "Which is faster?" -> `Find()` for single records by ID. `Where()` for everything else.

> [LOST] **If they're lost:** "Forget the technical terms. The flow is: (1) Define a class. (2) Add it as a DbSet in DbContext. (3) Run a migration. (4) Now you can add, read, update, and delete records using C# only. That's it."

---

### Code Walkthrough

> [TIME] **Pacing:** 35 min (5 min packages -> 10 min models + DbContext -> 5 min Program.cs -> 5 min migrations -> 10 min controller)

> [SPEAK] **Script:** "Let's set up EF Core from scratch. Watch how each piece connects — the model, the DbContext, the connection string, the migration, and finally the controller that uses it all."

> [SLIDE] **Slide:** Show the setup steps one at a time: (1) packages, (2) models, (3) DbContext, (4) Program.cs registration, (5) migration commands, (6) controller. Don't show everything at once.

> [TIP] **Teaching Tip:** **Type this live, don't paste.** When you run `dotnet ef migrations add InitialCreate`, pause and explain: "This command compares your models to the last migration and generates a C# file describing what changed." Then run `dotnet ef database update` and say: "This applies the migration to the actual database." Make the deliberate mistake of forgetting `UseSqlServer()` — let it fail, then fix it.

> [BOARD] **Whiteboard:** Draw the full data flow:
> ```
> Controller -> AppDbContext -> SQL Server
>      v            v
>   Product     DbSet<Product>
>      v            v
>   .Add()     .SaveChanges() -> INSERT INTO Products
>   .ToList()  db.Products    -> SELECT * FROM Products
>   .Find(1)   db.Products    -> SELECT ... WHERE Id = 1
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Install the packages with me. Then create the models. Then the DbContext. Run the migration. Watch the database get created. This is the moment your code becomes persistent."

> [Q&A] **Student Q:** "What's `(localdb)\MSSQLLocalDB`?"
> **Short answer:** It's a lightweight SQL Server that comes with Visual Studio.
> **Real answer:** LocalDB is a developer-friendly version of SQL Server. It runs on-demand, doesn't need a service, and stores files in your user folder. Perfect for development. In production, you'd use a real SQL Server instance.
> **The hidden question:** "Do I need to install SQL Server separately?" -> No. LocalDB comes with Visual Studio.

> [LOST] **If they're lost:** "Let's do the absolute minimum: one model, one DbSet, one migration. Get that working. Then add the controller. Don't try to set up everything at once."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "EF Core is used by 70%+ of .NET web apps. It's not optional — it's the standard. Companies pick .NET precisely because EF Core makes database work so smooth. Without it, you're writing SQL strings, managing connections manually, and debugging 'string or binary data would be truncated' at 11 PM."

> [SLIDE] **Slide:** Screenshot of a real job posting for ".NET Developer" highlighting "Entity Framework" or "EF Core" in the requirements. Bonus: show a job posting from a Philippine company.

> [TIP] **Teaching Tip:** Keep this to 5 minutes. The goal is motivation. Connect it to their future: "Every .NET job you apply for will mention EF Core. Learning it now means you're already ahead."

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have seen 'Entity Framework' in a job posting?" (Show a real JobStreet screenshot if hands are low.) "That's your future self thanking you for paying attention today."

> [LOST] **If they're lost:** "You don't need to master EF Core today. Just understand: it lets you work with databases using C# instead of SQL. That's the core idea. Everything else is details."

---

### Exercise: First Migration + Seed Data

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Create a new MVC project, set up EF Core, define a Product model, create your first migration, seed some data, and display it on a page. You have 40 minutes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Create ASP.NET Core MVC project
> - [ ] Add EF Core SQL Server packages
> - [ ] Define `Product` model (Id, Name, Price, StockQuantity, CreatedAt)
> - [ ] Create `AppDbContext` with `DbSet<Product>`
> - [ ] Register DbContext in `Program.cs`
> - [ ] Create and apply first migration
> - [ ] Add seed data (5 products)
> - [ ] Create `ProductsController` with `Index` action
> - [ ] Run and verify products appear on page

> [TIP] **Teaching Tip:** Circulate during the first 15 minutes — migration setup is where students get stuck. The "aha" moment is when they run the app and see seeded data on the page for the first time. Walk around and celebrate that moment.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the models and DbContext, the other handles the migration and controller. Then combine and test together."

> [ASK] **Mid-exercise check-in (at 20 min):** "How many have the migration applied?" (Show of hands.) "How many see data on the page?" "If neither, let's do a quick group debug."

> [LOST] **If they're lost:** "Start with just the model and DbContext. Get those compiling. Then try the migration command. If it fails, run `dotnet build` first. Then add the seed data. Finally the controller. One step at a time."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week marks a policy shift: AI is now your pair programmer. You can ask it to generate DbContext code, seed data, and migration help. But for every line AI generates, you must add a comment explaining what it does. This proves you understand it."

> [SLIDE] **Slide:** Allowed vs Not Allowed:
> | [OK] Allowed | [NO] Not Allowed |
> |-----------|--------------|
> | "Generate an EF Core DbContext for Product and Category" | "Build my entire exercise" |
> | "Write seed data for 5 products" (then comment every line) | "Do my migration for me" |

> [TIP] **Teaching Tip:** Demonstrate the comment requirement. Show AI-generated code, then walk through adding line-by-line comments. "This line registers the DbContext. This line defines the connection string. This line creates a DbSet." The comments are the learning.

> [ENGAGE] **Gen-Z:** "AI is your 'pair programmer' now — it writes code, you explain it. If you can't explain what a line does, you didn't learn anything. The comments are your proof of understanding."

> [LOST] **If they're lost:** "Start by asking AI to explain concepts, not generate code. 'What does DbSet<Product> mean?' 'What does SaveChanges() do?' Build understanding first, then use AI for code."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the EF Core errors you WILL see this week. Let's go through them so you don't spend 20 minutes Googling."

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | "Cannot add migration"                   |
> | Run dotnet restore first.                |
> | Make sure the project builds.            |
> +------------------------------------------+
> +------------------------------------------+
> | "No database provider configured"        |
> | You forgot UseSqlServer() in Program.cs  |
> +------------------------------------------+
> +------------------------------------------+
> | "Invalid object name 'Products'"         |
> | You haven't run dotnet ef database update|
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "'Cannot add migration' is like trying to save a file in a folder that doesn't exist. Run `dotnet restore` first — it's like refreshing your project's dependencies."

> [Q&A] **Student Q:** "What does 'migrations out of sync' mean?"
> **Short answer:** Your code has migrations your database doesn't know about.
> **Real answer:** If a teammate adds a migration and you pull their code, your database is behind. Run `dotnet ef database update` to catch up. It's like `git pull` but for your database schema.
> **The hidden question:** "How do I avoid this?" -> Always run migrations after pulling code from teammates.

> [LOST] **If they're lost:** "The three things to check first: (1) Does the project build? (2) Did you call `UseSqlServer()`? (3) Did you run `dotnet ef database update`? Those fix 90% of EF Core errors this week."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: `dotnet ef migrations add` creates the migration file. `dotnet ef database update` applies it. You need both."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. The key mental model is "DbSet = database-connected List." The #1 pitfall is forgetting to run migrations — emphasize `dotnet ef migrations add` followed by `dotnet ef database update` as a two-step process. Have students run these commands themselves, not just watch. The "aha" moment is seeing seeded data persist on the page after restarting the app.

---

## Week 10: Relationships & Data Display

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Code Comparison |
| Code Walkthrough | 35 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 5 min | Overflow |

> [TIP] **Teaching Tip (Week 10 strategy):** This is the hardest EF Core week. Navigation properties, `.Include()`, the N+1 problem, and async all hit at once. The N+1 problem is invisible with small datasets — you MUST show them the difference between 1 query and 101 queries. Use the whiteboard to draw the JOIN. Students will get `NullReferenceException` constantly because they forget `.Include()` — normalize this error as a learning moment.

---

### The Hook

> [SPEAK] **Script:** "One-to-many relationships. Sounds like something from your ex's Tinder settings. But in web apps, it's how products belong to categories, orders have items, and users write reviews. Without relationships, your data is just a bunch of lonely tables."

> [SLIDE] **Slide:** Title: "Your Data Is Lonely"  
> Left: Two separate tables (Products, Categories) with no connecting line, labeled "No Relationships."  
> Right: Same tables connected by a line from CategoryId to Id, labeled "With Relationships."  
> Subtitle: "Today we connect the dots."

> [TIP] **Teaching Tip:** The Tinder joke gets a laugh — use it to transition into the real concept. Then immediately show a real-world example: Shopee product pages where each product shows its category.

> [ENGAGE] **Gen-Z:** "Think about Shopee. Every product has a category. Every order has items. Every review has a user. None of these exist in isolation. Relationships are what make a database useful instead of just a bunch of spreadsheets."  
> **-> Poll:** "Raise your hand if you've ever seen a product page that shows the category name. That's a relationship working."

> [LOST] **If they're lost:** "Forget the term 'one-to-many' for a second. Think: one category has many products. One author has many books. That's it. We're just learning how to code that connection."

---

### The Analogy

> [SPEAK] **Script:** "Spotify playlists. A Playlist has many Songs. A Song belongs to one Playlist. When you open a playlist, Spotify's gotta load 50 songs at once. Without navigation properties, they'd have to run 51 separate queries — one for the playlist, 50 for each song. That's the N+1 problem."

> [BOARD] **Whiteboard:** Draw the N+1 problem visually:
> ```
> BAD (N+1 queries):
> Query 1: SELECT * FROM Playlists          <- 1 query
> Query 2: SELECT * FROM Songs WHERE PlaylistId = 1  <- N queries
> Query 3: SELECT * FROM Songs WHERE PlaylistId = 2
> Query 4: SELECT * FROM Songs WHERE PlaylistId = 3
> ... (50 more)
> 
> GOOD (1 query with JOIN):
> SELECT * FROM Playlists
> LEFT JOIN Songs ON Playlists.Id = Songs.PlaylistId  <- 1 query
> ```

> [TIP] **Teaching Tip:** The Spotify analogy is perfect for Filipino students — almost all use Spotify. Emphasize the key insight: **without `.Include()`, navigation properties are null.** This is the #1 source of errors this week.

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "If you open a Spotify playlist with 50 songs and the app runs 51 queries — why is that bad? 10 seconds, go!" (Answer: Slow. Each query takes time. 51 queries = 51 round trips to the server.)

> [LOST] **If they're lost:** "Think of it like ordering from a menu. Bad way: order one item, wait, order another, wait, repeat 50 times. Good way: order everything at once. `.Include()` is ordering everything at once."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (8 min navigation properties -> 8 min Include/Eager Loading -> 5 min N+1 -> 4 min async)

> [SPEAK] **Script:** "Here's the entire relationships mental model: navigation properties connect tables, `.Include()` loads related data in one query, the N+1 problem is what happens when you don't use Include, and async keeps your app from freezing. Let's go through each."

> [SLIDE] **Slide:** Show the Category and Product models side by side. Highlight `List<Product>` in Category and `Category Category` in Product. Then reveal the foreign key `CategoryId` — this is the glue.

> [TIP] **Teaching Tip:** The most important concept: **EF Core figures out relationships from naming conventions.** `CategoryId` + `Category` navigation property = EF knows it's a foreign key. Emphasize: "Name your foreign key `{ClassName}Id` and EF does the rest." For `.Include()`, stress: "Without it, the navigation property is null. Always."

> [ASK] **Ask the class:** "If I query `db.Products.ToList()` — what is `product.Category` for each product?" (Pause. Answer: null. Because we didn't use `.Include()`.)

> [ENGAGE] **Gen-Z:** "Navigation properties are like following someone on Instagram. You have a link to their profile (the related data), but you don't automatically load their entire feed — you have to click (`.Include()`) to see it."  
> **-> Phone moment:** "Think about how Facebook loads a post with comments. The post loads first, then comments load. That's eager loading — everything in one go."

> [Q&A] **Student Q:** "Why do I need both `CategoryId` and `Category Category`? Isn't one enough?"
> **Short answer:** `CategoryId` is the actual foreign key. `Category` is the navigation property for convenience.
> **Real answer:** You could have just `CategoryId` and manually query the category. But `Category` lets you write `product.Category.Name` instead of a separate query. EF Core uses both to understand the relationship.
> **The hidden question:** "Can I skip the navigation property?" -> Yes, but your code will be uglier.

> [Q&A] **Student Q:** "What's the difference between async and sync for database calls?"
> **Short answer:** Async doesn't block the thread while waiting for the database.
> **Real answer:** In a web app, each request gets a thread. If you block it waiting for the database, that thread can't handle other requests. Async frees the thread to do other work. With 100 concurrent users, async matters a lot.
> **The hidden question:** "Is it that important?" -> For a class project, no. For production, yes.

> [LOST] **If they're lost:** "Forget async for now. Focus on this: (1) Define navigation properties in your models. (2) Use `.Include()` when you need related data. (3) Without Include, navigation properties are null. That's the core."

---

### Code Walkthrough

> [TIME] **Pacing:** 35 min (10 min models + relationships -> 10 min controller with Include -> 10 min view with nested loops -> 5 min SQL comparison)

> [SPEAK] **Script:** "Let's build a store that displays categories with their products. Watch how `.Include()` loads everything in one query, and how the view loops through categories and then products inside each category."

> [SLIDE] **Slide:** Show the StoreController first — highlight `.Include(c => c.Products)`. Then show the View — highlight the nested `@foreach` loops. Finally show the generated SQL — one LEFT JOIN query.

> [TIP] **Teaching Tip:** **Type this live.** After typing the controller, run the app and show the output. Then open the SQL Server output window and show the generated query. Say: "See? One query. Not N+1. EF Core generated a LEFT JOIN for us." This visual proof is powerful.

> [BOARD] **Whiteboard:** Draw the query flow:
> ```
> _db.Categories.Include(c => c.Products)
>       v
> SELECT c.*, p.*
> FROM Categories c
> LEFT JOIN Products p ON c.Id = p.CategoryId
>       v
> EF maps results back to:
>   Category { Products: [Product, Product, ...] }
>   Category { Products: [Product, ...] }
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Type the controller with me. Notice the `.Include()`. Then type the view — nested foreach loops. Run it. See categories with their products grouped. That's relationships working."

> [Q&A] **Student Q:** "Why does the view use `category.Products.Count` — isn't that another query?"
> **Short answer:** No — because we used `.Include()`, the products are already loaded.
> **Real answer:** `.Include(c => c.Products)` loads all products for all categories in one query. `category.Products.Count` just counts the in-memory list. Zero additional database calls.
> **The hidden question:** "How do I know it's not making extra queries?" -> Check the SQL output window. You'll see only one query.

> [LOST] **If they're lost:** "Let's do the simplest relationship first: just the controller with `.Include()`. Get that working. Then add the view. Don't try to build everything at once."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "The N+1 problem takes down production apps. It works fine with 10 categories — 11 queries, 20ms. Then crashes with 10,000 categories — 10,001 queries, 30 seconds. Companies have pushed hotfixes at 2 AM for this exact issue. Learning `.Include()` now saves you from that 2 AM call."

> [SLIDE] **Slide:** A timeline visualization: "10 categories = 20ms [OK]" -> "100 categories = 200ms [OK]" -> "10,000 categories = 30 seconds [NO]" -> "With Include: 10,000 categories = 50ms [OK]"

> [TIP] **Teaching Tip:** Keep this to 5 minutes. The 2 AM hotfix story is memorable — students will remember it when they write their first `.Include()`.

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have had an app that was fast at first but got slower as you added more data?" (Some hands.) "That might be the N+1 problem. Today you learned how to fix it."

> [LOST] **If they're lost:** "You don't need to understand performance tuning today. Just remember: use `.Include()` when you need related data. That prevents the N+1 problem. That's enough for now."

---

### Exercise: Data-Driven Page with Related Data

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Build an author-book system. Authors have books. Display authors with their book counts. Show author details with all their books. You have 40 minutes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Create models: `Author` (Id, Name, Bio) and `Book` (Id, Title, Price, Genre, AuthorId, Author)
> - [ ] Create `AppDbContext` with DbSets
> - [ ] Seed data: 3 authors, 3-5 books each
> - [ ] Create `AuthorsController` with `Index` and `Details/{id}`
> - [ ] `Index` — list all authors with book counts
> - [ ] `Details` — show author info + all their books (use `.Include()`)
> - [ ] Create views that display related data
> - [ ] Stretch: "Books by Genre" page with `.Where()`
> - [ ] Stretch: async everywhere

> [TIP] **Teaching Tip:** Circulate during the first 15 minutes — students will get stuck on the model relationships and `.Include()` syntax. The "aha" moment is when they see the book count on the author listing page.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person builds the models and seed data, the other builds the controller and views. Then combine and test together."

> [ASK] **Mid-exercise check-in (at 20 min):** "How many have the seed data working?" (Show of hands.) "How many see book counts on the author page?" "If neither, let's do a quick group debug."

> [LOST] **If they're lost:** "Start with just the models. Get Author and Book with the right properties. Then add the DbSet. Then seed data. Then the controller with `.Include()`. One step at a time."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, AI can generate Include statements, navigation properties, and LINQ queries. But you must comment every generated line. Show me you understand what `.Include(a => a.Books)` actually does."

> [SLIDE] **Slide:** Prompt template:
> "I have Author and Book models. Generate the Include query to show an author with all their books. Here are my models [paste]." Then comment each line.

> [TIP] **Teaching Tip:** Demonstrate asking AI for an Include query, then walk through adding comments. "This line starts the query on the Authors table. This line tells EF to also load the Books for each author. This line executes the query and returns a list."

> [ENGAGE] **Gen-Z:** "AI is your 'LINQ tutor' — it generates the query, you explain it. If you can't explain why `.Include()` is there, you didn't learn."

> [LOST] **If they're lost:** "Start by asking AI to explain concepts: 'What does .Include() do?' 'What's the N+1 problem?' Build understanding first, then use AI for code."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the relationship errors you WILL see this week. Most of them are 'forgot Include' or 'forgot await.'"

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | NullReferenceException on                |
> | product.Category.Name                    |
> | You forgot .Include(p => p.Category)     |
> +------------------------------------------+
> +------------------------------------------+
> | "A possible object cycle was detected"   |
> | JSON loops: Category->Products->Category   |
> | Fix: configure JSON to ignore cycles     |
> +------------------------------------------+
> +------------------------------------------+
> | Async method returns Task, not data      |
> | You forgot await                         |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "NullReferenceException on a navigation property is like clicking an Instagram link that goes nowhere. The link exists (the property), but you didn't load the page (.Include())."

> [Q&A] **Student Q:** "Why does my app work fine with 10 records but feel slow with 100?"
> **Short answer:** You might have the N+1 problem.
> **Real answer:** With 10 records, N+1 = 11 queries — fast enough to not notice. With 100 records, N+1 = 101 queries — noticeable lag. Check the SQL output window to see how many queries are running.
> **The hidden question:** "How do I check?" -> Look at the Visual Studio Output window while the app runs. Count the SELECT statements.

> [LOST] **If they're lost:** "The two things to check first: (1) Are you using `.Include()` for every navigation property you access? (2) Are you using `await` on every async method? Those fix 90% of this week's errors."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: if you access a navigation property, you MUST use `.Include()`. Without it, it's null."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. The N+1 problem is the core concept — show the visual difference between 1 query and N+1 queries. The #1 error is `NullReferenceException` from missing `.Include()` — normalize it as the expected learning curve. Use the Spotify playlist analogy repeatedly. Async is secondary; focus on relationships first.

---

## Week 11: Consuming APIs with HttpClient

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Live API Demo |
| Code Walkthrough | 35 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 5 min | Overflow |

> [TIP] **Teaching Tip (Week 11 strategy):** This week is fun — students finally see their apps talk to the outside world. But JSON deserialization will frustrate them. The mismatch between snake_case JSON and PascalCase C# properties is the #1 error. Have them paste real API responses into json2csharp.com or use AI to generate models. Also: `IHttpClientFactory` vs `new HttpClient()` is a conceptual leap — use the socket exhaustion demo to make it concrete.

---

### The Hook

> [SPEAK] **Script:** "Your app is lonely. It's been talking to its own database all semester. Time to make friends. Your app can talk to other apps — get weather data, GitHub stats, cat pictures. Your app is about to get a lot more interesting."

> [SLIDE] **Slide:** Title: "Your App Is About to Get a Lot More Interesting"  
> Three screenshots side by side: a weather widget, a GitHub profile card, and a Bitcoin price ticker.  
> Subtitle: "All fetched from external APIs. All in C#. All today."

> [TIP] **Teaching Tip:** This hook should feel exciting — it's the week where apps stop being exercises and start being products. Show a live demo if possible: hit an API from your laptop and display the result in 30 seconds.

> [ENGAGE] **Gen-Z:** "Every app you use is just a fancy API consumer. TikTok fetches videos from an API. GCash fetches your balance from an API. Shopee fetches product listings from an API. Today you learn how to do the same thing."  
> **-> Poll:** "Raise your hand if you've ever wondered how apps get real-time data like weather or stock prices. It's all APIs."

> [LOST] **If they're lost:** "An API is just a URL that returns data instead of a webpage. You visit it, it gives you JSON (a data format), and your app uses that data. That's the entire concept."

---

### The Analogy

> [SPEAK] **Script:** "Consuming an API is like ordering food delivery. Your app calls a restaurant (the API), tells them what it wants (the request), they cook it (process), and deliver it (response). If the restaurant is closed, you get an error (500). If you asked for something not on the menu, they say 'we don't have that' (404). If everything works, you eat (display data)."

> [BOARD] **Whiteboard:** Draw the food delivery analogy:
> ```
> Your App (Customer)
>     v "I want weather data for Manila"
> HttpClient (Delivery rider)
>     v GET request to API URL
> External API (Restaurant)
>     v Cooks the data
> JSON Response (Food delivered)
>     v Deserialize into C# objects
> Your App displays it (You eat)
> ```

> [TIP] **Teaching Tip:** The food delivery analogy works for Filipino students — everyone uses Foodpanda or GrabFood. Emphasize the key insight: **your app is the customer, not the restaurant.** It's consuming, not providing.

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "If your app is ordering from GrabFood, what's the request? What's the response? What's a 404? 10 seconds, go!" (Request = order, Response = food, 404 = item not on menu.)

> [LOST] **If they're lost:** "Think of it like asking Google a question. You type a query (request), Google searches (process), and shows results (response). APIs work the same way, just with data instead of search results."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (5 min what is an API -> 8 min IHttpClientFactory -> 7 min JSON serialization -> 5 min error handling)

> [SPEAK] **Script:** "Here's the entire API consumption mental model: APIs return JSON, `IHttpClientFactory` makes HTTP calls safely, JSON serialization turns JSON into C# objects, and error handling keeps your app from crashing when APIs fail. Let's go through each."

> [SLIDE] **Slide:** Show the weather API URL first, then the raw JSON response, then the C# model that matches it. Reveal each step: raw JSON -> `[JsonPropertyName]` mapping -> C# properties.

> [TIP] **Teaching Tip:** The most important concept: **`IHttpClientFactory` over `new HttpClient()`.** Socket exhaustion is real and hard to debug. Show them the one-line difference: `builder.Services.AddHttpClient()` vs `new HttpClient()`. For JSON serialization, emphasize: "Property names must match JSON field names. Use `[JsonPropertyName]` when they don't."

> [ASK] **Ask the class:** "What happens if the API is down when your app tries to fetch data?" (Answer: It crashes — unless you handle the error. That's why we need try-catch and status code checks.)

> [ENGAGE] **Gen-Z:** "JSON serialization is like translating from English to Tagalog. The API speaks English (snake_case JSON). Your C# code speaks Tagalog (PascalCase). `[JsonPropertyName]` is the dictionary that maps between them."  
> **-> Phone moment:** "Open any API URL in your browser. See that JSON text? That's what your app will receive. Your job is to turn that into C# objects."

> [Q&A] **Student Q:** "Why can't I just use `new HttpClient()`? It works."
> **Short answer:** It works until it doesn't — then your app crashes with socket exhaustion.
> **Real answer:** `HttpClient` holds onto system sockets even after you dispose it. Creating many instances exhausts available sockets. `IHttpClientFactory` manages a pool of reusable connections. It's the difference between buying a new phone for every call vs using the same phone.
> **The hidden question:** "Is this really a problem?" -> In development with 5 requests, no. In production with 10,000 requests per minute, yes.

> [Q&A] **Student Q:** "What if the JSON structure changes?"
> **Short answer:** Your deserialization breaks.
> **Real answer:** That's why you need error handling. If the API changes, `ReadFromJsonAsync<T>()` returns null or throws. Catch it, log it, and show a graceful error message to the user instead of a crash.
> **The hidden question:** "How do I protect against this?" -> Always check for null after deserialization. Always have a fallback.

> [LOST] **If they're lost:** "Forget the technical terms. The flow is: (1) Create an HttpClient from the factory. (2) Call the API URL. (3) Get JSON back. (4) Turn JSON into C# objects. (5) Display the data. That's it."

---

### Code Walkthrough

> [TIME] **Pacing:** 35 min (5 min Program.cs setup -> 10 min single API call -> 10 min JSON models -> 10 min parallel dashboard)

> [SPEAK] **Script:** "Let's build a dashboard that fetches from three APIs at the same time. First a simple single API call, then we'll add JSON models, then we'll do all three in parallel with `Task.WhenAll`."

> [SLIDE] **Slide:** Show the single API call first (WeatherController). Then reveal the JSON model classes with `[JsonPropertyName]`. Finally show the parallel DashboardController with `Task.WhenAll`.

> [TIP] **Teaching Tip:** **Type this live.** After the single API call, run it and show the result. Then add the JSON model and show how `GetFromJsonAsync<T>()` replaces manual deserialization. For the parallel dashboard, emphasize: "Three calls at the same time = faster than three calls one after another."

> [BOARD] **Whiteboard:** Draw the parallel execution timeline:
> ```
> Sequential (slow):
> [---Weather 500ms---][---GitHub 500ms---][---News 500ms---] = 1500ms
> 
> Parallel with Task.WhenAll (fast):
> [---Weather 500ms---]
> [---GitHub  500ms---]  = 500ms (all at once)
> [---News    500ms---]
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Type the WeatherController with me. Register `AddHttpClient()` in Program.cs. Run it. See the weather data appear. Now add the GitHub call. Now do both in parallel. Watch the speed difference."

> [Q&A] **Student Q:** "Why does GitHub API require a User-Agent header?"
> **Short answer:** To identify who's making the request.
> **Real answer:** Without a User-Agent, GitHub can't distinguish between legitimate apps and bots. They block unidentified requests to prevent abuse. It's like showing your ID at a building entrance.
> **The hidden question:** "Do all APIs require this?" -> Not all, but many do. Always check the API documentation.

> [LOST] **If they're lost:** "Start with just one API call. Get the weather API working. See the JSON in your browser. Then create the C# model. Then deserialize. Don't try to build the parallel dashboard first."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "No web app is an island. Modern apps integrate 5-15 external APIs on average: payment gateways, maps, notifications, social login, weather, shipping, email. If you can't consume an API, you can't build real products. Every SaaS company has an integration team that does exactly this."

> [SLIDE] **Slide:** A real app architecture diagram showing: Your App -> Stripe (payments), Google Maps (location), SendGrid (email), OpenWeather (weather), GitHub (auth). Label: "One app, five APIs."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Connect it to their capstone: "Your capstone will need at least one external API. This week teaches you how."

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have used GCash? It integrates with banks, telecom providers, and merchants — all through APIs. That's the scale of API integration in the real world."

> [LOST] **If they're lost:** "You don't need to understand enterprise architecture today. Just know: APIs let your app use other services. That's a superpower. Learn it now, use it forever."

---

### Exercise: API Dashboard

> [TIME] **Pacing:** 55 min total (5 min setup -> 40 min coding -> 10 min share)

> [SPEAK] **Script:** "Build a dashboard with three API integrations. Weather, GitHub, and one you choose. Handle errors gracefully — if one API is down, the others still work. You have 40 minutes."

> [SLIDE] **Slide:** Exercise checklist:
> - [ ] Register `IHttpClientFactory` in Program.cs
> - [ ] Fetch Open-Meteo Weather API (free, no key)
> - [ ] Fetch GitHub User API (free, needs User-Agent)
> - [ ] Choose a third API (CoinDesk, Dog Facts, Jikan Anime)
> - [ ] Create `DashboardViewModel` to hold all three data sets
> - [ ] Handle errors: if one API fails, others still display
> - [ ] Display all data in a single view

> [TIP] **Teaching Tip:** Circulate during the first 15 minutes — JSON model creation is where students get stuck. Encourage them to paste the API response into a JSON-to-C# tool or ask AI to generate the model. The "aha" moment is when they see live external data on their page.

> [ENGAGE] **Gen-Z:** **-> Pair up:** "One person handles the weather and GitHub APIs, the other handles the third API. Then combine into one dashboard view."

> [ASK] **Mid-exercise check-in (at 20 min):** "How many have the weather API working?" (Show of hands.) "How many have all three working?" "If you're stuck on JSON models, paste the API response into json2csharp.com or ask AI."

> [LOST] **If they're lost:** "Start with just the weather API. It's the simplest — no key needed, straightforward JSON. Get that working. Then add GitHub. Then the third one. One API at a time."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, AI is your JSON model generator. Paste an API response and ask AI to create the C# model. But comment every generated line — show me you understand what `[JsonPropertyName]` does."

> [SLIDE] **Slide:** Prompt template:
> "I want to call this API [URL]. Generate the C# model and deserialization code. Here's the JSON response [paste]."

> [TIP] **Teaching Tip:** Demonstrate the workflow: (1) Visit API URL in browser, (2) Copy JSON response, (3) Paste into AI prompt, (4) Get C# model, (5) Add comments to every property. This is a real-world skill — developers do this daily.

> [ENGAGE] **Gen-Z:** "AI is your 'JSON translator' — it turns API responses into C# models. But if you can't explain why `[JsonPropertyName('temperature')]` maps to `public double Temperature`, you didn't learn."

> [LOST] **If they're lost:** "Start by asking AI to explain: 'What is JSON deserialization?' 'How does GetFromJsonAsync work?' Build understanding first, then use AI for model generation."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the API errors you WILL see this week. Most are JSON mismatches or missing headers."

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | 403 Forbidden on GitHub API              |
> | You didn't set User-Agent header         |
> | Fix: client.DefaultRequestHeaders.Add    |
> | ("User-Agent", "MyApp")                  |
> +------------------------------------------+
> +------------------------------------------+
> | JSON deserialization returns null        |
> | Property names don't match JSON fields   |
> | Fix: use [JsonPropertyName("field_name")]|
> +------------------------------------------+
> +------------------------------------------+
> | Socket exhaustion                        |
> | You used new HttpClient() in a loop      |
> | Fix: use IHttpClientFactory              |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "403 on GitHub API is like trying to enter a club without ID. The bouncer (GitHub) says 'I don't know who you are.' Fix: show your ID (User-Agent header)."

> [Q&A] **Student Q:** "Why does my JSON model have all null values?"
> **Short answer:** Property names don't match the JSON field names.
> **Real answer:** JSON uses `snake_case` (e.g., `current_weather`), C# uses `PascalCase` (e.g., `CurrentWeather`). Without `[JsonPropertyName("current_weather")]`, the deserializer can't map them.
> **The hidden question:** "How do I check?" -> Print the raw JSON string before deserializing. Compare it to your model property names.

> [LOST] **If they're lost:** "The three things to check: (1) Did you register `AddHttpClient()` in Program.cs? (2) Does your C# model match the JSON structure? (3) Are you checking `IsSuccessStatusCode` before deserializing? Those fix 90% of API errors."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: always use `IHttpClientFactory`, never `new HttpClient()`. That prevents socket exhaustion."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. The "aha" moment is seeing live external data on the page — make sure every student gets at least one API working. The #1 error is JSON deserialization returning null due to property name mismatches — teach `[JsonPropertyName]` early. `IHttpClientFactory` is non-negotiable — drill this in. Use the parallel vs sequential timeline on the whiteboard to show why `Task.WhenAll` matters.

---

## Week 12: Mini-Capstone Checkpoint

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Architecture Diagram |
| Code Walkthrough | 35 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 60 min | Lab (mini-capstone build session) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 10 min | Group Debug + Q&A |
| Buffer | 5 min | Overflow |

> [TIP] **Teaching Tip (Week 12 strategy):** This is not a teaching week — it's a building week. Students should spend most of their time coding, not listening. Keep lectures short. The service layer is the new concept — everything else is review. Walk around constantly. This week reveals who actually learned the material and who has been coasting. Be supportive but honest: "If you can't wire up DI by now, you need to review Weeks 2 and 9."

---

### The Hook

> [SPEAK] **Script:** "Everything you've learned this semester — MVC, routing, models, validation, EF Core, APIs — it all comes together this week. You're not writing exercises anymore. You're building a real app. Scared? Good. That means it matters."

> [SLIDE] **Slide:** Title: "This Is Where It All Comes Together"  
> A puzzle visualization: pieces labeled "MVC," "Routing," "EF Core," "APIs," "Validation" clicking together into a complete app screenshot.  
> Subtitle: "Week 12: The pieces connect."

> [TIP] **Teaching Tip:** Deliver this with energy but also warmth. Some students are genuinely anxious about building something from scratch. Acknowledge it: "It's okay to be nervous. You have all the pieces. Today we just put them together."

> [ENGAGE] **Gen-Z:** "This is like the final boss level. You've been grinding XP all semester — leveling up your MVC skills, unlocking EF Core, mastering APIs. Now you face the boss: build a real app. You have all the skills. You just need to combine them."  
> **-> Poll:** "Raise your hand if you're nervous about building something from scratch. Good. That means you care. Now let's do it."

> [LOST] **If they're lost:** "Don't panic. This isn't a test. It's a checkpoint. You'll build something small but complete. If you can do a controller, a model, a view, and a database query — you can do this."

---

### The Analogy

> [SPEAK] **Script:** "You've been training for a sport all semester. Week 1 you learned to hold the racket. Week 5 you learned to serve. Week 9 you learned the rules. This week you play your first real match. You'll make mistakes. You'll drop the ball. But you'll also see how everything connects, and that's the point."

> [BOARD] **Whiteboard:** Draw the full architecture diagram:
> ```
> Browser (User visits /tasks)
>     v
> Controller (TaskController.Index)
>     v                    v
> Service (ITaskService)   Service (IWeatherService)
>     v                    v
> DbContext (Database)     HttpClient (External API)
>     v                    v
> Task data                Weather data
>     v                    v
>         ViewModel (combined)
>             v
>         View (HTML rendered)
> ```

> [TIP] **Teaching Tip:** This diagram is the most important visual of the entire term. Draw it slowly. Point to each layer. Say: "This is what a real .NET app looks like. Not a toy. A real app." Leave it on the board for the entire session.

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "Point to the diagram. If the database is down, which layer breaks first? If the API is slow, which layer feels it? 10 seconds, go!" (Database down -> Service layer. API slow -> Service layer -> Controller waits.)

> [LOST] **If they're lost:** "Think of it like a restaurant chain. The customer (browser) talks to the manager (controller). The manager tells the kitchen (service) what to make. The kitchen gets ingredients from the fridge (database) and from suppliers (APIs). Each layer has one job."

---

### Concept Discussion

> [TIME] **Pacing:** 25 min total (10 min service layer -> 8 min separation of concerns -> 7 min integration patterns)

> [SPEAK] **Script:** "The service layer is the new concept this week. It's a class that sits between your controller and your data. Controllers handle HTTP. Services handle business logic. This separation is what separates toy apps from production apps."

> [SLIDE] **Slide:** Show the controller vs service comparison side by side. Left: a fat controller doing database work, validation, and API calls (labeled "Bad"). Right: a thin controller delegating to services (labeled "Good").

> [TIP] **Teaching Tip:** The service layer is a conceptual leap. Students will ask "why not just put it in the controller?" Answer: "You can. But when your controller is 200 lines long and you need the same logic in another controller, you'll wish you had a service." Show them a real-world example: a UserController and an AdminController both needing the same user lookup logic.

> [ASK] **Ask the class:** "If I need to get all tasks in two different controllers — do I copy-paste the database query, or do I put it in a service?" (Answer: Service. DRY — Don't Repeat Yourself.)

> [ENGAGE] **Gen-Z:** "The service layer is like having a group chat for your app's logic. Instead of every controller doing its own thing, they all ask the service. The service is the group admin — it knows the rules and coordinates everything."  
> **-> Phone moment:** "Think about how GCash works. The app (controller) doesn't talk to the bank directly. It goes through GCash's backend service. That service handles the logic, security, and database. Same pattern."

> [Q&A] **Student Q:** "Do I need a service for every model?"
> **Short answer:** No. Start with services for complex logic.
> **Real answer:** Simple CRUD (create, read, update, delete) can stay in controllers. Services are for when you have business rules, multiple data sources, or shared logic. Don't over-engineer a class project.
> **The hidden question:** "How do I know when it's complex enough?" -> If the controller method is more than 15 lines, consider a service.

> [Q&A] **Student Q:** "What's the difference between a service and a repository?"
> **Short answer:** A repository is just data access. A service is business logic + data access.
> **Real answer:** A repository wraps DbContext operations (GetAll, GetById, Add, Update, Delete). A service uses repositories (or DbContext directly) plus adds business rules: "A task can only be completed if it's not overdue." For this course, skip the repository layer — services talking directly to DbContext is fine.
> **The hidden question:** "Which pattern should I use for my capstone?" -> Service + DbContext directly. Keep it simple.

> [LOST] **If they're lost:** "Forget the architecture patterns for a second. The service layer is just a class that does the real work. The controller asks the service to do things. That's it. Start there. Refine later."

---

### Code Walkthrough

> [TIME] **Pacing:** 35 min (5 min model -> 10 min service interface + implementation -> 10 min controller with DI -> 10 min wiring + test)

> [SPEAK] **Script:** "Let's build a Task Manager with a weather feature. Watch how the controller delegates to two services — one for database tasks, one for API weather data. Everything connects through dependency injection."

> [SLIDE] **Slide:** Show the TaskItem model first. Then the ITaskService interface. Then the TaskService implementation. Then the controller. Finally Program.cs registration. Reveal one piece at a time.

> [TIP] **Teaching Tip:** **Type this live.** After typing the service, pause: "This is where the real work happens — not in the controller." After typing the controller, emphasize: "Look how thin this controller is. It just delegates. That's the goal." In Program.cs, highlight: "This one line wires everything together: `AddScoped<ITaskService, TaskService>()`."

> [BOARD] **Whiteboard:** Trace the full request flow:
> ```
> GET /task
>   v
> TaskController.Index()
>   v
> _taskService.GetAllAsync() -> db.Tasks.Include(t => t.Category).ToListAsync()
> _weatherService.GetCurrentWeatherAsync() -> HttpClient -> API -> JSON -> C# object
>   v
> Combine into TaskDashboardViewModel
>   v
> return View(model) -> renders HTML
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Build the service with me. Interface first, then implementation. Then the controller. Then wire it up in Program.cs. Run it. See tasks and weather on the same page. That's integration."

> [Q&A] **Student Q:** "Why use an interface for the service? Why not just the class?"
> **Short answer:** Interfaces make your code testable and swappable.
> **Real answer:** With an interface, you can swap implementations (e.g., a fake service for testing). DI containers register interfaces to implementations. It's the same DI pattern from Week 2 — now applied to services.
> **The hidden question:** "Is this overkill for a class project?" -> Maybe. But it's the industry standard. Practice it now.

> [LOST] **If they're lost:** "Start with just the service and controller for tasks. Skip the weather API for now. Get the database part working. Then add the API service. One layer at a time."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "This is the architecture used by 90% of production .NET apps. Controllers that just delegate. Services that contain real logic. DbContext for data access. ViewModels for display. When you interview for a job, you'll describe exactly this pattern. When you build your capstone, you'll use exactly this pattern."

> [SLIDE] **Slide:** A real company's architecture diagram (simplified). Label each layer: "This is what Microsoft, Accenture, and local .NET shops use. Same pattern. Different scale."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Connect it directly to their capstone and job interviews: "When an interviewer asks 'describe your project architecture,' you'll say: controllers delegate to services, services use EF Core for data and HttpClient for APIs. That answer gets you hired."

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you want to work at a company that builds real software, not just class projects?" (Most hands.) "This architecture is how real software is built. Learning it now gives you a head start."

> [LOST] **If they're lost:** "You don't need to understand enterprise architecture today. Just know: thin controllers, fat services. That's the pattern. Everything else builds on it."

---

### Exercise: Integrated App

> [TIME] **Pacing:** 60 min total (5 min setup -> 50 min build -> 5 min quick share)

> [SPEAK] **Script:** "Choose one: Task Manager with Weather, or Book Blog with GitHub Stats. Build it from scratch. Use everything you've learned. You have 50 minutes. I'll be walking around helping."

> [SLIDE] **Slide:** Exercise requirements checklist:
> - [ ] ASP.NET Core MVC project
> - [ ] EF Core with SQL Server (at least 2 related tables)
> - [ ] At least one external API integration
> - [ ] Service layer (interface + implementation)
> - [ ] DI wired up in `Program.cs`
> - [ ] Multiple views with layout
> - [ ] Form validation on at least one page
> - [ ] Architecture diagram (text is fine)

> [TIP] **Teaching Tip:** This is a build session, not a lecture. Walk around constantly. The first 15 minutes will be setup-heavy — help students scaffold the project, create folders, and register services. The "aha" moment is when they see data from both the database and an API on the same page.

> [ENGAGE] **Gen-Z:** **-> Work in pairs or solo:** "This is your mini-capstone. Treat it like a real project. Plan first, then code. Draw your architecture diagram before you write a single line."

> [ASK] **Mid-exercise check-in (at 25 min):** "How many have the database working?" (Show of hands.) "How many have the API working?" "How many have both on the same page?" "If you're stuck, raise your hand — I'll come over."

> [LOST] **If they're lost:** "Start with the database part. Get EF Core working with one model. Then add the second model with a relationship. Then add the service layer. Then the API. Then combine. Don't try to build everything at once."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "This week, AI is your full pair programmer. Architecture suggestions, service layer code, integration patterns — all allowed. But comment every AI-generated line. And be ready to explain your choices."

> [SLIDE] **Slide:** Prompt template:
> "Here's my architecture plan [describe]. Generate the service layer code for feature X. I need an interface and implementation."

> [TIP] **Teaching Tip:** Demonstrate a full AI-assisted workflow: (1) Describe the architecture to AI, (2) Get service code, (3) Add comments, (4) Wire up DI, (5) Test. Emphasize: "AI generates the code, but YOU understand it. That's the difference between using AI and being used by it."

> [ENGAGE] **Gen-Z:** "AI is your 'senior developer' this week — it suggests architecture, writes boilerplate, and catches mistakes. But you're still the one who ships the code. If you can't explain it, you can't defend it."

> [LOST] **If they're lost:** "Start by asking AI to help you plan: 'I want to build a Task Manager with weather. What folders and files do I need?' Then ask for code. Planning first prevents chaos."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 10 min (5 min common errors -> 5 min group debug)

> [SPEAK] **Script:** "Here are the integration errors you'll see this week. Most are DI registration issues or circular dependencies."

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | "Unable to resolve service for type      |
> | 'ITaskService'"                          |
> | You forgot AddScoped in Program.cs       |
> +------------------------------------------+
> +------------------------------------------+
> | Circular dependency detected             |
> | ServiceA -> ServiceB -> ServiceA           |
> | Fix: break the cycle with an interface   |
> +------------------------------------------+
> +------------------------------------------+
> | API call in a foreach loop               |
> | Slow. Use Task.WhenAll instead           |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "'Unable to resolve service' is like calling someone who didn't save your number. You're trying to use a service that was never registered. Fix: `AddScoped<ITaskService, TaskService>()` in Program.cs."

> [Q&A] **Student Q:** "My app works but it's really slow when loading the page."
> **Short answer:** You might be making API calls sequentially or in a loop.
> **Real answer:** If you call APIs one after another, each one waits for the previous. Use `Task.WhenAll` to call them in parallel. Also check: are you using `.Include()` for database queries? Without it, you might have the N+1 problem.
> **The hidden question:** "How do I check?" -> Add `Console.WriteLine` before and after each API call to see the timing.

> [LOST] **If they're lost:** "The two things to check first: (1) Is every service registered in Program.cs? (2) Does your controller constructor match the registered services? Those fix 90% of integration errors."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: every service you use in a constructor MUST be registered in Program.cs with `AddScoped<TInterface, TImplementation>()`."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. This is a build week — keep lectures short, walk around constantly. The service layer is the new concept — everything else is review from Weeks 2-11. The architecture diagram on the whiteboard should stay up the entire session. The #1 error is unregistered services — drill `AddScoped<TInterface, TImplementation>()`. Be supportive: students are nervous about building from scratch. Celebrate small wins: "Your first API call worked? That's huge."

---

## TERM 4: FINALS — User Interaction + Security + Capstone

---

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

## Week 15: Capstone Sprint

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 20 min | Lecture + Slides + Planning Framework |
| Code Walkthrough | 25 min | Live Code (project scaffolding + structure) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 70 min | Lab (capstone build session) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 5 min | Overflow |

> [TIP] **Teaching Tip (Week 15 strategy):** This is NOT a teaching week — it's a building week. Keep lectures short. Students should spend 70+ minutes coding. The planning framework (user stories, schema design, Kanban) is the most important thing you'll teach this week — students who skip planning will waste hours. Walk around constantly. This week reveals who actually learned the material. Be supportive but honest.

---

### The Hook

> [SPEAK] **Script:** "No more exercises. No more tutorials. You have one week to build whatever you want. You pick the idea. You design the schema. You build the routes. You ship it. This is your portfolio piece. Make it count."

> [SLIDE] **Slide:** Title: "This Is Your Portfolio Piece"  
> Three screenshots: a GitHub repo with green contribution squares, a deployed app URL, and a resume with "Full-Stack Web Developer" listed.  
> Subtitle: "What you build this week is what you show in interviews."

> [TIP] **Teaching Tip:** Deliver this with energy but also warmth. Some students are genuinely anxious about building something from scratch. Acknowledge it: "It's okay to be nervous. You have all the pieces from Weeks 1-14. Today we just put them together."

> [ENGAGE] **Gen-Z:** "This is the final boss level. You've been grinding XP all semester — MVC, EF Core, APIs, auth, security. Now you face the boss: build a real app. You have all the skills. You just need to combine them."  
> **-> Poll:** "Raise your hand if you're nervous about building something from scratch. Good. That means you care. Now let's do it."

> [LOST] **If they're lost:** "Don't panic. This isn't a test. It's a sprint. You'll build something small but complete. If you can do a controller, a model, a view, and a database query — you can do this."

---

### The Analogy

> [SPEAK] **Script:** "This is week 15 of your startup. You've done customer research — that's the previous weeks learning the tools. You know your tech stack — ASP.NET Core, EF Core, Identity. Now it's time to build the MVP: Minimum Viable Product. Not the perfect product. The shippable product. Features you can't finish? Cut them. Bugs that don't crash things? Ship them anyway. You can fix them in the next sprint."

> [BOARD] **Whiteboard:** Draw the MVP triangle:
> ```
>        Perfect
>         /\
>        /  \
>       /    \
>      / MVP  \   <- Ship THIS
>     /________\
>   Fast     Good
> ```
> Below: "Pick two: Fast + Good = MVP. Perfect comes later."

> [TIP] **Teaching Tip:** The MVP concept is critical — students will try to build too much. Emphasize: **scope is your enemy.** A working app with 3 features beats a broken app with 10. Draw the triangle and leave it on the board for the entire session.

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "What's ONE feature your app absolutely needs to work? Not 'nice to have' — NEEDS. 10 seconds, go!" (Then ask 2-3 people to share. Reinforce: "That's your MVP. Everything else is bonus.")

> [LOST] **If they're lost:** "Think of it like a TikTok video. You don't need fancy effects, transitions, and music. You need one clear idea that works. Your app is the same — one core feature that works well."

---

### Concept Discussion

> [TIME] **Pacing:** 20 min total (7 min planning -> 7 min vertical slicing -> 6 min git workflow)

> [SPEAK] **Script:** "Here's how to plan a capstone in one week. Day 1-2: plan before you code. Define user stories, design your schema, sketch your routes. Day 3-5: build vertically — one feature at a time, full stack. Day 6-7: polish and deploy. Don't build horizontally — don't do all your models first, then all your controllers. You won't see progress."

> [SLIDE] **Slide:** Show the user story template: "As a [role], I want to [action] so that [benefit]." Then reveal 3 examples. Then show the Kanban board: To Do -> In Progress -> Done.

> [TIP] **Teaching Tip:** The most important concept: **build vertically, not horizontally.** Students will want to create all models first, then all controllers, then all views. This is wrong — they won't see anything working until the very end. Instead: pick one feature, build it from database to view, test it, then move to the next feature.

> [ASK] **Ask the class:** "If you have 5 features and 5 days — do you build all 5 databases on day 1, or do you build one complete feature per day?" (Answer: One complete feature per day. You'll have 5 working features instead of 5 half-built ones.)

> [ENGAGE] **Gen-Z:** "Building vertically is like cooking one dish at a time instead of prepping all ingredients for 5 dishes. You get to eat (see progress) after each dish, not at the very end."  
> **-> Phone moment:** "Open GitHub Projects or Trello on your phone. Create three columns: To Do, Doing, Done. Add your features as cards. Move them as you work. This is how real teams track work."

> [Q&A] **Student Q:** "How many features should I aim for?"
> **Short answer:** 3 core features minimum.
> **Real answer:** The requirements say 3+ tables, 1+ relationship, auth, API, service layer, validation, layout. That's your baseline. Any features beyond that are bonus. Don't over-scope.
> **The hidden question:** "What if I finish early?" -> Add polish: better styling, error messages, loading states. Not more features.

> [Q&A] **Student Q:** "Should I use feature branches?"
> **Short answer:** Yes, but keep it simple.
> **Real answer:** Create one branch per feature: `feat-auth`, `feat-tasks`, `feat-api`. Merge into `main` when the feature works. If you're working solo, you can commit directly to `main` — but branches are good practice.
> **The hidden question:** "Is git required?" -> Yes. Your deliverable is a GitHub repo.

> [LOST] **If they're lost:** "Forget the planning framework for a second. Just answer: what does your app DO? Write that in one sentence. Then list the 3 things a user needs to do. Build those 3 things. That's your capstone."

---

### Code Walkthrough

> [TIME] **Pacing:** 25 min (5 min project scaffold -> 10 min folder structure -> 10 min Program.cs template)

> [SPEAK] **Script:** "Let's scaffold a capstone project from scratch. Watch how the folder structure maps to the architecture: Controllers handle HTTP, Services handle logic, Models handle data, Views handle display. Everything connects through Program.cs."

> [SLIDE] **Slide:** Show the project structure diagram first — the folder tree with Controllers, Models, ViewModels, Services, Views, wwwroot. Then reveal the Program.cs template with all registrations highlighted.

> [TIP] **Teaching Tip:** **Type this live.** Scaffold the project, create the folders, and build the Program.cs step by step. After each registration line, explain what it enables: "This line adds MVC. This line adds the database. This line adds Identity. This line adds HttpClient. This line adds your service."

> [BOARD] **Whiteboard:** Draw the dependency flow:
> ```
> Program.cs wires everything:
>   AddControllersWithViews()  -> MVC pipeline
>   AddDbContext()             -> Database
>   AddDefaultIdentity()       -> Auth
>   AddHttpClient()            -> API calls
>   AddScoped<IService, Svc>() -> Your service
> 
> Controller -> Service -> DbContext -> Database
>                          -> HttpClient -> API
> ```

> [ENGAGE] **Gen-Z:** **-> Type-along:** "Scaffold the project with me. Create the folders. Build Program.cs. This is your starting template. Every capstone starts here."

> [Q&A] **Student Q:** "Do I need all these packages for a simple app?"
> **Short answer:** No. Only add what you need.
> **Real answer:** The template includes Identity, EF Core, and HttpClient because the requirements ask for auth, database, and API integration. If your app doesn't need one of these, skip it. But the capstone requirements require all three.
> **The hidden question:** "Can I add more later?" -> Yes. `dotnet add package` works anytime.

> [LOST] **If they're lost:** "Start with the minimum: MVC + EF Core + Identity. Get those working. Then add HttpClient for the API. Then add your service layer. One piece at a time."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "This capstone is what you show in interviews. 'Build a complete web app' demonstrates you understand the full stack — database design, backend architecture, frontend rendering, authentication, deployment. A GitHub repo with a running app gets you hired faster than any certificate."

> [SLIDE] **Slide:** Screenshot of a real job posting for ".NET Developer" with "Portfolio/GitHub required" highlighted. Label: "This is what employers want to see."

> [TIP] **Teaching Tip:** Keep this to 5 minutes. Connect it directly to job hunting: "When an interviewer asks 'show me something you built,' you'll show them this capstone. A deployed URL beats a certificate every time."

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you have a GitHub profile?" (Some hands.) "By the end of this week, your GitHub will have something real on it. Not a tutorial. Not an exercise. Your app."

> [LOST] **If they're lost:** "You don't need to build the next Facebook. You need to build something that works, that you can explain, and that you're proud of. That's enough."

---

### Exercise: Capstone Sprint Delivery

> [TIME] **Pacing:** 70 min total (5 min planning -> 60 min build -> 5 min quick share)

> [SPEAK] **Script:** "Choose a project idea or propose your own. Plan first — write your user stories, design your schema, sketch your routes. Then build vertically — one feature at a time. You have 60 minutes of build time. I'll be walking around helping."

> [SLIDE] **Slide:** Project ideas:
> 1. **Task Manager Pro** — Users, tasks, categories, due dates, priority, reminders API
> 2. **Recipe Box** — Users, recipes, ingredients, categories, search, meal planner
> 3. **Book Tracker** — Users, books, reading logs, ratings, reviews, Google Books API
> 4. **Study Group App** — Users, study groups, flashcards, quiz scores, study timer
> 5. **Personal Budget** — Users, expenses, categories, monthly summaries, charts

> [TIP] **Teaching Tip:** This is a build session, not a lecture. Walk around constantly. The first 15 minutes should be planning — make students write user stories and sketch their schema before they code. The "aha" moment is when they get their first feature working end-to-end (database -> service -> controller -> view).

> [ENGAGE] **Gen-Z:** **-> Work in pairs or solo:** "This is your mini-capstone. Treat it like a real project. Plan first, then code. Draw your architecture diagram before you write a single line."

> [ASK] **Mid-exercise check-in (at 30 min):** "How many have at least one feature working end-to-end?" (Show of hands.) "How many have authentication working?" "If you're stuck, raise your hand — I'll come over."

> [LOST] **If they're lost:** "Start with the database. Define your models. Create the DbContext. Run the migration. Get data displaying on a page. Then add authentication. Then add the API. Then add the service layer. One layer at a time."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "Full AI is allowed this week. Use it for code generation, debugging, architecture suggestions, styling. But for every AI-generated code block, add a comment: `// AI-generated: reviewed by [your name]`. This tracks what came from AI vs what you wrote."

> [SLIDE] **Slide:** AI tracking requirement:
> | Requirement | What it means |
> |------------|--------------|
> | Comment every AI block | `// AI-generated: reviewed by Juan` |
> | Prompt log | Save every prompt you used |
> | Code review | Document what AI got wrong |

> [TIP] **Teaching Tip:** Demonstrate the workflow: (1) Ask AI for code, (2) Review it, (3) Add the comment, (4) Test it. "AI generates the code, but YOU understand it. The comment is your signature — you're saying 'I reviewed this and it's correct.'"

> [ENGAGE] **Gen-Z:** "AI is your 'co-pilot' this week — it suggests code, you steer. If you can't explain what the code does, you didn't review it. And if you didn't review it, you can't defend it."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common issues -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the capstone pitfalls you'll face this week. Most of them aren't technical — they're about scope and time management."

> [SLIDE] **Slide:** Pitfall cards:
> ```
> +------------------------------------------+
> | Scope creep                              |
> | You want to build Instagram but you have |
> | 1 week. Pick 3 core features. Cut rest.  |
> +------------------------------------------+
> +------------------------------------------+
> | Saving the hardest part for last         |
> | Build the hard thing first. If it fails, |
> | you have time to adjust.                 |
> +------------------------------------------+
> +------------------------------------------+
> | Not committing                           |
> | Commit after every working feature.      |
> | If something breaks, you can roll back.  |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "Scope creep is like adding toppings to a pizza until it collapses. Three toppings = delicious. Ten toppings = a mess. Pick your three core features and stick to them."

> [Q&A] **Student Q:** "My database schema is wrong — do I need to start over?"
> **Short answer:** No. Use migrations to change it.
> **Real answer:** Create a new migration: `dotnet ef migrations add UpdateSchema`. Then apply it: `dotnet ef database update`. If the migration fails because of existing data, you can delete the database and start fresh (it's a class project, not production).
> **The hidden question:** "Will I lose my data?" -> Yes, if you delete the database. But for a class project, that's fine.

> [LOST] **If they're lost:** "The two things to focus on: (1) Do you have at least one feature working end-to-end? If not, drop everything else and make it work. (2) Is your code committed to GitHub? If not, commit now. Those are the minimum deliverables."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: a working app with 3 features beats a broken app with 10. Ship what works."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. This is a build week — keep lectures short (70 min build time), walk around constantly. The MVP triangle should be drawn on the board and left there. The #1 pitfall is scope creep — students try to build too much. Reinforce "3 core features, ship what works." The vertical slicing concept (build one feature end-to-end before starting the next) is the most important planning lesson. AI is fully allowed but requires tracking comments on every generated block. Be supportive: students are nervous about building from scratch. Celebrate small wins: "Your first feature works? That's huge."

---

## Week 16: Capstone Final — Deploy & Present

> [TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 20 min | Lecture + Slides + Deployment Demo |
| Code Walkthrough | 25 min | Live Demo (deploy to Render/Railway) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 70 min | Lab (deploy + presentation prep) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 5 min | Overflow |

> [TIP] **Teaching Tip (Week 16 strategy):** This is deployment and presentation week. Students should spend most of their time deploying and practicing their demos. Keep lectures short. The deployment demo should be live — actually deploy a sample app during class. Walk around constantly during the build session. Help students with connection strings, environment variables, and platform-specific issues. The presentation practice is as important as the deployment — students need to learn how to demo their work.

---

### The Hook

> [SPEAK] **Script:** "Your app is about to go live. Real URL. Real users (your classmates). No pressure. You're about to experience the most terrifying and rewarding moment in software development: hitting 'Deploy.'"

> [SLIDE] **Slide:** Title: "Your App Goes Live Today"  
> Left: `localhost:5001` with a red X through it.  
> Right: `mycapstone.onrender.com` with a green checkmark.  
> Subtitle: "From your laptop to the internet."

> [TIP] **Teaching Tip:** This hook should feel exciting but also acknowledge the anxiety. Say: "Deploying for the first time is scary. It's supposed to be. But once you see your app on a real URL, you'll never look at websites the same way again."

> [ENGAGE] **Gen-Z:** "An app that only runs on your laptop is like a TikTok video that only you can see. Deployment is hitting 'Post.' Suddenly the whole world can see what you made."  
> **-> Poll:** "Raise your hand if you've ever deployed something to the internet." (Few hands.) "By the end of this session, that changes."

> [LOST] **If they're lost:** "Don't worry if deployment feels intimidating. We'll do it step by step. The platform does most of the work. You just need to connect your repo and set a few variables."

---

### The Analogy

> [SPEAK] **Script:** "You've been cooking in your kitchen — that's your local machine — for weeks. The food tastes great to you. But now you're opening a restaurant — that's production. New challenges: does the food survive delivery? Can the kitchen handle 20 orders at once? What if the power goes out? Deployment is where your app meets the real world — and the real world doesn't care about your feelings."

> [BOARD] **Whiteboard:** Draw the kitchen-to-restaurant analogy:
> ```
> Your Kitchen (localhost)     ->     Restaurant (Production)
> +-----------------+                +-----------------+
| You test it       |                | Anyone can access |
| Your database     |      ->         | Real database     |
| Your files        |                | Server files      |
| Fast (no network) |                | Network latency   |
| No security       |                | HTTPS required    |
+-----------------+                +-----------------+
> ```
> Arrow labeled: "Deployment = moving from kitchen to restaurant"

> [TIP] **Teaching Tip:** The kitchen analogy works well. Emphasize the key differences: production has a real database (not LocalDB), real network latency, real users, and real security requirements. The connection string change is the #1 deployment issue — highlight it.

> [ENGAGE] **Gen-Z:** **-> Turn to your neighbor:** "What's the biggest difference between testing on your laptop and deploying to the internet? 10 seconds, go!" (Answers: connection string, environment variables, HTTPS, network speed.)

> [LOST] **If they're lost:** "Think of it like moving from a practice court to a real game. Same skills, different pressure. Your code works on localhost — now we just need to put it on a server that everyone can reach."

---

### Concept Discussion

> [TIME] **Pacing:** 20 min total (8 min hosting options -> 7 min deployment checklist -> 5 min production config)

> [SPEAK] **Script:** "Here's how deployment works. Your app runs on localhost — only your machine can see it. Deployment puts it on a server that anyone can access. We'll use Render or Railway because they have free tiers and support .NET. The process is: push to GitHub, connect the repo to the platform, set environment variables, and deploy."

> [SLIDE] **Slide:** Show the hosting comparison table one platform at a time. Highlight Render and Railway as the easiest options for class projects. Then reveal the deployment checklist — read through each item.

> [TIP] **Teaching Tip:** The most important concept: **environment variables replace hardcoded values.** Students will want to put their production connection string in `appsettings.json`. Don't let them. Explain: "Your connection string has a password. If you commit it to GitHub, it's public forever. Use environment variables instead."

> [ASK] **Ask the class:** "If your app works on localhost but crashes on the server — what's the first thing you check?" (Answer: The logs. Every platform has a log viewer. Read the error message.)

> [ENGAGE] **Gen-Z:** "Environment variables are like your GCash PIN — you don't write it in your notebook where anyone can see it. You keep it in your head (the server's environment). The app reads it when it needs it."  
> **-> Phone moment:** "Open any deployed website. Look at the URL. That URL points to a server somewhere. Your app is about to have one of those."

> [Q&A] **Student Q:** "Which platform should I use?"
> **Short answer:** Render or Railway — both have free tiers and .NET support.
> **Real answer:** Render is easiest — connect GitHub, set build/start commands, add env vars, deploy. Railway is similar but gives you $5 credit. Azure is more powerful but more complex. For a class project, Render is fine.
> **The hidden question:** "Will it stay free forever?" -> Render free tier sleeps after 15 min of inactivity. Railway credit runs out. But for a demo, it's enough.

> [Q&A] **Student Q:** "What if my deployment fails?"
> **Short answer:** Check the logs.
> **Real answer:** 90% of deployment failures are: wrong connection string, missing migration, or missing environment variable. The platform's log viewer will tell you exactly what went wrong. Read the error, fix it, redeploy.
> **The hidden question:** "How many times will I need to redeploy?" -> Probably 2-3 times. That's normal. Even senior devs redeploy multiple times.

> [LOST] **If they're lost:** "Forget the platform specifics. The flow is: (1) Push code to GitHub. (2) Connect repo to platform. (3) Set connection string as env var. (4) Hit deploy. (5) Check logs if it fails. That's it."

---

### Code Walkthrough

> [TIME] **Pacing:** 25 min (10 min production-ready Program.cs -> 10 min live deploy demo -> 5 min post-deploy testing)

> [SPEAK] **Script:** "Let's make our app production-ready and deploy it. First, the Program.cs changes — environment-aware error pages, auto-migration on startup. Then I'll deploy a sample app live so you can see the process."

> [SLIDE] **Slide:** Show the production-ready Program.cs with the environment check highlighted: `if (!app.Environment.IsDevelopment())`. Then show the `db.Database.Migrate()` line — explain this is what creates/updates the database on the server.

> [TIP] **Teaching Tip:** **Do the deployment live.** Even if it takes a few minutes, students need to see the full process: GitHub push -> platform connect -> env var setup -> deploy -> URL works. If the deployment fails (it might), that's actually valuable — show them how to read the logs and fix the issue.

> [BOARD] **Whiteboard:** Draw the deployment flow:
> ```
> Local Code -> git push -> GitHub -> Platform (Render/Railway)
>                                              v
>                                   Build: dotnet publish -c Release
>                                              v
>                                   Start: dotnet MyApp.dll
>                                              v
>                                   Migrate: db.Database.Migrate()
>                                              v
>                                   Live URL: https://myapp.onrender.com
> ```

> [ENGAGE] **Gen-Z:** **-> Watch along:** "I'm deploying this app live. Watch every step. This is the same process you'll follow. If I make a mistake, you'll learn from it. If it works, you'll know it's possible."

> [Q&A] **Student Q:** "Why `db.Database.Migrate()` instead of `EnsureCreated()`?"
> **Short answer:** `Migrate()` applies pending migrations. `EnsureCreated()` only creates if nothing exists.
> **Real answer:** `EnsureCreated()` is fine for the first deploy. But if you add a new column later and redeploy, `EnsureCreated()` won't add it. `Migrate()` applies all pending migrations, so it works for both first deploy and updates.
> **The hidden question:** "Is it safe to auto-migrate in production?" -> For a class project, yes. In a real company, you'd run migrations separately from the app startup.

> [LOST] **If they're lost:** "Let's focus on just getting the app running. Skip the auto-migration for now. Deploy with `EnsureCreated()`. Get it working. Then add migrations later."

---

### The "Why Should I Care?"

> [SPEAK] **Script:** "An app that only runs on your laptop doesn't exist. An app on the internet is real. Deployment is the difference between 'I learned coding' and 'I built a product.' Hiring managers don't care about your localhost — they want to see a URL. Plus, deployed apps look better on your resume than 'ran it on my machine.'"

> [SLIDE] **Slide:** Side-by-side resume entries:
> Left: "Built a task manager app (ran locally)" — boring.
> Right: "Built and deployed a task manager app — live at [URL], 50+ users" — impressive.
> Subtitle: "Which one gets you hired?"

> [TIP] **Teaching Tip:** Keep this to 5 minutes. The resume angle is the strongest argument: "A deployed URL on your resume is proof you can ship. Most graduates can't say that."

> [ENGAGE] **Gen-Z:** **-> Poll:** "How many of you want to put a live URL on your resume?" (All hands.) "That's what we're doing today. Not a localhost link. A real URL that anyone can visit."

> [LOST] **If they're lost:** "You don't need to understand DevOps today. Just know: push to GitHub, connect to platform, set env vars, deploy. That's the entire process."

---

### Exercise: Deploy + Present

> [TIME] **Pacing:** 70 min total (5 min prep -> 30 min deploy -> 30 min presentation practice + delivery -> 5 min wrap)

> [SPEAK] **Script:** "Two parts today. Part 1: deploy your capstone to a live URL. Part 2: present your app in a 10-minute demo. Your presentation should cover: what you built, a live demo, your architecture, your challenges, and your AI usage. You have 70 minutes."

> [SLIDE] **Slide:** Presentation structure:
> 1. **What did you build?** (1 min) — Elevator pitch
> 2. **Live demo** (4 min) — Register, core feature, API, validation
> 3. **Architecture** (2 min) — Diagram: Controllers -> Services -> DB + API
> 4. **Challenges** (2 min) — What broke? How did you fix it?
> 5. **AI usage** (1 min) — What did AI help with? What did it get wrong?

> [TIP] **Teaching Tip:** This is the most important session of the term. Help students deploy first — without a live URL, the presentation has no impact. Then help them practice their demo. The "aha" moment is when they visit their own live URL and see their app running on the internet.

> [ENGAGE] **Gen-Z:** **-> Practice your demo:** "Run through your presentation once before presenting. Time it. If it's over 10 minutes, cut something. If your app crashes during the demo, that's okay — explain what went wrong. That's real development."

> [ASK] **Mid-session check-in (at 30 min):** "How many have deployed?" (Show of hands.) "How many have a working live URL?" "If you're stuck on deployment, raise your hand — I'll come over."

> [LOST] **If they're lost:** "Focus on getting the app deployed first. Skip the presentation prep until you have a working URL. If deployment fails, check the logs. 90% of failures are connection string or migration issues."

---

### AI Integration Note

> [TIME] **Pacing:** 10 min (5 min demo -> 5 min try)

> [SPEAK] **Script:** "Full AI is allowed and required this week. Use AI for deployment troubleshooting, error message diagnosis, and optimization suggestions. Submit your prompt log showing you used AI to help debug deployment issues."

> [SLIDE] **Slide:** Prompt template:
> "I'm deploying my ASP.NET Core app to [platform] and getting this error [paste log]. What's wrong?"

> [TIP] **Teaching Tip:** Demonstrate asking AI about a deployment error. Show how to paste the platform's log output and get a diagnosis. "AI is great at reading error logs — it's like having a senior dev looking over your shoulder."

> [ENGAGE] **Gen-Z:** "AI is your 'deployment buddy' — it reads error logs, suggests fixes, and tells you what env vars you need. But you still need to understand what it's telling you."

---

### Debugging / "Watch Out For"

> [TIME] **Pacing:** 15 min (5 min common errors -> 5 min group debug -> 5 min Q&A)

> [SPEAK] **Script:** "Here are the deployment errors you WILL see. Let's go through them so you don't panic when they happen."

> [SLIDE] **Slide:** Error cards:
> ```
> +------------------------------------------+
> | 502 Bad Gateway                          |
> | Your app crashed on startup.             |
> | Check logs: connection string? missing   |
> | migration? missing env vars?             |
> +------------------------------------------+
> +------------------------------------------+
> | CSS broken on live site                  |
> | Check: UseStaticFiles() in Program.cs    |
> | Paths use ~: href="~/css/site.css"       |
> +------------------------------------------+
> +------------------------------------------+
> | Redirect loop after deployment           |
> | UseHttpsRedirection() conflicts with     |
> | platform's HTTPS termination.            |
> | Fix: conditionally apply it.             |
> +------------------------------------------+
> ```

> [ENGAGE] **Gen-Z:** "502 Bad Gateway is like calling a restaurant and getting no answer. The server is there but your app crashed. Check the logs — they'll tell you exactly what went wrong."

> [Q&A] **Student Q:** "My free tier app goes to sleep — is that a problem for the demo?"
> **Short answer:** No, just wait for it to wake up.
> **Real answer:** Render free tier spins down after 15 min of inactivity. The first request after idle takes ~30 seconds. This is normal. Mention it in your presentation: "The app sleeps to save resources — this is expected behavior on the free tier."
> **The hidden question:** "Should I upgrade?" -> Not for a class project. The free tier is enough for a demo.

> [Q&A] **Student Q:** "Should I commit my connection string to GitHub?"
> **Short answer:** NEVER.
> **Real answer:** Connection strings contain passwords. If you commit them, they're public forever. Use `appsettings.Production.json` (excluded from git via `.gitignore`) or environment variables on the platform.
> **The hidden question:** "How do I check if I already committed it?" -> `git log -p -- appsettings.json` — if you see the connection string in the diff, rotate the password immediately.

> [LOST] **If they're lost:** "The three things to check first: (1) Is your connection string set as an environment variable? (2) Did migrations run on the server? (3) Are you reading the platform's logs? Those fix 90% of deployment issues."

> [TIP] **Teaching Tip:** End with one action item: "If you only remember one thing: an app on the internet is real. An app on localhost is a draft. Today you shipped something real. Be proud of that."

---

### Teaching Script

This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&A] Student Q, [LOST] If they're lost), and this summary. This is deployment and presentation week — keep lectures short, spend 70 min on deploy + demo. The live deployment demo is the most important moment — actually deploy an app during class, even if it takes time. The kitchen-to-restaurant analogy should be used repeatedly. The #1 deployment error is connection string issues — drill environment variables over hardcoded values. The presentation structure (1 min pitch, 4 min demo, 2 min architecture, 2 min challenges, 1 min AI) should be written on the board. Help every student get a live URL — that's the deliverable. Celebrate the moment they see their app on the internet for the first time.

---

## Quick Reference Cards

### C# / VB Translation Card

| VB.NET | C# |
|--------|-----|
| `Dim x As Integer = 5` | `int x = 5;` |
| `Public Property Name As String` | `public string Name { get; set; }` |
| `If x > 5 Then ... End If` | `if (x > 5) { ... }` |
| `For i = 1 To 10` | `for (int i = 1; i <= 10; i++)` |
| `Function Add(a, b) As Integer` | `int Add(int a, int b)` |
| `Nothing` | `null` |
| `&` (string concat) | `+` or `$"..."` |
| `arr(0)` | `arr[0]` |

### HTTP Status Codes Cheat Sheet

| Code | Meaning | What to do |
|------|---------|-----------|
| 200 | OK | Everything worked |
| 201 | Created | POST succeeded |
| 301 | Moved Permanently | URL changed, update your links |
| 400 | Bad Request | You sent bad data |
| 401 | Unauthorized | Need to log in |
| 403 | Forbidden | Logged in but not allowed |
| 404 | Not Found | URL doesn't exist |
| 500 | Server Error | The server broke (not your fault but you have to fix it) |

### DI Registration Lifetimes

| Lifetime | When created | Use for |
|----------|-------------|---------|
| `AddTransient` | Every time it's requested | Lightweight, stateless services |
| `AddScoped` | Once per HTTP request | DbContext, services with state per request |
| `AddSingleton` | Once for the app's lifetime | Configuration, caching, logging |

### EF Core Query Patterns

```csharp
// Get all
db.Products.ToListAsync()

// Get one by ID
db.Products.FindAsync(id)
db.Products.FirstOrDefaultAsync(p => p.Id == id)

// Filter
db.Products.Where(p => p.Price > 100).ToListAsync()

// Include related data
db.Products.Include(p => p.Category).ToListAsync()

// Nested include
db.Categories.Include(c => c.Products)
    .ThenInclude(p => p.Reviews).ToListAsync()

// Projection (only specific fields)
db.Products.Select(p => new { p.Name, p.Price }).ToListAsync()

// Count
db.Products.CountAsync()

// Check existence
db.Products.AnyAsync(p => p.Name == "Nintendo Switch")
```

### Security Checklist

- [ ] All POST forms include `@Html.AntiForgeryToken()`
- [ ] All POST actions have `[ValidateAntiForgeryToken]`
- [ ] Never use `@Html.Raw()` on user input
- [ ] All database queries use LINQ (not `FromSqlRaw`)
- [ ] `app.UseAuthentication()` is before `app.UseAuthorization()`
- [ ] HTTPS is enabled in production
- [ ] Passwords are hashed (Identity does this automatically)
- [ ] Error pages don't show stack traces in production

---

*End of Elective 2: Building Web Products — Full Lesson Content*
