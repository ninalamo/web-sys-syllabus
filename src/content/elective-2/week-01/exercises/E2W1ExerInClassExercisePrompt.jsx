export default function E2W1ExerInClassExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 1 — In-Class Exercise: Three Small Programs</h1>
      <p>
      <strong>Duration:</strong> 55 minutes
      <br /><strong>Format:</strong> Solo or pairs
      <br /><strong>Goal:</strong> Practice C# fundamentals — variables, input/output, conditionals, loops, and classes.
      </p>
      
      <hr />
      
      
      <h2>Exercise 1: FizzBuzz (15 min)</h2>
      
      <br />Write a program that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".
      
      <br /><strong>Requirements:</strong>
      
      <ul>
        <li>Use a <code>for</code> loop.</li>
        <li>Use <code>if/else if/else</code> logic.</li>
        <li>Output each result on a new line.</li>
      
      </ul>
      <br /><strong>Starter:</strong> <code>fizzbuzz-starter.cs</code>
      
      
      <hr />
      
      
      <h2>Exercise 2: Simple Calculator (20 min)</h2>
      
      <br />Write a console calculator that:
      
      <ol>
        <li>Prompts the user for two numbers.</li>
        <li>Prompts for an operation (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>).</li>
        <li>Performs the calculation and displays the result.</li>
        <li>Loops until the user types <code>exit</code>.</li>
      
      </ol>
      <br /><strong>Requirements:</strong>
      
      <ul>
        <li>Parse input strings to <code>double</code> or <code>int</code>.</li>
        <li>Use a <code>switch</code> statement for the operation.</li>
        <li>Handle division by zero gracefully.</li>
        <li>Use <code>var</code> for all local variable declarations.</li>
        <li>Use string interpolation for all output.</li>
      
      </ul>
      <br /><strong>Starter:</strong> <code>calculator-starter.cs</code>
      
      
      <hr />
      
      
      <h2>Exercise 3: Student Manager (20 min)</h2>
      
      <br />Create a program that manages a list of students:
      
      
      <ol>
        <li>Define a <code>Student</code> class with properties: <code>Name</code> (string), <code>Age</code> (int), <code>Grade</code> (double).</li>
        <li>Create a list of at least 3 students.</li>
        <li>Display all students using a <code>foreach</code> loop.</li>
        <li>Calculate and display the average grade.</li>
      
      </ol>
      <br /><strong>Requirements:</strong>
      
      <ul>
        <li>Use PascalCase for the class and property names.</li>
        <li>Use camelCase for local variables.</li>
        <li>Use <code>var</code> where applicable.</li>
        <li>Use string interpolation for output.</li>
      
      </ul>
      <br /><strong>Starter:</strong> <code>student-manager-starter.cs</code>
      
    </div>
  )
}
