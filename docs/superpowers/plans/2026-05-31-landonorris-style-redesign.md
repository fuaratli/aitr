# AITR landonorris.com Tarzı Görsel Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** aitr.blog'un görsel dilini landonorris.com estetiğine taşımak (sola yaslı dev tipografi, electric cyan aksan, akan marquee, editoryal section'lar) — içerik/mimari/route'lara dokunmadan.

**Architecture:** Tek kaynak `src/styles/global.css` token + utility katmanı; tüm sayfalar bu token'lar ve paylaşılan component'ler üzerinden otomatik güncellenir. Bespoke düzen işi yalnızca `index.astro` (hero+section) ve birkaç component'te. Sinematik/gimmick efekt YOK (2026-05-28 "flashy ekleme" kuralına sadık: parçacık/3D tilt/custom cursor/konfeti geri gelmez). Tek hareket: marquee + mevcut reveal/stagger.

**Tech Stack:** Astro 6, saf CSS (yeni bağımlılık yok), mevcut IntersectionObserver tabanlı `.reveal`/`.stagger`.

**Verification model:** Repo'da test framework YOK. Her görevin doğrulaması: `npm run build` hatasız + `npm run preview` ile görsel kontrol (gerekirse `chromium --headless=new --screenshot`). `prefers-reduced-motion` ve light/dark her zaman korunur.

**Branch:** `redesign/landonorris-style` (zaten açık).

---

## Dosya Yapısı

| Dosya | Sorumluluk | Bu planda |
|------|-----------|-----------|
| `src/styles/global.css` | Renk/tipografi token'ları + utility (`.marquee`, `.display-xl`, `.section-num`, `.rule`) | Modify (Task 1, 2) |
| `src/pages/index.astro` | Ana sayfa hero + section düzeni, marquee | Modify (Task 3, 4) |
| `src/components/Header.astro` | Site başlığı | Modify (Task 5) |
| `src/components/Footer.astro` | Alt bilgi | Modify (Task 5) |
| `src/layouts/BlogPost.astro` | Yazı sayfası başlık tipografisi | Modify (Task 6) |
| `src/components/NewsletterSignup.astro`, `HeroCover.astro`, `src/pages/iletisim.astro`, `src/pages/yaz.astro` | Hardcoded indigo → token | Modify (Task 7) |

---

## Task 1: Renk token'larını electric cyan'a çevir

**Files:**
- Modify: `src/styles/global.css:3-48` (`:root` dark + `:root[data-theme='light']`)
- Modify: `src/styles/global.css:84-86` (body radial overlay), `:262`, `:550-552` (selection)

- [ ] **Step 1: Dark token bloğunu güncelle**

`src/styles/global.css` içinde `:root, :root[data-theme='dark']` bloğunda şu satırları değiştir:

```css
	--border-glow: rgba(34, 211, 238, 0.4);

	--accent: #22d3ee;
	--accent-strong: #06b6d4;
	--accent-2: #818cf8;          /* eski indigo, ikincil aksan olarak korunur */
	--accent-2-strong: #6366f1;
```

(Mevcut `--accent: #818cf8;` ve `--accent-strong: #6366f1;` satırlarının yerine; `--border-glow` satırını güncelle; iki yeni `--accent-2*` satırını ekle.)

- [ ] **Step 2: Light token bloğunu güncelle**

`:root[data-theme='light']` bloğunda:

```css
	--border-glow: rgba(8, 145, 178, 0.4);
	--accent: #0891b2;            /* cyan light'ta daha koyu okur */
	--accent-strong: #0e7490;
	--accent-2: #6366f1;
	--accent-2-strong: #4f46e5;
```

- [ ] **Step 3: Body overlay + selection + focus cyan'a uyarla**

`body::before` radial-gradient (`:84-86`) içindeki `rgba(129, 140, 248, …)` ve `rgba(99, 102, 241, …)` değerlerini cyan/secondary karışımına çevir:

