import { motion } from "framer-motion"
import JonathanOutline from "../../assets/JonathanOutline.png"
import TagCloud, { TagCloud as TC, TagCloudOptions } from "TagCloud"
import { useEffect, useRef, useState } from "react"

const wordCloudTexts: string[] = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "Tailwindcss",
  "Sass",
  "Node",
  "Java",
  "Docker",
  "Spring",
  "Express",
  "Redis",
  "MongoDB",
  "MySql",
  "Vue",
  "React",
  "Git",
  "Jenkins",
]

function Profile() {
  const tagCloudRef = useRef<TC | null>(null)
  const [wordCloudOptions, setWordCloudOptions] = useState<TagCloudOptions>({
    radius: 100,
    maxSpeed: "fast",
    initSpeed: "normal",
    deceleration: 1,
    useItemInlineStyles: true,
    useContainerInlineStyles: true,
    keep: false, // Whether to keep rolling after mouse out area. Default true (decelerate to rolling init speed, and keep rolling with mouse).
  })

  const calcWordCloudRadius = () => {
    const { innerWidth } = window
    let radius = 300
    if (innerWidth < 1024) {
      radius = 100
    } else if (innerWidth < 1280) {
      radius = 100
    }
    setWordCloudOptions({
      ...wordCloudOptions,
      radius,
    })
  }

  useEffect(() => {
    window.onresize = () => {
      calcWordCloudRadius()
    }
  })

  useEffect(() => {
    // In React strict mode this will be executed twice, there will be show the word cloud twice either.
    // we need to destroy the previous component if it exists.
    if (tagCloudRef.current !== null) tagCloudRef.current.destroy()
    tagCloudRef.current = TagCloud(
      "#word-cloud",
      wordCloudTexts,
      wordCloudOptions
    )
    // return () => {
    //   if (tagCloudRef.current !== null) tagCloudRef.current.destroy()
    // }
  }, [wordCloudOptions])

  return (
    <div className="relative pointer-events-none">
      <div id="word-cloud" className="absolute inset-0" />

      <motion.img
        src={JonathanOutline}
        alt="Profile"
        className="w-[300px] lg:w-[400px] mt-10 lg:mt-0"
        initial={{
          translateY: "0",
          opacity: 0,
          scale: 0.1,
        }}
        whileInView={{
          translateY: "-30px",
          opacity: 0.1,
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
    </div>
  )
}

export default Profile
