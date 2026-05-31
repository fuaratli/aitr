# AITR — landonorris.com Tarzı Görsel Yeniden Tasarım

**Tarih:** 2026-05-31
**Branch:** `redesign/landonorris-style`
**Kapsam:** Sadece görsel katman. İçerik, içerik mimarisi, component yapısı, routing KORUNUR.

## 1. Amaç

aitr.blog'un mevcut "Mono Premium" koyu temasını, [landonorris.com](https://landonorris.com)
estetiğine taşımak: sola yaslı dev editoryal tipografi, yüksek kontrast, bol negatif alan,
akan marquee, scroll ile beliren büyük section'lar. Lando'nun lime aksanı yerine
**AI/tech hissi veren electric cyan** kullanılır.

Yaklaşım: **A — "Editorial Brutalist"** (onaylandı). Sinematik parallax/sticky-pin (Yaklaşım B)
ve sadece-renk değişikliği (Yaklaşım C) elendi.

## 2. Sınırlar (YAGNI / Dokunulmayacaklar)

- `src/content/blog/*.md` — 50+ yazı: **dokunulmaz**.
- `src/content.config.ts`, `src/lib/*`, routing (`src/pages/**/[...].astro`): mantık değişmez.
- Yeni bağımlılık eklenmez (saf CSS + mevcut IntersectionObserver altyapısı).
- Performans ve okunabilirlik korunur; `prefers-reduced-motion` desteği sürer.
- AdSense slot'ları, SEO/şema, RSS, sitemap: bozulmaz.

## 3. Tasarım Sistemi Değişiklikleri (`src/styles/global.css`)

### 3.1 Renk token'ları
- `--accent`: `#818cf8` → **`#22d3ee`** (electric cyan).
- `--accent-strong`: `#6366f1` → **`#06b6d4`** (cyan-600).
- `--border-glow`: cyan tonuna güncellenir (`rgba(34, 211, 238, 0.4)`).
- İndigo/violet (`#818cf8`/`#6366f1`) **ikincil aksan** olarak `--accent-2` adıyla korunur
  (gradient'ler, mesh overlay, seçili vurgular).
- Light tema karşılıkları da güncellenir (cyan, light'ta `#0891b2` gibi daha koyu okur).
- `::selection`, focus ring, body radial-gradient overlay cyan'a uyarlanır.

### 3.2 Tipografi
- Display ölçeği büyür ve sıkışır: `h1` hero bağlamında `clamp(2.6rem, 8vw, 7rem)`,
  `letter-spacing: -0.04em`, `font-weight: 700`.
- `--font-display` (Space Grotesk) korunur; gerekirse hero için daha ağır kullanım.
- Section başlıkları **numaralı editoryal** stil: `01 — Başlık` (mono küçük numara + büyük başlık).

### 3.3 Yeni yardımcı sınıflar
- `.marquee` — sonsuz yatay kayan şerit (saf CSS keyframes, hover'da yavaşlar/durur,
  `prefers-reduced-motion`'da durur).
- `.display-xl` — sola yaslı dev başlık utility'si.
- `.rule` / kalın grid ayraç çizgileri (section sınırları).
- Mevcut `.reveal` / `.stagger` korunur, büyük section girişlerinde belirginleştirilir.

## 4. Sayfa/Section Düzen Değişiklikleri

### 4.1 Ana sayfa (`src/pages/index.astro`)
- **Hero:** Ortalı düzen → **sola yaslı**. Başlık: dev display ("Yapay zekayı / **Türkçe** / keşfet"
  satır kırılımlı, cyan vurgu). Alt metin + CTA sola yaslı.
- **Marquee:** Mevcut `.brand-row` (statik chip'ler) → akan `.marquee` şeridine dönüşür
  (ChatGPT · Claude · Gemini · Midjourney · Cursor · Perplexity · Notion AI · …).
- **Kategoriler / Son Yazılar / İstatistikler:** numaralı section başlıkları, kalın ayraç
  çizgileri, scroll-reveal vurgusu. Grid yapısı korunur, kart görselleri yeniden boyandırılır.
- Reklam slot'ları yerinde kalır.

### 4.2 Paylaşılan component'ler
- `Header.astro` — tipografi/aksan uyumu, daha keskin/editoryal görünüm. Nav yapısı aynı.
- `Footer.astro` — aksan ve ayraç uyumu.
- `BlogPost.astro` (layout) — yazı başlığı display ölçeğine yükseltilir, prose/okunabilirlik korunur.
- Kart benzeri component'ler (post-card, cat-card, pill, btn) cyan glow + keskin köşe diline uyar.

### 4.3 Diğer sayfalar
about, araclar, basin, blog/index, kategori, sözlük, maliyet-hesaplayici vb. çoğunlukla
`global.css` token'ları + paylaşılan component'ler üzerinden **otomatik** güncellenir.
Belirgin sapma gösteren sayfa-içi `<style>` blokları varsa tek tek hizalanır.

## 5. Birim Sınırları

| Birim | Görevi | Bağımlılık |
|------|--------|-----------|
| `global.css` token katmanı | Renk/tipografi/utility tek kaynak | — |
| `index.astro` hero+section | Ana sayfa düzeni | global.css token'ları |
| Header/Footer | Site iskeleti | global.css |
| BlogPost layout | Yazı sayfası tipografisi | global.css |

Her birim bağımsız doğrulanabilir: token değişimi tüm sayfalara yansır; düzen değişiklikleri
ilgili dosyada izole.

## 6. Doğrulama / Başarı Kriterleri

- `npm run build` hatasız geçer.
- `npm run dev` ile ana sayfa, bir blog yazısı, bir kategori sayfası görsel kontrol edilir.
- Hero sola yaslı dev tipografi + akan marquee görünür.
- Aksan her yerde cyan; light/dark ikisi de tutarlı.
- Reduced-motion'da animasyonlar durur; performans regresyonu yok.
- İçerik/route/AdSense/SEO bozulmamış (sayfalar render olur, linkler çalışır).

## 7. Riskler

- Sayfa-içi gömülü `<style>`'ların eski indigo değerlerini hardcode etmiş olması → grep ile taranır.
- Çok büyük tipografinin mobilde taşması → `clamp()` + mobil breakpoint ayarı.
- Cloudflare deploy (wrangler) etkilenmez; sadece statik çıktı değişir.
