import React from "react";
import {
  FaUsers,
  FaPenFancy,
  FaHandsHelping,
  FaGraduationCap,
  FaBalanceScale,
} from "react-icons/fa";

const visionFeatures = [
  {
    icon: FaUsers,
    title: "Global Youth Diplomacy Network",
    description:
      "A space where students from across the world connect and collaborate.",
  },
  {
    icon: FaPenFancy,
    title: "Publishing Powerhouse",
    description:
      "A quality driven platform for student-led research and commentary in global affairs.",
  },
  {
    icon: FaHandsHelping,
    title: "Policy Incubator",
    description:
      "A launchpad for socially conscious changemakers and diplomacy-driven ventures.",
  },
  {
    icon: FaGraduationCap,
    title: "New Model of Diplomacy Education",
    description:
      "Interactive, research-based, and practice-oriented learning that reflects today’s global challenges.",
  },
];

const VisionTimelineItem = ({ icon: Icon, title, description, isLast }) => (
  <div className="relative pl-14 pb-12 border-l border-gray-400">
    {/* Circle with Icon */}
    <div className="absolute -left-7 top-1 w-14 h-14 bg-[#181f28] border-2 border-cyan-400 rounded-full flex items-center justify-center z-10 shadow-md">
      <Icon className="text-cyan-400 text-2xl" />
    </div>

    {/* Content */}
    <div className="bg-[#181f28] p-6 rounded-xl shadow-md border border-cyan-900 hover:border-cyan-400 transition">
      <h3 className="text-cyan-400 text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>

    {/* Line extender */}
    {!isLast && (
      <div className="absolute left-[11px] top-16 w-0.5 h-full bg-cyan-900"></div>
    )}
  </div>
);

const VisionSection = () => {
  return (
    <section className="min-h-screen py-16 px-6 md:px-20 bg-[#0f1e25]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
            Our Vision at International Relations & Global Diplomacy Consulting
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            We envision GDC as a globally recognized hub for excellence in diplomacy,
            international relations, and public policy where young minds lead, publish,
            and innovate for real-world impact. We believe in rising and thriving sustainably.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {visionFeatures.map((item, idx) => (
            <VisionTimelineItem
              key={idx}
              {...item}
              isLast={idx === visionFeatures.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

