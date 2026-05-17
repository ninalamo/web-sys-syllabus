export default function E3W1ExerSolutionData() {
  const code = `// Week 1: Modern ES6+ Product Inventory — Solution

// data.js — Product data module
export const products = [
    { id: 1, name: "Laptop", price: 999.99, inStock: true, category: "electronics" },
    { id: 2, name: "Mouse", price: 29.99, inStock: true, category: "electronics" },
    { id: 3, name: "Desk Chair", price: 249.99, inStock: false, category: "furniture" },
    { id: 4, name: "Monitor", price: 399.99, inStock: true, category: "electronics" },
    { id: 5, name: "Keyboard", price: 79.99, inStock: true, category: "electronics" }
];
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">solution-data.js</span>
        <span className="code-lang">JAVASCRIPT</span>
      </div>
      <pre className="language-javascript"><code className="language-javascript">{code}</code></pre>
    </div>
  )
}
