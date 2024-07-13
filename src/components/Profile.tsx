import { motion } from "framer-motion"
import JonathanFigure from "../assets/JonathanFigure.png"
// import JonathanOutline from "../assets/JonathanOutline.png"

function Profile() {
  return (
    <motion.img
      src={JonathanFigure}
      alt="Profile"
      className="w-[300px] lg:w-[400px]"
      initial={{
        translateX: "-200px",
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
    />
  )
}

export default Profile
