export default function E2W2ExerLoggerSystemSolution() {
  const code = `// Logger System — Solution
public interface ILogger
{
    void Log(string message);
}

public class ConsoleLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine($"[Console] {message}");
    }
}

public class FileLogger : ILogger
{
    private readonly string _filePath = "log.txt";
    public void Log(string message)
    {
        File.AppendAllText(_filePath, $"[{DateTime.Now}] {message}{Environment.NewLine}");
    }
}

public class UserService
{
    private readonly ILogger _logger;

    public UserService(ILogger logger)
    {
        _logger = logger;
    }

    public void CreateUser(string name)
    {
        _logger.Log($"User created: {name}");
    }
}

// In Program.cs:
// builder.Services.AddSingleton<ILogger, ConsoleLogger>();
// builder.Services.AddSingleton<UserService>();
// 
// To swap: change ConsoleLogger to FileLogger
// builder.Services.AddSingleton<ILogger, FileLogger>();
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">logger-system-solution.cs</span>
        <span className="code-lang">CSHARP</span>
      </div>
      <pre className="language-csharp"><code className="language-csharp">{code}</code></pre>
    </div>
  )
}
