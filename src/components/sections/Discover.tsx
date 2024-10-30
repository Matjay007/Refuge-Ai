'use client';

export default function Discover() {
  const cards = [
    {
      title: "Download your Pi conversation history",
      description: "Manage history",
      icon: "💬"
    },
    {
      title: "Career based on your personality",
      image: "/career.jpg",
    },
    {
      title: "Write me a poem, Pi",
      image: "/poem.jpg",
    },
    {
      title: "Memory of a goldfish? Let's fix that",
      image: "/memory.jpg",
    }
  ];

  return (
    <div className="p-8 bg-[#faf8f5] min-h-screen">
      <h1 className="text-3xl font-serif mb-8">Good afternoon</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            {card.icon && (
              <span className="text-2xl mb-2 block">{card.icon}</span>
            )}
            <h3 className="font-medium text-lg">{card.title}</h3>
            {card.description && (
              <p className="text-green-600 mt-2">{card.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}