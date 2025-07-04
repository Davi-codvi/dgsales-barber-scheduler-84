
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os serviços da DGsales Barbearia.";
    const phoneNumber = "5585992706805";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="mb-4 animate-fade-in">
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80 max-w-[calc(100vw-3rem)]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center mr-2">
                  <span className="text-black font-bold text-sm">DG</span>
                </div>
                DGsales Barbearia
              </h3>
              <button
                onClick={toggleExpanded}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">
              Olá! 👋 Como podemos te ajudar hoje?
            </p>
            
            <div className="space-y-2">
              <button
                onClick={() => {
                  const message = "Olá! Gostaria de agendar um horário na DGsales Barbearia.";
                  window.open(`https://wa.me/5585992706805?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
              >
                📅 Agendar um horário
              </button>
              
              <button
                onClick={() => {
                  const message = "Olá! Gostaria de saber mais sobre os preços dos serviços.";
                  window.open(`https://wa.me/5585992706805?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
              >
                💰 Ver preços dos serviços
              </button>
              
              <button
                onClick={() => {
                  const message = "Olá! Gostaria de saber sobre a localização da barbearia.";
                  window.open(`https://wa.me/5585992706805?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
              >
                📍 Localização e horários
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
              >
                💬 Outras dúvidas
              </button>
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Respondemos rapidamente!</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div className="relative">
        <button
          onClick={isExpanded ? handleWhatsAppClick : toggleExpanded}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 animate-pulse-gold"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </button>

        {/* Notification Dots */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">!</span>
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      </div>

      {/* Tooltip */}
      {!isExpanded && (
        <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Fale conosco no WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
