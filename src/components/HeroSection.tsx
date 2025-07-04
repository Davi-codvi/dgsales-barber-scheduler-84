
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Users, Calendar } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-10"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6 animate-fade-in">
            {/* Badge */}
            <Badge className="bg-gold-500/20 text-gold-300 border-gold-500/30 px-4 py-2 text-sm font-medium">
              <Award className="h-4 w-4 mr-2" />
              4 Anos de Experiência
            </Badge>

            {/* Main Heading */}
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transformando
              <span className="text-gradient-gold block">
                Seu Visual
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Cortes premium, barba profissional e atendimento especializado 
              em <span className="text-gold-400 font-semibold">Fortaleza</span>
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-gold-500" />
                <span className="text-lg font-semibold">500+ Clientes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-gold-500" />
                <span className="text-lg font-semibold">4.9 Estrelas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-gold-500" />
                <span className="text-lg font-semibold">Seg-Sáb</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('agendamento')}
                className="btn-gold text-lg px-8 py-4 animate-pulse-gold"
                size="lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                AGENDAR AGORA
              </Button>
              
              <Button
                onClick={() => scrollToSection('servicos')}
                variant="outline"
                className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black text-lg px-8 py-4"
                size="lg"
              >
                Ver Serviços
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Agendamento Online</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
                <span>Profissionais Qualificados</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:flex justify-center items-center">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-gold rounded-full flex items-center justify-center relative animate-scale-in">
                {/* Inner Content */}
                <div className="text-black text-center">
                  <div className="text-6xl md:text-8xl font-playfair font-bold">DG</div>
                  <div className="text-lg md:text-xl font-semibold tracking-wider">BARBEARIA</div>
                  <div className="text-sm opacity-80 mt-2">PREMIUM</div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">✂️</span>
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">💈</span>
                  </div>
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">🪒</span>
                  </div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">👨</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 bg-gold-500/20 backdrop-blur-sm rounded-lg p-4 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                <div className="text-gold-300 text-center">
                  <div className="font-bold text-2xl">4</div>
                  <div className="text-xs">ANOS</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gold-500/20 backdrop-blur-sm rounded-lg p-4 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
                <div className="text-gold-300 text-center">
                  <div className="font-bold text-xl">R$ 25</div>
                  <div className="text-xs">A PARTIR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="text-center">
          <div className="w-1 h-8 bg-gold-500 mx-auto mb-2 rounded-full"></div>
          <p className="text-xs">Role para baixo</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
