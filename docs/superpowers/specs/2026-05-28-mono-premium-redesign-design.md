# AITR — Mono Premium Yeniden Tasarımı (Design Spec)

- **Tarih:** 2026-05-28
- **Durum:** Onaylandı (brainstorming sonucu)
- **Kapsam:** Görsel/estetik yeniden tasarım — işlevsellik değişmez

## 1. Amaç ve motivasyon

Site şu an çok yoğun ve "flashy" tasarlanmış (Vanta 3D, parçacıklar, typewriter, konfeti, magnetik buton, 3D tilt, shimmer gradient, mor glow'lar). Hedef: daha **sade ve premium** — "Mono Premium" yönü: neredeyse siyah zemin, tek soğuk indigo vurgu, ince çizgiler, bol boşluk, sıkı tipografi (Linear/Vercel hissi). Gösterişi azalt, ciddiyeti ve okunabilirliği artır.

## 2. Tasarım yönü (kararlaştırıldı)

- **Estetik:** Mono Premium (monokrom, neredeyse siyah dark mod)
- **Vurgu rengi:** Indigo `#818cf8` — az ve öz (pill noktası, kategori etiketi, link, odak halkası). Marka sürekliliği için (eski mor kimliğe yakın).
- **Tema:** Dark + Light ikisi de korunur; ikisi de mono-premium'a uyarlanır. Dark ana kimlik.
- **Efekt politikası:** Agresif sadeleştirme — gösteriş efektleri tamamen kaldırılır.

## 3. Tasarım token'ları (`src/styles/global.css`)

Mevcut CSS-değişken sistemi korunur, değerler yeniden tanımlanır.

### Dark (varsayılan)
| Token | Eski | Yeni |
|---|---|---|
| `--bg` | `#07070d` | `#0a0a0c` |
| `--bg-2` / `--bg-elevated` | mor tonlu | nötr koyu gri (`#101013`, `#16161a`) |
| `--text` / `--text-muted` / `--text-dim` | `#f5f5fa` / `#cfcfe2` / `#9b9bb5` | `#fafafa` / `#a1a1aa` / `#71717a` (nötr gri) |
| `--border` / `--border-2` | beyaz %8 / %14 | `rgba(255,255,255,0.08)` / `0.12` (korunur) |
| `--accent` | `#8b5cf6` | `#818cf8` (tek vurgu) |
| `--accent-2/3/4` | pembe/mavi/cyan | **kaldırılır** (tek vurgu ilkesi) |

### Light
- `--bg` `#fafafa`, `--bg-elevated` `#ffffff`, metin `#0a0a0c`/`#52525b`/`#71717a`, border `rgba(10,10,12,0.1)`, vurgu indigo `#6366f1` (light'ta biraz daha koyu).

### Kaldırılan token/efekt grupları
- `--gradient-1/2/3/-text` çoklu gradient'ler → kaldırılır veya tek nötr değere indirilir
- `--glow-violet`, `--glow-pink` → kaldırılır; gölgeler ince ve renksiz (`0 1px 2px rgba(0,0,0,.4)`)
- `--shadow-card-hover` mor glow → nötr, hafif

### Tipografi
- Başlık `font-weight` 700/800 → **600**; `letter-spacing` `-0.03em` (sıkı)
- `--font-display` (Space Grotesk) display'de kalır; gövde Inter
- Gövde `font-size: 17px`, `line-height: 1.7` korunur
- `.gradient-text` → düz renk (`var(--text)` veya indigo), **shimmer animasyonu kaldırılır**. Sitede her yerde kullanıldığı için bu tek değişiklik site geneline yansır.

## 4. Kaldırılan efektler (kesin envanter)

### `src/components/BaseHead.astro` — inline script'ler
**Kaldır:**
- Confetti (`window.aitrConfetti`)
- 3D card tilt
- Magnetic buttons
- Mouse-reactive glow
- Typewriter (`data-typer`)
- Click ripple
- Scroll parallax (`.mesh-bg`)

**Koru (işlevsel/perf):**
- Tab-hidden + low-power tespiti
- Tema init (`aitr-theme`)
- Scroll reveal (IntersectionObserver) — çok hafif fade kalır
- Code copy butonu
- Count-up sayaçlar (`data-count`)
- GA4, AdSense, Microsoft Clarity, ClientRouter, tüm SEO/şema meta'ları

### `src/components/SiteChrome.astro`
- `CustomCursor` kaldırılır (import + kullanım). `ScrollToTop` ve `CookieConsent` kalır. SiteChrome Footer üzerinden global render edildiği için custom cursor site genelinden kalkar.

### `src/pages/index.astro` (hero yeniden yazılır)
- `Vanta3D`, `FloatingParticles`, `<div class="mesh-bg">` kaldırılır
- Typewriter span → düz statik başlık ("Yapay zekayı **Türkçe** keşfet", Türkçe indigo)
- Pulsing dot animasyonu → statik küçük indigo nokta
- Floating brand chips animasyonu (`float-tiny`) → statik chip'ler
- `btn-primary` (mor gradient + breathing glow) → düz beyaz/indigo buton
- Stat/kategori/post kartları: glow hover → ince border + hafif yükselme (translateY -2px), sheen sweep yok

### `src/styles/global.css` — kaldırılan CSS blokları
`.mesh-bg` ve `@keyframes float-slow` (mesh her sayfada referanslı → CSS'te nötrlenince site geneli temizlenir), `.gradient-text` shimmer, `.btn-primary::before` breathing glow, `.cat-card/.post-card::after` sheen sweep, `.badge-new` bounce, drop-cap gradient (`.prose > p:first-of-type::first-letter` — **kaldırılır**, mono premium sade kalır), `.mouse-glow-host`, `.tilt-card`, `.magnetic`, `.click-ripple`, `.confetti-piece`, `.typer*`, `float-tiny`, `pulse-dot` (statik nokta için sadeleştirilir).

**Koru:** `.reveal` (fade-up, süre düşürülür), `.card` temel stil (glow'suz), pull-quote (`.prose blockquote` — rafine, indigo'ya çevrilir), code-copy, focus-visible, `.sr-only`, reduced-motion guard'ları.

## 5. Kapsam (bu tur)

**Yapısal olarak elden geçen yüzeyler:**
1. `src/styles/global.css` — token + efekt temizliği (site geneline yansır)
2. `src/components/BaseHead.astro` — flashy script'lerin kaldırılması
3. `src/components/SiteChrome.astro` — CustomCursor kaldırma
4. `src/components/Header.astro` — brand-icon gradient+glow → mono kutu; brand-text gradient → düz; dropdown arka planı nötr
5. `src/components/Footer.astro` — gradient-text → düz, nötr stil
6. `src/pages/index.astro` — hero yeniden + kart stilleri
7. `src/layouts/BlogPost.astro` — yazı başlığı/meta, mesh-bg kaldırma, pull-quote rafine, prose okuma deneyimi
8. `src/pages/blog/index.astro` — liste/kart stilleri

**Site geneli (bedavaya, global katman üzerinden):** Tüm diğer sayfalar (sozluk, araclar, maliyet-hesaplayici, test, basin, about, iletisim, harita, yer-imlerim, etiket, kategori, 404, ReadingMode) yeni token'ları ve efekt temizliğini otomatik alır — yapısal cila bu turda değil ama görsel olarak tutarlı ve sade olurlar.

## 6. Korunan işlevsellik (regresyon olmayacak)

Arama (SearchModal), TTS (AudioReader), Newsletter, reklam yuvaları (AdSlot/AdSense), GA4 + Clarity, RSS, sitemap, SEO meta + JSON-LD şema, tema değiştirme, mobil hamburger menü, kod-kopyala, okuma çubuğu (ProgressBar), 50 yazının markdown/prose render'ı, dropdown navigasyon, ScrollToTop, CookieConsent.

## 7. Uygulama yaklaşımı

**Yerinde restyle** (seçilen): mevcut token sistemi sağlam; değerleri değiştir, flashy katmanları kaldır, hero gibi birkaç yüzeyi yeniden yaz. En düşük risk, işlevsellik korunur.

Reddedilen alternatifler: (a) sıfırdan tema yazımı — 50 yazının prose'unu ve reklam/SEO'yu kırma riski yüksek; (b) kademeli token migrasyon katmanı — sistem zaten var, gereksiz soyutlama.

## 8. Kapsam dışı (non-goals)

- İçerik/metin değişikliği, yeni sayfa, yeni özellik
- SEO/analitik/reklam yapılandırması değişikliği
- Yardımcı sayfaların (sozluk, araclar vb.) yapısal yeniden düzeni (sadece global stil yansıması)
- Performans dışında mimari değişiklik

## 9. Doğrulama / kabul kriterleri

- `npm run build` hatasız geçer
- `npm run dev` ile anasayfa, bir blog yazısı, blog listesi, header dropdown, dark↔light geçişi gözle kontrol edilir
- Hiçbir flashy efekt kalmaz (cursor, ripple, tilt, magnetik, konfeti, typewriter, mesh, shimmer, glow)
- Arama, TTS, newsletter, reklam yuvaları, tema toggle çalışır
- Mobilde (≤760px) hero ve kartlar düzgün
- `prefers-reduced-motion` ve düşük güç modları bozulmaz
- Konsolda JS hatası yok (kaldırılan script'lerden artık referans kalmamalı)

## 10. Riskler

- **Kaldırılan JS'e kalan referanslar:** `aitrConfetti` veya `data-typer` gibi çağrılar başka yerde olabilir → grep ile temizlenmeli.
- **mesh-bg markup'ı:** CSS'te nötrlense de boş `<div class="mesh-bg">` birçok sayfada kalır (zararsız); istenirse ayrı bir temizlik turunda silinir.
- **gradient-text bağımlılığı:** Çok sayıda sayfa bu sınıfı kullanıyor; düz renge çevirince hepsi etkilenir (istenen sonuç, ama kontrol edilmeli).
