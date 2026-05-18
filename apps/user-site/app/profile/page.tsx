export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <div className="border p-6 rounded-lg max-w-md">
        <p className="mb-2"><strong>Name:</strong> Guest User</p>
        <p className="mb-2"><strong>Email:</strong> guest@example.com</p>
        <button className="mt-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
