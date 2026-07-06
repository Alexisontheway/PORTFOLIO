import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading number="07" title="Contact" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold text-neon text-glow mb-4">
              Let's build something together.
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm open to freelance projects, full-time roles, and interesting
              collaborations. Drop me a message and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: Phone, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { icon: MapPin, label: personalInfo.location, href: null },
              ].map(({ icon: Icon, label, href }, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-neon/20 flex items-center justify-center text-neon group-hover:bg-neon group-hover:text-dark-900 transition-all duration-300">
                    <Icon size={16} />
                  </div>
                  {href ? (
                    <a href={href} className="text-gray-400 text-sm hover:text-neon transition-colors font-mono">{label}</a>
                  ) : (
                    <span className="text-gray-400 text-sm font-mono">{label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {[
                { icon: Github, href: personalInfo.github },
                { icon: Linkedin, href: personalInfo.linkedin },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-neon/20 flex items-center justify-center text-gray-500 hover:text-neon hover:border-neon hover:shadow-neon transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
              { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <label className="text-xs font-mono text-neon/60 uppercase tracking-widest mb-2 block">
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                  required
                  className="w-full bg-dark-800 border border-neon/10 text-white px-4 py-3 text-sm font-mono placeholder-gray-600 focus:border-neon focus:outline-none focus:shadow-neon-sm transition-all duration-300"
                />
              </div>
            ))}

            <div>
              <label className="text-xs font-mono text-neon/60 uppercase tracking-widest mb-2 block">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full bg-dark-800 border border-neon/10 text-white px-4 py-3 text-sm font-mono placeholder-gray-600 focus:border-neon focus:outline-none focus:shadow-neon-sm transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-neon text-dark-900 py-4 font-bold text-sm uppercase tracking-widest hover:shadow-neon-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
