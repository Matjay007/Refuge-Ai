'use client';
import { useState, useEffect } from 'react';

export default function ChatInterface() {
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'ai' }>>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Show welcome message on load
    setMessages([
      {
        text: "Hey there, great to meet you. I'm Pi, your personal AI.",
        sender: 'ai'
      },
      {
        text: "My goal is to be useful, friendly and fun. Ask me for advice, for answers, or let's talk about whatever's on your mind.",
        sender: 'ai'
      },
      {
        text: "How's your day going?",
        sender: 'ai'
      }
    ]);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');

    // Simulate AI thinking
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "I understand what you're saying. Here's what I think...", 
        sender: 'ai' 
      }]);
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Thanks for sharing that. Would you like to elaborate?", 
          sender: 'ai' 
        }]);
      }, 1000);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-[#faf8f5]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[70%] p-3 rounded-lg ${
              message.sender === 'user' 
                ? 'bg-green-500 text-white' 
                : 'bg-white shadow-sm'
            }`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-white border-t">
        <div className="max-w-4xl mx-auto flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Talk with Pi"
            className="flex-1 p-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
          >
            Send
          </button>
        </div>
        <div className="text-center text-sm text-gray-500 mt-2">
          By using Pi, you agree to our Terms and Privacy Policy
        </div>
      </div>
    </div>
  );
}