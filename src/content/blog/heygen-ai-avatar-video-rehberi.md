---
title: 'HeyGen ile AI Avatar Video Yapmak: Yüzünü Göstermeden Profesyonel Sunum'
description: 'HeyGen ile fotoğrafından AI avatar üret, Türkçe konuşsun, video yap. Sıfırdan ilk videona 20 dakika. Reklamcılar, eğitmenler, içerik üreticileri için tam rehber.'
pubDate: 'May 14 2026'
category: 'rehber'
tags: ['heygen', 'ai avatar', 'video', 'türkçe', 'rehber']
---

Aklımda bir soru vardı: Yüzümü kameraya göstermek istemediğim bir konuda **profesyonel bir video** nasıl çekerim? Yorgun bir Pazartesi sabahı, kahveye dökülmüş şirketin saçlarımla, "satış konuşması" videosu çekmek pek davetkar değil.

HeyGen'i o sabah denedim. Bir fotoğrafımı yükledim, kısa bir ses örneği verdim, bir senaryo yazdım. 12 dakika sonra ekranda **benim avatarım**, **benim sesim** ile sunumumu yapıyordu.

Bu yazıda HeyGen'i sıfırdan profesyonel kullanıma kadar anlatıyorum. **Türkçe** desteği, **gerçek kullanım senaryoları**, **bütçeler**, ve **etik sınırlar**.

## HeyGen Nedir, Niye Kullanılır?

HeyGen, **fotoğraf/video kayıtlarından AI avatar üreten** bir platform. ABD merkezli, 2020 kuruluşlu, 2024'te 60M ARR'a (yıllık tekrarlayan gelir) ulaştığı için Sequoia ve diğer büyük yatırımcılardan finansman aldı.

**Yaptıkları:**
- Statik fotoğraftan **dudak senkronlu konuşan avatar** üretir
- 30 saniye-2 dakikalık video kaydından **özel avatar** klonlar
- Metin → avatar konuşması (200+ dilde, Türkçe dahil)
- Hazır 500+ stüdyo avatarı (kendi yüzünü kullanmak istemeyenler için)

**Kullanım alanları:**
- 🎓 Online eğitim/kurs videoları
- 💼 Şirket içi eğitim videoları
- 📺 YouTube içerik üretimi
- 🛒 Ürün tanıtım reklamları
- 🌐 Multi-dil dublaj
- 📱 Sosyal medya kısa video
- 🔧 SaaS ürün demo'ları

## Erişim ve Fiyat

| Plan | Aylık | Ne içerir |
|---|---|---|
| **Free** | $0 | 1 dakika/ay video, watermark var, custom avatar yok |
| **Creator** | $24 | 15 dk/ay, watermark yok, **1 custom avatar** |
| **Team** | $69/kullanıcı | 30 dk/ay/kullanıcı, **3 custom avatar** |
| **Enterprise** | Talep et | Sınırsız + API + özel destek |

TR'den kart ödemesi sorunsuz. Creator planı aylık ~850 TL.

**İlk hangisini al?** Test için **Free** dene 1-2 hafta. Ciddi kullanım için **Creator** ($24/ay) çoğu kişiye yeterli.

## İlk Avatar Videon — 20 Dakikalık Yolculuk

