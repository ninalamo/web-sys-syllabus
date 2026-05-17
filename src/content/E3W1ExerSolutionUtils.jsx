export default function E3W1ExerSolutionUtils() {
  const code = `// Week 1: Modern ES6+ Utility Functions — Solution

import { products } from './solution-data.js';

// .filter() replaces the for loop
export const getInStockProducts = () => products.filter(p => p.inStock);

// .map() replaces the for loop
export const getProductNames = () => products.map(p => p.name);

// Template literals replace string concatenation
export const formatProduct = ({ name, price, inStock }) =>
    \`Product: \${name} | Price: $\${price} | Stock: \${inStock}\`;

// .reduce() replaces the for loop
export const getTotalValue = () =>
    products
        .filter(p => p.inStock)
        .reduce((sum, p) => sum + p.price, 0);

// Arrow function with .filter()
export const searchByCategory = (category) =>
    products.filter(p => p.category === category);

// Format all in-stock products
export const formatAllInStock = () =>
    getInStockProducts().map(formatProduct).join('\\n');

// Main execution
const inStock = getInStockProducts();
const names = getProductNames();
const total = getTotalValue();

console.log(\`In-stock products: \${inStock.length}\`);
console.log(\`All names: \${names.join(', ')}\`);
console.log(\`Total inventory value: $\${total.toFixed(2)}\`);
console.log('\\n' + formatAllInStock());
`
  return (
    <div className="page-content code-page">
      <div className="code-header">
        <span className="code-filename">solution-utils.js</span>
        <span className="code-lang">JAVASCRIPT</span>
      </div>
      <pre className="language-javascript"><code className="language-javascript">{code}</code></pre>
    </div>
  )
}
