import React, { useState } from 'react';
const List = () => {
    const [dropdown, setDropdown] = useState(null);
  return (
    <div className='bg-[#1E2D47]  px-6 py-3 border-b border-gray-200 '>
       <ul className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <l1>
        <h1 className='text-[#29B68D] '>Business Launchpad</h1>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("business")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300 text-white">Business Registration ▾</button>
            {dropdown === "business" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Private Limited Company</li>
                <li className="p-2 hover:bg-gray-200">Private Limited Company</li>
                <li className="p-2 hover:bg-gray-200">Private Limited Company</li>
                <li className="p-2 hover:bg-gray-200">Private Limited Company</li>
                <li className="p-2 hover:bg-gray-200">Private Limited Company</li>
                <li className="p-2 hover:bg-gray-200">Private Limited Company</li>
                <li className="p-2 hover:bg-gray-200">Private Limited Company</li>
                <li className="p-2 hover:bg-gray-200">Private Limited Company</li>
                <li className="p-2 hover:bg-gray-200">Private Limited Company</li>
                
              </ul>
            )}
          </li>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("Startup")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300 text-white">Startup India ▾</button>
            {dropdown === "Startup" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("Other")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300 text-white">Other Registration ▾</button>
            {dropdown === "Other" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
        
        <l1>
        <h1 className='text-[#29B68D] '>For Individuals</h1>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("Starter Services")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300 text-white">Starter Services ▾</button>
            {dropdown === "Starter Services" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("Elite Services")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300 text-white">Elite Services ▾</button>
            {dropdown === "Elite Services" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
       
        </l1>
        </l1>
        <l1>
        <h1 className='text-[#29B68D] '>Compliance & Assurance </h1>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("GST & Other Indirect Tax")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300 text-white">GST & Other Indirect Tax▾</button>
            {dropdown === "GST & Other Indirect Tax" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("Annual Compliances")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300 text-white">Annual Compliances▾</button>
            {dropdown === "Annual Compliances" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("Changes in Registrations")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300 text-white">Changes in Registrations ▾</button>
            {dropdown === "Changes in Registrations" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("Labour Compliances")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300 text-white">Labour Compliances ▾</button>
            {dropdown === "Labour Compliances" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("Convert your Business")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300 text-white">Convert your Business ▾</button>
            {dropdown === "Convert your Business" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
        
        <l1>
        <h1 className='text-[#29B68D] '>Financial mastery</h1>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("Accounting Excellence")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300 text-white">Accounting Excellence▾</button>
            {dropdown === "Accounting Excellence" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("Tax Management")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300 text-white">Tax Management▾</button>
            {dropdown === "Tax Management" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
         
        </l1>
        </l1>
        <l1>
        <h1 className='text-[#29B68D] '>Elite Business Services </h1>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("For New Startups")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300 text-white">For New Startups▾</button>
            {dropdown === "For New Startups" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
          <li 
            className="relative group"
            onMouseEnter={() => setDropdown("For Established Businesses")}
            onMouseLeave={() => setDropdown(null)}
          >
            <button className="hover:text-gray-300 text-white">For Established Businesses▾</button>
            {dropdown === "For Established Businesses" && (
              <ul className="absolute left-0 mt-2 bg-white text-black w-48 shadow-md rounded">
                <li className="p-2 hover:bg-gray-200">Business Registrations</li>
                <li className="p-2 hover:bg-gray-200">Startup India ▸</li>
                <li className="p-2 hover:bg-gray-200">Other Registrations</li>
              </ul>
            )}
          </li>
          
        
          <li>
            
            <h1 className='text-[#29B68D]'>Bright Advis</h1>
              
                <li className="p-1 hover:bg-[#29B68D] text-white">Home</li>
                <li className="p-1 hover:bg-[#29B68D] text-white">About </li>
                <li className="p-1 hover:bg-[#29B68D] text-white">Contact us</li>
              
          
          </li>
        </l1>
          
          <li>
            
            <h1 className='text-[#29B68D]'>Support</h1>
              
                <li className="p-1 hover:bg-[#29B68D] text-white">Terms of Services</li>
                <li className="p-1 hover:bg-[#29B68D] text-white">Privacy Policy </li>
                <li className="p-1 hover:bg-[#29B68D] text-white">Refund policy</li>
              
          
          </li>
        
        </ul>
    </div>
  )
}

export default List
