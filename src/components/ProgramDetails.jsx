import { motion } from "framer-motion";

const ProgramDetails = () => {
  const benefits = [
    "Admission into the upcoming cohort, with access to research tools, resources and live recordings",
    "1:1 mentorship and supervision from experienced researchers to build a successful career as a researcher",
    "Exclusive access to a network of researchers, workshops and meet ups",
    "Career guidance to help you design your next chapter — whether it's scaling your practice, discovering your areas of interest, or building a hybrid career beyond 1:1 research",
  ];

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-[#0f1e25] to-[#0c1a21]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-extrabold text-cyan-400 mb-4 tracking-tight">
            Program Details
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            If this sounds like something you've been looking for, we'd love to get to know you further and explore if you'd be a good fit!
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-900/50 backdrop-blur-sm p-10 rounded-2xl shadow-lg border border-cyan-500/30 mb-12 transform transition-all duration-300 hover:-translate-y-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">What You'll Get</h2>
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center mr-4 mt-1 border border-cyan-500/50">
                  ✓
                </div>
                <span className="text-gray-300 text-lg leading-relaxed">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="bg-gray-900/50 backdrop-blur-sm p-10 rounded-2xl shadow-lg border border-cyan-500/30 mb-12 transform transition-all duration-300 hover:-translate-y-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-6">Interested?</h3>
          <p className="text-gray-300 text-lg mb-4 leading-relaxed">
            This is an exclusive cohort, and every application is assessed and individually handpicked based on our internal criteria.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Every application is carefully assessed and handpicked based on our internal criteria.
          </p>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 text-xl">
            Apply Now
          </button>
          <p className="text-gray-400 leading-relaxed mt-6 max-w-2xl mx-auto">
            Please take a moment to answer the questions; we use these to assess whether you're a good fit!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramDetails;
