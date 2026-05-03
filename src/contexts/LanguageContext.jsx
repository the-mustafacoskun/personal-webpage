import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';
import { data } from '../data';

export const LanguageContext = createContext();

export default function LanguageContextProvider({children}) {
    const [lang,setLang] = useLocalStorage('language','tur');

    const langData=data[lang];
    const toggleLanguage =()=>{
        setLang((prev)=>(prev==='tur'?'en':'tur'))
    };
    return (
        <LanguageContext.Provider value={{lang,setLang,toggleLanguage,langData}}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage=()=>useContext(LanguageContext);