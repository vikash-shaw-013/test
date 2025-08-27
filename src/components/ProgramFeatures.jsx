import {
  FaVideo,
  FaUsers,
  FaFlask,
  FaChartLine,
  FaUserTie,
  FaInfinity,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: FaVideo,
    title: "Weekly LIVE Sessions",
    desc: "Interactive, engaging, and tailored to all, whether you're an average or professional researcher"
  },
  {
    icon: FaUsers,
    title: "Find Your Tribe",
    desc: "Network with researchers from diverse backgrounds. Many lifelong connections begin here"
  },
  {
    icon: FaFlask,
    title: "Practice-Based Learning",
    desc: "Hands-on research-work and assignments mirror real-world challenges faced by professional researchers"
  },
  {
    icon: FaChartLine,
    title: "Achieve Tangible Growth",
    desc: "With tailored guidance and high completion rates, we help you reach your goals confidently"
  },
  {
    icon: FaUserTie,
    title: "Personal Mentor Insights",
    desc: "Learn from unfiltered mentor stories, gaining unique insights beyond textbooks"
  },
  {
    icon: FaInfinity,
    title: "Lifetime Community",
    desc: "Cohort members enjoy lifetime access to our VSSER family, fostering lasting career and personal growth",
  },
];

const ProgramFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0c1a21] to-[#0f1e25]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
            From Basics to Mastery in Real-World Research
          </h1>
          <p className="text-2xl text-cyan-400 font-medium">
            Join our comprehensive program designed for aspiring researchers.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-green-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg 
                         hover:bg-white hover:shadow-white/40 
                         transition-all duration-300 hover:scale-105 
                         border border-green-500/30 hover:border-white group"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 border-2 border-green-400 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <feature.icon className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-700">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramFeatures;
