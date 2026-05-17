import{j as e}from"./index-ChWpJeR-.js";function o(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"logger-system-starter.cs"}),e.jsx("span",{className:"code-lang",children:"CSHARP"})]}),e.jsx("pre",{className:"language-csharp",children:e.jsx("code",{className:"language-csharp",children:`// Logger System — Starter
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
`})})]})}export{o as default};
