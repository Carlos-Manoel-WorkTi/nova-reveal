import { Star, Quote } from 'lucide-react';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      position: 'CEO da InnovaCorp',
      image: testimonial1,
      rating: 5,
      text: 'A TechStart transformou completamente nossa operação. O sistema desenvolvido aumentou nossa produtividade em 300% e a qualidade do suporte é excepcional.',
    },
    {
      name: 'Ana Rodriguez',
      position: 'Diretora de Tecnologia',
      image: testimonial2,
      rating: 5,
      text: 'Profissionais extremamente competentes e dedicados. Entregaram exatamente o que prometeram, no prazo e com qualidade superior. Recomendo sem hesitação.',
    },
    {
      name: 'Miguel Santos',
      position: 'Founder da StartupXYZ',
      image: testimonial3,
      rating: 5,
      text: 'Nossa startup cresceu 500% após implementar as soluções da TechStart. A equipe entende perfeitamente as necessidades do mercado atual.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja os depoimentos de empresários e líderes que transformaram seus negócios 
            com nossas soluções inovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-sm border card-hover scroll-reveal relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">Trusted by industry leaders</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {['Microsoft', 'Google', 'Amazon', 'Apple', 'Meta'].map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-muted-foreground">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;