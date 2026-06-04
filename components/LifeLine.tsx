"use client";

import { motion } from "framer-motion";

export default function LifeLine({ currentIndex }: { currentIndex: number }) {
  // Pour 6 pages (indices 0 à 5) :
  // currentIndex / 5 permet d'aller de 0% à 100% sur toute la longueur
  const targetLength = currentIndex / 4.5;

  return (
    // 1. h-[600vh] devient h-[600vh] pour couvrir les 6 sections (100vh chacune)
    <motion.div 
      animate={{ y: `-${currentIndex * 100}vh` }}
      transition={{
        duration: 1.5,
        ease: [0.25, 1, 0.5, 1]
      }}
      className="absolute inset-0 z-[20]. pointer-events-none w-full h-[600vh]"
    >
      <svg
        className="w-full h-full"
        // 2. viewBox passe de 300 à 600 pour correspondre aux 6 unités de hauteur
        viewBox="0 0 100 600"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 3. La courbe continue maintenant sur 600 unités */}
        <path
          d="M 50,0 
             C 10,50 90,100 50,150 
             C 10,200 90,250 50,300 
             C 10,350 90,400 50,450 
             C 10,500 90,550 50,600"
          className="stroke-white/5"
          strokeWidth="0"
        />

        <motion.path
          d="M 50,0 
             C 10,50 90,100 50,150 
             C 10,200 90,250 50,300 
             C 10,350 90,400 50,450 
             C 10,500 90,550 50,600"
          className="stroke-white"
          strokeWidth="0.3"
          strokeLinecap="round"
          animate={{ pathLength: targetLength }}
          transition={{
            duration: 1.5,
            ease: [0.25, 1, 0.5, 1]
          }}
        />
      </svg>
    </motion.div>
  );
}