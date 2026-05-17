import{j as t}from"./index-6VvVNkbu.js";function r(){return t.jsxs("div",{className:"page-content code-page",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{className:"code-filename",children:"starter-catalog.ts"}),t.jsx("span",{className:"code-lang",children:"TYPESCRIPT"})]}),t.jsx("pre",{className:"language-typescript",children:t.jsx("code",{className:"language-typescript",children:`// Week 3: Untyped Product Catalog — Starter (JavaScript)
// TODO: Convert this to TypeScript with proper types

function calculateDiscount(price, discount) {
    return price - (price * discount);
}

// BUG: passing wrong types — TS should catch this
const finalPrice = calculateDiscount("100", true);
console.log(finalPrice); // NaN!

const products = [
    { id: 1, name: "Laptop", price: 999.99, category: "electronics", description: "A powerful laptop" },
    { id: 2, name: "Desk Chair", price: 249.99, category: "furniture" },
    { id: 3, name: "T-Shirt", price: 19.99, category: "clothing", salePrice: 14.99 },
];

function findProduct(products, id) {
    return products.find(p => p.id === id);
}

function getProductsByCategory(products, category) {
    return products.filter(p => p.category === category);
}

function formatProduct(product) {
    return \`\${product.name} - $\${product.price}\`;
}

// BUG: accessing property that might not exist
const product = findProduct(products, 2);
console.log(product.description); // undefined!
`})})]})}export{r as default};
