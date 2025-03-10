export default function Step() {
    const steps = [
      {
        id: 1,
        image: "https://brightadvis.com/wp-content/uploads/2024/01/Frustrated-and-Sad-Employee.jpg", // Replace with actual image
        step: "Step 01",
        title: "Schedule a Meeting",
        description: "Connect with our experts and schedule a meeting.",
      },
      {
        id: 2,
        image: "https://brightadvis.com/wp-content/uploads/2024/01/Frustrated-and-Sad-Employee.jpg", // Replace with actual image
        step: "Step 02",
        title: "Consult with Experts",
        description: "Our experts will listen and understand your requirements. We will then get to work immediately.",
      },
      {
        id: 3,
        image: "https://brightadvis.com/wp-content/uploads/2024/01/Frustrated-and-Sad-Employee.jpg", // Replace with actual image
        step: "Step 03",
        title: "Sit back & Relax",
        description: "While you are busy dealing with the day-to-day of your business, we will take care of everything.",
      },
    ];
  
    return (
      <section className="bg-[#12213A] text-white py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 ">
          3 easy steps to 
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 ">
          hire Bright Advis
        </h2>
  
  
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div key={step.id} className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
              <img src={step.image} alt={step.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <span className="bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-lg inline-block mb-2">
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  