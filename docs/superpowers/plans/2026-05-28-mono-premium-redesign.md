# AITR Mono Premium Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** AITR blogunu "Mono Premium" estetiğine (neredeyse siyah zemin, tek indigo vurgu, ince çizgiler, sıkı tipografi, gösteriş efektleri kaldırılmış) yeniden tasarlamak; tüm işlevsellik korunur.

**Architecture:** Yerinde restyle. Mevcut CSS-değişken (token) sistemi korunur, değerleri mono palete çevrilir. Flashy efektler hem `global.css` (CSS) hem `BaseHead.astro` (inline JS) hem `SiteChrome.astro` (CustomCursor) katmanlarından kaldırılır — bu üç dosya site geneline yansır. Sonra anasayfa/header/footer/blog yüzeyleri yapısal olarak elden geçer.

**Tech Stack:** Astro 6, vanilla CSS (CSS değişkenleri), inline `is:inline` script'ler. Test altyapısı yok → doğrulama: `npm run build` (hatasız) + `npm run dev` ile gözle kontrol. Spec: `docs/superpowers/specs/2026-05-28-mono-premium-redesign-design.md`.

**Verification model (bu plan için):** Her görev = uygula → `npm run build` (veya dev'de bak) → commit. Birim test yazılmaz; "test" = build başarısı + belirtilen gözle kontrol.

---

### Task 0: Ortam kurulumu ve baseline

**Files:** yok (sadece bağımlılık kurulumu)

- [ ] **Step 1: Bağımlılıkları kur**

Run: `cd /home/furkan/Projeler/aitr && npm install`
Expected: hatasız kurulum (node >= 22.12 gerekir; düşükse `nvm use 22` veya uyarıyı not et).

- [ ] **Step 2: Baseline build al**

Run: `npm run build`
Expected: `dist/` üretilir, hata yok. (Mevcut site sorunsuz derleniyor olmalı — değişiklik öncesi referans.)

- [ ] **Step 3: Dev sunucuyu başlat ve mevcut hali gör**

Run: `npm run dev` (arka planda) → `http://localhost:4321`
Expected: Anasayfa flashy haliyle açılır. Bu, "öncesi" referansı.

- [ ] **Step 4: Commit (gerekmez — kod değişmedi)**

Bu görevde commit yok.

---

### Task 1: Mono palet token'ları (global.css `:root`)

**Files:**
- Modify: `src/styles/global.css:1-63` (dark + light `:root` blokları)

- [ ] **Step 1: Dark token bloğunu değiştir**

`:root, :root[data-theme='dark']` bloğunu (satır ~3-45) tamamen şununla değiştir:

```css
:root,
:root[data-theme='dark'] {
	--bg: #0a0a0c;
	--bg-2: #101013;
	--bg-elevated: #16161a;
	--surface: rgba(255, 255, 255, 0.025);
	--surface-2: rgba(255, 255, 255, 0.05);
	--surface-3: rgba(255, 255, 255, 0.08);

	--border: rgba(255, 255, 255, 0.08);
	--border-2: rgba(255, 255, 255, 0.12);
	--border-glow: rgba(129, 140, 248, 0.4);

	--text: #fafafa;
	--text-muted: #a1a1aa;
	--text-dim: #71717a;

	--accent: #818cf8;
	--accent-strong: #6366f1;

	--shadow-card: 0 1px 2px rgba(0, 0, 0, 0.4);
	--shadow-card-hover: 0 4px 16px rgba(0, 0, 0, 0.5);

	--font-sans: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
	--font-display: 'Space Grotesk', 'Inter', ui-sans-serif, system-ui, sans-serif;
	--font-mono: ui-monospace, 'JetBrains Mono', SFMono-Regular, Menlo, Consolas, monospace;
}
```

Kaldırılanlar: `--accent-2/3/4`, tüm `--gradient-*`, `--glow-violet`, `--glow-pink`.

- [ ] **Step 2: Light token bloğunu değiştir**

`:root[data-theme='light']` bloğunu (satır ~47-63) şununla değiştir:

```css
:root[data-theme='light'] {
	--bg: #fafafa;
	--bg-2: #f4f4f5;
	--bg-elevated: #ffffff;
	--surface: rgba(10, 10, 12, 0.03);
	--surface-2: rgba(10, 10, 12, 0.05);
	--surface-3: rgba(10, 10, 12, 0.08);
	--border: rgba(10, 10, 12, 0.1);
	--border-2: rgba(10, 10, 12, 0.15);
	--border-glow: rgba(99, 102, 241, 0.4);
	--text: #0a0a0c;
	--text-muted: #52525b;
	--text-dim: #71717a;
	--accent: #6366f1;
	--accent-strong: #4f46e5;
	--shadow-card: 0 1px 2px rgba(10, 10, 12, 0.06);
	--shadow-card-hover: 0 4px 16px rgba(10, 10, 12, 0.1);
}
```

- [ ] **Step 3: theme-color meta'yı güncelle**

`src/components/BaseHead.astro:66` — `<meta name="theme-color" content="#07070d" />` → `content="#0a0a0c"`.

- [ ] **Step 4: Build doğrula**

Run: `npm run build`
Expected: hata yok. (Kaldırılan değişkenlere kalan referanslar build'i kırmaz ama görsel bozabilir; sonraki task'larda temizlenecek.)

- [ ] **Step 5: Commit**

```bash
git add src/styles/global.css src/components/BaseHead.astro
git commit -m "refactor(theme): mono premium renk token'larına geçiş"
```

---

### Task 2: global.css — flashy CSS bloklarını kaldır, kalanları rafine et

**Files:**
- Modify: `src/styles/global.css` (efekt blokları)

- [ ] **Step 1: `.btn-primary` düz hale getir**

Satır ~296-305 `.btn-primary` + `:hover` ve satır ~444-462 `.btn-primary { position/isolation }` + `.btn-primary::before` + `@keyframes btn-pulse` bloklarını şununla değiştir (tek `.btn-primary` tanımı kalsın, `::before` ve `btn-pulse` tamamen silinsin):

```css
.btn-primary {
	background: var(--text);
	color: var(--bg);
	border-color: var(--text);
}
.btn-primary:hover {
	transform: translateY(-1px);
	opacity: 0.9;
	color: var(--bg);
}
```

- [ ] **Step 2: `.gradient-text`'i düz renge çevir**

Satır ~338-344 ve ~421-441 (iki `.gradient-text` tanımı + `@keyframes text-shimmer`) bloklarını tek şununla değiştir (shimmer ve keyframe silinir):

```css
.gradient-text {
	color: var(--text);
}
```

- [ ] **Step 3: `.mesh-bg` ve `float-slow`'u nötrle**

Satır ~361-403 (`.mesh-bg`, `.mesh-bg::before/::after`, `@keyframes float-slow`) → tamamen sil. Yerine tek satır:

```css
.mesh-bg { display: none; }
```
(Markup'ta `<div class="mesh-bg">` birçok sayfada var; bu kural hepsini görünmez yapar.)

- [ ] **Step 4: Kart sheen sweep'ini kaldır**

Satır ~464-493 (`.cat-card, .post-card { position/overflow }` + `::after` + `:hover::after`) → sil. (Kartların temel stili kendi sayfalarında/`.card`'ta tanımlı; sheen gider.)

- [ ] **Step 5: Drop-cap, badge-bounce, pulse-dot, float-tiny, mouse-glow, tilt, magnetic, parallax, ripple, confetti, typer CSS'lerini sil**

Şu blokları tamamen sil:
- `.prose > p:first-of-type::first-letter` drop-cap (satır ~553-565)
- `.badge-new` içindeki `animation: badge-bounce...` satırını kaldır, `@keyframes badge-bounce` (satır ~548-551) sil — `.badge-new` kalır ama statik
- `@keyframes pulse-dot` (satır ~496-505) sil
- `@keyframes float-tiny` (satır ~508-511) sil
- `@keyframes hero-pop` (satır ~514-517) sil (kullanılmıyorsa)
- `.mouse-glow-host` + `::before` (satır ~723-739) sil
- `.tilt-card*` (satır ~741-761) sil
- `.magnetic*` (satır ~763-769) sil
- `.parallax-bg` (satır ~771-774) sil
- `.click-ripple` + `@keyframes ripple-expand` (satır ~776-797) sil
- `.confetti-piece` + `@keyframes confetti-fly` (satır ~676-695) sil
- `.typer-wrap`, `.typer`, `.typer-caret`, `@keyframes typer-blink` (satır ~697-721) sil

- [ ] **Step 6: Pull-quote'u indigo'ya çevir (kalır, rafine)**

`.prose blockquote` (satır ~568-580) içinde `border` ve `::before` rengini indigo'ya: `.prose blockquote::before { color: var(--accent); }` zaten accent kullanıyor — accent artık indigo, dokunma. Arka plan gradient'ini sadeleştir: `background: var(--surface);` yap (mor gradient yerine).

- [ ] **Step 7: `.reveal` fade süresini düşür (daha hafif)**

Satır ~519-529 `.reveal` transition'ı `0.7s` → `0.5s` yap. `.stagger` blokları (satır ~814-829) kalır.

- [ ] **Step 8: Performans bölümündeki gradient-text/typer referanslarını temizle**

Satır ~831-862 arası `body.tab-hidden ... .gradient-text, .typer, .typer-caret ...` ve `body.low-power .gradient-text` kurallarından artık var olmayan seçicileri (`.typer`, `.typer-caret`, `.gradient-text` animasyonu) çıkar; `.mesh-bg::before/::after` ve `.particle` referansları zararsız kalabilir.

- [ ] **Step 9: Build + gözle kontrol**

Run: `npm run build && npm run dev`
Expected: build hatasız. Anasayfada artık shimmer/glow/sheen/drop-cap yok; renkler mono. (Hero hâlâ Vanta/particles içeriyor — Task 5'te kalkacak.)

- [ ] **Step 10: Commit**

```bash
git add src/styles/global.css
git commit -m "refactor(css): flashy efektleri kaldır, mono premium'a sadeleştir"
```

---

### Task 3: BaseHead.astro — flashy inline script'leri kaldır

**Files:**
- Modify: `src/components/BaseHead.astro` (satır ~301-536 arası efekt script'leri)

- [ ] **Step 1: Şu `<script is:inline>` bloklarını tamamen sil**

Yorum başlıklarıyla tanımlı blokları kaldır:
- `/* === CONFETTI === */` (satır ~301-335)
- `/* === 3D CARD TILT === */` (satır ~337-376)
- `/* === MAGNETIC BUTTONS === */` (satır ~378-409)
- `/* === MOUSE-REACTIVE GLOW === */` (satır ~411-436)
- `/* === TYPEWRITER === */` (satır ~438-481)
- `/* === CLICK RIPPLE === */` (satır ~483-504)
- `/* === SCROLL PARALLAX === */` (satır ~506-536)

- [ ] **Step 2: Korunan script'leri DOKUNMA**

Şunlar KALIR: tab-hidden/low-power (satır ~79-99), tema init (~101-110), reveal observer (~188-214), code copy (~216-251), counters (~253-299), GA4 (~158-173), AdSense (~175-177), Clarity (~180-186), ClientRouter, tüm meta/şema.

- [ ] **Step 3: Build doğrula**

Run: `npm run build`
Expected: hata yok.

- [ ] **Step 4: Gözle kontrol (dev)**

`http://localhost:4321` — fareyi gezdir: custom efekt yok; tıkla: ripple yok; kartlara hover: tilt yok. (CustomCursor hâlâ aktif — Task 4'te kalkacak.)

- [ ] **Step 5: Commit**

```bash
git add src/components/BaseHead.astro
git commit -m "refactor(js): konfeti/tilt/magnetik/glow/typewriter/ripple/parallax script'lerini kaldır"
```

---

### Task 4: SiteChrome.astro — CustomCursor kaldır

**Files:**
- Modify: `src/components/SiteChrome.astro`

- [ ] **Step 1: CustomCursor import ve kullanımını sil**

`src/components/SiteChrome.astro` tamamını şununla değiştir:

```astro
---
import ScrollToTop from './ScrollToTop.astro';
import CookieConsent from './CookieConsent.astro';
---

<ScrollToTop />
<CookieConsent />
```

- [ ] **Step 2: Build + gözle kontrol**

Run: `npm run build && npm run dev`
Expected: hata yok; site genelinde normal fare imleci (custom cursor gitti).

- [ ] **Step 3: Commit**

```bash
git add src/components/SiteChrome.astro
git commit -m "refactor: custom cursor'ı kaldır (mono premium sadeleştirme)"
```

---

### Task 5: Anasayfa hero'yu yeniden yaz (index.astro)

**Files:**
- Modify: `src/pages/index.astro` (importlar, hero `<section>`, hero CSS)

- [ ] **Step 1: Flashy importları kaldır**

Satır 10-12'deki şu importları sil:
```astro
import HeroCover from '../components/HeroCover.astro';   // KALIR (post kartlarında kullanılıyor) — silme!
import FloatingParticles from '../components/FloatingParticles.astro';  // sil
import Vanta3D from '../components/Vanta3D.astro';  // sil
```
Yalnızca `FloatingParticles` ve `Vanta3D` importlarını sil. `HeroCover` KALIR.

- [ ] **Step 2: Hero `<section>` markup'ını değiştir**

Satır ~32-67 arası `<section class="hero">...</section>` bloğunu şununla değiştir:

```astro
<section class="hero">
	<div class="hero-inner">
		<a href="/blog/chatgpt-claude-gemini-karsilastirma-2026/" class="pill announce">
			<span class="dot"></span>
			Yeni: ChatGPT vs Claude vs Gemini 2026 karşılaştırması
			<span class="arrow">→</span>
		</a>
		<h1 class="hero-title">
			Yapay zekayı <span class="accent-word">Türkçe</span> keşfet
		</h1>
		<p class="hero-sub">
			ChatGPT, Claude, Gemini, Midjourney ve onlarca AI aracı için derinlikli
			karşılaştırmalar, dürüst incelemeler ve adım adım Türkçe rehberler.
		</p>
		<div class="cta-row">
			<a class="btn btn-primary" href="/blog">
				Yazıları Keşfet
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
			</a>
			<a class="btn btn-ghost" href="/about">AITR Nedir?</a>
		</div>
		<div class="brand-row" aria-label="Bu sitede ele aldığımız markalar">
			<a class="brand-chip" href="/blog/kategori/karsilastirmalar">ChatGPT</a>
			<a class="brand-chip" href="/blog/kategori/karsilastirmalar">Claude</a>
			<a class="brand-chip" href="/blog/kategori/karsilastirmalar">Gemini</a>
			<a class="brand-chip" href="/blog/kategori/rehberler">Midjourney</a>
			<a class="brand-chip" href="/blog/kategori/incelemeler">Cursor</a>
			<a class="brand-chip" href="/blog/kategori/incelemeler">Perplexity</a>
			<a class="brand-chip" href="/blog/kategori/rehberler">Notion AI</a>
		</div>
	</div>
</section>
```

Değişen: `<Vanta3D />`, `<div class="mesh-bg">`, `<FloatingParticles>` silindi; typewriter span → `<span class="accent-word">Türkçe</span>` statik; pill'den `pill-glow` kaldırıldı.

- [ ] **Step 3: Hero CSS'ini güncelle**

`<style>` içinde:
- `.announce .dot` (satır ~211-217): `animation: pulse-dot ...` satırını sil → statik nokta. `background: var(--accent);` yap.
- `.announce:hover` (satır ~206-210): `box-shadow: var(--glow-violet);` → `border-color: var(--border-glow);` ve `color: var(--text);`
- `.hero-title` font-weight `700` → `600` (satır ~231).
- `.accent-word { color: var(--accent); }` ekle (gradient-text yerine).
- `.brand-chip` (satır ~254-265): `animation: float-tiny ...` satırını sil; `:nth-child` animation-delay kurallarını (satır ~271-277) sil. Statik chip kalır.

- [ ] **Step 4: Build + gözle kontrol**

Run: `npm run build && npm run dev`
Expected: hata yok. Anasayfa hero artık tek katman, statik, mono + indigo "Türkçe" vurgu. Vanta/particles/typewriter yok.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat(home): hero'yu mono premium'a göre yeniden yaz (efektsiz, statik)"
```

---

### Task 6: Header.astro — brand'ı mono yap

**Files:**
- Modify: `src/components/Header.astro` (`.brand-icon`, `.brand-text` CSS)

- [ ] **Step 1: `.brand-icon`'u mono kutu yap**

Satır ~112-120 `.brand-icon` bloğunu değiştir:

```css
.brand-icon {
	display: grid;
	place-items: center;
	width: 32px;
	height: 32px;
	background: transparent;
	border: 1px solid var(--border-2);
	border-radius: 9px;
}
```
(`background: var(--gradient-1)` ve `box-shadow: var(--glow-violet)` kaldırıldı. İçindeki SVG `fill="white"` → dark'ta beyaz görünür; light için `fill="currentColor"` yapıp `.brand-icon svg { color: var(--text); }` eklenebilir — Step 2.)

- [ ] **Step 2: Brand SVG rengini temaya uyarla**

`Header.astro:16` ve `:17` — SVG path/circle `fill="white"` → `fill="currentColor"`. CSS'e ekle: `.brand-icon { color: var(--text); }`.

- [ ] **Step 3: `.brand-text`'i düz renk yap**

Satır ~121-129 `.brand-text` bloğunu değiştir:

```css
.brand-text {
	font-weight: 800;
	font-size: 1.15em;
	color: var(--text);
}
```
(gradient-text clip kaldırıldı.)

- [ ] **Step 4: Build + gözle kontrol (dark + light)**

Run: `npm run build && npm run dev`
Expected: Logo mono, hem dark hem light'ta okunur. Dropdown nötr.

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.astro
git commit -m "refactor(header): brand'ı mono yap, gradient/glow kaldır"
```

---

### Task 7: Footer.astro — gradient-text'i düz renge çevir

**Files:**
- Modify: `src/components/Footer.astro`

- [ ] **Step 1: gradient-text kullanımını kontrol et ve sadeleştir**

Run: `grep -n "gradient-text\|gradient\|glow" src/components/Footer.astro`
Bulunan her `gradient-text` sınıfını markup'tan kaldır (artık global'de düz renk veriyor ama tutarlılık için temizle) veya bırak (global `.gradient-text { color: var(--text) }` zaten düz yapıyor). Footer'daki marka/başlık öğelerinin `color: var(--text)` aldığından emin ol. Mor `glow`/`gradient` inline stilleri varsa nötrle.

- [ ] **Step 2: Build + gözle kontrol**

Run: `npm run build && npm run dev`
Expected: Footer mono, tutarlı.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.astro
git commit -m "refactor(footer): mono premium'a uyarla"
```

---

### Task 8: BlogPost.astro — yazı düzenini sadeleştir

**Files:**
- Modify: `src/layouts/BlogPost.astro`

- [ ] **Step 1: mesh-bg ve flashy referansları temizle**

Run: `grep -n "mesh-bg\|gradient-text\|glow\|Vanta\|FloatingParticles" src/layouts/BlogPost.astro`
- `<div class="mesh-bg">` varsa sil (global'de zaten display:none ama markup temizliği).
- `gradient-text` sınıflarını başlık/meta'dan kaldır (düz `var(--text)`).
- İnline mor `glow`/`gradient` stillerini nötrle.

- [ ] **Step 2: Post header'ı sadeleştir**

Yazı başlığı (`.post-header` / `h1`) font-weight 600, indigo vurgu sadece kategori etiketinde. Hero kapak görseli üstündeki glow/gradient overlay'leri kaldır. (`grep` ile bulunan `box-shadow: var(--glow-*)` → `var(--shadow-card)`.)

- [ ] **Step 3: Build + gözle kontrol**

Run: `npm run build && npm run dev` → bir yazıya gir (örn. `/blog/ai-ile-turkce-seo-2026/`)
Expected: Okuma deneyimi temiz, mono; prose, tablo, kod blokları, pull-quote düzgün; TTS/feedback/related çalışır.

- [ ] **Step 4: Commit**

```bash
git add src/layouts/BlogPost.astro
git commit -m "refactor(blogpost): yazı düzenini mono premium'a sadeleştir"
```

---

### Task 9: blog/index.astro — liste/kart stillerini sadeleştir

**Files:**
- Modify: `src/pages/blog/index.astro`

- [ ] **Step 1: Flashy referansları temizle**

Run: `grep -n "mesh-bg\|gradient-text\|glow\|gradient-1\|gradient-2" src/pages/blog/index.astro`
- `<div class="mesh-bg">` sil.
- `gradient-text` → düz.
- Kart hover'ında `box-shadow: var(--glow-*)` → `var(--shadow-card-hover)`; border-hover `var(--border-glow)`.

- [ ] **Step 2: Build + gözle kontrol**

Run: `npm run build && npm run dev` → `/blog`
Expected: Liste mono, kartlar ince çizgili, filtre/kategori çalışır.

- [ ] **Step 3: Commit**

```bash
git add src/pages/blog/index.astro
git commit -m "refactor(blog-list): liste ve kartları mono premium'a sadeleştir"
```

---

### Task 10: Temizlik, dangling referans taraması ve final QA

**Files:**
- Delete (opsiyonel): `src/components/Vanta3D.astro`, `src/components/FloatingParticles.astro`, `src/components/CustomCursor.astro`

- [ ] **Step 1: Kaldırılan JS'e kalan referansları ara**

Run:
```bash
grep -rn "aitrConfetti\|data-typer\|tilt-card\|mouse-glow\|click-ripple\|magnetic\|Vanta3D\|FloatingParticles\|CustomCursor" src
```
Expected: Yalnızca kullanılmayan component dosyalarının kendi içleri kalmalı. Başka yerde `aitrConfetti(...)` çağrısı veya `data-typer` attribute'u varsa kaldır.

- [ ] **Step 2: Artık kullanılmayan component dosyalarını sil**

Step 1'de hiçbir aktif kullanım yoksa:
```bash
git rm src/components/Vanta3D.astro src/components/FloatingParticles.astro src/components/CustomCursor.astro
```

- [ ] **Step 3: global.css'te kalan eski token referanslarını ara**

Run: `grep -rn "glow-violet\|glow-pink\|gradient-1\|gradient-2\|gradient-3\|accent-2\|accent-3\|accent-4" src`
Expected: 0 sonuç. Çıkanları `var(--accent)` / `var(--shadow-card)` ile değiştir.

- [ ] **Step 4: Final build**

Run: `npm run build`
Expected: hatasız, uyarısız.

- [ ] **Step 5: Tam gözle QA (dev)**

Run: `npm run dev`
Kontrol listesi:
- Anasayfa: hero statik/mono, kategoriler, stats, post grid temiz
- Bir blog yazısı: prose, tablo, kod-kopyala, pull-quote, TTS, related
- `/blog` listesi + bir kategori sayfası
- Header dropdown + mobil hamburger (≤980px)
- Dark ↔ light geçişi (ThemeToggle) — ikisi de mono premium
- Arama (⌘K / SearchModal), Newsletter formu, reklam yuvaları render
- Konsolda JS hatası yok
- Hiçbir flashy efekt kalmadı (cursor, ripple, tilt, magnetik, konfeti, typewriter, mesh, shimmer, glow)

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: kullanılmayan efekt component'lerini sil, dangling referansları temizle"
```

---

## Self-Review (plan yazarı tarafından yapıldı)

- **Spec coverage:** Token (Task 1), CSS efekt temizliği (Task 2), JS efekt temizliği (Task 3), CustomCursor (Task 4), hero (Task 5), Header (Task 6), Footer (Task 7), BlogPost (Task 8), blog listesi (Task 9), site-geneli yansıma + temizlik (Task 10). Spec'in 5. bölümündeki 8 yüzeyin hepsi karşılandı. Korunan işlevsellik (spec §6) Task 3 Step 2 ve Task 10 QA'da güvence altında.
- **Placeholder taraması:** Removal task'larında "şu bloğu sil" + tanımlayıcı yorum/satır aralığı verildi; yeni/değişen kod tam gösterildi. Grep tabanlı task'lar (7,8,9) mekanik temizlik olduğu için komut + kural verildi.
- **Tip/isim tutarlılığı:** `--accent` (indigo) tüm task'larda tutarlı; `.accent-word` Task 5'te tanımlanıp kullanıldı; `--border-glow` indigo'ya çevrildi ve hover'larda kullanıldı.
- **Not:** Satır numaraları mevcut dosya haline göredir; düzenleme sırasında kayabilir — yorum başlıkları/seçici adları birincil referanstır.
