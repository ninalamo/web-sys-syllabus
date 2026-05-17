export default function InterfacesAndDiMentalModel() {
  return (
    <div className="page-content">
      <h2>Week 2: Interfaces &amp; DI Mental Model</h2>
      <div style={{ background: '#e0f2fe', padding: '15px', borderLeft: '5px solid #0284c7', marginBottom: '20px' }}>
        <strong>Learning Objectives:</strong>
        <ul>
          <li>Understand what a contract (interface) is and why it's essential for decoupling code.</li>
          <li>Explain why controllers should not instantiate their own services (tight coupling).</li>
          <li>Implement manual Dependency Injection (DI) using Constructor Injection.</li>
          <li>Understand the concept of the Inversion of Control (IoC) container in ASP.NET Core.</li>
        </ul>
      </div>
      <div style={{ background: '#fefce8', padding: '15px', borderLeft: '5px solid #ca8a04', marginBottom: '20px' }}>
        <strong>📋 This Week at a Glance</strong><br />
        🔁 Last week: "Week 1: C# Translation Bootcamp"<br />
        🎯 This week: "Jump into interfaces and DI to understand how to decouple our code for testability and maintainability"<br />
        <br />
        <strong>Core Concepts:</strong><br />
        ▸ A. Interfaces (The Contract) (8 min)<br />▸ B. Tight Coupling vs Loose Coupling (7 min)<br />▸ C. The IoC Container (The Matchmaker) (10 min)<br />
        <br />
        <strong>ONLINE (1h):</strong> Industry Reality discussion + AI Integration demo + Take-Home Mission (Payment Gateway Swap)<br />
        <br />
        ✅ By end of lab: Write an interface; implement an interface; use Constructor Injection; understand why `new` inside a class makes testing hard
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
            <td>Lecture + Slides + Code Comparison</td>
          </tr>
          <tr>
            <td>Code Walkthrough</td>
            <td>30 min</td>
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
            <td>10 min</td>
            <td>Overflow / Stretch discussion</td>
          </tr>
        </tbody></table>
      </blockquote>
      <blockquote>
        <p>[TIP] <strong>Teaching Tip:</strong> DI is the hardest mental model shift this term. Students who came from VB think "just <code>new</code> it up inside the class." Expect resistance. Use the restaurant analogy repeatedly.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 1. The Hook &amp; The Analogy</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Your VB form has 500 lines of code doing everything from database queries to font colors? That's not impressive — that's a cry for help. Today we learn why your classes should be 'dumb' and services should be swappable."</p>
      </blockquote>
      <blockquote>
        <p>[BOARD] <strong>Whiteboard Analogy:</strong> The Restaurant Operations</p>
        <ul>
          <li><strong>The Menu (Interface):</strong> Tells you what food is available, but doesn't cook it.</li>
          <li><strong>The Waiter (Controller):</strong> Takes your order. Doesn't cook.</li>
          <li><strong>The Kitchen (Service):</strong> Cooks the food. Doesn't talk to customers.</li>
          <li><em>DI Concept:</em> If the Head Chef quits, the Waiter doesn't need to be retrained. They still just hand the ticket to the Kitchen. We can swap the kitchen staff without breaking the restaurant.</li>
        </ul>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>25 min</span> 2. Core Concepts &amp; Discussion Topics</h3>
      <h4>▸ A. Interfaces (The Contract) (8 min)</h4>
      <p><strong>Module Syllabus Content:</strong> In object-oriented programming, an interface serves as a strict contract or blueprint. Unlike a class, an interface does not contain any implementation details, logic, or fields; it only contains method signatures and properties. When a class "implements" an interface, it is legally bound (by the compiler) to provide the actual code for every method defined in that interface. This separation of "what a thing can do" (the interface) from "how it does it" (the implementation) allows developers to write extremely flexible code. By depending on interfaces rather than concrete classes, applications can swap out underlying behaviors without altering the systems that rely on them.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "An interface is a contract. It says: any class that signs this contract MUST have these methods. It doesn't say HOW — just THAT they exist. It has no body."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">public interface INotificationService &#123;
        void Send(string message); // No curly braces!
        &#125;
      </code></pre>
      <p><strong>[TIP] Gen-Z Hook:</strong> An interface is a job posting on JobStreet. It lists the requirements. If a class applies for the job, it MUST have those skills.</p>
      </blockquote>
      <h4>▸ B. Tight Coupling vs. Loose Coupling (7 min)</h4>
      <p><strong>Module Syllabus Content:</strong> Tight coupling occurs when a class directly instantiates another class using the <code>new</code> keyword. While easy to write, tightly coupled code is difficult to maintain and nearly impossible to test in isolation, because changing the behavior of the dependency requires rewriting the consumer class. Loose coupling solves this by relying on Constructor Injection. Instead of creating its own dependencies, a class requests them through its constructor, typically asking for an interface. This shifts the responsibility of creating objects away from the business logic, making components highly modular and easy to replace (e.g., swapping a real database service for a mock service during testing).</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "If Class A uses the <code>new</code> keyword to create Class B, they are tightly coupled. If Class B changes, Class A breaks. Loose coupling means Class A just asks for an interface, and doesn't care who provides it."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">// TIGHT (Bad)
        EmailService _email = new EmailService();
      
        // LOOSE (Good - Constructor Injection)
        public OrderProcessor(INotificationService service) &#123;
        _service = service;
        &#125;
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> Emphasize that <code>new</code> is "glue". Avoid it inside business logic classes.</p>
      </blockquote>
      <h4>▸ C. The IoC Container (The Matchmaker) (10 min)</h4>
      <p><strong>Module Syllabus Content:</strong> If classes are no longer using the <code>new</code> keyword to create their dependencies, something else must be responsible for creating and providing them. This is the job of the Inversion of Control (IoC) Container. In ASP.NET Core, the IoC container acts as a central registry or "matchmaker." During application startup (in <code>Program.cs</code>), developers register which concrete classes should be mapped to which interfaces. When the application runs and a controller requests an <code>INotificationService</code>, the IoC container automatically instantiates the registered class (e.g., <code>EmailService</code>) and injects it into the controller. This automates the entire lifecycle of dependencies.</p>
      <blockquote>
        <p><strong>[SPEAK] Discussion:</strong> "If we aren't using <code>new</code>, who is creating the objects? The framework is. ASP.NET Core has a built-in matchmaker. When a class asks for an <code>INotificationService</code>, the matchmaker hands it an <code>EmailService</code>."</p>
        <p><strong>[CODE] Example:</strong></p>
        <pre><code className="language-csharp">// Inside Program.cs
        builder.Services.AddScoped&lt;INotificationService, EmailService&gt;();
      </code></pre>
      <p><strong>[TIP] Instructor Tip:</strong> This is the magic line. Changing <code>EmailService</code> to <code>SmsService</code> right here swaps out the functionality for the entire application instantly.</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>30 min</span> 3. Code Walkthrough / Live Coding Blueprint</h3>
      <blockquote>
        <p>[SPEAK] <strong>Script:</strong> "Let's build this from scratch. First the contract, then two implementations, then something that uses the contract."</p>
      </blockquote>
      <ul>
        <li><strong>Step 1: The Contract</strong><ul>
        <li><em>Action:</em> Create <code>INotificationService</code> with a <code>Send(string msg)</code> method.</li>
      </ul>
      </li>
      <li><strong>Step 2: The Implementations</strong><ul>
      <li><em>Action:</em> Create <code>EmailService</code> and <code>SmsService</code> that implement <code>INotificationService</code>. Give them different <code>Console.WriteLine</code> outputs.</li>
      </ul>
      </li>
      <li><strong>Step 3: The Consumer (Constructor Injection)</strong><ul>
      <li><em>Action:</em> Create an <code>OrderProcessor</code> class. Inject the interface.</li>
      </ul>
      </li>
      <li><strong>Step 4: The Swap Demo</strong><ul>
      <li><em>Action:</em> In <code>Program.cs</code>, show how changing one line of configuration swaps the entire application from sending Emails to sending SMS.</li>
      </ul>
      </li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
        <p>[TIME] <strong>In-Class Exercise (55 min):</strong> Build a logging system. Interface: <code>ILogger</code>. Implementations: <code>ConsoleLogger</code>, <code>FileLogger</code>. Consumer: <code>UserService</code> (logs when a user is created). Swap them at runtime.</p>
      </blockquote>
      <hr />
      <h3>💻 Online Session (1 hour)</h3>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 4. From the Trenches (Pro-Tip)</h3>
      <blockquote>
        <p>[TRENCHES] <strong>Instructor Script:</strong> "You will ask me, 'Why do all this extra work when I can just use <code>new EmailService()</code>?' Here is the industry secret: Unit Testing. If you hardcode <code>new EmailService()</code>, every time you test your code, you will accidentally send a real email to a customer. With DI, when we run tests, we inject a 'FakeEmailService' that does nothing. DI is what prevents you from spamming 10,000 customers during a test run."</p>
      </blockquote>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>10 min</span> 5. AI Integration &amp; Debugging</h3>
      <ul>
        <li><strong>AI Policy:</strong> Allowed: "What does 'implements interface' mean?" Not Allowed: "Write the DI exercise for me."</li>
        <li><strong>Common Error 1:</strong> <code>Cannot create instance of interface</code>. -&gt; You wrote <code>new INotificationService()</code>. You can only instantiate concrete classes (<code>new EmailService()</code>).</li>
        <li><strong>Common Error 2:</strong> <code>NullReferenceException</code>. -&gt; You defined the interface in the constructor but forgot to assign it to the private field (<code>_service = service;</code>).</li>
      </ul>
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>55 min</span> 6. Exercise &amp; Homework</h3>
      <blockquote>
      </blockquote><h3>Learning Baseline (Self-Assessment)</h3>
      <blockquote>
        <p><strong>[ASSESSMENT]</strong> By the end of this week, students must be able to say "Yes" to:</p>
        <ul>
          <li><input disabled="" type="checkbox" /> I can write an Interface with a method signature.</li>
          <li><input disabled="" type="checkbox" /> I can make a class implement an Interface.</li>
          <li><input disabled="" type="checkbox" /> I know how to use Constructor Injection to pass a dependency.</li>
          <li><input disabled="" type="checkbox" /> I understand why using <code>new</code> inside a class makes it hard to test.</li>
        </ul>
      </blockquote>
      
      <blockquote>
      </blockquote><h3>Take-Home Mission</h3>
      <blockquote>
        <p><strong>[HOMEWORK]</strong> <strong>Mission:</strong> "The Payment Gateway Swap"
        Build a <code>CheckoutService</code> that requires an <code>IPaymentProvider</code>.</p>
        <ol>
          <li>Create two implementations: <code>GCashProvider</code> and <code>CreditCardProvider</code>.</li>
          <li>In your <code>Program.cs</code>, ask the user "Press 1 for GCash, 2 for Credit Card". </li>
          <li><strong>The Catch:</strong> Inject the chosen provider into <code>CheckoutService</code>. <code>CheckoutService</code> must not have any <code>if</code> statements checking which payment method was chosen.</li>
        </ol>
      </blockquote>
      
      <hr />
      <h3><span style={{ background: '#2563eb', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.8em' }}>15 min</span> 7. Instructor Assets Blueprint</h3>
      <blockquote>
        <p><strong>[ASSETS]</strong> What to prepare before this class:</p>
        <ul>
          <li><strong>Starter Repo:</strong> A monolithic class (<code>OrderProcessor</code>) that hardcodes an <code>EmailService</code> and a <code>DatabaseService</code> using <code>new</code>.</li>
          <li><strong>Solution Repo:</strong> The exact same application refactored to use <code>IOrderProcessor</code>, <code>IEmailService</code>, and DI setup in <code>Program.cs</code>.</li>
        </ul>
      </blockquote>
    </div>
  )
}
