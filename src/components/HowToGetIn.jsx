import { FaWpforms, FaComments, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const HowToGetIn = () => {
  const steps = [
    {
      icon: FaWpforms,
      number: "1",
      title: "Online Application (10 minutes)",
      desc: "Fill in an application with your details. It also includes taking a video.",
    },
    { 
      icon: FaComments,
      number: "2",
      title: "Group Call (60 minutes)",
      desc: "If required, some applicants will need to book a 1:1 session to see if we're a mutual fit.",
    },
    { 
      icon: FaCheckCircle,
      number: "3",
      title: "Decision",
      desc: "Receive your decision by email (keep checking your spam). We accept only 20 members in each cohort.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0c1a21] to-[#0f1e25]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-extrabold text-cyan-400 mb-4 tracking-tight">
            How Do You Get In?
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-cyan-500/30 hover:border-cyan-400 text-center group"
              variants={itemVariants}
            >
              <div className="relative w-20 h-20 border-2 border-cyan-400 rounded-full flex items-center justify-center mx-auto mb-8 bg-gray-800 transition-transform duration-300 group-hover:scale-110">
                <step.icon className="text-4xl text-cyan-400 transition-colors duration-300 group-hover:text-white" />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 text-white font-bold text-sm rounded-full flex items-center justify-center border-2 border-gray-900">
                  {step.number}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105">
            COHORT WILL START SOON
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToGetIn;
