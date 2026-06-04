"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react"; // 👈 On remplace useMemo par useEffect et useState

interface BackgroundBlobsProps {
  currentIndex: number;
}

// On définit le nombre de formes PAR SECTION (15 * 3 sections = 45 formes au total)
const FORMES_PAR_SECTION = 15; 
const GRILLES_PAR_SECTION = 3;

// Interface pour typer nos données
interface ShapeData {
  id: string;
  size: string;
  blur: string;
  radius: string;
  color: string;
  top: string;
  left: string;
  speed: string;
  rotate: number;
  floatY: number[];
  floatX: number[];
  duration: number;
}

interface DotGridData {
  id: string;
  w: string;
  h: string;
  top: string;
  left: string;
  speed: string;
  color: string;
  size: string;
  opacity: string;
  rot: string;
}

export default function BackgroundBlobs({ currentIndex }: BackgroundBlobsProps) {
  
  // 👈 On initialise l'état à vide pour que le serveur rende un HTML vide
  const [shapes, setShapes] = useState<ShapeData[]>([]);
  const [dotGrids, setDotGrids] = useState<DotGridData[]>([]);

  const getParallaxOffset = (speed: string) => {
    switch (speed) {
      case "ySlow": return -currentIndex * 45;
      case "yMedium": return -currentIndex * 130;
      case "yFast": return -currentIndex * 260;
      case "yReverse": return currentIndex * 60;
      default: return 0;
    }
  };

  // 👈 On génère les données UNIQUEMENT sur le client, après le montage
  useEffect(() => {
    const generatedShapes: ShapeData[] = [];
    const generatedGrids: DotGridData[] = [];
    const speeds = ["ySlow", "yMedium", "yFast", "yReverse"];
    
    const tailwindSizes = [
      { sizeClass: "w-8 h-8", blurClass: "blur-[3px]" },
      { sizeClass: "w-12 h-12", blurClass: "blur-[4px]" },
      { sizeClass: "w-16 h-16", blurClass: "blur-[5px]" },
      { sizeClass: "w-20 h-20", blurClass: "blur-[6px]" },
      { sizeClass: "w-24 h-24", blurClass: "blur-[8px]" },
    ];

    for (let section = 0; section < 3; section++) {
      for (let i = 0; i < FORMES_PAR_SECTION; i++) {
        const isViolet = Math.random() > 0.4;
        const randomPreset = tailwindSizes[Math.floor(Math.random() * tailwindSizes.length)];
        
        const minTop = (section * 100) + 5;
        const maxTop = (section * 100) + 90;
        const randomTop = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;

        generatedShapes.push({
          id: `shape-s${section}-${i}`,
          size: randomPreset.sizeClass,
          blur: randomPreset.blurClass,
          radius: Math.random() > 0.6 ? "rounded-full" : Math.random() > 0.5 ? "rounded-2xl" : "rounded-xl",
          color: isViolet ? "bg-[#3E26FF]/20" : "bg-white/15",
          top: `${randomTop}%`, 
          left: `${Math.floor(Math.random() * 90) + 2}%`,
          speed: speeds[Math.floor(Math.random() * speeds.length)],
          rotate: Math.floor(Math.random() * 360),
          floatY: [0, Math.random() * -20 - 5, 0],
          floatX: [0, Math.random() * 20 - 10, 0],
          duration: Math.random() * 5 + 5, 
        });
      }
    }

    for (let section = 0; section < 3; section++) {
      for (let i = 0; i < GRILLES_PAR_SECTION; i++) {
        const minTop = (section * 100) + 15;
        const maxTop = (section * 100) + 85;
        const randomTop = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;

        generatedGrids.push({
          id: `grid-s${section}-${i}`,
          w: Math.random() > 0.5 ? "w-24" : "w-32",
          h: Math.random() > 0.5 ? "h-24" : "h-32",
          top: `${randomTop}%`,
          left: `${Math.floor(Math.random() * 85) + 5}%`,
          speed: speeds[Math.floor(Math.random() * speeds.length)],
          color: Math.random() > 0.5 ? "#3E26FF" : "white",
          size: Math.random() > 0.5 ? "12px" : "14px",
          opacity: "opacity-15",
          rot: Math.random() > 0.5 ? "rotate-45" : ""
        });
      }
    }

    // On met à jour l'état, ce qui déclenche un re-rendu sur le client avec les formes
    setShapes(generatedShapes);
    setDotGrids(generatedGrids);
  }, []); // Tableau de dépendances vide : ne s'exécute qu'une fois sur le client

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-transparent pointer-events-none w-full h-full">
      

      <motion.div
        animate={{ y: `-${currentIndex * 100}vh` }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        className="w-full h-[300vh] absolute top-0 left-0"
      >
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            animate={{ y: getParallaxOffset(shape.speed) }}
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            style={{ 
              top: shape.top, 
              left: shape.left
            }}
            className="absolute"
          >
            <motion.div
              animate={{
                y: shape.floatY,
                x: shape.floatX,
                rotate: [shape.rotate, shape.rotate + 10, shape.rotate - 10, shape.rotate]
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`${shape.size} ${shape.radius} ${shape.color} ${shape.blur}`}
            />
          </motion.div>
        ))}

        {dotGrids.map((grid) => (
          <motion.div
            key={grid.id}
            animate={{ y: getParallaxOffset(grid.speed) }}
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            style={{ 
              top: grid.top,
              left: grid.left,
              backgroundImage: `radial-gradient(circle, ${grid.color} 1.5px, transparent 1.5px)`,
              backgroundSize: `${grid.size} ${grid.size}`,
            }}
            className={`absolute ${grid.w} ${grid.h} ${grid.opacity} ${grid.rot}`}
          />
        ))}
      </motion.div>
    </div>
  );
}