"use client";

import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useLang } from '@/lib/lang-context';
import { copy } from '@/lib/copy';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { lang, changeLang } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl">Juanma Canovas</div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="hover:text-accent-green transition-colors">{copy[lang].navbar.home}</a>
            <a href="#experience" className="hover:text-accent-green transition-colors">{copy[lang].navbar.experience}</a>
            <a href="#projects" className="hover:text-accent-green transition-colors">{copy[lang].navbar.projects}</a>
            <a href="#skills" className="hover:text-accent-green transition-colors">{copy[lang].navbar.skills}</a>
            <a href="#startup" className="hover:text-accent-green transition-colors">{copy[lang].navbar.startup}</a>
            <a href="#contact" className="hover:text-accent-green transition-colors">{copy[lang].navbar.contact}</a>
          </div>
          <div className="flex items-center space-x-4">
            <ToggleGroup type="single" value={lang} onValueChange={(value) => value && changeLang(value as 'es' | 'en')} aria-label={copy[lang].navbar.langToggle}>
              <ToggleGroupItem value="es" aria-label="Español">ES</ToggleGroupItem>
              <ToggleGroupItem value="en" aria-label="English">EN</ToggleGroupItem>
            </ToggleGroup>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">{copy[lang].navbar.themeToggle}</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#hero" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:text-accent-green transition-colors">{copy[lang].navbar.home}</a>
              <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:text-accent-green transition-colors">{copy[lang].navbar.experience}</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:text-accent-green transition-colors">{copy[lang].navbar.projects}</a>
              <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:text-accent-green transition-colors">{copy[lang].navbar.skills}</a>
              <a href="#startup" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:text-accent-green transition-colors">{copy[lang].navbar.startup}</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:text-accent-green transition-colors">{copy[lang].navbar.contact}</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;