import { SiGithub } from "react-icons/si"
import { ShinyEffect } from "../ShinyEffect"
import { motion } from "framer-motion"

const projects = [
  {
    title: "LiftHub",
    summary:
      "Create a platform connecting businesses, elevator technicians, and service providers for streamlined elevator maintenance.",
    image: "/projects/lifthub_org_dashboard.png",
    url: "https://org.lifthub.cn",
    github: "https://github.com",
    techStack: ["react", "nextjs", "tailwindcss", "ant design"],
  },
  {
    title: "Campus Laboratory Smart Cabinet Management System(PC)",
    summary:
      "Develop a smart cabinet management system for campus laboratories to efficiently and securely store and manage materials, including hazardous substances.",
    image: "/projects/cabinet_pc.png",
    url: "https://140.143.202.23:9001/chem",
    techStack: ["vue3", "vuex", "ElementUI", "java", "spring"],
  },
  {
    title: "Campus Laboratory Smart Cabinet Management System(H5)",
    summary:
      "Develop a smart cabinet management system for campus laboratories to efficiently and securely store and manage materials, including hazardous substances.",
    image: "/projects/cabinet_h5.png",
    url: "https://140.143.202.23:9001/h5/",
    techStack: ["vue", "vuex", "uview", "java", "spring"],
  },
  {
    title: "Photovoltaic Power Generation Efficiency Management System",
    summary:
      "Develop a system to monitor, analyze, and optimize the efficiency of photovoltaic power generation facilities.",
    image: "/projects/PPGEMS1.png",
    url: "",
    techStack: ["vue", "vuex", "uniapp"],
  },
  {
    title: "Campus E-commerce",
    summary:
      "Unified management of supplier SKU, integrating product purchasing and expense reimbursement processes, enabling university professors to select teaching-related products from designated supplier SKUs without needing to apply for reimbursement for each purchase.",
    image: "/projects/campus-e-commerce.png",
    url: "https://ucaigou.net/",
    techStack: ["vue", "vuex", "ElementUI", "java", "spring"],
  },
]

function Portfolio() {
  return (
    <div
      className="max-w-screen-xl mx-auto md:mt-24 md:pt-24 relative text-center px-4 split-line"
      id="portfolio"
    >
      <h2 className="text-3xl font-bold text-gray-200 mb-10">Portfolio</h2>
      {projects.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row mb-12 md:gap-10 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            className="w-full md:w-1/2 md:h-80 shadow-2xl shadow-jonathan-light/20"
            initial={{ opacity: 0, translateY: "-50px" }}
            whileInView={{ opacity: 1, translateY: "0px" }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-300 mb-4">{item.summary}</p>
            <div className="flex space-x-4">
              <a
                href={item.url}
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 flex items-center justify-center"
              >
                Visit
              </a>
              <a
                href={item.url}
                className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 flex items-center justify-center"
              >
                <SiGithub />
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute inset-0 -z-10">
        <ShinyEffect top={-400} left={0} size={1280} />
        <ShinyEffect top={800} left={200} size={1280} />
      </div>
    </div>
  )
}

export default Portfolio
