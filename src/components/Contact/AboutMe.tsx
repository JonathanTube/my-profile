import { BiSmile } from "react-icons/bi"
import { motion } from "framer-motion"

function AboutMe() {
  return (
    <div>
      <div className="text-gray-300 my-10 md:my-0">
        <h3 className="text-4xl font-semibold mb-5 flex items-center gap-4">
          <span>About Me</span>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <BiSmile className="text-green-400" />
          </motion.div>
        </h3>
        <p className="text-justify leading-7 mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ea
          architecto, error eveniet quidem consectetur saepe nihil dolores
          inventore quia voluptatum blanditiis eos perspiciatis, hic laborum
          similique unde, asperiores eligendi.
        </p>
      </div>

      <div className="flex items-center mt-5 md:mt-10 gap-7">
        <div className="bg-gray-800/40 p-5 rounded-lg">
          <h3 className="md:text-4xl text-2xl font-semibold text-white">
            10<span className="text-jonathan-light ml-1">+</span>
          </h3>
          <p className="text-xs md:text-base">
            <span className="text-jonathan-light">Projects</span>
          </p>
        </div>

        <div className="bg-gray-800/40 p-5 rounded-lg">
          <h3 className="md:text-4xl text-2xl font-semibold text-white">
            10<span className="text-jonathan-light ml-1">+</span>
          </h3>
          <p className="text-xs md:text-base">
            <span className="text-jonathan-light">years of Experiences</span>
          </p>
        </div>

        <div className="bg-gray-800/40 p-5 rounded-lg">
          <h3 className="md:text-4xl text-2xl font-semibold text-white">
            10<span className="text-jonathan-light ml-1">+</span>
          </h3>
          <p className="text-xs md:text-base">
            <span className="text-jonathan-light">happy clients</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
