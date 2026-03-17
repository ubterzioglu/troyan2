# TROYAN İnşaat Websitesi - Main Prompt

Bir inşaat firması websitesi oluşturacaksın. Proje Next.js 16+ (App Router), React 19, TypeScript ve Tailwind CSS v4 kullanıyor.

## 📁 PROJE YAPISI

```
src/
├── app/
│   ├── page.tsx              # Ana sayfa
│   ├── hakkimizda/page.tsx   # Hakkımızda sayfası
│   ├── projeler/page.tsx     # Projeler sayfası
│   ├── iletisim/page.tsx     # İletişim sayfası
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global stiller
├── components/
│   ├── Header.tsx            # Navigasyon header'ı
│   └── Footer.tsx            # Footer componenti
```

## 🎨 TASARIM SİSTEMİ

### Renk Paleti (Industrial Luxury)

| Değişken | Renk | Kullanım |
|----------|------|----------|
| `--color-cream` | `#f8f6f1` | Ana arka plan |
| `--color-cream-dark` | `#ede9e1` | Alternatif arka plan |
| `--color-charcoal` | `#1a1a1a` | Koyu arka plan, başlıklar |
| `--color-charcoal-light` | `#2d2d2d` | Kart arka planları |
| `--color-bronze` | `#b87333` | Vurgu rengi, CTA butonlar |
| `--color-bronze-light` | `#d4915d` | Hover durumları |
| `--color-bronze-dark` | `#8a5a28` | Aktif durumlar |
| `--color-concrete` | `#8a8a8a` | Gövde metni |

### Typography

- **Display font:** Playfair Display (Google Fonts)
- **Body font:** DM Sans (Google Fonts)
- **Heading sizes:**
  - h1: `clamp(2.5rem, 6vw, 5rem)`
  - h2: `clamp(1.75rem, 4vw, 3rem)`

### Özel CSS Class'ları (globals.css'e ekle)

```css
/* Butonlar */
.btn-bronze: Bronz arka planlı, beyaz metin, uppercase, hover'da koyulaşan ve yukarı kalkan buton
.btn-outline: Şeffaf arka plan, beyaz border (koyu arka planlar için)
.btn-outline-dark: Şeffaf arka plan, koyu border (açık arka planlar için)

/* Section başlıkları */
.section-title: Ortalanmış başlık, altında bronz çizgi
.section-title-left: Sola yaslı başlık, altında bronz çizgi

/* Efektler */
.video-overlay: Gradient overlay (hero video için)
.noise-overlay: Gürültü dokusu overlay
.grid-lines: Mimari grid çizgileri arka plan
.card-luxury: Lüks kart stili, hover'da yükselen gölge efekti

/* Animasyonlar */
.animate-fadeInUp: Yukarıdan fade-in animasyonu
.delay-100/200/300: Animasyon gecikmeleri
```

## 📄 SAYFA DETAYLARI

### 1. ANA SAYFA (/)

#### Hero Section
- Tam ekran video arka plan (pexels construction video)
- Video overlay + noise overlay + grid lines
- **Başlık:** "TROYAN İNŞAAT" (büyük)
- **Alt başlık:** "Kalite, estetik ve güven ile hayalinizdeki yapıları inşa ediyoruz"
- **2 CTA buton:**
  - "Projelerimizi Gör" (bronze)
  - "İletişime Geç" (outline)
- Scroll indicator (aşağı ok)

#### Stats Section
- **4 istatistik:**
  - 15+ Yıl Deneyim
  - 80+ Tamamlanan Proje
  - 500+ Mutlu Aile
  - 2 Şehir
- Koyu arka plan (charcoal), bronz renkli sayılar

#### About Section
- 2 kolon: Sol metin, sağ görsel
- **Başlık:** "15 Yılı Aşkın Deneyimle İnşaat Sektöründeyiz"
- "Daha Fazla Bilgi" butonu → /hakkimizda

#### Values Section
- 4 değer kartı (2x2 grid, zigzag offset):
  1. **Kalite** - Her projede en yüksek kalite standartlarını uyguluyoruz
  2. **Güven** - Yıllarca süren deneyim ve şeffaf iletişim
  3. **Estetik** - Fonksiyonellik ile estetiği bir araya getiriyoruz
  4. **Sürdürülebilirlik** - Çevre dostu malzemeler ve enerji verimli çözümler

#### Projects Preview Section
- 3 proje önizlemesi (alternatif hizalama):
  - Çanakkale Rezidans
  - İstanbul Ticaret Merkezi
  - Sahil Villaları
- "Tüm Projeler" butonu → /projeler

#### CTA Section
- Koyu arka plan, ortalanmış metin
- **Başlık:** "Hayalinizdeki Projeyi Birlikte Hayata Geçirelim"
- **2 buton:** "Ücretsiz Teklif Al", "Hemen Ara"

---

### 2. HAKKIMIZDA (/hakkimizda)

#### Hero
- Koyu arka plan, sayfa başlığı
- **Başlık:** "İnşaatta Güven ve Kalitenin Adresi"

#### Story Section
- 2 kolon (metin + görsel)
- 1999 kuruluş hikayesi
- 25 yıllık deneyim metni

#### Milestones Section (Timeline)
| Yıl | Başlık | Açıklama |
|-----|--------|----------|
| 1999 | Kuruluş | Çanakkale'de ilk proje ile başlangıç |
| 2005 | Büyüme | 10+ proje kapasitesine ulaşma |
| 2012 | İstanbul Açılımı | Ulusal ölçekte büyüme |
| 2018 | Ödüller | Sektör ödülleri |
| 2024 | Bugün | 80+ proje, 500+ mutlu aile |

