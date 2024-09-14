import React, { useEffect } from 'react'
import lightButton from "../../assets/website/light-mode-button.png"
import darkButton from "../../assets/website/dark-mode-button.png"

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // Apply the theme to the document root when the component mounts or when the theme changes
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save the current theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className='relative'>
      {/* Light Mode Button */}
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={lightButton}
        alt="Switch to light mode"
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
      />

      {/* Dark Mode Button */}
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        src={darkButton}
        alt="Switch to dark mode"
        className={`w-12 cursor-pointer ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        } transition-all duration-300`}
      />
    </div>
  );
}

export default DarkMode;
