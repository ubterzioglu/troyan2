'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/projeler', label: 'Projeler' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  const textColor = isScrolled || !isHome
    ? 'text-charcoal hover:text-bronze'
    : 'text-white/90 hover:text-white';

  const logoColor = isScrolled || !isHome ? 'text-charcoal' : 'text-white';
  const logoSubColor = isScrolled || !isHome ? 'text-bronze' : 'text-white/70';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHome
          ? 'bg-cream/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className={`font-display transition-colors duration-300 ${logoColor}`}>
              <span className="text-2xl md:text-3xl font-bold tracking-tight">TROYAN</span>
              <span className={`block text-xs md:text-sm tracking-[0.3em] uppercase transition-colors duration-300 ${logoSubColor}`}>
                İnşaat
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 ${textColor} ${
                  pathname === link.href ? 'text-bronze!' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/iletisim" className="btn-bronze text-sm py-2.5 px-6">
              Teklif Al
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors duration-300 ${
              isScrolled || !isHome ? 'text-charcoal' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-current/10">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 ${textColor}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/iletisim"
                className="btn-bronze text-sm py-2.5 px-6 self-start mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Teklif Al
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
