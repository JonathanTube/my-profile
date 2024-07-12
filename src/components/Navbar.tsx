import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-scroll"
import { motion } from "framer-motion"

export default function Navbar() {
  const [nav, setNav] = useState<boolean>(false)

  const toggleNav = () => {
    setNav(!nav)
  }

  const closeNav = () => {
    setNav(false)
  }

  const menuVariants = {
    open: {
      y: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      y: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-screen-2xl mx-auto flex justify-between text-gray-100 text-xl items-center px-6 h-20">
        <a>Jonathan.K</a>

        <ul className="hidden lg:flex gap-12 z-10 cursor-pointer">
          <li>
            <Link to="/skills" smooth={true} offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/portfolio" smooth={true} offset={50} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contract" smooth={true} offset={50} duration={500}>
              Contract
            </Link>
          </li>
        </ul>

        <div onClick={toggleNav} className="lg:hidden z-50 text-gray-800">
          {nav ? (
            <AiOutlineClose color="white" size={30} />
          ) : (
            <AiOutlineMenu color="white" size={30} />
          )}
        </div>

        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
            <li>
              <Link
                to="/skills"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contract"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contract
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}