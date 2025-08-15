import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-commerce Avançado',
      category: 'Web Development',
      description: 'Plataforma completa de vendas online com IA integrada',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
      tech: ['React', 'Node.js', 'AI', 'MongoDB'],
    },
    {
      title: 'App Mobile Fintech',
      category: 'Mobile App',
      description: 'Aplicativo financeiro com recursos de investimento inteligente',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop&crop=center',
      tech: ['React Native', 'Blockchain', 'AWS'],
    },
    {
      title: 'Dashboard Analytics',
      category: 'Data Science',
      description: 'Sistema de análise de dados em tempo real para empresas',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center',
      tech: ['Python', 'D3.js', 'PostgreSQL'],
    },
    {
      title: 'IoT Smart Home',
      category: 'IoT',
      description: 'Solução completa para automação residencial inteligente',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&crop=center',
      tech: ['Arduino', 'React', 'MQTT'],
    },
    {
      title: 'AI Chatbot Platform',
      category: 'Artificial Intelligence',
      description: 'Plataforma de chatbots com processamento de linguagem natural',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center',
      tech: ['Python', 'NLP', 'TensorFlow'],
    },
    {
      title: 'Blockchain Marketplace',
      category: 'Blockchain',
      description: 'Marketplace descentralizado para NFTs e ativos digitais',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=center',
      tech: ['Solidity', 'Web3', 'IPFS'],
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Nossos Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos projetos inovadores que desenvolvemos para nossos clientes, 
            cada um com soluções únicas e tecnologias de ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card shadow-sm border hover:shadow-xl transition-all duration-500 scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Actions */}
                <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                  hoveredProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <Button variant="glass" size="sm" className="backdrop-blur-md">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button variant="glass" size="sm" className="backdrop-blur-md">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;