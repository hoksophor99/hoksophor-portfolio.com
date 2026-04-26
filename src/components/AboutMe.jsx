import React ,{useState} from 'react'
import Particles from './Particles'
import { motion,AnimatePresence } from "framer-motion";
import Frame7 from '../assets/images/Frame7.png'
import Remote from '../assets/images/remote.png'
import Robot from '../assets/images/Robot.png'


const AboutMe = () => {
  const [openExp, setOpenExp] = useState(false);
  const [openEdu, setOpenEdu] = useState(false);
  return (
    <div className="flex flex-col relative">
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10">
        <Particles />
      </div>
            {/* Content */}
      <section className="w-full py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* LEFT: INTRO */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="h-full"
            >
              {/* {border} wrapper */}
              <div className="relative rounded-3xl p-[1px]">
                <div className="rounded-3xl p-6 md:p-8 ring-1 ring-[#ADE7FF]">
                  <div className="mb-6 flex items-center justify-center">
                    <img
                        src={Robot}
                        alt="robot"
                        className="w-50 h-50 rounded-full object-cover "
                        draggable={false}
                      />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    Hi, I'm Hok Sophor
                  </h3>
                  <p className="mt-2 text-white/70 text-sm md:text-base leading-relaxed">
                  I am a fourth-year student at the Royal University of Phnom Penh 
                  and a passionate Web Developer. I also work as a freelance developer,
                  with experience in React.js, Laravel, JavaScript, and modern UI frameworks.
                  I enjoy building responsive and user-friendly web applications, learning new technologies,
                  and improving user experience. I am motivated, flexible, and eager to grow in a professional development environment.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: REMOTE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="h-full"
            >
              {/* {border} wrapper */}
              <div className="relative rounded-3xl p-[1px] ">
                <div className="rounded-3xl  p-6 md:p-8 ring-1 ring-[#ADE7FF]">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-6 flex justify-center"
                  >
                      <img
                        src={Remote}
                        alt="Remote globe"
                        className=" rounded-full object-cover"
                        draggable={false}
                      />
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    I work remotely across most timezones.
                  </h3>
                  <p className="mt-2 text-white/70 text-sm md:text-base leading-relaxed">
                    I&apos;m based in Phnom Penh, with remote work available.
                  </p>

                  <button className="mt-6 w-full rounded-2xl bg-white/10 py-4 text-white ring-1 ring-white/10 hover:bg-white/15 transition">
                    <span className="inline-flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ADE7FF]" />
                      Contact Me
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row flex-1 items-center px-6 md:px-25 py-10 md:gap-5"
          >

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 md:order-2 flex md:w-1/2 justify-center mt-10 md:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="w-full max-w-xl p-8 rounded-2xl border border-transparent transition-all duration-300 hover:border-[#ADE7FF]"
            >
              <h3 className="text-3xl font-bold text-white">
                Experience <span className="text-[#2E6BFF]">.</span>
              </h3>

              <div className="mt-8 grid grid-cols-[22px_1fr] gap-6">
                {/* dot + line */}
                <div className="relative">
                  <div className="absolute left-[7px] top-[14px] h-full w-px bg-white/20" />
                  <div className="mt-2 w-3 h-3 rounded-full bg-white/60" />
                </div>

                {/* content */}
                <div>
                  <p className="text-white/45">October 2025 - Present</p>
                  <h4 className="mt-2 text-2xl font-semibold text-white">Front-End Developer at Kbeung Studio</h4>
                  <p className="mt-3 text-white/35 leading-relaxed">
                   I am a Front-End Developer at Kbeung Studio, 
                   where I develop and maintain internal company websites 
                   and web applications. I focus on building responsive, 
                   user-friendly interfaces and transforming business requirements into reliable,
                    high-quality digital products that support the company’s goals.
                  </p>

                  <h5 className="mt-10 text-2xl font-semibold text-white">Activities</h5>
                  <ul className="mt-4 space-y-3">
                    {(openExp
                      ? [
                          "Developed and maintained internal company websites at Kbeung Studio, focusing on responsive design and usability.",
                          "Collaborated with team members to implement UI components and improve front-end performance",
                          "Practiced modern front-end technologies including React.js, Tailwind CSS, and Bootstrap through real projects.",
                          "Continuously improved coding skills by learning new tools, frameworks, and best practices.",
                        ]
                      : [
                          "Back-end infrastructure development with Spring Boot",
                          "API development and management with Spring Boot",
                        ]
                    ).map((t) => (
                      <li key={t} className="flex gap-3 text-white/45">
                        <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-white/35 shrink-0" />
                        <span className="leading-relaxed">{t}</span>
                      </li>
                    ))}
                  </ul>

                  <AnimatePresence>
                    {openExp && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: 8 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 8 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <h5 className="mt-10 text-2xl font-semibold text-white">Technologies</h5>
                        <ul className="mt-5 space-y-4">
                          {["React.js","JavaScript","Bootstrap", "ailwind CSS", "MySQL", "Postman", "Git", "GitHub"].map((t) => (
                            <li key={t} className="flex items-center gap-3 text-white/70">
                              <span className="w-2 h-2 rounded-full bg-white/35" />
                              <span className="leading-relaxed">{t}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setOpenExp((v) => !v)}
                    className="mt-10 inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 text-white/80 transition hover:border-white/70 hover:text-white"
                  >
                    {openExp ? "See less" : "See more"}
                    <motion.span animate={{ rotate: openExp ? 180 : 0 }} transition={{ duration: 0.25 }} className="inline-block">
                      ▼
                    </motion.span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Left SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="order-1 md:order-1 w-full md:w-1/2 text-left"
          >
            {/* <h2 className="text-4xl md:text-4xl font-Playfair mt-6 text-[#ffffff]">
              About Me
            </h2>

            <h3 className="text-base font-Poppins text-[#ffffff] mt-6">
              The Journey from Idea to Interface.
            </h3> */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="w-full mt-8 p-8 rounded-2xl border border-transparent transition-all duration-300 hover:border-[#ADE7FF]"
            >
              <h3 className="text-3xl font-bold text-white">
                Education <span className="text-[#2E6BFF]">.</span>
              </h3>

              <div className="mt-8 grid grid-cols-[22px_1fr] gap-6">
                {/* dot + line */}
                <div className="relative">
                  <div className="absolute left-[7px] top-[14px] h-full w-px bg-white/20" />
                  <div className="mt-2 w-3 h-3 rounded-full bg-white/60" />
                </div>

                {/* content */}
                <div>
                  <p className="text-white/45">May 2022 - Present</p>
                  <h4 className="mt-2 text-2xl font-semibold text-white">Computer Science at RUPP</h4>

                  <p className="mt-4 text-white/35 leading-relaxed">
                    RUPP is one of Cambodia&apos;s leading universities, known for fostering innovation and producing highly
                    skilled graduates in science and technology. Its Computer Science program is particularly recognized for
                    its emphasis on both technical and soft skills, ensuring graduates are competitive in the global job market.
                  </p>

                  <h5 className="mt-10 text-2xl font-semibold text-white">Activities</h5>

                  <ul className="mt-4 space-y-3">
                    {(openEdu
                      ? [
                          "Analysis Database development",
                          "Management Information Systems",
                          "Network Data Communication",
                          "Desktop App Build On Java and C#",
                          "Web Design",
                        ]
                      : ["Analysis Database development", "Management Information Systems"]
                    ).map((t) => (
                      <li key={t} className="flex gap-3 text-white/45">
                        <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-white/35 shrink-0" />
                        <span className="leading-relaxed">{t}</span>
                      </li>
                    ))}
                  </ul>

                  <AnimatePresence>
                    {openEdu && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: 8 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 8 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <h5 className="mt-10 text-2xl font-semibold text-white">Technologies</h5>
                        <ul className="mt-5 space-y-4">
                          {["Java", "SQL Server", "HTML", "CSS", "C#", "React Js"].map((t) => (
                            <li key={t} className="flex items-center gap-3 text-white/70">
                              <span className="w-2 h-2 rounded-full bg-white/35" />
                              <span className="leading-relaxed">{t}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setOpenEdu((v) => !v)}
                    className="mt-10 inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 text-white/80 transition hover:border-white/70 hover:text-white"
                  >
                    {openEdu ? "See less" : "See more"}
                    <motion.span animate={{ rotate: openEdu ? 180 : 0 }} transition={{ duration: 0.25 }} className="inline-block">
                      ▼
                    </motion.span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>

      </motion.div>

    </div>
  )
}

export default AboutMe


