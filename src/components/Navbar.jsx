import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI Learning', href: '#ai-learning' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/85 dark:bg-navy-950/85 light:bg-white/90 backdrop-blur-md border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/80 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* CR Monogram Brand */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent rounded-lg p-1"
            aria-label="Chandrika Ruthala Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 border border-teal-500/30 flex items-center justify-center text-teal-400 font-extrabold tracking-tight text-lg shadow-sm group-hover:border-teal-400 group-hover:shadow-subtle-glow transition-all duration-300">
              CR
            </div>
            <div className="hidden sm:block text-left">
              <span className="block text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight leading-none">
                Chandrika Ruthala
              </span>
              <span className="block text-xs text-teal-400 dark:text-teal-400 light:text-teal-600 font-medium mt-1">
                Data Analyst
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-teal-400 dark:text-teal-400 light:text-teal-600 bg-teal-950/30 dark:bg-teal-950/30 light:bg-teal-50 font-semibold'
                      : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-100 dark:hover:text-slate-100 light:hover:text-slate-900 hover:bg-slate-800/40 dark:hover:bg-navy-800/50 light:hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Toggle */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 dark:text-teal-400 light:text-teal-700 border border-teal-500/30 hover:border-teal-400 transition-all duration-200 shadow-sm"
              aria-label="Download Resume (PDF)"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded-xl border border-slate-800 bg-navy-900/60 text-slate-300 hover:text-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/95 dark:bg-navy-950/95 light:bg-white/95 backdrop-blur-xl border-b border-slate-800 dark:border-slate-800 light:border-slate-200 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-teal-400 dark:text-teal-400 light:text-teal-600 bg-teal-950/30 font-semibold'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-teal-400 hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex flex-col gap-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-400 dark:text-teal-400 light:text-teal-700 text-sm font-semibold"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
