import { Zap, Shield, Rocket, Users, Award, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Performance Superior',
      description: 'Soluções otimizadas que garantem velocidade e eficiência máximas para seu negócio.',
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Protocolos de segurança avançados para manter seus dados sempre protegidos.',
    },
    {
      icon: Rocket,
      title: 'Inovação Constante',
      description: 'Tecnologias de ponta e metodologias ágeis para resultados extraordinários.',
    },
    {
      icon: Users,
      title: 'Suporte Especializado',
      description: 'Equipe dedicada de especialistas prontos para ajudar você a qualquer momento.',
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Padrões de excelência reconhecidos pela indústria e certificações internacionais.',
    },
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: 'Prazos otimizados sem comprometer a qualidade do produto final.',
    },
  ];

  return (
    <section id="benefits" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Por que escolher a TechStart?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas e inovadoras que transformam desafios em oportunidades, 
            garantindo resultados excepcionais para seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-sm card-hover scroll-reveal border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;