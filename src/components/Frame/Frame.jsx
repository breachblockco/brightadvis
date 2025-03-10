import React from "react";

const gridItems = [
  { src: "https://brightadvis.com/wp-content/uploads/2024/01/featured-4.2.webp", title: "Launch your business" },
  { src: "https://brightadvis.com/wp-content/uploads/2024/01/featured-4.2.webp", title: "Launch your business" },
  { src: "https://brightadvis.com/wp-content/uploads/2024/01/featured-4.2.webp", title: "Simplify Registrations" },
  { src: "https://brightadvis.com/wp-content/uploads/2024/01/featured-4.2.webp", title: "Launch your business" },
  { src: "https://brightadvis.com/wp-content/uploads/2024/01/featured-4.2.webp", title: "Launch your business" },
  { src: "https://brightadvis.com/wp-content/uploads/2024/01/featured-4.2.webp", title: "Launch your business" },
];

function Frame() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-gray-400 font-bold text-center mb-2">WHAT WE DO</h2>
      <h2 className="text-3xl font-bold text-center mb-6">
        We simplify business for you
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gridItems.map((item, index) => (
          <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg">
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-lg font-bold transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-30">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Frame;
