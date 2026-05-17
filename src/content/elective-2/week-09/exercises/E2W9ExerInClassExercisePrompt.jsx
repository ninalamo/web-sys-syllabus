export default function E2W9ExerInClassExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 9 — In-Class Exercise: EF Core InMemory</h1>
      <p>
      <strong>Duration:</strong> 55 minutes
      </p>
      
      <h2>Exercise: Book Database with EF Core</h2>
      
      <br />Set up EF Core in an empty project using an InMemory Database:
      
      
      <ol>
        <li>Create a <code>Book</code> model (Id, Title, Author, YearPublished)</li>
        <li>Create <code>AppDbContext</code> with <code>DbSet&lt;Book&gt;</code></li>
        <li>Register the context in <code>Program.cs</code> (use InMemory for speed)</li>
        <li>Write a controller that seeds 3 books on startup</li>
        <li>Add an endpoint that returns all books published after the year 2000 using LINQ</li>
      
      </ol>
      <br /><strong>Requirements:</strong>
      
      <ul>
        <li>Use <code>AddDbContext&lt;AppDbContext&gt;</code> with <code>UseInMemoryDatabase</code></li>
        <li>Use LINQ <code>.Where()</code> to filter</li>
        <li>Use <code>.ToList()</code> after the filter (not before)</li>
      
      </ul>
    </div>
  )
}
