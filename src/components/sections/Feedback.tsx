'use client';

export default function Feedback() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Give Feedback</h2>
      <textarea 
        className="w-full h-32 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Tell us what you think..."
      />
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
        Send Feedback
      </button>
    </div>
  );
}