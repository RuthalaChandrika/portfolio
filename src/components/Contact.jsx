import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Copy, Check, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('chandrikaruthala@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      // Fallback: no-op
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "chandrikaruthala@gmail.com",
      href: "mailto:chandrikaruthala@gmail.com",
      color: "text-red-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/chandrikaruthala",
      href: "https://www.linkedin.com/in/chandrikaruthala",
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/chandrikaruthala",
      href: "https://github.com/chandrikaruthala",
      color: "text-slate-200"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Visakhapatnam, Andhra Pradesh, India",
      href: null,
      color: "text-teal-400"
    }
  ];

  return (
    <section id="contact" className="py-20 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold text-teal-400 dark:text-teal-400 light:text-teal-700 bg-teal-950/40 dark:bg-teal-950/40 light:bg-teal-50 border border-teal-500/20 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Have a data problem to solve? Let's connect.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl mx-auto">
            I am open to discussing data analytics, business intelligence, AI-powered analytics opportunities, internships, and collaborative projects. Feel free to reach out.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {contactLinks.map((link, idx) => {
            const Icon = link.icon;
            const isExternal = link.href && link.href.startsWith('http');
            const Wrapper = link.href ? 'a' : 'div';
            const extraProps = link.href
              ? {
                  href: link.href,
                  ...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                }
              : {};

            return (
              <Wrapper
                key={idx}
                {...extraProps}
                className={`flex items-start gap-3.5 p-4 rounded-xl bg-navy-900/50 dark:bg-navy-900/50 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-teal-500/30 transition-all duration-200 ${
                  link.href ? 'cursor-pointer' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                  <Icon className={`w-4 h-4 ${link.color}`} />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-500 light:text-slate-400 mb-0.5">
                    {link.label}
                  </span>
                  <span className="block text-sm font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 truncate">
                    {link.value}
                  </span>
                </div>
              </Wrapper>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:chandrikaruthala@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-teal-500/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-accent"
          >
            <Send className="w-4 h-4" />
            <span>Send an Email</span>
          </a>

          <button
            onClick={handleCopyEmail}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700/80 dark:border-slate-800 light:border-slate-300 bg-navy-900/60 dark:bg-navy-900/60 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold text-sm transition-all duration-200 hover:border-teal-500/40"
          >
            {emailCopied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-teal-400" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
