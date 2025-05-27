"use client"

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';
import profileImage from '@/assets/profile.jpg';

const sections = [
  'Home', 'About', 'Experience', 'Projects', 'Research', 'Blogs', 'Contact'
];

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-black/80 text-white relative">

      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur z-50 py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <div className="text-xl font-bold text-[#FFD700]">Tito Osadebey</div>

          <div className="hidden md:flex space-x-8 lg:space-x-14">
            {sections.map((section) => (
              <ScrollLink
                key={section}
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#FFD700] transition text-white"
              >
                {section}
              </ScrollLink>
            ))}
          </div>

          <div className="md:hidden">
            <Button variant="link" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-black w-full flex flex-col items-center py-4 space-y-4">
            {sections.map((section) => (
              <ScrollLink
                key={section}
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-[#FFD700] text-white"
              >
                {section}
              </ScrollLink>
            ))}
          </div>
        )}
      </nav>

      {/* hero section */}
      <section
        id="home"
        className="pt-36 px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-screen-xl mx-auto"
      >
        {/* Left Side - Text */}
        <div className="w-full lg:w-[45%] max-w-2xl">
          <p className="text-[#C0C0C0] text-lg">Hello! I'm</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFFFFF] leading-tight">
            Tito Osadebey
          </h1>
          <h2 className="text-xl md:text-2xl text-[#C0C0C0] mt-2">AI Engineer</h2>

          <p className="text-white/80 mt-4 text-base md:text-lg">
            Passionate AI Engineer with 3+ years of experience in AI Engineering and Software Developemnt, specializing in Machine Learning, Computer Vision, NLP and working with AWS. I specialize in building scalable AI solutions for global institutions, open-source initiatives, and industrial applications.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="/TITO_OSADEBEY (CV).pdf" download="Tito-Osadebey-CV.pdf">
              <Button variant="secondary" className="text-[#000000]">
                Download CV
              </Button>
            </a>
          </div>


          {/* Stats */}
          <div className="mt-10 flex gap-8 text-center text-[#C0C0C0]">
            {/* <div>
              <p className="text-2xl font-semibold text-[#FFD700]">6+</p>
              <p className="text-sm">AWS Certifications</p>
            </div> */}
            <div>
              <p className="text-2xl font-semibold text-[#FFD700]">3+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#FFD700]">10+</p>
              <p className="text-sm">AI Projects</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-[35%] flex justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover border-2 border-[#FFD700] shadow-xl"
          />
        </div>
      </section>

    </div>
  );
}
