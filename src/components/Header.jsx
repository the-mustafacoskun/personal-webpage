import { useLanguage } from "../contexts/LanguageContext"
import { ToggleTheme } from "./ToggleTheme"



function Header() {
  const {lang,toggleLanguage} = useLanguage();
  return (
    <div className='flex justify-center md:justify-end font-bold font-inter text-[15px] text-[#777777] dark:text-[#D9D9D9]'>
        <ToggleTheme/>
        <span className="mx-3.5">|</span>
        <div className="ml-3 text-bold text-[15px] cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group" onClick={toggleLanguage} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleLanguage()}>
            <span><span className="text-[#E92577]">{lang==='tur'?'ENGLISH':'TÜRKÇE'}</span>{lang==='tur'?`'S SWITCH`:`'YE GEÇ`}</span>
        </div>
    </div>
  )
}

export default Header