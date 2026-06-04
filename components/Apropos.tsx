import { useState } from 'react';
import { Download } from 'lucide-react';

export default function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const parcours = [
    { title: "Almé / Auto-entrepreneur", date: "(2025-Auj.)", desc: " En 2025, j'ai consolidé mes compétences dans le domaine de la mode et du prêt-à-porter en réalisant des vidéos pour les réseaux sociaux de l'entreprise Almé. Souhaitant élargir mon horizon créatif, j'ai ensuite choisi de devenir vidéaste indépendant." },
    { title: "Agence Melted", date: "(2021-2024)", desc: "Agence de vidéo à Grenoble. Préparation de matériel, cadrage, montage, motion design, sound design, veilles sur les nouvelles techniques de montages à la mode. J'ai pu développer mes compétences, mon professionnalisme et mon esprit d'équipe." },
    { title: "AktuaProd (Stage)", date: "(2020)", desc: "Agence de vidéo à Rouen. Mes premiers pas dans une vraie agence de vidéo. J'ai pu voir et apprendre la vie en entreprise, ainsi que me professionnaliser avec les outils de production vidéo." },
    { title: "Licence Pro", date: "(2019-2020)", desc: "De 2019 jusqu'en 2020, je me suis spécialisé en vidéo grâce à la licence Technique du son et de l'image à Angoulême. J'ai pu développer mes techniques de montage, créer mes premières vidéos professionnelles." },
    { title: "DUT MMI", date: "(2017-2019)", desc: "De 2017 jusqu'en 2019, j'ai fait un DUT Métiers du Multimédia et de l'Internet, qui m'a permis de m'ouvrir aux différents horizons du monde de la communication." },
  ];

  return (
    <div id="Apropos" className="h-auto md:h-screen w-full pt-[6vh] p-[2vw] md:pt-[2vw] text-white overflow-y-auto md:overflow-hidden">
      {/* Retour à grid-cols-1 pour mobile et cols-2 pour desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw] h-full items-start">
        
        {/* MOITIÉ GAUCHE */}
          <div className="relative flex flex-col h-full items-center justify-start pt-[2vh]">
            {/* On réduit le -mb-[2vw] qui espace le titre de l'image si besoin */}
            <h1 className="relative z-10 text-[5vw] md:text-[3.5vw] font-black uppercase text-center w-full drop-shadow-lg -mb-[2vw]">
              A Propos de moi
            </h1>
            
            {/* On fixe une hauteur plus courte sur mobile pour laisser plus de place au texte */}
            <div className="relative z-20 w-[80%] h-[25vh] md:h-[65%] flex items-center justify-center">
              <img src="images/DSC07079.png" alt="Portrait" className="w-full h-full object-contain" />
            </div>

            {/* Ici : On utilise -mt-[15vh] (vh = viewport height). 
                Plus le chiffre est grand, plus ça remonte vers le haut. */}
            <div className="relative z-30 -mt-[14vh] md:-mt-[6vw] bg-[#1a1a1a] p-[4vw] md:p-[1.5vw] rounded-lg text-[2.5vw] md:text-[1vw] leading-relaxed w-[90%] md:w-[70%] text-justify shadow-2xl font-bold">
              <p>Grâce à mes 4 ans d'expériences dont 3 dans une agence de vidéo, je peux être une vraie plus-value pour votre entreprise.</p>
              <br />
              <p>Passionné d'audiovisuel depuis petit, j'ai réalisé des études dans le but de devenir vidéaste, combinant le cadrage, le montage, le motion design... Je suis devenu très polyvalent au fil des années, et cherche à apprendre constamment.</p>
            </div>

            <a href="/images/Theo_Lebarbier_CV_2026.pdf" download="Theo_Lebarbier_CV_2026.pdf" className="mt-[1vh] bg-white text-[#3E26FF] py-[1vh] px-[4vw] md:py-[0.8vh] md:px-[2vw] rounded-lg font-bold text-[3vw] md:text-[1vw] cursor-pointer inline-flex items-center gap-[1vw] md:gap-[0.5vw] transition-all duration-300 ease-out hover:scale-105 hover:bg-[#3E26FF] hover:text-white group">
              Télécharger mon CV
              <Download size={16} className="opacity-0 -ml-[1vw] transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />
            </a>
          </div>

    <div className="flex flex-col gap-[1vh] h-full justify-center items-start w-full mt-[2vw] md:mt-0">
      <div className="w-[90%] md:w-[85%] relative ml-[2vw] md:ml-0">
        <div className="absolute left-[-1.5vw] top-[1vw] bottom-[1vw] w-[0.2vw] bg-[#3E26FF]/30 z-0" />
        
        {parcours.map((item, index) => (
          <div key={index} className="relative group mb-[1vh]">
            <div className={`absolute left-[-2.15vw] top-[1.5vw] w-[1.5vw] h-[1.5vw] rounded-full z-10 transition-all duration-300 border-[0.3vw] border-[#111] ${activeIndex === index ? 'bg-white scale-110' : 'bg-[#3E26FF]'}`} />
            
            <button 
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className={`w-full text-left relative p-[3vw] md:p-[1.5vw] rounded-lg transition-all duration-500 border border-transparent 
                ${activeIndex === index ? 'bg-white border-[#3E26FF]' : 'bg-[#3E26FF] hover:bg-white hover:border-[#3E26FF]'}`}
            >
              {/* Titre et Date : on enlève group-hover:text-black ici */}
              <div className={`transition-opacity duration-300 ${activeIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                <h3 className="text-[3vw] md:text-[1.2vw] font-bold text-white">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center mt-[0.5vh]">
                  <p className="text-[2.5vw] md:text-[0.9vw] text-white/80">
                    {item.date}
                  </p>
                  
                  {/* Indicateur adaptatif :
                - Sur mobile : "Appuyer pour lire +"
                - Sur desktop : "Survoler pour lire +" 
            */}
            <span className="text-[2.5vw] md:text-[0.7vw] font-medium text-white/50 transition-opacity duration-300 group-hover:opacity-0">
              <span className="md:hidden">Appuyer pour lire +</span>
              <span className="hidden md:inline">Survoler pour lire +</span>
            </span>
                </div>
              </div>

              {/* Description : La couleur du texte est forcée en noir uniquement si activeIndex correspond */}
              <div className={`absolute inset-0 p-[4vw] md:p-[1.5vw] flex items-center transition-opacity duration-300 pointer-events-none 
                ${activeIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                <p className="text-[2.5vw] md:text-[0.9vw] text-black leading-tight font-medium">
                  {item.desc}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>

      </div>
    </div>
  );
}