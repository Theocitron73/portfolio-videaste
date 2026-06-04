"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Home";
import PortfolioGrid from "@/components/Realisations";
import Contact from "@/components/Contact";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import LifeLine from "@/components/LifeLine";
import Apropos from "@/components/Apropos";
import Photographies from "@/components/Photographies";
import Competences from "@/components/Competences";
import SidebarMenu from "@/components/SidebarMenu";
import SocialLinks from "@/components/SocialsLinks"; // Import du nouveau composant


const SECTIONS = [
  { id: "hero", component: <Hero/> },
  { id: "portfolio", component: <PortfolioGrid /> },
  { id: "photos", component: <Photographies /> },
  { id: "Apropos", component: <Apropos /> },
  { id: "competences", component: <Competences /> },
  { id: "contact", component: <Contact /> }
];




export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Bloque le scroll rapide du navigateur
      if (isScrolling.current) return;

      isScrolling.current = true;

      if (e.deltaY > 0) {
        // Scroll vers le BAS
        if (currentIndex < SECTIONS.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        } else {
          // Boucle : Retour tout en haut
          setCurrentIndex(0);
        }
      } else if (e.deltaY < 0) {
        // Scroll vers le HAUT
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
      }

      // On débloque la molette dès que l'animation est finie (calé sur la durée du transition)
      setTimeout(() => {
        isScrolling.current = false;
      }, 1500); // Correspond à la durée de l'animation
    };

    // Gestion du tactile pour smartphone
    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isScrolling.current) return;
      const moveY = e.touches[0].clientY;
      const diffY = startY - moveY;

      if (Math.abs(diffY) > 50) {
        isScrolling.current = true;
        if (diffY > 0) {
          if (currentIndex < SECTIONS.length - 1) setCurrentIndex((prev) => prev + 1);
          else setCurrentIndex(0);
        } else {
          if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
        }
        setTimeout(() => { isScrolling.current = false; }, 1500);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentIndex]);

 return (
    <main id="main-container" className="relative h-screen w-full overflow-hidden bg-[#18181b]">
      <BackgroundBlobs currentIndex={currentIndex} />
      <LifeLine currentIndex={currentIndex} />
      
      {/* MENU SYNCHRONISÉ */}
      <SidebarMenu currentIndex={currentIndex} onNavigate={(i) => setCurrentIndex(i)} />
      
      {/* LIENS SOCIAUX */}
      <SocialLinks />

      <motion.div
        animate={{ y: `-${currentIndex * 100}vh` }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        className="w-full h-full"
      >
        {SECTIONS.map((section) => (
          <div key={section.id} className="h-screen w-full">
            {section.component}
          </div>
        ))}
      </motion.div>
    </main>
  );
}