export default function E2W2ResoInterfacesAndDiReference() {
  return (
    <div className="page-content">
      <h1>Week 2: Interfaces &amp; DI Reference</h1>
      <h2>Interfaces (The Contract)</h2>
      <p>
      An interface defines <strong>what</strong> a class can do, not <strong>how</strong>.
      </p>
      
      <pre><code>public interface INotificationService
      &#123;
      void Send(string message); // No body!
      &#125;</code></pre>
      
      <br />Classes implement interfaces:
      
      <pre><code>public class EmailService : INotificationService
      &#123;
      public void Send(string message)
      &#123;
      Console.WriteLine($"Email: &#123;message&#125;");
      &#125;
      &#125;</code></pre>
      
      
      <h2>Tight vs Loose Coupling</h2>
      
      
      <table><thead><tr>
        <th>Pattern</th>
        <th>Code</th>
        <th>Problem</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>Tight</td>
        <td><code>EmailService _email = new EmailService()</code></td>
        <td>Hard to test, hard to swap</td>
      </tr>
      
      <tr>
        <td>Loose</td>
        <td>Constructor injection with interface</td>
        <td>Easy to test, easy to swap</td>
      </tr>
      
      
      <h2>Constructor Injection</h2>
      
      
      <pre><code>public class OrderProcessor
      &#123;
      private readonly INotificationService _service;
      
      public OrderProcessor(INotificationService service)
      &#123;
      _service = service;
      &#125;
      &#125;</code></pre>
      
      
      <h2>IoC Container Registration (Program.cs)</h2>
      
      
      <pre><code>builder.Services.AddScoped&lt;INotificationService, EmailService&gt;();
      // Swap to SMS by changing one line:
      // builder.Services.AddScoped&lt;INotificationService, SmsService&gt;();</code></pre>
      
      
      <h2>DI Lifetimes</h2>
      
      
      <table><thead><tr>
        <th>Lifetime</th>
        <th>Behavior</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td><code>AddTransient</code></td>
        <td>New instance every time requested</td>
      </tr>
      
      <tr>
        <td><code>AddScoped</code></td>
        <td>One instance per HTTP request</td>
      </tr>
      
      <tr>
        <td><code>AddSingleton</code></td>
        <td>One instance for app lifetime</td>
      </tr>
      </tbody></table></tbody></table>
    </div>
  )
}
