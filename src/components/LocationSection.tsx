
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Clock, Phone, Car, Bus } from 'lucide-react';

const LocationSection = () => {
  const coordinates = {
    lat: -3.8734403,
    lng: -38.5281488
  };

  const openMaps = () => {
    const url = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`;
    window.open(url, '_blank');
  };

  const openNavigation = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
    window.open(url, '_blank');
  };

  return (
    <section id="localizacao" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gold-500/10 text-gold-700 border-gold-300">
            Nossa Localização
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como <span className="text-gradient-gold">Chegar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos localizados em Fortaleza - CE, em um local de fácil acesso 
            com estacionamento disponível.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <Card className="card-premium overflow-hidden">
            <div className="relative h-96 bg-gray-200">
              {/* Embedded Map - In real implementation, use Google Maps API */}
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2691234567!2d${coordinates.lng}!3d${coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTInMjQuNCJTIDM4wrAzMSc0MS4zIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-t-lg"
              ></iframe>

              {/* Map Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-gold-500" />
                  <div>
                    <div className="font-semibold text-gray-900">DGsales Barbearia</div>
                    <div className="text-sm text-gray-600">Fortaleza - CE</div>
                  </div>
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={openMaps}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Ver no Google Maps
                </Button>
                <Button
                  onClick={openNavigation}
                  className="flex-1 btn-gold"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Como Chegar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Location Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <Card className="card-premium">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-bold mb-4 flex items-center">
                  <MapPin className="mr-3 h-6 w-6 text-gold-500" />
                  Endereço
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Fortaleza - CE, 60874-805
                    </p>
                    <p className="text-gray-600">
                      Coordenadas: {coordinates.lat}, {coordinates.lng}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Aberto agora</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="card-premium">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-bold mb-4 flex items-center">
                  <Phone className="mr-3 h-6 w-6 text-gold-500" />
                  Contato
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      (85) 9270-6805
                    </p>
                    <p className="text-gray-600">WhatsApp disponível</p>
                  </div>
                  <Button
                    onClick={() => window.open('https://wa.me/5585927068055?text=Olá! Gostaria de saber mais sobre a localização da DGsales Barbearia.', '_blank')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Ligar via WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="card-premium">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-bold mb-4 flex items-center">
                  <Clock className="mr-3 h-6 w-6 text-gold-500" />
                  Horários
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">Segunda-feira</span>
                    <span className="text-gold-600 font-semibold">13:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">Terça a Sábado</span>
                    <span className="text-gold-600 font-semibold">08:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Domingo</span>
                    <span className="text-red-500 font-semibold">Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation */}
            <Card className="bg-gradient-dark text-white">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-bold mb-4">
                  Como Chegar
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <Car className="h-5 w-5 text-gold-500 flex-shrink-0" />
                    <div>
                      <div className="font-medium">De Carro</div>
                      <div className="text-gray-300">Estacionamento disponível na região</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Bus className="h-5 w-5 text-gold-500 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Transporte Público</div>
                      <div className="text-gray-300">Várias linhas de ônibus próximas</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Navigation className="h-5 w-5 text-gold-500 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Aplicativos</div>
                      <div className="text-gray-300">Uber, 99, inDrive disponíveis</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white border border-gold-200 rounded-xl p-8 shadow-lg">
            <h3 className="font-playfair text-2xl font-bold mb-4 text-gray-900">
              Primeira vez na DGsales?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Venha nos conhecer! Estamos localizados em um ponto de fácil acesso 
              em Fortaleza, com ambiente moderno e acolhedor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold"
              >
                Agendar Primeira Visita
              </Button>
              <Button
                onClick={openNavigation}
                variant="outline"
                className="border-gold-300 text-gold-700 hover:bg-gold-50"
              >
                <Navigation className="mr-2 h-4 w-4" />
                Ver Rota
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
