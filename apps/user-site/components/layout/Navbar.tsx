export function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">E-Shop</div>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/products" className="hover:underline">Products</a>
        <a href="/cart" className="hover:underline">Cart</a>
        <a href="/profile" className="hover:underline">Profile</a>
      </div>
    </nav>
  );
}
