"use client";
import Image from "next/image";

export default function HeroHeader() {
  return (
    <div id="hero" className="relative flex flex-col min-h-screen pt-15 px-4 md:px-8 pb-10 overflow-hidden">
      
      {/* L'IMAGE EN FOND : Fixée en bas */}
      <div className="absolute inset-0 z-5 pointer-events-none flex justify-center items-end">
        <div className="relative w-full max-w-[100vw] h-[70vh] md:h-[85vh]">
          <Image 
            src="/images/IMG_3470.png" 
            alt="Théo Lebarbier"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      {/* 1. TITRES : Ajustés pour mobile (taille réduite) et PC (taille fixe) */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-2 md:space-y-4">
        <h1 className="font-bold text-white leading-tight" style={{ fontSize: "clamp(1.8rem, 6vw, 5rem)" }}>
          Je suis Théo Lebarbier
        </h1>
        <h2 className="font-semibold text-[#3E26FF] leading-snug text-[5vw] md:text-[clamp(1.5rem,2vw,2.5rem)]">
  Bienvenue sur le portfolio de votre futur
</h2>
        <h3 className="font-extrabold text-[#3E26FF] tracking-wider uppercase leading-none text-lg md:text-[clamp(2rem,4vw,4rem)]">
          Cadreur / Monteur / Motion Designer
        </h3>
      </div>

      {/* 2. CONTENU CENTRÉ : Ajustement de la grille pour mobile vs PC */}
      <div className="relative z-10 flex-grow grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center mt-6 md:mt-10">
        
        {/* Player : Centré mobile (ml-0), Décalé PC (lg:ml-40) */}
        <div className="w-full max-w-2xl mx-auto lg:mx-0 lg:ml-40 aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 border-[#3E26FF] bg-black">
          <iframe
            className="w-full h-full block"
            style={{ borderRadius: 'inherit' }}
            src="https://www.youtube.com/embed/Sv3aQdKA9zs?autoplay=0&rel=0"
            title="Showreel Théo Lebarbier"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        {/* Espace vide */}
        <div className="hidden lg:block"></div>

        {/* Droite : Parcours - Taille de texte réduite sur mobile */}
        <div className="flex flex-col space-y-4 md:space-y-8 px-4 md:px-0 -translate-y-15 md:translate-y-0 transition-transform">
  <div className="flex items-start space-x-3 md:space-x-4 text-white">
    <span className="text-[#3E26FF] text-2xl md:text-3xl mt-[-2px]">●</span>
    <p className="text-sm md:text-xl font-bold uppercase">
      3 ANS D'EXPÉRIENCE DANS UNE AGENCE DE VIDÉO
    </p>
  </div>
  
  <div className="flex items-start space-x-3 md:space-x-4 text-white">
    <span className="text-[#3E26FF] text-2xl md:text-3xl mt-[-2px]">●</span>
    <p className="text-sm md:text-xl font-bold uppercase">
      1 DUT ET 1 LICENCE PROFESSIONNEL ACQUIS
    </p>
  </div>
</div>
      </div>
    </div>
  );
}