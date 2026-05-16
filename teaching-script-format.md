# Teaching Script Format — Lesson Plan + Presentation Guide

> **Purpose:** Transform the existing `elective-2-discussions.md` and `elective-3-discussions.md` files from content references into drop-in teaching guides that any instructor can deliver. Each week should be a complete "storyboard / lesson plan / script rolled into one."

---

## Table of Contents

1. [Additional Sections to Add](#1-additional-sections-to-add)
2. [Research Brief: How Gen-Z Learns Best](#2-research-brief-how-gen-z-learns-best)
3. [Delivery Format Specification](#3-delivery-format-specification)
4. [Week 1 Sample (Fully Annotated)](#4-week-1-sample-fully-annotated)

---

## 1. Additional Sections to Add

Each week currently has 8 sections: Hook -> Analogy -> Concept Discussion -> Code Walkthrough -> Industry Reality -> Exercise -> AI Integration -> Debugging.

Add the following **7 new teaching layers** woven into each existing section:

### 1.1 Teaching Tips
*Where: Inline after each section's content.*

What the instructor needs to know to **present** this section effectively:
- What to emphasize (the 1-2 key takeaways per section)
- What to skip if short on time
- Common pitfalls the instructor might fall into (over-explaining, going too deep, using jargon)
- How to pivot delivery based on student energy levels

### 1.2 Pacing Guide
*Where: At the very top of each week, as a header block.*

A minute-by-minute breakdown of the 3-hour Saturday session. Structure:
- **Total:** 3 hours (180 minutes)
- 10-minute buffer built in for late arrivals, technical issues, bathroom breaks
- Split into: Opening -> Concept Block -> Code Block -> Exercise -> Closing

### 1.3 Presentation Script
*Where: Inline within each section.*

**Not a full monologue** — but:
- The **first 2-3 sentences** the instructor should say when introducing the section
- **Key phrases** to nail the mental model
- **Transition questions** between sections (e.g., "Okay, now that we understand X, what do you think happens when we add Y?")
- **"Try this" moments** — quick live-coding interactions where the instructor pauses and asks for predictions

### 1.4 Slides / Whiteboard Notes
*Where: Inline within each section.*

Concrete instructions for:
- **What to put on screen** at each point (slide content, code snippets, diagrams)
- **What to draw on the whiteboard** (flowcharts, memory models, architecture diagrams)
- When to switch between slide, whiteboard, and live code

### 1.5 Gen-Z Engagement
*Where: Inline within each section.*

Interactive moments designed for this generation:
- **Meme/reference prompts** — "This is the programming equivalent of [trending thing]"
- **"Turn to your neighbor"** prompts — quick pair discussions
- **Poll questions** — "Raise your hand if you think X will happen" or use chat
- **"Type in chat"** moments
- **Phone-friendly callouts** — "Pull up your phone and check [thing on your phone that demonstrates this concept]"
- **TikTok/Reels-style energy** — fast pace, quick cuts between modes

### 1.6 Common Student Questions
*Where: At the end of each section (or inline).*

Anticipated questions with suggested answers:
- The question as a student would ask it
- The **one-sentence answer**
- The **deeper explanation** (if they press further)
- What the question **really means** (the misconception behind it)

### 1.7 "If They're Lost" Fallback
*Where: At the end of each section.*

What to do when the class isn't getting it:
- **Simpler analogy** (dumbered down one level)
- **More concrete example** (replace abstract with specific)
- **Physical demonstration** (stand up, point at things, act it out)
- **"Scratch that, let me try again"** — a completely different angle
- **Exit strategy** — when to say "This is getting too deep for today, we'll revisit it next week"

---

## 2. Research Brief: How Gen-Z Learns Best

### 2.1 The Attention Span Reality

The widely cited "8-second attention span" for Gen-Z is a myth (it's about the same as other generations — ~20 minutes of focused attention on a single modality). **What is real:**

- **Attention switching cost:** Gen-Z is faster at switching between tasks but takes longer to re-focus after interruption. This means: **don't multitask them** — batch related content into uninterrupted blocks.
- **5-10 minute segments** is the proven optimal chunk size for lecture-style instruction (source: Hartley & Davies, 1978 — still the most replicated finding in lecture retention research). After 10 minutes of one format, retention drops by 20%.
- **Implication:** Every section in the 3-hour session needs a format switch every 10 minutes: talk -> code -> whiteboard -> ask -> exercise -> poll -> talk again.

### 2.2 Visual + Kinesthetic Learning

- **72% of Gen-Z prefer visual learning** over text (source: Pearson Gen-Z Study, 2019). Not slides with bullet points — **actual visuals**: diagrams, flowcharts, code before/after, architecture drawings.
- **Kinesthetic = code alongside.** Students who type along with a live demo retain 40% more than those who just watch (source: "Learning Edge Momentum" — Chi & VanLehn, 2012).
- **Implication:** Every code walkthrough must have a "code alongside" mode. The instructor should type the code, not paste it. Students type too.

### 2.3 Social / Interactive Learning

- **Peer discussion boosts comprehension.** Even a 2-minute "turn to your neighbor" discussion increases test scores by 20% (source: Mazur, 1997 — Peer Instruction method, replicated consistently since).
- **Gen-Z prefers collaborative problem-solving** over individual study (source: Microsoft Education, 2021).
- **Implication:** Every exercise section should have a "pair up" option. Every debugging section should start with "look at this with your neighbor for 30 seconds before we discuss."

### 2.4 The "Why Do I Need This?" Requirement

- **Gen-Z demands immediate relevance.** "Just-in-case learning" (learn this, you might use it someday) fails. "Just-in-time learning" (learn this because you need it to do the thing right now) works.
- **84% of Gen-Z say they learn best when they understand the real-world application** (source: Barnes & Noble College, 2020).
- **Implication:** The existing "Hook" section already addresses this. Every sub-section should also answer: "Why am I learning *this specific detail* right now?"

### 2.5 Phone-Friendly Content

- **Gen-Z uses phones as primary or secondary learning devices.** Content that doesn't work on a phone might as well not exist.
- **Implication:** Code snippets should be readable on a 6-inch screen (short lines, no horizontal scroll). Exercises should have a "phone-only" option.

### 2.6 Key References

| Reference | Finding |
|-----------|---------|
| Hartley & Davies (1978), *Note-taking: A critical review* | Lecture retention drops significantly after 10 minutes |
| Mazur (1997), *Peer Instruction* | 2-minute peer discussion lifts test scores ~20% |
| Chi & VanLehn (2012), *Learning Edge Momentum* | Active construction > passive reception |
| Pearson (2019), *Gen-Z in Higher Education* | 72% prefer visual learning formats |
| Microsoft Education (2021), *The Class of 2030* | Gen-Z prefers collaborative, project-based learning |
| Barnes & Noble College (2020), *Gen-Z Research Report* | 84% need to see real-world application to stay engaged |
| Deslauriers et al. (2019), *Measuring actual learning versus feeling of learning* | Students feel they learn more from lectures but actually learn more from active learning |

---

## 3. Delivery Format Specification

### 3.1 Block Types & Emoji Prefixes

Each teaching annotation uses a **consistent prefix** in the markdown. These prefixes are **machine-parseable** (they can be extracted by scripts) and **visually scannable** (the emoji jumps out).

| Emoji | Prefix | Purpose | Placement |
|-------|--------|---------|-----------|
| `[TIP]` | **[TIP] Teaching Tip:** | Instructional advice for the professor | Inline after content |
| `[TIME]` | **[TIME] Pacing:** | Time allocation for this section | At section start |
| `[SPEAK]` | **[SPEAK] Script:** | Exact words to say to the class | Inline at introduction points |
| `[ASK]` | **[ASK] Ask the class:** | Rhetorical question / poll / prediction | Before a reveal |
| `[SLIDE]` | **[SLIDE] Slide:** | What to put on the presentation screen | Before a slide change |
| `[BOARD]` | **[BOARD] Whiteboard:** | What to draw on the board | Before a drawing moment |
| `[ENGAGE]` | **[ENGAGE] Gen-Z:** | Meme, trend reference, "turn to your neighbor," poll, or phone moment | Inline, often mid-section |
| `[Q&A]` | **[Q&A] Student Q:** | Common student question with answer | End of relevant paragraph |
| `[LOST]` | **[LOST] If they're lost:** | Simpler alternative explanation / fallback | End of section |

### 3.2 Format Guidelines

**Consistent markdown pattern:**

```markdown
> [TIP] **Teaching Tip:** [One sentence of advice for the instructor. 
> Second sentence with specific what/why.]
```

```markdown
> [TIME] **Pacing:** 15 min total (5 min intro -> 8 min demo -> 2 min Q&A)
```

```markdown
> [SPEAK] **Script:** "Alright class, here's the mental model I want you to 
> hold onto: [key metaphor]. When you see [X], think [Y]. Let me show you..."
```

```markdown
> [ASK] **Ask the class:** "What do you think happens when we remove this 
> line of code?" (Pause 5 seconds for responses.)
```

```markdown
> [SLIDE] **Slide:** Title: "The Request-Response Cycle"
> Content: A diagram showing Browser -> Server -> Database -> Server -> Browser 
> with HTTP arrow labels. Keep it simple — reuse this diagram every week.
```

```markdown
> [BOARD] **Whiteboard:** Draw a box labeled "Controller" in the center. 
> Arrow from left labeled "Request (URL)" going in. 
> Arrow from right labeled "Response (HTML/JSON)" going out. 
> Below, write: "Controller doesn't do real work — it delegates."
```

```markdown
> [ENGAGE] **Gen-Z:** "This is the programming equivalent of ordering from 
> different apps on your phone — each app (service) handles one thing."
> **-> Turn to your neighbor:** "Explain what a Controller does in your own 
> words in under 10 seconds. Go!"
```

```markdown
> [Q&A] **Student Q:** "Why can't we just put everything in one file?"
> **Short answer:** You can. For a 10-line script. Not for 10,000 lines.
> **Real answer:** One file means every change risks breaking unrelated 
> code. Separation = you can swap pieces without touching others.
> **The hidden question:** "Why make things complicated?" -> Because 
> complexity grows exponentially in a single file.
```

```markdown
> [LOST] **If they're lost:** Try this simpler version:
> "Think of it like a [different metaphor]. A vending machine: you press 
> a button (request), the machine does work inside (processing), and 
> your snack drops (response). You don't care how it vends — you just 
> want the chips."
```

### 3.3 Week Header Format

Every week starts with a **Pacing Overview** block:

```markdown
## Week N: [Title]

[TIME] **Session Pacing (180 min)**

| Block | Time | Format |
|-------|------|--------|
| Hook + Analogy | 15 min | Lecture + Whiteboard |
| Concept Discussion | 25 min | Lecture + Slides + Polls |
| Code Walkthrough | 30 min | Live Code (instructor + students type) |
| Industry Reality | 10 min | Lecture + Discussion |
| Break | 10 min | — |
| Exercise | 55 min | Lab (solo or pairs) |
| AI Integration | 10 min | Demo + Prompt Walkthrough |
| Debugging + Wrap | 15 min | Group Debug + Q&A |
| Buffer | 10 min | Overflow / Stretch discussion |

> **Format keys:** [SPEAK] = what to say  |  [SLIDE] = what to show  |  [BOARD] = what to draw  
> [TIP] = teaching tip  |  [ENGAGE] = engagement moment  |  [Q&A] = anticipate this question  |  [LOST] = fallback plan
```

---

## 4. Week 1 Sample (Fully Annotated)

Below is **Week 1 of Elective 2 (C# Translation Bootcamp)** with every teaching annotation filled in. This is the template for all subsequent weeks.

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

> [SLIDE] **Whiteboard:** Draw a line down the middle. Left: "VB syntax" — write keywords: `End Function`, `Dim`, `Then`. Right: "C# syntax" — write keywords: `}`, `;`, `var`. Draw an arrow from left to right labeled "Translation mode."

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

### Exercise

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

*This annotated template should be applied to all 16 weeks of both Elective 2 and Elective 3 discussion files.*
