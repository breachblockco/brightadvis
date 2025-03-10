import React from "react";

function AboutSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">
          We turn your obstacles into{" "}
          <span className="text-green-600">opportunities</span>
        </h2>
        <p className="text-gray-600 mt-4">
          From a business idea to registering your business. From regulatory
          compliances, accounting to financial growth, we help organizations
          turn obstacles into opportunities. Bright Advis provides a team that
          will help you grow and build a legacy business.
        </p>

        
        <ul className="mt-6 space-y-3">
          <li className="flex items-center text-gray-700">
            ✅ <span className="ml-2 font-semibold">Professional Expertise</span>
          </li>
          <li className="flex items-center text-gray-700">
            ✅ <span className="ml-2 font-semibold">In-depth Industry Experience</span>
          </li>
          <li className="flex items-center text-gray-700">
            ✅ <span className="ml-2 font-semibold">Trusted by Organizations</span>
          </li>
          <li className="flex items-center text-gray-700">
            ✅ <span className="ml-2 font-semibold">Affordable Pricing</span>
          </li>
        </ul>

       
        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition">
          About Us
        </button>
      </div>

      
      <div className="relative">
        
        <img
          src="https://brightadvis.com/wp-content/uploads/2024/01/Home-About-us-Section.webp" 
          alt="Business Advisor"
          className="w-full rounded-lg h-[500px] shadow-md"
        />

        
        <div className="absolute bottom-0 left-0 bg-green-600 text-white px-6 py-3 rounded-tr-lg text-xl font-bold">
          7+ <br />
          <span className="text-sm font-normal">Years of Experience</span>
        </div>
      </div>

     
      <div className="col-span-1 md:col-span-2 flex justify-between text-center mt-6 text-gray-800">
        <div>
          <h3 className="text-3xl font-bold">1,600+</h3>
          <p className="text-gray-600">Clients</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">10+</h3>
          <p className="text-gray-600">Experienced Team</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">93+</h3>
          <p className="text-gray-600">Successful Projects</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">127+</h3>
          <p className="text-gray-600">Companies Trust Us</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
