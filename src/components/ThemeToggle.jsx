import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative p-2 rounded-xl border border-slate-700/60 dark:border-slate-800 light:border-slate-300 bg-slate-800/40 dark:bg-navy-900/60 light:bg-white hover:bg-slate-700/40 dark:hover:bg-navy-800 light:hover:bg-slate-100 text-slate-300 light:text-slate-600 hover:text-teal-400 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-cyan-600 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