### Dakika 0-3: Hesap aç
[heygen.com](https://heygen.com) → "Start free" → Google ile giriş. Tour'u atla, doğrudan **Create Video**'ya git.

### Dakika 3-8: Avatar seçimi (3 yol)

#### Yol A: Hazır stüdyo avatarı (en hızlı)
Galeride 500+ avatar var. "Female business casual", "Male in office" gibi filtreleyebilirsin.
- Avantaj: Anında kullanım, kaliteli
- Dezavantaj: Senin değil

#### Yol B: Photo Avatar (orta hız)
Yüksek kaliteli **vesikalık tarzı** fotoğrafını yükle. AI senin yüzünü canlandırıyor.
- Süre: 3-5 dakika
- Fotoğraf koşulları: net, iyi aydınlatılmış, düz arka plan, doğal ifade
- Sonuç: dudak senkronu iyi, ama kafa hareketi sınırlı

#### Yol C: Instant Avatar (custom voice)
30 saniye - 2 dakika video kaydı yükle. AI hem yüzünü hem sesini öğrenir.
- Süre: 5-10 dakika işleme
- Video koşulları: 1080p+, sabit kafa pozisyonu, doğal konuşma, sessiz ortam
- Sonuç: en kaliteli, "gerçek sen" hissi

**İlk denemen için Yol B önerilir.** Tek fotoğrafla başla, ilerde Yol C'ye geç.

### Dakika 8-12: Senaryo
Avatar seçildi. Sağda script editör var.

ChatGPT/Claude ile script üret:
```
Bir HeyGen avatar videosu için 90 saniyelik script yaz.
Konu: [SENİN KONUN]
Tonu: Profesyonel ama sıcak, eğitici
Hedef kitle: [KİME ANLATIYORSUN]
Türkçe, doğal konuşma dili (yazılı dil değil — okunduğunda kulak alışkın olsun)
İlk cümle 'kanca' olsun (izleyiciyi yakalasın)
```

Bkz "[ChatGPT 50 Hazır Prompt](/blog/chatgpt-50-hazir-prompt-kopyala-yapistir/)" — daha fazla şablon.

### Dakika 12-15: Ses ayarları

**Voice** sekmesi:
- **Hazır TR ses** seç (varsayılan) — birkaç seçenek var
- VEYA **Custom voice** — kendi sesini yüklediysen
- VEYA **ElevenLabs entegrasyonu** — HeyGen Pro'da var, ElevenLabs API key gerekli (bkz "[ElevenLabs rehberi](/blog/elevenlabs-turkce-ses-kloncuma-rehberi/)")

**Konuşma hızı:** Genelde 1.0x. Daha hızlı istersen 1.1-1.2x dene.

**Pauses** ekleyebilirsin script'e `[pause 1s]` yazarak.

### Dakika 15-18: Render

**Generate** veya **Submit** bas. HeyGen videoyu işliyor:
- 60 saniye video → 3-5 dakika
- 5 dakika video → 15-20 dakika

Free planda watermark var (sağ alt). Creator+ planlarda yok.

### Dakika 18-20: İndir + paylaş

Render bitince **Download** (MP4, 1080p). Doğrudan YouTube'a yüklemeye, podcast'e eklemeye, Instagram Reels'e koymaya hazır.

## Türkçe Performansı — Net Test

Aynı 8 cümleyi 5 farklı avatar/ses kombinasyonunda test ettim:

| Test | Doğal Akış | Vurgu | Dudak Senkronu | Genel |
|---|---|---|---|---|
| Hazır avatar + hazır TR ses | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | İyi |
| Photo avatar + hazır TR ses | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | İyi |
| Hazır avatar + ElevenLabs custom voice | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | Mükemmel |
| Instant avatar + custom voice | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Mükemmel |
| Hazır avatar + Translate (otomatik dublaj) | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | Vasat |

**Sonuç:** ElevenLabs ile entegre, custom voice + instant avatar = altın kombinasyon. Bütçen sıkıysa hazır avatar + hazır TR ses de kullanılabilir.

## 5 Profesyonel Senaryo

### Senaryo 1: SaaS Demo Videosu
- Avatar: Photo (CEO/founder)
- Süre: 60-90 saniye
- Format: "Sorun + Çözüm + CTA"
- Maliyet: $24/ay (Creator)

### Senaryo 2: Online Kurs İçeriği
- Avatar: Instant (öğretmenin)
- Süre: 5-10 dakika/video, 20+ video
- Maliyet: $69/ay (Team) çünkü çok video lazım

### Senaryo 3: Reklam (Türkçe)
- Avatar: Hazır + TR ses
- Süre: 15-30 saniye
- Maliyet: $24/ay yeterli

### Senaryo 4: Multi-dil Şirket Sunumu
- Avatar: Photo (yöneticinin)
- Aynı script 3 dilde — TR, EN, AR
- HeyGen "Translate" özelliği bu işi otomatik yapar
- Maliyet: $69/ay (Team)

### Senaryo 5: Eğitim Kurumu — Hoca Sanal Avatarı
- Avatar: Instant (her hocanın)
- Konular ay ay güncellenir
- Maliyet: Enterprise

## Etik ve Sınırlar — KRİTİK

HeyGen ile **muhtemelen yapmaman gereken şeyler:**

### ❌ Başkasının yüzüyle avatar
HeyGen, **başkasının fotoğrafıyla avatar üretmeni** sözleşmesel olarak yasaklıyor. Tespit edilirse hesap kapatılır + yasal sorun.

### ❌ Bilinen ünlülerin sesi/yüzü
Otomatik moderasyon yakalıyor, ünlü tanıma sistemleri var.

### ❌ Deepfake / yanıltıcı içerik
Politikacıların yüzüyle, sahte haberler — yasal suç.

### ✅ Kendi yüzün
Her zaman.

### ✅ İzin alarak başkasının yüzü
Yazılı izin gerek, HeyGen platformuna da bildirim.

### ⚠️ Stüdyo avatar (hazır)
Bunlar gerçek aktörlerin imzaladığı izinli yüzler. **Reklam, eğitim için OK ama bireysel iddialar (örn. "ben şuyum") için kullanma**.

## HeyGen Alternatifleri

| Araç | HeyGen'a göre |
|---|---|
| **Synthesia** | Endüstri lideri, daha pahalı ($30+/ay), kurumsal odaklı |
| **D-ID** | Daha eski, görsel kalite biraz geride, ucuz |
| **Hour One** | Reklam odaklı, küçük müşteri tabanı |
| **Akool** | Çinli, ucuz, kalite değişken |
| **Pictory** | Stock video + voiceover, avatar değil |

HeyGen kalite ve TR desteği için hâlâ lider.

## Para Kazanma — HeyGen ile

Gerçek iş modelleri:

### 1. Influencer Olmadan İçerik Kanalı
Yüzünü göstermeden YouTube/TikTok kanalı kur. Bkz "[AI ile YouTube Video](/blog/ai-ile-youtube-video-yapma-rehberi/)".

### 2. Şirket Eğitim Videoları
KOBİ'lere "AI ile şirket içi eğitim videoları çekiyoruz" hizmeti. Geleneksel stüdyo $5K, sen $500'a.

### 3. Çok-Dilli Reklam Üretimi
Bir reklamı 5 dile çevirme. Geleneksel: 5 ayrı aktör. HeyGen: 1 avatar, 5 dil.

### 4. SaaS Demo Üretim
Yeni başlayan SaaS'ların ürün tanıtım videoları. Aylık 5-10 müşteri = 30-50K TL.

### 5. Sosyal Medya Kısa Video Servisi
Esnafa, küçük markalara "haftalık Reels/TikTok video paketleri". Aylık retainer modeli.

Detay: "[AI ile Para Kazanma](/blog/ai-ile-para-kazanma-2026/)".

## Sıkça Sorulan Sorular

**❓ Avatar gerçekten gerçek gibi görünüyor mu?**
Yakın çekimde "uncanny valley" var (hala bir tık yapay). Geniş çekim + iyi aydınlatma + doğal tonlama ile %85'i ayırt edilmiyor.

**❓ Türkçe karakterler düzgün okunur mu?**
Çoğunlukla evet. "ş", "ç", "ı" doğru. Bazı uzun bileşik kelimelerde aksak olabilir — script'i parçala.

**❓ Üretilen video kalitesi?**
1080p standart, 4K Enterprise planda.

**❓ Mobile uygulama var mı?**
Var (iOS + Android) ama web çok daha güçlü.

**❓ Lifetime fiyat var mı?**
Yok. Sadece subscription.

## Sonuç: HeyGen Senin İçin mi?

**Evet, eğer:**
- Kameraya çıkmak istemiyorsan ama video üretmen gerekiyorsa
- Çok dilli içerik üretiyorsan
- Stüdyo bütçen yoksa
- Eğitmen/danışman/SaaS girişimcisisen

**Hayır, eğer:**
- Kişisel marka kuruyorsan (samimi gerçek video daha iyi)
- Spor/aksiyon videoları (avatar sınırlı)
- Bütçe $20'nin altında

Önerim: **Free planda 3-5 video** üret, kaliteyi test et. Sevdiysen Creator'a geç.

Diğer AI video araçları için "[Sora 2 vs Veo 3](/blog/sora-2-vs-veo-3-ai-video-karsilastirma/)" ve "[Araçlar Dizini](/araclar)" sayfasına bak.

---

*Bu rehber bağımsızdır. HeyGen ile resmi bağlantımız yoktur. Mayıs 2026 itibarıyla geçerli.*
