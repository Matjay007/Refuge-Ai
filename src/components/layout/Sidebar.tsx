'use client';
import { useState } from 'react';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('chat');

  const menuItems = [
    { 
      title: 'Discover', 
      icon: '🔍',
      id: 'discover',
      action: () => setActiveSection('discover')
    },
    { 
      title: 'Profile', 
      icon: '👤',
      id: 'profile',
      action: () => setActiveSection('profile')
    },
    { 
      title: 'Voice settings', 
      icon: '🎤',
      id: 'voice',
      action: () => setActiveSection('voice')
    },
    { 
      title: 'Give feedback', 
      icon: '💭',
      id: 'feedback',
      action: () => setActiveSection('feedback')
    }
  ];

  return (
    <div className="bg-stone-50 w-64 h-screen p-4 border-r">
      <h1 className="text-2xl font-bold mb-8">Pi AI Clone</h1>
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={item.action}
            className={`flex items-center w-full p-3 mb-2 rounded-lg text-left transition-colors
              ${activeSection === item.id 
                ? 'bg-green-100 text-green-700' 
                : 'hover:bg-stone-100'}`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.title}
          </button>
        ))}
      </nav>
    </div>
  );
}