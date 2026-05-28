---
title: 'Bolt.new vs Lovable vs V0: AI ile Web Sitesi Yapma — Kim Lider?'
description: 'Bolt.new, Lovable ve Vercel V0 — üç AI website oluşturucu test edildi. Hangisi gerçek deploy edilebilir kod üretiyor, hangisi sadece prototip?'
pubDate: 'May 20 2026'
category: 'karsilastirma'
tags: ['bolt', 'lovable', 'v0', 'ai web sitesi', 'no-code']
noindex: true
---

"Ben bir web sitesi yapmak istiyorum" diyenler için son 2 yılda **AI website builder** ekosistemi patladı. Bolt.new, Lovable ve V0 — üç büyük rakip. Aynı 5 projeyi üçünde de yaptım. Hangisi gerçekten **deploy edilebilir kod** üretiyor, hangisi sadece **güzel prototip**?

## Önce: AI Website Builder Ne?

Klasik:
- Kod yaz → host'a yükle → site açıl
- Süre: günler/haftalar

AI Builder:
- "İstanbul restoranlar listesi" yaz
- AI sana **gerçek React kodu** + **deploy edilmiş site** verir
- Süre: 5-30 dakika

3 büyük oyuncu:
- **Bolt.new** (StackBlitz) — full-stack, tarayıcıda
- **Lovable** (Lovable AI) — yeni, Sweden, agresif yatırım
- **V0** (Vercel) — Next.js + shadcn/ui odaklı

## Test Projeleri

1. **Restoran listeleme sitesi** — basit CRUD
2. **Portfolio site** — kişisel, tek sayfa
3. **SaaS landing page** — pazarlama
4. **Blog uygulaması** — markdown + tags
5. **Müşteri yönetim aracı** — dashboard

Her birini 3 araçta yaptım.

## 1. Bolt.new (StackBlitz)

