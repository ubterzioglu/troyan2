const projects = [
  {
    id: 1,
    title: 'Çanakkale Rezidans',
    category: 'Konut Projesi',
    year: '2024',
    location: 'Çanakkale Merkez',
    size: '4.200 m²',
    units: '24 Daire',
    desc: 'Modern mimari ile geleneksel değerleri harmanlayan, Çanakkale\'nin kalbinde lüks yaşam alanları.',
  },
  {
    id: 2,
    title: 'İstanbul Ticaret Merkezi',
    category: 'Ticari Yapı',
    year: '2023',
    location: 'İstanbul, Ataşehir',
    size: '12.500 m²',
    units: '6 Kat',
    desc: 'Ataşehir\'in finans bölgesinde A+ ofis standartlarında kurumsal yapı. Enerji verimli tasarım.',
  },
  {
    id: 3,
    title: 'Sahil Villaları',
    category: 'Konut Projesi',
    year: '2023',
    location: 'Çanakkale, Kepez',
    size: '8.000 m²',
    units: '8 Villa',
    desc: 'Çanakkale Boğazı manzaralı, özel havuzlu, lüks villa kompleksi.',
  },
  {
    id: 4,
    title: 'Tarihi Konak Restorasyonu',
    category: 'Restorasyon',
    year: '2022',
    location: 'Çanakkale Merkez',
    size: '1.800 m²',
    units: '1 Yapı',
    desc: '19. yüzyıldan kalma tarihi konağın özgün dokusunu koruyarak modern konfor standartlarına kavuşturulması.',
  },
  {
    id: 5,
    title: 'Hastane Ek Bina',
    category: 'Kamu Yapısı',
    year: '2022',
    location: 'Çanakkale',
    size: '6.300 m²',
    units: '5 Kat',
    desc: 'Çanakkale Devlet Hastanesi ek binası. Sağlık yapılarına özel teknik gereksinimler gözetilerek inşa edildi.',
  },
  {
    id: 6,
    title: 'Bağcılar Konut Projesi',
    category: 'Konut Projesi',
    year: '2021',
    location: 'İstanbul, Bağcılar',
    size: '18.000 m²',
    units: '120 Daire',
    desc: 'İstanbul\'da uygun fiyatlı ve yüksek kaliteli toplu konut projesi. Sosyal donatı alanlarıyla komple yaşam.',
  },
];

const categories = ['Tümü', 'Konut Projesi', 'Ticari Yapı', 'Restorasyon', 'Kamu Yapısı'];

export default function ProjelerPage() {
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
          <p className="text-bronze font-semibold tracking-[0.3em] uppercase text-xs mb-6">Portföy</p>
          <h1 className="text-white max-w-2xl mb-6">
            Tamamlanan ve Devam Eden Projelerimiz
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl">
            Konuttan ticariye, restorasyondan kamu yapılarına kadar geniş bir yelpazede
            80'i aşkın başarılı proje.
          </p>
        </div>
      </section>

      {/* ── FILTER BAR ─────────────────────────────────────── */}
      <section className="py-8 bg-cream-dark border-b border-charcoal/5 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 border ${
                  cat === 'Tümü'
                    ? 'bg-charcoal text-white border-charcoal'
                    : 'bg-transparent text-concrete border-charcoal/15 hover:border-bronze hover:text-bronze'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS LIST ─────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] bg-charcoal-light relative overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `linear-gradient(to right, rgba(184,115,51,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(184,115,51,0.3) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px'
                    }} />
                    <div className="absolute inset-0 bg-bronze/0 group-hover:bg-bronze/10 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-[8rem] font-bold text-white/5 select-none leading-none">
                        {project.id}
                      </span>
                    </div>
                    {/* Year watermark */}
                    <span className="absolute top-6 right-6 text-white/20 font-display text-5xl font-bold">
                      {project.year}
                    </span>
                    {/* Category badge */}
                    <div className="absolute bottom-6 left-6">
                      <span className="bg-bronze text-white text-xs font-semibold tracking-[0.1em] uppercase px-3 py-1.5">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-bronze/70 text-xs tracking-[0.2em] uppercase font-semibold block mb-3">
                    {project.location} · {project.year}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-4">
                    {project.title}
                  </h2>
                  <p className="text-concrete leading-relaxed mb-8">{project.desc}</p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-cream-dark p-4">
                      <p className="text-concrete text-xs uppercase tracking-wide mb-1">Alan</p>
                      <p className="font-semibold text-charcoal">{project.size}</p>
                    </div>
                    <div className="bg-cream-dark p-4">
                      <p className="text-concrete text-xs uppercase tracking-wide mb-1">Kapasite</p>
                      <p className="font-semibold text-charcoal">{project.units}</p>
                    </div>
                  </div>

                  <div className="h-px bg-charcoal/5 mb-8" />

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-bronze/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-concrete text-sm">Tamamlandı · {project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 grid-lines" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-white mb-4">
            Yeni Projeniz İçin Buradayız
          </h2>
          <p className="text-white/50 mb-8">
            Fikrinizi hayata geçirmek için ilk adımı atın.
          </p>
          <a href="/iletisim" className="btn-bronze inline-flex">
            Teklif Al
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
