export default function E2W2PresSlideNotes() {
  return (
    <div className="page-content">
      <h1>Week 2 — Presentation Notes</h1>
      <h2>Suggested Slide Deck</h2>
      <ol>
        <li>Title: Interfaces &amp; DI Mental Model</li>
        <li>The Restaurant Analogy — Menu (interface), Waiter (controller), Kitchen (service)</li>
        <li>What is an Interface? — Contract / Job posting analogy</li>
        <li>Interface Syntax — <code>interface</code> with method signatures</li>
        <li>Tight vs Loose Coupling — <code>new</code> is glue</li>
        <li>Constructor Injection — Ask for dependencies, don't create them</li>
        <li>The IoC Container — The matchmaker in Program.cs</li>
        <li>Live Demo: Swap EmailService to SmsService</li>
        <li>Exercise: Logger System</li>
        <li>Take-Home: Payment Gateway Swap</li>
      </ol>
    </div>
  )
}
