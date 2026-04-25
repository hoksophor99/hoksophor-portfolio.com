import React, { useState } from 'react'
import { motion } from "framer-motion";
import Particles from './Particles'
import { Paintbrush , Laptop } from 'lucide-react';

const MySkill = () => {
    const skills = [
    { name: "HTML 5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS 3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Post", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ];

  const [showUX, setShowUX] = useState(false);
  const [loadingUX, setLoadingUX] = useState(false);

  const [showWeb, setShowWeb] = useState(false);
  const [loadingWeb, setLoadingWeb] = useState(false);

  const toggleUX = () => {
    if (!showUX) {
      setLoadingUX(true);
      setTimeout(() => {
        setShowUX(true);
        setLoadingUX(false);
      }, 1200);
    } else {
      setShowUX(false);
    }
  };

  const toggleWeb = () => {
    if (!showWeb) {
      setLoadingWeb(true);
      setTimeout(() => {
        setShowWeb(true);
        setLoadingWeb(false);
      }, 1200);
    } else {
      setShowWeb(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
  };
  return (
    <>
      <section className="relative px-6 md:px-20 py-20">
        <div className="absolute inset-0 -z-10">
          <Particles />
        </div>

        <h2 className="text-4xl text-white font-Playfair mb-10">My Skills</h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Card 1 – UX/UI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="p-8 rounded-2xl border border-transparent transition-all duration-300 hover:border-[#ADE7FF]"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl text-white font-Poppins">UX-UI designer</h3>
              <Paintbrush className="text-[#ADE7FF] w-8 h-8" />
            </div>

            <p className="text-white mb-6">
              With a strong focus on UX/UI design,
              I create intuitive user interfaces
            </p>

            {showUX && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-white mb-4"
              >
               and
              clear visual hierarchies using Figma, ensuring
              smooth user flows and visually consistent digital experiences.
              </motion.p>
            )}

            <button
              onClick={toggleUX}
              className={`bg-[#ADE7FF] text-white py-2 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                loadingUX ? "opacity-70 pointer-events-none" : ""
              }`}
            >
              {loadingUX
                ? "Loading..."
                : showUX
                ? "Show less"
                : "Read more"}
            </button>
          </motion.div>

          {/* Card 2 – Web Dev */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="p-8 rounded-2xl border border-transparent transition-all duration-300 hover:border-[#ADE7FF]"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl text-white font-Poppins">Web development</h3>
              <Laptop className="text-[#ADE7FF] w-8 h-8" />
            </div>

            <p className="text-white mb-6">
               With experience in both front-end and backend development,
              I build responsive user interfaces and develop backend 
              
            </p>

            {showWeb && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white mb-4"
              >
                functionality using Laravel, ensuring smooth user flows, 
              reliable data handling, and well-structured web applications.
              </motion.p>
            )}

            <button
              onClick={toggleWeb}
              className={`bg-[#ADE7FF] text-white py-2 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                loadingWeb ? "opacity-70 pointer-events-none" : ""
              }`}
            >
              {loadingWeb
                ? "Loading..."
                : showWeb
                ? "Show less"
                : "Read more"}
            </button>
          </motion.div>
        </div>
      </section>
      <div className="relative flex items-center justify-center p-6">
        <div className="absolute inset-0 -z-10">
          <Particles />
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-6 max-w-6xl"
        >
          {skills.map((s) => (
            <motion.div
              key={s.name}
              variants={item}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="
                w-[135px] h-[110px]
                rounded-2xl
                bg-white/10 border border-white/20
                backdrop-blur-xl
                flex flex-col items-center justify-center gap-3
                text-white/80
                shadow-[0_10px_25px_rgba(0,0,0,0.35)]
              "
            >
              <motion.img
                src={s.icon}
                alt={s.name}
                className="w-10 h-10 object-contain"
                whileHover={{ rotate: -4, scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                loading="lazy"
              />
              <p className="text-sm font-medium">{s.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
     </>
  );
};

export default MySkill;
