// app/components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "experience", "contact"];
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
            break;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-2xl font-extrabold text-white tracking-wide">Mahamed</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition ${
                active === link.id ? "text-purple-300 underline underline-offset-4" : "hover:text-purple-200"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Mahamed_Nor_Resume.pdf"
            download
            className="px-4 py-2 bg-purple-600 rounded-lg shadow hover:bg-purple-500 transition font-semibold"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 px-6 py-4 space-y-4 text-white">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`block transition ${
                active === link.id ? "text-purple-300 underline underline-offset-4" : "hover:text-purple-200"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Mahamed_Nor_Resume.pdf"
            download
            className="block px-4 py-2 bg-purple-600 rounded-lg shadow hover:bg-purple-500 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
