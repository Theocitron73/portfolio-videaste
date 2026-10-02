"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = {
  tous: {
    name: "Professionnel",
    videos: [
      { 
        id: "v1", 
        title: "Publicité lingettes - Ultragrime", 
        description: "Ce projet de publicité a été effectué en équipe. J'ai participé au tournage, au montage et au shooting photo, c'était challengeant parce que c'est la première fois que je participais à une pub produit de cet envergure avec des plans macro et des ralentis sur des détails.", 
        src: "https://pub-f0790ecb785044afb7436b56be8426ce.r2.dev/Ultragrime.mp4", 
        poster: "/thumbnails/ultragrime.jpg",
        duration: "0:58" 
      },
      { 
        id: "v2", 
        title: "Motion design promotion logiciel - RaiseSens", 
        description: "Sur ce projet de motion design, j'ai voulu partir sur des formes simples pour une meilleure compréhension. J'ai réalisé l'animation, le sound design et le sous-titrage.", 
        src: "https://pub-f0790ecb785044afb7436b56be8426ce.r2.dev/raisesens.mp4", 
        poster: "/thumbnails/raisesens.jpg", 
        duration: "1:06" 
      },
      { 
        id: "v3", 
        title: "Short réseaux sociaux - CEA", 
        description: "Cette vidéo est en réalité une série de shorts qui met en avant plusieurs étudiants en doctorat du CEA. C'est un projet réalisé en autonomie : j'ai assuré le tournage sur fond vert ainsi que la prise d'images d'illustration, puis j'ai monté les vidéos en ajoutant de nombreux éléments pour les rendre vivantes et dynamiques.", 
        src: "https://pub-f0790ecb785044afb7436b56be8426ce.r2.dev/cea-short.mp4", 
        poster: "/thumbnails/cea-short.jpg", 
        duration: "1:50" 
      },
      { 
        id: "v4", 
        title: "Aftermovie Inauguration ROSI SOLAR", 
        description: "Cet aftermovie a été réalisé par mes soins de A à Z avec très peu de retours clients nécessaires. Du tournage jusqu'à la livraison, j'ai eu carte blanche pour mettre en avant cet événement. Je me suis amusé à créer une petite intro pour contextualiser le projet.", 
        src: "https://pub-f0790ecb785044afb7436b56be8426ce.r2.dev/rosi-solar.mp4", 
        poster: "/thumbnails/rosi-solar.jpg", 
        duration: "2:21" 
      },
      { 
        id: "v5", 
        title: "Institutionnel - Événement Linkday 2023", 
        description: "Le Linkday est un événement annuel visant à aider les personnes en situation de handicap à trouver du travail. Sur ce projet, j'ai participé à toute la chaîne de production : tournage des interviews, images d'illustration et montage. J'ai innové en ajoutant un petit générique style Netflix.", 
        src: "https://pub-f0790ecb785044afb7436b56be8426ce.r2.dev/linkday.mp4", 
        poster: "/thumbnails/linkday.jpg", 
        duration: "4:45" 
      },
      { 
        id: "v6", 
        title: "Documentaire Hommage ancien PDG - CEA", 
        description: "Dans ce documentaire, le CEA a souhaité rendre hommage à leur ancien PDG. J'ai participé au tournage, au montage ainsi qu'aux effets visuels 3D et 2D. C'était un projet très challengeant.", 
        src: "https://pub-f0790ecb785044afb7436b56be8426ce.r2.dev/cea-doc.mp4", 
        poster: "/thumbnails/cea-doc.jpg", 
        duration: "8:19" 
      },
    ]
  },
  lab: {
    name: "Side Projects",
    videos: [
      { 
        id: "v7", 
        title: "Short Recette - Tiramisu", 
        description: "Cette vidéo a été réalisée pour monter en compétences et explorer de nouveaux formats. J'ai voulu filmer cette recette de manière dynamique, avec quelques plans innovants.", 
        src: "https://pub-f0790ecb785044afb7436b56be8426ce.r2.dev/tiramisu.mp4", 
        poster: "/thumbnails/tiramisu.jpg", 
        duration: "0:34" 
      },
      { 
        id: "v8", 
        title: "Short - Conseils Financiers", 
        description: "Pour ce short de promotion, j'ai réalisé le montage vidéo en appliquant les codes des réseaux sociaux : zooms, cuts, sous-titres, textes animés et sound design moderne. J'ai travaillé le 'hook' et le 'call to action' pour maximiser la rétention.", 
        src: "https://pub-f0790ecb785044afb7436b56be8426ce.r2.dev/finance.mp4", 
        poster: "/thumbnails/finance.jpg", 
        duration: "0:30" 
      },
      { 
        id: "v9", 
        title: "Short Promotionnel - Éditeur de livres", 
        description: "Ce short a été réalisé pour renforcer mes compétences dans le style 'Lifestyle' afin de transformer le quotidien en contenu intéressant. J'ai souhaité transmettre une émotion naturelle et une esthétique épurée grâce à une musique classique et des plans rapprochés.", 
        src: "https://pub-f0790ecb785044afb7436b56be8426ce.r2.dev/livre.mp4", 
        poster: "/thumbnails/livre.jpg", 
        duration: "0:30" 
      },
      { 
        id: "v10", 
        title: "Youtubeur Amixem - Divertissement / Dégustation", 
        description: "Dans le cadre d'un test de recrutement, j'ai tenté pour la première fois un montage type YouTube/Divertissement. J'ai repris les codes de la chaîne d'Amixem tout en y ajoutant ma patte artistique avec des effets sonores et visuels. Un beau challenge qui m'a sorti de ma zone de confort.", 
        src: "https://pub-f0790ecb785044afb7436b56be8426ce.r2.dev/amixem.mp4", 
        poster: "/thumbnails/amixem.jpg", 
        duration: "2:33" 
      },
      { 
        id: "v11", 
        title: "Short Promotionnel - Prêt-à-porter", 
        description: "Cette vidéo a été réalisée dans le cadre de mon recrutement chez Almé. C'est la première fois que je montais une vidéo de mode. J'ai souhaité innover en intégrant des animations de texte pour souligner les spécificités des articles.", 
        src: "https://pub-f0790ecb785044afb7436b56be8426ce.r2.dev/mode.mp4", 
        poster: "/thumbnails/mode.jpg", 
        duration: "0:36" 
      },
      { 
        id: "v12", 
        title: "Publicité Ad - Salle de jeux Arcade", 
        description: "Cette publicité pour une salle d'arcade a demandé de l'imagination pour coller aux codes des réseaux sociaux. J'ai utilisé des transitions dynamiques et un sound design adapté en fonction des machines de jeux.", 
        src: "https://pub-f0790ecb785044afb7436b56be8426ce.r2.dev/arcade.mp4", 
        poster: "/thumbnails/arcade.jpg", 
        duration: "0:15" 
      },
    ]
  },
};

