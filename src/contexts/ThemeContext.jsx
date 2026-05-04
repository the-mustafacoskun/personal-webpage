import { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  // Başlangıç değerini true (dark) olarak ayarlamışsın
  const [isDark, setIsDark] = useLocalStorage("theme", true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    // 1. Mevcut durumun tersini hesapla
    const nextStatus = !isDark;
    
    // 2. State'i güncelle
    setIsDark(nextStatus);

    // 3. Bildirimi fırlat
    toast.info(
      nextStatus ? 'Dark Mode Activated 🌙' : 'Light Mode Activated ☀️', 
      {
        icon: false,
        theme: nextStatus ? "dark" : "light", // Toast rengi de temayla uyumlu olur
        position: "top-left"
      }
    );
  };

  return (
    // Provider içinde sadece state'i değil, fonksiyonu da dışarı açmalısın
    <ThemeContext.Provider value={{ isDark, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}