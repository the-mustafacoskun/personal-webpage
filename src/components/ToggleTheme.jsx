import { Moon} from 'lucide-react'
import { useEffect, useState } from 'react'

export const ToggleTheme=()=> {
    const [isDark,setIsDark]=useState(true);
    useEffect(()=>{
        isDark?document.documentElement.classList.add('dark'):document.documentElement.classList.remove('dark');
    },[isDark])

  return (
    <div className='flex items-center gap-3'>
        <button
        onClick={()=>setIsDark(!isDark)}
        className='relative rounded-full shrink-0 p-1 transition-all duration-500 w-14 h-6 bg-pink-600 dark:bg-darkMain items-center'
        >
        <div className={`w-4 h-4 rounded-full bg-[#FFE082] dark:bg-darkMain flex items-center justify-center transition-transform duration-500
            ${isDark ? 'translate-x-0' : 'translate-x-8'}`}>
            <Moon className="w-4 h-4 text-[#FFE86E] fill-[#FFE86E]" strokeWidth={3}/>
        </div>
        </button>
        <span>{isDark?'LIGHT MODE':'DARK MODE'}</span>
    </div>
  )
}

