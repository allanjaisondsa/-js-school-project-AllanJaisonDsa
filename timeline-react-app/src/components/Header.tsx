import { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark", !dark);
  };

  return (
    <header className="header">
      <h1>Tech Timeline</h1>

      <button
        onClick={toggleTheme}
        aria-pressed={dark}
        aria-label="Toggle dark mode"
        className="theme-toggle"
      >
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}
