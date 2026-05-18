import { formatCurrency } from '@repo/utils';

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm">Total Sales</p>
          <p className="text-2xl font-bold">{formatCurrency(12500.50)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm">Total Orders</p>
          <p className="text-2xl font-bold">452</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm">Active Users</p>
          <p className="text-2xl font-bold">1,204</p>
        </div>
      </div>
    </div>
  );
}
