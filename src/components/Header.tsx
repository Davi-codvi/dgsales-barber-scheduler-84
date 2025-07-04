
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-dark text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3 text-gold-500" />
                <span>(85) 9270-6805</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3 text-gold-500" />
                <span>Fortaleza - CE</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3 text-gold-500" />
              <span>Seg: 13h-19h | Ter-Sáb: 8h-20h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-gold p-2 rounded-lg">
                <div className="text-black font-bold text-xl">DG</div>
              </div>
              <div>
                <h1 className="font-playfair text-2xl font-bold text-gray-900">
                  DGsales
                </h1>
                <p className="text-xs text-gold-600 uppercase tracking-wide">
                  Barbearia Premium
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('agendamento')}
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
              >
                Agendar
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('localizacao')}
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
              >
                Localização
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection('agendamento')}
                className="btn-gold animate-pulse-gold"
              >
                AGENDAR HORÁRIO
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gold-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 animate-fade-in">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-left text-gray-700 hover:text-gold-600 transition-colors font-medium py-2"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-left text-gray-700 hover:text-gold-600 transition-colors font-medium py-2"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection('agendamento')}
                  className="text-left text-gray-700 hover:text-gold-600 transition-colors font-medium py-2"
                >
                  Agendar
                </button>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-left text-gray-700 hover:text-gold-600 transition-colors font-medium py-2"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection('localizacao')}
                  className="text-left text-gray-700 hover:text-gold-600 transition-colors font-medium py-2"
                >
                  Localização
                </button>
                <Button
                  onClick={() => scrollToSection('agendamento')}
                  className="btn-gold mt-4"
                >
                  AGENDAR HORÁRIO
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
