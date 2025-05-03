import React from "react";
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Domů" },
  { href: "/produkty", label: "Produkty" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/kontakt", label: "Kontakt" },
];

function Footer() {
  return (
    <footer className="w-full border-t border-black/10 bg-white/70 backdrop-blur-md pt-10 pb-4 px-4 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="text-2xl font-bold tracking-tight select-none" style={{ fontFamily: 'Arimo, Arial, sans-serif' }}>
            MM
          </span>
          {/* Nav */}
          <nav>
            <ul className="flex flex-wrap gap-6 text-base font-medium justify-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline underline-offset-4 transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Contact */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-base">
            <a href="mailto:info@example.com" className="hover:underline underline-offset-4">info@example.com</a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline underline-offset-4">
              <FiInstagram className="inline-block text-lg" /> Instagram
            </a>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-black/10 my-2" />
        {/* Bottom row */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-black/50">
          <span>2025 všechna práva vyhrazena</span>
          <span>·</span>
          <Link href="/cookies" className="hover:underline">Cookies</Link>
          <span>·</span>
          <Link href="/gdpr" className="hover:underline">GDPR</Link>
          <span>·</span>
          <span>IČO: 12345678</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