function parseDurationToSeconds(durationStr: string): number {
  if (!durationStr) return 0;
  const parts = durationStr.split(':').map(Number);
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return Number(durationStr) || 0;
}

function formatTime(time: number) {
  if (isNaN(time) || !isFinite(time)) return "0:00";
  const mins = Math.floor(time / 60);
  const secs = Math.floor(time % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function CustomVideoPlayer({ video, isInfoOpen, setIsInfoOpen }: any) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  const totalDurationInSeconds = parseDurationToSeconds(video.duration);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(totalDurationInSeconds);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const controlsTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let animId: number;
    const loop = () => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
      if (isPlaying) {
        animId = requestAnimationFrame(loop);
      }
    };
    if (isPlaying) {
      animId = requestAnimationFrame(loop);
    }
    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  const updateDuration = () => {
    const v = videoRef.current;
    if (v && isFinite(v.duration) && v.duration > 0) {
      if (totalDurationInSeconds > 0) {
        if (v.duration >= totalDurationInSeconds * 0.85) {
          setDuration(v.duration);
        }
      } else {
        setDuration(v.duration);
      }
    }
  };

  const handleStart = async () => {
    setIsStarted(true);
    setIsPlaying(true);
    setIsBuffering(true);

    if (videoRef.current) {
      try {
        await videoRef.current.play();
      } catch (error) {
        console.warn("Démarrage différé :", error);
      }
    }
  };

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;

    if (isPlaying) {
      v.pause();
    } else {
      v.play().catch(() => {});
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    if (isPlaying) {
      controlsTimeout.current = setTimeout(() => setShowControls(false), 2200);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  };

  const currentMaxDuration = totalDurationInSeconds || duration || 100;
  const progressPercent = currentMaxDuration > 0 ? (currentTime / currentMaxDuration) * 100 : 0;

  return (
    <div 
      ref={containerRef}
      onContextMenu={(e) => e.preventDefault()}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      className="group relative aspect-video rounded-xl overflow-hidden border border-white/10 hover:border-[#3E26FF]/60 transition-all shadow-xl bg-black w-full select-none"
    >
      <video
        ref={videoRef}
        src={video.src}
        preload="metadata"
        playsInline
        controlsList="nodownload"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        onClick={() => togglePlay()}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => setIsBuffering(false)}
        onCanPlay={() => setIsBuffering(false)}
        onLoadedData={() => setIsBuffering(false)}
        onTimeUpdate={() => {
          if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
            updateDuration();
          }
        }}
        onLoadedMetadata={updateDuration}
        onDurationChange={updateDuration}
        onEnded={() => {
          setIsPlaying(false);
          setIsStarted(false);
          setCurrentTime(0);
        }}
        className="w-full h-full object-contain cursor-pointer bg-black"
      />

      {isBuffering && isStarted && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <div className="w-9 h-9 rounded-full border-2 border-white/20 border-t-[#3E26FF] animate-spin" />
        </div>
      )}

      {!isStarted && (
        <div onClick={handleStart} className="absolute inset-0 cursor-pointer bg-black flex items-center justify-center z-20">
          {video.poster ? (
            <img 
              src={video.poster} 
              alt={video.title} 
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-600 text-xs">
              Miniature
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

          <div className="absolute top-[4%] left-[4%] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 z-20 pointer-events-none">
            <span className="text-white text-[11px] md:text-xs font-medium tracking-wide">{video.duration}</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-11 h-11 md:w-12 md:h-12 bg-[#3E26FF] backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(62,38,255,0.7)] transition-all duration-300 shadow-md">
              <svg className="w-4 h-4 text-white translate-x-0.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          <div className="absolute bottom-[4%] left-[4%] right-[25%] pointer-events-none z-20">
            <h3 className="text-white font-medium text-xs md:text-sm drop-shadow line-clamp-1">{video.title}</h3>
          </div>
        </div>
      )}

      <button 
        onClick={(e) => { e.stopPropagation(); setIsInfoOpen(!isInfoOpen); }}
        className="absolute top-[4%] right-[4%] z-30 px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md text-white/90 text-[11px] md:text-xs font-normal border border-white/15 hover:bg-[#3E26FF] hover:border-transparent transition-all"
      >
        {isInfoOpen ? "Retour" : "Détails"}
      </button>

      <AnimatePresence>
        {isInfoOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/95 p-6 flex flex-col justify-center items-center text-center z-40"
          >
            <h4 className="text-white font-semibold text-sm md:text-base mb-2 text-[#3E26FF]">{video.title}</h4>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-md">{video.description}</p>
            <button 
              onClick={() => setIsInfoOpen(false)} 
              className="mt-4 px-3.5 py-1 rounded-full bg-[#3E26FF] text-white font-medium text-xs tracking-wider uppercase hover:opacity-90 transition"
            >
              Fermer
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {isStarted && (
        <div 
          className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2.5 pt-6 flex flex-col gap-1.5 transition-opacity duration-300 z-20 ${
            showControls ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <input
            type="range"
            min="0"
            max={currentMaxDuration}
            step="0.01"
            value={currentTime}
            onChange={handleSeek}
            style={{
              background: `linear-gradient(to right, #3E26FF ${progressPercent}%, rgba(255, 255, 255, 0.2) ${progressPercent}%)`
            }}
            className="w-full h-1 rounded-lg appearance-none cursor-pointer hover:h-1.5 transition-all
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-3.5
              [&::-webkit-slider-thumb]:h-3.5
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-[#3E26FF]
              [&::-webkit-slider-thumb]:border-2
              [&::-webkit-slider-thumb]:border-white
              [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(62,38,255,0.9)]
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-webkit-slider-thumb]:transition-transform
              hover:[&::-webkit-slider-thumb]:scale-125
              [&::-moz-range-thumb]:w-3.5
              [&::-moz-range-thumb]:h-3.5
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-[#3E26FF]
              [&::-moz-range-thumb]:border-2
              [&::-moz-range-thumb]:border-white
              [&::-moz-range-thumb]:cursor-pointer"
          />

          <div className="flex items-center justify-between text-white text-[11px]">
            <div className="flex items-center gap-2.5">
              <button onClick={(e) => togglePlay(e)} className="hover:text-[#3E26FF] transition">
                {isPlaying ? (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                ) : (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                )}
              </button>

              <button onClick={toggleMute} className="hover:text-[#3E26FF] transition">
                {isMuted ? (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                ) : (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                )}
              </button>

              <span className="font-mono text-gray-300">
                {formatTime(currentTime)} / {video.duration || formatTime(duration)}
              </span>
            </div>

            <button onClick={toggleFullscreen} className="hover:text-[#3E26FF] transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function VideoCard({ video }: { video: any }) {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  return <CustomVideoPlayer video={video} isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} />;
}

export default function PortfolioRealisation() {
  const [activeTab, setActiveTab] = useState('tous');

  return (
    <div id="portfolio" className="w-full min-h-screen pt-[12vh] md:pt-[4vh] pb-[4vh] flex flex-col items-center overflow-x-hidden">
      <div className="text-center mb-[5vh] px-[5vw] w-full">
        <h2 className="text-[5vw] md:text-[4vw] lg:text-[3vw] font-black text-white mb-[2vh] uppercase leading-none tracking-tight">
          Ce que je peux vous apporter ?
        </h2>
        <p className="text-[4vw] md:text-[2.5vw] lg:text-[1.5vw] text-white font-medium mb-[2vh] w-full leading-tight">
          Grâce à ma polyvalence, je peux être votre <span className="inline-block">couteau suisse</span> de la <span className="inline-block">vidéo</span>
        </p>
        
        <p className="text-[#3E26FF] font-black text-[2.5vw] md:text-[1.25vw] uppercase tracking-[0.1em] max-w-5xl mx-auto leading-relaxed text-center px-4">
          <span className="whitespace-nowrap">Motion design, Aftermovie,</span>{" "} 
          <span className="whitespace-nowrap">Promotionnel, Institutionnel,</span>{" "} 
          <span className="whitespace-nowrap">Reportage,</span>{" "} 
          <span className="whitespace-nowrap">Direction artistique façon Netflix</span>
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-[1vw] mb-[3vh] px-[2vw]">
        {Object.keys(categories).map((key) => (
          <button 
            key={key} 
            onClick={() => setActiveTab(key)} 
            className={`px-[1.3vw] py-[0.6vw] rounded-full font-bold transition-all duration-300 text-[4vw] md:text-[1vw] ${
              activeTab === key ? "bg-[#3E26FF] text-white" : "bg-white/5 text-white hover:bg-white/10"
            }`}
          >
            {categories[key as keyof typeof categories].name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full"
        >
          <div className="md:hidden flex flex-col gap-[1vh]">
            <div className="flex gap-[4vw] overflow-x-auto snap-x snap-mandatory px-[3vw] pb-[1vh] scrollbar-hide">
              {categories[activeTab as keyof typeof categories].videos
                .slice(0, Math.ceil(categories[activeTab as keyof typeof categories].videos.length / 2))
                .map((video) => (
                  <div key={video.id} className="snap-center shrink-0 w-[80vw] relative">
                    <VideoCard video={video} />
                  </div>
                ))}
            </div>

            <div className="flex gap-[4vw] overflow-x-auto snap-x snap-mandatory px-[3vw] pb-[1vh] scrollbar-hide">
              {categories[activeTab as keyof typeof categories].videos
                .slice(Math.ceil(categories[activeTab as keyof typeof categories].videos.length / 2))
                .map((video) => (
                  <div key={video.id} className="snap-center shrink-0 w-[80vw] relative">
                    <VideoCard video={video} />
                  </div>
                ))}
            </div>
          </div>

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