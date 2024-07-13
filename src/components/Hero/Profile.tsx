import { motion } from "framer-motion"
import JonathanFigure from "../../assets/JonathanFigure.png"
// import JonathanOutline from "../assets/JonathanOutline.png"

function Profile() {
  return (
    <motion.img
      src={JonathanFigure}
      alt="Profile"
      className="w-[300px] lg:w-[400px] mt-10 lg:mt-0"
      initial={{
        translateX: "-200px",
        rotate: "180deg",
        opacity: 0,
        scale: 0.1,
      }}
      whileInView={{
        translateX: "0",
        translateY: "-30px",
        rotate: "0deg",
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 1,
        duration: 1,
      }}
    />
  )
}

export default Profile
