import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-neon/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-2">
          <div className="w-8 h-8 border border-neon flex items-center justify-center text-neon font-mono font-bold text-sm group-hover:bg-neon group-hover:text-dark-900 transition-all duration-300">
            P
          </div>
          <span className="text-white font-semibold tracking-tight hidden sm:block">
            {personalInfo.name.split(' ')[0]}
            <span className="text-neon">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-400 hover:text-neon text-sm font-mono uppercase tracking-widest transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            className="border border-neon text-neon px-4 py-2 text-xs font-mono uppercase tracking-widest hover:bg-neon hover:text-dark-900 transition-all duration-300 hover:shadow-neon"
          >
            Resume
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'} className="md:hidden text-neon">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark-900/98 backdrop-blur-lg border-t border-neon/10 animate-slide-up">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-neon text-lg font-mono uppercase tracking-widest transition-colors"
              >
                <span className="text-neon mr-2">//</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}