import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';
import { submitContactForm } from '../utils/api';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  // state: 'idle' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'submitting', message: '' });

    try {
      await submitContactForm(formData);
      setStatus({
        state: 'success',
        message: "Message sent! I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({
        state: 'error',
        message: err.message || 'Something went wrong. Please try again.',
      });
    }
  };

  const isSubmitting = status.state === 'submitting';

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
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
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
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {[
              { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
              { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <label htmlFor={name} className="text-xs font-mono text-neon/60 uppercase tracking-widest mb-2 block">
                  {label}
                </label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-dark-800 border border-neon/10 text-white px-4 py-3 text-sm font-mono placeholder-gray-600 focus:border-neon focus:outline-none focus:shadow-neon-sm transition-all duration-300 disabled:opacity-50"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="text-xs font-mono text-neon/60 uppercase tracking-widest mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                minLength={10}
                maxLength={2000}
                disabled={isSubmitting}
                className="w-full bg-dark-800 border border-neon/10 text-white px-4 py-3 text-sm font-mono placeholder-gray-600 focus:border-neon focus:outline-none focus:shadow-neon-sm transition-all duration-300 resize-none disabled:opacity-50"
              />
            </div>

            {status.state === 'success' && (
              <div
                role="status"
                className="flex items-start gap-3 border border-neon/40 bg-neon/5 text-neon text-sm p-4 font-mono"
              >
                <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                <span>{status.message}</span>
              </div>
            )}

            {status.state === 'error' && (
              <div
                role="alert"
                className="flex items-start gap-3 border border-red-500/40 bg-red-500/5 text-red-400 text-sm p-4 font-mono"
              >
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-neon text-dark-900 py-4 font-bold text-sm uppercase tracking-widest hover:shadow-neon-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
