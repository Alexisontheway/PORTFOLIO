import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ParticleBackground from '../components/ParticleBackground';

export default function Hero() {
  const nameParts = personalInfo.name.split(' ');
  const firstName = nameParts[0] || personalInfo.name;
  const lastName = nameParts.slice(1).join(' ');

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.github,
      label: 'GitHub Profile',
    },
    {
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: 'LinkedIn Profile',
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Send Email',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground/>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 border border-neon/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <span className="neon-dot animate-pulse" />
          <span className="text-xs font-mono text-neon/80 uppercase tracking-widest">
            Available for work
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 animate-slide-up">
          <span className="text-white">{firstName}</span>
          {lastName && (
            <>
              <br />
              <span className="text-neon text-glow">{lastName}</span>
            </>
          )}
        </h1>

        {/* Title */}
        <div className="mb-6 animate-slide-up anim-delay-1">
          <span className="font-mono text-neon/60 text-sm">{'<'}</span>
          <span className="text-gray-400 font-mono text-sm md:text-base mx-2">
            {personalInfo.title}
          </span>
          <span className="font-mono text-neon/60 text-sm">{'/>'}</span>
        </div>

        {/* Tagline */}
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up anim-delay-2">
          {personalInfo.tagline}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up anim-delay-3">
          <a
            href="#projects"
            className="bg-neon text-dark-900 px-8 py-3 font-bold text-sm uppercase tracking-widest hover:shadow-neon-lg transition-all duration-300 flex items-center gap-2"
          >
            View Projects <ArrowDown size="{16}"/>
          </a>

          <a
            href="#contact"
            className="border border-neon/40 text-neon px-8 py-3 text-sm uppercase tracking-widest hover:border-neon hover:shadow-neon transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-6 animate-slide-up anim-delay-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-neon transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(234,255,0,0.5)]"
            >
              <Icon size="{20}"/>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] font-mono text-neon/40 uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-neon/40 to-transparent" />
      </div>
    </section>
  );
}
