import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../contexts/theme";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const toggleTheme = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        flex items-center justify-center
        w-11 h-11
        rounded-full
        transition-all duration-300
        bg-gray-200
        hover:bg-gray-300
        dark:bg-gray-800
        dark:hover:bg-gray-700
        shadow-md
        hover:scale-105
        active:scale-95
      "
    >
      {themeMode === "light" ? (
        <FiMoon
          size={20}
          className="text-slate-700 transition-transform duration-300"
        />
      ) : (
        <FiSun
          size={20}
          className="text-yellow-400 transition-transform duration-300 rotate-180"
        />
      )}
    </button>
  );
}