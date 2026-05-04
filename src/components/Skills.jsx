import { useLanguage } from "../contexts/LanguageContext";


function Skills() {
  const { langData } = useLanguage();

  if (!langData) return null;

  // data.js içindeki skillsSection'dan verileri alıyoruz
  const { title, skills } = langData.skillsSection;

  return (
    <section className="relative flex flex-col justify-center items-center gap-6 sm:my-16">
      
      {/* Başlık: Dilden gelen title (Skills veya Yetenekler) */}
      <h2 className="text-5xl mb-14 font-inter font-medium dark:text-white">
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="group flex flex-col justify-center items-center gap-4 transition-transform hover:scale-110"
          >
            {/* İkon Konteynırı */}
            <div className="w-24 h-24 flex items-center justify-center">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className={`w-full h-full object-contain ${
                  skill.name === "Tailwind" ? "dark:bg-slate-800 rounded-lg p-1" : ""
                }`} 
              />
            </div>

            {/* Yetenek İsmi */}
            <span className="font-inter text-xl font-medium text-[#777777] dark:text-[#AEAEAE] uppercase tracking-wider group-hover:text-pink-600 transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;