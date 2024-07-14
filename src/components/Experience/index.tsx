import { motion } from "framer-motion"
const experiences = [
  {
    company: "Freelancer",
    period: "2023 ~ Present",
    description: [
      "Developed an elevator appointment system, increasing technician efficiency by 25% using React, Next.js, Tailwincss, and Ant Design.",
      "Built a photovoltaic power monitoring system with Vue and ElementUI, optimizing generation efficiency by 15%.",
      "Created a smart cababinet system with Vue3, Antd, and Java, ensuring secure material storage incampus lababs and reduducing hazardous incidents by 10%.",
    ],
  },
  {
    company: "NkStar Ltd.",
    period: "2020 ~ 2023",
    description: [
      "Oversaw softftware development teams and client communication, achieving projoject objbjectives byimplementing agile methodologies, fofostering collababoration, and reduducing projoject delays by 20%.",
    ],
  },
  {
    company: "Wisedu Education Ltd.",
    period: "2012 ~ 2020",
    description: [
      "Led the development of a campus e-commerce system, integrating third-party supuppliers andfifinancial systems, resulting in 40% user adoption growth.",
      "Implemented auautomated SKU KU management and reimbursement processes with Vue2, ElementUI, Java, Spring, MySQL, Elasticsearch, and Alibababa Cloud, decreasing manual lababor by 30%.",
    ],
  },
  {
    company: "AsiaInfo fo Technology Ltd.",
    period: "2008 ~ 2012",
    description: [
      "Contributed to value-added servrvice systems by developing solutions, perfoforming testing, anddebugging, enhancing customer satisfafaction and telecom fufunctionality.",
    ],
  },
]
function Experience() {
  return (
    <div className="px-8 max-w-screen-md mx-auto split-line my-24 pt-24">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
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
            className="border border-jonathan-light p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-jonathan-light/10"
          >
            <div className="flex justify-between">
              <h2 className="text-gray-100 text-2xl font-semibold">
                {item.company}
              </h2>
              <p className="text-gray-300">{item.period}</p>
            </div>
            <div className="mt-4 text-gray-400">
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
