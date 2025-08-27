const articles = [
  {
    title: "Hollywood and China: A Silent Struggle for Cultural Dominance",
    image: "/articles1.jpg",
  },
  {
    title: "Berlinale 2025: Embracing the Virtual Auteur in AI-Driven Filmmaking",
    image: "/articles2.jpg",
  },
  {
    title: "Paris AI Summit 2025: Charting the Future of Cinema Through AI Innovations",
    image: "/articles3.jpg",
  },
  {
    title: "Zero Day: A Mini Series Unveiling the Fragility of Modern Order",
    image: "/articles4.jpg",
  },
  {
    title: "Israeli and Palestinian Cinema: A Mirror of Conflict, Tensions, and Aspirations for Peace",
    image: "/articles5.jpg",
  },
  {
    title: "British Cinema and Soft Power: Shaping Global Narratives in 2025",
    image: "/articles6.jpg",
  },
  {
    title: "Cinema and Climate Crisis: Between Awareness and Dramatization",
    image: "/articles7.jpg",
  },
  {
    title: "'Emilia Pérez' and the Oscars: France's cultural Diplomacy Put to the Test",
    image: "/articles8.jpg",
  },
];

const ArticleCard = ({ article }) => {
  return (
    // The entire card is now a link
    <a
      href={article.link}
      className="relative block h-72 w-full max-w-md mx-auto overflow-hidden shadow-lg rounded-xl group"
    >
      {/* Background Image with smooth transition */}
      <img
        src={article.image}
        alt={article.title}
        className="object-cover w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-110"
      />
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {/* Title: Slides up on hover */}
        <h2 className="text-white text-2xl font-bold leading-tight transition-all duration-300 ease-in-out transform group-hover:-translate-y-8 font-heading">
          {article.title}
        </h2>

        {/* "Read More" link with animated arrow: Fades in and slides up */}
        <div className="flex items-center mt-2 text-green-400 transition-all duration-300 ease-in-out transform opacity-0 group-hover:opacity-100 group-hover:-translate-y-8">
          <p className="font-semibold">Read More</p>
          {/* Arrow moves to the right on hover */}
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </a>
  );
};

// --- Main Articles Component ---
const Articles = () => {
  return (
    <div className="bg-[#09101a] min-h-screen text-white">
      {/* Header */}
      <div className="py-10 flex justify-end pr-6 sm:px-8 md:px-12 lg:px-20">
        <h1 className="text-green-400 text-[48px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-bold leading-none tracking-tight text-center md:text-right font-heading">
          Articles
        </h1>
      </div>

      {/* Articles Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-12 gap-x-8 px-4 sm:px-8 md:px-12 lg:px-20 pb-20">
        {articles.map((article, idx) => (
          <ArticleCard key={idx} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
