import { ToggleTheme } from "./ToggleTheme"



function Header() {
  return (
    <div className='flex justify-center md:justify-end font-bold font-inter text-[15px] text-[#777777] dark:text-[#D9D9D9]'>
        <ToggleTheme/>
        <span className="mx-3.5">|</span>
        <div className="ml-3 text-bold text-[15px]">
            <span><span className="text-[#E92577]">TÜRKÇE</span>'YE GEÇ</span>
        </div>
    </div>
  )
}

export default Header