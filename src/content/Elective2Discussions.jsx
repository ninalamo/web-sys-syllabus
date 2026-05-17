export default function Elective2Discussions() {
  return (
    <div className="page-content">
      <h1>Elective 2: Building Web Products — Full Lesson Content</h1>
      <hr />
      <h2>TERM 1: PRELIM — C# for MVC + Web Foundations</h2>
      <hr />
      <h2>Week 1: C# Translation Bootcamp</h2>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (180 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Side-by-Side Comparison</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>35 min</td>
          <td>Live Code (instructor + students type)</td>
        </tr>
        <tr>
          <td>Industry Reality</td>
          <td>10 min</td>
          <td>Lecture + Discussion</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Lab (solo or pairs)</td>
        </tr>
        <tr>
          <td>AI Integration</td>
          <td>10 min</td>
          <td>Demo + Prompt Walkthrough</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>5 min</td>
          <td>Overflow</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (first week strategy):</strong> This is Week 1 — students are nervous, some haven't written code in months, and a few might have missed the prerequisite. Keep the energy high and the stakes low. The goal is not mastery — it's "I survived and I understand the map." Tell them explicitly: "If you only get one thing from this week, it should be: curly braces, semicolons, and <code>var</code>."</p>
      </blockquote>
      <hr />
      <h3>The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "You already know .NET concepts through VB. C# is the same ideas, different syntax. Think of it like speaking the same language with a different accent. Let's see how they compare — side by side."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "Welcome to C# — You Already Know This"<br />Left column: VB logo with "You know this"  |  Right column: C# logo with "Now add this"<br />Subtitle: "Same .NET. Different syntax. More options."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The goal is to bridge from what they know to what the industry uses. Keep it positive — "you already understand OOP and .NET, now here's the syntax that most companies use." Frame it as expanding their toolkit, not replacing what they learned.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "C# and VB are like having two phones — one Android, one iOS. Same apps (Facebook, TikTok), different way of swiping. You already know one, now you're learning the other."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you've written code in VB before." (Acknowledge their existing knowledge as valuable.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> Some incoming students might not have strong VB. That's fine. Say: "If you don't know VB well, don't worry — we're starting from scratch with C#. VB knowledge is a head start, not a requirement."</p>
      </blockquote>
      <hr />
      <h3>The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Learning C# from VB is like switching from an automatic to a manual transmission. The destination is the same — you're still writing .NET code — but you get more direct control over how things work. You declare your types explicitly, close your own curly braces, and decide exactly what's <code>public</code> vs <code>private</code>. It's the same road, just a different driving experience."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Side-by-side images: an automatic car gear shift labeled "Familiar (VB)" and a manual stick shift labeled "Expanded (C#)".<br />Below: "Same .NET platform. More options in your toolkit."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw a line down the middle. Left: "VB syntax" — write keywords: <code>End Function</code>, <code>Dim</code>, <code>Then</code>. Right: "C# syntax" — write keywords: <code>&#125;</code>, <code>;</code>, <code>var</code>. Draw an arrow from left to right labeled "Translation mode."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The manual transmission analogy works for about 70% of Filipino students — many have experience with jeepneys or family cars. For the 30% who don't drive, add: "Or like switching from Globe to Smart. Same phone, different network, different settings."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "On a scale of 'automatic' to 'manual,' where are you in your coding journey right now?" (10 seconds, then ask 2 people to share.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like phone OS updates. Android to iOS. Same apps (Facebook, TikTok), different way of swiping. You know the destination, you just need to learn the new gestures."</p>
      </blockquote>
      <hr />
      <h3>Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (15 min lecture -&gt; 5 min side-by-side -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here's the cheat sheet for this entire week. Print this. Put it on your wall. There are exactly 6 things different between VB and C#: curly braces, semicolons, <code>var</code>, string interpolation, LINQ, and properties. Everything else is the same." (Proceed through the comparison table.)</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> The comparison table from the original content — but reformatted as a single readable slide with one row highlighted at a time. Do NOT show all rows at once (cognitive overload). Reveal one row, explain it, then reveal the next.</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Whiteboard:</strong> After the slide, redraw the table from memory. Ask the class to call out differences. This acts as a recall test. "What's one difference?" — write it. "Give me another." Keep going until they cover all 6.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The comparison table is the nucleus of this section. Spend the most time on <strong>case sensitivity</strong> (it will cause the most errors today) and <strong><code>var</code></strong> (misunderstood concept — students think it means "no type"). For <code>var</code>, emphasize: "It's not typeless. It's 'compiler picks the type.' Very different."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "Which of these differences do you think will bite you the most?" (Pause. Let them call out guesses. Someone will say semicolons. Confirm: "Yes. You will forget semicolons. I still forget semicolons.")</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "This table is the 'cheat code' for leveling up from VB to C#."<br /><strong>-&gt; Phone moment:</strong> "Take a photo of this table. Name it 'csharp-cheatsheet.' You'll reference it every week this term."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Do we have to memorize all these?"
        <strong>Short answer:</strong> No. You'll memorize them by making mistakes.
        <strong>Real answer:</strong> The errors force you to learn. Every missing semicolon or wrong case will throw a compiler error. Read the error, fix it, move on. By Week 3, it's automatic.
        <strong>The hidden question:</strong> "How much effort does this take?" -&gt; Less than you think. Your VB brain just needs retraining.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does Microsoft even have two languages?"
        <strong>Short answer:</strong> Historical. VB was for beginners, C# for professionals. They kept both for legacy, but new features only go to C#.
        <strong>The hidden question:</strong> "Why are we switching mid-program?" -&gt; Because the industry did.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> Some students freeze at the table. Pivot to a <strong>code-only comparison</strong> — show one VB line, immediately show the C# equivalent, repeat. No table, just code side-by-side. Say: "Forget the table. Here's the pattern: VB says <code>End Something</code>, C# says <code>&#125;</code>. That's 90% of it."</p>
      </blockquote>
      <hr />
      <h3>Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 35 min (10 min read-along -&gt; 15 min live type -&gt; 10 min trace-through)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let me show you a class you already know in VB. Here it is. Now here it is in C#. Don't read it — <em>scan</em> it. What's the same? What's different?" (Show the VB Student class, then the C# version.)</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Side-by-side of the VB and C# <code>Student</code> class. The two code blocks on one slide. Use color coding: green = same parts, red = syntax differences.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Walk through this <strong>line by line</strong>, pointing at each one:</p>
        <ul>
          <li>"VB says <code>Public Class Student</code> — C# says <code>public class Student</code> (lowercase <code>class</code>!)"</li>
          <li>"VB says <code>End Class</code> — C# says <code>&#125;</code>"</li>
          <li>"VB says <code>Public Property Name As String</code> — C# says <code>public string Name &#123; get; set; &#125;</code>"</li>
        </ul>
        <p>The goal is pattern recognition, not memorization.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the "mental stack" for the console app entry point:</p>
        <pre><code>Program.cs execution (top to bottom)
        +-----------------+
        | Console.WriteLine|  &lt;- line 1
        | var name = ...   |  &lt;- line 2
        | Console.WriteLine|  &lt;- line 3
        +-----------------+
      </code></pre>
      <p>Emphasize: "C# 10+ lets you just write code at the top level. No class. No <code>Sub Main</code>. Just code."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "What do you notice about the constructor? How is it different from VB?" (Wait 5 seconds. The answer: it doesn't say <code>Sub New</code> — it just says <code>Student(...)</code> because the class name IS the constructor.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "This is the 'before and after glow-up' of our code."<br /><strong>-&gt; Type-along moment:</strong> "Open Visual Studio. Create a new Console App. Type this with me. Do NOT copy-paste — type every line. Typing builds muscle memory." (Walk around the room as they type.)</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (live coding):</strong> When you type the code live, <strong>make deliberate mistakes</strong>. Type <code>console.writeline</code> with wrong case. Let it fail. Say "See? Case sensitive." Then fix it. Students learn more from watching you debug than from watching you write perfect code.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What are 'top-level statements'?"
        <strong>Short answer:</strong> A shortcut. Instead of wrapping your code in a class, you just write it.
        <strong>Real answer:</strong> Before C# 10, every console app needed <code>class Program &#123; static void Main() &#123; ... &#125; &#125;</code>. Top-level statements let you skip the ceremony. Internally, the compiler wraps it for you.
        <strong>The hidden question:</strong> "Is this cheating?" -&gt; No. It's the modern way. You'll learn the <code>Main</code> method version later.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Let me show you the simplest possible C# program:"  </p>
        <pre><code className="language-csharp">Console.WriteLine("Hi");
        var name = Console.ReadLine();
        Console.WriteLine($"Hello, &#123;name&#125;");
      </code></pre>
      <p>"That's it. Three lines. Type these three lines. Get them working. Everything else builds on this."</p>
      </blockquote>
      <hr />
      <h3>The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "C# is the primary language for new .NET development. Most job postings for .NET developers ask for C#. You already understand .NET through VB — learning C# expands your options and makes you more versatile in the job market."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> A screenshot of a real job posting from Indeed or LinkedIn filtered for ".NET developer." Highlight the "C#" requirement. Bonus points if it mentions the Philippines.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This section should be short and punchy — 5 minutes max. Don't elaborate. The goal is motivation, not instruction. Students need to hear: "This expands what you can do and where you can work."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "By show of hands, how many of you have seen 'C#' in a job posting?" (Almost all hands should go up for senior students. If not, show them live.)</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why are we learning C# if we already know VB?"
        <strong>Short answer:</strong> Most companies build new products in C#. Knowing both makes you more valuable.
        <strong>Real answer:</strong> VB and C# both run on the same .NET framework. The concepts you already know — classes, properties, loops, events — are identical. C# just uses a different syntax that has become the industry standard for new development. Think of it as bilingualism for programmers.</p>
      </blockquote>
      <hr />
      <h3>Exercise: C# Console App Portfolio</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min coding -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Okay, your turn. Here's what I want you to build. Three programs in one console app. FizzBuzz, Calculator, Student Manager. You have 40 minutes. Work alone or in pairs. I'll be walking around."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> The exercise requirements as a checklist with checkboxes:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> FizzBuzz (loop 1-100, print Fizz/Buzz/FizzBuzz)</li>
          <li><input disabled="" type="checkbox" /> Calculator (two numbers + operator -&gt; result)</li>
          <li><input disabled="" type="checkbox" /> Student Manager (List&lt;Student&gt;, add/list/search)</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Circulate.</strong> The first 10 minutes of lab time is when students get stuck on setup. Walk around and unstick them. Spend no more than 30 seconds per person — if it takes longer, bring the whole class together and address the common issue.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "If you're stuck, find the person next to you. Explain your problem. Half the time you'll figure it out by explaining."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-exercise check-in (at 20 min):</strong> "How many have FizzBuzz working?" (Show of hands.) "How many have Calculator working?" (Show of hands.) "If you have neither, that's okay — let's do a quick group debug."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (stretch time):</strong> For students who finish early, have a "stretch goal" ready: "Can you write FizzBuzz with no <code>if</code> statement? Use a ternary expression." or "Can you make your calculator handle continuous operations? (like a real calculator: <code>5 + 3 = 8, then + 2 = 10)</code>"</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> For FizzBuzz specifically, some students freeze at the logic. Walk them through it verbally: "Start with the most specific case first — FizzBuzz (divisible by both). Then Fizz (divisible by 3). Then Buzz (divisible by 5). Then else (just the number). Order matters."</p>
      </blockquote>
      <hr />
      <h3>AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here's the AI policy for this course: AI is allowed, but only for specific things. This week, you can ask AI to explain syntax differences. You CANNOT ask it to write your exercises. Here's the difference."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Two columns:</p>
        <table>
          <thead>
            <tr>
              <th>[OK] Allowed</th>
              <th>[NO] Not Allowed</th>
            </tr>
          </thead>
          <tbody><tr>
            <td>"What's the C# equivalent of For Each?"</td>
            <td>"Write my FizzBuzz for me"</td>
          </tr>
          <tr>
            <td>"Why does this say CS1002?"</td>
            <td>"Generate the whole Student Manager"</td>
          </tr>
          <tr>
            <td>"Explain what this code does"</td>
            <td>"Debug this without telling me why"</td>
          </tr>
        </tbody></table>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "The prompt template for this week: 'In C#, how do I [thing I knew in VB]?' This builds your translation muscle. Every time you use AI to translate, you learn the pattern. By Week 4, you won't need it."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Be explicit about <strong>WHY</strong> the restriction exists. "If AI writes your code, you can't debug it. If you can't debug it, you fail the midterm when I take the AI away." Frame it as skill-building, not punishment.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Think of AI as your 'code-senpai' — it guides, but doesn't do your homework. Using AI isn't cheating. Using AI without understanding IS."</p>
      </blockquote>
      <hr />
      <h3>Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's save you the Google searches. Here are the 5 errors you WILL see this week. Memorize their error codes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards — each error gets a box with: error code, what it looks like, how to fix it.</p>
        <pre><code>+---------------------------------+
        | CS1002 — ; expected             |
        | You forgot a semicolon.         |
        | Check the line above too.       |
        +---------------------------------+
        +---------------------------------+
        | CS0103 — name doesn't exist     |
        | Misspelled? Wrong scope?        |
        +---------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "CS1002 is the 'Tas you forgot your jacket' of C# errors — it happens to everyone, it's annoying, but you just fix it and move on."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Group debug:</strong> "I'm going to show you some broken code. In 30 seconds with your neighbor, find all the errors." (Show intentionally broken code from the walkthrough.) "Let's fix them together."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does the error message say 'expected' — I don't get it."
        <strong>Short answer:</strong> "<code>; expected</code> is compiler-speak for 'you forgot a semicolon here.'
        <strong>Real answer:</strong> The compiler expected to find a semicolon at this position because every statement ends with one. It's reading left to right and saying "I was expecting a <code>;</code> but I found a newline instead."
        <strong>The hidden question:</strong> "Why is the error message so unhelpful?" -&gt; Compiler errors are written for other compilers, not humans. You learn to read them with practice.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End the debugging section with <strong>one clear action item</strong>: "If you only remember one thing from this section: when in doubt, add <code>;</code>. If that doesn't fix it, check for case."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. Refer to inline annotations during delivery — they are ordered to match the flow of the lesson.</p>
      <hr />
      <h2>Week 2: Interfaces &amp; DI Mental Model</h2>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (180 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Code Comparison</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>30 min</td>
          <td>Live Code (instructor + students type)</td>
        </tr>
        <tr>
          <td>Industry Reality</td>
          <td>10 min</td>
          <td>Lecture + Discussion</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Lab (solo or pairs)</td>
        </tr>
        <tr>
          <td>AI Integration</td>
          <td>10 min</td>
          <td>Demo + Prompt Walkthrough</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>10 min</td>
          <td>Overflow / Stretch discussion</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 2 strategy):</strong> DI is the hardest mental model shift this term. Students who came from VB think "just new it up inside the class." Expect resistance. Use the restaurant analogy repeatedly — every time someone asks "why not just create it inside?", point back to the waiter/kitchen metaphor.</p>
      </blockquote>
      <hr />
      <h3>The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Your VB form has 500 lines of code doing everything from database queries to font colors? That's not impressive — that's a cry for help. Today we learn why your classes should be dumb and services should be swappable."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "500 Lines of Code ≠ Good Code"<br />Left: Screenshot of a massive VB form with 500+ lines, labeled "Spaghetti."<br />Right: Clean interface + service pattern, labeled "Scalable."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This hook is intentionally confrontational — it challenges the "more code = better programmer" mindset. Deliver it with humor, not judgment. Some students are proud of their 500-line forms.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "A 500-line form is like a Jollibee tray where you put your burger, fries, spaghetti, and drink all in one pile. It works, but it's messy. Interfaces are the dividers that keep everything organized."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you've ever opened your own code from last semester and had no idea what it does."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Don't worry if your past code is messy. Everyone writes messy code first. Today we learn how to organize it."</p>
      </blockquote>
      <hr />
      <h3>The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Think of a restaurant. The waiter takes your order and brings food, but they don't cook. The kitchen is where the actual work happens. The menu is the interface — it tells you what's available without you needing to go into the kitchen. If the chef quits, the waiter doesn't need retraining — they still look at the same menu."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw three boxes: "Customer" -&gt; "Waiter (Controller)" -&gt; "Kitchen (Service)." Draw a "Menu" arrow between Waiter and Kitchen labeled "Interface." Add a second kitchen box labeled "Kitchen B (swap!)" with the same menu arrow.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The restaurant analogy works well for Filipino students — everyone has been to a restaurant. Emphasize the key insight: <strong>the waiter never cooks, the kitchen never talks to customers.</strong> This maps directly to Controller -&gt; Service separation.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "Explain DI using the restaurant analogy in 15 seconds. Go!" (Then pick 2 people to share their version.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like GCash and Maya. Both are payment apps (interface). A store accepts 'payment apps' — it doesn't care which one you use. Swap GCash for Maya, the store still works. That's DI."</p>
      </blockquote>
      <hr />
      <h3>Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (15 min interface -&gt; 10 min DI)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "An interface is a contract. It says: any class that signs this contract MUST have these methods. It doesn't say HOW — just THAT. This is the foundation of everything we'll build this semester."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the <code>INotificationService</code> interface alone first. Then reveal <code>EmailService</code> and <code>SmsService</code> side by side, both implementing the same interface. Highlight that the <code>Send</code> method signature is identical.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Students will ask "why not just use a base class?" Address this proactively: "Interfaces are 'what you can do.' Base classes are 'what you are.' A class can implement many interfaces but only inherit one base class. Interfaces are more flexible."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "If I have an interface with 5 methods, and a class implements it — how many methods MUST that class have?" (Answer: All 5. No exceptions.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "An interface is like a job posting on JobStreet. It lists the requirements. If you apply (implement), you MUST have those skills. How you got those skills? That's your implementation."<br /><strong>-&gt; Phone moment:</strong> "Pull up any job posting. The 'Requirements' section? That's an interface. Your resume? That's your implementation."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Can an interface have code in it?"
        <strong>Short answer:</strong> Not in the way you're thinking.
        <strong>Real answer:</strong> C# 8+ allows default interface methods, but that's advanced. For now: interfaces only declare signatures, no bodies. Think of them as pure contracts.
        <strong>The hidden question:</strong> "Is an interface just an empty class?" -&gt; No. An empty class can be instantiated. An interface cannot.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the word 'interface' for a second. Think 'promise.' This code promises: 'I will have a Send method that takes two strings.' Any class that makes this promise can be used anywhere that promise is expected."</p>
      </blockquote>
      <hr />
      <h3>Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 30 min (10 min interface + implementations -&gt; 10 min consumer class -&gt; 10 min wiring + swap demo)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build this from scratch. First the contract, then two implementations, then something that uses the contract. Watch how the consumer never knows which implementation it's getting."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the full DI demo code in 4 steps, revealing one step at a time: (1) interface, (2) two implementations, (3) OrderService, (4) wiring in Main.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type this live, don't paste.</strong> When you type <code>public class EmailService : INotificationService</code>, pause and say: "The colon means 'implements.' This class is signing the contract." Make the deliberate mistake of writing <code>new INotificationService()</code> — let it fail, then explain why.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the dependency flow:</p>
        <pre><code>Main -&gt; creates EmailService
        -&gt; injects into OrderService
        -&gt; OrderService calls _notif.Send()
        -&gt; EmailService.Send() runs
      </code></pre>
      <p>Then redraw with SmsService. Show that only the Main line changes.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "This is the 'plug and play' of programming. Like swapping earbuds — your phone doesn't care if they're Apple, Samsung, or JBL. As long as they use Bluetooth (the interface), they work."<br /><strong>-&gt; Type-along:</strong> "Type the interface definition with me. Then type EmailService. Then SmsService. Don't copy-paste."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why <code>private readonly</code>? Why not just <code>private</code>?"
        <strong>Short answer:</strong> <code>readonly</code> means it can only be set in the constructor.
        <strong>Real answer:</strong> It prevents accidental reassignment later in the class. It's a safety guarantee: "This dependency won't change after construction."
        <strong>The hidden question:</strong> "Is that really necessary?" -&gt; In a small app, no. In a 10,000-line app, yes. It prevents a whole class of bugs.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Let me show you the simplest DI possible:"  </p>
        <pre><code className="language-csharp">interface IGreeter &#123; void Greet(string name); &#125;
        class EnglishGreeter : IGreeter &#123; public void Greet(string n) =&gt; Console.WriteLine($"Hello, &#123;n&#125;"); &#125;
        class TagalogGreeter : IGreeter &#123; public void Greet(string n) =&gt; Console.WriteLine($"Kumusta, &#123;n&#125;!"); &#125;
      
        IGreeter greeter = new TagalogGreeter();
        greeter.Greet("Juan"); // Kumusta, Juan!
      </code></pre>
      <p>"Swap <code>TagalogGreeter</code> for <code>EnglishGreeter</code> — everything else stays the same. That's DI."</p>
      </blockquote>
      <hr />
      <h3>The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Spotify, Netflix, Microsoft, and your future employer all use DI. It's not optional — it's how modern backend code is written. If you apply for a .NET job and don't know what DI is, the interview ends in under five minutes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Screenshot of an ASP.NET Core <code>Program.cs</code> showing <code>builder.Services.AddScoped&lt;INotificationService, EmailService&gt;()</code>. Label: "This one line is DI in production."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this section to 5 minutes. The goal is motivation. Show them that DI isn't academic — it's in every real .NET project.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you have seen 'Dependency Injection' in a job posting?" (Show a real JobStreet or LinkedIn screenshot if hands are low.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to master DI today. You just need to understand: interfaces = contracts, DI = swapping implementations. That's enough for now."</p>
      </blockquote>
      <hr />
      <h3>Exercise: DI Playground</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min coding -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Build a notification system with three implementations. Email, SMS, and Console. Let the user pick which one at runtime. You have 40 minutes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> Define <code>INotificationService</code> interface</li>
          <li><input disabled="" type="checkbox" /> Implement <code>EmailService</code>, <code>SmsService</code>, <code>ConsoleService</code></li>
          <li><input disabled="" type="checkbox" /> Create <code>NotificationSender</code> with constructor injection</li>
          <li><input disabled="" type="checkbox" /> Let user pick service at runtime</li>
          <li><input disabled="" type="checkbox" /> Bonus: Add a fourth implementation</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Circulate during the first 10 minutes — students will get stuck on the interface definition or the constructor injection pattern. The bonus (runtime selection) is where the DI concept really clicks.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "Work in pairs. One person types the interface, the other types the implementations. Then swap roles for the consumer class."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with just the interface and ONE implementation. Get that working. Then add the second. Then the third. Don't try to build everything at once."</p>
      </blockquote>
      <hr />
      <h3>AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week, you can ask AI to explain interface concepts or debug DI compilation errors. You cannot ask it to generate your entire exercise."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Allowed vs Not Allowed columns:</p>
        <table>
          <thead>
            <tr>
              <th>[OK] Allowed</th>
              <th>[NO] Not Allowed</th>
            </tr>
          </thead>
          <tbody><tr>
            <td>"What does 'implements interface' mean?"</td>
            <td>"Generate my DI exercise"</td>
          </tr>
          <tr>
            <td>"Why does this say 'does not implement interface member'?"</td>
            <td>"Write all three service classes for me"</td>
          </tr>
        </tbody></table>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Frame AI as a "rubber duck that talks back." It's great for explaining concepts, terrible for doing your thinking.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'code-senpai' — it guides, but doesn't do your homework. If AI writes your interfaces, you won't understand them when the midterm comes."</p>
      </blockquote>
      <hr />
      <h3>Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the errors you WILL see this week. Let's go through them so you don't spend 20 minutes Googling."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+---------------------------------------------+
        | "Cannot create instance of interface"        |
        | You wrote: new INotificationService()        |
        | Fix: new EmailService() (concrete class)     |
        +---------------------------------------------+
        +---------------------------------------------+
        | NullReferenceException at _service.Send()    |
        | You forgot to pass the dependency            |
        | Fix: Check your constructor call             |
        +---------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "The 'Cannot create instance of interface' error is like trying to order from a menu that doesn't exist. You need an actual kitchen (concrete class), not just the menu (interface)."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "But why can't I just new up the service inside the class? It works!"
        <strong>Short answer:</strong> It works until you need to test it or swap it.
        <strong>Real answer:</strong> Hard-coded dependencies mean you can't mock them for unit tests, can't swap implementations, and can't change behavior without modifying the class itself. DI solves all three.
        <strong>The hidden question:</strong> "This seems like extra work for no benefit." -&gt; The benefit shows up at scale. With 50 classes, DI is essential. With 3, it's practice.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The simplest fix: whenever you see 'Cannot create instance of interface,' replace the interface name with the concrete class name. <code>new INotificationService()</code> -&gt; <code>new EmailService()</code>. That fixes 90% of this week's errors."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. The hardest concept is DI — use the restaurant analogy repeatedly and let students type along during the walkthrough.</p>
      <hr />
      <h2>Week 3: HTTP &amp; The Web</h2>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (180 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Polls</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>30 min</td>
          <td>Live Demo (DevTools + C# code)</td>
        </tr>
        <tr>
          <td>Industry Reality</td>
          <td>10 min</td>
          <td>Lecture + Discussion</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Lab (solo or pairs)</td>
        </tr>
        <tr>
          <td>AI Integration</td>
          <td>10 min</td>
          <td>Demo + Prompt Walkthrough</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>10 min</td>
          <td>Overflow / Stretch discussion</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 3 strategy):</strong> This is the first week that moves beyond C# syntax into how the web actually works. Students who struggled with C# may find this refreshing — it's conceptual, not syntactic. Use DevTools heavily; seeing real HTTP traffic makes the abstract concrete.</p>
      </blockquote>
      <hr />
      <h3>The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "When you tapped that Like button on your crush's post, about 47 things happened in under 200ms. Your phone sent a secret message to a server somewhere, the server updated a database, and sent back a response. That's HTTP. And yes, you'll be tested on it."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "What Happens When You Tap 'Like'"<br />A timeline visualization: Tap -&gt; HTTP Request -&gt; Server -&gt; Database -&gt; HTTP Response -&gt; Heart appears. Total: 200ms.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This hook works because it connects to something students do daily. Don't over-explain — just plant the curiosity. They'll learn the details in the concept discussion.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Every TikTok like, every Instagram story view, every GCash transaction — all HTTP. You're already using this protocol hundreds of times a day. Today you learn how it works behind the scenes."<br /><strong>-&gt; Phone moment:</strong> "Pull up your phone. Open Instagram. Every time you scroll and new content loads? That's an HTTP request. You're looking at HTTP responses right now."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "HTTP is just how computers talk to each other on the internet. Like texting, but for apps. You send a message, you get a reply."</p>
      </blockquote>
      <hr />
      <h3>The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "HTTP is like sending a letter. You write a letter with a method (GET = asking for something, POST = sending something), an address (URL), headers (return address), and maybe a body (the actual content). The server reads it and sends back a response with a status code."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the letter analogy visually:</p>
        <pre><code>+--------------------------------+
        | ENVELOPE (HTTP Request)        |
        | Method: GET                    |
        | Address: /api/users            |
        | Headers: Auth, Content-Type    |
        | Body: (empty for GET)          |
        +--------------------------------+
        v
        +--------------------------------+
        | RESPONSE (HTTP Response)       |
        | Status: 200 OK                 |
        | Headers: Content-Type: JSON    |
        | Body: [&#123;name: "Juan", ...&#125;]    |
        +--------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The letter analogy is universal but can feel abstract. Make it concrete by showing a real HTTP request in DevTools right after the analogy. Connect the parts: "See this 'GET'? That's the method. See this URL? That's the address."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "HTTP methods are like the different buttons on a food delivery app. GET = browse the menu. POST = place an order. PUT = change your entire order. PATCH = just remove the onions. DELETE = cancel the order."<br /><strong>-&gt; Turn to your neighbor:</strong> "What HTTP method is 'adding a comment on Facebook'? What about 'deleting a post'? 10 seconds, go!"</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the letter. Think of ordering from Jollibee. GET = looking at the menu board. POST = giving your order to the cashier. The cashier gives you a number (status code). 200 = your food is ready. 404 = they don't have that item. 500 = the kitchen caught fire."</p>
      </blockquote>
      <hr />
      <h3>Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (10 min request-response cycle -&gt; 8 min methods table -&gt; 5 min status codes -&gt; 2 min statelessness)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here's the request-response cycle in six steps. This is the foundation of everything web-related. Memorize this flow — you'll use it every week for the rest of the semester."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the 6-step request-response cycle as a flow diagram. Animate each step: Browser -&gt; Build Request -&gt; Travel -&gt; Server Process -&gt; Build Response -&gt; Browser Render.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The methods table and status codes are the two things students MUST memorize. Spend the most time here. For methods, emphasize: GET and POST are the ones they'll use 90% of the time. PUT, PATCH, DELETE come later with APIs.</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "What status code do you think you'll see most often?" (Answer: 200. Then ask: "What about the one you'll see when you mistype a URL?" Answer: 404.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Status codes are like your relationship status. 200 = 'It's good.' 401 = 'Who are you again?' 403 = 'I know you but no.' 404 = 'Not here, not coming.' 500 = 'It's not you, it's me (the server).'"<br /><strong>-&gt; Phone moment:</strong> "Open DevTools on your laptop right now. F12 -&gt; Network tab. Refresh any page. See all those entries? Each one is an HTTP request. Click one. Look at the status code."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What's the difference between 401 and 403?"
        <strong>Short answer:</strong> 401 = "I don't know who you are." 403 = "I know who you are but you can't do this."
        <strong>Real answer:</strong> 401 means authentication failed (you need to log in). 403 means authorization failed (you're logged in but don't have permission).
        <strong>The hidden question:</strong> "Why two codes for 'no'?" -&gt; Because the fix is different. 401 -&gt; log in. 403 -&gt; get permission.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What does 'stateless' mean?"
        <strong>Short answer:</strong> The server doesn't remember you between requests.
        <strong>Real answer:</strong> Each HTTP request is independent. If you log in on request 1, the server doesn't automatically know you're logged in on request 2. That's why we need cookies/sessions (covered in Week 13).
        <strong>The hidden question:</strong> "But websites remember me — how?" -&gt; Cookies. We'll get there.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "HTTP is a conversation. You ask, I answer. Then I forget you existed. Next time you ask, I treat you like a stranger. That's stateless. Cookies are like a name tag — 'Hi, I'm Juan, I was here before.'"</p>
      </blockquote>
      <hr />
      <h3>Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 30 min (10 min DevTools demo -&gt; 10 min raw HTTP -&gt; 10 min C# HttpClient)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's see HTTP in action. Open DevTools, go to the Network tab, and refresh any page. Every line you see is an HTTP request. Let's look at one together."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Split screen: left side shows DevTools Network tab, right side shows the raw HTTP request/response text.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Do the DevTools demo FIRST — it's visual and immediate. Then show the raw HTTP text to demystify what's happening under the hood. Finally, show the C# HttpClient code to connect it back to programming.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the HttpClient flow:</p>
        <pre><code>HttpClient created
        v
        GET request sent to api.github.com
        v
        Response received (check status code!)
        v
        If success -&gt; read body as string
        If fail -&gt; print error
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "DevTools is like X-ray vision for websites. You can see every request, every response, every cookie. It's the closest thing to hacker mode you'll get without actually hacking."<br /><strong>-&gt; Live demo:</strong> "Everyone open DevTools now. F12. Network tab. Refresh. Click the first request. Look at the Headers tab. Find the 'Request Method' — it should say GET."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does the first HttpClient example get a 403?"
        <strong>Short answer:</strong> GitHub's API requires a User-Agent header to identify who's making the request.
        <strong>Real answer:</strong> Without a User-Agent, GitHub can't tell if the request is from a real app or a bot. They block unidentified requests to prevent abuse.
        <strong>The hidden question:</strong> "Why do APIs have these requirements?" -&gt; Rate limiting, abuse prevention, and analytics.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the code for a second. The flow is: (1) Create a client. (2) Tell it what URL to visit. (3) Get the response. (4) Check if it worked. (5) Read the data. That's it. The code just implements these five steps."</p>
      </blockquote>
      <hr />
      <h3>The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Every app you've ever used runs on HTTP. Instagram? HTTP. TikTok? HTTP. Canvas? HTTP. Understanding the request-response cycle is understanding how the internet works."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show a screenshot of DevTools Network tab with 50+ requests from a single page load. Label: "One page load = 50+ HTTP conversations."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. The goal is to make HTTP feel essential, not academic. Connect it to debugging: "When your app breaks, 80% of the time it's an HTTP issue."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you have seen a 404 error before?" (All hands.) "That's HTTP. You already know more than you think."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to memorize everything today. Just remember: request -&gt; response. That's the core. Everything else is details."</p>
      </blockquote>
      <hr />
      <h3>Exercise: HTTP Trace Report</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min tracing -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Your mission: be a web detective. Visit three websites, open DevTools, and document every HTTP request they make. You'll be surprised how many requests a single page makes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> Open DevTools Network tab</li>
          <li><input disabled="" type="checkbox" /> Visit 3 different websites</li>
          <li><input disabled="" type="checkbox" /> Capture all requests for first page load</li>
          <li><input disabled="" type="checkbox" /> Identify: HTML, CSS, JS, images, API calls</li>
          <li><input disabled="" type="checkbox" /> Note status codes and what they mean</li>
          <li><input disabled="" type="checkbox" /> Write a short report</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This exercise is observational, not coding-heavy. Circulate and help students interpret what they see. The "aha" moment is when they realize a simple page makes 50+ requests.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "Work with a partner. One person navigates, the other records. Then switch. Compare notes — did both sites make the same types of requests?"</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with just ONE website. Google.com is the simplest. Open DevTools, refresh, and count how many requests you see. Then categorize them: which are HTML? Which are images? Build from there."</p>
      </blockquote>
      <hr />
      <h3>AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week, you can ask AI to explain status codes, HTTP headers, or why a request failed. You cannot ask it to generate your trace report — you need to observe and document yourself."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Allowed vs Not Allowed:</p>
        <table>
          <thead>
            <tr>
              <th>[OK] Allowed</th>
              <th>[NO] Not Allowed</th>
            </tr>
          </thead>
          <tbody><tr>
            <td>"What does status code 304 mean?"</td>
            <td>"Write my HTTP trace report"</td>
          </tr>
          <tr>
            <td>"Explain the User-Agent header"</td>
            <td>"Generate fake network data for me"</td>
          </tr>
        </tbody></table>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The key skill this week is observation. AI can explain concepts, but it can't look at your DevTools screen and tell you what you're seeing. That's the learning.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is like having a tutor who knows HTTP but can't see your screen. Ask it questions, but do the observation yourself."</p>
      </blockquote>
      <hr />
      <h3>Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common issues -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the HTTP-related issues you'll encounter. Most of them aren't bugs — they're features you need to understand."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Issue cards:</p>
        <pre><code>+-------------------------------------+
        | CORS Error                          |
        | Browser blocks cross-domain request |
        | Fix: Server must allow it           |
        +-------------------------------------+
        +-------------------------------------+
        | 304 Not Modified                    |
        | NOT an error — it's caching!        |
        | Browser says "I already have this"  |
        +-------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "CORS errors are like trying to enter a building with someone else's ID. The building (server) says 'I don't recognize you.' The fix isn't to sneak in — it's to get the building to recognize your ID."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does the browser block cross-domain requests? That seems annoying."
        <strong>Short answer:</strong> It's a security feature, not a bug.
        <strong>Real answer:</strong> Without CORS, any website could make requests to your bank's API on your behalf. CORS prevents unauthorized cross-site requests.
        <strong>The hidden question:</strong> "How do I fix it?" -&gt; The server needs to send the right CORS headers. You can't fix it from the client side alone.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Red entries in DevTools = errors. Click on them. Read the status code. Read the response body. 90% of debugging is just reading what the error tells you."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The DevTools demo is the most important part — make sure every student opens Network tab and sees real HTTP traffic.</p>
      <hr />
      <h2>Week 4: MVC Big Picture</h2>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (180 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Pipeline Diagram</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>30 min</td>
          <td>Live Code (scaffold + trace)</td>
        </tr>
        <tr>
          <td>Industry Reality</td>
          <td>10 min</td>
          <td>Lecture + Discussion</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Lab (solo or pairs)</td>
        </tr>
        <tr>
          <td>AI Integration</td>
          <td>10 min</td>
          <td>Demo + Prompt Walkthrough</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>10 min</td>
          <td>Overflow / Stretch discussion</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 4 strategy):</strong> This is the first time students build a real web app. The MVC pattern will feel abstract until they see it working. Scaffold the project live, then trace the pipeline step by step. The "aha" moment is when they visit a URL and see their own HTML appear.</p>
      </blockquote>
      <hr />
      <h3>The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "You know how Grab works? You open the app, see a map, order food, track delivery? That's MVC. And now you're going to build it. Well, not Grab. But the architecture behind it."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "You Use MVC Every Day"<br />Screenshots of Grab, Foodpanda, and Shopee — all labeled "Built on MVC architecture."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Connect MVC to apps they use daily. Filipino students know Grab and Foodpanda well. This makes the abstract pattern feel relevant and achievable.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Every app you use — Grab, Foodpanda, Shopee, even GCash — they all use MVC. You're not learning some academic concept. You're learning how the apps you use every day are built."<br /><strong>-&gt; Poll:</strong> "Who here has ordered from Grab or Foodpanda this week?" (Most hands.) "That's MVC in action."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "MVC is just a way of organizing code so it doesn't become a mess. Think of it like having separate folders for photos, documents, and music on your phone. MVC does that for web apps."</p>
      </blockquote>
      <hr />
      <h3>The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "MVC is a restaurant with a really good system. The menu tells you what's available. The waiter takes your order. The kitchen cooks the food. The plating makes it look good. The customer never goes into the kitchen. The waiter never cooks. The chef never talks to customers."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the restaurant MVC map:</p>
        <pre><code>Customer (Browser)
        v reads
        Menu (Route: /products/details/5)
        v orders
        Waiter (Controller: ProductsController.Details)
        v requests
        Kitchen (Model: Get product #5 from DB)
        v returns
        Plating (View: .cshtml template -&gt; HTML)
        v serves
        Customer sees the page
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The restaurant analogy is perfect for MVC because it maps 1:1. Emphasize the separation: "The waiter NEVER cooks. The controller NEVER does database work." This is the core MVC principle.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "MVC is like a group project where everyone has a clear role. Model = the researcher (gets the data). View = the designer (makes it look good). Controller = the team leader (coordinates everything). When roles are clear, the project works. When they're not — chaos."<br /><strong>-&gt; Turn to your neighbor:</strong> "In the restaurant analogy, what happens if the waiter starts cooking? What breaks? 10 seconds, go!"</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget MVC for a second. Think about a website. You type a URL. Something figures out what page you want. That something grabs the data. Then it puts the data into a template. Then sends you the page. MVC is just names for those steps."</p>
      </blockquote>
      <hr />
      <h3>Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (10 min pipeline flow -&gt; 8 min file structure -&gt; 7 min key insights)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here's the entire MVC request flow in seven steps. This is the backbone of every web app you'll build this semester. Trace it with me."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Animated pipeline diagram showing each step: Browser -&gt; URL -&gt; Route -&gt; Controller -&gt; Model -&gt; View -&gt; HTML -&gt; Browser. Reveal one step at a time.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The key insight is "Controller is the middleman." Students will want to put business logic in the controller. Resist this urge early: "The controller delegates. It doesn't do real work."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "When you visit <code>/products/details/5</code>, which part figures out that 'products' means ProductsController?" (Answer: Routing.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "The MVC pipeline is like a GrabFood order. You browse (Route), order (Controller), kitchen cooks (Model), food is plated (View), delivered to you (HTML). Each step has one job."<br /><strong>-&gt; Phone moment:</strong> "Open GrabFood. Think about each screen you see. The menu list? That's a View. The restaurant data? That's a Model. The app figuring out what to show? That's a Controller."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why can't the controller just do everything? Why separate Model and View?"
        <strong>Short answer:</strong> You can, but it becomes unmaintable fast.
        <strong>Real answer:</strong> When the controller does everything, you get "fat controllers" — 500-line methods that mix database queries, business logic, and HTML generation. MVC separation means you can change the database without touching the view, or redesign the view without touching the model.
        <strong>The hidden question:</strong> "Isn't this over-engineering for a simple app?" -&gt; Maybe for 10 lines. Not for 10,000.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What's Razor? Is it a programming language?"
        <strong>Short answer:</strong> It's a template engine, not a language.
        <strong>Real answer:</strong> Razor lets you mix C# code with HTML in .cshtml files. The <code>@</code> symbol tells Razor "this is C#." It processes the template and outputs pure HTML.
        <strong>The hidden question:</strong> "Do I need to learn a new language?" -&gt; No. It's just HTML with C# sprinkled in.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "MVC in three sentences: (1) URL comes in. (2) Controller handles it and gets data from Model. (3) Controller sends data to View, which makes HTML. That's it. Everything else is details."</p>
      </blockquote>
      <hr />
      <h3>Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 30 min (10 min scaffold -&gt; 10 min Program.cs -&gt; 10 min controller + view + trace)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's scaffold an MVC project from scratch and trace exactly what happens when a request comes in. Watch how the pieces connect."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the project file structure first, then reveal Program.cs, then the controller, then the view. Each on its own slide.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Scaffold the project live with <code>dotnet new mvc</code>. Then open each file and explain its role. The most important file is Program.cs — it's where MVC is configured. Trace the full pipeline for <code>GET /</code> step by step.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the route matching:</p>
        <pre><code>URL: /
        Pattern: &#123;controller=Home&#125;/&#123;action=Index&#125;/&#123;id?&#125;
        Match: controller=Home (default), action=Index (default), id=null
        Result: HomeController.Index() runs
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Scaffolding a project is like using a template on Canva. You don't start from a blank page — you start with a structure and customize it. <code>dotnet new mvc</code> is your template."<br /><strong>-&gt; Type-along:</strong> "Run <code>dotnet new mvc -n HelloMvc</code> with me. Then <code>cd HelloMvc</code>. Then <code>dotnet run</code>. Watch it compile and open the browser."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What does <code>AddControllersWithViews()</code> actually do?"
        <strong>Short answer:</strong> It tells ASP.NET Core to set up the MVC pipeline.
        <strong>Real answer:</strong> It registers the services needed for controllers, views, model binding, and routing. Without it, ASP.NET doesn't know how to handle MVC requests.
        <strong>The hidden question:</strong> "What if I forget this line?" -&gt; Your controllers won't work. You'll get 404s everywhere.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Let me show you the simplest MVC app possible. One controller, one action, one view. Three files. That's all you need to start."</p>
      </blockquote>
      <hr />
      <h3>The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "MVC is the dominant web architecture pattern. Every major framework uses it or a variant. Learn it once, apply it everywhere."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Logos of ASP.NET Core MVC, Ruby on Rails, Django, Laravel, Spring MVC — all labeled "Uses MVC."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This section should be 5 minutes max. Show them that MVC is transferable knowledge. If they learn it in C#, they can apply it to Python, Ruby, Java, etc.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you plan to work with web apps after graduation?" (Most hands.) "MVC is the most common pattern you'll encounter. Learning it now gives you a head start."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to love MVC today. Just understand: it organizes code. That's enough for now."</p>
      </blockquote>
      <hr />
      <h3>Exercise: Hello MVC</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min coding -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Create a new MVC project. Add a ShopController with two actions. Create the views. Run it. Visit the routes. You'll have your first working web app."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> <code>dotnet new mvc -n HelloMvc</code></li>
          <li><input disabled="" type="checkbox" /> Examine all folders and files</li>
          <li><input disabled="" type="checkbox" /> Create <code>ShopController</code> with <code>Index()</code> and <code>Product(int id)</code></li>
          <li><input disabled="" type="checkbox" /> Create views in <code>Views/Shop/</code></li>
          <li><input disabled="" type="checkbox" /> Run and visit both routes</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The first 15 minutes will be setup-heavy. Circulate and help with <code>dotnet</code> commands. The "aha" moment is when they visit <code>/shop/product/5</code> and see their own dynamic content.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "One person creates the controller, the other creates the views. Then swap. You'll learn faster by seeing both sides."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with just the <code>Index()</code> action. Get that working first. Then add <code>Product(int id)</code>. Don't try to build everything at once."</p>
      </blockquote>
      <hr />
      <h3>AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week, you can ask AI to explain MVC concepts or debug routing issues. You cannot ask it to generate your controllers or views."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Allowed vs Not Allowed:</p>
        <table>
          <thead>
            <tr>
              <th>[OK] Allowed</th>
              <th>[NO] Not Allowed</th>
            </tr>
          </thead>
          <tbody><tr>
            <td>"Explain what app.UseRouting() does"</td>
            <td>"Generate my ShopController"</td>
          </tr>
          <tr>
            <td>"Why is my view not found?"</td>
            <td>"Write all my views for me"</td>
          </tr>
        </tbody></table>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The scaffolded project has a lot of generated code. Encourage students to ask AI to explain specific lines rather than generating new code.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'code-senpai' for MVC concepts. Ask it to explain the pipeline, not to build your app."</p>
      </blockquote>
      <hr />
      <h3>Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the MVC errors you'll see this week. Most of them are naming or path issues."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+------------------------------------------+
        | 404 on a route that should work          |
        | Check: Controller name needs "Controller"|
        | suffix. Action method name must match.   |
        +------------------------------------------+
        +------------------------------------------+
        | "The view 'Index' was not found"         |
        | Path must be: Views/&#123;Controller&#125;/&#123;Action&#125;|
        | .cshtml. Case matters on Linux/Mac.      |
        +------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "A 404 on your own route is like giving someone your address but they go to the wrong house. Check the address (route), check the house name (controller), check the room (action)."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does the controller need 'Controller' at the end of the name?"
        <strong>Short answer:</strong> It's a convention that ASP.NET uses to find controllers.
        <strong>Real answer:</strong> The routing system looks for classes ending in <code>Controller</code>. <code>ShopController</code> maps to <code>/shop</code>. <code>Shop</code> alone won't be found. It's how ASP.NET discovers controllers automatically.
        <strong>The hidden question:</strong> "Can I change this convention?" -&gt; Yes, but don't. It's standard for a reason.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The two things to check first: (1) Does your controller name end with 'Controller'? (2) Is your view file in the right folder? Those two fix 90% of MVC errors."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section, and this summary. The scaffold-and-trace approach is key — students need to see the full pipeline working end-to-end.</p>
      <hr />
      <h2>TERM 2: MIDTERM — ASP.NET Core MVC (The Hard Part)</h2>
      <hr />
      <h2>Week 5: Routing Deep-Dive</h2>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (180 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Live Route Matching</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>30 min</td>
          <td>Live Code (instructor + students type)</td>
        </tr>
        <tr>
          <td>Industry Reality</td>
          <td>10 min</td>
          <td>Lecture + Discussion</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Lab (solo or pairs)</td>
        </tr>
        <tr>
          <td>AI Integration</td>
          <td>10 min</td>
          <td>Demo + Prompt Walkthrough</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>10 min</td>
          <td>Overflow / Stretch discussion</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 5 strategy):</strong> Routing is the first "invisible" thing students encounter — it either works or gives a 404 with no explanation. Spend extra time on route matching order and <code>MapControllers()</code>. Use the whiteboard heavily to trace URLs to controllers.</p>
      </blockquote>
      <hr />
      <h3>The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "TikTok's 'For You' page is just a really well-optimized route. <code>/fyp?user=me</code> -&gt; algorithm does its thing -&gt; video. Your app's routing is the same idea but with less machine learning and more curly braces."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "You Already Use Routing Every Day"<br />Left: TikTok URL <code>/fyp</code> | Right: GrabFood URL <code>/restaurant/jollibee/order</code><br />Subtitle: "Every app you use is just fancy routing."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Every URL you've ever typed, every link you've ever clicked — that's routing. You're not learning something new. You're learning how the thing you already use actually works."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you've ever gotten a 404 and just closed the tab. Today you'll learn why that happened."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Routing is just matching a URL to the right code. That's it. Type <code>/about</code> -&gt; show about page. Type <code>/contact</code> -&gt; show contact page. We're just adding rules."</p>
      </blockquote>
      <hr />
      <h3>The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Routing is like GPS navigation. You type an address (URL), the GPS (router) figures out which road to take (controller), which house to go to (action), and whether you need a gate code (route parameter). If the address doesn't match anything, GPS says 'address not found' — that's your 404."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw three boxes connected by arrows:</p>
        <pre><code>URL -&gt; Router -&gt; Controller.Action
        "/store/details/42" -&gt; matches -&gt; StoreController.Details(id=42)
      </code></pre>
      <p>Below: "GPS analogy: Address = URL, Route = Controller, House = Action, Gate code = Parameters"</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "If <code>/store/details/42</code> is an address, what's the controller? What's the action? 10 seconds, go!" (Answer: Controller = Store, Action = Details, Parameter = 42.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like a school directory. You want 'Juan in Room 301.' The directory (router) tells you: building (controller) = Main, room (action) = 301, person (parameter) = Juan."</p>
      </blockquote>
      <hr />
      <h3>Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (10 min convention routing -&gt; 10 min attribute routing -&gt; 5 min constraints)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "There are exactly two ways to define routes in ASP.NET Core. Convention-based: one rule for everything. Attribute-based: each controller declares its own. We'll use attribute routing because it's explicit and easier to debug."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show convention routing first — single <code>MapControllerRoute</code> line. Then reveal attribute routing with the <code>ShopController</code> example. Highlight: "Same result, different approach."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the route matching table:</p>
        <pre><code>URL                  -&gt; Route Pattern              -&gt; Controller.Action
        /shop                -&gt; [Route("")]                -&gt; ShopController.Index
        /shop/item/5         -&gt; [Route("item/&#123;id&#125;")]       -&gt; ShopController.Product(id=5)
        /shop/category/games -&gt; [Route("category/&#123;name&#125;")] -&gt; ShopController.ByCategory(name="games")
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Students will confuse convention vs attribute routing. Emphasize: <strong>you can use both, but attribute routing is clearer for beginners.</strong> The constraint section (<code>&#123;id:int&#125;</code>) is where most errors happen — spend extra time here.</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "What happens if I visit <code>/shop/item/abc</code> with the <code>&#123;id:int&#125;</code> constraint?" (Pause. Answer: 404 — "abc" isn't an integer, so the route doesn't match.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Route constraints are like TikTok's age filter — <code>&#123;id:int&#125;</code> means 'only integers allowed.' If you're not an int, you don't get in. No explanation, just 404."<br /><strong>-&gt; Phone moment:</strong> "Pull up any URL on your phone. The part after the domain? That's what we're matching today."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Can I use both convention and attribute routing in the same app?"
        <strong>Short answer:</strong> Yes, but don't.
        <strong>Real answer:</strong> Mixing them creates confusion about which route matches first. Pick one convention. For MVC apps, attribute routing is cleaner.
        <strong>The hidden question:</strong> "Which one should I use?" -&gt; Attribute routing. It's explicit and self-documenting.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What does the <code>?</code> mean in <code>&#123;id?&#125;</code>?"
        <strong>Short answer:</strong> It makes the parameter optional.
        <strong>Real answer:</strong> <code>/store/details</code> and <code>/store/details/42</code> both match. Without <code>?</code>, only the version with the ID matches.
        <strong>The hidden question:</strong> "When should I make parameters optional?" -&gt; When the action has sensible defaults.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the syntax for a second. Routing answers one question: 'When someone visits this URL, which method should run?' That's the entire concept. Everything else is just how you write the rule."</p>
      </blockquote>
      <hr />
      <h3>Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 30 min (5 min Program.cs setup -&gt; 15 min controller + routes -&gt; 10 min trace-through)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build a multi-page site with explicit attribute routing. Watch how each <code>[Route]</code> attribute maps to a URL. Then we'll trace exactly what happens when a request comes in."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show <code>Program.cs</code> first — highlight <code>app.MapControllers()</code>. Then reveal <code>StoreController</code> one action at a time. Don't show the whole controller at once.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type this live, don't paste.</strong> When you type <code>app.MapControllers()</code>, pause: "Without this line, your <code>[Route]</code> attributes do nothing. This is the #1 mistake this week." Then trace <code>/store/details/42</code> step by step on the whiteboard.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Trace the full request path:</p>
        <pre><code>GET /store/details/42
        v
        [Route("store")] on StoreController -&gt; prefix match [OK]
        v
        [Route("details/&#123;id:int&#125;")] -&gt; pattern match [OK]
        v
        42 is int -&gt; constraint passes [OK]
        v
        Details(int id) runs with id = 42
        v
        Returns View with ViewBag.ProductId = 42
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Type-along:</strong> "Open your project. Type the <code>StoreController</code> with me. Every route attribute. Every action. Don't copy-paste — typing builds the muscle memory."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why do I need both <code>[Route("")]</code> and <code>[Route("index")]</code> on the same action?"
        <strong>Short answer:</strong> So both <code>/store</code> and <code>/store/index</code> work.
        <strong>Real answer:</strong> Multiple <code>[Route]</code> attributes on one action let you support multiple URLs for the same page. Useful for backward compatibility.
        <strong>The hidden question:</strong> "Is this overkill?" -&gt; Maybe. But it's a useful pattern to know.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Let's trace the simplest route first: <code>GET /store</code>. The controller has <code>[Route("store")]</code> — that's the prefix. The action has <code>[Route("")]</code> — that means 'no extra path.' So <code>/store</code> = prefix + empty = match. That's it."</p>
      </blockquote>
      <hr />
      <h3>The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Routing is the first thing that happens when a request hits your app. If routing is broken, nothing else matters. At companies like Microsoft and Uber, routing misconfigurations have caused entire site outages."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Screenshot of a real 404 error page from a major site (e.g., GitHub's 404 page with their octocat). Label: "Even big companies get routing wrong sometimes."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. The SEO point is the most practical — <code>/product/nike-shoes</code> vs <code>/product?id=3982</code>. Show them a real Google search result to make it concrete.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Clean URLs are like having a clean Instagram bio. <code>/product/nike-shoes</code> tells Google and humans exactly what the page is. <code>/product?id=3982</code> looks sketchy and ranks lower."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to memorize everything today. Just remember: routing = URL to code. If routing works, your app works. If it doesn't, nothing else matters."</p>
      </blockquote>
      <hr />
      <h3>Exercise: Multi-Page Site with 3+ Routes</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min coding -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Build a GameZone store with four routes. Each route should display different info. Use attribute routing. You have 40 minutes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> Create <code>GamesController</code> with <code>[Route("games")]</code></li>
          <li><input disabled="" type="checkbox" /> <code>/games</code> — list all games (hardcoded <code>List&lt;Game&gt;</code>)</li>
          <li><input disabled="" type="checkbox" /> <code>/games/details/&#123;id:int&#125;</code> — show game details</li>
          <li><input disabled="" type="checkbox" /> <code>/games/genre/&#123;genre&#125;</code> — filter by genre</li>
          <li><input disabled="" type="checkbox" /> <code>/games/search/&#123;query:required&#125;</code> — search by name</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Circulate during the first 10 minutes — students will get stuck on <code>MapControllers()</code> or route constraints. The "aha" moment is when they visit <code>/games/details/5</code> and see dynamic content.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "One person writes the controller, the other creates the views. Then swap. You'll learn faster by seeing both sides."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-exercise check-in (at 20 min):</strong> "How many have <code>/games</code> working?" (Show of hands.) "How many have <code>/games/details/&#123;id&#125;</code> working?" "If neither, let's do a quick group debug."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with just ONE route: <code>/games</code>. Get that working. Then add <code>/games/details/&#123;id:int&#125;</code>. Don't try to build all four at once."</p>
      </blockquote>
      <hr />
      <h3>AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week marks a policy shift: AI is now your debugging tutor. Ask it why a route isn't matching. Ask it to explain 404s. But you still can't ask it to generate your controller."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Allowed vs Not Allowed:</p>
        <table>
          <thead>
            <tr>
              <th>[OK] Allowed</th>
              <th>[NO] Not Allowed</th>
            </tr>
          </thead>
          <tbody><tr>
            <td>"Why is this route not matching?"</td>
            <td>"Generate my GamesController"</td>
          </tr>
          <tr>
            <td>"Why am I getting 404 on /games/details/abc?"</td>
            <td>"Write all my routes for me"</td>
          </tr>
        </tbody></table>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Frame the policy shift positively: "You've earned more AI freedom because you understand the basics now. But debugging with AI is a skill — you need to know what to ask."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'route detective' — it helps you figure out why things break, but it doesn't build things for you. Use it like Google, not like a ghostwriter."</p>
      </blockquote>
      <hr />
      <h3>Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the routing errors you WILL see this week. Let's go through them so you don't spend 20 minutes Googling."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+-----------------------------------------+
        | 404 on valid route                      |
        | Did you call app.MapControllers()?      |
        | Did you restart the app?                |
        +-----------------------------------------+
        +-----------------------------------------+
        | AmbiguousMatchException                 |
        | Two routes match the same URL.          |
        | Fix: Make one route more specific.      |
        +-----------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AmbiguousMatchException is like two people answering your call at the same time. ASP.NET says 'I don't know who to talk to' and throws an error. Fix: make one route more specific."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does a constraint failure give 404 instead of 400?"
        <strong>Short answer:</strong> Because the route doesn't match — it's "not found," not "bad request."
        <strong>Real answer:</strong> A constraint is part of the route pattern. If the constraint fails, ASP.NET treats it as if the route doesn't exist. Another route might match, so it keeps looking.
        <strong>The hidden question:</strong> "That's confusing." -&gt; Yes. It's a known quirk of ASP.NET Core routing.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The two things to check first: (1) Did you call <code>app.MapControllers()</code> in Program.cs? (2) Did you restart the app after changing routes? Those fix 90% of routing issues."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End with one action item: "If you only remember one thing: <code>MapControllers()</code> enables attribute routing. Without it, your <code>[Route]</code> attributes are ignored."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. The #1 pitfall is forgetting <code>app.MapControllers()</code> — emphasize it repeatedly. Use the whiteboard to trace URLs to actions — visual route matching is the fastest way to build the mental model.</p>
      <hr />
      <h2>Week 6: Controllers &amp; Action Results</h2>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (180 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Code Comparison</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>30 min</td>
          <td>Live Code (instructor + students type)</td>
        </tr>
        <tr>
          <td>Industry Reality</td>
          <td>10 min</td>
          <td>Lecture + Discussion</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Lab (solo or pairs)</td>
        </tr>
        <tr>
          <td>AI Integration</td>
          <td>10 min</td>
          <td>Demo + Prompt Walkthrough</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>10 min</td>
          <td>Overflow / Stretch discussion</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 6 strategy):</strong> Students will want to put all logic in the controller. Resist this urge early — frame the controller as a "traffic cop" that delegates, not a "kitchen" that cooks. The key mental model: every action returns an <code>IActionResult</code>, and the specific type determines what the browser receives.</p>
      </blockquote>
      <hr />
      <h3>The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Your controller is the bouncer of your web app. It decides who gets in (View), who gets kicked out (Redirect), who gets a VIP pass (Json), and who's dead to the app (StatusCode 404)."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "The Controller is the Bouncer"<br />Visual: A bouncer at a club door with four signs: "View -&gt; Inside," "Redirect -&gt; Next door," "Json -&gt; VIP lounge," "404 -&gt; Not on the list."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Every response your app sends is the controller making a decision. View = 'you're welcome in.' Redirect = 'go somewhere else.' Json = 'here's the data, no HTML.' 404 = 'you don't exist to me.'"<br /><strong>-&gt; Poll:</strong> "Raise your hand if you've ever clicked a link and got redirected to a login page. That's <code>RedirectToAction</code> in action."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "A controller is just a class that handles web requests. You type a URL, the controller runs a method, and that method decides what to send back. That's it."</p>
      </blockquote>
      <hr />
      <h3>The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "A controller is a fast-food drive-thru speaker. The customer (browser) says 'I'll have a #5' (the URL). The speaker (controller) can respond in different ways: 'Here's your food' is View, 'We're out, go to the other location' is Redirect, 'Here's the nutritional info' is Json, and 'Sorry, we're closed' is StatusCode."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the drive-thru analogy:</p>
        <pre><code>Customer (Browser) -&gt; "I want /shop/details/5"
        v
        Speaker (Controller) -&gt; Details(int id)
        v
        Response options:
        [BURGER] View()     -&gt; "Here's the page"
        [REFRESH] Redirect() -&gt; "Go to /shop instead"
        [CLIPBOARD] Json()     -&gt; "Here's the data"
        [NOENTRY] StatusCode -&gt; "Not found / Closed"
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "If you visit <code>/shop/details/5</code> and the product doesn't exist — what should the controller return? 10 seconds, go!" (Answer: <code>NotFound()</code> or <code>StatusCode(404)</code>.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like GCash. You request money transfer. The app responds: success (View), insufficient funds (StatusCode 400), or server error (StatusCode 500). Same request, different responses."</p>
      </blockquote>
      <hr />
      <h3>Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (15 min action results -&gt; 10 min model binding primitives)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Every action method returns <code>IActionResult</code>. Think of it as 'something the browser can work with.' There are about 8 types you'll use 90% of the time. Let's go through each one."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show each action result type one at a time — not all at once. For each: the method name, what it returns, and a one-line example. Use a table format.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The most important distinction: <code>View()</code> returns HTML, <code>Json()</code> returns data, <code>Redirect()</code> sends the browser elsewhere. Students confuse these constantly. Emphasize: "View = page. Json = data. Redirect = go somewhere else."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "If I'm building an API for a mobile app — which action result will I use most?" (Answer: <code>Json()</code> and <code>StatusCode()</code>. Mobile apps don't render HTML.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Action results are like the different ways you respond to a text. View = a full reply. Json = just the facts. Redirect = 'check this link instead.' 404 = left on read."<br /><strong>-&gt; Phone moment:</strong> "Think about the last 5 apps you used. Which ones showed you pages (View)? Which ones showed you data feeds (Json)? Both are action results."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why <code>IActionResult</code> and not just <code>string</code> or <code>ViewResult</code>?"
        <strong>Short answer:</strong> So one method can return different types depending on conditions.
        <strong>Real answer:</strong> If you return <code>ViewResult</code>, you can only return views. <code>IActionResult</code> lets you return a view, a redirect, or an error — all from the same method. This is essential for real-world logic like "if not found, return 404."
        <strong>The hidden question:</strong> "Isn't that over-engineering?" -&gt; Not when you need conditional responses.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What's the difference between <code>Redirect()</code> and <code>RedirectToAction()</code>?"
        <strong>Short answer:</strong> <code>Redirect</code> takes a URL. <code>RedirectToAction</code> takes a controller and action name.
        <strong>Real answer:</strong> <code>RedirectToAction</code> uses routing to build the URL. If your routes change, <code>RedirectToAction</code> still works. <code>Redirect("https://...")</code> breaks if the URL changes.
        <strong>The hidden question:</strong> "Which should I use?" -&gt; <code>RedirectToAction</code> for internal routes. <code>Redirect</code> for external URLs.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the interface name. Just remember: <code>return View()</code> shows a page. <code>return Json()</code> shows data. <code>return Redirect()</code> sends you elsewhere. <code>return NotFound()</code> says 'not here.' Start with these four."</p>
      </blockquote>
      <hr />
      <h3>Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 30 min (5 min setup -&gt; 15 min live type -&gt; 10 min trace-through)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build a controller that demonstrates every major action result type. Watch how each one produces a different response in the browser."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the <code>DemoController</code> one action at a time. After each action, show what the browser sees when you visit that route.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type this live.</strong> After typing each action, immediately run the app and visit the route. Students need to see the actual browser output — not just the code. For <code>Json()</code>, show the raw JSON in the browser. For <code>Redirect()</code>, show the browser actually navigating.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Trace <code>/demos/json</code>:</p>
        <pre><code>GET /demos/json
        v
        DemoController.GetJson()
        v
        Creates anonymous object &#123; Id=1, Name="Wireless Mouse", Price=49.99 &#125;
        v
        return Json(product) -&gt; serializes to JSON
        v
        Response: Content-Type: application/json
        Body: &#123;"id":1,"name":"Wireless Mouse","price":49.99&#125;
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Type-along:</strong> "Type the <code>DemoController</code> with me. After each action, we'll test it in the browser. Don't skip any — each one teaches a different response type."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does the <code>Json()</code> result look different in different browsers?"
        <strong>Short answer:</strong> Browsers render JSON differently.
        <strong>Real answer:</strong> Chrome shows raw JSON. Firefox might try to download it. Edge might format it. The data is the same — only the display differs. Use the Network tab to see the raw response.
        <strong>The hidden question:</strong> "Is my JSON broken?" -&gt; No. It's the browser's rendering.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Let's focus on just two actions first: <code>View()</code> and <code>Content()</code>. Get those working. Then add <code>Redirect()</code>. Then <code>Json()</code>. Build up gradually."</p>
      </blockquote>
      <hr />
      <h3>The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Every response your app sends is one of these types. Understanding action results means you control exactly what the browser gets. Modern apps increasingly return JSON — SPAs, mobile apps, APIs. They all use the same controllers you're learning today."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Screenshot of a real API response (e.g., GitHub API returning JSON for a user). Label: "This is just a controller returning <code>Json()</code>. Same pattern you learned today."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Connect to the job market: "Every .NET job posting mentions APIs. APIs are just controllers that return <code>Json()</code> instead of <code>View()</code>. You're learning API development right now."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you have used an API before?" (Some hands.) "You just learned how to build one. Every <code>Json()</code> return is an API endpoint."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to master all action results today. Just understand: the controller decides what the browser gets. That decision is the return statement."</p>
      </blockquote>
      <hr />
      <h3>Exercise: Controller Portfolio</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min coding -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Build a <code>PortfolioController</code> with at least 5 different action result types. Each route should demonstrate a different response. You have 40 minutes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> <code>/portfolio</code> -&gt; <code>Content()</code> with intro text</li>
          <li><input disabled="" type="checkbox" /> <code>/portfolio/projects</code> -&gt; <code>View()</code> with project list</li>
          <li><input disabled="" type="checkbox" /> <code>/portfolio/project/&#123;id:int&#125;</code> -&gt; <code>View()</code> or <code>NotFound()</code></li>
          <li><input disabled="" type="checkbox" /> <code>/portfolio/api/projects</code> -&gt; <code>Json()</code> with project data</li>
          <li><input disabled="" type="checkbox" /> <code>/portfolio/redirect</code> -&gt; <code>Redirect()</code> to GitHub</li>
          <li><input disabled="" type="checkbox" /> <code>/portfolio/error</code> -&gt; <code>StatusCode(500)</code></li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Circulate during the first 10 minutes. Students will get stuck on the <code>NotFound()</code> conditional logic — "how do I check if the project exists?" Help them with the pattern: <code>if (project == null) return NotFound();</code>.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "One person builds the View and Content actions, the other builds Json and Redirect. Then combine and test all routes together."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-exercise check-in (at 20 min):</strong> "How many have 3 action types working?" (Show of hands.) "The JSON endpoint — visit it in the browser. Do you see raw data with no HTML? That's the API pattern."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with just <code>Content()</code> and <code>View()</code>. Get those working. Then add <code>Redirect()</code>. Don't try to build all 5 at once."</p>
      </blockquote>
      <hr />
      <h3>AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week, AI is your debugging partner. Ask it why your View returns 404, why Json downloads instead of displaying, or why your redirect loops. But don't ask it to generate your controller."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Prompt template:
        "I called [route] and expected [result type] but got [actual result]. Here's my controller code [paste]."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Demonstrate a good AI prompt vs a bad one. Good: "My View() returns 404 for Shop/Index. Here's my controller and view path." Bad: "Build me a portfolio controller."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'response type checker' — it helps you figure out why the browser shows something unexpected. Use it to debug, not to build."</p>
      </blockquote>
      <hr />
      <h3>Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the action result errors you'll see this week. Most are path issues or type confusion."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+------------------------------------------+
        | View() returns 404                       |
        | View file not at Views/&#123;Controller&#125;/     |
        | &#123;Action&#125;.cshtml                          |
        +------------------------------------------+
        +------------------------------------------+
        | Redirect() loops forever                 |
        | You redirected to the same URL that      |
        | triggers the redirect.                   |
        +------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "A redirect loop is like being stuck in a group chat where everyone keeps tagging each other. A -&gt; B -&gt; A -&gt; B -&gt; crash. Fix: make sure the redirect goes somewhere different."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does <code>NotFound()</code> return an empty page?"
        <strong>Short answer:</strong> By default, it returns no body.
        <strong>Real answer:</strong> Pass an object to include a message: <code>return NotFound(new &#123; error = "Not found" &#125;)</code>. This returns JSON with the error message.
        <strong>The hidden question:</strong> "How do I show a custom 404 page?" -&gt; That's middleware, covered later.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The two things to check first: (1) Is your view file in the right folder? (2) Does your action method name match the view file name? Those fix 90% of action result issues."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End with one action item: "If you only remember one thing: <code>View()</code> looks for <code>Views/&#123;Controller&#125;/&#123;Action&#125;.cshtml</code>. If that file doesn't exist, you get 404."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. The key mental model is "controller = traffic cop." Test every action result in the browser immediately after typing it — seeing the actual response is worth more than reading about it.</p>
      <hr />
      <h2>Week 7: Views &amp; Layouts</h2>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (180 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Live Razor Demo</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>30 min</td>
          <td>Live Code (instructor + students type)</td>
        </tr>
        <tr>
          <td>Industry Reality</td>
          <td>10 min</td>
          <td>Lecture + Discussion</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Lab (solo or pairs)</td>
        </tr>
        <tr>
          <td>AI Integration</td>
          <td>10 min</td>
          <td>Demo + Prompt Walkthrough</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>10 min</td>
          <td>Overflow / Stretch discussion</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 7 strategy):</strong> This is the week students finally see their apps look like real websites. The "aha" moment is when they create a layout and all pages instantly get a navbar. Spend extra time on <code>_ViewStart.cshtml</code> placement — it's the #1 cause of "my layout isn't applying."</p>
      </blockquote>
      <hr />
      <h3>The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Your website looks like it's from 1998. Three different pages, three different fonts, zero consistency. Today, we fix that. Your app will finally look like someone in this decade designed it."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "From 1998 to 2026"<br />Left: Screenshot of a plain HTML page with Times New Roman, no styling, labeled "Before."<br />Right: Same content with a navbar, cards, footer, labeled "After Layout."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Your app without a layout is like a TikTok with no filter — it works, but nobody wants to look at it. Today we add the filter."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you've ever judged a website by how it looks and left immediately. That's why layouts matter."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Don't worry if you're not a designer. Layouts are about consistency, not beauty. Same navbar, same footer, same colors on every page. That's it."</p>
      </blockquote>
      <hr />
      <h3>The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "A shopping mall has a consistent design — same signage, same floor tiles, same lighting in every corridor. The individual stores (your pages) have their own content, but the hallway (the layout) stays the same. You don't redesign the hallway for every store. That's a Layout page."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the mall analogy:</p>
        <pre><code>+-------------------------------------+
        |  MALL LAYOUT (_Layout.cshtml)       |
        |  +-----+ +-----+ +-----+           |
        |  |Store| |Store| |Store|  &lt;- Pages   |
        |  |  A  | |  B  | |  C  |  (Views)   |
        |  +-----+ +-----+ +-----+           |
        |  Same hallway, same entrance, same  |
        |  exit for every store               |
        +-------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "Think of your favorite app. What stays the same on every screen? The bottom nav? The top bar? That's the layout. The content that changes? That's the view. 10 seconds, go!"</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "A layout is a template. Every page gets injected into it. Same header, same footer, different content in the middle. Like a Canva template — you change the text but keep the design."</p>
      </blockquote>
      <hr />
      <h3>Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (10 min Razor syntax -&gt; 8 min layouts -&gt; 7 partials + tag helpers)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Razor lets you mix C# and HTML in the same file. The <code>@</code> symbol is your escape hatch — it tells the engine 'this is C# code, not HTML.' Layouts wrap every page. Partials are reusable chunks. Tag helpers make HTML feel like HTML, not C#."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show Razor syntax examples one at a time: variable output, loops, conditionals. Then show the layout structure with <code>@RenderBody()</code> highlighted. Then show a partial view.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Students will confuse <code>@&#123; &#125;</code> (code block) with <code>@variable</code> (output). Emphasize: curly braces = execute code, no braces = print value. For layouts, the critical point is <code>_ViewStart.cshtml</code> — it must be in the <code>Views/</code> folder, not <code>Views/Shared/</code>.</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "If I have 50 pages and I need to change the navbar — how many files do I edit without a layout?" (Answer: 50. With a layout: 1.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Razor syntax is like Instagram captions with hashtags. Regular text = HTML. <code>@something</code> = C# code. <code>@&#123; block &#125;</code> = multiple lines of code. The <code>@</code> is your hashtag."<br /><strong>-&gt; Phone moment:</strong> "Think about how Instagram templates work — same frame, different photo. That's exactly what a layout does."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does the layout file start with an underscore?"
        <strong>Short answer:</strong> It's a convention — files starting with <code>_</code> are not directly accessible as views.
        <strong>Real answer:</strong> ASP.NET won't serve <code>_Layout.cshtml</code> if someone visits <code>/Shared/_Layout</code>. The underscore marks it as a "support file" — it's used by other views, not accessed directly.
        <strong>The hidden question:</strong> "Can I name it something else?" -&gt; Yes, but don't. The underscore convention is universal.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What's the difference between a partial view and a regular view?"
        <strong>Short answer:</strong> A partial is a reusable chunk. A regular view is a full page.
        <strong>Real answer:</strong> Partials don't run <code>_ViewStart</code> and don't need a layout. They're like components — you include them inside other views. Think of them as LEGO bricks.
        <strong>The hidden question:</strong> "When should I use a partial?" -&gt; When the same HTML appears on multiple pages (product cards, nav items, forms).</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget Razor for a second. Think of it like this: you have one HTML file with a hole in the middle (<code>@RenderBody()</code>). Every page fills that hole. The rest of the HTML stays the same. That's a layout."</p>
      </blockquote>
      <hr />
      <h3>Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 30 min (10 min layout setup -&gt; 10 min view + tag helpers -&gt; 10 min test + partial)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build a themed site from scratch. First the layout, then a view that uses it, then a partial for reusable cards. Watch how the pieces connect."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show <code>_Layout.cshtml</code> first — highlight the <code>@RenderBody()</code> spot. Then show <code>_ViewStart.cshtml</code>. Then show a page view getting injected into the layout.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type this live.</strong> Create the <code>_Layout.cshtml</code> file, then <code>_ViewStart.cshtml</code>, then a page view. After each step, run the app and show the result. The "aha" moment is when they see the navbar appear on a page they didn't add it to.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the file structure and rendering flow:</p>
        <pre><code>Views/
        _ViewStart.cshtml  -&gt;  Layout = "_Layout"
        Shared/
        _Layout.cshtml   -&gt;  &lt;nav&gt; @RenderBody() &lt;footer&gt;
        Games/
        Index.cshtml     -&gt;  injected into @RenderBody()
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Type-along:</strong> "Create the <code>_Layout.cshtml</code> with me. Then <code>_ViewStart.cshtml</code>. Then a page. Run it after each step. Watch the layout appear like magic."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why do I need <code>_ViewStart.cshtml</code>? Can't I just set the layout in each view?"
        <strong>Short answer:</strong> You can, but it's repetitive.
        <strong>Real answer:</strong> <code>_ViewStart.cshtml</code> runs before every view in its folder and subfolders. Set the layout once, and every view inherits it. Without it, you'd write <code>@&#123; Layout = "_Layout"; &#125;</code> in every single view file.
        <strong>The hidden question:</strong> "Is this really necessary?" -&gt; For 3 pages, no. For 30, absolutely.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Let's do the simplest layout possible: an HTML file with <code>&lt;h1&gt;My Site&lt;/h1&gt;</code>, then <code>@RenderBody()</code>, then <code>&lt;footer&gt;Copyright&lt;/footer&gt;</code>. That's it. Every page gets that wrapper."</p>
      </blockquote>
      <hr />
      <h3>The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Consistent UI isn't just about looks — it builds user trust. Amazon, Facebook, and Reddit all use layout systems. Changing your nav bar in one file instead of 50 pages saves hours. In industry, layouts are non-negotiable."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Side-by-side: a site with inconsistent pages (different nav, different fonts) vs a site with a layout. Label: "Which one would you trust with your GCash?"</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. The practical point is time-saving: "One file change vs 50 file changes." That's the argument that convinces students.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you have visited a website where every page looked different and immediately left?" (Most hands.) "That's what happens without layouts."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to be a designer. Layouts are about consistency. Same navbar everywhere. Same footer everywhere. That alone makes your site look 10x better."</p>
      </blockquote>
      <hr />
      <h3>Exercise: Consistent Themed Site</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min coding -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Take your GameZone site from Week 5 and add a layout. Navigation bar, footer, consistent styling. Every page should look like it belongs to the same site. You have 40 minutes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> Create <code>_Layout.cshtml</code> with nav (3+ links using Tag Helpers)</li>
          <li><input disabled="" type="checkbox" /> Add <code>@RenderBody()</code> in the main content area</li>
          <li><input disabled="" type="checkbox" /> Add footer with copyright</li>
          <li><input disabled="" type="checkbox" /> Create <code>_ViewStart.cshtml</code> to set the layout</li>
          <li><input disabled="" type="checkbox" /> Add <code>site.css</code> with basic styling</li>
          <li><input disabled="" type="checkbox" /> Bonus: Create <code>_ProductCard.cshtml</code> partial view</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Circulate during the first 10 minutes — students will get stuck on <code>_ViewStart.cshtml</code> placement. The most common error: putting it in <code>Views/Shared/</code> instead of <code>Views/</code>.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "One person builds the layout HTML, the other writes the CSS. Then combine and test on all pages."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-exercise check-in (at 20 min):</strong> "How many pages have the navbar?" (Show of hands.) "Visit each page — does the nav look the same everywhere? That's the layout working."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with just the layout file. Get it working with one page. Then add the CSS. Then add the partial. Don't try to style everything at once."</p>
      </blockquote>
      <hr />
      <h3>AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week, AI can help you debug layout issues. Ask it why your layout isn't applying, why your partial isn't rendering, or why your CSS isn't loading. But don't ask it to design your site."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Prompt template:
        "I created a layout at [path] but my pages don't use it. Here's my _ViewStart.cshtml [paste]."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Demonstrate asking AI about a layout issue vs asking it to generate HTML. The first is learning. The second is copying.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'layout debugger' — it helps you figure out why things aren't rendering, but it doesn't design your site for you. You still need to pick the colors."</p>
      </blockquote>
      <hr />
      <h3>Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the layout errors you'll see this week. Most are file placement or naming issues."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+------------------------------------------+
        | Layout not applying                      |
        | Is _ViewStart.cshtml in Views/ folder?   |
        | (Not Views/Shared/ — that's wrong)       |
        +------------------------------------------+
        +------------------------------------------+
        | CSS not loading                          |
        | Check: wwwroot/css/site.css exists       |
        | Using ~/ for root path: href="~/css/..." |
        +------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Layout not applying is like putting your profile picture in the wrong folder on your phone. The file exists, but the app can't find it. Check the path."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does <code>@RenderBody()</code> have to be called exactly once?"
        <strong>Short answer:</strong> Because there's only one place for the page content to go.
        <strong>Real answer:</strong> If you call it twice, ASP.NET doesn't know which copy gets the content. It throws an exception to prevent ambiguous rendering.
        <strong>The hidden question:</strong> "What if I want content in two places?" -&gt; Use <code>@RenderSection()</code> instead.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The three things to check: (1) Is <code>_ViewStart.cshtml</code> in <code>Views/</code>? (2) Does <code>_Layout.cshtml</code> exist in <code>Views/Shared/</code>? (3) Does the layout file have <code>@RenderBody()</code>? Those fix 90% of layout issues."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End with one action item: "If you only remember one thing: <code>_ViewStart.cshtml</code> goes in <code>Views/</code>, not <code>Views/Shared/</code>. That's the #1 mistake."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. The "aha" moment is the layout appearing on all pages — make sure students see it happen live. The #1 pitfall is <code>_ViewStart.cshtml</code> placement — emphasize <code>Views/</code> not <code>Views/Shared/</code>.</p>
      <hr />
      <h2>Week 8: Model Binding &amp; Validation</h2>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (180 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Live Form Demo</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>30 min</td>
          <td>Live Code (instructor + students type)</td>
        </tr>
        <tr>
          <td>Industry Reality</td>
          <td>10 min</td>
          <td>Lecture + Discussion</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Lab (solo or pairs)</td>
        </tr>
        <tr>
          <td>AI Integration</td>
          <td>10 min</td>
          <td>Demo + Prompt Walkthrough</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>10 min</td>
          <td>Overflow / Stretch discussion</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 8 strategy):</strong> This is the first week students build forms that accept user input. The magic of model binding ("it just populates my object!") is exciting, but validation is where real learning happens. Students will struggle with <code>ModelState.IsValid</code> — walk through the validation flow slowly and deliberately.</p>
      </blockquote>
      <hr />
      <h3>The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "That 'Email is required' red text that makes you feel personally attacked? That's validation. And today you're not just seeing it — you're building it. Your form will reject empty fields before your server even breaks a sweat."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "You've Been Validated"<br />Left: Screenshot of a form with red error messages ("Name is required", "Invalid email").<br />Right: Same form with all green checkmarks.<br />Subtitle: "Today you build both."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Every form you've ever filled out — GCash signup, Shopee checkout, even your college enrollment — they all use validation. Today you become the one who decides what 'valid' means."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you've ever submitted a form and got an error that made no sense. Today you'll learn how to write better error messages."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Validation is just checking if the data makes sense before saving it. Empty name? Reject. Bad email? Reject. That's it. We're just learning how to code those checks."</p>
      </blockquote>
      <hr />
      <h3>The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Model binding is like airport immigration. The officer (model binder) looks at your passport (form data) and automatically fills out a visitor record (C# model). If the name field is blank, they stamp 'REQUIRED' in red. If the email doesn't have an @ symbol, they flag it. All this happens before you even leave the airport counter."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the immigration analogy:</p>
        <pre><code>Form Data (Passport)          C# Model (Visitor Record)
        +-----------------+           +-----------------+
        | Name: "Juan"    |  -------&gt;  | Name = "Juan"   | [OK]
        | Email: "juan@"  |  -------&gt;  | Email = "juan@" | [NO] Invalid!
        | Age: "abc"      |  -------&gt;  | Age = ???       | [NO] Not a number!
        +-----------------+           +-----------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "If you submit a form with an empty name field — what should happen? Should the server save it? 10 seconds, go!" (Answer: No — validation rejects it.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like a bouncer checking IDs at a club. Model binding = reading the ID. Validation = checking if you're 18+. If you pass, you get in. If not, you get an error message."</p>
      </blockquote>
      <hr />
      <h3>Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (10 min model binding -&gt; 10 min data annotations -&gt; 5 min client-side validation)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Model binding is the magic that turns form fields into C# objects automatically. You don't write <code>Request.Form['Name']</code> — ASP.NET does it for you. Then data annotations add validation rules right on your model. And client-side validation catches errors before the form even submits."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the model binding flow first: HTML form -&gt; C# object. Then reveal data annotations one at a time: <code>[Required]</code>, <code>[EmailAddress]</code>, <code>[StringLength]</code>, <code>[Range]</code>. Finally show the form with Tag Helpers.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The most important concept: <strong>property names must match form field names</strong>. If your model has <code>Name</code> but your input has <code>name="UserName"</code>, binding fails. Tag Helpers (<code>asp-htmlFor="Name"</code>) handle this automatically — emphasize this benefit.</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "What happens if someone submits a form with <code>Name: ''</code> (empty string) and the model has <code>[Required]</code>?" (Answer: <code>ModelState.IsValid</code> is false. The form returns with an error message.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Data annotations are like TikTok's content filters. <code>[Required]</code> = 'you must fill this in.' <code>[EmailAddress]</code> = 'this better look like an email.' <code>[Range(1,5)]</code> = 'pick a number between 1 and 5, no cheating.' The model enforces the rules."<br /><strong>-&gt; Phone moment:</strong> "Open any app with a signup form. The red error messages? Those are data annotations in action."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why do I need server-side validation if I have client-side validation?"
        <strong>Short answer:</strong> Client-side can be bypassed.
        <strong>Real answer:</strong> Anyone can disable JavaScript or use tools like Postman to send requests directly to your server. Client-side validation is for user experience. Server-side validation is for security. You need both.
        <strong>The hidden question:</strong> "Isn't client-side enough?" -&gt; Never. It's a convenience feature, not a security feature.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What does <code>ModelState.IsValid</code> actually check?"
        <strong>Short answer:</strong> All data annotations on the model.
        <strong>Real answer:</strong> It checks every property's validation attributes (<code>[Required]</code>, <code>[EmailAddress]</code>, etc.) AND checks if the model binder could convert the form values to the correct types. If either fails, <code>IsValid</code> is false.
        <strong>The hidden question:</strong> "How do I know which field failed?" -&gt; <code>ModelState.Values.SelectMany(v =&gt; v.Errors)</code> gives you all errors.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the technical terms. The flow is: (1) User fills form. (2) ASP.NET creates a C# object from the form data. (3) Check if the object passes all rules. (4) If yes, save it. If no, show errors. That's the entire concept."</p>
      </blockquote>
      <hr />
      <h3>Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 30 min (5 min model -&gt; 10 min controller -&gt; 10 min view -&gt; 5 min trace-through)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build a complete contact form with validation. Model, controller, view — the full stack. Watch how the pieces connect and how validation errors flow back to the user."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show <code>ContactFormModel</code> first with all annotations. Then the controller with GET and POST actions. Then the view with Tag Helpers. Reveal one piece at a time.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type this live.</strong> After building the form, deliberately submit it with empty fields to show validation errors appearing. Then submit with valid data to show the success redirect. Students need to see both paths.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Trace the validation flow:</p>
        <pre><code>User submits form (POST /contact)
        v
        Model binding: form data -&gt; ContactFormModel
        v
        Validation: check [Required], [EmailAddress], etc.
        v
        ModelState.IsValid?
        +- NO -&gt; return View(model) -&gt; form shows errors
        +- YES -&gt; process data -&gt; RedirectToAction("ThankYou")
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Type-along:</strong> "Build the contact form with me. Model first, then controller, then view. After each piece, we'll test it. Submit with empty fields — watch the red errors appear."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why do I need <code>@Html.AntiForgeryToken()</code>?"
        <strong>Short answer:</strong> It prevents CSRF attacks.
        <strong>Real answer:</strong> Without it, a malicious website could submit a form to your app on behalf of a logged-in user. The anti-forgery token proves the form came from your actual page, not a third-party site.
        <strong>The hidden question:</strong> "Is this really necessary for a contact form?" -&gt; Yes. It's a security best practice for all POST forms.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Let's focus on just the model and the <code>ModelState.IsValid</code> check first. Get those working. Then add the form. Then add the validation scripts. Build up gradually."</p>
      </blockquote>
      <hr />
      <h3>The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Bad data breaks databases, crashes apps, and makes users angry. Validation is your first line of defense. Every production app validates input — not just on the client (easily bypassed) but on the server (mandatory)."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Screenshot of a news headline about a data breach caused by unvalidated input. Label: "This could have been prevented with <code>[Required]</code> and <code>[EmailAddress]</code>."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. The security angle is the strongest argument: "Validation isn't about being mean to users. It's about protecting your database from bad data."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you have signed up for something and got a confirmation email with weird characters in your name? That's what happens without validation."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to memorize every annotation today. Just understand: validation = check data before saving. <code>[Required]</code> is the most important one. Start there."</p>
      </blockquote>
      <hr />
      <h3>Exercise: Working Contact Form</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min coding -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Build a contact form with full validation. Model with data annotations, GET and POST actions, Tag Helpers, and client-side validation. You have 40 minutes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> Model: <code>ContactFormModel</code> with Name, Email, Subject, Message, Priority</li>
          <li><input disabled="" type="checkbox" /> GET action: Display empty form</li>
          <li><input disabled="" type="checkbox" /> POST action: Validate -&gt; show errors or redirect to "Thank You"</li>
          <li><input disabled="" type="checkbox" /> View: Tag Helpers for all form elements</li>
          <li><input disabled="" type="checkbox" /> Client-side validation (jQuery validation scripts)</li>
          <li><input disabled="" type="checkbox" /> Field-level AND summary validation errors</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Circulate during the first 10 minutes — students will get stuck on including the jQuery validation scripts. The "aha" moment is when they submit with empty fields and see red errors appear instantly (client-side) without a postback.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "One person builds the model and controller, the other builds the view with Tag Helpers. Then test together — submit invalid data and watch the errors appear."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-exercise check-in (at 20 min):</strong> "How many have the form displaying?" (Show of hands.) "How many have validation errors appearing?" "If neither, let's do a quick group debug."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with just the model and the GET action. Get the form displaying. Then add the POST action with <code>ModelState.IsValid</code>. Then add validation attributes. Don't try to build everything at once."</p>
      </blockquote>
      <hr />
      <h3>AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week, AI helps you debug validation issues. Ask it why <code>ModelState.IsValid</code> is false, why error messages aren't showing, or why client-side validation isn't working. But don't ask it to generate your form."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Prompt template:
        "I'm submitting a form but ModelState.IsValid is false. Here's my model [paste] and form [paste]. What am I missing?"</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Demonstrate a good debugging prompt. Show how AI can identify a missing <code>[Required]</code> attribute or a mismatched property name. This is practical, not cheating.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'validation detective' — it helps you figure out why the form is rejecting data. Use it to find the bug, not to write the code."</p>
      </blockquote>
      <hr />
      <h3>Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the validation errors you'll see this week. Most are about property names or missing scripts."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+------------------------------------------+
        | ModelState.IsValid is false but no       |
        | errors visible                           |
        | Use ModelState.Values.SelectMany         |
        | (v =&gt; v.Errors) to find hidden errors    |
        +------------------------------------------+
        +------------------------------------------+
        | Client-side validation not working       |
        | Missing jQuery Validation scripts        |
        | Check: _Layout includes the scripts      |
        +------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Hidden validation errors are like a group chat where someone is mad but won't say why. <code>ModelState.Values.SelectMany(v =&gt; v.Errors)</code> is you asking 'okay, what's actually wrong?'"</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does my form give a 400 error when I submit?"
        <strong>Short answer:</strong> Missing anti-forgery token.
        <strong>Real answer:</strong> ASP.NET Core requires <code>[ValidateAntiForgeryToken]</code> on POST actions by default. If your form doesn't include <code>@Html.AntiForgeryToken()</code>, the server rejects the request with a 400 error.
        <strong>The hidden question:</strong> "Can I turn this off?" -&gt; Yes, but don't. It's a critical security feature.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The three things to check: (1) Does your model have <code>[Required]</code> on the right properties? (2) Does your form use <code>asp-for</code> Tag Helpers? (3) Does your POST action check <code>ModelState.IsValid</code>? Those fix 90% of validation issues."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End with one action item: "If you only remember one thing: always check <code>ModelState.IsValid</code> before processing form data. Never trust user input."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. The validation flow (form -&gt; bind -&gt; validate -&gt; isValid -&gt; process/return) is the core mental model. Test both paths — valid and invalid submissions — so students see the full cycle. The #1 pitfall is forgetting jQuery validation scripts for client-side validation.</p>
      <hr />
      <h2>TERM 3: PREFINALS — Data &amp; Persistence + Consuming APIs</h2>
      <hr />
      <h2>Week 9: EF Core Fundamentals</h2>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (180 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Code Comparison</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>35 min</td>
          <td>Live Code (instructor + students type)</td>
        </tr>
        <tr>
          <td>Industry Reality</td>
          <td>10 min</td>
          <td>Lecture + Discussion</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Lab (solo or pairs)</td>
        </tr>
        <tr>
          <td>AI Integration</td>
          <td>10 min</td>
          <td>Demo + Prompt Walkthrough</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>5 min</td>
          <td>Overflow</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 9 strategy):</strong> This is the first time students touch a real database. The magic of "I wrote C# and it made a table!" is powerful — but migrations will confuse them. Go slow on <code>dotnet ef migrations add</code> and <code>dotnet ef database update</code>. Have them run these commands themselves, not just watch you. The "aha" moment is when they see data persist after restarting the app.</p>
      </blockquote>
      <hr />
      <h3>The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Remember writing SQL queries in VB? String concatenation, SQL injection vulnerabilities, crying at 2 AM because you forgot a comma? We're never doing that again. Entity Framework Core writes the SQL for you. You just write C#."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "Never Write SQL Again"<br />Left: A messy VB SQL string with concatenation, labeled "The Old Way."<br />Right: Clean C# LINQ query, labeled "The EF Core Way."<br />Subtitle: "Same database. Zero SQL strings. One happier you."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Read the hook with relief, not mockery. Some students actually liked writing SQL. Frame EF Core as a productivity upgrade, not a replacement for understanding databases.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "EF Core is like autocorrect but for databases. You type what you want in C#, and it figures out the SQL. Except unlike autocorrect, it actually gets it right."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you've ever gotten a SQL syntax error because of a missing quote. Today that ends."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "If you've never written SQL before, even better. You're learning the modern way from day one. EF Core is how most .NET developers interact with databases."</p>
      </blockquote>
      <hr />
      <h3>The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "An ORM is like Google Drive for your data. You don't care <em>how</em> Google stores your files — you just open the folder, drag files in, and search for them. EF Core is Google Drive for your C# objects. It saves them to a database without you writing <code>INSERT INTO</code> or <code>SELECT * FROM</code>."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the ORM translation layer:</p>
        <pre><code>C# Objects                    Database Tables
        +-----------------+           +-----------------+
        | Product class   |  &lt;-EF-&gt;    | Products table   |
        | .Name property  |  &lt;-EF-&gt;    | Name column      |
        | .Price property |  &lt;-EF-&gt;    | Price column     |
        | List&lt;Product&gt;   |  &lt;-EF-&gt;    | SELECT * query   |
        +-----------------+           +-----------------+
      </code></pre>
      <p>Label the middle arrow: "EF Core translates automatically."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The Google Drive analogy works for most students. For those who don't use Drive, add: "Or like GCash — you don't care how the money is stored in their servers, you just see your balance and send money."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "If EF Core is Google Drive for data, what's the 'folder'? What's the 'file'? 10 seconds, go!" (Answer: Folder = table, File = row/record.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like a translator at the UN. You speak C#. The database speaks SQL. EF Core is the translator in the middle. You say 'give me all products' in C#, EF Core says 'SELECT * FROM Products' to the database."</p>
      </blockquote>
      <hr />
      <h3>Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (8 min ORM concept -&gt; 7 min DbContext -&gt; 5 min migrations -&gt; 5 min CRUD)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here's the entire EF Core mental model in four parts: ORM translates, DbContext connects, migrations version-control your database, and CRUD is how you interact with data. Let's go through each one."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the C# class -&gt; SQL table mapping first. Reveal one property at a time: <code>int Id</code> -&gt; <code>Id int PRIMARY KEY IDENTITY</code>, <code>string Name</code> -&gt; <code>Name nvarchar(max)</code>, <code>decimal Price</code> -&gt; <code>Price decimal(18,2)</code>.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The most important concept this week is <strong><code>DbSet&lt;T&gt;</code> as a "database-connected List&lt;T&gt;."</strong> Students already know <code>List&lt;T&gt;</code> — build on that. Emphasize: "You query it like a List, but the data lives in a database." For migrations, stress: "Migrations are version control for your database schema. Like git, but for tables."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "If I add a new property to my Product class — how does the database know about it?" (Answer: You create a new migration and apply it.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "DbContext is like your GCash app. It's your connection to your money (database). You don't touch the bank vault directly — you go through the app. <code>DbSet&lt;Product&gt;</code> is like your transaction history — a list that's connected to the real data."<br /><strong>-&gt; Phone moment:</strong> "Think about how your phone apps store data. They don't save to files — they save to databases. EF Core is how your C# code talks to those databases."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Do I still need to learn SQL?"
        <strong>Short answer:</strong> Yes, eventually.
        <strong>Real answer:</strong> EF Core handles 90% of what you'll do. But when something goes wrong — slow queries, complex joins — you need to read the SQL EF generates. You don't write it daily, but you need to understand it.
        <strong>The hidden question:</strong> "Can I skip SQL entirely?" -&gt; Not if you want to be a senior developer. But you can start with EF Core and learn SQL as needed.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What's the difference between <code>Find()</code> and <code>Where()</code>?"
        <strong>Short answer:</strong> <code>Find()</code> gets one record by primary key. <code>Where()</code> filters by any condition.
        <strong>Real answer:</strong> <code>Find(1)</code> generates <code>SELECT ... WHERE Id = 1</code> and checks the local cache first. <code>Where(p =&gt; p.Price &lt; 50)</code> generates <code>SELECT ... WHERE Price &lt; 50</code> and always hits the database.
        <strong>The hidden question:</strong> "Which is faster?" -&gt; <code>Find()</code> for single records by ID. <code>Where()</code> for everything else.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the technical terms. The flow is: (1) Define a class. (2) Add it as a DbSet in DbContext. (3) Run a migration. (4) Now you can add, read, update, and delete records using C# only. That's it."</p>
      </blockquote>
      <hr />
      <h3>Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 35 min (5 min packages -&gt; 10 min models + DbContext -&gt; 5 min Program.cs -&gt; 5 min migrations -&gt; 10 min controller)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's set up EF Core from scratch. Watch how each piece connects — the model, the DbContext, the connection string, the migration, and finally the controller that uses it all."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the setup steps one at a time: (1) packages, (2) models, (3) DbContext, (4) Program.cs registration, (5) migration commands, (6) controller. Don't show everything at once.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type this live, don't paste.</strong> When you run <code>dotnet ef migrations add InitialCreate</code>, pause and explain: "This command compares your models to the last migration and generates a C# file describing what changed." Then run <code>dotnet ef database update</code> and say: "This applies the migration to the actual database." Make the deliberate mistake of forgetting <code>UseSqlServer()</code> — let it fail, then fix it.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the full data flow:</p>
        <pre><code>Controller -&gt; AppDbContext -&gt; SQL Server
        v            v
        Product     DbSet&lt;Product&gt;
        v            v
        .Add()     .SaveChanges() -&gt; INSERT INTO Products
        .ToList()  db.Products    -&gt; SELECT * FROM Products
        .Find(1)   db.Products    -&gt; SELECT ... WHERE Id = 1
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Type-along:</strong> "Install the packages with me. Then create the models. Then the DbContext. Run the migration. Watch the database get created. This is the moment your code becomes persistent."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What's <code>(localdb)\MSSQLLocalDB</code>?"
        <strong>Short answer:</strong> It's a lightweight SQL Server that comes with Visual Studio.
        <strong>Real answer:</strong> LocalDB is a developer-friendly version of SQL Server. It runs on-demand, doesn't need a service, and stores files in your user folder. Perfect for development. In production, you'd use a real SQL Server instance.
        <strong>The hidden question:</strong> "Do I need to install SQL Server separately?" -&gt; No. LocalDB comes with Visual Studio.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Let's do the absolute minimum: one model, one DbSet, one migration. Get that working. Then add the controller. Don't try to set up everything at once."</p>
      </blockquote>
      <hr />
      <h3>The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "EF Core is used by 70%+ of .NET web apps. It's not optional — it's the standard. Companies pick .NET precisely because EF Core makes database work so smooth. Without it, you're writing SQL strings, managing connections manually, and debugging 'string or binary data would be truncated' at 11 PM."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Screenshot of a real job posting for ".NET Developer" highlighting "Entity Framework" or "EF Core" in the requirements. Bonus: show a job posting from a Philippine company.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. The goal is motivation. Connect it to their future: "Every .NET job you apply for will mention EF Core. Learning it now means you're already ahead."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you have seen 'Entity Framework' in a job posting?" (Show a real JobStreet screenshot if hands are low.) "That's your future self thanking you for paying attention today."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to master EF Core today. Just understand: it lets you work with databases using C# instead of SQL. That's the core idea. Everything else is details."</p>
      </blockquote>
      <hr />
      <h3>Exercise: First Migration + Seed Data</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min coding -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Create a new MVC project, set up EF Core, define a Product model, create your first migration, seed some data, and display it on a page. You have 40 minutes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> Create ASP.NET Core MVC project</li>
          <li><input disabled="" type="checkbox" /> Add EF Core SQL Server packages</li>
          <li><input disabled="" type="checkbox" /> Define <code>Product</code> model (Id, Name, Price, StockQuantity, CreatedAt)</li>
          <li><input disabled="" type="checkbox" /> Create <code>AppDbContext</code> with <code>DbSet&lt;Product&gt;</code></li>
          <li><input disabled="" type="checkbox" /> Register DbContext in <code>Program.cs</code></li>
          <li><input disabled="" type="checkbox" /> Create and apply first migration</li>
          <li><input disabled="" type="checkbox" /> Add seed data (5 products)</li>
          <li><input disabled="" type="checkbox" /> Create <code>ProductsController</code> with <code>Index</code> action</li>
          <li><input disabled="" type="checkbox" /> Run and verify products appear on page</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Circulate during the first 15 minutes — migration setup is where students get stuck. The "aha" moment is when they run the app and see seeded data on the page for the first time. Walk around and celebrate that moment.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "One person handles the models and DbContext, the other handles the migration and controller. Then combine and test together."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-exercise check-in (at 20 min):</strong> "How many have the migration applied?" (Show of hands.) "How many see data on the page?" "If neither, let's do a quick group debug."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with just the model and DbContext. Get those compiling. Then try the migration command. If it fails, run <code>dotnet build</code> first. Then add the seed data. Finally the controller. One step at a time."</p>
      </blockquote>
      <hr />
      <h3>AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week marks a policy shift: AI is now your pair programmer. You can ask it to generate DbContext code, seed data, and migration help. But for every line AI generates, you must add a comment explaining what it does. This proves you understand it."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Allowed vs Not Allowed:</p>
        <table>
          <thead>
            <tr>
              <th>[OK] Allowed</th>
              <th>[NO] Not Allowed</th>
            </tr>
          </thead>
          <tbody><tr>
            <td>"Generate an EF Core DbContext for Product and Category"</td>
            <td>"Build my entire exercise"</td>
          </tr>
          <tr>
            <td>"Write seed data for 5 products" (then comment every line)</td>
            <td>"Do my migration for me"</td>
          </tr>
        </tbody></table>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Demonstrate the comment requirement. Show AI-generated code, then walk through adding line-by-line comments. "This line registers the DbContext. This line defines the connection string. This line creates a DbSet." The comments are the learning.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'pair programmer' now — it writes code, you explain it. If you can't explain what a line does, you didn't learn anything. The comments are your proof of understanding."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start by asking AI to explain concepts, not generate code. 'What does DbSet&lt;Product&gt; mean?' 'What does SaveChanges() do?' Build understanding first, then use AI for code."</p>
      </blockquote>
      <hr />
      <h3>Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the EF Core errors you WILL see this week. Let's go through them so you don't spend 20 minutes Googling."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+------------------------------------------+
        | "Cannot add migration"                   |
        | Run dotnet restore first.                |
        | Make sure the project builds.            |
        +------------------------------------------+
        +------------------------------------------+
        | "No database provider configured"        |
        | You forgot UseSqlServer() in Program.cs  |
        +------------------------------------------+
        +------------------------------------------+
        | "Invalid object name 'Products'"         |
        | You haven't run dotnet ef database update|
        +------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "'Cannot add migration' is like trying to save a file in a folder that doesn't exist. Run <code>dotnet restore</code> first — it's like refreshing your project's dependencies."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What does 'migrations out of sync' mean?"
        <strong>Short answer:</strong> Your code has migrations your database doesn't know about.
        <strong>Real answer:</strong> If a teammate adds a migration and you pull their code, your database is behind. Run <code>dotnet ef database update</code> to catch up. It's like <code>git pull</code> but for your database schema.
        <strong>The hidden question:</strong> "How do I avoid this?" -&gt; Always run migrations after pulling code from teammates.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The three things to check first: (1) Does the project build? (2) Did you call <code>UseSqlServer()</code>? (3) Did you run <code>dotnet ef database update</code>? Those fix 90% of EF Core errors this week."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End with one action item: "If you only remember one thing: <code>dotnet ef migrations add</code> creates the migration file. <code>dotnet ef database update</code> applies it. You need both."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. The key mental model is "DbSet = database-connected List." The #1 pitfall is forgetting to run migrations — emphasize <code>dotnet ef migrations add</code> followed by <code>dotnet ef database update</code> as a two-step process. Have students run these commands themselves, not just watch. The "aha" moment is seeing seeded data persist on the page after restarting the app.</p>
      <hr />
      <h2>Week 10: Relationships &amp; Data Display</h2>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (180 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Code Comparison</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>35 min</td>
          <td>Live Code (instructor + students type)</td>
        </tr>
        <tr>
          <td>Industry Reality</td>
          <td>10 min</td>
          <td>Lecture + Discussion</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Lab (solo or pairs)</td>
        </tr>
        <tr>
          <td>AI Integration</td>
          <td>10 min</td>
          <td>Demo + Prompt Walkthrough</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>5 min</td>
          <td>Overflow</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 10 strategy):</strong> This is the hardest EF Core week. Navigation properties, <code>.Include()</code>, the N+1 problem, and async all hit at once. The N+1 problem is invisible with small datasets — you MUST show them the difference between 1 query and 101 queries. Use the whiteboard to draw the JOIN. Students will get <code>NullReferenceException</code> constantly because they forget <code>.Include()</code> — normalize this error as a learning moment.</p>
      </blockquote>
      <hr />
      <h3>The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "One-to-many relationships. Sounds like something from your ex's Tinder settings. But in web apps, it's how products belong to categories, orders have items, and users write reviews. Without relationships, your data is just a bunch of lonely tables."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "Your Data Is Lonely"<br />Left: Two separate tables (Products, Categories) with no connecting line, labeled "No Relationships."<br />Right: Same tables connected by a line from CategoryId to Id, labeled "With Relationships."<br />Subtitle: "Today we connect the dots."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The Tinder joke gets a laugh — use it to transition into the real concept. Then immediately show a real-world example: Shopee product pages where each product shows its category.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Think about Shopee. Every product has a category. Every order has items. Every review has a user. None of these exist in isolation. Relationships are what make a database useful instead of just a bunch of spreadsheets."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you've ever seen a product page that shows the category name. That's a relationship working."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the term 'one-to-many' for a second. Think: one category has many products. One author has many books. That's it. We're just learning how to code that connection."</p>
      </blockquote>
      <hr />
      <h3>The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Spotify playlists. A Playlist has many Songs. A Song belongs to one Playlist. When you open a playlist, Spotify's gotta load 50 songs at once. Without navigation properties, they'd have to run 51 separate queries — one for the playlist, 50 for each song. That's the N+1 problem."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the N+1 problem visually:</p>
        <pre><code>BAD (N+1 queries):
        Query 1: SELECT * FROM Playlists          &lt;- 1 query
        Query 2: SELECT * FROM Songs WHERE PlaylistId = 1  &lt;- N queries
        Query 3: SELECT * FROM Songs WHERE PlaylistId = 2
        Query 4: SELECT * FROM Songs WHERE PlaylistId = 3
        ... (50 more)
      
        GOOD (1 query with JOIN):
        SELECT * FROM Playlists
        LEFT JOIN Songs ON Playlists.Id = Songs.PlaylistId  &lt;- 1 query
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The Spotify analogy is perfect for Filipino students — almost all use Spotify. Emphasize the key insight: <strong>without <code>.Include()</code>, navigation properties are null.</strong> This is the #1 source of errors this week.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "If you open a Spotify playlist with 50 songs and the app runs 51 queries — why is that bad? 10 seconds, go!" (Answer: Slow. Each query takes time. 51 queries = 51 round trips to the server.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like ordering from a menu. Bad way: order one item, wait, order another, wait, repeat 50 times. Good way: order everything at once. <code>.Include()</code> is ordering everything at once."</p>
      </blockquote>
      <hr />
      <h3>Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (8 min navigation properties -&gt; 8 min Include/Eager Loading -&gt; 5 min N+1 -&gt; 4 min async)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here's the entire relationships mental model: navigation properties connect tables, <code>.Include()</code> loads related data in one query, the N+1 problem is what happens when you don't use Include, and async keeps your app from freezing. Let's go through each."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the Category and Product models side by side. Highlight <code>List&lt;Product&gt;</code> in Category and <code>Category Category</code> in Product. Then reveal the foreign key <code>CategoryId</code> — this is the glue.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The most important concept: <strong>EF Core figures out relationships from naming conventions.</strong> <code>CategoryId</code> + <code>Category</code> navigation property = EF knows it's a foreign key. Emphasize: "Name your foreign key <code>&#123;ClassName&#125;Id</code> and EF does the rest." For <code>.Include()</code>, stress: "Without it, the navigation property is null. Always."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "If I query <code>db.Products.ToList()</code> — what is <code>product.Category</code> for each product?" (Pause. Answer: null. Because we didn't use <code>.Include()</code>.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Navigation properties are like following someone on Instagram. You have a link to their profile (the related data), but you don't automatically load their entire feed — you have to click (<code>.Include()</code>) to see it."<br /><strong>-&gt; Phone moment:</strong> "Think about how Facebook loads a post with comments. The post loads first, then comments load. That's eager loading — everything in one go."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why do I need both <code>CategoryId</code> and <code>Category Category</code>? Isn't one enough?"
        <strong>Short answer:</strong> <code>CategoryId</code> is the actual foreign key. <code>Category</code> is the navigation property for convenience.
        <strong>Real answer:</strong> You could have just <code>CategoryId</code> and manually query the category. But <code>Category</code> lets you write <code>product.Category.Name</code> instead of a separate query. EF Core uses both to understand the relationship.
        <strong>The hidden question:</strong> "Can I skip the navigation property?" -&gt; Yes, but your code will be uglier.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What's the difference between async and sync for database calls?"
        <strong>Short answer:</strong> Async doesn't block the thread while waiting for the database.
        <strong>Real answer:</strong> In a web app, each request gets a thread. If you block it waiting for the database, that thread can't handle other requests. Async frees the thread to do other work. With 100 concurrent users, async matters a lot.
        <strong>The hidden question:</strong> "Is it that important?" -&gt; For a class project, no. For production, yes.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget async for now. Focus on this: (1) Define navigation properties in your models. (2) Use <code>.Include()</code> when you need related data. (3) Without Include, navigation properties are null. That's the core."</p>
      </blockquote>
      <hr />
      <h3>Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 35 min (10 min models + relationships -&gt; 10 min controller with Include -&gt; 10 min view with nested loops -&gt; 5 min SQL comparison)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build a store that displays categories with their products. Watch how <code>.Include()</code> loads everything in one query, and how the view loops through categories and then products inside each category."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the StoreController first — highlight <code>.Include(c =&gt; c.Products)</code>. Then show the View — highlight the nested <code>@foreach</code> loops. Finally show the generated SQL — one LEFT JOIN query.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type this live.</strong> After typing the controller, run the app and show the output. Then open the SQL Server output window and show the generated query. Say: "See? One query. Not N+1. EF Core generated a LEFT JOIN for us." This visual proof is powerful.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the query flow:</p>
        <pre><code>_db.Categories.Include(c =&gt; c.Products)
        v
        SELECT c.*, p.*
        FROM Categories c
        LEFT JOIN Products p ON c.Id = p.CategoryId
        v
        EF maps results back to:
        Category &#123; Products: [Product, Product, ...] &#125;
        Category &#123; Products: [Product, ...] &#125;
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Type-along:</strong> "Type the controller with me. Notice the <code>.Include()</code>. Then type the view — nested foreach loops. Run it. See categories with their products grouped. That's relationships working."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does the view use <code>category.Products.Count</code> — isn't that another query?"
        <strong>Short answer:</strong> No — because we used <code>.Include()</code>, the products are already loaded.
        <strong>Real answer:</strong> <code>.Include(c =&gt; c.Products)</code> loads all products for all categories in one query. <code>category.Products.Count</code> just counts the in-memory list. Zero additional database calls.
        <strong>The hidden question:</strong> "How do I know it's not making extra queries?" -&gt; Check the SQL output window. You'll see only one query.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Let's do the simplest relationship first: just the controller with <code>.Include()</code>. Get that working. Then add the view. Don't try to build everything at once."</p>
      </blockquote>
      <hr />
      <h3>The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "The N+1 problem takes down production apps. It works fine with 10 categories — 11 queries, 20ms. Then crashes with 10,000 categories — 10,001 queries, 30 seconds. Companies have pushed hotfixes at 2 AM for this exact issue. Learning <code>.Include()</code> now saves you from that 2 AM call."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> A timeline visualization: "10 categories = 20ms [OK]" -&gt; "100 categories = 200ms [OK]" -&gt; "10,000 categories = 30 seconds [NO]" -&gt; "With Include: 10,000 categories = 50ms [OK]"</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. The 2 AM hotfix story is memorable — students will remember it when they write their first <code>.Include()</code>.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you have had an app that was fast at first but got slower as you added more data?" (Some hands.) "That might be the N+1 problem. Today you learned how to fix it."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to understand performance tuning today. Just remember: use <code>.Include()</code> when you need related data. That prevents the N+1 problem. That's enough for now."</p>
      </blockquote>
      <hr />
      <h3>Exercise: Data-Driven Page with Related Data</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min coding -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Build an author-book system. Authors have books. Display authors with their book counts. Show author details with all their books. You have 40 minutes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> Create models: <code>Author</code> (Id, Name, Bio) and <code>Book</code> (Id, Title, Price, Genre, AuthorId, Author)</li>
          <li><input disabled="" type="checkbox" /> Create <code>AppDbContext</code> with DbSets</li>
          <li><input disabled="" type="checkbox" /> Seed data: 3 authors, 3-5 books each</li>
          <li><input disabled="" type="checkbox" /> Create <code>AuthorsController</code> with <code>Index</code> and <code>Details/&#123;id&#125;</code></li>
          <li><input disabled="" type="checkbox" /> <code>Index</code> — list all authors with book counts</li>
          <li><input disabled="" type="checkbox" /> <code>Details</code> — show author info + all their books (use <code>.Include()</code>)</li>
          <li><input disabled="" type="checkbox" /> Create views that display related data</li>
          <li><input disabled="" type="checkbox" /> Stretch: "Books by Genre" page with <code>.Where()</code></li>
          <li><input disabled="" type="checkbox" /> Stretch: async everywhere</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Circulate during the first 15 minutes — students will get stuck on the model relationships and <code>.Include()</code> syntax. The "aha" moment is when they see the book count on the author listing page.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "One person builds the models and seed data, the other builds the controller and views. Then combine and test together."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-exercise check-in (at 20 min):</strong> "How many have the seed data working?" (Show of hands.) "How many see book counts on the author page?" "If neither, let's do a quick group debug."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with just the models. Get Author and Book with the right properties. Then add the DbSet. Then seed data. Then the controller with <code>.Include()</code>. One step at a time."</p>
      </blockquote>
      <hr />
      <h3>AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week, AI can generate Include statements, navigation properties, and LINQ queries. But you must comment every generated line. Show me you understand what <code>.Include(a =&gt; a.Books)</code> actually does."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Prompt template:
        "I have Author and Book models. Generate the Include query to show an author with all their books. Here are my models [paste]." Then comment each line.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Demonstrate asking AI for an Include query, then walk through adding comments. "This line starts the query on the Authors table. This line tells EF to also load the Books for each author. This line executes the query and returns a list."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'LINQ tutor' — it generates the query, you explain it. If you can't explain why <code>.Include()</code> is there, you didn't learn."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start by asking AI to explain concepts: 'What does .Include() do?' 'What's the N+1 problem?' Build understanding first, then use AI for code."</p>
      </blockquote>
      <hr />
      <h3>Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the relationship errors you WILL see this week. Most of them are 'forgot Include' or 'forgot await.'"</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+------------------------------------------+
        | NullReferenceException on                |
        | product.Category.Name                    |
        | You forgot .Include(p =&gt; p.Category)     |
        +------------------------------------------+
        +------------------------------------------+
        | "A possible object cycle was detected"   |
        | JSON loops: Category-&gt;Products-&gt;Category   |
        | Fix: configure JSON to ignore cycles     |
        +------------------------------------------+
        +------------------------------------------+
        | Async method returns Task, not data      |
        | You forgot await                         |
        +------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "NullReferenceException on a navigation property is like clicking an Instagram link that goes nowhere. The link exists (the property), but you didn't load the page (.Include())."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does my app work fine with 10 records but feel slow with 100?"
        <strong>Short answer:</strong> You might have the N+1 problem.
        <strong>Real answer:</strong> With 10 records, N+1 = 11 queries — fast enough to not notice. With 100 records, N+1 = 101 queries — noticeable lag. Check the SQL output window to see how many queries are running.
        <strong>The hidden question:</strong> "How do I check?" -&gt; Look at the Visual Studio Output window while the app runs. Count the SELECT statements.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The two things to check first: (1) Are you using <code>.Include()</code> for every navigation property you access? (2) Are you using <code>await</code> on every async method? Those fix 90% of this week's errors."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End with one action item: "If you only remember one thing: if you access a navigation property, you MUST use <code>.Include()</code>. Without it, it's null."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. The N+1 problem is the core concept — show the visual difference between 1 query and N+1 queries. The #1 error is <code>NullReferenceException</code> from missing <code>.Include()</code> — normalize it as the expected learning curve. Use the Spotify playlist analogy repeatedly. Async is secondary; focus on relationships first.</p>
      <hr />
      <h2>Week 11: Consuming APIs with HttpClient</h2>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (180 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Live API Demo</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>35 min</td>
          <td>Live Code (instructor + students type)</td>
        </tr>
        <tr>
          <td>Industry Reality</td>
          <td>10 min</td>
          <td>Lecture + Discussion</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Lab (solo or pairs)</td>
        </tr>
        <tr>
          <td>AI Integration</td>
          <td>10 min</td>
          <td>Demo + Prompt Walkthrough</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>5 min</td>
          <td>Overflow</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 11 strategy):</strong> This week is fun — students finally see their apps talk to the outside world. But JSON deserialization will frustrate them. The mismatch between snake_case JSON and PascalCase C# properties is the #1 error. Have them paste real API responses into json2csharp.com or use AI to generate models. Also: <code>IHttpClientFactory</code> vs <code>new HttpClient()</code> is a conceptual leap — use the socket exhaustion demo to make it concrete.</p>
      </blockquote>
      <hr />
      <h3>The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Your app is lonely. It's been talking to its own database all semester. Time to make friends. Your app can talk to other apps — get weather data, GitHub stats, cat pictures. Your app is about to get a lot more interesting."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "Your App Is About to Get a Lot More Interesting"<br />Three screenshots side by side: a weather widget, a GitHub profile card, and a Bitcoin price ticker.<br />Subtitle: "All fetched from external APIs. All in C#. All today."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This hook should feel exciting — it's the week where apps stop being exercises and start being products. Show a live demo if possible: hit an API from your laptop and display the result in 30 seconds.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Every app you use is just a fancy API consumer. TikTok fetches videos from an API. GCash fetches your balance from an API. Shopee fetches product listings from an API. Today you learn how to do the same thing."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you've ever wondered how apps get real-time data like weather or stock prices. It's all APIs."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "An API is just a URL that returns data instead of a webpage. You visit it, it gives you JSON (a data format), and your app uses that data. That's the entire concept."</p>
      </blockquote>
      <hr />
      <h3>The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Consuming an API is like ordering food delivery. Your app calls a restaurant (the API), tells them what it wants (the request), they cook it (process), and deliver it (response). If the restaurant is closed, you get an error (500). If you asked for something not on the menu, they say 'we don't have that' (404). If everything works, you eat (display data)."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the food delivery analogy:</p>
        <pre><code>Your App (Customer)
        v "I want weather data for Manila"
        HttpClient (Delivery rider)
        v GET request to API URL
        External API (Restaurant)
        v Cooks the data
        JSON Response (Food delivered)
        v Deserialize into C# objects
        Your App displays it (You eat)
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The food delivery analogy works for Filipino students — everyone uses Foodpanda or GrabFood. Emphasize the key insight: <strong>your app is the customer, not the restaurant.</strong> It's consuming, not providing.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "If your app is ordering from GrabFood, what's the request? What's the response? What's a 404? 10 seconds, go!" (Request = order, Response = food, 404 = item not on menu.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like asking Google a question. You type a query (request), Google searches (process), and shows results (response). APIs work the same way, just with data instead of search results."</p>
      </blockquote>
      <hr />
      <h3>Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (5 min what is an API -&gt; 8 min IHttpClientFactory -&gt; 7 min JSON serialization -&gt; 5 min error handling)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here's the entire API consumption mental model: APIs return JSON, <code>IHttpClientFactory</code> makes HTTP calls safely, JSON serialization turns JSON into C# objects, and error handling keeps your app from crashing when APIs fail. Let's go through each."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the weather API URL first, then the raw JSON response, then the C# model that matches it. Reveal each step: raw JSON -&gt; <code>[JsonPropertyName]</code> mapping -&gt; C# properties.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The most important concept: <strong><code>IHttpClientFactory</code> over <code>new HttpClient()</code>.</strong> Socket exhaustion is real and hard to debug. Show them the one-line difference: <code>builder.Services.AddHttpClient()</code> vs <code>new HttpClient()</code>. For JSON serialization, emphasize: "Property names must match JSON field names. Use <code>[JsonPropertyName]</code> when they don't."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "What happens if the API is down when your app tries to fetch data?" (Answer: It crashes — unless you handle the error. That's why we need try-catch and status code checks.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "JSON serialization is like translating from English to Tagalog. The API speaks English (snake_case JSON). Your C# code speaks Tagalog (PascalCase). <code>[JsonPropertyName]</code> is the dictionary that maps between them."<br /><strong>-&gt; Phone moment:</strong> "Open any API URL in your browser. See that JSON text? That's what your app will receive. Your job is to turn that into C# objects."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why can't I just use <code>new HttpClient()</code>? It works."
        <strong>Short answer:</strong> It works until it doesn't — then your app crashes with socket exhaustion.
        <strong>Real answer:</strong> <code>HttpClient</code> holds onto system sockets even after you dispose it. Creating many instances exhausts available sockets. <code>IHttpClientFactory</code> manages a pool of reusable connections. It's the difference between buying a new phone for every call vs using the same phone.
        <strong>The hidden question:</strong> "Is this really a problem?" -&gt; In development with 5 requests, no. In production with 10,000 requests per minute, yes.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What if the JSON structure changes?"
        <strong>Short answer:</strong> Your deserialization breaks.
        <strong>Real answer:</strong> That's why you need error handling. If the API changes, <code>ReadFromJsonAsync&lt;T&gt;()</code> returns null or throws. Catch it, log it, and show a graceful error message to the user instead of a crash.
        <strong>The hidden question:</strong> "How do I protect against this?" -&gt; Always check for null after deserialization. Always have a fallback.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the technical terms. The flow is: (1) Create an HttpClient from the factory. (2) Call the API URL. (3) Get JSON back. (4) Turn JSON into C# objects. (5) Display the data. That's it."</p>
      </blockquote>
      <hr />
      <h3>Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 35 min (5 min Program.cs setup -&gt; 10 min single API call -&gt; 10 min JSON models -&gt; 10 min parallel dashboard)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build a dashboard that fetches from three APIs at the same time. First a simple single API call, then we'll add JSON models, then we'll do all three in parallel with <code>Task.WhenAll</code>."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the single API call first (WeatherController). Then reveal the JSON model classes with <code>[JsonPropertyName]</code>. Finally show the parallel DashboardController with <code>Task.WhenAll</code>.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type this live.</strong> After the single API call, run it and show the result. Then add the JSON model and show how <code>GetFromJsonAsync&lt;T&gt;()</code> replaces manual deserialization. For the parallel dashboard, emphasize: "Three calls at the same time = faster than three calls one after another."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the parallel execution timeline:</p>
        <pre><code>Sequential (slow):
        [---Weather 500ms---][---GitHub 500ms---][---News 500ms---] = 1500ms
      
        Parallel with Task.WhenAll (fast):
        [---Weather 500ms---]
        [---GitHub  500ms---]  = 500ms (all at once)
        [---News    500ms---]
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Type-along:</strong> "Type the WeatherController with me. Register <code>AddHttpClient()</code> in Program.cs. Run it. See the weather data appear. Now add the GitHub call. Now do both in parallel. Watch the speed difference."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does GitHub API require a User-Agent header?"
        <strong>Short answer:</strong> To identify who's making the request.
        <strong>Real answer:</strong> Without a User-Agent, GitHub can't distinguish between legitimate apps and bots. They block unidentified requests to prevent abuse. It's like showing your ID at a building entrance.
        <strong>The hidden question:</strong> "Do all APIs require this?" -&gt; Not all, but many do. Always check the API documentation.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with just one API call. Get the weather API working. See the JSON in your browser. Then create the C# model. Then deserialize. Don't try to build the parallel dashboard first."</p>
      </blockquote>
      <hr />
      <h3>The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "No web app is an island. Modern apps integrate 5-15 external APIs on average: payment gateways, maps, notifications, social login, weather, shipping, email. If you can't consume an API, you can't build real products. Every SaaS company has an integration team that does exactly this."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> A real app architecture diagram showing: Your App -&gt; Stripe (payments), Google Maps (location), SendGrid (email), OpenWeather (weather), GitHub (auth). Label: "One app, five APIs."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. Connect it to their capstone: "Your capstone will need at least one external API. This week teaches you how."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you have used GCash? It integrates with banks, telecom providers, and merchants — all through APIs. That's the scale of API integration in the real world."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to understand enterprise architecture today. Just know: APIs let your app use other services. That's a superpower. Learn it now, use it forever."</p>
      </blockquote>
      <hr />
      <h3>Exercise: API Dashboard</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min coding -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Build a dashboard with three API integrations. Weather, GitHub, and one you choose. Handle errors gracefully — if one API is down, the others still work. You have 40 minutes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> Register <code>IHttpClientFactory</code> in Program.cs</li>
          <li><input disabled="" type="checkbox" /> Fetch Open-Meteo Weather API (free, no key)</li>
          <li><input disabled="" type="checkbox" /> Fetch GitHub User API (free, needs User-Agent)</li>
          <li><input disabled="" type="checkbox" /> Choose a third API (CoinDesk, Dog Facts, Jikan Anime)</li>
          <li><input disabled="" type="checkbox" /> Create <code>DashboardViewModel</code> to hold all three data sets</li>
          <li><input disabled="" type="checkbox" /> Handle errors: if one API fails, others still display</li>
          <li><input disabled="" type="checkbox" /> Display all data in a single view</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Circulate during the first 15 minutes — JSON model creation is where students get stuck. Encourage them to paste the API response into a JSON-to-C# tool or ask AI to generate the model. The "aha" moment is when they see live external data on their page.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "One person handles the weather and GitHub APIs, the other handles the third API. Then combine into one dashboard view."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-exercise check-in (at 20 min):</strong> "How many have the weather API working?" (Show of hands.) "How many have all three working?" "If you're stuck on JSON models, paste the API response into json2csharp.com or ask AI."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with just the weather API. It's the simplest — no key needed, straightforward JSON. Get that working. Then add GitHub. Then the third one. One API at a time."</p>
      </blockquote>
      <hr />
      <h3>AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week, AI is your JSON model generator. Paste an API response and ask AI to create the C# model. But comment every generated line — show me you understand what <code>[JsonPropertyName]</code> does."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Prompt template:
        "I want to call this API [URL]. Generate the C# model and deserialization code. Here's the JSON response [paste]."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Demonstrate the workflow: (1) Visit API URL in browser, (2) Copy JSON response, (3) Paste into AI prompt, (4) Get C# model, (5) Add comments to every property. This is a real-world skill — developers do this daily.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'JSON translator' — it turns API responses into C# models. But if you can't explain why <code>[JsonPropertyName('temperature')]</code> maps to <code>public double Temperature</code>, you didn't learn."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start by asking AI to explain: 'What is JSON deserialization?' 'How does GetFromJsonAsync work?' Build understanding first, then use AI for model generation."</p>
      </blockquote>
      <hr />
      <h3>Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the API errors you WILL see this week. Most are JSON mismatches or missing headers."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+------------------------------------------+
        | 403 Forbidden on GitHub API              |
        | You didn't set User-Agent header         |
        | Fix: client.DefaultRequestHeaders.Add    |
        | ("User-Agent", "MyApp")                  |
        +------------------------------------------+
        +------------------------------------------+
        | JSON deserialization returns null        |
        | Property names don't match JSON fields   |
        | Fix: use [JsonPropertyName("field_name")]|
        +------------------------------------------+
        +------------------------------------------+
        | Socket exhaustion                        |
        | You used new HttpClient() in a loop      |
        | Fix: use IHttpClientFactory              |
        +------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "403 on GitHub API is like trying to enter a club without ID. The bouncer (GitHub) says 'I don't know who you are.' Fix: show your ID (User-Agent header)."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does my JSON model have all null values?"
        <strong>Short answer:</strong> Property names don't match the JSON field names.
        <strong>Real answer:</strong> JSON uses <code>snake_case</code> (e.g., <code>current_weather</code>), C# uses <code>PascalCase</code> (e.g., <code>CurrentWeather</code>). Without <code>[JsonPropertyName("current_weather")]</code>, the deserializer can't map them.
        <strong>The hidden question:</strong> "How do I check?" -&gt; Print the raw JSON string before deserializing. Compare it to your model property names.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The three things to check: (1) Did you register <code>AddHttpClient()</code> in Program.cs? (2) Does your C# model match the JSON structure? (3) Are you checking <code>IsSuccessStatusCode</code> before deserializing? Those fix 90% of API errors."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End with one action item: "If you only remember one thing: always use <code>IHttpClientFactory</code>, never <code>new HttpClient()</code>. That prevents socket exhaustion."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. The "aha" moment is seeing live external data on the page — make sure every student gets at least one API working. The #1 error is JSON deserialization returning null due to property name mismatches — teach <code>[JsonPropertyName]</code> early. <code>IHttpClientFactory</code> is non-negotiable — drill this in. Use the parallel vs sequential timeline on the whiteboard to show why <code>Task.WhenAll</code> matters.</p>
      <hr />
      <h2>Week 12: Mini-Capstone Checkpoint</h2>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (180 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Architecture Diagram</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>35 min</td>
          <td>Live Code (instructor + students type)</td>
        </tr>
        <tr>
          <td>Industry Reality</td>
          <td>10 min</td>
          <td>Lecture + Discussion</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>60 min</td>
          <td>Lab (mini-capstone build session)</td>
        </tr>
        <tr>
          <td>AI Integration</td>
          <td>10 min</td>
          <td>Demo + Prompt Walkthrough</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>10 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>5 min</td>
          <td>Overflow</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 12 strategy):</strong> This is not a teaching week — it's a building week. Students should spend most of their time coding, not listening. Keep lectures short. The service layer is the new concept — everything else is review. Walk around constantly. This week reveals who actually learned the material and who has been coasting. Be supportive but honest: "If you can't wire up DI by now, you need to review Weeks 2 and 9."</p>
      </blockquote>
      <hr />
      <h3>The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Everything you've learned this semester — MVC, routing, models, validation, EF Core, APIs — it all comes together this week. You're not writing exercises anymore. You're building a real app. Scared? Good. That means it matters."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "This Is Where It All Comes Together"<br />A puzzle visualization: pieces labeled "MVC," "Routing," "EF Core," "APIs," "Validation" clicking together into a complete app screenshot.<br />Subtitle: "Week 12: The pieces connect."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Deliver this with energy but also warmth. Some students are genuinely anxious about building something from scratch. Acknowledge it: "It's okay to be nervous. You have all the pieces. Today we just put them together."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "This is like the final boss level. You've been grinding XP all semester — leveling up your MVC skills, unlocking EF Core, mastering APIs. Now you face the boss: build a real app. You have all the skills. You just need to combine them."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you're nervous about building something from scratch. Good. That means you care. Now let's do it."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Don't panic. This isn't a test. It's a checkpoint. You'll build something small but complete. If you can do a controller, a model, a view, and a database query — you can do this."</p>
      </blockquote>
      <hr />
      <h3>The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "You've been training for a sport all semester. Week 1 you learned to hold the racket. Week 5 you learned to serve. Week 9 you learned the rules. This week you play your first real match. You'll make mistakes. You'll drop the ball. But you'll also see how everything connects, and that's the point."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the full architecture diagram:</p>
        <pre><code>Browser (User visits /tasks)
        v
        Controller (TaskController.Index)
        v                    v
        Service (ITaskService)   Service (IWeatherService)
        v                    v
        DbContext (Database)     HttpClient (External API)
        v                    v
        Task data                Weather data
        v                    v
        ViewModel (combined)
        v
        View (HTML rendered)
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This diagram is the most important visual of the entire term. Draw it slowly. Point to each layer. Say: "This is what a real .NET app looks like. Not a toy. A real app." Leave it on the board for the entire session.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "Point to the diagram. If the database is down, which layer breaks first? If the API is slow, which layer feels it? 10 seconds, go!" (Database down -&gt; Service layer. API slow -&gt; Service layer -&gt; Controller waits.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like a restaurant chain. The customer (browser) talks to the manager (controller). The manager tells the kitchen (service) what to make. The kitchen gets ingredients from the fridge (database) and from suppliers (APIs). Each layer has one job."</p>
      </blockquote>
      <hr />
      <h3>Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (10 min service layer -&gt; 8 min separation of concerns -&gt; 7 min integration patterns)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "The service layer is the new concept this week. It's a class that sits between your controller and your data. Controllers handle HTTP. Services handle business logic. This separation is what separates toy apps from production apps."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the controller vs service comparison side by side. Left: a fat controller doing database work, validation, and API calls (labeled "Bad"). Right: a thin controller delegating to services (labeled "Good").</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The service layer is a conceptual leap. Students will ask "why not just put it in the controller?" Answer: "You can. But when your controller is 200 lines long and you need the same logic in another controller, you'll wish you had a service." Show them a real-world example: a UserController and an AdminController both needing the same user lookup logic.</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "If I need to get all tasks in two different controllers — do I copy-paste the database query, or do I put it in a service?" (Answer: Service. DRY — Don't Repeat Yourself.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "The service layer is like having a group chat for your app's logic. Instead of every controller doing its own thing, they all ask the service. The service is the group admin — it knows the rules and coordinates everything."<br /><strong>-&gt; Phone moment:</strong> "Think about how GCash works. The app (controller) doesn't talk to the bank directly. It goes through GCash's backend service. That service handles the logic, security, and database. Same pattern."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Do I need a service for every model?"
        <strong>Short answer:</strong> No. Start with services for complex logic.
        <strong>Real answer:</strong> Simple CRUD (create, read, update, delete) can stay in controllers. Services are for when you have business rules, multiple data sources, or shared logic. Don't over-engineer a class project.
        <strong>The hidden question:</strong> "How do I know when it's complex enough?" -&gt; If the controller method is more than 15 lines, consider a service.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What's the difference between a service and a repository?"
        <strong>Short answer:</strong> A repository is just data access. A service is business logic + data access.
        <strong>Real answer:</strong> A repository wraps DbContext operations (GetAll, GetById, Add, Update, Delete). A service uses repositories (or DbContext directly) plus adds business rules: "A task can only be completed if it's not overdue." For this course, skip the repository layer — services talking directly to DbContext is fine.
        <strong>The hidden question:</strong> "Which pattern should I use for my capstone?" -&gt; Service + DbContext directly. Keep it simple.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the architecture patterns for a second. The service layer is just a class that does the real work. The controller asks the service to do things. That's it. Start there. Refine later."</p>
      </blockquote>
      <hr />
      <h3>Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 35 min (5 min model -&gt; 10 min service interface + implementation -&gt; 10 min controller with DI -&gt; 10 min wiring + test)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build a Task Manager with a weather feature. Watch how the controller delegates to two services — one for database tasks, one for API weather data. Everything connects through dependency injection."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the TaskItem model first. Then the ITaskService interface. Then the TaskService implementation. Then the controller. Finally Program.cs registration. Reveal one piece at a time.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type this live.</strong> After typing the service, pause: "This is where the real work happens — not in the controller." After typing the controller, emphasize: "Look how thin this controller is. It just delegates. That's the goal." In Program.cs, highlight: "This one line wires everything together: <code>AddScoped&lt;ITaskService, TaskService&gt;()</code>."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Trace the full request flow:</p>
        <pre><code>GET /task
        v
        TaskController.Index()
        v
        _taskService.GetAllAsync() -&gt; db.Tasks.Include(t =&gt; t.Category).ToListAsync()
        _weatherService.GetCurrentWeatherAsync() -&gt; HttpClient -&gt; API -&gt; JSON -&gt; C# object
        v
        Combine into TaskDashboardViewModel
        v
        return View(model) -&gt; renders HTML
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Type-along:</strong> "Build the service with me. Interface first, then implementation. Then the controller. Then wire it up in Program.cs. Run it. See tasks and weather on the same page. That's integration."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why use an interface for the service? Why not just the class?"
        <strong>Short answer:</strong> Interfaces make your code testable and swappable.
        <strong>Real answer:</strong> With an interface, you can swap implementations (e.g., a fake service for testing). DI containers register interfaces to implementations. It's the same DI pattern from Week 2 — now applied to services.
        <strong>The hidden question:</strong> "Is this overkill for a class project?" -&gt; Maybe. But it's the industry standard. Practice it now.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with just the service and controller for tasks. Skip the weather API for now. Get the database part working. Then add the API service. One layer at a time."</p>
      </blockquote>
      <hr />
      <h3>The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This is the architecture used by 90% of production .NET apps. Controllers that just delegate. Services that contain real logic. DbContext for data access. ViewModels for display. When you interview for a job, you'll describe exactly this pattern. When you build your capstone, you'll use exactly this pattern."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> A real company's architecture diagram (simplified). Label each layer: "This is what Microsoft, Accenture, and local .NET shops use. Same pattern. Different scale."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. Connect it directly to their capstone and job interviews: "When an interviewer asks 'describe your project architecture,' you'll say: controllers delegate to services, services use EF Core for data and HttpClient for APIs. That answer gets you hired."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you want to work at a company that builds real software, not just class projects?" (Most hands.) "This architecture is how real software is built. Learning it now gives you a head start."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to understand enterprise architecture today. Just know: thin controllers, fat services. That's the pattern. Everything else builds on it."</p>
      </blockquote>
      <hr />
      <h3>Exercise: Integrated App</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 60 min total (5 min setup -&gt; 50 min build -&gt; 5 min quick share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Choose one: Task Manager with Weather, or Book Blog with GitHub Stats. Build it from scratch. Use everything you've learned. You have 50 minutes. I'll be walking around helping."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise requirements checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> ASP.NET Core MVC project</li>
          <li><input disabled="" type="checkbox" /> EF Core with SQL Server (at least 2 related tables)</li>
          <li><input disabled="" type="checkbox" /> At least one external API integration</li>
          <li><input disabled="" type="checkbox" /> Service layer (interface + implementation)</li>
          <li><input disabled="" type="checkbox" /> DI wired up in <code>Program.cs</code></li>
          <li><input disabled="" type="checkbox" /> Multiple views with layout</li>
          <li><input disabled="" type="checkbox" /> Form validation on at least one page</li>
          <li><input disabled="" type="checkbox" /> Architecture diagram (text is fine)</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This is a build session, not a lecture. Walk around constantly. The first 15 minutes will be setup-heavy — help students scaffold the project, create folders, and register services. The "aha" moment is when they see data from both the database and an API on the same page.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Work in pairs or solo:</strong> "This is your mini-capstone. Treat it like a real project. Plan first, then code. Draw your architecture diagram before you write a single line."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-exercise check-in (at 25 min):</strong> "How many have the database working?" (Show of hands.) "How many have the API working?" "How many have both on the same page?" "If you're stuck, raise your hand — I'll come over."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with the database part. Get EF Core working with one model. Then add the second model with a relationship. Then add the service layer. Then the API. Then combine. Don't try to build everything at once."</p>
      </blockquote>
      <hr />
      <h3>AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week, AI is your full pair programmer. Architecture suggestions, service layer code, integration patterns — all allowed. But comment every AI-generated line. And be ready to explain your choices."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Prompt template:
        "Here's my architecture plan [describe]. Generate the service layer code for feature X. I need an interface and implementation."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Demonstrate a full AI-assisted workflow: (1) Describe the architecture to AI, (2) Get service code, (3) Add comments, (4) Wire up DI, (5) Test. Emphasize: "AI generates the code, but YOU understand it. That's the difference between using AI and being used by it."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'senior developer' this week — it suggests architecture, writes boilerplate, and catches mistakes. But you're still the one who ships the code. If you can't explain it, you can't defend it."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start by asking AI to help you plan: 'I want to build a Task Manager with weather. What folders and files do I need?' Then ask for code. Planning first prevents chaos."</p>
      </blockquote>
      <hr />
      <h3>Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min common errors -&gt; 5 min group debug)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the integration errors you'll see this week. Most are DI registration issues or circular dependencies."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+------------------------------------------+
        | "Unable to resolve service for type      |
        | 'ITaskService'"                          |
        | You forgot AddScoped in Program.cs       |
        +------------------------------------------+
        +------------------------------------------+
        | Circular dependency detected             |
        | ServiceA -&gt; ServiceB -&gt; ServiceA           |
        | Fix: break the cycle with an interface   |
        +------------------------------------------+
        +------------------------------------------+
        | API call in a foreach loop               |
        | Slow. Use Task.WhenAll instead           |
        +------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "'Unable to resolve service' is like calling someone who didn't save your number. You're trying to use a service that was never registered. Fix: <code>AddScoped&lt;ITaskService, TaskService&gt;()</code> in Program.cs."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "My app works but it's really slow when loading the page."
        <strong>Short answer:</strong> You might be making API calls sequentially or in a loop.
        <strong>Real answer:</strong> If you call APIs one after another, each one waits for the previous. Use <code>Task.WhenAll</code> to call them in parallel. Also check: are you using <code>.Include()</code> for database queries? Without it, you might have the N+1 problem.
        <strong>The hidden question:</strong> "How do I check?" -&gt; Add <code>Console.WriteLine</code> before and after each API call to see the timing.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The two things to check first: (1) Is every service registered in Program.cs? (2) Does your controller constructor match the registered services? Those fix 90% of integration errors."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End with one action item: "If you only remember one thing: every service you use in a constructor MUST be registered in Program.cs with <code>AddScoped&lt;TInterface, TImplementation&gt;()</code>."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. This is a build week — keep lectures short, walk around constantly. The service layer is the new concept — everything else is review from Weeks 2-11. The architecture diagram on the whiteboard should stay up the entire session. The #1 error is unregistered services — drill <code>AddScoped&lt;TInterface, TImplementation&gt;()</code>. Be supportive: students are nervous about building from scratch. Celebrate small wins: "Your first API call worked? That's huge."</p>
      <hr />
      <h2>TERM 4: FINALS — User Interaction + Security + Capstone</h2>
      <hr />
      <h2>Week 13: Authentication &amp; Authorization</h2>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (180 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Code Walkthrough</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>35 min</td>
          <td>Live Code (instructor + students type)</td>
        </tr>
        <tr>
          <td>Industry Reality</td>
          <td>10 min</td>
          <td>Lecture + Discussion</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Lab (solo or pairs)</td>
        </tr>
        <tr>
          <td>AI Integration</td>
          <td>10 min</td>
          <td>Demo + Prompt Walkthrough</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>5 min</td>
          <td>Overflow</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 13 strategy):</strong> This is the first week students deal with user identity — a conceptually heavy shift from "data in tables" to "people with accounts." The scaffolding commands will feel magical but confusing. Make them type every command themselves. The critical pipeline order (<code>UseAuthentication</code> before <code>UseAuthorization</code>) is the #1 error — write it on the board and leave it there.</p>
      </blockquote>
      <hr />
      <h3>The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "That 'Login with Google' button isn't magic. It's a session cookie. And yes, you're going to build the entire login system from scratch. Well, ASP.NET Core Identity does most of the work — but you'll understand what it's doing. If you can't log in, you can't post. If you can't post, what's even the point?"</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "Who Are You?"<br />Left: A login screen from a familiar app (Facebook, GCash, or Canvas).<br />Right: The same app's dashboard after login, with the user's name visible.<br />Subtitle: "Today you build the gate between these two screens."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This hook should feel urgent — authentication is the feature that separates toy apps from real products. Ask: "How many of you logged into something today?" (All hands.) "Every single one of those was built by someone who learned exactly what we're learning today."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Every app you use has a bouncer at the door. That bouncer checks your ID, gives you a wristband, and decides which rooms you can enter. Today you become the bouncer."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you've ever been locked out of an account because you forgot your password. Today you'll learn how that lock works."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Don't worry if this feels abstract. Authentication is just: prove who you are, get a cookie, show the cookie on every page. That's the entire concept. We're just learning the code that makes it happen."</p>
      </blockquote>
      <hr />
      <h3>The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Authentication is a VIP wristband at a club. You show your ID at the front desk — that's registration. They check it, give you a wristband — that's your session cookie. Now the bouncer looks at your wristband and lets you in — that's <code>[Authorize]</code>. Different wristband colors mean different access: green for regular, gold for VIP, black for staff. And at closing time, the wristband expires — that's session timeout."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the club analogy:</p>
        <pre><code>Front Desk (Register) -&gt; Wristband (Cookie) -&gt; Bouncer ([Authorize])
        v
        Green -&gt; Main floor (regular user)
        Gold  -&gt; VIP area (premium)
        Black -&gt; Back office (admin)
      </code></pre>
      <p>Below: "Register -&gt; Cookie -&gt; Authorize. That's the entire auth flow."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The club analogy works well for Filipino students — many have experienced wristband-based venues. Emphasize the key insight: <strong>the cookie IS the wristband.</strong> The server doesn't remember you — it checks the cookie on every request. This connects back to Week 3's statelessness.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "If the wristband is your cookie, what happens when you close your browser? Does the wristband disappear? 10 seconds, go!" (Answer: Depends — if it's a session cookie, yes. If "remember me," it persists.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like GCash. You log in once, and the app remembers you for a while. That 'remembering' is a cookie. When you log out, the cookie is deleted. Next time you open GCash, you need to log in again."</p>
      </blockquote>
      <hr />
      <h3>Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (8 min auth vs authz -&gt; 10 min Identity setup -&gt; 7 min protecting routes)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here's the distinction you MUST know: authentication is 'who are you?' and authorization is 'what are you allowed to do?' You can be authenticated — I know your name — but not authorized — you can't access the admin panel. ASP.NET Core Identity handles both, and it does the hard stuff for you: password hashing, cookie management, session handling."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the <code>AddDefaultIdentity</code> configuration one option at a time. Highlight <code>RequireConfirmedAccount = false</code> — explain why we disable it for class projects. Then show <code>RequireDigit</code> and <code>RequiredLength</code> — these are the password rules students will encounter.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The most important concept: <strong><code>IdentityUser</code> is just a model with special properties.</strong> Students already know models — build on that. For <code>SignInManager</code> vs <code>UserManager</code>, emphasize: "SignInManager handles sessions. UserManager handles user data. One logs you in, the other creates your account."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "If I put <code>[Authorize]</code> on a controller — what happens when an unauthenticated user visits?" (Answer: They get redirected to the login page.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Auth vs Authz is like your school ID. Authentication = the guard checks your ID and says 'yes, you're a student here.' Authorization = the guard says 'you're a student, but you can't enter the faculty lounge.' Same ID, different access levels."<br /><strong>-&gt; Phone moment:</strong> "Open any app that requires login. Look at what you can do vs what an admin can do. That difference is authorization."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why can't I just store passwords in the database?"
        <strong>Short answer:</strong> Because if your database is breached, every password is exposed.
        <strong>Real answer:</strong> Identity hashes passwords using a one-way algorithm. Even if someone steals your database, they can't reverse the hash to get the original password. Rolling your own password storage is one of the most common security mistakes.
        <strong>The hidden question:</strong> "Can I see the hashed password?" -&gt; Yes, but it looks like gibberish. That's the point.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What's the difference between SignInManager and UserManager?"
        <strong>Short answer:</strong> SignInManager handles login/logout sessions. UserManager handles user data.
        <strong>Real answer:</strong> <code>UserManager.CreateAsync()</code> creates the user record. <code>SignInManager.SignInAsync()</code> sets the authentication cookie. You need both for a complete registration flow.
        <strong>The hidden question:</strong> "Why two managers?" -&gt; Separation of concerns. One manages identity data, the other manages sessions.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the manager names. The flow is: (1) User fills registration form. (2) UserManager creates the account. (3) SignInManager logs them in. (4) They get a cookie. (5) Every page checks the cookie. That's it."</p>
      </blockquote>
      <hr />
      <h3>Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 35 min (5 min packages -&gt; 10 min Program.cs -&gt; 10 min scaffold -&gt; 10 min protect + test)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's add Identity to an existing project step by step. Watch how each piece connects — the packages, the DbContext change, the Program.cs registration, and finally the scaffolded pages that just work."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the Program.cs changes with the critical line highlighted: <code>app.UseAuthentication()</code> MUST come before <code>app.UseAuthorization()</code>. Use a red arrow between them labeled "ORDER MATTERS."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type this live, don't paste.</strong> When you type the middleware order, pause dramatically: "If you swap these two lines, authentication breaks. The bouncer checks authorization before checking identity. Nothing gets in." Make the deliberate mistake of putting <code>UseAuthorization</code> first — show the error, then fix it.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the middleware pipeline:</p>
        <pre><code>Request -&gt; UseStaticFiles -&gt; UseRouting -&gt; UseAuthentication -&gt; UseAuthorization -&gt; Controller
        v
        No cookie? -&gt; Redirect to Login
        Has cookie? -&gt; Continue to Controller
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Type-along:</strong> "Run the package install commands with me. Then update your DbContext. Then Program.cs. Then scaffold. Watch the Identity pages appear. That's the moment your app gets a login system."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What does <code>dotnet aspnet-codegenerator identity</code> actually do?"
        <strong>Short answer:</strong> It generates the login, register, and logout pages for you.
        <strong>Real answer:</strong> It creates Razor Pages (not MVC views) in an <code>/Identity/Account/</code> folder with all the logic for registration, login, logout, password reset, etc. You didn't write any of it — Microsoft did. But now you know where to find it.
        <strong>The hidden question:</strong> "Can I customize these pages?" -&gt; Yes. The scaffolded files are yours to edit.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Let's do the absolute minimum: add the packages, update DbContext, register Identity in Program.cs, and scaffold. Skip the custom controllers for now. Get the built-in login page working first."</p>
      </blockquote>
      <hr />
      <h3>The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Authentication is in every app that has users. E-commerce, social media, banking, email, your school's portal. If you can't implement login/logout/signup, you can't build a real product. ASP.NET Core Identity handles hashing, session management, cookie security, and password policies — all the things you'd get wrong if you rolled your own."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Screenshot of a real breach headline (e.g., a company that stored plaintext passwords). Label: "This company didn't hash passwords. 2 million accounts exposed. Don't be this company."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. The security angle is the strongest argument: "Identity handles the hard stuff so you don't accidentally leak passwords."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you use the same password for multiple accounts?" (Some hands will go up nervously.) "That's why companies need to hash passwords. Even if one site gets breached, your password on other sites is still safe."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to understand cryptography today. Just know: Identity handles passwords securely. Use it. Don't roll your own."</p>
      </blockquote>
      <hr />
      <h3>Exercise: App with Login Gate</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min coding -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Take any previous project and add Identity. Lock down the main pages behind login. Show the user's name in the navbar. Create an admin role. You have 40 minutes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> Add ASP.NET Core Identity packages</li>
          <li><input disabled="" type="checkbox" /> Update DbContext to inherit from <code>IdentityDbContext</code></li>
          <li><input disabled="" type="checkbox" /> Register Identity in Program.cs (auth before authz!)</li>
          <li><input disabled="" type="checkbox" /> Scaffold Identity pages</li>
          <li><input disabled="" type="checkbox" /> Add <code>[Authorize]</code> to at least one controller</li>
          <li><input disabled="" type="checkbox" /> Show <code>@User.Identity.Name</code> in the navbar</li>
          <li><input disabled="" type="checkbox" /> Add Logout button</li>
          <li><input disabled="" type="checkbox" /> Bonus: Create an "Admin" role and restrict one action</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Circulate during the first 15 minutes — Identity setup is where students get stuck. The "aha" moment is when they visit a protected page and get redirected to the login screen. Walk around and celebrate that moment.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "One person handles the Identity setup (packages, DbContext, Program.cs), the other handles the views (navbar, logout button). Then combine and test together."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-exercise check-in (at 20 min):</strong> "How many have the login page working?" (Show of hands.) "How many have a protected page that redirects to login?" "If neither, let's do a quick group debug."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with just the packages and Program.cs. Get Identity registered. Then scaffold the pages. Test the login. Then add <code>[Authorize]</code> to a controller. One step at a time."</p>
      </blockquote>
      <hr />
      <h3>AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week marks a policy shift: FULL AI ALLOWED. AI can generate anything. But you must submit a prompt log, a code review of what AI got wrong, and be ready for an oral defense. You're not just using AI — you're auditing it."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> New AI policy:</p>
        <table>
          <thead>
            <tr>
              <th>Requirement</th>
              <th>What it means</th>
            </tr>
          </thead>
          <tbody><tr>
            <td>Prompt log</td>
            <td>Save every prompt you used</td>
          </tr>
          <tr>
            <td>Code review</td>
            <td>Document what AI got wrong and what you fixed</td>
          </tr>
          <tr>
            <td>Oral defense</td>
            <td>Explain why you chose certain patterns</td>
          </tr>
        </tbody></table>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Frame this positively: "You've earned full AI access because you understand the fundamentals now. But with great power comes great responsibility. If AI generates code you can't explain, you don't understand it."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'senior developer' now — it writes code, you review it. If you can't explain what it does, you can't ship it. That's how real code reviews work."</p>
      </blockquote>
      <hr />
      <h3>Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the Identity errors you WILL see this week. Let's go through them so you don't spend 20 minutes Googling."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+------------------------------------------+
        | Identity tables not created              |
        | Run: dotnet ef migrations add AddIdentity|
        | Then: dotnet ef database update          |
        +------------------------------------------+
        +------------------------------------------+
        | [Authorize] -&gt; blank page                 |
        | Login path not configured. Add:          |
        | options.LoginPath = "/Identity/..."      |
        +------------------------------------------+
        +------------------------------------------+
        | @User.Identity.Name is empty             |
        | UseAuthentication() must come BEFORE     |
        | UseAuthorization() in Program.cs         |
        +------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Blank page on [Authorize] is like showing up to a party with no address. The bouncer knows you're invited but doesn't know where to send you. Fix: tell the bouncer where the login page is."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why does the password policy require a special character? That's annoying."
        <strong>Short answer:</strong> It's the default. You can change it.
        <strong>Real answer:</strong> The default policy requires uppercase, digit, special char, and 8+ chars. For class projects, you can relax it: <code>options.Password.RequireNonAlphanumeric = false</code>. In production, keep it strict.
        <strong>The hidden question:</strong> "How do I change it?" -&gt; In the <code>AddDefaultIdentity</code> options block.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The three things to check first: (1) Did you run the Identity migration? (2) Is <code>UseAuthentication()</code> before <code>UseAuthorization()</code>? (3) Did you scaffold the Identity pages? Those fix 90% of Identity issues."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End with one action item: "If you only remember one thing: <code>UseAuthentication()</code> before <code>UseAuthorization()</code>. The order matters. Every time."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. The critical concept is the middleware pipeline order — <code>UseAuthentication</code> before <code>UseAuthorization</code> — write it on the board and leave it there. The club/wristband analogy should be used repeatedly. The #1 error is forgetting the Identity migration — drill <code>dotnet ef migrations add AddIdentity</code> followed by <code>dotnet ef database update</code>. The "aha" moment is the redirect to login on a protected page — make sure every student sees it happen. Full AI access begins this week, but with audit requirements (prompt log, code review, oral defense).</p>
      <hr />
      <h2>Week 14: Security Fundamentals</h2>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (180 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>25 min</td>
          <td>Lecture + Slides + Vulnerability Demos</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>35 min</td>
          <td>Live Code (vulnerable -&gt; secure transformation)</td>
        </tr>
        <tr>
          <td>Industry Reality</td>
          <td>10 min</td>
          <td>Lecture + Discussion</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>55 min</td>
          <td>Lab (security audit + fix)</td>
        </tr>
        <tr>
          <td>AI Integration</td>
          <td>10 min</td>
          <td>Demo + Prompt Walkthrough</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>5 min</td>
          <td>Overflow</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 14 strategy):</strong> This is the week where students learn that their apps are vulnerable by default. The XSS demo — actually running <code>&lt;script&gt;alert('hacked')&lt;/script&gt;</code> in their own app — is the most memorable moment. Do it live. Let them see it happen. Then show how Razor auto-encoding prevents it. The OWASP Top 10 should feel like a checklist, not a textbook.</p>
      </blockquote>
      <hr />
      <h3>The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Someone out there wants to steal your users' data. Not because they hate you — because your app has vulnerabilities. And if you don't fix them, you're legally liable. Today we learn about the three horsemen of the web apocalypse: XSS, SQL injection, and CSRF."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "Your App Is Vulnerable (And That's Okay)"<br />Three attack icons: a script tag (XSS), a SQL query with a skull (SQL injection), and a fake form (CSRF).<br />Subtitle: "Today we learn how to lock the doors."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This hook should feel alarming but not paralyzing. Follow up immediately with: "The good news? ASP.NET Core already protects you from most of these. You just need to know what to turn on and what NOT to turn off."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Every app you use has been hacked at some point. Facebook, Twitter, even your school's portal. The difference between a breached app and a secure one isn't talent — it's knowing the common attacks and how to prevent them."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you've ever seen a website where you could type HTML and it actually rendered. That's an XSS vulnerability."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Don't panic. You're not building a banking app. But the same principles apply: never trust user input, always encode output, always use parameterized queries. These three rules cover 90% of security."</p>
      </blockquote>
      <hr />
      <h3>The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Your web app is a house. XSS lets attackers sneak in a script through an open window — that's unencoded user input. SQL injection is someone picking your lock with a bobby pin — malicious SQL hidden in a text field. CSRF is tricking you into unlocking the door for them — a fake request that looks like it came from a trusted user. ASP.NET Core has built-in locks on all three. You just need to use them."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the house analogy:</p>
        <pre><code>+-------------------------------------+
        |  YOUR WEB APP (House)               |
        |                                     |
        |  [WINDOW] XSS -&gt; Open window               |
        |     (unencoded input)               |
        |     Fix: Razor auto-encodes         |
        |                                     |
        |  [LOCK] SQL Injection -&gt; Picked lock     |
        |     (string concatenation)          |
        |     Fix: EF parameterizes           |
        |                                     |
        |  [DOOR] CSRF -&gt; Tricked into opening     |
        |     (fake request)                  |
        |     Fix: Anti-forgery token         |
        +-------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The house analogy is universal. Emphasize: <strong>ASP.NET Core already has the locks installed.</strong> Students don't need to build security from scratch — they need to not disable the built-in protections. This is a key mindset shift.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "If your app is a house, which vulnerability is the easiest to fix? XSS (close the window), SQL injection (change the lock), or CSRF (install a peephole)? 10 seconds, go!" (Answer: XSS — Razor does it automatically.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like your phone's security. Face ID = authentication. App permissions = authorization. Encrypted messages = HTTPS. Your phone already has all this built in. Your app does too."</p>
      </blockquote>
      <hr />
      <h3>Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min total (8 min XSS -&gt; 7 min SQL injection -&gt; 5 min CSRF -&gt; 5 min HTTPS + OWASP)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's go through each vulnerability. XSS is when user input runs as code. SQL injection is when user input becomes part of a query. CSRF is when a malicious site tricks your browser into making requests on your behalf. ASP.NET Core protects against all three — but you have to know how."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the XSS attack first — a comment field with <code>&lt;script&gt;alert('hacked')&lt;/script&gt;</code>. Then show what happens when it renders raw (alert popup). Then show what Razor does — the encoded output that displays as text. Reveal one step at a time.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Do the XSS demo live.</strong> Type <code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code> into a form that uses <code>@Html.Raw()</code> and show the alert popup. The gasp from the room is guaranteed. Then remove <code>@Html.Raw()</code> and show it renders as harmless text. This visual proof is unforgettable.</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "If Razor auto-encodes by default — when would you ever use <code>@Html.Raw()</code>?" (Answer: When you control the content, like admin-written articles with formatting. Never on user-submitted content.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "XSS is like someone slipping a fake flyer into your group chat. If you just forward it (raw rendering), everyone sees the fake. If you screenshot it and add 'FAKE' (encoding), everyone sees it's harmless."<br /><strong>-&gt; Phone moment:</strong> "Think about how Facebook handles comments. If you type HTML in a comment, it shows as text, not as actual HTML. That's auto-encoding."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Is <code>@Html.Raw()</code> ever safe?"
        <strong>Short answer:</strong> Yes, when you control the content.
        <strong>Real answer:</strong> If you're rendering content that YOU wrote (admin articles, system messages), <code>@Html.Raw()</code> is fine. The danger is when the content comes from users. Rule: if a user typed it, never use <code>@Html.Raw()</code>.
        <strong>The hidden question:</strong> "What if I need to allow some HTML (like bold/italic)?" -&gt; Use a sanitizer library like HtmlSanitizer.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Does EF Core protect me from SQL injection automatically?"
        <strong>Short answer:</strong> Yes, if you use LINQ.
        <strong>Real answer:</strong> <code>.Where(u =&gt; u.Email == email)</code> is always parameterized. The danger is <code>FromSqlRaw()</code> with string interpolation. If you must use raw SQL, use parameters: <code>FromSqlRaw("SELECT * FROM Users WHERE Email = &#123;0&#125;", email)</code>.
        <strong>The hidden question:</strong> "Should I ever use FromSqlRaw?" -&gt; Only for complex queries that LINQ can't express. And always with parameters.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Three rules to remember: (1) Never use <code>@Html.Raw()</code> on user input. (2) Always use LINQ, not string SQL. (3) Always include <code>@Html.AntiForgeryToken()</code> in forms. Follow these three rules and you're safer than 90% of beginner apps."</p>
      </blockquote>
      <hr />
      <h3>Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 35 min (10 min vulnerable code demo -&gt; 15 min secure transformation -&gt; 10 min OWASP tour)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's take a vulnerable app and fix it step by step. First I'll show you the broken code — the kind of code that gets companies sued. Then we'll fix each vulnerability one at a time."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the vulnerable controller and view side by side. Use red highlighting on the dangerous parts: <code>@Html.Raw(ViewBag.Comment)</code>, missing <code>[ValidateAntiForgeryToken]</code>, no model validation. Then reveal the secure version with green highlights.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type the vulnerable version first, then transform it live.</strong> This "before and after" approach is more memorable than showing the secure version directly. When you add <code>[ValidateAntiForgeryToken]</code>, explain: "This one attribute stops CSRF attacks. It's free security."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the CSRF attack flow:</p>
        <pre><code>User logged into bank.com (has cookie)
        v
        User visits evil.com
        v
        evil.com has hidden form: POST bank.com/transfer
        v
        Browser sends cookie automatically
        v
        Bank thinks it's the user -&gt; MONEY STOLEN
        v
        FIX: Anti-forgery token prevents this
        (evil.com can't read bank.com's token)
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Type-along:</strong> "Type the vulnerable version with me. See how simple it is? Now let's break it. Submit a script tag. Watch the alert. Now let's fix it — remove @Html.Raw, add antiforgery, add validation. Watch it become secure."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What's the OWASP Top 10? Is it a test?"
        <strong>Short answer:</strong> It's a list of the most critical web security risks.
        <strong>Real answer:</strong> The Open Web Application Security Project publishes this list every few years. It's the industry standard for "what to worry about." Companies use it for security audits. If you can name three items from it in an interview, you'll impress them.
        <strong>The hidden question:</strong> "Do I need to memorize all 10?" -&gt; No. But know the big three: injection, broken auth, XSS.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Let's focus on just XSS first. Remove <code>@Html.Raw()</code>, let Razor encode automatically. That fixes the most common vulnerability. Then add anti-forgery tokens. Then worry about the rest."</p>
      </blockquote>
      <hr />
      <h3>The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Security isn't optional. Your school's portal, your bank, your social media — all breached at some point. If you build a commercial app and it leaks user data, you get sued, your company gets fined, and your career takes a hit. In the Philippines, the Data Privacy Act (RA 10173) requires companies to protect user data. Non-compliance = fines up to ₱5M + jail time."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Headline from a real Philippine data breach (e.g., COMELEC 2016, or a recent local breach). Label: "₱5M fine + jail time under RA 10173. This is real."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. The legal angle is the strongest argument for Filipino students — RA 10173 makes this a real consequence, not a theoretical one.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you have received a 'your data may have been breached' email?" (Some hands.) "That email was sent because someone didn't follow the security practices we're learning today."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to become a security expert today. Just follow the three rules: encode output, parameterize queries, use anti-forgery tokens. That covers the basics."</p>
      </blockquote>
      <hr />
      <h3>Exercise: Security Audit Report</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 55 min total (5 min setup -&gt; 40 min audit + fix -&gt; 10 min share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here's a vulnerable app. Find at least 5 security flaws. Document each one: what it is, how to exploit it, how to fix it, and the fixed code. You have 40 minutes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Exercise checklist:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> Find SQL injection vulnerability</li>
          <li><input disabled="" type="checkbox" /> Find missing anti-forgery token</li>
          <li><input disabled="" type="checkbox" /> Find XSS via <code>@Html.Raw()</code></li>
          <li><input disabled="" type="checkbox" /> Find missing input validation</li>
          <li><input disabled="" type="checkbox" /> Find missing <code>[ValidateAntiForgeryToken]</code></li>
          <li><input disabled="" type="checkbox" /> Write fixed code for each</li>
          <li><input disabled="" type="checkbox" /> Bonus: Identify missing HTTPS enforcement</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This exercise is analytical, not coding-heavy. Students should spend time reading the vulnerable code, identifying flaws, and writing the fixes. Circulate and help students who can't spot the vulnerabilities. The "aha" moment is when they realize how many flaws exist in just a few lines of code.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Pair up:</strong> "Work as a red team (find flaws) and blue team (write fixes). Then swap roles. You'll learn faster by seeing both perspectives."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-exercise check-in (at 20 min):</strong> "How many flaws have you found?" (Show of hands — should be 5+.) "Which one was the hardest to spot?" "Let's discuss the SQL injection — who can explain how it works?"</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with the obvious: look for <code>@Html.Raw()</code> — that's XSS. Look for string concatenation in SQL — that's injection. Look for a POST form without <code>@Html.AntiForgeryToken()</code> — that's CSRF. Those three will get you started."</p>
      </blockquote>
      <hr />
      <h3>AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This week, AI is your security consultant. Paste vulnerable code and ask it to identify flaws following OWASP Top 10. But verify every suggestion — AI can miss context-specific vulnerabilities."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Prompt template:
        "Here's my controller code [paste]. Identify all security vulnerabilities following OWASP Top 10. Show me the fixed version."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Demonstrate asking AI to audit code, then compare its findings to your own. "AI found 4 of the 6 vulnerabilities. It missed the missing HTTPS enforcement. That's why you still need to understand security yourself."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'security scanner' — it catches obvious vulnerabilities, but you need to understand why they're dangerous. If AI fixes a bug and you don't know why, you haven't learned."</p>
      </blockquote>
      <hr />
      <h3>Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common issues -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the security-related issues you'll encounter. Most of them are about knowing what NOT to do."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Issue cards:</p>
        <pre><code>+------------------------------------------+
        | Anti-forgery token mismatch (400 error)  |
        | You have [ValidateAntiForgeryToken]        |
        | without @Html.AntiForgeryToken() in form |
        +------------------------------------------+
        +------------------------------------------+
        | Razor auto-encoding is YOUR FRIEND       |
        | Don't use @Html.Raw() unless absolutely  |
        | necessary. When in doubt, leave it out.  |
        +------------------------------------------+
        +------------------------------------------+
        | SQL injection doesn't work on EF LINQ    |
        | .Where(u =&gt; u.Email == email) is safe.   |
        | FromSqlRaw() is the danger zone.         |
        +------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Anti-forgery token mismatch is like having a key that doesn't fit the lock. The form has one key, the controller expects another. Fix: make sure both the form AND the controller have the token."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Should I add CSP headers to my project?"
        <strong>Short answer:</strong> It's good practice but not required for class projects.
        <strong>Real answer:</strong> Content-Security-Policy headers tell the browser which scripts are allowed. They're an extra layer of XSS protection. Add them in Program.cs if you want bonus points.
        <strong>The hidden question:</strong> "Is my project insecure without CSP?" -&gt; No. Razor auto-encoding is your primary defense. CSP is defense-in-depth.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The two things to check first: (1) Are you using <code>@Html.Raw()</code> anywhere on user input? Remove it. (2) Do all POST forms have <code>@Html.AntiForgeryToken()</code>? Add it. Those fix the most critical vulnerabilities."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End with one action item: "If you only remember one thing: never trust user input. Encode it, validate it, parameterize it. That's the golden rule of web security."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. The XSS live demo is the most important moment — actually run <code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code> and show the popup, then show how Razor prevents it. The house analogy should be used repeatedly. The three golden rules (encode output, parameterize queries, use anti-forgery tokens) should be written on the board and left there. The #1 mistake is using <code>@Html.Raw()</code> on user input — normalize this as the most common beginner error. Connect security to RA 10173 (Philippine Data Privacy Act) for local relevance.</p>
      <hr />
      <h2>Week 15: Capstone Sprint</h2>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (180 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>20 min</td>
          <td>Lecture + Slides + Planning Framework</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>25 min</td>
          <td>Live Code (project scaffolding + structure)</td>
        </tr>
        <tr>
          <td>Industry Reality</td>
          <td>10 min</td>
          <td>Lecture + Discussion</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>70 min</td>
          <td>Lab (capstone build session)</td>
        </tr>
        <tr>
          <td>AI Integration</td>
          <td>10 min</td>
          <td>Demo + Prompt Walkthrough</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>5 min</td>
          <td>Overflow</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 15 strategy):</strong> This is NOT a teaching week — it's a building week. Keep lectures short. Students should spend 70+ minutes coding. The planning framework (user stories, schema design, Kanban) is the most important thing you'll teach this week — students who skip planning will waste hours. Walk around constantly. This week reveals who actually learned the material. Be supportive but honest.</p>
      </blockquote>
      <hr />
      <h3>The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "No more exercises. No more tutorials. You have one week to build whatever you want. You pick the idea. You design the schema. You build the routes. You ship it. This is your portfolio piece. Make it count."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "This Is Your Portfolio Piece"<br />Three screenshots: a GitHub repo with green contribution squares, a deployed app URL, and a resume with "Full-Stack Web Developer" listed.<br />Subtitle: "What you build this week is what you show in interviews."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Deliver this with energy but also warmth. Some students are genuinely anxious about building something from scratch. Acknowledge it: "It's okay to be nervous. You have all the pieces from Weeks 1-14. Today we just put them together."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "This is the final boss level. You've been grinding XP all semester — MVC, EF Core, APIs, auth, security. Now you face the boss: build a real app. You have all the skills. You just need to combine them."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you're nervous about building something from scratch. Good. That means you care. Now let's do it."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Don't panic. This isn't a test. It's a sprint. You'll build something small but complete. If you can do a controller, a model, a view, and a database query — you can do this."</p>
      </blockquote>
      <hr />
      <h3>The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This is week 15 of your startup. You've done customer research — that's the previous weeks learning the tools. You know your tech stack — ASP.NET Core, EF Core, Identity. Now it's time to build the MVP: Minimum Viable Product. Not the perfect product. The shippable product. Features you can't finish? Cut them. Bugs that don't crash things? Ship them anyway. You can fix them in the next sprint."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the MVP triangle:</p>
        <pre><code>       Perfect
        /\
        /  \
        /    \
        / MVP  \   &lt;- Ship THIS
        /________\
        Fast     Good
      </code></pre>
      <p>Below: "Pick two: Fast + Good = MVP. Perfect comes later."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The MVP concept is critical — students will try to build too much. Emphasize: <strong>scope is your enemy.</strong> A working app with 3 features beats a broken app with 10. Draw the triangle and leave it on the board for the entire session.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "What's ONE feature your app absolutely needs to work? Not 'nice to have' — NEEDS. 10 seconds, go!" (Then ask 2-3 people to share. Reinforce: "That's your MVP. Everything else is bonus.")</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like a TikTok video. You don't need fancy effects, transitions, and music. You need one clear idea that works. Your app is the same — one core feature that works well."</p>
      </blockquote>
      <hr />
      <h3>Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 20 min total (7 min planning -&gt; 7 min vertical slicing -&gt; 6 min git workflow)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here's how to plan a capstone in one week. Day 1-2: plan before you code. Define user stories, design your schema, sketch your routes. Day 3-5: build vertically — one feature at a time, full stack. Day 6-7: polish and deploy. Don't build horizontally — don't do all your models first, then all your controllers. You won't see progress."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the user story template: "As a [role], I want to [action] so that [benefit]." Then reveal 3 examples. Then show the Kanban board: To Do -&gt; In Progress -&gt; Done.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The most important concept: <strong>build vertically, not horizontally.</strong> Students will want to create all models first, then all controllers, then all views. This is wrong — they won't see anything working until the very end. Instead: pick one feature, build it from database to view, test it, then move to the next feature.</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "If you have 5 features and 5 days — do you build all 5 databases on day 1, or do you build one complete feature per day?" (Answer: One complete feature per day. You'll have 5 working features instead of 5 half-built ones.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Building vertically is like cooking one dish at a time instead of prepping all ingredients for 5 dishes. You get to eat (see progress) after each dish, not at the very end."<br /><strong>-&gt; Phone moment:</strong> "Open GitHub Projects or Trello on your phone. Create three columns: To Do, Doing, Done. Add your features as cards. Move them as you work. This is how real teams track work."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "How many features should I aim for?"
        <strong>Short answer:</strong> 3 core features minimum.
        <strong>Real answer:</strong> The requirements say 3+ tables, 1+ relationship, auth, API, service layer, validation, layout. That's your baseline. Any features beyond that are bonus. Don't over-scope.
        <strong>The hidden question:</strong> "What if I finish early?" -&gt; Add polish: better styling, error messages, loading states. Not more features.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Should I use feature branches?"
        <strong>Short answer:</strong> Yes, but keep it simple.
        <strong>Real answer:</strong> Create one branch per feature: <code>feat-auth</code>, <code>feat-tasks</code>, <code>feat-api</code>. Merge into <code>main</code> when the feature works. If you're working solo, you can commit directly to <code>main</code> — but branches are good practice.
        <strong>The hidden question:</strong> "Is git required?" -&gt; Yes. Your deliverable is a GitHub repo.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the planning framework for a second. Just answer: what does your app DO? Write that in one sentence. Then list the 3 things a user needs to do. Build those 3 things. That's your capstone."</p>
      </blockquote>
      <hr />
      <h3>Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min (5 min project scaffold -&gt; 10 min folder structure -&gt; 10 min Program.cs template)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's scaffold a capstone project from scratch. Watch how the folder structure maps to the architecture: Controllers handle HTTP, Services handle logic, Models handle data, Views handle display. Everything connects through Program.cs."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the project structure diagram first — the folder tree with Controllers, Models, ViewModels, Services, Views, wwwroot. Then reveal the Program.cs template with all registrations highlighted.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Type this live.</strong> Scaffold the project, create the folders, and build the Program.cs step by step. After each registration line, explain what it enables: "This line adds MVC. This line adds the database. This line adds Identity. This line adds HttpClient. This line adds your service."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the dependency flow:</p>
        <pre><code>Program.cs wires everything:
        AddControllersWithViews()  -&gt; MVC pipeline
        AddDbContext()             -&gt; Database
        AddDefaultIdentity()       -&gt; Auth
        AddHttpClient()            -&gt; API calls
        AddScoped&lt;IService, Svc&gt;() -&gt; Your service
      
        Controller -&gt; Service -&gt; DbContext -&gt; Database
        -&gt; HttpClient -&gt; API
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Type-along:</strong> "Scaffold the project with me. Create the folders. Build Program.cs. This is your starting template. Every capstone starts here."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Do I need all these packages for a simple app?"
        <strong>Short answer:</strong> No. Only add what you need.
        <strong>Real answer:</strong> The template includes Identity, EF Core, and HttpClient because the requirements ask for auth, database, and API integration. If your app doesn't need one of these, skip it. But the capstone requirements require all three.
        <strong>The hidden question:</strong> "Can I add more later?" -&gt; Yes. <code>dotnet add package</code> works anytime.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with the minimum: MVC + EF Core + Identity. Get those working. Then add HttpClient for the API. Then add your service layer. One piece at a time."</p>
      </blockquote>
      <hr />
      <h3>The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "This capstone is what you show in interviews. 'Build a complete web app' demonstrates you understand the full stack — database design, backend architecture, frontend rendering, authentication, deployment. A GitHub repo with a running app gets you hired faster than any certificate."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Screenshot of a real job posting for ".NET Developer" with "Portfolio/GitHub required" highlighted. Label: "This is what employers want to see."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. Connect it directly to job hunting: "When an interviewer asks 'show me something you built,' you'll show them this capstone. A deployed URL beats a certificate every time."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you have a GitHub profile?" (Some hands.) "By the end of this week, your GitHub will have something real on it. Not a tutorial. Not an exercise. Your app."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to build the next Facebook. You need to build something that works, that you can explain, and that you're proud of. That's enough."</p>
      </blockquote>
      <hr />
      <h3>Exercise: Capstone Sprint Delivery</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 70 min total (5 min planning -&gt; 60 min build -&gt; 5 min quick share)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Choose a project idea or propose your own. Plan first — write your user stories, design your schema, sketch your routes. Then build vertically — one feature at a time. You have 60 minutes of build time. I'll be walking around helping."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Project ideas:</p>
        <ol>
          <li><strong>Task Manager Pro</strong> — Users, tasks, categories, due dates, priority, reminders API</li>
          <li><strong>Recipe Box</strong> — Users, recipes, ingredients, categories, search, meal planner</li>
          <li><strong>Book Tracker</strong> — Users, books, reading logs, ratings, reviews, Google Books API</li>
          <li><strong>Study Group App</strong> — Users, study groups, flashcards, quiz scores, study timer</li>
          <li><strong>Personal Budget</strong> — Users, expenses, categories, monthly summaries, charts</li>
        </ol>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This is a build session, not a lecture. Walk around constantly. The first 15 minutes should be planning — make students write user stories and sketch their schema before they code. The "aha" moment is when they get their first feature working end-to-end (database -&gt; service -&gt; controller -&gt; view).</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Work in pairs or solo:</strong> "This is your mini-capstone. Treat it like a real project. Plan first, then code. Draw your architecture diagram before you write a single line."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-exercise check-in (at 30 min):</strong> "How many have at least one feature working end-to-end?" (Show of hands.) "How many have authentication working?" "If you're stuck, raise your hand — I'll come over."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Start with the database. Define your models. Create the DbContext. Run the migration. Get data displaying on a page. Then add authentication. Then add the API. Then add the service layer. One layer at a time."</p>
      </blockquote>
      <hr />
      <h3>AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Full AI is allowed this week. Use it for code generation, debugging, architecture suggestions, styling. But for every AI-generated code block, add a comment: <code>// AI-generated: reviewed by [your name]</code>. This tracks what came from AI vs what you wrote."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> AI tracking requirement:</p>
        <table>
          <thead>
            <tr>
              <th>Requirement</th>
              <th>What it means</th>
            </tr>
          </thead>
          <tbody><tr>
            <td>Comment every AI block</td>
            <td><code>// AI-generated: reviewed by Juan</code></td>
          </tr>
          <tr>
            <td>Prompt log</td>
            <td>Save every prompt you used</td>
          </tr>
          <tr>
            <td>Code review</td>
            <td>Document what AI got wrong</td>
          </tr>
        </tbody></table>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Demonstrate the workflow: (1) Ask AI for code, (2) Review it, (3) Add the comment, (4) Test it. "AI generates the code, but YOU understand it. The comment is your signature — you're saying 'I reviewed this and it's correct.'"</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'co-pilot' this week — it suggests code, you steer. If you can't explain what the code does, you didn't review it. And if you didn't review it, you can't defend it."</p>
      </blockquote>
      <hr />
      <h3>Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common issues -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the capstone pitfalls you'll face this week. Most of them aren't technical — they're about scope and time management."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Pitfall cards:</p>
        <pre><code>+------------------------------------------+
        | Scope creep                              |
        | You want to build Instagram but you have |
        | 1 week. Pick 3 core features. Cut rest.  |
        +------------------------------------------+
        +------------------------------------------+
        | Saving the hardest part for last         |
        | Build the hard thing first. If it fails, |
        | you have time to adjust.                 |
        +------------------------------------------+
        +------------------------------------------+
        | Not committing                           |
        | Commit after every working feature.      |
        | If something breaks, you can roll back.  |
        +------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Scope creep is like adding toppings to a pizza until it collapses. Three toppings = delicious. Ten toppings = a mess. Pick your three core features and stick to them."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "My database schema is wrong — do I need to start over?"
        <strong>Short answer:</strong> No. Use migrations to change it.
        <strong>Real answer:</strong> Create a new migration: <code>dotnet ef migrations add UpdateSchema</code>. Then apply it: <code>dotnet ef database update</code>. If the migration fails because of existing data, you can delete the database and start fresh (it's a class project, not production).
        <strong>The hidden question:</strong> "Will I lose my data?" -&gt; Yes, if you delete the database. But for a class project, that's fine.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The two things to focus on: (1) Do you have at least one feature working end-to-end? If not, drop everything else and make it work. (2) Is your code committed to GitHub? If not, commit now. Those are the minimum deliverables."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End with one action item: "If you only remember one thing: a working app with 3 features beats a broken app with 10. Ship what works."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. This is a build week — keep lectures short (70 min build time), walk around constantly. The MVP triangle should be drawn on the board and left there. The #1 pitfall is scope creep — students try to build too much. Reinforce "3 core features, ship what works." The vertical slicing concept (build one feature end-to-end before starting the next) is the most important planning lesson. AI is fully allowed but requires tracking comments on every generated block. Be supportive: students are nervous about building from scratch. Celebrate small wins: "Your first feature works? That's huge."</p>
      <hr />
      <h2>Week 16: Capstone Final — Deploy &amp; Present</h2>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (180 min)</strong></p>
      </blockquote>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Time</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>Hook + Analogy</td>
          <td>15 min</td>
          <td>Lecture + Whiteboard</td>
        </tr>
        <tr>
          <td>Concept Discussion</td>
          <td>20 min</td>
          <td>Lecture + Slides + Deployment Demo</td>
        </tr>
        <tr>
          <td>Code Walkthrough</td>
          <td>25 min</td>
          <td>Live Demo (deploy to Render/Railway)</td>
        </tr>
        <tr>
          <td>Industry Reality</td>
          <td>10 min</td>
          <td>Lecture + Discussion</td>
        </tr>
        <tr>
          <td>Break</td>
          <td>10 min</td>
          <td>—</td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td>70 min</td>
          <td>Lab (deploy + presentation prep)</td>
        </tr>
        <tr>
          <td>AI Integration</td>
          <td>10 min</td>
          <td>Demo + Prompt Walkthrough</td>
        </tr>
        <tr>
          <td>Debugging + Wrap</td>
          <td>15 min</td>
          <td>Group Debug + Q&amp;A</td>
        </tr>
        <tr>
          <td>Buffer</td>
          <td>5 min</td>
          <td>Overflow</td>
        </tr>
      </tbody></table>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip (Week 16 strategy):</strong> This is deployment and presentation week. Students should spend most of their time deploying and practicing their demos. Keep lectures short. The deployment demo should be live — actually deploy a sample app during class. Walk around constantly during the build session. Help students with connection strings, environment variables, and platform-specific issues. The presentation practice is as important as the deployment — students need to learn how to demo their work.</p>
      </blockquote>
      <hr />
      <h3>The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Your app is about to go live. Real URL. Real users (your classmates). No pressure. You're about to experience the most terrifying and rewarding moment in software development: hitting 'Deploy.'"</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Title: "Your App Goes Live Today"<br />Left: <code>localhost:5001</code> with a red X through it.<br />Right: <code>mycapstone.onrender.com</code> with a green checkmark.<br />Subtitle: "From your laptop to the internet."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This hook should feel exciting but also acknowledge the anxiety. Say: "Deploying for the first time is scary. It's supposed to be. But once you see your app on a real URL, you'll never look at websites the same way again."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "An app that only runs on your laptop is like a TikTok video that only you can see. Deployment is hitting 'Post.' Suddenly the whole world can see what you made."<br /><strong>-&gt; Poll:</strong> "Raise your hand if you've ever deployed something to the internet." (Few hands.) "By the end of this session, that changes."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Don't worry if deployment feels intimidating. We'll do it step by step. The platform does most of the work. You just need to connect your repo and set a few variables."</p>
      </blockquote>
      <hr />
      <h3>The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "You've been cooking in your kitchen — that's your local machine — for weeks. The food tastes great to you. But now you're opening a restaurant — that's production. New challenges: does the food survive delivery? Can the kitchen handle 20 orders at once? What if the power goes out? Deployment is where your app meets the real world — and the real world doesn't care about your feelings."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the kitchen-to-restaurant analogy:</p>
        <pre><code>Your Kitchen (localhost)     -&gt;     Restaurant (Production)
        +-----------------+                +-----------------+
      </code></pre>
      </blockquote>
      <p>| You test it       |                | Anyone can access |
      | Your database     |      -&gt;         | Real database     |
      | Your files        |                | Server files      |
      | Fast (no network) |                | Network latency   |
      | No security       |                | HTTPS required    |
      +-----------------+                +-----------------+</p>
      <blockquote>
        <pre><code>Arrow labeled: "Deployment = moving from kitchen to restaurant"
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The kitchen analogy works well. Emphasize the key differences: production has a real database (not LocalDB), real network latency, real users, and real security requirements. The connection string change is the #1 deployment issue — highlight it.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Turn to your neighbor:</strong> "What's the biggest difference between testing on your laptop and deploying to the internet? 10 seconds, go!" (Answers: connection string, environment variables, HTTPS, network speed.)</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Think of it like moving from a practice court to a real game. Same skills, different pressure. Your code works on localhost — now we just need to put it on a server that everyone can reach."</p>
      </blockquote>
      <hr />
      <h3>Concept Discussion</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 20 min total (8 min hosting options -&gt; 7 min deployment checklist -&gt; 5 min production config)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here's how deployment works. Your app runs on localhost — only your machine can see it. Deployment puts it on a server that anyone can access. We'll use Render or Railway because they have free tiers and support .NET. The process is: push to GitHub, connect the repo to the platform, set environment variables, and deploy."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the hosting comparison table one platform at a time. Highlight Render and Railway as the easiest options for class projects. Then reveal the deployment checklist — read through each item.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> The most important concept: <strong>environment variables replace hardcoded values.</strong> Students will want to put their production connection string in <code>appsettings.json</code>. Don't let them. Explain: "Your connection string has a password. If you commit it to GitHub, it's public forever. Use environment variables instead."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Ask the class:</strong> "If your app works on localhost but crashes on the server — what's the first thing you check?" (Answer: The logs. Every platform has a log viewer. Read the error message.)</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "Environment variables are like your GCash PIN — you don't write it in your notebook where anyone can see it. You keep it in your head (the server's environment). The app reads it when it needs it."<br /><strong>-&gt; Phone moment:</strong> "Open any deployed website. Look at the URL. That URL points to a server somewhere. Your app is about to have one of those."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Which platform should I use?"
        <strong>Short answer:</strong> Render or Railway — both have free tiers and .NET support.
        <strong>Real answer:</strong> Render is easiest — connect GitHub, set build/start commands, add env vars, deploy. Railway is similar but gives you $5 credit. Azure is more powerful but more complex. For a class project, Render is fine.
        <strong>The hidden question:</strong> "Will it stay free forever?" -&gt; Render free tier sleeps after 15 min of inactivity. Railway credit runs out. But for a demo, it's enough.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "What if my deployment fails?"
        <strong>Short answer:</strong> Check the logs.
        <strong>Real answer:</strong> 90% of deployment failures are: wrong connection string, missing migration, or missing environment variable. The platform's log viewer will tell you exactly what went wrong. Read the error, fix it, redeploy.
        <strong>The hidden question:</strong> "How many times will I need to redeploy?" -&gt; Probably 2-3 times. That's normal. Even senior devs redeploy multiple times.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Forget the platform specifics. The flow is: (1) Push code to GitHub. (2) Connect repo to platform. (3) Set connection string as env var. (4) Hit deploy. (5) Check logs if it fails. That's it."</p>
      </blockquote>
      <hr />
      <h3>Code Walkthrough</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 25 min (10 min production-ready Program.cs -&gt; 10 min live deploy demo -&gt; 5 min post-deploy testing)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's make our app production-ready and deploy it. First, the Program.cs changes — environment-aware error pages, auto-migration on startup. Then I'll deploy a sample app live so you can see the process."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Show the production-ready Program.cs with the environment check highlighted: <code>if (!app.Environment.IsDevelopment())</code>. Then show the <code>db.Database.Migrate()</code> line — explain this is what creates/updates the database on the server.</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> <strong>Do the deployment live.</strong> Even if it takes a few minutes, students need to see the full process: GitHub push -&gt; platform connect -&gt; env var setup -&gt; deploy -&gt; URL works. If the deployment fails (it might), that's actually valuable — show them how to read the logs and fix the issue.</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard:</strong> Draw the deployment flow:</p>
        <pre><code>Local Code -&gt; git push -&gt; GitHub -&gt; Platform (Render/Railway)
        v
        Build: dotnet publish -c Release
        v
        Start: dotnet MyApp.dll
        v
        Migrate: db.Database.Migrate()
        v
        Live URL: https://myapp.onrender.com
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Watch along:</strong> "I'm deploying this app live. Watch every step. This is the same process you'll follow. If I make a mistake, you'll learn from it. If it works, you'll know it's possible."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Why <code>db.Database.Migrate()</code> instead of <code>EnsureCreated()</code>?"
        <strong>Short answer:</strong> <code>Migrate()</code> applies pending migrations. <code>EnsureCreated()</code> only creates if nothing exists.
        <strong>Real answer:</strong> <code>EnsureCreated()</code> is fine for the first deploy. But if you add a new column later and redeploy, <code>EnsureCreated()</code> won't add it. <code>Migrate()</code> applies all pending migrations, so it works for both first deploy and updates.
        <strong>The hidden question:</strong> "Is it safe to auto-migrate in production?" -&gt; For a class project, yes. In a real company, you'd run migrations separately from the app startup.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Let's focus on just getting the app running. Skip the auto-migration for now. Deploy with <code>EnsureCreated()</code>. Get it working. Then add migrations later."</p>
      </blockquote>
      <hr />
      <h3>The "Why Should I Care?"</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "An app that only runs on your laptop doesn't exist. An app on the internet is real. Deployment is the difference between 'I learned coding' and 'I built a product.' Hiring managers don't care about your localhost — they want to see a URL. Plus, deployed apps look better on your resume than 'ran it on my machine.'"</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Side-by-side resume entries:
        Left: "Built a task manager app (ran locally)" — boring.
        Right: "Built and deployed a task manager app — live at [URL], 50+ users" — impressive.
        Subtitle: "Which one gets you hired?"</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Keep this to 5 minutes. The resume angle is the strongest argument: "A deployed URL on your resume is proof you can ship. Most graduates can't say that."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Poll:</strong> "How many of you want to put a live URL on your resume?" (All hands.) "That's what we're doing today. Not a localhost link. A real URL that anyone can visit."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "You don't need to understand DevOps today. Just know: push to GitHub, connect to platform, set env vars, deploy. That's the entire process."</p>
      </blockquote>
      <hr />
      <h3>Exercise: Deploy + Present</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 70 min total (5 min prep -&gt; 30 min deploy -&gt; 30 min presentation practice + delivery -&gt; 5 min wrap)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Two parts today. Part 1: deploy your capstone to a live URL. Part 2: present your app in a 10-minute demo. Your presentation should cover: what you built, a live demo, your architecture, your challenges, and your AI usage. You have 70 minutes."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Presentation structure:</p>
        <ol>
          <li><strong>What did you build?</strong> (1 min) — Elevator pitch</li>
          <li><strong>Live demo</strong> (4 min) — Register, core feature, API, validation</li>
          <li><strong>Architecture</strong> (2 min) — Diagram: Controllers -&gt; Services -&gt; DB + API</li>
          <li><strong>Challenges</strong> (2 min) — What broke? How did you fix it?</li>
          <li><strong>AI usage</strong> (1 min) — What did AI help with? What did it get wrong?</li>
        </ol>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This is the most important session of the term. Help students deploy first — without a live URL, the presentation has no impact. Then help them practice their demo. The "aha" moment is when they visit their own live URL and see their app running on the internet.</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> <strong>-&gt; Practice your demo:</strong> "Run through your presentation once before presenting. Time it. If it's over 10 minutes, cut something. If your app crashes during the demo, that's okay — explain what went wrong. That's real development."</p>
      </blockquote>
      <blockquote>
        <p>[ASK] <strong>Mid-session check-in (at 30 min):</strong> "How many have deployed?" (Show of hands.) "How many have a working live URL?" "If you're stuck on deployment, raise your hand — I'll come over."</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "Focus on getting the app deployed first. Skip the presentation prep until you have a working URL. If deployment fails, check the logs. 90% of failures are connection string or migration issues."</p>
      </blockquote>
      <hr />
      <h3>AI Integration Note</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 10 min (5 min demo -&gt; 5 min try)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Full AI is allowed and required this week. Use AI for deployment troubleshooting, error message diagnosis, and optimization suggestions. Submit your prompt log showing you used AI to help debug deployment issues."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Prompt template:
        "I'm deploying my ASP.NET Core app to [platform] and getting this error [paste log]. What's wrong?"</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> Demonstrate asking AI about a deployment error. Show how to paste the platform's log output and get a diagnosis. "AI is great at reading error logs — it's like having a senior dev looking over your shoulder."</p>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "AI is your 'deployment buddy' — it reads error logs, suggests fixes, and tells you what env vars you need. But you still need to understand what it's telling you."</p>
      </blockquote>
      <hr />
      <h3>Debugging / "Watch Out For"</h3>
      <blockquote>
        <p>[TIME] <strong>Pacing:</strong> 15 min (5 min common errors -&gt; 5 min group debug -&gt; 5 min Q&amp;A)</p>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Here are the deployment errors you WILL see. Let's go through them so you don't panic when they happen."</p>
      </blockquote>
      <blockquote>
        <p>[SLIDE] <strong>Slide:</strong> Error cards:</p>
        <pre><code>+------------------------------------------+
        | 502 Bad Gateway                          |
        | Your app crashed on startup.             |
        | Check logs: connection string? missing   |
        | migration? missing env vars?             |
        +------------------------------------------+
        +------------------------------------------+
        | CSS broken on live site                  |
        | Check: UseStaticFiles() in Program.cs    |
        | Paths use ~: href="~/css/site.css"       |
        +------------------------------------------+
        +------------------------------------------+
        | Redirect loop after deployment           |
        | UseHttpsRedirection() conflicts with     |
        | platform's HTTPS termination.            |
        | Fix: conditionally apply it.             |
        +------------------------------------------+
      </code></pre>
      </blockquote>
      <blockquote>
        <p>[ENGAGE] <strong>Gen-Z:</strong> "502 Bad Gateway is like calling a restaurant and getting no answer. The server is there but your app crashed. Check the logs — they'll tell you exactly what went wrong."</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "My free tier app goes to sleep — is that a problem for the demo?"
        <strong>Short answer:</strong> No, just wait for it to wake up.
        <strong>Real answer:</strong> Render free tier spins down after 15 min of inactivity. The first request after idle takes ~30 seconds. This is normal. Mention it in your presentation: "The app sleeps to save resources — this is expected behavior on the free tier."
        <strong>The hidden question:</strong> "Should I upgrade?" -&gt; Not for a class project. The free tier is enough for a demo.</p>
      </blockquote>
      <blockquote>
        <p>[Q&amp;A] <strong>Student Q:</strong> "Should I commit my connection string to GitHub?"
        <strong>Short answer:</strong> NEVER.
        <strong>Real answer:</strong> Connection strings contain passwords. If you commit them, they're public forever. Use <code>appsettings.Production.json</code> (excluded from git via <code>.gitignore</code>) or environment variables on the platform.
        <strong>The hidden question:</strong> "How do I check if I already committed it?" -&gt; <code>git log -p -- appsettings.json</code> — if you see the connection string in the diff, rotate the password immediately.</p>
      </blockquote>
      <blockquote>
        <p>[LOST] <strong>If they're lost:</strong> "The three things to check first: (1) Is your connection string set as an environment variable? (2) Did migrations run on the server? (3) Are you reading the platform's logs? Those fix 90% of deployment issues."</p>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> End with one action item: "If you only remember one thing: an app on the internet is real. An app on localhost is a draft. Today you shipped something real. Be proud of that."</p>
      </blockquote>
      <hr />
      <h3>Teaching Script</h3>
      <p>This week's annotations cover: pacing table at top, inline annotations per section ([SPEAK] Script, [SLIDE] Slide, [BOARD] Whiteboard, [TIP] Teaching Tip, [ENGAGE] Gen-Z, [Q&amp;A] Student Q, [LOST] If they're lost), and this summary. This is deployment and presentation week — keep lectures short, spend 70 min on deploy + demo. The live deployment demo is the most important moment — actually deploy an app during class, even if it takes time. The kitchen-to-restaurant analogy should be used repeatedly. The #1 deployment error is connection string issues — drill environment variables over hardcoded values. The presentation structure (1 min pitch, 4 min demo, 2 min architecture, 2 min challenges, 1 min AI) should be written on the board. Help every student get a live URL — that's the deliverable. Celebrate the moment they see their app on the internet for the first time.</p>
      <hr />
      <h2>Quick Reference Cards</h2>
      <h3>C# / VB Translation Card</h3>
      <table>
        <thead>
          <tr>
            <th>VB.NET</th>
            <th>C#</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><code>Dim x As Integer = 5</code></td>
          <td><code>int x = 5;</code></td>
        </tr>
        <tr>
          <td><code>Public Property Name As String</code></td>
          <td><code>public string Name &#123; get; set; &#125;</code></td>
        </tr>
        <tr>
          <td><code>If x &gt; 5 Then ... End If</code></td>
          <td><code>if (x &gt; 5) &#123; ... &#125;</code></td>
        </tr>
        <tr>
          <td><code>For i = 1 To 10</code></td>
          <td><code>for (int i = 1; i &lt;= 10; i++)</code></td>
        </tr>
        <tr>
          <td><code>Function Add(a, b) As Integer</code></td>
          <td><code>int Add(int a, int b)</code></td>
        </tr>
        <tr>
          <td><code>Nothing</code></td>
          <td><code>null</code></td>
        </tr>
        <tr>
          <td><code>&amp;</code> (string concat)</td>
          <td><code>+</code> or <code>$"..."</code></td>
        </tr>
        <tr>
          <td><code>arr(0)</code></td>
          <td><code>arr[0]</code></td>
        </tr>
      </tbody></table>
      <h3>HTTP Status Codes Cheat Sheet</h3>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Meaning</th>
            <th>What to do</th>
          </tr>
        </thead>
        <tbody><tr>
          <td>200</td>
          <td>OK</td>
          <td>Everything worked</td>
        </tr>
        <tr>
          <td>201</td>
          <td>Created</td>
          <td>POST succeeded</td>
        </tr>
        <tr>
          <td>301</td>
          <td>Moved Permanently</td>
          <td>URL changed, update your links</td>
        </tr>
        <tr>
          <td>400</td>
          <td>Bad Request</td>
          <td>You sent bad data</td>
        </tr>
        <tr>
          <td>401</td>
          <td>Unauthorized</td>
          <td>Need to log in</td>
        </tr>
        <tr>
          <td>403</td>
          <td>Forbidden</td>
          <td>Logged in but not allowed</td>
        </tr>
        <tr>
          <td>404</td>
          <td>Not Found</td>
          <td>URL doesn't exist</td>
        </tr>
        <tr>
          <td>500</td>
          <td>Server Error</td>
          <td>The server broke (not your fault but you have to fix it)</td>
        </tr>
      </tbody></table>
      <h3>DI Registration Lifetimes</h3>
      <table>
        <thead>
          <tr>
            <th>Lifetime</th>
            <th>When created</th>
            <th>Use for</th>
          </tr>
        </thead>
        <tbody><tr>
          <td><code>AddTransient</code></td>
          <td>Every time it's requested</td>
          <td>Lightweight, stateless services</td>
        </tr>
        <tr>
          <td><code>AddScoped</code></td>
          <td>Once per HTTP request</td>
          <td>DbContext, services with state per request</td>
        </tr>
        <tr>
          <td><code>AddSingleton</code></td>
          <td>Once for the app's lifetime</td>
          <td>Configuration, caching, logging</td>
        </tr>
      </tbody></table>
      <h3>EF Core Query Patterns</h3>
      <pre><code className="language-csharp">// Get all
      db.Products.ToListAsync()
      
      // Get one by ID
      db.Products.FindAsync(id)
      db.Products.FirstOrDefaultAsync(p =&gt; p.Id == id)
      
      // Filter
      db.Products.Where(p =&gt; p.Price &gt; 100).ToListAsync()
      
      // Include related data
      db.Products.Include(p =&gt; p.Category).ToListAsync()
      
      // Nested include
      db.Categories.Include(c =&gt; c.Products)
      .ThenInclude(p =&gt; p.Reviews).ToListAsync()
      
      // Projection (only specific fields)
      db.Products.Select(p =&gt; new &#123; p.Name, p.Price &#125;).ToListAsync()
      
      // Count
      db.Products.CountAsync()
      
      // Check existence
      db.Products.AnyAsync(p =&gt; p.Name == "Nintendo Switch")
      </code></pre>
      <h3>Security Checklist</h3>
      <ul>
        <li><input disabled="" type="checkbox" /> All POST forms include <code>@Html.AntiForgeryToken()</code></li>
        <li><input disabled="" type="checkbox" /> All POST actions have <code>[ValidateAntiForgeryToken]</code></li>
        <li><input disabled="" type="checkbox" /> Never use <code>@Html.Raw()</code> on user input</li>
        <li><input disabled="" type="checkbox" /> All database queries use LINQ (not <code>FromSqlRaw</code>)</li>
        <li><input disabled="" type="checkbox" /> <code>app.UseAuthentication()</code> is before <code>app.UseAuthorization()</code></li>
        <li><input disabled="" type="checkbox" /> HTTPS is enabled in production</li>
        <li><input disabled="" type="checkbox" /> Passwords are hashed (Identity does this automatically)</li>
        <li><input disabled="" type="checkbox" /> Error pages don't show stack traces in production</li>
      </ul>
      <hr />
      <p><em>End of Elective 2: Building Web Products — Full Lesson Content</em></p>
    </div>
  )
}
