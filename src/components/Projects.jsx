// Projects.jsx
import { MoveRight } from "lucide-react";
import { useProjects } from "../contexts/ProjectContext";
import { useLanguage } from "../contexts/LanguageContext";
import { data } from "../data";

export default function Projects() {
  const { repos, loading } = useProjects();
  const { lang ,langData} = useLanguage();
  
  

  if (!langData) return null;

  if (loading) return <p className="text-center">Yükleniyor...</p>;

  return (
    <section className="w-full flex flex-col">
      <h4 className="text-4xl mb-12 font-playfair text-center md:px-1">
        {langData.projectsSection.title}
      </h4>

      <div className="flex flex-col md:flex-row gap-8 w-full items-stretch">
        {repos?.map((repo, index) => (
          <div
            key={repo.id}
            className={`flex-1  dark:bg-[#2D3235] rounded-2xl p-8 shadow-sm flex flex-col mb-6 ${repo.id % 2 === 0 ? "bg-[#DDEEFE]" : "bg-[#D9F6F1]"}`}
          >
            <div className="grow">
              <h5 className="font-playfair font-bold text-[29px] capitalize">
                {repo.name.replace(/-/g, " ")}
              </h5>
              <p className="mt-4">
                {lang === "tur"
                  ? data?.tur?.projectsSection?.description?.[index] ||
                    repo.description ||
                    "Açıklama mevcut değil."
                  : repo.description || "No description available."}
              </p>

              {/* Teknolojiler (Topics) */}
              <div className="flex flex-wrap gap-2 w-fit text-center font-inter py-6 mb-6">
                {repo.topics.map((tech) => (
                  <div
                    key={tech}
                    className="bg-white dark:bg-darkMid px-4 py-2 rounded-3xl text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mb-8">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="sm:text-[18px] font-medium border-b border-black"
                >
                  View on Github
                </a>
                {repo.website && (
                  <a
                    href={repo.website}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 group cursor-pointer w-fit"
                  >
                    <span className="sm:text-[18px] font-medium">
                      Go to app
                    </span>
                    <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </a>
                )}
              </div>
            </div>

            {/* Görsel Alanı */}
            <div className="w-full flex justify-center -mb-16 mt-6">
              <div className="relative w-[85%] md:w-full max-w-sm">
                <img
                  src="/laptops/mac.svg"
                  className="object-contain"
                  alt="Laptop"
                />
                <div className="absolute top-[5%] left-[4%] w-[92%] h-[77%] overflow-hidden">
                  {/* Buraya projenin ekran görüntüsü gelecekse dinamikleştirilebilir */}
                  <img
                    src="/laptops/left.svg"
                    className="w-full h-full object-cover"
                    alt="Screen"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
