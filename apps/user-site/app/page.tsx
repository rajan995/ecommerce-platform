import { formatCurrency } from '@repo/utils';

export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to E-Shop</h1>
      <p className="text-gray-600 mb-8">Discover amazing products at great prices.</p>
      <a
        href="/products"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Shop Now
      </a>
      <div className="mt-10 p-4 bg-gray-100 rounded-lg inline-block">
        <p className="text-sm text-gray-500">Verification of shared utils:</p>
        <p className="font-mono">{formatCurrency(99.99)}</p>
      </div>
    </div>
  );
}
