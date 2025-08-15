import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'Sobre nós', href: '#about' },
      { label: 'Nossa equipe', href: '#team' },
      { label: 'Carreiras', href: '#careers' },
      { label: 'Blog', href: '#blog' },
    ],
    services: [
      { label: 'Desenvolvimento Web', href: '#web' },
      { label: 'Apps Mobile', href: '#mobile' },
      { label: 'Consultoria TI', href: '#consulting' },
      { label: 'Suporte Técnico', href: '#support' },
    ],
    resources: [
      { label: 'Documentação', href: '#docs' },
      { label: 'Tutoriais', href: '#tutorials' },
      { label: 'Cases de Sucesso', href: '#cases' },
      { label: 'Downloads', href: '#downloads' },
    ],
    legal: [
      { label: 'Política de Privacidade', href: '#privacy' },
      { label: 'Termos de Uso', href: '#terms' },
      { label: 'Cookies', href: '#cookies' },
      { label: 'LGPD', href: '#lgpd' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold text-white">
                TechStart
              </span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Transformando ideias em soluções tecnológicas inovadoras. 
              Ajudamos empresas a crescer através da tecnologia.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-background/60" />
                <span className="text-background/80">contato@techstart.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-background/60" />
                <span className="text-background/80">+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-background/60" />
                <span className="text-background/80">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-background/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white font-semibold mb-2">
                Fique por dentro das novidades
              </h3>
              <p className="text-background/80">
                Receba atualizações sobre tecnologia e nossas soluções.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-white placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 gradient-bg text-white rounded-lg hover:opacity-90 transition-opacity">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} TechStart. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-background/60 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;