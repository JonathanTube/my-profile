import { BiSmile } from "react-icons/bi"
import { motion } from "framer-motion"

function Bio() {
  return (
    <div>
      <div className="text-gray-300 my-10 md:my-0">
        <h3 className="text-2xl md:text-4xl font-semibold mb-5 flex items-center gap-4">
          <span>Bio</span>
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
          I'm Jonathan, an experienced software developer with a 10-year
          background in Java development. I've transitioned to frontend
          development, specializing in Vue, React, and Node. As a lifelong
          learner, I thrive in remote teamwork environments and enjoy using my
          expertise to build exceptional web experiences.
        </p>
      </div>

      <div className="flex items-center mt-5 md:mt-10 gap-2 md:gap-7">
        <div className="bg-gray-800/40 p-5 rounded-lg bg-gradient-to-tr from-jonathan-gray to-jonathan-dark">
          <h3 className="md:text-4xl text-2xl font-semibold text-white">
            3<span className="text-jonathan-light ml-1">+</span>
          </h3>
          <p className="text-sm md:text-base">
            <span className="text-jonathan-light">
              years of experiences in frontend
            </span>
          </p>
        </div>

        <div className="bg-gray-800/40 p-5 rounded-lg bg-gradient-to-br from-jonathan-gray to-jonathan-dark">
          <h3 className="md:text-4xl text-2xl font-semibold text-white">
            10<span className="text-jonathan-light ml-1">+</span>
          </h3>
          <p className="text-sm md:text-base">
            <span className="text-jonathan-light">
              years of experiences in Java
            </span>
          </p>
        </div>

        <div className="bg-gray-800/40 p-5 rounded-2xl bg-gradient-to-bl from-jonathan-gray to-jonathan-dark">
          <h3 className="md:text-4xl text-2xl font-semibold text-white">
            10<span className="text-jonathan-light ml-1">+</span>
          </h3>
          <p className="text-sm md:text-base">
            <span className="text-jonathan-light">projects</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Bio
