export default function Home() {
  return (
    <div className="bg-white p-8">
      <div className="max-w-6xl mx-auto  grid md:grid-cols-2 gap-8 items-center">
       
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 mb-4 rounded-lg">
            Call for free consultation
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Helping your business from start to scale in
            <span className="text-green-600"> Direct Tax</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Bright Advis is a platform that offers services in
            <span className="font-semibold"> Company Registrations</span>,
            Taxation, Accounting, Legal Compliances, Audit, and Financial
            Management.
          </p>
          <p className="text-gray-600 mb-4">
            Bright Advis provides expertise in GST Returns, TDS Returns, Income
            Tax Returns, and more.
          </p>
          <div className="flex gap-2">
            <span className="bg-gray-200 px-3 py-1 rounded-full">Company Registration</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">GST Registration</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full">MSME</span>
          </div>
        </div>

        
        <div className="relative">
          <img
            src="https://brightadvis.com/wp-content/uploads/2024/02/Hero-5.webp"
            alt="Tax Services"
            className="w-full h-[600px]"
          />
        </div>
      </div>
    </div>
  );
}