#### Team Section
- 4 ekip üyesi kartı (2x2 grid):
  - Ahmet Yılmaz - Genel Müdür (20 Yıl)
  - Mehmet Demir - Proje Direktörü (15 Yıl)
  - Ayşe Kaya - Mimar (10 Yıl)
  - Ali Çelik - İnşaat Mühendisi (12 Yıl)

#### CTA Section
- Bronz arka planlı call-to-action

---

### 3. PROJELER (/projeler)

#### Hero
- Sayfa başlığı: "Tamamlanan ve Devam Eden Projelerimiz"

#### Filter Bar
- Sticky pozisyon
- Kategori butonları: Tümü, Konut Projesi, Ticari Yapı, Restorasyon, Kamu Yapısı

#### Projects List (6 proje)

| # | Proje | Kategori | Yıl | Lokasyon | Alan | Kapasite |
|---|-------|----------|-----|----------|------|----------|
| 1 | Çanakkale Rezidans | Konut | 2024 | Çanakkale Merkez | 4.200 m² | 24 Daire |
| 2 | İstanbul Ticaret Merkezi | Ticari | 2023 | İstanbul, Ataşehir | 12.500 m² | 6 Kat |
| 3 | Sahil Villaları | Konut | 2023 | Çanakkale, Kepez | 8.000 m² | 8 Villa |
| 4 | Tarihi Konak Restorasyonu | Restorasyon | 2022 | Çanakkale Merkez | 1.800 m² | 1 Yapı |
| 5 | Hastane Ek Bina | Kamu | 2022 | Çanakkale | 6.300 m² | 5 Kat |
| 6 | Bağcılar Konut Projesi | Konut | 2021 | İstanbul, Bağcılar | 18.000 m² | 120 Daire |

- Alternatif hizalama (zigzag layout)
- Her projede görsel alanı, kategori badge, lokasyon, yıl, açıklama, detay kartları

#### CTA Section
- Koyu arka plan
- "Yeni Projeniz İçin Buradayız"

---

### 4. İLETİŞİM (/iletisim)

#### Hero
- Sayfa başlığı: "Projeniz İçin Bizimle İletişime Geçin"

#### 2 Kolon Layout

**Sol - İletişim Bilgileri:**
- 📍 Adres: Karacaören Mah., Karacaören Cad. No:16/1-3, 17000 Çanakkale Merkez
- 📞 Telefon: +90 532 540 05 17
- ✉️ Email: info@troyaninsaat.com
- Çalışma Saatleri Kartı:
  - Pzt-Cum: 08:00 - 18:00
  - Cmt: 09:00 - 14:00
  - Pazar: Kapalı

**Sağ - İletişim Formu:**
- Ad Soyad * (text input)
- Telefon (tel input)
- E-posta * (email input)
- Konu (dropdown: Konut Projesi, Ticari Yapı, Tadilat/Restorasyon, İç Mimari, Diğer)
- Mesajınız * (textarea)
- Gönder butonu (bronze)
- Form gönderiminde başarı mesajı göster

---

## 🧩 COMPONENT DETAYLARI

### Header.tsx

```typescript
// Özellikler:
- Fixed position
- Scroll'da arka plan değişimi (transparent → cream/95 backdrop-blur)
- Logo: "TROYAN" (büyük) + "İnşaat" (alt, bronz)
- Navigasyon: Ana Sayfa, Projeler, Hakkımızda, İletişim
- Aktif sayfa bronz renkte
- "Teklif Al" CTA butonu
- Mobil hamburger menü (animated)
```

### Footer.tsx

```typescript
// 4 Kolon:
1. Marka bilgisi + sosyal ikonlar (Instagram, LinkedIn, WhatsApp)
2. Menü linkleri
3. Hizmetler listesi
4. İletişim bilgileri + çalışma saatleri

// Özellikler:
- Bronz dekoratif üst border (gradient)
- Arka plan: charcoal
- Copyright ve lokasyon bilgisi
```

---

## 📋 KURULUM

```bash
npx create-next-app@latest oy2 --typescript --tailwind --eslint --app --src-dir
cd oy2
npm install
```

### Font Kurulumu (layout.tsx)

```typescript
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
```

### Metadata

```typescript
export const metadata: Metadata = {
  title: "TROYAN İNŞAAT | Çanakkale & İstanbul",
  description: "Kalite, estetik ve güven ile inşaat hizmetleri. Çanakkale ve İstanbul'da prestijli projeler.",
};
```

---

## ⚠️ ÖNEMLİ NOTLAR

1. **Hero video:** Direkt embed et (pexels construction video URL)
2. **Görseller:** Placeholder kullan (renkli divler + grid pattern)
3. **Client Components:**
   - Header (scroll ve mobile menu için)
   - İletişim formu (useState kullanımı)
4. **Responsive:** Mobile-first tasarım
5. **Türkçe karakter desteği:** UTF-8
6. **Accessibility:** Aria-label'lar, semantik HTML

---

## ✅ KONTROL LİSTESİ

- [ ] Tüm 4 sayfa çalışıyor
- [ ] Header navigasyonu düzgün çalışıyor
- [ ] Mobil menü açılıp kapanıyor
- [ ] Hero video oynuyor
- [ ] Form gönderimi başarı mesajı gösteriyor
- [ ] Tüm butonlar hover efektine sahip
- [ ] Responsive (mobil/tablet/desktop)
- [ ] ESLint hatası yok
- [ ] Build başarılı (`npm run build`)
