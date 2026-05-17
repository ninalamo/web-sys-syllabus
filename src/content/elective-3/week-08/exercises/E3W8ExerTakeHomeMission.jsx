export default function E3W8ExerTakeHomeMission() {
  return (
    <div className="page-content">
      <h1>Week 8: Take-Home Mission — "The Fake E-Commerce Site"</h1>
      <h2>Mission Brief</h2>
      <p>
      Create a React app with React Router that simulates a product catalog with detail pages.
      </p>
      
      <h2>Your Task</h2>
      
      
      <ol>
        <li>Create a React app with React Router</li>
        <li>The <code>/products</code> page should list 3 clickable product names (e.g., Laptop, Phone, Tablet)</li>
        <li>Clicking one should navigate to <code>/products/:id</code></li>
        <li><strong>The Catch:</strong> On the Product Detail page, use the <code>useParams()</code> hook to read the ID, and then conditionally render the name and a fake price for that specific item based on the ID</li>
      
      </ol>
      
      <h2>Deliverables</h2>
      
      
      <ul>
        <li><code>Products</code> page listing 3 products</li>
        <li><code>ProductDetail</code> page using <code>useParams()</code></li>
        <li>Conditional rendering based on product ID</li>
        <li>Shared Layout with Navbar</li>
      
      </ul>
      
      <h2>Rubric</h2>
      
      
      <table><thead><tr>
        <th>Criteria</th>
        <th>Points</th>
      </tr></thead><tbody>
      
      
      <tr>
        <td>React Router configured</td>
        <td>20</td>
      </tr>
      
      <tr>
        <td>Products page with clickable items</td>
        <td>25</td>
      </tr>
      
      <tr>
        <td><code>useParams()</code> extracts ID</td>
        <td>25</td>
      </tr>
      
      <tr>
        <td>Conditional rendering of product details</td>
        <td>20</td>
      </tr>
      
      <tr>
        <td>Shared Layout with Navbar</td>
        <td>10</td>
      </tr>
      </tbody></table>
    </div>
  )
}
