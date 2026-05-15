---
title: 'Lovable ve V0 ile Kod Yazmadan Web Sitesi Yapmak: 30 Dakikada Canlı SaaS'
description: 'Lovable.dev ve Vercel V0 ile fikirden çalışan ürüne. Prompt yaz, AI Next.js + Tailwind kodunu üretsin, deploy etsin. Sıfır kod, gerçek sonuç. Karşılaştırma + rehber.'
pubDate: 'May 15 2026'
category: 'rehber'
tags: ['lovable', 'v0', 'ai web', 'no-code', 'saas', 'rehber']
---

Geçen Cumartesi Murat aradı: "Abi, müşterim için bir landing page lazım. Hafta sonu yetişebilir mi?" Eskiden cevap: "Pazartesi başlayalım, Perşembe biter." Bu sefer dedim: "30 dakika ver."

[Lovable.dev](https://lovable.dev) açtım, müşterinin sektörünü ve istediklerini bir paragrafa yazdım, **Generate** bastım. 8 dakika sonra ekranda çalışan bir landing page vardı — responsive, animasyonlu, form'lu, modern. Birkaç düzenleme yaptım, **Deploy** bastım. 30 dakika dolmadan Murat'ın müşterisine **çalışan URL** gönderiyordum.

Bu yazıda **Lovable** ve **V0** (Vercel'in alternatif aracı) ile **kod yazmadan** profesyonel web siteleri yapmayı anlatıyorum. Geliştiriciler için hız çarpanı, geliştirici olmayanlar için ise **kapı açıcı**.

## Önce Tanıyalım

Bu iki araç farklı şeyler:

### Lovable
- **Pozisyon:** Full-stack AI uygulama üretici
- **Çıktı:** Next.js + Supabase + Tailwind tam uygulama
- **Hedef:** Çalışan SaaS / ürün
- **Erişim:** [lovable.dev](https://lovable.dev)
- **Fiyat:** Free (5 mesaj/gün), Pro $20/ay (sınırsız)

### V0 (Vercel)
- **Pozisyon:** UI bileşen üretici
- **Çıktı:** React/Next.js component kodu
- **Hedef:** UI parçaları, landing page
- **Erişim:** [v0.dev](https://v0.dev)
- **Fiyat:** Free tier mevcut, Pro $20/ay

**Özetle:** Lovable = "tam uygulama yap". V0 = "şu sayfayı/bileşeni yap".

## Lovable ile İlk Uygulama — 30 Dakika

### Dakika 0-2: Hesap aç
[lovable.dev](https://lovable.dev) → Sign up → Google ile giriş.

### Dakika 2-5: İlk prompt
Ana ekran sade — bir input kutusu var. Yaz:

```
Bir küçük işletme için landing page yap.
İş türü: Yapay zeka destekli muhasebe hizmeti (KOBİ'ler için)
Bölümler:
- Hero: "AI ile muhasebeniz 10x daha hızlı" başlık, CTA buton
- Özellikler: 3 ana özellik kartı
- Fiyatlandırma: 3 plan (Başlangıç, Standart, Pro)
- SSS: 5 soru
- İletişim formu: ad, email, mesaj

Modern tasarım, mor-mavi gradient, Türkçe, mobil uyumlu.
```

**Generate** bas.

### Dakika 5-12: Render + canlı önizleme
Lovable kodu yazıyor (Next.js + Tailwind). Sağda **canlı önizleme** beliriyor. 3-5 dakika içinde tam sayfa görünür.

Eğer beğenmediğin bir kısım varsa **sohbet kutusundan** düzelt:
- "Hero başlığı daha vurucu olsun"
- "Fiyat planlarını yatay yerine dikey yap"
- "İletişim formuna 'şirket adı' alanı ekle"

Her komutta Lovable **kodu güncelliyor**, önizleme yenileniyor.

### Dakika 12-20: İçerik düzenle
Statik metinleri kendi içeriğinle değiştir. Lovable'ın **dosya gezgini** var — istersen doğrudan koda da müdahale edebilirsin (geliştiriciler için).

### Dakika 20-25: Görseller
Lovable, **AI ile görsel üretiyor** (DALL·E entegre). Veya **Unsplash**'tan otomatik çekiyor. İstersen kendi görsellerini yükle.

### Dakika 25-30: Deploy
Sağ üstte **Publish** veya **Deploy** butonu. Tek tıkla:
- Vercel'a deploy et (free)
- Veya kendi domainine bağla
- Veya kodu indir, kendi yerin için kullan

30 dakika dolmadan **canlı URL**.

## V0 ile UI Bileşen Üretimi

V0 farklı — "tam uygulama" değil, **UI parçaları**:

### Dakika 0-2: Hesap
[v0.dev](https://v0.dev) → giriş.

### Dakika 2-5: Bileşen iste
```
Bir SaaS landing page hero bileşeni:
- Sol: Başlık + 2 satır açıklama + 2 CTA buton (primary + secondary)
- Sağ: Soyut bir grafik (purple-pink gradient blob, animasyonlu)
- Responsive (mobilde stack)
- Dark mode default
- Tailwind CSS
```

**Generate**.

### Dakika 5-8: Code + Preview
V0 sana 3-4 alternatif tasarım gösterir. Beğendiğine tıkla → **kod görünür** (TypeScript + Tailwind).

### Dakika 8-15: Refine
Sohbette düzenleme:
- "Sol tarafa istatistik kartları ekle"
- "Buton renkleri pembe-mor gradient olsun"
- "Hero biraz daha kompakt olsun"

Her komutla yeni versiyon.

### Dakika 15-20: İndir / Entegre et
Bileşeni:
- **shadcn/ui benzer** olarak indirebilirsin
- Mevcut projene **kopyala-yapıştır** edebilirsin
- **GitHub'a push** edebilirsin

V0 çıktısı **gerçek React kodu** — yeniden eğitmeden, herhangi bir Next.js projesine yapıştırabilirsin.

## Hangisi Senin İçin?

### Lovable al, eğer:
- **Tam çalışan ürün** istiyorsan (landing, dashboard, CRUD app)
- **Database ihtiyacı var** (Supabase otomatik kuruluyor)
- **Geliştirici değilsen** ama uygulama üretmek istiyorsan
- **Hızlı MVP** test ediyorsan

### V0 al, eğer:
- **Bileşen** istiyorsan (hero, navbar, footer, form)
- **Geliştiricisin** ve hızlanmak istiyorsun
- **Tasarım fikri** üretiyorsun (designer alternatifi)
- **Mevcut projeye** parça ekliyorsun

## Detaylı Karşılaştırma

| Özellik | Lovable | V0 |
|---|---|---|
| Çıktı tipi | Tam uygulama | Bileşen kodu |
| Database desteği | ✅ (Supabase) | ❌ |
| Authentication | ✅ | ❌ |
| Deployment | ✅ (Vercel) | Manuel |
| Custom domain | ✅ | Manuel |
| Geliştirici kodla giriş | Orta | Yüksek |
| Türkçe içerik | ✅ | ✅ |
| Fiyat (Pro) | $20/ay | $20/ay |
| Free tier | 5 mesaj/gün | Sınırlı kullanım |

## Pratik Senaryolar

### Senaryo 1: Freelance Landing Page
Hızlı: **Lovable** → 30 dakika → müşteriye teslim
Gelir: 2.500-7.500 TL/sayfa

### Senaryo 2: Startup MVP
2 günlük: **Lovable** → temel CRUD app → ilk kullanıcılara
Sonra: kendi koda dönüş, ölçeklendirme

### Senaryo 3: Bileşen Kütüphanesi
**V0** → bileşenleri üret → kendi tasarım sistemine ekle

### Senaryo 4: Portfolio Sitesi
**Lovable** → kişisel portfolio → kendi domainine bağla
1 saatte profesyonel görünümlü site

### Senaryo 5: Dashboard Prototip
**V0** → dashboard bileşenleri → Figma'da değil **canlı kodda** mock

## Sınırlamalar

⚠️ **Karmaşık uygulamalar yetersiz:**
- Çok kullanıcılı (multi-tenant) SaaS — manuel müdahale gerekir
- Real-time özellikler (WebSocket, vs.) — sınırlı
- Mobile native app — yok (sadece web)
- AI feature'lar (ChatGPT integration) — entegre etmen lazım

⚠️ **Üretilen kod inceleme şart:**
- AI bazen **antipattern'ler** öneriyor
- Performance optimization manuel gerekir
- Güvenlik (auth, validation) **mutlaka** review

⚠️ **Vendor lock-in:**
- Lovable'ı bıraktığında kodu indirebilirsin
- Ama bazı entegrasyonlar (Supabase, Vercel) bağımlı

## Para Kazanma — Lovable + V0 ile

### 1. Freelance Web Sitesi
- KOBİ landing page → 2.500-7.500 TL/sayfa
- Bir Cumartesi günü 3-4 müşteri = haftalık 10K-30K TL
- Bkz "[AI ile Para Kazanma](/blog/ai-ile-para-kazanma-2026/)"

### 2. Hızlı MVP Üretim
- Startup'lara "fikri 1 haftada canlı" hizmet
- 15.000-50.000 TL/proje

### 3. Template Satış
- Lovable/V0 ile template'ler üret
- Themeforest, Gumroad'da sat
- 50-200 USD/template

### 4. SaaS Lansman
- Kendi mikro-SaaS fikrini Lovable'da hızla MVP yap
- Test et, geliştir
- Aylık $5-50 abonelik

## Alternatifler

| Araç | Lovable/V0'a göre |
|---|---|
| **Bolt.new** | StackBlitz'in alternatifi, full-stack |
| **Cursor** | IDE içinde AI, geliştirici odaklı (bkz [Cursor rehberi](/blog/cursor-ide-turkce-rehber-2026/)) |
| **Replit Agent** | Cloud IDE + AI agent |
| **Webflow + AI** | Görsel design tool, code yok |
| **Framer + AI** | Daha tasarım odaklı |

## Sıkça Sorulan Sorular

**❓ Geliştirici değilim, gerçekten kullanabilir miyim?**
Lovable — evet, %80'i no-code. V0 — hayır, biraz React bilmek gerekir.

**❓ Üretilen kod production'a uygun mu?**
Hızlı MVP için evet. Ölçekli SaaS için bir geliştirici review etmeli.

**❓ Türkçe içerik üretir mi?**
Evet, Türkçe prompt'lardan Türkçe içerik üretir. Layout/tasarım kelimesiz.

**❓ Mobile app yapar mı?**
Hayır — sadece web (Lovable: Next.js, V0: React).

**❓ Free planda yeter mi?**
Test için yeter. Profesyonel kullanım için $20/ay gerekir.

## Sonuç

2026'da **"web sitesi yapamıyorum çünkü kodlayamıyorum"** mazereti **bitti**. Lovable ile bir Pazar sabahı **çalışan SaaS** elinde olur. V0 ile bir saat içinde **modern landing page**.

Önerim: Bu hafta sonu Lovable'ı **Free planda** dene. Bir fikrin çalıştığını görmek motivasyonu inanılmaz değiştirir.

Detay için [Cursor IDE rehberi](/blog/cursor-ide-turkce-rehber-2026/) — kod yazmaya geçince Cursor en iyi araç. [AI ile Para Kazanma](/blog/ai-ile-para-kazanma-2026/) — web sitesi üretim gelir yolları.

---

*Bu rehber bağımsızdır. Lovable veya Vercel ile resmi bağlantımız yoktur. Mayıs 2026 itibarıyla geçerli.*
