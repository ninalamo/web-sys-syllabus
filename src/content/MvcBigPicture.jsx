export default function MvcBigPicture() {
  return (
    <div className="page-content">
      <h2>Week 4: MVC Big Picture</h2>
      <div style={{ background: '#e0f2fe', padding: '15px', borderLeft: '5px solid #0284c7', marginBottom: '20px' }}>
        <strong>Learning Objectives:</strong>
        <ul>
          <li>Understand the Model-View-Controller (MVC) architectural pattern and its benefits.</li>
          <li>Trace an HTTP request entirely through the ASP.NET Core MVC pipeline.</li>
          <li>Navigate and explain the default folder structure and conventions of a scaffolded MVC project.</li>
          <li>Use basic Razor syntax (<code>@</code>) to dynamically render C# variables within HTML views.</li>
        </ul>
      </div>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 3: HTTP &amp; The Web"<br />
        🎯 This week: "Build our first real web app by understanding the MVC architectural pattern"<br />
        <br />
        <strong>Core Concepts:</strong><br />
        ▸ A. The MVC Pipeline Flow (9 min)<br />▸ B. Scaffolded File Structure (8 min)<br />▸ C. Razor Syntax Basics (8 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality + AI Integration + Take-Home Mission (Trace the Pipeline)<br />
        <br />
        ✅ By end of lab: Trace URL to Controller Action; know Models/Views/Controllers; use `@` to render C# in HTML; explain Controller as middleman
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
            <td>Lecture + Slides + Pipeline Diagram</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (scaffold + trace)</td>
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
            <td>10 min</td>
            <td>Overflow / Stretch discussion</td>
          </tr>
        </tbody></table>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> This is the first time students build a real web app. The MVC pattern will feel abstract until they see it working. Scaffold the project live, then trace the pipeline step by step.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "You know how Grab works? You open the app, see a map, order food, track delivery? That's MVC. And now you're going to build it. Well, not Grab. But the architecture behind it."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Restaurant Pipeline</p>
        <ul>
          <li><strong>Customer (Browser):</strong> Reads the menu and orders.</li>
          <li><strong>Menu (Route):</strong> Understands the request (e.g., <code>/products/details/5</code>).</li>
          <li><strong>Waiter (Controller):</strong> Takes the order to the kitchen.</li>
          <li><strong>Kitchen (Model):</strong> Cooks the food (gets data from Database).</li>
          <li><strong>Plating (View):</strong> Makes the food look good (.cshtml -&gt; HTML).</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. The MVC Pipeline Flow (9 min)</h4>
      <p><strong>Module Syllabus Content:</strong> The Model-View-Controller (MVC) pattern is a software architectural pattern that separates an application into three main logical components: the Model (business logic and data shape), the View (the user interface), and the Controller (the orchestrator). In ASP.NET Core MVC, when an HTTP request arrives, the routing engine directs it to a specific Controller. The Controller processes the input, optionally interacts with a database to build a Model, and then passes that Model to a View. The View uses the Model data to generate raw HTML, which the Controller then returns to the browser as the HTTP response. This separation of concerns ensures that your database code is strictly isolated from your HTML markup.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "When you type a URL, it doesn't just open a file anymore. It triggers a pipeline. The URL is routed to a Controller, which asks the Model for data, and hands that data to a View to generate HTML."</p>
        <p><strong>[VISUAL] Example:</strong>
        Draw the pipeline: <code>Browser -&gt; URL -&gt; Route -&gt; Controller -&gt; Model -&gt; View -&gt; HTML -&gt; Browser</code>.</p>
        <p><strong>[TIP] Instructor Tip:</strong> The key insight is "Controller is the middleman." Students will want to put business logic in the controller. Resist this urge early: "The controller delegates. It doesn't do real work."</p>
      </blockquote>
      <h4>▸ B. Scaffolded File Structure (8 min)</h4>
      <p><strong>Module Syllabus Content:</strong> ASP.NET Core MVC heavily relies on "convention over configuration." This means the framework expects files to be in specific folders with specific naming schemes, eliminating the need for excessive configuration files. A standard scaffolded project contains a <code>Controllers</code> folder for your C# controller classes, a <code>Models</code> folder for your data classes, and a <code>Views</code> folder containing subfolders that map directly to your controller names. At the root of the project is <code>Program.cs</code>, which acts as the entry point of the application, configuring the web server, registering dependencies (IoC container), and setting up the HTTP request pipeline.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "In an MVC app, convention is king. Folders are named specifically so the framework knows where to find things automatically."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-text">/Controllers (C# logic)
        /Models (Data shapes)
        /Views (Razor HTML templates)
        Program.cs (The engine startup)
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Tell them: "If you name your folder 'MyViews' instead of 'Views', the app breaks. Follow the conventions."</p>
      </blockquote>
      <h4>▸ C. Razor Syntax Basics (8 min)</h4>
      <p><strong>Module Syllabus Content:</strong> Razor is a markup syntax that lets developers embed server-based C# code directly into web pages (HTML). It is not a new programming language; rather, it is a templating engine that transitions seamlessly between HTML and C#. By prefixing a line or variable with the <code>@</code> symbol, the Razor engine evaluates the C# code, converts the result to a string, and injects it into the HTML output before the page is sent to the client's browser. Razor also supports control structures like <code>@if</code> statements and <code>@foreach</code> loops, enabling developers to dynamically generate complex UI elements like lists or tables based on backend data.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Razor is not a new language. It is an engine that lets you sprinkle C# into your HTML using the <code>@</code> symbol."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-html">&lt;h1&gt;Welcome, @Model.UserName&lt;/h1&gt;
        @if(Model.IsAdmin) &#123; &lt;button&gt;Delete&lt;/button&gt; &#125;
      </code></pre>
      <p><strong>[TIP] Gen-Z Hook:</strong> Razor is like an Instagram filter. The HTML is the raw photo; the C# <code>@</code> syntax dynamically changes how it looks before it's posted to the browser.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's scaffold an MVC project from scratch and trace exactly what happens when a request comes in."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: Scaffolding</strong><ul>
        <li><em>Action:</em> Run <code>dotnet new mvc -n HelloMvc</code> live. Open the folder. Show <code>Program.cs</code>.</li>
      </ul>
      </li>
      <li><strong>Step 2: Trace the Default Route</strong><ul>
      <li><em>Action:</em> Open <code>Program.cs</code> and show <code>pattern: "&#123;controller=Home&#125;/&#123;action=Index&#125;/&#123;id?&#125;"</code>. Explain what this means.</li>
      </ul>
      </li>
      <li><strong>Step 3: Controller to View</strong><ul>
      <li><em>Action:</em> Open <code>HomeController.cs</code>. Show the <code>Index()</code> action returning <code>View()</code>. Open <code>Views/Home/Index.cshtml</code> and change the <code>&lt;h1&gt;</code>. Run the app.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Scaffold a new MVC app. Create a <code>MoviesController</code>. Add an <code>Index</code> action that returns a view with a list of 3 hardcoded movies using Razor syntax.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "Why do we use MVC? Because when the Marketing team says 'change the button color', you shouldn't have to touch database code. When the Database team changes a table, the UI shouldn't break. MVC separates concerns. If you mix your SQL queries into your HTML files, you are building a nightmare that no company will pay you to maintain."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> 5. AI Integration &amp; Debugging</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "Explain this Razor syntax." Not Allowed: "Generate my entire MVC controller and view."</li>
        <li><strong>Common Error 1:</strong> <code>InvalidOperationException: The view 'Index' was not found.</code> -&gt; You misspelled the view file, put it in the wrong folder, or your Action method name doesn't match the view name.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
      </blockquote><h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I can trace the path of a URL to a Controller Action.</li>
          <li><input disabled="" type="checkbox" /> I know the difference between the Models, Views, and Controllers folders.</li>
          <li><input disabled="" type="checkbox" /> I can use the <code>@</code> symbol to render a C# variable in HTML.</li>
          <li><input disabled="" type="checkbox" /> I can explain why the Controller is just a "middleman".</li>
        </ul>
      </blockquote>
      
      <blockquote>
      </blockquote><h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Portfolio Skeleton"</p>
        <ol>
          <li>Create a new MVC project.</li>
          <li>Create a <code>PortfolioController</code>.</li>
          <li>Add 3 Actions: <code>AboutMe</code>, <code>Projects</code>, <code>Contact</code>.</li>
          <li>Create the corresponding 3 Razor Views.</li>
          <li><strong>The Catch:</strong> Use a shared layout file <code>_Layout.cshtml</code> to ensure all 3 pages have the exact same navigation menu.</li>
        </ol>
      </blockquote>
      
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 7. Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> Nothing. You will scaffold this live.</li>
          <li><strong>Solution Repo:</strong> A completed MVC project with the <code>MoviesController</code> and a basic Razor view iterating over a <code>List&lt;string&gt;</code>.</li>
        </ul>
      </blockquote>
    </div>
  )
}
