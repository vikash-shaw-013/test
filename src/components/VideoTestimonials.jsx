import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VideoTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const videos = [
    { title: 'Member testimonial', duration: '3:45' },
    { title: 'Program highlights', duration: '2:30' },
    { title: 'Success stories', duration: '4:12' },
    { title: 'Career transformation', duration: '3:18' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-[#0c1a21] to-[#0f1e25]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-20 text-cyan-400 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          See Our Program in Action
        </motion.h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            <AnimatePresence mode="popLayout">
              {videos
                .slice(currentSlide, currentSlide + 3)
                .concat(
                  videos.slice(
                    0,
                    Math.max(0, currentSlide + 3 - videos.length)
                  )
                )
                .map((video, index) => (
                  <motion.div
                    key={`${currentSlide}-${index}`}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    layout
                  >
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden aspect-video relative border border-cyan-500/30 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2">
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-20 h-20 bg-cyan-500/80 rounded-full flex items-center justify-center group-hover:bg-cyan-400 transition-all duration-300 shadow-lg transform group-hover:scale-110">
                          <svg
                            className="w-9 h-9 text-white ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-4 bg-cyan-400 px-3 py-1 rounded-md text-gray-900 text-sm font-bold shadow-sm">
                        {video.duration}
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-cyan-300 font-semibold text-center text-lg">
                        {video.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center space-x-6">
            <button
              onClick={prevSlide}
              className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cyan-500/40"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>

            <div className="flex space-x-3">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-cyan-400 scale-125 shadow-md"
                      : "bg-gray-600 hover:bg-cyan-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cyan-500/40"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>

          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-gray-400 text-xl mb-6">
              Ready to transform your research career?
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 text-xl">
              Watch Full Program Overview
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
