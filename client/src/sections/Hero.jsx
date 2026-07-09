import { FileText, FolderGit2, Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ParticleBackground from '../components/ParticleBackground';
import NeuralNetwork from '../components/hero/NeuralNetwork';
import SystemProfile from '../components/hero/SystemProfile';

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
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 lg:pt-20">
      <ParticleBackground />

      {/* Subtle top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.9fr)_minmax(280px,0.72fr)] lg:gap-8 xl:gap-12">

        {/* ── LEFT: Identity ── */}
        <div className="relative order-1">
          {/* Tablet: compact network behind text */}
          <div className="pointer-events-none absolute -inset-x-12 top-8 -z-10 hidden opacity-20 blur-[1px] md:block lg:hidden">
            <NeuralNetwork compact />
          </div>

          {/* Status badge */}
          <div className="mb-7 inline-flex items-center gap-3 border border-yellow-400/15 bg-yellow-400/[0.03] px-4 py-2">
            <span className="neon-dot animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-yellow-100/80">
              Available for Software Engineering Roles
            </span>
          </div>

          {/* Name */}
          <h1 className="max-w-[720px] text-5xl font-black leading-[0.93] tracking-normal text-white md:text-7xl xl:text-8xl">
            <span>{firstName}</span>
            {lastName && (
              <>
                <br />
                <span className="text-neon text-glow-subtle">{lastName}</span>
              </>
            )}
          </h1>

          {/* Title */}
          <p className="mt-6 font-mono text-sm uppercase tracking-[0.32em] text-yellow-200/60">
            {personalInfo.title}
          </p>

          {/* Tagline */}
          <p className="mt-6 max-w-xl text-base leading-8 text-neutral-400 md:text-lg">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={personalInfo.resumeUrl}
              className="inline-flex items-center justify-center gap-2 border border-yellow-400/25 bg-yellow-400/[0.06] px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-yellow-50 transition duration-300 hover:border-yellow-300 hover:bg-yellow-400/10 hover:shadow-neon-sm"
            >
              <FileText size={16} /> Resume
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 border border-neutral-700/70 px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-neutral-300 transition duration-300 hover:border-yellow-400/40 hover:text-yellow-200"
            >
              <FolderGit2 size={16} /> Projects
            </a>
          </div>

          {/* Social links */}
          <div className="mt-9 flex items-center gap-5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 transition duration-300 hover:text-neon hover:drop-shadow-[0_0_8px_rgba(234,255,0,0.45)]"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* ── CENTER: Neural Network ── */}
        <div className="relative order-2 min-h-[310px] pointer-events-auto lg:min-h-[470px]">
          <NeuralNetwork />
        </div>

        {/* ── RIGHT: System Profile ── */}
        <div className="order-3">
          <SystemProfile />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="font-mono text-[10px] uppercase tracking-widest text-yellow-200/25">
          Scroll
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-yellow-400/20 to-transparent" />
      </div>
    </section>
  );
}
