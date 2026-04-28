import React from 'react'
import Particles from './Particles'
import { motion } from "framer-motion";
 
const contactItems = [
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=hoksophor99@gmail.com",
    label: "hoksophor99@gmail.com",
    icon: "https://cdn.lordicon.com/rhvddzym.json",
    colors: "primary:#ffffff,secondary:#ade7ff",
  },
  {
    href: "tel:+855962600752",
    label: "+855 962600752",
    icon: "https://cdn.lordicon.com/nnzfcuqw.json",
    colors: "primary:#ffffff,secondary:#ffffff",
  },
  {
    href: "https://www.linkedin.com/in/hok-sophor-887992387/",
    label: "linkedin.com/in/hok-sophor-887992387",
    icon: "https://cdn.lordicon.com/qgebwute.json",
    colors: "primary:#ffffff,secondary:#ffffff",
  },
  {
    href: "https://github.com/hoksophor99",
    label: "github.com/hoksophor99",
    icon: "https://cdn.lordicon.com/jjxzcivr.json",
    colors: "primary:#ffffff,secondary:#ffffff",
  },
];

const ContactMe = () => {
  return (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="relative text-white py-20 px-6 md:px-20"
  >
    {/* Background Particles */}
    <div className="absolute inset-0 -z-10">
      <Particles />
    </div>

    <h2 className="text-4xl font-Playfair text-center mb-14">Contact Me</h2>

    {/* Contact Me */}
    {/* <div className="max-w-2xl mx-auto mb-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="w-full p-6 md:p-8 rounded-xl border border-transparent transition-all duration-300 hover:border-[#ADE7FF]"
      >
        <h2 className="text-xl font-bold text-white tracking-tight">
          Let&apos;s talk
        </h2>

        <p className="mt-4 text-white/65 text-sm leading-relaxed">
          Whether you&apos;re looking to build a new website, improve your existing platform, or bring a unique
          project to life, I&apos;m here to help.
        </p>

        <form className="mt-8 space-y-4">
          <div>
            <label className="block text-white/80 font-semibold mb-2 text-sm">
              Full Name
            </label>
            <input
              type="text"
              placeholder="ex., John Doe"
              className="w-full rounded-md border border-white/25 bg-transparent px-3 py-2.5 text-sm text-white/80 placeholder:text-white/40 outline-none transition focus:border-white/60"
            />
          </div>

          <div>
            <label className="block text-white/80 font-semibold mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              placeholder="ex., johndoe@gmail.com"
              className="w-full rounded-md border border-white/25 bg-transparent px-3 py-2.5 text-sm text-white/80 placeholder:text-white/40 outline-none transition focus:border-white/60"
            />
          </div>

          <div>
            <label className="block text-white/80 font-semibold mb-2 text-sm">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Share your thoughts or inquiries..."
              className="w-full resize-none rounded-md border border-white/25 bg-transparent px-3 py-2.5 text-sm text-white/80 placeholder:text-white/40 outline-none transition focus:border-white/60"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-md  bg-white/30 border border-white/20
                backdrop-blur-xl py-3 text-base font-semibold text-white flex items-center justify-center gap-2 transition hover:opacity-90"
          >
            Send Message <ArrowUpRight className="w-5 h-5" />
          </button>
        </form>
      </motion.div>
    </div> */}


    {/* icons grid */}
    <motion.div
      className="grid md:grid-cols-4 gap-10 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      {contactItems.map((item) => (
        <motion.a
          key={item.href}
          href={item.href}
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ scale: 1.08 }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
        >
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
            <lord-icon
              src={item.icon}
              trigger="hover"
              colors={item.colors}
              style={{ width: "60px", height: "60px" }}
            ></lord-icon>
          </motion.div>
          <p>{item.label}</p>
        </motion.a>
      ))}
    </motion.div>
  </motion.section>

  )
}

export default ContactMe
