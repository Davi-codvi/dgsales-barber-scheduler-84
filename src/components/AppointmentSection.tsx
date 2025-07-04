import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ExternalLink } from 'lucide-react';

const AppointmentSection = () => {
  const handleScheduleClick = () => {
    window.open('https://agendaservico.com/dgsalesbarbearia', '_blank');
  };

  return (
    <section id="agendamento" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gold-500/10 text-gold-700 border-gold-300">
            Agendamento Online
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Agende Seu <span className="text-gradient-gold">Horário</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Reserve seu horário de forma rápida e prática através do nosso sistema de agendamento online.
          </p>
        </div>

        {/* Agendamento Block */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl p-8 text-center shadow-lg border border-gold-200">
            <div className="mb-6">
              <Calendar className="mx-auto h-16 w-16 text-gold-600 mb-4" />
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-3">
                📅 Agendamento Online
              </h3>
              <p className="text-gray-700 text-lg">
                Clique no botão abaixo para acessar nossa agenda online e escolher o melhor horário para você!
              </p>
            </div>

            <Button
              onClick={handleScheduleClick}
              className="bg-gold-500 hover:bg-gold-600 text-black font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              size="lg"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Agendar Agora
            </Button>

            <p className="text-sm text-gray-600 mt-4">
              Atendemos de segunda a sábado • Horários flexíveis disponíveis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;