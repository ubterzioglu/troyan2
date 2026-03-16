import Link from 'next/link';

const values = [
  {
    number: '01',
    title: 'Kalite',
    desc: 'Her projede en yüksek kalite standartlarını uyguluyoruz. Malzeme seçiminden işçiliğe kadar mükemmeliyeti hedefliyoruz.',
  },
  {
    number: '02',
    title: 'Güven',
    desc: 'Yıllarca süren deneyim ve şeffaf iletişimle müşterilerimizin tam güvenini kazanıyoruz.',
  },
  {
    number: '03',
    title: 'Estetik',
    desc: 'Fonksiyonellik ile estetiği bir araya getirerek zamansız mekanlar tasarlıyoruz.',
  },
  {
    number: '04',
    title: 'Sürdürülebilirlik',
    desc: 'Çevre dostu malzemeler ve enerji verimli çözümlerle geleceğe yatırım yapıyoruz.',
  },
];

const projects = [
  {
    id: 1,
    title: 'Çanakkale Rezidans',
    category: 'Konut Projesi',
    year: '2024',
    location: 'Çanakkale Merkez',
  },
  {
    id: 2,
    title: 'İstanbul Ticaret Merkezi',
    category: 'Ticari Yapı',
    year: '2023',
    location: 'İstanbul, Ataşehir',
  },
  {
    id: 3,
    title: 'Sahil Villaları',
    category: 'Konut Projesi',
    year: '2023',
    location: 'Çanakkale, Kepez',
  },
];

const stats = [
  { value: '15+', label: 'Yıl Deneyim' },
  { value: '80+', label: 'Tamamlanan Proje' },
  { value: '500+', label: 'Mutlu Aile' },
  { value: '2', label: 'Şehir' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/5657803/5657803-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 video-overlay" />
        <div className="absolute inset-0 noise-overlay" />

        {/* Grid lines overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-bronze font-semibold tracking-[0.3em] uppercase text-sm mb-6 animate-fadeInUp">
              Çanakkale & İstanbul
            </p>
            <h1 className="text-white mb-6 animate-fadeInUp delay-100" style={{ opacity: 0 }}>
              <span className="block font-bold tracking-tight leading-none">TROYAN</span>
              <span className="block text-white/90 mt-2" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>İNŞAAT</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fadeInUp delay-200" style={{ opacity: 0 }}>
              Kalite, estetik ve güven ile hayalinizdeki yapıları inşa ediyoruz.
              Her projede mükemmelliği, her detayda ustalığı sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeInUp delay-300" style={{ opacity: 0 }}>
              <Link href="/projeler" className="btn-bronze">
                Projelerimizi Gör
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/iletisim" className="btn-outline">
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Aşağı kaydır</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="py-16 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 grid-lines" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-8">
                <div className="text-4xl md:text-5xl font-display font-bold text-bronze mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-cream grid-lines relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text */}
            <div>
              <p className="text-bronze font-semibold tracking-[0.2em] uppercase text-xs mb-4">Biz Kimiz</p>
              <h2 className="font-display text-charcoal mb-6 section-title-left">
                15 Yılı Aşkın Deneyimle İnşaat Sektöründeyiz
              </h2>
              <p className="text-concrete text-lg leading-relaxed mb-6">
                1999'dan bu yana Çanakkale ve İstanbul'da yüzlerce projeyi hayata geçirdik.
                Her yapıda kaliteyi, güveni ve estetiği bir araya getiriyoruz.
              </p>
              <p className="text-concrete leading-relaxed mb-10">
                Konut projelerinden ticari yapılara, tadilat ve restorasyondan iç mimari çalışmalara
                kadar geniş bir yelpazede hizmet sunuyoruz. Müşteri memnuniyeti her zaman önceliğimizdir.
              </p>
              <Link href="/hakkimizda" className="btn-bronze">
                Daha Fazla Bilgi
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-[4/5] bg-charcoal-light rounded-none relative overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(184,115,51,0.1) 20px, rgba(184,115,51,0.1) 21px)`
                }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[8rem] font-bold text-white/5 select-none leading-none">T</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="h-px bg-bronze/50 mb-4" />
                  <p className="text-white/60 text-sm tracking-wide">EST. 1999</p>
                </div>
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-bronze/10 border border-bronze/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-bronze font-semibold tracking-[0.2em] uppercase text-xs mb-4">Değerlerimiz</p>
            <h2 className="font-display text-charcoal section-title inline-flex">
              Her Projede Temel Aldığımız İlkeler
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`card-luxury p-8 lg:p-10 ${index % 2 === 1 ? 'md:mt-12' : ''}`}
              >
                <span className="font-display text-5xl font-bold text-bronze/15 leading-none block mb-4">
                  {value.number}
                </span>
                <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-concrete leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-bronze font-semibold tracking-[0.2em] uppercase text-xs mb-4">Portföy</p>
              <h2 className="font-display text-charcoal section-title-left">
                Seçili Projelerimiz
              </h2>
            </div>
            <Link href="/projeler" className="btn-bronze self-start md:self-auto shrink-0">
              Tüm Projeler
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href="/projeler"
                className={`group block relative ${index % 2 === 1 ? 'md:ml-auto md:mr-0' : ''}`}
                style={{ maxWidth: index % 2 === 1 ? '90%' : '100%' }}
              >
                <div className="aspect-[21/9] bg-charcoal-light overflow-hidden relative">
                  {/* Grid pattern */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `linear-gradient(to right, rgba(184,115,51,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(184,115,51,0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                  }} />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-bronze/0 group-hover:bg-bronze/10 transition-colors duration-500" />
                  {/* Content */}
                  <div className="absolute inset-0 flex items-end p-8 md:p-12">
                    <div>
                      <span className="text-bronze/70 text-xs tracking-[0.2em] uppercase font-semibold block mb-2">
                        {project.category} · {project.location}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  {/* Year watermark */}
                  <span className="absolute top-6 right-6 text-white/10 font-display text-6xl font-bold leading-none">
                    {project.year}
                  </span>
                  {/* Arrow */}
                  <div className="absolute top-6 right-6 w-10 h-10 bg-bronze flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-bronze font-semibold tracking-[0.2em] uppercase text-xs mb-6">Başlayalım</p>
          <h2 className="font-display text-white mb-6">
            Hayalinizdeki Projeyi Birlikte Hayata Geçirelim
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-10">
            Ücretsiz keşif ve danışmanlık için bugün bizimle iletişime geçin.
            Uzman ekibimiz size en iyi çözümü sunmak için hazır.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/iletisim" className="btn-bronze">
              Ücretsiz Teklif Al
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="tel:+902860000000" className="btn-outline">
              Hemen Ara
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
