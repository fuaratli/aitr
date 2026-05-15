---
title: 'AI ile Blog Otomasyonu: Pasif Gelir İçin Make.com + ChatGPT Sistemi'
description: 'Ayda 60 makale, sıfır manuel iş. Make.com, ChatGPT API ve WordPress ile blog otomasyon sistemi. Gerçek vaka, gerçek gelir, gerçek tuzaklar.'
pubDate: 'May 15 2026'
category: 'para-kazanma'
tags: ['otomasyon', 'make.com', 'pasif gelir', 'blog', 'wordpress']
---

**Esra**, 31 yaşında, ürün yöneticisi. Geçen yıl şubat'ta evden bir niş site kurdu: "Türkiye Camping rehberi". Hedef: aylık 5.000 TL pasif gelir. Bugün **27.000 TL/ay** kazanıyor, ve **haftada 2 saat** çalışıyor.

Sırrı: **AI otomasyon sistemi**. Bu yazıda Esra'nın kurduğu sistemi adım adım anlatıyorum. Gerçek (anonim) bir vaka çalışması, gerçek araçlar, gerçek tuzaklar.

⚠️ **Önemli baştan uyarı:** Bu sistemin etik tartışmalı yönü var (kalite kontrolsüz AI içerik internet'i kirletiyor). Önerim: bunu **akıllıca + denetimli** uygula, yoksa hem okuyucuya zarar verirsin hem Google ceza verir.

## Esra'nın Sistemi — Yüksek Resim

```
[1. Anahtar Kelime Listesi]
    ↓ (haftalık)
[2. ChatGPT API → Konu + Plan]
    ↓
[3. ChatGPT API → Tam Makale]
    ↓
[4. Midjourney API → Hero Görsel]
    ↓
[5. Esra'nın İnsan İncelemesi (15 dk)]
    ↓
[6. Make.com → WordPress'e Yayımla]
    ↓
[7. Cloudflare → Cache + Hızlandır]
    ↓
[8. Adsense + Affiliate → Gelir]
```

Toplam: **Esra'nın haftalık 2 saati** = 60 makale/ay = haftalık 10 anahtar kelime hedef.

## Adım Adım — Sistem Kurulumu

### Adım 1: Anahtar Kelime Listesi (1 saat, başlangıçta)

Esra **3 ay süreyle** araştırma yaptı, niş ve uzun-kuyruk anahtar kelime listesi çıkardı:
- "Kapadokya kampçılık nereden başlanır"
- "Karadeniz yaylalarda kamp yerleri 2025"
- "Telçatı kampı malzeme listesi" 
- ...vs ~300 anahtar kelime

Araçlar:
- **Ahrefs** (pahalı, $99/ay) — uzun-kuyruk için
- **Ubersuggest** ($30/ay) — uygun fiyat
- **Google Keyword Planner** (ücretsiz, Google Ads hesabı ile)
- **AnswerThePublic** (ücretsiz)

Liste oluşturuldu, **Google Sheets'e** kaydedildi.

### Adım 2: ChatGPT API ile Konu Planı

Make.com'da otomasyon kurdu:
- Her hafta Pazartesi saat 09:00'da çalışıyor
- Sheets'ten 10 yeni anahtar kelime alıyor
- Her biri için ChatGPT API'ye prompt gönderiyor:

```
Anahtar kelime: [X]
1500-2500 kelime blog yazısı için detaylı plan oluştur.
- Başlık (SEO uyumlu, 60 karakter)
- Meta description
- 6-10 H2 başlık
- Her başlık altında 3-4 H3 alt başlık fikri
- Önerilen iç bağlantılar
- Önerilen affiliate ürünler (Trendyol kampçılık)

JSON formatında dön.
```

ChatGPT JSON döndürüyor → Sheets'e kaydediliyor.

### Adım 3: Tam Makale Üretimi

Plan onaylandığında (Esra'nın 5 dakika incelemesi), Make.com **uzun makaleyi** üretiyor. Tek seferde GPT'nin 4K token limitini aşmak için **parça parça**:
- Her H2 başlık için ayrı çağrı
- Çağrıların sonucu birleştiriliyor
- Final düzenleme için "stil tutarlılığı kontrol et" çağrısı

Ortalama **5-7 ChatGPT API çağrısı / makale** = $0.30-0.50 / makale.

### Adım 4: Görsel Üretimi

Make.com → Midjourney API (veya DALL·E 3 API):
- Hero görsel (1200x630)
- 2-3 in-content görsel

Maliyet: $0.10-0.20/makale.

### Adım 5: İnsan İncelemesi (Esra'nın 15 dakikası)

Bu **kritik** adım. AI içeriği denetimsiz yayınlamak felaket. Esra:
1. Makaleyi **hızlıca okuyor** (15 dk)
2. **Hata, yanlış bilgi, "AI tonu"** olan kısımları düzeltiyor
3. Kişisel deneyim ekliyor: "Geçen yaz Kapadokya'da kamp yaptığımda..."
4. Yerel detay/güncel veri ekliyor
5. Affiliate linklerini kontrol ediyor

Bu 15 dakikalık inceleme **kaliteyi 10x artırıyor** ve makaleyi "AI mı insan mı?" sorusundan kurtarıyor.

### Adım 6: WordPress'e Yayımlama

Make.com → WordPress REST API:
- Yeni makale taslağı oluştur
- Başlık, içerik, kategori, etiketler, hero görsel, meta description
- Yayın tarihini otomatik dağıt (günde 1-2 makale)
- Esra son kontrol → "Publish" basıyor

### Adım 7: SEO + Cache

- **Yoast SEO** plugin otomatik meta optimizasyonu
- **Cloudflare** edge cache → hız
- **Internal linking** plugin → otomatik bağlama

### Adım 8: Para

Esra'nın gelir karması:
- **Adsense:** %60 (aylık ~16K TL)
- **Trendyol Affiliate:** %25 (~7K TL) — çadır, uyku tulumu, ısıtıcı satışı
- **Hepsiburada Affiliate:** %10 (~3K TL)
- **Booking.com Affiliate:** %5 (~1K TL) — kamp tatil köyleri

**Toplam: ~27K TL/ay.**

## Maliyet — Esra'nın Gerçek Tablosu

### Bir Defalık Yatırım
- Domain (.com): 400 TL/yıl
- WordPress hosting: 800 TL/yıl
- WordPress tema: 1.000 TL
- Plugin'ler (Yoast premium, otomasyon): 1.500 TL/yıl

### Aylık
- **Make.com Pro:** $16/ay (10 operations otomasyonu için)
- **ChatGPT API:** $30/ay (60 makale)
- **Midjourney:** $30/ay (görseller için)
- **Ubersuggest:** $30/ay (keyword research)
- **Cloudflare Pro:** $20/ay (cache + bot koruması)
- **Toplam: ~$130/ay = ~4.700 TL/ay**

Net kar: **27K - 5K = 22K TL/ay** (Esra'nın haftalık 2 saatlik emeği için).

## Bu Sistemi Sen Kurmalı mısın?

### Evet, eğer:
- En az 3 ay yatırım yapabileceğin bir nişe **gerçek ilgin** var
- Aylık 5K TL yatırımı kaldırabiliyorsun
- 6 ay sabırlı bekleyebilirsin (ilk para 3-6 ay sonra)
- Editör gözüyle bakabiliyorsan (AI hataları görüp düzeltme)

### Hayır, eğer:
- "Bedava para" arıyorsan (hayır, **iş gerektirir**)
- Bütçen sınırlıysa (aylık 5K yatırım çok)
- Editörel beceri/disiplin yoksa (kalitesiz içerik = Google cezası)
- AI içerik etik olarak rahatsız ediyorsa (anlaşılır)

## Etik ve Riskler

⚠️ **Google'ın AI içerik politikası:**
- "Spam, otomatik üretilmiş içerik" yasak
- Ama "AI **destekli**, insan denetiminde" içerik **kabul ediliyor**
- Esra'nın 15 dk insan incelemesi bu sınırı koruyor

⚠️ **AdSense politikası:**
- "Düşük kaliteli içerik" reddedilir
- Yine: kalite kontrol şart

⚠️ **Okuyucu deneyimi:**
- "AI yazısı" hissi veren site = okuyucu güvenmez
- Esra'nın eklediği kişisel deneyimler kritik

⚠️ **AI dedektörler:**
- ChatGPT, GPTZero gibi dedektörler tespit edebilir
- İnsan düzeltmesi dedektörü atlatma şansını çok artırır

## Yaygın Hatalar

❌ **İnsan incelemesini atlamak** — kalite çöker, Google ceza, gelir biter
❌ **Çok dar niş seçmek** — anahtar kelime hızla biter
❌ **Çok geniş niş** — rekabet aşırı, sıralama yok
❌ **Hız >> Kalite** — Google son güncellemelerle sürekli düşük kalitelileri eziyor
❌ **Affiliate odaklı içerik fazla** — satış agresif olunca dönüşüm düşer
❌ **Sadece İngilizce kopyala-yapıştır çeviri** — Google'ın yeni "Helpful Content" güncellemesi yakalar

## Para Hesabı — Realistik Beklenti

Senin yapacaksan bekleyebileceğin:

### Ay 1-3 (yatırım dönemi)
- Aylık maliyet: 5K TL
- Aylık gelir: 0
- Net: -5K TL × 3 = -15K TL toplam

### Ay 4-6 (ilk meyveler)
- Aylık gelir: 1-3K TL
- Net: -2 to -4K TL/ay

### Ay 7-12 (büyüme)
- Aylık gelir: 5-15K TL
- Net: 0 to +10K TL/ay

### Yıl 2 (Esra'nın aşaması)
- Aylık gelir: 15-50K TL
- Net: +10 to +45K TL/ay

**Tahmin:** İlk yıl muhtemelen kâr 0 veya negatif. 2. yıldan itibaren ciddi gelir.

## Alternatif — Az AI, Çok İnsan

Eğer tam otomasyon rahatsız ediyorsa, dengeli yaklaşım:
- **Haftada 5 makale** (60/ay değil)
- Her makaleyi **2 saatlik insan editörlüğü** ile
- AI sadece **taslak ve görsel** için, içerik insan
- Maliyet ⏬ ama gelir ⏫ (kalite > nicelik)

Bu Esra'nın **2. yıl yapacağı şey** zaten — büyüdükçe insan dokunuşunu artırma.

## Sonuç

AI ile blog otomasyonu **gerçek bir gelir yolu**, ama **gerçek bir iş**. Bedava değil, sihirli değil. 1 yıl yatırım sonrası pasif gelir hayalini gerçekleştirebilirsin.

Önerim: **Önce bir kişisel blog ile 6 ay test et** ekonomik baskı altına girmeden. İşliyorsa sisteme yatırım yap, işlemiyorsa öğrenmiş olursun.

Diğer AI gelir yolları için [AI ile Para Kazanma](/blog/ai-ile-para-kazanma-2026/), prompt şablonları için [ChatGPT 50 Prompt](/blog/chatgpt-50-hazir-prompt-kopyala-yapistir/).

---

*Hikâye gerçek bir kişiye dayanmaktadır; isim ve detaylar gizlilik için değiştirilmiştir. Gelir rakamları örnek, garanti değildir. Mayıs 2026.*
