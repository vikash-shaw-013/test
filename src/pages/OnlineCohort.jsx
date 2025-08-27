import React from "react";
import CohortCard from "../components/CohortCard.jsx";
import {
  FaProjectDiagram,
  FaEdit,
  FaBullhorn,
  FaHandshake,
  FaLayerGroup,
  FaUserFriends,
  FaChartLine,
} from "react-icons/fa";

const OnlineCohort = () => {
  return (
    <>
      <section id="cohort" className="relative bg-[#0c1a21] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a21] via-[#122b39] to-[#0c1a21]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.07),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.06),transparent_60%)]" />

        <div className="relative w-full text-white py-16 flex flex-col items-center justify-center text-center gap-y-8 px-4 animate-fade-in-up">
          <span className="font-semibold text-base md:text-lg tracking-wider text-cyan-300 uppercase">
            6-Week Online Program
          </span>

          <h1 className="font-extrabold text-4xl md:text-5xl max-w-2xl leading-tight">
            Master the{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
              A-to-Z
            </span>{" "}
            of Practical Research
          </h1>

          <p className="text-base md:text-lg max-w-xl text-gray-300 leading-relaxed">
            We'll help you evolve from a young researcher to a confident,
            skilled professional, equipping you with hands-on experience,
            real-world techniques, and the confidence to excel in academics.
          </p>

          <span className="bg-gradient-to-r from-cyan-400 to-sky-500 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg shadow-cyan-400/40 transform hover:scale-105 transition-transform duration-300">
            Cohort Starts Soon
          </span>
        </div>
      </section>

      <section
        id="everything-you-need"
        className="relative bg-[#0c1a21] overflow-hidden border-t border-cyan-900/50"
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-[#0c1a21] via-[#122b39] to-[#0c1a21]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.06),transparent_60%)]" />

        <div className="relative flex flex-col sm:flex-row w-full items-center justify-between px-6 md:px-16 py-16 md:py-24 gap-y-12 sm:gap-x-12">
          <div className="flex flex-col max-w-xl gap-y-6 text-center sm:text-left">
            <h2 className="font-extrabold text-4xl md:text-5xl text-white leading-tight">
              Everything You Need to Succeed as a Researcher
            </h2>
            <p className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent font-bold text-2xl md:text-3xl">
              Expert-Led Sessions
            </p>
            <ul className="space-y-3 text-lg md:text-xl text-gray-300">
              <li className="hover:text-cyan-300 transition-colors duration-300">Structured Training Programs</li>
              <li className="hover:text-cyan-300 transition-colors duration-300">Community and Mentorship</li>
              <li className="hover:text-cyan-300 transition-colors duration-300">Certification and Beyond</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section id="mentors" className="bg-[#0c1a21] border-t border-cyan-900/50">
        <div className="w-full text-white py-16 flex flex-col items-center justify-center text-center gap-y-6 px-4">
          <span className="font-semibold text-base md:text-lg tracking-wider uppercase text-cyan-300">
            Meet Your Mentors
          </span>
          <h2 className="font-extrabold text-3xl md:text-4xl max-w-2xl leading-snug text-white">
            Guided by world-class researchers, every week.
          </h2>
          <p className="text-base md:text-lg text-sky-400">Learn from the best</p>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="bg-[#0c1a21] text-white py-16 px-4 border-t border-cyan-900/50">
        <div className="flex flex-col items-center justify-center text-center w-full gap-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Objectives of International Relations & Global Diplomacy Consulting (IRGDC)
          </h2>
          <p className="font-medium text-lg text-cyan-300 max-w-4xl leading-relaxed">
            The objectives of GDC are framed to guide the platform's growth, output,
            and institutional effectiveness in a phased and focused manner. These
            objectives translate GDC's broader values and ambitions into concrete,
            measurable, and time-bound goals that support long-term impact and
            operational success. Each objective below is mapped to a strategic
            function of the organization, ensuring that GDC evolves as a
            results-oriented, adaptive, and mission-driven platform.
          </p>
        </div>

        <div className="w-full px-4 md:px-16 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {[
              {
                icon: FaProjectDiagram,
                title: "Launch Core Verticals (Year 1–2):",
                desc: [
                  "Certified courses, research mentorship, media platform, academic journal, and annual conference",
                ],
              },
              {
                icon: FaEdit,
                title: "Editorial Integrity:",
                desc: [
                  "Establish a robust editorial process with double-blind reviews, plagiarism checks, and academic mentoring.",
                ],
              },
              {
                icon: FaBullhorn,
                title: "Nationwide Outreach:",
                desc: [
                  "Build awareness through partnerships, events, student ambassadors, and campus campaigns.",
                ],
              },
              {
                icon: FaHandshake,
                title: "Global Partnerships:",
                desc: [
                  "Collaborate with universities, think tanks, and embassies for shared events, internships, and publications.",
                ],
              },
              {
                icon: FaLayerGroup,
                title: "Modular Certification:",
                desc: [
                  "Offer flexible, stackable learning modules leading to diplomas in diplomacy and international affairs.",
                ],
              },
              {
                icon: FaUserFriends,
                title: "Alumni & Mentorship Network:",
                desc: [
                  "Connect past cohorts with current ones through mentorship, guest talks, and advisory roles.",
                ],
              },
              {
                icon: FaChartLine,
                title: "Annual Youth Diplomacy Report:",
                desc: [
                  "Highlight top student work in an annual publication shared with global institutions.",
                ],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#122b39] to-[#0c1a21] rounded-xl shadow-lg border border-cyan-700/50 hover:border-cyan-400 hover:shadow-cyan-400/20 hover:scale-105 transition-all duration-300 p-8"
              >
                <CohortCard
                  icons={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCohort;
