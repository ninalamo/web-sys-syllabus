export default function ModelBindingAndValidation() {
  return (
    <div className="page-content">
      <h2>Week 8: Model Binding &amp; Validation</h2>
      <div style={{ background: '#e0f2fe', padding: '15px', borderLeft: '5px solid #0284c7', marginBottom: '20px' }}>
        <strong>Learning Objectives:</strong>
        <ul>
          <li>Understand how the ASP.NET Core Model Binder maps HTTP request data to C# parameters.</li>
          <li>Bind complex HTML forms directly to strongly-typed C# object models.</li>
          <li>Apply Data Annotations to enforce strict validation rules on data models.</li>
          <li>Utilize <code>ModelState.IsValid</code> to prevent saving invalid data and return validation errors to the UI.</li>
        </ul>
      </div>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 7: Views &amp; Layouts"<br />
        🎯 This week: "Connect forms to the backend — model binding connects HTML to C# objects, and validation keeps bad data out"<br />
        <br />
        <strong>Core Concepts:</strong><br />
        ▸ A. The `name` Attribute Magic (7 min)<br />▸ B. Complex Object Binding (7 min)<br />▸ C. Data Annotations (6 min)<br />▸ D. `ModelState.IsValid` (5 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> From the Trenches (validation in production) + AI Integration + Take-Home Mission (Form with Validation)<br />
        <br />
        ✅ By end of lab: Know how `name` connects HTML to C#; bind HTTP POST to C# object; apply `[Required]`; use `ModelState.IsValid`
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
            <td>Lecture + Slides + HTML Forms</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
            <td>Live Code (Binding &amp; Annotations)</td>
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
        <p>[TIP] <strong>Teaching Tip:</strong> Model Binding is "magic" to students. They won't understand how the HTML form data automatically becomes a C# object. Walk through the <code>name</code> attribute matching process very slowly.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "In older languages, if a user submitted a form with 20 fields, you had to write 20 lines of code to manually extract each piece of data from the HTTP request. ASP.NET Core does this automatically. It's called Model Binding."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Translator</p>
        <ul>
          <li><strong>The Form (Spanish):</strong> The browser sends raw text data via HTTP (<code>name=Alice&amp;age=25</code>).</li>
          <li><strong>Model Binder (The Translator):</strong> ASP.NET catches this text, looks at your C# method, and automatically translates the text into a C# <code>User</code> object.</li>
          <li><strong>The Controller (English):</strong> You just use the object. No parsing required.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. The <code>name</code> Attribute Magic (7 min)</h4>
      <p><strong>Module Syllabus Content:</strong> Model Binding is the magical bridge between the stateless, text-based nature of HTTP and the strongly-typed, object-oriented world of C#. When an HTML form is submitted, the browser sends the data as simple key-value pairs (e.g., <code>firstName=John</code>). The ASP.NET Core Model Binder intercepts this request, looks at the parameters defined in your Controller's Action method, and automatically attempts to map the HTML <code>name</code> attributes to the C# variable names. If the names match, the framework parses the strings and converts them into the appropriate C# types (like <code>int</code> or <code>DateTime</code>) before your code even begins executing.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "How does the framework know which input goes to which C# variable? It matches the HTML <code>name</code> attribute exactly to the C# parameter name."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-html">&lt;!-- HTML --&gt;
        &lt;input type="text" name="firstName" /&gt;
      </code></pre>
      <pre><code className="language-csharp">// C# Controller
      [HttpPost]
      public IActionResult Save(string firstName) &#123; ... &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Tell them: "If your HTML says <code>name="userAge"</code> but your C# says <code>int age</code>, it will fail. They must match perfectly."</p>
      </blockquote>
      <h4>▸ B. Complex Object Binding (7 min)</h4>
      <p><strong>Module Syllabus Content:</strong> When dealing with large forms containing dozens of inputs, adding dozens of parameters to a controller method becomes unmaintainable. Instead, developers create a dedicated C# Class (often called a Data Transfer Object or DTO) whose properties match the form fields. The Model Binder is intelligent enough to instantiate this class, iterate through the incoming form data, and populate the class properties automatically. The controller method then simply accepts a single parameter—the fully populated complex object—making the code incredibly clean and easy to read.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "If a form has 10 fields, we don't write a C# method with 10 parameters. We create a Class, and the model binder maps the form directly into the Class properties."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">public class RegistrationDto &#123;
        public string Email &#123; get; set; &#125;
        public string Password &#123; get; set; &#125;
        &#125;
      
        [HttpPost]
        public IActionResult Register(RegistrationDto request) &#123; ... &#125;
      </code></pre>
      <p><strong>[TIP] Gen-Z Hook:</strong> Object binding is like auto-fill on your phone. As long as the labels match, the framework fills out the C# object for you instantly.</p>
      </blockquote>
      <h4>▸ C. Data Annotations (6 min)</h4>
      <p><strong>Module Syllabus Content:</strong> Trusting user input is a critical security flaw. Data Annotations allow developers to define strict validation rules directly on their model classes using attributes like <code>[Required]</code>, <code>[StringLength]</code>, or <code>[EmailAddress]</code>. By attaching these rules to the model rather than writing complex <code>if</code> statements in the controller, you ensure a clear separation of concerns. The framework uses these annotations to validate the data immediately after Model Binding occurs, ensuring that malformed data never makes its way into your core business logic or database.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "We don't want users submitting blank emails or passwords that are 2 characters long. Instead of writing massive <code>if</code> statements in the controller, we attach rules directly to the Model using Attributes."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">[Required(ErrorMessage = "Email is required")]
        [EmailAddress]
        public string Email &#123; get; set; &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Explain Separation of Concerns. The Controller routes traffic; it shouldn't be responsible for knowing what makes a password valid.</p>
      </blockquote>
      <h4>▸ D. <code>ModelState.IsValid</code> (5 min)</h4>
      <p><strong>Module Syllabus Content:</strong> While Data Annotations define the rules, the Controller must actively enforce them. This is done by checking the <code>ModelState.IsValid</code> property. If the incoming data violates any of the Data Annotations, <code>ModelState.IsValid</code> becomes false, and the framework automatically populates an internal dictionary with the specific error messages. The controller should then immediately return the View, passing the rejected data back to it. ASP.NET Core's Tag Helpers (like <code>asp-validation-for</code>) will intercept these errors and dynamically display them next to the form fields, guiding the user to fix their mistakes without losing the data they already typed.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "Annotations define the rules, but the Controller has to enforce them. <code>ModelState.IsValid</code> checks if the incoming data passed all the annotation tests."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">if (!ModelState.IsValid) &#123;
        return View(request); // Kick them back to the form with errors
        &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Emphasize that returning the <code>request</code> back to the view is what keeps the user's typed data in the boxes so they don't have to start over.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build a registration form, break it on purpose, and then secure it with validation."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The Raw Form</strong><ul>
        <li><em>Action:</em> Create a simple HTML form for a User (Name, Age). Point it to a <code>[HttpPost]</code> action. Show the debugger catching the populated C# object.</li>
      </ul>
      </li>
      <li><strong>Step 2: Adding Annotations</strong><ul>
      <li><em>Action:</em> Add <code>[Required]</code> and <code>[Range(18, 99)]</code> to the Age property. Submit the form with age 12.</li>
      </ul>
      </li>
      <li><strong>Step 3: Enforcing <code>ModelState</code></strong><ul>
      <li><em>Action:</em> Add the <code>if (!ModelState.IsValid)</code> block.</li>
      </ul>
      </li>
      <li><strong>Step 4: Tag Helpers</strong><ul>
      <li><em>Action:</em> Add <code>&lt;span asp-validation-htmlFor="Age"&gt;&lt;/span&gt;</code> to the HTML to show the error message dynamically on the screen.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Build a "Contact Us" form. Bind it to a <code>ContactMessage</code> class. Require the Name, make the Email a valid email address, and ensure the Message is at least 20 characters long. Display the validation errors on the form.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "Never, ever trust client-side validation. You can write HTML5 <code>required</code> attributes and JavaScript validation all day. But I can open Chrome DevTools, delete your JavaScript, and submit a blank form to your server. Client-side validation is for User Experience (making it fast). Server-side validation (<code>ModelState</code>) is for Security. You must always have both."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> 5. AI Integration &amp; Debugging</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "What Data Annotation do I use for a phone number?" Not Allowed: "Write the controller logic for my login form."</li>
        <li><strong>Common Error 1:</strong> Object properties are all null. -&gt; Your HTML <code>name</code> attributes don't match your C# property names.</li>
        <li><strong>Common Error 2:</strong> The form clears out when there's an error. -&gt; You returned <code>View()</code> instead of <code>View(model)</code> in your <code>!ModelState.IsValid</code> block.</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
      </blockquote><h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I know how the <code>name</code> attribute connects HTML to C#.</li>
          <li><input disabled="" type="checkbox" /> I can bind an HTTP POST to a complex C# object.</li>
          <li><input disabled="" type="checkbox" /> I can apply Data Annotations like <code>[Required]</code> to a class.</li>
          <li><input disabled="" type="checkbox" /> I can use <code>ModelState.IsValid</code> to prevent bad data from saving.</li>
          <li><input disabled="" type="checkbox" /> I can explain why server-side validation is mandatory.</li>
        </ul>
      </blockquote>
      
      <blockquote>
      </blockquote><h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Strict Sign-Up"</p>
        <ol>
          <li>Create a User Registration form.</li>
          <li>Model: Username, Password, ConfirmPassword, Age.</li>
          <li><strong>The Catch:</strong> Use the <code>[Compare("Password")]</code> annotation to ensure ConfirmPassword matches. Create a custom validation rule (or use Regex annotation) to ensure the Password contains at least one uppercase letter and one number.</li>
        </ol>
      </blockquote>
      
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 7. Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> An HTML form that submits to a controller, but has zero validation.</li>
          <li><strong>Solution Repo:</strong> The form fully wired up with Tag Helpers, Model binding, Data Annotations, and ModelState checking.</li>
        </ul>
      </blockquote>
    </div>
  )
}
