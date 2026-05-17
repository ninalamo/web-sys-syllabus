import{j as e}from"./index-6VvVNkbu.js";function c(){return e.jsxs("div",{className:"page-content code-page",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"code-filename",children:"solution-catalog.ts"}),e.jsx("span",{className:"code-lang",children:"TYPESCRIPT"})]}),e.jsx("pre",{className:"language-typescript",children:e.jsx("code",{className:"language-typescript",children:`// Week 3: Typed Product Catalog — Solution (TypeScript)

type Category = "electronics" | "furniture" | "clothing";

interface Product {
    id: number;
    name: string;
    price: number;
    category: Category;
    description?: string;
    salePrice?: number;
}

// Generic API response type
interface ApiResponse<T> {
    data: T;
    success: boolean;
    message: string | null;
}

function calculateDiscount(price: number, discount: number): number {
    return price - (price * discount);
}

// Now TS catches the bad types at compile time!
// calculateDiscount("100", true); // ERROR: Type 'string' is not assignable to type 'number'

const products: Product[] = [
    { id: 1, name: "Laptop", price: 999.99, category: "electronics", description: "A powerful laptop" },
    { id: 2, name: "Desk Chair", price: 249.99, category: "furniture" },
    { id: 3, name: "T-Shirt", price: 19.99, category: "clothing", salePrice: 14.99 },
];

function findProduct(products: Product[], id: number): Product | undefined {
    return products.find(p => p.id === id);
}

function getProductsByCategory(products: Product[], category: Category): Product[] {
    return products.filter(p => p.category === category);
}

function formatProduct(product: Product): string {
    return \`\${product.name} - $\${product.price}\`;
}

// TS forces us to handle undefined
const product = findProduct(products, 2);
if (product) {
    console.log(product.description ?? "No description available");
}

// Type-safe API response
async function fetchProducts(): Promise<ApiResponse<Product[]>> {
    const res = await fetch('/api/products');
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json() as ApiResponse<Product[]>;
}
`})})]})}export{c as default};
