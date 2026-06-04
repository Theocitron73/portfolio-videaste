"use client";

import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialLinks() {
  return (
    // flex-row (mobile) -> md:flex-col (desktop)
    // items-center pour aligner horizontalement sur mobile
    // bottom-4 right-4 pour la position
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-row md:flex-col gap-4 md:gap-4 items-center">
      <a 
        href="https://www.linkedin.com/in/th%C3%A9o-lebarbier-572365171/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white/50 hover:text-[#3E26FF] transition-all duration-300 hover:scale-110"
      >
        <FaLinkedin className="text-2xl md:text-[28px]" />
      </a>
      <a 
        href="https://www.instagram.com/theo_lbrbr/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white/50 hover:text-[#3E26FF] transition-all duration-300 hover:scale-110"
      >
        <FaInstagram className="text-2xl md:text-[28px]" />
      </a>
      <a 
        href="https://www.youtube.com/channel/UC7cqMiB8nVETlifIJHQhfSQ" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white/50 hover:text-[#3E26FF] transition-all duration-300 hover:scale-110"
      >
        <FaYoutube className="text-2xl md:text-[28px]" />
      </a>
    </div>
  );
}