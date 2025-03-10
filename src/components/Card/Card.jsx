import { ArrowRight, MessageSquare } from "lucide-react";

export default function Card() {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-6">
     
      <div className="border border-gray-700 rounded-lg p-6 w-[200px] h-[250px] md:w-1/2 flex flex-col">
        <h2 className="text-2xl font-semibold text-gray-900">Speak to an expert</h2>
        <div className="flex items-center gap-3 mt-4">
          <img
            src="https://brightadvis.com/wp-content/uploads/2023/12/Team-Circle-Pic.webp" 
            alt="Expert"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">Suraj Palled</h3>
            <p className="text-gray-500">Chartered Accountant</p>
          </div>
        </div>
        <button className="mt-4 flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition w-42">
          Contact Suraj <ArrowRight size={16} />
        </button>
      </div>

    
      <div className="bg-gray-900 text-white rounded-lg p-10 md:w-1/2 flex flex-col">
        <h2 className="text-2xl font-semibold">
          Know what you need? <br />
          <span className="text-green-400">Get in touch.</span>
        </h2>
        <p className="mt-2 text-gray-300">
          We love clarity! Speak with our experts and let’s discuss your needs and get the ball rolling.
        </p>
        <button className="mt-4 flex items-center gap-2 bg-white text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-200 transition w-62">
          Get a quote <MessageSquare size={16} />
        </button>
      </div>
    </div>
  );
}
