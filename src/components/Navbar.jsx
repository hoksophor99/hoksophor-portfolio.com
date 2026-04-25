import React, { useState } from 'react'
import { Menu, X } from "lucide-react"; 
import '../styles/Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#000000] text-[#ffffff] font-semibold shadow-lg">
      <div className="flex justify-between items-center px-10 py-6">

        {/* Logo */}
        <div className="text-base font-bold">hoksophor99@gmail.com</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-16 text-lg font-bold">
          <li className="cursor-pointer relative group">
            <a href="#home" className="transition-colors duration-300 group-hover:text-[#ADE7FF]">
              Home
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#ADE7FF] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="cursor-pointer relative group">
            <a href="#skills" className="transition-colors duration-300 group-hover:text-[#ADE7FF]">
              Skills
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#ADE7FF] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="cursor-pointer relative group">
            <a href="#portfolio" className="transition-colors duration-300 group-hover:text-[#ADE7FF]">
              Portfolio
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#ADE7FF] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="cursor-pointer relative group">
            <a href="#contact" className="transition-colors duration-300 group-hover:text-[#ADE7FF]">
              Contact
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#ADE7FF] transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col justify-between items-center gap-6 px-10 pb-6 text-lg font-bold">

          <a href="#home" onClick={() => setOpen(false)} className="cursor-pointer hover:text-[#ADE7FF]">
            Home
          </a>

          <a href="#skills" onClick={() => setOpen(false)} className="cursor-pointer hover:text-[#ADE7FF]">
            Skills
          </a>

          <a href="#portfolio" onClick={() => setOpen(false)} className="cursor-pointer hover:text-[#ADE7FF]">
            Portfolio
          </a>

          <a href="#contact" onClick={() => setOpen(false)} className="cursor-pointer hover:text-[#ADE7FF]">
            Contact
          </a>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
