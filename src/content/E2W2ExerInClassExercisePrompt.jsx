export default function E2W2ExerInClassExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 2 — In-Class Exercise: Logging System with DI</h1>
      <p>
      <strong>Duration:</strong> 55 minutes
      <br /><strong>Format:</strong> Solo or pairs
      <br /><strong>Goal:</strong> Build a logging system using interfaces and dependency injection.
      </p>
      
      <hr />
      
      
      <h2>Exercise: Logger System</h2>
      
      
      <ol>
        <li>Create an <code>ILogger</code> interface with a <code>Log(string message)</code> method signature.</li>
        <li>Create two implementations: <code>ConsoleLogger</code> (writes to console) and <code>FileLogger</code> (writes to a file).</li>
        <li>Create a <code>UserService</code> class that accepts <code>ILogger</code> via constructor injection. It should have a <code>CreateUser(string name)</code> method that logs "User created: &#123;name&#125;".</li>
        <li>In <code>Program.cs</code>, demonstrate swapping between <code>ConsoleLogger</code> and <code>FileLogger</code> by changing just one line.</li>
      
      </ol>
      <br /><strong>Requirements:</strong>
      
      <ul>
        <li>Interface must have only method signatures (no implementation)</li>
        <li>Use constructor injection — no <code>new</code> inside <code>UserService</code></li>
        <li>Both loggers must produce visibly different output</li>
        <li>Show the swap by changing only the DI registration</li>
      
      </ul>
      <br /><strong>Starter:</strong> <code>logger-system-starter.cs</code>
      
    </div>
  )
}
