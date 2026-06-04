"use client";

import { FaHome, FaFilm, FaCamera, FaUser, FaTools, FaEnvelope } from "react-icons/fa";

const SECTIONS = [
  { id: "hero", label: "ACCUEIL", icon: <FaHome /> },
  { id: "portfolio", label: "RÉALISATIONS", icon: <FaFilm /> },
  { id: "photos", label: "PHOTOGRAPHIES", icon: <FaCamera /> },
  { id: "Apropos", label: "À PROPOS", icon: <FaUser /> },
  { id: "competences", label: "COMPÉTENCES", icon: <FaTools /> },
  { id: "contact", label: "CONTACT", icon: <FaEnvelope /> },
];

export default function SidebarMenu({ currentIndex, onNavigate }: { currentIndex: number, onNavigate: (index: number) => void }) {
  return (
    <>
      {/* MENU MOBILE : Icônes en haut */}
      <nav className="fixed top-0 left-0 w-full z-50 flex md:hidden justify-between items-center px-4 py-4 bg-[#18181b]/80 backdrop-blur-sm">
        {SECTIONS.map((section, index) => (
          <button 
            key={section.id} 
            onClick={() => onNavigate(index)}
            className={`p-2 transition-colors ${currentIndex === index ? "text-[#3E26FF]" : "text-white/50"}`}
          >
            {section.icon}
          </button>
        ))}
      </nav>

      {/* MENU DESKTOP : Texte latéral */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6 font-sans">
        {SECTIONS.map((section, index) => {
          const isActive = currentIndex === index;
          return (
            <button
              key={section.id}
              onClick={() => onNavigate(index)}
              className="group flex items-center gap-4 text-left cursor-pointer bg-transparent border-none outline-none"
            >
              <span className={`h-[2px] transition-all duration-300 ${isActive ? "w-8 bg-[#3E26FF]" : "w-4 bg-white/30 group-hover:w-6 group-hover:bg-white/70"}`} />
              <span className={`text-xs tracking-widest font-medium transition-all duration-300 ${isActive ? "text-white opacity-100" : "text-white/40 group-hover:text-white/80"}`}>
                {section.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}