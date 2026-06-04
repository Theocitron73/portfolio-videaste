"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Définition des données par catégories
const categories = {
  tous: {
    name: "Professionnel",
    videos: [
      { id: "v1", title: "Publicité lingettes - Ultragrime", description: "Ce projet de publicité a été effectué en équipe. J'ai participé au tournage, au montage et au shooting photo, c'était challengeant parce que c'est la première fois que je participais à une pub produit de cet envergure avec des plans macro et des ralentis sur des détails.", dmId: "kWDDX6JcgK3TUFAMvGG", duration: "0:58" },
      { id: "v2", title: "Motion design promotion logiciel - RaiseSens", description: "Sur ce projet de motion design, j'ai voulu partir sur des formes simples pour une meilleure compréhension. J'ai réalisé l'animation, le sound design et le sous-titrage.", dmId: "k54UlCVJGhNRZKAMvR2", duration: "1:06" },
      { id: "v3", title: "Short réseaux sociaux - CEA", description: "Cette vidéo est en réalité une série de shorts qui met en avant plusieurs étudiants en doctorat du CEA. C'est un projet réalisé en autonomie : j'ai assuré le tournage sur fond vert ainsi que la prise d'images d'illustration, puis j'ai monté les vidéos en ajoutant de nombreux éléments pour les rendre vivantes et dynamiques.", dmId: "kjNWySnleNILl5AMvSG", duration: "1:50" },
      { id: "v4", title: "Aftermovie Inauguration ROSI SOLAR", description: "Cet aftermovie a été réalisé par mes soins de A à Z avec très peu de retours clients nécessaires. Du tournage jusqu'à la livraison, j'ai eu carte blanche pour mettre en avant cet événement. Je me suis amusé à créer une petite intro pour contextualiser le projet.", dmId: "k30ZyM4uTZ4F89AMvR0", duration: "2:21" },
      { id: "v5", title: "Institutionnel - Événement Linkday 2023", description: "Le Linkday est un événement annuel visant à aider les personnes en situation de handicap à trouver du travail. Sur ce projet, j'ai participé à toute la chaîne de production : tournage des interviews, images d'illustration et montage. J'ai innové en ajoutant un petit générique style Netflix.", dmId: "kLbJC9QohxhVdKAMvPe", duration: "4:45" },
      { id: "v6", title: "Documentaire Hommage ancien PDG - CEA", description: "Dans ce documentaire, le CEA a souhaité rendre hommage à leur ancien PDG. J'ai participé au tournage, au montage ainsi qu'aux effets visuels 3D et 2D. C'était un projet très challengeant.", dmId: "k40YNQQTBRNAsiAMvVM", duration: "8:19" },
    ]
  },
  lab: {
    name: "Side Projects",
    videos: [
      { id: "v7", title: "Short Recette - Tiramisu", description: "Cette vidéo a été réalisée pour monter en compétences et explorer de nouveaux formats. J'ai voulu filmer cette recette de manière dynamique, avec quelques plans innovants.", dmId: "k4iYyf8jDhXtQjGoQ4s", duration: "0:34" },
      { id: "v8", title: "Short - Conseils Financiers", description: "Pour ce short de promotion, j'ai réalisé le montage vidéo en appliquant les codes des réseaux sociaux : zooms, cuts, sous-titres, textes animés et sound design moderne. J'ai travaillé le 'hook' et le 'call to action' pour maximiser la rétention.", dmId: "kl0Olqmxfr5HyMGoQB2", duration: "0:30" },
      { id: "v9", title: "Short Promotionnel - Éditeur de livres", description: "Ce short a été réalisé pour renforcer mes compétences dans le style 'Lifestyle' afin de transformer le quotidien en contenu intéressant. J'ai souhaité transmettre une émotion naturelle et une esthétique épurée grâce à une musique classique et des plans rapprochés.", dmId: "k3aeFKH7tlJ3H4GoQku", duration: "0:30" },
      { id: "v10", title: "Youtubeur Amixem - Divertissement / Dégustation", description: "Dans le cadre d'un test de recrutement, j'ai tenté pour la première fois un montage type YouTube/Divertissement. J'ai repris les codes de la chaîne d'Amixem tout en y ajoutant ma patte artistique avec des effets sonores et visuels. Un beau challenge qui m'a sorti de ma zone de confort.", dmId: "k35oO7Wliv2uwLGoR0y", duration: "2:33" },
      { id: "v11", title: "Short Promotionnel - Prêt-à-porter", description: "Cette vidéo a été réalisée dans le cadre de mon recrutement chez Almé. C'est la première fois que je montais une vidéo de mode. J'ai souhaité innover en intégrant des animations de texte pour souligner les spécificités des articles.", dmId: "xad0noq", duration: "0:36" },
      { id: "v12", title: "Publicité Ad - Salle de jeux Arcade", description: "Cette publicité pour une salle d'arcade a demandé de l'imagination pour coller aux codes des réseaux sociaux. J'ai utilisé des transitions dynamiques et un sound design adapté en fonction des machines de jeux.", dmId: "k6pQvRPBRg5VruGoQII", duration: "0:15" },
    ]
  },
};

