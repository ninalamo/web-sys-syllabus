export default function E2W2ExerLoggerSystemStarter() {
  const code = `// Logger System — Starter
// TODO: Define ILogger, ConsoleLogger, FileLogger, UserService, wire with DI

// Step 1: Define ILogger interface
public interface ILogger
{
    void Log(string message);
}

// Step 2: Implement ConsoleLogger
public class ConsoleLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine($"[Console] {message}");
    }
}

// Step 3: Implement FileLogger
public class FileLogger : ILogger
{
    private readonly string _filePath = "log.txt";
    public void Log(string message)
    {
        // Your code here — append to file
    }
}

// Step 4: Create UserService with constructor injection
public class UserService
{
    private readonly ILogger _logger;

    public UserService(ILogger logger)
    {
        _logger = logger;
    }

    public void CreateUser(string name)
    {
        // Your code here — log "User created: {name}"
    }
}

// Step 5: Wire up in Program.cs
// builder.Services.AddSingleton<ILogger, ConsoleLogger>();
// builder.Services.AddSingleton<UserService>();
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">logger-system-starter.cs</span>
        <span className="code-lang">CSHARP</span>
      </div>
      <pre className="language-csharp"><code className="language-csharp">{code}</code></pre>
    </div>
  )
}
