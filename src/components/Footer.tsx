import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  MessageCircle,
  Star,
  Award,
  Scissors
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Corte Degradê',
    'Corte Social', 
    'Barba Completa',
    'Corte + Barba',
    'Corte Pigmentado',
    'Corte + Luzes'
  ];

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Agendar', href: '#agendamento' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Localização', href: '#localizacao' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-gold p-3 rounded-lg">
                <div className="text-black font-bold text-2xl">DG</div>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold">DGsales</h3>
                <p className="text-gold-400 text-sm uppercase tracking-wide">
                  Barbearia Premium
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              4 anos transformando o visual masculino em Fortaleza com qualidade, 
              profissionalismo e atendimento diferenciado.
            </p>

            {/* Stats */}
            <div className="flex space-x-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">4</div>
                <div className="text-xs text-gray-400">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">500+</div>
                <div className="text-xs text-gray-400">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">4.9</div>
                <div className="text-xs text-gray-400">Estrelas</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <button 
                onClick={() => window.open('https://www.instagram.com/dg.sales/profilecard/?igsh=NHM4N2Jya2xmb3dl', '_blank')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-2 rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button 
                onClick={() => window.open('https://wa.me/5585992706805', '_blank')}
                className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-bold mb-6 text-gold-400">
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-gold-400 transition-colors flex items-center group"
                  >
                    <div className="w-1 h-1 bg-gold-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-xl font-bold mb-6 text-gold-400">
              Nossos Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300 flex items-center">
                  <Scissors className="h-3 w-3 text-gold-500 mr-3 flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
            <Button
              onClick={() => scrollToSection('#servicos')}
              className="mt-4 btn-gold w-full"
              size="sm"
            >
              Ver Todos os Serviços
            </Button>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-xl font-bold mb-6 text-gold-400">
              Contato & Localização
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Fortaleza - CE</p>
                  <p className="text-gray-400 text-sm">CEP: 60874-805</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">(85) 99270-6805</p>
                  <p className="text-gray-400 text-sm">WhatsApp disponível</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Seg: 13h-19h</p>
                  <p className="text-gray-300 text-sm">Ter-Sáb: 8h-20h</p>
                  <p className="text-red-400 text-sm">Dom: Fechado</p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => window.open('https://wa.me/5585992706805?text=Olá! Gostaria de agendar um horário na DGsales Barbearia.', '_blank')}
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white"
              size="sm"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Agendar via WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
            <div className="flex items-center space-x-2 text-gold-400">
              <Award className="h-5 w-5" />
              <span className="text-sm">4 Anos de Experiência</span>
            </div>
            <div className="flex items-center space-x-2 text-gold-400">
              <Star className="h-5 w-5" />
              <span className="text-sm">Avaliação 4.9 Estrelas</span>
            </div>
            <div className="flex items-center space-x-2 text-gold-400">
              <Scissors className="h-5 w-5" />
              <span className="text-sm">Profissionais Qualificados</span>
            </div>
            <div className="flex items-center space-x-2 text-gold-400">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm">Agendamento Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} DGsales Barbearia. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Desenvolvido com ❤️ para a melhor experiência</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
