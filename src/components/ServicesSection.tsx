
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Scissors, User, Sparkles, Star, Calendar } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  category: 'cortes' | 'barba' | 'especiais';
  icon: React.ReactNode;
  popular?: boolean;
  featured?: boolean;
}

const ServicesSection = () => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'cortes' | 'barba' | 'especiais'>('todos');

  const services: Service[] = [
    {
      id: 'corte-degrade',
      name: 'Corte Degradê',
      price: 'R$ 30',
      description: 'Corte moderno com transição suave e acabamento profissional',
      category: 'cortes',
      icon: <Scissors className="h-6 w-6" />,
      popular: true
    },
    {
      id: 'corte-social',
      name: 'Corte Social',
      price: 'R$ 25',
      description: 'Corte clássico e elegante para o dia a dia profissional',
      category: 'cortes',
      icon: <User className="h-6 w-6" />
    },
    {
      id: 'barba',
      name: 'Barba Completa',
      price: 'R$ 20',
      description: 'Aparar, modelar e finalizar com produtos premium',
      category: 'barba',
      icon: <User className="h-6 w-6" />
    },
    {
      id: 'corte-barba',
      name: 'Corte + Barba',
      price: 'R$ 45',
      priceNote: 'Valor pode variar conforme o estilo',
      description: 'Pacote completo para um visual impecável',
      category: 'especiais',
      icon: <Sparkles className="h-6 w-6" />,
      featured: true
    },
    {
      id: 'pe-cabelo-barba',
      name: 'Pé do Cabelo + Barba',
      price: 'R$ 25',
      description: 'Ajuste do contorno e barba para manter o visual',
      category: 'especiais',
      icon: <Scissors className="h-6 w-6" />
    },
    {
      id: 'corte-pigmentado',
      name: 'Corte Pigmentado',
      price: 'R$ 50',
      description: 'Corte com pigmentação para disfarçar calvície',
      category: 'especiais',
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      id: 'corte-luzes',
      name: 'Corte + Luzes/Reflexo',
      price: 'R$ 80',
      description: 'Corte com aplicação de luzes ou reflexos',
      category: 'especiais',
      icon: <Star className="h-6 w-6" />
    },
    {
      id: 'corte-platinado',
      name: 'Corte + Platinado',
      price: 'R$ 100',
      description: 'Corte com descoloração e tonalização platinada',
      category: 'especiais',
      icon: <Star className="h-6 w-6" />
    }
  ];

  const filteredServices = services.filter(service => 
    activeFilter === 'todos' || service.category === activeFilter
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gold-500/10 text-gold-700 border-gold-300">
            Nossos Serviços
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Serviços <span className="text-gradient-gold">Premium</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços masculinos com técnicas 
            modernas e produtos de alta qualidade
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={activeFilter === 'todos' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('todos')}
            className={activeFilter === 'todos' ? 'btn-gold' : 'border-gold-300 text-gold-700 hover:bg-gold-50'}
          >
            Todos os Serviços
          </Button>
          <Button
            variant={activeFilter === 'cortes' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('cortes')}
            className={activeFilter === 'cortes' ? 'btn-gold' : 'border-gold-300 text-gold-700 hover:bg-gold-50'}
          >
            Cortes
          </Button>
          <Button
            variant={activeFilter === 'barba' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('barba')}
            className={activeFilter === 'barba' ? 'btn-gold' : 'border-gold-300 text-gold-700 hover:bg-gold-50'}
          >
            Barba
          </Button>
          <Button
            variant={activeFilter === 'especiais' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('especiais')}
            className={activeFilter === 'especiais' ? 'btn-gold' : 'border-gold-300 text-gold-700 hover:bg-gold-50'}
          >
            Especiais
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className={`card-premium p-6 relative animate-fade-in ${
                service.featured ? 'ring-2 ring-gold-500 shadow-gold-500/20' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <Badge className="absolute -top-2 -right-2 bg-gold-500 text-black text-xs">
                  Popular
                </Badge>
              )}

              {/* Featured Badge */}
              {service.featured && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-gold text-black text-xs">
                  ⭐ Destaque
                </Badge>
              )}

              {/* Icon */}
              <div className="bg-gradient-gold p-3 rounded-full w-fit mb-4 text-black">
                {service.icon}
              </div>

              {/* Service Info */}
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                {service.name}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-gradient-gold mb-1">
                  {service.price}
                </div>
                {service.priceNote && (
                  <p className="text-xs text-gray-500 italic">
                    {service.priceNote}
                  </p>
                )}
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => scrollToSection('agendamento')}
                className="w-full btn-gold group"
                size="sm"
              >
                <Calendar className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Agendar Este Serviço
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-dark rounded-xl p-8 text-white">
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-gray-300 mb-6">
              Entre em contato conosco e vamos criar o visual perfeito para você
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('agendamento')}
                className="btn-gold"
              >
                Agendar Consulta
              </Button>
              <Button
                variant="outline"
                className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black"
                onClick={() => window.open('https://wa.me/5585927068055?text=Olá! Gostaria de saber mais sobre os serviços da DGsales Barbearia.', '_blank')}
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
