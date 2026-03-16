import Link from 'next/link';

const team = [
  { name: 'Ahmet Yılmaz', title: 'Genel Müdür', exp: '20 Yıl Deneyim' },
  { name: 'Mehmet Demir', title: 'Proje Direktörü', exp: '15 Yıl Deneyim' },
  { name: 'Ayşe Kaya', title: 'Mimar', exp: '10 Yıl Deneyim' },
  { name: 'Ali Çelik', title: 'İnşaat Mühendisi', exp: '12 Yıl Deneyim' },
];

const milestones = [
  { year: '1999', title: 'Kuruluş', desc: 'Çanakkale\'de ilk proje ile yolculuğumuza başladık.' },
  { year: '2005', title: 'Büyüme', desc: 'Ekibimizi genişlettik, yıllık 10+ proje kapasitesine ulaştık.' },
  { year: '2012', title: 'İstanbul Açılımı', desc: 'İstanbul ofisimizi açarak ulusal ölçekte büyüdük.' },
  { year: '2018', title: 'Ödüller', desc: 'Sektör ödülleri ile kalitemizi tescil ettirdik.' },
  { year: '2024', title: 'Bugün', desc: '80+ tamamlanmış proje, 500+ mutlu aile ile hizmetimize devam ediyoruz.' },
];

export default function HakkimizdaPage() {
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
          <p className="text-bronze font-semibold tracking-[0.3em] uppercase text-xs mb-6">Hakkımızda</p>
          <h1 className="text-white max-w-2xl mb-6">
            İnşaatta Güven ve Kalitenin Adresi
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl">
            1999'dan bu yana Çanakkale ve İstanbul'da kalite, estetik ve güven ilkeleriyle
            yüzlerce projeyi hayata geçirdik.
          </p>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div className="lg:col-span-7">
              <p className="text-bronze font-semibold tracking-[0.2em] uppercase text-xs mb-4">Hikayemiz</p>
              <h2 className="font-display text-charcoal mb-8 section-title-left">
                25 Yıllık Deneyim ve Tutkuyla İnşa Ediyoruz
              </h2>
              <div className="space-y-4 text-concrete leading-relaxed">
                <p>
                  TROYAN İnşaat, 1999 yılında Çanakkale'de kuruldu. Küçük bir ekip ve büyük bir
                  vizyon ile başladığımız bu yolculukta, kaliteye olan bağlılığımız hiç değişmedi.
                </p>
                <p>
                  İlk yıllardan bu yana her projede en yüksek standartları uyguladık, müşterilerimizin
                  güvenini kazandık ve sektörde saygın bir yer edindik. 2012 yılında İstanbul'a
                  açılarak ulusal ölçekte büyüdük.
                </p>
                <p>
                  Bugün 80'den fazla tamamlanmış proje ve 500'ü aşkın mutlu aile ile gurur duyuyoruz.
                  Her yapı, bizim için sadece bir inşaat değil; insanların hayallerini yaşadığı bir
                  mekandır.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link href="/projeler" className="btn-bronze">
                  Projelerimiz
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/iletisim" className="btn-outline-dark">
                  İletişim
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-5">
              <div className="aspect-[3/4] bg-charcoal rounded-none relative overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(184,115,51,0.1) 20px, rgba(184,115,51,0.1) 21px)`
                }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[10rem] font-bold text-white/5 select-none">T</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="h-px bg-bronze/50 mb-4" />
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-bronze text-2xl font-display font-bold">1999</p>
                      <p className="text-white/50 text-sm">Kuruluş Yılı</p>
                    </div>
                    <div className="text-right">
                      <p className="text-bronze text-2xl font-display font-bold">80+</p>
                      <p className="text-white/50 text-sm">Proje</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MILESTONES ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 grid-lines" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-bronze font-semibold tracking-[0.2em] uppercase text-xs mb-4">Kilometre Taşları</p>
            <h2 className="font-display text-white section-title">
              Yolculuğumuz
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${i % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="font-display text-4xl font-bold text-bronze/30">{m.year}</span>
                    <h3 className="font-display text-xl text-white mt-2 mb-2">{m.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-bronze border-4 border-charcoal shrink-0 relative z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-bronze font-semibold tracking-[0.2em] uppercase text-xs mb-4">Ekibimiz</p>
            <h2 className="font-display text-charcoal section-title">
              Deneyimli Profesyoneller
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] bg-charcoal-light relative overflow-hidden mb-4">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `linear-gradient(to right, rgba(184,115,51,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(184,115,51,0.3) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl font-bold text-white/10 select-none">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-bronze/0 group-hover:bg-bronze/50 transition-colors duration-500" />
                </div>
                <h3 className="font-display font-semibold text-charcoal">{member.name}</h3>
                <p className="text-bronze text-sm">{member.title}</p>
                <p className="text-concrete text-xs mt-1">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-20 bg-bronze">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-white mb-4">
            Projenizi Birlikte Hayata Geçirelim
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Ücretsiz keşif ve danışmanlık için bugün bizimle iletişime geçin.
          </p>
          <Link href="/iletisim" className="inline-flex items-center gap-2 bg-white text-bronze font-bold text-sm tracking-[0.05em] uppercase px-8 py-4 hover:bg-charcoal hover:text-white transition-colors duration-300">
            İletişime Geç
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
