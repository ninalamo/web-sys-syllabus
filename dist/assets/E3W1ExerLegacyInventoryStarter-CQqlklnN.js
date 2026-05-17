import{j as e}from"./index-Dh6XhhbZ.js";function o(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"legacy-inventory-starter.js"}),e.jsx("span",{className:"code-lang",children:"JAVASCRIPT"})]}),e.jsx("pre",{className:"language-javascript",children:e.jsx("code",{className:"language-javascript",children:`// Week 1: Legacy ES5 Product Inventory — Starter Code
// TODO: Refactor this entire file to modern ES6+

var products = [
    { id: 1, name: "Laptop", price: 999.99, inStock: true, category: "electronics" },
    { id: 2, name: "Mouse", price: 29.99, inStock: true, category: "electronics" },
    { id: 3, name: "Desk Chair", price: 249.99, inStock: false, category: "furniture" },
    { id: 4, name: "Monitor", price: 399.99, inStock: true, category: "electronics" },
    { id: 5, name: "Keyboard", price: 79.99, inStock: true, category: "electronics" }
];

// TODO: Replace with .filter()
function getInStockProducts() {
    var result = [];
    for (var i = 0; i < products.length; i++) {
        if (products[i].inStock) {
            result.push(products[i]);
        }
    }
    return result;
}

// TODO: Replace with .map()
function getProductNames() {
    var names = [];
    for (var i = 0; i < products.length; i++) {
        names.push(products[i].name);
    }
    return names;
}

// TODO: Replace string concatenation with template literals
function formatProduct(product) {
    var message = "Product: " + product.name + " | Price: $" + product.price + " | Stock: " + product.inStock;
    return message;
}

// TODO: Replace with .reduce()
function getTotalValue() {
    var total = 0;
    for (var i = 0; i < products.length; i++) {
        if (products[i].inStock) {
            total = total + products[i].price;
        }
    }
    return total;
}

// TODO: Convert to arrow function
var searchByCategory = function(category) {
    var results = [];
    for (var i = 0; i < products.length; i++) {
        if (products[i].category === category) {
            results.push(products[i]);
        }
    }
    return results;
};

// Main execution
var inStock = getInStockProducts();
var names = getProductNames();
var total = getTotalValue();

console.log("In-stock products: " + inStock.length);
console.log("All names: " + names.join(", "));
console.log("Total inventory value: $" + total.toFixed(2));
`})})]})}export{o as default};