function VideoCard({ video }: { video: any }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className="group relative aspect-video rounded-xl overflow-hidden border border-white/10 hover:border-[#3E26FF] transition-all shadow-xl bg-gray-900 w-full">
      {!isPlaying ? (
        <div className="absolute inset-0 cursor-pointer" onClick={() => setIsPlaying(true)}>
          <img 
  src={`https://www.dailymotion.com/thumbnail/video/${video.dmId}`} 
  alt={video.title} 
  // Remplace object-cover par object-contain
  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 bg-black" 
/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Badge Durée en haut à gauche */}
          <div className="absolute top-[4%] left-[4%] bg-black/60 backdrop-blur-md px-[0.8vw] py-[0.2vw] rounded-md border border-white/10 z-20">
            <span className="text-white text-[2vw] md:text-[1vw] lg:text-[0.7vw] font-bold tracking-wide">
              {video.duration}
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[8%] h-[8%] min-w-[40px] min-h-[40px] bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#3E26FF] group-hover:scale-110 transition-all">
              <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[14px] border-transparent border-l-white ml-1" />
            </div>
          </div>
        </div>
      ) : (
        <iframe className="w-full h-full" src={`https://www.dailymotion.com/embed/video/${video.dmId}?autoplay=1`} allowFullScreen />
      )}

      {isInfoOpen && (
        <div className="absolute inset-0 bg-black/95 p-[2vw] flex flex-col justify-center items-center text-center z-30">
          <p className="text-white text-[2.5vw] md:text-[1.5vw] lg:text-[0.8vw] leading-relaxed">{video.description}</p>
          <button className="mt-[1vw] text-[#3E26FF] font-bold uppercase tracking-widest text-[2vw] md:text-[1.2vw] lg:text-[0.8vw]" onClick={() => setIsInfoOpen(false)}>Fermer</button>
        </div>
      )}

      <button className="absolute top-[2%] right-[2%] z-40 px-[1vw] py-[0.5vw] rounded-full bg-black/30 backdrop-blur-md text-white text-[3vw] md:text-[1.2vw] lg:text-[0.8vw] border border-white/20 hover:bg-[#3E26FF] transition-all" onClick={(e) => { e.stopPropagation(); setIsInfoOpen(!isInfoOpen); }}>
        {isInfoOpen ? "Retour" : "Détails"}
      </button>

      {!isInfoOpen && !isPlaying && (
        <div className="absolute bottom-[4%] left-[4%] right-[4%] text-center z-10 pointer-events-none">
          <h3 className="text-white font-bold text-[3vw] md:text-[2vw] lg:text-[0.9vw] [text-shadow:0_2px_4px_rgba(0,0,0,0.8)] truncate">
            {video.title}
          </h3>
        </div>
      )}
    </div>
  );
}

