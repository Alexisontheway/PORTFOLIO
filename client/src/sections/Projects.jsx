import { useState } from 'react';
import { ExternalLink, Github, Zap, Brain, Server, Workflow } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolioData';

const categories = [
  { key: 'all', label: 'All', icon: Zap },
  { key: 'ai', label: 'AI / ML', icon: Brain },
  { key: 'fullstack', label: 'Full-Stack', icon: Server },
  { key: 'automation', label: 'Automation', icon: Workflow },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="03" title="Projects" />

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest border transition-all duration-300 ${
                filter === key
                  ? 'border-neon bg-neon text-dark-900 shadow-neon'
                  : 'border-neon/20 text-gray-400 hover:border-neon/50 hover:text-neon'
              }`}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group border border-neon/10 bg-dark-800/30 hover:border-neon/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {project.featured && (
                        <span className="text-[10px] font-mono text-dark-900 bg-neon px-2 py-0.5 uppercase tracking-widest">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-neon transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-neon/60 text-sm font-mono mt-1">{project.subtitle}</p>
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`} className="text-gray-600 hover:text-neon transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="text-gray-600 hover:text-neon transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="border-l-2 border-neon/30 pl-4 mb-6">
                  <p className="text-neon/80 text-xs font-mono leading-relaxed">⚡ {project.impact}</p>
                </div>

                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-gray-400 text-xs">
                      <span className="text-neon mt-1">▸</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono text-neon/70 border border-neon/15 px-2 py-1 hover:border-neon/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}