**Erişim:** [bolt.new](https://bolt.new)
**Fiyat:** Free 150K token/gün, Pro $20/ay 10M token
**Stack:** React, Next.js, Vue, Svelte — sen seçersin

### Felsefe
**Sandbox-in-browser**. Tarayıcıda tam bir Node.js ortamı çalışıyor (WebContainers). Sen prompt veriyorsun, AI kod yazıyor, **anında çalışıyor**.

### Test Sonuçları

| Proje | Çalışıyor mu? | Deploy edilebilir mi? |
|---|---|---|
| Restoran liste | ✅ Mükemmel | ✅ Vercel'e direkt |
| Portfolio | ✅ İyi | ✅ |
| SaaS landing | ✅ Çok iyi | ✅ |
| Blog uygulaması | ⚠️ Backend basit kaldı | ⚠️ Düzeltme gerek |
| CRM dashboard | ⚠️ Karmaşık state hatalı | ⚠️ Manuel müdahale |

### Güçlü
- **Anında çalışıyor** — preview canlı
- **Tam kontrol** kod erişimi
- **Vercel deploy** tek tık
- Frontend + Backend (Express)

### Zayıf
- Database bağlama zor (manuel Supabase config)
- Karmaşık state'te kayıyor
- Pahalı (10M token Pro)

## 2. Lovable

**Erişim:** [lovable.dev](https://lovable.dev)
**Fiyat:** Free (sınırlı), Pro $20/ay, Scale $50
**Stack:** React + Supabase + Tailwind (sabit)

### Felsefe
**Conversational** — AI'la sohbet ederek site oluşturuyorsun. "Bir login sayfası ekle" → ekledi. "Şu butonun rengini mor yap" → değişti.

### Test Sonuçları

| Proje | Çalışıyor mu? | Deploy edilebilir mi? |
|---|---|---|
| Restoran liste | ✅ Çok iyi | ✅ |
| Portfolio | ✅ Çok iyi | ✅ |
| SaaS landing | ✅ Mükemmel | ✅ |
| Blog uygulaması | ✅ Çok iyi (Supabase ile) | ✅ |
| CRM dashboard | ✅ İyi (en sürpriz) | ✅ |

### Güçlü
- **Database otomatik** — Supabase backend hazır gelir
- **Auth otomatik** — kullanıcı giriş zaten kurulu
- **Conversation flow** çok doğal
- En **non-developer dostu**
- **Türkçe prompt** anlıyor

### Zayıf
- Sadece React + Supabase (esneklik yok)
- Custom backend logic için zor
- Visual customization sınırlı

### Kim için ideal
- Non-developer girişimci
- Hızlı MVP isteyen
- Database + auth gereken uygulamalar

## 3. V0 (Vercel)

**Erişim:** [v0.dev](https://v0.dev)
**Fiyat:** Free (sınırlı), Pro $20/ay (ChatGPT Plus benzeri)
**Stack:** Next.js 14+ + shadcn/ui (sabit)

### Felsefe
**Component-first**. Bir UI istiyorsan tarif et, V0 kod versin. Tüm site yerine **bloklar** üretir, sen birleştirirsin.

### Test Sonuçları

| Proje | Çalışıyor mu? | Deploy edilebilir mi? |
|---|---|---|
| Restoran liste | ✅ İyi | ⚠️ Backend manuel |
| Portfolio | ✅ Mükemmel | ✅ |
| SaaS landing | ✅ Mükemmel | ✅ |
| Blog uygulaması | ⚠️ UI iyi, backend yok | ⚠️ |
| CRM dashboard | ✅ UI mükemmel | ⚠️ State manuel |

### Güçlü
- **En estetik** çıktı — shadcn/ui premium görünüm
- **Component reusable** — kopyala-yapıştır kendi projende
- **Next.js best practices** — production-ready
- Vercel deploy tek tık

### Zayıf
- **Backend yok** — UI lider, logic değil
- **Sınırlı stack** (Next.js sabit)
- Conversation flow Lovable'dan zayıf

### Kim için ideal
- Geliştirici — kendi projesi için UI yapmak istiyor
- Vercel + Next.js ekosisteminde
- Component library kurmak isteyenler

## Karşılaştırma Tablosu

| Özellik | Bolt.new | Lovable | V0 |
|---|---|---|---|
| Stack esnekliği | ✅ Çok | ❌ Sabit | ❌ Sabit |
| Database otomatik | ⚠️ Manuel | ✅ Supabase | ❌ Manuel |
| Auth otomatik | ⚠️ Manuel | ✅ Var | ❌ Manuel |
| UI estetik | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Conversation kalitesi | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Geliştirici dostu | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Non-dev dostu | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| Türkçe prompt | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Fiyat | $20 | $20 | $20 |

## Karar — Hangisi Sana?

### Non-developer girişimci
**Lovable** — Database + auth otomatik. Sen sadece konuş, MVP gelir.

### Web developer, kendi projesi
**V0** + Cursor IDE → premium UI komponent üret, kendin entegre et. Bkz "[Cursor rehberi](/blog/cursor-ide-turkce-rehber-2026/)".

### Tam kontrol + her stack
**Bolt.new** — esneklik en üst.

### Hızlı portfolio / landing
**V0** — Vercel deploy + premium UI.

## Sınırlamalar — Hepsi İçin

⚠️ **Hiçbiri şu konularda iyi değil:**
1. **Karmaşık business logic** — payment, multi-step workflows
2. **Custom integrations** — özel API entegrasyonları
3. **Yüksek trafik** — performans optimizasyonu yok
4. **Security audit** — sen kontrol etmeli
5. **Long-term maintenance** — kodu öğren, yoksa bağımlı olursun

**Pratik:** AI builder ile **MVP yap**, sonra **bir geliştiriciyle çalış** kodu professional yapsın.

## Para Hesabı — TR Pazarı

**Geleneksel web ajansı (5 sayfa landing):**
- Tasarım + geliştirme: 15K-50K TL
- Süre: 2-6 hafta
- Aylık bakım: 1K-3K TL

**Bolt/Lovable/V0 ile:**
- Tek ay abonelik: ~700 TL ($20)
- Süre: 1 günden 1 haftaya
- MVP hazır

Tasarruf: **%90+**. Ama: **geliştirici kalitesinde değil**. Profesyonel proje için **hibrit** yaklaşım önerilir.

## Sonuç

3 aracın **hepsi gerçek**, hiçbiri sahte değil. Ama farklı kişiler/projeler için.

İlk denemen önerim:
1. **Lovable Free** dene 3 gün — non-dev'sen aşıksın
2. Beğendiysen Pro $20
3. Geliştirici varsa ek olarak V0 dene (premium UI için)

Önemli not: **AI builder ile başla, gerektiğinde gerçek geliştiriciye geç.** Sıfırdan başlayan birinin **en hızlı yolu** bu.

İlgili: [Cursor IDE](/blog/cursor-ide-turkce-rehber-2026/), [AI ile Para Kazanma](/blog/ai-ile-para-kazanma-2026/).

---

*Bağımsız test, Mayıs 2026 itibarıyla geçerli.*
