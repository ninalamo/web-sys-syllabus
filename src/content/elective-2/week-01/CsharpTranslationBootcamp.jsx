export default function CsharpTranslationBootcamp() {
  return (
    <div className="page-content">
      <h2>Week 1: C# Translation Bootcamp</h2>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px', color: '#111' }}>
        <strong>📋 This Week at a Glance</strong><br />
        <h5>Want to see how all of this fits into a full web system? <a href="/content/elective-2/week-01/WebSystemsOverview">Web‑Systems Overview</a></h5>
        🎯 This week: "Learn C# fundamentals — syntax, types, variables, and classes — the foundation for building web apps with ASP.NET Core"<br />
        <br />
        <strong>Core Concepts:</strong><br />
        ▸ A. Case Sensitivity &amp; Naming Conventions (5 min)<br />
        ▸ B. Semicolons &amp; Statements (5 min)<br />
        ▸ C. Console App Anatomy — Project Structure &amp; the Build-Run Cycle (8 min)<br />
        ▸ D. Curly Braces &amp; Code Blocks (7 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality + AI Integration + Take-Home Mission (The Translation Engine)<br />
        <br />
        ✅ By end of lab: Fix capitalization errors; end statements with semicolons; scaffold and run a console app; use curly braces
      </div>
      <blockquote>
        <p>[TIME] <strong>Session Pacing (Lab - ~150 min)</strong></p>
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
              <td>Lecture + Slides + Live Demos</td>
            </tr>
            <tr>
              <td>Code Walkthrough</td>
              <td>35 min</td>
              <td>Live Code (instructor + students type)</td>
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
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This is Week 1. Students are nervous. Some haven't written code in months. If they only get one thing from this week, it should be: curly braces, semicolons, and the build-run cycle.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. Course Overview &amp; The Hook</h3>
      <blockquote>
        <p>[SPEAK] <strong>Course Framing — "Web Systems and Technologies":</strong> "This course is called <em>Web Systems and Technologies</em>. Let's be clear what that means: we are here to build web applications that run on the open internet. Not console apps, not desktop forms — real, deployed web software that users access through a browser. Over the next 16 weeks, you will learn to build multi-page web applications using ASP.NET Core MVC with C#, connected to databases, secured with authentication, and deployed to the cloud."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard — The 16-Week Roadmap:</strong></p>
        <ul>
          <li><strong>Prelim (Weeks 1-4):</strong> C# for MVC + Web Foundations — learn the language, understand HTTP, grasp MVC</li>
          <li><strong>Midterm (Weeks 5-8):</strong> ASP.NET Core MVC — routes, controllers, views, model binding, validation</li>
          <li><strong>PreFinals (Weeks 9-12):</strong> Data &amp; Persistence — Entity Framework, database relationships, consuming APIs</li>
          <li><strong>Finals (Weeks 13-16):</strong> Auth, Security, and Capstone — ship a complete full-stack product</li>
        </ul>
      </blockquote>
      <blockquote>
        <p>[SPEAK] <strong>Why C# First?:</strong> "This entire course is built on C# and ASP.NET Core. You cannot build an MVC web application without knowing the language it's written in. This week is our C# fundamentals sprint — curly braces, semicolons, types, classes, properties, loops. If you have programmed before in any language (Java, Python, even VB), the concepts are the same — only the syntax changes. If you haven't, this week gives you the scaffolding to survive the next 15 weeks. Either way, we start from 'this is a semicolon' and build up."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> Learning the Alphabet Before Writing a Novel</p>
        <ul>
          <li>You can't write an ASP.NET Core MVC app without knowing C#.</li>
          <li>You can't know C# without understanding types, scopes, and statements.</li>
          <li>This week is the alphabet. The next 15 weeks are the novel.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Module Discussion</h3>
      <h4>▸ A. Case Sensitivity &amp; Naming Conventions (5 min)</h4>
      <p><strong>Module Syllabus Content:</strong>
        C# is a strictly case-sensitive language. The compiler treats uppercase and lowercase letters as completely different entities. <code>Console</code>, <code>console</code>, and <code>CONSOLE</code> are three entirely distinct identifiers and will produce error <code>CS0103: The name does not exist in the current context</code> if mismatched.</p>
      <p>Standard naming conventions keep code readable:</p>
      <ul>
        <li><strong>PascalCase</strong> — Classes, Methods, Properties (e.g., <code>WriteLine</code>, <code>StudentManager</code>).</li>
        <li><strong>camelCase</strong> — local variables and parameters (e.g., <code>firstName</code>, <code>studentAge</code>).</li>
      </ul>
      <blockquote>
        <p><strong>[SPEAK] Instructor Script:</strong> "C# is extremely strict about letter case. If you miscapitalize a single letter, the compiler will crash."</p>
        <p><strong>[CODE] Live Example:</strong></p>
        <pre><code className="language-csharp">// WRONG: Throws CS0103
          console.writeline("Hello");

          // RIGHT
          Console.WriteLine("Hello");
        </code></pre>
        <p><strong>[TIP] Instructor Tip:</strong> Force them to fix casing errors manually rather than relying on Auto-Correct. Build the muscle memory now.</p>
      </blockquote>
      <h4>▸ B. Semicolons &amp; Statements (5 min)</h4>
      <p><strong>Module Syllabus Content:</strong>
        In C#, whitespace, line breaks, and tabs are completely ignored by the compiler. Every statement must end with an explicit semicolon (<code>;</code>) as a terminator. This means you can write multiple statements on one line, or stretch one statement across many lines. Forgetting the semicolon produces <code>CS1002: ; expected</code> — the most common syntax error for new C# developers.</p>
      <blockquote>
        <p><strong>[SPEAK] Instructor Script:</strong> "Pressing Enter does nothing to end a statement. You must tell the compiler you are finished speaking with a semicolon."</p>
        <p><strong>[CODE] Live Example:</strong></p>
        <pre><code className="language-csharp">var name = "Alice" // ERROR: Missing semicolon
          var age = 25;      // SUCCESS
        </code></pre>
        <p><strong>[TIP] Gen-Z Hook:</strong> The semicolon is the period at the end of a text message. It means "I'm done making my point."</p>
      </blockquote>
      <h4>▸ C. Console App Anatomy — Project Structure &amp; Build-Run Cycle (8 min)</h4>
      <p><strong>Module Syllabus Content:</strong>
        A basic C# console application has three key parts:</p>
      <ol>
        <li><strong>The Project File (<code>.csproj</code>)</strong> — XML file that tells .NET how to build the project (SDK version, target framework, dependencies).</li>
        <li><strong>Source File (<code>Program.cs</code>)</strong> — contains the code. Modern .NET uses <strong>top-level statements</strong>: you write code directly inside the file without wrapping it in a <code>class</code> or <code>Main</code> method. The compiler auto-generates the entry point for you.</li>
        <li><strong>The Build-Run Cycle</strong> — <code>dotnet build</code> compiles the code; <code>dotnet run</code> builds and executes in one step. Errors appear as compiler errors, not runtime crashes.</li>
      </ol>
      <p><strong>Key I/O methods:</strong></p>
      <ul>
        <li><code>Console.WriteLine()</code> — prints text to the output window, appends a newline.</li>
        <li><code>Console.Write()</code> — prints without a trailing newline.</li>
        <li><code>Console.ReadLine()</code> — reads a line of user input as a <code>string</code>.</li>
      </ul>
      <blockquote>
        <p><strong>[SPEAK] Instructor Script:</strong> "The console is your testing playground. Every app starts as a console app. You write code, you hit <code>dotnet run</code>, and you see output instantly. This is the fastest feedback loop in programming."</p>
        <p><strong>[CODE] Minimal "Hello, Name" App:</strong></p>
        <pre><code className="language-csharp">// Program.cs — top-level statements
          Console.Write("Enter your name: ");
          string name = Console.ReadLine();
          Console.WriteLine($"Hello, &#123;name&#125;!");
        </code></pre>
        <p><strong>[CODE] Show the compile-error feedback loop:</strong> intentionally remove a semicolon, run <code>dotnet run</code>, and show the red squiggle + <code>CS1002</code> in the terminal.</p>
        <p><strong>[TIP] Instructor Tip:</strong> Start every session with <code>dotnet new console -o demo</code> and have students <code>cd demo &amp;&amp; dotnet run</code> to verify the toolchain works before writing any code.</p>
      </blockquote>
      <h4>▸ D. Curly Braces &amp; Code Blocks (7 min)</h4>
      <p><strong>Module Syllabus Content:</strong>
        Curly braces <code>&#123;&#125;</code> define the start and end of code blocks in C# — for namespaces, classes, methods, loops, and conditionals. The opening brace <code>&#123;</code> opens a scope, and the closing brace <code>&#125;</code> closes it. Because there are no keyword terminators like <code>End If</code> or <code>End Sub</code>, you must be diligent about indentation to track which brace pairs with which.</p>
      <blockquote>
        <p><strong>[SPEAK] Instructor Script:</strong> "Curly braces create a visual box around a block of code. Everything inside the box belongs together."</p>
        <p><strong>[CODE] Live Example:</strong></p>
        <pre><code className="language-csharp">if (age &gt;= 18)
          &#123;
          Console.WriteLine("Adult");
          // The &#125; below marks the end of the if-block
          &#125;
        </code></pre>
        <p><strong>[TIP] Instructor Tip:</strong> Tell students to ALWAYS format with <code>Shift + Alt + F</code> (VS Code) to align braces. A misaligned brace is the fastest way to introduce a hard-to-find bug.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>35 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build something from nothing. I'll scaffold a console app, write code, and you'll see every piece — project file, source file, build, run. Watch once, then you'll do it."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: Scaffold the Project</strong><ul>
          <li><em>Action:</em> Open a terminal, run <code>dotnet new console -o MyFirstApp</code>, open the folder, and inspect the two files: <code>MyFirstApp.csproj</code> and <code>Program.cs</code>.</li>
          <li><em>Point out:</em> The <code>.csproj</code> file references the .NET SDK version. <code>Program.cs</code> has top-level statements — there is no visible <code>Main()</code> method.</li>
        </ul>
        </li>
        <li><strong>Step 2: Read Input &amp; Print Output</strong><ul>
          <li><em>Action:</em> Replace the default "Hello World!" with a program that asks for the user's name, reads it, and prints a greeting.</li>
          <li><em>Key concepts shown:</em> <code>Console.ReadLine()</code> returns a string, <code>Console.WriteLine()</code> output, string interpolation with <code>$""</code>.</li>
        </ul>
        </li>
        <li><strong>Step 3: Build, Run &amp; Break</strong><ul>
          <li><em>Action:</em> Run <code>dotnet run</code> — it works. Then deliberately remove a semicolon and run again — show the compiler error <code>CS1002</code> in the terminal.</li>
          <li><em>Point out:</em> The build-run cycle catches mistakes before the program ever executes.</li>
        </ul>
        </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. Debugging + Wrap</h3>
      <ul>
        <li><strong>Common Error 1:</strong> <code>CS1002 — ; expected</code>. -&gt; You forgot a semicolon. Check the end of your line.</li>
        <li><strong>Common Error 2:</strong> <code>CS0103 — The name doesn't exist in the current context</code>. -&gt; 99% of the time, this is a case sensitivity issue. You typed <code>console</code> instead of <code>Console</code>.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 5. In-Class Exercise</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Three small programs in one console app: FizzBuzz, a basic Calculator, and a Student Manager list. Use C# syntax.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <h3>From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "Why did the industry switch from VB to C#? Because C# is strictly enforced. When you're working on a codebase with 50 other developers, you don't want 'loose' code. You want strict rules so that if someone breaks something, the compiler yells at them immediately. C# forces you to be disciplined, which makes you a professional."</p>
      </blockquote>
      <h3>AI Integration</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "In C#, how do I write a For Each loop?" Not Allowed: "Write my FizzBuzz exercise for me."</li>
      </ul>
      <h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I know that C# is case-sensitive and can fix capitalization errors.</li>
          <li><input disabled="" type="checkbox" /> I remember to end my statements with semicolons.</li>
          <li><input disabled="" type="checkbox" /> I can write a basic <code>foreach</code> loop in C#.</li>
          <li><input disabled="" type="checkbox" /> I understand how to use <code>var</code> properly.</li>
          <li><input disabled="" type="checkbox" /> I can create a simple Class with Properties in C#.</li>
        </ul>
      </blockquote>
      <h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Translation Engine"
          Take the classic "Bank Account" assignment from your previous VB course. </p>
        <ol>
          <li>Rewrite the entire application in C#.</li>
          <li><strong>The Catch:</strong> You must use <code>var</code> for all local variable declarations, and use string interpolation <code>$</code> for all console outputs.</li>
        </ol>
      </blockquote>
      <h3>Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> A PDF or markdown file containing the "Old VB Code" snippets that you will translate live.</li>
          <li><strong>Solution Repo:</strong> A C# Console Application with the completed FizzBuzz, Calculator, and Student Manager code.</li>
        </ul>
      </blockquote>
      <h3>Week 01 Resources</h3>
      <ul>
        <li><strong>Exercises:</strong>
          <ul>
            <li><a href="week-01/exercises/in-class-exercise-prompt.htm">In-Class Exercise Prompt</a></li>
          </ul>
        </li>
        <li><strong>Resources:</strong>
          <ul>
            <li><a href="week-01/resources/learning-checklist.htm">Learning Checklist</a></li>
          </ul>
        </li>
        <li><strong>Presentations:</strong>
          <ul>
            <li><a href="week-01/presentations/slide-notes.htm">Slide Notes</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
