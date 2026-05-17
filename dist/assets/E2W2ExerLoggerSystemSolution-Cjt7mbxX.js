import{j as e}from"./index-u8WTylHP.js";function g(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"logger-system-solution.cs"}),e.jsx("span",{className:"code-lang",children:"CSHARP"})]}),e.jsx("pre",{className:"language-csharp",children:e.jsx("code",{className:"language-csharp",children:`// Logger System — Solution
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
`})})]})}export{g as default};
