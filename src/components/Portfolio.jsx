import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Particles from "./Particles";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Filter logic
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Show only 4 unless "See More" clicked
  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <>
    <section className="relative px-6 md:px-20 py-20">
      
      {/* PARTICLES */}
      <div className="absolute inset-0 -z-10">
        <Particles />
      </div>
      <h2 className="text-4xl text-white font-Playfair mb-10">Portfolio</h2>
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-4 md:gap-8 mb-14">
          {["all", "front-end", "ux-ui"].map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setShowAll(false); // reset to only 4 on filter change
              }}
              className={`px-6 py-2 rounded-full text-sm md:text-base transition-all hover:scale-110
                ${
                  activeFilter === filter
                    ? "bg-[#ADE7FF] text-white"
                    : "border border-[#ADE7FF] text-white hover:bg-[#ADE7FF]"
                }
              `}
            >
              {filter === "all"
                ? "All"
                : filter === "front-end"
                ? "Web development"
                : "UX–UI Design"}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {visibleProjects.map((project) => (
            <motion.div
              id={`project-${project.id}`} 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl overflow-hidden"
            >
              <div className="relative w-full aspect-auto md:aspect-[16/9] group rounded-2xl overflow-hidden shadow-xl">
                
                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="
                  relative flex flex-col gap-4 px-6 py-6 text-white bg-[#102026]
                  md:absolute md:inset-0 md:justify-center md:px-8
                  md:translate-y-full md:opacity-0
                  md:group-hover:translate-y-0 md:group-hover:opacity-100
                  md:transition-all md:duration-700 md:ease-out
                  md:bg-[#102026b0]
                ">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>

                  <p className="text-sm opacity-90">
                    {project.description}  
                  </p>
                  {project.targetId && (
                    <button
                      onClick={() => {
                        const targetProject = projects.find(p => p.id === project.targetId);
                        
                        if (!targetProject) return;

                        // 1. Change filter so the target project is visible
                        setActiveFilter(targetProject.category);

                        // 2. Wait a little for React to render new projects, then scroll
                        setTimeout(() => {
                          const el = document.getElementById(`project-${project.targetId}`);
                          el?.scrollIntoView({ behavior: "smooth" });
                        }, 300);
                      }}
                      className="underline text-[#ADE7FF] hover:text-white transition-all"
                    >
                      View UI →
                    </button>
                  )}
                  <div className="flex flex-wrap gap-3">

                    {/* FRONT-END BUTTONS */}
                    {project.category === "front-end" && (
                      <>
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          className="bg-[#ADE7FF] text-white py-2 px-5 rounded-full hover:scale-110 transition-all"
                        >
                          Live Demo
                        </a>

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            className="border border-[#ADE7FF] text-white py-2 px-5 rounded-full hover:bg-[#ADE7FF] hover:scale-110 transition-all"
                          >
                            GitHub
                          </a>
                        )}
                      </>
                    )}

                    {/* UX–UI BUTTONS */}
                    {project.category === "ux-ui" && (
                      <>
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          className="bg-[#ADE7FF] text-white py-2 px-5 rounded-full hover:scale-110 transition-all"
                        >
                          Live Demo
                        </a>

                        {project.figma && (
                          <a
                            href={project.figma}
                            target="_blank"
                            className="border border-[#ADE7FF] text-white py-2 px-5 rounded-full hover:bg-[#ADE7FF] hover:scale-110 transition-all"
                          >
                            Figma Link
                          </a>
                        )}
                      </>
                    )}

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
              {/* SEE MORE BUTTON */}
        {filteredProjects.length > 4 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-[#ADE7FF] text-white rounded-full hover:scale-110 transition-all"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
    </section>
    

        </>
  );
};

export default Portfolio;
