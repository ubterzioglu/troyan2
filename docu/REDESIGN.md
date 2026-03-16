# TROYAN İNŞAAT - Industrial Luxury Redesign Dökümantasyonu

Bu döküman, sitenin Industrial Luxury temasına geçişinde yapılan tüm değişiklikleri içerir. Yeni bir session'da baştan başlamak için bu adımları takip edin.

---

## 1. Video Dosyalarını .gitignore'a Ekleme

```gitignore
# Large video files (>100MB)
docu/Website içerikleri/**/*.mp4
docu/Website içerikleri/**/*.mov
docu/Website içerikleri/**/*.avi
public/videos/
```

---

## 2. Typography Sistemi (layout.tsx)

**Fontlar:**
- **Display:** Playfair Display (başlıklar için)
- **Body:** DM Sans (metinler için)

**Kurulum:**
```typescript
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// body elementinde:
className={`${playfair.variable} ${dmSans.variable} font-body antialiased bg-cream text-charcoal`}
```

---

## 3. Renk Paleti (globals.css)

```css
:root {
  /* Industrial Luxury Palette */
  --cream: #f8f6f1;
  --cream-dark: #ede9e1;
  --charcoal: #1a1a1a;
  --charcoal-light: #2d2d2d;
  --bronze: #b87333;
  --bronze-light: #d4915d;
  --bronze-dark: #8a5a28;
  --concrete: #8a8a8a;
  --concrete-light: #b5b5b5;
  
  /* Typography */
  --font-display: var(--font-display);
  --font-body: var(--font-body);
}
```

---

## 4. Global CSS Stilleri (globals.css)

### Temel Reset
```css
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body), system-ui, sans-serif;
  background-color: var(--cream);
  color: var(--charcoal);
  -webkit-font-smoothing: antialiased;
}
```

### Typography
```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display), Georgia, serif;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

h1 { font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 700; }
h2 { font-size: clamp(1.75rem, 4vw, 3rem); }
p { line-height: 1.7; color: var(--concrete); }
```

### Efektler

#### Noise Texture
```css
.noise-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
  z-index: 1;
}
```

#### Architectural Grid Lines
```css
.grid-lines {
  background-image: 
    linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
  background-size: 80px 80px;
}
```

#### Video Overlay
```css
.video-overlay {
  background: linear-gradient(
    to bottom,
    rgba(26, 26, 26, 0.4) 0%,
    rgba(26, 26, 26, 0.6) 50%,
    rgba(26, 26, 26, 0.85) 100%
  );
}
```

### Butonlar

#### Bronze Button
```css
.btn-bronze {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--bronze);
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-bronze::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.6s ease;
}

.btn-bronze:hover {
  background: var(--bronze-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 40px rgba(184, 115, 51, 0.3);
}

.btn-bronze:hover::before { left: 100%; }
```

#### Outline Button
```css
.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.4s ease;
}

.btn-outline:hover {
  background: white;
  color: var(--charcoal);
  border-color: white;
}
```

### Section Title
```css
.section-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 2px;
  background: var(--bronze);
  margin-top: 1rem;
}

.section-title-left::after {
  content: '';
  display: block;
  width: 60px;
  height: 2px;
  background: var(--bronze);
  margin-top: 1rem;
}
```

### Card Styles
```css
.card-luxury {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.06);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-luxury:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.08),
    0 8px 20px rgba(0, 0, 0, 0.04);
  border-color: rgba(184, 115, 51, 0.2);
}
```

### Animasyonlar
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
```

---

## 5. Header Component

### Temel Yapı
```tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ...
}
```

### Header Stilleri
```tsx
<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
  isScrolled
    ? 'bg-cream/95 backdrop-blur-md shadow-sm py-4'
    : 'bg-transparent py-6'
}`}>
```

### Logo
```tsx
<Link href="/">
  <div className={`font-display transition-colors duration-300 ${
    isScrolled ? 'text-charcoal' : 'text-white'
  }`}>
    <span className="text-2xl md:text-3xl font-bold tracking-tight">TROYAN</span>
    <span className={`block text-xs md:text-sm tracking-[0.3em] uppercase ${
      isScrolled ? 'text-bronze' : 'text-white/70'
    }`}>İnşaat</span>
  </div>
</Link>
```

---

## 6. Ana Sayfa Yapısı (page.tsx)

### Hero Section
```tsx
<section className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Video */}
  <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
    <source src="https://videos.pexels.com/video-files/5657803/5657803-hd_1920_1080_30fps.mp4" type="video/mp4" />
  </video>
  
  {/* Overlays */}
  <div className="absolute inset-0 video-overlay" />
  <div className="absolute inset-0 noise-overlay" />
  
  {/* Content */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl">
      <p className="text-bronze font-semibold tracking-[0.3em] uppercase text-sm mb-6">
        Çanakkale & İstanbul
      </p>
      <h1 className="text-white mb-6">
        <span className="block text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">TROYAN</span>
        <span className="block text-5xl md:text-6xl lg:text-7xl font-medium text-white/90 mt-2">İNŞAAT</span>
      </h1>
      {/* ... */}
    </div>
  </div>
</section>
```

### Değerler Bölümü (Asimetrik Grid)
```tsx
<div className="grid md:grid-cols-2 gap-6 lg:gap-8">
  {values.map((value, index) => (
    <div
      key={index}
      className={`card-luxury p-8 lg:p-10 ${index % 2 === 1 ? 'md:mt-12' : ''}`}
    >
      {/* İçerik */}
    </div>
  ))}
</div>
```

