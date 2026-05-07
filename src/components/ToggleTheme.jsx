import { Moon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const ToggleTheme = () => {
  const { handleToggleTheme, isDark } = useContext(ThemeContext);
  return (
    <div
      className="flex items-center gap-3 w-44 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group"
      onClick={handleToggleTheme}
      onKeyDown={(e) => e.key === "Enter" || e.key === " "}
      tabIndex={0} // Klavyeden erişim için önemli
      data-cy="theme-toggle-button"
    >
      <button className="relative rounded-full shrink-0 p-1 transition-all duration-500 w-14 h-6 bg-pink-600 dark:bg-black items-center">
        <div
          className={`w-4 h-4 rounded-full bg-[#FFE082] dark:bg-black flex items-center justify-center transition-transform duration-500
            ${isDark ? "translate-x-0" : "translate-x-8"}`}
        >
          <Moon
            className="w-4 h-4 text-[#FFE86E] fill-[#FFE86E]"
            strokeWidth={3}
          />
        </div>
      </button>
      <span>{isDark ? "LIGHT MODE" : "DARK MODE"}</span>
    </div>
  );
};
