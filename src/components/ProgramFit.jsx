import { motion } from "framer-motion";

const ProgramFit = () => {
  const rightFitItems = [
    "You are a qualified researcher with a Master's degree or higher",
    "You are eager to unlearn and relearn for growth and improvement",
    "You want hands-on practical exposure before stepping into real-world practice",
    "You are passionate about delivering impactful research and making a difference in people's lives",
  ];

  const notRightFitItems = [
    "You're still 6+ months from completing your Master's and lack foundational qualifications",
    "You're looking for shortcuts or quick fixes without committing to skill-building",
    "You prefer theoretical learning over practical, immersive training",
    "You're not ready to dedicate the time and effort required to become a skilled professional",
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1e25] to-[#0c1a21]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
            This Program is <span className="italic text-cyan-400">Not</span> for Everyone
          </h1>
          <p className="text-2xl text-gray-400 font-medium">
            Find out if you're the right fit for our intensive program.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm p-10 rounded-2xl border border-green-500/40 shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-green-400 mb-8 flex items-center">
              <span className="text-4xl mr-3">✅</span> You're the Right Fit If
            </h2>
            <ul className="space-y-6">
              {rightFitItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-300 flex items-center justify-center mr-4 mt-1 border border-green-500/50">
                    ✓
                  </div>
                  <span className="text-gray-300 text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm p-10 rounded-2xl border border-red-500/40 shadow-lg hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-red-400 mb-8 flex items-center">
              <span className="text-4xl mr-3">❌</span> It's Not for You If
            </h2>
            <ul className="space-y-6">
              {notRightFitItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 text-red-300 flex items-center justify-center mr-4 mt-1 border border-red-500/50">
                    ✗
                  </div>
                  <span className="text-gray-300 text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramFit;
