export default function E3W9ExerExercisePrompt() {
  return (
    <div className="page-content">
      <h1>Week 9: API Design Philosophy — Exercises</h1>
      <h2>In-Class Exercise (55 min)</h2>
      <h3>Task: Library API Design Document</h3>
      <p>
      Design the RESTful API for a Library system.
      </p>
      
      <h3>Requirements</h3>
      
      <br />Write a Markdown document defining the exact HTTP Method, URL, and expected JSON Body for:
      
      
      <ol>
        <li>Add a new book</li>
        <li>List all books</li>
        <li>Checkout a specific book</li>
        <li>Delete a book</li>
      
      </ol>
      
      <h3>Rules</h3>
      
      
      <ul>
        <li>URLs must use Nouns (not Verbs)</li>
        <li>Use proper HTTP methods (GET, POST, PUT, DELETE)</li>
        <li>Include expected request/response JSON</li>
        <li>Use query parameters for filtering/pagination</li>
      
      </ul>
      
      <h3>Hints</h3>
      
      
      <ul>
        <li><code>GET /books</code> returns a list</li>
        <li><code>POST /books</code> creates one</li>
        <li><code>GET /books/5</code> returns a specific book</li>
        <li><code>DELETE /books/5</code> deletes a specific book</li>
      
      </ul>
      
      <h3>Stretch Goals</h3>
      
      
      <ul>
        <li>Design an endpoint to search books by title</li>
        <li>Design pagination (<code>?page=1&amp;limit=20</code>)</li>
        <li>Design an endpoint to return books by a specific author</li>
      
      </ul>
    </div>
  )
}
