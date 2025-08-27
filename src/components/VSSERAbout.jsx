import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 25, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      variants={containerVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-block ${className}`}
    >
      {text.split(" ").map((word, i) => (
        <motion.span key={i} variants={wordVariant} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );
};

const GDCAbout = () => (
  <div className="relative z-10 w-full min-h-screen bg-[#0c1a21]">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a21] via-[#122b39] to-[#0c1a21]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.1),transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.07),transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.06),transparent_60%)]" />

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative max-w-7xl mx-auto px-6 py-20 text-white"
    >
      <AnimatedSection className="mb-24">
        <div className="relative border-l-4 border-cyan-400 pl-8">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-cyan-400/10 to-transparent origin-left"
          />
          <AnimatedText
            text="At IRGDC, our aim is to create an accessible and credible platform that empowers students, especially from underserved regions to become globally competent scholars, policy thinkers, and public leaders. We bridge gaps in mentorship, research opportunities, and academic publishing to help students unlock their full potential in diplomacy and international affairs."
            className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light tracking-wide"
          />
        </div>
      </AnimatedSection>

      <div className="space-y-20">
        {[
          {
            title: "Global Youth Diplomacy Network",
            description: "A space where students from across the world connect and collaborate.",
          },
          {
            title: "Publishing Powerhouse",
            description: "A quality-driven platform for student-led research and commentary in global affairs.",
          },
          {
            title: "Policy Incubator",
            description: "A launchpad for socially conscious changemakers and diplomacy-driven ventures.",
          },
          {
            title: "New Model of Diplomacy Education",
            description: "Interactive, research-based, and practice-oriented learning that reflects today's global challenges.",
          },
        ].map((item, idx) => (
          <AnimatedSection key={idx} className="group">
            <div className="relative pl-10 pr-6 py-6 bg-gradient-to-br from-[#122b39]/80 to-[#0c1a21]/80 border border-cyan-700/50 rounded-lg shadow-lg hover:border-cyan-400 hover:shadow-cyan-400/20 transition-all duration-300">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.7)]"
              />
              <AnimatedText
                text={item.title}
                className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent"
              />
              <AnimatedText
                text={item.description}
                className="text-lg text-gray-300 leading-relaxed"
              />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </motion.div>
  </div>
);

export default GDCAbout;
