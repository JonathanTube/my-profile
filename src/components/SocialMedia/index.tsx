import { motion } from "framer-motion"
import { SiGithub, SiLinkedin, SiGitee, SiWechat } from "react-icons/si"
export default function SocialMedia() {
  return (
    <div className="flex gap-6 text-4xl lg:text-6xl text-jonathan-light z-20">
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://github.com/JonathanTube"
      >
        <SiGithub />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2, color: "blue", rotate: "10deg" }}
        href="#"
      >
        <SiLinkedin />
      </motion.a>
      <motion.a whileHover={{ scale: 1.2 }} href="#">
        <SiGitee />
      </motion.a>
      <motion.a whileHover={{ scale: 1.2, color: "green" }} href="#">
        <SiWechat />
      </motion.a>
    </div>
  )
}