### Projeler Bölümü (Zigzag Layout)
```tsx
<div className="space-y-8">
  {projects.map((project, index) => (
    <Link
      key={project.id}
      href="/projeler"
      className={`group block relative ${index % 2 === 1 ? 'md:ml-auto md:mr-0' : ''}`}
      style={{ maxWidth: index % 2 === 1 ? '90%' : '100%' }}
    >
      {/* 21:9 aspect ratio card */}
      <div className="aspect-[21/9] bg-charcoal-light rounded-lg overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(to right, rgba(184,115,51,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(184,115,51,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        {/* Content overlay */}
      </div>
    </Link>
  ))}
</div>
```

---

## 7. Hakkımızda Sayfası

### Section Yapısı
```tsx
{/* Hero */}
<section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal relative overflow-hidden">
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
      backgroundSize: '32px 32px'
    }} />
  </div>
  {/* Content */}
</section>

{/* Content Grid */}
<div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
  <div className="lg:col-span-7">
    {/* Text content */}
  </div>
  <div className="lg:col-span-5">
    {/* Visual with diagonal pattern */}
    <div className="aspect-[3/4] bg-charcoal rounded-lg relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(184,115,51,0.1) 20px, rgba(184,115,51,0.1) 21px)`
      }} />
    </div>
  </div>
</div>
```

---

## 8. Projeler Sayfası

### Alternatif Layout
```tsx
{projects.map((project, index) => (
  <div key={project.id} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
  }`}>
    {/* Image - order changes based on index */}
    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
      <div className="aspect-[4/3] bg-charcoal rounded-lg relative overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(to right, rgba(184,115,51,0.3) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(184,115,51,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        {/* Year watermark */}
        <span className="absolute top-6 right-6 text-white/30 font-display text-6xl font-bold">
          {project.year}
        </span>
      </div>
    </div>
    {/* Content */}
  </div>
))}
```

---

## 9. İletişim Sayfası

### Layout
```tsx
<div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
  {/* Left - Contact Info */}
  <div className="lg:col-span-5">
    {/* Contact details with icons */}
  </div>
  
  {/* Right - Form */}
  <div className="lg:col-span-7">
    <div className="bg-white p-8 md:p-10 border border-charcoal/5">
      {/* Form fields */}
    </div>
  </div>
</div>
```

### Form Input Stilleri
```tsx
<input
  className="w-full px-4 py-3 bg-cream border border-charcoal/10 focus:border-bronze focus:outline-none transition-colors"
  placeholder="..."
/>
```

---

## 10. Footer Component

### Yapı
```tsx
<footer className="bg-charcoal text-white relative overflow-hidden">
  {/* Decorative Top Border */}
  <div className="h-1 bg-gradient-to-r from-transparent via-bronze to-transparent" />
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
      {/* Brand - 5 cols */}
      <div className="lg:col-span-5">...</div>
      
      {/* Menu - 2 cols */}
      <div className="lg:col-span-2 lg:col-start-7">...</div>
      
      {/* Services - 2 cols */}
      <div className="lg:col-span-2">...</div>
      
      {/* Hours & Social - 3 cols */}
      <div className="lg:col-span-3">...</div>
    </div>
  </div>
</footer>
```

### Social Icons
```tsx
<div className="flex items-center gap-3">
  {['twitter', 'instagram', 'linkedin'].map((social) => (
    <a 
      key={social}
      href="#" 
      className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-bronze hover:bg-bronze/10 transition-all duration-300"
    >
      {/* Icon SVG */}
    </a>
  ))}
</div>
```

---

## 11. Önemli Tailwind Class'ları

### Renkler
- `bg-cream` / `bg-cream-dark`
- `bg-charcoal` / `bg-charcoal-light`
- `text-bronze` / `text-bronze-light` / `text-bronze-dark`
- `text-concrete` / `text-concrete-light`

### Spacing
- `py-24 md:py-32` - Section padding
- `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` - Container
- `gap-12 lg:gap-20` - Grid gaps

### Typography
- `font-display` - Playfair Display
- `font-body` - DM Sans
- `tracking-[0.2em]` - Wide letter spacing
- `tracking-[0.3em]` - Extra wide (logo alt başlık)

---

## 12. Checklist: Baştan Başlarken

- [ ] `.gitignore`'a video dosyalarını ekle
- [ ] `layout.tsx`'te fontları değiştir (Playfair + DM Sans)
- [ ] `globals.css`'i tamamen değiştir (Industrial Luxury tema)
- [ ] `Header.tsx`'i güncelle
- [ ] `Footer.tsx`'i güncelle
- [ ] `page.tsx` (Ana Sayfa) oluştur
- [ ] `app/hakkimizda/page.tsx` oluştur
- [ ] `app/projeler/page.tsx` oluştur
- [ ] `app/iletisim/page.tsx` oluştur
- [ ] Build testi yap (`npm run build`)

---

## Notlar

1. **Video arka plan:** Pexels'ten geçici video kullanılıyor. Orijinal videolar büyük olduğu için GitHub'a push edilmiyor.

2. **Görseller:** Henüz gerçek proje görselleri eklenmedi. Placeholder olarak grid pattern + bronz vurgular kullanılıyor.

3. **Responsiveness:** Tüm tasarım mobile-first, Tailwind breakpoint'leri:
   - `sm:` 640px
   - `md:` 768px
   - `lg:` 1024px
   - `xl:` 1280px

4. **Animasyonlar:** CSS keyframes kullanılıyor, kütüphane gerekmiyor.
