import { MoveRight } from "lucide-react";

function Projects() {
  return (
    <section className="w-full flex flex-col">
      <h4 className="text-4xl mb-12 font-playfair text-center  md:px-1">
        Projects
      </h4>

      {/* items-stretch: Yan yana olan kartların boyunu otomatik olarak eşitler */}
      <div className="flex flex-col md:flex-row gap-8 w-full items-stretch">
        {/* KART 1 */}
        <div className="flex-1 bg-amber-200 dark:bg-[#2D3235] rounded-2xl p-8 shadow-sm flex flex-col mb-6 ">
          {/* Üst İçerik: flex-grow ile boşluğu doldurur, böylece görseli aşağı iter */}
          <div className="grow">
            <h5 className="font-playfair font-bold text-[29px]">Project 1</h5>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus quos eaque vel quo culpa molestiae facere, cupiditate
              totam!
            </p>
            <div className="grid grid-cols-3 gap-2 w-fit text-center font-inter py-6 mb-6">
              <div className="bg-white dark:bg-darkMid px-4 py-2 rounded-3xl">react</div>
              <div className="bg-white dark:bg-darkMid px-4 py-2 rounded-3xl">axios</div>
              <div className="bg-white dark:bg-darkMid px-4 py-2 rounded-3xl">vercel</div>
              <div className="bg-white dark:bg-darkMid px-4 py-2 rounded-3xl w-fit">tailwind</div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <a className="sm:text-[18px] font-medium border-b border-black">
                View on Github
              </a>
              <a className="flex items-center gap-2 group cursor-pointer w-fit">
                <span className="sm:text-[18px] font-medium">Go to app</span>
                <MoveRight className="w-4 h-4 translate-y-[1.5px] transition-transform group-hover:translate-x-2 ease-in-out" />
              </a>
            </div>
          </div>
          {/* Görsel Alanı: Kartın en altına sabitlenir */}
           <div className="w-full flex justify-center -mb-16 mt-6">
            <div className="relative w-[85%] md:w-full max-w-sm">
              <img
                src="/laptops/mac.svg"
                className=" object-contain"
                alt="Project Preview"
              />
              <div className="absolute top-[5%] left-[4%] w-[92%] h-[77%] overflow-hidden rounded-xs">
                <img
                  src="/laptops/left.svg" 
                  className="w-full h-full object-cover object-top"
                  alt="Screen Content"
                />
              </div>
            </div>
          </div>
        </div>

        {/* KART 2 */}
        <div className="flex-1 bg-amber-200 dark:bg-[#2D3235] rounded-2xl p-8 shadow-sm flex flex-col mb-6 ">
          {/* Üst İçerik: flex-grow ile boşluğu doldurur, böylece görseli aşağı iter */}
          <div className="grow">
            <h5 className="font-playfair font-bold text-[29px]">Project 1</h5>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus quos eaque vel quo culpa molestiae facere, cupiditate
              totam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus quos eaque vel quo culpa molestiae facere, cupiditate
              totam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus quos eaque vel quo culpa molestiae facere, cupiditate
              totam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus quos eaque vel quo culpa molestiae facere, cupiditate
              totam!
            </p>
            <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 w-fit text-center font-inter py-6 mb-6">
              <div className="bg-white dark:bg-darkMid px-4 py-2 rounded-3xl">react</div>
              <div className="bg-white dark:bg-darkMid px-4 py-2 rounded-3xl">axios</div>
              <div className="bg-white dark:bg-darkMid px-4 py-2 rounded-3xl">vercel</div>
              <div className="bg-white dark:bg-darkMid px-4 py-2 rounded-3xl w-fit">tailwind</div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <a className="sm:text-[18px] font-medium border-b border-black">
                View on Github
              </a>
              <a className="flex items-center gap-2 group cursor-pointer w-fit">
                <span className="sm:text-[18px] font-medium">Go to app</span>
                <MoveRight className="w-4 h-4 translate-y-[1.5px] transition-transform group-hover:translate-x-2 ease-in-out" />
              </a>
            </div>
          </div>
          {/* Görsel Alanı: Kartın en altına sabitlenir */}
          <div className="w-full flex justify-center -mb-16 mt-6">
            <div className="relative w-[85%] md:w-full max-w-sm">
              <img
                src="/laptops/mac.svg"
                className=" object-contain"
                alt="Project Preview"
              />
              <div className="absolute top-[5%] left-[4%] w-[92%] h-[77%] overflow-hidden rounded-xs">
                <img
                  src="/laptops/left.svg" 
                  className="w-full h-full object-cover object-top"
                  alt="Screen Content"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
