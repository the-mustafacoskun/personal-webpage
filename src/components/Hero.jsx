import { MoveRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Bar } from "./icons/Bar";



function Hero() {
  const { langData } = useLanguage();
  const { greeting, intro, cta } = langData.heroSection;

  return (
    <section className=" flex flex-col sm:flex-row justify-between items-center sm:items-start py-20 sm:h-130 md:h-158 lg:h-150 ">
      <div className="flex-1 max-w-5xl flex flex-col gap-y-5 sm:gap-y-8 font-inter pr-10">
        <div className=" flex flex-col gap-4 mr-4">
          <span className="text-[24px] lg:text-[30px]">{greeting}</span>
          <div className="relative z-10">
            <h1 className=" text-[22px] md:text-[28px] lg:text-[42px] leading-tight">
              {intro}
            </h1>
            <Bar className="absolute -top-2 lg:top-4 left-0 -z-10 w-24 h-16 text-pink-600" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-3">
            <a
              href="https://www.linkedin.com/in/mustafacskn00/"
              target="_blank"
            >
              <img
                src="src/assets/linkedin.svg"
                className="w-8 h-8 dark:invert"
                alt="Linkedin"
              />
            </a>
            <a href="https://github.com/the-mustafacoskun" target="_blank">
              <img
                src="src/assets/github.svg"
                className="w-8 h-8 dark:invert"
                alt="Github"
              />
            </a>
          </div>
          <div className="md:text-[18px] text-[16px] max-w-lg min-h-35 md:min-h-36 lg:min-h-32">
            <p className="leading-relaxed min-h-[3.5em]">
              {cta.pre}
              <span className="text-pink-600 font-medium">
                {" "}
                {cta.freelance}
              </span>
              {cta.mid}
              <span className="text-pink-600 font-medium"> {cta.services}</span>
              {cta.post}

              {/* Email kısmını alt satıra veya yanına kontrollü sabitlemek için block/inline-block ayarı */}
              <span className="group inline-flex items-center ml-2 whitespace-nowrap align-middle">
                <MoveRight className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-2 text-pink-600" />
                <a
                  href="mailto:the.mustafacoskun@gmail.com"
                  className="text-pink-600 transition-all duration-300 z-50 hover:underline"
                >
                  the.mustafacoskun@gmail.com
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Resim Alanı*/}
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-86 lg:h-86 shrink-0 mt-5 sm:m-0">
        <div className="absolute -top-4 -left-4 w-full h-full bg-pink-600 rounded-4xl z-0"></div>
        <div className="relative z-10 w-full h-full bg-gray-300 rounded-4xl overflow-hidden shadow-2xl">
          <img
            src="src/assets/foto.svg"
            className="w-full h-full object-cover"
            alt="Mustafa"
          />
         
        </div>
      </div>
    </section>
  );
}

export default Hero;
