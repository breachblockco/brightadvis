import React, { useState } from "react";

const services = [
  {
    title: "Business Launchpad",
    image: "https://brightadvis.com/wp-content/uploads/2024/01/Service-1.webp", // Replace with actual image URL
    items: ["Business Registrations", "Startup India", "Other Registrations"],
  },
  {
    title: "Compliance & Assurance",
    image: "https://brightadvis.com/wp-content/uploads/2024/01/Service-1.webp", // Replace with actual image URL
    items: [
      "GST & Other Indirect Tax",
      "Annual Compliances",
      "Changes in Registrations",
      "Labour Compliances",
      "Convert your Business",
    ],
  },
];

function Service() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Text Section */}
      <div>
        <h1 className="text-gray-400 font-bold mb-2">SERVICES</h1>
        <h2 className="text-3xl md:text-4xl font-bold">
          Everything you need to start, run and manage a business in India.
        </h2>
        <p className="text-gray-600 mt-4">
          At Bright Advis, we offer a suite of comprehensive services designed
          to assist you at every stage of your business journey. Our commitment
          is to provide everything you need to start, run, and manage a
          successful business in India. Here’s how our tailored services can
          empower your business endeavors.
        </p>
      </div>

      {/* Right Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Service Image */}
            <img src={service.image} alt={service.title} className="w-full h-40 object-cover" />

            {/* Service Title */}
            <div className="p-4">
              <h3 className="text-xl font-bold">{service.title}</h3>

              {/* Expandable List */}
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
    </div>
  );
}

export default Service;
