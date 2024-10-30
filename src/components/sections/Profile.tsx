'use client';

export default function Profile() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            👤
          </div>
          <div>
            <h3 className="font-bold">Guest User</h3>
            <p className="text-gray-600">Sign in to save your chats</p>
          </div>
        </div>
      </div>
    </div>
  );
}