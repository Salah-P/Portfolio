"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const handleScroll = () => {
      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 160 && rect.bottom >= 160) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#07070b]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#" className="group flex items-center gap-3" onClick={closeMenu}>
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 font-black text-white shadow-lg shadow-violet-500/25">
            SP
          </div>

          <div>
            <p className="text-sm font-bold leading-none text-white">Salah</p>
            <p className="mt-1 text-xs text-zinc-400">AI & ML Portfolio</p>
          </div>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/resume/Salah_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-violet-400/50 hover:text-white"
          >
            <Download size={16} />
            Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-violet-200"
          >
            <Mail size={16} />
            Contact
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#07070b]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-2 px-5 py-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-3 grid gap-3 border-t border-white/10 pt-4">
                <a
                  href="/resume/Salah_CV.pdf"
                  download
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-zinc-300"
                >
                  <Download size={16} />
                  Download Resume
                </a>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-black"
                >
                  <Mail size={16} />
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
