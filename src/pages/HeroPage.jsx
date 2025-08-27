import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroPage = () => {
  const navigate = useNavigate();
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setContentVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
  
      <img
        src="https://bocconsultingpro.com/images/detail_service5.jpg"
        alt="Global Diplomacy Network Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 animate-zoom-in"
      /> 
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-10 text-center max-w-4xl mx-auto py-20">
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6
            transform transition-all duration-1000 ease-out ${
              contentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
        >
          <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent italic block">
            Global Diplomacy Consulting 
          </span>
          <span className="text-cyan-400 block mt-3">
            GDC is not just a platform, It’s a movement
            </span>
        </h1>

        <p
          className={`mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mb-10 font-medium
            transform transition-all duration-1000 delay-300 ease-out ${
              contentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
        >
          We help students build futures shaped by knowledge, confidence, and global vision
        </p>

        <button
          onClick={goToAbout}
          className={`bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-4 px-12 rounded-full transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-2xl text-lg
            ${
              contentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
        >
          Discover Our Expertise
        </button>
      </div>
    </section>
  );
};

export default HeroPage;
