// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const Thoughts = () => {
  const content = [
    [`About VSSER`],
    [
      `The Virtual Summer School in Entrepreneurship Research (VSSER) is a global, no-fee academic platform designed to build research capacity in the field of entrepreneurship. Established in 2021, VSSER has quickly grown into one of the most accessible and widely attended initiatives for emerging scholars, attracting over 1,000 participants from more than 35 countries in its first four years.`,
    ],
    [
      `VSSER provides an opportunity to learn directly from leading researchers, gain insights into publishing in top-tier entrepreneurship journals, and connect with a global network of like-minded individuals passionate about entrepreneurship research. Whether you are a student, early-career researcher, or an aspiring academic, VSSER offers an inclusive space to enhance your research skills, understand contemporary debates, and engage with cutting-edge scholarship.`,
    ],
    [`Why Join VSSER?`, true],
    [
      `Many have the potential to become exceptional psychologists but need to refine their skills and build confidence before working with clients. Young psychologists excel in theory but need real-world experience.`,
    ],
    [
      `The industry needed more than just talent—it needed prepared, high-quality professionals ready to tackle the complexities of the field.`,
    ],
    [
      `This is why we created Rocket Academy:`,
      `a training ground where young psychologists evolve into skilled, confident professionals ready to face real-world practice.`,
      true,
    ],
  ]

  const lineContainer = {
    hidden: {},
    visible: (i) => ({
      transition: {
        delayChildren: i * 0.5,
        staggerChildren: 0.06,
      },
    }),
  }

  const wordFade = {
    hidden: { opacity: 0.2 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  }

  return (
    <section id="thoughts">
      <div className="relative text-white bg-[#09101a] -z-20 px-6 py-24 gap-y-6 flex flex-col">
        {content.map(([line1, line2, highlight], index) => {
          const words = (line1 + (line2 ? " " + line2 : "")).split(" ")
          const isHighlighted = (i) => highlight && i >= line1.split(" ").length

          return (
            <motion.div
              key={index}
              className={`flex flex-wrap text-2xl sm:text-3xl md:text-4xl px-2 sm:px-5 md:px-40 leading-relaxed ${
                highlight
                  ? "font-semibold leading-tight font-sans"
                  : "font-serif"
              }`}
              variants={lineContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={index}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className={`inline-block mr-2 ${
                    isHighlighted(i) ? "text-[#0a0217]" : ""
                  }`}
                  variants={wordFade}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Thoughts
