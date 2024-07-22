import { motion } from "framer-motion"
const experiences = [
  {
    company: "Freelancer",
    period: "2023 ~ Present",
    description: [
      "Focus on developing web applications using React and Node.js ecosystem.",
      "Developed an elevator maintenance appointment system using React, Next.js, Tailwincss, and Ant Design.",
      "Built a photovoltaic power monitoring system with Vue and ElementUI.",
      "Created a smart cabinet system with Vue3, Antd, and Java, ensuring secure material storage in campus labs and reducing hazardous incidents.",
    ],
  },
  {
    company: "NkStar Ltd.",
    period: "2020 ~ 2023",
    description: [
      "Developed management systems for enterprises like ERP and OA Oversaw software development teams and client communication, achieving project objectives by fostering collaboration.",
    ],
  },
  {
    company: "Wisedu Education Ltd.",
    period: "2012 ~ 2020",
    description: [
      "Led the development of a campus e-commerce system, integrating third-party suppliers and financial systems.",
    ],
  },
  {
    company: "AsiaInfo fo Technology Ltd.",
    period: "2008 ~ 2012",
    description: [
      "Contributed to value-added service systems by developing solutions, performing testing, and debugging, and enhancing customer satisfaction and telecom functionality.",
    ],
  },
]
function Experience() {
  return (
    <div className="px-8 max-w-screen-md mx-auto split-line my-0 pt-0 md:my-24 md:pt-24">
      <h1 className="text-2xl md:text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      {/* <img src="/experience.jpg" /> */}
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="border border-jonathan-light p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-tr from-jonathan-main/80 to-jonathan-light/5"
          >
            <div className="flex flex-col md:flex-row gap-1 justify-between">
              <h2 className="text-white text-base md:text-2xl font-semibold">
                {item.company}
              </h2>
              <p className="text-gray-200">{item.period}</p>
            </div>
            <div className="mt-4 text-gray-300">
              {item.description.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Experience
