"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, HardHat } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Layanan", href: "/#services" },
    { name: "Portofolio", href: "/#portfolio" },
    { name: "Galeri", href: "/gallery" },
    { name: "Testimoni", href: "/#testimonials" },
  ];

  return (
  <nav
  className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl rounded-2xl ${
    isScrolled
      ? "bg-[#111111]/65 backdrop-blur-xl border border-white/10 shadow-2xl py-2.5 md:py-3"
      : "bg-[#111111]/45 backdrop-blur-xl border border-white/5 py-3 md:py-4"
  }`}
>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="group">
            <Logo variant={isScrolled ? "dark" : "light"} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium text-sm transition-all duration-300 ${
  isScrolled
    ? "text-[#1A1A1A] hover:text-[#D4A017]"
    : "text-white hover:text-[#D4A017]"
}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/#contact"
              className="bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg text-sm"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-600 font-medium py-2 px-4 hover:bg-slate-50 hover:text-accent rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-hover text-white px-4 py-3 rounded-md font-medium text-center shadow-sm transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Konsultasi Gratis
          </a>
        </div>
      )}
    </nav>
  );
}
