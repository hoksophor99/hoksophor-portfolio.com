import React from 'react'
import { Play } from 'lucide-react';
import '../styles/Home.css'
import Particles from './Particles'
import { motion } from "framer-motion"
import Profile from '../assets/images/Profile.png'
import Robot1 from '../assets/images/Robot1.png'


const Home = () => {
  return (
    <div className="relative flex flex-col pt-24">
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10">
        <Particles />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row flex-1 items-center px-6 md:px-10 py-10"
      >
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="typewriter text-4xl md:text-6xl font-Playfair text-[#ffffff] leading-tight">
            Hi, I'm Sophor
          </h1>

          <div className="mt-6">
            <span className="bg-[#ADE7FF] text-white text-2xl md:text-4xl font-Playfair px-4 py-2 rounded-sm">
              web Developer
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-Playfair mt-6 text-[#ffffff]">
            & UX/UI Designer
          </h2>

          <p className="mt-6 font-Poppins text-base md:text-lg text-[#ffffff] max-w-xl mx-auto md:mx-0 leading-relaxed">
            Building creative and user-friendly web experiences with a focus on
            detail and emotion
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-10 flex items-center justify-center md:justify-start gap-4"
          >
            <div
              className="bg-[#ADE7FF] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md
              transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              View My CV
            </div>

            <button
              onClick={() => window.open("/CV.pdf", "_blank")}
              className="border border-[#ADE7FF] w-12 h-12 rounded-full flex items-center justify-center
              text-[#ADE7FF] text-xl transform transition duration-300 ease-in-out
              hover:bg-[#ADE7FF] hover:text-white hover:scale-110 hover:shadow-lg"
            >
              <Play />
            </button>
          </motion.div>
        </motion.div>

          {/* Right Side Shape */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-[250px] h-[300px] md:w-[450px] md:h-[550px] hidden lg:block rounded-[40%] overflow-hidden border-4 border-[#ADE7FF] glow-border"
            >
              <motion.img
                src={Robot1}
                alt="Profile"
                className="w-full h-full p-5"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
