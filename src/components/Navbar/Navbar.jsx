import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  return (
    <nav className="bg-white text-black px-6 py-3 border-b border-gray-200">

      <div className="container mx-auto flex justify-between items-center">
       
        <div className="text-2xl font-bold">BRIGHT ADVIS</div>

        
        <ul className="hidden md:flex space-x-6">
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("business")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300">Business Launchpad ▾</button>
            {dropdown === "business" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("Compliance")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300">Compliance & Assurance ▾</button>
            {dropdown === "Compliance" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("Financial Mastery")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300">Financial Mastery ▾</button>
            {dropdown === "Financial Mastery" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("Elite Business Services")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300">Elite Business Services ▾</button>
            {dropdown === "Elite Business Services" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("For Individuals")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300">For Individuals ▾</button>
            {dropdown === "For Individuals" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("Others ")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300">Others ▾</button>
            {dropdown === "Others " && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Home</li>
                <li className="p-2 hover:bg-gray-200">About </li>
                <li className="p-2 hover:bg-gray-200">Contact us</li>
              </ul>
            )}
          </li>
        
        </ul>

       
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
