import { Link } from 'react-router-dom';

export function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Products', path: '/products' },
    { name: 'Orders', path: '/orders' },
    { name: 'Users', path: '/users' },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4 flex flex-col">
      <div className="text-2xl font-bold mb-8 px-2">Admin Panel</div>
      <nav className="flex-grow space-y-2">
        {menuItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className="block px-4 py-2 rounded hover:bg-gray-800 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="border-t border-gray-800 pt-4">
        <div className="px-4 py-2 text-sm text-gray-400">
          Logged in as Admin
        </div>
      </div>
    </aside>
  );
}
