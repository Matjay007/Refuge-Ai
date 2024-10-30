'use client';
import Sidebar from '@/components/layout/Sidebar';
import ChatInterface from '@/components/chat/ChatInterface';

export default function Home() {
  return (
    <main className="flex h-screen bg-white">
      <Sidebar />
      <div className="flex-1 bg-white">
        <ChatInterface />
      </div>
    </main>
  );
}