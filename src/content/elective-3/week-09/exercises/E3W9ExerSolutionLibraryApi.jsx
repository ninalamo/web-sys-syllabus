export default function E3W9ExerSolutionLibraryApi() {
  return (
    <div className="page-content">
      <h1>Week 9: Library API Design — Solution</h1>
      <h2>Library System API Specification</h2>
      <h3>Base URL: <code>/api</code></h3>
      <hr />
      <h3>1. List All Books</h3>
      <pre><code>GET /api/books?page=1&amp;limit=20&amp;search=</code></pre>
      <p>
      <strong>Response (200 OK):</strong>
      </p>
      <pre><code>&#123;
      "data": [
      &#123; "id": 1, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "isbn": "978-0743273565", "available": true &#125;,
      &#123; "id": 2, "title": "1984", "author": "George Orwell", "isbn": "978-0451524935", "available": false &#125;
      ],
      "total": 150,
      "page": 1,
      "limit": 20
      &#125;</code></pre>
      
      
      <hr />
      
      
      <h3>2. Get a Specific Book</h3>
      
      
      <pre><code>GET /api/books/&#123;id&#125;</code></pre>
      
      <br /><strong>Response (200 OK):</strong>
      
      <pre><code>&#123;
      "data": &#123; "id": 1, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "isbn": "978-0743273565", "available": true &#125;
      &#125;</code></pre>
      
      <br /><strong>Response (404 Not Found):</strong>
      
      <pre><code>&#123; "success": false, "message": "Book not found" &#125;</code></pre>
      
      
      <hr />
      
      
      <h3>3. Add a New Book</h3>
      
      
      <pre><code>POST /api/books</code></pre>
      
      <br /><strong>Request Body:</strong>
      
      <pre><code>&#123;
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "isbn": "978-0061120084"
      &#125;</code></pre>
      
      <br /><strong>Response (201 Created):</strong>
      
      <pre><code>&#123;
      "data": &#123; "id": 3, "title": "To Kill a Mockingbird", "author": "Harper Lee", "isbn": "978-0061120084", "available": true &#125;,
      "success": true,
      "message": "Book created successfully"
      &#125;</code></pre>
      
      
      <hr />
      
      
      <h3>4. Checkout a Book (Update)</h3>
      
      
      <pre><code>PUT /api/books/&#123;id&#125;/checkout</code></pre>
      
      <br /><strong>Response (200 OK):</strong>
      
      <pre><code>&#123;
      "data": &#123; "id": 1, "title": "The Great Gatsby", "available": false &#125;,
      "success": true,
      "message": "Book checked out successfully"
      &#125;</code></pre>
      
      <br /><strong>Response (400 Bad Request):</strong>
      
      <pre><code>&#123; "success": false, "message": "Book is not available" &#125;</code></pre>
      
      
      <hr />
      
      
      <h3>5. Delete a Book</h3>
      
      
      <pre><code>DELETE /api/books/&#123;id&#125;</code></pre>
      
      <br /><strong>Response (204 No Content):</strong>
      <br /><em>No body</em>
      
      <br /><strong>Response (404 Not Found):</strong>
      
      <pre><code>&#123; "success": false, "message": "Book not found" &#125;</code></pre>
      
      
      <hr />
      
      
      <h3>RESTful Principles Applied</h3>
      
      
      <ul>
        <li>All URLs use <strong>Nouns</strong> (<code>/books</code>), not Verbs</li>
        <li>HTTP Methods represent actions (GET = read, POST = create, PUT = update, DELETE = delete)</li>
        <li>Status codes are specific and meaningful</li>
        <li>Pagination uses query parameters (<code>?page=1&amp;limit=20</code>)</li>
        <li>Search uses query parameters (<code>?search=gatsby</code>)</li>
      
      </ul>
    </div>
  )
}
