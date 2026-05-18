import { Product } from '@repo/types';

export default function ProductsPage() {
  // Placeholder data using shared types
  const products: Product[] = [
    { id: '1', name: 'Sample Product 1', price: 29.99, description: 'A great product', category: 'Electronics', stock: 10, images: [], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '2', name: 'Sample Product 2', price: 49.99, description: 'Another great product', category: 'Books', stock: 5, images: [], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 my-2">{product.description}</p>
            <p className="text-lg font-bold text-blue-600">${product.price}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
