'use client';

export default function Voice() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Voice Settings</h2>
      <div className="space-y-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Enable Voice Input
        </button>
      </div>
    </div>
  );
}