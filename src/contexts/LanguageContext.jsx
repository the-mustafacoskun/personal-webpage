import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { data } from "../data";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext();

export default function LanguageContextProvider({ children }) {
  const [lang, setLang] = useLocalStorage("language", "tur");

  const langData = data[lang];
  const toggleLanguage = () => {
    const nextLang = lang === "tur" ? "en" : "tur";
    setLang(nextLang);
    toast.success(
      nextLang === "tur"
        ? "Dil Türkçe olarak değiştirildi"
        : "Language switched to English",
      {
        position: "top-left",
      },
    );
  };
  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLanguage, langData }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
