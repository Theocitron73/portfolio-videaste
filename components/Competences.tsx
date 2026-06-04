import { PenTool, Cpu, Heart, Camera } from 'lucide-react';

export default function Skills() {
  const skillsData = [
    { 
      title: "ADOBE", 
      icon: <PenTool size={25} />, 
      items: ["Photoshop", "Illustrator", "Lightroom", "Première pro", "After effects"] 
    },
    { 
      title: "LOGICIELS", 
      icon: <Cpu size={25} />, 
      items: ["Notion", "Final cut", "Cinema 4D", "Davinci Resolve" ,"Les IA génératives"] 
    },
    { 
      title: "QUALITÉS", 
      icon: <Heart size={25} />, 
      items: ["Créatif", "Passionné", "Adaptabilité", "Esprit critique", "Travail équipe", "Gestion temps", "Attention détails"] 
    },
    { 
      title: "DRONE", 
      icon: <Camera size={25} />, 
      description: "En possession de ma licence pratique, je prépare la théorie pour proposer des services de télépilote." 
    }
  ];

  return (
    <div id="competences" className="w-full min-h-screen flex flex-col items-center justify-center pt-[5vh] p-[4vw] md:pt-[4vw]">
  <h1 className="text-[5vw] md:text-[2.5vw] font-black uppercase text-center mb-[4vw]">
    Mes compétences et qualités
  </h1>

  {/* grid-cols-1 par défaut (mobile) -> md:grid-cols-2 pour le desktop */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[1vw] w-full max-w-[1000px]">
    {skillsData.map((skill, index) => (
      <div key={index} className="bg-[#3E26FF] p-[2vw] md:p-[1.5vw] rounded-xl flex flex-col items-center text-center text-white shadow-lg">
        <div className="mb-[1vw] md:mb-[0.5vw]">{skill.icon}</div>
        <h2 className="text-[4vw] md:text-[1.2vw] font-bold mb-[1vw] md:mb-[0.8vw] ">{skill.title}</h2>
        
        {skill.items ? (
          <ul className="space-y-[0.5vw] md:space-y-[0.3vw]">
            {skill.items.map((item, i) => (
              <li key={i} className="text-[2.5vw] md:text-[0.85vw] font-bold opacity-90 leading-tight ">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex-grow flex flex-col justify-center">
            <p className="text-[2.5vw] md:text-[0.85vw] font-bold leading-tight">
              {skill.description}
            </p>
          </div>
        )}
      </div>
    ))}
  </div>
</div>
  );
}