```css
		background:
			radial-gradient(ellipse 60% 50% at 20% 0%, rgba(34, 211, 238, 0.06), transparent 60%),
			radial-gradient(ellipse 50% 40% at 100% 30%, rgba(129, 140, 248, 0.05), transparent 60%),
			radial-gradient(ellipse 60% 50% at 50% 100%, rgba(34, 211, 238, 0.04), transparent 60%);
```

`input:focus` box-shadow (`:262`) `rgba(129, 140, 248, 0.2)` → `rgba(34, 211, 238, 0.2)`.
`::selection` (`:550-552`) `rgba(129, 140, 248, 0.4)` → `rgba(34, 211, 238, 0.35)`, `color: #04141a`.

- [ ] **Step 4: Build + görsel doğrula**

Run: `npm run build`
Expected: hata yok.
Run: `npm run preview` → ana sayfada link/pill/aksan renkleri cyan. Light/dark toggle ikisinde de tutarlı.

- [ ] **Step 5: Commit**

```bash
git add src/styles/global.css
git -c user.name="fuaratli" -c user.email="fuaratli@gmail.com" commit -m "style: aksan rengini electric cyan'a çevir (+ ikincil indigo token)"
```

---

## Task 2: Tipografi ölçeği + yeni utility'ler

**Files:**
- Modify: `src/styles/global.css` (headings `:115-119`; dosya sonuna utility ekle)

- [ ] **Step 1: Display başlık ölçeğini büyüt**

`src/styles/global.css:115` `h1` kuralını güncelle:

```css
h1 { font-size: clamp(2.4rem, 5vw, 3.6rem); letter-spacing: -0.035em; }
```

(h2-h5 aynı kalır; hero'nun dev başlığı Task 3'te `.display-xl` ile gelir.)

- [ ] **Step 2: Yeni utility'leri global.css sonuna ekle**

```css
/* === LANDONORRIS-STYLE UTILITIES === */

/* Sola yaslı dev display başlık */
.display-xl {
	font-family: var(--font-display);
	font-weight: 700;
	font-size: clamp(2.8rem, 8vw, 7rem);
	line-height: 0.98;
	letter-spacing: -0.045em;
	text-align: left;
	margin: 0;
}

/* Numaralı editoryal section başlığı */
.section-num {
	font-family: var(--font-mono);
	font-size: 0.8rem;
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: var(--accent);
	display: inline-block;
	margin-bottom: 0.6em;
}

/* Kalın editoryal ayraç çizgisi */
.rule {
	height: 1px;
	border: none;
	background: var(--border-2);
	margin: 0;
}

/* Sonsuz akan marquee (saf CSS) */
.marquee {
	overflow: hidden;
	width: 100%;
	-webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
	mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}
.marquee-track {
	display: inline-flex;
	gap: 2.5rem;
	white-space: nowrap;
	will-change: transform;
	animation: marquee-scroll 32s linear infinite;
}
.marquee:hover .marquee-track {
	animation-play-state: paused;
}
.marquee-item {
	font-family: var(--font-display);
	font-weight: 700;
	font-size: clamp(1.4rem, 3vw, 2.2rem);
	letter-spacing: -0.02em;
	color: var(--text-dim);
	text-decoration: none;
	transition: color 0.2s ease;
}
.marquee-item:hover { color: var(--accent); }
.marquee-item .sep { color: var(--accent); margin-left: 2.5rem; }
@keyframes marquee-scroll {
	from { transform: translateX(0); }
	to { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) {
	.marquee-track { animation: none; }
}
```

- [ ] **Step 3: Build + doğrula**

