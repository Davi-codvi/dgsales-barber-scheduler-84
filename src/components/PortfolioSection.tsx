import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Eye, Scissors, Award, Star } from 'lucide-react';

interface PortfolioItem {
  id: string;
  image: string;
  title: string;
  description: string;
  category: 'degrade' | 'social' | 'barba' | 'especial';
}

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'degrade' | 'social' | 'barba' | 'especial'>('todos');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      image: '/lovable-uploads/d8659bfe-785d-420b-8c82-62b3211892f7.png',
      title: 'Degradê com Design Artístico',
      description: 'Corte degradê com desenho lateral personalizado e acabamento premium',
      category: 'especial'
    },
    {
      id: '2',
      image: '/lovable-uploads/cd92776c-e351-4b87-bac7-1e3b3d0115d0.png',
      title: 'Degradê Texturizado Premium',
      description: 'Estilo moderno com textura natural e transição perfeita',
      category: 'degrade'
    },
    {
      id: '3',
      image: '/lovable-uploads/1ef80206-748b-4c46-aa0c-d2be4bcf2ed2.png',
      title: 'Corte Social Clássico',
      description: 'Estilo clean e profissional com acabamento impecável',
      category: 'social'
    },
    {
      id: '4',
      image: '/lovable-uploads/70b4672c-5b8a-44f7-a1f2-bf70536c27ea.png',
      title: 'Degradê Lateral Suave',
      description: 'Transição lateral gradual com topo volumoso',
      category: 'degrade'
    },
    {
      id: '5',
      image: '/lovable-uploads/4c9b9b12-f2d8-41df-87ac-9e4fbfc3aa52.png',
      title: 'Degradê Moderno Preciso',
      description: 'Corte contemporâneo com linhas definidas e acabamento perfeito',
      category: 'degrade'
    },
    {
      id: '6',
      image: '/lovable-uploads/86ef221c-6b0d-4cd1-bb12-3d081e1ae255.png',
      title: 'Combo Premium: Corte + Barba',
      description: 'Serviço completo com corte degradê e barba modelada profissionalmente',
      category: 'barba'
    },
    {
      id: '7',
      image: '/lovable-uploads/da9af2b6-cb92-44c6-89bc-6b4b02938f7f.png',
      title: 'Degradê com Risco Lateral',
      description: 'Design exclusivo com risco lateral e degradê preciso',
      category: 'especial'
    },
    {
      id: '8',
      image: '/lovable-uploads/bbbdf962-45a2-4586-9a36-b94ac94634a9.png',
      title: 'Degradê Clássico Refinado',
      description: 'Estilo atemporal com transição suave e acabamento elegante',
      category: 'degrade'
    }
  ];

  const filteredItems = portfolioItems.filter(item => 
    activeFilter === 'todos' || item.category === activeFilter
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gold-500/10 text-gold-700 border-gold-300">
            <Award className="h-4 w-4 mr-2" />
            Nosso Portfólio
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trabalhos <span className="text-gradient-gold">Realizados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos nossos melhores trabalhos e veja a qualidade 
            que oferecemos aos nossos clientes
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={activeFilter === 'todos' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('todos')}
            className={activeFilter === 'todos' ? 'btn-gold' : 'border-gold-300 text-gold-700 hover:bg-gold-50'}
          >
            Todos
          </Button>
          <Button
            variant={activeFilter === 'degrade' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('degrade')}
            className={activeFilter === 'degrade' ? 'btn-gold' : 'border-gold-300 text-gold-700 hover:bg-gold-50'}
          >
            Degradê
          </Button>
          <Button
            variant={activeFilter === 'social' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('social')}
            className={activeFilter === 'social' ? 'btn-gold' : 'border-gold-300 text-gold-700 hover:bg-gold-50'}
          >
            Social
          </Button>
          <Button
            variant={activeFilter === 'barba' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('barba')}
            className={activeFilter === 'barba' ? 'btn-gold' : 'border-gold-300 text-gold-700 hover:bg-gold-50'}
          >
            Barba
          </Button>
          <Button
            variant={activeFilter === 'especial' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('especial')}
            className={activeFilter === 'especial' ? 'btn-gold' : 'border-gold-300 text-gold-700 hover:bg-gold-50'}
          >
            Especiais
          </Button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative card-premium overflow-hidden animate-fade-in hover-scale cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <AspectRatio ratio={4/5}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                    loading="lazy"
                  />
                </AspectRatio>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-gold-500 text-black p-3 rounded-full mb-4 shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="h-6 w-6" />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">Ver Detalhes</p>
                  <p className="text-gold-200 text-sm">Clique para ampliar</p>
                </div>

                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-gold-500/90 text-black border-none font-semibold backdrop-blur-sm">
                  {item.category === 'degrade' && '✂️ Degradê'}
                  {item.category === 'social' && '👔 Social'}
                  {item.category === 'barba' && '🧔 Barba'}
                  {item.category === 'especial' && '⭐ Especial'}
                </Badge>

                {/* Floating Action Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <Scissors className="h-4 w-4 text-gold-600" />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white group-hover:bg-gold-50/50 transition-colors duration-300">
                <h3 className="font-playfair text-lg font-bold text-gray-900 mb-2 group-hover:text-gold-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {/* Progress Bar Animation */}
                <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gold-400 to-gold-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-dark rounded-xl p-8 text-white mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gradient-gold mb-2">500+</div>
              <div className="text-gray-300">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient-gold mb-2">4</div>
              <div className="text-gray-300">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient-gold mb-2">4.9</div>
              <div className="text-gray-300 flex items-center justify-center gap-1">
                <Star className="h-4 w-4 fill-gold-500 text-gold-500" />
                Avaliação Média
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient-gold mb-2">100%</div>
              <div className="text-gray-300">Satisfação Garantida</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
            Gostou do que viu?
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Agende seu horário e tenha um visual impecável como nossos clientes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('agendamento')}
              className="btn-gold"
              size="lg"
            >
              <Scissors className="mr-2 h-5 w-5" />
              Agendar Meu Corte
            </Button>
            <Button
              variant="outline"
              className="border-gold-500 text-gold-700 hover:bg-gold-50"
              size="lg"
              onClick={() => window.open('https://wa.me/5585992706805?text=Olá! Vi o portfólio da DGsales Barbearia e gostaria de agendar um horário.', '_blank')}
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Modal Melhorado para imagem ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] animate-scale-in">
            <img
              src={selectedImage}
              alt="Trabalho ampliado"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Botões de ação */}
            <div className="absolute top-4 right-4 flex gap-2">
              <Button
                onClick={() => window.open(selectedImage, '_blank')}
                className="bg-gold-500/90 hover:bg-gold-600 text-black backdrop-blur-sm"
                size="sm"
              >
                <Eye className="h-4 w-4 mr-2" />
                Abrir Original
              </Button>
              <Button
                onClick={() => setSelectedImage(null)}
                className="bg-black/70 hover:bg-black/90 text-white backdrop-blur-sm"
                size="sm"
              >
                ✕
              </Button>
            </div>

            {/* Info do trabalho */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-playfair text-lg font-bold mb-1">
                    {portfolioItems.find(item => item.image === selectedImage)?.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {portfolioItems.find(item => item.image === selectedImage)?.description}
                  </p>
                </div>
                <Button
                  onClick={() => scrollToSection('agendamento')}
                  className="btn-gold ml-4"
                  size="sm"
                >
                  <Scissors className="h-4 w-4 mr-2" />
                  Quero Este Corte
                </Button>
              </div>
            </div>

            {/* Navegação entre imagens */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = filteredItems.findIndex(item => item.image === selectedImage);
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
                  setSelectedImage(filteredItems[prevIndex].image);
                }}
                className="bg-black/70 hover:bg-black/90 text-white backdrop-blur-sm rounded-full"
                size="sm"
              >
                ←
              </Button>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = filteredItems.findIndex(item => item.image === selectedImage);
                  const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
                  setSelectedImage(filteredItems[nextIndex].image);
                }}
                className="bg-black/70 hover:bg-black/90 text-white backdrop-blur-sm rounded-full"
                size="sm"
              >
                →
              </Button>
            </div>

            {/* Indicador de posição */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
              {filteredItems.findIndex(item => item.image === selectedImage) + 1} / {filteredItems.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
