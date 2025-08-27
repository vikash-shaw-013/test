import React from 'react';
import valueImage from '../assets/value-image.jpg';
import {
  FaBrain,
  FaGlobeAmericas,
  FaBalanceScale,
  FaUserGraduate,
  FaComments
} from "react-icons/fa";

const valueItems = [
  {
    icon: FaBrain,
    text:
      "● Ethical Engagement: Diplomacy as a mindset of listening, reflection, and responsibility.",
  },
  {
    icon: FaGlobeAmericas,
    text:
      "● Intellectual Rigor: Encouraging critical thinking and high academic standards.",
  },
  {
    icon: FaBalanceScale,
    text:
      "● Diversity & Inclusion: Uplifting voices from all backgrounds and geographies.",
  },
  {
    icon: FaUserGraduate,
    text:
      "● Transparency & Collaboration: Working openly and with shared purpose across disciplines and communities.",
  },
  {
    icon: FaComments,
    text:
      "We believe in fostering learning environments that are grounded in empathy, open dialogue, and mutual respect to build truly global citizenship.",
  },
];

const Values = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0f1e25]">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_10px_#22d3ee]">
              Core Values of International Relations & Global Diplomacy Consulting
            </h1>
          </div>
        </div>

        {/* Value Cards */}
        <div className="mt-16 space-y-6 max-w-5xl">
          {valueItems.map(({ icon: Icon, text }, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-6 rounded-xl border border-cyan-800 hover:border-cyan-400 transition-all duration-300 bg-[#181f28] hover:shadow-lg hover:scale-[1.02]"
            >
              {/* Icon container */}
              <div className="flex-shrink-0 w-12 h-12 bg-cyan-900 border-2 border-cyan-400 rounded-full flex items-center justify-center shadow-md">
                <Icon className="text-cyan-400 text-xl" />
              </div>

              {/* Text */}
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-cyan-400">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
