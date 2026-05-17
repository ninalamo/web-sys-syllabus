import{j as o}from"./index-Dh6XhhbZ.js";function c(){return o.jsxs("div",{className:"page-content code-page",children:[o.jsxs("div",{className:"code-header",children:[o.jsx("span",{className:"code-filename",children:"solution-utils.js"}),o.jsx("span",{className:"code-lang",children:"JAVASCRIPT"})]}),o.jsx("pre",{className:"language-javascript",children:o.jsx("code",{className:"language-javascript",children:`// Week 1: Modern ES6+ Utility Functions — Solution

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
`})})]})}export{c as default};
