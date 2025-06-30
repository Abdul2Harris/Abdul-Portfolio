import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light")
      setIsDark(false)
    }
  }, []);

  const toggleChange = () => {
    if (isDark) {
      // Remove dark mode by removing 'dark' class from document
      document.documentElement.classList.remove("dark");
      // Save the current theme as light in localStorage
      localStorage.setItem("theme", "light");
      // Update component state to reflect light mode
      setIsDark(false);
    } else {
      // Enable dark mode by adding 'dark' class to document
      document.documentElement.classList.add("dark");
      // Save the current theme as dark in localStorage
      localStorage.setItem("theme", "dark");
      // Update component state to reflect dark mode
      setIsDark(true);
    }
  };

  return (
    <button onClick={toggleChange} className={cn('fixed top-5 right-5 z-50 rounded-full p-2 tranition-colors duration-300', "focus:outline-hidden")}>
      {isDark ? (
        <Sun className="w-6 h-6 text-amber-400" />
      ) : (
        <Moon className="w-6 h-6 text-blue-500" />
      )}
    </button>
  );
};
