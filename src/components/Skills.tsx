import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa"
import { RiJavaLine } from "react-icons/ri"
import { motion } from "framer-motion"
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOracle,
  SiPowerbi,
  SiReact,
  SiRedis,
  SiSass,
  SiSpring,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si"

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "HTML",
        icon: <SiHtml5 className="text-orange-500" />,
        stars: 5,
        halfStars: 0,
      },
      {
        name: "CSS",
        icon: <SiCss3 className="text-blue-500" />,
        stars: 5,
        halfStars: 0,
      },
      {
        name: "Javascript",
        icon: <SiJavascript className="text-yellow-400" />,
        stars: 5,
        halfStars: 0,
      },
      {
        name: "React",
        icon: <SiReact className="text-cyan-500" />,
        stars: 3,
        halfStars: 0,
      },
      {
        name: "Vue",
        icon: <SiVuedotjs className="text-green-500" />,
        stars: 4,
        halfStars: 0,
      },
      {
        name: "Sass",
        icon: <SiSass className="text-pink-500" />,
        stars: 3,
        halfStars: 0,
      },
      {
        name: "Tailwindcss",
        icon: <SiTailwindcss className="text-cyan-500" />,
        stars: 3,
        halfStars: 0,
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node Js",
        icon: <SiNodedotjs className="text-lime-500" />,
        stars: 4,
        halfStars: 0,
      },
      {
        name: "Express",
        icon: <SiExpress className="text-yellow-300" />,
        stars: 4,
        halfStars: 0,
      },
      {
        name: "Java",
        icon: <RiJavaLine className="text-cyan-500" />,
        stars: 4,
        halfStars: 0,
      },
      {
        name: "Spring",
        icon: <SiSpring className="text-green-500" />,
        stars: 4,
        halfStars: 0,
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600" />,
        stars: 4,
        halfStars: 0,
      },
      {
        name: "MySql",
        icon: <SiMysql className="text-cyan-600" />,
        stars: 5,
        halfStars: 0,
      },
      {
        name: "Redis",
        icon: <SiRedis className="text-red-500" />,
        stars: 4,
        halfStars: 0,
      },
      {
        name: "Oracle",
        icon: <SiOracle className="text-red-400" />,
        stars: 4,
        halfStars: 0,
      },
    ],
  },
  {
    category: "Language",
    items: [
      {
        name: "Chinese",
        icon: <span className="fi fi-cn"></span>,
        stars: 5,
        halfStars: 0,
      },
      {
        name: "English",
        icon: <span className="fi fi-us"></span>,
        stars: 3,
        halfStars: 1,
      },
    ],
  },
  {
    category: "Others",
    items: [
      {
        name: "Git",
        icon: <SiGit className="text-orange-600" />,
        stars: 5,
        halfStars: 0,
      },
      {
        name: "Docker",
        icon: <SiDocker className="text-cyan-500" />,
        stars: 3,
        halfStars: 0,
      },
      {
        name: "Jenkins",
        icon: <SiJenkins className="text-cyan-500" />,
        stars: 3,
        halfStars: 0,
      },
      {
        name: "PowerBi",
        icon: <SiPowerbi className="text-yellow-500" />,
        stars: 2,
        halfStars: 0,
      },
    ],
  },
]

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-50px" }}
      whileInView={{ opacity: 1, translateY: "0px" }}
      transition={{ duration: 1, delay: 0.5 }}
      className="flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      <p className="text-center mb-8">
        I am a full stack developer with a strong background in frontend and
        backend. <br />I have experience in building web applications with these
        technologies. Check them
        <a href="#" className="underline ml-2">
          there
        </a>
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-4 lg:gap-5 mt-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`border border-jonathan-main/60 p-6 bg-jonathan-main/20 shadow-md w-full rounded-md ${
              index === 0 && "lg:col-span-2"
            }`}
          >
            <h3 className="text-xl font-bold mb-4 text-center">
              {skill.category}
            </h3>
            <div
              className={`grid grid-cols-2 gap-y-5 gap-x-20 ${
                index === 0 && "lg:grid-cols-4"
              }`}
            >
              {skill.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center gap-5"
                >
                  <div className="flex items-center space-x-2">
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  <div className="flex gap-1">
                    <>
                      {[...Array(item.stars)].map((_, idx) => (
                        <FaStar key={idx} className="text-yellow-500/50" />
                      ))}
                    </>
                    <>
                      {[...Array(item.halfStars)].map((_, idx) => (
                        <FaStarHalf key={idx} className="text-yellow-500/50" />
                      ))}
                    </>
                    <>
                      {[...Array(5 - item.stars - item.halfStars)].map(
                        (_, idx) => (
                          <FaRegStar key={idx} className="text-gray-500" />
                        )
                      )}
                    </>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
