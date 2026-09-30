import React, { useState } from 'react';

const Contact = () => {
  const PRO_EMAIL = 'sb.kherarfa@gmail.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PRO_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: '' });

    try {
      const res = await fetch('/api/email/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({
          state: 'success',
          message: 'Merci pour votre message ! Je vous répondrai très prochainement.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Erreur API');
      }
    } catch {
      // Fallback direct mailto to guarantee contact
      const mailtoUrl = `mailto:${PRO_EMAIL}?subject=${encodeURIComponent(
        `[Portfolio] Message de ${formData.name || 'Visiteur'}`
      )}&body=${encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus({
        state: 'success',
        message: 'Votre messagerie a été ouverte avec votre message pré-rempli pour envoi.',
      });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative bg-slate-950/70">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Me Contacter
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Pour un recrutement, une mission freelance ou une collaboration technique.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="p-5 rounded-2xl bg-slate-900 border border-cyan-500/30">
                <div className="text-xs font-mono uppercase text-cyan-400 mb-1">
                  Email Professionnel
                </div>
                <div className="text-white font-semibold text-sm sm:text-base break-all mb-3">
                  {PRO_EMAIL}
                </div>
                <div className="flex gap-2">
                  <a
                    href={`mailto:${PRO_EMAIL}`}
                    className="flex-1 py-2 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs text-center transition-all"
                  >
                    ✉️ Écrire
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-gray-200 text-xs font-medium transition-colors"
                  >
                    {copied ? '✓ Copié' : 'Copier'}
                  </button>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 text-xs text-gray-400 space-y-2">
                <div className="text-white font-medium">Disponibilité :</div>
                <div>À l'écoute de nouvelles opportunités en développement web Full Stack.</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                  Votre Nom ou Société
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm"
                  placeholder="Ex : Marie Martin"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                  Votre Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm"
                  placeholder="marie@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                  Votre Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              {status.message && (
                <div
                  className={`p-3 rounded-xl text-xs font-mono ${
                    status.state === 'success'
                      ? 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-300'
                      : 'bg-red-950/70 border border-red-500/40 text-red-300'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.state === 'loading'}
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                {status.state === 'loading' ? 'Envoi en cours...' : 'Envoyer le Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
