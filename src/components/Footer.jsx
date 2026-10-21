import React from 'react';
import { Linkedin, Github, Heart, ArrowUp } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80 bg-navy-950 dark:bg-navy-950 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-3">
            <a href="#home" className="inline-flex items-center gap-3 group" aria-label="Back to top">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 border border-teal-500/30 flex items-center justify-center text-teal-400 font-extrabold tracking-tight text-lg group-hover:border-teal-400 transition-all duration-300">
                CR
              </div>
              <div>
                <span className="block text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">Chandrika Ruthala</span>
                <span className="block text-xs text-teal-400 dark:text-teal-400 light:text-teal-600 font-medium">Data Analyst</span>
              </div>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-500 light:text-slate-500 leading-relaxed max-w-sm">
              Turning data into meaningful decisions through analytics, business intelligence, and emerging AI technologies.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">Navigation</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-teal-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Back to Top */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/chandrikaruthala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-navy-900/60 dark:bg-navy-900/60 light:bg-white text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/chandrikaruthala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-navy-900/60 dark:bg-navy-900/60 light:bg-white text-slate-400 hover:text-slate-100 hover:border-slate-500/40 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#home"
                className="p-2.5 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-navy-900/60 dark:bg-navy-900/60 light:bg-white text-slate-400 hover:text-teal-400 hover:border-teal-500/40 transition-all"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 dark:text-slate-500 light:text-slate-500">
            © {currentYear} Chandrika Ruthala. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500 light:text-slate-500 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-rose-400" /> and data-driven thinking.
          </p>
        </div>

      </div>
    </footer>
  );
}
