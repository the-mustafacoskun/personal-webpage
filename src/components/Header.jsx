import { useLanguage } from "../contexts/LanguageContext"
import { Circle } from "./icons/Circle";
import { ToggleTheme } from "./ToggleTheme"



function Header() {
  const {lang,toggleLanguage} = useLanguage();
  return (
    <header className='relative flex items-center justify-center md:justify-end font-bold font-inter text-[15px] text-[#777777] dark:text-[#D9D9D9]'>
        <Circle className='absolute left-1/2 sm:left-60 -top-12 w-12 h-12 md:w-14 md:h-14 z-0 opacity-50  text-[#D9D9D9] dark:text-[#525252]' />
        <ToggleTheme/>
        <div className="mx-3.5 w-px bg-gray-300 self-stretch my-1 "></div>
        <div className="ml-3 w-36 text-bold text-[15px] cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group" onClick={toggleLanguage} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleLanguage()}>
            <span className="text-[15px]"><span className="text-[#E92577] text-[15px]">{lang === 'tur' ? 'ENGLISH' : 'TÜRKÇE'}</span>{lang === 'tur' ? "'S SWITCH" : "'YE GEÇ"}</span>
        </div>
    </header>
  )
}

export default Header