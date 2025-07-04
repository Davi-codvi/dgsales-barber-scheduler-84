
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Star, Trophy, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: <Clock className="h-8 w-8" />,
      number: "4",
      label: "Anos de Experiência",
      description: "Desde 2020 oferecendo serviços de qualidade"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "500+",
      label: "Clientes Satisfeitos",
      description: "Transformando visuais masculinos"
    },
    {
      icon: <Star className="h-8 w-8" />,
      number: "4.9",
      label: "Avaliação Média",
      description: "Baseado no feedback dos clientes"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      number: "100%",
      label: "Dedicação",
      description: "Comprometidos com a excelência"
    }
  ];

  const qualifications = [
    "Curso especializado em cortes masculinos",
    "Técnicas modernas de barbear",
    "Colorimetria e pigmentação capilar",
    "Atendimento ao cliente premium",
    "Produtos profissionais de alta qualidade",
    "Ambiente higienizado e seguro"
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-dark text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gold-500/20 text-gold-300 border-gold-500/30">
            Nossa História
          </Badge>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Sobre a <span className="text-gradient-gold">DGsales</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Com 4 anos de experiência no mercado, a DGsales Barbearia se consolidou como 
            referência em cortes masculinos e cuidados com a barba em Fortaleza.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-3xl font-bold mb-6 text-gold-400">
                Nossa Missão
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Proporcionar uma experiência única em cuidados masculinos, combinando 
                técnicas tradicionais com tendências modernas, sempre priorizando a 
                qualidade e satisfação de nossos clientes.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nosso compromisso é transformar não apenas o visual, mas também a 
                autoestima de cada cliente que passa pela nossa cadeira.
              </p>
            </div>

            {/* Qualifications */}
            <div>
              <h4 className="font-playfair text-2xl font-bold mb-4 text-gold-400">
                Qualificações & Especialidades
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0" />
                    <span className="text-gray-300">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="bg-gold-500/10 rounded-lg p-6 border border-gold-500/20">
              <h4 className="font-playfair text-xl font-bold mb-4 text-gold-400">
                Nossos Valores
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Award className="h-8 w-8 text-gold-500 mx-auto mb-2" />
                  <h5 className="font-semibold text-white">Qualidade</h5>
                  <p className="text-sm text-gray-400">Excelência em cada serviço</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-gold-500 mx-auto mb-2" />
                  <h5 className="font-semibold text-white">Respeito</h5>
                  <p className="text-sm text-gray-400">Cada cliente é único</p>
                </div>
                <div className="text-center">
                  <Star className="h-8 w-8 text-gold-500 mx-auto mb-2" />
                  <h5 className="font-semibold text-white">Inovação</h5>
                  <p className="text-sm text-gray-400">Sempre atualizados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            {/* Main Achievement Circle */}
            <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-gold rounded-full flex items-center justify-center">
                <div className="text-center text-black">
                  <div className="text-6xl md:text-8xl font-playfair font-bold">4</div>
                  <div className="text-lg md:text-xl font-semibold tracking-wider">ANOS</div>
                  <div className="text-sm opacity-80">DE SUCESSO</div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-black/80 backdrop-blur-sm rounded-lg p-4 animate-pulse">
                <div className="text-gold-400 text-center">
                  <Award className="h-6 w-6 mx-auto mb-1" />
                  <div className="text-xs font-semibold">QUALIFICADO</div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-black/80 backdrop-blur-sm rounded-lg p-4 animate-pulse" style={{ animationDelay: '1s' }}>
                <div className="text-gold-400 text-center">
                  <Star className="h-6 w-6 mx-auto mb-1" />
                  <div className="text-xs font-semibold">5 ESTRELAS</div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-black/80 backdrop-blur-sm rounded-lg p-4 animate-pulse" style={{ animationDelay: '2s' }}>
                <div className="text-gold-400 text-center">
                  <Users className="h-6 w-6 mx-auto mb-1" />
                  <div className="text-xs font-semibold">500+ CLIENTES</div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-black/80 backdrop-blur-sm rounded-lg p-4 animate-pulse" style={{ animationDelay: '3s' }}>
                <div className="text-gold-400 text-center">
                  <Trophy className="h-6 w-6 mx-auto mb-1" />
                  <div className="text-xs font-semibold">REFERÊNCIA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-gold-500/10 border-gold-500/20 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="p-6 text-center">
                <div className="text-gold-500 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold text-gold-400 mb-2">
                  {achievement.number}
                </div>
                <h4 className="font-semibold text-white mb-2">
                  {achievement.label}
                </h4>
                <p className="text-sm text-gray-400">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-8">
            <h3 className="font-playfair text-2xl font-bold mb-4 text-gold-400">
              Experimente a Diferença DGsales
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Venha conhecer nosso trabalho e descobrir por que somos a escolha de 
              centenas de homens em Fortaleza que valorizam qualidade e profissionalismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold"
              >
                Agendar Primeira Visita
              </button>
              <button
                onClick={() => window.open('https://wa.me/5585927068055?text=Olá! Gostaria de saber mais sobre a DGsales Barbearia.', '_blank')}
                className="bg-transparent border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black px-6 py-3 rounded-lg transition-all duration-200 font-semibold"
              >
                Falar Conosco
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
