export default function Grid() {
    const articles = [
      {
        id: 1,
        image: "https://brightadvis.com/wp-content/uploads/2024/01/Accounting-for-Startups-with-Calculator.png", // Replace with actual image URL
        title: "Accounting for startups: essential tips for building a strong financial foundation",
        description:
          "In this article, we’ll provide you with essential tips for accounting for startups and managing finances effectively.",
      },
      {
        id: 2,
        image: "https://brightadvis.com/wp-content/uploads/2024/01/Accounting-for-Startups-with-Calculator.png", // Replace with actual image URL
        title: "How to deal with difficult employees",
        description:
          "In every workplace, there may be instances where managing difficult staff becomes necessary. Here are some strategies to help.",
      },
      {
        id: 3,
        image: "https://brightadvis.com/wp-content/uploads/2024/01/Accounting-for-Startups-with-Calculator.png", // Replace with actual image URL
        title: "Advantages of opening a Private Limited Company in India",
        description:
          "Private Limited Company is the most preferred business structure in India. Learn why it's beneficial for entrepreneurs.",
      },
    ];
  
    return (
      <section className="p-10 bg-white">
        <h1 className="text-gray-500 mb-3">BLOG</h1>
        <div className="flex justify-between items-center mb-6">
          
          <h2 className="text-4xl font-bold text-gray-900">
            Free Advice. Bright Ideas & More.
          </h2>
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
            Explore All Articles
          </button>
        </div>
  
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
                <p className="text-gray-600 mt-2">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  