Run: `npm run build`
Expected: hata yok. (Görsel etki Task 3'te marquee kullanılınca görünür.)

- [ ] **Step 4: Commit**

```bash
git add src/styles/global.css
git -c user.name="fuaratli" -c user.email="fuaratli@gmail.com" commit -m "style: display-xl, marquee, section-num, rule utility'leri"
```

---

## Task 3: Ana sayfa hero — sola yaslı dev tipografi + marquee

**Files:**
- Modify: `src/pages/index.astro:30-61` (hero markup), `:178-263` (hero stilleri)

- [ ] **Step 1: Hero markup'ını sola yaslı düzene çevir + brand-row'u marquee yap**

`index.astro` `<section class="hero">` … `</section>` bloğunu (satır 30-61) şununla değiştir:

```html
				<section class="hero">
					<div class="hero-inner">
						<a href="/blog/chatgpt-claude-gemini-karsilastirma-2026/" class="pill announce">
							<span class="dot"></span>
							Yeni: ChatGPT vs Claude vs Gemini 2026 karşılaştırması
							<span class="arrow">→</span>
						</a>
						<h1 class="display-xl hero-title">
							Yapay zekayı<br />
							<span class="accent-word">Türkçe</span> keşfet
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
					</div>
					<div class="marquee hero-marquee" aria-label="Ele aldığımız AI araçları">
						<div class="marquee-track">
							<a class="marquee-item" href="/blog/kategori/karsilastirmalar">ChatGPT<span class="sep">·</span></a>
							<a class="marquee-item" href="/blog/kategori/karsilastirmalar">Claude<span class="sep">·</span></a>
							<a class="marquee-item" href="/blog/kategori/karsilastirmalar">Gemini<span class="sep">·</span></a>
							<a class="marquee-item" href="/blog/kategori/rehberler">Midjourney<span class="sep">·</span></a>
							<a class="marquee-item" href="/blog/kategori/incelemeler">Cursor<span class="sep">·</span></a>
							<a class="marquee-item" href="/blog/kategori/incelemeler">Perplexity<span class="sep">·</span></a>
							<a class="marquee-item" href="/blog/kategori/rehberler">Notion AI<span class="sep">·</span></a>
							<a class="marquee-item" href="/blog/kategori/rehberler">Suno<span class="sep">·</span></a>
							<a class="marquee-item" href="/blog/kategori/karsilastirmalar">ChatGPT<span class="sep">·</span></a>
							<a class="marquee-item" href="/blog/kategori/karsilastirmalar">Claude<span class="sep">·</span></a>
							<a class="marquee-item" href="/blog/kategori/karsilastirmalar">Gemini<span class="sep">·</span></a>
							<a class="marquee-item" href="/blog/kategori/rehberler">Midjourney<span class="sep">·</span></a>
							<a class="marquee-item" href="/blog/kategori/incelemeler">Cursor<span class="sep">·</span></a>
							<a class="marquee-item" href="/blog/kategori/incelemeler">Perplexity<span class="sep">·</span></a>
							<a class="marquee-item" href="/blog/kategori/rehberler">Notion AI<span class="sep">·</span></a>
							<a class="marquee-item" href="/blog/kategori/rehberler">Suno<span class="sep">·</span></a>
						</div>
					</div>
				</section>
```

(Not: marquee track içeriği iki kez tekrarlanır — `translateX(-50%)` ile kusursuz döngü için şart. 8 öğe × 2 = 16 öğe yukarıda mevcut.)

- [ ] **Step 2: Hero stillerini sola yaslıya güncelle**

`index.astro` `<style>` içindeki `.hero`, `.hero-inner`, `.hero-title`, `.hero-sub`, `.cta-row` kurallarını güncelle ve eski `.brand-row`/`.brand-chip` kurallarını sil:

```css
				.hero {
					position: relative;
					overflow: hidden;
					padding: 7em 1.25em 3.5em;
					text-align: left;
					border-bottom: 1px solid var(--border);
				}
				.hero-inner {
					position: relative;
					z-index: 2;
					max-width: 1200px;
					margin: 0 auto;
					animation: fade-up 0.6s ease both;
				}
				.announce { margin-bottom: 2em; font-weight: 500; text-decoration: none; cursor: pointer; transition: 0.2s ease; }
				.announce:hover { transform: translateY(-1px); border-color: var(--border-glow); color: var(--text); }
				.announce .dot { width: 8px; height: 8px; background: var(--accent); border-radius: 50%; }
				.announce .arrow { color: var(--text-muted); transition: 0.2s ease; }
				.announce:hover .arrow { transform: translateX(3px); color: var(--text); }
				.hero-title { margin: 0 0 0.4em 0; }
				.accent-word { color: var(--accent); }
				.hero-sub {
					font-size: 1.2em;
					color: var(--text-muted);
					max-width: 560px;
					margin: 0 0 2em 0;
					line-height: 1.6;
				}
				.cta-row {
					display: flex;
					gap: 0.75em;
					justify-content: flex-start;
					flex-wrap: wrap;
				}
				.hero-marquee {
					margin-top: 2.5em;
					padding-top: 2.5em;
					border-top: 1px solid var(--border);
				}
```

(Marquee'nin temel stili global.css'te; burada yalnızca konumlandırma var.)

- [ ] **Step 3: Mobil breakpoint kontrolü**

`@media (max-width: 760px)` içindeki `.hero { padding: 3.5em 1em 3em; }` aynı kalabilir; `.hero-sub { font-size: 1.05em; }` korunur. `.display-xl` zaten `clamp` ile küçülür — ek kural gerekmez.

- [ ] **Step 4: Build + görsel doğrula**

Run: `npm run build`
Expected: hata yok.
Run: `npm run preview` → hero sola yaslı, dev başlık ("Yapay zekayı / **Türkçe** keşfet"), altta akan marquee. Hover'da marquee durur, reduced-motion'da hiç akmaz.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro
git -c user.name="fuaratli" -c user.email="fuaratli@gmail.com" commit -m "feat(home): sola yaslı dev hero + akan marquee (landonorris tarzı)"
```

---

## Task 4: Ana sayfa section'ları — numaralı editoryal başlıklar + ayraçlar

**Files:**
- Modify: `src/pages/index.astro:68-118` (Kategoriler, Stats, Son Yazılar section header'ları), `:271-284` (`.section-head` stilleri)

- [ ] **Step 1: Section başlıklarını numaralandır**

`index.astro`'da üç `<header class="section-head">` bloğunu numaralı yap. "Ne ararsan burada" başlığını:

```html
					<header class="section-head">
						<span class="section-num">01 — Kategoriler</span>
						<h2>Ne ararsan burada</h2>
						<p>Dört ana kategoride üretiyoruz, hepsi Türkçe ve uygulamaya dönük.</p>
					</header>
```

"Son Yazılar" başlığını:

```html
					<header class="section-head">
						<span class="section-num">02 — Son Yazılar</span>
						<h2>Son Yazılar</h2>
						<p>En yeni karşılaştırmalar, rehberler ve incelemeler.</p>
					</header>
```

- [ ] **Step 2: `.section-head` stilini sola yaslı yap**

`index.astro` `<style>` içinde `.section-head` kuralını güncelle:

```css
				.section-head {
					text-align: left;
					margin-bottom: 2.5em;
					padding-top: 2.5em;
					border-top: 1px solid var(--border-2);
				}
				.section-head p { margin: 0; }
```

(`.section-head h2` ve `p` içindeki `margin: 0 auto` / `text-align:center` kalıntılarını kaldır.)

- [ ] **Step 3: Build + görsel doğrula**

Run: `npm run build`
Expected: hata yok.
Run: `npm run preview` → her section "01 — …" cyan numara + kalın üst ayraç çizgisiyle sola yaslı başlıyor.

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro
git -c user.name="fuaratli" -c user.email="fuaratli@gmail.com" commit -m "feat(home): numaralı editoryal section başlıkları + ayraçlar"
```

---

## Task 5: Header & Footer aksan/tipografi uyumu

**Files:**
- Modify: `src/components/Header.astro:185-189` (aktif link), `:123-127` (brand)
- Modify: `src/components/Footer.astro` (aksan kullanan kurallar — dosyayı oku, indigo/hardcoded varsa token'a çevir)

- [ ] **Step 1: Header aktif linke cyan vurgu**

`Header.astro:185-189` `.links a:hover/.active` kuralına aksan ekle:

```css
		.links :global(a:hover),
		.links :global(a.active) {
			color: var(--text);
			background: var(--surface-2);
		}
		.links :global(a.active) {
			color: var(--accent);
		}
```

`.brand-text` (`:123-127`) zaten token (`var(--text)`) kullanıyor — değişmez.

- [ ] **Step 2: Footer'ı oku ve token uyumla**

Run: `grep -nE '818cf8|6366f1|129, ?140, ?248|99, ?102, ?241' src/components/Footer.astro`
Bulunan her hardcoded değeri uygun token'a çevir (`--accent` veya `--accent-2`). Bulunmazsa Footer zaten token-driven, değişiklik yok — bu adımı atla.

- [ ] **Step 3: Build + doğrula**

Run: `npm run build`
Expected: hata yok.
Run: `npm run preview` → aktif nav linki cyan, header/footer cyan sistemle tutarlı.

- [ ] **Step 4: Commit**

```bash
git add src/components/Header.astro src/components/Footer.astro
git -c user.name="fuaratli" -c user.email="fuaratli@gmail.com" commit -m "style(chrome): header/footer cyan aksan uyumu"
```

---

## Task 6: Blog yazısı başlığını display ölçeğine yükselt

**Files:**
- Modify: `src/layouts/BlogPost.astro` (yazı başlığı `<h1>`/`.post-title` stil bloğu)

- [ ] **Step 1: Başlık stilini bul**

Run: `grep -nE 'post-title|\.title|font-size' src/layouts/BlogPost.astro | head -30`
Yazı başlığının class'ını ve mevcut `font-size` kuralını tespit et.

- [ ] **Step 2: Başlığı display ölçeğine çıkar**

Bulunan başlık kuralındaki `font-size`'ı şununla değiştir (sola yaslı, sıkı tracking; prose okunabilirliği değişmez):

```css
	font-size: clamp(2.2rem, 5vw, 3.6rem);
	letter-spacing: -0.035em;
	line-height: 1.05;
	text-align: left;
```

(Eğer başlıkta zaten `text-align: center` varsa `left` ile değiştir; yoksa ekleme.)

- [ ] **Step 3: Build + görsel doğrula**

Run: `npm run build`
Expected: hata yok.
Run: `npm run preview` → bir blog yazısı aç (örn `/blog/cursor-ide-turkce-rehber-2026/`): başlık iri ve sola yaslı, gövde metni (prose) okunabilir, ToC/feedback bozulmamış.

- [ ] **Step 4: Commit**

```bash
git add src/layouts/BlogPost.astro
git -c user.name="fuaratli" -c user.email="fuaratli@gmail.com" commit -m "style(post): yazı başlığını display ölçeğine yükselt"
```

---

## Task 7: Hardcoded indigo değerlerini token'a süpür

**Files:**
- Modify: `src/components/NewsletterSignup.astro`, `src/components/HeroCover.astro`, `src/pages/iletisim.astro`, `src/pages/yaz.astro`

- [ ] **Step 1: Her dosyada hardcoded değerleri bul**

Run: `grep -nE '818cf8|6366f1|4f46e5|129, ?140, ?248|99, ?102, ?241' src/components/NewsletterSignup.astro src/components/HeroCover.astro src/pages/iletisim.astro src/pages/yaz.astro`

- [ ] **Step 2: Token'a çevir**

Her eşleşmeyi anlamına göre değiştir:
- Düz renk (`#818cf8`/`#6366f1` vb.) → `var(--accent)` (vurgu) veya `var(--accent-strong)`.
- `rgba(129, 140, 248, X)` / `rgba(99, 102, 241, X)` (glow/shadow) → `rgba(34, 211, 238, X)`.
- HeroCover.astro kategori-renkli gradient üretiyorsa ve indigo bir "marka rengi" olarak kullanılmışsa, cyan'a (`#22d3ee`/`#06b6d4`) çevir; çeşitlilik için bazı kapakların `--accent-2` (indigo) kalması kabul — amaç tutarlı cyan-ağırlıklı palet.

- [ ] **Step 3: Build + görsel doğrula**

Run: `npm run build`
Expected: hata yok.
Run: `npm run preview` → `/iletisim`, `/yaz`, newsletter bloğu olan bir sayfa ve görselsiz bir yazının HeroCover'ı cyan/uyumlu görünür.

- [ ] **Step 4: Commit**

```bash
git add src/components/NewsletterSignup.astro src/components/HeroCover.astro src/pages/iletisim.astro src/pages/yaz.astro
git -c user.name="fuaratli" -c user.email="fuaratli@gmail.com" commit -m "style: kalan hardcoded indigo değerlerini cyan token'a çevir"
```

---

## Task 8: Site geneli regresyon + final doğrulama

**Files:** (yalnızca doğrulama; gerekirse sapan inline `<style>` düzeltmesi)

- [ ] **Step 1: Tüm site genelinde kalıntı indigo taraması**

Run: `grep -rnE '818cf8|6366f1|4f46e5|129, ?140, ?248|99, ?102, ?241' src/`
Expected: sadece `global.css`'teki `--accent-2*` token tanımları çıkmalı. Başka dosyada hardcoded kaldıysa Task 7 mantığıyla token'a çevir.

- [ ] **Step 2: Temiz build**

Run: `npm run build`
Expected: hata/uyarı-fail yok; tüm 50+ yazı ve sayfa derlenir.

- [ ] **Step 3: Görsel geçiş kontrolü (preview)**

Run: `npm run preview`
Kontrol et:
- Ana sayfa: sola yaslı dev hero + marquee + numaralı section'lar.
- Bir blog yazısı: iri başlık, okunabilir gövde, ToC/feedback/ses okuyucu çalışır.
- Bir kategori sayfası (`/blog/kategori/rehberler/`): kart/grid cyan uyumlu.
- `/about`, `/araclar`, `/sozluk`, `/maliyet-hesaplayici`: bozulma yok.
- Light/dark toggle: ikisinde de aksan tutarlı.
- Mobil genişlik (≤760px): hero başlığı taşmıyor, marquee düzgün.
- Reduced-motion (devtools emülasyon): marquee durur, reveal anında görünür.

- [ ] **Step 4: Son commit (varsa düzeltmeler)**

```bash
git add -A
git -c user.name="fuaratli" -c user.email="fuaratli@gmail.com" commit -m "style: landonorris redesign final regresyon düzeltmeleri" || echo "düzeltme gerekmedi"
```

- [ ] **Step 5: superpowers:finishing-a-development-branch skill'ini çağır**

Redesign tamam; merge/PR kararı için `superpowers:finishing-a-development-branch` skill'ini kullan. **Deploy uyarısı:** `main`'e merge = Cloudflare otomatik canlı deploy. Kullanıcı onayı olmadan main'e merge/push etme.

---

## Self-Review Notları

- **Spec coverage:** Spec §3.1 (renk)→Task 1; §3.2 (tipografi)→Task 2,6; §3.3 (utility)→Task 2; §4.1 (hero+section)→Task 3,4; §4.2 (Header/Footer/BlogPost/kart)→Task 5,6 (+kartlar cyan token'ı global.css'ten otomatik alır); §4.3 (diğer sayfalar)→Task 7,8; §6 (doğrulama)→her task + Task 8; §7 (hardcoded indigo riski)→Task 7,8.
- **Token tutarlılığı:** `--accent`=#22d3ee, `--accent-strong`=#06b6d4, `--accent-2`=#818cf8 her task'ta aynı isimle kullanıldı.
- **Gimmick yok:** Yeni hareket yalnızca marquee + mevcut reveal/stagger; 2026-05-28 "flashy ekleme" kuralı korundu.
