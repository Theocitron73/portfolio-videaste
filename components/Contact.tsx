export default function Contact() {
  return (
    <div id="contact" className="w-full min-h-screen text-white flex flex-col md:flex-row pt-[5vh] md:pt-0 overflow-hidden relative">
      
      {/* CÔTÉ GAUCHE : Texte */}
      <div className="z-10 w-full md:w-1/2 flex flex-col justify-center px-[8vw] md:px-[14vw] py-[10vw]">
        <div className="space-y-[2vw]">
          <h2 className="text-[10vw] md:text-[5vw] font-black leading-none uppercase">
            Travaillons <br />
            <span className="text-[#3E26FF]">ensemble</span>
          </h2>
          
          <div className="w-[15vw] h-[0.5vw] bg-[#3E26FF] my-[2vw]" />
          
          <p className="text-[4vw] md:text-[1.5vw] font-medium opacity-90">
            Discutons de vos projets vidéos et donnons vie à vos idées.
          </p>

          <div className="pt-[4vw] space-y-[2vw]">
            <a href="mailto:theo.lebarbier@orange.fr" className="block text-[4vw] md:text-[1.2vw] font-bold hover:text-[#3E26FF] transition-colors">
              theo.lebarbier@orange.fr
            </a>
            <p className="text-[4vw] md:text-[1.2vw] font-bold">
              06 31 84 17 12
            </p>
          </div>
        </div>
      </div>

      {/* CÔTÉ DROIT : Image */}
      <div className="w-full md:absolute md:right-0 md:top-0 md:bottom-0 md:w-[50%] h-[70vh] md:h-full flex justify-end">
        <img 
          src="images/IMG_3520.png" 
          alt="Portrait vidéaste" 
          // object-contain + object-right permet de garder l'image entière et collée à droite
          className="h-full w-auto max-w-full object-contain object-right scale-x-[-1]"
        />
        
      </div>
    </div>
  );
}