export default function PortfolioRealisation() {
  const [activeTab, setActiveTab] = useState('tous');

  return (
    <div id="portfolio" className="w-full min-h-screen pt-[12vh] md:pt-[4vh] pb-[4vh] flex flex-col items-center overflow-x-hidden">
      <div className="text-center mb-[5vh] px-[5vw] w-full">
        <h2 className="text-[5vw] md:text-[4vw] lg:text-[3vw] font-black text-white mb-[2vh] uppercase leading-none tracking-tight">Ce que je peux vous apporter ?</h2>
        <p className="text-[4vw] md:text-[2.5vw] lg:text-[1.5vw] text-white font-medium mb-[2vh] w-full leading-tight">Grâce à ma polyvalence, je peux être votre <span className="inline-block">couteau suisse</span> de la <span className="inline-block">vidéo</span></p>
        
        {/* Texte des expertises ajouté */}
        <p className="text-[#3E26FF] font-black text-[2.5vw] md:text-[1.25vw] uppercase tracking-[0.1em] max-w-5xl mx-auto leading-relaxed text-center px-4">
          <span className="whitespace-nowrap">Motion design, Aftermovie,</span>{" "} 
          <span className="whitespace-nowrap">Promotionnel, Institutionnel,</span>{" "} 
          <span className="whitespace-nowrap">Reportage,</span>{" "} 
          <span className="whitespace-nowrap">Direction artistique façon Netflix</span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-[1vw] mb-[3vh] px-[2vw]">
        {Object.keys(categories).map((key) => (
          <button key={key} onClick={() => setActiveTab(key)} className={`px-[1.3vw] py-[0.6vw] rounded-full font-bold transition-all duration-300 text-[4vw] md:text-[1vw] ${activeTab === key ? "bg-[#3E26FF] text-white" : "bg-white/5 text-white hover:bg-white/10"}`}>
            {categories[key as keyof typeof categories].name}
          </button>
        ))}
      </div>

      {/* SECTION VIDÉOS ANIMÉE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab} // La clé est cruciale pour déclencher l'animation au changement
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2, }}
          className="w-full"
        >
          {/* MOBILE : CARROUSELS DIVISÉS */}
            <div className="md:hidden flex flex-col gap-[1vh]">
              {/* Carrousel 1 */}
              <div className="flex gap-[4vw] overflow-x-auto snap-x snap-mandatory px-[3vw] pb-[1vh] scrollbar-hide">
                {categories[activeTab as keyof typeof categories].videos
                  .slice(0, Math.ceil(categories[activeTab as keyof typeof categories].videos.length / 2))
                  .map((video, index) => (
                    <div key={video.id} className="snap-center shrink-0 w-[80vw] relative">
                      <div className="absolute bottom-[2vw] left-[2vw] z-50 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[2.5vw] font-bold border border-white/20">
                        {index + 1} / {categories[activeTab as keyof typeof categories].videos.length}
                      </div>
                      <VideoCard video={video} />
                    </div>
                  ))}
              </div>

              {/* Carrousel 2 */}
              <div className="flex gap-[4vw] overflow-x-auto snap-x snap-mandatory px-[3vw] pb-[1vh] scrollbar-hide">
                {categories[activeTab as keyof typeof categories].videos
                  .slice(Math.ceil(categories[activeTab as keyof typeof categories].videos.length / 2))
                  .map((video, index) => {
                    const globalIndex = Math.ceil(categories[activeTab as keyof typeof categories].videos.length / 2) + index;
                    return (
                      <div key={video.id} className="snap-center shrink-0 w-[80vw] relative">
                        <div className="absolute bottom-[2vw] left-[2vw] z-50 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[2.5vw] font-bold border border-white/20">
                          {globalIndex + 1} / {categories[activeTab as keyof typeof categories].videos.length}
                        </div>
                        <VideoCard video={video} />
                      </div>
                    );
                  })}
              </div>
            </div>

          {/* TABLETTE / DESKTOP : GRILLE */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-[1vw] px-[15vw] w-full max-w-none">
            {categories[activeTab as keyof typeof categories].videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}