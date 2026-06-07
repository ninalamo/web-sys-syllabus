import { useEffect, useState } from 'react';

export default function AppDemo() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetch: in real app use fetch('/api/products')
    setProducts([
      { id: 1, name: 'Apple', price: 0.5 },
      { id: 2, name: 'Banana', price: 0.3 },
    ]);
  }, []);

  return (
    <div className="page-content">
      <h3>Products List (EF Core + Razor Demo)</h3>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} — ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}
