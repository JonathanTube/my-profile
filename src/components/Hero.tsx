import { motion } from "framer-motion"
import Intro from "./Intro"
import SocialMedia from "./SocialMedia"
import JonathanFigure from "../assets/JonathanFigure.png"
// import JonathanOutline from "../assets/JonathanOutline.png"

function Hero() {
  return (
    <div className="mt-24 max-w-screen-xl mx-auto relative">
      <div className="grid mx-5 lg:grid-cols-2 lg:mx-5 place-items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Intro />
          <SocialMedia />
        </motion.div>

        <motion.img
          src={JonathanFigure}
          alt="Profile"
          className="w-[300px] lg:w-[400px]"
          initial={{
            translateX: "50vw",
            rotate: "180deg",
            opacity: 0,
            scale: 0.1,
            filter: "blur(100px)",
          }}
          whileInView={{
            translateX: "0",
            rotate: "0deg",
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            delay: 2,
          }}
        ></motion.img>
      </div>
    </div>
  )
}

export default Hero
