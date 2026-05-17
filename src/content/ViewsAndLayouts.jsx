export default function ViewsAndLayouts() {
  return (
    <div className="page-content">
      <h2>Week 7: Views &amp; Layouts</h2>
      <div style={{ background: '#e0f2fe', padding: '15px', borderLeft: '5px solid #0284c7', marginBottom: '20px' }}>
        <strong>Learning Objectives:</strong>
        <ul>
          <li>Understand how the Razor templating engine blends C# logic with HTML markup.</li>
          <li>Implement Layout pages and <code>RenderBody()</code> to maintain consistent application branding.</li>
          <li>Utilize <code>_ViewStart</code> and <code>_ViewImports</code> to globally manage view configurations.</li>
          <li>Extract reusable UI components into Partial Views to adhere to the DRY principle.</li>
        </ul>
      </div>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 6: Controllers &amp; Action Results"<br />
        🎯 This week: "Focus on the View layer — layouts, partials, and the Razor templating engine"<br />
        <br />
        <strong>Core Concepts:</strong><br />
        ▸ A. The Razor Engine (7 min)<br />▸ B. Layout Pages &amp; `RenderBody()` (7 min)<br />▸ C. ViewImports &amp; ViewStart (6 min)<br />▸ D. Partial Views (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality + AI Integration + Take-Home Mission (Razor Portfolio)<br />
        <br />
        ✅ By end of lab: Understand Razor runs server-side; write `foreach` in HTML via Razor; know what `RenderBody()` does; explain purpose of `Shared` folder
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
            <td>Lecture + Slides + Razor Syntax</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (Layouts &amp; Partials)</td>
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
        <p>[TIP] <strong>Teaching Tip:</strong> Students often confuse Razor with frontend frameworks (like React). Constantly remind them: "Razor runs on the server. By the time the browser sees it, it is 100% plain HTML."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "If you have a website with 50 pages, and your boss says 'change the copyright year in the footer', are you going to open 50 files and edit them? No. That's a waste of your life. Today we learn how to write UI code exactly once."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Picture Frame</p>
        <ul>
          <li><strong>Layout (<code>_Layout.cshtml</code>):</strong> The wooden frame and the glass. It never changes. It holds the navigation bar and the footer.</li>
          <li><strong>View (<code>Index.cshtml</code>):</strong> The picture inside the frame. When you click a link, the frame stays on the wall, but we swap the picture.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. The Razor Engine (7 min)</h4>
      <p><strong>Module Syllabus Content:</strong> Razor is a server-side markup syntax that seamlessly blends HTML with C# code. Unlike frontend frameworks that execute in the user's browser, Razor templates (<code>.cshtml</code> files) are fully processed on the server. When a view is requested, the Razor engine scans for the <code>@</code> symbol to identify C# expressions, executes the underlying logic (such as loops, conditionals, or string formatting), injects the resulting data into the HTML structure, and finally sends pure, static HTML to the browser. This ensures that sensitive backend logic and data shapes are never exposed to the client.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Razor is a templating engine. It scans your HTML, looks for the <code>@</code> symbol, executes the C# code, and then rips the C# out, leaving only the resulting HTML to send to the user."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-html">&lt;!-- What you write (.cshtml) --&gt;
        &lt;ul&gt;
        @foreach(var item in Model) &#123;
        &lt;li&gt;@item.Name&lt;/li&gt;
        &#125;
        &lt;/ul&gt;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Explain the difference between <code>@</code> (inline expression) and <code>@&#123; &#125;</code> (code block). Code blocks don't print to the screen.</p>
      </blockquote>
      <h4>▸ B. Layout Pages &amp; <code>RenderBody()</code> (7 min)</h4>
      <p><strong>Module Syllabus Content:</strong> To maintain a consistent look and feel across an application, developers use Layout pages (typically <code>_Layout.cshtml</code>). A layout acts as a master wrapper, containing the standard HTML boilerplate (like <code>&lt;head&gt;</code> tags, CSS links, navigation bars, and footers) that should appear on every page. The magic happens via the <code>@RenderBody()</code> method call. When a specific view (like <code>Index.cshtml</code>) is requested, its content is dynamically injected exactly where <code>@RenderBody()</code> is located within the Layout, preventing developers from having to duplicate navigation code across dozens of files.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "The Layout page is your master template. The magic happens at a specific method called <code>@RenderBody()</code>. That is the exact spot where your individual views are injected."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-html">&lt;!-- Inside _Layout.cshtml --&gt;
        &lt;body&gt;
        &lt;nav&gt;My Website&lt;/nav&gt;
        &lt;main&gt;
        @RenderBody() &lt;!-- The 'Picture' goes here --&gt;
        &lt;/main&gt;
        &lt;footer&gt;2026&lt;/footer&gt;
        &lt;/body&gt;
      </code></pre>
      <p><strong>[TIP] Gen-Z Hook:</strong> The Layout is your phone's status bar (battery, time). <code>RenderBody()</code> is the actual app you are currently using.</p>
      </blockquote>
      <h4>▸ C. ViewImports &amp; ViewStart (6 min)</h4>
      <p><strong>Module Syllabus Content:</strong> ASP.NET Core provides special files to globally manage view behaviors. <code>_ViewStart.cshtml</code> executes before any individual view runs, making it the perfect place to assign the default Layout page for the entire application. <code>_ViewImports.cshtml</code> is used to declare global C# namespaces and Tag Helpers. By putting your <code>@using MyProject.Models</code> directives inside <code>_ViewImports</code>, you make those models instantly available to every single Razor view in the project, keeping your individual <code>.cshtml</code> files clean and focused purely on UI rendering.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "To avoid typing the same C# using statements at the top of every single view, we use <code>_ViewImports.cshtml</code>. It applies globally. <code>_ViewStart.cshtml</code> is where we tell every view to use the master Layout by default."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">// Inside _ViewStart.cshtml
        @&#123;
        Layout = "_Layout";
        &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Show what happens if you delete <code>_ViewStart</code>. Every page suddenly loses its CSS and navigation because it forgets to use the Layout.</p>
      </blockquote>
      <h4>▸ D. Partial Views (5 min)</h4>
      <p><strong>Module Syllabus Content:</strong> As views become complex, UI elements like product cards, comment sections, or user profile badges are often repeated across multiple pages. Partial Views solve this by allowing developers to extract these reusable chunks of HTML/Razor into their own standalone files (usually prefixed with an underscore, e.g., <code>_ProductCard.cshtml</code>). These partials can then be injected into any main view, passing in specific data models. This promotes the DRY (Don't Repeat Yourself) principle, ensuring that if the design of a product card needs to change, it only has to be updated in one centralized file.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "What if you have a complex UI element, like a Product Card, that appears on the Home page, the Search page, and the Cart page? We extract it into a Partial View so we can reuse it like a component."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-html">&lt;!-- Injecting a partial view --&gt;
        &lt;partial name="_ProductCard" model="currentItem" /&gt;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Note the naming convention: Layouts and Partials start with an underscore <code>_</code> to indicate they are not standalone pages.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build a Layout from scratch and break our UI into reusable pieces."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The Raw Layout</strong><ul>
        <li><em>Action:</em> Delete the default scaffolded layout. Create a new <code>_Layout.cshtml</code> with a simple Navbar and Footer. Add <code>@RenderBody()</code>.</li>
      </ul>
      </li>
      <li><strong>Step 2: Testing the Injection</strong><ul>
      <li><em>Action:</em> Create two views (<code>Home</code> and <code>About</code>). Click between them to show that the Navbar never reloads, but the content changes.</li>
      </ul>
      </li>
      <li><strong>Step 3: Creating a Partial</strong><ul>
      <li><em>Action:</em> Create <code>_UserCard.cshtml</code>. Use a <code>&lt;partial&gt;</code> tag inside a <code>foreach</code> loop to render a grid of 10 users using only 3 lines of code in the main view.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Build a "Storefront". Create a master Layout with a header. Create a list of dummy products. Build a Partial View called <code>_ProductTile.cshtml</code> that renders an image, title, and price. Use a loop on the Index page to render the partial for each product.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "In a real enterprise application, the <code>_Layout.cshtml</code> file can get messy very fast. Junior devs will put 50 script tags and CSS links in it. Always use <code>@RenderSection("Scripts", required: false)</code>. This allows a specific view (like a map page) to inject a heavy JavaScript file ONLY when that page loads, rather than forcing the entire application to download it on every click."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> 5. AI Integration &amp; Debugging</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "How do I write an if/else block in Razor?" Not Allowed: "Write the HTML for my entire dashboard."</li>
        <li><strong>Common Error 1:</strong> <code>The name 'Model' does not exist in the current context.</code> -&gt; You forgot to declare the <code>@model</code> directive at the top of the file.</li>
        <li><strong>Common Error 2:</strong> <code>Cannot locate the partial view '_MyCard'.</code> -&gt; You put it in a specific controller's folder instead of the <code>Views/Shared</code> folder.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
      </blockquote><h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I understand that Razor executes on the server, not the browser.</li>
          <li><input disabled="" type="checkbox" /> I can write a <code>foreach</code> loop in an HTML file using Razor.</li>
          <li><input disabled="" type="checkbox" /> I know what <code>@RenderBody()</code> does in a Layout file.</li>
          <li><input disabled="" type="checkbox" /> I can explain the purpose of the <code>Shared</code> folder.</li>
        </ul>
      </blockquote>
      
      <blockquote>
      </blockquote><h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Theme Switcher"</p>
        <ol>
          <li>Create a simple MVC blog with a Layout.</li>
          <li>Create a specific <code>_Sidebar.cshtml</code> partial view for recent posts.</li>
          <li><strong>The Catch:</strong> Pass a string to <code>ViewData["Theme"] = "dark"</code> in the Controller. In the <code>_Layout.cshtml</code>, write a Razor <code>@if</code> statement that checks this ViewData. If it's dark, apply a dark CSS class to the <code>&lt;body&gt;</code>. If not, apply a light class.</li>
        </ol>
      </blockquote>
      
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 7. Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> A project with 3 pages that have massive, duplicated HTML code in every single file.</li>
          <li><strong>Solution Repo:</strong> The refactored project using a clean <code>_Layout.cshtml</code> and <code>_Partial</code> views to eliminate the duplication.</li>
        </ul>
      </blockquote>
    </div>
  )
}
