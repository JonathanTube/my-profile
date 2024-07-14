import { GrDocumentPdf } from "react-icons/gr"
import { motion } from "framer-motion"
import { SiGithub, SiLinkedin, SiGitee, SiWechat } from "react-icons/si"
import { Link } from "react-router-dom"
export default function SocialMedia() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-6 my-4 lg:mb-0"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
          }}
          className="cursor-pointer z-10 rounded-lg font-bold text-gray-200 lg:w-auto p-4 border border-cyan-200"
        >
          <Link to="/cv">
            <div className="flex items-center gap-2">
              <GrDocumentPdf />
              <span>Download CV</span>
            </div>
          </Link>
        </motion.button>

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
      </motion.div>
    </>
  )
}
