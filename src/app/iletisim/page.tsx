'use client';

import { useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Adres',
    value: 'Karacaören Mah., Karacaören Cad. No:16/1-3',
    sub: '17000 Çanakkale Merkez',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Telefon',
    value: '+90 532 540 05 17',
    sub: 'Pazartesi – Cuma, 08:00–18:00',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'E-posta',
    value: 'info@troyaninsaat.com',
    sub: '24 saat içinde yanıt veriyoruz',
  },
];

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-bronze font-semibold tracking-[0.3em] uppercase text-xs mb-6">İletişim</p>
          <h1 className="text-white max-w-2xl mb-6">
            Projeniz İçin Bizimle İletişime Geçin
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl">
            Ücretsiz keşif ve danışmanlık için formu doldurun veya doğrudan ulaşın.
            En kısa sürede size dönüş yapacağız.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ─────────────────────────────── */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

            {/* ── LEFT: Contact Info ─── */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl text-charcoal mb-8 section-title-left">
                Bize Ulaşın
              </h2>

              <div className="space-y-8">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-bronze/10 text-bronze flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-concrete text-xs uppercase tracking-wide mb-1">{item.label}</p>
                      <p className="text-charcoal font-medium">{item.value}</p>
                      <p className="text-concrete text-sm">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Çalışma saatleri */}
              <div className="mt-12 p-6 bg-charcoal">
                <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">Çalışma Saatleri</h3>
                <div className="space-y-2">
                  {[
                    { day: 'Pazartesi – Cuma', hours: '08:00 – 18:00' },
                    { day: 'Cumartesi', hours: '09:00 – 14:00' },
                    { day: 'Pazar', hours: 'Kapalı' },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <span className="text-white/50 text-sm">{day}</span>
                      <span className={`text-sm font-medium ${hours === 'Kapalı' ? 'text-concrete' : 'text-bronze'}`}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: Form ─── */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-10 border border-charcoal/5">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 bg-bronze/10 flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl text-charcoal mb-3">Mesajınız İletildi</h3>
                    <p className="text-concrete">En kısa sürede sizinle iletişime geçeceğiz.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display text-xl text-charcoal mb-8">Teklif / Bilgi Formu</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs text-concrete uppercase tracking-wide mb-2">Ad Soyad *</label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 bg-cream border border-charcoal/10 focus:border-bronze focus:outline-none transition-colors text-charcoal placeholder-concrete/50"
                            placeholder="Adınız Soyadınız"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-concrete uppercase tracking-wide mb-2">Telefon</label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 bg-cream border border-charcoal/10 focus:border-bronze focus:outline-none transition-colors text-charcoal placeholder-concrete/50"
                            placeholder="+90 5XX XXX XX XX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-concrete uppercase tracking-wide mb-2">E-posta *</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 bg-cream border border-charcoal/10 focus:border-bronze focus:outline-none transition-colors text-charcoal placeholder-concrete/50"
                          placeholder="ornek@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-concrete uppercase tracking-wide mb-2">Konu</label>
                        <select
                          className="w-full px-4 py-3 bg-cream border border-charcoal/10 focus:border-bronze focus:outline-none transition-colors text-charcoal"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        >
                          <option value="">Konu seçin...</option>
                          <option value="konut">Konut Projesi</option>
                          <option value="ticari">Ticari Yapı</option>
                          <option value="tadilat">Tadilat / Restorasyon</option>
                          <option value="iç-mimari">İç Mimari</option>
                          <option value="diger">Diğer</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs text-concrete uppercase tracking-wide mb-2">Mesajınız *</label>
                        <textarea
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-cream border border-charcoal/10 focus:border-bronze focus:outline-none transition-colors text-charcoal placeholder-concrete/50 resize-none"
                          placeholder="Projeniz hakkında kısaca bilgi verin..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      <button type="submit" className="btn-bronze w-full justify-center">
                        Gönder
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
