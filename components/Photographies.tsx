"use client";

import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Exemple de données pour tes photos
const photos = [
  { src: "/images/DSC05607-scaled.jpg", width: 1200, height: 800 },
  { src: "/images/DSC03956-scaled.jpg", width: 1200, height: 800 },
  { src: "/images/DSC07651-scaled.jpg", width: 1200, height: 800 },
  { src: "/images/DSC05418-scaled.jpg", width: 1200, height: 800 },
  { src: "/images/DSC03947-e1717437924647.jpg", width: 1200, height: 800 },
  { src: "/images/DSC05659-scaled.jpg", width: 1200, height: 800 },
  { src: "/images/DSC03686-scaled.jpg", width: 1200, height: 800 },
  { src: "/images/DSC03682.jpg", width: 1200, height: 800 },
  { src: "/images/DSC03407-scaled.jpg", width: 1200, height: 800 },
  { src: "/images/DSC07915-scaled-e1717438219498.jpg", width: 1200, height: 800 },
  { src: "/images/mpc-hc_3e8f3jSebL.jpg", width: 1200, height: 800 },
  { src: "/images/DSC05019-scaled.jpg", width: 1200, height: 800 },
  { src: "/images/DSC02207.jpg", width: 1200, height: 800 },
  { src: "/images/DSC02441.jpg", width: 1200, height: 800 },
  { src: "/images/DSC08513.jpg", width: 1200, height: 800 },
  { src: "/images/DSC08696.jpg", width: 1200, height: 800 },
  
];


export default function Photos() {
  const [index, setIndex] = useState(-1);
  
  // Division des photos en deux groupes pour les deux carrousels
  const midPoint = Math.ceil(photos.length / 2);
  const group1 = photos.slice(0, midPoint);
  const group2 = photos.slice(midPoint);

  const Carousel = ({ items, offset }: { items: typeof photos, offset: number }) => (
    <div className="md:hidden flex gap-[2vw] overflow-x-auto snap-x snap-mandatory pb-[1vh] scrollbar-hide">
      {items.map((photo, i) => (
        <div key={i} className="snap-center shrink-0 w-[70vw] p-[2vw] relative">
          {/* Compteur en bas à gauche */}
          <div className="absolute bottom-[4vw] left-[4vw] z-50 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[2.5vw] font-bold border border-white/20">
            {offset + i + 1} / {photos.length}
          </div>
          
          {/* Conteneur carré */}
          <div className="overflow-hidden rounded-md border-4 border-[#3E26FF] shadow-xl aspect-square">
            <img 
              src={photo.src} 
              alt={`Photo ${offset + i + 1}`} 
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIndex(offset + i)}
              // AJOUTS ICI
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
              style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    // Change px-[15vw] par px-[5vw] ou px-[2vw] pour utiliser plus de largeur
    <div id="photos" className="w-full min-h-screen pt-[9vh] md:pt-[3vh] px-[2vw] md:px-[5vw]">
      <h2 className="text-[4vw] md:text-[2.5vw] font-black text-[#3E26FF] mb-[3vh] text-center uppercase">
        Je propose également de la photographie
      </h2>

      {/* MOBILE : CARROUSELS (Ton code reste identique ici) */}
      <Carousel items={group1} offset={0} />
      <Carousel items={group2} offset={midPoint} />

      {/* DESKTOP : GRILLE CORRIGÉE */}
      <div className="rotate-358 hidden md:block w-full py-[vh] overflow-hidden">
        {/* Suppression de la rotation globale car elle coupe souvent les bords sur de grandes grilles */}
        <div className="columns-2 lg:columns-5 gap-[0.2vw] space-y-[0.2vw] max-w-[70vw] mx-auto">
          {photos.map((photo, i) => (
            <div 
              key={i} 
              className="break-inside-avoid p-[0.5vw] cursor-pointer group transition-transform hover:scale-105"
              onClick={() => setIndex(i)}
            >
              <div className="overflow-hidden rounded-md border-2 border-[#3E26FF] shadow-xl">
                {/* Passage en object-cover pour bien remplir la colonne sans laisser de vide */}
                <img 
                  src={photo.src} 
                  alt={`Photo ${i + 1}`} 
                  className="w-full h-auto object-cover" 
                  // AJOUTS ICI
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                  style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
      />
    </div>
  );
}