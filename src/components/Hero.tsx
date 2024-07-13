import { motion } from "framer-motion"
import Intro from "./Intro"
import SocialMedia from "./SocialMedia"
import Profile from "./Profile"
import TechStack from "./TechStack"
import { ShinyEffect } from "./ShinyEffect"

function Hero() {
  return (
    <div className="mt-24 max-w-screen-xl mx-auto relative">
      <div className="grid mx-5 lg:grid-cols-2 lg:mx-5 place-items-center gap-5">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Intro />
          <SocialMedia />
        </motion.div>
        <Profile />
      </div>
      <TechStack />
      <div className="absolute inset-0 hidden lg:block">
        <ShinyEffect top={0} left={0} size={1200} />
      </div>
    </div>
  )
}

export default Hero
