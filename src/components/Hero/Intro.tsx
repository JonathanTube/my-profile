import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
export default function Intro() {
  return (
    <>
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          "I'm a Java developer.",
          1000,
          "I'm a Vue developer.",
          1000,
          "I'm a React developer.",
          1000,
          "I'm a Node developer.",
          1000,
          "I'm a Fullstack developer.",
          2000,
        ]}
        speed={50}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        className="font-bold text-gray-400 text-xl lg:text-5xl italic mb-4"
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-200 text-5xl lg:text-7xl italic tracking-tighter mb-4"
      >
        Hey, I'm <br />
        <span className="text-jonathan-light">Jonathan Kong</span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-gray-200 max-w-[500px] lg:max-w-[600px] text-lg lg:text-2xl mb-6"
      >
        I'm a passionate fullstack web developer with over 10 years of
        experience.
      </motion.p>
    </>
  )
}
