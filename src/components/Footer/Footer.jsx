import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1B2B44] text-white py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
      
        <div className="flex justify-center md:justify-start">
          <img
            src="https://brightadvis.com/wp-content/uploads/2022/01/Untitled-design-768x219.webp"
             className="h-12"
          />
        </div>

       
        <div className="max-w-lg mx-auto md:mx-0">
          <p className="text-sm text-gray-300 leading-relaxed">
            Bright Advis (Bright Financial Planning and Advisories Private Limited) promotion on Google Ads focuses on providing consultancy services through our private portal (<a href="https://www.brightadvis.com" className="text-blue-400 hover:underline">https://www.brightadvis.com</a>).
            Our portal does not represent any affiliation or association with any government authority or body. We emphasize that we are a private company managing this website, and any fees collected are for consultancy services rendered.
          </p>
        </div>

     
        <div className="mx-auto md:mx-0">
        
          
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <i className="bx bx-envelope text-lg"></i>
            <span>support@brightadvis.com</span>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
            <i className="bx bx-phone text-lg"></i>
            <span>+91 7019565772</span>
          </div>

          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white text-xl">
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
        </div>

      </div>

     
      <div className="border-t border-gray-500 mt-6 pt-4 text-center text-sm text-gray-400">
        <p>© Copyright 2024 Bright Financial Planning and Advisories Private Limited</p>
      </div>
    </footer>
  );
};

export default Footer;
