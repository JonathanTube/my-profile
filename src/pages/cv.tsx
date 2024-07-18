import { BiDownload } from "react-icons/bi"

export default function CV() {
  return (
    <div className="cv">
      <a
        href="https://profile.mincode.fun/Jonathan%20Fullstack%20Developer.pdf"
        target="_blank"
        download="Jonathan's CV.pdf"
        className="text-center w-48 h-12 mx-auto rounded bg-slate-600 text-white hover:bg-slate-600/90 font-semibold cursor-pointer flex items-center justify-center"
      >
        <BiDownload className="text-gray-300 text-xl" />
        <a className="ml-2">Download CV</a>
      </a>

      <div className="bg-white max-w-screen-lg mx-auto px-5 pt-10 pb-20 shadow-lg rounded mt-10">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-0">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Jonathan.K</h1>
            <h2 className="text-base md:text-xl font-semibold">
              Fullstack Web Developer
            </h2>
          </div>
          <div>
            <a className="block" href="mailto:Jonathan@mincode.fun">
              Email:&nbsp;Jonathan@mincode.fun
            </a>
            {/* <a className="block" href="tel:+8617602553940">
              (+86)17602553940
            </a> */}
            <div>Location:&nbsp;Yangzhou, Jiangsu, China</div>
          </div>
        </header>

        <main>
          <h3>Summary</h3>
          <p>
            Full Stack Developer with 10+ years' experience in{" "}
            <strong>JAVA</strong>,<strong>Node</strong> <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, and <strong>JavaScript</strong>. Skilled in
            Spring, Mybatis, Hibernate, Vue and React. Proactive problem-solver
            committed to mastering new technologies. Thrives in fast-paced
            environments, delivering innovative solutions and collaborating
            within cross-functional teams.
          </p>

          <h3>Experience</h3>
          <h4>Full Stack Engineer | Freelancer | Jun 2023 - Present</h4>
          <ul>
            <li>
              Developed an elevator appointment system, increasing technician
              efficiency by 25% using React, Next.js, Tailwincss, and Ant
              Design.
            </li>
            <li>
              Built a photovoltaic power monitoring system with Vue and
              ElementUI, optimizing generation efficiency by 15%.
            </li>
            <li>
              Created a smart cabinet system with Vue3, Antd, and Java, ensuring
              secure material storage in campus labs and reducing hazardous
              incidents by 10%
            </li>
          </ul>

          <h4>Project Manager | NkStar Ltd. | 2020/10 - 2023-06</h4>
          <ul>
            <li>
              Oversaw software development teams and client communication,
              achieving project objectives by implementing agile methodologies,
              fostering collaboration, and reducing project delays by 20%.
            </li>
          </ul>

          <h4>
            Senior Software Engineer | Wisedu Education Ltd. | 2012/12 - 2020/09
          </h4>
          <ul>
            <li>
              Led the development of a campus e-commerce system, integrating
              third-party suppliers and financial systems, resulting in 40% user
              adoption growth.
            </li>
            <li>
              Implemented automated SKU management and reimbursement processes
              with Vue2, ElementUI, Java, Spring, MySQL, Elasticsearch, and
              Alibaba Cloud, decreasing manual labor by 30%.
            </li>
          </ul>

          <h4>
            Junior Software Engineer | AsiaInfo Technology Ltd. | 2008/6-2012/11
          </h4>
          <ul>
            <li>
              Contributed to value-added service systems by developing
              solutions, performing testing, and debugging, enhancing customer
              satisfaction and telecom functionality
            </li>
          </ul>

          <h3>Education&Skills</h3>
          <ul>
            <li>
              Computer Science and Technology, Jiangsu University of Science and
              Technology
            </li>
            <li className="text-wrap">
              HTML/CSS/TypeScript/JavaScript/
              Vue/React/jQuery/Tailwincss/Ant&nbsp;Design/ ElementUI/Node/JAVA
            </li>
          </ul>
        </main>
      </div>
    </div>
  )
}
