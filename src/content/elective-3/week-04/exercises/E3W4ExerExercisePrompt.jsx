export default function E3W4ExerExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 4: Dev Tooling &amp; Workflow — Exercises</h1>
      <h2>In-Class Exercise (55 min)</h2>
      <h3>Task: Scaffold a Vite App with NPM Packages</h3>
      <p>
      Create a modern project from scratch using Vite, install packages, and push to a feature branch.
      </p>
      
      <h3>Requirements</h3>
      
      
      <ol>
        <li>Scaffold a vanilla Vite app: <code>npm create vite@latest my-app -- --template vanilla</code></li>
        <li>Install the <code>date-fns</code> package</li>
        <li>Write a script that imports <code>formatDistanceToNow</code> to show how many days/hours ago the student was born</li>
        <li>Create a Git feature branch, commit, and push</li>
      
      </ol>
      
      <h3>Hints</h3>
      
      
      <ul>
        <li>Always run <code>npm install</code> before <code>npm run dev</code></li>
        <li>Use <code>git checkout -b feature/birthday-calculator</code> to create a branch</li>
        <li>Never commit <code>node_modules/</code> to Git</li>
      
      </ul>
      
      <h3>Stretch Goals</h3>
      
      
      <ul>
        <li>Install and configure ESLint + Prettier</li>
        <li>Add <code>canvas-confetti</code> for a celebration button</li>
        <li>Set up a <code>.gitignore</code> with proper entries</li>
      
      </ul>
    </div>
  )
}
