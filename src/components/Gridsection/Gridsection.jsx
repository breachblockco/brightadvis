import React, { useState } from "react";

const serviceData = [
  {
    title: "Financial Mastery",
    image: "https://brightadvis.com/wp-content/uploads/2024/01/Service-3.webp", // Replace with actual image URL
    items: ["Accounting Excellence", "Tax Management"],
  },
  {
    title: "Elite Business Services",
    image: "https://brightadvis.com/wp-content/uploads/2024/01/Service-3.webp", // Replace with actual image URL
    items: ["For New Startups", "For Established Businesses"],
  },
  {
    title: "For Individuals",
    image: "https://brightadvis.com/wp-content/uploads/2024/01/Service-3.webp", // Replace with actual image URL
    items: ["Starter Services", "Elite Services"],
  },
];

function Gridsection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {serviceData.map((service, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
        >
          {/* Image */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 object-cover"
          />

          {/* Content */}
          <div className="p-5">
            <h3 className="text-xl font-bold">{service.title}</h3>

            {/* Expandable Section */}
            <button
              className="text-blue-600 mt-2"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {openIndex === index ? "▲ Hide Details" : "▼ Show Details"}
            </button>

            {openIndex === index && (
              <ul className="mt-3 text-gray-600">
                {service.items.map((item, i) => (
                  <li key={i} className="py-1">✅ {item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gridsection;
