import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../contexts/theme.jsx";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const toggleTheme = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={
        themeMode === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className={`
        group
        flex items-center justify-center
        w-11 h-11
        rounded-full
        shadow-md
        transition-all duration-300
        hover:scale-105
        active:scale-95
        ${
          themeMode === "dark"
            ? "bg-black hover:bg-gray-600"
            : "bg-white hover:bg-gray-200"
        }
      `}
    >
      {themeMode === "dark" ? (
        <FiSun
          size={20}
          className="text-yellow-400 transition-transform duration-500 ease-in-out group-hover:rotate-90"
        />
      ) : (
        <FiMoon
          size={20}
          className="text-slate-700 transition-transform duration-500 ease-in-out group-hover:rotate-180"
        />
      )}
    </button>
  );
}